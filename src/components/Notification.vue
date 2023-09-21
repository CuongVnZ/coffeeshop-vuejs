<template>
  <div :id="String(toastId)" class="toast fade" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000">
    <div class="toast-header">
      <i class="bi bi-app-indicator me-2"></i>
      <strong class="me-auto">Notification</strong>
      <small>0 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{ desc }}
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap';

export default {
  props: {
    toastId: {
      type: Number,
      default: -1
    },
    desc: {
      type: String,
      default: 'Hello, world! This is a toast message.'
    }
  },
  mounted () {
    var toast = Toast.getOrCreateInstance(document.getElementById(this.toastId))
    toast.show()
  }
}
</script>

<style scoped>
</style>
