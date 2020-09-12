<template>
  <div id="landing">
    <Logo />
<<<<<<< HEAD:client/src/components/Landing.vue
    <Button/>
    <a href='/upload'><li>asdfas</li></a>
    <p>asfad</p>

=======
    <div id="button">
      <el-button round type="circle" src="button" class="button"><a href='/upload'>Let's Play!</a></el-button>
    </div>
>>>>>>> ef7a45b5cee0f68b8aa2c7de85628a708b0a1462:client/src/Landing.vue
  </div>
</template>

<script scoped>
import Logo from "./components/Logo.vue"

export default {
  name: 'Landing',
  components: {
    Logo,
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
  overflow-y: hidden;
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
.button {
  background-color: #C998C3;
  color: #ffffff;
  font-size: 24px;
  width: 200px;
  height: 75px;
}
</style>
