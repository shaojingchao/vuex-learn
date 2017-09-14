<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <product-list></product-list>
    <hr>
    <order-info></order-info>
  </div>
</template>
<script>
import ProductList from './ProductList.vue'
import OrderInfo from './OrderInfo.vue'
export default {
  name: 'hello',
  data() {
    return {
      msg: '订单结算'
    }
  },
  components: {
    ProductList,
    OrderInfo
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  width:1000px;
  margin:0 auto;
}
</style>
