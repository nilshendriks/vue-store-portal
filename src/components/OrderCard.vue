/* eslint-disable prettier/prettier */
<template>
  <router-link :to="{ name: 'OrderDetails', params: { id: order.id } }">
    <div class="order-card">
      <span>{{ order.date }}</span>
      <h4>{{ order.ordernumber }}</h4>
      <p>{{ order.custref}}</p>
      <p>{{ order.status}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.order-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
