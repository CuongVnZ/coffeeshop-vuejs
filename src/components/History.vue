<template>
  <Spinner v-if="isHistoryLoading"/>
  <table class="table" v-else>
    <thead>
      <tr>
        <th>Order Number</th>
        <th>Date</th>
        <th>Total</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, index) in getItems">
        <td><router-link :to="'/receipt/' + order._id">#{{order.index}}</router-link></td>
        <td>{{ new Date(order.createdAt).toLocaleString() }}</td>
        <td>${{ order.total }}</td>
        <td v-if="order.status == 'Pending'"><label class="bg-secondary text-white rounded px-3">{{ order.status }}</label></td>
        <td v-if="order.status == 'Delivering'"><label class="bg-warning rounded px-3">{{ order.status }}</label></td>
        <td v-if="order.status == 'Delivered'"><label class="bg-success text-white rounded px-3">{{ order.status }}</label></td>
      </tr>
      <!-- <tr>
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
      </tr> -->


    </tbody>
  </table>
      <paginate
        v-if="!isHistoryLoading"
        :page-count="orders.length/itemPerPage"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      />
</template>

<script>
import Spinner from '../components/Spinner.vue';
import Paginate from 'vuejs-paginate-next';
import { userRequest } from '../requestMethod.js';

export default {
	props: {
		userId: {
			type: String,
			default: {}
		}
	},
  components: {
    Spinner,
    Paginate
  },
  data() {
    return {
      currentPage: 1,
      itemPerPage: 10,
      orders: [],
      isHistoryLoading: true,
    }
  },
  mounted() {
    if(!this.userId) {
      return
    }

    var token = this.$store.getters.getToken;
    userRequest(token).get('/orders/find/' + this.userId)
    .then(res => {
      this.orders = res.data;

      // sort orders by date
      this.orders.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })

      // add index to orders
      this.orders.forEach((order, index, arr) => {
        order.index = arr.length-index;
      })

      this.isHistoryLoading = false;
    })
    .catch(err => {
      console.log(err);
      this.$store.dispatch('addNotification', "Loading orders error: " + err.message);
    })
  },
  computed: {
    getItems: function() {
      let current = this.currentPage * this.itemPerPage;
      let start = current - this.itemPerPage;
      return this.orders.slice(start, current);
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    }
  },
}
</script>

<style scoped>
.pagination {
  cursor: pointer;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
