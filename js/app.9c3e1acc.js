(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0c181611":"b7f1ff26","chunk-2e0b54c0":"dce6c12c","chunk-527fa372":"975af57a","chunk-62f521e5":"5abd57d5","chunk-8bb59c62":"b4dae236","chunk-b6b85970":"94cb8390"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-0c181611":1,"chunk-2e0b54c0":1,"chunk-527fa372":1,"chunk-62f521e5":1,"chunk-8bb59c62":1,"chunk-b6b85970":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-0c181611":"72af2052","chunk-2e0b54c0":"466bdfd4","chunk-527fa372":"0dd07f07","chunk-62f521e5":"12394f4f","chunk-8bb59c62":"36439221","chunk-b6b85970":"c9e7ee59"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],h.parentNode.removeChild(h),a(i)},h.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}s[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var h=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"text-center"},[a("b-navbar",{staticClass:"nav-color",attrs:{toggleable:"lg"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("span",{staticClass:"look"},[t._v("LookMeUp.io")])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{attrs:{to:"/"}},[a("a",{staticClass:"nav-a"},[t._v("Home")])])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/pricing"}},[a("a",{staticClass:"nav-a"},[t._v("Pricing")])])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/getstarted"}},[a("a",{staticClass:"nav-a"},[t._v("Get Started")])])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/payment"}},[a("a",{staticClass:"nav-a"},[t._v("Payment Options")])])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/contact"}},[a("a",{staticClass:"nav-a"},[t._v("Contact")])])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/faq"}},[a("a",{staticClass:"nav-a"},[t._v("FAQ")])])],1)],1)],1)],1)],1)]),a("router-view"),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-4"},[a("div",{staticClass:"info setup"},[a("h2",[a("span",[t._v("LookMeUp")])]),a("p",{staticClass:"paragraph"},[t._v("LookMeUp.io is an online business with one goal: To put verify and put businesses on google and google maps within a weeks time.")])])]),a("div",{staticClass:"col-sm-6 col-lg-5"},[a("div",{staticClass:"helpful-link setup"},[a("h2",[t._v("UseFull Links")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/"}},[t._v(" Home")])]),a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/#/contact"}},[t._v(" Contact Us")])]),a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/#/pricing"}},[t._v("Pricing")])]),a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/#/payment"}},[t._v("Payment")])]),a("li",[a("i",{staticClass:"fab fa-twitter"}),a("a",{attrs:{href:"https://www.instagram.com/lookmeup.io/"}},[t._v("Instagram ")])])])]),a("div",{staticClass:"col"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/#/payment"}},[t._v(" Payment Options")])]),a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/#/faq"}},[t._v(" FAQ")])]),a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/#/getstarted"}},[t._v(" Get Started")])]),a("li",[a("i",{staticClass:"fa fa-chevron-right"}),a("a",{attrs:{href:"/"}},[t._v("Facebook")])]),a("li",[a("i",{staticClass:"fab fa-twitter"}),a("a",{attrs:{href:"mailto:Oyetunde1@lookmeup.io?subject=Contact"}},[t._v(" Oyetunde1@lookmeup.io")])])])])])])]),a("div",{staticClass:"col-sm-6 col-lg-3"},[a("div",{staticClass:"contact setup"},[a("h2",[t._v("Contact Us")]),a("ul",{staticClass:"list-unstyled"},[a("li",[t._v("Our Email and Phone Number : "),a("br")]),a("br"),a("li",[t._v("Phone : "),a("span",{staticClass:"contact1"},[t._v("267-340-4521")])]),a("li"),a("li",[t._v("Email : "),a("a",{staticClass:"contact1",attrs:{href:"mailto:Oyetunde1@lookmeup.io?subject=Contact"}},[t._v("Oyetunde1@lookmeup.io")])])])])])])])])}],i=(a("034f"),a("2877")),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f"));n["default"].use(u["a"]);var f=[{path:"/",name:"Home",component:function(){return a.e("chunk-62f521e5").then(a.bind(null,"bb51"))}},{path:"/getstarted",name:"getstarted",component:function(){return a.e("chunk-527fa372").then(a.bind(null,"60b1"))}},{path:"/payment",name:"payment",component:function(){return a.e("chunk-2e0b54c0").then(a.bind(null,"2b6e"))}},{path:"/faq",name:"faq",component:function(){return a.e("chunk-0c181611").then(a.bind(null,"0bcd"))}},{path:"/contact",name:"contact",component:function(){return a.e("chunk-8bb59c62").then(a.bind(null,"4fe8"))}},{path:"/pricing",name:"pricing",component:function(){return a.e("chunk-b6b85970").then(a.bind(null,"9daa"))}}],h=new u["a"]({routes:f}),d=h,p=a("5f5b"),v=a("b1e0");a("f9e3"),a("2dd8");n["default"].use(p["a"]),n["default"].use(v["a"]),n["default"].config.productionTip=!1,new n["default"]({router:d,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.9c3e1acc.js.map