<template>
  <div id="success">
    <navbar/>
      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src="congrats" class = "congrats">Congratulations, you made music!</p>
      <logo />
      <span><a href="/studentassignments"><el-button round type="circle" src="success-button" class="success-button">Back to Assignments</el-button></a></span>
    
  </div>
  
</template>

<script>
import navbar from "./components/Navbar"
import logo from "./components/Logo"

export default {
    name:"success",
    
    components:{
        navbar,
        logo
    }
}
</script>

<style scoped>
body {
  direction: ltr;
  margin: 0;
  padding: 0;
  background-color:#ffffff;
  /* make it look decent enough #C8E7F5*/
  color: #000000;
  overflow-x: hidden;
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

.success-button {
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 24px;
  width: 300px;
  height: 55px;
  margin-top: 70px;
}
.success-button:hover {
   background-color: #E4CEE0;
   color: #C998C3;
   
}

.congrats {
  font-size: 30px;
  font-family: 'Kumbh Sans', sans-serif;
}
</style>