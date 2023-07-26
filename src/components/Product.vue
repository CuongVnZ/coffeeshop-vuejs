<script setup>
defineProps({
	product: {
		type: Object,
		default: {}
	}
})
</script>

<template>
	<div class="product-container">
		<div class="product-circle"/>
		<img class="product-image" :src="product.img" :alt="product.title"/>
		<div class="product-info">
			<div class="product-icon" @click="addToCart(product.id)">
				<i class="bi bi-cart-plus-fill"></i>
			</div>
			<router-link :to="'/product/'+product.pid" class="text-dark text-decoration-none">
				<div class="product-icon">
					<i class="bi bi-search"></i>
				</div>
			</router-link>
			<div class="product-icon">
				<i class="bi bi-heart-fill"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		addToCart(id) {
			this.$store.dispatch('addToCart', {...this.product, quantity: 1});
			this.$store.dispatch('addNotification', "You added an item to your cart.");
		}
	}
}
</script>

<style scoped>
.product-container {
	flex: 1;
	margin: 5px;
	min-width: 250px;
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f7f4ee;
	position: relative;
	border-radius: 10px;
}

.product-container:hover .product-info {
  opacity: 1;
}

.product-circle {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
}

.product-image {
	height: 75%;
	border-radius: 10%;
	z-index: 2;
}

.product-info {
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
	border-radius: 10px;
}

.product-icon {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transform:all 0.5s ease;
}

.product-icon:hover {
  background-color: #f7d8a7;
  transform: scale(1.1);
}
</style>
