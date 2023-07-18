<script setup>
defineProps({
	toastId: {
		type: Number,
		default: -1
	},
	desc: {
		type: String,
		default: 'Hello, world! This is a toast message.'
	}
})
</script>

<template>
  <div :id="this.toastId" class="toast fade" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000">
    <div class="toast-header">
      <i class="bi bi-app-indicator me-2"></i>
      <strong class="me-auto">Notification</strong>
      <small>0 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{ this.desc }}
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
	this.toast = new bootstrap.Toast(document.getElementById(this.toastId))
	this.toast.show()
  }
}
</script>

<style scoped>
</style>
