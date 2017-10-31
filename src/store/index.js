import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import products from './products'
import Shop from '../api/shop'

Vue.use(Vuex)

console.log(cart)

const store = new Vuex.Store({
  modules: {
    cart,
    products
  },
  state: {
    productList: []
  },
  mutations: {
    addNum (state) {
      state.count++
    },
    addToCart (state, id) {

      console.log('addToCart')
      state.productList.forEach((item) => {
        if (item.id === id) {
          if (item.stock > 0) {
            state.cart.added.push(item)
            item.stock--
          } else {
            console.log('库存不足！')
          }
        }
      })
    }
  },
  getters: {
  },
  actions: {
    getProducts (s) {
      console.log('=========', s.state.cart)
      Shop.getProducts((p) => {
        console.log(p)
        this.state.productList = p
      })
    },
    addToCart ({commit}, id) {
      commit('addToCart', id)
    }
  }
})

export default store
