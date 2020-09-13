<template>
  <div id="login">
      <h1>LOGIN</h1>
  </div>
</template>

<script scoped>
export default {
  name: 'Login',
  components: {
  },
  
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
  font-family: "./assets/TeX-Gyre-Adventor/texgyreadventor-regular.otf";
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
