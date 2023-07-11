<script setup>

</script>

<template>
	<div id="carouselExample" class="carousel slide">
		<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="/images/slide-1.png" class="d-block w-100" alt="Slide 1">
				</div>
				<div class="carousel-item">
					<img src="/images/slide-2.png" class="d-block w-100" alt="Slide 2">
				</div>
				<div class="carousel-item">
					<img src="/images/slide-3.png" class="d-block w-100" alt="Slide-3">
				</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</template>

<style scoped>
</style>
