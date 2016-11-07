!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(2),a=i(r),u=n(3),s=i(u),o=n(4),h=i(o),c=n(7),l=i(c),f=n(8),d=i(f),v=n(9),y=i(v),m=n(10),g=i(m),p=n(11),b=i(p),w=n(12),k=i(w),x=n(6);!function(t){t.Canvas=a["default"],t.Spritesheet=s["default"],t.Sprite=h["default"],t.Phase=l["default"],t.Timer=d["default"],t.Effect=g["default"],t.Vector=y["default"],t.Geometry=b["default"],t.Perlin=k["default"],t.contrain=x.contrain,t.map=x.map}(window)},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,i,r){n(this,t),this.TO_RADIANS=Math.PI/180,this.width=i,this.height=r,this.canvasId=e,this.canvas=null,this.context=null}return i(t,[{key:"init",value:function(){this.canvas=document.getElementById(this.canvasId),this.context=this.canvas.getContext("2d"),this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px"}},{key:"clear",value:function(){this.context.clearRect(0,0,this.width,this.height)}},{key:"drawImage",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];this.context.drawImage.apply(this.context,e)}},{key:"getPixel",value:function(){var t=this.context.getImageData(0,0,this.width,this.height);return t}},{key:"setPixel",value:function(t){return this.context.putImageData(t,0,0),this}},{key:"rotate",value:function(t,e,n,i,r,a){this.context.save(),this.context.translate(e,n),this.context.rotate(a*this.TO_RADIANS),this.drawImage(t,-(i/2),-(r/2)),this.context.restore()}},{key:"rotateAnime",value:function(t,e,n,i,r,a,u){this.context.save(),this.context.translate(e+i/2,n+r/2),this.context.rotate(a*this.TO_RADIANS),this.drawImage(t,u[0]*i,u[1]*r,i,r,-(i/2),-(r/2),i,r),this.context.restore()}}]),t}();e["default"]=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r={},a=function(){function t(e,i){var r=i.grid,a=i.width,u=i.height;n(this,t),this.image=new Image,this.image.src=e,this.image.addEventListener("load",function(){}),this.grid=r||1,this.width=a||32,this.height=u||32}return i(t,null,[{key:"getInstance",value:function(e,n){var i=n.grid,a=n.width,u=n.height,s=void 0,o=e+":"+i+":"+a+":"+u;return r[o]?s=r[o]:(s=new t(e,{grid:i,width:a,height:u}),r[o]=s),s}}]),t}();e["default"]=a},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){return t instanceof h["default"]?this.spritesheet=t:this.load(t),this}function u(t){var e=0;return this.anim.delay++>=this.cadence&&(this.anim.delay=0,this.anim.indexCounter++,this.anim.indexCounter>=t.length&&(this.anim.indexCounter=0),e=this.anim.indexCounter,this.anim.currentFrame=t[e]),this.anim.currentFrame}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(3),h=i(o),c=n(5),l=i(c),f=n(6),d=function(){function t(e,n){r(this,t),this.spritesheet=null,this.is_pattern=!1,this.pattern=null,this.pattern_x_times=0,this.cadence=n||3,this._tmp={},this.anim=new l["default"](0,0,0),this.ctx=null,a.call(this,e)}return s(t,[{key:"load",value:function(t){return this.spritesheet=h["default"].getInstance(t),this}},{key:"draw",value:function(t,e,n,i){var r=[],a=void 0;Number.isInteger(i)?(r=(0,f.indexToXY)(Math.abs(i),this.grid),t.drawImage(this.image,r[0]*this.width,r[1]*this.height,this.width,this.height,e,n,this.width,this.height)):Array.isArray(i)?(a=u.call(this,i),r=(0,f.indexToXY)(Math.abs(a),this.grid),t.drawImage(this.image,r[0]*this.width,r[1]*this.height,this.width,this.height,e,n,this.width,this.height)):t.drawImage(this.image,e,n,this.width,this.height)}},{key:"rot",value:function(t,e,n,i){t.rotate(this.image,e,n,this.width,this.height,i)}},{key:"rotAnim",value:function(t,e,n,i,r){var a=u.call(this,r),s=(0,f.indexToXY)(Math.abs(a),this.grid);t.rotateAnime(this.image,e,n,this.width,this.height,i,s)}},{key:"image",get:function(){return this.spritesheet.image}},{key:"width",get:function(){return this.spritesheet.width}},{key:"grid",get:function(){return this.spritesheet.grid}},{key:"height",get:function(){return this.spritesheet.height}}]),t}();e["default"]=d},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function r(t,e,i){n(this,r),this.delay=t||0,this.indexCounter=e||0,this.currentFrame=i||0};e["default"]=i},function(t,e){"use strict";function n(t,e){var n=t%e,i=Math.floor(t/e);return[n,i]}function i(t,e,n){return e*n+t}function r(t,e,n){return Math.max(Math.min(t,n),e)}function a(t,e,n,i,r){return(t-e)/(n-e)*(r-i)+i}function u(t){for(var e=t.length;e;e--){var n=Math.floor(Math.random()*e),i=[t[n],t[e-1]];t[e-1]=i[0],t[n]=i[1]}}Object.defineProperty(e,"__esModule",{value:!0}),e.indexToXY=n,e.XYToIndex=i,e.contrain=r,e.map=a,e.shuffle=u},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){n(this,t),this.sPhaseName=e,this.oPhase={},this.oPhaseCurrent=null}return i(t,[{key:"setPhase",value:function(t){this.sPhaseName=t,this.oPhase[this.sPhaseName]&&(this.oPhaseCurrent=this.oPhase[this.sPhaseName])}},{key:"computePhase",value:function(t){return this.oPhase=t,this.setPhase(this.sPhaseName),this}},{key:"run",value:function(){return this.oPhaseCurrent.apply(this,arguments),this}}]),t}();e["default"]=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var r=function(t){},a=0,u=10,s=!0,o=null,h=null,c=function(){function t(){n(this,t)}return i(t,null,[{key:"setCounter",value:function(e){return h=e,t}},{key:"restart",value:function(){return o=null,t}},{key:"setCadence",value:function(e){return t.restart(),u=e,t}},{key:"run",value:function(e){return r=e,t}},{key:"start",value:function(){s&&requestAnimationFrame(t.start);var e=Date.now(),n=e-a;h&&h.run(e),n>u&&s&&(a=e-n%u,null==o&&(o=a),r.call(null,a-o))}},{key:"play",value:function(){s=!0}},{key:"stop",value:function(){s=!1}},{key:"togglePlay",value:function(){s=!s}}]),t}();e["default"]=c},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){return 180*t/Math.PI}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e,i){n(this,t),this.x=e||0,this.y=i||0}return r(t,[{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"multi",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"limit",value:function(t){var e=this.magnetude;return e>t&&(this.magnetude=t),this}},{key:"normalize",value:function(){return 0===this.magnetude?this:this.div(this.magnetude)}},{key:"copy",value:function(){return new t(this.x,this.y)}},{key:"angle",get:function(){var t=Math.atan2(this.y,this.x);return i(t)},set:function(t){var e=this.angle+t,n=this.magnetude;return this.x=Math.cos(e)*n,this.y=Math.sin(e)*n,this}},{key:"magnetude",set:function(t){return this.normalize().multi(t)},get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}}],[{key:"div",value:function(t,e){var n=t.copy();return n.div(e),n}},{key:"mult",value:function(t,e){var n=t.copy();return n.mult(e),n}},{key:"sub",value:function(t,e){var n=t.copy();return n.sub(e),n}},{key:"add",value:function(t,e){var n=t.copy();return n.add(e),n}}]),t}();e["default"]=a},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var u,s=t[Symbol.iterator]();!(i=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);i=!0);}catch(o){r=!0,a=o}finally{try{!i&&s["return"]&&s["return"]()}finally{if(r)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(6),s=function(){function t(e){i(this,t),this.x=0,this.y=0,this.callBack=e||function(t,e,n,i){return[t,e,n,i]}}return a(t,[{key:"apply",value:function(t){for(var e=t.getPixel(),n=e.data.length,i=0,a=0,s=t.width,o=[];i<n;a++,i+=4){var h=(0,u.indexToXY)(a,s),c=r(h,2),l=c[0],f=c[1];this.x=l,this.y=f,o=this.callBack.call(this,e.data[i+0],e.data[i+1],e.data[i+2],e.data[i+3]),e.data.set(o,i)}t.setPixel(e)}}]),t}();e["default"]=s},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){n(this,t),this.context=e.context,this.begin=!1}return i(t,[{key:"beginPath",value:function(){return this.begin?this.closePath().beginPath():(this.context.beginPath(),this.begin=!0),this}},{key:"closePath",value:function(){return this.context.closePath(),this.begin=!1,this}},{key:"moveTo",value:function(t,e){return this.context.moveTo(t,e),this}},{key:"pattern",value:function(t,e){var n=e||"repeat",i=this.context.createPattern(t.image,n);return this.fill(i)}},{key:"fill",value:function(t){return this.context.fillStyle=t,this.context.fill(),this}},{key:"stroke",value:function(t,e){return e&&(this.context.lineWidth=e),t&&(this.context.strokeStyle=t),this.context.stroke(),this}},{key:"rectangle",value:function(t,e,n,i){return this.beginPath(),this.context.rect(t,e,n,i),this}},{key:"circle",value:function(t,e,n){return this.beginPath(),this.context.arc(t,e,n,0,2*Math.PI,!1),this}},{key:"polygon",value:function(t){var e=1,n=t.length;for(this.beginPath().moveTo(t[0][0],t[0][1]);e<n;e++)this.lineTo(t[e][0],t[e][1]);return this.closePath(),this}},{key:"line",value:function(t,e,n,i){return this.beginPath().moveTo(t,e).lineTo(n,i),this.closePath(),this.stroke("#000",1),this}},{key:"point",value:function(t,e){return this.rectangle(t,e,1,1)}},{key:"lineTo",value:function(t,e){return this.context.lineTo(t,e),this}}]),t}();e["default"]=r},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(6),u=function(){function t(){i(this,t);var e=1.74,n=0;for(this.res=50,this.permutable=[],this.perm=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];n<511;n++)this.permutable.push(this.perm[n%255]);(0,a.shuffle)(this.permutable),this.vecteur=[[e,e],[-e,e],[e,-e],[-e,-e],[1,1],[-1,1],[1,-1],[-1,-1]]}return r(t,[{key:"value",value:function(t,e){var n,i,r,a,u,s,o,h,c,l,f,d,v,y,m,g,p,b,w;return t/=this.res,e/=this.res,r=Math.floor(t),a=Math.floor(e),n=r%511,i=a%511,u=this.permutable[n+this.permutable[i]]%8,s=this.permutable[n+1+this.permutable[i]]%8,o=this.permutable[n+this.permutable[i+1]]%8,h=this.permutable[n+1+this.permutable[i+1]]%8,c=t-r,l=e-a,f=this.vecteur[u][0]*c+this.vecteur[u][1]*l,c=t-(r+1),l=e-a,d=this.vecteur[s][0]*c+this.vecteur[s][1]*l,c=t-r,l=e-(a+1),v=this.vecteur[o][0]*c+this.vecteur[o][1]*l,c=t-(r+1),l=e-(a+1),y=this.vecteur[h][0]*c+this.vecteur[h][1]*l,m=t-r,g=3*m*m-2*m*m*m,m=e-a,p=3*m*m-2*m*m*m,b=f+g*(d-f),w=v+g*(y-v),b+p*(w-b)}},{key:"resolution",set:function(t){this.res=t}}]),t}();e["default"]=new u}]);