<script setup>

</script>

<template>
<div class="container mt-5 min-vh-100">
  <div class="row">
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
              <input type="text" class="form-control" id="name" :value="user.name">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" :value="user.email">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input type="tel" class="form-control" id="phone" :value="user.phone">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Shipping Address</label>
              <input type="tel" class="form-control" id="phone" :value="user.shippingAddress">
            </div>
            <button type="submit" class="btn btn-outline-dark flex-shrink-0 float-end">Save Changes</button>
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
                <td>#456</td>
                <td>June 15, 2023</td>
                <td>$50.00</td>
                <td><label class="bg-success text-white rounded px-3">Delivered</label></td>
              </tr>
              <tr>
                <td>#789</td>
                <td>May 20, 2023</td>
                <td>$75.00</td>
                <td><label class="bg-warning rounded px-3">Shipped</label></td>
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
      user: {}
    }
  },
  mounted() {
    if(this.$store.getters.getUser === null) {
      this.$router.push('/login')
    } else {
      this.user = this.$store.getters.getUser;
      console.log(this.user)
    }
  }
}
</script>

<style scoped>
</style>
