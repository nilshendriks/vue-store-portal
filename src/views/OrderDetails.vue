<template>
  <div v-if="order">
    <span>{{ order.date }}</span>
    <h4>{{ order.ordernumber }}</h4>
    <p>{{ order.custref}}</p>
    <p>{{ order.status}}</p>
  </div>
</template>

<script>
import OrderService from '@/services/OrderService.js'

export default {
  props: ['id'],
  data() {
    return {
      order: null
    }
  },
  created() {
    // fetch event (by id) and set local event data
    OrderService.getOrder(this.id)
      .then(response => {
        this.order = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>