<script setup>
import Notification from '../components/Notification.vue';
</script>

<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <Notification v-for="notification in $store.state.notifications" :toastId="notification.id" :desc="notification.desc"/>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$store.state.notifications)
  },

}
</script>

<style scoped>
</style>
