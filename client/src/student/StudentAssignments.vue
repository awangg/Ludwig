<template>
  <div id="studentassignments">
    <navbar/>
     <el-col :span="11"><div class="grid-content">
        <span>
        <div class="title">
          Find Your Sheet Music
        </div>
        </span>
      </div></el-col>
      <div id="background"><div class = "grid-content2">

      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src = "slogan" class = "title">Upload Your Music</p>
      <upload/>
  </div>
  </div></div>
</template>
    
<script>
import navbar from "../components/Navbar"
import upload from "../Upload.vue"
export default {
    name:"studentassignments",
    components:{
        navbar,
        upload
    }
}
</script>
    
<style scoped lang="css">

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
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 24px;
  width: 200px;
  height: 75px;
  margin-top: 100px;
  padding-bottom: 9px; 
}

</style> 
