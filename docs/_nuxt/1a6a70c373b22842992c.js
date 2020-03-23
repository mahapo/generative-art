(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{286:function(e,n,t){"use strict";t.r(n);t(39),t(26),t(55),t(112),t(153),t(27);var o=t(279),l=t(274),r=t.n(l),c=t(275),h=t.n(c),d=t(276),m=t.n(d);r.a.registerLanguage("bash",h.a),r.a.registerLanguage("javascript",m.a);var k={name:"homepage",computed:{readme:function(){return'<section><h1>🎉 Generative art with Nuxt Canvas Sketch</h1>\n<p><a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat-square" alt="npm version"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square" alt="npm downloads"></a>\n<a href="https://circleci.com/gh/LuXDAmore/generative-art"><img src="https://img.shields.io/circleci/project/github/LuXDAmore/generative-art.svg?style=flat-square" alt="Circle CI"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat-square" alt="Dependencies"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/npm/l/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square" alt="License"></a>\n<a href="https://www.paypal.com/paypalme2/luxdamore"><img src="https://img.shields.io/badge/paypal-donate-black.svg?style=flat-square" alt="Donate"></a></p>\n<blockquote>\n<p>Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module to make it easy to do.</p>\n</blockquote>\n<h2>💘 Motivation</h2>\n<p>I\'m introducing myself to the <strong>generative-art</strong> world, so, why not doing this with my favorite libraries and framework?</p>\n<p>So, this is also a module for Nuxt, it simply inject the <a href="https://github.com/mattdesl/canvas-sketch">canvas-sketch</a> library (there are more packages you can use installing this, for example <code>canvas-sketch-utils</code>).</p>\n<p>After installing this, you have access in Nuxt (client-side) at two things, <code>$canvasSketch</code> (the main module, used internally) and at the method <code>$draw</code> (it start the sketch).</p>\n<p>Check the <code>example/</code> folder and take a look at <code>page-*.vue</code> for some examples.\nEvery page correspond to an example in the <a href="https://luxdamore.github.io/generative-art">main website</a>.</p>\n<h2>Setup</h2>\n<ol>\n<li>Add <code>@luxdamore/nuxt-canvas-sketch</code> dependency to your project;</li>\n<li>Add <code>@luxdamore/nuxt-canvas-sketch</code> in the <code>modules</code> section of your <code>nuxt.config.js</code>;</li>\n</ol>\n<pre><code class="language-bash">\n    yarn add @luxdamore/nuxt-canvas-sketch <span class="hljs-comment"># or npm install --save @luxdamore/nuxt-canvas-sketch</span>\n\n</code></pre>\n<h2>Configuration</h2>\n<p><strong><em>N.B. : the config is only shallow merged, not deep merged.</em></strong></p>\n<ul>\n<li><a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/README.md">canvas-sketch documentation</a>;</li>\n<li><a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md">canvas-sketch api</a>;</li>\n<li><a href="https://github.com/mattdesl/canvas-sketch/tree/master/examples">canvas-sketch examples</a>.</li>\n</ul>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n\n        <span class="hljs-comment">// Module installation</span>\n        <span class="hljs-attr">modules</span>: [ <span class="hljs-string">\'@luxdamore/nuxt-canvas-sketch\'</span> ],\n\n        <span class="hljs-comment">// Module config</span>\n        <span class="hljs-attr">canvasSketch</span>: {\n            <span class="hljs-attr">hideErrorsInConsole</span>: <span class="hljs-literal">false</span>,\n            <span class="hljs-attr">hideGenericMessagesInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// Disabled in production</span>\n        },\n\n    };\n\n</code></pre>\n<h2>Usage</h2>\n<pre><code class="language-javascript">\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n        <span class="hljs-attr">data</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (\n            {\n                <span class="hljs-attr">sketchManager</span>: <span class="hljs-literal">null</span>,\n            }\n        ),\n        mounted() {\n\n            <span class="hljs-comment">// Suggested way</span>\n            <span class="hljs-keyword">try</span> {\n\n                <span class="hljs-keyword">this</span>.sketchManager = <span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.$sketch(\n                    <span class="hljs-comment">// Settings of the sketch</span>\n                    {\n                        <span class="hljs-attr">animate</span>: <span class="hljs-literal">true</span>,\n                        <span class="hljs-attr">hotkeys</span>: <span class="hljs-literal">false</span>,  <span class="hljs-comment">// &lt;-- the only default value passed</span>\n                        <span class="hljs-comment">// &lt;canvas ref="canvas" /&gt; or you can pass a DOMCanvas element document.querySelector( \'canvas\' )</span>\n                        <span class="hljs-attr">canvas</span>: <span class="hljs-keyword">this</span>.$refs.canvas,\n                    },\n                    <span class="hljs-comment">// Method for the rendering</span>\n                    <span class="hljs-keyword">this</span>.sketch,\n                );\n\n            } <span class="hljs-keyword">catch</span>( e ) {\n\n                <span class="hljs-built_in">console</span>.error(\n                    e\n                );\n\n            }\n\n        },\n        beforeDestroy() {\n\n            <span class="hljs-keyword">this</span>.sketchManager &amp;&amp; <span class="hljs-keyword">this</span>.sketchManager.unload();\n\n        },\n        <span class="hljs-attr">methods</span>: {\n            sketch({ context }) {\n\n                <span class="hljs-comment">// Here you start coding-art</span>\n\n                <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">{ context }</span>) =&gt;</span> {\n\n                    <span class="hljs-comment">// Here you can return an animation</span>\n\n                };\n\n            },\n        },\n    };\n\n</code></pre>\n<blockquote>\n<p>N.B. : You don\'t really need the <a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md#sketchmanager">sketchManager</a>, but i think with Vue it\'s a better way to remove and clean handlers onBeforeDestroy..</p>\n</blockquote>\n<hr>\n<h2>Development</h2>\n<ol>\n<li>Clone this repository;</li>\n<li>Install dependencies using <code>yarn install</code> or <code>npm install</code>;</li>\n<li>Start development server using <code>yarn dev</code> or <code>npm run dev</code>.</li>\n</ol>\n<h2>🐞 Issues</h2>\n<p>Please make sure to read the <a href="./.github/ISSUE_TEMPLATE/bug_report.md">Issue Reporting Checklist</a> before opening an issue. Issues not conforming to the guidelines may be closed immediately.</p>\n<h2>👥 Contribution</h2>\n<p>Please make sure to read the <a href="./.github/ISSUE_TEMPLATE/feature_request.md">Contributing Guide</a> before making a pull request.</p>\n<h2>📖 Changelog</h2>\n<p>Details changes for each release are documented in the <a href="./CHANGELOG.md"><strong>release notes</strong></a>.</p>\n<h3>📃 License</h3>\n<p><a href="./LICENSE">MIT License</a> // Copyright (©) 2019-present <a href="https://lucaiaconelli.it">Luca Iaconelli</a></p>\n<h4>💸 Are you feeling generous today?  :)</h4>\n<p>Do you want to share a beer? We can be good friends.. <strong><a href="https://www.paypal.me/luxdamore">Paypal</a> // <a href="https://www.patreon.com/luxdamore">Patreon</a></strong></p>\n<blockquote>\n<p><em>It\'s always a good day to be magnanimous - cit</em></p>\n</blockquote>\n<h4>💼 Hire me</h4>\n<p><a href="https://lucaiaconelli.it"><img src="https://img.shields.io/badge/email-Contact%20me-success" alt="Contacts"></a></p>\n<p><a href="https://ko-fi.com/luxdamore"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"></a></p>\n<h4>💘 Inspired by</h4>\n<blockquote>\n<p><strong>All my thanks goes to Matt DesLauriers for these beautiful and easy to use libraries</strong>.</p>\n</blockquote>\n<hr>\n<h5>✔ TODO</h5>\n<blockquote>\n<p>Just asking myself if i should do more.</p>\n</blockquote>\n<ul>\n<li>Add tests;</li>\n<li>Check compatibility with P5 (actually not working);</li>\n<li>More config options?</li>\n</ul>\n</section>\n'}},mounted:function(){var e=this;this.$nextTick((function(){e.initHighlight(),e.initReadmeLinks()}))},methods:{initHighlight:function(){Object(o.a)(document.querySelectorAll("pre")).forEach((function(e){return r.a.highlightBlock(e)}))},initReadmeLinks:function(){for(var e=Object(o.a)(document.querySelectorAll(".readme > article a, .readme > article pre")).filter((function(e){return"A"===e.tagName})),n="https://github.com/LuXDAmore/generative-art.git".replace(".git","/tree/master/"),i=0;i<e.length;i++){e[i].setAttribute("target","_blank"),e[i].setAttribute("rel","noopener"),e[i].setAttribute("title",e[i].textContent);var t=e[i].getAttribute("href");t.startsWith("./")&&e[i].setAttribute("href",t.replace("./",n))}}}},f=(t(277),t(31)),component=Object(f.a)(k,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container readme canvas-container"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:this._s(this.readme)}})])}),[],!1,null,null,null);n.default=component.exports}}]);