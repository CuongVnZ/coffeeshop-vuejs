<script setup>
import Slider from '../components/Slider.vue';
import Categories from '../components/Categories.vue';
import Newsletter from '../components/Newsletter.vue';
import Products from '../components/Products.vue';
import BarChart from '../components/BarChart.vue';
</script>

<template>
	<!-- Slider -->
	<Slider />

	<div class="container my-5">
		<!-- Categories -->
		<Categories />

		<hr/>
		<!-- Product Lists -->
		<section class="product-lists mt-5">
			<div class="row text-center">
				<div class="col-md-12 mb-2">
						<h1 class="fw-bold">TRENDING PRODUCTS</h1>
				</div>
				<BarChart />
				<Products :limit=5 />
			</div>
		</section>

		<hr/>
		<!-- Our story -->
		<section class="our-story mt-5">
			<div class="row text-center">
				<div class="col-md-12 mb-2">
					<h1 class="fw-bold">OUR STORY</h1>
				</div>
				<div class="col-md-7 my-auto p-5 bg-light rounded shadow-sm">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio elit, sit amet eleifend velit. Sed ac metus quis risus hendrerit.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio elit, sit amet eleifend velit. Sed ac metus quis risus hendrerit.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio elit, sit amet eleifend velit. Sed ac metus quis risus hendrerit.</p>
				</div>
				<div class="col-md-5">
					<img src="/images/our-story.png" alt="Our Story Image" class="rounded img-fluid">
				</div>
			</div>
		</section>
	</div>

	<!-- Newsletter -->
	<Newsletter />
</template>

<script>
</script>

<style scoped>
</style>
