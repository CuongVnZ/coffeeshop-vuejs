<script setup>
import Product from '../components/Product.vue';

defineProps({
	limit: {
		type: Number,
		default: -1
	},
	name: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: ''
	},
	priceMin: {
		type: Number,
		default: -1
	},
	priceMax: {
		type: Number,
		default: -1
	}
})
</script>

<template>
	<div v-if="products.isLoading">
		<div class="col-md-12 text-center">
			<div class="spinner-border text-dark" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>
	<Product v-if="!products.isLoading" v-for="product in filtered" :key="product.id" :product="product" />
	<p v-if="products.length === 0">No products found.</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			filtered: [],
		}
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
		name: function() {
			this.filterProducts();
		},
		type: function() {
			this.filterProducts();
		},
		price: function() {
			this.filterProducts();
		},
		limit: function() {
			this.filterProducts();
		},
		// watch this.$store.state.products
		'products.isLoading': function() {
			this.filterProducts();
		}
	},
  methods: {
    filterProducts() {
			console.log("Filter products")
			this.filtered = this.products.data.filter((product) => {
				return this.filterCondition(product);
			});
			if (this.limit !== -1) {
				this.filtered = this.filtered.slice(0, this.limit);
			}

			return this.filtered;
    },
    filterCondition(product) {
			if (this.name !== '' && !product.title.toLowerCase().includes(this.name.toLowerCase())) {
				return false;
			}
			if (this.type !== '' && product.category !== this.type) {
				return false;
			}
			if (this.price !== -1 && product.price > this.price) {
				return false;
			}
			return true;
    }
  }
}
</script>

<style scoped>
</style>
