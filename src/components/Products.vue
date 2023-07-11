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
	price: {
		type: Number,
		default: -1
	}
})
</script>

<template>
	<Product v-for="product in products" :key="product.id" :product="product" />
	<p v-if="products.length === 0">No products found.</p>
</template>

<script>
export default {
  props: {
  },
	data() {
		return {
			data: [],
			products: []
		}
	},
	created() {
		fetch('/data/products.json')
		.then(response => response.json())
		.then(data => {
			this.data = data
			this.filterProducts();
		})
	}, 
	watch : {
		name: function (val) {
			this.filterProducts();
		},
		type: function (val) {
			this.filterProducts();
		},
		price: function (val) {
			this.filterProducts();
		},
		limit: function (val) {
			this.filterProducts();
		}
	},
  methods: {
    filterProducts() {
      this.products = this.data.filter((product) => {
        return this.filterCondition(product);
      });

			// limit products
			if (this.limit !== -1) {
				this.products = this.products.slice(0, this.limit);
			}
    },
    filterCondition(product, cnt) {
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
