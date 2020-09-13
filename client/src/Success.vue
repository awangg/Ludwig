<template>
  <div id="success">
      <p src="congrats" class = "congrats">Congratulations, you made music!</p>
      <span><a href="/upload"><el-button round type="circle" src="success-button" class="success-button">let's make more!</el-button></a></span>
  </div>
</template>

<script scoped>
export default {
  name: 'Success',
  components: {
  },
  
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
  font-family: "./assets/TeX-Gyre-Adventor/texgyreadventor-regular.otf";
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
  font-family: "../assets/TeX-Gyre-Adventor/texgyreadventor-regular.otf";
  text-align: center;
  font-size: 24px;
  width: 200px;
  height: 75px;
  margin-top: 100px;
}

.congrats {
  font-size: 30px;
}
</style>