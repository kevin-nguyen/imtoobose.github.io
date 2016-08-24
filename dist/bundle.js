"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();!function e(t,i,n){function a(o,c){if(!i[o]){if(!t[o]){var r="function"==typeof require&&require;if(!c&&r)return r(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var h=i[o]={exports:{}};t[o][0].call(h.exports,function(e){var i=t[o][1][e];return a(i?i:e)},h,h.exports,e,t,i,n)}return i[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(e,t,i){function n(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var a={nodes:100,linedistance:4900,mousedistance:4e4,color:"rgba(55, 162, 135, 0.4)",nodecolor:"rgba(90, 194, 168, 1)"},s=function(e,t,i){var n=e.x,s=t.x,o=e.y,c=t.y;i.ctx.beginPath(),i.ctx.strokeStyle=a.color,i.ctx.moveTo(n,o),i.ctx.lineTo(s,c),i.ctx.stroke(),i.ctx.closePath()},o=function(){function e(t,i,n,a){if(_classCallCheck(this,e),this.x=i,this.y=n,Math.floor(3*Math.random())<1)var s=1;else s=-1;this.vx=s*(.05-.3*Math.random()),this.vy=s*(.05-.3*Math.random()),this.r=t,this.ctx=a,this.draw()}return _createClass(e,[{key:"draw",value:function(){var e=this.ctx;e.fillStyle=a.nodecolor,e.beginPath(),e.arc(this.x,this.y,this.r,0,2*Math.PI,!0),e.fill(),e.closePath(),this.bubbleanimate()}},{key:"bubbleanimate",value:function(){(this.y<0||this.y>window.innerHeight)&&(this.vy=-this.vy,this.vx=this.vx),(this.x<0||this.x>window.innerWidth)&&(this.vx=-this.vx,this.vy=this.vy),this.y+=this.vy,this.x+=this.vx}}]),e}(),c=function(){function e(t){var i=this;_classCallCheck(this,e),this.canvashome=document.getElementById(t),this.ctx=this.canvashome.getContext("2d"),this.bubbles=[],window.onresize=function(){i.changewidth(),i.createBubble()},this.changewidth(),this.createBubble()}return _createClass(e,[{key:"changewidth",value:function(){this.canvashome.width=window.innerWidth,this.canvashome.height=window.innerHeight,a.nodes=Math.floor(this.canvashome.height*this.canvashome.width/2100)}},{key:"createBubble",value:function(){a.nodes>0||(a.nodes=200),this.bubbles=[];for(var e=0;e<a.nodes;e++){var t=new o(n(1,3),n(0,this.canvashome.width),n(0,this.canvashome.height),this.ctx);this.bubbles.push(t)}}}]),e}(),r=function(){function e(t){_classCallCheck(this,e),this.paused=1,this.anim=null,this.mousepos={x:-1,y:-1},this.initCanvas(t),this.cobj=new c("homecanvas"),window.addEventListener("mousemove",this.getMousePos.bind(this))}return _createClass(e,[{key:"getMousePos",value:function(e){this.mousepos.x=e.clientX,this.mousepos.y=e.clientY}},{key:"initCanvas",value:function(e){var t=document.getElementById(e),i=document.createElement("canvas");i.classList.add("homecanvas"),i.id="homecanvas",t.insertBefore(i,t.childNodes[0])}},{key:"distancebetween",value:function(e,t){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)}},{key:"startAnimation",value:function(){this.paused=0,this.anim=window.requestAnimationFrame(this.animateGraph.bind(this))}},{key:"stopAnimation",value:function(){this.paused=1,this.anim=null}},{key:"animateGraph",value:function(){this.cobj.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);for(var e=this.cobj.bubbles,t=0;t<this.cobj.bubbles.length;t++)e[t].draw();for(t=0;t<this.cobj.bubbles.length-1;t++)if(this.distancebetween(this.mousepos,e[t])<a.mousedistance)for(var i=t+1;i<this.cobj.bubbles.length;i++)this.distancebetween(e[t],e[i])<a.linedistance&&s(e[t],e[i],this.cobj);0===this.paused&&window.requestAnimationFrame(this.animateGraph.bind(this))}}]),e}();t.exports=r},{}],2:[function(e,t,i){t.exports=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(C|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-C|ht(C(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(C|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((C|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|C))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(C(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{}],3:[function(e,t,i){t.exports=function(){var e=new TimelineLite,t=document.getElementsByClassName("workbox");e.set(t,{autoAlpha:0}).set(t[0],{autoAlpha:1});var i=0;document.addEventListener("click",function(e){/workbox/.test(e.target.id)&&i!=t.length-1&&n(i,t[i],t[i+1],function(){return i+=1})})};var n=function(e,t,i,n){console.log(e,t,i);var a=new TimelineLite;a.set(i,{y:"100%",autoAlpha:1}),a.to(t,.5,{y:"-100%"},0).to(i,.5,{y:"-=100%"},0),console.log(t,i),n()}},{}],4:[function(e,t,i){window.mobilecheck=e("./js/mobilecheck");var n=e("./js/canvashome"),a=e("./js/worksscroll"),s=null,o=1,c=document.getElementsByClassName("view"),r=document.getElementsByClassName("navelem"),l=function(e){for(var t=0;t<r.length;t++)r[t].classList.remove("activenav"),c[t].classList.remove("activeview");e.target.classList.add("activenav");var i=+e.target.id.slice(-1);o=i,c[i-1].classList.add("activeview"),1==i&&1==s.paused?s.startAnimation():s.stopAnimation()},h=function(){1!=o&&(r[o-1].classList.remove("activenav"),c[o-1].classList.remove("activeview"),o-=1,r[o-1].classList.add("activenav"),c[o-1].classList.add("activeview")),1==o&&1==s.paused&&s.startAnimation()},d=function(){o!=r.length&&(r[o-1].classList.remove("activenav"),c[o-1].classList.remove("activeview"),o+=1,r[o-1].classList.add("activenav"),c[o-1].classList.add("activeview"),s.stopAnimation())},u=function(e){38==e.keyCode?h():40==e.keyCode&&d()};if(!window.mobilecheck()){if(r){window.addEventListener("keydown",u);for(var m=0;m<r.length;m++)r[m].addEventListener("click",l)}document.getElementById("workbox1").classList.add("activeworks"),s=new n("view1"),s.startAnimation();var v=function(e){3==e&&a()};window.onload=function(){var e=0,t=document.createElement("script"),i=document.createElement("script"),n=document.createElement("script");t.onload=function(){return v(++e)},t.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenLite.min.js",document.body.appendChild(t),n.onload=function(){return v(++e)},n.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TimelineLite.min.js",document.body.appendChild(n),i.onload=function(){return v(++e)},i.src="dist/plugins/CSSPlugin.min.js",document.body.appendChild(i);for(var a=document.getElementsByClassName("workimg"),s=new Array,o=0;o<a.length;o++)s[o]=new Image,s[o].index=o,s[o].onload=function(){a[this.index].src=this.src},s[o].src="./dist/assets/Works/image0"+(o+1)+".png"}}},{"./js/canvashome":1,"./js/mobilecheck":2,"./js/worksscroll":3}]},{},[4]);