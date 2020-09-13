<template>
  <div id="signup">
      <h1>Welcome to Ludwig</h1>
      <el-row gutter="20">
          <el-col :span="10">
              <h4>For Students</h4>
            <el-form ref="form" :model="studentSignup" label-width="120px">
                <el-form-item label="First Name">
                    <el-input v-model="studentSignup.first"></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input v-model="studentSignup.last"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="studentSignup.password"></el-input>
                </el-form-item>
                <el-form-item label="Input Your Class Code">
                    <el-input v-model="studentSignup.classCode"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="studentSignup.email"></el-input>
                </el-form-item>
            </el-form>
            <el-button>NOT DONE YET (SUBMIT)</el-button>
          </el-col>
          <el-col :span="10">
              <h4>For Educators</h4>
            <el-form ref="form" :model="teacherSignup" label-width="120px">
                <el-form-item label="First Name">
                    <el-input v-model="teacherSignup.first"></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input v-model="teacherSignup.last"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="teacherSignup.password"></el-input>
                </el-form-item>
                <el-form-item label="Create New Class Code">
                    <el-input v-model="teacherSignup.classCode"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="teacherSignup.email"></el-input>
                </el-form-item>
            </el-form>
            <el-button>NOT DONE YET (SUBMIT)</el-button>
          </el-col>

      </el-row>

  </div>
</template>

<script scoped>
export default {
  name: 'signup',
  components: {
  },
  data() {
      return {
        studentSignup: {
          firstName: '',
          lastName: '',
          password: '',
          classCode: '',
          email: ''
        },
        teacherSignup: {
          firstName: '',
          lastName: '',
          password: '',
          classCode: '',
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
