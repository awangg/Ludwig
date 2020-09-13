<template>
  <div id="landing">
    <div id="container">
      <el-col :span="11"><div class="grid-content">
        <span>
         <Logo />

        <div id="button">
          <a href='/upload'><el-button round type="circle" src="button" class="button">sync</el-button></a>
        </div>
        </span>
      </div></el-col>
    </div>
  <div id="background"><div class = "grid-content2">
      <span>this app doesn't sync music</span>
      <br><a href='/upload'><el-button round type="circle" src="button" class="button">about us</el-button></a><br>
  </div></div>    
</div>
    
</template>

<script scoped>
import Logo from "./components/Logo.vue"

export default {
  name: 'Landing',
  components: {
    Logo
  }
}
</script>

<style>


.el-col {
    border-radius: 4px;
     position: relative; /* Declared position allows for location changes */
    top: -5px; /* Moves the image 5px closer to the top of the page */
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.grid-content2 {
  margin-top:50%;
}

#background {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #E4CEE0; 
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
  font-family: "helvetica";
  text-align: center;
  font-size: 24px;
  width: 200px;
  height: 75px;
  margin-top: 100px;
  position: center;
}


</style>
