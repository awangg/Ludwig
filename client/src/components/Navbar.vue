<template>
  <div id="navbar" margin-top="0px" width-min="100%" clear="left" display="inline-block" height="40px">
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
    <header margin-top="0px">
      <aside margin-top="0px">
        <el-row>
          <el-col :span="10">
            <img src="../assets/logo_final.png" alt="logo" class="logo">
          </el-col>
          <el-col :span="10">
            <p>  </p>
          </el-col>
          <el-col :span="4">
<<<<<<< HEAD
            <a href='/'><el-button round type="circle" src="button" class="button1">log out (NOT ROUTED) </el-button></a>
=======
            <el-button><a href="\">Log Out</a></el-button>
>>>>>>> f1542f6973cbbb1fc085c365255ec014a963a3fe
          </el-col>
        </el-row>
      </aside>
    </header>
  </div>
</template>
    
<script>
export default {
    name:"navbar",
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
  margin-top: -40px;
  margin-left: 10px;
}


.button1 {
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  width: 250px;
  height: 50px;
  margin-right: 50px;
  margin-top: -30px;

}

</style> 
