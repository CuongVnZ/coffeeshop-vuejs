<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Notifications from './components/Notifications.vue';
</script>

<template>
  <NavBar />
  <router-view />
  <Footer />
  <Notifications />
</template>

<script>
export default {
	beforeCreate() {
		fetch('https://eshop-mongo-api.vercel.app/api/products/')
		.then(response => response.json())
		.then(data => {
			this.$store.dispatch('setProducts', data);
		})
	}
}
</script>

<style scoped>
</style>
