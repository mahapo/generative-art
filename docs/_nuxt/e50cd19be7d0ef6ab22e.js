(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{222:function(e,t,n){"use strict";n.r(t);var r=n(21),c=n(6),o=n(194),l=n.n(o);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v={context:"webgl",animate:!0},h={name:"page-3",data:()=>({sketchManager:null}),mounted(){var e=this;this.$nextTick(Object(c.a)((function*(){try{e.sketchManager=yield e.$sketch(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},v,{canvas:e.$refs.canvas}),e.sketch)}catch(e){console.error(e)}})))},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:e=>{var{gl:t}=e;return l()({gl:t,frag:"precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nvarying vec2 vUv;\n\nvoid main () {\n\n    vec3 color = 0.5 + 0.5 * cos( time + vUv.xyx + vec3( 0.0, 2.0, 4.0 ) );\n\n    gl_FragColor = vec4(\n        color,\n        1.0\n    );\n\n}\n",uniforms:{time:e=>{var{time:t}=e;return t}}})}}},O=n(20),component=Object(O.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container canvas-container"},[t("canvas",{ref:"canvas"})])}),[],!1,null,null,null);t.default=component.exports}}]);