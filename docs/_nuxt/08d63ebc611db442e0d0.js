(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{290:function(e,n,t){"use strict";t.r(n);t(28),t(35),t(26),t(52),t(53),t(41),t(12),t(27);var r=t(23),o=(t(29),t(6)),c=t(10);function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var f={animate:!0,context:"webgl",attributes:{antialias:!0}},m={name:"page-8",data:function(){return{sketchManager:null}},mounted:function(){var e=this;this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$sketch(v({},f,{canvas:e.$refs.canvas}),e.sketch);case 3:e.sketchManager=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])}))))},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){var r,canvas,o,l,v,f,m,d,w,h,x,y,O,j,P,k;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.context,canvas=e.canvas,o=e.width,l=e.height,(v=e.update)({dimensions:[o,l]}),n.next=4,t.e(0).then(t.bind(null,286)).then((function(e){return e.default||e}));case 4:return f=n.sent,m=f.OrbitControls,d="".concat("/generative-art/","luna.jpg"),w=new c.D({context:r}),h=new c.o(45,o/l,.001,1e3),x=new m(h,canvas),y=new c.c(1,1,1,9,9,9),O=new c.u({vertexShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : vert\n\nvarying vec3 vWorldPosition;\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n\n    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n    vWorldPosition = worldPosition.xyz;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n",fragmentShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : frag\n\nuniform vec3 color;\nuniform vec3 bottomColor;\nuniform float time;\nuniform float offset;\nuniform float exponent;\nuniform sampler2D image;\n\nvarying vec3 vWorldPosition;\nvarying vec2 vUv;\n\nvoid main() {\n\n    vec3 webcam = texture2D(\n        image,\n        vUv\n    ).rgb;\n\n    float h = normalize( vWorldPosition + offset ).y;\n\n    vec3 color = 0.5 + 0.5 * cos( ( time / 1.5 ) + vWorldPosition.xyx + vec3( webcam.r, webcam.g, webcam.b ) );\n\n    gl_FragColor = vec4( mix( bottomColor, color, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:c.h,uniforms:{image:{type:"t",value:(new c.y).load(d)},time:{type:"f",value:0},color:{type:"v3",value:new c.e(30719)},bottomColor:{type:"v3",value:new c.e(30719)},offset:{type:"f",value:400},exponent:{type:"f",value:.6},resolution:{type:"v2",value:new c.z(o,l)},uvRate1:{value:new c.z(1,1)}}}),j=new c.m(y,O),P=new c.t,(k=new c.g(11189247,.3)).position.x=300,k.position.y=250,k.position.z=-500,h.position.set(1,2,-3),P.add(j),P.add(k),n.abrupt("return",{resize:function(e){var n=e.pixelRatio,t=e.viewportWidth,r=e.viewportHeight;v({dimensions:[t,r]}),w.setPixelRatio(n),w.setSize(t,r),O.uniforms.resolution.value.x=t,O.uniforms.resolution.value.y=r,h.aspect=t/r,h.updateProjectionMatrix()},render:function(e){var time=e.time;O.uniforms.time.value=time,x.update(),w.render(P,h)},unload:function(){w.dispose()}});case 22:case"end":return n.stop()}}),n)})))()}}},d=t(22),component=Object(d.a)(m,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);