<template>
  <div class="wrap">
    <script type="application/javascript">
  document.title = "SCM Landing";
  // console["clear"]();
  console["log"]("Running SCM (School Class Manager) Web API by Ryan Wans");
  $("#logo").text("SCM Landing by Ryan Wans");
    </script>
    <!-- CONTAINERS -->
    <!----->
    <div timeframe frame>
      <div id="curtime">TIME: [grabbing...]</div>
      <div id="timeuntil">TIME UNTIL</div>
      <div id="nextclass">NEXT CLASS</div>
    </div>

    <div dateframe frame>
      <div id="todaysdate">TODAYS DATE</div>
      <div id="date">[grabbing...]</div>
      <div id="abday">A DAY</div>
    </div>

    <div todoframe frame></div>

    <div classframe frame>
      <div id="cun">CLASSES UP NEXT</div>
      <hr />
    </div>

    <div menuframe frame></div>
    <!----->
  </div>
</template>

<script>
import * as manager from "../assets/school/manager.ts";
import { setInterval, setTimeout } from "timers";
$(document).ready(function() {
  setTimeout(function() {}, 1000);
  manager.use("moment");
  manager.grabData(true);
  manager.replaceElm("#date", "date");
  setInterval(function() {
    // event loop
    manager.replaceElm("#curtime", "timenow");
  }, 1000);
});
export default {
  name: "SCHOOL"
};
</script>

<style lang="scss" scoped>
@import "../school.scss";
</style>