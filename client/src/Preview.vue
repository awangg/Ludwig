<template>
  <div id="preview">
      <p>Preview</p>
      <div id="container">
      <el-col :span="11"><div class="grid-content">
        <span>
          <!--also link below to a download popup?-->
          <a href="/success"><el-button round type="circle" src="button" class="button">download</el-button></a>
        </span>
      </div></el-col>
    </div>
    <!--insert audio preview track here-->
  <div id="container"><div class = "grid-content">
      <span><a href="/upload"><el-button round type="circle" src="button" class="button">try again</el-button></a></span>
  </div></div>
  </div>
</template>

<script scoped>
export default {
  name: 'Preview',
  components: {
  },
  
  }

</script>

<style>
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
</style>
