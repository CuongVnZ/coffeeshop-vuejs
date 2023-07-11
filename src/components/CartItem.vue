<script setup>
defineProps({
	product: {
		type: Object,
		default: {}
	}
})
</script>

<template>
	<div class="card mb-3">
		<div class="row g-0">
			<div class="col-md-3">
				<img src="https://firebasestorage.googleapis.com/v0/b/astra-cfshop.appspot.com/o/1669448920003tra-nhan-da_484810_cbb05dd5a8a4441780c16832e38bfcbd.png?alt=media&token=ed47eb9d-70ba-43bc-9904-a41d50f60131" alt="Product image" class="img-fluid">
			</div>
			<div class="col-md-9">
				<div class="card-body">
					<h5 class="card-title">Product Name</h5>
					<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem id consequat suscipit, neque libero placerat leo, id fringilla ligula mauris quis quam.</p>
					<p class="card-text"><small class="text-muted">Price: $99.99</small></p>
					<div class="d-flex justify-content-between align-items-center">
						<div class="btn-group">
							<button type="button" class="btn btn-sm btn-outline-secondary">-</button>
							<button type="button" class="btn btn-sm btn-outline-secondary">1</button>
							<button type="button" class="btn btn-sm btn-outline-secondary">+</button>
						</div>
						<button type="button" class="btn btn-sm btn-outline-danger">Remove</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
