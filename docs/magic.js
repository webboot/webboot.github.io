"use strict";function b(a){return s(a)||c(a)||n(a)||m()}function c(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?f(Object(b),!0).forEach(function(c){k(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){return s(a)||r(a,b)||n(a,b)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(a,b){if(a){if("string"==typeof a)return q(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?q(a,b):void 0}}function q(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function r(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function s(a){if(Array.isArray(a))return a}function t(a){"@babel/helpers - typeof";return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}var u=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===t(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),v=u.h,h=u.app,o=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===t(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return v(a,{},b);return v(a,b,d)}},w=o("a"),a=o("button"),x=o("circle"),y=o("code"),z=o("div"),A=o("em"),B=o("figcaption"),C=o("figure"),D=o("footer"),E=o("g"),g=o("h1"),F=o("h2"),G=o("h3"),H=o("h4"),I=o("header"),J=o("i"),i=o("img"),K=o("input"),L=o("li"),M=o("link"),N=o("main"),O=o("meta"),P=o("nav"),Q=o("p"),p=o("path"),R=o("pre"),S=o("script"),T=o("span"),U=o("svg"),V=o("title"),W=o("ul"),X=o("view"),Y={branding:["@web","boot docs"],description:"solving the tofu problem, one boot at a time.",float:{float:{}},footer:{one:{before:["trust on every step.","created by the @webboot dao."],menu:[{text:"privacy notice",to:"https://webboot.org/privacy/"}],title:"@webboot"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/webboot"},{text:"twitter",to:"https://twitter.com/webbootorg"},{text:"keybase",to:"https://keybase.io/webboot"},{text:"github",to:"https://github.com/webboot"},{text:"gitlab",to:"https://gitlab.com/webboot"}],title:"social links"},two:{menu:[{text:"index",to:"/"}],title:"sitemap"}},hero:{content:["automagically verify the integrity of homepages,","before you load them."],description:"trust on every step",menu:[{text:"publisher",to:"/#publisher"},{text:"developer",to:"/#publisher"},{text:"user",to:"/#user"}],title:["@web","boot"]},menu:[{text:"user",to:"/#user"},{text:"developer",to:"/#publisher"},{text:"publisher",to:"/#publisher"}],nospy:{show:!1},pageClass:{},pages:{"/":{branding:["@web","boot docs"],description:"solving the tofu problem, one boot at a time.",footer:{one:{before:["trust on every step.","created by the @webboot dao."],menu:[{text:"privacy notice",to:"https://webboot.org/privacy/"}],title:"@webboot"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/webboot"},{text:"twitter",to:"https://twitter.com/webbootorg"},{text:"keybase",to:"https://keybase.io/webboot"},{text:"github",to:"https://github.com/webboot"},{text:"gitlab",to:"https://gitlab.com/webboot"}],title:"social links"},two:{menu:[{text:"index",to:"/"}],title:"sitemap"}},hero:{content:["automagically verify the integrity of homepages,","before you load them."],description:"trust on every step",menu:[{text:"publisher",to:"/#publisher"},{text:"developer",to:"/#publisher"},{text:"user",to:"/#user"}],title:["@web","boot"]},menu:[{text:"user",to:"/#user"},{text:"developer",to:"/#publisher"},{text:"publisher",to:"/#publisher"}],root:"/",seo:{about:"solving the tofu problem, one boot at a time.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://docs.webboot.org/webboot-preview.png",name:"@webboot",url:"https://docs.webboot.org"},title:"@webboot documentation",url:"/"},"/404/":{description:"404 - not found.",title:"404 - not found"},"/docs/api/":{title:"@webboot - api docs"},"/getting-started/":{title:"@webboot - getting started"}},root:"/",seo:{about:"solving the tofu problem, one boot at a time.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://docs.webboot.org/webboot-preview.png",name:"@webboot",url:"https://docs.webboot.org"},theme:"dark",title:"@webboot documentation",url:"/"},Z={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},$=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[G(b?ia({to:b},i):i),h.map(function(c){var d=l(c,2),e=d[0],f=d[1];return f.map(function(c){return _(j(j(j({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},_=function(a){return z([H([a.day,"-",a.month,"-",a.year," - ",ia({to:a.name},a.title)]),Q(a.description)])},aa=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),z([F(c?ia({to:b},d):d),Object.entries(e[d]).map(function(c){var d=l(c,2),e=d[0],f=d[1];return $(j(j({},a),{},{month:e,days:f,link:b}))})])},ba=function(){return ja([{img:"/browsers/firefox.jpg",to:"#",title:"firefox",text:"coming soon"},{img:"/browsers/brave.jpg",to:"#",title:"brave",text:"coming soon"},{img:"/browsers/edge.jpg",to:"#",title:"edge",text:"coming soon"},{img:"/browsers/chromium.jpg",to:"#",title:"chromium",text:"coming soon"},{img:"/browsers/opera.jpg",to:"#",title:"opera",text:"coming soon"}])},ca=function(){return z({class:"Credits"},["made with a few bits of ",ia({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},da=function(a,b){var c=a.footer,d=c.one,e=c.two,f=c.three;return D({class:"Footer"},[z({class:"Container"},[(d||e||f)&&z({class:"Menus"},[d&&z({class:"Child Info"},[d.title&&F(d.title),d.before&&d.before.map(function(b){return Q(b)}),d.menu&&W([d.menu.map(function(a){return L(ia(a))})]),d.after&&d.after.map(function(b){return Q(b)})]),e&&z({class:"Child"},[e.title&&F(e.title),e.before&&e.before.map(function(b){return Q(b)}),e.menu&&W([e.menu.map(function(a){return L(ia(a))})]),e.after&&e.after.map(function(b){return Q(b)})]),f&&z({class:"Child"},[f.title&&F(f.title),f.before&&f.before.map(function(b){return Q(b)}),f.menu&&W([f.menu.map(function(a){return L(ia(a))})]),f.after&&f.after.map(function(b){return Q(b)})])]),ca(a),b])])},ea=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],e=a.menu,f=d(a,["menu"]),g=f.branding,h=void 0===g?[]:g,i=f.root;Array.isArray(h)||(h=[h]);var j=h,k=b(j),l=k[0],m=k.slice(1);return I({class:"Header"},z([ka(i),l&&ia({to:i,class:"branding"},[T(l),m]),e&&la({state:f,items:e})]))},fa=function(a){var b=a.state,c=b.hero,d=Array.isArray(c.title)?c.title:[c.title],e=c.content;return e&&!Array.isArray(e)&&(e=[e]),z({id:"hero",class:"Hero"},[z({class:"LogoWrapper"},[ka(b),c.title&&g([T(d[0]),d[1]]),c.description&&Q(c.description)]),e&&z({class:"content"},e.map(function(b){return Q(b)})),c.menu&&la({items:c.menu,state:b})])},ga=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),i(a)},ha=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return U({class:"LightSwitch icon",onclick:sa.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])},ia=function(a){var b=a.to,c=a.action,e=void 0===c?sa.go:c,f=d(a,["to","action"]),g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],h=f.href,i=f.text,j=f.nofollow,k=f.noreferrer,l=d(f,["href","text","nofollow","noreferrer"]);b=b||h||"",l.href=b;var m="/"===b[0]||"#"===b[0];return m?l.onclick=[e,ra.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),w(l,[i,g])},ja=function(a){return W({class:"List"},a.map(function(a){return[L([ga({src:a.img,height:"90",width:"90"}),z([H(ia({to:a.to},a.title)),Q(a.text)])])]}))},ka=function(a){return ia({to:a.root,class:"Logo"},[U({viewBox:"0 0 640 500"},[p({class:"upper",d:"\nM 6 415\nc 213 -43 414 78 627 21 7 -136 -21 -129 -64 -129 -103 7 -167 9 -207 -64 -78 19 -77 21 -85 7 -11 -19 -9 -13 78 -35\nl -7 -29\nc -85 27 -90 23 -92 14 -8 -18 -5 -19 85 -42\nl -7 -29\nc -96 24 -87 25 -92 14 -4 -23 4 -23 89 -43\nl -4 -29\nc -85 21 -92 28 -92 14 0 -21 0 -21 92 -42 0 -43 9 -43 -27 -43\nC 200 7 63 1 35 30 63 151 -8 265 6 415\nz\n".trim(),fill:"#ea4444"}),p({class:"sole",d:"\nM 5 429\nc -5 36 -5 42 -1 71\nh 206\nc -57 -93 79 0 250 0 164 0 180 -14 180 -50 -220 64 -415 -64 -635 -21\nz\n".trim(),fill:"#5a5a5a"})])])},la=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),P({className:c},W(e.map(function(a){return ma(j(j({},a),{},{url:g,root:i,collapse:void 0===d||d}))})))},ma=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,k=a.collapse,l=d(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;g&&n.startsWith("/")&&(n=n.substr(1));var o=l.to[0];i&&("-"===o||"#"===o)&&(n=i+n);var p=n.startsWith(g);g&&("/"===o||"-"===o||"#"===o)&&!p&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var q=[],r=f.startsWith(l.to)||!k;return r&&e.length&&(q=W(e.map(function(a){return ma(j({parentTo:l.to,url:f,root:g,collapse:k},a))}))),L(m,[l.to?na(l,b):T(l,b),q])},na=function(a,b){return ia(a,b)},oa=function(a){var b=a.nospy,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Notice":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.buttonText,l=void 0===k?"Awesome!":k;return f?z({class:"NoSpy"},[z({class:"Container"},[h&&G(h),j&&Q(j),K({onclick:sa.nospy.toggle,value:l,type:"button"})])]):z({class:"NoSpy"},U({class:"icon",onclick:sa.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[E([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),x({cx:"192",cy:"128",r:"32"}),x({cx:"128",cy:"256",r:"32"}),x({cx:"288",cy:"384",r:"32"}),x({cx:"272",cy:"272",r:"16"}),x({cx:"400",cy:"336",r:"16"}),x({cx:"176",cy:"368",r:"16"})])]))},pa=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return N(e,z({class:{Wrapper:!0}},[ea(d),z({class:"Page",id:"page"},c(d)),da(d),b]))},qa=function(b,c){"string"==typeof b?b={content:b}:c?b=j({content:c},b):Array.isArray(b)&&(b={content:b.join("")});var d=b,f=d.content,g=d.lines,h=!(void 0!==g)||g;return z({class:{Pre:!0,lines:!h||"false"!==h}},[z({class:"menu"},[a({onclick:[sa.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),R(f.trim().split("\n").map(qa.Line))])};qa.Comment=function(a){return T({class:"comment"},a)},qa.Line=function(a){return y({class:"line"},qa.Words(a))},qa.Word=function(a){if(!a)return"";var b=a.includes("://"),c=a.startsWith("mailto:")||a.includes("@")&&a.includes(".");if(b||c)return ia({to:a,text:a});var d="";return"state"===a?d="state":"actions"===a?d="actions":ra.pre.keywords.includes(a)?d="keyword":ra.pre.builtins.includes(a)?d="builtin":ra.pre.booleans.includes(a)&&(d="boolean"),d?T({class:d},a):a},qa.Words=function(a){var c=a.split(ra.pre.commentRegex),d=b(c),e=d[0],f=d.slice(1),g=!e.endsWith(":")&&f.length;if(g)return[qa.Words(e),qa.Comment(f.join("").split(ra.pre.wordRegex).map(qa.Word))];var h=[],i=a;if(a.replace(ra.pre.stringRegex,function(a){var b=i.split(a),c=l(b,2),d=c[0],e=c[1];h.push(d.split(ra.pre.wordRegex).map(qa.Word)),h.push(T({class:"string"},a)),i=e}),i!==a)return h.push(i.split(ra.pre.wordRegex).map(qa.Word)),h;var j=a.split(ra.pre.wordRegex);return j.map(qa.Word)};var ra={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function preventDefault(a){return a.preventDefault(),a}},sa={changeTheme:function changeTheme(a){return j(j({},a),{},{pageClass:j(j({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},float:{toggle:function toggle(a,b){return j(j({},a),{},{float:j(j({},a.float),{},k({},b,!a.float[b]))})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=l(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=window,k=i.scrollY,m=a.pages&&a.pages[f]&&a.pages[f].title;if(m&&(document.title=a.title=m),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=l(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:f,hash:h,scrollY:k},a.title,c),j(j({},a),{},{url:f,hash:h,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,j({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),j(j({},a),{},{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ta={"/":function _(a){return[fa({state:a}),z([F({id:"about"},"early bird 3"),Q("hello, you are here a bit early.\nfeel free to poke around,\nbut as long as this notice is here,\nmost documentation on this page will not be accurate (yet)."),g({id:"webboot"},"webboot?"),Q(["@webboot aims to make\n",ia({to:"https://en.wikipedia.org/wiki/Trust_on_first_use",text:"tofu"}),"\n(trust on first use) a bit less scary."]),Q("we (and you?) run a network of validator nodes,\nproviding a source of integrity to homepages and webapps.")]),z([F({id:"user"},"users of addressable content"),Q("do you use a browser?"),Q("install one of our browser extensions to add additional security to your browser now."),G({id:"browser-extensions"},"browser extensions"),Q("the webboot browser extension has been uploaded to the respective app stores.\nto install them, just click the icons below."),ba()]),z([F({id:"publisher"},"publishers / developers."),W([L([G({id:"cli---coming-soon"},["cli ",A("- coming soon")]),Q("the cli guides you through the process of signing and publishing your web properties.")]),L([G({id:"gui---sometime-in-the-future"},["gui ",A("- sometime in the future")]),Q("the gui will provide a graphical userinterface, making it even easier to use webboot.")]),L([G({id:"app-widgets---coming-soon"},["app widgets ",A("- coming soon")]),Q("the webboot app widgets allow you to embed the webboot gui into your page."),Q("this allows you to show the webboot gui to every one of your users,\neven those that did not yet install any of the browser extensions.")]),L([G({id:"framework-integrations---user---coming-soon"},["framework integrations - user ",A("- coming soon")]),Q("integration with react and vue to show a webboot gui")]),L([G({id:"build-systems---coming-soon"},["build systems ",A("- coming soon")]),Q("plugins for webpack / babel / parcel.")])])]),z([F({id:"validators"},"validators"),Q("validators are nodes in the webboot network."),Q("@webboot is undergoing testing and once we are confident about the deployment story,\nwe will decentralize the network, allowing anyone to run a node.")])]},"/404/":function _(){return z("404 - not found.")},"/docs/api/":function docsApi(){return[z([g("api docs"),Q("coming soon...")])]},"/getting-started/":function gettingStarted(){return z([F("getting started"),Q(["we are still working on the tools described below,"," our semi-public alpha will start soon."]),G(["cli",J(" - coming soon")]),Q("first, install webboot."),qa("npm install -g webboot"),Q("then, go to the directory with your public page and run"),qa("webboot"),Q("webboot will guide you through the process."),G(["browser extensions",J(" - coming soon")]),Q(["the webboot browser extension for both firefox and chrome"," has been uploaded to the respective app stores."]),Q("to install them, just click the icons below."),Q("TODO: add links once they exist."),G("app widget / embeds"),Q("the webboot app widget allows you to embed the webboot gui into your page."),Q("this allows you to show the webboot gui to every one of your users."),Q("see below for available integrations:"),W([L([H([ia({to:"https://magic.github.io",text:"@magic"}),J(" - coming soon")]),Q(["@magic is a static page generator that generates about 15kb of html + css + js boilerplate."]),Q(["made by the people that made @webboot."])]),L([H([ia({to:"https://www.gatsbyjs.org/",text:"gatsby"}),J(" - coming soon")]),Q(["gatsby is a free and open source framework based on react"," and helps developers build blazing fast websites and apps."])])]),G(["db",J(" - coming soon")]),Q("the webboot validator servers will provide a publicly queryable database of hashes."),Q("those hashes will be published and mirrored to three locations:"),Q(ia({to:"https://github.com/webboot/db",text:"github backup"})),Q(ia({to:"https://gitlab.com/webboot/db",text:"gitlab backup"})),Q(ia({to:"https://api.webboot.org/",text:"api.webboot.org"})),Q(["all apps will query two of those three sources for hashes everytime they check,"," making it very hard for any attacker to take over the system."]),G(["smart contracts",J(" - release: summer 2020")]),Q(["we are exploring smart contract based solution to decentralize both"," the hash verification as well as the storage of the database."," this will add an additional layer providing"," data persistance, integrity guarantees and network stability."]),Q(["once the smart contracts are in place, the ",ia({to:"https://en.wikipedia.org/wiki/Bus_factor",text:"hit by a bus problem"})," will not be part of the equation anymore,"," making our team irrelevant to the wellbeing of the network."]),G(["gui",J(" - mid/late 2020.")]),Q("first, install the cli:"),qa("npm install -g webboot"),Q("then, run the gui:"),qa("webboot ui"),Q("go to the url the cli tells you (probably http://localhost:5235) and start adding pages."),G({id:"packages"},"packages"),W([L([H(ia({to:"https://github.com/webboot/core"},"@webboot/core")),Q("the core library functionality of @webboot. used both in clients and on the server."),Q(ia({to:"https://webboot.github.io/core"},"docs"))]),L([H(ia({to:"https://github.com/webboot/cli"},"@webboot/cli")),Q("command line interface exposing the @webboot functionality to bash"),Q(ia({to:"https://webboot.github.io/cli"},"docs"))]),L([H(ia({to:"https://github.com/webboot/crypto"},"@webboot/crypto")),Q(["all cryptographic functionality of @webboot,"," split into a separate repository to make testing and auditing easier."]),Q(ia({to:"https://webboot.github.io/crypto"},"docs"))]),L([H(ia({to:"https://github.com/webboot/keys"},"@webboot/keys")),Q("the @webboot pgp public key and fingerprint."),Q(ia({to:"https://webboot.github.io/keys"},"keys"))])])])}};h({init:j(j({},Y),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[Z.listenPopState,sa.pop]]},view:function(a){var b=ta[a.url]?a.url:"/404/",c=ta[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,pa({page:c,state:a},[ha(a),oa(a)])},node:document.getElementById("Magic")});