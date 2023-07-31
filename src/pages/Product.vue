<script setup>
import Products from '../components/Products.vue';
</script>

<template>
	<!-- Product section-->
	<section class="py-5">
		<div class="container px-4 px-lg-5 my-5">
			<div class="row gx-4 gx-lg-5 align-items-center">
				<div class="col-md-5"><img class="card-img-top mb-5 mb-md-0" :src="product.img" :alt="product.title" /></div>
				<div class="col-md-7">
					<div class="small mb-1">SKU: {{ product.pid }}</div>
					<h1 class="display-5 fw-bolder">{{ product.title }}</h1>
					<div class="fs-5 mb-5">
						<span>${{ product.price }}</span>
					</div>
					<p class="lead">{{ product.desc }}</p>
					<div class="d-flex">
						<div class="btn-group me-3">
							<button type="button" class="btn btn-outline-dark" @click="decrease">-</button>
							<button type="button" class="btn btn-outline-dark">{{ quantity }}</button>
							<button type="button" class="btn btn-outline-dark" @click="increase">+</button>
						</div>
						<button class="btn btn-outline-dark flex-shrink-0" type="button" v-add-to-cart="{ $store, item: {...product, quantity} }">
							<i class="bi-cart-fill me-1"></i>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Related items section-->
	<section class="py-5 bg-light">
		<div class="container px-4 px-lg-5 my-5">
			<h2 class="fw-bolder mb-4">Related products</h2>
			<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
				<Products :limit=4 :type="product.category"/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data () {
		return {
			data: {},
			product: {
				pid: '',
				title: '',
				desc: '',
				price: 0,
				img: '',
				category: ''
			},
			quantity: 1
		}
	},
	created () {
		this.loadProduct();
	},
	watch: {
		'$route.params.id': function (id) {
			this.loadProduct();
		},
		'$store.getters.getProductSize': function () {
			this.loadProduct();
		}
	},
	methods: {
		loadProduct() {
			this.product = this.$store.getters.getProductById(this.$route.params.id)
			if (this.product === undefined) {
				this.$router.push('/');
			}
		},
		increase() {
			this.quantity++
		},
		decrease() {
			if (this.quantity > 1) this.quantity--
		}
	}
}
</script>

<style scoped>
</style>
