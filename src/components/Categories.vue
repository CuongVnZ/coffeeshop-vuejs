<script setup>
</script>

<template>
	<!-- Main Products Highlight -->
	<section class="products mt-5">
		<div class="row text-center">
			<div class="col-sm-12 mb-2">
				<h1 class="fw-bold">TOP CATEGORIES</h1>
			</div>
			<div class="col-sm-4 cat-container my-2" v-for="category in categories" :key="category.id">
				<img :src="category.img" class="img-fluid cat-img" :alt="category.title">
				<div class="cat-info container p-3">
					<h1 class="text-light my-3">{{category.title}}</h1>
					<router-link to="/products">
						<button class="btn btn-outline-light flex-shrink-0">SHOP NOW</button>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			categories: []
		}
	},
	created() {
		fetch('/data/categories.json')
		.then(response => response.json())
		.then(data => {
			this.categories = data
		})
	}
}
</script>

<style scoped>
.cat-container {
    position: relative;
}

.cat-container:hover .cat-img {
	filter: brightness(0.6);
}

.cat-container:hover .cat-info {
	opacity: 1;
}

.cat-info {
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;
}

.cat-img {
	transition: all 0.3s ease-in-out;
	border-radius: 30px;
	box-shadow: 5px 5px #4141415c;
}
</style>
