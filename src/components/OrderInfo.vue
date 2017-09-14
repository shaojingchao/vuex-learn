<template>
  <h1 style="text-align:right;margin-right:50px;">总金额： {{totalPrice}}</h1>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
        'totalPrice'
      ])
  },
  update () {
    console.log(this.computed)
  }
}
</script>
