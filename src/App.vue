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
@import "./assets/fonts/HelveticaNeueCyr/stylesheet.css";

body {
  margin: 0px;
  zoom: .75;
}
#app {
  font-family: 'HelveticaNeueCyr', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1400px;
  margin: auto;
  padding: 0 100px;
  position: relative;
}
</style>
