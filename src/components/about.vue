<!-- Downstream Count: 3 FINAL -->

<template>
    <div class="about" >
        <div class="secTitle">
            <br>
            <h1 id="hdr" data-aos="fade-right" data-aos-duration="1000">{{ header }}</h1>
        </div>
        <br><br>
        <img data-aos="fade-up" data-aos-duration="1000" class="floating" id="picle" alt="Picture Of Me" src="../assets/asset-me.jpg"/>
        <div id="content" data-aos="fade-left" data-aos-duration="1000">
            I'm a Full Stack Developer based out of Maryland, USA.<br>
            I have a passion for creating a pleasing, intuitive user expirience.<br>

            <a id="hhref" class="pulsate" href="/contact">Lets Make Something Special</a><br><br><br>
            <ul>
            <li>- Fast load times with lag free user interaction</li>
            <li>- Dynamic web pages what work on all sizes of screens</li>
            <li>- Responsive web pages that give the user a more pleasureable experience</li>
            <li>- Reliable back-end infrastructure with analytics on performance</li>
            <li>- I am always interested in learning new technologies</li>
            </ul>
        </div>
        <div class="foot">
            <footer>{{ footr }}</footer>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../app.scss';
@import '../compile.scss';
.grecaptcha-badge {
    visibility: collapse !important;
}
</style>

<script>
export default {
  name: 'about',
  props: ['header', 'footr'],
};
try { AOS.init(); } catch (e) {}
</script>
