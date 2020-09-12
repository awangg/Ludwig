<template>
  <div id="AboutUs">
    <h1>About Us</h1>
    <Logo />
    <img src="~@/assets/andy.jpg" alt="face" class="face">
    <img src="~@/assets/claire_pic.png" alt="face" class="face">
    <img src="~@/assets/megan_new.png" alt="face" class="face">
    <img src="~@/assets/Thomas_Yeum_copy.jpg" alt="face" class="face">
    
    <h4>We are Andy, Claire, Megan, and Thomas, 4 sophomores at Rice University. 
        musync was designed to help music educators, professional orchestras, and individual
        creators make music online efficiently. Let's focus on the music, not the syncing! </h4>
  </div>
</template>

<script scoped>
import Logo from "./components/Logo.vue"

export default {
  name: 'AboutUs',
  components: {
    Logo,
  }
}
</script>

<style>
body {
  direction: ltr;
  margin: 40px;
  padding: 10;
  background-color:#ffffff;
  /* make it look decent enough #C8E7F5*/
  color: #000000;
  overflow-x: hidden;
  position: relative;
  height: 100%; 
}

.logo {
  width: 150px;
  height: 85px;
  margin-top: -300px;
  margin-bottom: 30px;
  margin-right:1300px;
}
.face {
  width: 300px;
  height: 350px;
  margin-left: 20px;
  margin-right: 20px;
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