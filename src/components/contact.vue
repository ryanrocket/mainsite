<!-- Downstream Count: 3 FINAL - ASSETS -->

<template>
    <div scroll="no" class="contact">
        <div data-aos="fade-right" data-aos-duration="1100" class="wid secrTitle"><br>
            <h1 id="jt">{{ header }}</h1>
        </div><br><br>
        <img alt="purp-bars"  src="../assets/bars.png" class="purp"/>
        <div class="formcontainer">
            <form poster class="cform poster">
                Enter Name<br>
                <input type="text" placeholder="" id="inr4" name="fullname"/><br><br>
                Email Address<br>
                <input type="email" placeholder="" id="inr4" name="email"/><br><br>
                Message Subject<br>
                <input type="text" placeholder="" id="inr4" name="subject"/><br><br>
                Message Content<br>
                <textarea rows="4" type="text" placeholder=". . ." id="mer4" name="message"/><br><br>
                <button type="submit" text="Submit" id='submb'>Submit</button>
            </form><br>
            <p id="subtextr">Message Application Uses <b>reCAPTCHA</b> Authentication</p>
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
        $('.poster').bind('submit',function(e){
            e.preventDefault();
            var form = this;
            var json = ConvertFormToJSON(form);

            $.ajax({
                type: "POST",
                url: "/messageapplication",
                data: json,
                dataType: "json"
            });
        });
    </script>
    </div>
</template>

<style scoped lang="scss"> 
@import '../app.scss';
@import '../compile.scss';
html, body {width: 100%; height: 100%; overflow: hidden;}
</style>


<script>
export default {
    name: 'contact',
    props: ['header']
};
try{AOS.init()}catch(e){}
window.innerHeight = screen.availHeight;
window.innerWidth = screen.availWidth;
</script>