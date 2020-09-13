<template>
  <div id="studhomepage">
    <navbar/>
     <el-col :span="11"><div class="grid-content">
        <span>
        <div class="title">
          Find Your Sheet Music
        </div>
        <selector/>
        </span>
      </div></el-col>
      <div id="background"><div class = "grid-content2">

      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src = "slogan" class = "title">Upload Your Music</p>
  </div>
  <selector/>
  </div></div>
</template>
    
<script>
import navbar from "../components/Navbar"
import selector from "../components/Sheetmusic"
import upload from "../Upload.vue"
export default {
    name:"studhomepage",
    components:{
        navbar,
        selector
    }
}
</script>
    
<style scoped lang="css">

.title {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: bold;
  font-size: 30px;
}

.navbar {
  margin-top:0px;
}
.logo {
  height: 80px;
  width: 130px;
  position: left;
  float:left;
}

.button {
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 24px;
  width: 200px;
  height: 75px;
  margin-top: 100px;
  padding-bottom: 9px; 
}

#background {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #E4CEE0; 
}

</style> 
