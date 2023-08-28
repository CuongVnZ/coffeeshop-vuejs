<template>
	<!-- Product section-->
	<div class="container min-vh-100">
		<section class="py-5">
			<div class="px-4 px-lg-5 my-5">
				<Spinner v-if="products.isLoading && !this.products.data.length" />
				<div class="row gx-4 gx-lg-5 align-items-center" v-if="product">
					<div class="col-md-5"><img class="card-img-top mb-5 mb-md-0" :src="product.img" :alt="product.title" /></div>
					<div class="col-md-7">
						<div class="small mb-1">SKU: {{ product.pid }}</div>
						<h1 class="display-5 fw-bolder">{{ product.title }}</h1>
						<div class="fs-5 mb-5">
							<span>${{ product.price }}</span>
						</div>
						<p class="lead">{{ product.desc }}</p>
						<!-- Type choose (Size) -->
						<div class="col-md-12 mb-3">
							<label class="mb-1">Choose your type:</label>
							<div class="col-md">
								<button type="button" class="btn btn-outline-dark me-1 mb-1" v-for="item in product.types" :key="item" :class="{'active': currentType === item}" @click="currentType = item">{{ item }}</button>
							</div>
						</div>
						<!-- Extra option (multiple choose) -->
						<div class="col-md-12 mb-3" v-if="product.options.length">
							<label class="mb-1">Choose your options:</label>
							<div class="col-md">
								<button type="button" class="btn btn-outline-dark me-1 mb-1" v-for="item in product.options" :key="item" :class="{'active': currentOptions.includes(item)}" @click="toggleOptions(item)">{{ item }}</button>
							</div>
						</div>
						<!-- Quantity -->
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
		<section class="py-5 bg-light" v-if="product">
			<div class="px-4 px-lg-5 my-5">
				<h2 class="fw-bolder mb-4">Related products</h2>
				<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
					<Products :filter="{limit: 4, type: product.category}"/>
				</div>
			</div>
		</section>
	</div>

</template>

<script>
import Products from '../components/Products.vue';
import Spinner from '../components/Spinner.vue';
import { mapState } from 'vuex';

export default {
	components: {
		Products,
		Spinner
	},
	data () {
		return {
			product: undefined,
			quantity: 1,
			currentType: undefined,
			currentOptions: []
		}
	},
	computed: {
		...mapState({
			products: state => state.products
		})
	},
	created () {
		this.loadProduct();
	},
	watch: {
		'$route.params.id': function (id) {
			this.loadProduct();
		},
		'products.isLoading': function (isLoading) {
			if (!isLoading) {
				this.loadProduct();
			}
		}
	},
	methods: {
		toggleOptions (item) {
			if (this.currentOptions.include(item)) {
				this.currentOptions = this.currentOptions.filter((option) => {
					return option !== item;
				});
			} else {
				this.currentOptions.push(item);
			}
		},
		loadProduct() {
			if (this.products.isLoading && !this.products.data.length) return;

			this.product = this.products.data.find((product) => {
				return product.pid === this.$route.params.id;
			});
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
