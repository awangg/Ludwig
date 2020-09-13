<template>
  <div id="description">
      <navbar/>
      <p>STEP 2: DESCRIPTION</p>
      <el-main padding="100px">
        <el-form :label-position="'left'" :model="inputForm">
            <el-form-item label="Merged File Name">
                <el-input v-model="inputForm.filename"></el-input>
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="inputForm.description"></el-input>
            </el-form-item>
            <el-form-item label="Username">
                <el-input v-model="inputForm.username"></el-input>
            </el-form-item>
            <el-form-item label="Beginning Pitch">
                <el-input v-model="inputForm.beginningPitch"></el-input>
            </el-form-item>
        </el-form>

        <a href="/preview"><el-button round type="circle" src="button" class="button">next</el-button></a>
      </el-main>
  </div>
</template>

<script scoped>
import navbar from "./components/Navbar"
export default {
  name: 'Description',
  components: {
      navbar
  },
  data() {
      return {
          inputForm: {
          filename: '',
          description: '',
          username: '',
          beginningPitch: ''
      }}
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

.button {
  margin-top: 10px;
  background-color: #C998C3;
  color: #ffffff;
  font-size: 24px;
  width: 100px;
  height: 40px;
}
.button:hover {
   background-color: #E4CEE0;
   color: #C998C3;
}
</style>
