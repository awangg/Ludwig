<template>
  <div id="landing">
    <div id="container">
      <el-col :span="11"><div class="grid-content">
        <span>
         <Logo />

        <div class="title">
          Ludwig
        </div>
        </span>
      </div></el-col>
    </div>
  <div id="background"><div class = "grid-content2">
      <br><a href='/AboutUs'><el-button round type="circle" src="button" class="button1">about us</el-button></a>
      <p src = "slogan" class = "slogan">Bringing students and music educators together.</p>
      <br><a href='/login'><el-button round type="circle" src="button" class="button2">login</el-button></a>
      <br><a href='/signup'><el-button round type="circle" src="button" class="button3">signup</el-button></a>
      
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

.title {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 40px;
}
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
  margin-top:20%;
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
  font-family: Arial, Helvetica, sans-serif;
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

.button1{
  background-color: #C998C3;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 20px;
  width: 120px;
  height: 50px;
  margin-left: 400px;
  padding-top: -100px;
}
.button2 {
  background-color: #C998C3;
  color: #ffffff;
  line-height: 10px;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 30px;
  width: 120px;
  height: 60px;
  margin-bottom: 15px;
}
.button3 {
  background-color: #C998C3;
  color: #ffffff;
  line-height: 10px;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 30px;
  width: 135px;
  height: 60px;
  top: 50px;
  padding-top: 100px;
}


.slogan {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-left: 15px;
  margin-right: 15px;
}


</style>
