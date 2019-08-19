<!-- Downstream Count: 1 -->
<script src="./assets/scripts/gipe.cust.js"></script>

<template>
  <div id="app">
    <!-- 
    <div class="shadowNav navbar-expand-sm navbar-light" id="nav" data-aos="fade-down" data-aos-duration="1100">
      <a href="/" id="logo">Ryan Wans</a>
      <div class="links">
        <a href='/about' id="lynk">About</a>
        <a href='/portfolio' id="lynk">Portfolio</a>
        <a href='/contact' id="lynk">Contact</a>
        <a href='/login' id="lynk">Login</a>
      </div>
    </div>
    -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" id="logo" href="/">Ryan Wans</a>
      <button right class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse links" id="navbarNavAltMarkup">
        <div class="navbar-nav navbar-right" >
          <a class="nav-item nav-link" id="lynk" href="/about">About</a>
          <a class="nav-item nav-link" id="lynk" href="/portfolio">Portfolio</a>
          <a class="nav-item nav-link" id="lynk" href="/contact">Contact</a>
          <a class="nav-item nav-link" id="lynk" href="/login">Login</a>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
   @import 'app.scss';
   @import 'screensize.scss';
</style>

<script>
</script>
