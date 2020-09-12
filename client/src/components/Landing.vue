<template>
  <div id="landing">
    <Logo />
  </div>
</template>

<script scoped>
import Logo from "./Logo.vue"

export default {
  name: 'Landing',
  components: {
    Logo
  }
}
</script>

<style>
body {
  direction: ltr;
  margin: 0;
  padding: 0;
  background-color:#ffffff;
  /* make it look decent enough #C8E7F5*/
  color: #000000;
  overflow-x: hidden;
  position: relative;
  height: 100%; 
}
#home {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
@media screen and (max-width: 399px) {
  body {
    overflow: visible;
    overflow-x: hidden;
  }
}
#item {
  margin: 0;
  padding: 0;
}
</style>
