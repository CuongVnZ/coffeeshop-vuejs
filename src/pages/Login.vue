<template>
  <div class="container min-vh-100">
    <div class="row my-5 justify-content-center">
      <div class="col-md-5 mb-3">
        <div v-if="errors.length" class="alert alert-danger" role="alert">
          <ul>
              <li v-for="e in errors">{{e}}</li>
          </ul>
        </div>
        <div class="card">
            <h5 class="card-header">Login</h5>
            <div class="card-body">
                <form>
                  <div class="mb-3">
                      <label for="usernameInput" class="form-label">Username</label>
                      <input type="text" class="form-control" name="usernameInput" id="usernameInput" v-model="usernameInput" placeholder="Enter your username">
                  </div>
                  <div class="mb-3">
                      <label for="passwordInput" class="form-label">Password</label>
                      <input type="password" class="form-control" name="passwordInput" id="passwordInput" v-model="passwordInput" placeholder="Enter your password">
                  </div>
                  <button type="button" class="btn btn-outline-dark float-end" @click="checkForm" :disabled="isLoading">Login</button>
                </form>
            </div>
            <div class="card-footer text-center d-flex justify-content-between">
                <small><router-link to="/register">Does not have an account?</router-link></small>
                <small><a href="#">Forgot password?</a></small>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { publicRequest } from '../requestMethod.js';

export default {
  data() {
    return {
      errors: [],
      usernameInput: '',
      passwordInput: '',
      isLoading: false,
    }
  },
  methods: {
    checkForm(e) {
      var result = true;
      this.errors = [];

      // Validate username
      if (!this.usernameInput.trim()) {
          result = false;
          this.errors.push("Please enter a username.");
      }

      // Validate password
      if (!this.passwordInput.trim()) {
          result = false;
          this.errors.push("Please enter a password.");
      }

      if (!result) {
          e.preventDefault(); // prevent form submission	
          // scroll to top
          window.scrollTo(0, 0);
      } else {
          this.handleLogin();
      }
    },

    handleLogin() {
      this.isLoading = true;
      const data = {
        username: this.usernameInput,
        password: this.passwordInput
      }
      publicRequest.post('/auth/login', data)
      .then(response => {
        this.$store.dispatch('setUser', response.data);
        this.$store.dispatch('addNotification', "You have logged in.");
        this.$router.push('/profile');

      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
        this.$store.dispatch('addNotification', "Login failed.");
      })
    }
  }
}
</script>

<style scoped>
</style>
