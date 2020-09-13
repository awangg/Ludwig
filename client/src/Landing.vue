<template>
  <div id="landing">
    <div id="container">
      <el-row :gutter="24">
        <el-col :span="1" align-items="left">
          <a href='/AboutUs'><el-button round type="circle" src="button" class="button1">about us</el-button></a>
        </el-col>
        <el-col :span="23" z-index="4">
        </el-col>
      </el-row>

      <el-col :span="11"><div class="grid-content">
        <span>
         <Logo />
        <div class="title">
          ludwig
        </div>
        </span>
      </div></el-col>
    </div>
  <div id="background"><div class = "grid-content2">

      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src = "slogan" class = "slogan">Bringing music educators and students together during the era of COVID-19.</p>
      <el-row>
        <el-col :span="7"><p>  </p></el-col>
        <el-col :span="5">
      <a href='/login'><el-button round type="circle" src="button" class="button2">login</el-button></a>
        </el-col>
        <el-col :span="5">
      <a href='/signup'><el-button round type="circle" src="button" class="button3">signup</el-button></a>
        </el-col>
        <el-col :span="7"></el-col>
      </el-row>
  </div>
  </div>
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
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: bold;
  font-size: 60px;
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
  font-family: 'Kumbh Sans', sans-serif;
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
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  width: 120px;
  height: 50px;
  margin-left: 10px;
  margin-top: -30px;

}
.button2 {
  background-color: #C998C3;
  color: #ffffff;
  line-height: 10px;
  background-position: center;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 30px;
  width: 120px;
  height: 60px;
}
.button3 {
  background-color: #C998C3;
  color: #ffffff;
  line-height: 10px;
  background-position: center;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 30px;
  width: 135px;
  height: 60px;
  top: 50px;
}


.slogan {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: bold;
  font-size: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3C3C3C;
  margin-left: 15px;
  margin-right: 15px;
}


</style>
