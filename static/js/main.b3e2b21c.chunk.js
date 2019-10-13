(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{40:function(n,e,t){n.exports=t(56)},56:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(30),i=t.n(a),c=t(37),l=t(11),d=t(36),s=t(31),u=t.n(s),p=t(2),f=t(1);function b(){var n=Object(p.a)(["\n  width: 100%;\n  padding-bottom: 56.25%;\n  position: relative;\n"]);return b=function(){return n},n}var m=f.c.div(b());function v(){var n=Object(p.a)(["\n  position: relative;\n  -webkit-box-flex: 2;\n  -ms-flex: 2 0 900px;\n  flex: 2 0 900px;\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return v=function(){return n},n}var h=f.c.div(v()),x=function(n){var e=n.active,t=n.autoplay,r=n.endCallback,a=n.progressCallback;return o.a.createElement(h,null,o.a.createElement(m,null,o.a.createElement(u.a,{width:"100%",height:"100%",style:{position:"absolute",top:"0"},playing:t,controls:!0,url:e.video,onEnded:r,onProgress:a})))};function g(){var n=Object(p.a)(['\n  background: #696969;\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: #fff;\n  padding: 0 20px;\n  margin: 0 0 20px 0;\n  min-height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n']);return g=function(){return n},n}var y=f.c.div(g());function w(){var n=Object(p.a)(["\n  background: #565656;\n  font-size: 0.8em;\n  padding: 2px 5px;\n  height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 5px;\n"]);return w=function(){return n},n}var k=f.c.div(w()),O=function(n){var e=n.active,t=n.total;return o.a.createElement(y,null,o.a.createElement("p",null," ",e.title," "),o.a.createElement(k,null,e.num," / ",t))};function E(){var n=Object(p.a)(['\n  font-family: "Hind", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: none;\n  border: ',";\n  font-size: 1.6em;\n  color: ",";\n  min-height: 50px;\n  padding: 10px 20px;\n  margin: 0 0 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: ",";\n  cursor: pointer;\n  position: relative;\n\n  ::before {\n    display: ",';\n    content: "";\n    width: 10px;\n    min-height: 10px;\n    background: #409f4e;\n    border-radius: 50px;\n    position: absolute;\n    left: 0;\n    top: 19px;\n  }\n\n  .wbn-player__video-nr {\n    flex-grow: 1; /* default 0 */\n    max-width: 30px;\n    padding-right: 20px;\n    border-right: 2px solid #565656;\n  }\n\n  .wbn-player__video-name,\n  .wbn-player__video-name a {\n    flex-grow: 10; /* default 0 */\n    padding: 0 0 0 10px;\n    color: ',";\n    text-align: left;\n    text-decoration: none;\n    display: block;\n  }\n\n  .wbn-player__video-time {\n    background: #565656;\n    min-width: 45px;\n    color: #fff;\n    font-size: 0.8em;\n    padding: 0px 5px;\n    height: 20px;\n    text-align: center;\n    border-radius: 5px;\n    margin: 0 0 0 5px;\n  }\n\n  .wbn-player__video-download {\n    flex-grow: 1; /* default 0 */\n    color: ",';\n    margin: 0 0 0 20px;\n    max-width: 30px;\n    padding: 0 20px;\n    border-left: 2px solid #565656;\n    font-family: "fontello";\n    font-style: normal;\n    font-weight: normal;\n  }\n\n  .wbn-player__video-download a {\n    color: ',";\n  }\n\n  .active {\n    opacity: 0.1;\n  }\n"]);return E=function(){return n},n}var j=f.c.div(E(),(function(n){return n.active?"2px dotted #696969":"none"}),(function(n){return n.theme.color}),(function(n){return n.active?"5px":"0"}),(function(n){return n.active||!n.played?"none":"block"}),(function(n){return n.theme.color}),(function(n){return n.played?"#fff":n.theme.color}),(function(n){return n.played&&!n.active?"#fff":n.theme.color})),P=function(n){var e=n.video,t=n.active,r=n.played;return o.a.createElement(j,{active:t,played:r},o.a.createElement("div",{className:"wbn-player__video-nr"}," ",e.num," "),o.a.createElement("div",{className:"wbn-player__video-name"}," ",e.title," "),o.a.createElement("div",{className:"wbn-player__video-time"}," ",e.duration," "))};function _(){var n=Object(p.a)(["\n  padding: 0 20px;\n  overflow-y: auto;\n  height: 28vw;\n  max-height: 500px;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 2px;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"]);return _=function(){return n},n}var M=f.c.div(_()),S=t(12);function I(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function H(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(t,!0).forEach((function(e){Object(l.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var V=function(n){return function(e){var t=H({},e,{video:H({},e.video,{title:o.a.createElement(S.b,{to:{pathname:"/".concat(e.video.id),autoplay:!0}},e.video.title)})});return o.a.createElement(n,t)}}(P),N=function(n){var e=n.videos,t=n.active;return o.a.createElement(M,null,e.map((function(n){return o.a.createElement(V,{key:n.id,video:n,active:n.id===t.id,played:n.played})})))};function z(){var n=Object(p.a)(['\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: ',';\n  padding: 0;\n  margin: 20px;\n\n  /* CSS taken from https://www.w3schools.com/howto/howto_css_switch.asp */\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 24px;\n  }\n\n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 16px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  input:checked + .slider {\n    background-color: #3d5138;\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  input:checked + .slider:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n  }\n\n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 30px;\n  }\n\n  .slider.round:before {\n    border-radius: 50%;\n  }\n']);return z=function(){return n},n}var D=f.c.div(z(),(function(n){return n.theme.color})),C=function(n){var e=n.nightModeHandle,t=n.nightMode;return o.a.createElement(D,null,o.a.createElement("span",null,"Nightmode: "),o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:t,onChange:e}),o.a.createElement("span",{className:"slider round"})))};function J(){var n=Object(p.a)(["\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 450px;\n  flex: 1 1 450px;\n  overflow: hidden;\n  color: white;\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return J=function(){return n},n}var T=f.c.div(J()),X=function(n){var e=n.videos,t=n.active,r=n.nightModeHandle,a=n.nightMode;return o.a.createElement(T,null,o.a.createElement(C,{nightModeHandle:r,nightMode:a}),o.a.createElement(O,{active:t,total:e.length}),o.a.createElement(N,{videos:e,active:t}))};function A(){var n=Object(p.a)(["\n  background: ",";\n  border: ",";\n  max-width: 1800px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  max-height: 863px;\n  transition: all 0.5s ease;\n\n  @media screen and (max-width: 1400px) {\n    display: block;\n    max-height: 10000px;\n  }\n"]);return A=function(){return n},n}var B=f.c.div(A(),(function(n){return n.theme.bgcolor}),(function(n){return n.theme.border}));function W(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function q(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?W(t,!0).forEach((function(e){Object(l.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):W(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var F=function(n){var e=n.match,t=n.history,a=n.location,i=JSON.parse(document.querySelector('[name="videos"]').value),l=JSON.parse(localStorage.getItem("".concat(i.playlistId))),s=Object(r.useState)({videos:l?l.videos:i.playlist,activeVideo:l?l.activeVideo:i.playlist[0],nightMode:!l||l.nightMode,playlistId:l?l.playlistId:i.playlistId,autoplay:!1}),u=Object(d.a)(s,2),p=u[0],b=u[1];Object(r.useEffect)((function(){localStorage.setItem("".concat(p.playlistId),JSON.stringify(q({},p)))}),[p]),Object(r.useEffect)((function(){var n=e.params.activeVideo;if(void 0!==n){var r=p.videos.findIndex((function(e){return e.id===n}));b((function(n){return q({},n,{activeVideo:n.videos[r],autoplay:a.autoplay})}))}else t.push({pathname:"/".concat(p.activeVideo.id),autoplay:!1})}),[t,a.autoplay,e.params.activeVideo,p.activeVideo.id,p.videos]);return o.a.createElement(f.a,{theme:p.nightMode?L:R},null!==p.videos?o.a.createElement(B,null,o.a.createElement(x,{active:p.activeVideo,autoplay:p.autoplay,endCallback:function(){var n=e.params.activeVideo,r=p.videos.findIndex((function(e){return e.id===n})),o=r===p.videos.length-1?0:r+1;t.push({pathname:"".concat(p.videos[o].id),autoplay:!1})},progressCallback:function(n){if(n.playedSeconds>10&&n.playedSeconds<11){var e=Object(c.a)(p.videos);e.find((function(n){return n.id===p.activeVideo.id})).played=!0,b((function(n){return q({},n,{videos:e})}))}}}),o.a.createElement(X,{videos:p.videos,active:p.activeVideo,nightModeHandle:function(){b((function(n){return q({},n,{nightMode:!n.nightMode})}))},nightMode:p.nightMode})):null)},L={bgcolor:"#353535",bgcolorItem:"#414141",bgcolorItemActive:"#405c63",bgcolorPlayed:"#526d4e",border:"none",borderPlayed:"none",color:"#fff"},R={bgcolor:"#fff",bgcolorItem:"#fff",bgcolorItemActive:"#80a7b1",bgcolorPlayed:"#7d9979",border:"1px solid #353535",borderPlayed:"none",color:"#353535"},$=t(7);function G(){var n=Object(p.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-size: 10px;\n    font-family: 'Hind', sans-serif;\n  }\n"]);return G=function(){return n},n}var K=Object(f.b)(G()),Q=function(){return o.a.createElement(S.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement($.c,null,o.a.createElement($.a,{exact:!0,path:"/",component:F}),o.a.createElement($.a,{exact:!0,path:"/:activeVideo",component:F})),o.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b3e2b21c.chunk.js.map