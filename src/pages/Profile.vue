<template>
  <div class="container mt-5 min-vh-100">
    <div class="row mb-5" v-if="user">
      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body text-center">
            <img src="https://i.pravatar.cc/150" class="rounded-circle mb-3" alt="Avatar">
            <h5 class="card-title">{{ user.fullname }} <i class="bi bi-patch-check-fill"></i></h5>
            <p class="card-text">{{ user.phone }}</p>
            <!-- more information -->
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-column">
                <span>Member since</span>
                <span>{{ new Date(user.createdAt).toLocaleDateString() }}</span>
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
            <p class="card-text">Brozen ({{ user.points }}/1000)</p>
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
                <label for="fullname" class="form-label">Name</label>
                <input type="text" class="form-control" id="fullname" v-model="nameInput">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" v-model="emailInput">
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
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
            <History :userId="user._id"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import History from '../components/History.vue';
import { userRequest } from '../requestMethod.js';

export default {
  components: {
    History
  },
  data() {
    return {
      user: this.$store.getters.getUser,
      nameInput: '',
      emailInput: '',
      phoneInput: '',
      shippingAddressInput: '',
    }
  },
  mounted() {
    if(this.user == null || this.user == undefined || this.user._id == undefined) {
      this.$router.push('/login')
    } else {
      this.nameInput = this.user.fullname;
      this.emailInput = this.user.email;
      this.phoneInput = this.user.phone;
      this.shippingAddressInput = this.user.shippingAddress;
    }
  },
  methods: {
    saveChanges() {
      var token = this.$store.getters.getToken;
      userRequest(token).put('/users/'+this.user._id, {
        fullname: this.nameInput,
        email: this.emailInput,
        phone: this.phoneInput,
        shippingAddress: this.shippingAddressInput
      })
      .then(res => {
        console.log(res.data);
        this.$store.dispatch('updateUser', res.data);
        this.user = res.data;
        this.$store.dispatch('addNotification', 'Changes saved.');
      })
      .catch(err => {
        console.log(err);
        this.$store.dispatch('addNotification', 'Error: ' + err);
      })
    },

  }
}
</script>

<style scoped>
</style>
