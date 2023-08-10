<script setup>
import Notification from '../components/Notification.vue';
</script>

<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <Notification v-for="notification in notifications.data" :toastId="notification.id" :desc="notification.desc"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState({
			notifications: state => state.notifications
		})
	},
}
</script>

<style scoped>
</style>
