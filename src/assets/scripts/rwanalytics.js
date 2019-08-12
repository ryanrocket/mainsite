// !bind ryanwans.com {[j7]}

if (window.pubData === undefined) {
  window.pubData = [];
  window.pubData.push('initLate');
}
const RWA_XHR = new XMLHttpRequest();
RWA_XHR.open('https://ipapi.co/json/', false);
RWA_XHR.send(null);
const uip = RWA_XHR.responseText.ip;
const uct = RWA_XHR.responseText.city;
const ucn = RWA_XHR.responseText.country;
const fform = `RWA_${uip}_${uct}_${ucn}`;
const localAssets = {
  path: window.location.pathname,
  host: window.location.host,
  hostname: window.location.hostname,
};
window.localStorage.setItem('uform', fform);
