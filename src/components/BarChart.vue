<template>
    <Bar
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
        chartData: {
          labels: [ 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1', 'Product 1' ],
          datasets: [ 
            { 
              label: 'Sales',
              backgroundColor: '#F1D3B3',
              data: [50, 42, 22, 35, 45, 27, 31, 25, 50, 42, 22, 35, 45, 27, 31, 25] 
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
              // max: 100,
              ticks: {
                // forces step size to be 50 units
                stepSize: 30
              }
            }
          }
        }
      }
    }
  }
  </script>