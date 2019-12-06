<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted(){
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

    //获取页面的HTML Dom
    var htmlDom = document.getElementsByTagName('html')[0];

    htmlDom.style.fontSize = htmlWidth / 10 + 'px';

    window.addEventListener('resize',function(e){
      var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
      htmlDom.style.fontSize = htmlWidth / 10 + 'px';
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
