<script setup>
defineProps({
	item: {
		type: Object,
		default: {}
	}
})
</script>

<template>
	<div class="card mb-3">
		<div class="row g-0">
			<div class="col-md-3">
				<img :src="product.img" class="img-fluid">
			</div>
			<div class="col-md-9">
				<div class="card-body">
					<h5 class="card-title">{{ product.title }}</h5>
					<p class="card-text">{{ product.desc }}</p>
					<p class="card-text"><small class="text-muted">Price: ${{ product.price }}</small></p>
					<div class="d-flex justify-content-between align-items-center">
						<div class="btn-group">
							<button type="button" class="btn btn-sm btn-outline-secondary">-</button>
							<button type="button" class="btn btn-sm btn-outline-secondary">{{ item.amount }}</button>
							<button type="button" class="btn btn-sm btn-outline-secondary">+</button>
						</div>
						<button type="button" class="btn btn-sm btn-outline-danger">Remove</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
		product: {}
    }
  },
  created () {
	// fetch product from store using item.id
	this.product = this.$store.state.products.find(product => product.id === this.item.id);
  }
}
</script>

<style scoped>
</style>
