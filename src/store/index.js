import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productList: []
  },
  mutations: {
    addNum (state) {
      state.count++
    }
  },
  getters: {
    totalPrice (state) {
      let total = 0
      state.productList.forEach((item) => {
        total += item.price * item.num
      })
      return total
    }
  }
})

export default store
