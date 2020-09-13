<template>
  <div id="AboutUs">
    <h1 class = "about-title">About Us</h1>
    <img src="~@/assets/logo_final.png" alt="small_logo" class="small_logo">
    <img src="~@/assets/andy.jpg" alt="face" class="face">
    <img src="~@/assets/claire_pic.png" alt="face" class="face">
    <img src="~@/assets/megan_new.png" alt="face" class="face">
    <img src="~@/assets/Thomas_Yeum_copy.jpg" alt="face" class="face">
    
    <h4 class='intro'> We are Andy, Claire, Megan, and Thomas, 4 sophomores at Rice University 
        passionate about making music more accessible. Ludwig was designed to help music educators and 
        their students produce music online efficiently, even when musicians are not physically together. 
        Let's focus on the music, not the syncing! </h4>
  </div>
</template>

<script scoped>

export default {
  name: 'AboutUs',
  components: {
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

.about-title {
  font-size: 36px;
}
.intro {
  font-size: 20px;
  margin-left: 15px;
  margin-right: 15px; 
}

.small_logo {
  width: 150px;
  height: 85px;
  margin-top: -400px;
  margin-bottom: 20px;
  margin-right:1200px;
}
.face {
  width: 300px;
  height: 350px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
}
#home {
  font-family: "~@/assets/TeX-Gyre-Adventor/texgyreadventor-regular.otf";
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