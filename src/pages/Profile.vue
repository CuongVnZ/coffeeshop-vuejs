<script setup>
import { userRequest } from '../requestMethod.js';
</script>

<template>
<div class="container mt-5 min-vh-100">
  <div class="row mb-5">
    <div class="col-md-3">
      <div class="card mb-3">
        <div class="card-body text-center">
          <img src="https://via.placeholder.com/150" class="rounded-circle mb-3" alt="Avatar">
          <h5 class="card-title">{{ user.name }} <i class="bi bi-patch-check-fill"></i></h5>
          <p class="card-text">{{ user.phone }}</p>
          <!-- more information -->
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
              <span>Member since</span>
              <span>July 2023</span>
            </div>
            <div class="d-flex flex-column">
              <span>Order</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <!-- ranking card [Brozen, Gold, Diamond] -->
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Member ranking</h5>
          <p class="card-text">Brozen</p>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" style="width: 75%">75%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9">
      <ul class="nav nav-tabs mb-3">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#edit-info">Edit Information</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#order-history">Order History</a>
        </li>
      </ul>
      <div class="tab-content mb-3">
        <div class="tab-pane fade show active" id="edit-info">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Username</label>
              <input type="text" class="form-control" id="name" :value="user.username" disabled>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="nameInput">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="emailInput">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input type="tel" class="form-control" id="phone" v-model="phoneInput">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Shipping Address</label>
              <input type="tel" class="form-control" id="phone" v-model="shippingAddressInput">
            </div>
            <button type="button" class="btn btn-outline-dark flex-shrink-0 float-end" @click="saveChanges">Save Changes</button>
          </form>
        </div>
        <div class="tab-pane fade" id="order-history">
          <table class="table">
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#123</td>
                <td>July 1, 2023</td>
                <td>$100.00</td>
                <td><label class="bg-success text-white rounded px-3">Delivered</label></td>
              </tr>
              <tr>
                <td>#789</td>
                <td>May 20, 2023</td>
                <td>$75.00</td>
                <td><label class="bg-warning rounded px-3">Shipped</label></td>
              </tr>
              <tr v-for="order in orders">
                <td><router-link :to="'/receipt/' + order._id">#{{order._id}}</router-link></td>
                <td>{{ order.createdAt }}</td>
                <td>${{ order.total }}</td>
                <td><label class="bg-secondary text-white rounded px-3">{{ order.status }}</label></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      nameInput: '',
      emailInput: '',
      phoneInput: '',
      shippingAddressInput: '',

      orders: []
    }
  },
  mounted() {
    if(this.$store.getters.getUser === null) {
      this.$router.push('/login')
    } else {
      this.user = this.$store.getters.getUser;
      this.nameInput = this.user.name;
      this.emailInput = this.user.email;
      this.phoneInput = this.user.phone;
      this.shippingAddressInput = this.user.shippingAddress;
    }

    userRequest.get('/orders/find/' + this.user._id)
    .then(res => {
      this.orders = res.data;
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    saveChanges() {
      userRequest.put('/users/'+this.user._id, {
        name: this.nameInput,
        email: this.emailInput,
        phone: this.phoneInput,
        shippingAddress: this.shippingAddressInput
      })
      .then(res => {
        console.log(res.data);
        this.$store.dispatch('setUser', res.data);
        this.user = res.data;
        this.$store.dispatch('addNotification', 'Changes saved.');
      })
      .catch(err => {
        this.$store.dispatch('addNotification', 'Error: '+err.response.data.message);
      })
    },

  }
}
</script>

<style scoped>
</style>
