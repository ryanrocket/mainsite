// !bind ryanwans.com {[j7]}

if (window.pubData === undefined) {
  window.pubData = [];
  window.pubData.push('initLate');
}
const RWA_XHR = new XMLHttpRequest();
RWA_XHR.open('https://ipapi.co/json/', false);
RWA_XHR.send(null);
let uip = RWA_XHR.responseText.ip;
let uct = RWA_XHR.responseText.city;
let ucn = RWA_XHR.responseText.country;
let fform = `RWA_${uip}_${uct}_${ucn}`;
let localAssets = {
  path: window.location.pathname,
  host: window.location.host,
  hostname: window.location.hostname,
};
window.localStorage.setItem('uform', fform);
