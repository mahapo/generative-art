(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{206:function(t,e,r){"use strict";var n=r(18),c=r(102),o=r(12);t.exports=function(t){for(var e=n(this),r=o(e.length),l=arguments.length,f=c(l>1?arguments[1]:void 0,r),h=l>2?arguments[2]:void 0,v=void 0===h?r:c(h,r);v>f;)e[f++]=t;return e}},208:function(t,e,r){var n=r(2),c=r(206),o=r(103);n({target:"Array",proto:!0},{fill:c}),o("fill")},288:function(t,e,r){"use strict";r.r(e);r(28),r(208),r(39),r(26),r(75),r(76),r(50),r(27);var n=r(32),c=(r(29),r(7));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={pixelsPerInch:300,units:"in",dimensions:[3.5,2],bleed:1/8},h={name:"page-2",data:function(){return{drawManager:null}},mounted:function(){var t=this;this.$nextTick(Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$sketch(l({},f,{canvas:t.$refs.canvas}),t.sketch);case 3:t.drawManager=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))))},beforeDestroy:function(){this.drawManager&&this.drawManager.unload()},methods:{sketch:function(){return function(t){var e=t.context,r=t.exporting,n=t.bleed,c=t.width,o=t.height,l=t.trimWidth,f=t.trimHeight;e.clearRect(0,0,c,o),e.fillStyle="#eff3f4",e.fillRect(0,0,c,o),!r&&n>0&&(e.strokeStyle="hsl(0, 80%, 80%)",e.lineWidth=.0075,e.strokeRect(n,n,l,f));e.fillStyle="#2b82b5";for(var h=Math.min(l,f)/2-1/4,i=1;i<=200;i++){var v=i/200,d=(Math.sqrt(5)+1)/2,w=2*Math.PI*i*d,O=Math.sqrt(v)*h,y=c/2+Math.cos(w)*O,m=o/2+Math.sin(w)*O,j=.02*Math.pow(v,.5);e.beginPath(),e.arc(y,m,j,0,2*Math.PI,!1),e.fill()}}}}},v=r(31),component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"container canvas-container"},[e("canvas",{ref:"canvas"})])}),[],!1,null,null,null);e.default=component.exports}}]);