<template>
  <div id="login">
      <h1>Welcome Back</h1>
      <el-row gutter="20">
          <el-col :span="10">
            <el-form ref="form" :model="loginList" label-width="120px">
                <el-form-item label="Email">
                    <el-input v-model="loginList.email"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="loginList.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button>UNFINISHED (SUBMIT)</el-button>
          </el-col>
      </el-row>
  </div>
</template>

<script scoped>
export default {
  name: 'Login',
  components: {
  },
  data() {
      return {
        loginList: {
          password: '',
          email: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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
</style>
