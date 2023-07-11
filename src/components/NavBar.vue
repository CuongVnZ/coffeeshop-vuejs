<script setup>
</script>

<template>
  <header>
    <div class="announcement text-white">
      <div class="container">
        <div class="row">
          <div class="text-center p-1 ">
            <p class="mb-0">Free Shipping on Orders Over $10</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top border">
      <div class="container">
          <a class="navbar-brand" href="#">DREAMY COFFEE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <router-link to="/" class="nav-link" aria-current="page">HOME</router-link>
              <router-link to="/products" class="nav-link">PRODUCTS</router-link>
              <router-link to="/register" class="nav-link">REGISTER</router-link>
            </div>
            <router-link to="/cart">
              <button class="btn btn-outline-dark">
                  <i class="bi-cart-fill me-1"></i>
                  <span class="badge bg-dark text-white ms-1 rounded-pill">4</span>
              </button>
            </router-link>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
	data() {
		return {
			products: []
		}
	},
	created() {
		fetch('/data/products.json')
		.then(response => response.json())
		.then(data => {
			this.$store.dispatch('setProducts', data);
			// log state
			console.log(this.$store.state.products);
		})
	}, 
}
</script>

<style scoped>
.announcement {
  background-color: #000000;
}
</style>
