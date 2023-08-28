<template>
	<Spinner v-if="products.isLoading"/>
	<p v-if="getItems.length === 0">No products found.</p>
	<Product v-else v-for="product in getItems" :key="product.id" :product="product" />

	<paginate
        v-if="filter.paginated"
        :page-count="filtered.length/filter.itemsPerPage"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      />
</template>

<script>
import Spinner from '../components/Spinner.vue';
import Product from '../components/Product.vue';
import Paginate from 'vuejs-paginate-next';
import { mapState } from 'vuex';

export default {
	props: {
		filter: {
			type: Object,
			default: {
				limit: -1,
				name: '',
				type: '',
				priceMin: 0,
				priceMax: 99,
				paginated: false,
				itemsPerPage: 12,
			}
		},
	},
	data() {
		return {
			filtered: [],
			
			currentPage: 1
		}
	},
	components: {
		Spinner,
		Product,
		Paginate
	},
	computed: {
		...mapState({
			products: state => state.products
		}),
		getItems: function() {
      let current = this.currentPage * this.filter.itemsPerPage;
      let start = current - this.filter.itemsPerPage;
      return this.filtered.slice(start, current);
    }
	},
	created() {
		this.filterProducts();
	}, 
	watch: {
		filter: {
			handler: function() {
				this.filterProducts();
			},
			deep: true
		},
		// watch this.$store.state.products
		'products.isLoading': function() {
			this.filterProducts();
		}
	},
  methods: {
    filterProducts() {
			console.log("Filtering products")
			// Filter products
			this.filtered = this.products.data.filter((product) => {
				return this.filterCondition(product);
			});
			if (this.limit !== -1) {
				this.filtered = this.filtered.slice(0, this.filter.limit);
			}

			return this.filtered;
    },
    filterCondition(product) {
			if (this.filter.name && !product.title.toLowerCase().includes(this.filter.name.toLowerCase())) {
				return false;
			}
			if (this.filter.type && product.category !== this.filter.type) {
				return false;
			}
			if (this.filter.priceMin && product.price < this.filter.priceMin) {
				return false;
			}
			if (this.filter.priceMax && product.price > this.filter.priceMax) {
				return false;
			}
			return true;
    },
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    }
  }
}
</script>

<style scoped>
.pagination {
	margin: 10px;
	justify-content: center;
  cursor: pointer;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
