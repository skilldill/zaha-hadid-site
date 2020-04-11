<template>
  <div id="app">
    <app-top-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import { TopMenu } from "./core/components";

export default {
  name: 'App',
  components: {
    "app-top-menu": TopMenu
  }
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1400px;
  margin: auto;
  padding: 0 100px;
  position: relative;
}
</style>
