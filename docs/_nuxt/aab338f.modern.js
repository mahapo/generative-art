(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{233:function(e,n,t){"use strict";t.r(n);t(8);var o=t(2),r=t(7),l={name:"infinite-animation",data:()=>({sketchManager:null}),mounted(){var e=this;return Object(o.a)((function*(){try{e.sketchManager=yield e.$sketch({animate:!0,duration:6.279582609797744,context:"webgl",attributes:{antialias:!0},canvas:e.$refs.canvas},e.sketch)}catch(e){console.error(e)}}))()},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:e=>Object(o.a)((function*(){var{context:n}=e,o=new r.D({context:n});o.setClearColor(new r.e("#333"),1),o.physicallyCorrectLights=!0,o.outputEncoding=r.E;var l=new r.n(45,1,.01,100);l.position.set(0,0,4),l.lookAt(new r.A(1,1,1));var{OrbitControls:d}=yield t.e(0).then(t.bind(null,232)).then(e=>e.default||e),c=new d(l,n.canvas),v=new r.t,h=new r.o(1,1,1,1),f=new r.u({vertexShader:"#define GLSLIFY 1\n// VSCode vertex\n#pragma vscode_glsllint_stage : vert\n\n// Main\nvoid main () {\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position.xyz, 1.0 );\n\n}\n",fragmentShader:"#define GLSLIFY 1\n// VSCode Frag\n#pragma vscode_glsllint_stage : frag\n\n// Const\n#define PI 3.1415926535897932384626433832795;\n\n// Uniforms\nuniform mediump float time;\nuniform mediump float playhead;\n\n// Main\nvoid main () {\n\n    float p = 0.5 - playhead * 2. * PI;\n\n    gl_FragColor = vec4( p, 1., 1., 1. );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:r.h,uniforms:{time:{type:"f",value:0},playhead:{type:"f",value:0}}}),m=new r.l(h,f);return v.add(m),{render(e){var{time:time,playhead:n}=e;m.rotation.y=2*n*Math.PI,f.uniforms.time.value=time,f.uniforms.playhead.value=n,c.update(),o.render(v,l)},resize(e){var{pixelRatio:n,viewportWidth:t,viewportHeight:r}=e;o.setPixelRatio(n),o.setSize(t,r,!1),l.aspect=t/r,l.updateProjectionMatrix()},unload(){c.dispose(),o.dispose()}}}))()}},d=t(16),component=Object(d.a)(l,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);