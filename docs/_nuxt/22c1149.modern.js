(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{187:function(e,t,n){var content=n(221);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("3f654ee6",content,!0,{sourceMap:!1})},220:function(e,t,n){"use strict";var l=n(187);n.n(l).a},221:function(e,t,n){(t=n(24)(!1)).push([e.i,".nav-menu[data-v-7358617c]{position:fixed;top:0;right:0;left:0;z-index:2;display:flex;flex:1 1 100%;flex-direction:row;align-items:flex-start;font-size:1rem;text-align:center}.nav-menu .nav-menu__summary>*[data-v-7358617c]{display:inline-block;margin:0;font-size:1rem;vertical-align:middle}.nav-menu .nav-menu__details[data-v-7358617c]{width:100%;padding:8px;overflow:hidden;background-color:#333;border:1px dotted #fff;cursor:pointer}.nav-menu .nav[data-v-7358617c]{padding:16px;visibility:hidden;opacity:0;transition:opacity .2s linear .1s}.nav-menu .nav-menu__details[open] .nav[data-v-7358617c]{visibility:visible;opacity:1}.nav-menu .nav>ul[data-v-7358617c]{margin:0;padding:0;list-style:none}.nav-menu .nav a[data-v-7358617c]{display:block;color:#fff;font-weight:lighter;white-space:nowrap}",""]),e.exports=t},233:function(e,t,n){"use strict";n.r(t);n(23),n(28);var l={name:"nav-menu",inheritAttrs:!1,props:{keepNavigationMenuOpened:{type:Boolean,default:!1}},data:()=>({links:[{url:"/",text:"Homepage"},{url:"/single/three-js-starter",text:"ThreeJs starter template"},{url:"/single/page-1",text:"Page 1"},{url:"/single/page-2",text:"Page 2"},{url:"/single/page-3",text:"Page 3"},{url:"/single/page-4",text:"Page 4"},{url:"/single/page-5",text:"Page 5"},{url:"/single/page-6",text:"Page 6"},{url:"/single/page-7",text:"Microphone and webcam"},{url:"/single/page-8",text:"Page 8"},{url:"/single/page-9",text:"Page 9"},{url:"/single/page-10",text:"Page 10"},{url:"/single/infinite-animation",text:"Infinite animation"}],linksNavigate:[{url:"/navigate/page-1",text:"Navigate 1"},{url:"/navigate/page-2",text:"Navigate 2"},{url:"/navigate/page-3",text:"Navigate 3"}]}),jsonld(){return this.links.length||this.linksNavigate.length?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[...this.links,...this.linksNavigate].map((e,t)=>({"@type":"ListItem",position:t+1,item:{"@id":e.url,url:e.url,name:e.text||e.title}}))}:null}},r=(n(220),n(16)),o=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-menu"},[n("details",{staticClass:"nav-menu__details"},[e._m(0),n("nav",{staticClass:"nav"},[n("ul",e._l(e.links,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[e._v(" "+e._s(link.text)+" ")])],1)})),0)])]),n("details",{staticClass:"nav-menu__details",attrs:{open:e.keepNavigationMenuOpened}},[e._m(1),n("nav",{staticClass:"nav"},[n("ul",e._l(e.linksNavigate,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[e._v(" "+e._s(link.text)+" ")])],1)})),0)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("summary",{staticClass:"nav-menu__summary"},[t("h2",[this._v(" Single examples ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",{staticClass:"nav-menu__summary"},[t("h2",[this._v(" Navigation example ")])])}],!1,null,"7358617c",null).exports;t.default=o}}]);