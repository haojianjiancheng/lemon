<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/news">新闻</router-link>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
