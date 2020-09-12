<template>
  <div id="Upload">
    <el-header>
      <navbar/>
    </el-header>
    <el-main>
      <el-upload
        class="upload-demo"
        drag
        action="https://localhost"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        multiple
        show-file-list>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
        <div class="el-upload__tip" slot="tip">mp3/mp4 files with a size less than 500TB</div>
      </el-upload>
      <a href="/description"><el-button round type="circle" src="button" class="button">let's customize!</el-button></a>
    </el-main>
  </div>
</template>

<script scoped>
import navbar from "./components/Navbar.vue"
 
export default {
  name: 'Upload',
  components: {
    navbar
  },
  data() {
      return {
        fileList: []
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
        this.fileList.append(file)
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file) {
        this.fileList.remove(file)
        return this.$confirm(`Cancel the transfer of ${ file.name } ?`);
      }
    }
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

.button {
  margin-top: 10px;
  background-color: #C998C3;
  color: #ffffff;
  font-size: 24px;
  width: 100px;
  height: 40px;
  text-align: center;
}
.button:hover {
   background-color: #E4CEE0;
   color: #C998C3;
}
</style>
