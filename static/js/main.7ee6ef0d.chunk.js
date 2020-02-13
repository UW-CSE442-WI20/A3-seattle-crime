(this["webpackJsonpA3-seattle-crime"]=this["webpackJsonpA3-seattle-crime"]||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=(a(86),a(6)),i=a(5),u=a(9),s=a(8),m=a(10),p=a(16),d=(a(50),a(18)),b=a(14);function f(){var e=Object(d.a)(["\n    margin: 0 0;\n    padding: 0px 500px;\n    font-size: 1.5em;\n    display: inline-block;\n\n  "]);return f=function(){return e},e}function h(){var e=Object(d.a)(["\n    background: pink;\n  "]);return h=function(){return e},e}function g(){var e=b.a.div(h()),t=b.a.div(f());return r.a.createElement(e,null,r.a.createElement(t,null,"CRIME IN MY AREA"))}var j=a(145);function v(){var e=Object(d.a)(["\n        // padding: 50px;\n   "]);return v=function(){return e},e}function O(e){return"".concat(e)}function E(e){var t=Object(b.a)(j.a)(v());return r.a.createElement("div",null,r.a.createElement("h3",null,"Highlight Features Containing Similar Data"),r.a.createElement("p",null,"Hover over counties to highlight counties that share the same name."),r.a.createElement("div",null,r.a.createElement(t,{defaultValue:e.radius,getAriaValueText:O,"aria-labelledby":"discrete-slider",max:2,min:0,step:.25,marks:[{value:0,label:"0"},{value:.5,label:"0.5"},{value:1,label:"1"},{value:1.5,label:"1.5"},{value:2,label:"2"}],valueLabelDisplay:"auto",onChange:function(t,a){e.updateRadius(a)}})))}var k=a(7),x=a(146),y=(a(90),a(144)),C=a(72),w=a.n(C),S=a(47),A=a.n(S),D=a(71),z=a.n(D);function M(){var e=Object(d.a)(["\n    font-weight: bold;\n    font-size: 2em;\n    text-align: center;\n"]);return M=function(){return e},e}function L(){var e=Object(d.a)(["\n    margin: 0px; 0px;\n"]);return L=function(){return e},e}var N=Object(b.a)(y.a)(L()),R=b.a.div(M()),I=[{title:"Misdemeanors",value:10,color:"#E38627"},{title:"Assaults",value:15,color:"#C13C37"},{title:"Murders",value:20,color:"#6A2135"}],T=[{text:"1990",value:500},{text:"1991",value:300}];var B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return 0!==this.props.markers.length&&this.props.categoryData?r.a.createElement("div",null,r.a.createElement(N,{"aria-label":"close",onClick:function(){e.props.updateCheckDataCon(!1),e.props.markers.length=0}},r.a.createElement(w.a,null)),r.a.createElement(R,null,"Crime Data"),r.a.createElement("p",null,"Latitude: ",this.props.markers[0].latitude),r.a.createElement("p",null,"Longitude: ",this.props.markers[0].longitude),r.a.createElement("p",null,"Radius: ",this.props.radius),r.a.createElement("p",null,"Crime Score: "),console.log("CATEGORY: ",this.props.categoryData),r.a.createElement("p",null,"LOVE: ",this.props.categoryData.statusText),r.a.createElement(A.a,{data:I}),r.a.createElement(z.a,{style:{margin:"20px"},height:500,width:document.getElementById("right-col").offsetWidth,data:T,ylabel:"Number of Crimes",xlabel:"Year"})):r.a.createElement("div",null)}}]),t}(n.PureComponent),J=a(73),Y=a(74),Q=a.n(Y);function W(){var e=Object(d.a)(["\n    float: left;\n    padding: 10px;\n    width: 30%;\n    word-wrap: break-word;    \n  "]);return W=function(){return e},e}function H(){var e=Object(d.a)(["\n    background: white;\n  "]);return H=function(){return e},e}function V(){var e=Object(d.a)(["\n    opacity: 0.2;\n  "]);return V=function(){return e},e}function Z(){var e=Object(d.a)(["\n        height: 500px;\n        width: 600px;\n        margin: 200px 0px 0px 1300px;\n        background: white;\n  "]);return Z=function(){return e},e}function F(){var e=Object(n.useState)(0),t=Object(k.a)(e,2),a=(t[0],t[1],Object(n.useState)(0)),c=Object(k.a)(a,2),l=(c[0],c[1],Object(n.useState)(1)),o=Object(k.a)(l,2),i=o[0],u=o[1],s=Object(n.useState)([]),m=Object(k.a)(s,2),d=m[0],f=m[1],h=Object(n.useState)(null),g=Object(k.a)(h,2),j=g[0],v=g[1],O=function(e){var t=Object(k.a)(e.lngLat,2),a=t[0],n=t[1];f((function(e){return[{longitude:a,latitude:n}]}));var r=y+a+"/"+n+"/0.1";console.log(r),Q.a.get(r).then((function(e){console.log(e),v(e),console.log(j)}))},y="http://ec2-18-188-137-58.us-east-2.compute.amazonaws.com:8000/crimes/",C=(Object(b.a)(x.a)(Z()),Object(b.a)(J.Circle)(V())),w=Object(n.useState)({latitude:47.6062,longitude:-122.3321,width:"100%",height:"95vh",zoom:10.5}),S=Object(k.a)(w,2),A=S[0],D=(S[1],Object(b.a)(p.a)(H()),Object(n.useState)(!1)),z=Object(k.a)(D,2),M=z[0],L=z[1],N=Object(n.useState)(!1),R=Object(k.a)(N,2),I=(R[0],R[1]),T=Object(n.useState)({check1:!0,check2:!1,check3:!1,check4:!1,check5:!1,check6:!1}),Y=Object(k.a)(T,2),F=Y[0],G=Y[1],P=b.a.div(W()),X=Object(n.useState)(!1),q=Object(k.a)(X,2),K=(q[0],q[1]),U=Object(n.useState)(null),$=Object(k.a)(U,2),_=$[0],ee=($[1],function(){console.log(_)});return r.a.createElement("div",null,r.a.createElement(P,{className:"column left"},r.a.createElement(E,{filters:F,updateFilters:G,radius:i,updateRadius:u})),r.a.createElement(P,{className:"column middle"},r.a.createElement(p.c,Object.assign({},A,{mapboxApiAccessToken:"pk.eyJ1IjoibXMxOTA3IiwiYSI6ImNrNjhjMXB0eTAzZjUzZm9nbmQzMGc4Y3QifQ.ZuJyRlBq6Wo2l_RPrARpnQ",mapStyle:"mapbox://styles/ms1907/ck68cppyd0bbp1ipm1z710o6z",onDblClick:O,onClick:function(){I(!1),console.log("CHECK"),console.log((function(){ee()})),ee()}}),r.a.createElement(p.a,{key:"a",latitude:A.latitude,longitude:A.longitude,offsetLeft:-800,offsetTop:-400}),d.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(p.a,Object.assign({},e,{key:t,draggable:!0,onDrag:O}),r.a.createElement("svg",{height:30,viewBox:"0 0 24 24",className:"aaa",style:{cursor:"pointer",fill:M?"#333":"#d00",stroke:"none",transform:"translate(".concat(-15,"px,").concat(-30,"px)")},onClick:function(){K(!0),I(!0),console.log(d)},onMouseEnter:function(){L(!0)},onMouseLeave:function(){L(!1)}},r.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n    c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n    C20.1,15.8,20.2,15.8,20.2,15.7z"}))),r.a.createElement(p.a,Object.assign({},e,{key:t+1,draggable:!0,onDrag:O,offsetLeft:-50*i,offsetTop:-50*i}),r.a.createElement(C,{r:50*i,fill:{color:"#2409ba"}})))})))),r.a.createElement(P,{className:"column right",id:"right-col"},r.a.createElement(B,{markers:d,setCheck:K,updateCheckDataCon:I,radius:i,categoryData:j})))}n.Component;var G=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e){e.exports=JSON.parse("{}")},81:function(e,t,a){e.exports=a(128)},86:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/map.e1d7f378.geojson"}},[[81,1,2]]]);
//# sourceMappingURL=main.7ee6ef0d.chunk.js.map