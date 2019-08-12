<!-- Downstream Count: 2 STICKY -->

<template>
  <div master scroll="no" id="hh">
    <div v-if="!isMobile()">
      <div slave class="home">
        <img data-aos="fade-right" data-aos-duration="2000" class="fpo " alt="FPArt" src="../assets/asset-fpo.svg">
        <index motd="Hello, My Name Is" jtitle="PROFESSIONAL SOFTWARE ENGINEER"/>
      </div>
    </div>
    <div v-else slave>
      Welcome to mobile
    </div>
    <script type="application/javascript">
      grecaptcha.ready(function() {
        grecaptcha.execute('6Lezia8UAAAAAI5UuY8ssi7oC38uO_g3QFxOT8NE', {action: 'homepage'});
      });
    </script>
  </div>
</template>

<style>
#hh {overflow: hidden;}
</style>

<script>
// @ is an alias to /src
import index from '@/components/index.vue';

export default {
  name: 'INDEX',
  components: {
    index,
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
  },
};

</script>
