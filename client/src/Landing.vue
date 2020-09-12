<template>
  <div id="landing">
    <div id="container">
    <div class = "left">
         <span><Logo />
    <div id="button">
      <a href='/upload'><el-button round type="circle" src="button" class="button">sync</el-button></a>
    </div></span>
    </div>
    <div class = "right">
        <span>this app syncs music</span>
    </div>
</div>
    
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
.left, .right{float:left; width: 50%}

.left {
    position: relative; /* Declared position allows for location changes */
    top: -5px; /* Moves the image 5px closer to the top of the page */
}

.right {
  display: flex;
  justify-content: center;
}

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
