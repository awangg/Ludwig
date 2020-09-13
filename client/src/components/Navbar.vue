<template>
  <div id="navbar" margin-top="0px" width-min="100%" clear="left" display="inline-block" height="40px">
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
            <el-button><a href="\">Log Out</a></el-button>
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
