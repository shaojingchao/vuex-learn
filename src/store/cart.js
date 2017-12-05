import con from './const.js'
console.log("con ===== ", con)
const state = {
  added: [
    {
      price: 10
    }
  ]
}

const getters = {
  countPrice (state) {
    let counts = 0
    return state.added.reduce((prev, item) => (item.price + prev), counts)
  }
}

const mutations = {
  countPrice (store) {
    console.log('countPricesdsds')
  }
}

const actions = {
  
}

export const a = {
  a:'dfs'
}

export default {
  state,
  getters,
  mutations,
  actions
}