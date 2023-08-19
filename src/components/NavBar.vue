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
              <router-link to="/" class="nav-link">NEWS</router-link>
            </div>
            <div class="navbar-nav ms-auto">
              <router-link to="/login" class="nav-link" v-if="!this.$store.getters.getUser">
                <button class="btn btn-outline-dark">
                  <i class="bi bi-door-open-fill"></i>
                  Login
                </button>
              </router-link>
              <!-- <router-link to="/profile" class="nav-link" v-if="this.$store.getters.getUser">
                <button class="btn btn-outline-dark">
                  <i class="bi bi-person-circle"></i>
                </button>
              </router-link> -->
              <li class="nav-item dropdown" v-if="this.$store.getters.getUser">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="https://i.pravatar.cc/300" width="40" height="40" class="rounded-circle">
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/profile" class="dropdown-item"><i class="bi bi-person-circle mx-1"></i>Dashboard</router-link>
                  <button class=" dropdown-item text-danger" @click="logout"><i class="bi bi-door-closed-fill mx-1"></i>Logout</button>
                </div>
              </li>
              <!-- <a class="nav-link" v-if="this.$store.getters.getUser">
                <button class="btn btn-outline-danger" v-if="this.$store.getters.getUser" @click="logout">
                  <i class="bi bi-door-closed-fill"></i>
                  Logout
                </button>
              </a> -->
              <router-link to="/cart" class="nav-link">
                <button class="btn btn-outline-dark">
                    <i class="bi bi-cart-fill me-1"></i>
                    <span class="badge bg-dark text-white ms-1 rounded-pill">{{ this.$store.getters.getCartSize }}</span>
                </button>
              </router-link>
            </div>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$store.dispatch('addNotification', 'Logged out successfully');
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.announcement {
  background-color: #000000;
}
</style>
