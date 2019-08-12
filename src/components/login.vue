<!-- Downstream Count: 3 FINAL -->

<template>
  <div class="lgn" >
    <div id="login">
        <h2 id="lh">
            RW-API Login
        </h2>
        <br><br><br>
        <form class="concurrentform">
            Enter Username<br>
            <input type="text" id="tinput" name="username"/><br>
            <br>Enter Password<br>
            <input type="password" id="pswd" name="passer"/><br>
            Remeber Me?&nbsp;&nbsp;
            <input type="checkbox" id="rd" name="remember"/>
            <br>
            <br>
            <button type="submit" id="subnow">Login</button>
        </form><br>
        <p id="subtextr">Login Application Uses <b>reCAPTCHA</b> Authentication</p>
        <br>
        <p id="">Note: RW-API is not yet open for public registration</p>
    </div>
    <script scoped type="application/javascript">
        function ConvertFormToJSON(form){
            var array = jQuery(form).serializeArray();
            var json = {};

            jQuery.each(array, function() {
                json[this.name] = this.value || '';
            });

            return json;
        }
        $('.concurrentform').bind('submit',function(e){
            e.preventDefault();
            var form = this;
            var json = ConvertFormToJSON(form);

            $.ajax({
                type: "POST",
                url: "/login-req",
                data: json,
                dataType: "json"
            });
        });
    </script>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: [],
};

// assume jquery
$('body').addClass('stop-scrolling');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../app.scss';
@import '../compile.scss';
</style>
