(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7"),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},AP2z:function(t,e,n){var r=n("nmnc"),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(s){}var o=c.call(t);return r&&(e?t[a]=n:delete t[a]),o}},BR8T:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("YbiN")}])},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},HLqC:function(t,e,n){var r=n("R5Y4"),o=n("mv/X"),i=n("ZCgT");t.exports=function(t){return function(e,n,c){return c&&"number"!=typeof c&&o(e,n,c)&&(n=c=void 0),e=i(e),void 0===n?(n=e,e=0):n=i(n),c=void 0===c?e<n?1:-1:i(c),r(e,n,c,t)}}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},MMmD:function(t,e,n){var r=n("lSCD"),o=n("shjB");t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),i=n("KfNM"),c="[object Null]",a="[object Undefined]",s=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:c:s&&s in Object(t)?o(t):i(t)}},R5Y4:function(t,e){var n=Math.ceil,r=Math.max;t.exports=function(t,e,o,i){for(var c=-1,a=r(n((e-t)/(o||1)),0),s=Array(a);a--;)s[i?a:++c]=t,t+=o;return s}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},WjpJ:function(t,e,n){var r=n("HLqC")();t.exports=r},YbiN:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),i=n("q1tI"),c=n.n(i),a=n("7raJ"),s=n.n(a),u=n("KZkv"),l=n("Qog0"),p=n("8x5e"),f=n("HXcA");n("MX0m"),c.a.createElement,n("5eBd"),n("WjpJ"),c.a.createElement;var d=n("pGHw"),b=n("au5P"),v=n("K1gV"),x=c.a.createElement,y=function(){s()("blog-page")["blog-page"];var t=x(v.a,{className:"SectionHeader_left"},"\u0411\u043b\u043e\u0433");return x(l.a,null,x(p.a,null),x(d.a,{property:"blog-page"},x(b.a,{header:t,property:"description",data:{description:"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}})),x(f.a,{property:"footer"}))};y.getInitialProps=function(t){var e;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(Object(u.a)(t.store));case 2:return e=n.sent,n.abrupt("return",{initData:e});case 4:case"end":return n.stop()}}),null,null,null,Promise)};e.default=y},ZCgT:function(t,e,n){var r=n("tLB3"),o=1/0,i=17976931348623157e292;t.exports=function(t){return t?(t=r(t))===o||t===-o?(t<0?-1:1)*i:t===t?t:0:0===t?t:0}},au5P:function(t,e,n){"use strict";var r=n("rePB"),o=n("MX0m"),i=n.n(o),c=n("q1tI"),a=n.n(c),s=(n("iRFk"),n("M55E")),u=a.a.createElement;function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var p={description:"description"},f=new s.Converter;f.setOption("simpleLineBreaks",!0),f.setOption("encodeEmails",!1);e.a=function(t){t.property;var e=t.data,n=t.header,o=t.innerProperties,c=void 0===o?{}:o;c=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},p,{},c);var a=e&&f.makeHtml(e[c.description]);return u("div",{className:"jsx-1318184796 description"},u("section",{className:"jsx-1318184796 description__section"},n,u("div",{className:"jsx-1318184796 description__content"},u("article",{property:"description","mv-default":"\u041a\u043e\u043d\u0442\u0435\u043d\u0442",dangerouslySetInnerHTML:{__html:a},className:"jsx-1318184796 description__content-container markdown"}))),u(i.a,{id:"1998832615"},[".description.jsx-1318184796{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".description__section.jsx-1318184796{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".description__content-container.jsx-1318184796{width:var(--page-width);background:var(--app-main-color);color:#fff;padding:20px;box-sizing:border-box;font-size:1.2em;border:4px solid var(--accent-color);}",".description__content.jsx-1318184796{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.7em;}"]),u(i.a,{id:"2290534866"},[".description__content h1,.description__content h2,.description__content h3,.description__content h4,.description__content h5,.description__content h6{color:var(--accent-color);}",".description__content a{color:var(--accent-color);}"]))}},lSCD:function(t,e,n){var r=n("NykK"),o=n("GoyQ"),i="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",s="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==c||e==a||e==i||e==s}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!==t&&e!==e}},"mv/X":function(t,e,n){var r=n("ljhN"),o=n("MMmD"),i=n("wJg7"),c=n("GoyQ");t.exports=function(t,e,n){if(!c(n))return!1;var a=typeof e;return!!("number"==a?o(n)&&i(e,n.length):"string"==a&&e in n)&&r(n[e],t)}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},shjB:function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},tLB3:function(t,e,n){var r=n("GoyQ"),o=n("/9aa"),i=NaN,c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=s.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):a.test(t)?i:+t}},wJg7:function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?n:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}}},[["BR8T",0,2,1,3,4]]]);