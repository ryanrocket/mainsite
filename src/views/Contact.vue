<!-- Downstream Count: 2 HOLLOW -->

<!-- include assets here -->

<template>
  <div class="contactassets">
    <!-- downstream underflow file -->
    <contact header="Let's Work Together"/>
    <script type="application/javascript">
      grecaptcha.ready(function() {
        grecaptcha.execute('r6Lezia8UAAAAAI5UuY8ssi7oC38uO_g3QFxOT8NE', {action: 'login'});
      });
    </script>
  </div>
</template>

<script>
import contact from '@/components/contact.vue';

export default {
  name: 'CONTACT',
  components: {
    contact,
  },
};
</script>