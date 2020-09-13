<template>
  <div id="landing">
    <div id="container">
      <el-row :gutter="24">
        <el-col :span="1" align-items="left">
          <a href='/AboutUs'><el-button round type="circle" src="button" class="button1">about us</el-button></a>
        </el-col>
        <el-col :span="23" z-index="4">
        </el-col>
      </el-row>

      <el-col :span="11"><div class="grid-content">
        <span>
         <Logo />
        <div class="title">
          ludwig
        </div>
        </span>
      </div></el-col>
    </div>
  <div id="background"><div class = "grid-content2">

      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src = "slogan" class = "slogan">Bringing music educators and students together during the era of COVID-19.</p>


<div id="login">
      <div class="login-page">
  <div class="form">
    <form class="login-form">
      <p src = "welcome" class = "welcome">LOG IN</p>
      <input type="text" placeholder="email" v-model="username"/>
      <input type="password" placeholder="password" v-model="password"/>
      <el-button round type="circle" src="button" class="button" v-on:click="sendLoginRequest">login</el-button>
      <p class="message">Not registered? <a href="/signup">Create an account</a></p>
    </form>
  </div>
</div>
  </div>

  </div>
  </div>
  </div>
</template>

<script scoped>
import Logo from "./components/Logo.vue"
import axios from 'axios'
import config from './config'

export default {
  name: 'Landing',
  components: {
    Logo
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    if(this.$cookies.get('token')) {
      let roles = this.$cookies.get('roles')
      if(roles.includes('teacher')) this.$router.push('educatorHome')
      else if(roles.includes('student')) this.$router.push('studentHome')
    }
  },
  methods: {
    sendLoginRequest() {
      if(this.username.length > 0 && this.password.length > 0) {
        axios({
          method: 'post',
          url: config.api.LOGIN_URL,
          data: {
            email: this.username,
            password: this.password
          }
        }).then( (res) => {
          let response = res.data
          if(!response.error) {
            this.$cookies.set('roles', response.roles)
            this.$cookies.set('name', response.name)
            this.$cookies.set('email', response.email)
            this.$cookies.set('token', response.token)

            if(response.roles.includes('teacher')) this.$router.push('educatorHome')
            else if(response.roles.includes('student')) this.$router.push('studentHome')

          } else {
            console.log(response.error)
          }
        })
      }
    }
  }
}
</script>

<style scoped>

.title {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: bold;
  font-size: 60px;
}
.el-col {
    border-radius: 4px;
    position: relative; /* Declared position allows for location changes */
    top: -5px; /* Moves the image 5px closer to the top of the page */
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.grid-content2 {
  margin-top:20%;
}

#background {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #E4CEE0; 
}

body {
  direction: ltr;
  margin: 0;
  padding: 0;
  background-color:#ffffff;
  /* make it look decent enough #C8E7F5*/
  color: #000000;
  overflow-x: hidden;
  overflow-y: hidden;
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

.button1{
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  width: 120px;
  height: 50px;
  margin-left: 10px;
  margin-top: -30px;

}
.button2 {
  background-color: #C998C3;
  color: #ffffff;
  line-height: 10px;
  background-position: center;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 30px;
  width: 120px;
  height: 60px;
}
.button3 {
  background-color: #C998C3;
  color: #ffffff;
  line-height: 10px;
  background-position: center;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 30px;
  width: 135px;
  height: 60px;
  top: 50px;
}


.slogan {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: bold;
  font-size: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3C3C3C;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: -50px;
}




.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: Helvetica, sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: Helvetica, sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #C998C3;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #E4CEE0;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #C998C3;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.welcome{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-top: -25px;
}

</style>
