<!-- Downstream Count: 2 -->

<template>
  <div class="loginque">
    <!-- downstream underflow file -->
    <img data-aos="fade-right" data-aos-duration="2000" class="fposs " alt="FPArt" src="../assets/asset-fpo.svg">
    <login newui="true"/>
    <script type="application/javascript">
      grecaptcha.ready(function() {
        grecaptcha.execute('6Lezia8UAAAAAI5UuY8ssi7oC38uO_g3QFxOT8NE', {action: 'login'});
      });
    </script>
  </div>
</template>

<script>
import login from '@/components/login.vue';

export default {
  name: 'LOGIN',
  components: {
    login,
  },
};
</script>
