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
          <a class="navbar-brand font-bold" href="#">DREAMYCOFFEE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/" class="nav-link" aria-current="page">HOME</router-link>
              <router-link to="/products" class="nav-link">PRODUCTS</router-link>
            </div>
            <div class="navbar-nav ms-auto">
              <router-link to="/profile" class="nav-link">
                <button class="btn btn-outline-dark">
                    <i class="bi bi-person-circle"></i>
                </button>
              </router-link>
              <!-- <router-link to="/cart" class="nav-link">
                <button class="btn btn-outline-dark">
                    <i class="bi bi-heart-fill me-1"></i>
                    <span class="badge bg-dark text-white ms-1 rounded-pill">4</span>
                </button>
              </router-link> -->
              <router-link to="/cart" class="nav-link">
                <button class="btn btn-outline-dark">
                    <i class="bi bi-cart-fill me-1"></i>
                    <span class="badge bg-dark text-white ms-1 rounded-pill">{{this.$store.getters.getCartSize}}</span>
                </button>
              </router-link>
            </div>
          </div>
      </div>
  </nav>
</template>

<script>
</script>

<style scoped>
.announcement {
  background-color: #000000;
}
</style>
