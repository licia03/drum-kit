(this["webpackJsonpdrum-kit-01"]=this["webpackJsonpdrum-kit-01"]||[]).push([[0],[,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(2),o=t.n(r),d=(t(8),t(9),function(e){var n=e.code,t=e.char,r=e.sound;Object(a.useEffect)((function(){Array.from(document.querySelectorAll(".key")).forEach((function(e){return e.addEventListener("transitionend",o)})),window.addEventListener("keydown",d)}),[]);var o=function(e){"transform"===e.propertyName&&e.target.classList.remove("playing")},d=function(e){var n=document.querySelector('audio[data-key="'.concat(e.keyCode,'"]')),t=document.querySelector('div[data-key="'.concat(e.keyCode,'"]'));n&&(t.classList.add("playing"),n.currentTime=0,n.play())};return c.a.createElement("div",{"data-key":n,class:"key"},c.a.createElement("kbd",null,t),c.a.createElement("span",{class:"sound"},r))}),u=(t(10),function(e){return c.a.createElement("div",{class:"keys"},[{code:"65",char:"A",sound:"clap"},{code:"83",char:"S",sound:"hihat"},{code:"68",char:"D",sound:"kick"},{code:"70",char:"F",sound:"openhat"},{code:"71",char:"G",sound:"boom"},{code:"72",char:"H",sound:"ride"},{code:"74",char:"J",sound:"snare"},{code:"75",char:"K",sound:"tom"},{code:"76",char:"L",sound:"tink"}].map((function(e){return c.a.createElement(d,e)})))});var s=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null))};o.a.render(c.a.createElement(s,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.87bd3772.chunk.js.map