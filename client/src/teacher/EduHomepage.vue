<template>
  <div id="eduhomepage">
    <navbar/>
     <el-col :span="11"><div class="grid-content">
        <span>
        <div class="title">
          Assignments
        </div>
        <el-button round type="circle" src="button" class="button" id="show-modal" @click="showModal = true" >Create New Assignment</el-button>
         
        </span>
      </div></el-col>
      <!--need to get background color to not cover over navbar-->
      <div id="background"><div class = "grid-content2">

      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src = "slogan" class = "title">Mix Recordings</p>
      <el-button round type="circle" src="button" class="button1">Select Student Recordings</el-button>
      <description/>
      
  </div>
  </div></div>
</template>
    
<script>
import navbar from "../components/Navbar"
import description from "../Description"

export default {
    name:"eduhomepage",
    components:{
        navbar,
        description
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

.button{
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  width: 300px;
  height: 50px;
  margin-left: 10px;
  margin-top: 30px;

}

.button:hover {
   background-color: #ffffff;
   color: #C998C3;
}

.button1{
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  width: 300px;
  height: 50px;
  margin-left: 10px;
  margin-top: 0px;

}

.button1:hover {
   background-color: #ffffff;
   color: #C998C3;
}

</style> 
