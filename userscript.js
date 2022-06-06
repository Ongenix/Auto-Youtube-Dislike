// ==UserScript==
// @name         Auto Youtube Dislike
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically dislikes Youtube videos/shorts
// @author       Ongenix
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

const author = 'Ongenix'

// ================
var disliked_content = ["Minecraft","Roblox","Fortnite"]
// ================

function checkURLChange(){
    if(window.location.href != oldURL){

    for (var i = 0;i < disliked_content.length; i++) {
    if (((document.body.innerHTML).toLowerCase()).includes((disliked_content[i]).toLowerCase())) {
    if ((location.href).includes("watch")) {document.querySelectorAll("[aria-label='Dislike this video']")[0].click()};
    if ((location.href).includes("short")) {document.querySelectorAll("[aria-label='Dislike this video']")[0].click()};
}
}
    oldURL = window.location.href;
    }
}

var oldURL = window.location.href;
setInterval(checkURLChange, 1000);
