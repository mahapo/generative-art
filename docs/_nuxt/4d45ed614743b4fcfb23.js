(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{209:function(t,e,r){"use strict";var n=r(21),c=r(105),o=r(14);t.exports=function(t){for(var e=n(this),r=o(e.length),l=arguments.length,h=c(l>1?arguments[1]:void 0,r),f=l>2?arguments[2]:void 0,v=void 0===f?r:c(f,r);v>h;)e[h++]=t;return e}},211:function(t,e,r){var n=r(2),c=r(209),o=r(108);n({target:"Array",proto:!0},{fill:c}),o("fill")},301:function(t,e,r){"use strict";r.r(e);r(27),r(211),r(29),r(25),r(45),r(42),r(43),r(36),r(26);var n=r(15),c=(r(20),r(4));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={exportPixelRatio:2},f={name:"page-5",data:function(){return{sketchManager:null}},mounted:function(){var t=this;this.$nextTick(Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$sketch(l({},h,{canvas:t.$refs.canvas}),t.sketch);case 3:t.sketchManager=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))))},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:function(t){var canvas=t.canvas,e=t.render;function r(){e()}canvas.addEventListener("click",r,!1);var n=function(t,e){return Math.random()*(e-t)+t},c=new Array(1e3).fill().map((function(){var t=2*Math.PI-n(0,2*Math.PI/3),e=n(-.1,.3)*Math.PI*2,r=Math.floor(n(5,200));return{segments:new Array(r).fill().map((function(){return n(0,1)})),arcStart:t,arcEnd:t+e,arcLength:e,thickness:n(.01,1),alpha:n(.25,.5),radius:n(.1,.75),x:.5+.085*n(-1,1),y:.5+.085*n(-1,1)}}));return{render:function(t){var e=t.context,r=t.width,o=t.height;e.globalCompositeOperation="source-over",e.fillStyle="black",e.globalAlpha=1,e.fillRect(0,0,r,o);var l=Math.min(r,o),h=n(1,1.5);e.strokeStyle="white",e.fillStyle="white",c.forEach((function(circle){e.beginPath(),e.globalCompositeOperation="lighter",circle.segments.forEach((function(t){var c=circle.arcStart+circle.arcLength*t,f=circle.radius*l+.5*n(-1,1),v=circle.x*r+Math.cos(c)*f,d=circle.y*o+Math.sin(c)*f;e.beginPath(),e.arc(v,d,circle.thickness*n(.1,2)*h,0,2*Math.PI*n(0,1),!1),e.fill(),e.globalAlpha=circle.alpha}))}))},unload:function(){canvas.removeEventListener("click",r,!1)}}}}},v=r(24),component=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"container canvas-container"},[e("canvas",{ref:"canvas"})])}),[],!1,null,null,null);e.default=component.exports}}]);