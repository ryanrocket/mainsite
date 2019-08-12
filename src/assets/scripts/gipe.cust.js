// Gipe by Ryan Wans
// Powerful Debug Analytics
// Dist. RWApi

"use strict";

// globals
const tag = "[RWAPI] Gipe >> ";


// undefined
var stage,
    console,
    GIPE_DEBUG_MODE = false,
    stages = ['staging', 'testing', 'production', 'preview'],
    GIPE_ERR_INDEX = 0,
    GIPE_XML_REQ = new XMLHttpRequest,
    GIPE_USING_GA = false,
    GIPE_GA_SESSION = "NA",
    iii,xxx,yyy,lfal,gipe_cont,
    GIPE_USER_BROWSER,
    GIPE_FULLY_RENDERED = false,
    GIPE_ENVIRONMENT_SETTINGS = {},
    GIPE_POST_KEY_PUBLIC,
    GIPE_POST_DELAY = 2000,
    GIPE_PRE_CONFIRMATION,
    GIPE_PREVENT_PLAYBACK = true,
    GIPE_ERR_OCCURED = false;

(function() {
    window['console']['inform'] = function(mes) {console.warn(tag + mes);} 
    console.inform("Loaded Version 0.0.0"); 

    // Be careful with window.dataLayer becuase it is also used by GA
    // We make sure its undefined before assignment b/c we could accidently clear it
    (window.dataLayer === null || window.dataLayer === undefined) ? window.dataLayer=[] : function(){window.dataLayer;GIPE_USING_GA=true;}
    (window.gipeData === null || window.gipeData === undefined) ? window.gipeData={} : window.gipeData={};
    // vanilla reassure
    if(window.gipeData === undefined) {window.gipeData = {}}
    if(GIPE_USING_GA){for(iii=0; iii<window.dataLayer.length; iii++) {
        if(window.dataLayer[iii][0] === "config") {GIPE_GA_SESSION = window.dataLayer[iii][1];} else {}
    }}
    const dlpush = function() {window.dataLayer.push(arguments); lfal=arguments; GIPE_ENVIRONMENT_SETTINGS[String(lfal[0])] = lfal[1];}
    const dlstore = function(arg) {window.localStorage.setItem("GIPE-DATA", arg);}
    function errtag(ind, er, url, line) {let d=new Date;window.gipeData[ind] = {"MES": er, "SCRIPT_URL": url, "LINE": line, "STAGE": window.releaseStage, "TIME": d.toDateString(), "GA_SESSION": GIPE_GA_SESSION, "BROWSER": GIPE_CAPTURE_BROWSER(), "RENDERED": GIPE_FULLY_RENDERED, "PAGE": window.location.href};}
    window.errtag = function(i,e,u,l) {errtag(i,e,u,l);}
    dlpush('gipe-report', true);
    dlpush('gipe-callback-dest', 'default');
    dlpush('gipe-using-ga', GIPE_USING_GA);
    dlpush('gipe-ga-session', GIPE_GA_SESSION);

    // Define Release Stage Global - Used Later
    window.releaseStage = window.releaseStage || null;

    // Error Function Redirection
    window.onerror = window.gipeCapture;
    
})();

// Define Gipe Function To Begin Analytics
window.gipe = function(opts) {
    (window.releaseStage === null) ? this.console.error(tag+"No Release Stage Set!") : null;
    (stages.includes(window.releaseStage)) ? null : this.console.error(tag+"Invalid Release Stage!"); 
    if (window.releaseStage === "production"){
        if(!GIPE_DEBUG_MODE) {console.clear();console.warn = function() {}; console.error = function() {}}
    } else if (window.releaseStage === "testing"){
        console.error(" \n \n \n RELEASE STAGE :: TESTING \n \n \n\n"); window.alert("Warning! This site is in the testing stage");
    } else if (window.releaseStage === "staging"){
        console.inform("Website is staging...");}
    
    // Parse Gipe Func Parameters
    (opts === undefined || opts.apiKey === null || opts.apiKey === undefined) ? function() {gipe_cont = false;throw new Error ("No API Key Provided On Function GIPE Execution!")} : gipe_cont=true;
    (gipe_cont) ? GIPE_POST_KEY_PUBLIC = opts.apiKey : null;

    GIPE_ENVIRONMENT_SETTINGS['gipe-api-key'] = GIPE_POST_KEY_PUBLIC;
    // Push to storage for backup
    window.localStorage.setItem("GIPE-DATA", JSON.stringify(GIPE_ENVIRONMENT_SETTINGS));
    window.gipeData['XXX-ENVIRONMENT'] = (GIPE_ENVIRONMENT_SETTINGS);
    window.dataLayer.push(GIPE_ENVIRONMENT_SETTINGS);
}

// Try to detect render in vanilla
window.onloadend = function() {GIPE_FULLY_RENDERED = true;}
window.onloadstart = function() {GIPE_FULLY_RENDERED = false;}

// Try to detect render using jQuery
// This way if can error occurs on or after a ready
// function, we can detect it; vanilla can't do this
try { $(document).ready(function(){GIPE_FULLY_RENDERED=true;}) } catch(e) {}

// Error Capturing
window.gipeCapture = function(err, url, line) {
    // Detect Incomplete Page Load (Wont Always Work)
    errtag(GIPE_ERR_INDEX, err, url, line);
    GIPE_ERR_INDEX++;
    GIPE_ERR_OCCURED = true;

    // Try to brute force after error encountered
    console.error = function() {}
    return true; 
}

window.gipe.analytics = function() {
    window.console.clear();
    if(GIPE_ERR_INDEX >= 0) {
        console.inform("Here is your page report:\n>> Errors     -> " + GIPE_ERR_INDEX);
    } else if(GIPE_ERR_INDEX = 1) {
        console.inform("Here is your page report:\n>> Errors     -> " + GIPE_ERR_INDEX+"\n\n>> Error from: " + window.gipeData[0]['URL']+"\n   -> Line Number: "+window.gipeData[0]["LINE"]+"\n   -> Error Trace: " + window.gipeData[0]["MES"] + "\n   -> Solve This: https://stackoverflow.com/search?q="+window.gipeData[0]["MES"].replace(" ", "%20"));
    } else if(GIPE_ERR_INDEX = 2) {
        console.inform("Here is your page report:\n>> Errors     -> " + GIPE_ERR_INDEX+"\n\n>> Error from: " + window.gipeData[0]['URL']+"\n   -> Line Number: "+window.gipeData[0]["LINE"]+"\n   -> Error Trace: " + window.gipeData[0]["MES"]
        + "\n\n>> Error from: " + window.gipeData[1]['URL']+"\n   -> Line Number: "+window.gipeData[1]["LINE"]+"\n   -> Error Trace: " + window.gipeData[1]["MES"]);
    }
}

// Backup Redirect
window.onerror = function(err, url, line) {window.gipeCapture(err, url, line);}

function GIPE_CAPTURE_BROWSER() { 
   if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {GIPE_USER_BROWSER = ('Opera');}
   else if(navigator.userAgent.indexOf("Chrome") != -1 ){GIPE_USER_BROWSER = ('Chrome');}
   else if(navigator.userAgent.indexOf("Safari") != -1){GIPE_USER_BROWSER = ('Safari');}
   else if(navigator.userAgent.indexOf("Firefox") != -1 ) { GIPE_USER_BROWSER = ('Firefox');}
   else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {GIPE_USER_BROWSER = ('IE'); }  
   else {GIPE_USER_BROWSER = ('unknown');}
   return GIPE_USER_BROWSER;
}

function GIPE_REQUEST_POSTER() {
    // temp statics
    if (GIPE_PREVENT_PLAYBACK) {
        let gipe_cors_url = "https://cors-anywhere.herokuapp.com/https://ryanwans.com/gipe/socket/analytics/input";
        let gipe_pre_url = "https://ryanwans.com/gipe/socket/analytics/input";

        GIPE_XML_REQ.open("POST", gipe_cors_url, false);
        GIPE_XML_REQ.setRequestHeader('Content-Type', 'application/json');
        GIPE_XML_REQ.setRequestHeader('Access-Control-Allow-Origin', gipe_pre_url);
        GIPE_XML_REQ.send(JSON.stringify({cmd: '!get access [key]', request_url: window.location.href, apikey: GIPE_POST_KEY_PUBLIC}));

        setTimeout(function(){}, 1000);

        GIPE_PRE_CONFIRMATION = JSON.parse(GIPE_XML_REQ.responseText);
        window.gipeData['XXX-PERMISSION'] = (GIPE_PRE_CONFIRMATION);

        if(String(GIPE_PRE_CONFIRMATION.access) === "allowed" && GIPE_PRE_CONFIRMATION.forward_key === GIPE_POST_KEY_PUBLIC) {
            GIPE_XML_REQ.open("POST", gipe_pre_url, false);
            GIPE_XML_REQ.setRequestHeader('Content-Type', 'application/json');
            GIPE_XML_REQ.send(JSON.stringify({cmd: '!send packet [now]', gipeData: window.gipeData, envSet: GIPE_ENVIRONMENT_SETTINGS, apikey: GIPE_POST_KEY_PUBLIC}));
        } else {window.console.inform(GIPE_PRE_CONFIRMATION.message);window.console.inform(GIPE_PRE_CONFIRMATION.access)}
        // Destory self to prevent execution > 1
        const GIPE_PREVENT_PLAYBACK = false;

        return true;
    } else {}
}

// Final Loop. Ensures Report
(function() {
    // insert local parametrics
    

    // APS
    setTimeout(function(){}, GIPE_POST_DELAY);
    
    setTimeout(function() {
        if(!GIPE_ERR_OCCURED) {} else {
            window.gipeData['XXX-PARAMETRICS'] = {"TOTAL_ERRORS": GIPE_ERR_INDEX, "GIPE_RENDER": GIPE_FULLY_RENDERED, "DOCUMENT_RENDER": document.readyState}
            GIPE_REQUEST_POSTER()
        }
    }, GIPE_POST_DELAY);    
})();