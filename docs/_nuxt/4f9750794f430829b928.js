(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{287:function(e,t,n){"use strict";n.r(t);n(28),n(208),n(39),n(26),n(75),n(76),n(50),n(27);var r=n(230),c=n(231),o=n(32),l=(n(29),n(7)),h=n(232),f=n.n(h),v=n(235);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={scaleToView:!0,dimensions:[2048,2048]},y={name:"page-10",data:function(){return{drawManager:null}},mounted:function(){var e=this;this.$nextTick(Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$sketch(O({},w,{canvas:e.$refs.canvas}),e.sketch);case 3:e.drawManager=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))))},beforeDestroy:function(){this.drawManager&&this.drawManager.unload()},methods:{sketch:function(e){var t=e.context,n=e.width,o=e.height,l=f.a.shuffle(f.a.pick(v)),h=[0,.5,1,1.5],d=l.shift(),O=f.a.rangeFloor.apply(f.a,[4,10]);t.clearRect(0,0,n,o),t.fillStyle=d,t.fillRect(0,0,n,o);for(var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.PI*f.a.pick(h),v=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o+1.5*Math.PI,d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:f.a.pick(l);Object(r.a)(this,e),this.x=t,this.y=n,this.radius=c,this.startAngle=o,this.endAngle=v,this.color=d}return Object(c.a)(e,[{key:"draw",value:function(e,t,n){e.save(),e.strokeStyle=this.color,e.fillStyle=this.color,e.beginPath(),e.moveTo(t,n),e.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle),e.fill(),e.restore()}}]),e}(),y=[],j=0;j<O;j++){var m=300*j,circle=new w(m,m,300);circle.draw(t,600),y.push(circle)}return console.info(y),function(){}}}},j=n(31),component=Object(j.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container canvas-container"},[this._m(0),t("canvas",{ref:"canvas"})])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h6",{staticClass:"absolute text--center text--red no-pointer-event"},[t("small",[this._v("TODO")])])}],!1,null,null,null);t.default=component.exports}}]);