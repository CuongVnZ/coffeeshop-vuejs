<template>
  <div class="container my-5 min-vh-100">
    <h1 class="text-center mb-5">PRODUCTS</h1>
    <div class="row">
      <div class="col-md-4 border-right">
        <div class="sticky-top filter">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title mb-3">SEARCH BY</h3>
              <div class="form-group">
                <label for="type">Category:</label>
                <select class="form-control mb-3" id="type" v-model="filter.type">
                  <option value="">All</option>
                  <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="name">Product Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Enter product name..." v-model="filter.name">
              </div>
              <div class="row form-group mb-3">
                <label for="price">Price range:</label>
                <!-- <div class="col-sm-5">
                  <input type="number" class="form-control" id="priceMin" v-model="filter.priceMin">
                </div>
                <label class="col-sm-2 text-center">to</label>
                <div class="col-sm-5">
                  <input type="number" class="form-control col-6" id="priceMax" v-model="filter.priceMax">
                </div> -->
                <label class="col-md-12 text-center">From ${{ formatNum(filter.priceMin) }} to ${{ formatNum(filter.priceMax) }}</label>
                <input type="range" class="form-range" min="0" max="100" step="1" v-model="filter.priceMax">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
					<Products :filter="filter"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '../components/Products.vue';
import { publicRequest } from '../requestMethod.js';

export default {
  components: {
    Products
  },
	data () {
		return {
      filter: {
        name: '',
        type: '',
        priceMin: 0,
        priceMax: 1000000,
        paginated: true,
        itemsPerPage: 12,
      },
      categories: []
		}
	},
  created() {
    publicRequest.get('/products/categories')
    .then(res => {
      this.categories = res.data;
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    clickCallback (pageNum) {
      this.currentPage = pageNum;
    },
    formatNum(num) {
      return num.toLocaleString();
    }
  }
}
</script>

<style scoped>
.filter {
  top: 80px;
}

.border-right {
  border-right: 2px solid #89898935;
}
</style>
