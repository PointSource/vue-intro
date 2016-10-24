<template>
  <div id="app">
    <div class="header">
      Intro project
    </div>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  padding-top: 55px;
  color: #34495e;
  height: 600px;
}

a {
  color: #34495e;
  text-decoration: none;
}

.header {
  background-color: #ff6600;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;

  max-width: 800px;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 15px 5px;
}

.view {
  margin: 0 auto;
  position: relative;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>
