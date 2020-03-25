(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{226:function(e,n,t){"use strict";t.r(n);var o=t(16),r=t(6),c=t(1);function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var v={animate:!0,context:"webgl",attributes:{antialias:!0}},d={name:"page-8",data:()=>({sketchManager:null}),mounted(){var e=this;this.$nextTick(Object(r.a)((function*(){try{e.sketchManager=yield e.$sketch(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},v,{canvas:e.$refs.canvas}),e.sketch)}catch(e){console.error(e)}})))},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch(e){var{context:n,canvas:canvas,width:o,height:r,update:l}=e;l({dimensions:[o,r]});var{OrbitControls:v}=t(104),d="".concat("/generative-art/","luna.jpg"),f=new c.A({context:n}),m=new c.l(45,o/r,.001,1e3),w=new v(m,canvas),y=new c.c(1,1,1,9,9,9),h=new c.r({vertexShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : vert\n\nvarying vec3 vWorldPosition;\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n\n    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n    vWorldPosition = worldPosition.xyz;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n",fragmentShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : frag\n\nuniform vec3 color;\nuniform vec3 bottomColor;\nuniform float time;\nuniform float offset;\nuniform float exponent;\nuniform sampler2D image;\n\nvarying vec3 vWorldPosition;\nvarying vec2 vUv;\n\nvoid main() {\n\n    vec3 webcam = texture2D(\n        image,\n        vUv\n    ).rgb;\n\n    float h = normalize( vWorldPosition + offset ).y;\n\n    vec3 color = 0.5 + 0.5 * cos( ( time / 1.5 ) + vWorldPosition.xyx + vec3( webcam.r, webcam.g, webcam.b ) );\n\n    gl_FragColor = vec4( mix( bottomColor, color, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:c.g,uniforms:{image:{type:"t",value:(new c.v).load(d)},time:{type:"f",value:0},color:{type:"v3",value:new c.d(30719)},bottomColor:{type:"v3",value:new c.d(30719)},offset:{type:"f",value:400},exponent:{type:"f",value:.6},resolution:{type:"v2",value:new c.w(o,r)},uvRate1:{value:new c.w(1,1)}}}),x=new c.k(y,h),O=new c.q,P=new c.f(11189247,.3);return P.position.x=300,P.position.y=250,P.position.z=-500,m.position.set(1,2,-3),O.add(x),O.add(P),{resize(e){var{pixelRatio:n,viewportWidth:t,viewportHeight:o}=e;l({dimensions:[t,o]}),f.setPixelRatio(n),f.setSize(t,o),h.uniforms.resolution.value.x=t,h.uniforms.resolution.value.y=o,m.aspect=t/o,m.updateProjectionMatrix()},render(e){var{time:time}=e;h.uniforms.time.value=time,w.update(),f.render(O,m)},unload(){f.dispose()}}}}},f=t(15),component=Object(f.a)(d,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);