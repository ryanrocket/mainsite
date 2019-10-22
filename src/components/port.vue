<!-- Downstream Count: 3 FINAL - ASSETS -->

<template>
  <div class="port">
    <div class="prost" type="stripe-long" advert></div>
    <div id="woah">
      <div data-aos="fade-right" data-aos-duration="1100" class="secTitle">
        <br />
        <h1 id="jt">{{ header }}</h1>
      </div>
      <br />
      <br />
      <br />
      <img
        onclick="javascript:redirf()"
        class="pulsate"
        id="octo"
        alt="octocat"
        src="../assets/octo.svg"
      />
      <div id="pro">
        <div secone id="slipe" data-aos="fade-right" data-aos-duration="1100">
          <img id="cus-x1-rtf" alt="tts-basic logo" src="../assets/tts.png" />
          <div class="vl" />
          <div class="pd" ghs>
            <h1>
              <b>tts-basic &nbsp; (Work In Progress)</b>
            </h1>
            <h5>
              Teacher-To-Student Basic provides students and teachers an intuitive user
              interface for a powerful database used to store grades, assignments, student info,
              and more. tts-basic help teachers review their class grades with a powerful analytics
              platform, allows students to set grade goals and helps the students to accomplish these
              goals, and uses both a web and desktop application for access.
            </h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div sectwo id="slipe" data-aos="fade-up" data-aos-duration="1100">
          <img id="cus-x1-rtf" alt="agiledb logo" src="../assets/agile.png" />
          <div class="vl" />
          <div class="pd" grtf>
            <h1>
              <b>AgileDB &nbsp; v1.0.9</b>
            </h1>
            <h5>
              AgileDB is lightweight database management system, designed to be easy to use and,
              to work efficiently.
              ADB creates non-relational databases in JSON format and provides packages
              for languages such as Python, Node.js, and a CLI. ADB leaves a small footprint so you
              can easily share ADB Database Files and use them without and hassle.
            </h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div secthr id="slipe">
          <img id="cus-x1-rtf" alt="betterconsole logo" src="../assets/npm.png" />
          <div class="vl" />
          <div class="pd" ghju>
            <h1>
              <b>Better Console &nbsp; v0.1.4</b>
            </h1>
            <h5>
              Better Console is a Node Package Manager (npm) package for Node.js applications.
              BC uses color codes and identifiers to organize the output of your node application.
              Easily spot errors, warnings, or system updates through BC real-time logs.
            </h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div secthr id="slipe">
          <img id="cus-x1-rtf" alt="ryanwans logo" src="../assets/rlogo.png" />
          <div class="vl" />
          <div class="pd" ghju>
            <h1>
              <b>Personal Website &nbsp; v2.6.5 b17287</b>
            </h1>
            <h5>
              ryanwans.com my personal website to showcase my portfolio and skills as a
              full stack developer. I made the site with Vue.js, Bootstrap, and SCSS.
              The backend uses Node.js and Express and is currently hosted serverless.
              RWApi is also in the works.
            </h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div secthr id="slipe">
          <img id="cus-x1-rtf" alt="header setter logo" src="../assets/hslogo.png" />
          <div class="vl" />
          <div class="pd" ghju>
            <h1>
              <b>Header Setter &nbsp; v1.6.5</b>
            </h1>
            <h5>
              Header Setter (
              <a href="https://headersetter.us">headersetter.us</a> ) is a small web application that I created to
              quickly create clean, efficient HTML head's. You get a variety of JS and CSS
              libraries to choose from and get to set search-engine friendly meta data. This is
              a Vue app with SCSS and Vue-Materials. It uses serverless hosting.
            </h5>
          </div>
        </div>
        <br />
        <br />
        <div secthr id="slipe">
          <img id="cus-x1-rtf" alt="header setter logo" src="../assets/prost.png" />
          <div class="vl" />
          <div class="pd" ghju>
            <h1>
              <b>Prost Ads &nbsp; v0.8.1</b>
            </h1>
            <h5>
              Prost Ad Network (
              <a href="/prost">Prost</a> ) is an ad network for Open Source
              software and developers to advertise their products or services. Prost is
              used exclusevly for the products of Ryan Wans and close friends. It may
              be open for public advertising in the near future.
            </h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style scoped lang="scss">
@import "../app.scss";
@import "../compile.scss";
.grecaptcha-badge {
  visibility: collapse !important;
}
</style>

<script>
export default {
  name: 'port',
  props: ['header'],
};
try {
  AOS.init();
} catch (e) {}
</script>
