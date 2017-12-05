<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import mutations from 'mutations-types.js'

export default {
  name: 'app',
  components: {
    Hello
  },
  mounted () {
    console.log(mutations)
    console.log('is dsadasdasd')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
