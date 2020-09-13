<template>
  <div id="studentassignments">
    <navbar/>
     <el-col :span="11"><div class="grid-content">
        <span>
        <div class="title">
          Assignments
        </div>
        </span>
      </div></el-col>
      <!--need to get background color to not cover over navbar-->
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

.title{
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 24px;
}
.logo {
  height: 80px;
  width: 130px;
  position: left;
  float:left;
}
.grid-content{
  margin-top:6%;
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

</style> 
