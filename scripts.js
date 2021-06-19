/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(a,b,c){(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)})(function(d){"use strict";var e={},f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=0;f=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new h("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:c,tooltipFormat:new h("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:"#4a2",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new h("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},E='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',g=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=h=g({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e=this,f=a,g,h,i,j,k;return this.format.replace(this.fre,function(){var a;return h=arguments[1],i=arguments[3],g=e.precre.exec(h),g?(k=g[2],h=g[1]):k=!1,j=f[h],j===c?"":i&&b&&b[i]?(a=b[i],a.get?b[i].get(j)||j:b[i][j]||j):(n(j)&&(d.get("numberFormatter")?j=d.get("numberFormatter")(j):j=s(j,k,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),j)})}}),d.spformat=function(a,b){return new h(a,b)},i=function(a,b,c){return a<b?b:a>c?c:a},j=function(a,c){var d;return c===2?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},k=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},l=function(a){var b,c=[];for(b=a.length;b--;)c[b]=k(a[b]);return c},m=function(a,b){var c,d,e=[];for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);return e},n=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},s=function(a,b,c,e,f){var g,h;a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f);for(h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},o=function(a,b,c){var d;for(d=b.length;d--;){if(c&&b[d]===null)continue;if(b[d]!==a)return!1}return!0},p=function(a){var b=0,c;for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;return b},r=function(a){return d.isArray(a)?a:[a]},q=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c[typeof a.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(!j.getContext||!j.getContext("2d")){if(!a.namespaces||!!a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new J(a,b,c)}}else d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c,d)}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=t=g({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b=this.rangelist,d,e,f;if((f=this.map[a])!==c)return f;if(b)for(d=b.length;d--;){e=b[d];if(e[0]<=a&&e[1]>=a)return e[2]}return c}}),d.range_map=function(a){return new t(a)},u=g({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new v(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind("mousemove.jqs");var b=this.splist,c=b.length,e=!1,f,g;this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);for(g=0;g<c;g++)f=b[g],f.clearRegionHighlight()&&(e=!0);e&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a=this.splist,b=a.length,c=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;if(!this.over)return;for(j=0;j<b;j++)i=a[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(c=!0);if(c){l=d.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);if(this.tooltip){h="";for(j=0;j<b;j++)i=a[j],h+=i.getCurrentRegionTooltip();this.tooltip.setContent(h)}this.disableHighlight||this.canvas.render()}k===null&&this.mouseleave()}}),v=g({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c=b.get("tooltipClassname","jqstooltip"),e=this.sizeStyle,f;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{id:"jqssizetip",style:e,"class":c}),this.tooltip=d("<div/>",{id:"jqstooltip","class":c}).appendTo(this.container),f=this.tooltip.offset(),this.offsetLeft=f.left,this.offsetTop=f.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){if(!a){this.tooltip.css("visibility","hidden"),this.hidden=!0;return}this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),this.hidden&&(this.hidden=!1,this.updatePosition())},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;if(!this.height||!this.width||this.hidden)return;b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b})},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),F=function(){q(E)},d(F),K=[],d.fn.sparkline=function(b,e){return this.each(function(){var f=new d.fn.sparkline.options(this,e),g=d(this),h,i;h=function(){var e,h,i,j,k,l,m;if(b==="html"||b===c){m=this.getAttribute(f.get("tagValuesAttribute"));if(m===c||m===null)m=g.html();e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else e=b;h=f.get("width")==="auto"?e.length*f.get("defaultPixelsPerValue"):f.get("width");if(f.get("height")==="auto"){if(!f.get("composite")||!d.data(this,"_jqs_vcanvas"))j=a.createElement("span"),j.innerHTML="a",g.html(j),i=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null}else i=f.get("height");f.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?f.get("composite")||k.reset():(k=new u(this,f),d.data(this,"_jqs_mhandler",k)));if(f.get("composite")&&!d.data(this,"_jqs_vcanvas")){d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0));return}l=new(d.fn.sparkline[f.get("type")])(this,e,f,h,i),l.render(),k&&k.registerSparkline(l)};if(d(this).html()&&!f.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!f.get("composite")&&d.data(this,"_jqs_pending"))for(i=K.length;i;i--)K[i-1][0]==this&&K.splice(i-1,1);K.push([this,h]),d.data(this,"_jqs_pending",!0)}else h.call(this)})},d.fn.sparkline.defaults=f(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=K.length;b<c;b++)a=K[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(K[b][1].call(a),d.data(K[b][0],"_jqs_pending",!1),e.push(b)):!d(a).closest("html").length&&!d.data(a,"_jqs_pending")&&(d.data(K[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)K.splice(e[b-1],1)},d.fn.sparkline.options=g({init:function(a,b){var c,f,g,h;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},f=d.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===e?c=f[b.type||g.type]:c=f[h],this.mergedOptions=d.extend({},g,c,b)},getTagSetting:function(a){var b=this.tagOptionsPrefix,d,f,g,h;if(b===!1||b===c)return e;if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;else{d=this.tag.getAttribute(b+a);if(d===c||d===null)d=e;else if(d.substr(0,1)==="["){d=d.substr(1,d.length-2).split(",");for(f=d.length;f--;)d[f]=k(d[f].replace(/(^\s*)|(\s*$)/g,""))}else if(d.substr(0,1)==="{"){g=d.substr(1,d.length-2).split(","),d={};for(f=g.length;f--;)h=g[f].split(":",2),d[h[0].replace(/(^\s*)|(\s*$)/g,"")]=k(h[1].replace(/(^\s*)|(\s*$)/g,""))}else d=k(d);this.tagValCache.key=d}return d},get:function(a,b){var d=this.getTagSetting(a),f;return d!==e?d:(f=this.mergedOptions[a])===c?b:f}}),d.fn.sparkline._base=g({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,d){var e=this.currentRegion,f=!this.options.get("disableHighlight"),g;return b>this.canvasWidth||d>this.canvasHeight||b<0||d<0?null:(g=this.getRegion(a,b,d),e!==g?(e!==c&&f&&this.removeHighlight(),this.currentRegion=g,g!==c&&f&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var a=this.options,b="",e=[],f,g,i,j,k,l,m,n,o,p,q,r,s,t;if(this.currentRegion===c)return"";f=this.getCurrentRegionFields(),q=a.get("tooltipFormatter");if(q)return q(this,a,f);a.get("tooltipChartTitle")&&(b+='<div class="jqs jqstitle">'+a.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");if(!g)return"";d.isArray(g)||(g=[g]),d.isArray(f)||(f=[f]),m=this.options.get("tooltipFormatFieldlist"),n=this.options.get("tooltipFormatFieldlistKey");if(m&&n){o=[];for(l=f.length;l--;)p=f[l][n],(t=d.inArray(p,m))!=-1&&(o[t]=f[l]);f=o}i=g.length,s=f.length;for(l=0;l<i;l++){r=g[l],typeof r=="string"&&(r=new h(r)),j=r.fclass||"jqsfield";for(t=0;t<s;t++)if(!f[t].isNull||!a.get("tooltipSkipNull"))d.extend(f[t],{prefix:a.get("tooltipPrefix"),suffix:a.get("tooltipSuffix")}),k=r.render(f[t],a.get("tooltipValueLookups"),a),e.push('<div class="'+j+'">'+k+"</div>")}return e.length?b+e.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d=c.get("highlightColor"),e=c.get("highlightLighten"),f,g,h,j;if(d)return d;if(e){f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if(f){h=[],g=a.length===4?16:1;for(j=0;j<3;j++)h[j]=i(b.round(parseInt(f[j+1],16)*g*e),0,255);return"rgb("+h.join(",")+")"}}return a}}),w={changeHighlight:function(a){var b=this.currentRegion,c=this.target,e=this.regionShapes[b],f;e&&(f=this.renderRegion(b,a),d.isArray(f)||d.isArray(e)?(c.replaceWithShapes(e,f),this.regionShapes[b]=d.map(f,function(a){return a.id})):(c.replaceWithShape(e,f),this.regionShapes[b]=f.id))},render:function(){var a=this.values,b=this.target,c=this.regionShapes,e,f,g,h;if(!this.cls._super.render.call(this))return;for(g=a.length;g--;){e=this.renderRegion(g);if(e)if(d.isArray(e)){f=[];for(h=e.length;h--;)e[h].append(),f.push(e[h].id);c[g]=f}else e.append(),c[g]=e.id;else c[g]=null}b.render()}},d.fn.sparkline.line=x=g(d.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){x._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(f[e]!==null&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.yvalues[a]===null,x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a=this.currentRegion,b=this.target,d=this.vertices[a],e=this.options,f=e.get("spotRadius"),g=e.get("highlightSpotColor"),h=e.get("highlightLineColor"),i,j;if(!d)return;f&&g&&(i=b.drawCircle(d[0],d[1],f,c,g),this.highlightSpotId=i.id,b.insertAfterShape(this.lastShapeId,i)),h&&(j=b.drawLine(d[0],this.canvasTop,d[0],this.canvasTop+this.canvasHeight,h),this.highlightLineId=j.id,b.insertAfterShape(this.lastShapeId,j))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a=this.values,c=a.length,d=this.xvalues,e=this.yvalues,f=this.yminmax,g,h,i,j,k;for(g=0;g<c;g++)h=a[g],i=typeof a[g]=="string",j=typeof a[g]=="object"&&a[g]instanceof Array,k=i&&a[g].split(":"),i&&k.length===2?(d.push(Number(k[0])),e.push(Number(k[1])),f.push(Number(k[1]))):j?(d.push(h[0]),e.push(h[1]),f.push(h[1])):(d.push(g),a[g]===null||a[g]==="null"?e.push(null):(e.push(Number(h)),f.push(Number(h))));this.options.get("xvalues")&&(d=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,f),this.miny=this.minyorg=b.min.apply(b,f),this.maxx=b.max.apply(b,d),this.minx=b.min.apply(b,d),this.xvalues=d,this.yvalues=e,this.yminmax=f},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},render:function(){var a=this.options,e=this.target,f=this.canvasWidth,g=this.canvasHeight,h=this.vertices,i=a.get("spotRadius"),j=this.regionMap,k,l,m,n,o,p,q,r,s,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K;if(!x._super.render.call(this))return;this.scanValues(),this.processRangeOptions(),I=this.xvalues,J=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2)return;n=o=0,k=this.maxx-this.minx===0?1:this.maxx-this.minx,l=this.maxy-this.miny===0?1:this.maxy-this.miny,m=this.yvalues.length-1,i&&(f<i*4||g<i*4)&&(i=0);if(i){G=a.get("highlightSpotColor")&&!a.get("disableInteraction");if(G||a.get("minSpotColor")||a.get("spotColor")&&J[m]===this.miny)g-=b.ceil(i);if(G||a.get("maxSpotColor")||a.get("spotColor")&&J[m]===this.maxy)g-=b.ceil(i),n+=b.ceil(i);if(G||(a.get("minSpotColor")||a.get("maxSpotColor"))&&(J[0]===this.miny||J[0]===this.maxy))o+=b.ceil(i),f-=b.ceil(i);if(G||a.get("spotColor")||a.get("minSpotColor")||a.get("maxSpotColor")&&(J[m]===this.miny||J[m]===this.maxy))f-=b.ceil(i)}g--,a.get("normalRangeMin")!==c&&!a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),q=[],r=[q],z=A=null,B=J.length;for(K=0;K<B;K++)s=I[K],v=I[K+1],u=J[K],w=o+b.round((s-this.minx)*(f/k)),y=K<B-1?o+b.round((v-this.minx)*(f/k)):f,A=w+(y-w)/2,j[K]=[z||0,A,K],z=A,u===null?K&&(J[K-1]!==null&&(q=[],r.push(q)),h.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),q.length||q.push([w,n+g]),p=[w,n+b.round(g-g*((u-this.miny)/l))],q.push(p),h.push(p));C=[],D=[],E=r.length;for(K=0;K<E;K++)q=r[K],q.length&&(a.get("fillColor")&&(q.push([q[q.length-1][0],n+g]),D.push(q.slice(0)),q.pop()),q.length>2&&(q[0]=[q[0][0],q[1][1]]),C.push(q));E=D.length;for(K=0;K<E;K++)e.drawShape(D[K],a.get("fillColor"),a.get("fillColor")).append();a.get("normalRangeMin")!==c&&a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),E=C.length;for(K=0;K<E;K++)e.drawShape(C[K],a.get("lineColor"),c,a.get("lineWidth")).append();if(i&&a.get("valueSpots")){F=a.get("valueSpots"),F.get===c&&(F=new t(F));for(K=0;K<B;K++)H=F.get(J[K]),H&&e.drawCircle(o+b.round((I[K]-this.minx)*(f/k)),n+b.round(g-g*((J[K]-this.miny)/l)),i,c,H).append()}i&&a.get("spotColor")&&J[m]!==null&&e.drawCircle(o+b.round((I[I.length-1]-this.minx)*(f/k)),n+b.round(g-g*((J[m]-this.miny)/l)),i,c,a.get("spotColor")).append(),this.maxy!==this.minyorg&&(i&&a.get("minSpotColor")&&(s=I[d.inArray(this.minyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.minyorg-this.miny)/l)),i,c,a.get("minSpotColor")).append()),i&&a.get("maxSpotColor")&&(s=I[d.inArray(this.maxyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.maxyorg-this.miny)/l)),i,c,a.get("maxSpotColor")).append())),this.lastShapeId=e.getLastShapeId(),this.canvasTop=n,e.render()}}),d.fn.sparkline.bar=y=g(d.fn.sparkline._base,w,{type:"bar",init:function(a,e,f,g,h){var j=parseInt(f.get("barWidth"),10),n=parseInt(f.get("barSpacing"),10),o=f.get("chartRangeMin"),p=f.get("chartRangeMax"),q=f.get("chartRangeClip"),r=Infinity,s=-Infinity,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;y._super.init.call(this,a,e,f,g,h);for(A=0,B=e.length;A<B;A++){O=e[A],u=typeof O=="string"&&O.indexOf(":")>-1;if(u||d.isArray(O))J=!0,u&&(O=e[A]=l(O.split(":"))),O=m(O,null),v=b.min.apply(b,O),w=b.max.apply(b,O),v<r&&(r=v),w>s&&(s=w)}this.stacked=J,this.regionShapes={},this.barWidth=j,this.barSpacing=n,this.totalBarWidth=j+n,this.width=g=e.length*j+(e.length-1)*n,this.initTarget(),q&&(H=o===c?-Infinity:o,I=p===c?Infinity:p),z=[],x=J?[]:z;var S=[],T=[];for(A=0,B=e.length;A<B;A++)if(J){K=e[A],e[A]=N=[],S[A]=0,x[A]=T[A]=0;for(L=0,M=K.length;L<M;L++)O=N[L]=q?i(K[L],H,I):K[L],O!==null&&(O>0&&(S[A]+=O),r<0&&s>0?O<0?T[A]+=b.abs(O):x[A]+=O:x[A]+=b.abs(O-(O<0?s:r)),z.push(O))}else O=q?i(e[A],H,I):e[A],O=e[A]=k(O),O!==null&&z.push(O);this.max=G=b.max.apply(b,z),this.min=F=b.min.apply(b,z),this.stackMax=s=J?b.max.apply(b,S):G,this.stackMin=r=J?b.min.apply(b,z):F,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<F)&&(F=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>G)&&(G=f.get("chartRangeMax")),this.zeroAxis=D=f.get("zeroAxis",!0),F<=0&&G>=0&&D?E=0:D==0?E=F:F>0?E=F:E=G,this.xaxisOffset=E,C=J?b.max.apply(b,x)+b.max.apply(b,T):G-F,this.canvasHeightEf=D&&F<0?this.canvasHeight-2:this.canvasHeight-1,F<E?(Q=J&&G>=0?s:G,P=(Q-E)/C*this.canvasHeight,P!==b.ceil(P)&&(this.canvasHeightEf-=2,P=b.ceil(P))):P=this.canvasHeight,this.yoffset=P,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.range=C},getRegion:function(a,d,e){var f=b.floor(d/this.totalBarWidth);return f<0||f>=this.values.length?c:f},getCurrentRegionFields:function(){var a=this.currentRegion,b=r(this.values[a]),c=[],d,e;for(e=b.length;e--;)d=b[e],c.push({isNull:d===null,value:d,color:this.calcColor(e,d,a),offset:a});return c},calcColor:function(a,b,e){var f=this.colorMapByIndex,g=this.colorMapByValue,h=this.options,i,j;return this.stacked?i=h.get("stackedBarColor"):i=b<0?h.get("negBarColor"):h.get("barColor"),b===0&&h.get("zeroColor")!==c&&(i=h.get("zeroColor")),g&&(j=g.get(b))?i=j:f&&f.length>e&&(i=f[e]),d.isArray(i)?i[a%i.length]:i},renderRegion:function(a,e){var f=this.values[a],g=this.options,h=this.xaxisOffset,i=[],j=this.range,k=this.stacked,l=this.target,m=a*this.totalBarWidth,n=this.canvasHeightEf,p=this.yoffset,q,r,s,t,u,v,w,x,y,z;f=d.isArray(f)?f:[f],w=f.length,x=f[0],t=o(null,f),z=o(h,f,!0);if(t)return g.get("nullColor")?(s=e?g.get("nullColor"):this.calcHighlightColor(g.get("nullColor"),g),q=p>0?p-1:p,l.drawRect(m,q,this.barWidth-1,0,s,s)):c;u=p;for(v=0;v<w;v++){x=f[v];if(k&&x===h){if(!z||y)continue;y=!0}j>0?r=b.floor(n*(b.abs(x-h)/j))+1:r=1,x<h||x===h&&p===0?(q=u,u+=r):(q=p-r,p-=r),s=this.calcColor(v,x,a),e&&(s=this.calcHighlightColor(s,g)),i.push(l.drawRect(m,q,this.barWidth-1,r-1,s,s))}return i.length===1?i[0]:i}}),d.fn.sparkline.tristate=z=g(d.fn.sparkline._base,w,{type:"tristate",init:function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);z._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c,d){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.target,g,h,i,j,k,l;g=f.pixelHeight,i=b.round(g/2),j=a*this.totalBarWidth,d[a]<0?(k=i,h=i-1):d[a]>0?(k=0,h=i-1):(k=i-1,h=2),l=this.calcColor(d[a],a);if(l===null)return;return c&&(l=this.calcHighlightColor(l,e)),f.drawRect(j,k,this.barWidth-1,h-1,l,l)}}),d.fn.sparkline.discrete=A=g(d.fn.sparkline._base,w,{type:"discrete",init:function(a,e,f,g,h){A._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=f.get("width")==="auto"?e.length*2:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=f.get("lineHeight")==="auto"?b.round(this.canvasHeight*.3):f.get("lineHeight"))},getRegion:function(a,c,d){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.min,g=this.max,h=this.range,j=this.interval,k=this.target,l=this.canvasHeight,m=this.lineHeight,n=l-m,o,p,q,r;return p=i(d[a],f,g),r=a*j,o=b.round(n-n*((p-f)/h)),q=e.get("thresholdColor")&&p<e.get("thresholdValue")?e.get("thresholdColor"):e.get("lineColor"),c&&(q=this.calcHighlightColor(q,e)),k.drawLine(r,o,r,o+m,q)}}),d.fn.sparkline.bullet=B=g(d.fn.sparkline._base,{type:"bullet",init:function(a,d,e,f,g){var h,i,j;B._super.init.call(this,a,d,e,f,g),this.values=d=l(d),j=d.slice(),j[0]=j[0]===null?j[2]:j[0],j[1]=d[1]===null?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),e.get("base")===c?h=h<0?h:0:h=e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=e.get("width")==="auto"?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.valueShapes[b],d;delete this.shapes[c];switch(b.substr(0,1)){case"r":d=this.renderRange(b.substr(1),a);break;case"p":d=this.renderPerformance(a);break;case"t":d=this.renderTarget(a)}this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(this.canvasHeight*.3),d-1,b.round(this.canvasHeight*.4)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(this.canvasHeight*.1),f=this.canvasHeight-e*2,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},render:function(){var a=this.values.length,b=this.target,c,d;if(!B._super.render.call(this))return;for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()}}),d.fn.sparkline.pie=C=g(d.fn.sparkline._base,{type:"pie",init:function(a,c,e,f,g){var h=0,i;C._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),e.get("width")==="auto"&&(this.width=this.height);if(c.length>0)for(i=c.length;i--;)h+=c[i];this.total=h,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e=this.target,f=this.options,g=this.radius,h=f.get("borderWidth"),i=f.get("offset"),j=2*b.PI,k=this.values,l=this.total,m=i?2*b.PI*(i/360):0,n,o,p,q,r;q=k.length;for(p=0;p<q;p++){n=m,o=m,l>0&&(o=m+j*(k[p]/l));if(a===p)return r=f.get("sliceColors")[p%f.get("sliceColors").length],d&&(r=this.calcHighlightColor(r,f)),e.drawPieSlice(g,g,g-h,n,o,c,r);m=o}},render:function(){var a=this.target,d=this.values,e=this.options,f=this.radius,g=e.get("borderWidth"),h,i;if(!C._super.render.call(this))return;g&&a.drawCircle(f,f,b.floor(f-g/2),e.get("borderColor"),c,g).append();for(i=d.length;i--;)d[i]&&(h=this.renderSlice(i).append(),this.valueShapes[i]=h.id,this.shapes[h.id]=i);a.render()}}),d.fn.sparkline.box=D=g(d.fn.sparkline._base,{type:"box",init:function(a,b,c,e,f){D._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=c.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles
[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:"lo",value:this.loutlier}),this.routlier!==c&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==c&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a=this.target,d=this.values,e=d.length,f=this.options,g=this.canvasWidth,h=this.canvasHeight,i=f.get("chartRangeMin")===c?b.min.apply(b,d):f.get("chartRangeMin"),k=f.get("chartRangeMax")===c?b.max.apply(b,d):f.get("chartRangeMax"),l=0,m,n,o,p,q,r,s,t,u,v,w;if(!D._super.render.call(this))return;if(f.get("raw"))f.get("showOutliers")&&d.length>5?(n=d[0],m=d[1],p=d[2],q=d[3],r=d[4],s=d[5],t=d[6]):(m=d[0],p=d[1],q=d[2],r=d[3],s=d[4]);else{d.sort(function(a,b){return a-b}),p=j(d,1),q=j(d,2),r=j(d,3),o=r-p;if(f.get("showOutliers")){m=s=c;for(u=0;u<e;u++)m===c&&d[u]>p-o*f.get("outlierIQR")&&(m=d[u]),d[u]<r+o*f.get("outlierIQR")&&(s=d[u]);n=d[0],t=d[e-1]}else m=d[0],s=d[e-1]}this.quartiles=[p,q,r],this.lwhisker=m,this.rwhisker=s,this.loutlier=n,this.routlier=t,w=g/(k-i+1),f.get("showOutliers")&&(l=b.ceil(f.get("spotRadius")),g-=2*b.ceil(f.get("spotRadius")),w=g/(k-i+1),n<m&&a.drawCircle((n-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append(),t>s&&a.drawCircle((t-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append()),a.drawRect(b.round((p-i)*w+l),b.round(h*.1),b.round((r-p)*w),b.round(h*.8),f.get("boxLineColor"),f.get("boxFillColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/2),b.round((p-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/4),b.round((m-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/2),b.round((r-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/4),b.round((s-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((q-i)*w+l),b.round(h*.1),b.round((q-i)*w+l),b.round(h*.9),f.get("medianColor")).append(),f.get("target")&&(v=b.ceil(f.get("spotRadius")),a.drawLine(b.round((f.get("target")-i)*w+l),b.round(h/2-v),b.round((f.get("target")-i)*w+l),b.round(h/2+v),f.get("targetColor")).append(),a.drawLine(b.round((f.get("target")-i)*w+l-v),b.round(h/2),b.round((f.get("target")-i)*w+l+v),b.round(h/2),f.get("targetColor")).append()),a.render()}}),G=g({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),H=g({_pxregex:/(\d+)(px)?\s*$/i,init:function(a,b,c){if(!a)return;this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this)},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new G(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),I=g(H,{init:function(b,e,f,g){I._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({display:"inline-block",width:b,height:e,verticalAlign:"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g=this._getContext(d,e,f),h,i;g.beginPath(),g.moveTo(b[0][0]+.5,b[0][1]+.5);for(h=1,i=b.length;h<i;h++)g.lineTo(b[h][0]+.5,b[h][1]+.5);d!==c&&g.stroke(),e!==c&&g.fill(),this.targetX!==c&&this.targetY!==c&&g.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=this.shapeseq,d;this.shapes[b.id]=b;for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c=this.shapeseq,d={},e,f,g;for(f=a.length;f--;)d[a[f]]=!0;for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]},insertAfterShape:function(a,b){var c=this.shapeseq,d;for(d=c.length;d--;)if(c[d]===a){c.splice(d+1,0,b.id),this.shapes[b.id]=b;return}},removeShapeId:function(a){var b=this.shapeseq,c;for(c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;d.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);this.interact||(this.shapes={},this.shapeseq=[])}}),J=g(H,{init:function(b,c,e){var f;J._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,d,e,f){var g=[],h,i,j,k,l,m,n;for(n=0,m=b.length;n<m;n++)g[n]=""+b[n][0]+","+b[n][1];return h=g.splice(0,1),f=f===c?1:f,i=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',j=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',k=g[0]===g[g.length-1]?"x ":"",l='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+i+j+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+h+" l "+g.join(", ")+" "+k+'e">'+" </v:shape>",l},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+e*2+"px; height:"+e*2+'px"></v:oval>',k},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f);if(l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+d+","+e+" wa "+k.join(", ")+' x e">'+" </v:shape>",r)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c=d("#jqsshape"+a[0]),e="",f=b.length,g;for(g=0;g<f;g++)e+=this["_draw"+b[g].type].apply(this,b[g].args);c[0].outerHTML=e;for(g=1;g<a.length;g++)d("#jqsshape"+a[g]).remove()},insertAfterShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})})(document,Math);
;/*!
 * Pusher JavaScript Library v4.4.0
 * https://pusher.com/
 *
 * Copyright 2017, Pusher
 * Released under the MIT licence.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pusher=e():t.Pusher=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1);t.exports=r.default},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw"You must pass your app key when you instantiate Pusher."}var i=n(2),o=n(9),s=n(24),a=n(39),u=n(40),c=n(41),h=n(12),f=n(5),l=n(71),p=n(8),d=n(43),y=n(14),g=function(){function t(e,n){var h=this;if(r(e),n=n||{},!n.cluster&&!n.wsHost&&!n.httpHost){var g=y.default.buildLogSuffix("javascriptQuickStart");p.default.warn("You should always specify a cluster when connecting. "+g)}this.key=e,this.config=o.extend(l.getGlobalConfig(),n.cluster?l.getClusterConfig(n.cluster):{},n),this.channels=d.default.createChannels(),this.global_emitter=new s.default,this.sessionID=Math.floor(1e9*Math.random()),this.timeline=new a.default(this.key,this.sessionID,{cluster:this.config.cluster,features:t.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:u.default.INFO,version:f.default.VERSION}),this.config.disableStats||(this.timelineSender=d.default.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+i.default.TimelineTransport.name}));var v=function(t){var e=o.extend({},h.config,t);return c.build(i.default.getDefaultStrategy(e),e)};this.connection=d.default.createConnectionManager(this.key,o.extend({getStrategy:v,timeline:this.timeline,activityTimeout:this.config.activity_timeout,pongTimeout:this.config.pong_timeout,unavailableTimeout:this.config.unavailable_timeout},this.config,{useTLS:this.shouldUseTLS()})),this.connection.bind("connected",function(){h.subscribeAll(),h.timelineSender&&h.timelineSender.send(h.connection.isUsingTLS())}),this.connection.bind("message",function(t){var e=t.event,n=0===e.indexOf("pusher_internal:");if(t.channel){var r=h.channel(t.channel);r&&r.handleEvent(t)}n||h.global_emitter.emit(t.event,t.data)}),this.connection.bind("connecting",function(){h.channels.disconnect()}),this.connection.bind("disconnected",function(){h.channels.disconnect()}),this.connection.bind("error",function(t){p.default.warn("Error",t)}),t.instances.push(this),this.timeline.info({instances:t.instances.length}),t.isReady&&this.connect()}return t.ready=function(){t.isReady=!0;for(var e=0,n=t.instances.length;e<n;e++)t.instances[e].connect()},t.log=function(e){t.logToConsole&&window.console&&window.console.log&&window.console.log(e)},t.getClientFeatures=function(){return o.keys(o.filterObject({ws:i.default.Transports.ws},function(t){return t.isSupported({})}))},t.prototype.channel=function(t){return this.channels.find(t)},t.prototype.allChannels=function(){return this.channels.all()},t.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var t=this.connection.isUsingTLS(),e=this.timelineSender;this.timelineSenderTimer=new h.PeriodicTimer(6e4,function(){e.send(t)})}},t.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},t.prototype.bind=function(t,e,n){return this.global_emitter.bind(t,e,n),this},t.prototype.unbind=function(t,e,n){return this.global_emitter.unbind(t,e,n),this},t.prototype.bind_global=function(t){return this.global_emitter.bind_global(t),this},t.prototype.unbind_global=function(t){return this.global_emitter.unbind_global(t),this},t.prototype.unbind_all=function(t){return this.global_emitter.unbind_all(),this},t.prototype.subscribeAll=function(){var t;for(t in this.channels.channels)this.channels.channels.hasOwnProperty(t)&&this.subscribe(t)},t.prototype.subscribe=function(t){var e=this.channels.add(t,this);return e.subscriptionPending&&e.subscriptionCancelled?e.reinstateSubscription():e.subscriptionPending||"connected"!==this.connection.state||e.subscribe(),e},t.prototype.unsubscribe=function(t){var e=this.channels.find(t);e&&e.subscriptionPending?e.cancelSubscription():(e=this.channels.remove(t),e&&"connected"===this.connection.state&&e.unsubscribe())},t.prototype.send_event=function(t,e,n){return this.connection.send_event(t,e,n)},t.prototype.shouldUseTLS=function(){return"https:"===i.default.getProtocol()||(this.config.forceTLS===!0||Boolean(this.config.encrypted))},t.instances=[],t.isReady=!1,t.logToConsole=!1,t.Runtime=i.default,t.ScriptReceivers=i.default.ScriptReceivers,t.DependenciesReceivers=i.default.DependenciesReceivers,t.auth_callbacks=i.default.auth_callbacks,t}();e.__esModule=!0,e.default=g,i.default.setup(g)},function(t,e,n){"use strict";var r=n(3),i=n(7),o=n(15),s=n(16),a=n(17),u=n(4),c=n(18),h=n(19),f=n(26),l=n(27),p=n(28),d=n(29),y={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:u.ScriptReceivers,DependenciesReceivers:r.DependenciesReceivers,getDefaultStrategy:l.default,Transports:h.default,transportConnectionInitializer:p.default,HTTPFactory:d.default,TimelineTransport:c.default,getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(t){var e=this;window.Pusher=t;var n=function(){e.onDocumentBody(t.ready)};window.JSON?n():r.Dependencies.load("json2",{},n)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:i.default,jsonp:o.default}},onDocumentBody:function(t){var e=this;document.body?t():setTimeout(function(){e.onDocumentBody(t)},0)},createJSONPRequest:function(t,e){return new a.default(t,e)},createScriptRequest:function(t){return new s.default(t)},getLocalStorage:function(){try{return window.localStorage}catch(t){return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var t=this.getXHRAPI();return new t},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return f.Network},createWebSocket:function(t){var e=this.getWebSocketAPI();return new e(t)},createSocketRequest:function(t,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(t,e);if(this.isXDRSupported(0===e.indexOf("https:")))return this.HTTPFactory.createXDR(t,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var t=this.getXHRAPI();return Boolean(t)&&void 0!==(new t).withCredentials},isXDRSupported:function(t){var e=t?"https:":"http:",n=this.getProtocol();return Boolean(window.XDomainRequest)&&n===e},addUnloadListener:function(t){void 0!==window.addEventListener?window.addEventListener("unload",t,!1):void 0!==window.attachEvent&&window.attachEvent("onunload",t)},removeUnloadListener:function(t){void 0!==window.addEventListener?window.removeEventListener("unload",t,!1):void 0!==window.detachEvent&&window.detachEvent("onunload",t)}};e.__esModule=!0,e.default=y},function(t,e,n){"use strict";var r=n(4),i=n(5),o=n(6);e.DependenciesReceivers=new r.ScriptReceiverFactory("_pusher_dependencies","Pusher.DependenciesReceivers"),e.Dependencies=new o.default({cdn_http:i.default.cdn_http,cdn_https:i.default.cdn_https,version:i.default.VERSION,suffix:i.default.dependency_suffix,receivers:e.DependenciesReceivers})},function(t,e){"use strict";var n=function(){function t(t,e){this.lastId=0,this.prefix=t,this.name=e}return t.prototype.create=function(t){this.lastId++;var e=this.lastId,n=this.prefix+e,r=this.name+"["+e+"]",i=!1,o=function(){i||(t.apply(null,arguments),i=!0)};return this[e]=o,{number:e,id:n,name:r,callback:o}},t.prototype.remove=function(t){delete this[t.number]},t}();e.ScriptReceiverFactory=n,e.ScriptReceivers=new n("_pusher_script_","Pusher.ScriptReceivers")},function(t,e){"use strict";var n={VERSION:"4.4.0",PROTOCOL:7,host:"ws.pusherapp.com",ws_port:80,wss_port:443,ws_path:"",sockjs_host:"sockjs.pusher.com",sockjs_http_port:80,sockjs_https_port:443,sockjs_path:"/pusher",stats_host:"stats.pusher.com",channel_auth_endpoint:"/pusher/auth",channel_auth_transport:"ajax",activity_timeout:12e4,pong_timeout:3e4,unavailable_timeout:1e4,cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:".min"};e.__esModule=!0,e.default=n},function(t,e,n){"use strict";var r=n(4),i=n(2),o=function(){function t(t){this.options=t,this.receivers=t.receivers||r.ScriptReceivers,this.loading={}}return t.prototype.load=function(t,e,n){var r=this;if(r.loading[t]&&r.loading[t].length>0)r.loading[t].push(n);else{r.loading[t]=[n];var o=i.default.createScriptRequest(r.getPath(t,e)),s=r.receivers.create(function(e){if(r.receivers.remove(s),r.loading[t]){var n=r.loading[t];delete r.loading[t];for(var i=function(t){t||o.cleanup()},a=0;a<n.length;a++)n[a](e,i)}});o.send(s)}},t.prototype.getRoot=function(t){var e,n=i.default.getDocument().location.protocol;return e=t&&t.useTLS||"https:"===n?this.options.cdn_https:this.options.cdn_http,e.replace(/\/*$/,"")+"/"+this.options.version},t.prototype.getPath=function(t,e){return this.getRoot(e)+"/"+t+this.options.suffix+".js"},t}();e.__esModule=!0,e.default=o},function(t,e,n){"use strict";var r=n(8),i=n(2),o=n(14),s=function(t,e,n){var s,a=this;s=i.default.createXHR(),s.open("POST",a.options.authEndpoint,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var u in this.authOptions.headers)s.setRequestHeader(u,this.authOptions.headers[u]);return s.onreadystatechange=function(){if(4===s.readyState)if(200===s.status){var t,e=!1;try{t=JSON.parse(s.responseText),e=!0}catch(t){n(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+s.responseText)}e&&n(!1,t)}else{var i=o.default.buildLogSuffix("authenticationEndpoint");r.default.warn("Couldn't retrieve authentication info. "+s.status+("Clients must be authenticated to join private or presence channels. "+i)),n(!0,s.status)}},s.send(this.composeQuery(e)),s};e.__esModule=!0,e.default=s},function(t,e,n){"use strict";var r=n(9),i=n(1),o={debug:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];i.default.log&&i.default.log(r.stringify.apply(this,arguments))},warn:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var n=r.stringify.apply(this,arguments);i.default.log?i.default.log(n):window.console&&(window.console.warn?window.console.warn(n):window.console.log&&window.console.log(n))}};e.__esModule=!0,e.default=o},function(t,e,n){"use strict";function r(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0;i<e.length;i++){var o=e[i];for(var s in o)o[s]&&o[s].constructor&&o[s].constructor===Object?t[s]=r(t[s]||{},o[s]):t[s]=o[s]}return t}function i(){for(var t=["Pusher"],e=0;e<arguments.length;e++)"string"==typeof arguments[e]?t.push(arguments[e]):t.push(w(arguments[e]));return t.join(" : ")}function o(t,e){var n=Array.prototype.indexOf;if(null===t)return-1;if(n&&t.indexOf===n)return t.indexOf(e);for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1}function s(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)}function a(t){var e=[];return s(t,function(t,n){e.push(n)}),e}function u(t){var e=[];return s(t,function(t){e.push(t)}),e}function c(t,e,n){for(var r=0;r<t.length;r++)e.call(n||window,t[r],r,t)}function h(t,e){for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r,t,n));return n}function f(t,e){var n={};return s(t,function(t,r){n[r]=e(t)}),n}function l(t,e){e=e||function(t){return!!t};for(var n=[],r=0;r<t.length;r++)e(t[r],r,t,n)&&n.push(t[r]);return n}function p(t,e){var n={};return s(t,function(r,i){(e&&e(r,i,t,n)||Boolean(r))&&(n[i]=r)}),n}function d(t){var e=[];return s(t,function(t,n){e.push([n,t])}),e}function y(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1}function g(t,e){for(var n=0;n<t.length;n++)if(!e(t[n],n,t))return!1;return!0}function v(t){return f(t,function(t){return"object"==typeof t&&(t=w(t)),encodeURIComponent(_.default(t.toString()))})}function b(t){var e=p(t,function(t){return void 0!==t}),n=h(d(v(e)),S.default.method("join","=")).join("&");return n}function m(t){var e=[],n=[];return function t(r,i){var o,s,a;switch(typeof r){case"object":if(!r)return null;for(o=0;o<e.length;o+=1)if(e[o]===r)return{$ref:n[o]};if(e.push(r),n.push(i),"[object Array]"===Object.prototype.toString.apply(r))for(a=[],o=0;o<r.length;o+=1)a[o]=t(r[o],i+"["+o+"]");else{a={};for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(a[s]=t(r[s],i+"["+JSON.stringify(s)+"]"))}return a;case"number":case"string":case"boolean":return r}}(t,"$")}function w(t){try{return JSON.stringify(t)}catch(e){return JSON.stringify(m(t))}}var _=n(10),S=n(11);e.extend=r,e.stringify=i,e.arrayIndexOf=o,e.objectApply=s,e.keys=a,e.values=u,e.apply=c,e.map=h,e.mapObject=f,e.filter=l,e.filterObject=p,e.flatten=d,e.any=y,e.all=g,e.encodeParamsObject=v,e.buildQueryString=b,e.decycleObject=m,e.safeJSONStringify=w},function(t,e,n){"use strict";function r(t){return l(h(t))}e.__esModule=!0,e.default=r;for(var i=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={},a=0,u=o.length;a<u;a++)s[o.charAt(a)]=a;var c=function(t){var e=t.charCodeAt(0);return e<128?t:e<2048?i(192|e>>>6)+i(128|63&e):i(224|e>>>12&15)+i(128|e>>>6&63)+i(128|63&e)},h=function(t){return t.replace(/[^\x00-\x7F]/g,c)},f=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),r=[o.charAt(n>>>18),o.charAt(n>>>12&63),e>=2?"=":o.charAt(n>>>6&63),e>=1?"=":o.charAt(63&n)];return r.join("")},l=window.btoa||function(t){return t.replace(/[\s\S]{1,3}/g,f)}},function(t,e,n){"use strict";var r=n(12),i={now:function(){return Date.now?Date.now():(new Date).valueOf()},defer:function(t){return new r.OneOffTimer(0,t)},method:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Array.prototype.slice.call(arguments,1);return function(e){return e[t].apply(e,r.concat(arguments))}}};e.__esModule=!0,e.default=i},function(t,e,n){"use strict";function r(t){window.clearTimeout(t)}function i(t){window.clearInterval(t)}var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},s=n(13),a=function(t){function e(e,n){t.call(this,setTimeout,r,e,function(t){return n(),null})}return o(e,t),e}(s.default);e.OneOffTimer=a;var u=function(t){function e(e,n){t.call(this,setInterval,i,e,function(t){return n(),t})}return o(e,t),e}(s.default);e.PeriodicTimer=u},function(t,e){"use strict";var n=function(){function t(t,e,n,r){var i=this;this.clear=e,this.timer=t(function(){i.timer&&(i.timer=r(i.timer))},n)}return t.prototype.isRunning=function(){return null!==this.timer},t.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},t}();e.__esModule=!0,e.default=n},function(t,e){"use strict";var n={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/authenticating_users"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"}}},r=function(t){var e="See:",r=n.urls[t];if(!r)return"";var i;return r.fullUrl?i=r.fullUrl:r.path&&(i=n.baseUrl+r.path),i?e+" "+i:""};e.__esModule=!0,e.default={buildLogSuffix:r}},function(t,e,n){"use strict";var r=n(8),i=function(t,e,n){void 0!==this.authOptions.headers&&r.default.warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var i=t.nextAuthCallbackID.toString();t.nextAuthCallbackID++;var o=t.getDocument(),s=o.createElement("script");t.auth_callbacks[i]=function(t){n(!1,t)};var a="Pusher.auth_callbacks['"+i+"']";s.src=this.options.authEndpoint+"?callback="+encodeURIComponent(a)+"&"+this.composeQuery(e);var u=o.getElementsByTagName("head")[0]||o.documentElement;u.insertBefore(s,u.firstChild)};e.__esModule=!0,e.default=i},function(t,e){"use strict";var n=function(){function t(t){this.src=t}return t.prototype.send=function(t){var e=this,n="Error loading "+e.src;e.script=document.createElement("script"),e.script.id=t.id,e.script.src=e.src,e.script.type="text/javascript",e.script.charset="UTF-8",e.script.addEventListener?(e.script.onerror=function(){t.callback(n)},e.script.onload=function(){t.callback(null)}):e.script.onreadystatechange=function(){"loaded"!==e.script.readyState&&"complete"!==e.script.readyState||t.callback(null)},void 0===e.script.async&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(e.errorScript=document.createElement("script"),e.errorScript.id=t.id+"_error",e.errorScript.text=t.name+"('"+n+"');",e.script.async=e.errorScript.async=!1):e.script.async=!0;var r=document.getElementsByTagName("head")[0];r.insertBefore(e.script,r.firstChild),e.errorScript&&r.insertBefore(e.errorScript,e.script.nextSibling)},t.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},t}();e.__esModule=!0,e.default=n},function(t,e,n){"use strict";var r=n(9),i=n(2),o=function(){function t(t,e){this.url=t,this.data=e}return t.prototype.send=function(t){if(!this.request){var e=r.buildQueryString(this.data),n=this.url+"/"+t.number+"?"+e;this.request=i.default.createScriptRequest(n),this.request.send(t)}},t.prototype.cleanup=function(){this.request&&this.request.cleanup()},t}();e.__esModule=!0,e.default=o},function(t,e,n){"use strict";var r=n(2),i=n(4),o=function(t,e){return function(n,o){var s="http"+(e?"s":"")+"://",a=s+(t.host||t.options.host)+t.options.path,u=r.default.createJSONPRequest(a,n),c=r.default.ScriptReceivers.create(function(e,n){i.ScriptReceivers.remove(c),u.cleanup(),n&&n.host&&(t.host=n.host),o&&o(e,n)});u.send(c)}},s={name:"jsonp",getAgent:o};e.__esModule=!0,e.default=s},function(t,e,n){"use strict";var r=n(20),i=n(22),o=n(21),s=n(2),a=n(3),u=n(9),c=new i.default({file:"sockjs",urls:o.sockjs,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return void 0!==window.SockJS},getSocket:function(t,e){return new window.SockJS(t,null,{js_path:a.Dependencies.getPath("sockjs",{useTLS:e.useTLS}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(t,e){t.send(JSON.stringify({path:e}))}}),h={isSupported:function(t){var e=s.default.isXDRSupported(t.useTLS);return e}},f=new i.default(u.extend({},r.streamingConfiguration,h)),l=new i.default(u.extend({},r.pollingConfiguration,h));r.default.xdr_streaming=f,r.default.xdr_polling=l,r.default.sockjs=c,e.__esModule=!0,e.default=r.default},function(t,e,n){"use strict";var r=n(21),i=n(22),o=n(9),s=n(2),a=new i.default({urls:r.ws,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(s.default.getWebSocketAPI())},isSupported:function(){return Boolean(s.default.getWebSocketAPI())},getSocket:function(t){return s.default.createWebSocket(t)}}),u={urls:r.http,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}};e.streamingConfiguration=o.extend({getSocket:function(t){return s.default.HTTPFactory.createStreamingSocket(t)}},u),e.pollingConfiguration=o.extend({getSocket:function(t){return s.default.HTTPFactory.createPollingSocket(t)}},u);var c={isSupported:function(){return s.default.isXHRSupported()}},h=new i.default(o.extend({},e.streamingConfiguration,c)),f=new i.default(o.extend({},e.pollingConfiguration,c)),l={ws:a,xhr_streaming:h,xhr_polling:f};e.__esModule=!0,e.default=l},function(t,e,n){"use strict";function r(t,e,n){var r=t+(e.useTLS?"s":""),i=e.useTLS?e.hostTLS:e.hostNonTLS;return r+"://"+i+n}function i(t,e){var n="/app/"+t,r="?protocol="+o.default.PROTOCOL+"&client=js&version="+o.default.VERSION+(e?"&"+e:"");return n+r}var o=n(5);e.ws={getInitial:function(t,e){var n=(e.httpPath||"")+i(t,"flash=false");return r("ws",e,n)}},e.http={getInitial:function(t,e){var n=(e.httpPath||"/pusher")+i(t);return r("http",e,n)}},e.sockjs={getInitial:function(t,e){return r("http",e,e.httpPath||"/pusher")},getPath:function(t,e){return i(t)}}},function(t,e,n){"use strict";var r=n(23),i=function(){function t(t){this.hooks=t}return t.prototype.isSupported=function(t){return this.hooks.isSupported(t)},t.prototype.createConnection=function(t,e,n,i){return new r.default(this.hooks,t,e,n,i)},t}();e.__esModule=!0,e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(11),o=n(9),s=n(24),a=n(8),u=n(2),c=function(t){function e(e,n,r,i,o){t.call(this),this.initialize=u.default.transportConnectionInitializer,this.hooks=e,this.name=n,this.priority=r,this.key=i,this.options=o,this.state="new",this.timeline=o.timeline,this.activityTimeout=o.activityTimeout,this.id=this.timeline.generateUniqueID()}return r(e,t),e.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},e.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},e.prototype.connect=function(){var t=this;if(this.socket||"initialized"!==this.state)return!1;var e=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(e,this.options)}catch(e){return i.default.defer(function(){t.onError(e),t.changeState("closed")}),!1}return this.bindListeners(),a.default.debug("Connecting",{transport:this.name,url:e}),this.changeState("connecting"),!0},e.prototype.close=function(){return!!this.socket&&(this.socket.close(),!0)},e.prototype.send=function(t){var e=this;return"open"===this.state&&(i.default.defer(function(){e.socket&&e.socket.send(t)}),!0)},e.prototype.ping=function(){"open"===this.state&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(t){this.emit("error",{type:"WebSocketError",error:t}),this.timeline.error(this.buildTimelineMessage({error:t.toString()}))},e.prototype.onClose=function(t){t?this.changeState("closed",{code:t.code,reason:t.reason,wasClean:t.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(t){this.emit("message",t)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var t=this;this.socket.onopen=function(){t.onOpen()},this.socket.onerror=function(e){t.onError(e)},this.socket.onclose=function(e){t.onClose(e)},this.socket.onmessage=function(e){t.onMessage(e)},this.supportsPing()&&(this.socket.onactivity=function(){t.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(t,e){this.state=t,this.timeline.info(this.buildTimelineMessage({state:t,params:e})),this.emit(t,e)},e.prototype.buildTimelineMessage=function(t){return o.extend({cid:this.id},t)},e}(s.default);e.__esModule=!0,e.default=c},function(t,e,n){"use strict";var r=n(9),i=n(25),o=function(){function t(t){this.callbacks=new i.default,this.global_callbacks=[],this.failThrough=t}return t.prototype.bind=function(t,e,n){return this.callbacks.add(t,e,n),this},t.prototype.bind_global=function(t){return this.global_callbacks.push(t),this},t.prototype.unbind=function(t,e,n){return this.callbacks.remove(t,e,n),this},t.prototype.unbind_global=function(t){return t?(this.global_callbacks=r.filter(this.global_callbacks||[],function(e){return e!==t}),this):(this.global_callbacks=[],this)},t.prototype.unbind_all=function(){return this.unbind(),this.unbind_global(),this},t.prototype.emit=function(t,e,n){for(var r=0;r<this.global_callbacks.length;r++)this.global_callbacks[r](t,e);var i=this.callbacks.get(t),o=[];if(n?o.push(e,n):e&&o.push(e),i&&i.length>0)for(var r=0;r<i.length;r++)i[r].fn.apply(i[r].context||window,o);else this.failThrough&&this.failThrough(t,e);return this},t}();e.__esModule=!0,e.default=o},function(t,e,n){"use strict";function r(t){return"_"+t}var i=n(9),o=function(){function t(){this._callbacks={}}return t.prototype.get=function(t){return this._callbacks[r(t)]},t.prototype.add=function(t,e,n){var i=r(t);this._callbacks[i]=this._callbacks[i]||[],this._callbacks[i].push({fn:e,context:n})},t.prototype.remove=function(t,e,n){if(!t&&!e&&!n)return void(this._callbacks={});var o=t?[r(t)]:i.keys(this._callbacks);e||n?this.removeCallback(o,e,n):this.removeAllCallbacks(o)},t.prototype.removeCallback=function(t,e,n){i.apply(t,function(t){this._callbacks[t]=i.filter(this._callbacks[t]||[],function(t){return e&&e!==t.fn||n&&n!==t.context}),0===this._callbacks[t].length&&delete this._callbacks[t]},this)},t.prototype.removeAllCallbacks=function(t){i.apply(t,function(t){delete this._callbacks[t]},this)},t}();e.__esModule=!0,e.default=o},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(24),o=function(t){function e(){t.call(this);var e=this;void 0!==window.addEventListener&&(window.addEventListener("online",function(){e.emit("online")},!1),window.addEventListener("offline",function(){e.emit("offline")},!1))}return r(e,t),e.prototype.isOnline=function(){return void 0===window.navigator.onLine||window.navigator.onLine},e}(i.default);e.NetInfo=o,e.Network=new o},function(t,e){"use strict";var n=function(t){var e;return e=t.useTLS?[":best_connected_ever",":ws_loop",[":delayed",2e3,[":http_fallback_loop"]]]:[":best_connected_ever",":ws_loop",[":delayed",2e3,[":wss_loop"]],[":delayed",5e3,[":http_fallback_loop"]]],[[":def","ws_options",{hostNonTLS:t.wsHost+":"+t.wsPort,hostTLS:t.wsHost+":"+t.wssPort,httpPath:t.wsPath}],[":def","wss_options",[":extend",":ws_options",{useTLS:!0}]],[":def","sockjs_options",{hostNonTLS:t.httpHost+":"+t.httpPort,hostTLS:t.httpHost+":"+t.httpsPort,httpPath:t.httpPath}],[":def","timeouts",{loop:!0,timeout:15e3,timeoutLimit:6e4}],[":def","ws_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def","streaming_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def_transport","ws","ws",3,":ws_options",":ws_manager"],[":def_transport","wss","ws",3,":wss_options",":ws_manager"],[":def_transport","sockjs","sockjs",1,":sockjs_options"],[":def_transport","xhr_streaming","xhr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xdr_streaming","xdr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xhr_polling","xhr_polling",1,":sockjs_options"],[":def_transport","xdr_polling","xdr_polling",1,":sockjs_options"],[":def","ws_loop",[":sequential",":timeouts",":ws"]],[":def","wss_loop",[":sequential",":timeouts",":wss"]],[":def","sockjs_loop",[":sequential",":timeouts",":sockjs"]],[":def","streaming_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_streaming"],":xhr_streaming",":xdr_streaming"]]],[":def","polling_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_polling"],":xhr_polling",":xdr_polling"]]],[":def","http_loop",[":if",[":is_supported",":streaming_loop"],[":best_connected_ever",":streaming_loop",[":delayed",4e3,[":polling_loop"]]],[":polling_loop"]]],[":def","http_fallback_loop",[":if",[":is_supported",":http_loop"],[":http_loop"],[":sockjs_loop"]]],[":def","strategy",[":cached",18e5,[":first_connected",[":if",[":is_supported",":ws"],e,":http_fallback_loop"]]]]]};e.__esModule=!0,e.default=n},function(t,e,n){"use strict";function r(){var t=this;t.timeline.info(t.buildTimelineMessage({transport:t.name+(t.options.useTLS?"s":"")})),t.hooks.isInitialized()?t.changeState("initialized"):t.hooks.file?(t.changeState("initializing"),i.Dependencies.load(t.hooks.file,{useTLS:t.options.useTLS},function(e,n){t.hooks.isInitialized()?(t.changeState("initialized"),n(!0)):(e&&t.onError(e),t.onClose(),n(!1))})):t.onClose()}var i=n(3);e.__esModule=!0,e.default=r},function(t,e,n){"use strict";var r=n(30),i=n(32);i.default.createXDR=function(t,e){return this.createRequest(r.default,t,e)},e.__esModule=!0,e.default=i.default},function(t,e,n){"use strict";var r=n(31),i={getRequest:function(t){var e=new window.XDomainRequest;return e.ontimeout=function(){t.emit("error",new r.RequestTimedOut),t.close()},e.onerror=function(e){t.emit("error",e),t.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText),t.emit("finished",200),t.close()},e},abortRequest:function(t){t.ontimeout=t.onerror=t.onprogress=t.onload=null,t.abort()}};e.__esModule=!0,e.default=i},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.BadEventName=r;var i=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.RequestTimedOut=i;var o=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportPriorityTooLow=o;var s=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportClosed=s;var a=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedFeature=a;var u=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedTransport=u;var c=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedStrategy=c},function(t,e,n){"use strict";var r=n(33),i=n(34),o=n(36),s=n(37),a=n(38),u={createStreamingSocket:function(t){return this.createSocket(o.default,t)},createPollingSocket:function(t){return this.createSocket(s.default,t)},createSocket:function(t,e){return new i.default(t,e)},createXHR:function(t,e){return this.createRequest(a.default,t,e)},createRequest:function(t,e,n){return new r.default(t,e,n)}};e.__esModule=!0,e.default=u},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),o=n(24),s=262144,a=function(t){function e(e,n,r){t.call(this),this.hooks=e,this.method=n,this.url=r}return r(e,t),e.prototype.start=function(t){var e=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){e.close()},i.default.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(t)},e.prototype.close=function(){this.unloader&&(i.default.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(t,e){for(;;){var n=this.advanceBuffer(e);if(!n)break;this.emit("chunk",{status:t,data:n})}this.isBufferTooLong(e)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(t){var e=t.slice(this.position),n=e.indexOf("\n");return n!==-1?(this.position+=n+1,e.slice(0,n)):null},e.prototype.isBufferTooLong=function(t){return this.position===t.length&&t.length>s},e}(o.default);
e.__esModule=!0,e.default=a},function(t,e,n){"use strict";function r(t){var e=/([^\?]*)\/*(\??.*)/.exec(t);return{base:e[1],queryString:e[2]}}function i(t,e){return t.base+"/"+e+"/xhr_send"}function o(t){var e=t.indexOf("?")===-1?"?":"&";return t+e+"t="+ +new Date+"&n="+l++}function s(t,e){var n=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(t);return n[1]+e+n[3]}function a(t){return Math.floor(Math.random()*t)}function u(t){for(var e=[],n=0;n<t;n++)e.push(a(32).toString(32));return e.join("")}var c=n(35),h=n(11),f=n(2),l=1,p=function(){function t(t,e){this.hooks=t,this.session=a(1e3)+"/"+u(8),this.location=r(e),this.readyState=c.default.CONNECTING,this.openStream()}return t.prototype.send=function(t){return this.sendRaw(JSON.stringify([t]))},t.prototype.ping=function(){this.hooks.sendHeartbeat(this)},t.prototype.close=function(t,e){this.onClose(t,e,!0)},t.prototype.sendRaw=function(t){if(this.readyState!==c.default.OPEN)return!1;try{return f.default.createSocketRequest("POST",o(i(this.location,this.session))).start(t),!0}catch(t){return!1}},t.prototype.reconnect=function(){this.closeStream(),this.openStream()},t.prototype.onClose=function(t,e,n){this.closeStream(),this.readyState=c.default.CLOSED,this.onclose&&this.onclose({code:t,reason:e,wasClean:n})},t.prototype.onChunk=function(t){if(200===t.status){this.readyState===c.default.OPEN&&this.onActivity();var e,n=t.data.slice(0,1);switch(n){case"o":e=JSON.parse(t.data.slice(1)||"{}"),this.onOpen(e);break;case"a":e=JSON.parse(t.data.slice(1)||"[]");for(var r=0;r<e.length;r++)this.onEvent(e[r]);break;case"m":e=JSON.parse(t.data.slice(1)||"null"),this.onEvent(e);break;case"h":this.hooks.onHeartbeat(this);break;case"c":e=JSON.parse(t.data.slice(1)||"[]"),this.onClose(e[0],e[1],!0)}}},t.prototype.onOpen=function(t){this.readyState===c.default.CONNECTING?(t&&t.hostname&&(this.location.base=s(this.location.base,t.hostname)),this.readyState=c.default.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},t.prototype.onEvent=function(t){this.readyState===c.default.OPEN&&this.onmessage&&this.onmessage({data:t})},t.prototype.onActivity=function(){this.onactivity&&this.onactivity()},t.prototype.onError=function(t){this.onerror&&this.onerror(t)},t.prototype.openStream=function(){var t=this;this.stream=f.default.createSocketRequest("POST",o(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(e){t.onChunk(e)}),this.stream.bind("finished",function(e){t.hooks.onFinished(t,e)}),this.stream.bind("buffer_too_long",function(){t.reconnect()});try{this.stream.start()}catch(e){h.default.defer(function(){t.onError(e),t.onClose(1006,"Could not start streaming",!1)})}},t.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},t}();e.__esModule=!0,e.default=p},function(t,e){"use strict";var n;!function(t){t[t.CONNECTING=0]="CONNECTING",t[t.OPEN=1]="OPEN",t[t.CLOSED=3]="CLOSED"}(n||(n={})),e.__esModule=!0,e.default=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr_streaming"+t.queryString},onHeartbeat:function(t){t.sendRaw("[]")},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e.default=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr"+t.queryString},onHeartbeat:function(){},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){200===e?t.reconnect():t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e.default=n},function(t,e,n){"use strict";var r=n(2),i={getRequest:function(t){var e=r.default.getXHRAPI(),n=new e;return n.onreadystatechange=n.onprogress=function(){switch(n.readyState){case 3:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText);break;case 4:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText),t.emit("finished",n.status),t.close()}},n},abortRequest:function(t){t.onreadystatechange=null,t.abort()}};e.__esModule=!0,e.default=i},function(t,e,n){"use strict";var r=n(9),i=n(11),o=n(40),s=function(){function t(t,e,n){this.key=t,this.session=e,this.events=[],this.options=n||{},this.sent=0,this.uniqueID=0}return t.prototype.log=function(t,e){t<=this.options.level&&(this.events.push(r.extend({},e,{timestamp:i.default.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},t.prototype.error=function(t){this.log(o.default.ERROR,t)},t.prototype.info=function(t){this.log(o.default.INFO,t)},t.prototype.debug=function(t){this.log(o.default.DEBUG,t)},t.prototype.isEmpty=function(){return 0===this.events.length},t.prototype.send=function(t,e){var n=this,i=r.extend({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],t(i,function(t,r){t||n.sent++,e&&e(t,r)}),!0},t.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},t}();e.__esModule=!0,e.default=s},function(t,e){"use strict";var n;!function(t){t[t.ERROR=3]="ERROR",t[t.INFO=6]="INFO",t[t.DEBUG=7]="DEBUG"}(n||(n={})),e.__esModule=!0,e.default=n},function(t,e,n){"use strict";function r(t){return function(e){return[t.apply(this,arguments),e]}}function i(t){return"string"==typeof t&&":"===t.charAt(0)}function o(t,e){return e[t.slice(1)]}function s(t,e){if(0===t.length)return[[],e];var n=c(t[0],e),r=s(t.slice(1),n[1]);return[[n[0]].concat(r[0]),r[1]]}function a(t,e){if(!i(t))return[t,e];var n=o(t,e);if(void 0===n)throw"Undefined symbol "+t;return[n,e]}function u(t,e){if(i(t[0])){var n=o(t[0],e);if(t.length>1){if("function"!=typeof n)throw"Calling non-function "+t[0];var r=[h.extend({},e)].concat(h.map(t.slice(1),function(t){return c(t,h.extend({},e))[0]}));return n.apply(this,r)}return[n,e]}return s(t,e)}function c(t,e){return"string"==typeof t?a(t,e):"object"==typeof t&&t instanceof Array&&t.length>0?u(t,e):[t,e]}var h=n(9),f=n(11),l=n(42),p=n(31),d=n(64),y=n(65),g=n(66),v=n(67),b=n(68),m=n(69),w=n(70),_=n(2),S=_.default.Transports;e.build=function(t,e){var n=h.extend({},T,e);return c(t,n)[1].strategy};var k={isSupported:function(){return!1},connect:function(t,e){var n=f.default.defer(function(){e(new p.UnsupportedStrategy)});return{abort:function(){n.ensureAborted()},forceMinPriority:function(){}}}},T={extend:function(t,e,n){return[h.extend({},e,n),t]},def:function(t,e,n){if(void 0!==t[e])throw"Redefining symbol "+e;return t[e]=n,[void 0,t]},def_transport:function(t,e,n,r,i,o){var s=S[n];if(!s)throw new p.UnsupportedTransport(n);var a,u=!(t.enabledTransports&&h.arrayIndexOf(t.enabledTransports,e)===-1||t.disabledTransports&&h.arrayIndexOf(t.disabledTransports,e)!==-1);a=u?new d.default(e,r,o?o.getAssistant(s):s,h.extend({key:t.key,useTLS:t.useTLS,timeline:t.timeline,ignoreNullOrigin:t.ignoreNullOrigin},i)):k;var c=t.def(t,e,a)[1];return c.Transports=t.Transports||{},c.Transports[e]=a,[void 0,c]},transport_manager:r(function(t,e){return new l.default(e)}),sequential:r(function(t,e){var n=Array.prototype.slice.call(arguments,2);return new y.default(n,e)}),cached:r(function(t,e,n){return new v.default(n,t.Transports,{ttl:e,timeline:t.timeline,useTLS:t.useTLS})}),first_connected:r(function(t,e){return new w.default(e)}),best_connected_ever:r(function(){var t=Array.prototype.slice.call(arguments,1);return new g.default(t)}),delayed:r(function(t,e,n){return new b.default(n,{delay:e})}),if:r(function(t,e,n,r){return new m.default(e,n,r)}),is_supported:r(function(t,e){return function(){return e.isSupported()}})}},function(t,e,n){"use strict";var r=n(43),i=function(){function t(t){this.options=t||{},this.livesLeft=this.options.lives||1/0}return t.prototype.getAssistant=function(t){return r.default.createAssistantToTheTransportManager(this,t,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},t.prototype.isAlive=function(){return this.livesLeft>0},t.prototype.reportDeath=function(){this.livesLeft-=1},t}();e.__esModule=!0,e.default=i},function(t,e,n){"use strict";var r=n(44),i=n(45),o=n(48),s=n(49),a=n(50),u=n(51),c=n(54),h=n(52),f=n(62),l=n(63),p={createChannels:function(){return new l.default},createConnectionManager:function(t,e){return new f.default(t,e)},createChannel:function(t,e){return new h.default(t,e)},createPrivateChannel:function(t,e){return new u.default(t,e)},createPresenceChannel:function(t,e){return new a.default(t,e)},createEncryptedChannel:function(t,e){return new c.default(t,e)},createTimelineSender:function(t,e){return new s.default(t,e)},createAuthorizer:function(t,e){return e.authorizer?e.authorizer(t,e):new o.default(t,e)},createHandshake:function(t,e){return new i.default(t,e)},createAssistantToTheTransportManager:function(t,e,n){return new r.default(t,e,n)}};e.__esModule=!0,e.default=p},function(t,e,n){"use strict";var r=n(11),i=n(9),o=function(){function t(t,e,n){this.manager=t,this.transport=e,this.minPingDelay=n.minPingDelay,this.maxPingDelay=n.maxPingDelay,this.pingDelay=void 0}return t.prototype.createConnection=function(t,e,n,o){var s=this;o=i.extend({},o,{activityTimeout:this.pingDelay});var a=this.transport.createConnection(t,e,n,o),u=null,c=function(){a.unbind("open",c),a.bind("closed",h),u=r.default.now()},h=function(t){if(a.unbind("closed",h),1002===t.code||1003===t.code)s.manager.reportDeath();else if(!t.wasClean&&u){var e=r.default.now()-u;e<2*s.maxPingDelay&&(s.manager.reportDeath(),s.pingDelay=Math.max(e/2,s.minPingDelay))}};return a.bind("open",c),a},t.prototype.isSupported=function(t){return this.manager.isAlive()&&this.transport.isSupported(t)},t}();e.__esModule=!0,e.default=o},function(t,e,n){"use strict";var r=n(9),i=n(46),o=n(47),s=function(){function t(t,e){this.transport=t,this.callback=e,this.bindListeners()}return t.prototype.close=function(){this.unbindListeners(),this.transport.close()},t.prototype.bindListeners=function(){var t=this;this.onMessage=function(e){t.unbindListeners();var n;try{n=i.processHandshake(e)}catch(e){return t.finish("error",{error:e}),void t.transport.close()}"connected"===n.action?t.finish("connected",{connection:new o.default(n.id,t.transport),activityTimeout:n.activityTimeout}):(t.finish(n.action,{error:n.error}),t.transport.close())},this.onClosed=function(e){t.unbindListeners();var n=i.getCloseAction(e)||"backoff",r=i.getCloseError(e);t.finish(n,{error:r})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},t.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},t.prototype.finish=function(t,e){this.callback(r.extend({transport:this.transport,action:t},e))},t}();e.__esModule=!0,e.default=s},function(t,e){"use strict";e.decodeMessage=function(t){try{var e=JSON.parse(t.data),n=e.data;if("string"==typeof n)try{n=JSON.parse(e.data)}catch(t){}var r={event:e.event,channel:e.channel,data:n};return e.user_id&&(r.user_id=e.user_id),r}catch(e){throw{type:"MessageParseError",error:e,data:t.data}}},e.encodeMessage=function(t){return JSON.stringify(t)},e.processHandshake=function(t){var n=e.decodeMessage(t);if("pusher:connection_established"===n.event){if(!n.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:n.data.socket_id,activityTimeout:1e3*n.data.activity_timeout}}if("pusher:error"===n.event)return{action:this.getCloseAction(n.data),error:this.getCloseError(n.data)};throw"Invalid handshake"},e.getCloseAction=function(t){return t.code<4e3?t.code>=1002&&t.code<=1004?"backoff":null:4e3===t.code?"tls_only":t.code<4100?"refused":t.code<4200?"backoff":t.code<4300?"retry":"refused"},e.getCloseError=function(t){return 1e3!==t.code&&1001!==t.code?{type:"PusherError",data:{code:t.code,message:t.reason||t.message}}:null}},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(9),o=n(24),s=n(46),a=n(8),u=function(t){function e(e,n){t.call(this),this.id=e,this.transport=n,this.activityTimeout=n.activityTimeout,this.bindListeners()}return r(e,t),e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(t){return this.transport.send(t)},e.prototype.send_event=function(t,e,n){var r={event:t,data:e};return n&&(r.channel=n),a.default.debug("Event sent",r),this.send(s.encodeMessage(r))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var t=this,e={message:function(e){var n;try{n=s.decodeMessage(e)}catch(n){t.emit("error",{type:"MessageParseError",error:n,data:e.data})}if(void 0!==n){switch(a.default.debug("Event recd",n),n.event){case"pusher:error":t.emit("error",{type:"PusherError",data:n.data});break;case"pusher:ping":t.emit("ping");break;case"pusher:pong":t.emit("pong")}t.emit("message",n)}},activity:function(){t.emit("activity")},error:function(e){t.emit("error",{type:"WebSocketError",error:e})},closed:function(e){n(),e&&e.code&&t.handleCloseEvent(e),t.transport=null,t.emit("closed")}},n=function(){i.objectApply(e,function(e,n){t.transport.unbind(n,e)})};i.objectApply(e,function(e,n){t.transport.bind(n,e)})},e.prototype.handleCloseEvent=function(t){var e=s.getCloseAction(t),n=s.getCloseError(t);n&&this.emit("error",n),e&&this.emit(e,{action:e,error:n})},e}(o.default);e.__esModule=!0,e.default=u},function(t,e,n){"use strict";var r=n(2),i=function(){function t(t,e){this.channel=t;var n=e.authTransport;if("undefined"==typeof r.default.getAuthorizers()[n])throw"'"+n+"' is not a recognized auth transport";this.type=n,this.options=e,this.authOptions=(e||{}).auth||{}}return t.prototype.composeQuery=function(t){var e="socket_id="+encodeURIComponent(t)+"&channel_name="+encodeURIComponent(this.channel.name);for(var n in this.authOptions.params)e+="&"+encodeURIComponent(n)+"="+encodeURIComponent(this.authOptions.params[n]);return e},t.prototype.authorize=function(e,n){return t.authorizers=t.authorizers||r.default.getAuthorizers(),t.authorizers[this.type].call(this,r.default,e,n)},t}();e.__esModule=!0,e.default=i},function(t,e,n){"use strict";var r=n(2),i=function(){function t(t,e){this.timeline=t,this.options=e||{}}return t.prototype.send=function(t,e){this.timeline.isEmpty()||this.timeline.send(r.default.TimelineTransport.getAgent(this,t),e)},t}();e.__esModule=!0,e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(51),o=n(8),s=n(53),a=n(14),u=function(t){function e(e,n){t.call(this,e,n),this.members=new s.default}return r(e,t),e.prototype.authorize=function(e,n){var r=this;t.prototype.authorize.call(this,e,function(t,e){if(!t){if(void 0===e.channel_data){var i=a.default.buildLogSuffix("authenticationEndpoint");return o.default.warn("Invalid auth response for channel '"+r.name+"',expected 'channel_data' field. "+i),void n("Invalid auth response")}var s=JSON.parse(e.channel_data);r.members.setMyID(s.user_id)}n(t,e)})},e.prototype.handleEvent=function(t){var e=t.event;if(0===e.indexOf("pusher_internal:"))this.handleInternalEvent(t);else{var n=t.data,r={};t.user_id&&(r.user_id=t.user_id),this.emit(e,n,r)}},e.prototype.handleInternalEvent=function(t){var e=t.event,n=t.data;switch(e){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(t);break;case"pusher_internal:member_added":var r=this.members.addMember(n);this.emit("pusher:member_added",r);break;case"pusher_internal:member_removed":var i=this.members.removeMember(n);i&&this.emit("pusher:member_removed",i)}},e.prototype.handleSubscriptionSucceededEvent=function(t){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(t.data),this.emit("pusher:subscription_succeeded",this.members))},e.prototype.disconnect=function(){this.members.reset(),t.prototype.disconnect.call(this)},e}(i.default);e.__esModule=!0,e.default=u},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(43),o=n(52),s=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.prototype.authorize=function(t,e){var n=i.default.createAuthorizer(this,this.pusher.config);return n.authorize(t,e)},e}(o.default);e.__esModule=!0,e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(24),o=n(31),s=n(8),a=n(14),u=function(t){function e(e,n){t.call(this,function(t,n){s.default.debug("No callbacks on "+e+" for "+t)}),this.name=e,this.pusher=n,this.subscribed=!1,this.subscriptionPending=!1,this.subscriptionCancelled=!1}return r(e,t),e.prototype.authorize=function(t,e){return e(!1,{})},e.prototype.trigger=function(t,e){if(0!==t.indexOf("client-"))throw new o.BadEventName("Event '"+t+"' does not start with 'client-'");if(!this.subscribed){var n=a.default.buildLogSuffix("triggeringClientEvents");s.default.warn("Client event triggered before channel 'subscription_succeeded' event . "+n)}return this.pusher.send_event(t,e,this.name)},e.prototype.disconnect=function(){this.subscribed=!1,this.subscriptionPending=!1},e.prototype.handleEvent=function(t){var e=t.event,n=t.data;if("pusher_internal:subscription_succeeded"===e)this.handleSubscriptionSucceededEvent(t);else if(0!==e.indexOf("pusher_internal:")){var r={};this.emit(e,n,r)}},e.prototype.handleSubscriptionSucceededEvent=function(t){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",t.data)},e.prototype.subscribe=function(){var t=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(e,n){e?t.emit("pusher:subscription_error",n):t.pusher.send_event("pusher:subscribe",{auth:n.auth,channel_data:n.channel_data,channel:t.name})}))},e.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},e.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},e}(i.default);e.__esModule=!0,e.default=u},function(t,e,n){"use strict";var r=n(9),i=function(){function t(){this.reset()}return t.prototype.get=function(t){return Object.prototype.hasOwnProperty.call(this.members,t)?{id:t,info:this.members[t]}:null},t.prototype.each=function(t){var e=this;r.objectApply(this.members,function(n,r){t(e.get(r))})},t.prototype.setMyID=function(t){this.myID=t},t.prototype.onSubscription=function(t){this.members=t.presence.hash,this.count=t.presence.count,this.me=this.get(this.myID)},t.prototype.addMember=function(t){return null===this.get(t.user_id)&&this.count++,this.members[t.user_id]=t.user_info,this.get(t.user_id)},t.prototype.removeMember=function(t){var e=this.get(t.user_id);return e&&(delete this.members[t.user_id],this.count--),e},t.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},t}();e.__esModule=!0,e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(51),o=n(31),s=n(8),a=n(55),u=n(57),c=function(t){function e(){t.apply(this,arguments),this.key=null}return r(e,t),e.prototype.authorize=function(e,n){var r=this;t.prototype.authorize.call(this,e,function(t,e){if(t)return void n(!0,e);var i=e.shared_secret;if(!i){var o="No shared_secret key in auth payload for encrypted channel: "+r.name;return n(!0,o),void s.default.warn("Error: "+o)}r.key=u.decodeBase64(i),delete e.shared_secret,n(!1,e)})},e.prototype.trigger=function(t,e){throw new o.UnsupportedFeature("Client events are not currently supported for encrypted channels")},e.prototype.handleEvent=function(e){var n=e.event,r=e.data;return 0===n.indexOf("pusher_internal:")||0===n.indexOf("pusher:")?void t.prototype.handleEvent.call(this,e):void this.handleEncryptedEvent(n,r)},e.prototype.handleEncryptedEvent=function(t,e){var n=this;if(!this.key)return void s.default.debug("Received encrypted event before key has been retrieved from the authEndpoint");if(!e.ciphertext||!e.nonce)return void s.default.warn("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+e);var r=u.decodeBase64(e.ciphertext);if(r.length<a.secretbox.overheadLength)return void s.default.warn("Expected encrypted event ciphertext length to be "+a.secretbox.overheadLength+", got: "+r.length);var i=u.decodeBase64(e.nonce);if(i.length<a.secretbox.nonceLength)return void s.default.warn("Expected encrypted event nonce length to be "+a.secretbox.nonceLength+", got: "+i.length);var o=a.secretbox.open(r,i,this.key);return null===o?(s.default.debug("Failed to decrypted an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),void this.authorize(this.pusher.connection.socket_id,function(e,c){return e?void s.default.warn("Failed to make a request to the authEndpoint: "+c+". Unable to fetch new key, so dropping encrypted event"):(o=a.secretbox.open(r,i,n.key),null===o?void s.default.warn("Failed to decrypt event with new key. Dropping encrypted event"):void n.emitJSON(t,u.encodeUTF8(o)))})):void this.emitJSON(t,u.encodeUTF8(o))},e.prototype.emitJSON=function(t,e){try{this.emit(t,JSON.parse(e))}catch(n){this.emit(t,e)}return this},e}(i.default);e.__esModule=!0,e.default=c},function(t,e,n){!function(t){"use strict";function e(t,e,n,r){t[e]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=255&n,t[e+4]=r>>24&255,t[e+5]=r>>16&255,t[e+6]=r>>8&255,t[e+7]=255&r}function r(t,e,n,r,i){var o,s=0;for(o=0;o<i;o++)s|=t[e+o]^n[r+o];return(1&s-1>>>8)-1}function i(t,e,n,i){return r(t,e,n,i,16)}function o(t,e,n,i){return r(t,e,n,i,32)}function s(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,h=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,f=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,l=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,d=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,y=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,g=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,v=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,b=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,m=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,w=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,_=o,S=s,k=a,T=u,A=c,E=h,x=f,C=l,P=p,R=d,O=y,M=g,U=v,L=b,B=m,I=w,N=0;N<20;N+=2)i=_+U|0,A^=i<<7|i>>>25,i=A+_|0,P^=i<<9|i>>>23,i=P+A|0,U^=i<<13|i>>>19,i=U+P|0,_^=i<<18|i>>>14,i=E+S|0,R^=i<<7|i>>>25,i=R+E|0,L^=i<<9|i>>>23,i=L+R|0,S^=i<<13|i>>>19,i=S+L|0,E^=i<<18|i>>>14,i=O+x|0,B^=i<<7|i>>>25,i=B+O|0,k^=i<<9|i>>>23,i=k+B|0,x^=i<<13|i>>>19,i=x+k|0,O^=i<<18|i>>>14,i=I+M|0,T^=i<<7|i>>>25,i=T+I|0,C^=i<<9|i>>>23,i=C+T|0,M^=i<<13|i>>>19,i=M+C|0,I^=i<<18|i>>>14,i=_+T|0,S^=i<<7|i>>>25,i=S+_|0,k^=i<<9|i>>>23,i=k+S|0,T^=i<<13|i>>>19,i=T+k|0,_^=i<<18|i>>>14,i=E+A|0,x^=i<<7|i>>>25,i=x+E|0,C^=i<<9|i>>>23,i=C+x|0,A^=i<<13|i>>>19,i=A+C|0,E^=i<<18|i>>>14,i=O+R|0,M^=i<<7|i>>>25,i=M+O|0,P^=i<<9|i>>>23,i=P+M|0,R^=i<<13|i>>>19,i=R+P|0,O^=i<<18|i>>>14,i=I+B|0,U^=i<<7|i>>>25,i=U+I|0,L^=i<<9|i>>>23,i=L+U|0,B^=i<<13|i>>>19,i=B+L|0,I^=i<<18|i>>>14;_=_+o|0,S=S+s|0,k=k+a|0,T=T+u|0,A=A+c|0,E=E+h|0,x=x+f|0,C=C+l|0,P=P+p|0,R=R+d|0,O=O+y|0,M=M+g|0,U=U+v|0,L=L+b|0,B=B+m|0,I=I+w|0,t[0]=_>>>0&255,t[1]=_>>>8&255,t[2]=_>>>16&255,t[3]=_>>>24&255,t[4]=S>>>0&255,t[5]=S>>>8&255,t[6]=S>>>16&255,t[7]=S>>>24&255,t[8]=k>>>0&255,t[9]=k>>>8&255,t[10]=k>>>16&255,t[11]=k>>>24&255,t[12]=T>>>0&255,t[13]=T>>>8&255,t[14]=T>>>16&255,t[15]=T>>>24&255,t[16]=A>>>0&255,t[17]=A>>>8&255,t[18]=A>>>16&255,t[19]=A>>>24&255,t[20]=E>>>0&255,t[21]=E>>>8&255,t[22]=E>>>16&255,t[23]=E>>>24&255,t[24]=x>>>0&255,t[25]=x>>>8&255,t[26]=x>>>16&255,t[27]=x>>>24&255,t[28]=C>>>0&255,t[29]=C>>>8&255,t[30]=C>>>16&255,t[31]=C>>>24&255,t[32]=P>>>0&255,t[33]=P>>>8&255,t[34]=P>>>16&255,t[35]=P>>>24&255,t[36]=R>>>0&255,t[37]=R>>>8&255,t[38]=R>>>16&255,t[39]=R>>>24&255,t[40]=O>>>0&255,t[41]=O>>>8&255,t[42]=O>>>16&255,t[43]=O>>>24&255,t[44]=M>>>0&255,t[45]=M>>>8&255,t[46]=M>>>16&255,t[47]=M>>>24&255,t[48]=U>>>0&255,t[49]=U>>>8&255,t[50]=U>>>16&255,t[51]=U>>>24&255,t[52]=L>>>0&255,t[53]=L>>>8&255,t[54]=L>>>16&255,t[55]=L>>>24&255,t[56]=B>>>0&255,t[57]=B>>>8&255,t[58]=B>>>16&255,t[59]=B>>>24&255,t[60]=I>>>0&255,t[61]=I>>>8&255,t[62]=I>>>16&255,t[63]=I>>>24&255}function a(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,h=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,f=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,l=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,d=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,y=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,g=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,v=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,b=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,m=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,w=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,_=o,S=s,k=a,T=u,A=c,E=h,x=f,C=l,P=p,R=d,O=y,M=g,U=v,L=b,B=m,I=w,N=0;N<20;N+=2)i=_+U|0,A^=i<<7|i>>>25,i=A+_|0,P^=i<<9|i>>>23,i=P+A|0,U^=i<<13|i>>>19,i=U+P|0,_^=i<<18|i>>>14,i=E+S|0,R^=i<<7|i>>>25,i=R+E|0,L^=i<<9|i>>>23,i=L+R|0,S^=i<<13|i>>>19,i=S+L|0,E^=i<<18|i>>>14,i=O+x|0,B^=i<<7|i>>>25,i=B+O|0,k^=i<<9|i>>>23,i=k+B|0,x^=i<<13|i>>>19,i=x+k|0,O^=i<<18|i>>>14,i=I+M|0,T^=i<<7|i>>>25,i=T+I|0,C^=i<<9|i>>>23,i=C+T|0,M^=i<<13|i>>>19,i=M+C|0,I^=i<<18|i>>>14,i=_+T|0,S^=i<<7|i>>>25,i=S+_|0,k^=i<<9|i>>>23,i=k+S|0,T^=i<<13|i>>>19,i=T+k|0,_^=i<<18|i>>>14,i=E+A|0,x^=i<<7|i>>>25,i=x+E|0,C^=i<<9|i>>>23,i=C+x|0,A^=i<<13|i>>>19,i=A+C|0,E^=i<<18|i>>>14,i=O+R|0,M^=i<<7|i>>>25,i=M+O|0,P^=i<<9|i>>>23,i=P+M|0,R^=i<<13|i>>>19,i=R+P|0,O^=i<<18|i>>>14,i=I+B|0,U^=i<<7|i>>>25,i=U+I|0,L^=i<<9|i>>>23,i=L+U|0,B^=i<<13|i>>>19,i=B+L|0,I^=i<<18|i>>>14;t[0]=_>>>0&255,t[1]=_>>>8&255,t[2]=_>>>16&255,t[3]=_>>>24&255,t[4]=E>>>0&255,t[5]=E>>>8&255,t[6]=E>>>16&255,t[7]=E>>>24&255,t[8]=O>>>0&255,t[9]=O>>>8&255,t[10]=O>>>16&255,t[11]=O>>>24&255,t[12]=I>>>0&255,t[13]=I>>>8&255,t[14]=I>>>16&255,t[15]=I>>>24&255,t[16]=x>>>0&255,t[17]=x>>>8&255,t[18]=x>>>16&255,t[19]=x>>>24&255,t[20]=C>>>0&255,t[21]=C>>>8&255,t[22]=C>>>16&255,t[23]=C>>>24&255,t[24]=P>>>0&255,t[25]=P>>>8&255,t[26]=P>>>16&255,t[27]=P>>>24&255,t[28]=R>>>0&255,t[29]=R>>>8&255,t[30]=R>>>16&255,t[31]=R>>>24&255}function u(t,e,n,r){s(t,e,n,r)}function c(t,e,n,r){a(t,e,n,r)}function h(t,e,n,r,i,o,s){var a,c,h=new Uint8Array(16),f=new Uint8Array(64);for(c=0;c<16;c++)h[c]=0;for(c=0;c<8;c++)h[c]=o[c];for(;i>=64;){for(u(f,h,s,lt),c=0;c<64;c++)t[e+c]=n[r+c]^f[c];for(a=1,c=8;c<16;c++)a=a+(255&h[c])|0,h[c]=255&a,a>>>=8;i-=64,e+=64,r+=64}if(i>0)for(u(f,h,s,lt),c=0;c<i;c++)t[e+c]=n[r+c]^f[c];return 0}function f(t,e,n,r,i){var o,s,a=new Uint8Array(16),c=new Uint8Array(64);for(s=0;s<16;s++)a[s]=0;for(s=0;s<8;s++)a[s]=r[s];for(;n>=64;){for(u(c,a,i,lt),s=0;s<64;s++)t[e+s]=c[s];for(o=1,s=8;s<16;s++)o=o+(255&a[s])|0,a[s]=255&o,o>>>=8;n-=64,e+=64}if(n>0)for(u(c,a,i,lt),s=0;s<n;s++)t[e+s]=c[s];return 0}function l(t,e,n,r,i){var o=new Uint8Array(32);c(o,r,i,lt);for(var s=new Uint8Array(8),a=0;a<8;a++)s[a]=r[a+16];return f(t,e,n,s,o)}function p(t,e,n,r,i,o,s){var a=new Uint8Array(32);c(a,o,s,lt);for(var u=new Uint8Array(8),f=0;f<8;f++)u[f]=o[f+16];return h(t,e,n,r,i,u,a)}function d(t,e,n,r,i,o){var s=new pt(o);return s.update(n,r,i),s.finish(t,e),0}function y(t,e,n,r,o,s){var a=new Uint8Array(16);return d(a,0,n,r,o,s),i(t,e,a,0)}function g(t,e,n,r,i){var o;if(n<32)return-1;for(p(t,0,e,0,n,r,i),d(t,16,t,32,n-32,t),o=0;o<16;o++)t[o]=0;return 0}function v(t,e,n,r,i){var o,s=new Uint8Array(32);if(n<32)return-1;if(l(s,0,32,r,i),0!==y(e,16,e,32,n-32,s))return-1;for(p(t,0,e,0,n,r,i),o=0;o<32;o++)t[o]=0;return 0}function b(t,e){var n;for(n=0;n<16;n++)t[n]=0|e[n]}function m(t){var e,n,r=1;for(e=0;e<16;e++)n=t[e]+r+65535,r=Math.floor(n/65536),t[e]=n-65536*r;t[0]+=r-1+37*(r-1)}function w(t,e,n){for(var r,i=~(n-1),o=0;o<16;o++)r=i&(t[o]^e[o]),t[o]^=r,e[o]^=r}function _(t,e){var n,r,i,o=tt(),s=tt();for(n=0;n<16;n++)s[n]=e[n];for(m(s),m(s),m(s),r=0;r<2;r++){for(o[0]=s[0]-65517,n=1;n<15;n++)o[n]=s[n]-65535-(o[n-1]>>16&1),o[n-1]&=65535;o[15]=s[15]-32767-(o[14]>>16&1),i=o[15]>>16&1,o[14]&=65535,w(s,o,1-i)}for(n=0;n<16;n++)t[2*n]=255&s[n],t[2*n+1]=s[n]>>8}function S(t,e){var n=new Uint8Array(32),r=new Uint8Array(32);return _(n,t),_(r,e),o(n,0,r,0)}function k(t){var e=new Uint8Array(32);return _(e,t),1&e[0]}function T(t,e){var n;for(n=0;n<16;n++)t[n]=e[2*n]+(e[2*n+1]<<8);t[15]&=32767}function A(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]+n[r]}function E(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]-n[r]}function x(t,e,n){var r,i,o=0,s=0,a=0,u=0,c=0,h=0,f=0,l=0,p=0,d=0,y=0,g=0,v=0,b=0,m=0,w=0,_=0,S=0,k=0,T=0,A=0,E=0,x=0,C=0,P=0,R=0,O=0,M=0,U=0,L=0,B=0,I=n[0],N=n[1],D=n[2],j=n[3],Y=n[4],z=n[5],H=n[6],q=n[7],F=n[8],J=n[9],X=n[10],K=n[11],G=n[12],W=n[13],V=n[14],Z=n[15];r=e[0],o+=r*I,s+=r*N,a+=r*D,u+=r*j,c+=r*Y,h+=r*z,f+=r*H,l+=r*q,p+=r*F,d+=r*J,y+=r*X,g+=r*K,v+=r*G,b+=r*W,m+=r*V,w+=r*Z,r=e[1],s+=r*I,a+=r*N,u+=r*D,c+=r*j,h+=r*Y,f+=r*z,l+=r*H,p+=r*q,d+=r*F,y+=r*J,g+=r*X,v+=r*K,b+=r*G,m+=r*W,w+=r*V,_+=r*Z,r=e[2],a+=r*I,u+=r*N,c+=r*D,h+=r*j,f+=r*Y,l+=r*z,p+=r*H,d+=r*q,y+=r*F,g+=r*J,v+=r*X,b+=r*K,m+=r*G,w+=r*W,_+=r*V,S+=r*Z,r=e[3],u+=r*I,c+=r*N,h+=r*D,f+=r*j,l+=r*Y,p+=r*z,d+=r*H,y+=r*q,g+=r*F,v+=r*J,b+=r*X,m+=r*K,w+=r*G,_+=r*W,S+=r*V,k+=r*Z,r=e[4],c+=r*I,h+=r*N,f+=r*D,l+=r*j,p+=r*Y,d+=r*z,y+=r*H,g+=r*q,v+=r*F,b+=r*J,m+=r*X,w+=r*K,_+=r*G,S+=r*W,k+=r*V,T+=r*Z,r=e[5],h+=r*I,f+=r*N,l+=r*D,p+=r*j,d+=r*Y,y+=r*z,g+=r*H,v+=r*q,b+=r*F,m+=r*J,w+=r*X,_+=r*K,S+=r*G,k+=r*W,T+=r*V,A+=r*Z,r=e[6],f+=r*I,l+=r*N,p+=r*D,d+=r*j,y+=r*Y,g+=r*z,v+=r*H,b+=r*q,m+=r*F,w+=r*J,_+=r*X,S+=r*K,k+=r*G,T+=r*W,A+=r*V,E+=r*Z,r=e[7],l+=r*I,p+=r*N,d+=r*D,y+=r*j,g+=r*Y,v+=r*z,b+=r*H,m+=r*q,w+=r*F,_+=r*J,S+=r*X,k+=r*K,T+=r*G,A+=r*W,E+=r*V,x+=r*Z,r=e[8],p+=r*I,d+=r*N,y+=r*D,g+=r*j,v+=r*Y,b+=r*z,m+=r*H,w+=r*q,_+=r*F,S+=r*J,k+=r*X,T+=r*K,A+=r*G,E+=r*W,x+=r*V,C+=r*Z,r=e[9],d+=r*I,y+=r*N,g+=r*D,v+=r*j,b+=r*Y,m+=r*z,w+=r*H,_+=r*q,S+=r*F,k+=r*J,T+=r*X,A+=r*K,E+=r*G,x+=r*W,C+=r*V,P+=r*Z,r=e[10],y+=r*I,g+=r*N,v+=r*D,b+=r*j,m+=r*Y,w+=r*z,_+=r*H,S+=r*q,k+=r*F,T+=r*J,A+=r*X,E+=r*K,x+=r*G,C+=r*W,P+=r*V,R+=r*Z,r=e[11],g+=r*I,v+=r*N,b+=r*D,m+=r*j,w+=r*Y,_+=r*z,S+=r*H,k+=r*q,T+=r*F,A+=r*J,E+=r*X,x+=r*K;C+=r*G;P+=r*W,R+=r*V,O+=r*Z,r=e[12],v+=r*I,b+=r*N,m+=r*D,w+=r*j,_+=r*Y,S+=r*z,k+=r*H,T+=r*q,A+=r*F,E+=r*J,x+=r*X,C+=r*K,P+=r*G,R+=r*W,O+=r*V,M+=r*Z,r=e[13],b+=r*I,m+=r*N,w+=r*D,_+=r*j,S+=r*Y,k+=r*z,
T+=r*H,A+=r*q,E+=r*F,x+=r*J,C+=r*X,P+=r*K,R+=r*G,O+=r*W,M+=r*V,U+=r*Z,r=e[14],m+=r*I,w+=r*N,_+=r*D,S+=r*j,k+=r*Y,T+=r*z,A+=r*H,E+=r*q,x+=r*F,C+=r*J,P+=r*X,R+=r*K,O+=r*G,M+=r*W,U+=r*V,L+=r*Z,r=e[15],w+=r*I,_+=r*N,S+=r*D,k+=r*j,T+=r*Y,A+=r*z,E+=r*H,x+=r*q,C+=r*F,P+=r*J,R+=r*X,O+=r*K,M+=r*G,U+=r*W,L+=r*V,B+=r*Z,o+=38*_,s+=38*S,a+=38*k,u+=38*T,c+=38*A,h+=38*E,f+=38*x,l+=38*C,p+=38*P,d+=38*R,y+=38*O,g+=38*M,v+=38*U,b+=38*L,m+=38*B,i=1,r=o+i+65535,i=Math.floor(r/65536),o=r-65536*i,r=s+i+65535,i=Math.floor(r/65536),s=r-65536*i,r=a+i+65535,i=Math.floor(r/65536),a=r-65536*i,r=u+i+65535,i=Math.floor(r/65536),u=r-65536*i,r=c+i+65535,i=Math.floor(r/65536),c=r-65536*i,r=h+i+65535,i=Math.floor(r/65536),h=r-65536*i,r=f+i+65535,i=Math.floor(r/65536),f=r-65536*i,r=l+i+65535,i=Math.floor(r/65536),l=r-65536*i,r=p+i+65535,i=Math.floor(r/65536),p=r-65536*i,r=d+i+65535,i=Math.floor(r/65536),d=r-65536*i,r=y+i+65535,i=Math.floor(r/65536),y=r-65536*i,r=g+i+65535,i=Math.floor(r/65536),g=r-65536*i,r=v+i+65535,i=Math.floor(r/65536),v=r-65536*i,r=b+i+65535,i=Math.floor(r/65536),b=r-65536*i,r=m+i+65535,i=Math.floor(r/65536),m=r-65536*i,r=w+i+65535,i=Math.floor(r/65536),w=r-65536*i,o+=i-1+37*(i-1),i=1,r=o+i+65535,i=Math.floor(r/65536),o=r-65536*i,r=s+i+65535,i=Math.floor(r/65536),s=r-65536*i,r=a+i+65535,i=Math.floor(r/65536),a=r-65536*i,r=u+i+65535,i=Math.floor(r/65536),u=r-65536*i,r=c+i+65535,i=Math.floor(r/65536),c=r-65536*i,r=h+i+65535,i=Math.floor(r/65536),h=r-65536*i,r=f+i+65535,i=Math.floor(r/65536),f=r-65536*i,r=l+i+65535,i=Math.floor(r/65536),l=r-65536*i,r=p+i+65535,i=Math.floor(r/65536),p=r-65536*i,r=d+i+65535,i=Math.floor(r/65536),d=r-65536*i,r=y+i+65535,i=Math.floor(r/65536),y=r-65536*i,r=g+i+65535,i=Math.floor(r/65536),g=r-65536*i,r=v+i+65535,i=Math.floor(r/65536),v=r-65536*i,r=b+i+65535,i=Math.floor(r/65536),b=r-65536*i,r=m+i+65535,i=Math.floor(r/65536),m=r-65536*i,r=w+i+65535,i=Math.floor(r/65536),w=r-65536*i,o+=i-1+37*(i-1),t[0]=o,t[1]=s,t[2]=a,t[3]=u,t[4]=c,t[5]=h,t[6]=f,t[7]=l,t[8]=p,t[9]=d,t[10]=y,t[11]=g,t[12]=v,t[13]=b;t[14]=m;t[15]=w}function C(t,e){x(t,e,e)}function P(t,e){var n,r=tt();for(n=0;n<16;n++)r[n]=e[n];for(n=253;n>=0;n--)C(r,r),2!==n&&4!==n&&x(r,r,e);for(n=0;n<16;n++)t[n]=r[n]}function R(t,e){var n,r=tt();for(n=0;n<16;n++)r[n]=e[n];for(n=250;n>=0;n--)C(r,r),1!==n&&x(r,r,e);for(n=0;n<16;n++)t[n]=r[n]}function O(t,e,n){var r,i,o=new Uint8Array(32),s=new Float64Array(80),a=tt(),u=tt(),c=tt(),h=tt(),f=tt(),l=tt();for(i=0;i<31;i++)o[i]=e[i];for(o[31]=127&e[31]|64,o[0]&=248,T(s,n),i=0;i<16;i++)u[i]=s[i],h[i]=a[i]=c[i]=0;for(a[0]=h[0]=1,i=254;i>=0;--i)r=o[i>>>3]>>>(7&i)&1,w(a,u,r),w(c,h,r),A(f,a,c),E(a,a,c),A(c,u,h),E(u,u,h),C(h,f),C(l,a),x(a,c,a),x(c,u,f),A(f,a,c),E(a,a,c),C(u,a),E(c,h,l),x(a,c,st),A(a,a,h),x(c,c,a),x(a,h,l),x(h,u,s),C(u,f),w(a,u,r),w(c,h,r);for(i=0;i<16;i++)s[i+16]=a[i],s[i+32]=c[i],s[i+48]=u[i],s[i+64]=h[i];var p=s.subarray(32),d=s.subarray(16);return P(p,p),x(d,d,p),_(t,d),0}function M(t,e){return O(t,e,rt)}function U(t,e){return et(e,32),M(t,e)}function L(t,e,n){var r=new Uint8Array(32);return O(r,n,e),c(t,nt,r,lt)}function B(t,e,n,r,i,o){var s=new Uint8Array(32);return L(s,i,o),dt(t,e,n,r,s)}function I(t,e,n,r,i,o){var s=new Uint8Array(32);return L(s,i,o),yt(t,e,n,r,s)}function N(t,e,n,r){for(var i,o,s,a,u,c,h,f,l,p,d,y,g,v,b,m,w,_,S,k,T,A,E,x,C,P,R=new Int32Array(16),O=new Int32Array(16),M=t[0],U=t[1],L=t[2],B=t[3],I=t[4],N=t[5],D=t[6],j=t[7],Y=e[0],z=e[1],H=e[2],q=e[3],F=e[4],J=e[5],X=e[6],K=e[7],G=0;r>=128;){for(S=0;S<16;S++)k=8*S+G,R[S]=n[k+0]<<24|n[k+1]<<16|n[k+2]<<8|n[k+3],O[S]=n[k+4]<<24|n[k+5]<<16|n[k+6]<<8|n[k+7];for(S=0;S<80;S++)if(i=M,o=U,s=L,a=B,u=I,c=N,h=D,f=j,l=Y,p=z,d=H,y=q,g=F,v=J,b=X,m=K,T=j,A=K,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=(I>>>14|F<<18)^(I>>>18|F<<14)^(F>>>9|I<<23),A=(F>>>14|I<<18)^(F>>>18|I<<14)^(I>>>9|F<<23),E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,T=I&N^~I&D,A=F&J^~F&X,E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,T=gt[2*S],A=gt[2*S+1],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,T=R[S%16],A=O[S%16],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,w=65535&C|P<<16,_=65535&E|x<<16,T=w,A=_,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=(M>>>28|Y<<4)^(Y>>>2|M<<30)^(Y>>>7|M<<25),A=(Y>>>28|M<<4)^(M>>>2|Y<<30)^(M>>>7|Y<<25),E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,T=M&U^M&L^U&L,A=Y&z^Y&H^z&H,E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,f=65535&C|P<<16,m=65535&E|x<<16,T=a,A=y,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=w,A=_,E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,a=65535&C|P<<16,y=65535&E|x<<16,U=i,L=o,B=s,I=a,N=u,D=c,j=h,M=f,z=l,H=p,q=d,F=y,J=g,X=v,K=b,Y=m,S%16===15)for(k=0;k<16;k++)T=R[k],A=O[k],E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=R[(k+9)%16],A=O[(k+9)%16],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,w=R[(k+1)%16],_=O[(k+1)%16],T=(w>>>1|_<<31)^(w>>>8|_<<24)^w>>>7,A=(_>>>1|w<<31)^(_>>>8|w<<24)^(_>>>7|w<<25),E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,w=R[(k+14)%16],_=O[(k+14)%16],T=(w>>>19|_<<13)^(_>>>29|w<<3)^w>>>6,A=(_>>>19|w<<13)^(w>>>29|_<<3)^(_>>>6|w<<26),E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,R[k]=65535&C|P<<16,O[k]=65535&E|x<<16;T=M,A=Y,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[0],A=e[0],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[0]=M=65535&C|P<<16,e[0]=Y=65535&E|x<<16,T=U,A=z,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[1],A=e[1],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[1]=U=65535&C|P<<16,e[1]=z=65535&E|x<<16,T=L,A=H,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[2],A=e[2],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[2]=L=65535&C|P<<16,e[2]=H=65535&E|x<<16,T=B,A=q,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[3],A=e[3],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[3]=B=65535&C|P<<16,e[3]=q=65535&E|x<<16,T=I,A=F,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[4],A=e[4],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[4]=I=65535&C|P<<16,e[4]=F=65535&E|x<<16,T=N,A=J,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[5],A=e[5],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[5]=N=65535&C|P<<16,e[5]=J=65535&E|x<<16,T=D,A=X,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[6],A=e[6],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[6]=D=65535&C|P<<16,e[6]=X=65535&E|x<<16,T=j,A=K,E=65535&A,x=A>>>16,C=65535&T,P=T>>>16,T=t[7],A=e[7],E+=65535&A,x+=A>>>16,C+=65535&T,P+=T>>>16,x+=E>>>16,C+=x>>>16,P+=C>>>16,t[7]=j=65535&C|P<<16,e[7]=K=65535&E|x<<16,G+=128,r-=128}return r}function D(t,n,r){var i,o=new Int32Array(8),s=new Int32Array(8),a=new Uint8Array(256),u=r;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,s[0]=4089235720,s[1]=2227873595,s[2]=4271175723,s[3]=1595750129,s[4]=2917565137,s[5]=725511199,s[6]=4215389547,s[7]=327033209,N(o,s,n,r),r%=128,i=0;i<r;i++)a[i]=n[u-r+i];for(a[r]=128,r=256-128*(r<112?1:0),a[r-9]=0,e(a,r-8,u/536870912|0,u<<3),N(o,s,a,r),i=0;i<8;i++)e(t,8*i,o[i],s[i]);return 0}function j(t,e){var n=tt(),r=tt(),i=tt(),o=tt(),s=tt(),a=tt(),u=tt(),c=tt(),h=tt();E(n,t[1],t[0]),E(h,e[1],e[0]),x(n,n,h),A(r,t[0],t[1]),A(h,e[0],e[1]),x(r,r,h),x(i,t[3],e[3]),x(i,i,ut),x(o,t[2],e[2]),A(o,o,o),E(s,r,n),E(a,o,i),A(u,o,i),A(c,r,n),x(t[0],s,a),x(t[1],c,u),x(t[2],u,a),x(t[3],s,c)}function Y(t,e,n){var r;for(r=0;r<4;r++)w(t[r],e[r],n)}function z(t,e){var n=tt(),r=tt(),i=tt();P(i,e[2]),x(n,e[0],i),x(r,e[1],i),_(t,r),t[31]^=k(n)<<7}function H(t,e,n){var r,i;for(b(t[0],it),b(t[1],ot),b(t[2],ot),b(t[3],it),i=255;i>=0;--i)r=n[i/8|0]>>(7&i)&1,Y(t,e,r),j(e,t),j(t,t),Y(t,e,r)}function q(t,e){var n=[tt(),tt(),tt(),tt()];b(n[0],ct),b(n[1],ht),b(n[2],ot),x(n[3],ct,ht),H(t,n,e)}function F(t,e,n){var r,i=new Uint8Array(64),o=[tt(),tt(),tt(),tt()];for(n||et(e,32),D(i,e,32),i[0]&=248,i[31]&=127,i[31]|=64,q(o,i),z(t,o),r=0;r<32;r++)e[r+32]=t[r];return 0}function J(t,e){var n,r,i,o;for(r=63;r>=32;--r){for(n=0,i=r-32,o=r-12;i<o;++i)e[i]+=n-16*e[r]*vt[i-(r-32)],n=e[i]+128>>8,e[i]-=256*n;e[i]+=n,e[r]=0}for(n=0,i=0;i<32;i++)e[i]+=n-(e[31]>>4)*vt[i],n=e[i]>>8,e[i]&=255;for(i=0;i<32;i++)e[i]-=n*vt[i];for(r=0;r<32;r++)e[r+1]+=e[r]>>8,t[r]=255&e[r]}function X(t){var e,n=new Float64Array(64);for(e=0;e<64;e++)n[e]=t[e];for(e=0;e<64;e++)t[e]=0;J(t,n)}function K(t,e,n,r){var i,o,s=new Uint8Array(64),a=new Uint8Array(64),u=new Uint8Array(64),c=new Float64Array(64),h=[tt(),tt(),tt(),tt()];D(s,r,32),s[0]&=248,s[31]&=127,s[31]|=64;var f=n+64;for(i=0;i<n;i++)t[64+i]=e[i];for(i=0;i<32;i++)t[32+i]=s[32+i];for(D(u,t.subarray(32),n+32),X(u),q(h,u),z(t,h),i=32;i<64;i++)t[i]=r[i];for(D(a,t,n+64),X(a),i=0;i<64;i++)c[i]=0;for(i=0;i<32;i++)c[i]=u[i];for(i=0;i<32;i++)for(o=0;o<32;o++)c[i+o]+=a[i]*s[o];return J(t.subarray(32),c),f}function G(t,e){var n=tt(),r=tt(),i=tt(),o=tt(),s=tt(),a=tt(),u=tt();return b(t[2],ot),T(t[1],e),C(i,t[1]),x(o,i,at),E(i,i,t[2]),A(o,t[2],o),C(s,o),C(a,s),x(u,a,s),x(n,u,i),x(n,n,o),R(n,n),x(n,n,i),x(n,n,o),x(n,n,o),x(t[0],n,o),C(r,t[0]),x(r,r,o),S(r,i)&&x(t[0],t[0],ft),C(r,t[0]),x(r,r,o),S(r,i)?-1:(k(t[0])===e[31]>>7&&E(t[0],it,t[0]),x(t[3],t[0],t[1]),0)}function W(t,e,n,r){var i,s,a=new Uint8Array(32),u=new Uint8Array(64),c=[tt(),tt(),tt(),tt()],h=[tt(),tt(),tt(),tt()];if(s=-1,n<64)return-1;if(G(h,r))return-1;for(i=0;i<n;i++)t[i]=e[i];for(i=0;i<32;i++)t[i+32]=r[i];if(D(u,t,n),X(u),H(c,h,u),q(h,e.subarray(32)),j(c,h),z(a,c),n-=64,o(e,0,a,0)){for(i=0;i<n;i++)t[i]=0;return-1}for(i=0;i<n;i++)t[i]=e[i+64];return s=n}function V(t,e){if(t.length!==bt)throw new Error("bad key size");if(e.length!==mt)throw new Error("bad nonce size")}function Z(t,e){if(t.length!==Tt)throw new Error("bad public key size");if(e.length!==At)throw new Error("bad secret key size")}function Q(){for(var t=0;t<arguments.length;t++)if(!(arguments[t]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function $(t){for(var e=0;e<t.length;e++)t[e]=0}var tt=function(t){var e,n=new Float64Array(16);if(t)for(e=0;e<t.length;e++)n[e]=t[e];return n},et=function(){throw new Error("no PRNG")},nt=new Uint8Array(16),rt=new Uint8Array(32);rt[0]=9;var it=tt(),ot=tt([1]),st=tt([56129,1]),at=tt([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),ut=tt([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),ct=tt([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),ht=tt([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),ft=tt([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]),lt=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]),pt=function(t){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var e,n,r,i,o,s,a,u;e=255&t[0]|(255&t[1])<<8,this.r[0]=8191&e,n=255&t[2]|(255&t[3])<<8,this.r[1]=8191&(e>>>13|n<<3),r=255&t[4]|(255&t[5])<<8,this.r[2]=7939&(n>>>10|r<<6),i=255&t[6]|(255&t[7])<<8,this.r[3]=8191&(r>>>7|i<<9),o=255&t[8]|(255&t[9])<<8,this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,s=255&t[10]|(255&t[11])<<8,this.r[6]=8191&(o>>>14|s<<2),a=255&t[12]|(255&t[13])<<8,this.r[7]=8065&(s>>>11|a<<5),u=255&t[14]|(255&t[15])<<8,this.r[8]=8191&(a>>>8|u<<8),this.r[9]=u>>>5&127,this.pad[0]=255&t[16]|(255&t[17])<<8,this.pad[1]=255&t[18]|(255&t[19])<<8,this.pad[2]=255&t[20]|(255&t[21])<<8,this.pad[3]=255&t[22]|(255&t[23])<<8,this.pad[4]=255&t[24]|(255&t[25])<<8,this.pad[5]=255&t[26]|(255&t[27])<<8,this.pad[6]=255&t[28]|(255&t[29])<<8,this.pad[7]=255&t[30]|(255&t[31])<<8};pt.prototype.blocks=function(t,e,n){for(var r,i,o,s,a,u,c,h,f,l,p,d,y,g,v,b,m,w,_,S=this.fin?0:2048,k=this.h[0],T=this.h[1],A=this.h[2],E=this.h[3],x=this.h[4],C=this.h[5],P=this.h[6],R=this.h[7],O=this.h[8],M=this.h[9],U=this.r[0],L=this.r[1],B=this.r[2],I=this.r[3],N=this.r[4],D=this.r[5],j=this.r[6],Y=this.r[7],z=this.r[8],H=this.r[9];n>=16;)r=255&t[e+0]|(255&t[e+1])<<8,k+=8191&r,i=255&t[e+2]|(255&t[e+3])<<8,T+=8191&(r>>>13|i<<3),o=255&t[e+4]|(255&t[e+5])<<8,A+=8191&(i>>>10|o<<6),s=255&t[e+6]|(255&t[e+7])<<8,E+=8191&(o>>>7|s<<9),a=255&t[e+8]|(255&t[e+9])<<8,x+=8191&(s>>>4|a<<12),C+=a>>>1&8191,u=255&t[e+10]|(255&t[e+11])<<8,P+=8191&(a>>>14|u<<2),c=255&t[e+12]|(255&t[e+13])<<8,R+=8191&(u>>>11|c<<5),h=255&t[e+14]|(255&t[e+15])<<8,O+=8191&(c>>>8|h<<8),M+=h>>>5|S,f=0,l=f,l+=k*U,l+=T*(5*H),l+=A*(5*z),l+=E*(5*Y),l+=x*(5*j),f=l>>>13,l&=8191,l+=C*(5*D),l+=P*(5*N),l+=R*(5*I),l+=O*(5*B),l+=M*(5*L),f+=l>>>13,l&=8191,p=f,p+=k*L,p+=T*U,p+=A*(5*H),p+=E*(5*z),p+=x*(5*Y),f=p>>>13,p&=8191,p+=C*(5*j),p+=P*(5*D),p+=R*(5*N),p+=O*(5*I),p+=M*(5*B),f+=p>>>13,p&=8191,d=f,d+=k*B,d+=T*L,d+=A*U,d+=E*(5*H),d+=x*(5*z),f=d>>>13,d&=8191,d+=C*(5*Y),d+=P*(5*j),d+=R*(5*D),d+=O*(5*N),d+=M*(5*I),f+=d>>>13,d&=8191,y=f,y+=k*I,y+=T*B,y+=A*L,y+=E*U,y+=x*(5*H),f=y>>>13,y&=8191,y+=C*(5*z),y+=P*(5*Y),y+=R*(5*j),y+=O*(5*D),y+=M*(5*N),f+=y>>>13,y&=8191,g=f,g+=k*N,g+=T*I,g+=A*B,g+=E*L,g+=x*U,f=g>>>13,g&=8191,g+=C*(5*H),g+=P*(5*z),g+=R*(5*Y),g+=O*(5*j),g+=M*(5*D),f+=g>>>13,g&=8191,v=f,v+=k*D,v+=T*N,v+=A*I,v+=E*B,v+=x*L,f=v>>>13,v&=8191,v+=C*U,v+=P*(5*H),v+=R*(5*z),v+=O*(5*Y),v+=M*(5*j),f+=v>>>13,v&=8191,b=f,b+=k*j,b+=T*D,b+=A*N,b+=E*I,b+=x*B,f=b>>>13,b&=8191,b+=C*L,b+=P*U,b+=R*(5*H),b+=O*(5*z),b+=M*(5*Y),f+=b>>>13,b&=8191,m=f,m+=k*Y,m+=T*j,m+=A*D,m+=E*N,m+=x*I,f=m>>>13,m&=8191,m+=C*B,m+=P*L,m+=R*U,m+=O*(5*H),m+=M*(5*z),f+=m>>>13,m&=8191,w=f,w+=k*z,w+=T*Y,w+=A*j,w+=E*D,w+=x*N,f=w>>>13,w&=8191,w+=C*I,w+=P*B,w+=R*L,w+=O*U,w+=M*(5*H),f+=w>>>13,w&=8191,_=f,_+=k*H,_+=T*z,_+=A*Y,_+=E*j,_+=x*D,f=_>>>13,_&=8191,_+=C*N,_+=P*I,_+=R*B,_+=O*L,_+=M*U,f+=_>>>13,_&=8191,f=(f<<2)+f|0,f=f+l|0,l=8191&f,f>>>=13,p+=f,k=l,T=p,A=d,E=y,x=g,C=v,P=b,R=m,O=w,M=_,e+=16,n-=16;this.h[0]=k,this.h[1]=T,this.h[2]=A,this.h[3]=E,this.h[4]=x,this.h[5]=C,this.h[6]=P,this.h[7]=R,this.h[8]=O,this.h[9]=M},pt.prototype.finish=function(t,e){var n,r,i,o,s=new Uint16Array(10);if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=n,n=this.h[o]>>>13,this.h[o]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,s[0]=this.h[0]+5,n=s[0]>>>13,s[0]&=8191,o=1;o<10;o++)s[o]=this.h[o]+n,n=s[o]>>>13,s[o]&=8191;for(s[9]-=8192,r=(1^n)-1,o=0;o<10;o++)s[o]&=r;for(r=~r,o=0;o<10;o++)this.h[o]=this.h[o]&r|s[o];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,o=1;o<8;o++)i=(this.h[o]+this.pad[o]|0)+(i>>>16)|0,this.h[o]=65535&i;t[e+0]=this.h[0]>>>0&255,t[e+1]=this.h[0]>>>8&255,t[e+2]=this.h[1]>>>0&255,t[e+3]=this.h[1]>>>8&255,t[e+4]=this.h[2]>>>0&255,t[e+5]=this.h[2]>>>8&255,t[e+6]=this.h[3]>>>0&255,t[e+7]=this.h[3]>>>8&255,t[e+8]=this.h[4]>>>0&255,t[e+9]=this.h[4]>>>8&255,t[e+10]=this.h[5]>>>0&255,t[e+11]=this.h[5]>>>8&255,t[e+12]=this.h[6]>>>0&255,t[e+13]=this.h[6]>>>8&255,t[e+14]=this.h[7]>>>0&255,t[e+15]=this.h[7]>>>8&255},pt.prototype.update=function(t,e,n){var r,i;if(this.leftover){for(i=16-this.leftover,i>n&&(i=n),r=0;r<i;r++)this.buffer[this.leftover+r]=t[e+r];if(n-=i,e+=i,this.leftover+=i,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(i=n-n%16,this.blocks(t,e,i),e+=i,n-=i),n){for(r=0;r<n;r++)this.buffer[this.leftover+r]=t[e+r];this.leftover+=n}};var dt=g,yt=v,gt=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],vt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),bt=32,mt=24,wt=32,_t=16,St=32,kt=32,Tt=32,At=32,Et=32,xt=mt,Ct=wt,Pt=_t,Rt=64,Ot=32,Mt=64,Ut=32,Lt=64;t.lowlevel={crypto_core_hsalsa20:c,crypto_stream_xor:p,crypto_stream:l,crypto_stream_salsa20_xor:h,crypto_stream_salsa20:f,crypto_onetimeauth:d,crypto_onetimeauth_verify:y,crypto_verify_16:i,crypto_verify_32:o,crypto_secretbox:g,crypto_secretbox_open:v,crypto_scalarmult:O,crypto_scalarmult_base:M,crypto_box_beforenm:L,crypto_box_afternm:dt,crypto_box:B,crypto_box_open:I,crypto_box_keypair:U,crypto_hash:D,crypto_sign:K,crypto_sign_keypair:F,crypto_sign_open:W,crypto_secretbox_KEYBYTES:bt,crypto_secretbox_NONCEBYTES:mt,crypto_secretbox_ZEROBYTES:wt,crypto_secretbox_BOXZEROBYTES:_t,crypto_scalarmult_BYTES:St,crypto_scalarmult_SCALARBYTES:kt,crypto_box_PUBLICKEYBYTES:Tt,crypto_box_SECRETKEYBYTES:At,crypto_box_BEFORENMBYTES:Et,crypto_box_NONCEBYTES:xt,crypto_box_ZEROBYTES:Ct,crypto_box_BOXZEROBYTES:Pt,crypto_sign_BYTES:Rt,crypto_sign_PUBLICKEYBYTES:Ot,crypto_sign_SECRETKEYBYTES:Mt,crypto_sign_SEEDBYTES:Ut,crypto_hash_BYTES:Lt},t.randomBytes=function(t){var e=new Uint8Array(t);return et(e,t),e},t.secretbox=function(t,e,n){Q(t,e,n),V(n,e);for(var r=new Uint8Array(wt+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+wt]=t[o];return g(i,r,r.length,e,n),i.subarray(_t)},t.secretbox.open=function(t,e,n){Q(t,e,n),V(n,e);for(var r=new Uint8Array(_t+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+_t]=t[o];return r.length<32?null:0!==v(i,r,r.length,e,n)?null:i.subarray(wt)},t.secretbox.keyLength=bt,t.secretbox.nonceLength=mt,t.secretbox.overheadLength=_t,t.scalarMult=function(t,e){if(Q(t,e),t.length!==kt)throw new Error("bad n size");if(e.length!==St)throw new Error("bad p size");var n=new Uint8Array(St);return O(n,t,e),n},t.scalarMult.base=function(t){if(Q(t),t.length!==kt)throw new Error("bad n size");var e=new Uint8Array(St);return M(e,t),e},t.scalarMult.scalarLength=kt,t.scalarMult.groupElementLength=St,t.box=function(e,n,r,i){var o=t.box.before(r,i);return t.secretbox(e,n,o)},t.box.before=function(t,e){Q(t,e),Z(t,e);var n=new Uint8Array(Et);return L(n,t,e),n},t.box.after=t.secretbox,t.box.open=function(e,n,r,i){var o=t.box.before(r,i);return t.secretbox.open(e,n,o)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var t=new Uint8Array(Tt),e=new Uint8Array(At);return U(t,e),{publicKey:t,secretKey:e}},t.box.keyPair.fromSecretKey=function(t){if(Q(t),t.length!==At)throw new Error("bad secret key size");var e=new Uint8Array(Tt);return M(e,t),{publicKey:e,secretKey:new Uint8Array(t)}},t.box.publicKeyLength=Tt,t.box.secretKeyLength=At,t.box.sharedKeyLength=Et,t.box.nonceLength=xt,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(t,e){if(Q(t,e),e.length!==Mt)throw new Error("bad secret key size");var n=new Uint8Array(Rt+t.length);return K(n,t,t.length,e),n},t.sign.open=function(t,e){if(Q(t,e),e.length!==Ot)throw new Error("bad public key size");var n=new Uint8Array(t.length),r=W(n,t,t.length,e);if(r<0)return null;for(var i=new Uint8Array(r),o=0;o<i.length;o++)i[o]=n[o];return i},t.sign.detached=function(e,n){for(var r=t.sign(e,n),i=new Uint8Array(Rt),o=0;o<i.length;o++)i[o]=r[o];return i},t.sign.detached.verify=function(t,e,n){if(Q(t,e,n),e.length!==Rt)throw new Error("bad signature size");if(n.length!==Ot)throw new Error("bad public key size");var r,i=new Uint8Array(Rt+t.length),o=new Uint8Array(Rt+t.length);for(r=0;r<Rt;r++)i[r]=e[r];for(r=0;r<t.length;r++)i[r+Rt]=t[r];return W(o,i,i.length,n)>=0},t.sign.keyPair=function(){var t=new Uint8Array(Ot),e=new Uint8Array(Mt);return F(t,e),{publicKey:t,secretKey:e}},t.sign.keyPair.fromSecretKey=function(t){if(Q(t),t.length!==Mt)throw new Error("bad secret key size");for(var e=new Uint8Array(Ot),n=0;n<e.length;n++)e[n]=t[32+n];return{publicKey:e,secretKey:new Uint8Array(t)}},t.sign.keyPair.fromSeed=function(t){if(Q(t),t.length!==Ut)throw new Error("bad seed size");for(var e=new Uint8Array(Ot),n=new Uint8Array(Mt),r=0;r<32;r++)n[r]=t[r];return F(e,n,!0),{publicKey:e,secretKey:n}},t.sign.publicKeyLength=Ot,t.sign.secretKeyLength=Mt,t.sign.seedLength=Ut,t.sign.signatureLength=Rt,t.hash=function(t){Q(t);var e=new Uint8Array(Lt);return D(e,t,t.length),e},t.hash.hashLength=Lt,t.verify=function(t,e){return Q(t,e),0!==t.length&&0!==e.length&&(t.length===e.length&&0===r(t,0,e,0,t.length))},t.setPRNG=function(t){et=t},function(){var e="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(e&&e.getRandomValues){var r=65536;t.setPRNG(function(t,n){var i,o=new Uint8Array(n);for(i=0;i<n;i+=r)e.getRandomValues(o.subarray(i,i+Math.min(n-i,r)));for(i=0;i<n;i++)t[i]=o[i];$(o)})}else e=n(56),e&&e.randomBytes&&t.setPRNG(function(t,n){var r,i=e.randomBytes(n);for(r=0;r<n;r++)t[r]=i[r];$(i)})}()}("undefined"!=typeof t&&t.exports?t.exports:self.nacl=self.nacl||{})},function(t,e){},function(t,e,n){(function(e){!function(e,n){"use strict";"undefined"!=typeof t&&t.exports?t.exports=n():e.nacl?e.nacl.util=n():(e.nacl={},e.nacl.util=n())}(this,function(){"use strict";function t(t){if(!/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(t))throw new TypeError("invalid encoding")}var n={};return n.decodeUTF8=function(t){if("string"!=typeof t)throw new TypeError("expected string");var e,n=unescape(encodeURIComponent(t)),r=new Uint8Array(n.length);for(e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r},n.encodeUTF8=function(t){var e,n=[];for(e=0;e<t.length;e++)n.push(String.fromCharCode(t[e]));return decodeURIComponent(escape(n.join("")))},"undefined"==typeof atob?"undefined"!=typeof e.from?(n.encodeBase64=function(t){return e.from(t).toString("base64")},n.decodeBase64=function(n){return t(n),new Uint8Array(Array.prototype.slice.call(e.from(n,"base64"),0))}):(n.encodeBase64=function(t){return new e(t).toString("base64")},n.decodeBase64=function(n){return t(n),new Uint8Array(Array.prototype.slice.call(new e(n,"base64"),0))}):(n.encodeBase64=function(t){var e,n=[],r=t.length;for(e=0;e<r;e++)n.push(String.fromCharCode(t[e]));return btoa(n.join(""))},n.decodeBase64=function(e){t(e);var n,r=atob(e),i=new Uint8Array(r.length);for(n=0;n<r.length;n++)i[n]=r.charCodeAt(n);return i}),n})}).call(e,n(58).Buffer)},function(t,e,n){/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
"use strict";function r(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(i()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,n){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return a(this,t,e,n)}function a(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?p(t,e,n,r):"string"==typeof e?f(t,e,n):d(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e,n,r){return u(e),e<=0?o(t,e):void 0!==n?"string"==typeof r?o(t,e).fill(n,r):o(t,e).fill(n):o(t,e)}function h(t,e){if(u(e),t=o(t,e<0?0:0|y(e)),!s.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function f(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!s.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|v(e,n);t=o(t,r);var i=t.write(e,n);return i!==r&&(t=t.slice(0,i)),t}function l(t,e){var n=e.length<0?0:0|y(e.length);t=o(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function p(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=l(t,e),t}function d(t,e){if(s.isBuffer(e)){var n=0|y(e.length);return t=o(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||V(e.length)?o(t,0):l(t,e);if("Buffer"===e.type&&$(e.data))return l(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function y(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),s.alloc(+t)}function v(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return J(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return G(t).length;default:if(r)return J(t).length;e=(""+e).toLowerCase(),r=!0}}function b(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,e,n);case"utf8":case"utf-8":return P(this,e,n);case"ascii":return O(this,e,n);case"latin1":case"binary":return M(this,e,n);case"base64":return C(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function m(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function w(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=s.from(e,r)),s.isBuffer(e))return 0===e.length?-1:_(t,e,n,r,i);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):_(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function _(t,e,n,r,i){function o(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,a=t.length,u=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,n/=2}var c;if(i){var h=-1;for(c=n;c<a;c++)if(o(t,c)===o(e,h===-1?0:c-h)){if(h===-1&&(h=c),c-h+1===u)return h*s}else h!==-1&&(c-=c-h),h=-1}else for(n+u>a&&(n=a-u),c=n;c>=0;c--){for(var f=!0,l=0;l<u;l++)if(o(t,c+l)!==o(e,l)){f=!1;break}if(f)return c}return-1}function S(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function k(t,e,n,r){return W(J(e,t.length-n),t,n,r)}function T(t,e,n,r){return W(X(e),t,n,r)}function A(t,e,n,r){return T(t,e,n,r)}function E(t,e,n,r){return W(G(e),t,n,r)}function x(t,e,n,r){return W(K(e,t.length-n),t,n,r)}function C(t,e,n){return 0===e&&n===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(e,n))}function P(t,e,n){n=Math.min(t.length,n);for(var r=[],i=e;i<n;){var o=t[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=n){var u,c,h,f;switch(a){case 1:o<128&&(s=o);break;case 2:u=t[i+1],128===(192&u)&&(f=(31&o)<<6|63&u,f>127&&(s=f));break;case 3:u=t[i+1],c=t[i+2],128===(192&u)&&128===(192&c)&&(f=(15&o)<<12|(63&u)<<6|63&c,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:u=t[i+1],c=t[i+2],h=t[i+3],128===(192&u)&&128===(192&c)&&128===(192&h)&&(f=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&h,f>65535&&f<1114112&&(s=f))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=a}return R(r)}function R(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=tt));return n}function O(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function M(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function U(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=e;o<n;++o)i+=F(t[o]);return i}function L(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function B(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,n,r,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function N(t,e,n,r){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function D(t,e,n,r){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function j(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Y(t,e,n,r,i){return i||j(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,e,n,r,23,4),n+4}function z(t,e,n,r,i){return i||j(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,e,n,r,52,8),n+8}function H(t){if(t=q(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function q(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return t<16?"0"+t.toString(16):t.toString(16)}function J(t,e){e=e||1/0;for(var n,r=t.length,i=null,o=[],s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function X(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function K(t,e){for(var n,r,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}function G(t){return Z.toByteArray(H(t))}function W(t,e,n,r){for(var i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function V(t){return t!==t}var Z=n(59),Q=n(60),$=n(61);e.Buffer=s,e.SlowBuffer=g,e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==window.TYPED_ARRAY_SUPPORT?window.TYPED_ARRAY_SUPPORT:r(),e.kMaxLength=i(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,n){return a(null,t,e,n)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,n){return c(null,t,e,n)},s.allocUnsafe=function(t){return h(null,t)},s.allocUnsafeSlow=function(t){return h(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!$(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=s.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){var o=t[n];if(!s.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i),i+=o.length}return r},s.byteLength=v,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):b.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,n,r,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;for(var o=i-r,a=n-e,u=Math.min(o,a),c=this.slice(r,i),h=t.slice(e,n),f=0;f<u;++f)if(c[f]!==h[f]){o=c[f],a=h[f];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(t,e,n){return this.indexOf(t,e,n)!==-1},s.prototype.indexOf=function(t,e,n){return w(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return w(this,t,e,n,!1)},s.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return S(this,t,e,n);case"utf8":case"utf-8":return k(this,t,e,n);case"ascii":return T(this,t,e,n);case"latin1":case"binary":return A(this,t,e,n);case"base64":return E(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;s.prototype.slice=function(t,e){var n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t);var r;if(s.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=s.prototype;else{var i=e-t;r=new s(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},s.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r},s.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i;return r},s.prototype.readUInt8=function(t,e){return e||B(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||B(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||B(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||B(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||B(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},s.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},s.prototype.readInt8=function(t,e){return e||B(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){e||B(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){e||B(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return e||B(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||B(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||B(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||B(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||B(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||B(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;I(this,t,e,n,i,0)}var o=1,s=0;for(this[e]=255&t;++s<n&&(o*=256);)this[e+s]=t/o&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;I(this,t,e,n,i,0)}var o=n-1,s=1;for(this[e+o]=255&t;--o>=0&&(s*=256);)this[e+o]=t/s&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):D(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);I(this,t,e,n,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<n&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},s.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);I(this,t,e,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):D(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,n){return Y(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return Y(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return z(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return z(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},s.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0);var o;if("number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{var a=s.isBuffer(t)?t:J(new s(t,r).toString()),u=a.length;for(o=0;o<n-e;++o)this[o+e]=a[o%u]}return this};var et=/[^+\/0-9A-Za-z-_]/g},function(t,e){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function r(t){var e=n(t),r=e[0],i=e[1];return 3*(r+i)/4-i}function i(t,e,n){return 3*(e+n)/4-n}function o(t){for(var e,r=n(t),o=r[0],s=r[1],a=new f(i(t,o,s)),u=0,c=s>0?o-4:o,l=0;l<c;l+=4)e=h[t.charCodeAt(l)]<<18|h[t.charCodeAt(l+1)]<<12|h[t.charCodeAt(l+2)]<<6|h[t.charCodeAt(l+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=255&e;return 2===s&&(e=h[t.charCodeAt(l)]<<2|h[t.charCodeAt(l+1)]>>4,a[u++]=255&e),1===s&&(e=h[t.charCodeAt(l)]<<10|h[t.charCodeAt(l+1)]<<4|h[t.charCodeAt(l+2)]>>2,a[u++]=e>>8&255,a[u++]=255&e),a}function s(t){return c[t>>18&63]+c[t>>12&63]+c[t>>6&63]+c[63&t]}function a(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(s(r));return i.join("")}function u(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,u=n-r;s<u;s+=o)i.push(a(t,s,s+o>u?u:s+o));return 1===r?(e=t[n-1],i.push(c[e>>2]+c[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(c[e>>10]+c[e>>4&63]+c[e<<2&63]+"=")),i.join("")}e.byteLength=r,e.toByteArray=o,e.fromByteArray=u;for(var c=[],h=[],f="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)c[p]=l[p],h[l.charCodeAt(p)]=p;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,h=-7,f=n?i-1:0,l=n?-1:1,p=t[e+f];for(f+=l,o=p&(1<<-h)-1,p>>=-h,h+=a;h>0;o=256*o+t[e+f],f+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=r;h>0;s=256*s+t[e+f],f+=l,h-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,r),o-=c}return(p?-1:1)*s*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var s,a,u,c=8*o-i-1,h=(1<<c)-1,f=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+f>=1?l/u:l*Math.pow(2,1-f),e*u>=2&&(s++,u/=2),s+f>=h?(a=0,s=h):s+f>=1?(a=(e*u-1)*Math.pow(2,i),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[n+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+p]=255&s,p+=d,s/=256,c-=8);t[n+p-d]|=128*y}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(24),o=n(12),s=n(8),a=n(9),u=n(2),c=function(t){function e(e,n){var r=this;t.call(this),this.key=e,this.options=n||{},this.state="initialized",this.connection=null,this.usingTLS=!!n.useTLS,this.timeline=this.options.timeline,this.errorCallbacks=this.buildErrorCallbacks(),this.connectionCallbacks=this.buildConnectionCallbacks(this.errorCallbacks),this.handshakeCallbacks=this.buildHandshakeCallbacks(this.errorCallbacks);var i=u.default.getNetwork();i.bind("online",function(){r.timeline.info({netinfo:"online"}),"connecting"!==r.state&&"unavailable"!==r.state||r.retryIn(0)}),i.bind("offline",function(){r.timeline.info({netinfo:"offline"}),r.connection&&r.sendActivityCheck()}),this.updateStrategy()}return r(e,t),e.prototype.connect=function(){if(!this.connection&&!this.runner){if(!this.strategy.isSupported())return void this.updateState("failed");this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(t){return!!this.connection&&this.connection.send(t)},e.prototype.send_event=function(t,e,n){return!!this.connection&&this.connection.send_event(t,e,n)},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isUsingTLS=function(){return this.usingTLS},e.prototype.startConnecting=function(){var t=this,e=function(n,r){n?t.runner=t.strategy.connect(0,e):"error"===r.action?(t.emit("error",{type:"HandshakeError",error:r.error}),t.timeline.error({handshakeError:r.error})):(t.abortConnecting(),t.handshakeCallbacks[r.action](r))};this.runner=this.strategy.connect(0,e)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var t=this.abandonConnection();t.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})},e.prototype.retryIn=function(t){var e=this;this.timeline.info({action:"retry",delay:t}),t>0&&this.emit("connecting_in",Math.round(t/1e3)),this.retryTimer=new o.OneOffTimer(t||0,function(){e.disconnectInternally(),e.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var t=this;this.unavailableTimer=new o.OneOffTimer(this.options.unavailableTimeout,function(){t.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new o.OneOffTimer(this.options.pongTimeout,function(){t.timeline.error({pong_timed_out:t.options.pongTimeout}),t.retryIn(0)})},e.prototype.resetActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new o.OneOffTimer(this.activityTimeout,function(){t.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(t){var e=this;return a.extend({},t,{message:function(t){e.resetActivityCheck(),e.emit("message",t)},ping:function(){e.send_event("pusher:pong",{})},activity:function(){e.resetActivityCheck()},error:function(t){e.emit("error",{type:"WebSocketError",error:t})},closed:function(){e.abandonConnection(),e.shouldRetry()&&e.retryIn(1e3)}})},e.prototype.buildHandshakeCallbacks=function(t){var e=this;return a.extend({},t,{connected:function(t){e.activityTimeout=Math.min(e.options.activityTimeout,t.activityTimeout,t.connection.activityTimeout||1/0),e.clearUnavailableTimer(),e.setConnection(t.connection),e.socket_id=e.connection.id,e.updateState("connected",{socket_id:e.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var t=this,e=function(e){return function(n){n.error&&t.emit("error",{type:"WebSocketError",error:n.error}),e(n)}};return{tls_only:e(function(){t.usingTLS=!0,t.updateStrategy(),t.retryIn(0)}),refused:e(function(){t.disconnect()}),backoff:e(function(){t.retryIn(1e3)}),retry:e(function(){t.retryIn(0)})}},e.prototype.setConnection=function(t){this.connection=t;for(var e in this.connectionCallbacks)this.connection.bind(e,this.connectionCallbacks[e]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(this.connection){this.stopActivityCheck();for(var t in this.connectionCallbacks)this.connection.unbind(t,this.connectionCallbacks[t]);var e=this.connection;return this.connection=null,e}},e.prototype.updateState=function(t,e){var n=this.state;if(this.state=t,n!==t){var r=t;"connected"===r&&(r+=" with new socket ID "+e.socket_id),s.default.debug("State changed",n+" -> "+r),this.timeline.info({state:t,params:e}),this.emit("state_change",{previous:n,current:t}),this.emit(t,e)}},e.prototype.shouldRetry=function(){return"connecting"===this.state||"connected"===this.state},e}(i.default);e.__esModule=!0,e.default=c},function(t,e,n){"use strict";function r(t,e){if(0===t.indexOf("private-encrypted-")){if("ReactNative"==navigator.product){var n="Encrypted channels are not yet supported when using React Native builds.";throw new s.UnsupportedFeature(n)}return o.default.createEncryptedChannel(t,e)}return 0===t.indexOf("private-")?o.default.createPrivateChannel(t,e):0===t.indexOf("presence-")?o.default.createPresenceChannel(t,e):o.default.createChannel(t,e)}var i=n(9),o=n(43),s=n(31),a=function(){function t(){this.channels={}}return t.prototype.add=function(t,e){return this.channels[t]||(this.channels[t]=r(t,e)),this.channels[t]},t.prototype.all=function(){return i.values(this.channels)},t.prototype.find=function(t){return this.channels[t]},t.prototype.remove=function(t){var e=this.channels[t];return delete this.channels[t],e},t.prototype.disconnect=function(){i.objectApply(this.channels,function(t){t.disconnect()})},t}();e.__esModule=!0,e.default=a},function(t,e,n){"use strict";function r(t,e){return o.default.defer(function(){e(t)}),{abort:function(){},forceMinPriority:function(){}}}var i=n(43),o=n(11),s=n(31),a=n(9),u=function(){function t(t,e,n,r){this.name=t,this.priority=e,this.transport=n,this.options=r||{}}return t.prototype.isSupported=function(){return this.transport.isSupported({useTLS:this.options.useTLS})},t.prototype.connect=function(t,e){var n=this;if(!this.isSupported())return r(new s.UnsupportedStrategy,e);if(this.priority<t)return r(new s.TransportPriorityTooLow,e);var o=!1,u=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),c=null,h=function(){u.unbind("initialized",h),u.connect()},f=function(){c=i.default.createHandshake(u,function(t){o=!0,d(),e(null,t)})},l=function(t){d(),e(t)},p=function(){d();var t;t=a.safeJSONStringify(u),e(new s.TransportClosed(t))},d=function(){u.unbind("initialized",h),u.unbind("open",f),u.unbind("error",l),u.unbind("closed",p)};return u.bind("initialized",h),u.bind("open",f),u.bind("error",l),u.bind("closed",p),u.initialize(),{abort:function(){o||(d(),c?c.close():u.close())},forceMinPriority:function(t){o||n.priority<t&&(c?c.close():u.close())}}},t}();e.__esModule=!0,e.default=u},function(t,e,n){"use strict";var r=n(9),i=n(11),o=n(12),s=function(){function t(t,e){this.strategies=t,this.loop=Boolean(e.loop),this.failFast=Boolean(e.failFast),this.timeout=e.timeout,this.timeoutLimit=e.timeoutLimit}return t.prototype.isSupported=function(){return r.any(this.strategies,i.default.method("isSupported"))},t.prototype.connect=function(t,e){var n=this,r=this.strategies,i=0,o=this.timeout,s=null,a=function(u,c){c?e(null,c):(i+=1,n.loop&&(i%=r.length),i<r.length?(o&&(o*=2,n.timeoutLimit&&(o=Math.min(o,n.timeoutLimit))),s=n.tryStrategy(r[i],t,{timeout:o,failFast:n.failFast},a)):e(!0))};return s=this.tryStrategy(r[i],t,{timeout:o,failFast:this.failFast},a),{abort:function(){s.abort()},forceMinPriority:function(e){t=e,s&&s.forceMinPriority(e)}}},t.prototype.tryStrategy=function(t,e,n,r){var i=null,s=null;return n.timeout>0&&(i=new o.OneOffTimer(n.timeout,function(){s.abort(),r(!0)})),s=t.connect(e,function(t,e){t&&i&&i.isRunning()&&!n.failFast||(i&&i.ensureAborted(),r(t,e))}),{abort:function(){i&&i.ensureAborted(),s.abort()},forceMinPriority:function(t){s.forceMinPriority(t)}}},t}();e.__esModule=!0,e.default=s},function(t,e,n){"use strict";function r(t,e,n){var r=s.map(t,function(t,r,i,o){return t.connect(e,n(r,o))});return{abort:function(){s.apply(r,o)},forceMinPriority:function(t){s.apply(r,function(e){e.forceMinPriority(t)})}}}function i(t){return s.all(t,function(t){return Boolean(t.error)})}function o(t){t.error||t.aborted||(t.abort(),t.aborted=!0)}var s=n(9),a=n(11),u=function(){function t(t){this.strategies=t}return t.prototype.isSupported=function(){return s.any(this.strategies,a.default.method("isSupported"))},t.prototype.connect=function(t,e){return r(this.strategies,t,function(t,n){return function(r,o){return n[t].error=r,r?void(i(n)&&e(!0)):(s.apply(n,function(t){t.forceMinPriority(o.transport.priority)}),void e(null,o))}})},t}();e.__esModule=!0,e.default=u},function(t,e,n){"use strict";function r(t){return"pusherTransport"+(t?"TLS":"NonTLS")}function i(t){var e=u.default.getLocalStorage();if(e)try{var n=e[r(t)];if(n)return JSON.parse(n)}catch(e){s(t)}return null}function o(t,e,n){var i=u.default.getLocalStorage();if(i)try{i[r(t)]=h.safeJSONStringify({
timestamp:a.default.now(),transport:e,latency:n})}catch(t){}}function s(t){var e=u.default.getLocalStorage();if(e)try{delete e[r(t)]}catch(t){}}var a=n(11),u=n(2),c=n(65),h=n(9),f=function(){function t(t,e,n){this.strategy=t,this.transports=e,this.ttl=n.ttl||18e5,this.usingTLS=n.useTLS,this.timeline=n.timeline}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.usingTLS,r=i(n),u=[this.strategy];if(r&&r.timestamp+this.ttl>=a.default.now()){var h=this.transports[r.transport];h&&(this.timeline.info({cached:!0,transport:r.transport,latency:r.latency}),u.push(new c.default([h],{timeout:2*r.latency+1e3,failFast:!0})))}var f=a.default.now(),l=u.pop().connect(t,function r(i,c){i?(s(n),u.length>0?(f=a.default.now(),l=u.pop().connect(t,r)):e(i)):(o(n,c.transport.name,a.default.now()-f),e(null,c))});return{abort:function(){l.abort()},forceMinPriority:function(e){t=e,l&&l.forceMinPriority(e)}}},t}();e.__esModule=!0,e.default=f},function(t,e,n){"use strict";var r=n(12),i=function(){function t(t,e){var n=e.delay;this.strategy=t,this.options={delay:n}}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n,i=this.strategy,o=new r.OneOffTimer(this.options.delay,function(){n=i.connect(t,e)});return{abort:function(){o.ensureAborted(),n&&n.abort()},forceMinPriority:function(e){t=e,n&&n.forceMinPriority(e)}}},t}();e.__esModule=!0,e.default=i},function(t,e){"use strict";var n=function(){function t(t,e,n){this.test=t,this.trueBranch=e,this.falseBranch=n}return t.prototype.isSupported=function(){var t=this.test()?this.trueBranch:this.falseBranch;return t.isSupported()},t.prototype.connect=function(t,e){var n=this.test()?this.trueBranch:this.falseBranch;return n.connect(t,e)},t}();e.__esModule=!0,e.default=n},function(t,e){"use strict";var n=function(){function t(t){this.strategy=t}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.strategy.connect(t,function(t,r){r&&n.abort(),e(t,r)});return n},t}();e.__esModule=!0,e.default=n},function(t,e,n){"use strict";var r=n(5);e.getGlobalConfig=function(){return{wsHost:r.default.host,wsPort:r.default.ws_port,wssPort:r.default.wss_port,wsPath:r.default.ws_path,httpHost:r.default.sockjs_host,httpPort:r.default.sockjs_http_port,httpsPort:r.default.sockjs_https_port,httpPath:r.default.sockjs_path,statsHost:r.default.stats_host,authEndpoint:r.default.channel_auth_endpoint,authTransport:r.default.channel_auth_transport,activity_timeout:r.default.activity_timeout,pong_timeout:r.default.pong_timeout,unavailable_timeout:r.default.unavailable_timeout}},e.getClusterConfig=function(t){return{wsHost:"ws-"+t+".pusher.com",httpHost:"sockjs-"+t+".pusher.com"}}}])});
;(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.deepstream = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || Object.create(null);
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || Object.create(null);

  // all
  if (0 == arguments.length) {
    this._callbacks = Object.create(null);
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks[event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || Object.create(null);

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks[event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || Object.create(null);
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

/**
 * Returns an array listing the events for which the emitter has registered listeners.
 *
 * @return {Array}
 * @api public
 */
Emitter.prototype.eventNames = function(){
  return this._callbacks ? Object.keys(this._callbacks) : [];
}

},{}],2:[function(_dereq_,module,exports){

},{}],3:[function(_dereq_,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(_dereq_,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],6:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],7:[function(_dereq_,module,exports){
'use strict';

exports.decode = exports.parse = _dereq_('./decode');
exports.encode = exports.stringify = _dereq_('./encode');

},{"./decode":5,"./encode":6}],8:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = _dereq_('punycode');
var util = _dereq_('./util');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = _dereq_('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

},{"./util":9,"punycode":4,"querystring":7}],9:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

},{}],10:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('./constants/constants');
var MS = _dereq_('./constants/merge-strategies');
var Emitter = _dereq_('component-emitter2');
var Connection = _dereq_('./message/connection');
var EventHandler = _dereq_('./event/event-handler');
var RpcHandler = _dereq_('./rpc/rpc-handler');
var RecordHandler = _dereq_('./record/record-handler');
var PresenceHandler = _dereq_('./presence/presence-handler');
var defaultOptions = _dereq_('./default-options');
var AckTimeoutRegistry = _dereq_('./utils/ack-timeout-registry');

/**
 * deepstream.io javascript client
 *
 * @copyright 2016 deepstreamHub GmbH
 * @author deepstreamHub GmbH
 *
 *
 * @{@link http://deepstream.io}
 *
 *
 * @param {String} url     URL to connect to. The protocol can be ommited, e.g. <host>:<port>.
 * @param {Object} options A map of options that extend the ones specified in default-options.js
 *
 * @public
 * @constructor
 */
var Client = function Client(url, options) {
  this._url = url;
  this._options = this._getOptions(options || {});

  this._connection = new Connection(this, this._url, this._options);
  this._ackTimeoutRegistry = new AckTimeoutRegistry(this, this._options);

  this.event = new EventHandler(this._options, this._connection, this);
  this.rpc = new RpcHandler(this._options, this._connection, this);
  this.record = new RecordHandler(this._options, this._connection, this);
  this.presence = new PresenceHandler(this._options, this._connection, this);

  this._messageCallbacks = {};
  this._messageCallbacks[C.TOPIC.EVENT] = this.event._$handle.bind(this.event);
  this._messageCallbacks[C.TOPIC.RPC] = this.rpc._$handle.bind(this.rpc);
  this._messageCallbacks[C.TOPIC.RECORD] = this.record._$handle.bind(this.record);
  this._messageCallbacks[C.TOPIC.PRESENCE] = this.presence._$handle.bind(this.presence);
  this._messageCallbacks[C.TOPIC.ERROR] = this._onErrorMessage.bind(this);

  if (!options || !options.silentDeprecation) {
    console.log('deepstream V3 is in maintenance mode\n  It\'s heavily recommended you use V4 (@deepstream/client)\n  You can see the changlogs here https://deepstream.io/releases/client-js/v4-0-0/\n  The server V4.1 supports text protocol if your require to use other non official\n  SDKs and resolves many of the issues in V3.\n  To silence this warning just pass in a silentDeprecation flag in options.\n  Example: deepstream(url, { silentDeprecation: true })\n');
  }
};

Emitter(Client.prototype); // eslint-disable-line

/**
 * Send authentication parameters to the client to fully open
 * the connection.
 *
 * Please note: Authentication parameters are send over an already established
 * connection, rather than appended to the server URL. This means the parameters
 * will be encrypted when used with a WSS / HTTPS connection. If the deepstream server
 * on the other side has message logging enabled it will however be written to the logs in
 * plain text. If additional security is a requirement it might therefor make sense to hash
 * the password on the client.
 *
 * If the connection is not yet established the authentication parameter will be
 * stored and send once it becomes available
 *
 * authParams can be any JSON serializable data structure and its up for the
 * permission handler on the server to make sense of them, although something
 * like { username: 'someName', password: 'somePass' } will probably make the most sense.
 *
 * login can be called multiple times until either the connection is authenticated or
 * forcefully closed by the server since its maxAuthAttempts threshold has been exceeded
 *
 * @param   {Object}   authParams JSON.serializable authentication data
 * @param   {Function} callback   Will be called with either (true) or (false, data)
 *
 * @public
 * @returns {Client}
 */
Client.prototype.login = function (authParamsOrCallback, callback) {
  if (typeof authParamsOrCallback === 'function') {
    this._connection.authenticate({}, authParamsOrCallback);
  } else {
    this._connection.authenticate(authParamsOrCallback || {}, callback);
  }
  return this;
};

/**
 * Wrapper function around client.login(), behaves exactly the same
 * however it returns a promise that is resolved with client data on
 * successful login and rejected with the error message when login fails.
 *
 * @param   {Object}   authParams JSON.serializable authentication data
 *
 * @public
 * @returns {Promise} result of the login operation
 */
Client.prototype.loginAsync = function (authParams) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    _this._connection.authenticate(authParams || {}, function (success, data) {
      if (success) resolve(data);else reject(data);
    });
  });
};

/**
 * Closes the connection to the server.
 *
 * @public
 * @returns {void}
 */
Client.prototype.close = function () {
  this._connection.close();
};

/**
 * Returns the current state of the connection.
 *
 * connectionState is one of CONSTANTS.CONNECTION_STATE
 *
 * @returns {[type]} [description]
 */
Client.prototype.getConnectionState = function () {
  return this._connection.getState();
};

/**
 * Returns a random string. The first block of characters
 * is a timestamp, in order to allow databases to optimize for semi-
 * sequentuel numberings
 *
 * @public
 * @returns {String} unique id
 */
Client.prototype.getUid = function () {
  var timestamp = new Date().getTime().toString(36);
  var randomString = (Math.random() * 10000000000000000).toString(36).replace('.', '');

  return timestamp + '-' + randomString;
};

/**
 * Package private ack timeout registry. This is how all classes can get access to
 * register timeouts.
 * (Well... that's the intention anyways)
 *
 * @package private
 * @returns {AckTimeoutRegistry}
 */
Client.prototype._$getAckTimeoutRegistry = function () {
  return this._ackTimeoutRegistry;
};

/**
 * Package private callback for parsed incoming messages. Will be invoked
 * by the connection class
 *
 * @param   {Object} message parsed deepstream message
 *
 * @package private
 * @returns {void}
 */
Client.prototype._$onMessage = function (message) {
  if (this._messageCallbacks[message.topic]) {
    this._messageCallbacks[message.topic](message);
  } else {
    message.processedError = true;
    this._$onError(message.topic, C.EVENT.MESSAGE_PARSE_ERROR, 'Received message for unknown topic ' + message.topic);
  }

  if (message.action === C.ACTIONS.ERROR && !message.processedError) {
    this._$onError(message.topic, message.data[0], message.data.slice(0));
  }
};

/**
 * Package private error callback. This is the single point at which
 * errors are thrown in the client. (Well... that's the intention anyways)
 *
 * The expectations would be for implementations to subscribe
 * to the client's error event to prevent errors from being thrown
 * and then decide based on the event and topic parameters how
 * to handle the errors
 *
 * IMPORTANT: Errors that are specific to a request, e.g. a RPC
 * timing out or a record not being permissioned are passed directly
 * to the method that requested them
 *
 * @param   {String} topic One of CONSTANTS.TOPIC
 * @param   {String} event One of CONSTANTS.EVENT
 * @param   {String} msg   Error dependent message
 *
 * @package private
 * @returns {void}
 */
Client.prototype._$onError = function (topic, event, msg) {
  var errorMsg = void 0;

  /*
   * Help to diagnose the problem quicker by checking for
   * some common problems
   */
  if (event === C.EVENT.ACK_TIMEOUT || event === C.EVENT.RESPONSE_TIMEOUT) {
    if (this.getConnectionState() === C.CONNECTION_STATE.AWAITING_AUTHENTICATION) {
      errorMsg = 'Your message timed out because you\'re not authenticated. Have you called login()?';
      setTimeout(this._$onError.bind(this, C.EVENT.NOT_AUTHENTICATED, C.TOPIC.ERROR, errorMsg), 1);
    }
  }

  if (this.hasListeners('error')) {
    this.emit('error', msg, event, topic);
    this.emit(event, topic, msg);
  } else {
    console.log('--- You can catch all deepstream errors by subscribing to the error event ---');

    errorMsg = event + ': ' + msg;

    if (topic) {
      errorMsg += ' (' + topic + ')';
    }

    throw new Error(errorMsg);
  }
};

/**
 * Passes generic messages from the error topic
 * to the _$onError handler
 *
 * @param {Object} errorMessage parsed deepstream error message
 *
 * @private
 * @returns {void}
 */
Client.prototype._onErrorMessage = function (errorMessage) {
  this._$onError(errorMessage.topic, errorMessage.data[0], errorMessage.data[1]);
};

/**
 * Creates a new options map by extending default
 * options with the passed in options
 *
 * @param   {Object} options The user specified client configuration options
 *
 * @private
 * @returns {Object}  merged options
 */
Client.prototype._getOptions = function (options) {
  var mergedOptions = {};

  for (var key in defaultOptions) {
    if (typeof options[key] === 'undefined') {
      mergedOptions[key] = defaultOptions[key];
    } else {
      mergedOptions[key] = options[key];
    }
  }

  return mergedOptions;
};

/**
 * Exports factory function to adjust to the current JS style of
 * disliking 'new' :-)
 *
 * @param {String} url     URL to connect to. The protocol can be ommited, e.g. <host>:<port>.
 * @param {Object} options A map of options that extend the ones specified in default-options.js
 *
 * @public
 * @returns {void}
 */
function createDeepstream(url, options) {
  return new Client(url, options);
}

/**
 * Expose constants to allow consumers to access them
*/
Client.prototype.CONSTANTS = C;
createDeepstream.CONSTANTS = C;

/**
 * Expose merge strategies to allow consumers to access them
*/
Client.prototype.MERGE_STRATEGIES = MS;
createDeepstream.MERGE_STRATEGIES = MS;

module.exports = createDeepstream;

},{"./constants/constants":11,"./constants/merge-strategies":12,"./default-options":13,"./event/event-handler":14,"./message/connection":15,"./presence/presence-handler":18,"./record/record-handler":22,"./rpc/rpc-handler":24,"./utils/ack-timeout-registry":27,"component-emitter2":1}],11:[function(_dereq_,module,exports){
'use strict';

exports.CONNECTION_STATE = {};

exports.CONNECTION_STATE.CLOSED = 'CLOSED';
exports.CONNECTION_STATE.AWAITING_CONNECTION = 'AWAITING_CONNECTION';
exports.CONNECTION_STATE.CHALLENGING = 'CHALLENGING';
exports.CONNECTION_STATE.AWAITING_AUTHENTICATION = 'AWAITING_AUTHENTICATION';
exports.CONNECTION_STATE.AUTHENTICATING = 'AUTHENTICATING';
exports.CONNECTION_STATE.OPEN = 'OPEN';
exports.CONNECTION_STATE.ERROR = 'ERROR';
exports.CONNECTION_STATE.RECONNECTING = 'RECONNECTING';

exports.MESSAGE_SEPERATOR = String.fromCharCode(30); // ASCII Record Seperator 1E
exports.MESSAGE_PART_SEPERATOR = String.fromCharCode(31); // ASCII Unit Separator 1F

exports.TYPES = {};
exports.TYPES.STRING = 'S';
exports.TYPES.OBJECT = 'O';
exports.TYPES.NUMBER = 'N';
exports.TYPES.NULL = 'L';
exports.TYPES.TRUE = 'T';
exports.TYPES.FALSE = 'F';
exports.TYPES.UNDEFINED = 'U';

exports.TOPIC = {};
exports.TOPIC.CONNECTION = 'C';
exports.TOPIC.AUTH = 'A';
exports.TOPIC.ERROR = 'X';
exports.TOPIC.EVENT = 'E';
exports.TOPIC.RECORD = 'R';
exports.TOPIC.RPC = 'P';
exports.TOPIC.PRESENCE = 'U';
exports.TOPIC.PRIVATE = 'PRIVATE/';

exports.EVENT = {};
exports.EVENT.CONNECTION_ERROR = 'connectionError';
exports.EVENT.CONNECTION_STATE_CHANGED = 'connectionStateChanged';
exports.EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED = 'MAX_RECONNECTION_ATTEMPTS_REACHED';
exports.EVENT.CONNECTION_AUTHENTICATION_TIMEOUT = 'CONNECTION_AUTHENTICATION_TIMEOUT';
exports.EVENT.ACK_TIMEOUT = 'ACK_TIMEOUT';
exports.EVENT.NO_RPC_PROVIDER = 'NO_RPC_PROVIDER';
exports.EVENT.RESPONSE_TIMEOUT = 'RESPONSE_TIMEOUT';
exports.EVENT.DELETE_TIMEOUT = 'DELETE_TIMEOUT';
exports.EVENT.UNSOLICITED_MESSAGE = 'UNSOLICITED_MESSAGE';
exports.EVENT.MESSAGE_DENIED = 'MESSAGE_DENIED';
exports.EVENT.MESSAGE_PARSE_ERROR = 'MESSAGE_PARSE_ERROR';
exports.EVENT.VERSION_EXISTS = 'VERSION_EXISTS';
exports.EVENT.NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
exports.EVENT.MESSAGE_PERMISSION_ERROR = 'MESSAGE_PERMISSION_ERROR';
exports.EVENT.LISTENER_EXISTS = 'LISTENER_EXISTS';
exports.EVENT.NOT_LISTENING = 'NOT_LISTENING';
exports.EVENT.TOO_MANY_AUTH_ATTEMPTS = 'TOO_MANY_AUTH_ATTEMPTS';
exports.EVENT.INVALID_AUTH_MSG = 'INVALID_AUTH_MSG';
exports.EVENT.IS_CLOSED = 'IS_CLOSED';
exports.EVENT.RECORD_NOT_FOUND = 'RECORD_NOT_FOUND';
exports.EVENT.NOT_SUBSCRIBED = 'NOT_SUBSCRIBED';

exports.ACTIONS = {};
exports.ACTIONS.PING = 'PI';
exports.ACTIONS.PONG = 'PO';
exports.ACTIONS.ACK = 'A';
exports.ACTIONS.REDIRECT = 'RED';
exports.ACTIONS.CHALLENGE = 'CH';
exports.ACTIONS.CHALLENGE_RESPONSE = 'CHR';
exports.ACTIONS.READ = 'R';
exports.ACTIONS.CREATE = 'C';
exports.ACTIONS.UPDATE = 'U';
exports.ACTIONS.PATCH = 'P';
exports.ACTIONS.DELETE = 'D';
exports.ACTIONS.SUBSCRIBE = 'S';
exports.ACTIONS.UNSUBSCRIBE = 'US';
exports.ACTIONS.HAS = 'H';
exports.ACTIONS.HEAD = 'HD';
exports.ACTIONS.SNAPSHOT = 'SN';
exports.ACTIONS.INVOKE = 'I';
exports.ACTIONS.SUBSCRIPTION_FOR_PATTERN_FOUND = 'SP';
exports.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED = 'SR';
exports.ACTIONS.SUBSCRIPTION_HAS_PROVIDER = 'SH';
exports.ACTIONS.LISTEN = 'L';
exports.ACTIONS.UNLISTEN = 'UL';
exports.ACTIONS.LISTEN_ACCEPT = 'LA';
exports.ACTIONS.LISTEN_REJECT = 'LR';
exports.ACTIONS.PROVIDER_UPDATE = 'PU';
exports.ACTIONS.QUERY = 'Q';
exports.ACTIONS.CREATEORREAD = 'CR';
exports.ACTIONS.CREATEANDUPDATE = 'CU';
exports.ACTIONS.EVENT = 'EVT';
exports.ACTIONS.ERROR = 'E';
exports.ACTIONS.REQUEST = 'REQ';
exports.ACTIONS.RESPONSE = 'RES';
exports.ACTIONS.REJECTION = 'REJ';
exports.ACTIONS.PRESENCE_JOIN = 'PNJ';
exports.ACTIONS.PRESENCE_LEAVE = 'PNL';
exports.ACTIONS.WRITE_ACKNOWLEDGEMENT = 'WA';

exports.CALL_STATE = {};
exports.CALL_STATE.INITIAL = 'INITIAL';
exports.CALL_STATE.CONNECTING = 'CONNECTING';
exports.CALL_STATE.ESTABLISHED = 'ESTABLISHED';
exports.CALL_STATE.ACCEPTED = 'ACCEPTED';
exports.CALL_STATE.DECLINED = 'DECLINED';
exports.CALL_STATE.ENDED = 'ENDED';
exports.CALL_STATE.ERROR = 'ERROR';

},{}],12:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  /**
  *  Choose the server's state over the client's
  **/
  REMOTE_WINS: function REMOTE_WINS(record, remoteValue, remoteVersion, callback) {
    callback(null, remoteValue);
  },

  /**
  *  Choose the local state over the server's
  **/
  LOCAL_WINS: function LOCAL_WINS(record, remoteValue, remoteVersion, callback) {
    callback(null, record.get());
  }
};

},{}],13:[function(_dereq_,module,exports){
'use strict';

var MERGE_STRATEGIES = _dereq_('./constants/merge-strategies');

module.exports = {
  /**
   * @param {Number} heartBeatInterval           How often you expect the heartbeat to be sent.
   *                                             If two heatbeats are missed in a row the client
   *                                             will consider the server to have disconnected
   *                                             and will close the connection in order to
   *                                             establish a new one.
   */
  heartbeatInterval: 30000,

  /**
   * @param {Number} reconnectIntervalIncrement  Specifies the number of milliseconds by
   *                                             which the time until the next reconnection
   *                                             attempt will be incremented after every
   *                                             unsuccesful attempt.
   *                                             E.g. for 1500: if the connection is lost,
   *                                             the client will attempt to reconnect immediatly,
   *                                             if that fails it will try again after 1.5 seconds,
   *                                             if that fails it will try again after 3 seconds
   *                                             and so on
   */
  reconnectIntervalIncrement: 4000,

  /**
   * @param {Number} maxReconnectInterval        Specifies the maximum number of milliseconds for
   *                                             the reconnectIntervalIncrement
   *                                             The amount of reconnections will reach this value
   *                                             then reconnectIntervalIncrement will be ignored.
   */
  maxReconnectInterval: 180000,

  /**
   * @param {Number} maxReconnectAttempts        The number of reconnection attempts until the
   *                                             client gives up and declares the connection closed
   */
  maxReconnectAttempts: 5,

  /**
   * @param {Number} rpcAckTimeout               The number of milliseconds after which a rpc will
   *                                             create an error if no Ack-message has been received
   */
  rpcAckTimeout: 6000,

  /**
   * @param {Number} rpcResponseTimeout          The number of milliseconds after which a rpc will
   *                                             create an error if no response-message has been
   *                                             received
   */
  rpcResponseTimeout: 10000,

  /**
   * @param {Number} subscriptionTimeout         The number of milliseconds that can pass after
   *                                             providing/unproviding a RPC or subscribing/
   *                                             unsubscribing/listening to a record before an
   *                                             error is thrown
   */
  subscriptionTimeout: 2000,

  /**
   * @param {Number} maxMessagesPerPacket        If the implementation tries to send a large
   *                                             number of messages at the same time, the deepstream
   *                                             client will try to split them into smaller packets
   *                                             and send these every
   *                                             <timeBetweenSendingQueuedPackages> ms.
   *
   *                                             This parameter specifies the number of messages
   *                                             after which deepstream sends the packet and
   *                                             queues the remaining messages.
   *                                             Set to Infinity to turn the feature off.
   *
   */
  maxMessagesPerPacket: 100,

  /**
   * @param {Number} timeBetweenSendingQueuedPackages
   *                                             Please see description for
   *                                             maxMessagesPerPacket. Sets the time in ms.
   */
  timeBetweenSendingQueuedPackages: 16,

  /**
   * @param {Number} recordReadAckTimeout       The number of milliseconds from the moment
   *                                            client.record.getRecord() is called until an error
   *                                            is thrown since no ack message has been received.
   */
  recordReadAckTimeout: 15000,

  /**
   * @param {Number} recordReadTimeout           The number of milliseconds from the moment
   *                                             client.record.getRecord() is called until an error
   *                                             is thrown since no data has been received.
   */
  recordReadTimeout: 15000,

  /**
   * @param {Number} recordDeleteTimeout         The number of milliseconds from the moment
   *                                             record.delete() is called until an error is
   *                                             thrown since no delete ack message had been
   *                                             received.
   *                                             Please take into account that the deletion is only
   *                                             complete after the record has been deleted from
   *                                             both cache and storage
   */
  recordDeleteTimeout: 15000,

  /**
   * @param {String} path path to connect to
   */
  path: '/deepstream',

  /**
   *  @param {Function} mergeStrategy            This provides the default strategy used to
   *                                             deal with merge conflicts.
   *                                             If the merge strategy is not succesfull it will
   *                                             set an error, else set the returned data as the
   *                                             latest revision. This can be overriden on a per
   *                                             record basis by setting the `setMergeStrategy`.
   */
  mergeStrategy: MERGE_STRATEGIES.REMOTE_WINS,

  /**
   * @param {Boolean} recordDeepCopy             Setting to false disabled deepcopying of record
   *                                             data when provided via `get()` in a `subscribe`
   *                                             callback. This improves speed at the expense of
   *                                             the user having to ensure object immutability.
   */
  recordDeepCopy: true,

  /**
   * https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
   *
   * @param {Object} nodeSocketOptions           Options to pass to the websocket constructor in
   *                                             node.
   * @default null
   */
  nodeSocketOptions: null
};

},{"./constants/merge-strategies":12}],14:[function(_dereq_,module,exports){
'use strict';

var messageBuilder = _dereq_('../message/message-builder');
var messageParser = _dereq_('../message/message-parser');
var ResubscribeNotifier = _dereq_('../utils/resubscribe-notifier');
var C = _dereq_('../constants/constants');
var Listener = _dereq_('../utils/listener');
var EventEmitter = _dereq_('component-emitter2');

/**
 * This class handles incoming and outgoing messages in relation
 * to deepstream events. It basically acts like an event-hub that's
 * replicated across all connected clients.
 *
 * @param {Object} options    deepstream options
 * @param {Connection} connection
 * @param {Client} client
 * @public
 * @constructor
 */
var EventHandler = function EventHandler(options, connection, client) {
  this._options = options;
  this._connection = connection;
  this._client = client;
  this._emitter = new EventEmitter();
  this._listener = {};
  this._ackTimeoutRegistry = client._$getAckTimeoutRegistry();
  this._resubscribeNotifier = new ResubscribeNotifier(this._client, this._resubscribe.bind(this));
};

EventHandler.prototype.eventNames = function () {
  return this._emitter.eventNames();
};

/**
 * Subscribe to an event. This will receive both locally emitted events
 * as well as events emitted by other connected clients.
 *
 * @param   {String}   name
 * @param   {Function} callback
 *
 * @public
 * @returns {void}
 */
EventHandler.prototype.subscribe = function (name, callback) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }
  if (typeof callback !== 'function') {
    throw new Error('invalid argument callback');
  }

  if (!this._emitter.hasListeners(name)) {
    this._ackTimeoutRegistry.add({
      topic: C.TOPIC.EVENT,
      action: C.ACTIONS.SUBSCRIBE,
      name: name
    });
    this._connection.sendMsg(C.TOPIC.EVENT, C.ACTIONS.SUBSCRIBE, [name]);
  }

  this._emitter.on(name, callback);
};

/**
 * Removes a callback for a specified event. If all callbacks
 * for an event have been removed, the server will be notified
 * that the client is unsubscribed as a listener
 *
 * @param   {String}   name
 * @param   {Function} callback
 *
 * @public
 * @returns {void}
 */
EventHandler.prototype.unsubscribe = function (name, callback) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }
  if (callback !== undefined && typeof callback !== 'function') {
    throw new Error('invalid argument callback');
  }
  this._emitter.off(name, callback);

  if (!this._emitter.hasListeners(name)) {
    this._ackTimeoutRegistry.add({
      topic: C.TOPIC.EVENT,
      action: C.ACTIONS.UNSUBSCRIBE,
      name: name
    });
    this._connection.sendMsg(C.TOPIC.EVENT, C.ACTIONS.UNSUBSCRIBE, [name]);
  }
};

/**
 * Emits an event locally and sends a message to the server to
 * broadcast the event to the other connected clients
 *
 * @param   {String} name
 * @param   {Mixed} data will be serialized and deserialized to its original type.
 *
 * @public
 * @returns {void}
 */
EventHandler.prototype.emit = function (name, data) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }

  this._connection.sendMsg(C.TOPIC.EVENT, C.ACTIONS.EVENT, [name, messageBuilder.typed(data)]);
  this._emitter.emit(name, data);
};

/**
 * Allows to listen for event subscriptions made by this or other clients. This
 * is useful to create "active" data providers, e.g. providers that only provide
 * data for a particular event if a user is actually interested in it
 *
 * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
 * @param   {Function} callback
 *
 * @public
 * @returns {void}
 */
EventHandler.prototype.listen = function (pattern, callback) {
  if (typeof pattern !== 'string' || pattern.length === 0) {
    throw new Error('invalid argument pattern');
  }
  if (typeof callback !== 'function') {
    throw new Error('invalid argument callback');
  }

  if (this._listener[pattern] && !this._listener[pattern].destroyPending) {
    this._client._$onError(C.TOPIC.EVENT, C.EVENT.LISTENER_EXISTS, pattern);
    return;
  } else if (this._listener[pattern]) {
    this._listener[pattern].destroy();
  }

  this._listener[pattern] = new Listener(C.TOPIC.EVENT, pattern, callback, this._options, this._client, this._connection);
};

/**
 * Removes a listener that was previously registered with listenForSubscriptions
 *
 * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
 * @param   {Function} callback
 *
 * @public
 * @returns {void}
 */
EventHandler.prototype.unlisten = function (pattern) {
  if (typeof pattern !== 'string' || pattern.length === 0) {
    throw new Error('invalid argument pattern');
  }

  var listener = this._listener[pattern];

  if (listener && !listener.destroyPending) {
    listener.sendDestroy();
  } else if (this._listener[pattern]) {
    this._ackTimeoutRegistry.add({
      topic: C.TOPIC.EVENT,
      action: C.EVENT.UNLISTEN,
      name: pattern
    });
    this._listener[pattern].destroy();
    delete this._listener[pattern];
  } else {
    this._client._$onError(C.TOPIC.RECORD, C.EVENT.NOT_LISTENING, pattern);
  }
};

/**
 * Handles incoming messages from the server
 *
 * @param   {Object} message parsed deepstream message
 *
 * @package private
 * @returns {void}
 */
EventHandler.prototype._$handle = function (message) {
  var name = message.data[message.action === C.ACTIONS.ACK ? 1 : 0];

  if (message.action === C.ACTIONS.EVENT) {
    if (message.data && message.data.length === 2) {
      this._emitter.emit(name, messageParser.convertTyped(message.data[1], this._client));
    } else {
      this._emitter.emit(name);
    }
    return;
  }

  if (message.action === C.ACTIONS.ACK && message.data[0] === C.ACTIONS.UNLISTEN && this._listener[name] && this._listener[name].destroyPending) {
    this._listener[name].destroy();
    delete this._listener[name];
    return;
  } else if (this._listener[name]) {
    this._listener[name]._$onMessage(message);
    return;
  } else if (message.action === C.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
    // An unlisten ACK was received before an PATTERN_REMOVED which is a valid case
    return;
  } else if (message.action === C.ACTIONS.SUBSCRIPTION_HAS_PROVIDER) {
    // record can receive a HAS_PROVIDER after discarding the record
    return;
  }

  if (message.action === C.ACTIONS.ACK) {
    this._ackTimeoutRegistry.clear(message);
    return;
  }

  if (message.action === C.ACTIONS.ERROR) {
    if (message.data[0] === C.EVENT.MESSAGE_DENIED) {
      this._ackTimeoutRegistry.remove({
        topic: C.TOPIC.EVENT,
        name: message.data[1],
        action: message.data[2]
      });
    } else if (message.data[0] === C.EVENT.NOT_SUBSCRIBED) {
      this._ackTimeoutRegistry.remove({
        topic: C.TOPIC.EVENT,
        name: message.data[1],
        action: C.ACTIONS.UNSUBSCRIBE
      });
    }
    message.processedError = true;
    this._client._$onError(C.TOPIC.EVENT, message.data[0], message.data[1]);
    return;
  }

  this._client._$onError(C.TOPIC.EVENT, C.EVENT.UNSOLICITED_MESSAGE, name);
};

/**
 * Resubscribes to events when connection is lost
 *
 * @package private
 * @returns {void}
 */
EventHandler.prototype._resubscribe = function () {
  var callbacks = this._emitter._callbacks;
  for (var eventName in callbacks) {
    this._connection.sendMsg(C.TOPIC.EVENT, C.ACTIONS.SUBSCRIBE, [eventName]);
  }
};

module.exports = EventHandler;

},{"../constants/constants":11,"../message/message-builder":16,"../message/message-parser":17,"../utils/listener":28,"../utils/resubscribe-notifier":29,"component-emitter2":1}],15:[function(_dereq_,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket = _dereq_('ws');
var messageParser = _dereq_('./message-parser');
var messageBuilder = _dereq_('./message-builder');
var utils = _dereq_('../utils/utils');
var C = _dereq_('../constants/constants');

/**
 * Establishes a connection to a deepstream server using websockets
 *
 * @param {Client} client
 * @param {String} url     Short url, e.g. <host>:<port>. Deepstream works out the protocol
 * @param {Object} options connection options
 *
 * @constructor
 */
var Connection = function Connection(client, url, options) {
  this._client = client;
  this._options = options;
  this._authParams = null;
  this._authCallback = null;
  this._deliberateClose = false;
  this._redirecting = false;
  this._tooManyAuthAttempts = false;
  this._connectionAuthenticationTimeout = false;
  this._challengeDenied = false;
  this._queuedMessages = [];
  this._reconnectTimeout = null;
  this._reconnectionAttempt = 0;
  this._currentPacketMessageCount = 0;
  this._sendNextPacketTimeout = null;
  this._currentMessageResetTimeout = null;
  this._endpoint = null;
  this._lastHeartBeat = null;
  this._heartbeatInterval = null;

  this._originalUrl = utils.parseUrl(url, this._options.path);
  this._url = this._originalUrl;

  this._state = C.CONNECTION_STATE.CLOSED;
  this._createEndpoint();
};

/**
 * Returns the current connection state.
 * (One of constants.CONNECTION_STATE)
 *
 * @public
 * @returns {String} connectionState
 */
Connection.prototype.getState = function () {
  return this._state;
};

/**
 * Sends the specified authentication parameters
 * to the server. Can be called up to <maxAuthAttempts>
 * times for the same connection.
 *
 * @param   {Object}   authParams A map of user defined auth parameters.
 *                                E.g. { username:<String>, password:<String> }
 * @param   {Function} callback   A callback that will be invoked with the authenticationr result
 *
 * @public
 * @returns {void}
 */
Connection.prototype.authenticate = function (authParams, callback) {
  if ((typeof authParams === 'undefined' ? 'undefined' : _typeof(authParams)) !== 'object') {
    this._client._$onError(C.TOPIC.ERROR, C.EVENT.INVALID_AUTH_MSG, 'authParams is not an object');
    return;
  }

  this._authParams = authParams;
  this._authCallback = callback;

  if (this._tooManyAuthAttempts || this._challengeDenied || this._connectionAuthenticationTimeout) {
    this._client._$onError(C.TOPIC.ERROR, C.EVENT.IS_CLOSED, 'this client\'s connection was closed');
    return;
  } else if (this._deliberateClose === true && this._state === C.CONNECTION_STATE.CLOSED) {
    this._createEndpoint();
    this._deliberateClose = false;
    return;
  }

  if (this._state === C.CONNECTION_STATE.AWAITING_AUTHENTICATION) {
    this._sendAuthParams();
  }
};

/**
 * High level send message method. Creates a deepstream message
 * string and invokes the actual send method.
 *
 * @param   {String} topic  One of C.TOPIC
 * @param   {String} action One of C.ACTIONS
 * @param   {[Mixed]} data   Date that will be added to the message. Primitive values will
 *                          be appended directly, objects and arrays will be serialized as JSON
 *
 * @private
 * @returns {void}
 */
Connection.prototype.sendMsg = function (topic, action, data) {
  this.send(messageBuilder.getMsg(topic, action, data));
};

/**
 * Main method for sending messages. Doesn't send messages instantly,
 * but instead achieves conflation by adding them to the message
 * buffer that will be drained on the next tick
 *
 * @param   {String} message deepstream message
 *
 * @public
 * @returns {void}
 */
Connection.prototype.send = function (message) {
  this._queuedMessages.push(message);
  this._currentPacketMessageCount++;

  if (this._currentMessageResetTimeout === null) {
    this._currentMessageResetTimeout = utils.nextTick(this._resetCurrentMessageCount.bind(this));
  }

  if (this._state === C.CONNECTION_STATE.OPEN && this._queuedMessages.length < this._options.maxMessagesPerPacket && this._currentPacketMessageCount < this._options.maxMessagesPerPacket) {
    this._sendQueuedMessages();
  } else if (this._sendNextPacketTimeout === null) {
    this._queueNextPacket();
  }
};

/**
 * Closes the connection. Using this method
 * sets a _deliberateClose flag that will prevent the client from
 * reconnecting.
 *
 * @public
 * @returns {void}
 */
Connection.prototype.close = function () {
  clearInterval(this._heartbeatInterval);
  this._deliberateClose = true;
  this._endpoint.close();
  this._setState(C.CONNECTION_STATE.CLOSED);
};

/**
 * Creates the endpoint to connect to using the url deepstream
 * was initialised with.
 *
 * @private
 * @returns {void}
 */
Connection.prototype._createEndpoint = function () {
  this._endpoint = BrowserWebSocket ? new BrowserWebSocket(this._url) : new NodeWebSocket(this._url, this._options.nodeSocketOptions);

  this._endpoint.onopen = this._onOpen.bind(this);
  this._endpoint.onerror = this._onError.bind(this);
  this._endpoint.onclose = this._onClose.bind(this);
  this._endpoint.onmessage = this._onMessage.bind(this);
};

/**
 * When the implementation tries to send a large
 * number of messages in one execution thread, the first
 * <maxMessagesPerPacket> are send straight away.
 *
 * _currentPacketMessageCount keeps track of how many messages
 * went into that first packet. Once this number has been exceeded
 * the remaining messages are written to a queue and this message
 * is invoked on a timeout to reset the count.
 *
 * @private
 * @returns {void}
 */
Connection.prototype._resetCurrentMessageCount = function () {
  this._currentPacketMessageCount = 0;
  this._currentMessageResetTimeout = null;
};

/**
 * Concatenates the messages in the current message queue
 * and sends them as a single package. This will also
 * empty the message queue and conclude the send process.
 *
 * @private
 * @returns {void}
 */
Connection.prototype._sendQueuedMessages = function () {
  if (this._state !== C.CONNECTION_STATE.OPEN || this._endpoint.readyState !== this._endpoint.OPEN) {
    return;
  }

  if (this._queuedMessages.length === 0) {
    this._sendNextPacketTimeout = null;
    return;
  }

  var message = this._queuedMessages.splice(0, this._options.maxMessagesPerPacket).join('');

  if (this._queuedMessages.length !== 0) {
    this._queueNextPacket();
  } else {
    this._sendNextPacketTimeout = null;
  }

  this._submit(message);
};

/**
 * Sends a message to over the endpoint connection directly
 *
 * Will generate a connection error if the websocket was closed
 * prior to an onclose event.
 *
 * @private
 * @returns {void}
 */
Connection.prototype._submit = function (message) {
  if (this._endpoint.readyState === this._endpoint.OPEN) {
    this._endpoint.send(message);
  } else {
    this._onError('Tried to send message on a closed websocket connection');
  }
};

/**
 * Schedules the next packet whilst the connection is under
 * heavy load.
 *
 * @private
 * @returns {void}
 */
Connection.prototype._queueNextPacket = function () {
  var fn = this._sendQueuedMessages.bind(this);
  var delay = this._options.timeBetweenSendingQueuedPackages;

  this._sendNextPacketTimeout = setTimeout(fn, delay);
};

/**
 * Sends authentication params to the server. Please note, this
 * doesn't use the queued message mechanism, but rather sends the message directly
 *
 * @private
 * @returns {void}
 */
Connection.prototype._sendAuthParams = function () {
  this._setState(C.CONNECTION_STATE.AUTHENTICATING);
  var authMessage = messageBuilder.getMsg(C.TOPIC.AUTH, C.ACTIONS.REQUEST, [this._authParams]);
  this._submit(authMessage);
};

/**
 * Ensures that a heartbeat was not missed more than once, otherwise it considers the connection
 * to have been lost and closes it for reconnection.
 * @return {void}
 */
Connection.prototype._checkHeartBeat = function () {
  var heartBeatTolerance = this._options.heartbeatInterval * 2;

  if (Date.now() - this._lastHeartBeat > heartBeatTolerance) {
    clearInterval(this._heartbeatInterval);
    this._endpoint.close();
    this._client._$onError(C.TOPIC.CONNECTION, C.EVENT.CONNECTION_ERROR, 'heartbeat not received in the last ' + heartBeatTolerance + ' milliseconds');
  }
};

/**
 * Will be invoked once the connection is established. The client
 * can't send messages yet, and needs to get a connection ACK or REDIRECT
 * from the server before authenticating
 *
 * @private
 * @returns {void}
 */
Connection.prototype._onOpen = function () {
  this._clearReconnect();
  this._lastHeartBeat = Date.now();
  this._heartbeatInterval = utils.setInterval(this._checkHeartBeat.bind(this), this._options.heartbeatInterval);
  this._setState(C.CONNECTION_STATE.AWAITING_CONNECTION);
};

/**
 * Callback for generic connection errors. Forwards
 * the error to the client.
 *
 * The connection is considered broken once this method has been
 * invoked.
 *
 * @param   {String|Error} error connection error
 *
 * @private
 * @returns {void}
 */
Connection.prototype._onError = function (error) {
  var _this = this;

  clearInterval(this._heartbeatInterval);
  this._setState(C.CONNECTION_STATE.ERROR);

  /*
   * If the implementation isn't listening on the error event this will throw
   * an error. So let's defer it to allow the reconnection to kick in.
   */
  setTimeout(function () {
    var msg = void 0;
    if (error.code === 'ECONNRESET' || error.code === 'ECONNREFUSED') {
      msg = 'Can\'t connect! Deepstream server unreachable on ' + _this._originalUrl;
    } else {
      try {
        msg = JSON.stringify(error);
      } catch (e) {
        msg = error.toString();
      }
    }
    _this._client._$onError(C.TOPIC.CONNECTION, C.EVENT.CONNECTION_ERROR, msg);
  }, 1);
};

/**
 * Callback when the connection closes. This might have been a deliberate
 * close triggered by the client or the result of the connection getting
 * lost.
 *
 * In the latter case the client will try to reconnect using the configured
 * strategy.
 *
 * @private
 * @returns {void}
 */
Connection.prototype._onClose = function () {
  clearInterval(this._heartbeatInterval);

  if (this._redirecting === true) {
    this._redirecting = false;
    this._createEndpoint();
  } else if (this._deliberateClose === true) {
    this._setState(C.CONNECTION_STATE.CLOSED);
  } else {
    this._tryReconnect();
  }
};

/**
 * Callback for messages received on the connection.
 *
 * @param   {String} message deepstream message
 *
 * @private
 * @returns {void}
 */
Connection.prototype._onMessage = function (message) {
  var parsedMessages = messageParser.parse(message.data, this._client);

  for (var i = 0; i < parsedMessages.length; i++) {
    if (parsedMessages[i] === null) {
      continue;
    } else if (parsedMessages[i].topic === C.TOPIC.CONNECTION) {
      this._handleConnectionResponse(parsedMessages[i]);
    } else if (parsedMessages[i].topic === C.TOPIC.AUTH) {
      this._handleAuthResponse(parsedMessages[i]);
    } else {
      this._client._$onMessage(parsedMessages[i]);
    }
  }
};

/**
 * The connection response will indicate whether the deepstream connection
 * can be used or if it should be forwarded to another instance. This
 * allows us to introduce load-balancing if needed.
 *
 * If authentication parameters are already provided this will kick of
 * authentication immediately. The actual 'open' event won't be emitted
 * by the client until the authentication is successful.
 *
 * If a challenge is recieved, the user will send the url to the server
 * in response to get the appropriate redirect. If the URL is invalid the
 * server will respond with a REJECTION resulting in the client connection
 * being permanently closed.
 *
 * If a redirect is recieved, this connection is closed and updated with
 * a connection to the url supplied in the message.
 *
 * @param   {Object} message parsed connection message
 *
 * @private
 * @returns {void}
 */
Connection.prototype._handleConnectionResponse = function (message) {
  if (message.action === C.ACTIONS.PING) {
    this._lastHeartBeat = Date.now();
    this._submit(messageBuilder.getMsg(C.TOPIC.CONNECTION, C.ACTIONS.PONG));
  } else if (message.action === C.ACTIONS.ACK) {
    this._setState(C.CONNECTION_STATE.AWAITING_AUTHENTICATION);
    if (this._authParams) {
      this._sendAuthParams();
    }
  } else if (message.action === C.ACTIONS.CHALLENGE) {
    this._setState(C.CONNECTION_STATE.CHALLENGING);
    this._submit(messageBuilder.getMsg(C.TOPIC.CONNECTION, C.ACTIONS.CHALLENGE_RESPONSE, [this._originalUrl]));
  } else if (message.action === C.ACTIONS.REJECTION) {
    this._challengeDenied = true;
    this.close();
  } else if (message.action === C.ACTIONS.REDIRECT) {
    this._url = message.data[0];
    this._redirecting = true;
    this._endpoint.close();
  } else if (message.action === C.ACTIONS.ERROR) {
    if (message.data[0] === C.EVENT.CONNECTION_AUTHENTICATION_TIMEOUT) {
      this._deliberateClose = true;
      this._connectionAuthenticationTimeout = true;
      this._client._$onError(C.TOPIC.CONNECTION, message.data[0], message.data[1]);
    }
  }
};

/**
 * Callback for messages received for the AUTH topic. If
 * the authentication was successful this method will
 * open the connection and send all messages that the client
 * tried to send so far.
 *
 * @param   {Object} message parsed auth message
 *
 * @private
 * @returns {void}
 */
Connection.prototype._handleAuthResponse = function (message) {
  if (message.action === C.ACTIONS.ERROR) {

    if (message.data[0] === C.EVENT.TOO_MANY_AUTH_ATTEMPTS) {
      this._deliberateClose = true;
      this._tooManyAuthAttempts = true;
    } else if (message.data[0] === C.EVENT.INVALID_AUTH_MSG) {
      this._deliberateClose = true;

      if (this._authCallback) {
        this._authCallback(false, 'invalid authentication message');
      }

      return;
    } else {
      this._setState(C.CONNECTION_STATE.AWAITING_AUTHENTICATION);
    }

    if (this._authCallback) {
      this._authCallback(false, this._getAuthData(message.data[1]));
    }
  } else if (message.action === C.ACTIONS.ACK) {
    this._setState(C.CONNECTION_STATE.OPEN);

    if (this._authCallback) {
      this._authCallback(true, this._getAuthData(message.data[0]));
    }

    this._sendQueuedMessages();
  }
};

/**
 * Checks if data is present with login ack and converts it
 * to the correct type
 *
 * @param {Object} message parsed and validated deepstream message
 *
 * @private
 * @returns {object}
 */
Connection.prototype._getAuthData = function (data) {
  if (data === undefined) {
    return null;
  }
  return messageParser.convertTyped(data, this._client);
};

/**
 * Updates the connection state and emits the
 * connectionStateChanged event on the client
 *
 * @private
 * @returns {void}
 */
Connection.prototype._setState = function (state) {
  this._state = state;
  this._client.emit(C.EVENT.CONNECTION_STATE_CHANGED, state);
};

/**
 * If the connection drops or is closed in error this
 * method schedules increasing reconnection intervals
 *
 * If the number of failed reconnection attempts exceeds
 * options.maxReconnectAttempts the connection is closed
 *
 * @private
 * @returns {void}
 */
Connection.prototype._tryReconnect = function () {
  if (this._reconnectTimeout !== null) {
    return;
  }

  if (this._reconnectionAttempt < this._options.maxReconnectAttempts) {
    this._setState(C.CONNECTION_STATE.RECONNECTING);
    this._reconnectTimeout = setTimeout(this._tryOpen.bind(this), Math.min(this._options.maxReconnectInterval, this._options.reconnectIntervalIncrement * this._reconnectionAttempt));
    this._reconnectionAttempt++;
  } else {
    this._clearReconnect();
    this.close();
    this._client.emit(C.EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED, this._reconnectionAttempt);
  }
};

/**
 * Attempts to open a errourosly closed connection
 *
 * @private
 * @returns {void}
 */
Connection.prototype._tryOpen = function () {
  if (this._originalUrl !== this._url) {
    this._url = this._originalUrl;
  }
  this._createEndpoint();
  this._reconnectTimeout = null;
};

/**
 * Stops all further reconnection attempts,
 * either because the connection is open again
 * or because the maximal number of reconnection
 * attempts has been exceeded
 *
 * @private
 * @returns {void}
 */
Connection.prototype._clearReconnect = function () {
  clearTimeout(this._reconnectTimeout);
  this._reconnectTimeout = null;
  this._reconnectionAttempt = 0;
};

module.exports = Connection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../constants/constants":11,"../utils/utils":31,"./message-builder":16,"./message-parser":17,"ws":2}],16:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var C = _dereq_('../constants/constants');

var SEP = C.MESSAGE_PART_SEPERATOR;

/**
 * Creates a deepstream message string, based on the
 * provided parameters
 *
 * @param   {String} topic  One of CONSTANTS.TOPIC
 * @param   {String} action One of CONSTANTS.ACTIONS
 * @param   {Array} data An array of strings or JSON-serializable objects
 *
 * @returns {String} deepstream message string
 */
exports.getMsg = function (topic, action, data) {
  if (data && !(data instanceof Array)) {
    throw new Error('data must be an array');
  }
  var sendData = [topic, action];

  if (data) {
    for (var i = 0; i < data.length; i++) {
      if (_typeof(data[i]) === 'object') {
        sendData.push(JSON.stringify(data[i]));
      } else {
        sendData.push(data[i]);
      }
    }
  }

  return sendData.join(SEP) + C.MESSAGE_SEPERATOR;
};

/**
 * Converts a serializable value into its string-representation and adds
 * a flag that provides instructions on how to deserialize it.
 *
 * Please see messageParser.convertTyped for the counterpart of this method
 *
 * @param {Mixed} value
 *
 * @public
 * @returns {String} string representation of the value
 */
exports.typed = function (value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  if (type === 'string') {
    return C.TYPES.STRING + value;
  }

  if (value === null) {
    return C.TYPES.NULL;
  }

  if (type === 'object') {
    return C.TYPES.OBJECT + JSON.stringify(value);
  }

  if (type === 'number') {
    return C.TYPES.NUMBER + value.toString();
  }

  if (value === true) {
    return C.TYPES.TRUE;
  }

  if (value === false) {
    return C.TYPES.FALSE;
  }

  if (value === undefined) {
    return C.TYPES.UNDEFINED;
  }

  throw new Error('Can\'t serialize type ' + value);
};

},{"../constants/constants":11}],17:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');

/**
 * Parses ASCII control character seperated
 * message strings into digestable maps
 *
 * @constructor
 */
var MessageParser = function MessageParser() {
  this._actions = this._getActions();
};

/**
 * Main interface method. Receives a raw message
 * string, containing one or more messages
 * and returns an array of parsed message objects
 * or null for invalid messages
 *
 * @param   {String} message raw message
 *
 * @public
 *
 * @returns {Array} array of parsed message objects
 *                  following the format
 *                  {
 *                    raw: <original message string>
 *                    topic: <string>
 *                    action: <string - shortcode>
 *                    data: <array of strings>
 *                  }
 */
MessageParser.prototype.parse = function (message, client) {
  var parsedMessages = [];
  var rawMessages = message.split(C.MESSAGE_SEPERATOR);

  for (var i = 0; i < rawMessages.length; i++) {
    if (rawMessages[i].length > 2) {
      parsedMessages.push(this._parseMessage(rawMessages[i], client));
    }
  }

  return parsedMessages;
};

/**
 * Deserializes values created by MessageBuilder.typed to
 * their original format
 *
 * @param {String} value
 *
 * @public
 * @returns {Mixed} original value
 */
MessageParser.prototype.convertTyped = function (value, client) {
  var type = value.charAt(0);

  if (type === C.TYPES.STRING) {
    return value.substr(1);
  }

  if (type === C.TYPES.OBJECT) {
    try {
      return JSON.parse(value.substr(1));
    } catch (e) {
      client._$onError(C.TOPIC.ERROR, C.EVENT.MESSAGE_PARSE_ERROR, e.toString() + '(' + value + ')');
      return undefined;
    }
  }

  if (type === C.TYPES.NUMBER) {
    return parseFloat(value.substr(1));
  }

  if (type === C.TYPES.NULL) {
    return null;
  }

  if (type === C.TYPES.TRUE) {
    return true;
  }

  if (type === C.TYPES.FALSE) {
    return false;
  }

  if (type === C.TYPES.UNDEFINED) {
    return undefined;
  }

  client._$onError(C.TOPIC.ERROR, C.EVENT.MESSAGE_PARSE_ERROR, 'UNKNOWN_TYPE (' + value + ')');
  return undefined;
};

/**
 * Turns the ACTION:SHORTCODE constants map
 * around to facilitate shortcode lookup
 *
 * @private
 *
 * @returns {Object} actions
 */
MessageParser.prototype._getActions = function () {
  var actions = {};

  for (var key in C.ACTIONS) {
    actions[C.ACTIONS[key]] = key;
  }

  return actions;
};

/**
 * Parses an individual message (as oppnosed to a
 * block of multiple messages as is processed by .parse())
 *
 * @param   {String} message
 *
 * @private
 *
 * @returns {Object} parsedMessage
 */
MessageParser.prototype._parseMessage = function (message, client) {
  var parts = message.split(C.MESSAGE_PART_SEPERATOR);
  var messageObject = {};

  if (parts.length < 2) {
    client._$onError(C.TOPIC.ERROR, C.EVENT.MESSAGE_PARSE_ERROR, 'Insufficiant message parts');
    return null;
  }

  if (this._actions[parts[1]] === undefined) {
    client._$onError(C.TOPIC.ERROR, C.EVENT.MESSAGE_PARSE_ERROR, 'Unknown action ' + parts[1]);
    return null;
  }

  messageObject.raw = message;
  messageObject.topic = parts[0];
  messageObject.action = parts[1];
  messageObject.data = parts.splice(2);

  return messageObject;
};

module.exports = new MessageParser();

},{"../constants/constants":11}],18:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = _dereq_('component-emitter2');
var C = _dereq_('../constants/constants');
var ResubscribeNotifier = _dereq_('../utils/resubscribe-notifier');

function validateArguments(userId, callback, defaultAction) {
  if (typeof userId === 'function' && callback === undefined) {
    callback = userId; // eslint-disable-line
    userId = defaultAction; // eslint-disable-line
  } else if (userId === undefined && callback === undefined) {
    userId = defaultAction; // eslint-disable-line
  } else {
    userId = [userId]; // eslint-disable-line
  }

  if (callback !== undefined && typeof callback !== 'function') {
    throw new Error('invalid argument callback');
  }

  return { userId: userId, callback: callback };
}

/**
 * The main class for presence in deepstream
 *
 * Provides the presence interface and handles incoming messages
 * on the presence topic
 *
 * @param {Object} options deepstream configuration options
 * @param {Connection} connection
 * @param {Client} client
 *
 * @constructor
 * @public
 */
module.exports = function () {
  function PresenceHandler(options, connection, client) {
    _classCallCheck(this, PresenceHandler);

    this._options = options;
    this._connection = connection;
    this._client = client;
    this._queryEmitter = new EventEmitter();
    this._subscribeEmitter = new EventEmitter();
    this._ackTimeoutRegistry = client._$getAckTimeoutRegistry();
    this._resubscribeNotifier = new ResubscribeNotifier(this._client, this._resubscribe.bind(this));
    this._counter = 1;

    this._flush = this._flush.bind(this);
    this._flushTimeout = null;
    this._pendingSubscribes = {};
    this._pendingUnsubscribes = {};
  }
  /**
   * Queries for clients logged into deepstream.
   *
   * @param   {Function} callback Will be invoked with an array of clients
   *
   * @public
   * @returns {void}
   */


  _createClass(PresenceHandler, [{
    key: 'getAll',
    value: function getAll(users, callback) {
      if (typeof users === 'function') {
        this._connection.sendMsg(C.TOPIC.PRESENCE, C.ACTIONS.QUERY, [C.ACTIONS.QUERY]);
        this._queryEmitter.once(C.ACTIONS.QUERY, users);
      } else {
        var queryId = this._counter++;
        this._connection.sendMsg(C.TOPIC.PRESENCE, C.ACTIONS.QUERY, [queryId, users]);
        this._queryEmitter.once(queryId, callback);
      }
    }

    /**
     * Subscribes to client logins or logouts in deepstream
     *
     * @param   {Function} callback Will be invoked with the username of a client,
     *                              and a boolean to indicate if it was a login or
     *                              logout event
     * @public
     * @returns {void}
     */

  }, {
    key: 'subscribe',
    value: function subscribe(userId, callback) {
      var args = validateArguments(userId, callback, C.ACTIONS.SUBSCRIBE);
      if (!this._subscribeEmitter.hasListeners(args.userId)) {
        if (args.userId === C.ACTIONS.SUBSCRIBE) {
          this._sendGlobalSubscription(C.ACTIONS.SUBSCRIBE);
          this._subscribeEmitter.on(C.ACTIONS.SUBSCRIBE, args.callback);
        } else {
          delete this._pendingUnsubscribes[args.userId];
          this._pendingSubscribes[args.userId] = true;
          if (!this._flushTimeout) {
            this._flushTimeout = setTimeout(this._flush, 0);
          }
          this._subscribeEmitter.on(args.userId, args.callback);
        }
      }
    }

    /**
     * Removes a callback for a specified presence event
     *
     * @param   {Function} callback The callback to unregister via {PresenceHandler#unsubscribe}
     *
     * @public
     * @returns {void}
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe(userId, callback) {
      var args = validateArguments(userId, callback, C.ACTIONS.UNSUBSCRIBE);

      if (args.userId === C.ACTIONS.UNSUBSCRIBE) {
        this._subscribeEmitter.off(C.ACTIONS.SUBSCRIBE, args.callback);
      } else {
        this._subscribeEmitter.off(args.userId, args.callback);
      }

      if (!this._subscribeEmitter.hasListeners(args.userId)) {
        if (args.userId === C.ACTIONS.UNSUBSCRIBE) {
          this._sendGlobalSubscription(C.ACTIONS.UNSUBSCRIBE);
        } else {
          delete this._pendingSubscribes[args.userId];
          this._pendingUnsubscribes[args.userId] = true;
          if (!this._flushTimeout) {
            this._flushTimeout = setTimeout(this._flush, 0);
          }
        }
      }
    }

    /**
     * Handles incoming messages from the server
     *
     * @param   {Object} message parsed deepstream message
     *
     * @package private
     * @returns {void}
     */

  }, {
    key: '_$handle',
    value: function _$handle(message) {
      if (message.action === C.ACTIONS.ERROR && message.data[0] === C.EVENT.MESSAGE_DENIED) {
        this._ackTimeoutRegistry.remove(C.TOPIC.PRESENCE, message.data[1]);
        message.processedError = true;
        this._client._$onError(C.TOPIC.PRESENCE, C.EVENT.MESSAGE_DENIED, message.data[1]);
      } else if (message.action === C.ACTIONS.ACK) {
        this._ackTimeoutRegistry.clear(message);
      } else if (message.action === C.ACTIONS.PRESENCE_JOIN) {
        this._subscribeEmitter.emit(C.ACTIONS.SUBSCRIBE, message.data[0], true);
        this._subscribeEmitter.emit(message.data[0], true, message.data[0]);
      } else if (message.action === C.ACTIONS.PRESENCE_LEAVE) {
        this._subscribeEmitter.emit(C.ACTIONS.SUBSCRIBE, message.data[0], false);
        this._subscribeEmitter.emit(message.data[0], false, message.data[0]);
      } else if (message.action === C.ACTIONS.QUERY) {
        try {
          var data = JSON.parse(message.data[1]);
          if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            this._queryEmitter.emit(message.data[0], data);
            return;
          }
        } catch (e) {
          // not json, old event
        }
        this._queryEmitter.emit(C.ACTIONS.QUERY, message.data);
      } else {
        this._client._$onError(C.TOPIC.PRESENCE, C.EVENT.UNSOLICITED_MESSAGE, message.action);
      }
    }

    /**
     * Resubscribes to presence subscription when connection is lost
     *
     * @package private
     * @returns {void}
     */

  }, {
    key: '_resubscribe',
    value: function _resubscribe() {
      var callbacks = Object.keys(this._subscribeEmitter._callbacks || {});
      if (callbacks.indexOf(C.ACTIONS.SUBSCRIBE) > -1) {
        callbacks.splice(callbacks.indexOf(C.ACTIONS.SUBSCRIBE), 1);
        this._sendGlobalSubscription(C.ACTIONS.SUBSCRIBE);
      }
      if (callbacks.length > 0) {
        this._sendSubscriptionBulk(C.ACTIONS.SUBSCRIBE, callbacks);
      }
    }
  }, {
    key: '_flush',
    value: function _flush() {
      var pendingSubscribes = Object.keys(this._pendingSubscribes);
      if (pendingSubscribes.length > 0) {
        this._sendSubscriptionBulk(C.ACTIONS.SUBSCRIBE, pendingSubscribes);
        this._pendingSubscribes = {};
      }
      var pendingUnsubscribes = Object.keys(this._pendingUnsubscribes);
      if (pendingUnsubscribes.length > 0) {
        this._sendSubscriptionBulk(C.ACTIONS.UNSUBSCRIBE, pendingUnsubscribes);
        this._pendingUnsubscribes = {};
      }
      this._flushTimeout = null;
    }
  }, {
    key: '_sendSubscriptionBulk',
    value: function _sendSubscriptionBulk(action, names) {
      var correlationId = this._counter++;
      this._ackTimeoutRegistry.add({
        topic: C.TOPIC.PRESENCE,
        action: action,
        name: correlationId
      });
      this._connection.sendMsg(C.TOPIC.PRESENCE, action, [correlationId, names]);
    }
  }, {
    key: '_sendGlobalSubscription',
    value: function _sendGlobalSubscription(action) {
      this._ackTimeoutRegistry.add({
        topic: C.TOPIC.PRESENCE,
        action: action,
        name: action
      });
      this._connection.sendMsg(C.TOPIC.PRESENCE, action, [action]);
    }
  }]);

  return PresenceHandler;
}();

},{"../constants/constants":11,"../utils/resubscribe-notifier":29,"component-emitter2":1}],19:[function(_dereq_,module,exports){
'use strict';
/* eslint-disable prefer-rest-params, prefer-spread */

var Record = _dereq_('./record');
var EventEmitter = _dereq_('component-emitter2');

/**
 * An AnonymousRecord is a record without a predefined name. It
 * acts like a wrapper around an actual record that can
 * be swapped out for another one whilst keeping all bindings intact.
 *
 * Imagine a customer relationship management system with a list of users
 * on the left and a user detail panel on the right. The user detail
 * panel could use the anonymous record to set up its bindings, yet whenever
 * a user is chosen from the list of existing users the anonymous record's
 * setName method is called and the detail panel will update to
 * show the selected user's details
 *
 * @param {RecordHandler} recordHandler
 *
 * @constructor
 */
var AnonymousRecord = function AnonymousRecord(recordHandler) {
  this.name = null;
  this._recordHandler = recordHandler;
  this._record = null;
  this._subscriptions = [];
  this._proxyMethod('delete');
  this._proxyMethod('set');
  this._proxyMethod('discard');
};

EventEmitter(AnonymousRecord.prototype); // eslint-disable-line

/**
 * Proxies the actual record's get method. It is valid
 * to call get prior to setName - if no record exists,
 * the method returns undefined
 *
 * @param   {[String]} path A json path. If non is provided,
 *                          the entire record is returned.
 *
 * @public
 * @returns {mixed}    the value of path or the entire object
 */
AnonymousRecord.prototype.get = function (path) {
  if (this._record === null) {
    return undefined;
  }

  return this._record.get(path);
};

/**
 * Proxies the actual record's subscribe method. The same parameters
 * can be used. Can be called prior to setName(). Please note, triggerIfReady
 * will always be set to true to reflect changes in the underlying record.
 *
 * @param   {[String]} path   A json path. If non is provided,
 *                              it subscribes to changes for the entire record.
 *
 * @param   {Function} callback A callback function that will be invoked whenever
 *                              the subscribed path or record updates
 *
 * @public
 * @returns {void}
 */
AnonymousRecord.prototype.subscribe = function () {
  var parameters = Record.prototype._normalizeArguments(arguments);
  parameters.triggerNow = true;
  this._subscriptions.push(parameters);

  if (this._record !== null) {
    this._record.subscribe(parameters);
  }
};

/**
 * Proxies the actual record's unsubscribe method. The same parameters
 * can be used. Can be called prior to setName()
 *
 * @param   {[String]} path   A json path. If non is provided,
 *                              it subscribes to changes for the entire record.
 *
 * @param   {Function} callback A callback function that will be invoked whenever
 *                              the subscribed path or record updates
 *
 * @public
 * @returns {void}
 */
AnonymousRecord.prototype.unsubscribe = function () {
  var parameters = Record.prototype._normalizeArguments(arguments);
  var subscriptions = [];
  var i = void 0;

  for (i = 0; i < this._subscriptions.length; i++) {
    if (this._subscriptions[i].path !== parameters.path || this._subscriptions[i].callback !== parameters.callback) {
      subscriptions.push(this._subscriptions[i]);
    }
  }

  this._subscriptions = subscriptions;

  if (this._record !== null) {
    this._record.unsubscribe(parameters);
  }
};

/**
 * Sets the underlying record the anonymous record is bound
 * to. Can be called multiple times.
 *
 * @param {String} recordName
 *
 * @public
 * @returns {void}
 */
AnonymousRecord.prototype.setName = function (recordName) {
  if (this.name === recordName) {
    return;
  }

  this.name = recordName;

  var i = void 0;

  if (this._record !== null && !this._record.isDestroyed) {
    for (i = 0; i < this._subscriptions.length; i++) {
      this._record.unsubscribe(this._subscriptions[i]);
    }
    this._record.discard();
  }

  this._record = this._recordHandler.getRecord(recordName);

  for (i = 0; i < this._subscriptions.length; i++) {
    this._record.subscribe(this._subscriptions[i]);
  }

  this._record.whenReady(this.emit.bind(this, 'ready'));
  this.emit('nameChanged', recordName);
};

/**
 * Adds the specified method to this method and forwards it
 * to _callMethodOnRecord
 *
 * @param   {String} methodName
 *
 * @private
 * @returns {void}
 */
AnonymousRecord.prototype._proxyMethod = function (methodName) {
  this[methodName] = this._callMethodOnRecord.bind(this, methodName);
};

/**
 * Invokes the specified method with the provided parameters on
 * the underlying record. Throws erros if the method is not
 * specified yet or doesn't expose the method in question
 *
 * @param   {String} methodName
 *
 * @private
 * @returns {Mixed} the return value of the actual method
 */
AnonymousRecord.prototype._callMethodOnRecord = function (methodName) {
  if (this._record === null) {
    throw new Error('Can`t invoke ' + methodName + '. AnonymousRecord not initialised. Call setName first');
  }

  if (typeof this._record[methodName] !== 'function') {
    throw new Error(methodName + ' is not a method on the record');
  }

  var args = Array.prototype.slice.call(arguments, 1);

  return this._record[methodName].apply(this._record, args);
};

module.exports = AnonymousRecord;

},{"./record":23,"component-emitter2":1}],20:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = _dereq_('../utils/utils');

var PARTS_REG_EXP = /([^.[\]\s]+)/g;
var cache = Object.create(null);

/**
 * Returns the value of the path or
 * undefined if the path can't be resolved
 *
 * @public
 * @returns {Mixed}
 */
module.exports.get = function (data, path, deepCopy) {
  var tokens = tokenize(path);
  var value = data;
  for (var i = 0; i < tokens.length; i++) {
    if (value === undefined) {
      return undefined;
    }
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
      throw new Error('invalid data or path');
    }
    value = value[tokens[i]];
  }

  return deepCopy !== false ? utils.deepCopy(value) : value;
};

/**
 * Sets the value of the path. If the path (or parts
 * of it) doesn't exist yet, it will be created
 *
 * @param {Mixed} value
 *
 * @public
 * @returns {Mixed} updated value
 */
module.exports.set = function (data, path, value, deepCopy) {
  var tokens = tokenize(path);

  if (tokens.length === 0) {
    return patch(data, value, deepCopy);
  }

  var oldValue = module.exports.get(data, path, false);
  var newValue = patch(oldValue, value, deepCopy);

  if (newValue === oldValue) {
    return data;
  }

  var result = utils.shallowCopy(data);

  var node = result;
  for (var i = 0; i < tokens.length; i++) {
    if (i === tokens.length - 1) {
      node[tokens[i]] = newValue;
    } else if (node[tokens[i]] !== undefined) {
      node = node[tokens[i]] = utils.shallowCopy(node[tokens[i]]);
    } else if (tokens[i + 1] && !isNaN(tokens[i + 1])) {
      node = node[tokens[i]] = [];
    } else {
      node = node[tokens[i]] = Object.create(null);
    }
  }

  return result;
};

/**
 * Merge the new value into the old value
 * @param  {Mixed} oldValue
 * @param  {Mixed} newValue
 * @param  {boolean} deepCopy
 * @return {Mixed}
 */
function patch(oldValue, newValue, deepCopy) {
  var i = void 0;
  var j = void 0;
  if (oldValue === null || newValue === null) {
    return newValue;
  } else if (Array.isArray(oldValue) && Array.isArray(newValue)) {
    var arr = void 0;
    for (i = 0; i < newValue.length; i++) {
      var value = patch(oldValue[i], newValue[i], false);
      if (!arr) {
        if (value === oldValue[i]) {
          continue;
        }
        arr = [];
        for (j = 0; j < i; ++j) {
          arr[j] = oldValue[j];
        }
      }
      arr[i] = value;
    }
    arr = arr && deepCopy !== false ? utils.deepCopy(arr) : arr;
    arr = arr || (oldValue.length === newValue.length ? oldValue : newValue);
    return arr;
  } else if (!Array.isArray(newValue) && (typeof oldValue === 'undefined' ? 'undefined' : _typeof(oldValue)) === 'object' && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object') {
    var obj = void 0;
    var props = Object.keys(newValue);
    for (i = 0; i < props.length; i++) {
      var _value = patch(oldValue[props[i]], newValue[props[i]], false);
      if (!obj) {
        if (_value === oldValue[props[i]]) {
          continue;
        }
        obj = Object.create(null);
        for (j = 0; j < i; ++j) {
          obj[props[j]] = oldValue[props[j]];
        }
      }
      obj[props[i]] = newValue[props[i]];
    }
    obj = obj && deepCopy !== false ? utils.deepCopy(obj) : obj;
    obj = obj || (Object.keys(oldValue).length === props.length ? oldValue : newValue);
    return obj;
  } else if (newValue !== oldValue) {
    return deepCopy !== false ? utils.deepCopy(newValue) : newValue;
  }

  return oldValue;
}

/**
 * Parses the path. Splits it into
 * keys for objects and indices for arrays.
 *
 * @returns Array of tokens
 */
function tokenize(path) {
  if (cache[path]) {
    return cache[path];
  }

  var parts = String(path) !== 'undefined' ? String(path).match(PARTS_REG_EXP) : [];

  if (!parts) {
    throw new Error('invalid path ' + path);
  }

  cache[path] = parts;
  return cache[path];
}

},{"../utils/utils":31}],21:[function(_dereq_,module,exports){
'use strict';
/* eslint-disable prefer-rest-params */

var EventEmitter = _dereq_('component-emitter2');
var Record = _dereq_('./record');
var C = _dereq_('../constants/constants');

var ENTRY_ADDED_EVENT = 'entry-added';
var ENTRY_REMOVED_EVENT = 'entry-removed';
var ENTRY_MOVED_EVENT = 'entry-moved';

/**
 * A List is a specialised Record that contains
 * an Array of recordNames and provides a number
 * of convinience methods for interacting with them.
 *
 * @param {RecordHanlder} recordHandler
 * @param {String} name    The name of the list
 *
 * @constructor
 */
var List = function List(recordHandler, name, options) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }

  this._recordHandler = recordHandler;
  this._record = this._recordHandler.getRecord(name, options);
  this._record._applyUpdate = this._applyUpdate.bind(this);

  this._record.on('delete', this.emit.bind(this, 'delete'));
  this._record.on('discard', this._onDiscard.bind(this));
  this._record.on('ready', this._onReady.bind(this));

  this.isDestroyed = this._record.isDestroyed;
  this.isReady = this._record.isReady;
  this.name = name;
  this._queuedMethods = [];
  this._beforeStructure = null;
  this._hasAddListener = null;
  this._hasRemoveListener = null;
  this._hasMoveListener = null;

  this.delete = this._record.delete.bind(this._record);
  this.discard = this._record.discard.bind(this._record);
  this.whenReady = this._record.whenReady.bind(this);
};

EventEmitter(List.prototype); // eslint-disable-line

/**
 * Returns the array of list entries or an
 * empty array if the list hasn't been populated yet.
 *
 * @public
 * @returns {Array} entries
 */
List.prototype.getEntries = function () {
  var entries = this._record.get();

  if (!(entries instanceof Array)) {
    return [];
  }

  return entries;
};

/**
 * Returns true if the list is empty
 *
 * @public
 * @returns {Boolean} isEmpty
 */
List.prototype.isEmpty = function () {
  return this.getEntries().length === 0;
};

/**
 * Updates the list with a new set of entries
 *
 * @param {Array} entries
 * @param {Function} [callback]
 *
 * @public
 * @returns {void}
 */
List.prototype.setEntries = function (entries, callback) {
  var errorMsg = 'entries must be an array of record names';
  var i = void 0;

  if (!(entries instanceof Array)) {
    throw new Error(errorMsg);
  }

  for (i = 0; i < entries.length; i++) {
    if (typeof entries[i] !== 'string') {
      throw new Error(errorMsg);
    }
  }

  if (this._record.isReady === false) {
    this._queuedMethods.push(this.setEntries.bind(this, entries, callback));
  } else {
    this._beforeChange();
    if (callback) {
      this._record.set(entries, callback);
    } else {
      this._record.set(entries);
    }
    this._afterChange();
  }
};

/**
 * Wrapper function around the list.setEntries that returns a promise
 * if no callback is supplied.
 *
 * @param {Array} entries
 * @param {Function} callback
 *
 * @public
 * @returns {Promise|void} if a callback is omitted a Promise is returned
 *                         with the result of the write
 */
List.prototype.setEntriesWithAck = function (entries, callback) {
  var _this = this;

  if (callback) {
    return this.setEntries(entries, callback);
  }
  return new Promise(function (resolve, reject) {
    _this.setEntries(entries, function (error) {
      return error === null ? resolve() : reject(error);
    });
  });
};

/**
 * Removes an entry from the list
 *
 * @param {String} entry
 * @param {Number} [indexOrCallback]
 * @param {Function} [callback]
 *
 * @public
 * @returns {void}
 */
List.prototype.removeEntry = function (entry, indexOrCallback, callback) {
  var index = indexOrCallback;
  var cb = callback;
  if (typeof indexOrCallback === 'function') {
    cb = indexOrCallback;
    index = undefined;
  }

  if (this._record.isReady === false) {
    this._queuedMethods.push(this.removeEntry.bind(this, entry, index, cb));
    return;
  }

  var currentEntries = this._record.get();
  var hasIndex = this._hasIndex(index);
  var entries = [];
  var i = void 0;

  for (i = 0; i < currentEntries.length; i++) {
    if (currentEntries[i] !== entry || hasIndex && index !== i) {
      entries.push(currentEntries[i]);
    }
  }

  this._beforeChange();
  if (cb) {
    this._record.set(entries, cb);
  } else {
    this._record.set(entries);
  }
  this._afterChange();
};

/**
 * Wrapper function around the list.removeEntry that returns a promise
 * if no callback is supplied.
 *
 * @param {String} entry
 * @param {Number|Function} [indexOrCallback]
 * @param {Function} [callback]
 *
 * @public
 * @returns {Promise|void} if a callback is omitted a Promise is returned
 *                         with the result of the write
 */
List.prototype.removeEntryWithAck = function (entry, indexOrCallback, callback) {
  var _this2 = this;

  if (typeof indexOrCallback === 'number' && callback) {
    return this.removeEntry(entry, indexOrCallback, callback);
  }
  if (typeof indexOrCallback === 'function') {
    return this.removeEntry(entry, indexOrCallback);
  }
  return new Promise(function (resolve, reject) {
    _this2.removeEntry(entry, indexOrCallback, function (error) {
      return error === null ? resolve() : reject(error);
    });
  });
};

/**
 * Adds an entry to the list
 *
 * @param {String} entry
 * @param {Number|Function} [indexOrCallback]
 * @param {Function} [callback]
 *
 * @public
 * @returns {void}
 */
List.prototype.addEntry = function (entry, indexOrCallback, callback) {
  if (typeof entry !== 'string') {
    throw new Error('Entry must be a recordName');
  }

  var index = indexOrCallback;
  var cb = callback;
  if (typeof indexOrCallback === 'function') {
    cb = indexOrCallback;
    index = undefined;
  }

  if (this._record.isReady === false) {
    this._queuedMethods.push(this.addEntry.bind(this, entry, index, cb));
    return;
  }

  var hasIndex = this._hasIndex(index);
  var entries = this.getEntries();
  if (hasIndex) {
    entries.splice(index, 0, entry);
  } else {
    entries.push(entry);
  }

  this._beforeChange();
  if (cb) {
    this._record.set(entries, cb);
  } else {
    this._record.set(entries);
  }
  this._afterChange();
};

/**
 * Wrapper function around the list.addEntry that returns a promise
 * if no callback is supplied.
 *
 * @param {String} entry
 * @param {Number|Function} [index]
 * @param {Function} callback
 *
 * @public
 * @returns {Promise|void} if a callback is omitted a Promise is returned
 *                         with the result of the write
 */
List.prototype.addEntryWithAck = function (entry, indexOrCallback, callback) {
  var _this3 = this;

  if (typeof indexOrCallback === 'number' && callback) {
    return this.addEntry(entry, indexOrCallback, callback);
  }
  if (typeof indexOrCallback === 'function') {
    return this.addEntry(entry, indexOrCallback);
  }
  return new Promise(function (resolve, reject) {
    _this3.addEntry(entry, indexOrCallback, function (error) {
      return error === null ? resolve() : reject(error);
    });
  });
};

/**
 * Proxies the underlying Record's subscribe method. Makes sure
 * that no path is provided
 *
 * @public
 * @returns {void}
 */
List.prototype.subscribe = function () {
  var parameters = Record.prototype._normalizeArguments(arguments);

  if (parameters.path) {
    throw new Error('path is not supported for List.subscribe');
  }

  // Make sure the callback is invoked with an empty array for new records
  var listCallback = function (callback) {
    callback(this.getEntries());
  }.bind(this, parameters.callback);

  /**
  * Adding a property onto a function directly is terrible practice,
  * and we will change this as soon as we have a more seperate approach
  * of creating lists that doesn't have records default state.
  *
  * The reason we are holding a referencing to wrapped array is so that
  * on unsubscribe it can provide a reference to the actual method the
  * record is subscribed too.
  **/
  parameters.callback.wrappedCallback = listCallback;
  parameters.callback = listCallback;

  this._record.subscribe(parameters);
};

/**
 * Proxies the underlying Record's unsubscribe method. Makes sure
 * that no path is provided
 *
 * @public
 * @returns {void}
 */
List.prototype.unsubscribe = function () {
  var parameters = Record.prototype._normalizeArguments(arguments);

  if (parameters.path) {
    throw new Error('path is not supported for List.unsubscribe');
  }

  parameters.callback = parameters.callback.wrappedCallback;
  this._record.unsubscribe(parameters);
};

/**
 * Listens for changes in the Record's ready state
 * and applies them to this list
 *
 * @private
 * @returns {void}
 */
List.prototype._onReady = function () {
  this.isReady = true;

  for (var i = 0; i < this._queuedMethods.length; i++) {
    this._queuedMethods[i]();
  }

  this._queuedMethods = [];
  this.emit('ready');
};

/**
 * Listens for the record discard event and applies
 * changes to list
 *
 * @private
 * @returns {void}
 */
List.prototype._onDiscard = function () {
  this.isDestroyed = true;
  this.emit('discard');
};

/**
 * Proxies the underlying Record's _update method. Set's
 * data to an empty array if no data is provided.
 *
 * @param   {null}   path must (should :-)) be null
 * @param   {Array}  data
 *
 * @private
 * @returns {void}
 */
List.prototype._applyUpdate = function (message) {
  if (message.action === C.ACTIONS.PATCH) {
    throw new Error('PATCH is not supported for Lists');
  }

  if (message.data[2].charAt(0) !== '[') {
    message.data[2] = '[]';
  }

  this._beforeChange();
  Record.prototype._applyUpdate.call(this._record, message);
  this._afterChange();
};

/**
 * Validates that the index provided is within the current set of entries.
 *
 * @param {Number} index
 *
 * @private
 * @returns {Number}
 */
List.prototype._hasIndex = function (index) {
  var hasIndex = false;
  var entries = this.getEntries();
  if (index !== undefined) {
    if (isNaN(index)) {
      throw new Error('Index must be a number');
    }
    if (index !== entries.length && (index >= entries.length || index < 0)) {
      throw new Error('Index must be within current entries');
    }
    hasIndex = true;
  }
  return hasIndex;
};

/**
 * Establishes the current structure of the list, provided the client has attached any
 * add / move / remove listener
 *
 * This will be called before any change to the list, regardsless if the change was triggered
 * by an incoming message from the server or by the client
 *
 * @private
 * @returns {void}
 */
List.prototype._beforeChange = function () {
  this._hasAddListener = this.listeners(ENTRY_ADDED_EVENT).length > 0;
  this._hasRemoveListener = this.listeners(ENTRY_REMOVED_EVENT).length > 0;
  this._hasMoveListener = this.listeners(ENTRY_MOVED_EVENT).length > 0;

  if (this._hasAddListener || this._hasRemoveListener || this._hasMoveListener) {
    this._beforeStructure = this._getStructure();
  } else {
    this._beforeStructure = null;
  }
};

/**
 * Compares the structure of the list after a change to its previous structure and notifies
 * any add / move / remove listener. Won't do anything if no listeners are attached.
 *
 * @private
 * @returns {void}
 */
List.prototype._afterChange = function () {
  if (this._beforeStructure === null) {
    return;
  }

  var after = this._getStructure();
  var before = this._beforeStructure;
  var entry = void 0;
  var i = void 0;

  if (this._hasRemoveListener) {
    for (entry in before) {
      for (i = 0; i < before[entry].length; i++) {
        if (after[entry] === undefined || after[entry][i] === undefined) {
          this.emit(ENTRY_REMOVED_EVENT, entry, before[entry][i]);
        }
      }
    }
  }

  if (this._hasAddListener || this._hasMoveListener) {
    for (entry in after) {
      if (before[entry] === undefined) {
        for (i = 0; i < after[entry].length; i++) {
          this.emit(ENTRY_ADDED_EVENT, entry, after[entry][i]);
        }
      } else {
        for (i = 0; i < after[entry].length; i++) {
          if (before[entry][i] !== after[entry][i]) {
            if (before[entry][i] === undefined) {
              this.emit(ENTRY_ADDED_EVENT, entry, after[entry][i]);
            } else {
              this.emit(ENTRY_MOVED_EVENT, entry, after[entry][i]);
            }
          }
        }
      }
    }
  }
};

/**
 * Iterates through the list and creates a map with the entry as a key
 * and an array of its position(s) within the list as a value, e.g.
 *
 * {
 *   'recordA': [ 0, 3 ],
 *   'recordB': [ 1 ],
 *   'recordC': [ 2 ]
 * }
 *
 * @private
 * @returns {Array} structure
 */
List.prototype._getStructure = function () {
  var structure = {};
  var i = void 0;
  var entries = this._record.get();

  for (i = 0; i < entries.length; i++) {
    if (structure[entries[i]] === undefined) {
      structure[entries[i]] = [i];
    } else {
      structure[entries[i]].push(i);
    }
  }

  return structure;
};

module.exports = List;

},{"../constants/constants":11,"./record":23,"component-emitter2":1}],22:[function(_dereq_,module,exports){
'use strict';
/* eslint-disable consistent-return, no-confusing-arrow */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Record = _dereq_('./record');
var AnonymousRecord = _dereq_('./anonymous-record');
var List = _dereq_('./list');
var Listener = _dereq_('../utils/listener');
var SingleNotifier = _dereq_('../utils/single-notifier');
var C = _dereq_('../constants/constants');
var messageParser = _dereq_('../message/message-parser');
var messageBuilder = _dereq_('../message/message-builder');
var EventEmitter = _dereq_('component-emitter2');

/**
 * A collection of factories for records. This class
 * is exposed as client.record
 *
 * @param {Object} options    deepstream options
 * @param {Connection} connection
 * @param {Client} client
 */
var RecordHandler = function RecordHandler(options, connection, client) {
  this._options = options;
  this._connection = connection;
  this._client = client;
  this._records = {};
  this._lists = {};
  this._listener = {};
  this._writeCallbacks = {};
  this._destroyEventEmitter = new EventEmitter();

  this._hasRegistry = new SingleNotifier(client, connection, C.TOPIC.RECORD, C.ACTIONS.HAS, this._options.recordReadTimeout);
  this._snapshotRegistry = new SingleNotifier(client, connection, C.TOPIC.RECORD, C.ACTIONS.SNAPSHOT, this._options.recordReadTimeout);
  this._headRegistry = new SingleNotifier(client, connection, C.TOPIC.RECORD, C.ACTIONS.HEAD, this._options.recordReadTimeout);
};

RecordHandler.prototype.recordNames = function () {
  return Object.keys(this._records);
};

/**
 * Returns an existing record or creates a new one.
 *
 * @param   {String} name              the unique name of the record
 * @param   {[Object]} recordOptions   A map of parameters for this particular record.
 *                                      { persist: true }
 *
 * @public
 * @returns {Record}
 */
RecordHandler.prototype.getRecord = function (name, recordOptions) {
  if (!this._records[name]) {
    this._records[name] = new Record(name, recordOptions || {}, this._connection, this._options, this._client);
    this._records[name].on('error', this._onRecordError.bind(this, name));
    this._records[name].on('destroyPending', this._onDestroyPending.bind(this, name));
    this._records[name].on('delete', this._removeRecord.bind(this, name));
    this._records[name].on('discard', this._removeRecord.bind(this, name));
  }

  this._records[name].usages++;

  return this._records[name];
};

/**
 * Returns an existing List or creates a new one. A list is a specialised
 * type of record that holds an array of recordNames.
 *
 * @param   {String} name       the unique name of the list
 * @param   {[Object]} options   A map of parameters for this particular list.
 *                              { persist: true }
 *
 * @public
 * @returns {List}
 */
RecordHandler.prototype.getList = function (name, options) {
  if (!this._lists[name]) {
    this._lists[name] = new List(this, name, options);
  } else {
    this._records[name].usages++;
  }
  return this._lists[name];
};

/**
 * Returns an anonymous record. A anonymous record is effectively
 * a wrapper that mimicks the API of a record, but allows for the
 * underlying record to be swapped without loosing subscriptions etc.
 *
 * This is particularly useful when selecting from a number of similarly
 * structured records. E.g. a list of users that can be choosen from a list
 *
 * The only API difference to a normal record is an additional setName( name ) method.
 *
 *
 * @public
 * @returns {AnonymousRecord}
 */
RecordHandler.prototype.getAnonymousRecord = function () {
  return new AnonymousRecord(this);
};

/**
 * Allows to listen for record subscriptions made by this or other clients. This
 * is useful to create "active" data providers, e.g. providers that only provide
 * data for a particular record if a user is actually interested in it
 *
 * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
 * @param   {Function} callback
 *
 * @public
 * @returns {void}
 */
RecordHandler.prototype.listen = function (pattern, callback) {
  if (typeof pattern !== 'string' || pattern.length === 0) {
    throw new Error('invalid argument pattern');
  }
  if (typeof callback !== 'function') {
    throw new Error('invalid argument callback');
  }

  if (this._listener[pattern] && !this._listener[pattern].destroyPending) {
    this._client._$onError(C.TOPIC.RECORD, C.EVENT.LISTENER_EXISTS, pattern);
    return;
  }

  if (this._listener[pattern]) {
    this._listener[pattern].destroy();
  }

  this._listener[pattern] = new Listener(C.TOPIC.RECORD, pattern, callback, this._options, this._client, this._connection);
};

/**
 * Removes a listener that was previously registered with listenForSubscriptions
 *
 * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
 * @param   {Function} callback
 *
 * @public
 * @returns {void}
 */
RecordHandler.prototype.unlisten = function (pattern) {
  if (typeof pattern !== 'string' || pattern.length === 0) {
    throw new Error('invalid argument pattern');
  }

  var listener = this._listener[pattern];
  if (listener && !listener.destroyPending) {
    listener.sendDestroy();
  } else if (this._listener[pattern]) {
    this._listener[pattern].destroy();
    delete this._listener[pattern];
  } else {
    this._client._$onError(C.TOPIC.RECORD, C.EVENT.NOT_LISTENING, pattern);
  }
};

/**
 * Retrieve the current record data without subscribing to changes
 *
 * @param   {String}  name the unique name of the record
 * @param   {Function}  callback
 *
 * @public
 */
RecordHandler.prototype.snapshot = function (name, callback) {
  var _this = this;

  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument: name');
  }

  var record = this._records[name];
  if (record && record.isReady) {
    if (callback) {
      callback(null, record.get());
      return;
    }
    return Promise.resolve(record.get());
  }
  if (callback) {
    this._snapshotRegistry.request(name, { callback: callback });
  } else {
    return new Promise(function (resolve, reject) {
      _this._snapshotRegistry.request(name, { resolve: resolve, reject: reject });
    });
  }
};

/**
 * Allows the user to query to see whether or not the record exists.
 *
 * @param   {String}  name the unique name of the record
 * @param   {Function}  callback
 *
 * @public
 */
RecordHandler.prototype.has = function (name, callback) {
  var _this2 = this;

  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument: name');
  }

  if (this._records[name]) {
    if (callback) {
      callback(null, true);
      return;
    }
    return Promise.resolve(true);
  }

  if (callback) {
    this._hasRegistry.request(name, { callback: callback });
  } else {
    return new Promise(function (resolve, reject) {
      _this2._hasRegistry.request(name, { resolve: resolve, reject: reject });
    });
  }
};

/**
 * Allows the user to query for the version number of a record.
 *
 * @param   {String}  name the unique name of the record
 * @param   {Function}  callback
 *
 * @public
 */
RecordHandler.prototype.head = function (name, callback) {
  var _this3 = this;

  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument: name');
  }

  var record = this._records[name];
  if (record && record.isReady) {
    if (callback) {
      callback(null, record.version);
      return;
    }
    return Promise.resolve(record.version);
  }

  if (callback) {
    this._headRegistry.request(name, { callback: callback });
  } else {
    return new Promise(function (resolve, reject) {
      _this3._headRegistry.request(name, { resolve: resolve, reject: reject });
    });
  }
};

/**
 * A wrapper function around setData. The function works exactly
 * the same however when a callback is omitted a Promise will be
 * returned.
 *
 * @param {String}          recordName     the name of the record to set
 * @param {String|Object}   pathOrData     the path to set or the data to write
 * @param {Object|Function} dataOrCallback the data to write or the write acknowledgement
 *                                         callback
 * @param {Function}        callback       the callback that will be called with the result
 *                                         of the write
 * @returns {Promise} if a callback is omitted a Promise will be returned that resolves
 *                    with the result of the write
 */
RecordHandler.prototype.setDataWithAck = function (recordName, pathOrData, dataOrCallback, callback) {
  var _this4 = this;

  if (dataOrCallback && callback) {
    this.setData(recordName, pathOrData, dataOrCallback, callback);
  } else if ((typeof pathOrData === 'undefined' ? 'undefined' : _typeof(pathOrData)) === 'object' && dataOrCallback) {
    this.setData(recordName, pathOrData, dataOrCallback);
  } else if (pathOrData && dataOrCallback) {
    return new Promise(function (resolve, reject) {
      _this4.setData(recordName, pathOrData, dataOrCallback, function (error) {
        return error === null ? resolve() : reject(error);
      });
    });
  } else {
    return new Promise(function (resolve, reject) {
      _this4.setData(recordName, pathOrData, function (error) {
        return error === null ? resolve() : reject(error);
      });
    });
  }
};

/**
 * Allows setting the data for a record without being subscribed to it. If
 * the client is subscribed to the record locally, the update will be proxied
 * through the record object like a normal call to Record.set. Otherwise a force
 * write will be performed that overwrites any remote data.
 *
 * @param {String} recordName the name of the record to write to
 * @param {String|Object} pathOrData either the path to write data to or the data to
 *                                   set the record to
 * @param {Object|Primitive|Function} dataOrCallback either the data to write to the
 *                                                   record or a callback function
 *                                                   indicating write success
 * @param {Function} callback if provided this will be called with the result of the
 *                            write
 */
RecordHandler.prototype.setData = function (recordName, pathOrData, dataOrCallback, callback) {
  var path = void 0;
  var data = void 0;
  var cb = void 0;

  if (arguments.length === 4) {
    // setData(recordName, path, data, cb)
    path = pathOrData;
    data = dataOrCallback;
    cb = callback;
  } else if (arguments.length === 3) {
    if (typeof dataOrCallback !== 'function') {
      // setData(recordName, path, data)
      path = pathOrData;
      data = dataOrCallback;
    } else {
      // setData(recordName, data, callback)
      path = null;
      data = pathOrData;
      cb = dataOrCallback;
    }
  } else if (arguments.length === 2) {
    // setData(recordName, data)
    data = pathOrData;
  }

  if (typeof recordName !== 'string' || recordName.length === 0) {
    throw new Error('invalid argument: recordName');
  }

  if (callback && typeof callback !== 'function') {
    throw new Error('invalid argument: callback');
  }

  if (path && (typeof path !== 'string' || path.length === 0)) {
    throw new Error('invalid argument: path');
  }

  if (!path && (data === null || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object')) {
    throw new Error('invalid argument: data must be an object when no path is provided');
  }

  var record = this._records[recordName];
  if (record) {
    if (path && cb) {
      record.set(path, data, cb);
    } else if (path) {
      record.set(path, data);
    } else if (cb) {
      record.set(data, cb);
    } else {
      record.set(data);
    }
  } else {
    var recordData = path ? [recordName, -1, path, messageBuilder.typed(data)] : [recordName, -1, data];
    var config = {};
    if (cb) {
      config.writeSuccess = true;
      this._writeCallbacks[recordName] = {};
      this._writeCallbacks[recordName][-1] = cb;
    }
    recordData.push(config);
    this._connection.sendMsg(C.TOPIC.RECORD, C.ACTIONS.CREATEANDUPDATE, recordData);
  }
};

/**
 * Will be called by the client for incoming messages on the RECORD topic
 *
 * @param   {Object} message parsed and validated deepstream message
 *
 * @package private
 * @returns {void}
 */
RecordHandler.prototype._$handle = function (message) {
  var name = void 0;

  if (message.action === C.ACTIONS.ERROR && message.data[0] !== C.EVENT.VERSION_EXISTS && message.data[0] !== C.ACTIONS.SNAPSHOT && message.data[0] !== C.ACTIONS.HAS && message.data[0] !== C.ACTIONS.HEAD && message.data[0] !== C.EVENT.MESSAGE_DENIED) {
    message.processedError = true;
    this._client._$onError(C.TOPIC.RECORD, message.data[0], message.data[1]);
    return;
  }

  if (message.action === C.ACTIONS.ACK || message.action === C.ACTIONS.ERROR) {
    name = message.data[1];

    /*
     * The following prevents errors that occur when a record is discarded or deleted and
     * recreated before the discard / delete ack message is received.
     *
     * A (presumably unsolvable) problem remains when a client deletes a record in the exact moment
     * between another clients creation and read message for the same record
     */
    if (message.data[0] === C.ACTIONS.DELETE || message.data[0] === C.ACTIONS.UNSUBSCRIBE || message.data[0] === C.EVENT.MESSAGE_DENIED && message.data[2] === C.ACTIONS.DELETE) {
      this._destroyEventEmitter.emit('destroy_ack_' + name, message);

      if (message.data[0] === C.ACTIONS.DELETE && this._records[name]) {
        this._records[name]._$onMessage(message);
      }

      return;
    }

    if (message.data[0] === C.ACTIONS.SNAPSHOT) {
      message.processedError = true;
      this._snapshotRegistry.recieve(name, message.data[2]);
      return;
    }

    if (message.data[0] === C.ACTIONS.HAS) {
      message.processedError = true;
      this._hasRegistry.recieve(name, message.data[2]);
      return;
    }

    if (message.data[0] === C.ACTIONS.HEAD) {
      message.processedError = true;
      this._headRegistry.recieve(name, message.data[2]);
      return;
    }
  } else {
    name = message.data[0];
  }

  var processed = false;

  var record = this._records[name];
  if (record) {
    processed = true;
    record._$onMessage(message);
  }

  if (message.action === C.ACTIONS.READ && this._snapshotRegistry.hasRequest(name)) {
    processed = true;
    this._snapshotRegistry.recieve(name, null, JSON.parse(message.data[2]));
  } else if (message.action === C.ACTIONS.HAS && this._hasRegistry.hasRequest(name)) {
    processed = true;
    this._hasRegistry.recieve(name, null, messageParser.convertTyped(message.data[1], this._client));
  } else if (message.action === C.ACTIONS.HEAD && this._headRegistry.hasRequest(name)) {
    processed = true;
    this._headRegistry.recieve(name, null, Number(message.data[1]));
  } else if (message.action === C.ACTIONS.WRITE_ACKNOWLEDGEMENT && !record) {
    processed = true;
    Record._handleWriteAcknowledgements(message, this._writeCallbacks[name], this._client);
  } else if (message.action === C.ACTIONS.ACK && message.data[0] === C.ACTIONS.UNLISTEN && this._listener[name] && this._listener[name].destroyPending) {
    processed = true;
    this._listener[name].destroy();
    delete this._listener[name];
  } else if (this._listener[name]) {
    processed = true;
    this._listener[name]._$onMessage(message);
  } else if (message.action === C.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
    // An unlisten ACK was received before an PATTERN_REMOVED which is a valid case
    processed = true;
  } else if (message.action === C.ACTIONS.SUBSCRIPTION_HAS_PROVIDER) {
    // record can receive a HAS_PROVIDER after discarding the record
    processed = true;
  }

  if (message.action === C.ACTIONS.ERROR && message.data[0] === C.EVENT.MESSAGE_DENIED) {
    message.processedError = true;
    this._client._$onError(C.TOPIC.RECORD, message.data[0], message.data[1]);
    return;
  }

  if (!processed) {
    message.processedError = true;
    this._client._$onError(C.TOPIC.RECORD, C.EVENT.UNSOLICITED_MESSAGE, name);
  }
};

/**
 * Callback for 'error' events from the record.
 *
 * @param   {String} recordName
 * @param   {String} error
 *
 * @private
 * @returns {void}
 */
RecordHandler.prototype._onRecordError = function (recordName, error) {
  this._client._$onError(C.TOPIC.RECORD, error, recordName);
};

/**
 * When the client calls discard or delete on a record, there is a short delay
 * before the corresponding ACK message is received from the server. To avoid
 * race conditions if the record is re-requested straight away the old record is
 * removed from the cache straight awy and will only listen for one last ACK message
 *
 * @param   {String} recordName The name of the record that was just deleted / discarded
 *
 * @private
 * @returns {void}
 */
RecordHandler.prototype._onDestroyPending = function (recordName) {
  if (!this._records[recordName]) {
    this._client._$onError(C.TOPIC.RECORD, 'Record attempted to be destroyed but does not exists', recordName);
    return;
  }
  var onMessage = this._records[recordName]._$onMessage.bind(this._records[recordName]);
  this._destroyEventEmitter.once('destroy_ack_' + recordName, onMessage);
  this._removeRecord(recordName);
};

/**
 * Callback for 'deleted' and 'discard' events from a record. Removes the record from
 * the registry
 *
 * @param   {String} recordName
 *
 * @returns {void}
 */
RecordHandler.prototype._removeRecord = function (recordName) {
  delete this._records[recordName];
  delete this._lists[recordName];
};

module.exports = RecordHandler;

},{"../constants/constants":11,"../message/message-builder":16,"../message/message-parser":17,"../utils/listener":28,"../utils/single-notifier":30,"./anonymous-record":19,"./list":21,"./record":23,"component-emitter2":1}],23:[function(_dereq_,module,exports){
'use strict';
/* eslint-disable prefer-spread, prefer-rest-params, consistent-return, no-confusing-arrow */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var jsonPath = _dereq_('./json-path');
var ResubscribeNotifier = _dereq_('../utils/resubscribe-notifier');
var EventEmitter = _dereq_('component-emitter2');
var C = _dereq_('../constants/constants');
var messageBuilder = _dereq_('../message/message-builder');
var messageParser = _dereq_('../message/message-parser');
var utils = _dereq_('../utils/utils');

/**
 * This class represents a single record - an observable
 * dataset returned by client.record.getRecord()
 *
 * @extends {EventEmitter}
 *
 * @param {String} name              The unique name of the record
 * @param {Object} recordOptions     A map of options, e.g. { persist: true }
 * @param {Connection} Connection    The instance of the server connection
 * @param {Object} options        Deepstream options
 * @param {Client} client        deepstream.io client
 *
 * @constructor
 */
var Record = function Record(name, recordOptions, connection, options, client) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }

  this.name = name;
  this.usages = 0;
  this._recordOptions = recordOptions;
  this._connection = connection;
  this._client = client;
  this._options = options;
  this.isReady = false;
  this.isDestroyed = false;
  this.hasProvider = false;
  this._$data = Object.create(null);
  this.version = null;
  this._eventEmitter = new EventEmitter();
  this._queuedMethodCalls = [];
  this._writeCallbacks = {};

  this._mergeStrategy = null;
  if (options.mergeStrategy) {
    this.setMergeStrategy(options.mergeStrategy);
  }

  this._ackTimeoutRegistry = client._$getAckTimeoutRegistry();
  this._resubscribeNotifier = new ResubscribeNotifier(this._client, this._sendRead.bind(this));

  this._readAckTimeout = this._ackTimeoutRegistry.add({
    topic: C.TOPIC.RECORD,
    name: name,
    action: C.ACTIONS.SUBSCRIBE,
    timeout: this._options.recordReadAckTimeout
  });
  this._responseTimeout = this._ackTimeoutRegistry.add({
    topic: C.TOPIC.RECORD,
    name: name,
    action: C.ACTIONS.READ,
    event: C.EVENT.RESPONSE_TIMEOUT,
    timeout: this._options.recordReadTimeout
  });
  this._sendRead();
};

EventEmitter(Record.prototype); // eslint-disable-line

/**
 * Set a merge strategy to resolve any merge conflicts that may occur due
 * to offline work or write conflicts. The function will be called with the
 * local record, the remote version/data and a callback to call once the merge has
 * completed or if an error occurs ( which leaves it in an inconsistent state until
 * the next update merge attempt ).
 *
 * @param   {Function} mergeStrategy A Function that can resolve merge issues.
 *
 * @public
 * @returns {void}
 */
Record.prototype.setMergeStrategy = function (mergeStrategy) {
  if (typeof mergeStrategy === 'function') {
    this._mergeStrategy = mergeStrategy;
  } else {
    throw new Error('Invalid merge strategy: Must be a Function');
  }
};

/**
 * Returns a copy of either the entire dataset of the record
 * or - if called with a path - the value of that path within
 * the record's dataset.
 *
 * Returning a copy rather than the actual value helps to prevent
 * the record getting out of sync due to unintentional changes to
 * its data
 *
 * @param   {[String]} path A JSON path, e.g. users[ 2 ].firstname
 *
 * @public
 * @returns {Mixed} value
 */
Record.prototype.get = function (path) {
  return jsonPath.get(this._$data, path, this._options.recordDeepCopy);
};

/**
 * Wrapper function around the record.set that returns a promise
 * if no callback is supplied.
 *
 * @param {String|Object}   pathOrData     the path or data to write to the record
 * @param {Object|Function}   dataOrCallback the data to write to the record or the write
 *                                  acknowledgement callback
 * @param {Function} callback       the callback with the result of the write
 * @returns {Promise} if a callback is omitted a Promise is returned with the result of the write
 */
Record.prototype.setWithAck = function (pathOrData, dataOrCallback, callback) {
  var _this = this;

  if (pathOrData && dataOrCallback && callback) {
    this.set(pathOrData, dataOrCallback, callback);
  } else if (pathOrData && typeof dataOrCallback === 'function') {
    this.set(pathOrData, dataOrCallback);
  } else if (pathOrData && (typeof dataOrCallback === 'undefined' ? 'undefined' : _typeof(dataOrCallback)) === 'object') {
    return new Promise(function (resolve, reject) {
      _this.set(pathOrData, dataOrCallback, function (error) {
        return error === null ? resolve() : reject(error);
      });
    });
  } else {
    return new Promise(function (resolve, reject) {
      _this.set(pathOrData, function (error) {
        return error === null ? resolve() : reject(error);
      });
    });
  }
};

/**
 * Sets the value of either the entire dataset
 * or of a specific path within the record
 * and submits the changes to the server
 *
 * If the new data is equal to the current data, nothing will happen
 *
 * @param {[String|Object]} pathOrData Either a JSON path when called with
 *                                     two arguments or the data itself
 * @param {Object} data     The data that should be stored in the record
 *
 * @public
 * @returns {void}
 */
Record.prototype.set = function (pathOrData, dataOrCallback, callback) {
  var path = void 0;
  var data = void 0;
  if (arguments.length === 1) {
    // set( object )
    if ((typeof pathOrData === 'undefined' ? 'undefined' : _typeof(pathOrData)) !== 'object') {
      throw new Error('invalid argument data');
    }
    data = pathOrData;
  } else if (arguments.length === 2) {
    if (typeof pathOrData === 'string' && pathOrData.length !== 0 && typeof dataOrCallback !== 'function') {
      // set( path, data )
      path = pathOrData;
      data = dataOrCallback;
    } else if ((typeof pathOrData === 'undefined' ? 'undefined' : _typeof(pathOrData)) === 'object' && typeof dataOrCallback === 'function') {
      // set( data, callback )
      data = pathOrData;
      callback = dataOrCallback; // eslint-disable-line
    } else {
      throw new Error('invalid argument path');
    }
  } else if (arguments.length === 3) {
    // set( path, data, callback )
    if (typeof pathOrData !== 'string' || pathOrData.length === 0 || typeof callback !== 'function') {
      throw new Error('invalid arguments, must pass in a string, a value and a function');
    }
    path = pathOrData;
    data = dataOrCallback;
  }

  if (!path && (data === null || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object')) {
    throw new Error('invalid arguments, scalar values cannot be set without path');
  }

  if (this._checkDestroyed('set')) {
    return this;
  }

  if (!this.isReady) {
    this._queuedMethodCalls.push({ method: 'set', args: arguments });
    return this;
  }

  var oldValue = this._$data;
  var newValue = jsonPath.set(oldValue, path, data, this._options.recordDeepCopy);

  if (oldValue === newValue) {
    if (typeof callback === 'function') {
      var errorMessage = null;
      if (!utils.isConnected(this._client)) {
        errorMessage = 'Connection error: error updating record as connection was closed';
      }
      utils.requestIdleCallback(function () {
        return callback(errorMessage);
      });
    }
    return this;
  }

  var config = void 0;
  if (typeof callback === 'function') {
    config = {};
    config.writeSuccess = true;
    if (!utils.isConnected(this._client)) {
      utils.requestIdleCallback(function () {
        return callback('Connection error: error updating record as connection was closed');
      });
    } else {
      this._setUpCallback(this.version, callback);
    }
  }
  this._sendUpdate(path, data, config);
  this._applyChange(newValue);
  return this;
};

/**
 * Subscribes to changes to the records dataset.
 *
 * Callback is the only mandatory argument.
 *
 * When called with a path, it will only subscribe to updates
 * to that path, rather than the entire record
 *
 * If called with true for triggerNow, the callback will
 * be called immediatly with the current value
 *
 * @param   {[String]}    path      A JSON path within the record to subscribe to
 * @param   {Function}    callback         Callback function to notify on changes
 * @param   {[Boolean]}   triggerNow      A flag to specify whether the callback should
 *                                         be invoked immediatly with the current value
 *
 * @public
 * @returns {void}
 */
// eslint-disable-next-line
Record.prototype.subscribe = function (path, callback, triggerNow) {
  var _this2 = this;

  var args = this._normalizeArguments(arguments);

  if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
    throw new Error('invalid argument path');
  }
  if (typeof args.callback !== 'function') {
    throw new Error('invalid argument callback');
  }

  if (this._checkDestroyed('subscribe')) {
    return;
  }

  if (args.triggerNow) {
    this.whenReady(function () {
      _this2._eventEmitter.on(args.path, args.callback);
      args.callback(_this2.get(args.path));
    });
  } else {
    this._eventEmitter.on(args.path, args.callback);
  }
};

/**
 * Removes a subscription that was previously made using record.subscribe()
 *
 * Can be called with a path to remove the callback for this specific
 * path or only with a callback which removes it from the generic subscriptions
 *
 * Please Note: unsubscribe is a purely client side operation. If the app is no longer
 * interested in receiving updates for this record from the server it needs to call
 * discard instead
 *
 * @param   {[String|Function]}   pathOrCallback A JSON path
 * @param   {Function}         callback     The callback method. Please note, if a bound
 *                                          method was passed to subscribe, the same method
 *                                          must be passed to unsubscribe as well.
 *
 * @public
 * @returns {void}
 */
// eslint-disable-next-line
Record.prototype.unsubscribe = function (pathOrCallback, callback) {
  var args = this._normalizeArguments(arguments);

  if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
    throw new Error('invalid argument path');
  }
  if (args.callback !== undefined && typeof args.callback !== 'function') {
    throw new Error('invalid argument callback');
  }

  if (this._checkDestroyed('unsubscribe')) {
    return;
  }
  this._eventEmitter.off(args.path, args.callback);
};

/**
 * Removes all change listeners and notifies the server that the client is
 * no longer interested in updates for this record
 *
 * @public
 * @returns {void}
 */
Record.prototype.discard = function () {
  var _this3 = this;

  if (this._checkDestroyed('discard')) {
    return;
  }
  this.whenReady(function () {
    _this3.usages--;
    if (_this3.usages <= 0) {
      _this3.emit('destroyPending');
      _this3._discardTimeout = _this3._ackTimeoutRegistry.add({
        topic: C.TOPIC.RECORD,
        name: _this3.name,
        action: C.ACTIONS.UNSUBSCRIBE
      });
      _this3._connection.sendMsg(C.TOPIC.RECORD, C.ACTIONS.UNSUBSCRIBE, [_this3.name]);
    }
  });
};

/**
 * Deletes the record on the server.
 *
 * @public
 * @returns {void}
 */
Record.prototype.delete = function () {
  var _this4 = this;

  if (this._checkDestroyed('delete')) {
    return;
  }
  this.whenReady(function () {
    _this4.emit('destroyPending');
    _this4._deleteAckTimeout = _this4._ackTimeoutRegistry.add({
      topic: C.TOPIC.RECORD,
      name: _this4.name,
      action: C.ACTIONS.DELETE,
      event: C.EVENT.DELETE_TIMEOUT,
      timeout: _this4._options.recordDeleteTimeout
    });
    _this4._connection.sendMsg(C.TOPIC.RECORD, C.ACTIONS.DELETE, [_this4.name]);
  });
};

/**
 * Convenience method, similar to promises. Executes callback
 * whenever the record is ready, either immediatly or once the ready
 * event is fired
 *
 * @param   {Function} callback Will be called when the record is ready
 *
 * @returns {void}
 */
Record.prototype.whenReady = function (callback) {
  var _this5 = this;

  if (this.isReady === true) {
    if (callback) {
      callback(this);
      return;
    }
    return Promise.resolve(this);
  }
  if (callback) {
    this.once('ready', callback.bind(this, this));
  } else {
    return new Promise(function (resolve) {
      return _this5.once('ready', resolve.bind(_this5, _this5));
    });
  }
};

/**
 * Callback for incoming messages from the message handler
 *
 * @param   {Object} message parsed and validated deepstream message
 *
 * @package private
 * @returns {void}
 */
Record.prototype._$onMessage = function (message) {
  if (message.action === C.ACTIONS.READ) {
    if (this.version === null) {
      this._ackTimeoutRegistry.clear(message);
      this._onRead(message);
    } else {
      this._applyUpdate(message, this._client);
    }
  } else if (message.action === C.ACTIONS.ACK) {
    this._processAckMessage(message);
  } else if (message.action === C.ACTIONS.UPDATE || message.action === C.ACTIONS.PATCH) {
    this._applyUpdate(message, this._client);
  } else if (message.action === C.ACTIONS.WRITE_ACKNOWLEDGEMENT) {
    Record._handleWriteAcknowledgements(message, this._writeCallbacks, this._client);
  } else if (message.data[0] === C.EVENT.VERSION_EXISTS) {
    // Otherwise it should be an error, and dealt with accordingly
    this._recoverRecord(message.data[2], JSON.parse(message.data[3]), message);
  } else if (message.data[0] === C.EVENT.MESSAGE_DENIED) {
    this._clearTimeouts();
  } else if (message.action === C.ACTIONS.SUBSCRIPTION_HAS_PROVIDER) {
    var hasProvider = messageParser.convertTyped(message.data[1], this._client);
    this.hasProvider = hasProvider;
    this.emit('hasProviderChanged', hasProvider);
  }
};

Record._handleWriteAcknowledgements = function (message, callbacks, client) {
  var versions = JSON.parse(message.data[1]);
  for (var i = 0; i < versions.length; i++) {
    var callback = callbacks[versions[i]];
    if (callback !== undefined) {
      callback(messageParser.convertTyped(message.data[2], client));
      delete callbacks[versions[i]];
    }
  }
};

/**
 * Called when a merge conflict is detected by a VERSION_EXISTS error or if an update recieved
 * is directly after the clients. If no merge strategy is configure it will emit a VERSION_EXISTS
 * error and the record will remain in an inconsistent state.
 *
 * @param   {Number} remoteVersion The remote version number
 * @param   {Object} remoteData The remote object data
 * @param   {Object} message parsed and validated deepstream message
 *
 * @private
 * @returns {void}
 */
Record.prototype._recoverRecord = function (remoteVersion, remoteData, message) {
  message.processedError = true;
  if (this._mergeStrategy) {
    this._mergeStrategy(this, remoteData, remoteVersion, this._onRecordRecovered.bind(this, remoteVersion, remoteData, message));
  } else {
    this.emit('error', C.EVENT.VERSION_EXISTS, 'received update for ' + remoteVersion + ' but version is ' + this.version);
  }
};

Record.prototype._sendUpdate = function (path, data, config) {
  this.version++;
  var msgData = void 0;
  if (!path) {
    msgData = config === undefined ? [this.name, this.version, data] : [this.name, this.version, data, config];
    this._connection.sendMsg(C.TOPIC.RECORD, C.ACTIONS.UPDATE, msgData);
  } else {
    msgData = config === undefined ? [this.name, this.version, path, messageBuilder.typed(data)] : [this.name, this.version, path, messageBuilder.typed(data), config];
    this._connection.sendMsg(C.TOPIC.RECORD, C.ACTIONS.PATCH, msgData);
  }
};

/**
 * Callback once the record merge has completed. If successful it will set the
 * record state, else emit and error and the record will remain in an
 * inconsistent state until the next update.
 *
 * @param   {Number} remoteVersion The remote version number
 * @param   {Object} remoteData The remote object data
 * @param   {Object} message parsed and validated deepstream message
 *
 * @private
 * @returns {void}
 */
Record.prototype._onRecordRecovered = function (remoteVersion, remoteData, message, error, data) {
  if (!error) {
    var oldVersion = this.version;
    this.version = remoteVersion;

    var oldValue = this._$data;

    if (utils.deepEquals(oldValue, remoteData)) {
      return;
    }

    var newValue = jsonPath.set(oldValue, undefined, data, false);

    if (utils.deepEquals(data, remoteData)) {
      this._applyChange(data);

      var callback = this._writeCallbacks[remoteVersion];
      if (callback !== undefined) {
        callback(null);
        delete this._writeCallbacks[remoteVersion];
      }
      return;
    }

    var config = message.data[4];
    if (config && JSON.parse(config).writeSuccess) {
      var _callback = this._writeCallbacks[oldVersion];
      delete this._writeCallbacks[oldVersion];
      this._setUpCallback(this.version, _callback);
    }
    this._sendUpdate(undefined, data, config);
    this._applyChange(newValue);
  } else {
    this.emit('error', C.EVENT.VERSION_EXISTS, 'received update for ' + remoteVersion + ' but version is ' + this.version);
  }
};

/**
 * Callback for ack-messages. Acks can be received for
 * subscriptions, discards and deletes
 *
 * @param   {Object} message parsed and validated deepstream message
 *
 * @private
 * @returns {void}
 */
Record.prototype._processAckMessage = function (message) {
  var acknowledgedAction = message.data[0];

  if (acknowledgedAction === C.ACTIONS.SUBSCRIBE) {
    this._ackTimeoutRegistry.clear(message);
  } else if (acknowledgedAction === C.ACTIONS.DELETE) {
    this.emit('delete');
    this._destroy();
  } else if (acknowledgedAction === C.ACTIONS.UNSUBSCRIBE) {
    this.emit('discard');
    this._destroy();
  }
};

/**
 * Applies incoming updates and patches to the record's dataset
 *
 * @param   {Object} message parsed and validated deepstream message
 *
 * @private
 * @returns {void}
 */
Record.prototype._applyUpdate = function (message) {
  var version = parseInt(message.data[1], 10);
  var data = void 0;
  if (message.action === C.ACTIONS.PATCH) {
    data = messageParser.convertTyped(message.data[3], this._client);
  } else {
    data = JSON.parse(message.data[2]);
  }

  if (this.version === null) {
    this.version = version;
  } else if (this.version + 1 !== version) {
    if (message.action === C.ACTIONS.PATCH) {
      /**
      * Request a snapshot so that a merge can be done with the read reply which contains
      * the full state of the record
      **/
      this._connection.sendMsg(C.TOPIC.RECORD, C.ACTIONS.SNAPSHOT, [this.name]);
    } else {
      this._recoverRecord(version, data, message);
    }
    return;
  }

  this.version = version;
  this._applyChange(jsonPath.set(this._$data, message.action === C.ACTIONS.PATCH ? message.data[2] : undefined, data));
};

/**
 * Callback for incoming read messages
 *
 * @param   {Object} message parsed and validated deepstream message
 *
 * @private
 * @returns {void}
 */
Record.prototype._onRead = function (message) {
  this.version = parseInt(message.data[1], 10);
  this._applyChange(jsonPath.set(this._$data, undefined, JSON.parse(message.data[2])));
  this._setReady();
};

/**
 * Invokes method calls that where queued while the record wasn't ready
 * and emits the ready event
 *
 * @private
 * @returns {void}
 */
Record.prototype._setReady = function () {
  this.isReady = true;
  for (var i = 0; i < this._queuedMethodCalls.length; i++) {
    this[this._queuedMethodCalls[i].method].apply(this, this._queuedMethodCalls[i].args);
  }
  this._queuedMethodCalls = [];
  this.emit('ready');
};

Record.prototype._setUpCallback = function (currentVersion, callback) {
  var newVersion = Number(this.version) + 1;
  this._writeCallbacks[newVersion] = callback;
};

/**
 * Sends the read message, either initially at record
 * creation or after a lost connection has been re-established
 *
 * @private
 * @returns {void}
 */
Record.prototype._sendRead = function () {
  this._connection.sendMsg(C.TOPIC.RECORD, C.ACTIONS.CREATEORREAD, [this.name]);
};

/**
 * Compares the new values for every path with the previously stored ones and
 * updates the subscribers if the value has changed
 *
 * @private
 * @returns {void}
 */
Record.prototype._applyChange = function (newData) {
  if (this.isDestroyed) {
    return;
  }

  var oldData = this._$data;
  this._$data = newData;

  var paths = this._eventEmitter.eventNames();
  for (var i = 0; i < paths.length; i++) {
    var newValue = jsonPath.get(newData, paths[i], false);
    var oldValue = jsonPath.get(oldData, paths[i], false);

    if (newValue !== oldValue) {
      this._eventEmitter.emit(paths[i], this.get(paths[i]));
    }
  }
};

/**
 * Creates a map based on the types of the provided arguments
 *
 * @param {Arguments} args
 *
 * @private
 * @returns {Object} arguments map
 */
Record.prototype._normalizeArguments = function (args) {
  // If arguments is already a map of normalized parameters
  // (e.g. when called by AnonymousRecord), just return it.
  if (args.length === 1 && _typeof(args[0]) === 'object') {
    return args[0];
  }

  var result = Object.create(null);

  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string') {
      result.path = args[i];
    } else if (typeof args[i] === 'function') {
      result.callback = args[i];
    } else if (typeof args[i] === 'boolean') {
      result.triggerNow = args[i];
    }
  }

  return result;
};

/**
 * Clears all timeouts that are set when the record is created
 *
 * @private
 * @returns {void}
 */
Record.prototype._clearTimeouts = function () {
  this._ackTimeoutRegistry.remove({ ackId: this._readAckTimeout, silent: true });
  this._ackTimeoutRegistry.remove({ ackId: this._responseTimeout, silent: true });
  this._ackTimeoutRegistry.remove({ ackId: this._deleteAckTimeout, silent: true });
  this._ackTimeoutRegistry.remove({ ackId: this._discardTimeout, silent: true });
};

/**
 * A quick check that's carried out by most methods that interact with the record
 * to make sure it hasn't been destroyed yet - and to handle it gracefully if it has.
 *
 * @param   {String} methodName The name of the method that invoked this check
 *
 * @private
 * @returns {Boolean} is destroyed
 */
Record.prototype._checkDestroyed = function (methodName) {
  if (this.isDestroyed) {
    this.emit('error', 'Can\'t invoke \'' + methodName + '\'. Record \'' + this.name + '\' is already destroyed');
    return true;
  }

  return false;
};

/**
 * Destroys the record and nulls all
 * its dependencies
 *
 * @private
 * @returns {void}
 */
Record.prototype._destroy = function () {
  this._clearTimeouts();
  this._eventEmitter.off();
  this._resubscribeNotifier.destroy();
  this.isDestroyed = true;
  this.isReady = false;
  this._client = null;
  this._eventEmitter = null;
  this._connection = null;
};

module.exports = Record;

},{"../constants/constants":11,"../message/message-builder":16,"../message/message-parser":17,"../utils/resubscribe-notifier":29,"../utils/utils":31,"./json-path":20,"component-emitter2":1}],24:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');
var ResubscribeNotifier = _dereq_('../utils/resubscribe-notifier');
var RpcResponse = _dereq_('./rpc-response');
var Rpc = _dereq_('./rpc');
var messageParser = _dereq_('../message/message-parser');
var messageBuilder = _dereq_('../message/message-builder');

/**
 * The main class for remote procedure calls
 *
 * Provides the rpc interface and handles incoming messages
 * on the rpc topic
 *
 * @param {Object} options deepstream configuration options
 * @param {Connection} connection
 * @param {Client} client
 *
 * @constructor
 * @public
 */
var RpcHandler = function RpcHandler(options, connection, client) {
  this._options = options;
  this._connection = connection;
  this._client = client;
  this._rpcs = {};
  this._providers = {};
  this._ackTimeoutRegistry = client._$getAckTimeoutRegistry();
  this._resubscribeNotifier = new ResubscribeNotifier(this._client, this._reprovide.bind(this));
};

RpcHandler.prototype.providerNames = function () {
  return Object.keys(this._providers);
};

/**
 * Registers a callback function as a RPC provider. If another connected client calls
 * client.rpc.make() the request will be routed to this method
 *
 * The callback will be invoked with two arguments:
 *     {Mixed} data The data passed to the client.rpc.make function
 *     {RpcResponse} rpcResponse An object with methods to response,
 *                               acknowledge or reject the request
 *
 * Only one callback can be registered for a RPC at a time
 *
 * Please note: Deepstream tries to deliver data in its original format.
 * Data passed to client.rpc.make as a String will arrive as a String,
 * numbers or implicitly JSON serialized objects will arrive in their
 * respective format as well
 *
 * @public
 * @returns void
 */
RpcHandler.prototype.provide = function (name, callback) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }
  if (this._providers[name]) {
    throw new Error('RPC ' + name + ' already registered');
  }
  if (typeof callback !== 'function') {
    throw new Error('invalid argument callback');
  }

  this._ackTimeoutRegistry.add({
    topic: C.TOPIC.RPC,
    name: name,
    action: C.ACTIONS.SUBSCRIBE
  });
  this._providers[name] = callback;
  this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.SUBSCRIBE, [name]);
};

/**
 * Unregisters this client as a provider for a remote procedure call
 *
 * @param   {String} name the name of the rpc
 *
 * @public
 * @returns {void}
 */
RpcHandler.prototype.unprovide = function (name) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }

  if (this._providers[name]) {
    delete this._providers[name];
    this._ackTimeoutRegistry.add({
      topic: C.TOPIC.RPC,
      name: name,
      action: C.ACTIONS.UNSUBSCRIBE
    });
    this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.UNSUBSCRIBE, [name]);
  }
};

/**
 * Executes the actual remote procedure call
 *
 * @param   {String}   name     The name of the rpc
 * @param   {Mixed}    data     Serializable data that will be passed to the provider
 * @param   {Function} callback Will be invoked with the returned result or if the rpc failed
 *                              receives to arguments: error or null and the result
 *
 * @public
 * @returns {void}
 */
RpcHandler.prototype.make = function (name, data, callback) {
  var _this = this;

  // eslint-disable-line
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('invalid argument name');
  }

  var uid = this._client.getUid();
  var typedData = messageBuilder.typed(data);

  this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.REQUEST, [name, uid, typedData]);
  if (callback && typeof callback === 'function') {
    this._rpcs[uid] = new Rpc(name, { callback: callback }, this._options, this._client);
  } else {
    return new Promise(function (resolve, reject) {
      _this._rpcs[uid] = new Rpc(name, { resolve: resolve, reject: reject }, _this._options, _this._client);
    });
  }
};

/**
 * Retrieves a RPC instance for a correlationId or throws an error
 * if it can't be found (which should never happen)
 *
 * @param {String} correlationId
 * @param {String} rpcName
 *
 * @private
 * @returns {Rpc}
 */
RpcHandler.prototype._getRpc = function (correlationId, rpcName, rawMessage) {
  var rpc = this._rpcs[correlationId];

  if (!rpc) {
    this._client._$onError(C.TOPIC.RPC, C.EVENT.UNSOLICITED_MESSAGE, rawMessage);
    return null;
  }

  return rpc;
};

/**
 * Handles incoming rpc REQUEST messages. Instantiates a new response object
 * and invokes the provider callback or rejects the request if no rpc provider
 * is present (which shouldn't really happen, but might be the result of a race condition
 * if this client sends a unprovide message whilst an incoming request is already in flight)
 *
 * @param   {Object} message The parsed deepstream RPC request message.
 *
 * @private
 * @returns {void}
 */
RpcHandler.prototype._respondToRpc = function (message) {
  var name = message.data[0];
  var correlationId = message.data[1];
  var data = null;
  var response = void 0;

  if (message.data[2]) {
    data = messageParser.convertTyped(message.data[2], this._client);
  }

  if (this._providers[name]) {
    response = new RpcResponse(this._connection, name, correlationId);
    this._providers[name](data, response);
  } else {
    this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.REJECTION, [name, correlationId]);
  }
};

/**
 * Distributes incoming messages from the server
 * based on their action
 *
 * @param   {Object} message A parsed deepstream message
 *
 * @private
 * @returns {void}
 */
RpcHandler.prototype._$handle = function (message) {
  var rpcName = void 0;
  var correlationId = void 0;

  // RPC Requests
  if (message.action === C.ACTIONS.REQUEST) {
    this._respondToRpc(message);
    return;
  }

  // RPC subscription Acks
  if (message.action === C.ACTIONS.ACK && (message.data[0] === C.ACTIONS.SUBSCRIBE || message.data[0] === C.ACTIONS.UNSUBSCRIBE)) {
    this._ackTimeoutRegistry.clear(message);
    return;
  }

  // handle auth/denied subscription errors
  if (message.action === C.ACTIONS.ERROR) {
    if (message.data[0] === C.EVENT.MESSAGE_PERMISSION_ERROR) {
      return;
    }
    if (message.data[0] === C.EVENT.MESSAGE_DENIED && message.data[2] === C.ACTIONS.SUBSCRIBE) {
      this._ackTimeoutRegistry.remove({
        topic: C.TOPIC.RPC,
        action: C.ACTIONS.SUBSCRIBE,
        name: message.data[1]
      });
      return;
    }
  }

  /*
   * Error messages always have the error as first parameter. So the
   * order is different to ack and response messages
   */
  if (message.action === C.ACTIONS.ERROR || message.action === C.ACTIONS.ACK) {
    if (message.data[0] === C.EVENT.MESSAGE_DENIED && message.data[2] === C.ACTIONS.REQUEST) {
      correlationId = message.data[3];
    } else {
      correlationId = message.data[2];
    }
    rpcName = message.data[1];
  } else {
    rpcName = message.data[0];
    correlationId = message.data[1];
  }

  /*
  * Retrieve the rpc object
  */
  var rpc = this._getRpc(correlationId, rpcName, message.raw);
  if (rpc === null) {
    return;
  }

  // RPC Responses
  if (message.action === C.ACTIONS.ACK) {
    rpc.ack();
  } else if (message.action === C.ACTIONS.RESPONSE) {
    rpc.respond(message.data[2]);
    delete this._rpcs[correlationId];
  } else if (message.action === C.ACTIONS.ERROR) {
    message.processedError = true;
    rpc.error(message.data[0]);
    delete this._rpcs[correlationId];
  }
};

/**
 * Reregister providers to events when connection is lost
 *
 * @package private
 * @returns {void}
 */
RpcHandler.prototype._reprovide = function () {
  for (var rpcName in this._providers) {
    this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.SUBSCRIBE, [rpcName]);
  }
};

module.exports = RpcHandler;

},{"../constants/constants":11,"../message/message-builder":16,"../message/message-parser":17,"../utils/resubscribe-notifier":29,"./rpc":26,"./rpc-response":25}],25:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');
var utils = _dereq_('../utils/utils');
var messageBuilder = _dereq_('../message/message-builder');

/**
 * This object provides a number of methods that allow a rpc provider
 * to respond to a request
 *
 * @param {Connection} connection - the clients connection object
 * @param {String} name the name of the rpc
 * @param {String} correlationId the correlationId for the RPC
 */
var RpcResponse = function RpcResponse(connection, name, correlationId) {
  this._connection = connection;
  this._name = name;
  this._correlationId = correlationId;
  this._isAcknowledged = false;
  this._isComplete = false;
  this.autoAck = true;
  utils.nextTick(this._performAutoAck.bind(this));
};

/**
 * Acknowledges the receipt of the request. This
 * will happen implicitly unless the request callback
 * explicitly sets autoAck to false
 *
 * @public
 * @returns   {void}
 */
RpcResponse.prototype.ack = function () {
  if (this._isAcknowledged === false) {
    this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.ACK, [C.ACTIONS.REQUEST, this._name, this._correlationId]);
    this._isAcknowledged = true;
  }
};

/**
 * Reject the request. This might be necessary if the client
 * is already processing a large number of requests. If deepstream
 * receives a rejection message it will try to route the request to
 * another provider - or return a NO_RPC_PROVIDER error if there are no
 * providers left
 *
 * @public
 * @returns  {void}
 */
RpcResponse.prototype.reject = function () {
  this.autoAck = false;
  this._isComplete = true;
  this._isAcknowledged = true;
  this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.REJECTION, [this._name, this._correlationId]);
};

/**
 * Notifies the server that an error has occured while trying to process the request.
 * This will complete the rpc.
 *
 * @param {String} errorMsg the message used to describe the error that occured
 * @public
 * @returns  {void}
 */
RpcResponse.prototype.error = function (errorMsg) {
  this.autoAck = false;
  this._isComplete = true;
  this._isAcknowledged = true;
  this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.ERROR, [errorMsg, this._name, this._correlationId]);
};

/**
 * Completes the request by sending the response data
 * to the server. If data is an array or object it will
 * automatically be serialised.
 * If autoAck is disabled and the response is sent before
 * the ack message the request will still be completed and the
 * ack message ignored
 *
 * @param {String} data the data send by the provider. Might be JSON serialized
 *
 * @public
 * @returns {void}
 */
RpcResponse.prototype.send = function (data) {
  if (this._isComplete === true) {
    throw new Error('Rpc ' + this._name + ' already completed');
  }
  this.ack();

  var typedData = messageBuilder.typed(data);
  this._connection.sendMsg(C.TOPIC.RPC, C.ACTIONS.RESPONSE, [this._name, this._correlationId, typedData]);
  this._isComplete = true;
};

/**
 * Callback for the autoAck timeout. Executes ack
 * if autoAck is not disabled
 *
 * @private
 * @returns {void}
 */
RpcResponse.prototype._performAutoAck = function () {
  if (this.autoAck === true) {
    this.ack();
  }
};

module.exports = RpcResponse;

},{"../constants/constants":11,"../message/message-builder":16,"../utils/utils":31}],26:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');
var messageParser = _dereq_('../message/message-parser');

/**
 * This class represents a single remote procedure
 * call made from the client to the server. It's main function
 * is to encapsulate the logic around timeouts and to convert the
 * incoming response data
 *
 * @param {Object}   options           deepstream client config
 * @param {Function} callback          the function that will be called once the request
 *                                     is complete or failed
 * @param {Client} client
 *
 * @constructor
 */
var Rpc = function Rpc(name, response, options, client) {
  this._options = options;
  this._response = response;
  this._client = client;
  this._ackTimeoutRegistry = client._$getAckTimeoutRegistry();
  this._ackTimeout = this._ackTimeoutRegistry.add({
    topic: C.TOPIC.RPC,
    action: C.ACTIONS.ACK,
    name: name,
    timeout: this._options.rpcAckTimeout,
    callback: this.error.bind(this)
  });
  this._responseTimeout = this._ackTimeoutRegistry.add({
    topic: C.TOPIC.RPC,
    action: C.ACTIONS.REQUEST,
    name: name,
    event: C.EVENT.RESPONSE_TIMEOUT,
    timeout: this._options.rpcResponseTimeout,
    callback: this.error.bind(this)
  });
};

/**
 * Called once an ack message is received from the server
 *
 * @public
 * @returns {void}
 */
Rpc.prototype.ack = function () {
  this._ackTimeoutRegistry.remove({
    ackId: this._ackTimeout
  });
};

/**
 * Called once a response message is received from the server.
 * Converts the typed data and completes the request
 *
 * @param   {String} data typed value
 *
 * @public
 * @returns {void}
 */
Rpc.prototype.respond = function (data) {
  var convertedData = messageParser.convertTyped(data, this._client);
  if (this._response.callback) {
    this._response.callback(null, convertedData);
  } else {
    this._response.resolve(convertedData);
  }
  this._complete();
};

/**
 * Callback for error messages received from the server. Once
 * an error is received the request is considered completed. Even
 * if a response arrives later on it will be ignored / cause an
 * UNSOLICITED_MESSAGE error
 *
 * @param   {String} errorMsg @TODO should be CODE and message
 *
 * @public
 * @returns {void}
 */
Rpc.prototype.error = function (timeout) {
  if (this._response.callback) {
    this._response.callback(timeout.event || timeout);
  } else {
    this._response.reject(timeout.event || timeout);
  }
  this._complete();
};

/**
 * Called after either an error or a response
 * was received
 *
 * @private
 * @returns {void}
 */
Rpc.prototype._complete = function () {
  this._ackTimeoutRegistry.remove({
    ackId: this._ackTimeout
  });
  this._ackTimeoutRegistry.remove({
    ackId: this._responseTimeout
  });
};

module.exports = Rpc;

},{"../constants/constants":11,"../message/message-parser":17}],27:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');
var EventEmitter = _dereq_('component-emitter2');

/**
 * Subscriptions to events are in a pending state until deepstream acknowledges
 * them. This is a pattern that's used by numerour classes. This registry aims
 * to centralise the functionality necessary to keep track of subscriptions and
 * their respective timeouts.
 *
 * @param {Client} client          The deepstream client
 * @param {String} topic           Constant. One of C.TOPIC
 * @param {Number} timeoutDuration The duration of the timeout in milliseconds
 *
 * @extends {EventEmitter}
 * @constructor
 */
var AckTimeoutRegistry = function AckTimeoutRegistry(client, options) {
  this._options = options;
  this._client = client;
  this._register = {};
  this._counter = 1;
  client.on('connectionStateChanged', this._onConnectionStateChanged.bind(this));
};

EventEmitter(AckTimeoutRegistry.prototype); // eslint-disable-line

/**
 * Add an entry
 *
 * @param {String} name An identifier for the subscription, e.g. a record name or an event name.
 *
 * @public
 * @returns {Number} The timeout identifier
 */
AckTimeoutRegistry.prototype.add = function (timeout) {
  var timeoutDuration = timeout.timeout || this._options.subscriptionTimeout;

  if (this._client.getConnectionState() !== C.CONNECTION_STATE.OPEN || timeoutDuration < 1) {
    return -1;
  }

  this.remove(timeout);
  timeout.ackId = this._counter++;
  timeout.event = timeout.event || C.EVENT.ACK_TIMEOUT;
  timeout.__timeout = setTimeout(this._onTimeout.bind(this, timeout), timeoutDuration);
  this._register[this._getUniqueName(timeout)] = timeout;
  return timeout.ackId;
};

/**
 * Remove an entry
 *
 * @param {String} name An identifier for the subscription, e.g. a record name or an event name.
 *
 * @public
 * @returns {void}
 */
AckTimeoutRegistry.prototype.remove = function (timeout) {
  if (timeout.ackId) {
    for (var uniqueName in this._register) {
      if (timeout.ackId === this._register[uniqueName].ackId) {
        this.clear({
          topic: this._register[uniqueName].topic,
          action: this._register[uniqueName].action,
          data: [this._register[uniqueName].name]
        });
      }
    }
  }

  if (this._register[this._getUniqueName(timeout)]) {
    this.clear({
      topic: timeout.topic,
      action: timeout.action,
      data: [timeout.name]
    });
  }
};

/**
 * Processes an incoming ACK-message and removes the corresponding subscription
 *
 * @param   {Object} message A parsed deepstream ACK message
 *
 * @public
 * @returns {void}
 */
AckTimeoutRegistry.prototype.clear = function (message) {
  var uniqueName = void 0;
  if (message.action === C.ACTIONS.ACK && message.data.length > 1) {
    uniqueName = message.topic + message.data[0] + (message.data[1] ? message.data[1] : '');
  } else {
    uniqueName = message.topic + message.action + message.data[0];
  }

  if (this._register[uniqueName]) {
    clearTimeout(this._register[uniqueName].__timeout);
  }

  delete this._register[uniqueName];
};

/**
 * Will be invoked if the timeout has occured before the ack message was received
 *
 * @param {Object} name The timeout object registered
 *
 * @private
 * @returns {void}
 */
AckTimeoutRegistry.prototype._onTimeout = function (timeout) {
  delete this._register[this._getUniqueName(timeout)];

  if (timeout.callback) {
    delete timeout.__timeout;
    delete timeout.timeout;
    timeout.callback(timeout);
  } else {
    var msg = 'No ACK message received in time' + (timeout.name ? ' for ' + timeout.name : '');
    this._client._$onError(timeout.topic, timeout.event, msg);
  }
};

/**
 * Returns a unique name from the timeout
 *
 * @private
 * @returns {void}
 */
AckTimeoutRegistry.prototype._getUniqueName = function (timeout) {
  return timeout.topic + timeout.action + (timeout.name ? timeout.name : '');
};

/**
 * Remote all timeouts when connection disconnects
 *
 * @private
 * @returns {void}
 */
AckTimeoutRegistry.prototype._onConnectionStateChanged = function (connectionState) {
  if (connectionState !== C.CONNECTION_STATE.OPEN) {
    for (var uniqueName in this._register) {
      clearTimeout(this._register[uniqueName].__timeout);
    }
  }
};

module.exports = AckTimeoutRegistry;

},{"../constants/constants":11,"component-emitter2":1}],28:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');
var ResubscribeNotifier = _dereq_('./resubscribe-notifier');

/*
 * Creates a listener instance which is usedby deepstream Records and Events.
 *
 * @param {String} topic                 One of CONSTANTS.TOPIC
 * @param {String} pattern              A pattern that can be compiled via new RegExp(pattern)
 * @param {Function} callback           The function which is called when pattern was found and
 *                                      removed
 * @param {Connection} Connection       The instance of the server connection
 * @param {Object} options              Deepstream options
 * @param {Client} client               deepstream.io client
 *
 * @constructor
 */
var Listener = function Listener(topic, pattern, callback, options, client, connection) {
  this._topic = topic;
  this._callback = callback;
  this._pattern = pattern;
  this._options = options;
  this._client = client;
  this._connection = connection;
  this._ackTimeoutRegistry = client._$getAckTimeoutRegistry();
  this._ackTimeoutRegistry.add({
    topic: this._topic,
    name: pattern,
    action: C.ACTIONS.LISTEN
  });

  this._resubscribeNotifier = new ResubscribeNotifier(client, this._sendListen.bind(this));
  this._sendListen();
  this.destroyPending = false;
};

Listener.prototype.sendDestroy = function () {
  this.destroyPending = true;
  this._connection.sendMsg(this._topic, C.ACTIONS.UNLISTEN, [this._pattern]);
  this._resubscribeNotifier.destroy();
};

/*
 * Resets internal properties. Is called when provider cals unlisten.
 *
 * @returns {void}
 */
Listener.prototype.destroy = function () {
  this._callback = null;
  this._pattern = null;
  this._client = null;
  this._connection = null;
};

/*
 * Accepting a listener request informs deepstream that the current provider is willing to
 * provide the record or event matching the subscriptionName . This will establish the current
 * provider as the only publisher for the actual subscription with the deepstream cluster.
 * Either accept or reject needs to be called by the listener, otherwise it prints out a
 * deprecated warning.
 *
 * @returns {void}
 */
Listener.prototype.accept = function (name) {
  this._connection.sendMsg(this._topic, C.ACTIONS.LISTEN_ACCEPT, [this._pattern, name]);
};

/*
 * Rejecting a listener request informs deepstream that the current provider is not willing
 * to provide the record or event matching the subscriptionName . This will result in deepstream
 * requesting another provider to do so instead. If no other provider accepts or exists, the
 * record will remain unprovided.
 * Either accept or reject needs to be called by the listener, otherwise it prints out a
 * deprecated warning.
 *
 * @returns {void}
 */
Listener.prototype.reject = function (name) {
  this._connection.sendMsg(this._topic, C.ACTIONS.LISTEN_REJECT, [this._pattern, name]);
};

/*
 * Wraps accept and reject as an argument for the callback function.
 *
 * @private
 * @returns {Object}
 */
Listener.prototype._createCallbackResponse = function (message) {
  return {
    accept: this.accept.bind(this, message.data[1]),
    reject: this.reject.bind(this, message.data[1])
  };
};

/*
 * Handles the incomming message.
 *
 * @private
 * @returns {void}
 */
Listener.prototype._$onMessage = function (message) {
  if (message.action === C.ACTIONS.ACK) {
    this._ackTimeoutRegistry.clear(message);
  } else if (message.action === C.ACTIONS.SUBSCRIPTION_FOR_PATTERN_FOUND) {
    this._callback(message.data[1], true, this._createCallbackResponse(message));
  } else if (message.action === C.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
    this._callback(message.data[1], false);
  } else {
    this._client._$onError(this._topic, C.EVENT.UNSOLICITED_MESSAGE, message.data[0] + '|' + message.data[1]);
  }
};

/*
 * Sends a C.ACTIONS.LISTEN to deepstream.
 *
 * @private
 * @returns {void}
 */
Listener.prototype._sendListen = function () {
  this._connection.sendMsg(this._topic, C.ACTIONS.LISTEN, [this._pattern]);
};

module.exports = Listener;

},{"../constants/constants":11,"./resubscribe-notifier":29}],29:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');

/**
 * Makes sure that all functionality is resubscribed on reconnect. Subscription is called
 * when the connection drops - which seems counterintuitive, but in fact just means
 * that the re-subscription message will be added to the queue of messages that
 * need re-sending as soon as the connection is re-established.
 *
 * Resubscribe logic should only occur once per connection loss
 *
 * @param {Client} client          The deepstream client
 * @param {Function} reconnect     Function to call to allow resubscribing
 *
 * @constructor
 */
var ResubscribeNotifier = function ResubscribeNotifier(client, resubscribe) {
  this._client = client;
  this._resubscribe = resubscribe;

  this._isReconnecting = false;
  this._connectionStateChangeHandler = this._handleConnectionStateChanges.bind(this);
  this._client.on('connectionStateChanged', this._connectionStateChangeHandler);
};

/**
 * Call this whenever this functionality is no longer needed to remove links
 *
 * @returns {void}
 */
ResubscribeNotifier.prototype.destroy = function () {
  this._client.removeListener('connectionStateChanged', this._connectionStateChangeHandler);
  this._connectionStateChangeHandler = null;
  this._client = null;
};

/**
* Check whenever the connection state changes if it is in reconnecting to resubscribe
* @private
* @returns {void}
*/
ResubscribeNotifier.prototype._handleConnectionStateChanges = function () {
  var state = this._client.getConnectionState();

  if (state === C.CONNECTION_STATE.RECONNECTING && this._isReconnecting === false) {
    this._isReconnecting = true;
  }
  if (state === C.CONNECTION_STATE.OPEN && this._isReconnecting === true) {
    this._isReconnecting = false;
    this._resubscribe();
  }
};

module.exports = ResubscribeNotifier;

},{"../constants/constants":11}],30:[function(_dereq_,module,exports){
'use strict';

var C = _dereq_('../constants/constants');
var ResubscribeNotifier = _dereq_('./resubscribe-notifier');

/**
 * Provides a scaffold for subscriptionless requests to deepstream, such as the SNAPSHOT
 * and HAS functionality. The SingleNotifier multiplexes all the client requests so
 * that they can can be notified at once, and also includes reconnection funcionality
 * incase the connection drops.
 *
 * @param {Client} client          The deepstream client
 * @param {Connection} connection  The deepstream connection
 * @param {String} topic           Constant. One of C.TOPIC
 * @param {String} action          Constant. One of C.ACTIONS
 * @param {Number} timeoutDuration The duration of the timeout in milliseconds
 *
 * @constructor
 */
var SingleNotifier = function SingleNotifier(client, connection, topic, action, timeoutDuration) {
  this._client = client;
  this._connection = connection;
  this._topic = topic;
  this._action = action;
  this._timeoutDuration = timeoutDuration;
  this._requests = {};
  this._ackTimeoutRegistry = client._$getAckTimeoutRegistry();
  this._resubscribeNotifier = new ResubscribeNotifier(this._client, this._resendRequests.bind(this));
  this._onResponseTimeout = this._onResponseTimeout.bind(this);
};

/**
 * Check if there is a request pending with a specified name
 *
 * @param {String} name An identifier for the request, e.g. a record name
 *
 * @public
 * @returns {void}
 */
SingleNotifier.prototype.hasRequest = function (name) {
  return !!this._requests[name];
};

/**
 * Add a request. If one has already been made it will skip the server request
 * and multiplex the response
 *
 * @param {String} name An identifier for the request, e.g. a record name
 * @param {Object} response An object with property `callback` or `resolve` and `reject`
 *
 * @public
 * @returns {void}
 */
SingleNotifier.prototype.request = function (name, response) {
  if (!this._requests[name]) {
    this._requests[name] = [];
    this._connection.sendMsg(this._topic, this._action, [name]);
  }

  var ackId = this._ackTimeoutRegistry.add({
    topic: this._topic,
    event: C.EVENT.RESPONSE_TIMEOUT,
    name: name,
    action: this._action,
    timeout: this._timeoutDuration,
    callback: this._onResponseTimeout
  });
  this._requests[name].push({ response: response, ackId: ackId });
};

/**
 * Process a response for a request. This has quite a flexible API since callback functions
 * differ greatly and helps maximise reuse.
 *
 * @param {String} name An identifier for the request, e.g. a record name
 * @param {String} error Error message
 * @param {Object} data If successful, the response data
 *
 * @public
 * @returns {void}
 */
SingleNotifier.prototype.recieve = function (name, error, data) {
  var entries = this._requests[name];

  if (!entries) {
    this._client._$onError(this._topic, C.EVENT.UNSOLICITED_MESSAGE, 'no entry for ' + name);
    return;
  }

  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    this._ackTimeoutRegistry.remove({
      ackId: entry.ackId
    });

    if (entry.response.callback) {
      entry.response.callback(error, data);
    } else if (error) {
      entry.response.reject(data);
    } else {
      entry.response.resolve(data);
    }
  }
  delete this._requests[name];
};

/**
 * Will be invoked if a timeout occurs before a response arrives from the server
 *
 * @param {String} name An identifier for the request, e.g. a record name
 *
 * @private
 * @returns {void}
 */
SingleNotifier.prototype._onResponseTimeout = function (timeout) {
  var msg = 'No response received in time for ' + this._topic + '|' + this._action + '|' + timeout.name;
  this._client._$onError(this._topic, C.EVENT.RESPONSE_TIMEOUT, msg);
};

/**
 * Resends all the requests once the connection is back up
 *
 * @private
 * @returns {void}
 */
SingleNotifier.prototype._resendRequests = function () {
  for (var request in this._requests) {
    this._connection.sendMsg(this._topic, this._action, [request]);
  }
};

module.exports = SingleNotifier;

},{"../constants/constants":11,"./resubscribe-notifier":29}],31:[function(_dereq_,module,exports){
(function (process){
'use strict';
/* eslint-disable valid-typeof */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var C = _dereq_('../constants/constants');

/**
 * A regular expression that matches whitespace on either side, but
 * not in the center of a string
 *
 * @type {RegExp}
 */
var TRIM_REGULAR_EXPRESSION = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

/**
 * Used in typeof comparisons
 *
 * @type {String}
 */
var OBJECT = 'object';

/**
 * True if environment is node, false if it's a browser
 * This seems somewhat inelegant, if anyone knows a better solution,
 * let's change this (must identify browserify's pseudo node implementation though)
 *
 * @public
 * @type {Boolean}
 */
exports.isNode = typeof process !== 'undefined' && process.toString() === '[object process]';

/**
 * Provides as soon as possible async execution in a cross
 * platform way
 *
 * @param   {Function} fn the function to be executed in an asynchronous fashion
 *
 * @public
 * @returns {void}
 */
exports.nextTick = function (fn) {
  if (exports.isNode) {
    process.nextTick(fn);
  } else {
    setTimeout(fn, 0);
  }
};

/**
 * Removes whitespace from the beginning and end of a string
 *
 * @param   {String} inputString
 *
 * @public
 * @returns {String} trimmedString
 */
exports.trim = function (inputString) {
  if (inputString.trim) {
    return inputString.trim();
  }
  return inputString.replace(TRIM_REGULAR_EXPRESSION, '');
};

/**
 * Compares two objects for deep (recoursive) equality
 *
 * This used to be a significantly more complex custom implementation,
 * but JSON.stringify has gotten so fast that it now outperforms the custom
 * way by a factor of 1.5 to 3.
 *
 * In IE11 / Edge the custom implementation is still slightly faster, but for
 * consistencies sake and the upsides of leaving edge-case handling to the native
 * browser / node implementation we'll go for JSON.stringify from here on.
 *
 * Please find performance test results here
 *
 * http://jsperf.com/deep-equals-code-vs-json
 *
 * @param   {Mixed} objA
 * @param   {Mixed} objB
 *
 * @public
 * @returns {Boolean} isEqual
 */
exports.deepEquals = function (objA, objB) {
  if (objA === objB) {
    return true;
  } else if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== OBJECT || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== OBJECT) {
    return false;
  }

  return JSON.stringify(objA) === JSON.stringify(objB);
};

/**
 * Similar to deepEquals above, tests have shown that JSON stringify outperforms any attempt of
 * a code based implementation by 50% - 100% whilst also handling edge-cases and keeping
 * implementation complexity low.
 *
 * If ES6/7 ever decides to implement deep copying natively (what happened to Object.clone?
 * that was briefly a thing...), let's switch it for the native implementation. For now though,
 * even Object.assign({}, obj) only provides a shallow copy.
 *
 * Please find performance test results backing these statements here:
 *
 * http://jsperf.com/object-deep-copy-assign
 *
 * @param   {Mixed} obj the object that should be cloned
 *
 * @public
 * @returns {Mixed} clone
 */
exports.deepCopy = function (obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === OBJECT) {
    return JSON.parse(JSON.stringify(obj));
  }
  return obj;
};

/**
 * Copy the top level of items, but do not copy its items recourisvely. This
 * is much quicker than deepCopy does not guarantee the object items are new/unique.
 * Mainly used to change the reference to the actual object itself, but not its children.
 *
 * @param   {Mixed} obj the object that should cloned
 *
 * @public
 * @returns {Mixed} clone
 */
exports.shallowCopy = function (obj) {
  if (Array.isArray(obj)) {
    return obj.slice(0);
  } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === OBJECT) {
    var copy = Object.create(null);
    var props = Object.keys(obj);
    for (var i = 0; i < props.length; i++) {
      copy[props[i]] = obj[props[i]];
    }
    return copy;
  }
  return obj;
};

/**
 * Set timeout utility that adds support for disabling a timeout
 * by passing null
 *
 * @param {Function} callback        the function that will be called after the given time
 * @param {Number}   timeoutDuration the duration of the timeout in milliseconds
 *
 * @public
 * @returns {Number} timeoutId
 */
exports.setTimeout = function (callback, timeoutDuration) {
  if (timeoutDuration !== null) {
    return setTimeout(callback, timeoutDuration);
  }
  return -1;
};

/**
 * Set Interval utility that adds support for disabling an interval
 * by passing null
 *
 * @param {Function} callback        the function that will be called after the given time
 * @param {Number}   intervalDuration the duration of the interval in milliseconds
 *
 * @public
 * @returns {Number} intervalId
 */
exports.setInterval = function (callback, intervalDuration) {
  if (intervalDuration !== null) {
    return setInterval(callback, intervalDuration);
  }
  return -1;
};

/**
 * This method is used to break up long running operations and run a callback function immediately
 * after the browser has completed other operations such as events and display updates.
 *
 * @param {Function} callback        the function that will be called after the given time
 * @param {...*}     param1, ..., paramN additional parameters which are passed through to the
 *                                     callback
 *
 * @public
 */
exports.requestIdleCallback = !exports.isNode && window.requestIdleCallback && window.requestIdleCallback.bind(window) || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.cancelIdleCallback = !exports.isNode && window.cancelIdleCallback && window.cancelIdleCallback.bind(window) || function (id) {
  clearTimeout(id);
};

/**
 * Used to see if a protocol is specified within the url
 * @type {RegExp}
 */
var hasUrlProtocol = /^wss:|^ws:|^\/\//;

/**
 * Used to see if the protocol contains any unsupported protocols
 * @type {RegExp}
 */
var unsupportedProtocol = /^http:|^https:/;

var URL = _dereq_('url');

/**
 * Take the url passed when creating the client and ensure the correct
 * protocol is provided
 * @param  {String} url Url passed in by client
 * @return {String} Url with supported protocol
 */
exports.parseUrl = function (initialURl, defaultPath) {
  var url = initialURl;
  if (unsupportedProtocol.test(url)) {
    throw new Error('Only ws and wss are supported');
  }
  if (!hasUrlProtocol.test(url)) {
    url = 'ws://' + url;
  } else if (url.indexOf('//') === 0) {
    url = 'ws:' + url;
  }
  var serverUrl = URL.parse(url);
  if (!serverUrl.host) {
    throw new Error('invalid url, missing host');
  }
  serverUrl.protocol = serverUrl.protocol ? serverUrl.protocol : 'ws:';
  if (serverUrl.pathname === '/' && initialURl.charAt(initialURl.length - 1) !== '/') {
    serverUrl.pathname = defaultPath;
  }
  serverUrl.pathname = serverUrl.pathname ? serverUrl.pathname : defaultPath;
  return URL.format(serverUrl);
};

/**
 * Returns true is the connection state is OPEN
 * @return {Boolean}
 */
exports.isConnected = function (client) {
  var connectionState = client.getConnectionState();
  return connectionState === C.CONNECTION_STATE.OPEN;
};

}).call(this,_dereq_('_process'))
},{"../constants/constants":11,"_process":3,"url":8}]},{},[10])(10)
});
;