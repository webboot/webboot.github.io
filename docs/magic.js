"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){i(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){return m(a)||l(a,b)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function m(a){if(Array.isArray(a))return a}function n(a){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===n(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),q=o.h,e=o.app,h=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return q(a,{},b);return q(a,b,d)}},r=h("a"),a=h("button"),s=h("circle"),t=h("div"),u=h("footer"),v=h("g"),g=h("h1"),w=h("h2"),x=h("h3"),y=h("h4"),z=h("h5"),A=h("header"),B=h("img"),C=h("input"),D=h("label"),E=h("li"),F=h("link"),G=h("main"),H=h("meta"),I=h("nav"),J=h("p"),p=h("path"),K=h("script"),L=h("span"),M=h("svg"),N=h("title"),O=h("ul"),P=h("view"),Q={description:"solving the tofu problem, one boot at the time.",gdpr:{allowed:[],show:!1},menu:[{text:"packages",to:"/#packages"}],pageClass:{},root:"/",theme:"dark",title:"@webboot",url:"/"},R={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},S=function(a){var b,c=a.blog,d=a.link,e=a.month,g=a.url,h=a.year,i=Object.entries(c[h][e]),k=[e];return d?b="".concat(d).concat(e,"/"):k.push(" - ",h),[x(b?ba({to:b},k):k),i.map(function(c){var d=j(c,2),e=d[0],g=d[1];return g.map(function(c){return T(f({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},T=function(a){return t([y([a.day,"-",a.month,"-",a.year," - ",ba({to:a.name},a.title)]),J(a.description)])},U=function(a){var b,c=a.link,d=a.year,e=a.blog,g=a.url;return c?b="".concat(c).concat(d,"/"):g.endsWith("".concat(d,"/"))&&(b=g),t([w(c?ba({to:b},d):d),Object.entries(e[d]).map(function(c){var d=j(c,2),e=d[0],g=d[1];return S(f({},a,{month:e,days:g,link:b}))})])},V=function(){return t({class:"Boot"},[M({viewBox:"0 0 1000 1000"},[p({class:"sole",d:"\nM971 798l-9 4c-4 3-105 57-278 57-65 0-132-7-199-23\na1797 1797 0 00-354-44c-61 0-95 5-95 5l-13 2-1-2-4-9\na509 509 0 00-5 34\nc-4 32-5 62 5 60 20-4 216 14 263 14 24 0 34-20 39-41 45 6 87 14 121 27 59 22 138 32 219 32 122 0 248-22 313-58\na33 33 0 00-2-58z\n".trim()}),p({class:"upper",d:"\nM28 753c2 18 5 28 5 28s34-5 98-5a1249 1249 0 01202 15 1888 1888 0 01156 29\nc72 16 138 23 195 23 171 0 271-55 271-55-2-83-76-103-150-109\nl-23-1-47 1c-45 0-89-6-125-57\nl-17 26c-9 15-31-1-22-16 6-12 14-23 23-33-17-24-33-43-48-58-13 11-24 25-33 39\ns-33 1-23-14 22-31 36-43c-15-13-27-23-36-33-20 12-37 29-52 47-11 13-33-3-22-16 17-21 37-40 59-54-2-7-3-15-1-23\nl1-29c-32 1-64 4-96 8-17 2-17-25 0-27 31-5 63-7 94-8l-9-84\nc-39 0-78 2-117 11-17 4-24-22-7-26 40-9 80-12 120-12-9-65-19-130-20-160-1-25-19-32-47-32-36 0-91 12-147 12l-26-1-25-1\nc-93 0-146 44-146 44s103 223 27 389a428 428 0 00-48 225z\n".trim()})])])},W=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return u({class:"Footer"},[t({class:"Container"},[a,t({class:"Credits"},["made with a few bits of ",ba({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},X=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,u=void 0===r?"Selected":r,w=c.denyText,A=void 0===w?"None":w;if(!f)return t({class:"Gdpr"},M({class:"ShowHide",onclick:[ia.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[v([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),s({cx:"192",cy:"128",r:"32"}),s({cx:"128",cy:"256",r:"32"}),s({cx:"288",cy:"384",r:"32"}),s({cx:"272",cy:"272",r:"16"}),s({cx:"400",cy:"336",r:"16"}),s({cx:"176",cy:"368",r:"16"})])]));var B=!!e.length;return t({class:"Gdpr"},[t({class:"Container"},[h&&x(h),j&&J(j),B&&[O(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return E({class:"Cookie"},[C({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[ia.gdpr.toggleAllow,{name:b}]}),(d||e)&&D({for:b},[d&&y(d),e&&J(e)])])}))],B?[z(n),C({class:"allow all",onclick:ia.gdpr.allow,type:"button",value:q}),C({class:"allow",onclick:ia.gdpr.close,type:"button",value:u}),C({class:"allow none",onclick:ia.gdpr.deny,type:"button",value:A})]:C({onclick:ia.gdpr.close,value:l,type:"button"})])])},Y=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=j(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=j(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return i.length?O({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return E([ba({to:b},_({src:c}))])})):void 0},Z=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=a.menu,d=b(a,["menu"]);return A({class:"Header"},[ba({to:d.root,class:"Logo"},[V(),L("@webboot")]),c&&ca({state:d,items:c})])},$=function(){return t({class:"Hero"},[V(),g([ba({to:"/"},"@webboot")]),J("trust on every step")])},_=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)},aa=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:ia.changeTheme})},ba=function(a,c){var d=a.to,e=a.action,f=void 0===e?ia.go:e,g=b(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=b(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,ha.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),r(l,[i,c])},ca=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,g=a.state,h=g.url,i=g.hash,j=g.root;return i&&!h.endsWith(i)&&(h+="#".concat(i)),I({className:c},O(e.map(function(a){return da(f({},a,{url:h,root:j,collapse:void 0===d||d}))})))},da=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;j&&p&&("-"===o||"#"===o)&&(n=j+n);var q=n.startsWith(h);h&&p&&!q&&(n=h+n),l.to=n.replace(/\/\//g,"/"),l.to===g&&(m["class"].active=!0);var r=[],s=g.startsWith(l.to)||!k;return s&&e.length&&(r=O(e.map(function(a){return da(f({parentTo:l.to,url:g,root:h,collapse:k},a))}))),E(m,[l.to?ea(l,c):L(l,c),r])},ea=function(a,b){return ba(a,b)},fa=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return G(e,t({class:{Wrapper:!0}},[ga({state:d,page:c}),b]))},ga=function(a){var b=a.page,c=a.state;return[Z(c),t({class:"Page",id:"page"},b),W(c)]},ha={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ha.db.init(),g=ha.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ha.db.init(),f=void 0;return d&&e[d]&&(f=ha.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ha.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},ia={changeTheme:function changeTheme(a){return f({},a,{pageClass:f({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ha.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[ia.gdpr.show,{show:!1}]}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ha.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[ia.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:[]})}),[ha.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[ia.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?f({},a,{gdpr:f({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=j(d,2),g=e[0],h=e[1],i=void 0===h?"":h;if(g===a.url){if(i&&i===a.hash)return a;window.scroll({top:0,behaviour:"smooth"})}return window.history.pushState({url:g,hash:i},"",c),i?window.location.hash=i:window.scroll({top:0,behaviour:"smooth"}),f({},a,{url:g,hash:i,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),f({},a,{url:d,hash:e})}},ja={"/":function _(){return[t({id:"about"},[$()]),t({id:"packages"},[w("packages"),O([E([y(ba({to:"https://github.com/webboot/core"},"@webboot/core")),J("the core functionality of @webboot. Used both in clients and on the server."),J(ba({to:"https://webboot.github.io/core"},"docs"))]),E([y(ba({to:"https://github.com/webboot/core"},"@webboot/cli")),J("command line interface exposing the webboot functionality to bash"),J(ba({to:"https://webboot.github.io/cli"},"docs"))])])]),t({id:"sponsors"},[w("sponsors"),J("the following organizations and individuals have contributed to @webboot"),O([E([y("BitcoinersWithoutBorders"),J("Development and Evangelism")]),E([y("Metalab Vienna"),J("Some of us work there and are members.")]),E([y("Parallele Polis Vienna"),J("Some of us work there and are members.")])])])]},"/404/":function _(){return t("404 - not found")},"/packages/":function packages(){return[g([ba({to:"/"},"@webboot/packages")]),w("@webboot/core"),Y("webboot/core"),w("@webboot/cli"),Y("webboot/core")]}};e({init:[f({},Q,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ha.db.get,{key:"magic-gdpr",action:ia.gdpr.show}]]],subscriptions:function subscriptions(){return[[R.listenPopState,ia.pop]]},view:function(a){var b=ja[a.url]?a.url:"/404/",c=ja[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),fa({page:c,state:a},[X(a),aa(a)])},node:document.getElementById("Magic")});