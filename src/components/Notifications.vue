<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <Notification v-for="notification in notifications.data" :toastId="notification.id" :desc="notification.desc"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Notification from '../components/Notification.vue';

export default {
  components: {
    Notification
  },
	computed: {
		...mapState({
			// Map `notifications` from store
			notifications: state => state.notifications
		})
	},
}
</script>

<style scoped>
</style>
