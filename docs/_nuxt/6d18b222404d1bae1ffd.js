(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{219:function(e,n,t){"use strict";t.r(n);t(22),t(26);var r=t(21),o=t(6),v=t(167);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var l={animate:!0,context:"webgl",attributes:{antialias:!0}},d={name:"page-7",data:()=>({drawManager:null}),mounted(){var e=this;this.$nextTick(Object(o.a)((function*(){try{e.drawManager=yield e.$sketch(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},l,{canvas:e.$refs.canvas}),e.sketch)}catch(e){console.error(e)}})))},beforeDestroy(){this.drawManager&&this.drawManager.unload()},methods:{sketch(e){var{context:n,canvas:canvas,width:r,height:o,update:c}=e,{OrbitControls:l}=t(168),d=t(189),m=!1,f=new v.A({context:n}),w=new v.p,h=new v.x,x=new v.l(63,r/o,.001,1e3),y=new l(x,canvas),O=new v.m(r/o,1,54,54),U=[20,140],j=[400,2600],_=[5200,14e3],P=new v.b,audio=new v.n(P),D=new v.a(audio,2048),M=(data,e)=>{for(var n=Math.round(e[0]/24e3*data.length),t=Math.round(e[1]/24e3*data.length),r=0,o=0,i=n;i<=t;i++)r+=data[i],o+=1;return r/o/255},k=e=>{audio.gain.gain.value=.001,audio.setMediaStreamSource(e),audio.context.resume()},video=document.createElement("video"),S=e=>{video.srcObject=e,video.width=r,video.height=o,video.autoplay=!0,video.play(),E.uniforms.video.value.needsUpdate=!0},C=()=>{canvas.removeEventListener("click",C,!1),this.$refs.title.remove(),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(k),navigator.mediaDevices.getUserMedia({video:{width:r,height:o,facingMode:"user"},audio:!1}).then(S)},E=new v.r({vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main () {\n\n    vUv = uv;\n\n    vPosition = position;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D microphone;\nuniform sampler2D video;\n\nuniform float bass;\nuniform float mid;\nuniform float treble;\n\nuniform float time;\n\nuniform vec3 mouse;\nuniform float mouse_radius;\n\nvarying vec3 vPosition;\n\nvarying vec2 vUv;\n\nfloat map(\n    float value,\n    float min1,\n    float max1,\n    float min2,\n    float max2\n) {\n\n    return min2 + ( value - min1 ) * ( max2 - min2 ) / ( max1 - min1 );\n\n}\n\nvoid main() {\n\n    vec3 webcam = texture2D(\n        video,\n        vUv\n    ).rgb;\n\n    vec2 displacedUv = vec2(\n        vUv.x,\n        vUv.y\n    );\n\n    displacedUv.y = mix(\n        vUv.y,\n        bass,\n        1.0\n    );\n    displacedUv.x = mix(\n        vUv.x,\n        mid,\n        treble\n    );\n\n    float dist = length( vPosition - mouse );\n    float prox = 1. - map(\n        dist,\n        0.,\n        mouse_radius,\n        0.,\n        1.\n    );\n\n    prox = clamp(\n        prox,\n        0.,\n        1.\n    );\n\n    // Microphone\n    vec3 backgroundColor = vec3( displacedUv.y, displacedUv.x, prox );\n\n    float f = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).r;\n    float g = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).g;\n    float b = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).b;\n\n    vec3 color = vec3( f, g, b );\n\n    float i = sin( step( vUv.y, f ) * step( f - 0.0125, vUv.y ) );\n\n    // Webcam\n    webcam.r = webcam.r + ( 1. - bass );\n    webcam.g = webcam.g + ( 1. - treble );\n    webcam.b = webcam.b + ( 1. - mid );\n\n    // Color mixer\n    vec4 mixed = vec4( mix( webcam, mix( backgroundColor, color, i ), bass ), 1.0 );\n\n    gl_FragColor = mixed;\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:v.g,uniforms:{time:{type:"f",value:0},mouse_radius:{type:"f",value:.3},bass:{type:"f",value:0},mid:{type:"f",value:0},treble:{type:"f",value:0},video:{type:"t",value:new v.z(video)},microphone:{type:"t",value:new v.e(D.data,1024,1,v.i)},mouse:{type:"v3",value:h},resolution:{type:"v2",value:new v.w(r,o)},uvRate1:{value:new v.w(1,1)}}}),L=new v.k(O,E),F=new v.q,$={mouse_radius:.3},G=new d.GUI;return canvas.addEventListener("click",C,!1),canvas.addEventListener("mousemove",e=>{var n;h.x=e.clientX/window.innerWidth*2-1,h.y=-e.clientY/window.innerHeight*2+1,w.setFromCamera(h,x);var[t]=w.intersectObjects(F.children),r=null!==(n=null==t?void 0:t.point)&&void 0!==n?n:null;m=!!r},!1),x.position.set(0,0,1),F.add(L),G.add($,"mouse_radius",0,1,.1),G.close(),{resize(e){var{pixelRatio:n,viewportWidth:t,viewportHeight:r}=e;c({dimensions:[t,r]}),f.setPixelRatio(n),f.setSize(t,r),E.uniforms.resolution.value.x=t,E.uniforms.resolution.value.y=r,x.aspect=t/r,x.updateProjectionMatrix()},render(e){var{time:time}=e,data=D.getFrequencyData(),n=M(data,U),t=M(data,j),r=M(data,_);E.uniforms.bass.value=n,E.uniforms.mid.value=t,E.uniforms.treble.value=r,E.uniforms.microphone.value.needsUpdate=!0,E.uniforms.time.value=time,E.uniforms.mouse_radius.value=$.mouse_radius,m&&(E.uniforms.mouse.value=h),y.update(),f.render(F,x)},unload(){audio.context.suspend(),G.destroy(),f.dispose()}}}}},m=t(20),component=Object(m.a)(d,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("h6",{ref:"title",staticClass:"absolute text--center text--red no-pointer-event"},[this._v(" Click on the canvas"),n("br"),n("small",[this._v("(allow access to camera and microphone)")])]),n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);