<template>
  <div id="eduhomepage">
    <navbar/>
  </div>
</template>
    
<script>
import navbar from "../components/Navbar"
export default {
    name:"eduhomepage",
    components: {
        navbar
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
