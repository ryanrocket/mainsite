<!-- Downstream Count: 1 -->
<script src="./assets/scripts/gipe.cust.js"></script>

<template>
  <div id="app">
    <div class="shadowNav navbar-expand-sm navbar-light" id="nav" data-aos="fade-down" data-aos-duration="1100">
      <a href="/" id="logo">Ryan Wans</a>
      <div class="links">
        <a href='/about' id="lynk">About</a>
        <a href='/portfolio' id="lynk">Portfolio</a>
        <a href='/contact' id="lynk">Contact</a>
        <a href='/login' id="lynk">Login</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
   @import 'app.scss';
   @import 'screensize.scss';
</style>

<script>
</script>
