<!-- Downstream Count: 3 FINAL -->

<template>
  <div class="index" >
    <h1 class="hMotd" data-aos="fade-left" data-aos-duration="1100">{{ motd }}<br><b id="nolight">Ryan Wans</b>
    <br><br><p id="de" class="floating" owner>{{ jtitle }}</p></h1>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['motd', 'jtitle'],
};
(window.location.href === '/')
    ? (console['log']("Rendered Index Page Successfully");)
    : (console['warn']("An Internal Warning Occured");)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../app.scss';
@import '../compile.scss';
</style>
