<script setup>
import { publicRequest, userRequest } from '../requestMethod';
</script>

<template>
  <div class="container my-5">
    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span>Your cart</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm" v-for="item in items">
            <div>
              <h6 class="my-0">{{ item.title }}</h6>
              <small class="text-body-secondary">Quantity: {{ item.quantity }}</small>
            </div>
            <span class="text-body-secondary">${{ item.price * item.quantity }}</span>
          </li>

          <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div class="text-success">
              <h6 class="my-0">Discount</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">−$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${{ total }}</strong>
          </li>
        </ul>

        <div class="card p-2 mb-3">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Discount code">
            <button type="submit" class="btn btn-outline-secondary">Redeem</button>
          </div>
        </div>
        <div class="card p-2">
          <textarea class="form-control" id="comment" rows="3" placeholder="Enter your order notes..." v-modal="noteInput"></textarea>
        </div>
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Shipping address</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="" v-model="user.name" required>
            </div>
            <div class="col-sm-6">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required>
              </div>
            </div>
            <div class="col-12">
              <label for="email" class="form-label">Email<span class="text-body-secondary">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" v-model="user.email">
            </div>
            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" v-model="user.shippingAddress" required>
            </div>
            <div class="col-12">
              <label for="address2" class="form-label">Phone Number <span class="text-body-secondary"></span></label>
              <input type="text" class="form-control" id="address2" placeholder="Mobile phone..." v-model="user.phone">
            </div>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Payment Method</h4>
          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" v-model="methodInput" checked required>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" v-model="methodInput" required>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" v-model="methodInput" required>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <!-- <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required>
              <small class="text-body-secondary">Full name as displayed on card</small>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
            </div>
          </div> -->

          <hr class="my-4">

          <button class="w-100 btn btn-outline-dark flex-shrink-0 btn-lg" type="button" @click="checkout">Continue to checkout</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      user: {},
      noteInput: '',
      methodInput: 'Paypal',
      total: 0,
      shipping: 9.99,
    }
  },
  mounted() {
    this.items = this.$store.getters.getCart;
    this.user = this.$store.getters.getUser;
  },
  methods: {
    checkout() {
      this.calculateTotal();
      userRequest.post('/orders', {
        customerId: this.user._id,
        items: this.items,
        shipping: 9.99,
        shippingAddress: this.user.shippingAddress,
        note: this.noteInput,
        paymentMethod: this.methodInput,
        total: this.total,
      })
      .then(res => {
        console.log(res);
        this.$store.dispatch('addNotification', 'Order placed successfully.');
        this.$store.dispatch('resetCart');
        this.$router.push('/receipt/' + res.data._id);
      })
      .catch(err => {
        console.log(err);
        this.$store.dispatch('addNotification', 'Order failed.');
      })
    },
    calculateTotal() {
        this.subTotal = this.$store.getters.getCartTotal;
        this.total = this.subTotal + this.shipping;
        this.total = this.total.toFixed(2);
    }
  }
}
</script>

<style>
</style>