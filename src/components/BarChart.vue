<template>
  <Bar
    v-if="loaded"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [ 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1' ],
        datasets: [ 
          { 
            label: 'Sales',
            backgroundColor: '#DFBB9D',
            data: [50, 42, 22, 35, 45, 27, 31, 25, 50, 42] 
          } 
        ]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            // title: {
            //   display: true,
            //   text: 'Value'
            // },
            max: 100,
            ticks: {
              // forces step size to be 50 units
              stepSize: 20
            }
          }
        }
      }
    }
  },
  watch: {
    '$store.state.products.data' () {
      this.updateData();
    }
  },
  methods: {
    updateData() {
      // random 10 product 
      let productSize = this.$store.getters.getProductSize
      let randomProduct = []
      for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * productSize)
        randomProduct.push(this.$store.getters.getProducts[random].title)
      }
      // random sales
      let randomSales = []
      for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 100)
        randomSales.push(random)
      }
      
      this.chartData.labels = randomProduct
      this.chartData.datasets[0].data = randomSales

      this.loaded = true
    }
  },
}
</script>