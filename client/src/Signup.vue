<template>
  <div id="login">
      <div class="signup-page">
          <p src = "welcome" class = "welcome">Welcome to Ludwig</p>
  <div class="form">
    <form class="signup-form">
      <input type="text" placeholder="name" v-model="name"/>
      <input type="password" placeholder="password" v-model="password"/>
      <input type="text" placeholder="class code" v-model="classCode"/>
      <input type="email" placeholder="email" v-model="email"/>
      
      <a href='/signup'><el-button round type="circle" src="button" class="button" v-on:click="sendSignupRequest">sign up</el-button></a>
      <p class="message">Already registered? <a href="/">Log In</a></p>
    </form>
  </div>
</div>
  </div>
</template>

<script scoped>
import axios from 'axios'
import config from './config'

export default {
  name: 'Login',
  components: {
  },
  data() {
      return {
        name: '',
        password: '',
        classCode: '',
        email: '',
        role: 'student'
      }
    },
    methods: {
      sendSignupRequest() {
        if(this.name.length > 0 && this.password.length > 0 && this.classCode.length > 0 && this.email.length > 0) {
          axios({
            method: 'post',
            url: config.api.SIGNUP_URL,
            data: {
              name: this.name,
              password: this.password,
              classCode: this.classCode,
              email: this.email,
              role: this.role
            }
          }).then( (res) => {
            let response = res.data
            if(!response.error) {
              this.$router.push({ name: 'landing' })
            }
          })
        }
      }
    }
  }

</script>

<style scoped>
.signup-page {
  width: 360px;
  padding: 2% 0 0;
  margin: auto;
}
.welcome{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
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

body {
  background: #E4CEE0; 
  font-family: Helvetica, sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>
