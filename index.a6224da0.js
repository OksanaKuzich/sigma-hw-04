function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequiree88b;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequiree88b=a),a.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("1sSmR",(function(e,t){e.exports=import("./"+a("kyEFX").resolve("c1Ici")).then((()=>a("eIVkZ")))})),a("kyEFX").register(JSON.parse('{"8gHPT":"index.a6224da0.js","c1Ici":"service.79b28e2e.js"}'));const o=document.querySelector("#footerDate"),i=(new Date).getFullYear();o.innerHTML=i,function(){let e=document.querySelector(".news__list").querySelectorAll(".news__item");e.forEach((e=>e.classList.remove("news__transition")));let t=new IntersectionObserver((e=>{e.forEach((e=>{("function"!=typeof getCurrentAnimationPreference||getCurrentAnimationPreference())&&(e.isIntersecting?e.target.classList.add("news__transition"):e.target.classList.remove("news__transition"))}))}));e.forEach((e=>t.observe(e)))}();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:70,breakpoints:{1440:{width:1350,slidesPerView:2,spaceBetween:155}},loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function u(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return u(1,arguments),e instanceof Date||"object"===s(e)&&"[object Date]"===Object.prototype.toString.call(e)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){u(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===c(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function f(e){if(u(1,arguments),!l(e)&&"number"!=typeof e)return!1;var t=d(e);return!isNaN(Number(t))}function m(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(e,t){u(2,arguments);var n=d(e).getTime(),r=m(t);return new Date(n+r)}function g(e,t){u(2,arguments);var n=m(t);return h(e,-n)}window.addEventListener("scroll",(function(){let e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=e+"%"}));function v(e){u(1,arguments);var t=d(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}function w(e){u(1,arguments);var t=1,n=d(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function b(e){u(1,arguments);var t=d(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=w(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=w(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function y(e){u(1,arguments);var t=b(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=w(n);return r}function p(e){u(1,arguments);var t=d(e),n=w(t).getTime()-y(t).getTime();return Math.round(n/6048e5)+1}var T={};function C(){return T}function M(e,t){var n,r,a,o,i,s,l,c;u(1,arguments);var f=C(),h=m(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:f.weekStartsOn)&&void 0!==r?r:null===(l=f.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=d(e),v=g.getUTCDay(),w=(v<h?7:0)+v-h;return g.setUTCDate(g.getUTCDate()-w),g.setUTCHours(0,0,0,0),g}function S(e,t){var n,r,a,o,i,s,l,c;u(1,arguments);var f=d(e),h=f.getUTCFullYear(),g=C(),v=m(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:g.firstWeekContainsDate)&&void 0!==r?r:null===(l=g.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(h+1,0,v),w.setUTCHours(0,0,0,0);var b=M(w,t),y=new Date(0);y.setUTCFullYear(h,0,v),y.setUTCHours(0,0,0,0);var p=M(y,t);return f.getTime()>=b.getTime()?h+1:f.getTime()>=p.getTime()?h:h-1}function D(e,t){var n,r,a,o,i,s,l,c;u(1,arguments);var d=C(),f=m(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(l=d.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),h=S(e,t),g=new Date(0);g.setUTCFullYear(h,0,f),g.setUTCHours(0,0,0,0);var v=M(g,t);return v}function k(e,t){u(1,arguments);var n=d(e),r=M(n,t).getTime()-D(n,t).getTime();return Math.round(r/6048e5)+1}function x(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var P={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return x("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):x(n+1,2)},d:function(e,t){return x(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return x(e.getUTCHours()%12||12,t.length)},H:function(e,t){return x(e.getUTCHours(),t.length)},m:function(e,t){return x(e.getUTCMinutes(),t.length)},s:function(e,t){return x(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return x(Math.floor(r*Math.pow(10,n-3)),t.length)}},U="midnight",E="noon",W="morning",O="afternoon",Y="evening",q="night";function N(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+x(o,2)}function L(e,t){return e%60==0?(e>0?"-":"+")+x(Math.abs(e)/60,2):H(e,t)}function H(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+x(Math.floor(a/60),2)+n+x(a%60,2)}var _={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P.y(e,t)},Y:function(e,t,n,r){var a=S(e,r),o=a>0?a:1-a;return"YY"===t?x(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):x(o,t.length)},R:function(e,t){return x(b(e),t.length)},u:function(e,t){return x(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return x(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=k(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):x(a,t.length)},I:function(e,t,n){var r=p(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):x(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):P.d(e,t)},D:function(e,t,n){var r=v(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):x(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return x(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return x(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return x(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?E:0===a?U:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?Y:a>=12?O:a>=4?W:q,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):P.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):P.s(e,t)},S:function(e,t){return P.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return L(a);case"XXXX":case"XX":return H(a);default:return H(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return L(a);case"xxxx":case"xx":return H(a);default:return H(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+N(a,":");default:return"GMT"+H(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+N(a,":");default:return"GMT"+H(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return x(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return x((r._originalDate||e).getTime(),t.length)}},F=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},j=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},A={p:j,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return F(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",F(a,t)).replace("{{time}}",j(o,t))}};function z(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var R=["D","DD"],B=["YY","YYYY"];function X(e){return-1!==R.indexOf(e)}function Q(e){return-1!==B.indexOf(e)}function G(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var I={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},J=function(e,t,n){var r,a=I[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function V(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var $={date:V({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:V({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:V({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},K={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Z(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function ee(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?ne(s,(function(e){return e.test(u)})):te(s,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var c=t.slice(u.length);return{value:i,rest:c}}}function te(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function ne(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var re,ae={code:"en-US",formatDistance:J,formatLong:$,formatRelative:function(e,t,n,r){return K[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(re={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(re.matchPattern);if(!n)return null;var r=n[0],a=e.match(re.parsePattern);if(!a)return null;var o=re.valueCallback?re.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:ee({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ee({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ee({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ee({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ee({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},oe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ie=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ue=/^'([^]*?)'?$/,se=/''/g,le=/[a-zA-Z]/;function ce(e){var t=e.match(ue);return t?t[1].replace(se,"'"):e}let de=Date.now()+5e3,fe=["#bb0000","#ffffff"];const me=()=>{confetti({particleCount:2,angle:60,spread:55,origin:{x:0,y:.9},colors:fe}),confetti({particleCount:2,angle:120,spread:55,origin:{x:1,y:.9},colors:fe}),Date.now()<de&&requestAnimationFrame(me)},he=`Only today ${function(e,t,n){var r,a,o,i,s,l,c,h,v,w,b,y,p,T,M,S,D,k;u(2,arguments);var x=String(t),P=C(),U=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:P.locale)&&void 0!==r?r:ae,E=m(null!==(o=null!==(i=null!==(s=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(c=n.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:P.firstWeekContainsDate)&&void 0!==i?i:null===(v=P.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==o?o:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=m(null!==(b=null!==(y=null!==(p=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(M=n.locale)||void 0===M||null===(S=M.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==p?p:P.weekStartsOn)&&void 0!==y?y:null===(D=P.locale)||void 0===D||null===(k=D.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==b?b:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var O=d(e);if(!f(O))throw new RangeError("Invalid time value");var Y=z(O),q=g(O,Y),N={firstWeekContainsDate:E,weekStartsOn:W,locale:U,_originalDate:O},L=x.match(ie).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,U.formatLong):e})).join("").match(oe).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return ce(r);var o=_[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!Q(r)||G(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!X(r)||G(r,t,String(e)),o(q,r,U.localize,N);if(a.match(le))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return L}(new Date,"d.MM.yyy")} you have a 120% discount :)`,ge=document.querySelector(".signUp__form");ge.addEventListener("submit",(e=>{e.preventDefault();const t={name:e.target.elements.name.value,surname:e.target.elements.surname.value,email:e.target.elements.email.value};localStorage.setItem("person",JSON.stringify(t)),"Oksana"===t.name&&(me(),setTimeout((()=>{alert(he)}),4e3)),ge.reset()}));const ve=e=>{const t=document.querySelector(".service__card-list"),n=e.map((e=>`<li class="service__card-item">\n            <h3 class="service__card-title">${e.title}</h3>\n            <p class="service__card-content">\n              ${e.subtitle}\n            </p>\n          </li>`)).join("");t.innerHTML=n},we=e=>[...e].reverse().reduce(((e,t)=>e.length>0&&e.some((e=>e.category===t.category))?e:[...e,t]),[]);(async()=>{const e=await a("1sSmR"),t=we(e);ve(t);const n=document.querySelectorAll(".service__btn"),r=t=>{n.forEach((e=>e.classList.remove("active"))),t.target.classList.add("active");const r=t.target.dataset.category;let a=[];console.log(t.target.classList[1]),a="all"===r||"active"===t.target.classList[1]?we(e):e.filter((e=>e.category===r)),ve(a)};n.forEach((e=>e.addEventListener("click",r)))})(),document.addEventListener("DOMContentLoaded",(()=>{!function(){let e=setTimeout(n,6e4);function t(){clearTimeout(e),e=setTimeout(n,6e5)}function n(){confirm("Are you here?")||close()}document.addEventListener("mousemove",t),document.addEventListener("keypress",t)}()}));
//# sourceMappingURL=index.a6224da0.js.map