<template>
  <div id="eduhomepage">
    <navbar/>
    <el-row gutter="20">
      <el-col :span="4"><p> </p></el-col>
      <el-col :span="16">
        <el-col :span="4">
        </el-col>
        <el-col :span="20">
          <div align="left">
            <h1 margins="-25 0">Welcome to {CLASSNAME}</h1>
            <h6 margin="-25 0">Your class code is {CODE}</h6>
            <el-button align="left">Create New Assignment</el-button>
          </div>

          <!-- ALL CLASSES THAT TEACHER HAS ACCESS TO GOES HERE -->
          <!-- <ul id="example-1">
          <li v-for="item in items" :key="item.message">
            {{ item.message }}
          </li>
          </ul> -->

          <i class="el-icon-view"></i>
          <i class="el-icon-delete"></i>
        </el-col>
      </el-col>
      <el-col :span="4"><p> </p></el-col>
    </el-row>
    <!-- <footer/> -->
  </div>
</template>
    
<script>
import navbar from "../components/Navbar"
// import footer from "../components/Footer"

export default {
    name:"eduhomepage",
    components: {
        navbar,
        // footer
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
