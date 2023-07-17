<script setup>
import CartItem from '../components/CartItem.vue';
</script>

<template>
<div class="container my-5">
    <div class="row min-vh-100">
        <!-- Product list column -->
        <div class="col-md-8">
            <h1>SHOPPING CART</h1>
            <hr>
            <CartItem v-for="item in cart" :key="item.id" :item="item" />
        </div>
        <!-- Summary and checkout column -->
        <div class="col-md-4">
            <div class="card mb-3 sticky-top summary">
                <div class="card-body">
                    <h5 class="card-title">Order Summary</h5>
                    <ul class="list-group list-group-flush my-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Subtotal
                            <span>${{total}}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Shipping
                            <span>Free</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Tax
                            <span>$9.99</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Discount code" aria-label="Discount code" aria-describedby="button-addon2">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Apply</button>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Total</strong>
                            <strong>${{ total + 9.99}}</strong>
                        </li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-outline-dark flex-shrink-0">Checkout</button>
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
			cart: [],
            total: 0
		}
	},
	created() {
        // get cart from store
        this.cart = this.$store.state.cart;

        // foreach id in data, get product from store and add to total
        this.cart.forEach(item => {
            let product = this.$store.state.products.find(product => product.id === item.id);
            this.total += parseFloat(product.price) * item.amount;
        });
	}, 
}
</script>

<style scoped>
.summary {
    top: 80px;
}
</style>
