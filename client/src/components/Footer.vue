<template>
  <div id="footer">
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
    <p class="footer-font">  made by ludwig with love. </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
#app {
  font-family: 'Kumbh Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #C998C3;
}
#footer {
    padding: 20px 0px;
    line-height: 50px;
    margin: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    background-color:aliceblue;
    
}
#footer a {
    text-decoration: none;
    color: #C998C3;
}

.footer-font {
    background-color:aliceblue;
    width: 100%;
    color: #C998C3;
}
</style>