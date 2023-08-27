<template>
	<Spinner v-if="products.isLoading"/>
	<Product v-if="!products.length" v-for="product in filtered" :key="product.id" :product="product" />
	<p v-if="products.length === 0">No products found.</p>
</template>

<script>
import Spinner from '../components/Spinner.vue';
import Product from '../components/Product.vue';
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
				priceMax: 99
			}
		}
	},
	data() {
		return {
			filtered: [],
		}
	},
	components: {
		Spinner,
		Product
	},
	computed: {
		...mapState({
			products: state => state.products
		})
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
    }
  }
}
</script>

<style scoped>
</style>
