<template>
	<div class="product-container">
		<div class="product-circle"/>
		<img class="product-image" :src="product.img" :alt="product.title"/>
		<div class="product-info">
			<label class="product-title"> {{ product.title }} </label>
			<div class="product-icons">
				<div class="product-icon" v-add-to-cart="{ $store, item: {...product, quantity: 1} }">
					<i class="bi bi-cart-plus-fill"></i>
				</div>
				<router-link :to="'/product/' + product.pid" class="text-dark text-decoration-none">
					<div class="product-icon">
						<i class="bi bi-search"></i>
					</div>
				</router-link>
				<div class="product-icon">
					<i class="bi bi-heart-fill"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			default: {}
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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
	border-radius: 10px;
}

.product-title {
	color: rgb(0, 0, 0);
	background-color: rgba(255, 255, 255, 0.8);
	text-align: center;
	border-radius: 10px;
	margin-bottom: 5px;
	padding: 3px;
}

.product-icons {
	display: flex;
	cursor: pointer;
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
