<template>
  <div>
    <table>
      <thead>
        <tr>
          <th width="200" align="left">商品名称 {{msg}}</th>
          <th width="100" align="left">单价</th>
          <th width="200" align="left">数量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productList">
          <td>{{item.name}}</td>
          <td>￥{{item.price}}</td>
          <td>
            <input type="button" value="-">
            <input style="width:40px;text-align:center" type="text" :value="item.num">
            <input type="button" value="+">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  data() {
    return {
      msg: 'self data'
    }
  },
  computed: {
    ...mapState([
        'productList'
      ])
  }
}
</script>
