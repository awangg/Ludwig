<template>
  <div id="studhomepage">
    <navbar/>
    <el-row gutter="20">
      <el-col :span="4"><p> </p></el-col>
      <el-col :span="16">
        <el-col :span="4">
        </el-col>
        <el-col :span="20">
          <div align="left">
            <h1 margins="-25 0">Welcome to {CLASSNAME}</h1>
            <h6 margin="-25 0"></h6>
          </div>

          <!-- ALL CLASSES THAT STUDENTS ARE ASSIGNED TO GOES HERE -->
          <!-- <ul id="example-1">
          <li v-for="item in items" :key="item.message">
            {{ item.message }}
          </li>
          </ul> -->
        
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
    name:"studhomepage",
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
