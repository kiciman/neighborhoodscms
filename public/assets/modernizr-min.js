window.Modernizr=function(t,e,i){function n(t){y.cssText=t}function s(t,e){return n(C.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var n in t)if(y[t[n]]!==i)return"pfx"==e?t[n]:!0;return!1}function l(t,e,n){for(var s in t){var r=e[t[s]];if(r!==i)return n===!1?t[s]:o(r,"function")?r.bind(n||e):r}return!1}function c(t,e,i){var n=t.charAt(0).toUpperCase()+t.substr(1),s=(t+" "+T.join(n+" ")+n).split(" ");return o(e,"string")||o(e,"undefined")?a(s,e):(s=(t+" "+S.join(n+" ")+n).split(" "),l(s,e,i))}function u(){f.input=function(i){for(var n=0,s=i.length;s>n;n++)M[i[n]]=i[n]in b;return M.list&&(M.list=!!e.createElement("datalist")&&!!t.HTMLDataListElement),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(t){for(var n,s,o,r=0,a=t.length;a>r;r++)b.setAttribute("type",s=t[r]),n="text"!==b.type,n&&(b.value=w,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&b.style.WebkitAppearance!==i?(g.appendChild(b),o=e.defaultView,n=o.getComputedStyle&&"textfield"!==o.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,g.removeChild(b)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?n=b.checkValidity&&b.checkValidity()===!1:/^color$/.test(s)?(g.appendChild(b),g.offsetWidth,n=b.value!=w,g.removeChild(b)):n=b.value!=w)),E[t[r]]=!!n;return E}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,h,p="2.5.3",f={},m=!0,g=e.documentElement,v="modernizr",_=e.createElement(v),y=_.style,b=e.createElement("input"),w=":)",x={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",T=k.split(" "),S=k.toLowerCase().split(" "),$={svg:"http://www.w3.org/2000/svg"},N={},E={},M={},A=[],D=A.slice,L=function(t,i,n,s){var o,r,a,l=e.createElement("div"),c=e.body,u=c?c:e.createElement("body");if(parseInt(n,10))for(;n--;)a=e.createElement("div"),a.id=s?s[n]:v+(n+1),l.appendChild(a);return o=["&#173;","<style>",t,"</style>"].join(""),l.id=v,u.innerHTML+=o,u.appendChild(l),c||(u.style.background="",g.appendChild(u)),r=i(l,t),c?l.parentNode.removeChild(l):u.parentNode.removeChild(u),!!r},W=function(){function t(t,s){s=s||e.createElement(n[t]||"div"),t="on"+t;var r=t in s;return r||(s.setAttribute||(s=e.createElement("div")),s.setAttribute&&s.removeAttribute&&(s.setAttribute(t,""),r=o(s[t],"function"),o(s[t],"undefined")||(s[t]=i),s.removeAttribute(t))),s=null,r}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),I={}.hasOwnProperty;h=o(I,"undefined")||o(I.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return I.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=D.call(arguments,1),n=function(){if(this instanceof n){var s=function(){};s.prototype=e.prototype;var o=new s,r=e.apply(o,i.concat(D.call(arguments)));return Object(r)===r?r:o}return e.apply(t,i.concat(D.call(arguments)))};return n}),function(i,n){var s=i.join(""),o=n.length;L(s,function(i,n){for(var s=e.styleSheets[e.styleSheets.length-1],r=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",a=i.childNodes,l={};o--;)l[a[o].id]=a[o];f.touch="ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch||9===(l.touch&&l.touch.offsetTop),f.csstransforms3d=9===(l.csstransforms3d&&l.csstransforms3d.offsetLeft)&&3===l.csstransforms3d.offsetHeight,f.generatedcontent=(l.generatedcontent&&l.generatedcontent.offsetHeight)>=1,f.fontface=/src/i.test(r)&&0===r.indexOf(n.split(" ")[0])},o,n)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",C.join("touch-enabled),("),v,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",C.join("transform-3d),("),v,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',w,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]),N.flexbox=function(){return c("flexOrder")},N.canvas=function(){var t=e.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},N.canvastext=function(){return!!f.canvas&&!!o(e.createElement("canvas").getContext("2d").fillText,"function")},N.webgl=function(){try{var n,s=e.createElement("canvas");n=!(!t.WebGLRenderingContext||!s.getContext("experimental-webgl")&&!s.getContext("webgl")),s=i}catch(o){n=!1}return n},N.touch=function(){return f.touch},N.geolocation=function(){return!!navigator.geolocation},N.postmessage=function(){return!!t.postMessage},N.websqldatabase=function(){return!!t.openDatabase},N.indexedDB=function(){return!!c("indexedDB",t)},N.hashchange=function(){return W("hashchange",t)&&(e.documentMode===i||e.documentMode>7)},N.history=function(){return!!t.history&&!!history.pushState},N.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},N.websockets=function(){for(var e=-1,i=T.length;++e<i;)if(t[T[e]+"WebSocket"])return!0;return"WebSocket"in t},N.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),r(y.backgroundColor,"rgba")},N.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),r(y.backgroundColor,"rgba")||r(y.backgroundColor,"hsla")},N.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},N.backgroundsize=function(){return c("backgroundSize")},N.borderimage=function(){return c("borderImage")},N.borderradius=function(){return c("borderRadius")},N.boxshadow=function(){return c("boxShadow")},N.textshadow=function(){return""===e.createElement("div").style.textShadow},N.opacity=function(){return s("opacity:.55"),/^0.55$/.test(y.opacity)},N.cssanimations=function(){return c("animationName")},N.csscolumns=function(){return c("columnCount")},N.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+C.join(i+t)).slice(0,-t.length)),r(y.backgroundImage,"gradient")},N.cssreflections=function(){return c("boxReflect")},N.csstransforms=function(){return!!c("transform")},N.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in g.style&&(t=f.csstransforms3d),t},N.csstransitions=function(){return c("transition")},N.fontface=function(){return f.fontface},N.generatedcontent=function(){return f.generatedcontent},N.video=function(){var t=e.createElement("video"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return i},N.audio=function(){var t=e.createElement("audio"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return i},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},N.webworkers=function(){return!!t.Worker},N.applicationcache=function(){return!!t.applicationCache},N.svg=function(){return!!e.createElementNS&&!!e.createElementNS($.svg,"svg").createSVGRect},N.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==$.svg},N.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(x.call(e.createElementNS($.svg,"animate")))},N.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(x.call(e.createElementNS($.svg,"clipPath")))};for(var P in N)h(N,P)&&(d=P.toLowerCase(),f[d]=N[P](),A.push((f[d]?"":"no-")+d));return f.input||u(),n(""),_=b=null,f._version=p,f._prefixes=C,f._domPrefixes=S,f._cssomPrefixes=T,f.hasEvent=W,f.testProp=function(t){return a([t])},f.testAllProps=c,f.testStyles=L,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+A.join(" "):""),f}(this,this.document),function(t,e){function i(t,e){var i=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return i.innerHTML="x<style>"+e+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var t=m.elements;return"string"==typeof t?t.split(" "):t}function s(t){var e={},i=t.createElement,s=t.createDocumentFragment,o=s();t.createElement=function(t){var n=(e[t]||(e[t]=i(t))).cloneNode();return m.shivMethods&&n.canHaveChildren&&!f.test(t)?o.appendChild(n):n},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e[t]=i(t),o.createElement(t),'c("'+t+'")'})+");return n}")(m,o)}function o(t){var e;return t.documentShived?t:(m.shivCSS&&!d&&(e=!!i(t,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),h||(e=!s(t)),e&&(t.documentShived=e),t)}function r(t){for(var e,i=t.getElementsByTagName("*"),s=i.length,o=RegExp("^(?:"+n().join("|")+")$","i"),r=[];s--;)e=i[s],o.test(e.nodeName)&&r.push(e.applyElement(a(e)));return r}function a(t){for(var e,i=t.attributes,n=i.length,s=t.ownerDocument.createElement(v+":"+t.nodeName);n--;)e=i[n],e.specified&&s.setAttribute(e.nodeName,e.nodeValue);return s.style.cssText=t.style.cssText,s}function l(t){for(var e,i=t.split("{"),s=i.length,o=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),r="$1"+v+"\\:$2";s--;)e=i[s]=i[s].split("}"),e[e.length-1]=e[e.length-1].replace(o,r),i[s]=e.join("}");return i.join("{")}function c(t){for(var e=t.length;e--;)t[e].removeNode()}function u(t){var e,n,s=t.namespaces,o=t.parentWindow;return!_||t.printShived?t:("undefined"==typeof s[v]&&s.add(v),o.attachEvent("onbeforeprint",function(){for(var s,o,a,c=t.styleSheets,u=[],d=c.length,h=Array(d);d--;)h[d]=c[d];for(;a=h.pop();)if(!a.disabled&&g.test(a.media)){for(s=a.imports,d=0,o=s.length;o>d;d++)h.push(s[d]);try{u.push(a.cssText)}catch(p){}}u=l(u.reverse().join("")),n=r(t),e=i(t,u)}),o.attachEvent("onafterprint",function(){c(n),e.removeNode(!0)}),t.printShived=!0,t)}var d,h,p=t.html5||{},f=/^<|^(?:button|form|map|select|textarea)$/i;!function(){var t=e.createElement("a");t.innerHTML="<xyz></xyz>",d="hidden"in t,h=1==t.childNodes.length||function(){try{e.createElement("a")}catch(t){return!0}var i=e.createDocumentFragment();return"undefined"==typeof i.cloneNode||"undefined"==typeof i.createDocumentFragment||"undefined"==typeof i.createElement}()}();var m={elements:p.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:p.shivCSS!==!1,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:o};t.html5=m,o(e);var g=/^$|\b(?:all|print)\b/,v="html5shiv",_=!h&&function(){var i=e.documentElement;return"undefined"!=typeof e.namespaces&&"undefined"!=typeof e.parentWindow&&"undefined"!=typeof i.applyElement&&"undefined"!=typeof i.removeNode&&"undefined"!=typeof t.attachEvent}();m.type+=" print",m.shivPrint=u,u(e)}(this,document),function(t,e,i){function n(t){return"[object Function]"==g.call(t)}function s(t){return"string"==typeof t}function o(){}function r(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=v.shift();_=1,t?t.t?f(function(){("c"==t.t?h.injectCss:h.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):_=0}function l(t,i,n,s,o,l,c){function u(e){if(!p&&r(d.readyState)&&(y.r=p=1,!_&&a(),d.onload=d.onreadystatechange=null,e)){"img"!=t&&f(function(){w.removeChild(d)},50);for(var n in S[i])S[i].hasOwnProperty(n)&&S[i][n].onload()}}var c=c||h.errorTimeout,d={},p=0,g=0,y={t:n,s:i,e:o,a:l,x:c};1===S[i]&&(g=1,S[i]=[],d=e.createElement(t)),"object"==t?d.data=i:(d.src=i,d.type=t),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(s,0,y),"img"!=t&&(g||2===S[i]?(w.insertBefore(d,b?null:m),f(u,c)):S[i].push(d))}function c(t,e,i,n,o){return _=0,e=e||"j",s(t)?l("c"==e?C:x,t,e,this.i++,i,n,o):(v.splice(this.i++,0,t),1==v.length&&a()),this}function u(){var t=h;return t.loader={load:c,i:0},t}var d,h,p=e.documentElement,f=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,v=[],_=0,y="MozAppearance"in p.style,b=y&&!!e.createRange().compareNode,w=b?p:m.parentNode,p=t.opera&&"[object Opera]"==g.call(t.opera),p=!!e.attachEvent&&!p,x=y?"object":p?"script":"img",C=p?"script":x,k=Array.isArray||function(t){return"[object Array]"==g.call(t)},T=[],S={},$={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};h=function(t){function e(t){var e,i,n,t=t.split("!"),s=T.length,o=t.pop(),r=t.length,o={url:o,origUrl:o,prefixes:t};for(i=0;r>i;i++)n=t[i].split("="),(e=$[n.shift()])&&(o=e(o,n));for(i=0;s>i;i++)o=T[i](o);return o}function r(t,s,o,r,l){var c=e(t),d=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(s&&(s=n(s)?s:s[t]||s[r]||s[t.split("/").pop().split("?")[0]]||a),c.instead?c.instead(t,s,o,r,l):(S[c.url]?c.noexec=!0:S[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":i,c.noexec,c.attrs,c.timeout),(n(s)||n(d))&&o.load(function(){u(),s&&s(c.origUrl,l,r),d&&d(c.origUrl,l,r),S[c.url]=2})))}function l(t,e){function i(t,i){if(t){if(s(t))i||(d=function(){var t=[].slice.call(arguments);h.apply(this,t),p()}),r(t,d,e,0,c);else if(Object(t)===t)for(l in a=function(){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}(),t)t.hasOwnProperty(l)&&(!i&&!--a&&(n(d)?d=function(){var t=[].slice.call(arguments);h.apply(this,t),p()}:d[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(h[l])),r(t[l],d,e,l,c))}else!i&&p()}var a,l,c=!!t.test,u=t.load||t.both,d=t.callback||o,h=d,p=t.complete||o;i(c?t.yep:t.nope,!!u),u&&i(u)}var c,d,p=this.yepnope.loader;if(s(t))r(t,0,p,0);else if(k(t))for(c=0;c<t.length;c++)d=t[c],s(d)?r(d,0,p,0):k(d)?h(d):Object(d)===d&&l(d,p);else Object(t)===t&&l(t,p)},h.addPrefix=function(t,e){$[t]=e},h.addFilter=function(t){T.push(t)},h.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",d=function(){e.removeEventListener("DOMContentLoaded",d,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,i,n,s,l,c){var u,d,p=e.createElement("script"),s=s||h.errorTimeout;p.src=t;for(d in n)p.setAttribute(d,n[d]);i=c?a:i||o,p.onreadystatechange=p.onload=function(){!u&&r(p.readyState)&&(u=1,i(),p.onload=p.onreadystatechange=null)},f(function(){u||(u=1,i(1))},s),l?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,i,n,s,r,l){var c,s=e.createElement("link"),i=l?a:i||o;s.href=t,s.rel="stylesheet",s.type="text/css";for(c in n)s.setAttribute(c,n[c]);r||(m.parentNode.insertBefore(s,m),f(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};