<template>
  <div id="description">
      <el-main padding="100px">
        <el-form :label-position="'left'" :model="inputForm">
            <el-form-item label="Merged File Name">
                <el-input v-model="inputForm.filename"></el-input>
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="inputForm.description"></el-input>
            </el-form-item>
            <el-form-item label="Beginning Pitch">
                <el-input v-model="inputForm.beginningPitch"></el-input>
            </el-form-item>
        </el-form>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet"> 
        <a href="/preview"><el-button round type="circle" src="button" class="buttonsub">submit</el-button></a>
      </el-main>
  </div>
</template>

<script scoped>

export default {
  name: 'Description',
  components: {

  },
  data() {
      return {
          inputForm: {
          filename: '',
          description: '',
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
#description{
  font-family: 'Kumbh Sans', sans-serif;
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

.buttonsub {
  margin-top: 10px;
  background-color: #C998C3;
  color: #ffffff;
  font-size: 24px;
  width: 120px;
  height: 40px;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
}
.buttonsub:hover {
   background-color: #ffffff;
   color: #C998C3;
}
</style>
