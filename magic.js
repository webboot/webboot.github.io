"use strict";function c(a){return q(a)||d(a)||n()}function d(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function e(a,b){if(null==a)return{};var c,d,e=f(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function f(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){return q(a)||o(a,b)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function q(a){if(Array.isArray(a))return a}function r(a){"@babel/helpers - typeof";return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}var s=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,r=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,r))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==r[A]&&o(c,A,n[A],r[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===r(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),t=s.h,h=s.app,u=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===r(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return t(a,{},b);return t(a,b,d)}},v=u("a"),a=u("b"),b=u("button"),w=u("circle"),x=u("code"),y=u("div"),z=u("figcaption"),A=u("figure"),B=u("footer"),C=u("g"),g=u("h1"),D=u("h2"),E=u("h3"),F=u("h4"),G=u("h5"),H=u("header"),I=u("i"),i=u("img"),J=u("input"),K=u("label"),L=u("li"),M=u("link"),N=u("main"),O=u("meta"),P=u("nav"),Q=u("ol"),R=u("p"),p=u("path"),S=u("pre"),T=u("script"),U=u("span"),V=u("svg"),W=u("title"),X=u("ul"),Y=u("view"),Z={description:"solving the tofu problem, one boot at the time.",float:{float:{}},gdpr:{allowed:[],show:!1},menu:[{text:"about",to:"/#about"},{text:"usage",to:"/usage/"},{text:"tofu",to:"/tofu/"},{text:"tosu",to:"/tosu/"}],pageClass:{},root:"/",theme:"dark",title:"@webboot",url:"/"},$={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},_=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[E(b?la({to:b},i):i),h.map(function(c){var d=m(c,2),e=d[0],f=d[1];return f.map(function(c){return aa(k({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},aa=function(a){return y([F([a.day,"-",a.month,"-",a.year," - ",la({to:a.name},a.title)]),R(a.description)])},ba=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),y([D(c?la({to:b},d):d),Object.entries(e[d]).map(function(c){var d=m(c,2),e=d[0],f=d[1];return _(k({},a,{month:e,days:f,link:b}))})])},ca=function(){return[y({class:"Boot"},[V({viewBox:"0 0 640 500",height:25,width:32},[p({class:"upper",d:"\nM 6 415\nc 213 -43 414 78 627 21 7 -136 -21 -129 -64 -129 -103 7 -167 9 -207 -64 -78 19 -77 21 -85 7 -11 -19 -9 -13 78 -35\nl -7 -29\nc -85 27 -90 23 -92 14 -8 -18 -5 -19 85 -42\nl -7 -29\nc -96 24 -87 25 -92 14 -4 -23 4 -23 89 -43\nl -4 -29\nc -85 21 -92 28 -92 14 0 -21 0 -21 92 -42 0 -43 9 -43 -27 -43\nC 200 7 63 1 35 30 63 151 -8 265 6 415\nz\n".trim(),fill:"#ea4144"}),p({class:"sole",d:"\nM 5 429\nc -5 36 -5 42 -1 71\nh 206\nc -57 -93 79 0 250 0 164 0 180 -14 180 -50 -220 64 -415 -64 -635 -21\nz\n".trim(),fill:"#5a5d62"})])])]},da=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length?arguments[1]:void 0,c=a.caption,d=a.float,e=a.img,f=a.right,g={class:{Float:!0,right:void 0!==f&&f},onclick:[ua.float.toggle,e]};return[A(g,[e&&ja(e),c&&z(c),e&&d[e]&&y({class:"focused"},ja(e))])]},ea=function(){return[B({class:"Footer"},[y({class:"Container"},[y({class:"Menus"},[y({class:"Child Info"},[D("@webboot"),R("trust on every step."),R("created by the @webboot dao."),la({to:"/privacy/",text:"privacy notice"})]),y({class:"Child"},[D("code"),X([L(la({to:"https://github.com/webboot/root/"},"webboot")),L(la({to:"https://github.com/webboot/core/"},"@webboot/core")),L(la({to:"https://github.com/webboot/cli/"},"@webboot/cli")),L(la({to:"https://github.com/webboot/crypto/"},"@webboot/crypto")),L(la({to:"https://github.com/webboot/webboot.github.io/"},"this page"))])]),y({class:"Child"},[D("social links"),X([L(la({to:"https://www.npmjs.com/org/webboot"},"npm")),L(la({to:"https://twitter.com/webbootorg"},"twitter")),L(la({to:"https://keybase.io/webboot"},"keybase"))])])]),y({class:"Credits"},["made with a few bits of ",la({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])]},fa=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,t=c.denyText,u=void 0===t?"None":t;if(!f)return y({class:"Gdpr"},V({class:"ShowHide",onclick:[ua.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[C([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),w({cx:"192",cy:"128",r:"32"}),w({cx:"128",cy:"256",r:"32"}),w({cx:"288",cy:"384",r:"32"}),w({cx:"272",cy:"272",r:"16"}),w({cx:"400",cy:"336",r:"16"}),w({cx:"176",cy:"368",r:"16"})])]));var v=!!e.length;return y({class:"Gdpr"},[y({class:"Container"},[h&&E(h),j&&R(j),v&&[X(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return L({class:"Cookie"},[J({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[ua.gdpr.toggleAllow,{name:b}]}),(d||e)&&K({for:b},[d&&F(d),e&&R(e)])])}))],v?[G(n),J({class:"allow all",onclick:ua.gdpr.allow,type:"button",value:q}),J({class:"allow",onclick:ua.gdpr.close,type:"button",value:s}),J({class:"allow none",onclick:ua.gdpr.deny,type:"button",value:u})]:J({onclick:ua.gdpr.close,value:l,type:"button"})])])},ga=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=m(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=m(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return i.length?X({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return L([la({to:b},ja({src:c}))])})):void 0},ha=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.menu,c=e(a,["menu"]);return H({class:"Header"},y([la({to:c.root,class:"Logo"},[ca(),U("@webboot")]),b&&ma({state:c,items:b})]))},ia=function(a){return y({id:"hero",class:"Hero"},[y({class:"Booting"},[ca(),g([U("@web"),"boot"]),R("trust on every step")]),R("automagically verify the integrity of homepages,"),R("before you load them."),ma({items:[{to:"/#about",text:"about"},{to:"/#getting-started",text:"getting started"},{to:"/#support",text:"support"}],state:a})])},ja=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),i(a)},ka=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return b({class:"LightSwitch",onclick:ua.changeTheme},V({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},la=function(a,b){var c=a.to,d=a.action,f=void 0===d?ua.go:d,g=e(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=e(g,["href","text","nofollow","noreferrer"]);c=c||h||"",l.href=c;var m="/"===c[0]||"#"===c[0];return m?l.onclick=[f,ta.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),v(l,[i,b])},ma=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),P({className:c},X(e.map(function(a){return na(k({},a,{url:g,root:i,collapse:void 0===d||d}))})))},na=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,l=e(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;i&&p&&("-"===o||"#"===o)&&(n=i+n);var q=n.startsWith(g);g&&p&&!q&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var r=[],s=f.startsWith(l.to)||!j;return s&&d.length&&(r=X(d.map(function(a){return na(k({parentTo:l.to,url:f,root:g,collapse:j},a))}))),L(m,[l.to?oa(l,b):U(l,b),r])},oa=function(a,b){return la(a,b)},pa=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return N(e,y({class:{Wrapper:!0}},[ra({state:d,page:c}),b]))},qa=function(a,c){"string"==typeof a?a={content:a}:c&&(a=k({content:c},a));var d=a,f=d.content,g=d.lines;return y({class:{Pre:!0,lines:!(void 0!==g)||g}},[y({class:"menu"},[b({onclick:[ua.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),S(ta.pre.format(f))])},ra=function(a){var b=a.page,c=a.state;return[ha(c),y({class:"Page",id:"page"},b),ea(c)]},sa=function(){return X({class:"SponsorList"},[L([ja({src:"/sponsor/bwb.png"}),y([F(la({to:"https://bwb.is"},"bwb")),R("evangelism")])]),L([ja({src:"/sponsor/metalab.png"}),y([F(la({to:"https://metalab.at"},"metalab")),R("inspiration")])]),L([ja({src:"/sponsor/parallele.png"}),y([F(la({to:"https://parallele.at"},"parallele polis")),R("workspace")])])])},ta={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ta.db.init(),g=ta.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ta.db.init(),f=void 0;return d&&e[d]&&(f=ta.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ta.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(c){if("string"!=typeof c)return c;var e=c.split(/\b/);return c=e.map(function(c,f){if(""!==c){var g="";return"state"===c?g="state":"actions"===c?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(c)?g="keyword":b.includes(c)?g="builtin":d.includes(c)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(c=U({class:g},c)),c}}),c},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return la({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return l(a);var b=a.split("://"),c=m(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?a:la({to:a},a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var b=a.replace(/"/g,"'"),d=b.split("'"),f=c(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),U({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),U({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},n=function(a){return x({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},ua={changeTheme:function changeTheme(a){return k({},a,{pageClass:k({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},float:{toggle:function toggle(a,b){return k({},a,{float:k({},a.float,l({},b,!a.float[b]))})}},gdpr:{allow:function allow(a){return[k({},a,{gdpr:k({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ta.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[ua.gdpr.show,{show:!1}]}]]},close:function close(a){return[k({},a,{gdpr:k({},a.gdpr,{show:!1})}),[ta.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[ua.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[k({},a,{gdpr:k({},a.gdpr,{allowed:[]})}),[ta.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[ua.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?k({},a,{gdpr:k({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),k({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=m(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url){if(h&&h===a.hash)return a;window.scroll({top:0,behaviour:"smooth"})}return window.history.pushState({url:f,hash:h},"",c),h?window.location.hash=h:window.scroll({top:0,behaviour:"smooth"}),k({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),k({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},va={"/":function _(a){return[ia(a),y({id:"about"},[D("early bird <3"),R(["hello, you are here a bit early."," the first time we will be publishing information about @webboot is the 2. 2. 2020."," feel free to poke around,"," but as long as this notice is here,"," most documentation on this page will not be accurate (yet)."]),g("webboot?"),R(["@webboot aims to make ",la({to:"https://en.wikipedia.org/wiki/Trust_on_first_use"},"tofu - trust on first use")," a bit less scary."]),R(["we are working on a decentralized network of validator nodes,"," with the aim to provide a source of integrity to homepages and webapps."]),R(["we think that this is a missing protocol,"," and that something like webboot is as integral"," for a free and secure world wide web as dns is,"," just seems that nobody thought about it before."," thats what we are here for."])]),y({id:"tofu"},[D("tofu - trust on first use"),da(k({},a,{img:"/comics/brainlesstales-tofu.jpg",caption:la({to:"https://www.brainlesstales.com/",text:"comic by brainlesstales"})})),R("how can we trust a homepage before we even load it?"),R("this is a central problem of the web that has not been addressed. until now."),R(["homepages and webapps are used to administrate a lot of our public and private lifes,"," yet most people, and many developers, do not realize,"," how broken and dangerous the delivery method of those applications is."]),R(["and those of us that do?"," we wake up deep at night, in cold sweat, and think about becoming a gardener."]),la({to:"/tofu/"},"Do you want to know more?")]),y({id:"tosu"},[D("tosu - trust on second (and subsequent) use"),da(k({},a,{right:!0,img:"/comics/sebiwi-trust.jpg",caption:la({to:"https://sebiwi.github.io/",text:"comic by sebiwi"})})),R("once we know how to load homepages safely the first time, we encounter a new problem."),R(["what happens on updates?"," how can we trust the new javascript that is now being sent from the server?"]),R(["this can be solved by making updates of homepages user controllable"," and by providing a \"second source of truth\" utilizing the webboot network."]),R(["to make sure your users will not be stuck on broken versions of your webproperties,"," the webboot network will also allow both deprecation of versions,"," as well as propagation of urgent security fixes."]),R(["additionally, the @webboot network will also flag versions that break on user machines,"," giving developers and publishers additional insight into actual app performance."]),la({to:"/tosu/"},"Do you want to know more?")]),y({id:"support"},[D("support"),R(["the following organizations and individuals have ",la({to:"/support/#contribute",text:"contributed"}),", ",la({to:"/support/#validate",text:"validated code"}),", ",la({to:"/support/#donate",text:"donated"})," money, given us a space to work, or otherwise helped @webboot."]),sa(a)])]},"/404/":function _(){return y("404 - not found")},"/docs/api/":function docsApi(){return[y([g("api docs"),R("coming soon...")])]},"/packages/":function packages(){return[g([la({to:"/"},"@webboot/packages")]),D("@webboot/core"),ga("webboot/core"),D("@webboot/cli"),ga("webboot/core")]},"/privacy/":function privacy(){return y([D("privacy policy"),D("Do's"),E("debug logging"),R(["some debugging data will be logged, for a maximum of 7 days."," this data will never include any ip addresses, or other unneeded identifying data, "," and will never be collected or analyzed for tracking purposes."]),E("public data"),R("data that gets saved online and publicly in our database:"),Q([L("signing git username"),L("signing public gpg key"),L("git provider (gitlab, github, ...)"),L("domain"),L("git organization/account"),L("git repository"),L("a list of files this homepage is expected to serve and their hashes."),L("a comment by the publisher, informing about the changes, optional.")]),R(["this is all the data we save, there is no hidden database,"," everything we collect is also public by default."]),R(["all authentication is done locally using your local gpg installation,"," or the pgp support of your browser."," no login to our servers is possible or necessary."," we will run tor proxies to allow anonymous publishing."]),D("Dont's"),R(["we will never, under no circumstances,"," share, and/or sell information about our users to ",a("any")," third parties."]),E("canary:"),R(["we have not shared any data about our users with anyone."," if this canary notice ever disappears from this page,"," it means that the rule above has been broken by force."]),E("local data"),R("personal data we access on your machine and do not send anywhere, ever:"),Q([L("your git config user.email (never uploaded)"),L("your public ssh key associated with that email."),L("your gpg keys published on github or gitlab.")]),R("thats it.")])},"/support/":function support(){return[y({id:"overview"},[g("supporting @webboot"),R("this page shows multiple ways to support @webboot.")]),y({id:"contribute"},[D("contribute code"),R(["you are a person who knows some node and who wants to get into it? ","head over to our ",la({to:"https://github.com/webboot/"},"github repositories")," and read through the issues to find something to get started with."])]),y({id:"contribute"},[D("validate code"),R(["you are a person who knows some code, but you do not really want to work?","head over to our ",la({to:"https://github.com/webboot/"},"github repositories")," and read through the code."]),R(["We will implement login/registration and social networking features ","for validation over the next few months."])]),y({id:"donate"},[D("donate"),R(["do you have that cryptocurrency wallet you want to get rid of"," because you always worry about losing the private key?"]),R("that wad of cash in your mattress is uncomfortable when sleeping?"),R("TODO: add payment methods, wallet addresses.")])]},"/tofu/":function tofu(a){return y([g("tofu - trust on first use"),da(k({},a,{img:"/comics/brainlesstales-tofu.jpg",caption:la({to:"https://www.brainlesstales.com/",text:"comic by brainlesstales"})})),R("how can we trust a homepage before we even load it?"),R("this is a central problem of the web that has not been addressed. until now."),R(["how can we trust a homepage which manages","our money, our stocks, our insurance plan, our routers, our friend list, our private messages,","not to send us malicious code, intended or unintended."]),R(["homepages and webapps are used to administrate a lot of our public and private lifes,"," yet most people (and many developers) do not realize,"," how broken and dangerous the delivery method of those applications is."]),R(["and those of us that do?"," we wake up deep at night, in cold sweat, and think about becoming a gardener."]),D("solutions"),R("so, how do we solve this problem using existing technology?"),E("auditing"),R(["the javascript of a homepage (in 2020) tends to be about 1+ megabyte of"," garbled text with shortened variable names and removed whitespace."]),R("behind that megabyte(s) of garbled text lurk dependencies of dependencies of dependencies."),R("usually thousands of them."),R(["this is not necessarily a bad thing,"," but it makes verification, updating and auditing a lot more complicated."]),R("most developers do not even read the libraries they depend upon."),R(["in comparison, the average terms of service are 50kb to 100kb in size,"," and when did any of us last read one of those?"]),R(["tos have whitespace and use plain language."," they also usually do not change every few days."]),R(["this means that auditing (especially since it has to be done on every page load)","does not seem to be a viable solution here."]),E("formal verification"),R(["theoretically,"," every script could be analyzed and proven to do what it should in every situation."]),R(["but",la({text:"testing",to:"https://en.wikipedia.org/wiki/List_of_software_bugs",title:"most expensive bugs"})," software is hard."]),R(["it's not yet (nor soon) possible to use ",la({text:"ai",to:"https://en.wikipedia.org/wiki/Artificial_intelligence",title:"artificial intelligence"})," to add tests and comments to software,"," and once it is possible, "," the same ai will also write the functionality it tests, describes, and proves."]),R("without ai, this would create millions of peoplehours of work."),R("not something that we can assume to happen either."),E("browsers"),R("browsers could implement a versioning system for assets, and they partially have."),R(["one key part are ",la({text:"sri hashes",to:"https://en.wikipedia.org/wiki/Subresource_Integrity",title:"subresource integrity hashes"})," which proof"," that the hash the server created for the piece of payload he expects to have sent"," will correspond to the hash the browser creates on load."]),R(["almost noone uses them,"," none of the big web frameworks provides sri hashes for the sources they create."]),R(["even if those hashes were standard, ","subresource identity hashes only provide a certain level of security,","a compromised server can send "," compromised scripts and compromised hashes derived from those scripts"," and the browser, as well as the person behind the screen, would be non the wiser."]),R([I("hint:")," combine sri-hashes with the @webboot database and suddenly things look a lot better."]),E("service worker caching"),R(["service workers allow us to cache"," the contents of a homepage for later use and make the homepage available offline."]),R(["using that caching mechanism in a smart way,","an upgrade and deprecation mechanism can be implemented,","prompting the user to update the homepage scripts to the new version when needed."]),R(["this solves parts of the tosu problem, giving control of homepage versioning to users,"," where it should always have been."]),E("browser extensions"),R(["the ",la({text:"noscript",to:"https://github.com/hackademix/noscript"})," browser extension actually uses sri hashes to block javascript,","it just adds a hash to the &lt;script identity=\"bogus\"&gt;"," tag that will not match any script."]),R("this makes the browser reject the script before executing it."),R("now what if, instead of adding a bogus hash, we add the expected hash?"),R(["this would make a lot of places on the www a lot safer in an instant,"," yet allow some pages that need javascript to function."]),R(I(["every noscript user knows how often we disable it to get some page to load,"," despite our principles."])),R("we need a magical source of truth for those hashes, and this is what @webboot provides."),E("homepage developers"),R("developers will need a way to authorize and verify new hashes of homepages they control."),R(["this also includes verification of control of that homepage property,"," using either a domain.com/keybase.txt identity or a domain.com/keys.txt file."]),R(["using those keys, hashes can be cryptographically verified and checked when being submitted,"," making it possible to create chains of trust"," that end with the actual developers of the properties."]),R(["others can then audit the changes and add their verification,"," making the chain links even stronger."]),R("TODO: add information about client side functionality, how the cryptography works etc."),R(["wow, you made it. this was a lot of information."," are you insatiable? there is more ahead,"," ready to read about the ",la({to:"/tosu/",text:"tosu"})," problem next?"])])},"/tosu/":function tosu(a){return y([g("tosu - trust on second (and subsequent) use"),da(k({},a,{img:"/comics/sebiwi-trust.jpg",caption:la({to:"https://sebiwi.github.io/",text:"comic by sebiwi"})})),R("tosu. we made that up. but being written somewhere on the internet makes it a thing now."),R(["there also might be a wikipedia page in the near future,"," and once there is, we will link it here."]),R(["lets assume we solved the ",la({to:"/tofu/"},"tofu problem"),", we loaded the first version of a homepage in a trustable way,"," and we have the working application running on our device now."]),R("great."),R("now what happens when the server wants to update our client app?"),R("how will we verify that the update actually is a piece of software we want to run?"),D("threat vectors"),E("hackers"),R("maybe someone hacked the servers between our first use of the app and now."),E("mitm attack"),R(["the https connection to the server might have been ",la({to:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"man in the middled")," in the country/company/coffeshop network we just connected to."]),R(["simply said: we MUST NOT trust the server to send us valid code,"," on the contrary, we SHOULD assume to get malicious payloads."]),E("broken code"),R("the developers of an app might have shipped a version of the code that does not work."),R("if only we could go back to the version of 5 minutes ago."),D("solution"),R(["this problem can be solved by making updates of homepages controllable by us, the users,"," and by providing an additional \"source of integrity proofs\" using the @webboot network."]),R(["to make sure no user gets stuck on old and broken versions of an app,"," the webboot network will also allow both deprecation of versions,"," as well as urgent security fixes."]),R(["the browser ui (either obtained via browser extension or embedded using our @magic widgets)"," will notify the user about updates and security related deprecations,"," but still leave the user in as much control as possible."," if there is full trust,"," all updates for pages can also be accepted automatically"," and on a per-page basis,"," they will then be checked by webboot in the background, "," not disrupting the workflows at all, until it needs to."])])},"/usage/":function usage(){return y([D("getting started"),R(["we are still working on the tools described below,"," our semi-public alpha starts on 22. 2. 2020."]),E(["cli",I("- release: 22. 2. 2020")]),R("first, install webboot."),qa("npm install -g webboot"),R("then, go to the directory with your public page and run"),qa("webboot"),R("webboot will guide you through the process."),E(["browser extensions",I(" - release: 22. 2. 2020")]),R(["the webboot browser extension for both firefox and chrome"," is uploaded to the respective app stores."," to install them, just click the icons below."]),R("TODO: add links once they exist."),E("app widget / embeds"),R("the webboot app widget allows you to embed the webboot gui into your page."),R("this allows you to show the webboot gui to every one of your users."),R("see below for available integrations:"),X([L([F([la({to:"https://magic.github.io",text:"@magic"}),I(" - release 22. 2. 2020")]),R(["@magic is a static page generator that generates about 15kb of html + css + js boilerplate."]),R(["made by the people that made @webboot."])]),L([F([la({to:"https://www.gatsbyjs.org/",text:"gatsby"}),I(" - coming soon")]),R(["gatsby is a free and open source framework based on react"," that helps developers build blazing fast websites and apps."])])]),E(["db",I(" - release: 22. 2. 2020")]),R("the webboot validator servers will provide a publicly queryable database of hashes."),R("those hashes will be published and mirrored to three locations:"),R(la({to:"https://github.com/webboot/db",text:"github backup"})),R(la({to:"https://gitlab.com/webboot/db",text:"gitlab backup"})),R(la({to:"https://api.webboot.org/",text:"api.webboot.org"})),R(["all apps will query two of those three sources for hashes everytime they check,"," making it very hard for any attacker to take over the system."]),E(["web ui",I(" - sometime in the future. promise.")]),R("first, install the cli:"),qa("npm install -g webboot"),R("then, run the web ui:"),qa("webboot ui"),R("go to the url the cli tells you (probably http://localhost:5235) and start adding pages."),E({id:"packages"},"packages"),X([L([F(la({to:"https://github.com/webboot/core"},"@webboot/core")),R("the core functionality of @webboot. Used both in clients and on the server."),R(la({to:"https://webboot.github.io/core"},"docs"))]),L([F(la({to:"https://github.com/webboot/cli"},"@webboot/cli")),R("command line interface exposing the webboot functionality to bash"),R(la({to:"https://webboot.github.io/cli"},"docs"))]),L([F(la({to:"https://github.com/webboot/crypto"},"@webboot/crypto")),R(["all cryptographic functionality of webboot,"," split into a separate repository to make testing and auditing easier."]),R(la({to:"https://webboot.github.io/crypto"},"docs"))])])])}};h({init:[k({},Z,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ta.db.get,{key:"magic-gdpr",action:ua.gdpr.show}]]],subscriptions:function subscriptions(){return[[$.listenPopState,ua.pop]]},view:function(a){var b=va[a.url]?a.url:"/404/",c=va[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),pa({page:c,state:a},[ka(a),fa(a)])},node:document.getElementById("Magic")});