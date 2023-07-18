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
</script>

<style scoped>
</style>
