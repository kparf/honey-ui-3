(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),c=n("rePB");function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}function s(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=n("q1tI"),y=n.n(l),b=n("8Bbg"),h=n.n(b),O=n("64/e"),v=n.n(O),d=n("we5D"),P=n.n(d),w=n("qPgm");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(t){return function(t){t.on("header/fetch-req",(function(t){return{header:{fetching:!0}}})),t.on("header/fetch-res",(function(t,e){return{header:j({},e,{fetching:!1})}})),t.on("header/fetch",(function(e){var n;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch("header/fetch-req"),e.next=3,o.a.awrap(Object(w.a)());case 3:n=e.sent,t.dispatch("header/fetch-res",n);case 5:case"end":return e.stop()}}),null,null,null,Promise)}))}},x=function(t){return function(e){e.on("@init",(function(){return t})),e.on("init/fetch-res",(function(t,e){return e})),e.on("init/fetch",(function(t){var n;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(Object(w.b)());case 2:n=t.sent,e.dispatch("init/fetch-res",n);case 4:case"end":return t.stop()}}),null,null,null,Promise)}))}};function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var _={header:{phone:[],address:[]}},D=function(t){var e=t?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},_,{},t):_;return P()([m,x(e)])},E=y.a.createElement;function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var T=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,t);var e,n,r,c,i=(e=a,function(){var t,n=f(e);if(C()){var r=f(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return s(this,t)});function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),i.apply(this,arguments)}return n=a,c=[{key:"getInitialProps",value:function(t){var e,n,r;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=!1,n=D(),t.ctx.store=n,c.next=5,o.a.awrap(h.a.getInitialProps(t));case 5:return r=c.sent,c.abrupt("return",R({},r,{isServer:e}));case 7:case"end":return c.stop()}}),null,null,null,Promise)}}],(r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return E(v.a.Provider,{value:D(n.initData)},E(e,n))}}])&&u(n.prototype,r),c&&u(n,c),a}(h.a);e.default=T},"64/e":function(t,e,n){var r=n("q1tI");t.exports=r.createContext()},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),c=n("tCBg"),u=n("T0f4"),i=n("48fX"),a=n("vJKn");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var f=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=h,e.default=void 0;var p=f(n("q1tI")),l=n("g/15");function y(t){var e,n,r;return a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,a.awrap((0,l.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=l.AppInitialProps;var b=function(t){i(a,t);var e,n=(e=a,function(){var t,n=u(e);if(s()){var r=u(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return c(this,t)});function a(){return r(this,a),n.apply(this,arguments)}return o(a,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,c=t.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||c?{}:{url:h(e)}))}}]),a}(p.default.Component);function h(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=b,b.origGetInitialProps=y,b.getInitialProps=y},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},o0o1:function(t,e,n){t.exports=n("ls82")},qPgm:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=n("o0o1"),o=n.n(r),c=n("vcXL"),u=n.n(c),i=function(){var t,e;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(u()("https://raw.githubusercontent.com/kparf/honey-data/master/honey.json"));case 2:return t=n.sent,n.next=5,o.a.awrap(t.json());case 5:return e=n.sent,n.abrupt("return",e.header||{});case 7:case"end":return n.stop()}}),null,null,null,Promise)},a=function(){var t;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(u()("https://raw.githubusercontent.com/kparf/honey-data/master/honey.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),null,null,null,Promise)}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},we5D:function(t,e){t.exports=function(t){var e={},n={},r=function(t,o){if("@dispatch"!==t&&r("@dispatch",[t,o,e[t]]),e[t]){var c,u={};e[t].forEach((function(t){var e=t(n,o);e&&"function"!==typeof e.then&&(c=n=Object.assign({},n,e),Object.assign(u,e))})),c&&r("@changed",u)}},o={dispatch:r,get:function(){return n},on:function(t,n){return(e[t]||(e[t]=[])).push(n),function(){e[t]=e[t].filter((function(t){return t!==n}))}}};return t.forEach((function(t){t&&t(o)})),r("@init"),o}}},[[0,0,2,1]]]);