<template>
  <h1>Orders</h1>
  <div class="orders">
    <OrderCard v-for="order in orders" :key="order.id" :order="order" />
  </div>
</template>

<script>
// @ is an alias to /src
import OrderCard from '@/components/OrderCard.vue'
import OrderService from '@/services/OrderService.js'

export default {
  name: 'Orders',
  components: {
    OrderCard,
  },
  data() {
    return {
      orders: null
    }
  },
  created() {
    OrderService.getOrders()
      .then(response => {
        this.orders = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.orders {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>