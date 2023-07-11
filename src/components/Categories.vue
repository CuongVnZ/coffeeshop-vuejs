<template>
	<!-- Main Products Highlight -->
	<section class="products mt-5">
		<div class="row text-center">
			<div class="col-md-12 mb-2">
				<h1 class="fw-bold">TOP CATEGORIES</h1>
			</div>
			<!-- <div class="col-md-4 h-100">
				<img src="/images/cat1.jpg" class="img-fluid" alt="Product Image">
			</div> -->
			<div class="col-md-4 p-3" v-for="category in categories" :key="category.id">
				<img :src="category.img" class="img-fluid" :alt="category.title">
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
</style>
