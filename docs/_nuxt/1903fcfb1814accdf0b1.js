(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{224:function(t,e,r){"use strict";r.r(e);r(22),r(26);var n=r(21),c=r(6),o=r(190),l=r.n(o),h=r(193);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={scaleToView:!0,dimensions:[2048,2048]},d={name:"page-10",data:()=>({sketchManager:null}),mounted(){var t=this;this.$nextTick(Object(c.a)((function*(){try{t.sketchManager=yield t.$sketch(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},v,{canvas:t.$refs.canvas}),t.sketch)}catch(t){console.error(t)}})))},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch(t){var{context:e,width:r,height:n}=t,c=l.a.shuffle(l.a.pick(h)),o=[0,.5,1,1.5],f=c.shift(),v=l.a.rangeFloor(4,10);e.clearRect(0,0,r,n),e.fillStyle=f,e.fillRect(0,0,r,n);class d{constructor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.PI*l.a.pick(o),h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n+1.5*Math.PI,f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:l.a.pick(c);this.x=t,this.y=e,this.radius=r,this.startAngle=n,this.endAngle=h,this.color=f}draw(t,e,r){t.save(),t.strokeStyle=this.color,t.fillStyle=this.color,t.beginPath(),t.moveTo(e,r),t.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle),t.fill(),t.restore()}}for(var O=[],y=0;y<v;y++){var w=300*y,circle=new d(w,w,300);circle.draw(e,600),O.push(circle)}return console.info(O),()=>{}}}},O=r(20),component=Object(O.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"container canvas-container"},[this._m(0),e("canvas",{ref:"canvas"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"absolute text--center text--red no-pointer-event"},[e("small",[this._v("TODO")])])}],!1,null,null,null);e.default=component.exports}}]);