(this["webpackJsonpdrum-kit-01"]=this["webpackJsonpdrum-kit-01"]||[]).push([[0],[,,,,function(e,n,a){e.exports=a(12)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),r=a(2),s=a.n(r),o=(a(9),a(3)),d=(a(10),function(e){var n=["key"],a=e.code,r=e.char,s=e.sound,o=e.keyPressed;Object(t.useEffect)((function(){document.querySelector('[data-key="'.concat(a,'"]')).addEventListener("transitionend",d)}),[a]);var d=function(e){"transform"===e.propertyName&&e.target.classList.remove("playing")};return o===a&&n.push("playing"),c.a.createElement("div",{"data-key":a,className:n.join(" ")},c.a.createElement("kbd",null,r),c.a.createElement("span",{className:"sound"},s))}),u=function(e){var n=e.code,a=e.src,t=e.keyPressed;if(n===t){var r=document.querySelector('audio[data-key="'.concat(t,'"]'));r.currentTime=0,r.play()}return c.a.createElement("audio",{"data-key":n,src:a})},i=(a(11),function(e){var n=Object(t.useState)(),a=Object(o.a)(n,2),r=a[0],s=a[1],i=[{code:"65",char:"A",sound:"clap",src:"sounds/clap.wav"},{code:"83",char:"S",sound:"hihat",src:"sounds/hihat.wav"},{code:"68",char:"D",sound:"kick",src:"sounds/kick.wav"},{code:"70",char:"F",sound:"openhat",src:"sounds/openhat.wav"},{code:"71",char:"G",sound:"boom",src:"sounds/boom.wav"},{code:"72",char:"H",sound:"ride",src:"sounds/ride.wav"},{code:"74",char:"J",sound:"snare",src:"sounds/snare.wav"},{code:"75",char:"K",sound:"tom",src:"sounds/tom.wav"},{code:"76",char:"L",sound:"tink",src:"sounds/tink.wav"}];return Object(t.useEffect)((function(){window.addEventListener("keydown",(function(e){return s("".concat(e.keyCode))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"keys"},i.map((function(e){return c.a.createElement(d,Object.assign({key:e.code},e,{keyPressed:r}))}))),i.map((function(e){return c.a.createElement(u,Object.assign({key:e.code},e,{keyPressed:r}))})))});var l=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null))};s.a.render(c.a.createElement(l,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.434cc9ae.chunk.js.map