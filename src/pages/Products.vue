<script setup>
import Products from '../components/Products.vue';
</script>

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
                <select class="form-control mb-3" id="type" v-model="type">
                  <option value="">All</option>
                  <option value="coffee">Coffee</option>
                  <option value="tea">Tea</option>
                  <option value="milk-tea">Milk Tea</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="name">Product Name:</label>
                <input type="text" class="form-control" id="name" v-model="name">
              </div>
              <div class="row form-group mb-3">
                <label for="price">Price (min - max):</label>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="priceMin" v-model="priceMin">
                </div>
                <label class="col-sm-2 text-center">-</label>
                <div class="col-sm-5">
                  <input type="text" class="form-control col-6" id="priceMax" v-model="priceMax">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
					<Products :name="name" :type="type" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
      type: '',
			name: '',
			priceMin: 0,
      priceMax: 99
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
