<script setup>
</script>

<template>
<div class="container mt-5 min-vh-100">
  <div class="row">
    <div class="col-md-3">
      <div class="card">
        <div class="card-body text-center">
          <img src="https://via.placeholder.com/150" class="rounded-circle mb-3" alt="Avatar">
          <h5 class="card-title">{{ this.$store.state.user.currentUser.username }}</h5>
          <p class="card-text">0947023873</p>
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
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">Member ranking</h5>
          <p class="card-text">Brozen</p>
        </div>
      </div>
    </div>
    <div class="col-md-9">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#edit-info">Edit Information</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#order-history">Order History</a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="edit-info">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" value="John Doe">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" value="johndoe@example.com">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input type="tel" class="form-control" id="phone" value="(123) 456-7890">
            </div>
            <button type="submit" class="btn btn-outline-dark flex-shrink-0">Save Changes</button>
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
                <td>Delivered</td>
              </tr>
              <tr>
                <td>#456</td>
                <td>June 15, 2023</td>
                <td>$50.00</td>
                <td>Delivered</td>
              </tr>
              <tr>
                <td>#789</td>
                <td>May 20, 2023</td>
                <td>$75.00</td>
                <td>Shipped</td>
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
      errors: [],
      usernameInput: '',
      passwordInput: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
