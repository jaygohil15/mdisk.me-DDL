// ==UserScript==
// @name         mdisk.me
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JethaLal_420
// @match        https://mdisk.me/convertor/*
// @icon         https://www.google.com/s2/favicons?domain=mdisk.me
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let vid, url
    url = 'https://diskuploader.entertainvideo.com/v1/file/cdnurl?param='
    const pageLoaded = () => {
        vid = window.location.href
    }
    const doSomething = (videoid) => {
        url = url.concat(videoid)
        console.log(url)

        let res = fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.download);
            window.open(data.download, '_self')
        }).catch(function() {
            console.log("Booo");
        })
    }
    let intervalId = setInterval(() => {
        pageLoaded()

        if (vid){
            vid = vid.split('/').slice(-1)[0]
            console.log(vid)
            doSomething(vid)
            clearInterval(intervalId)
        }
    },1000)
    })();
