(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{225:function(e,n,t){"use strict";t.r(n);var r=t(9),o=t(2),c=t(7);function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var v={animate:!0,context:"webgl",duration:5,fps:36,playbackRate:"throttle",attributes:{antialias:!0}},f={name:"page-1",data:()=>({sketchManager:null}),mounted(){var e=this;this.$nextTick(Object(o.a)((function*(){try{e.sketchManager=yield e.$sketch(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},v,{canvas:e.$refs.canvas}),e.sketch)}catch(e){console.error(e)}})))},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch(e){var{context:n}=e,t=new c.D({context:n});t.setClearColor("#000",1);var r=new c.n(45,1,.01,100);r.position.set(0,0,-4.5),r.lookAt(new c.A);var o=new c.t,l=new c.l(new c.v(1,64,64),new c.u({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},fragmentShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : frag\n\nvarying vec2 vUv;\nuniform float playhead;\n\nvec3 hsl2rgb( vec3 c ) {\n\n    vec3 rgb = clamp( abs( mod( c.x * 6.0 + vec3( 0.0, 4.0, 2.0 ), 6.0 ) - 3.0 ) - 1.0, 0.0, 1.0 );\n\n    return c.z + c.y * ( rgb - 0.5 ) * ( 1.0 - abs( 2.0 * c.z - 1.0 ) );\n\n}\n\nvoid main () {\n\n    // number of horizontal bands\n    float bands = 1000.;\n\n    // offset texture by loop time\n    float offset = playhead;\n\n    // get a 0..1 value from this\n    float y = mod( offset + vUv.y, 1.0 );\n\n    // get N discrete steps of hue\n    float hue = floor( y * bands ) / vUv.y;\n\n    // now get a color\n    float sat = .72;\n    float light = .56;\n\n    vec3 color = hsl2rgb(\n        vec3(\n            hue,\n            sat,\n            light\n        )\n    );\n\n    gl_FragColor = vec4( color, 1.0 );\n\n}\n",vertexShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : vert\n\nvarying vec2 vUv;\n\nvoid main () {\n\n    vUv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position.xyz, 1.0 );\n\n}\n",uniforms:{playhead:{value:0}}}));return o.add(l),{resize(e){var{pixelRatio:n,viewportWidth:o,viewportHeight:c}=e;t.setPixelRatio(n),t.setSize(o,c),r.aspect=o/c,r.updateProjectionMatrix()},render(e){var{playhead:n}=e;l.material.uniforms.playhead.value=n,t.render(o,r)},unload(){t.dispose()}}}}},d=t(16),component=Object(d.a)(f,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);