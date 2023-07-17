<script setup>
</script>

<template>
	<!-- Main Products Highlight -->
	<section class="products mt-5">
		<div class="row text-center">
			<div class="col-md-12 mb-2">
				<h1 class="fw-bold">TOP CATEGORIES</h1>
			</div>
			<div class="col-4 cat-container" v-for="category in categories" :key="category.id">
				<img :src="category.img" class="img-fluid cat-img" :alt="category.title">
				<div class="cat-info">
					<h1 class="cat-title">{{category.title}}</h1>
					<button class="cat-button btn btn-outline-light flex-shrink-0">SHOP NOW</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  watch: {
  },
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

.cat-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cat-title {
    color: white;
    margin-bottom: 20px;
}

.cat-img {
	filter: brightness(0.9);
}
</style>
