/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

;/*
 * metismenu - v2.7.1
 * A jQuery menu plugin
 * https://github.com/onokumus/metismenu#readme
 *
 * Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
 * Under MIT License
 */

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.metisMenu = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Util = function ($) {
    var transition = false;

    var TransitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments);
          }
          return undefined;
        }
      };
    }

    function transitionEndTest() {
      if (window.QUnit) {
        return false;
      }

      var el = document.createElement('mm');

      for (var name in TransitionEndEvent) {
        if (el.style[name] !== undefined) {
          return {
            end: TransitionEndEvent[name]
          };
        }
      }

      return false;
    }

    function transitionEndEmulator(duration) {
      var _this2 = this;

      var called = false;

      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });

      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this2);
        }
      }, duration);

      return this;
    }

    function setTransitionEndSupport() {
      transition = transitionEndTest();
      $.fn.emulateTransitionEnd = transitionEndEmulator;

      if (Util.supportsTransitionEnd()) {
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }

    var Util = {
      TRANSITION_END: 'mmTransitionEnd',

      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(transition.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition);
      }
    };

    setTransitionEndSupport();

    return Util;
  }(jQuery);

  var MetisMenu = function ($) {

    var NAME = 'metisMenu';
    var DATA_KEY = 'metisMenu';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 350;

    var Default = {
      toggle: true,
      preventDefault: true,
      activeClass: 'active',
      collapseClass: 'collapse',
      collapseInClass: 'in',
      collapsingClass: 'collapsing',
      triggerElement: 'a',
      parentTrigger: 'li',
      subMenu: 'ul'
    };

    var Event = {
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };

    var MetisMenu = function () {
      function MetisMenu(element, config) {
        _classCallCheck(this, MetisMenu);

        this._element = element;
        this._config = this._getConfig(config);
        this._transitioning = null;

        this.init();
      }

      MetisMenu.prototype.init = function init() {
        var self = this;
        $(this._element).find(this._config.parentTrigger + '.' + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr('aria-expanded', true).addClass(this._config.collapseClass + ' ' + this._config.collapseInClass);

        $(this._element).find(this._config.parentTrigger).not('.' + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr('aria-expanded', false).addClass(this._config.collapseClass);

        $(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).on(Event.CLICK_DATA_API, function (e) {
          var _this = $(this);
          var _parent = _this.parent(self._config.parentTrigger);
          var _siblings = _parent.siblings(self._config.parentTrigger).children(self._config.triggerElement);
          var _list = _parent.children(self._config.subMenu);
          if (self._config.preventDefault) {
            e.preventDefault();
          }
          if (_this.attr('aria-disabled') === 'true') {
            return;
          }
          if (_parent.hasClass(self._config.activeClass)) {
            _this.attr('aria-expanded', false);
            self._hide(_list);
          } else {
            self._show(_list);
            _this.attr('aria-expanded', true);
            if (self._config.toggle) {
              _siblings.attr('aria-expanded', false);
            }
          }

          if (self._config.onTransitionStart) {
            self._config.onTransitionStart(e);
          }
        });
      };

      MetisMenu.prototype._show = function _show(element) {
        if (this._transitioning || $(element).hasClass(this._config.collapsingClass)) {
          return;
        }
        var _this = this;
        var _el = $(element);

        var startEvent = $.Event(Event.SHOW);
        _el.trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        _el.parent(this._config.parentTrigger).addClass(this._config.activeClass);

        if (this._config.toggle) {
          this._hide(_el.parent(this._config.parentTrigger).siblings().children(this._config.subMenu + '.' + this._config.collapseInClass).attr('aria-expanded', false));
        }

        _el.removeClass(this._config.collapseClass).addClass(this._config.collapsingClass).height(0);

        this.setTransitioning(true);

        var complete = function complete() {
          // check if disposed
          if (!_this._config || !_this._element) {
            return;
          }
          _el.removeClass(_this._config.collapsingClass).addClass(_this._config.collapseClass + ' ' + _this._config.collapseInClass).height('').attr('aria-expanded', true);

          _this.setTransitioning(false);

          _el.trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        _el.height(_el[0].scrollHeight).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      };

      MetisMenu.prototype._hide = function _hide(element) {

        if (this._transitioning || !$(element).hasClass(this._config.collapseInClass)) {
          return;
        }
        var _this = this;
        var _el = $(element);

        var startEvent = $.Event(Event.HIDE);
        _el.trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        _el.parent(this._config.parentTrigger).removeClass(this._config.activeClass);
        _el.height(_el.height())[0].offsetHeight;

        _el.addClass(this._config.collapsingClass).removeClass(this._config.collapseClass).removeClass(this._config.collapseInClass);

        this.setTransitioning(true);

        var complete = function complete() {
          // check if disposed
          if (!_this._config || !_this._element) {
            return;
          }
          if (_this._transitioning && _this._config.onTransitionEnd) {
            _this._config.onTransitionEnd();
          }

          _this.setTransitioning(false);
          _el.trigger(Event.HIDDEN);

          _el.removeClass(_this._config.collapsingClass).addClass(_this._config.collapseClass).attr('aria-expanded', false);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        _el.height() == 0 || _el.css('display') == 'none' ? complete() : _el.height(0).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      };

      MetisMenu.prototype.setTransitioning = function setTransitioning(isTransitioning) {
        this._transitioning = isTransitioning;
      };

      MetisMenu.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);

        $(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).off('click');

        this._transitioning = null;
        this._config = null;
        this._element = null;
      };

      MetisMenu.prototype._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        return config;
      };

      MetisMenu._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data && /dispose/.test(config)) {
            this.dispose();
          }

          if (!data) {
            data = new MetisMenu(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };

      return MetisMenu;
    }();

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = MetisMenu._jQueryInterface;
    $.fn[NAME].Constructor = MetisMenu;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return MetisMenu._jQueryInterface;
    };
    return MetisMenu;
  }(jQuery);
});

;/**
*
* jquery.sparkline.js
*
* v2.4.1
* (c) Splunk, Inc
* Contact: Gareth Watts (gareth@splunk.com)
* http://omnipotent.net/jquery.sparkline/
*
* Generates inline sparkline charts from data supplied either to the method
* or inline in HTML
*
* Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
* (Firefox 2.0+, Safari, Opera, etc)
*
* License: New BSD License
*
* Copyright (c) 2012, Splunk Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright notice,
*       this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright notice,
*       this list of conditions and the following disclaimer in the documentation
*       and/or other materials provided with the distribution.
*     * Neither the name of Splunk Inc nor the names of its contributors may
*       be used to endorse or promote products derived from this software without
*       specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
* SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
* OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
* HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* Usage:
*  $(selector).sparkline(values, options)
*
* If values is undefined or set to 'html' then the data values are read from the specified tag:
*   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
*   $('.sparkline').sparkline();
* There must be no spaces in the enclosed data set
*
* Otherwise values must be an array of numbers or null values
*    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
*    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
*    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
*
* Values can also be specified in an HTML comment, or as a values attribute:
*    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
*    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
*    $('.sparkline').sparkline();
*
* For line charts, x values can also be specified:
*   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
*    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
*
* By default, options should be passed in as the second argument to the sparkline function:
*   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
*
* Options can also be set by passing them on the tag itself.  This feature is disabled by default though
* as there's a slight performance overhead:
*   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
*   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
* Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionsPrefix)
*
* Supported options:
*   lineColor - Color of the line used for the chart
*   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
*   width - Width of the chart - Defaults to 3 times the number of values in pixels
*   height - Height of the chart - Defaults to the height of the containing element
*   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
*   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
*   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
*   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
*   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
*   composite - If true then don't erase any existing chart attached to the tag, but draw
*           another chart over the top - Note that width and height are ignored if an
*           existing chart is detected.
*   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
*   enableTagOptions - Whether to check tags for sparkline options
*   tagOptionsPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
*   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
*           hidden dom element, avoding a browser reflow
*   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
*       making the plugin perform much like it did in 1.x
*   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
*   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
*       defaults to false (highlights enabled)
*   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
*   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
*   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
*   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
*   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
*   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
*       callback is given arguments of (sparkline, options, fields)
*   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
*   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
*       to control the format of the tooltip
*   tooltipPrefix - A string to prepend to each field displayed in a tooltip
*   tooltipSuffix - A string to append to each field displayed in a tooltip
*   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
*   tooltipValueLookups - An object or range map to map field values to tooltip strings
*       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
*   numberFormatter - Optional callback for formatting numbers in tooltips
*   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
*   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
*   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
*
* There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
* 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
*    line - Line chart.  Options:
*       spotColor - Set to '' to not end each line in a circular spot
*       minSpotColor - If set, color of spot at minimum value
*       maxSpotColor - If set, color of spot at maximum value
*       spotRadius - Radius in pixels
*       lineWidth - Width of line in pixels
*       normalRangeMin
*       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
*                      or expected range of values
*       normalRangeColor - Color to use for the above bar
*       drawNormalOnTop - Draw the normal range above the chart fill color if true
*       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
*       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
*       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
*       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
*
*   bar - Bar chart.  Options:
*       barColor - Color of bars for postive values
*       negBarColor - Color of bars for negative values
*       zeroColor - Color of bars with zero values
*       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
*       barWidth - Width of bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*       barSpacing - Gap between bars in pixels
*       zeroAxis - Centers the y-axis around zero if true
*
*   tristate - Charts values of win (>0), lose (<0) or draw (=0)
*       posBarColor - Color of win values
*       negBarColor - Color of lose values
*       zeroBarColor - Color of draw values
*       barWidth - Width of bars in pixels
*       barSpacing - Gap between bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*
*   discrete - Options:
*       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
*       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
*       thresholdColor
*
*   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
*       options:
*       targetColor - The color of the vertical target marker
*       targetWidth - The width of the target marker in pixels
*       performanceColor - The color of the performance measure horizontal bar
*       rangeColors - Colors to use for each qualitative range background color
*
*   pie - Pie chart. Options:
*       sliceColors - An array of colors to use for pie slices
*       offset - Angle in degrees to offset the first slice - Try -90 or +90
*       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
*       borderColor - Color to use for the pie chart border - Defaults to #000
*
*   box - Box plot. Options:
*       raw - Set to true to supply pre-computed plot points as values
*             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
*             When set to false you can supply any number of values and the box plot will
*             be computed for you.  Default is false.
*       showOutliers - Set to true (default) to display outliers as circles
*       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
*       boxLineColor - Outline color of the box
*       boxFillColor - Fill color for the box
*       whiskerColor - Line color used for whiskers
*       outlierLineColor - Outline color of outlier circles
*       outlierFillColor - Fill color of the outlier circles
*       spotRadius - Radius of outlier circles
*       medianColor - Line color of the median line
*       target - Draw a target cross hair at the supplied value (default undefined)
*
*
*
*   Examples:
*   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
*   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
*   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
*   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
*   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
*   $('#pie').sparkline([1,1,2], { type:'pie' });
*/

/*jslint regexp: true, browser: true, jquery: true, white: true, nomen: false, plusplus: false, maxerr: 500, indent: 4 */

(function(document, Math, undefined) { // performance/minified-size optimization
(function(factory) {
    if(typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (jQuery && !jQuery.fn.sparkline) {
        factory(jQuery);
    }
}
(function($) {
    'use strict';

    var UNSET_OPTION = {},
        getDefaults, createClass, SPFormat, clipval, quartile, normalizeValue, normalizeValues,
        remove, isNumber, all, sum, addCSS, ensureArray, formatNumber, RangeMap,
        MouseHandler, Tooltip, barHighlightMixin,
        line, bar, tristate, discrete, bullet, pie, box, defaultStyles, initStyles,
        VShape, VCanvas_base, VCanvas_canvas, VCanvas_vml, pending, shapeCount = 0;

    /**
     * Default configuration settings
     */
    getDefaults = function () {
        return {
            // Settings common to most/all chart types
            common: {
                type: 'line',
                lineColor: '#00f',
                fillColor: '#cdf',
                defaultPixelsPerValue: 3,
                width: 'auto',
                height: 'auto',
                composite: false,
                tagValuesAttribute: 'values',
                tagOptionsPrefix: 'spark',
                enableTagOptions: false,
                enableHighlight: true,
                highlightLighten: 1.4,
                tooltipSkipNull: true,
                tooltipPrefix: '',
                tooltipSuffix: '',
                disableHiddenCheck: false,
                numberFormatter: false,
                numberDigitGroupCount: 3,
                numberDigitGroupSep: ',',
                numberDecimalMark: '.',
                disableTooltips: false,
                disableInteraction: false
            },
            // Defaults for line charts
            line: {
                spotColor: '#f80',
                highlightSpotColor: '#5f5',
                highlightLineColor: '#f22',
                spotRadius: 1.5,
                minSpotColor: '#f80',
                maxSpotColor: '#f80',
                lineWidth: 1,
                normalRangeMin: undefined,
                normalRangeMax: undefined,
                normalRangeColor: '#ccc',
                drawNormalOnTop: false,
                chartRangeMin: undefined,
                chartRangeMax: undefined,
                chartRangeMinX: undefined,
                chartRangeMaxX: undefined,
                tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
            },
            // Defaults for bar charts
            bar: {
                barColor: '#3366cc',
                negBarColor: '#f44',
                stackedBarColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                    '#dd4477', '#0099c6', '#990099'],
                zeroColor: undefined,
                nullColor: undefined,
                zeroAxis: true,
                barWidth: 4,
                barSpacing: 1,
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                chartRangeClip: false,
                colorMap: undefined,
                tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
            },
            // Defaults for tristate charts
            tristate: {
                barWidth: 4,
                barSpacing: 1,
                posBarColor: '#6f6',
                negBarColor: '#f44',
                zeroBarColor: '#999',
                colorMap: {},
                tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                tooltipValueLookups: { map: { '-1': 'Loss', '0': 'Draw', '1': 'Win' } }
            },
            // Defaults for discrete charts
            discrete: {
                lineHeight: 'auto',
                thresholdColor: undefined,
                thresholdValue: 0,
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                chartRangeClip: false,
                tooltipFormat: new SPFormat('{{prefix}}{{value}}{{suffix}}')
            },
            // Defaults for bullet charts
            bullet: {
                targetColor: '#f33',
                targetWidth: 3, // width of the target bar in pixels
                performanceColor: '#33f',
                rangeColors: ['#d3dafe', '#a8b6ff', '#7f94ff'],
                base: undefined, // set this to a number to change the base start number
                tooltipFormat: new SPFormat('{{fieldkey:fields}} - {{value}}'),
                tooltipValueLookups: { fields: {r: 'Range', p: 'Performance', t: 'Target'} }
            },
            // Defaults for pie charts
            pie: {
                offset: 0,
                sliceColors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                    '#dd4477', '#0099c6', '#990099'],
                borderWidth: 0,
                borderColor: '#000',
                tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
            },
            // Defaults for box plots
            box: {
                raw: false,
                boxLineColor: '#000',
                boxFillColor: '#cdf',
                whiskerColor: '#000',
                outlierLineColor: '#333',
                outlierFillColor: '#fff',
                medianColor: '#f00',
                showOutliers: true,
                outlierIQR: 1.5,
                spotRadius: 1.5,
                target: undefined,
                targetColor: '#4a2',
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                tooltipFormat: new SPFormat('{{field:fields}}: {{value}}'),
                tooltipFormatFieldlistKey: 'field',
                tooltipValueLookups: { fields: { lq: 'Lower Quartile', med: 'Median',
                    uq: 'Upper Quartile', lo: 'Left Outlier', ro: 'Right Outlier',
                    lw: 'Left Whisker', rw: 'Right Whisker'} }
            }
        };
    };

    // You can have tooltips use a css class other than jqstooltip by specifying tooltipClassname
    defaultStyles = '.jqstooltip { ' +
            'position: absolute;' +
            'left: 0px;' +
            'top: 0px;' +
            'visibility: hidden;' +
            'background: rgb(0, 0, 0) transparent;' +
            'background-color: rgba(0,0,0,0.6);' +
            'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);' +
            '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' +
            'color: white;' +
            'font: 10px arial, san serif;' +
            'text-align: left;' +
            'white-space: nowrap;' +
            'padding: 5px;' +
            'border: 1px solid white;' +
            'box-sizing: content-box;' +
            'z-index: 10000;' +
            '}' +
            '.jqsfield { ' +
            'color: white;' +
            'font: 10px arial, san serif;' +
            'text-align: left;' +
            '}';

    /**
     * Utilities
     */

    createClass = function (/* [baseclass, [mixin, ...]], definition */) {
        var Class, args;
        Class = function () {
            this.init.apply(this, arguments);
        };
        if (arguments.length > 1) {
            if (arguments[0]) {
                Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
                Class._super = arguments[0].prototype;
            } else {
                Class.prototype = arguments[arguments.length - 1];
            }
            if (arguments.length > 2) {
                args = Array.prototype.slice.call(arguments, 1, -1);
                args.unshift(Class.prototype);
                $.extend.apply($, args);
            }
        } else {
            Class.prototype = arguments[0];
        }
        Class.prototype.cls = Class;
        return Class;
    };

    /**
     * Wraps a format string for tooltips
     * {{x}}
     * {{x.2}
     * {{x:months}}
     */
    $.SPFormatClass = SPFormat = createClass({
        fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
        precre: /(\w+)\.(\d+)/,

        init: function (format, fclass) {
            this.format = format;
            this.fclass = fclass;
        },

        render: function (fieldset, lookups, options) {
            var self = this,
                fields = fieldset,
                match, token, lookupkey, fieldvalue, prec;
            return this.format.replace(this.fre, function () {
                var lookup;
                token = arguments[1];
                lookupkey = arguments[3];
                match = self.precre.exec(token);
                if (match) {
                    prec = match[2];
                    token = match[1];
                } else {
                    prec = false;
                }
                fieldvalue = fields[token];
                if (fieldvalue === undefined) {
                    return '';
                }
                if (lookupkey && lookups && lookups[lookupkey]) {
                    lookup = lookups[lookupkey];
                    if (lookup.get) { // RangeMap
                        return lookups[lookupkey].get(fieldvalue) || fieldvalue;
                    } else {
                        return lookups[lookupkey][fieldvalue] || fieldvalue;
                    }
                }
                if (isNumber(fieldvalue)) {
                    if (options.get('numberFormatter')) {
                        fieldvalue = options.get('numberFormatter')(fieldvalue);
                    } else {
                        fieldvalue = formatNumber(fieldvalue, prec,
                            options.get('numberDigitGroupCount'),
                            options.get('numberDigitGroupSep'),
                            options.get('numberDecimalMark'));
                    }
                }
                return fieldvalue;
            });
        }
    });

    // convience method to avoid needing the new operator
    $.spformat = function(format, fclass) {
        return new SPFormat(format, fclass);
    };

    clipval = function (val, min, max) {
        if (val < min) {
            return min;
        }
        if (val > max) {
            return max;
        }
        return val;
    };

    quartile = function (values, q) {
        var vl;
        if (q === 2) {
            vl = Math.floor(values.length / 2);
            return values.length % 2 ? values[vl] : (values[vl-1] + values[vl]) / 2;
        } else {
            if (values.length % 2 ) { // odd
                vl = (values.length * q + q) / 4;
                return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl-1];
            } else { //even
                vl = (values.length * q + 2) / 4;
                return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 :  values[vl-1];

            }
        }
    };

    normalizeValue = function (val) {
        var nf;
        switch (val) {
            case 'undefined':
                val = undefined;
                break;
            case 'null':
                val = null;
                break;
            case 'true':
                val = true;
                break;
            case 'false':
                val = false;
                break;
            default:
                nf = parseFloat(val);
                if (val == nf) {
                    val = nf;
                }
        }
        return val;
    };

    normalizeValues = function (vals) {
        var i, result = [];
        for (i = vals.length; i--;) {
            result[i] = normalizeValue(vals[i]);
        }
        return result;
    };

    remove = function (vals, filter) {
        var i, vl, result = [];
        for (i = 0, vl = vals.length; i < vl; i++) {
            if (vals[i] !== filter) {
                result.push(vals[i]);
            }
        }
        return result;
    };

    isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    formatNumber = function (num, prec, groupsize, groupsep, decsep) {
        var p, i;
        num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split('');
        p = (p = $.inArray('.', num)) < 0 ? num.length : p;
        if (p < num.length) {
            num[p] = decsep;
        }
        for (i = p - groupsize; i > 0; i -= groupsize) {
            num.splice(i, 0, groupsep);
        }
        return num.join('');
    };

    // determine if all values of an array match a value
    // returns true if the array is empty
    all = function (val, arr, ignoreNull) {
        var i;
        for (i = arr.length; i--; ) {
            if (ignoreNull && arr[i] === null) continue;
            if (arr[i] !== val) {
                return false;
            }
        }
        return true;
    };

    // sums the numeric values in an array, ignoring other values
    sum = function (vals) {
        var total = 0, i;
        for (i = vals.length; i--;) {
            total += typeof vals[i] === 'number' ? vals[i] : 0;
        }
        return total;
    };

    ensureArray = function (val) {
        return $.isArray(val) ? val : [val];
    };

    // http://paulirish.com/2008/bookmarklet-inject-new-css-rules/
    addCSS = function(css) {
        var tag, iefail;
        if (document.createStyleSheet) {
            try {
                document.createStyleSheet().cssText = css;
                return;
            } catch (e) {
                // IE <= 9 maxes out at 31 stylesheets; inject into page instead.
                iefail = true;
            }
        }
        tag = document.createElement('style');
        tag.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(tag);
        if (iefail) {
            document.styleSheets[document.styleSheets.length - 1].cssText = css;
        } else {
            tag[(typeof document.body.style.WebkitAppearance == 'string') /* webkit only */ ? 'innerText' : 'innerHTML'] = css;
        }
    };

    // Provide a cross-browser interface to a few simple drawing primitives
    $.fn.simpledraw = function (width, height, useExisting, interact) {
        var target, mhandler;
        if (useExisting && (target = this.data('_jqs_vcanvas'))) {
            return target;
        }

        if ($.fn.sparkline.canvas === false) {
            // We've already determined that neither Canvas nor VML are available
            return false;

        } else if ($.fn.sparkline.canvas === undefined) {
            // No function defined yet -- need to see if we support Canvas or VML
            var el = document.createElement('canvas');
            if (!!(el.getContext && el.getContext('2d'))) {
                // Canvas is available
                $.fn.sparkline.canvas = function(width, height, target, interact) {
                    return new VCanvas_canvas(width, height, target, interact);
                };
            } else if (document.namespaces && !document.namespaces.v) {
                // VML is available
                document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
                $.fn.sparkline.canvas = function(width, height, target, interact) {
                    return new VCanvas_vml(width, height, target);
                };
            } else {
                // Neither Canvas nor VML are available
                $.fn.sparkline.canvas = false;
                return false;
            }
        }

        if (width === undefined) {
            width = $(this).innerWidth();
        }
        if (height === undefined) {
            height = $(this).innerHeight();
        }

        target = $.fn.sparkline.canvas(width, height, this, interact);

        mhandler = $(this).data('_jqs_mhandler');
        if (mhandler) {
            mhandler.registerCanvas(target);
        }
        return target;
    };

    $.fn.cleardraw = function () {
        var target = this.data('_jqs_vcanvas');
        if (target) {
            target.reset();
        }
    };

    $.RangeMapClass = RangeMap = createClass({
        init: function (map) {
            var key, range, rangelist = [];
            for (key in map) {
                if (map.hasOwnProperty(key) && typeof key === 'string' && key.indexOf(':') > -1) {
                    range = key.split(':');
                    range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
                    range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
                    range[2] = map[key];
                    rangelist.push(range);
                }
            }
            this.map = map;
            this.rangelist = rangelist || false;
        },

        get: function (value) {
            var rangelist = this.rangelist,
                i, range, result;
            if ((result = this.map[value]) !== undefined) {
                return result;
            }
            if (rangelist) {
                for (i = rangelist.length; i--;) {
                    range = rangelist[i];
                    if (range[0] <= value && range[1] >= value) {
                        return range[2];
                    }
                }
            }
            return undefined;
        }
    });

    // Convenience function
    $.range_map = function(map) {
        return new RangeMap(map);
    };

    MouseHandler = createClass({
        init: function (el, options) {
            var $el = $(el);
            this.$el = $el;
            this.options = options;
            this.currentPageX = 0;
            this.currentPageY = 0;
            this.el = el;
            this.splist = [];
            this.tooltip = null;
            this.over = false;
            this.displayTooltips = !options.get('disableTooltips');
            this.highlightEnabled = !options.get('disableHighlight');
        },

        registerSparkline: function (sp) {
            this.splist.push(sp);
            if (this.over) {
                this.updateDisplay();
            }
        },

        registerCanvas: function (canvas) {
            var $canvas = $(canvas.canvas);
            this.canvas = canvas;
            this.$canvas = $canvas;
            $canvas.mouseenter($.proxy(this.mouseenter, this));
            $canvas.mouseleave($.proxy(this.mouseleave, this));
            $canvas.click($.proxy(this.mouseclick, this));
        },

        reset: function (removeTooltip) {
            this.splist = [];
            if (this.tooltip && removeTooltip) {
                this.tooltip.remove();
                this.tooltip = undefined;
            }
        },

        mouseclick: function (e) {
            var clickEvent = $.Event('sparklineClick');
            clickEvent.originalEvent = e;
            clickEvent.sparklines = this.splist;
            this.$el.trigger(clickEvent);
        },

        mouseenter: function (e) {
            $(document.body).unbind('mousemove.jqs');
            $(document.body).bind('mousemove.jqs', $.proxy(this.mousemove, this));
            this.over = true;
            this.currentPageX = e.pageX;
            this.currentPageY = e.pageY;
            this.currentEl = e.target;
            if (!this.tooltip && this.displayTooltips) {
                this.tooltip = new Tooltip(this.options);
                this.tooltip.updatePosition(e.pageX, e.pageY);
            }
            this.updateDisplay();
        },

        mouseleave: function () {
            $(document.body).unbind('mousemove.jqs');
            var splist = this.splist,
                 spcount = splist.length,
                 needsRefresh = false,
                 sp, i;
            this.over = false;
            this.currentEl = null;

            if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }

            for (i = 0; i < spcount; i++) {
                sp = splist[i];
                if (sp.clearRegionHighlight()) {
                    needsRefresh = true;
                }
            }

            if (needsRefresh) {
                this.canvas.render();
            }
        },

        mousemove: function (e) {
            this.currentPageX = e.pageX;
            this.currentPageY = e.pageY;
            this.currentEl = e.target;
            if (this.tooltip) {
                this.tooltip.updatePosition(e.pageX, e.pageY);
            }
            this.updateDisplay();
        },

        updateDisplay: function () {
            var splist = this.splist,
                 spcount = splist.length,
                 needsRefresh = false,
                 offset = this.$canvas.offset(),
                 localX = this.currentPageX - offset.left,
                 localY = this.currentPageY - offset.top,
                 tooltiphtml, sp, i, result, changeEvent;
            if (!this.over) {
                return;
            }
            for (i = 0; i < spcount; i++) {
                sp = splist[i];
                result = sp.setRegionHighlight(this.currentEl, localX, localY);
                if (result) {
                    needsRefresh = true;
                }
            }
            if (needsRefresh) {
                changeEvent = $.Event('sparklineRegionChange');
                changeEvent.sparklines = this.splist;
                this.$el.trigger(changeEvent);
                if (this.tooltip) {
                    tooltiphtml = '';
                    for (i = 0; i < spcount; i++) {
                        sp = splist[i];
                        tooltiphtml += sp.getCurrentRegionTooltip();
                    }
                    this.tooltip.setContent(tooltiphtml);
                }
                if (!this.disableHighlight) {
                    this.canvas.render();
                }
            }
            if (result === null) {
                this.mouseleave();
            }
        }
    });


    Tooltip = createClass({
        sizeStyle: 'position: static !important;' +
            'display: block !important;' +
            'visibility: hidden !important;' +
            'float: left !important;',

        init: function (options) {
            var tooltipClassname = options.get('tooltipClassname', 'jqstooltip'),
                sizetipStyle = this.sizeStyle,
                offset;
            this.container = options.get('tooltipContainer') || document.body;
            this.tooltipOffsetX = options.get('tooltipOffsetX', 10);
            this.tooltipOffsetY = options.get('tooltipOffsetY', 12);
            // remove any previous lingering tooltip
            $('#jqssizetip').remove();
            $('#jqstooltip').remove();
            this.sizetip = $('<div/>', {
                id: 'jqssizetip',
                style: sizetipStyle,
                'class': tooltipClassname
            });
            this.tooltip = $('<div/>', {
                id: 'jqstooltip',
                'class': tooltipClassname
            }).appendTo(this.container);
            // account for the container's location
            offset = this.tooltip.offset();
            this.offsetLeft = offset.left;
            this.offsetTop = offset.top;
            this.hidden = true;
            $(window).unbind('resize.jqs scroll.jqs');
            $(window).bind('resize.jqs scroll.jqs', $.proxy(this.updateWindowDims, this));
            this.updateWindowDims();
        },

        updateWindowDims: function () {
            this.scrollTop = $(window).scrollTop();
            this.scrollLeft = $(window).scrollLeft();
            this.scrollRight = this.scrollLeft + $(window).width();
            this.updatePosition();
        },

        getSize: function (content) {
            this.sizetip.html(content).appendTo(this.container);
            this.width = this.sizetip.width() + 1;
            this.height = this.sizetip.height();
            this.sizetip.remove();
        },

        setContent: function (content) {
            if (!content) {
                this.tooltip.css('visibility', 'hidden');
                this.hidden = true;
                return;
            }
            this.getSize(content);
            this.tooltip.html(content)
                .css({
                    'width': this.width,
                    'height': this.height,
                    'visibility': 'visible'
                });
            if (this.hidden) {
                this.hidden = false;
                this.updatePosition();
            }
        },

        updatePosition: function (x, y) {
            if (x === undefined) {
                if (this.mousex === undefined) {
                    return;
                }
                x = this.mousex - this.offsetLeft;
                y = this.mousey - this.offsetTop;

            } else {
                this.mousex = x = x - this.offsetLeft;
                this.mousey = y = y - this.offsetTop;
            }
            if (!this.height || !this.width || this.hidden) {
                return;
            }

            y -= this.height + this.tooltipOffsetY;
            x += this.tooltipOffsetX;

            if (y < this.scrollTop) {
                y = this.scrollTop;
            }
            if (x < this.scrollLeft) {
                x = this.scrollLeft;
            } else if (x + this.width > this.scrollRight) {
                x = this.scrollRight - this.width;
            }

            this.tooltip.css({
                'left': x,
                'top': y
            });
        },

        remove: function () {
            this.tooltip.remove();
            this.sizetip.remove();
            this.sizetip = this.tooltip = undefined;
            $(window).unbind('resize.jqs scroll.jqs');
        }
    });

    initStyles = function() {
        addCSS(defaultStyles);
    };

    $(initStyles);

    pending = [];
    $.fn.sparkline = function (userValues, userOptions) {
        return this.each(function () {
            var options = new $.fn.sparkline.options(this, userOptions),
                 $this = $(this),
                 render, i;
            render = function () {
                var values, width, height, tmp, mhandler, sp, vals;
                if (userValues === 'html' || userValues === undefined) {
                    vals = this.getAttribute(options.get('tagValuesAttribute'));
                    if (vals === undefined || vals === null) {
                        vals = $this.html();
                    }
                    values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, '').split(',');
                } else {
                    values = userValues;
                }

                width = options.get('width') === 'auto' ? values.length * options.get('defaultPixelsPerValue') : options.get('width');
                if (options.get('height') === 'auto') {
                    if (!options.get('composite') || !$.data(this, '_jqs_vcanvas')) {
                        // must be a better way to get the line height
                        tmp = document.createElement('span');
                        tmp.innerHTML = 'a';
                        $this.html(tmp);
                        height = $(tmp).innerHeight() || $(tmp).height();
                        $(tmp).remove();
                        tmp = null;
                    }
                } else {
                    height = options.get('height');
                }

                if (!options.get('disableInteraction')) {
                    mhandler = $.data(this, '_jqs_mhandler');
                    if (!mhandler) {
                        mhandler = new MouseHandler(this, options);
                        $.data(this, '_jqs_mhandler', mhandler);
                    } else if (!options.get('composite')) {
                        mhandler.reset();
                    }
                } else {
                    mhandler = false;
                }

                if (options.get('composite') && !$.data(this, '_jqs_vcanvas')) {
                    if (!$.data(this, '_jqs_errnotify')) {
                        alert('Attempted to attach a composite sparkline to an element with no existing sparkline');
                        $.data(this, '_jqs_errnotify', true);
                    }
                    return;
                }

                sp = new $.fn.sparkline[options.get('type')](this, values, options, width, height);

                sp.render();

                if (mhandler) {
                    mhandler.registerSparkline(sp);
                }
            };
            if (($(this).html() && !options.get('disableHiddenCheck') && $(this).is(':hidden')) || !$(this).parents('body').length) {
                if (!options.get('composite') && $.data(this, '_jqs_pending')) {
                    // remove any existing references to the element
                    for (i = pending.length; i; i--) {
                        if (pending[i - 1][0] == this) {
                            pending.splice(i - 1, 1);
                        }
                    }
                }
                pending.push([this, render]);
                $.data(this, '_jqs_pending', true);
            } else {
                render.call(this);
            }
        });
    };

    $.fn.sparkline.defaults = getDefaults();


    $.sparkline_display_visible = function () {
        var el, i, pl;
        var done = [];
        for (i = 0, pl = pending.length; i < pl; i++) {
            el = pending[i][0];
            if ($(el).is(':visible') && !$(el).parents().is(':hidden')) {
                pending[i][1].call(el);
                $.data(pending[i][0], '_jqs_pending', false);
                done.push(i);
            } else if (!$(el).closest('html').length && !$.data(el, '_jqs_pending')) {
                // element has been inserted and removed from the DOM
                // If it was not yet inserted into the dom then the .data request
                // will return true.
                // removing from the dom causes the data to be removed.
                $.data(pending[i][0], '_jqs_pending', false);
                done.push(i);
            }
        }
        for (i = done.length; i; i--) {
            pending.splice(done[i - 1], 1);
        }
    };


    /**
     * User option handler
     */
    $.fn.sparkline.options = createClass({
        init: function (tag, userOptions) {
            var extendedOptions, defaults, base, tagOptionType;
            this.userOptions = userOptions = userOptions || {};
            this.tag = tag;
            this.tagValCache = {};
            defaults = $.fn.sparkline.defaults;
            base = defaults.common;
            this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);

            tagOptionType = this.getTagSetting('type');
            if (tagOptionType === UNSET_OPTION) {
                extendedOptions = defaults[userOptions.type || base.type];
            } else {
                extendedOptions = defaults[tagOptionType];
            }
            this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
        },


        getTagSetting: function (key) {
            var prefix = this.tagOptionsPrefix,
                val, i, pairs, keyval;
            if (prefix === false || prefix === undefined) {
                return UNSET_OPTION;
            }
            if (this.tagValCache.hasOwnProperty(key)) {
                val = this.tagValCache.key;
            } else {
                val = this.tag.getAttribute(prefix + key);
                if (val === undefined || val === null) {
                    val = UNSET_OPTION;
                } else if (val.substr(0, 1) === '[') {
                    val = val.substr(1, val.length - 2).split(',');
                    for (i = val.length; i--;) {
                        val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ''));
                    }
                } else if (val.substr(0, 1) === '{') {
                    pairs = val.substr(1, val.length - 2).split(',');
                    val = {};
                    for (i = pairs.length; i--;) {
                        keyval = pairs[i].split(':', 2);
                        val[keyval[0].replace(/(^\s*)|(\s*$)/g, '')] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ''));
                    }
                } else {
                    val = normalizeValue(val);
                }
                this.tagValCache.key = val;
            }
            return val;
        },

        get: function (key, defaultval) {
            var tagOption = this.getTagSetting(key),
                result;
            if (tagOption !== UNSET_OPTION) {
                return tagOption;
            }
            return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
        }
    });


    $.fn.sparkline._base = createClass({
        disabled: false,

        init: function (el, values, options, width, height) {
            this.el = el;
            this.$el = $(el);
            this.values = values;
            this.options = options;
            this.width = width;
            this.height = height;
            this.currentRegion = undefined;
        },

        /**
         * Setup the canvas
         */
        initTarget: function () {
            var interactive = !this.options.get('disableInteraction');
            if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get('composite'), interactive))) {
                this.disabled = true;
            } else {
                this.canvasWidth = this.target.pixelWidth;
                this.canvasHeight = this.target.pixelHeight;
            }
        },

        /**
         * Actually render the chart to the canvas
         */
        render: function () {
            if (this.disabled) {
                this.el.innerHTML = '';
                return false;
            }
            return true;
        },

        /**
         * Return a region id for a given x/y co-ordinate
         */
        getRegion: function (x, y) {
        },

        /**
         * Highlight an item based on the moused-over x,y co-ordinate
         */
        setRegionHighlight: function (el, x, y) {
            var currentRegion = this.currentRegion,
                highlightEnabled = !this.options.get('disableHighlight'),
                newRegion;
            if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
                return null;
            }
            newRegion = this.getRegion(el, x, y);
            if (currentRegion !== newRegion) {
                if (currentRegion !== undefined && highlightEnabled) {
                    this.removeHighlight();
                }
                this.currentRegion = newRegion;
                if (newRegion !== undefined && highlightEnabled) {
                    this.renderHighlight();
                }
                return true;
            }
            return false;
        },

        /**
         * Reset any currently highlighted item
         */
        clearRegionHighlight: function () {
            if (this.currentRegion !== undefined) {
                this.removeHighlight();
                this.currentRegion = undefined;
                return true;
            }
            return false;
        },

        renderHighlight: function () {
            this.changeHighlight(true);
        },

        removeHighlight: function () {
            this.changeHighlight(false);
        },

        changeHighlight: function (highlight)  {},

        /**
         * Fetch the HTML to display as a tooltip
         */
        getCurrentRegionTooltip: function () {
            var options = this.options,
                header = '',
                entries = [],
                fields, formats, formatlen, fclass, text, i,
                showFields, showFieldsKey, newFields, fv,
                formatter, format, fieldlen, j;
            if (this.currentRegion === undefined) {
                return '';
            }
            fields = this.getCurrentRegionFields();
            formatter = options.get('tooltipFormatter');
            if (formatter) {
                return formatter(this, options, fields);
            }
            if (options.get('tooltipChartTitle')) {
                header += '<div class="jqs jqstitle">' + options.get('tooltipChartTitle') + '</div>\n';
            }
            formats = this.options.get('tooltipFormat');
            if (!formats) {
                return '';
            }
            if (!$.isArray(formats)) {
                formats = [formats];
            }
            if (!$.isArray(fields)) {
                fields = [fields];
            }
            showFields = this.options.get('tooltipFormatFieldlist');
            showFieldsKey = this.options.get('tooltipFormatFieldlistKey');
            if (showFields && showFieldsKey) {
                // user-selected ordering of fields
                newFields = [];
                for (i = fields.length; i--;) {
                    fv = fields[i][showFieldsKey];
                    if ((j = $.inArray(fv, showFields)) != -1) {
                        newFields[j] = fields[i];
                    }
                }
                fields = newFields;
            }
            formatlen = formats.length;
            fieldlen = fields.length;
            for (i = 0; i < formatlen; i++) {
                format = formats[i];
                if (typeof format === 'string') {
                    format = new SPFormat(format);
                }
                fclass = format.fclass || 'jqsfield';
                for (j = 0; j < fieldlen; j++) {
                    if (!fields[j].isNull || !options.get('tooltipSkipNull')) {
                        $.extend(fields[j], {
                            prefix: options.get('tooltipPrefix'),
                            suffix: options.get('tooltipSuffix')
                        });
                        text = format.render(fields[j], options.get('tooltipValueLookups'), options);
                        entries.push('<div class="' + fclass + '">' + text + '</div>');
                    }
                }
            }
            if (entries.length) {
                return header + entries.join('\n');
            }
            return '';
        },

        getCurrentRegionFields: function () {},

        calcHighlightColor: function (color, options) {
            var highlightColor = options.get('highlightColor'),
                lighten = options.get('highlightLighten'),
                parse, mult, rgbnew, i;
            if (highlightColor) {
                return highlightColor;
            }
            if (lighten) {
                // extract RGB values
                parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
                if (parse) {
                    rgbnew = [];
                    mult = color.length === 4 ? 16 : 1;
                    for (i = 0; i < 3; i++) {
                        rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
                    }
                    return 'rgb(' + rgbnew.join(',') + ')';
                }

            }
            return color;
        }

    });

    barHighlightMixin = {
        changeHighlight: function (highlight) {
            var currentRegion = this.currentRegion,
                target = this.target,
                shapeids = this.regionShapes[currentRegion],
                newShapes;
            // will be null if the region value was null
            if (shapeids) {
                newShapes = this.renderRegion(currentRegion, highlight);
                if ($.isArray(newShapes) || $.isArray(shapeids)) {
                    target.replaceWithShapes(shapeids, newShapes);
                    this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
                        return newShape.id;
                    });
                } else {
                    target.replaceWithShape(shapeids, newShapes);
                    this.regionShapes[currentRegion] = newShapes.id;
                }
            }
        },

        render: function () {
            var values = this.values,
                target = this.target,
                regionShapes = this.regionShapes,
                shapes, ids, i, j;

            if (!this.cls._super.render.call(this)) {
                return;
            }
            for (i = values.length; i--;) {
                shapes = this.renderRegion(i);
                if (shapes) {
                    if ($.isArray(shapes)) {
                        ids = [];
                        for (j = shapes.length; j--;) {
                            shapes[j].append();
                            ids.push(shapes[j].id);
                        }
                        regionShapes[i] = ids;
                    } else {
                        shapes.append();
                        regionShapes[i] = shapes.id; // store just the shapeid
                    }
                } else {
                    // null value
                    regionShapes[i] = null;
                }
            }
            target.render();
        }
    };

    /**
     * Line charts
     */
    $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
        type: 'line',

        init: function (el, values, options, width, height) {
            line._super.init.call(this, el, values, options, width, height);
            this.vertices = [];
            this.regionMap = [];
            this.xvalues = [];
            this.yvalues = [];
            this.yminmax = [];
            this.hightlightSpotId = null;
            this.lastShapeId = null;
            this.initTarget();
        },

        getRegion: function (el, x, y) {
            var i,
                regionMap = this.regionMap; // maps regions to value positions
            for (i = regionMap.length; i--;) {
                if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
                    return regionMap[i][2];
                }
            }
            return undefined;
        },

        getCurrentRegionFields: function () {
            var currentRegion = this.currentRegion;
            return {
                isNull: this.yvalues[currentRegion] === null,
                x: this.xvalues[currentRegion],
                y: this.yvalues[currentRegion],
                color: this.options.get('lineColor'),
                fillColor: this.options.get('fillColor'),
                offset: currentRegion
            };
        },

        renderHighlight: function () {
            var currentRegion = this.currentRegion,
                target = this.target,
                vertex = this.vertices[currentRegion],
                options = this.options,
                spotRadius = options.get('spotRadius'),
                highlightSpotColor = options.get('highlightSpotColor'),
                highlightLineColor = options.get('highlightLineColor'),
                highlightSpot, highlightLine;

            if (!vertex) {
                return;
            }
            if (spotRadius && highlightSpotColor) {
                highlightSpot = target.drawCircle(vertex[0], vertex[1],
                    spotRadius, undefined, highlightSpotColor);
                this.highlightSpotId = highlightSpot.id;
                target.insertAfterShape(this.lastShapeId, highlightSpot);
            }
            if (highlightLineColor) {
                highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0],
                    this.canvasTop + this.canvasHeight, highlightLineColor);
                this.highlightLineId = highlightLine.id;
                target.insertAfterShape(this.lastShapeId, highlightLine);
            }
        },

        removeHighlight: function () {
            var target = this.target;
            if (this.highlightSpotId) {
                target.removeShapeId(this.highlightSpotId);
                this.highlightSpotId = null;
            }
            if (this.highlightLineId) {
                target.removeShapeId(this.highlightLineId);
                this.highlightLineId = null;
            }
        },

        scanValues: function () {
            var values = this.values,
                valcount = values.length,
                xvalues = this.xvalues,
                yvalues = this.yvalues,
                yminmax = this.yminmax,
                i, val, isStr, isArray, sp;
            for (i = 0; i < valcount; i++) {
                val = values[i];
                isStr = typeof(values[i]) === 'string';
                isArray = typeof(values[i]) === 'object' && values[i] instanceof Array;
                sp = isStr && values[i].split(':');
                if (isStr && sp.length === 2) { // x:y
                    xvalues.push(Number(sp[0]));
                    yvalues.push(Number(sp[1]));
                    yminmax.push(Number(sp[1]));
                } else if (isArray) {
                    xvalues.push(val[0]);
                    yvalues.push(val[1]);
                    yminmax.push(val[1]);
                } else {
                    xvalues.push(i);
                    if (values[i] === null || values[i] === 'null') {
                        yvalues.push(null);
                    } else {
                        yvalues.push(Number(val));
                        yminmax.push(Number(val));
                    }
                }
            }
            if (this.options.get('xvalues')) {
                xvalues = this.options.get('xvalues');
            }

            this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
            this.miny = this.minyorg = Math.min.apply(Math, yminmax);

            this.maxx = Math.max.apply(Math, xvalues);
            this.minx = Math.min.apply(Math, xvalues);

            this.xvalues = xvalues;
            this.yvalues = yvalues;
            this.yminmax = yminmax;

        },

        processRangeOptions: function () {
            var options = this.options,
                normalRangeMin = options.get('normalRangeMin'),
                normalRangeMax = options.get('normalRangeMax');

            if (normalRangeMin !== undefined) {
                if (normalRangeMin < this.miny) {
                    this.miny = normalRangeMin;
                }
                if (normalRangeMax > this.maxy) {
                    this.maxy = normalRangeMax;
                }
            }
            if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.miny)) {
                this.miny = options.get('chartRangeMin');
            }
            if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.maxy)) {
                this.maxy = options.get('chartRangeMax');
            }
            if (options.get('chartRangeMinX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMinX') < this.minx)) {
                this.minx = options.get('chartRangeMinX');
            }
            if (options.get('chartRangeMaxX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMaxX') > this.maxx)) {
                this.maxx = options.get('chartRangeMaxX');
            }

        },

        drawNormalRange: function (canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
            var normalRangeMin = this.options.get('normalRangeMin'),
                normalRangeMax = this.options.get('normalRangeMax'),
                ytop = canvasTop + Math.round(canvasHeight - (canvasHeight * ((normalRangeMax - this.miny) / rangey))),
                height = Math.round((canvasHeight * (normalRangeMax - normalRangeMin)) / rangey);
            this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get('normalRangeColor')).append();
        },

        render: function () {
            var options = this.options,
                target = this.target,
                canvasWidth = this.canvasWidth,
                canvasHeight = this.canvasHeight,
                vertices = this.vertices,
                spotRadius = options.get('spotRadius'),
                regionMap = this.regionMap,
                rangex, rangey, yvallast,
                canvasTop, canvasLeft,
                vertex, path, paths, x, y, xnext, xpos, xposnext,
                last, next, yvalcount, lineShapes, fillShapes, plen,
                valueSpots, hlSpotsEnabled, color, xvalues, yvalues, i;

            if (!line._super.render.call(this)) {
                return;
            }

            this.scanValues();
            this.processRangeOptions();

            xvalues = this.xvalues;
            yvalues = this.yvalues;

            if (!this.yminmax.length || this.yvalues.length < 2) {
                // empty or all null valuess
                return;
            }

            canvasTop = canvasLeft = 0;

            rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
            rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
            yvallast = this.yvalues.length - 1;

            if (spotRadius && (canvasWidth < (spotRadius * 4) || canvasHeight < (spotRadius * 4))) {
                spotRadius = 0;
            }
            if (spotRadius) {
                // adjust the canvas size as required so that spots will fit
                hlSpotsEnabled = options.get('highlightSpotColor') &&  !options.get('disableInteraction');
                if (hlSpotsEnabled || options.get('minSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.miny)) {
                    canvasHeight -= Math.ceil(spotRadius);
                }
                if (hlSpotsEnabled || options.get('maxSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.maxy)) {
                    canvasHeight -= Math.ceil(spotRadius);
                    canvasTop += Math.ceil(spotRadius);
                }
                if (hlSpotsEnabled ||
                     ((options.get('minSpotColor') || options.get('maxSpotColor')) && (yvalues[0] === this.miny || yvalues[0] === this.maxy))) {
                    canvasLeft += Math.ceil(spotRadius);
                    canvasWidth -= Math.ceil(spotRadius);
                }
                if (hlSpotsEnabled || options.get('spotColor') ||
                    (options.get('minSpotColor') || options.get('maxSpotColor') &&
                        (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy))) {
                    canvasWidth -= Math.ceil(spotRadius);
                }
            }


            canvasHeight--;

            if (options.get('normalRangeMin') !== undefined && !options.get('drawNormalOnTop')) {
                this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
            }

            path = [];
            paths = [path];
            last = next = null;
            yvalcount = yvalues.length;
            for (i = 0; i < yvalcount; i++) {
                x = xvalues[i];
                xnext = xvalues[i + 1];
                y = yvalues[i];
                xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
                xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
                next = xpos + ((xposnext - xpos) / 2);
                regionMap[i] = [last || 0, next, i];
                last = next;
                if (y === null) {
                    if (i) {
                        if (yvalues[i - 1] !== null) {
                            path = [];
                            paths.push(path);
                        }
                        vertices.push(null);
                    }
                } else {
                    if (y < this.miny) {
                        y = this.miny;
                    }
                    if (y > this.maxy) {
                        y = this.maxy;
                    }
                    if (!path.length) {
                        // previous value was null
                        path.push([xpos, canvasTop + canvasHeight]);
                    }
                    vertex = [xpos, canvasTop + Math.round(canvasHeight - (canvasHeight * ((y - this.miny) / rangey)))];
                    path.push(vertex);
                    vertices.push(vertex);
                }
            }

            lineShapes = [];
            fillShapes = [];
            plen = paths.length;
            for (i = 0; i < plen; i++) {
                path = paths[i];
                if (path.length) {
                    if (options.get('fillColor')) {
                        path.push([path[path.length - 1][0], (canvasTop + canvasHeight)]);
                        fillShapes.push(path.slice(0));
                        path.pop();
                    }
                    // if there's only a single point in this path, then we want to display it
                    // as a vertical line which means we keep path[0]  as is
                    if (path.length > 2) {
                        // else we want the first value
                        path[0] = [path[0][0], path[1][1]];
                    }
                    lineShapes.push(path);
                }
            }

            // draw the fill first, then optionally the normal range, then the line on top of that
            plen = fillShapes.length;
            for (i = 0; i < plen; i++) {
                target.drawShape(fillShapes[i],
                    options.get('fillColor'), options.get('fillColor')).append();
            }

            if (options.get('normalRangeMin') !== undefined && options.get('drawNormalOnTop')) {
                this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
            }

            plen = lineShapes.length;
            for (i = 0; i < plen; i++) {
                target.drawShape(lineShapes[i], options.get('lineColor'), undefined,
                    options.get('lineWidth')).append();
            }

            if (spotRadius && options.get('valueSpots')) {
                valueSpots = options.get('valueSpots');
                if (valueSpots.get === undefined) {
                    valueSpots = new RangeMap(valueSpots);
                }
                for (i = 0; i < yvalcount; i++) {
                    color = valueSpots.get(yvalues[i]);
                    if (color) {
                        target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)),
                            canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[i] - this.miny) / rangey))),
                            spotRadius, undefined,
                            color).append();
                    }
                }

            }
            if (spotRadius && options.get('spotColor') && yvalues[yvallast] !== null) {
                target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)),
                    canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[yvallast] - this.miny) / rangey))),
                    spotRadius, undefined,
                    options.get('spotColor')).append();
            }
            if (this.maxy !== this.minyorg) {
                if (spotRadius && options.get('minSpotColor')) {
                    x = xvalues[$.inArray(this.minyorg, yvalues)];
                    target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                        canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.minyorg - this.miny) / rangey))),
                        spotRadius, undefined,
                        options.get('minSpotColor')).append();
                }
                if (spotRadius && options.get('maxSpotColor')) {
                    x = xvalues[$.inArray(this.maxyorg, yvalues)];
                    target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                        canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.maxyorg - this.miny) / rangey))),
                        spotRadius, undefined,
                        options.get('maxSpotColor')).append();
                }
            }

            this.lastShapeId = target.getLastShapeId();
            this.canvasTop = canvasTop;
            target.render();
        }
    });

    /**
     * Bar charts
     */
    $.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
        type: 'bar',

        init: function (el, values, options, width, height) {
            var barWidth = parseInt(options.get('barWidth'), 10),
                barSpacing = parseInt(options.get('barSpacing'), 10),
                chartRangeMin = options.get('chartRangeMin'),
                chartRangeMax = options.get('chartRangeMax'),
                chartRangeClip = options.get('chartRangeClip'),
                stackMin = Infinity,
                stackMax = -Infinity,
                isStackString, groupMin, groupMax, stackRanges,
                numValues, i, vlen, range, zeroAxis, xaxisOffset, min, max, clipMin, clipMax,
                stacked, vlist, j, slen, svals, val, yoffset, yMaxCalc, canvasHeightEf;
            bar._super.init.call(this, el, values, options, width, height);

            // scan values to determine whether to stack bars
            for (i = 0, vlen = values.length; i < vlen; i++) {
                val = values[i];
                isStackString = typeof(val) === 'string' && val.indexOf(':') > -1;
                if (isStackString || $.isArray(val)) {
                    stacked = true;
                    if (isStackString) {
                        val = values[i] = normalizeValues(val.split(':'));
                    }
                    val = remove(val, null); // min/max will treat null as zero
                    groupMin = Math.min.apply(Math, val);
                    groupMax = Math.max.apply(Math, val);
                    if (groupMin < stackMin) {
                        stackMin = groupMin;
                    }
                    if (groupMax > stackMax) {
                        stackMax = groupMax;
                    }
                }
            }

            this.stacked = stacked;
            this.regionShapes = {};
            this.barWidth = barWidth;
            this.barSpacing = barSpacing;
            this.totalBarWidth = barWidth + barSpacing;
            this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);

            this.initTarget();

            if (chartRangeClip) {
                clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
                clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
            }

            numValues = [];
            stackRanges = stacked ? [] : numValues;
            var stackTotals = [];
            var stackRangesNeg = [];
            for (i = 0, vlen = values.length; i < vlen; i++) {
                if (stacked) {
                    vlist = values[i];
                    values[i] = svals = [];
                    stackTotals[i] = 0;
                    stackRanges[i] = stackRangesNeg[i] = 0;
                    for (j = 0, slen = vlist.length; j < slen; j++) {
                        val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];
                        if (val !== null) {
                            if (val > 0) {
                                stackTotals[i] += val;
                            }
                            if (stackMin < 0 && stackMax > 0) {
                                if (val < 0) {
                                    stackRangesNeg[i] += Math.abs(val);
                                } else {
                                    stackRanges[i] += val;
                                }
                            } else {
                                stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
                            }
                            numValues.push(val);
                        }
                    }
                } else {
                    val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
                    val = values[i] = normalizeValue(val);
                    if (val !== null) {
                        numValues.push(val);
                    }
                }
            }
            this.max = max = Math.max.apply(Math, numValues);
            this.min = min = Math.min.apply(Math, numValues);
            this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
            this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;

            if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < min)) {
                min = options.get('chartRangeMin');
            }
            if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > max)) {
                max = options.get('chartRangeMax');
            }

            this.zeroAxis = zeroAxis = options.get('zeroAxis', true);
            if (min <= 0 && max >= 0 && zeroAxis) {
                xaxisOffset = 0;
            } else if (zeroAxis == false) {
                xaxisOffset = min;
            } else if (min > 0) {
                xaxisOffset = min;
            } else {
                xaxisOffset = max;
            }
            this.xaxisOffset = xaxisOffset;

            range = stacked ? (Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg)) : max - min;

            // as we plot zero/min values a single pixel line, we add a pixel to all other
            // values - Reduce the effective canvas size to suit
            this.canvasHeightEf = (zeroAxis && min < 0) ? this.canvasHeight - 2 : this.canvasHeight - 1;

            if (min < xaxisOffset) {
                yMaxCalc = (stacked && max >= 0) ? stackMax : max;
                yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;
                if (yoffset !== Math.ceil(yoffset)) {
                    this.canvasHeightEf -= 2;
                    yoffset = Math.ceil(yoffset);
                }
            } else {
                yoffset = this.canvasHeight;
            }
            this.yoffset = yoffset;

            if ($.isArray(options.get('colorMap'))) {
                this.colorMapByIndex = options.get('colorMap');
                this.colorMapByValue = null;
            } else {
                this.colorMapByIndex = null;
                this.colorMapByValue = options.get('colorMap');
                if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                    this.colorMapByValue = new RangeMap(this.colorMapByValue);
                }
            }

            this.range = range;
        },

        getRegion: function (el, x, y) {
            var result = Math.floor(x / this.totalBarWidth);
            return (result < 0 || result >= this.values.length) ? undefined : result;
        },

        getCurrentRegionFields: function () {
            var currentRegion = this.currentRegion,
                values = ensureArray(this.values[currentRegion]),
                result = [],
                value, i;
            for (i = values.length; i--;) {
                value = values[i];
                result.push({
                    isNull: value === null,
                    value: value,
                    color: this.calcColor(i, value, currentRegion),
                    offset: currentRegion
                });
            }
            return result;
        },

        calcColor: function (stacknum, value, valuenum) {
            var colorMapByIndex = this.colorMapByIndex,
                colorMapByValue = this.colorMapByValue,
                options = this.options,
                color, newColor;
            if (this.stacked) {
                color = options.get('stackedBarColor');
            } else {
                color = (value < 0) ? options.get('negBarColor') : options.get('barColor');
            }
            if (value === 0 && options.get('zeroColor') !== undefined) {
                color = options.get('zeroColor');
            }
            if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                color = newColor;
            } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                color = colorMapByIndex[valuenum];
            }
            return $.isArray(color) ? color[stacknum % color.length] : color;
        },

        /**
         * Render bar(s) for a region
         */
        renderRegion: function (valuenum, highlight) {
            var vals = this.values[valuenum],
                options = this.options,
                xaxisOffset = this.xaxisOffset,
                result = [],
                range = this.range,
                stacked = this.stacked,
                target = this.target,
                x = valuenum * this.totalBarWidth,
                canvasHeightEf = this.canvasHeightEf,
                yoffset = this.yoffset,
                y, height, color, isNull, yoffsetNeg, i, valcount, val, minPlotted, allMin;

            vals = $.isArray(vals) ? vals : [vals];
            valcount = vals.length;
            val = vals[0];
            isNull = all(null, vals);
            allMin = all(xaxisOffset, vals, true);

            if (isNull) {
                if (options.get('nullColor')) {
                    color = highlight ? options.get('nullColor') : this.calcHighlightColor(options.get('nullColor'), options);
                    y = (yoffset > 0) ? yoffset - 1 : yoffset;
                    return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
                } else {
                    return undefined;
                }
            }
            yoffsetNeg = yoffset;
            for (i = 0; i < valcount; i++) {
                val = vals[i];

                if (stacked && val === xaxisOffset) {
                    if (!allMin || minPlotted) {
                        continue;
                    }
                    minPlotted = true;
                }

                if (range > 0) {
                    height = Math.floor(canvasHeightEf * ((Math.abs(val - xaxisOffset) / range))) + 1;
                } else {
                    height = 1;
                }
                if (val < xaxisOffset || (val === xaxisOffset && yoffset === 0)) {
                    y = yoffsetNeg;
                    yoffsetNeg += height;
                } else {
                    y = yoffset - height;
                    yoffset -= height;
                }
                color = this.calcColor(i, val, valuenum);
                if (highlight) {
                    color = this.calcHighlightColor(color, options);
                }
                result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
            }
            if (result.length === 1) {
                return result[0];
            }
            return result;
        }
    });

    /**
     * Tristate charts
     */
    $.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
        type: 'tristate',

        init: function (el, values, options, width, height) {
            var barWidth = parseInt(options.get('barWidth'), 10),
                barSpacing = parseInt(options.get('barSpacing'), 10);
            tristate._super.init.call(this, el, values, options, width, height);

            this.regionShapes = {};
            this.barWidth = barWidth;
            this.barSpacing = barSpacing;
            this.totalBarWidth = barWidth + barSpacing;
            this.values = $.map(values, Number);
            this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);

            if ($.isArray(options.get('colorMap'))) {
                this.colorMapByIndex = options.get('colorMap');
                this.colorMapByValue = null;
            } else {
                this.colorMapByIndex = null;
                this.colorMapByValue = options.get('colorMap');
                if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                    this.colorMapByValue = new RangeMap(this.colorMapByValue);
                }
            }
            this.initTarget();
        },

        getRegion: function (el, x, y) {
            return Math.floor(x / this.totalBarWidth);
        },

        getCurrentRegionFields: function () {
            var currentRegion = this.currentRegion;
            return {
                isNull: this.values[currentRegion] === undefined,
                value: this.values[currentRegion],
                color: this.calcColor(this.values[currentRegion], currentRegion),
                offset: currentRegion
            };
        },

        calcColor: function (value, valuenum) {
            var values = this.values,
                options = this.options,
                colorMapByIndex = this.colorMapByIndex,
                colorMapByValue = this.colorMapByValue,
                color, newColor;

            if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                color = newColor;
            } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                color = colorMapByIndex[valuenum];
            } else if (values[valuenum] < 0) {
                color = options.get('negBarColor');
            } else if (values[valuenum] > 0) {
                color = options.get('posBarColor');
            } else {
                color = options.get('zeroBarColor');
            }
            return color;
        },

        renderRegion: function (valuenum, highlight) {
            var values = this.values,
                options = this.options,
                target = this.target,
                canvasHeight, height, halfHeight,
                x, y, color;

            canvasHeight = target.pixelHeight;
            halfHeight = Math.round(canvasHeight / 2);

            x = valuenum * this.totalBarWidth;
            if (values[valuenum] < 0) {
                y = halfHeight;
                height = halfHeight - 1;
            } else if (values[valuenum] > 0) {
                y = 0;
                height = halfHeight - 1;
            } else {
                y = halfHeight - 1;
                height = 2;
            }
            color = this.calcColor(values[valuenum], valuenum);
            if (color === null) {
                return;
            }
            if (highlight) {
                color = this.calcHighlightColor(color, options);
            }
            return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
        }
    });

    /**
     * Discrete charts
     */
    $.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
        type: 'discrete',

        init: function (el, values, options, width, height) {
            discrete._super.init.call(this, el, values, options, width, height);

            this.regionShapes = {};
            this.values = values = $.map(values, Number);
            this.min = Math.min.apply(Math, values);
            this.max = Math.max.apply(Math, values);
            this.range = this.max - this.min;
            this.width = width = options.get('width') === 'auto' ? values.length * 2 : this.width;
            this.interval = Math.floor(width / values.length);
            this.itemWidth = width / values.length;
            if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.min)) {
                this.min = options.get('chartRangeMin');
            }
            if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.max)) {
                this.max = options.get('chartRangeMax');
            }
            this.initTarget();
            if (this.target) {
                this.lineHeight = options.get('lineHeight') === 'auto' ? Math.round(this.canvasHeight * 0.3) : options.get('lineHeight');
            }
        },

        getRegion: function (el, x, y) {
            return Math.floor(x / this.itemWidth);
        },

        getCurrentRegionFields: function () {
            var currentRegion = this.currentRegion;
            return {
                isNull: this.values[currentRegion] === undefined,
                value: this.values[currentRegion],
                offset: currentRegion
            };
        },

        renderRegion: function (valuenum, highlight) {
            var values = this.values,
                options = this.options,
                min = this.min,
                max = this.max,
                range = this.range,
                interval = this.interval,
                target = this.target,
                canvasHeight = this.canvasHeight,
                lineHeight = this.lineHeight,
                pheight = canvasHeight - lineHeight,
                ytop, val, color, x;

            val = clipval(values[valuenum], min, max);
            x = valuenum * interval;
            ytop = Math.round(pheight - pheight * ((val - min) / range));
            color = (options.get('thresholdColor') && val < options.get('thresholdValue')) ? options.get('thresholdColor') : options.get('lineColor');
            if (highlight) {
                color = this.calcHighlightColor(color, options);
            }
            return target.drawLine(x, ytop, x, ytop + lineHeight, color);
        }
    });

    /**
     * Bullet charts
     */
    $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
        type: 'bullet',

        init: function (el, values, options, width, height) {
            var min, max, vals;
            bullet._super.init.call(this, el, values, options, width, height);

            // values: target, performance, range1, range2, range3
            this.values = values = normalizeValues(values);
            // target or performance could be null
            vals = values.slice();
            vals[0] = vals[0] === null ? vals[2] : vals[0];
            vals[1] = values[1] === null ? vals[2] : vals[1];
            min = Math.min.apply(Math, values);
            max = Math.max.apply(Math, values);
            if (options.get('base') === undefined) {
                min = min < 0 ? min : 0;
            } else {
                min = options.get('base');
            }
            this.min = min;
            this.max = max;
            this.range = max - min;
            this.shapes = {};
            this.valueShapes = {};
            this.regiondata = {};
            this.width = width = options.get('width') === 'auto' ? '4.0em' : width;
            this.target = this.$el.simpledraw(width, height, options.get('composite'));
            if (!values.length) {
                this.disabled = true;
            }
            this.initTarget();
        },

        getRegion: function (el, x, y) {
            var shapeid = this.target.getShapeAt(el, x, y);
            return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
        },

        getCurrentRegionFields: function () {
            var currentRegion = this.currentRegion;
            return {
                fieldkey: currentRegion.substr(0, 1),
                value: this.values[currentRegion.substr(1)],
                region: currentRegion
            };
        },

        changeHighlight: function (highlight) {
            var currentRegion = this.currentRegion,
                shapeid = this.valueShapes[currentRegion],
                shape;
            delete this.shapes[shapeid];
            switch (currentRegion.substr(0, 1)) {
                case 'r':
                    shape = this.renderRange(currentRegion.substr(1), highlight);
                    break;
                case 'p':
                    shape = this.renderPerformance(highlight);
                    break;
                case 't':
                    shape = this.renderTarget(highlight);
                    break;
            }
            this.valueShapes[currentRegion] = shape.id;
            this.shapes[shape.id] = currentRegion;
            this.target.replaceWithShape(shapeid, shape);
        },

        renderRange: function (rn, highlight) {
            var rangeval = this.values[rn],
                rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
                color = this.options.get('rangeColors')[rn - 2];
            if (highlight) {
                color = this.calcHighlightColor(color, this.options);
            }
            return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
        },

        renderPerformance: function (highlight) {
            var perfval = this.values[1],
                perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
                color = this.options.get('performanceColor');
            if (highlight) {
                color = this.calcHighlightColor(color, this.options);
            }
            return this.target.drawRect(0, Math.round(this.canvasHeight * 0.3), perfwidth - 1,
                Math.round(this.canvasHeight * 0.4) - 1, color, color);
        },

        renderTarget: function (highlight) {
            var targetval = this.values[0],
                x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - (this.options.get('targetWidth') / 2)),
                targettop = Math.round(this.canvasHeight * 0.10),
                targetheight = this.canvasHeight - (targettop * 2),
                color = this.options.get('targetColor');
            if (highlight) {
                color = this.calcHighlightColor(color, this.options);
            }
            return this.target.drawRect(x, targettop, this.options.get('targetWidth') - 1, targetheight - 1, color, color);
        },

        render: function () {
            var vlen = this.values.length,
                target = this.target,
                i, shape;
            if (!bullet._super.render.call(this)) {
                return;
            }
            for (i = 2; i < vlen; i++) {
                shape = this.renderRange(i).append();
                this.shapes[shape.id] = 'r' + i;
                this.valueShapes['r' + i] = shape.id;
            }
            if (this.values[1] !== null) {
                shape = this.renderPerformance().append();
                this.shapes[shape.id] = 'p1';
                this.valueShapes.p1 = shape.id;
            }
            if (this.values[0] !== null) {
                shape = this.renderTarget().append();
                this.shapes[shape.id] = 't0';
                this.valueShapes.t0 = shape.id;
            }
            target.render();
        }
    });

    /**
     * Pie charts
     */
    $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
        type: 'pie',

        init: function (el, values, options, width, height) {
            var total = 0, i;

            pie._super.init.call(this, el, values, options, width, height);

            this.shapes = {}; // map shape ids to value offsets
            this.valueShapes = {}; // maps value offsets to shape ids
            this.values = values = $.map(values, Number);

            if (options.get('width') === 'auto') {
                this.width = this.height;
            }

            if (values.length > 0) {
                for (i = values.length; i--;) {
                    total += values[i];
                }
            }
            this.total = total;
            this.initTarget();
            this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
        },

        getRegion: function (el, x, y) {
            var shapeid = this.target.getShapeAt(el, x, y);
            return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
        },

        getCurrentRegionFields: function () {
            var currentRegion = this.currentRegion;
            return {
                isNull: this.values[currentRegion] === undefined,
                value: this.values[currentRegion],
                percent: this.values[currentRegion] / this.total * 100,
                color: this.options.get('sliceColors')[currentRegion % this.options.get('sliceColors').length],
                offset: currentRegion
            };
        },

        changeHighlight: function (highlight) {
            var currentRegion = this.currentRegion,
                 newslice = this.renderSlice(currentRegion, highlight),
                 shapeid = this.valueShapes[currentRegion];
            delete this.shapes[shapeid];
            this.target.replaceWithShape(shapeid, newslice);
            this.valueShapes[currentRegion] = newslice.id;
            this.shapes[newslice.id] = currentRegion;
        },

        renderSlice: function (valuenum, highlight) {
            var target = this.target,
                options = this.options,
                radius = this.radius,
                borderWidth = options.get('borderWidth'),
                offset = options.get('offset'),
                circle = 2 * Math.PI,
                values = this.values,
                total = this.total,
                next = offset ? (2*Math.PI)*(offset/360) : 0,
                start, end, i, vlen, color;

            vlen = values.length;
            for (i = 0; i < vlen; i++) {
                start = next;
                end = next;
                if (total > 0) {  // avoid divide by zero
                    end = next + (circle * (values[i] / total));
                }
                if (valuenum === i) {
                    color = options.get('sliceColors')[i % options.get('sliceColors').length];
                    if (highlight) {
                        color = this.calcHighlightColor(color, options);
                    }

                    return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
                }
                next = end;
            }
        },

        render: function () {
            var target = this.target,
                values = this.values,
                options = this.options,
                radius = this.radius,
                borderWidth = options.get('borderWidth'),
                donutWidth = options.get('donutWidth'),
                shape, i;

            if (!pie._super.render.call(this)) {
                return;
            }
            if (borderWidth) {
                target.drawCircle(radius, radius, Math.floor(radius - (borderWidth / 2)),
                    options.get('borderColor'), undefined, borderWidth).append();
            }
            for (i = values.length; i--;) {
                if (values[i]) { // don't render zero values
                    shape = this.renderSlice(i).append();
                    this.valueShapes[i] = shape.id; // store just the shapeid
                    this.shapes[shape.id] = i;
                }
            }
            if (donutWidth) {
                target.drawCircle(radius, radius, radius - donutWidth, options.get('donutColor'), 
                    options.get('donutColor'), 0).append();
            }
            target.render();
        }
    });

    /**
     * Box plots
     */
    $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
        type: 'box',

        init: function (el, values, options, width, height) {
            box._super.init.call(this, el, values, options, width, height);
            this.values = $.map(values, Number);
            this.width = options.get('width') === 'auto' ? '4.0em' : width;
            this.initTarget();
            if (!this.values.length) {
                this.disabled = 1;
            }
        },

        /**
         * Simulate a single region
         */
        getRegion: function () {
            return 1;
        },

        getCurrentRegionFields: function () {
            var result = [
                { field: 'lq', value: this.quartiles[0] },
                { field: 'med', value: this.quartiles[1] },
                { field: 'uq', value: this.quartiles[2] }
            ];
            if (this.loutlier !== undefined) {
                result.push({ field: 'lo', value: this.loutlier});
            }
            if (this.routlier !== undefined) {
                result.push({ field: 'ro', value: this.routlier});
            }
            if (this.lwhisker !== undefined) {
                result.push({ field: 'lw', value: this.lwhisker});
            }
            if (this.rwhisker !== undefined) {
                result.push({ field: 'rw', value: this.rwhisker});
            }
            return result;
        },

        render: function () {
            var target = this.target,
                values = this.values,
                vlen = values.length,
                options = this.options,
                canvasWidth = this.canvasWidth,
                canvasHeight = this.canvasHeight,
                minValue = options.get('chartRangeMin') === undefined ? Math.min.apply(Math, values) : options.get('chartRangeMin'),
                maxValue = options.get('chartRangeMax') === undefined ? Math.max.apply(Math, values) : options.get('chartRangeMax'),
                canvasLeft = 0,
                lwhisker, loutlier, iqr, q1, q2, q3, rwhisker, routlier, i,
                size, unitSize;

            if (!box._super.render.call(this)) {
                return;
            }

            if (options.get('raw')) {
                if (options.get('showOutliers') && values.length > 5) {
                    loutlier = values[0];
                    lwhisker = values[1];
                    q1 = values[2];
                    q2 = values[3];
                    q3 = values[4];
                    rwhisker = values[5];
                    routlier = values[6];
                } else {
                    lwhisker = values[0];
                    q1 = values[1];
                    q2 = values[2];
                    q3 = values[3];
                    rwhisker = values[4];
                }
            } else {
                values.sort(function (a, b) { return a - b; });
                q1 = quartile(values, 1);
                q2 = quartile(values, 2);
                q3 = quartile(values, 3);
                iqr = q3 - q1;
                if (options.get('showOutliers')) {
                    lwhisker = rwhisker = undefined;
                    for (i = 0; i < vlen; i++) {
                        if (lwhisker === undefined && values[i] > q1 - (iqr * options.get('outlierIQR'))) {
                            lwhisker = values[i];
                        }
                        if (values[i] < q3 + (iqr * options.get('outlierIQR'))) {
                            rwhisker = values[i];
                        }
                    }
                    loutlier = values[0];
                    routlier = values[vlen - 1];
                } else {
                    lwhisker = values[0];
                    rwhisker = values[vlen - 1];
                }
            }
            this.quartiles = [q1, q2, q3];
            this.lwhisker = lwhisker;
            this.rwhisker = rwhisker;
            this.loutlier = loutlier;
            this.routlier = routlier;

            unitSize = canvasWidth / (maxValue - minValue + 1);
            if (options.get('showOutliers')) {
                canvasLeft = Math.ceil(options.get('spotRadius'));
                canvasWidth -= 2 * Math.ceil(options.get('spotRadius'));
                unitSize = canvasWidth / (maxValue - minValue + 1);
                if (loutlier < lwhisker) {
                    target.drawCircle((loutlier - minValue) * unitSize + canvasLeft,
                        canvasHeight / 2,
                        options.get('spotRadius'),
                        options.get('outlierLineColor'),
                        options.get('outlierFillColor')).append();
                }
                if (routlier > rwhisker) {
                    target.drawCircle((routlier - minValue) * unitSize + canvasLeft,
                        canvasHeight / 2,
                        options.get('spotRadius'),
                        options.get('outlierLineColor'),
                        options.get('outlierFillColor')).append();
                }
            }

            // box
            target.drawRect(
                Math.round((q1 - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight * 0.1),
                Math.round((q3 - q1) * unitSize),
                Math.round(canvasHeight * 0.8),
                options.get('boxLineColor'),
                options.get('boxFillColor')).append();
            // left whisker
            target.drawLine(
                Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight / 2),
                Math.round((q1 - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight / 2),
                options.get('lineColor')).append();
            target.drawLine(
                Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight / 4),
                Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight - canvasHeight / 4),
                options.get('whiskerColor')).append();
            // right whisker
            target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight / 2),
                Math.round((q3 - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight / 2),
                options.get('lineColor')).append();
            target.drawLine(
                Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight / 4),
                Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight - canvasHeight / 4),
                options.get('whiskerColor')).append();
            // median line
            target.drawLine(
                Math.round((q2 - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight * 0.1),
                Math.round((q2 - minValue) * unitSize + canvasLeft),
                Math.round(canvasHeight * 0.9),
                options.get('medianColor')).append();
            if (options.get('target')) {
                size = Math.ceil(options.get('spotRadius'));
                target.drawLine(
                    Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                    Math.round((canvasHeight / 2) - size),
                    Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                    Math.round((canvasHeight / 2) + size),
                    options.get('targetColor')).append();
                target.drawLine(
                    Math.round((options.get('target') - minValue) * unitSize + canvasLeft - size),
                    Math.round(canvasHeight / 2),
                    Math.round((options.get('target') - minValue) * unitSize + canvasLeft + size),
                    Math.round(canvasHeight / 2),
                    options.get('targetColor')).append();
            }
            target.render();
        }
    });

    // Setup a very simple "virtual canvas" to make drawing the few shapes we need easier
    // This is accessible as $(foo).simpledraw()

    VShape = createClass({
        init: function (target, id, type, args) {
            this.target = target;
            this.id = id;
            this.type = type;
            this.args = args;
        },
        append: function () {
            this.target.appendShape(this);
            return this;
        }
    });

    VCanvas_base = createClass({
        _pxregex: /(\d+)(px)?\s*$/i,

        init: function (width, height, target) {
            if (!width) {
                return;
            }
            this.width = width;
            this.height = height;
            this.target = target;
            this.lastShapeId = null;
            if (target[0]) {
                target = target[0];
            }
            $.data(target, '_jqs_vcanvas', this);
        },

        drawLine: function (x1, y1, x2, y2, lineColor, lineWidth) {
            return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
        },

        drawShape: function (path, lineColor, fillColor, lineWidth) {
            return this._genShape('Shape', [path, lineColor, fillColor, lineWidth]);
        },

        drawCircle: function (x, y, radius, lineColor, fillColor, lineWidth) {
            return this._genShape('Circle', [x, y, radius, lineColor, fillColor, lineWidth]);
        },

        drawPieSlice: function (x, y, radius, startAngle, endAngle, lineColor, fillColor) {
            return this._genShape('PieSlice', [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
        },

        drawRect: function (x, y, width, height, lineColor, fillColor) {
            return this._genShape('Rect', [x, y, width, height, lineColor, fillColor]);
        },

        getElement: function () {
            return this.canvas;
        },

        /**
         * Return the most recently inserted shape id
         */
        getLastShapeId: function () {
            return this.lastShapeId;
        },

        /**
         * Clear and reset the canvas
         */
        reset: function () {
            alert('reset not implemented');
        },

        _insert: function (el, target) {
            $(target).html(el);
        },

        /**
         * Calculate the pixel dimensions of the canvas
         */
        _calculatePixelDims: function (width, height, canvas) {
            // XXX This should probably be a configurable option
            var match;
            match = this._pxregex.exec(height);
            if (match) {
                this.pixelHeight = match[1];
            } else {
                this.pixelHeight = $(canvas).height();
            }
            match = this._pxregex.exec(width);
            if (match) {
                this.pixelWidth = match[1];
            } else {
                this.pixelWidth = $(canvas).width();
            }
        },

        /**
         * Generate a shape object and id for later rendering
         */
        _genShape: function (shapetype, shapeargs) {
            var id = shapeCount++;
            shapeargs.unshift(id);
            return new VShape(this, id, shapetype, shapeargs);
        },

        /**
         * Add a shape to the end of the render queue
         */
        appendShape: function (shape) {
            alert('appendShape not implemented');
        },

        /**
         * Replace one shape with another
         */
        replaceWithShape: function (shapeid, shape) {
            alert('replaceWithShape not implemented');
        },

        /**
         * Insert one shape after another in the render queue
         */
        insertAfterShape: function (shapeid, shape) {
            alert('insertAfterShape not implemented');
        },

        /**
         * Remove a shape from the queue
         */
        removeShapeId: function (shapeid) {
            alert('removeShapeId not implemented');
        },

        /**
         * Find a shape at the specified x/y co-ordinates
         */
        getShapeAt: function (el, x, y) {
            alert('getShapeAt not implemented');
        },

        /**
         * Render all queued shapes onto the canvas
         */
        render: function () {
            alert('render not implemented');
        }
    });

    VCanvas_canvas = createClass(VCanvas_base, {
        init: function (width, height, target, interact) {
            VCanvas_canvas._super.init.call(this, width, height, target);
            this.canvas = document.createElement('canvas');
            if (target[0]) {
                target = target[0];
            }
            $.data(target, '_jqs_vcanvas', this);
            $(this.canvas).css({ display: 'inline-block', width: width, height: height, verticalAlign: 'top' });
            this._insert(this.canvas, target);
            this._calculatePixelDims(width, height, this.canvas);
            this.canvas.width = this.pixelWidth;
            this.canvas.height = this.pixelHeight;
            this.interact = interact;
            this.shapes = {};
            this.shapeseq = [];
            this.currentTargetShapeId = undefined;
            $(this.canvas).css({width: this.pixelWidth, height: this.pixelHeight});
        },

        _getContext: function (lineColor, fillColor, lineWidth) {
            var context = this.canvas.getContext('2d');
            if (lineColor !== undefined) {
                context.strokeStyle = lineColor;
            }
            context.lineWidth = lineWidth === undefined ? 1 : lineWidth;
            if (fillColor !== undefined) {
                context.fillStyle = fillColor;
            }
            return context;
        },

        reset: function () {
            var context = this._getContext();
            context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
            this.shapes = {};
            this.shapeseq = [];
            this.currentTargetShapeId = undefined;
        },

        _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
            var context = this._getContext(lineColor, fillColor, lineWidth),
                i, plen;
            context.beginPath();
            context.moveTo(path[0][0] + 0.5, path[0][1] + 0.5);
            for (i = 1, plen = path.length; i < plen; i++) {
                context.lineTo(path[i][0] + 0.5, path[i][1] + 0.5); // the 0.5 offset gives us crisp pixel-width lines
            }
            if (lineColor !== undefined) {
                context.stroke();
            }
            if (fillColor !== undefined) {
                context.fill();
            }
            if (this.targetX !== undefined && this.targetY !== undefined &&
                context.isPointInPath(this.targetX, this.targetY)) {
                this.currentTargetShapeId = shapeid;
            }
        },

        _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
            var context = this._getContext(lineColor, fillColor, lineWidth);
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI, false);
            if (this.targetX !== undefined && this.targetY !== undefined &&
                context.isPointInPath(this.targetX, this.targetY)) {
                this.currentTargetShapeId = shapeid;
            }
            if (lineColor !== undefined) {
                context.stroke();
            }
            if (fillColor !== undefined) {
                context.fill();
            }
        },

        _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
            var context = this._getContext(lineColor, fillColor);
            context.beginPath();
            context.moveTo(x, y);
            context.arc(x, y, radius, startAngle, endAngle, false);
            context.lineTo(x, y);
            context.closePath();
            if (lineColor !== undefined) {
                context.stroke();
            }
            if (fillColor) {
                context.fill();
            }
            if (this.targetX !== undefined && this.targetY !== undefined &&
                context.isPointInPath(this.targetX, this.targetY)) {
                this.currentTargetShapeId = shapeid;
            }
        },

        _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
            return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
        },

        appendShape: function (shape) {
            this.shapes[shape.id] = shape;
            this.shapeseq.push(shape.id);
            this.lastShapeId = shape.id;
            return shape.id;
        },

        replaceWithShape: function (shapeid, shape) {
            var shapeseq = this.shapeseq,
                i;
            this.shapes[shape.id] = shape;
            for (i = shapeseq.length; i--;) {
                if (shapeseq[i] == shapeid) {
                    shapeseq[i] = shape.id;
                }
            }
            delete this.shapes[shapeid];
        },

        replaceWithShapes: function (shapeids, shapes) {
            var shapeseq = this.shapeseq,
                shapemap = {},
                sid, i, first;

            for (i = shapeids.length; i--;) {
                shapemap[shapeids[i]] = true;
            }
            for (i = shapeseq.length; i--;) {
                sid = shapeseq[i];
                if (shapemap[sid]) {
                    shapeseq.splice(i, 1);
                    delete this.shapes[sid];
                    first = i;
                }
            }
            for (i = shapes.length; i--;) {
                shapeseq.splice(first, 0, shapes[i].id);
                this.shapes[shapes[i].id] = shapes[i];
            }

        },

        insertAfterShape: function (shapeid, shape) {
            var shapeseq = this.shapeseq,
                i;
            for (i = shapeseq.length; i--;) {
                if (shapeseq[i] === shapeid) {
                    shapeseq.splice(i + 1, 0, shape.id);
                    this.shapes[shape.id] = shape;
                    return;
                }
            }
        },

        removeShapeId: function (shapeid) {
            var shapeseq = this.shapeseq,
                i;
            for (i = shapeseq.length; i--;) {
                if (shapeseq[i] === shapeid) {
                    shapeseq.splice(i, 1);
                    break;
                }
            }
            delete this.shapes[shapeid];
        },

        getShapeAt: function (el, x, y) {
            this.targetX = x;
            this.targetY = y;
            this.render();
            return this.currentTargetShapeId;
        },

        render: function () {
            var shapeseq = this.shapeseq,
                shapes = this.shapes,
                shapeCount = shapeseq.length,
                context = this._getContext(),
                shapeid, shape, i;
            context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
            for (i = 0; i < shapeCount; i++) {
                shapeid = shapeseq[i];
                shape = shapes[shapeid];
                this['_draw' + shape.type].apply(this, shape.args);
            }
            if (!this.interact) {
                // not interactive so no need to keep the shapes array
                this.shapes = {};
                this.shapeseq = [];
            }
        }

    });

    VCanvas_vml = createClass(VCanvas_base, {
        init: function (width, height, target) {
            var groupel;
            VCanvas_vml._super.init.call(this, width, height, target);
            if (target[0]) {
                target = target[0];
            }
            $.data(target, '_jqs_vcanvas', this);
            this.canvas = document.createElement('span');
            $(this.canvas).css({ display: 'inline-block', position: 'relative', overflow: 'hidden', width: width, height: height, margin: '0px', padding: '0px', verticalAlign: 'top'});
            this._insert(this.canvas, target);
            this._calculatePixelDims(width, height, this.canvas);
            this.canvas.width = this.pixelWidth;
            this.canvas.height = this.pixelHeight;
            groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '"' +
                    ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + 'px;height=' + this.pixelHeight + 'px;"></v:group>';
            this.canvas.insertAdjacentHTML('beforeEnd', groupel);
            this.group = $(this.canvas).children()[0];
            this.rendered = false;
            this.prerender = '';
        },

        _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
            var vpath = [],
                initial, stroke, fill, closed, vel, plen, i;
            for (i = 0, plen = path.length; i < plen; i++) {
                vpath[i] = '' + (path[i][0]) + ',' + (path[i][1]);
            }
            initial = vpath.splice(0, 1);
            lineWidth = lineWidth === undefined ? 1 : lineWidth;
            stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
            fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
            closed = vpath[0] === vpath[vpath.length - 1] ? 'x ' : '';
            vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                 ' id="jqsshape' + shapeid + '" ' +
                 stroke +
                 fill +
                ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                ' path="m ' + initial + ' l ' + vpath.join(', ') + ' ' + closed + 'e">' +
                ' </v:shape>';
            return vel;
        },

        _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
            var stroke, fill, vel;
            x -= radius;
            y -= radius;
            stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
            fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
            vel = '<v:oval ' +
                 ' id="jqsshape' + shapeid + '" ' +
                stroke +
                fill +
                ' style="position:absolute;top:' + y + 'px; left:' + x + 'px; width:' + (radius * 2) + 'px; height:' + (radius * 2) + 'px"></v:oval>';
            return vel;

        },

        _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
            var vpath, startx, starty, endx, endy, stroke, fill, vel;
            if (startAngle === endAngle) {
                return '';  // VML seems to have problem when start angle equals end angle.
            }
            if ((endAngle - startAngle) === (2 * Math.PI)) {
                startAngle = 0.0;  // VML seems to have a problem when drawing a full circle that doesn't start 0
                endAngle = (2 * Math.PI);
            }

            startx = x + Math.round(Math.cos(startAngle) * radius);
            starty = y + Math.round(Math.sin(startAngle) * radius);
            endx = x + Math.round(Math.cos(endAngle) * radius);
            endy = y + Math.round(Math.sin(endAngle) * radius);

            if (startx === endx && starty === endy) {
                if ((endAngle - startAngle) < Math.PI) {
                    // Prevent very small slices from being mistaken as a whole pie
                    return '';
                }
                // essentially going to be the entire circle, so ignore startAngle
                startx = endx = x + radius;
                starty = endy = y;
            }

            if (startx === endx && starty === endy && (endAngle - startAngle) < Math.PI) {
                return '';
            }

            vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
            stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
            fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
            vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                 ' id="jqsshape' + shapeid + '" ' +
                 stroke +
                 fill +
                ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                ' path="m ' + x + ',' + y + ' wa ' + vpath.join(', ') + ' x e">' +
                ' </v:shape>';
            return vel;
        },

        _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
            return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
        },

        reset: function () {
            this.group.innerHTML = '';
        },

        appendShape: function (shape) {
            var vel = this['_draw' + shape.type].apply(this, shape.args);
            if (this.rendered) {
                this.group.insertAdjacentHTML('beforeEnd', vel);
            } else {
                this.prerender += vel;
            }
            this.lastShapeId = shape.id;
            return shape.id;
        },

        replaceWithShape: function (shapeid, shape) {
            var existing = $('#jqsshape' + shapeid),
                vel = this['_draw' + shape.type].apply(this, shape.args);
            existing[0].outerHTML = vel;
        },

        replaceWithShapes: function (shapeids, shapes) {
            // replace the first shapeid with all the new shapes then toast the remaining old shapes
            var existing = $('#jqsshape' + shapeids[0]),
                replace = '',
                slen = shapes.length,
                i;
            for (i = 0; i < slen; i++) {
                replace += this['_draw' + shapes[i].type].apply(this, shapes[i].args);
            }
            existing[0].outerHTML = replace;
            for (i = 1; i < shapeids.length; i++) {
                $('#jqsshape' + shapeids[i]).remove();
            }
        },

        insertAfterShape: function (shapeid, shape) {
            var existing = $('#jqsshape' + shapeid),
                 vel = this['_draw' + shape.type].apply(this, shape.args);
            existing[0].insertAdjacentHTML('afterEnd', vel);
        },

        removeShapeId: function (shapeid) {
            var existing = $('#jqsshape' + shapeid);
            this.group.removeChild(existing[0]);
        },

        getShapeAt: function (el, x, y) {
            var shapeid = el.id.substr(8);
            return shapeid;
        },

        render: function () {
            if (!this.rendered) {
                // batch the intial render into a single repaint
                this.group.innerHTML = this.prerender;
                this.rendered = true;
            }
        }
    });

}))}(document, Math));

;!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=t.getBoundingClientRect(),o={};for(var i in e)o[i]=e[i];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=n(r);o.top+=s.top,o.bottom+=s.top,o.left+=s.left,o.right+=s.left}}return o}function r(t){var e=getComputedStyle(t)||{},o=e.position,i=[];if("fixed"===o)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var r=void 0;try{r=getComputedStyle(n)}catch(s){}if("undefined"==typeof r||null===r)return i.push(n),i;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&i.push(n)}return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}function s(){A&&document.body.removeChild(A),A=null}function a(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i=n(t),r=P();return i.top-=r.top,i.left-=r.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function f(t){return t.offsetParent||document.documentElement}function l(){if(M)return M;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");h(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return M={width:n,height:n}}function h(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function d(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=c(t).replace(o," ");g(t,i)}}function p(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{d(t,e);var o=c(t)+(" "+e);g(t,o)}}function u(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=c(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function c(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function g(t,e){t.setAttribute("class",e)}function m(t,e,o){o.forEach(function(o){e.indexOf(o)===-1&&u(t,o)&&d(t,o)}),e.forEach(function(e){u(t,e)||p(t,e)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function y(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function b(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function w(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function C(t,e){return"string"==typeof t.left&&t.left.indexOf("%")!==-1&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&t.top.indexOf("%")!==-1&&(t.top=parseFloat(t.top,10)/100*e.height),t}function O(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=a(e),i=o,n=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}G.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])})}(),e}var E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),x=void 0;"undefined"==typeof x&&(x={modules:[]});var A=null,T=function(){var t=0;return function(){return++t}}(),S={},P=function(){var t=A;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),h(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),A=t);var e=t.getAttribute("data-tether-id");return"undefined"==typeof S[e]&&(S[e]=n(t),k(function(){delete S[e]})),S[e]},M=null,W=[],k=function(t){W.push(t)},_=function(){for(var t=void 0;t=W.pop();)t()},B=function(){function t(){i(this,t)}return E(t,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,i),f?this.bindings[t].splice(e,1):++e}}}}]),t}();x.Utils={getActualBoundingClientRect:n,getScrollParents:r,getBounds:a,getOffsetParent:f,extend:h,addClass:p,removeClass:d,hasClass:u,updateClasses:m,defer:k,flush:_,uniqueId:T,Evented:B,getScrollBarSize:l,removeUtilElements:s};var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),j=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=r,o=s,i=!0,a=l=void 0}};if("undefined"==typeof x)throw new Error("You must include the utils.js file before tether.js");var Y=x.Utils,r=Y.getScrollParents,a=Y.getBounds,f=Y.getOffsetParent,h=Y.extend,p=Y.addClass,d=Y.removeClass,m=Y.updateClasses,k=Y.defer,_=Y.flush,l=Y.getScrollBarSize,s=Y.removeUtilElements,L=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),D=[],X=function(){D.forEach(function(t){t.position(!1)}),_()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&b()-t<10||(null!=o&&(clearTimeout(o),o=null),t=b(),X(),e=b()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var F={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},N={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},U=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=F[e.left]),"auto"===i&&(i=H[e.top]),{left:o,top:i}},V=function(t){var e=t.left,o=t.top;return"undefined"!=typeof N[t.left]&&(e=N[t.left]),"undefined"!=typeof N[t.top]&&(o=N[t.top]),{left:e,top:o}},R=function(t){var e=t.split(" "),o=z(e,2),i=o[0],n=o[1];return{top:i,left:n}},q=R,I=function(t){function e(t){var o=this;i(this,e),j(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),D.push(this),this.history=[],this.setOptions(t,!1),x.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return v(e,t),E(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=h(i,t);var n=this.options,s=n.element,a=n.target,f=n.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),p(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&p(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=q(this.options.targetAttachment),this.attachment=q(this.options.attachment),this.offset=R(this.options.offset),this.targetOffset=R(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return a(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=a(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=a(o);var i=getComputedStyle(o),n=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,r=0;n&&(r=15);var s=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-r,e={width:15,height:.975*s*(s/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;s<408&&this.target===document.body&&(f=-11e-5*Math.pow(s,2)-.00727*s+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-s);return e.top=l*(s-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&p(this.target,this.getClass("enabled")),p(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),D.forEach(function(e,o){e===t&&D.splice(o,1)}),0===D.length&&s()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),k(function(){"undefined"!=typeof o._addAttachClasses&&(m(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&m(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=U(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return a(t.element)}),n=i.width,r=i.height;if(0===n&&0===r&&"undefined"!=typeof this.lastSize){var s=this.lastSize;n=s.width,r=s.height}else this.lastSize={width:n,height:r};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,p=C(V(this.attachment),{width:n,height:r}),u=C(V(o),d),c=C(this.offset,{width:n,height:r}),g=C(this.targetOffset,d);p=w(p,c),u=w(u,g);for(var m=h.left+u.left-p.left,v=h.top+u.top-p.top,y=0;y<x.modules.length;++y){var b=x.modules[y],O=b.position.call(this,{left:m,top:v,targetAttachment:o,targetPos:h,elementPos:i,offset:p,targetOffset:u,manualOffset:c,manualTargetOffset:g,scrollbarSize:S,attachment:this.attachment});if(O===!1)return!1;"undefined"!=typeof O&&"object"==typeof O&&(v=O.top,m=O.left)}var E={page:{top:v,left:m},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-r+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,S=void 0;return T.innerHeight>A.documentElement.clientHeight&&(S=this.cache("scrollbar-size",l),E.viewport.bottom-=S.height),T.innerWidth>A.documentElement.clientWidth&&(S=this.cache("scrollbar-size",l),E.viewport.right-=S.width),["","static"].indexOf(A.body.style.position)!==-1&&["","static"].indexOf(A.body.parentElement.style.position)!==-1||(E.page.bottom=A.body.scrollHeight-v-r,E.page.right=A.body.scrollWidth-m-n),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return f(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return a(e)}),i=getComputedStyle(e),n=o,r={};if(["Top","Left","Bottom","Right"].forEach(function(t){r[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-n.width+r.right,o.bottom=A.body.scrollHeight-o.top-n.height+r.bottom,E.page.top>=o.top+r.top&&E.page.bottom>=o.bottom&&E.page.left>=o.left+r.left&&E.page.right>=o.right){var s=e.scrollTop,l=e.scrollLeft;E.offset={top:E.page.top-o.top+s-r.top,left:E.page.left-o.left+l-r.left}}}(),this.move(E),this.history.unshift(E),this.history.length>3&&this.history.pop(),e&&_(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if("undefined"!=typeof a[i]&&!y(a[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;if(t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),window.matchMedia){var a=window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;a||(s=Math.round(s),r=Math.round(r))}l[L]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==L&&(l[L]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},p=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var i=e.cache("target-offsetparent",function(){return f(e.target)});f(e.element)!==i&&k(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),p=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!p)if(this.options.bodyElement)this.options.bodyElement.appendChild(this.element);else{for(var u=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){u=!1;break}c=c.parentNode}u||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},m=!1;for(var n in l){var v=l[n],b=this.element.style[n];b!==v&&(m=!0,g[n]=v)}m&&k(function(){h(e.element.style,g),e.trigger("repositioned")})}}}]),e}(B);I.modules=[],x.position=X;var $=h(I,x),z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=x.Utils,a=Y.getBounds,h=Y.extend,m=Y.updateClasses,k=Y.defer,G=["left","top","right","bottom"];x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",function(){return a(e.element)}),s=r.height,f=r.width;if(0===f&&0===s&&"undefined"!=typeof this.lastSize){var l=this.lastSize;f=l.width,s=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),p=d.height,u=d.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)}),c.forEach(function(t){["left","top","right","bottom"].forEach(function(e){c.push(t+"-"+e)})});var g=[],v=h({},n),y=h({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,a=t.attachment,l=t.pin;"undefined"==typeof a&&(a="");var h=void 0,d=void 0;if(a.indexOf(" ")>=0){var c=a.split(" "),m=z(c,2);d=m[0],h=m[1]}else h=d=a;var b=O(e,r);"target"!==d&&"both"!==d||(o<b[1]&&"top"===v.top&&(o+=p,v.top="bottom"),o+s>b[3]&&"bottom"===v.top&&(o-=p,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<b[1]?(o+=p,v.top="bottom",o+=s,y.top="top"):"top"===y.top&&o+s>b[3]&&o-(s-p)>=b[1]&&(o-=s-p,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+s>b[3]?(o-=p,v.top="top",o-=s,y.top="bottom"):"bottom"===y.top&&o<b[1]&&o+(2*s-p)<=b[3]&&(o+=s-p,v.top="top",y.top="top")),"middle"===v.top&&(o+s>b[3]&&"top"===y.top?(o-=s,y.top="bottom"):o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"))),"target"!==h&&"both"!==h||(i<b[0]&&"left"===v.left&&(i+=u,v.left="right"),i+f>b[2]&&"right"===v.left&&(i-=u,v.left="left")),"together"===h&&(i<b[0]&&"left"===v.left?"right"===y.left?(i+=u,v.left="right",i+=f,y.left="left"):"left"===y.left&&(i+=u,v.left="right",i-=f,y.left="right"):i+f>b[2]&&"right"===v.left?"left"===y.left?(i-=u,v.left="left",i-=f,y.left="right"):"right"===y.left&&(i-=u,v.left="left",i+=f,y.left="left"):"center"===v.left&&(i+f>b[2]&&"left"===y.left?(i-=f,y.left="right"):i<b[0]&&"right"===y.left&&(i+=f,y.left="left"))),"element"!==d&&"both"!==d||(o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"),o+s>b[3]&&"top"===y.top&&(o-=s,y.top="bottom")),"element"!==h&&"both"!==h||(i<b[0]&&("right"===y.left?(i+=f,y.left="left"):"center"===y.left&&(i+=f/2,y.left="left")),i+f>b[2]&&("left"===y.left?(i-=f,y.left="right"):"center"===y.left&&(i-=f/2,y.left="right"))),"string"==typeof l?l=l.split(",").map(function(t){return t.trim()}):l===!0&&(l=["top","left","right","bottom"]),l=l||[];var w=[],C=[];o<b[1]&&(l.indexOf("top")>=0?(o=b[1],w.push("top")):C.push("top")),o+s>b[3]&&(l.indexOf("bottom")>=0?(o=b[3]-s,w.push("bottom")):C.push("bottom")),i<b[0]&&(l.indexOf("left")>=0?(i=b[0],w.push("left")):C.push("left")),i+f>b[2]&&(l.indexOf("right")>=0?(i=b[2]-f,w.push("right")):C.push("right")),w.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),g.push(t),w.forEach(function(e){g.push(t+"-"+e)})}(),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),g.push(t),C.forEach(function(e){g.push(t+"-"+e)})}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(y.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===n.top&&v.left===n.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,g,c),m(e.element,g,c)}),{top:o,left:i}}});var Y=x.Utils,a=Y.getBounds,m=Y.updateClasses,k=Y.defer;x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return a(e.element)}),r=n.height,s=n.width,f=this.getTargetBounds(),l=o+r,h=i+s,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==i&&e!==h||d.push(t)}),i<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==o&&e!==l||d.push(t)});var p=[],u=[],c=["left","top","right","bottom"];return p.push(this.getClass("abutted")),c.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),d.length&&u.push(this.getClass("abutted")),d.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,u,p),m(e.element,u,p)}),!0}});var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return x.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=z(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),$});
;/*!
  * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(e){var n=this,i=!1;return t(this).one(s.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||s.triggerTransitionEnd(n)},e),this}var i=!1,s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(e){return e="function"==typeof t.escapeSelector?t.escapeSelector(e).substr(1):e.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n));try{return t(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(i.end)},supportsTransitionEnd:function(){return Boolean(i)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,n,i){for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){var o=i[r],a=n[r],l=a&&s.isElement(a)?"element":e(a);if(!new RegExp(o).test(l))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+o+'".')}}};return i=!window.QUnit&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,s.supportsTransitionEnd()&&(t.event.special[s.TRANSITION_END]={bindType:i.end,delegateType:i.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),s}(e),a=function(t){var e="alert",n="bs.alert",i="."+n,r=t.fn[e],a={CLOSE:"close"+i,CLOSED:"closed"+i,CLICK_DATA_API:"click"+i+".data-api"},l="alert",h="fade",c="show",u=function(){function e(t){this._element=t}var i=e.prototype;return i.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},i.dispose=function(){t.removeData(this._element,n),this._element=null},i._getRootElement=function(e){var n=o.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+l)[0]),i},i._triggerCloseEvent=function(e){var n=t.Event(a.CLOSE);return t(e).trigger(n),n},i._removeElement=function(e){var n=this;t(e).removeClass(c),o.supportsTransitionEnd()&&t(e).hasClass(h)?t(e).one(o.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},i._destroyElement=function(e){t(e).detach().trigger(a.CLOSED).remove()},e._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(n);r||(r=new e(this),s.data(n,r)),"close"===i&&r[i](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}}]),e}();return t(document).on(a.CLICK_DATA_API,'[data-dismiss="alert"]',u._handleDismiss(new u)),t.fn[e]=u._jQueryInterface,t.fn[e].Constructor=u,t.fn[e].noConflict=function(){return t.fn[e]=r,u._jQueryInterface},u}(e),l=function(t){var e="button",n="bs.button",i="."+n,r=".data-api",o=t.fn[e],a="active",l="btn",h="focus",c='[data-toggle^="button"]',u='[data-toggle="buttons"]',f="input",d=".active",_=".btn",g={CLICK_DATA_API:"click"+i+r,FOCUS_BLUR_DATA_API:"focus"+i+r+" blur"+i+r},m=function(){function e(t){this._element=t}var i=e.prototype;return i.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(u)[0];if(i){var s=t(this._element).find(f)[0];if(s){if("radio"===s.type)if(s.checked&&t(this._element).hasClass(a))e=!1;else{var r=t(i).find(d)[0];r&&t(r).removeClass(a)}if(e){if(s.hasAttribute("disabled")||i.hasAttribute("disabled")||s.classList.contains("disabled")||i.classList.contains("disabled"))return;s.checked=!t(this._element).hasClass(a),t(s).trigger("change")}s.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!t(this._element).hasClass(a)),e&&t(this._element).toggleClass(a)},i.dispose=function(){t.removeData(this._element,n),this._element=null},e._jQueryInterface=function(i){return this.each(function(){var s=t(this).data(n);s||(s=new e(this),t(this).data(n,s)),"toggle"===i&&s[i]()})},s(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}}]),e}();return t(document).on(g.CLICK_DATA_API,c,function(e){e.preventDefault();var n=e.target;t(n).hasClass(l)||(n=t(n).closest(_)),m._jQueryInterface.call(t(n),"toggle")}).on(g.FOCUS_BLUR_DATA_API,c,function(e){var n=t(e.target).closest(_)[0];t(n).toggleClass(h,/^focus(in)?$/.test(e.type))}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),h=function(t){var e="carousel",n="bs.carousel",i="."+n,a=t.fn[e],l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},h={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c="next",u="prev",f="left",d="right",_={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},g="carousel",m="active",p="slide",v="carousel-item-right",E="carousel-item-left",T="carousel-item-next",y="carousel-item-prev",C={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},I=function(){function a(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(C.INDICATORS)[0],this._addEventListeners()}var I=a.prototype;return I.next=function(){this._isSliding||this._slide(c)},I.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},I.prev=function(){this._isSliding||this._slide(u)},I.pause=function(e){e||(this._isPaused=!0),t(this._element).find(C.NEXT_PREV)[0]&&o.supportsTransitionEnd()&&(o.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},I.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},I.to=function(e){var n=this;this._activeElement=t(this._element).find(C.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(_.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?c:u;this._slide(s,this._items[e])}},I.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},I._getConfig=function(t){return t=r({},l,t),o.typeCheckConfig(e,t,h),t},I._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(_.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(_.MOUSEENTER,function(t){return e.pause(t)}).on(_.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(_.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},I._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},I._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(C.ITEM)),this._items.indexOf(e)},I._getItemByDirection=function(t,e){var n=t===c,i=t===u,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===u?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},I._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(C.ACTIVE_ITEM)[0]),r=t.Event(_.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},I._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(C.ACTIVE).removeClass(m);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(m)}},I._slide=function(e,n){var i,s,r,a=this,l=t(this._element).find(C.ACTIVE_ITEM)[0],h=this._getItemIndex(l),u=n||l&&this._getItemByDirection(e,l),g=this._getItemIndex(u),I=Boolean(this._interval);if(e===c?(i=E,s=T,r=f):(i=v,s=y,r=d),u&&t(u).hasClass(m))this._isSliding=!1;else{if(!this._triggerSlideEvent(u,r).isDefaultPrevented()&&l&&u){this._isSliding=!0,I&&this.pause(),this._setActiveIndicatorElement(u);var A=t.Event(_.SLID,{relatedTarget:u,direction:r,from:h,to:g});o.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(u).addClass(s),o.reflow(u),t(l).addClass(i),t(u).addClass(i),t(l).one(o.TRANSITION_END,function(){t(u).removeClass(i+" "+s).addClass(m),t(l).removeClass(m+" "+s+" "+i),a._isSliding=!1,setTimeout(function(){return t(a._element).trigger(A)},0)}).emulateTransitionEnd(600)):(t(l).removeClass(m),t(u).addClass(m),this._isSliding=!1,t(this._element).trigger(A)),I&&this.cycle()}}},a._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},l,t(this).data());"object"==typeof e&&(s=r({},s,e));var o="string"==typeof e?e:s.slide;if(i||(i=new a(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof o){if("undefined"==typeof i[o])throw new Error('No method named "'+o+'"');i[o]()}else s.interval&&(i.pause(),i.cycle())})},a._dataApiClickHandler=function(e){var i=o.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(g)){var l=r({},t(s).data(),t(this).data()),h=this.getAttribute("data-slide-to");h&&(l.interval=!1),a._jQueryInterface.call(t(s),l),h&&t(s).data(n).to(h),e.preventDefault()}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),a}();return t(document).on(_.CLICK_DATA_API,C.DATA_SLIDE,I._dataApiClickHandler),t(window).on(_.LOAD_DATA_API,function(){t(C.DATA_RIDE).each(function(){var e=t(this);I._jQueryInterface.call(e,e.data())})}),t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),c=function(t){var e="collapse",n="bs.collapse",i="."+n,a=t.fn[e],l={toggle:!0,parent:""},h={toggle:"boolean",parent:"(string|element)"},c={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},u="show",f="collapse",d="collapsing",_="collapsed",g="width",m="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},v=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],a=o.getSelectorFromElement(r);null!==a&&t(a).filter(e).length>0&&this._triggerArray.push(r)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var a=i.prototype;return a.toggle=function(){t(this._element).hasClass(u)?this.hide():this.show()},a.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(u)){var s,r;if(this._parent&&((s=t.makeArray(t(this._parent).children().children(p.ACTIVES))).length||(s=null)),!(s&&(r=t(s).data(n))&&r._isTransitioning)){var a=t.Event(c.SHOW);if(t(this._element).trigger(a),!a.isDefaultPrevented()){s&&(i._jQueryInterface.call(t(s),"hide"),r||t(s).data(n,null));var l=this._getDimension();t(this._element).removeClass(f).addClass(d),this._element.style[l]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(_).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(d).addClass(f).addClass(u),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(c.SHOWN)};if(o.supportsTransitionEnd()){var g="scroll"+(l[0].toUpperCase()+l.slice(1));t(this._element).one(o.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[l]=this._element[g]+"px"}else h()}}}},a.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(u)){var n=t.Event(c.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",o.reflow(this._element),t(this._element).addClass(d).removeClass(f).removeClass(u),this._triggerArray.length)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],a=o.getSelectorFromElement(r);if(null!==a){t(a).hasClass(u)||t(r).addClass(_).attr("aria-expanded",!1)}}this.setTransitioning(!0);var l=function(){e.setTransitioning(!1),t(e._element).removeClass(d).addClass(f).trigger(c.HIDDEN)};this._element.style[i]="",o.supportsTransitionEnd()?t(this._element).one(o.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.setTransitioning=function(t){this._isTransitioning=t},a.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a._getConfig=function(t){return t=r({},l,t),t.toggle=Boolean(t.toggle),o.typeCheckConfig(e,t,h),t},a._getDimension=function(){return t(this._element).hasClass(g)?g:m},a._getParent=function(){var e=this,n=null;o.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},a._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(u);n.length&&t(n).toggleClass(_,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=o.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),a=r({},l,s.data(),"object"==typeof e&&e);if(!o&&a.toggle&&/show|hide/.test(e)&&(a.toggle=!1),o||(o=new i(this,a),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new Error('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),i}();return t(document).on(c.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=o.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();v._jQueryInterface.call(e,s)})}),t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=a,v._jQueryInterface},v}(e),u=function(t){var e="dropdown",i="bs.dropdown",a="."+i,l=".data-api",h=t.fn[e],c=new RegExp("38|40|27"),u={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click"+a+l,KEYDOWN_DATA_API:"keydown"+a+l,KEYUP_DATA_API:"keyup"+a+l},f="disabled",d="show",_="dropup",g="dropright",m="dropleft",p="dropdown-menu-right",v="dropdown-menu-left",E="position-static",T='[data-toggle="dropdown"]',y=".dropdown form",C=".dropdown-menu",I=".navbar-nav",A=".dropdown-menu .dropdown-item:not(.disabled)",b="top-start",D="top-end",S="bottom-start",w="bottom-end",N="right-start",O="left-start",k={offset:0,flip:!0,boundary:"scrollParent"},P={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var h=l.prototype;return h.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(f)){var e=l._getParentFromElement(this._element),i=t(this._menu).hasClass(d);if(l._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(u.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(_)&&(t(this._menu).hasClass(v)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(E),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&!t(e).closest(I).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(d),t(e).toggleClass(d).trigger(t.Event(u.SHOWN,s))}}}},h.dispose=function(){t.removeData(this._element,i),t(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},h.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},h._addEventListeners=function(){var e=this;t(this._element).on(u.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},h._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),o.typeCheckConfig(e,n,this.constructor.DefaultType),n},h._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=t(e).find(C)[0]}return this._menu},h._getPlacement=function(){var e=t(this._element).parent(),n=S;return e.hasClass(_)?(n=b,t(this._menu).hasClass(p)&&(n=D)):e.hasClass(g)?n=N:e.hasClass(m)?n=O:t(this._menu).hasClass(p)&&(n=w),n},h._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},h._getPopperConfig=function(){var t=this,e={};"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset;return{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new l(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new Error('No method named "'+e+'"');n[e]()}})},l._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(T)),s=0;s<n.length;s++){var r=l._getParentFromElement(n[s]),o=t(n[s]).data(i),a={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(d)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var c=t.Event(u.HIDE,a);t(r).trigger(c),c.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(d),t(r).removeClass(d).trigger(t.Event(u.HIDDEN,a)))}}}},l._getParentFromElement=function(e){var n,i=o.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},l._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(C).length)):c.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(f))){var n=l._getParentFromElement(this),i=t(n).hasClass(d);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(A).get();if(s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(T)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return k}},{key:"DefaultType",get:function(){return P}}]),l}();return t(document).on(u.KEYDOWN_DATA_API,T,L._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,C,L._dataApiKeydownHandler).on(u.CLICK_DATA_API+" "+u.KEYUP_DATA_API,L._clearMenus).on(u.CLICK_DATA_API,T,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(u.CLICK_DATA_API,y,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=h,L._jQueryInterface},L}(e),f=function(t){var e="modal",n="bs.modal",i="."+n,a=t.fn.modal,l={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},u="modal-scrollbar-measure",f="modal-backdrop",d="modal-open",_="fade",g="show",m={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function a(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(m.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=a.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){o.supportsTransitionEnd()&&t(this._element).hasClass(_)&&(this._isTransitioning=!0);var i=t.Event(c.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(d),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(c.CLICK_DISMISS,m.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){t(n._element).one(c.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(c.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=o.supportsTransitionEnd()&&t(this._element).hasClass(_);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(c.FOCUSIN),t(this._element).removeClass(g),t(this._element).off(c.CLICK_DISMISS),t(this._dialog).off(c.MOUSEDOWN_DISMISS),s?t(this._element).one(o.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},l,t),o.typeCheckConfig(e,t,h),t},p._showElement=function(e){var n=this,i=o.supportsTransitionEnd()&&t(this._element).hasClass(_);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&o.reflow(this._element),t(this._element).addClass(g),this._config.focus&&this._enforceFocus();var s=t.Event(c.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(o.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(c.FOCUSIN).on(c.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(c.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(c.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(c.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(c.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(d),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(c.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(_)?_:"";if(this._isShown&&this._config.backdrop){var s=o.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=f,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(c.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&o.reflow(this._backdrop),t(this._backdrop).addClass(g),!e)return;if(!s)return void e();t(this._backdrop).one(o.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(g);var r=function(){n._removeBackdrop(),e&&e()};o.supportsTransitionEnd()&&t(this._element).hasClass(_)?t(this._backdrop).one(o.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(m.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(m.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(m.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(m.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(m.STICKY_CONTENT+", "+m.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},a._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),o=r({},a.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new a(this,o),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new Error('No method named "'+e+'"');s[e](i)}else o.show&&s.show(i)})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),a}();return t(document).on(c.CLICK_DATA_API,m.DATA_TOGGLE,function(e){var i,s=this,a=o.getSelectorFromElement(this);a&&(i=t(a)[0]);var l=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var h=t(i).one(c.SHOW,function(e){e.isDefaultPrevented()||h.one(c.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),l,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=a,p._jQueryInterface},p}(e),d=function(t){var e="tooltip",i="bs.tooltip",a="."+i,l=t.fn[e],h=new RegExp("(^|\\s)bs-tooltip\\S+","g"),c={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},u={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},d="show",_="out",g={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,INSERTED:"inserted"+a,CLICK:"click"+a,FOCUSIN:"focusin"+a,FOCUSOUT:"focusout"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a},m="fade",p="show",v=".tooltip-inner",E=".arrow",T="hover",y="focus",C="click",I="manual",A=function(){function l(t,e){if("undefined"==typeof n)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var A=l.prototype;return A.enable=function(){this._isEnabled=!0},A.disable=function(){this._isEnabled=!1},A.toggleEnabled=function(){this._isEnabled=!this._isEnabled},A.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},A.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},A.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=o.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&t(r).addClass(m);var h="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(h);this.addAttachmentClass(c);var u=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(u),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:E},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var f=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===_&&e._leave(null,e)};o.supportsTransitionEnd()&&t(this.tip).hasClass(m)?t(this.tip).one(o.TRANSITION_END,f).emulateTransitionEnd(l._TRANSITION_DURATION):f()}},A.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==d&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[C]=!1,this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,o.supportsTransitionEnd()&&t(this.tip).hasClass(m)?t(i).one(o.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},A.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},A.isWithContent=function(){return Boolean(this.getTitle())},A.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},A.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},A.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(v),this.getTitle()),e.removeClass(m+" "+p)},A.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},A.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},A._getAttachment=function(t){return u[t.toUpperCase()]},A._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==I){var i=n===T?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===T?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},A._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},A._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?y:T]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===d?n._hoverState=d:(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d&&n.show()},n.config.delay.show):n.show())},A._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?y:T]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=_,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===_&&n.hide()},n.config.delay.hide):n.hide())},A._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},A._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),o.typeCheckConfig(e,n,this.constructor.DefaultType),n},A._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},A._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(h);null!==n&&n.length>0&&e.removeClass(n.join(""))},A._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},A._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(m),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new l(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new Error('No method named "'+e+'"');n[e]()}})},s(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return a}},{key:"DefaultType",get:function(){return c}}]),l}();return t.fn[e]=A._jQueryInterface,t.fn[e].Constructor=A,t.fn[e].noConflict=function(){return t.fn[e]=l,A._jQueryInterface},A}(e),_=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},d.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},d.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",_=".popover-body",g={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},m=function(r){function o(){return r.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(o,r);var d=o.prototype;return d.isWithContent=function(){return this.getTitle()||this._getContent()},d.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},d.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},d.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(_),n),e.removeClass(c+" "+u)},d._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},d._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new o(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new Error('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),o}(d);return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),g=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,a=t.fn[e],l={offset:10,method:"auto",target:""},h={offset:"number",method:"string",target:"(string|element)"},c={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},u="dropdown-item",f="active",d={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},_="offset",g="position",m=function(){function a(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+d.NAV_LINKS+","+this._config.target+" "+d.LIST_ITEMS+","+this._config.target+" "+d.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(c.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var m=a.prototype;return m.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?g:_,i="auto"===this._config.method?n:this._config.method,s=i===g?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();t.makeArray(t(this._selector)).map(function(e){var n,r=o.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},m.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},m._getConfig=function(n){if("string"!=typeof(n=r({},l,n)).target){var i=t(n.target).attr("id");i||(i=o.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return o.typeCheckConfig(e,n,h),n},m._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},m._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},m._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},m._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},m._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(u)?(i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(f),i.addClass(f)):(i.addClass(f),i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS+", "+d.LIST_ITEMS).addClass(f),i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(f)),t(this._scrollElement).trigger(c.ACTIVATE,{relatedTarget:e})},m._clear=function(){t(this._selector).filter(d.ACTIVE).removeClass(f)},a._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new a(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new Error('No method named "'+e+'"');i[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),a}();return t(window).on(c.LOAD_DATA_API,function(){for(var e=t.makeArray(t(d.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);m._jQueryInterface.call(i,i.data())}}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=a,m._jQueryInterface},m}(e),m=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},a="dropdown-menu",l="active",h="disabled",c="fade",u="show",f=".dropdown",d=".nav, .list-group",_=".active",g="> li > .active",m='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",v="> .dropdown-menu .active",E=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(l)||t(this._element).hasClass(h))){var n,i,s=t(this._element).closest(d)[0],a=o.getSelectorFromElement(this._element);if(s){var c="UL"===s.nodeName?g:_;i=(i=t.makeArray(t(s).find(c)))[i.length-1]}var u=t.Event(r.HIDE,{relatedTarget:this._element}),f=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(u),t(this._element).trigger(f),!f.isDefaultPrevented()&&!u.isDefaultPrevented()){a&&(n=t(a)[0]),this._activate(this._element,s);var m=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,m):m()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(g):t(n).children(_))[0],a=i&&o.supportsTransitionEnd()&&r&&t(r).hasClass(c),l=function(){return s._transitionComplete(e,r,i)};r&&a?t(r).one(o.TRANSITION_END,l).emulateTransitionEnd(150):l()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(u+" "+l);var s=t(n.parentNode).find(v)[0];s&&t(s).removeClass(l),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(l),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),o.reflow(e),t(e).addClass(u),e.parentNode&&t(e.parentNode).hasClass(a)){var r=t(e).closest(f)[0];r&&t(r).find(p).addClass(l),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new Error('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}}]),n}();return t(document).on(r.CLICK_DATA_API,m,function(e){e.preventDefault(),E._jQueryInterface.call(t(this),"show")}),t.fn.tab=E._jQueryInterface,t.fn.tab.Constructor=E,t.fn.tab.noConflict=function(){return t.fn.tab=i,E._jQueryInterface},E}(e);!function(t){if("undefined"==typeof t)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=o,t.Alert=a,t.Button=l,t.Carousel=h,t.Collapse=c,t.Dropdown=u,t.Modal=f,t.Popover=_,t.Scrollspy=g,t.Tab=m,t.Tooltip=d,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7.1
 *
 */

$(document).ready(function () {


    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    // MetisMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Close menu in canvas mode
    $('.close-canvas-menu').on('click', function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    // Run menu of canvas
    $('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Initialize slimscroll for right sidebar
    $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Open close small chat
    $('.open-small-chat').on('click', function () {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });

    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

    // Small todo handler
    $('.check-link').on('click', function () {
        var button = $(this).find('i');
        var label = $(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });

    // Append config box / Only for demo purpose
    // Uncomment on server mode to enable XHR calls
    //$.get("skin-config.html", function (data) {
    //    if (!$('body').hasClass('no-skin-config'))
    //        $('body').append(data);
    //});

    // Minimalize menu
    $('.navbar-minimalize').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });

    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });


    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarheight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarheight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarheight + "px");
        }

        if (navbarheight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarheight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarheight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    $("[data-toggle=popover]")
        .popover();

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })
});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

// Local Storage functions
// Set proper body class and plugins based on user configuration
$(document).ready(function () {
    if (localStorageSupport()) {

        var collapse = localStorage.getItem("collapse_menu");
        var fixedsidebar = localStorage.getItem("fixedsidebar");
        var fixednavbar = localStorage.getItem("fixednavbar");
        var boxedlayout = localStorage.getItem("boxedlayout");
        var fixedfooter = localStorage.getItem("fixedfooter");

        var body = $('body');

        if (fixedsidebar == 'on') {
            body.addClass('fixed-sidebar');
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }

        if (collapse == 'on') {
            if (body.hasClass('fixed-sidebar')) {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }
            } else {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }

            }
        }

        if (fixednavbar == 'on') {
            $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
            body.addClass('fixed-nav');
        }

        if (boxedlayout == 'on') {
            body.addClass('boxed-layout');
        }

        if (fixedfooter == 'on') {
            $(".footer").addClass('fixed');
        }
    }
});

// check if browser support HTML5 local storage
function localStorageSupport() {
    return (('localStorage' in window) && window['localStorage'] !== null)
}

// For demo purpose - animation css script
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}



;/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function(e){e.fn.extend({slimScroll:function(g){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function v(d){if(r){d=d||window.event;
    var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,e,g){k=!1;var f=d,h=b.outerHeight()-c.outerHeight();e&&(f=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),f=Math.min(Math.max(f,0),h),f=0<d?Math.ceil(f):Math.floor(f),c.css({top:f+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
    f=l*(b[0].scrollHeight-b.outerHeight());g&&(f=d,d=f/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(f);b.trigger("slimscrolling",~~f);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
    !0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.closest("."+a.barClass),h=b.closest("."+a.railClass);x();if(e.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",
    q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else if(!(e.isPlainObject(g)&&"destroy"in g)){a.height="auto"==a.height?b.parent().height():a.height;n=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=e("<div></div>").addClass(a.railClass).css({width:a.size,
    height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?
{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});
    h.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(m((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),
        m(0,!0)):"top"!==a.start&&(m(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
;/*!
 * elFinder - file manager for web
 * Version 2.1.33 (2018-03-14)
 * http://elfinder.org
 * 
 * Copyright 2009-2018, Studio 42
 * Licensed under a 3-clauses BSD license
 */
!function(e,t){if("function"==typeof define&&define.amd)define(["jquery","jquery-ui"],t);else if("undefined"!=typeof exports){var n,i;try{n=require("jquery"),i=require("jquery-ui")}catch(a){}module.exports=t(n,i)}else t(e.jQuery,e.jQuery.ui,!0)}(this,function(e,t,n){n=n||!1;var i=function(t,n,a){var o,r,s,l,c,d,p=this,u=[],h=["button"],f=e(t),m=e.extend(!0,{},e._data(f.get(0),"events")),g=e("<div/>").append(f.contents()).attr("class",f.attr("class")||"").attr("style",f.attr("style")||""),v=f.attr("id")||"",b="elfinder-"+(v?v:Math.random().toString().substr(2,7)),y="mousedown."+b,w="keydown."+b,x="keypress."+b,k=!1,C=!1,T=["enable","disable","load","open","reload","select","add","remove","change","dblclick","getfile","lockfiles","unlockfiles","selectfiles","unselectfiles","dragstart","dragstop","search","searchend","viewchange"],z="",I={path:"",url:"",tmbUrl:"",disabled:[],separator:"/",archives:[],extract:[],copyOverwrite:!0,uploadOverwrite:!0,uploadMaxSize:0,jpgQuality:100,tmbCrop:!1,tmb:!1},S={},A={},O={},j=[],D={},M={},U=[],E={},F=[],P=[],R=new p.command(p),H="auto",q=400,_=null,N="./sounds/",L=e(document.createElement("audio")).hide().appendTo("body")[0],W=0,B="",$=null,V=function(t){var n,i,a,o,r,s,l={},c={};p.api>=2.1?(p.commandMap=t.options.uiCmdMap&&Object.keys(t.options.uiCmdMap).length?t.options.uiCmdMap:{},B!==JSON.stringify(p.commandMap)&&(B=JSON.stringify(p.commandMap))):p.options.sync=0,t.init?(A={},O={}):(s=z,n="elfinder-subtree-loaded "+p.res("class","navexpand"),r=p.res("class","navcollapse"),i=Object.keys(A),a=function(t){if(!A[t])return!0;var i="directory"===A[t].mime,a=A[t].phash;!(!i||l[a]||!c[a]&&e("#"+p.navHash2Id(A[t].hash)).is(":hidden")&&e("#"+p.navHash2Id(a)).next(".elfinder-navbar-subtree").children().length>100)||!i&&a===z||E[t]?i&&(c[a]=!0):(i&&!l[a]&&(l[a]=!0,e("#"+p.navHash2Id(a)).removeClass(n).next(".elfinder-navbar-subtree").empty()),J(A[t]))},o=function(){i.length&&($&&$._abort(),$=p.asyncJob(a,i,{interval:20,numPerOnce:100}))},p.trigger("filesgc").one("filesgc",function(){i=[]}),p.one("opendone",function(){s!==z&&(f.data("lazycnt")?p.one("lazydone",o):o())})),p.sorters=[],z=t.cwd.hash,X(t.files),A[z]||X([t.cwd]),p.lastDir(z),p.autoSync()},X=function(t,n){var i,a,o,r={name:!0,perm:!0,date:!0,size:!0,kind:!0},s=0===p.sorters.length,l=t.length,c=function(t){var n=t||{};p.sorters=[],e.each(p.sortRules,function(e){(r[e]||"undefined"!=typeof n[e]||"mode"===e&&"undefined"!=typeof n.perm)&&p.sorters.push(e)})},d=["sizeInfo"],u={};for(a=0;a<l;a++)i=Object.assign({},t[a]),i.name&&i.hash&&i.mime&&(s&&i.phash===z&&(c(i),s=!1),!i.phash||"add"!==n&&"change"!==n||(o=p.parents(i.phash))&&e.each(o,function(){u[this]=!0}),A[i.hash]&&(e.each(d,function(){A[i.hash][this]&&!i[this]&&(i[this]=A[i.hash][this])}),i.sizeInfo&&!i.size&&(i.size=i.sizeInfo.size),J(A[i.hash],!0)),A[i.hash]=i,"directory"!==i.mime||O[i.hash]||(O[i.hash]={}),i.phash&&(O[i.phash]||(O[i.phash]={}),O[i.phash][i.hash]=!0));e.each(Object.keys(u),function(){var e=A[this];e&&e.sizeInfo&&delete e.sizeInfo}),s&&c()},K=function(t){var n,i=t.length,a={},o=function(t){var i=A[t];i&&("directory"===i.mime&&(a[t]&&delete p.roots[a[t]],e.each(p.leafRoots,function(n,i){var a,o;(a=e.inArray(t,i))!==-1&&(1===i.length?((o=Object.assign({},A[n]))&&o._realStats&&(e.each(o._realStats,function(e,t){o[e]=t}),K(A[n]._realStats),p.change({changed:[o]})),delete p.leafRoots[n]):p.leafRoots[n].splice(a,1))}),p.searchStatus.state<2&&e.each(A,function(e,n){n.phash==t&&o(e)})),i.phash&&(n=p.parents(i.phash))&&e.each(n,function(){r[this]=!0}),J(A[t]))},r={};for(e.each(p.roots,function(e,t){a[t]=e});i--;)o(t[i]);e.each(Object.keys(r),function(){var e=A[this];e&&e.sizeInfo&&delete e.sizeInfo})},G=function(t){e.each(t,function(t,n){var i=n.hash;A[i]&&e.each(Object.keys(A[i]),function(e,t){"undefined"==typeof n[t]&&delete A[i][t]}),A[i]=A[i]?Object.assign(A[i],n):n})},J=function(e,t){var n=e.hash,i=e.phash;i&&O[i]&&delete O[i][n],t||(O[n]&&delete O[n],p.optionsByHashes[n]&&delete p.optionsByHashes[n]),delete A[n]},Y=0,Q=[],Z=!1,ee=function(t){var n,i=t.keyCode,a=!(!t.ctrlKey&&!t.metaKey);k&&(e.each(M,function(e,n){n.type==t.type&&n.keyCode==i&&n.shiftKey==t.shiftKey&&n.ctrlKey==a&&n.altKey==t.altKey&&(t.preventDefault(),t.stopPropagation(),n.callback(t,p),p.debug("shortcut-exec",e+" : "+n.description))}),i!=e.ui.keyCode.TAB||e(t.target).is(":input")||t.preventDefault(),"keydown"===t.type&&i==e.ui.keyCode.ESCAPE&&(f.find(".ui-widget:visible").length||p.clipboard().length&&p.clipboard([]),e.ui.ddmanager&&(n=e.ui.ddmanager.current,n&&n.helper&&n.cancel()),f.find(".ui-widget.elfinder-button-menu").hide(),p.trigger("keydownEsc",t)))},te=new Date,ne=window.parent!==window,ie=function(){var t,n;if(ne)try{n=e("iframe",window.parent.document),n.length&&e.each(n,function(n,i){if(i.contentWindow===window)return t=e(i),!1})}catch(i){}return t}();n||(n={}),p.UA.Mobile&&e(window).on("orientationchange."+b,function(){var e=(screen&&screen.orientation&&screen.orientation.angle||window.orientation||0)+0;e===-90&&(e=270),p.UA.Angle=e,p.UA.Rotated=e%180!==0}).trigger("orientationchange."+b),n.bootCallback&&"function"==typeof n.bootCallback&&!function(){var e=a,t=n.bootCallback;a=function(n,i){e&&"function"==typeof e&&e.call(this,n,i),t.call(this,n,i)}}(),delete n.bootCallback,this.api=null,this.newAPI=!1,this.oldAPI=!1,this.netDrivers=[],this.baseUrl="",this.cssloaded=!1,this.bootCallback,this.options=Object.assign({},this._options),n.uiOptions&&n.uiOptions.toolbar&&Array.isArray(n.uiOptions.toolbar)&&e.isPlainObject(n.uiOptions.toolbar[n.uiOptions.toolbar.length-1])&&(p.options.uiOptions.toolbarExtra=Object.assign(p.options.uiOptions.toolbarExtra||{},n.uiOptions.toolbar.pop())),function(){var t=function(n,i){e.isPlainObject(n)&&e.each(n,function(n,a){e.isPlainObject(a)?(i[n]||(i[n]={}),t(a,i[n])):i[n]=a})};t(n,p.options)}(),this.options.uiOptions.toolbar.push(this.options.uiOptions.toolbarExtra),delete this.options.uiOptions.toolbarExtra,this.baseUrl=function(){var t,n,i,a;return p.options.baseUrl?p.options.baseUrl:(a="",t=e('head > script[src$="js/elfinder.min.js"],script[src$="js/elfinder.full.js"]:first'),t.length&&(n=e('head > link[href$="css/elfinder.min.css"],link[href$="css/elfinder.full.css"]:first').length,n||(p.cssloaded=null),a=t.attr("src").replace(/js\/[^\/]+$/,""),a.match(/^(https?\/\/|\/)/)||(i=e("head > base[href]").attr("href"))&&(a=i.replace(/\/$/,"")+"/"+a)),""!==a?p.options.baseUrl=a:(p.options.baseUrl||(p.options.baseUrl="./"),a=p.options.baseUrl),a)}(),I.dispInlineRegex=this.options.dispInlineRegex,this.options.cssAutoLoad&&!function(){var t=p.baseUrl;null===p.cssloaded&&(f.data("cssautoloadHide",e("<style>.elfinder{visibility:hidden;overflow:hidden}</style>")),e("head").append(f.data("cssautoloadHide")),p.loadCss([t+"css/elfinder.min.css",t+"css/theme.css"]),Array.isArray(p.options.cssAutoLoad)&&p.loadCss(p.options.cssAutoLoad)),p.options.cssAutoLoad=!1}(),this.optionProperties={icon:void 0,csscls:void 0,tmbUrl:void 0,uiCmdMap:{},netkey:void 0,disabled:[]},ne||this.options.enableAlways||2!==e("body").children().length||(this.options.enableAlways=!0),""===this.baseUrl&&(this.baseUrl=this.options.baseUrl?this.options.baseUrl:""),this.options.debug===!0?this.options.debug="all":Array.isArray(this.options.debug)?!function(){var t={};e.each(p.options.debug,function(){t[this]=!0}),p.options.debug=t}():this.options.debug=!1,this.noConflicts={},this.noConflict=function(){e.each(h,function(t,n){e.fn[n]&&"function"==typeof e.fn[n].noConflict&&(p.noConflicts[n]=e.fn[n].noConflict())})},this.noConflict(),this.isCORS=!1,function(){if("undefined"!=typeof p.options.cors&&null!==p.options.cors)p.isCORS=!!p.options.cors;else{var t,i=document.createElement("a"),a=window.location.protocol,o=function(e){return e=e&&":"!==e?e:a,"https:"===e?/\:443$/:/\:80$/},r=window.location.host.replace(o(a),"");i.href=n.url,n.urlUpload&&n.urlUpload!==n.url&&(t=document.createElement("a"),t.href=n.urlUpload),(r!==i.host.replace(o(i.protocol),"")||":"!==i.protocol&&""!==i.protocol&&a!==i.protocol||t&&(r!==t.host.replace(o(t.protocol),"")||":"!==t.protocol&&""!==t.protocol&&a!==t.protocol))&&(p.isCORS=!0)}p.isCORS&&(e.isPlainObject(p.options.customHeaders)||(p.options.customHeaders={}),e.isPlainObject(p.options.xhrFields)||(p.options.xhrFields={}),p.options.requestType="post",p.options.customHeaders["X-Requested-With"]="XMLHttpRequest",p.options.xhrFields.withCredentials=!0)}(),this.requestType=/^(get|post)$/i.test(this.options.requestType)?this.options.requestType.toLowerCase():"get",r=Math.max(parseInt(this.options.requestMaxConn),1),this.optsCustomData=e.isPlainObject(this.options.customData)?this.options.customData:{},this.customData=Object.assign({},this.optsCustomData),this.prevCustomData=null,this.customHeaders=e.isPlainObject(this.options.customHeaders)?this.options.customHeaders:{},this.xhrFields=e.isPlainObject(this.options.xhrFields)?this.options.xhrFields:{},this.replaceXhrSend=function(){d||(d=XMLHttpRequest.prototype.send),XMLHttpRequest.prototype.send=function(){var t=this;return p.customHeaders&&e.each(p.customHeaders,function(e){t.setRequestHeader(e,this)}),p.xhrFields&&e.each(p.xhrFields,function(e){e in t&&(t[e]=this)}),d.apply(this,arguments)}},this.restoreXhrSend=function(){d&&(XMLHttpRequest.prototype.send=d)},this.abortCmdsOnOpen=this.options.abortCmdsOnOpen||["tmb","parents"],this.id=v,this.navPrefix="nav"+(i.prototype.uniqueid?i.prototype.uniqueid:"")+"-",this.cwdPrefix=i.prototype.uniqueid?"cwd"+i.prototype.uniqueid+"-":"",++i.prototype.uniqueid,this.uploadURL=n.urlUpload||n.url,this.namespace=b,this.today=new Date(te.getFullYear(),te.getMonth(),te.getDate()).getTime()/1e3,this.yesterday=this.today-86400,s=this.options.UTCDate?"UTC":"",this.getHours="get"+s+"Hours",this.getMinutes="get"+s+"Minutes",this.getSeconds="get"+s+"Seconds",this.getDate="get"+s+"Date",this.getDay="get"+s+"Day",this.getMonth="get"+s+"Month",this.getFullYear="get"+s+"FullYear",this.zIndex,this.searchStatus={state:0,query:"",target:"",mime:"",mixed:!1,ininc:!1},this.storage=function(){try{return"localStorage"in window&&null!==window.localStorage?(p.UA.Safari&&(window.localStorage.setItem("elfstoragecheck",1),window.localStorage.removeItem("elfstoragecheck")),p.localStorage):p.cookie}catch(e){return p.cookie}}(),this.lang=this.storage("lang")||this.options.lang,"jp"===this.lang&&(this.lang=this.options.lang="ja"),this.viewType=this.storage("view")||this.options.defaultView||"icons",this.sortType=this.storage("sortType")||this.options.sortType||"name",this.sortOrder=this.storage("sortOrder")||this.options.sortOrder||"asc",this.sortStickFolders=this.storage("sortStickFolders"),null===this.sortStickFolders?this.sortStickFolders=!!this.options.sortStickFolders:this.sortStickFolders=!!this.sortStickFolders,this.sortAlsoTreeview=this.storage("sortAlsoTreeview"),null===this.sortAlsoTreeview?this.sortAlsoTreeview=!!this.options.sortAlsoTreeview:this.sortAlsoTreeview=!!this.sortAlsoTreeview,this.sortRules=e.extend(!0,{},this._sortRules,this.options.sortRules),e.each(this.sortRules,function(e,t){"function"!=typeof t&&delete p.sortRules[e]}),this.compare=e.proxy(this.compare,this),this.notifyDelay=this.options.notifyDelay>0?parseInt(this.options.notifyDelay):500,this.draggingUiHelper=null,this.droppable={greedy:!0,tolerance:"pointer",accept:".elfinder-cwd-file-wrapper,.elfinder-navbar-dir,.elfinder-cwd-file,.elfinder-cwd-filename",hoverClass:this.res("class","adroppable"),classes:{"ui-droppable-hover":this.res("class","adroppable")},autoDisable:!0,drop:function(t,n){var i,a,o,r=e(this),s=e.grep(n.helper.data("files")||[],function(e){return!!e}),l=[],c=[],d=[],u=n.helper.hasClass("elfinder-drag-helper-plus"),h="class";if("undefined"==typeof t.button||n.helper.data("namespace")!==b||!p.insideWorkzone(t.pageX,t.pageY))return!1;for(a=r.hasClass(p.res(h,"cwdfile"))?p.cwdId2Hash(r.attr("id")):r.hasClass(p.res(h,"navdir"))?p.navId2Hash(r.attr("id")):z,i=s.length;i--;)o=s[i],o!=a&&A[o].phash!=a?l.push(o):(u&&o!==a&&A[a].write?c:d).push(o);return!d.length&&(n.helper.data("droped",!0),c.length&&(n.helper.hide(),p.exec("duplicate",c,{_userAction:!0})),void(l.length&&(n.helper.hide(),p.clipboard(l,!u),p.exec("paste",a,{_userAction:!0},a).always(function(){p.clipboard([]),p.trigger("unlockfiles",{files:s})}),p.trigger("drop",{files:s}))))}},this.enabled=function(){return k&&this.visible()},this.visible=function(){return f[0].elfinder&&f.is(":visible")},this.isRoot=function(e){return!(!e.isroot&&e.phash)},this.root=function(t,n){t=t||z;var i,a;if(!n&&(e.each(p.roots,function(e,n){if(0===t.indexOf(e))return i=n,!1}),i))return i;for(i=A[t];i&&i.phash&&(n||!i.isroot);)i=A[i.phash];if(i)return i.hash;for(;a in A&&A.hasOwnProperty(a);)if(i=A[a],"directory"===i.mime&&!i.phash&&i.read)return i.hash;return""},this.cwd=function(){return A[z]||{}},this.option=function(t,n){var i,a;return n=n||z,p.optionsByHashes[n]&&"undefined"!=typeof p.optionsByHashes[n][t]?p.optionsByHashes[n][t]:!p.hasVolOptions||z===n||(a=p.file(n))&&a.phash===z?S[t]||"":(i="",e.each(p.volOptions,function(e,a){if(0===n.indexOf(e))return i=a[t]||"",!1}),i)},this.getDisabledCmds=function(t,n){var i={hidden:!0};return Array.isArray(t)||(t=[t]),e.each(t,function(e,t){var n=p.option("disabledFlip",t);n&&Object.assign(i,n)}),n?i:Object.keys(i)},this.file=function(e){return e?A[e]:void 0},this.files=function(t){var n={};return t?O[t]?(e.each(O[t],function(e){A[e]?n[e]=A[e]:delete O[t][e]}),Object.assign({},n)):{}:Object.assign({},A)},this.parents=function(e){for(var t,n=[];e&&(t=this.file(e));)n.unshift(t.hash),e=t.phash;return n},this.path2array=function(e,t){for(var n,i=[];e;){if(!(n=A[e])||!n.hash){i=[];break}i.unshift(t&&n.i18?n.i18:n.name),e=n.isroot?null:n.phash}return i},this.path=function(t,n,i){var a=A[t]&&A[t].path?A[t].path:this.path2array(t,n).join(S.separator);if(i&&A[t]){i=Object.assign({notify:{type:"parents",cnt:1,hideCnt:!0}},i);var o,r=e.Deferred(),s=i.notify,l=!1,c=function(){p.request({data:{cmd:"parents",target:A[t].phash},notify:s,preventFail:!0}).done(d).fail(function(){r.reject()})},d=function(){p.one("parentsdone",function(){a=p.path(t,n),""===a&&l?(l=!1,c()):(s&&(clearTimeout(o),s.cnt=-parseInt(s.cnt||0),p.notify(s)),r.resolve(a))})};return a?r.resolve(a):(p.ui.tree?(s&&(o=setTimeout(function(){p.notify(s)},p.notifyDelay)),l=!0,d(!0)):c(),r)}return a},this.url=function(t,n){var i,a=A[t],o=n||{},r=o.async||!1,s=o.temporary||!1,l=r?e.Deferred():null,c=function(n){if(n)return n;if(a.url)return a.url;if(i=p.option("url",a.phash||a.hash))return i+e.map(p.path2array(t),function(e){return encodeURIComponent(e)}).slice(1).join("/");var o=Object.assign({},p.customData,{cmd:"file",target:a.hash});return p.oldAPI&&(o.cmd="open",o.current=a.phash),p.options.url+(p.options.url.indexOf("?")===-1?"?":"&")+e.param(o,!0)};if(!a||!a.read)return r?l.resolve(""):"";if("1"==a.url)this.request({data:{cmd:"url",target:t,options:{temporary:s?1:0}},preventDefault:!0,options:{async:r},notify:r?{type:s?"file":"url",cnt:1,hideCnt:!0}:{}}).done(function(e){a.url=e.url||""}).fail(function(){a.url=""}).always(function(){var e;return a.url&&s&&(e=a.url,a.url="1"),r?void l.resolve(c(e)):c(e)});else{if(!r)return c();l.resolve(c())}return r?l:void 0},this.openUrl=function(t,n){var i=A[t],a="";return i&&i.read?!n&&(i.url?1!=i.url&&(a=i.url):S.url&&0===i.hash.indexOf(p.cwd().volumeid)&&(a=S.url+e.map(this.path2array(t),function(e){return encodeURIComponent(e)}).slice(1).join("/")),a)?a+=(a.match(/\?/)?"&":"?")+"_".repeat((a.match(/[\?&](_+)t=/g)||["&t="]).sort().shift().match(/[\?&](_*)t=/)[1].length+1)+"t="+(i.ts||parseInt(+new Date/1e3)):(a=this.options.url,a=a+(a.indexOf("?")===-1?"?":"&")+(this.oldAPI?"cmd=open&current="+i.phash:"cmd=file")+"&target="+i.hash+"&_t="+(i.ts||parseInt(+new Date/1e3)),n&&(a+="&download=1"),e.each(this.customData,function(e,t){a+="&"+encodeURIComponent(e)+"="+encodeURIComponent(t)}),a):""},this.tmb=function(t){var n,i,a="elfinder-cwd-bgurl",o="";return!(!e.isPlainObject(t)||(p.searchStatus.state&&0!==t.hash.indexOf(p.cwd().volumeid)?(n=p.option("tmbUrl",t.hash),i=p.option("tmbCrop",t.hash)):(n=S.tmbUrl,i=S.tmbCrop),i&&(a+=" elfinder-cwd-bgurl-crop"),"self"===n&&0===t.mime.indexOf("image/")?(o=p.openUrl(t.hash),a+=" elfinder-cwd-bgself"):(p.oldAPI||n)&&t&&t.tmb&&1!=t.tmb?o=n+t.tmb:p.newAPI&&t&&t.tmb&&1!=t.tmb&&(o=t.tmb),!o))&&(t.ts&&(o+=(o.match(/\?/)?"&":"?")+"_t="+t.ts),{url:o,className:a})},this.selected=function(){return j.slice(0)},this.selectedFiles=function(){return e.map(j,function(e){return A[e]?Object.assign({},A[e]):null})},this.fileByName=function(e,t){var n;for(n in A)if(A.hasOwnProperty(n)&&A[n].phash==t&&A[n].name==e)return A[n]},this.validResponse=function(e,t){return t.error||this.rules[this.rules[e]?e:"defaults"](t)},this.returnBytes=function(e){var t;return isNaN(e)?(e||(e=""),e=e.replace(/b$/i,""),t=e.charAt(e.length-1).toLowerCase(),e=e.replace(/[tgmk]$/i,""),"t"==t?e=1024*e*1024*1024*1024:"g"==t?e=1024*e*1024*1024:"m"==t?e=1024*e*1024:"k"==t&&(e=1024*e),e=isNaN(e)?0:parseInt(e)):(e=parseInt(e),e<1&&(e=0)),e},this.request=function(t){var n,i,a,o=this,s=this.options,l=e.Deferred(),c=(+new Date).toString(16)+Math.floor(1e3*Math.random()).toString(16),d=Object.assign({},o.customData,{mimes:s.onlyMimes},t.data||t),p=d.cmd,u="binary"===(t.options||{}).dataType,h=!t.asNotOpen&&"open"===p,f=!(u||t.preventDefault||t.preventFail),m=!(u||t.preventDefault||t.preventDone),g=Object.assign({},t.notify),v=!!t.cancel,b=u||!!t.raw,y=t.syncOnFail,w=!!t.lazy,x=t.prepare,k=t.navigate,C=(t.options||{}).cache,T=Object.assign({url:s.url,async:!0,type:this.requestType,dataType:"json",cache:o.api>=2.1029,data:d,headers:this.customHeaders,xhrFields:this.xhrFields},t.options||{}),A=function(e){e.warning&&o.error(e.warning),h?V(e):o.updateCache(e),e.changed&&e.changed.length&&G(e.changed),o.lazy(function(){e.removed&&e.removed.length&&o.remove(e),e.added&&e.added.length&&o.add(e),e.changed&&e.changed.length&&o.change(e)}).then(function(){return o.lazy(function(){o.trigger(p,e,!1)})}).then(function(){return o.lazy(function(){o.trigger(p+"done")})}).then(function(){e.sync&&o.sync()})},O=function(e,t){var n,i,a=o.options.debug;switch(t){case"abort":n=e.quiet?"":["errConnect","errAbort"];break;case"timeout":n=["errConnect","errTimeout"];break;case"parsererror":n=["errResponse","errDataNotJSON"],e.responseText&&(!z||a&&("all"===a||a["backend-error"]))&&n.push(e.responseText);break;default:if(e.responseText)try{i=JSON.parse(e.responseText),i&&i.error&&(n=i.error)}catch(r){}if(!n)if(403==e.status)n=["errConnect","errAccess","HTTP error "+e.status];else if(404==e.status)n=["errConnect","errNotFound","HTTP error "+e.status];else if(e.status>=500)n=["errResponse","errServerError","HTTP error "+e.status];else{if(414==e.status&&"get"===T.type)return T.type="post",o.abortXHR(e),void(l.xhr=e=o.transport.send(T).fail(n).done(j));n=e.quiet?"":["errConnect","HTTP error "+e.status]}}o.trigger(p+"done"),l.reject(n,e,t)},j=function(t){var n=o.options.debug;if(o.currentReqCmd=p,!t.debug||n&&"all"===n||(n||(n=o.options.debug={}),n["backend-error"]=!0,n.warning=!0),b)return o.abortXHR(i),t&&t.debug&&o.debug("backend-debug",t),l.resolve(t);if(!t)return l.reject(["errResponse","errDataEmpty"],i,t);if(!e.isPlainObject(t))return l.reject(["errResponse","errDataNotJSON"],i,t);if(t.error)return h&&e.each(o.leafRoots,function(t,n){o.leafRoots[t]=e.grep(n,function(e){return e!==d.target})}),l.reject(t.error,i,t);var a=function(){var n,a=function(n){o.leafRoots[d.target]&&t[n]&&e.each(o.leafRoots[d.target],function(e,i){var a;(a=o.file(i))&&t[n].push(a)})},r=function(){o.textMimes={},e.each(o.resources.mimes.text,function(){o.textMimes[this]=!0})};return h?a("files"):"tree"===p&&a("tree"),t=o.normalize(t),o.validResponse(p,t)?(o.api||(o.api=t.api||1,"2.0"==o.api&&"undefined"!=typeof t.options.uploadMaxSize&&(o.api="2.1"),o.newAPI=o.api>=2,o.oldAPI=!o.newAPI),t.textMimes&&Array.isArray(t.textMimes)&&(o.resources.mimes.text=t.textMimes,r()),!o.textMimes&&r(),t.options&&(S=Object.assign({},I,t.options)),t.netDrivers&&(o.netDrivers=t.netDrivers),t.maxTargets&&(o.maxTargets=t.maxTargets),h&&d.init&&(o.uplMaxSize=o.returnBytes(t.uplMaxSize),o.uplMaxFile=t.uplMaxFile?parseInt(t.uplMaxFile):20),"function"==typeof x&&x(t),k&&(n=k.target||"added",t[n]&&t[n].length&&o.one(p+"done",function(){var i=t[n],a=o.findCwdNodes(i),r=function(){var t=o.cwd().hash;return e.map(i,function(e){return e.phash&&t===e.phash?e.hash:null})},s=r(),l=function(t){var n,i,a,l=void 0,c=t.action?t.action.data:void 0;return(c||s.length)&&t.action&&(i=t.action.msg)&&(n=t.action.cmd)&&(!t.action.cwdNot||t.action.cwdNot!==o.cwd().hash)&&(a=t.action.done,c=t.action.data,l=e("<div/>").append(e('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all elfinder-tabstop"><span class="ui-button-text">'+o.i18n(i)+"</span></button>").on("mouseenter mouseleave",function(t){e(this).toggleClass("ui-state-hover","mouseenter"==t.type)}).on("click",function(){o.exec(n,c||s,{_userAction:!0,_currentType:"toast",_currentNode:e(this)}),a&&o.one(n+"done",function(){"function"==typeof a?a():"select"===a&&o.trigger("selectfiles",{files:r()})})}))),delete t.action,t.extNode=l,t};k.toast||(k.toast={}),!k.noselect&&o.trigger("selectfiles",{files:o.searchStatus.state>1?e.map(i,function(e){return e.hash}):s}),a.length?(k.noscroll||(a.first().trigger("scrolltoview",{blink:!1}),o.resources.blink(a,"lookme")),e.isPlainObject(k.toast.incwd)&&o.toast(l(k.toast.incwd))):e.isPlainObject(k.toast.inbuffer)&&o.toast(l(k.toast.inbuffer))})),l.resolve(t),void(t.debug&&o.debug("backend-debug",t))):l.reject(t.norError||"errResponse",i,t)};o.abortXHR(i),w?o.lazy(a):a()},D=function(e){i&&"pending"===i.state()&&(o.abortXHR(i,{quiet:!0,abort:!0}),(!e||"unload"!==e.type&&"destroy"!==e.type)&&o.autoSync())},M=function(e){if(o.trigger(p+"done"),"autosync"==e.type){if("stop"!=e.data.action)return}else if(!("unload"==e.type||"destroy"==e.type||"openxhrabort"==e.type||e.data.added&&e.data.added.length))return;D(e)},U=function(t){var n=function(){y=!1,l.reject()};if(t&&"cmd"===t)return p;if(h){if(Z)return l.reject();Z=!0}if(Y++,l.always(function(){delete T.headers["X-elFinderReqid"]}).fail(function(t,n,i){0===t&&Q.length&&(Q=e.grep(Q,function(e){return e("cmd")!==p})),D(),o.trigger(p+"fail",i),t&&(f?o.error(t):o.debug("error",o.i18n(t))),y&&o.sync()}),!p)return y=!1,l.reject("errCmdReq");if(o.maxTargets&&d.targets&&d.targets.length>o.maxTargets)return y=!1,l.reject(["errMaxTargets",o.maxTargets]);if(m&&l.done(A),h){for(;a=F.pop();)a.queueAbort();if(z!==d.target)for(;a=P.pop();)a.queueAbort()}return e.inArray(p,(o.cmdsToAdd+" autosync").split(" "))!==-1&&("autosync"!==p&&(o.autoSync("stop"),l.always(function(){o.autoSync()})),o.trigger("openxhrabort")),delete T.preventFail,o.api>=2.1029&&(C?T.headers["X-elFinderReqid"]=c:Object.assign(T.data,{reqid:c})),l.syncOnFail=function(e){y=!!e},l.xhr=i=o.transport.send(T).always(function(){--Y,Q.length?Q.shift()():Z=!1}).fail(O).done(j),o.api>=2.1029&&(i._requestId=c),h||d.compare&&"info"===p?(i.queueAbort=n,F.unshift(i),d.compare&&o.bind(o.cmdsToAdd+" autosync openxhrabort",M),l.always(function(){var t=e.inArray(i,F);d.compare&&o.unbind(o.cmdsToAdd+" autosync openxhrabort",M),t!==-1&&F.splice(t,1)})):e.inArray(p,o.abortCmdsOnOpen)!==-1&&(i.queueAbort=n,P.unshift(i),l.always(function(){var t=e.inArray(i,P);t!==-1&&P.splice(t,1)})),o.bind("unload destroy",M),l.always(function(){o.unbind("unload destroy",M)}),l},E=function(){return g.type&&g.cnt&&(v&&(g.cancel=l,t.eachCancel&&(g.id=+new Date)),n=setTimeout(function(){o.notify(g),l.always(function(){g.cnt=-(parseInt(g.cnt)||0),o.notify(g)})},o.notifyDelay),l.always(function(){clearTimeout(n)})),h&&(Z=!1),Y<r?U():(h?Q.unshift(U):Q.push(U),l)},R={opts:t,result:!0};return o.api||d.init?(o.trigger("request."+p,R,!0),R.result?"object"==typeof R.result&&R.result.promise?(R.result.done(E).fail(function(){o.trigger(p+"done"),l.reject()}),l):E():(o.trigger(p+"done"),l.reject())):(y=!1,l.reject())},this.cache=function(e){Array.isArray(e)||(e=[e]),X(e)},this.updateCache=function(t){e.isPlainObject(t)&&(t.files&&t.files.length&&X(t.files,"files"),t.tree&&t.tree.length&&X(t.tree,"tree"),t.removed&&t.removed.length&&K(t.removed),t.added&&t.added.length&&X(t.added,"add"),t.changed&&t.changed.length&&G(t.changed,"change"))},this.diff=function(t,n,i){var a={},o=[],r=[],s=[],l=null,c=function(e){for(var t=s.length;t--;)if(s[t].hash==e)return!0};return e.each(t,function(e,t){a[t.hash]=t}),i&&i.length&&(l={},e.each(i,function(){l[this]=!0})),e.each(A,function(e,t){a[e]||n&&t.phash!==n||r.push(e)}),e.each(a,function(t,n){var i,a=A[t],r={};a?(e.each(Object.keys(a),function(){r[this]=!0}),e.each(n,function(e){if(delete r[e],!(l&&l[e]||n[e]===a[e]))return s.push(n),r={},!1}),i=Object.keys(r).length,0!==i&&(l&&e.each(r,function(e){l[e]&&--i}),0!==i&&s.push(n))):o.push(n)}),e.each(r,function(t,n){var i=A[n],o=i.phash;o&&"directory"==i.mime&&e.inArray(o,r)===-1&&a[o]&&!c(o)&&s.push(a[o])}),{added:o,removed:r,changed:s}},this.sync=function(t,n){this.autoSync("stop");var i=this,a=function(){var i="",a=0,o=0;return t&&n&&e.each(A,function(e,n){n.phash&&n.phash===t&&(++a,o=Math.max(o,n.ts)),i=a+":"+o}),i},o=a(),r=e.Deferred().done(function(){i.trigger("sync")}),s=[this.request({data:{cmd:"open",reload:1,target:z,tree:!t&&this.ui.tree?1:0,compare:o},preventDefault:!0})],l=function(){for(var e,t=[],n=i.file(i.root(z)),a=n?n.volumeid:null,o=i.cwd().phash;o;)(e=i.file(o))?(0!==o.indexOf(a)&&(t.push({target:o,cmd:"tree"}),i.isRoot(e)||t.push({target:o,cmd:"parents"}),n=i.file(i.root(o)),a=n?n.volumeid:null),o=e.phash):o=null;return t};return!t&&i.api>=2&&(z!==this.root()&&s.push(this.request({data:{cmd:"parents",target:z},preventDefault:!0})),e.each(l(),function(e,t){s.push(i.request({data:{cmd:t.cmd,target:t.target},preventDefault:!0}))})),e.when.apply(e,s).fail(function(t,a){n&&e.inArray("errOpen",t)===-1?r.reject(t&&0!=a.status?t:void 0):(r.reject(t),t&&i.request({data:{cmd:"open",target:i.lastDir("")||i.root(),tree:1,init:1},notify:{type:"open",cnt:1,hideCnt:!0}}))}).done(function(e){var n,a,s;if(e.cwd.compare&&o===e.cwd.compare)return r.reject();if(n={tree:[]},a=arguments.length,a>1)for(s=1;s<a;s++)arguments[s].tree&&arguments[s].tree.length&&n.tree.push.apply(n.tree,arguments[s].tree);if(i.api<2.1&&(n.tree||(n.tree=[]),n.tree.push(e.cwd)),e=i.normalize(e),!i.validResponse("open",e))return r.reject(e.norError||"errResponse");if(n=i.normalize(n),!i.validResponse("tree",n))return r.reject(n.norError||"errResponse");var l=i.diff(e.files.concat(n&&n.tree?n.tree:[]),t);return l.added.push(e.cwd),i.updateCache(l),l.removed.length&&i.remove(l),l.added.length&&i.add(l),l.changed.length&&i.change(l),r.resolve(l)}).always(function(){i.autoSync()}),r},this.upload=function(e){return this.transport.upload(e,this)},this.toUnbindEvents={},this.bind=function(e,t){var n,i;if("function"==typeof t)for(e=(""+e).toLowerCase().replace(/^\s+|\s+$/g,"").split(/\s+/),i=e.length,n=0;n<i;n++)void 0===D[e[n]]&&(D[e[n]]=[]),D[e[n]].push(t);return this},this.unbind=function(t,n){var i,a,o,r;for(t=(""+t).toLowerCase().split(/\s+/),a=t.length,i=0;i<a;i++)(o=D[t[i]])&&(r=e.inArray(n,o),r>-1&&o.splice(r,1));return n=null,this},this.trigger=function(t,n,i){var a,o,r,s,l=t.toLowerCase(),c="object"==typeof n,d=D[l]||[];if(this.debug("event-"+l,n),c&&"undefined"!=typeof i||(i=!0),o=d.length){for(s=e.Event(l),i&&(s.data=n),a=0;a<o;a++)if(d[a]){if(d[a].length&&!i){if("undefined"==typeof r)try{r=JSON.stringify(n)}catch(u){r=!1}s.data=r?JSON.parse(r):n}try{if(d[a].call(s,s,this)===!1||s.isDefaultPrevented()){this.debug("event-stoped",s.type);break}}catch(h){window.console&&window.console.log&&window.console.log(h)}}this.toUnbindEvents[l]&&this.toUnbindEvents[l].length&&(e.each(this.toUnbindEvents[l],function(e,t){p.unbind(t.type,t.callback)}),delete this.toUnbindEvents[l])}return this},this.getListeners=function(e){return e?D[e.toLowerCase()]:D},this.shortcut=function(t){var n,i,a,o,r;if(this.options.allowShortcuts&&t.pattern&&e.isFunction(t.callback))for(n=t.pattern.toUpperCase().split(/\s+/),o=0;o<n.length;o++)i=n[o],r=i.split("+"),a=1==(a=r.pop()).length?a>0?a:a.charCodeAt(0):a>0?a:e.ui.keyCode[a],a&&!M[i]&&(M[i]={keyCode:a,altKey:e.inArray("ALT",r)!=-1,ctrlKey:e.inArray("CTRL",r)!=-1,shiftKey:e.inArray("SHIFT",r)!=-1,type:t.type||"keydown",callback:t.callback,description:t.description,pattern:i});return this},this.shortcuts=function(){var t=[];return e.each(M,function(e,n){t.push([n.pattern,p.i18n(n.description)])}),t},this.clipboard=function(t,n){var i=function(){return e.map(U,function(e){return e.hash})};return void 0!==t&&(U.length&&this.trigger("unlockfiles",{files:i()}),E={},U=e.map(t||[],function(e){var t=A[e];return t?(E[e]=!0,{hash:e,phash:t.phash,name:t.name,mime:t.mime,read:t.read,locked:t.locked,cut:!!n}):null}),this.trigger("changeclipboard",{clipboard:U.slice(0,U.length)}),n&&this.trigger("lockfiles",{files:i()})),U.slice(0,U.length)},this.isCommandEnabled=function(e,t){var n,i,a=p.cwd().volumeid||"";return!t&&p.searchStatus.state>1&&p.selected().length&&(t=p.selected()[0]),n=!t||a&&0===t.indexOf(a)?S.disabledFlip:p.option("disabledFlip",t),i=this._commands[e],!!i&&(i.alwaysEnabled||!n[e])},this.exec=function(t,n,i,a){var o,r;return"open"===t&&((this.searchStatus.state||this.searchStatus.ininc)&&this.trigger("searchend",{noupdate:!0}),this.autoSync("stop")),!a&&n&&(e.isArray(n)?n.length&&(a=n[0]):a=n),o=this._commands[t]&&this.isCommandEnabled(t,a)?this._commands[t].exec(n,i):e.Deferred().reject("No such command"),r=typeof o,"object"===r&&o.promise||(p.debug("warning",'"cmd.exec()" should be returned "$.Deferred" but cmd "'+t+'" returned "'+r+'"'),o=e.Deferred().resolve()),this.trigger("exec",{dfrd:o,cmd:t,files:n,opts:i,dstHash:a}),o},this.dialog=function(t,n){var i=e("<div/>").append(t).appendTo(f).elfinderdialog(n,this),a=i.closest(".ui-dialog"),o=function(){!i.data("draged")&&i.is(":visible")&&i.elfinderdialog("posInit")};return a.length&&(p.bind("resize",o),a.on("remove",function(){p.unbind("resize",o)})),i},this.toast=function(t){return e('<div class="ui-front"/>').appendTo(this.ui.toast).elfindertoast(t||{},this)},this.getUI=function(t){return this.ui[t]||(t?e():f)},this.getCommand=function(e){return void 0===e?this._commands:this._commands[e]},this.resize=function(t,n){var i,a=function(){for(var e=f.outerHeight(!0)-f.innerHeight(),t=f;t.get(0)!==_.get(0)&&(t=t.parent(),e+=t.outerHeight(!0)-t.innerHeight(),t.parent().length););return e},o=!f.hasClass("ui-resizable"),r=f.data("resizeSize")||{w:0,h:0},s={};_&&_.data("resizeTm")&&clearTimeout(_.data("resizeTm")),"string"==typeof n&&(i=n.match(/^([0-9.]+)%$/))&&(_&&_.length||(_=e(window)),_.data("marginToMyNode")||_.data("marginToMyNode",a()),_.data("fitToBaseFunc")||_.data("fitToBaseFunc",function(e){var t=_.data("resizeTm");e.preventDefault(),e.stopPropagation(),t&&clearTimeout(t),f.hasClass("elfinder-fullscreen")||p.UA.Mobile&&_.data("rotated")===p.UA.Rotated||(_.data("rotated",p.UA.Rotated),_.data("resizeTm",setTimeout(function(){p.restoreSize()},50)))}),"undefined"==typeof _.data("rotated")&&_.data("rotated",p.UA.Rotated),n=_.height()*(i[1]/100)-_.data("marginToMyNode"),_.off("resize."+p.namespace,_.data("fitToBaseFunc")),o&&_.on("resize."+p.namespace,_.data("fitToBaseFunc"))),f.css({width:t,height:parseInt(n)}),s.w=Math.round(f.width()),s.h=Math.round(f.height()),f.data("resizeSize",s),s.w===r.w&&s.h===r.h||(f.trigger("resize"),this.trigger("resize",{width:s.w,height:s.h}))},this.restoreSize=function(){this.resize(H,q)},this.show=function(){f.show(),this.enable().trigger("show")},this.hide=function(){this.options.enableAlways&&(C=k,k=!1),this.disable().trigger("hide"),f.hide()},this.lazy=function(t,n,i){var a=function(e){var t,n=f.data("lazycnt");e?(t=!f.data("lazyrepaint")&&i.repaint,n?f.data("lazycnt",++n):f.data("lazycnt",1).addClass("elfinder-processing"),
t&&f.data("lazyrepaint",!0).css("display")):n&&n>1?f.data("lazycnt",--n):(t=f.data("lazyrepaint"),f.data("lazycnt",0).removeData("lazyrepaint").removeClass("elfinder-processing"),t&&f.css("display"),p.trigger("lazydone"))},o=e.Deferred();return n=n||0,i=i||{},a(!0),setTimeout(function(){o.resolve(t.call(o)),a(!1)},n),o},this.destroy=function(){f&&f[0].elfinder&&(f.hasClass("elfinder-fullscreen")&&p.toggleFullscreen(f),this.options.syncStart=!1,this.autoSync("forcestop"),this.trigger("destroy").disable(),U=[],j=[],D={},M={},e(window).off("."+b),e(document).off("."+b),p.trigger=function(){},e(L).remove(),f.off().removeData().empty().append(g.contents()).attr("class",g.attr("class")).attr("style",g.attr("style")),delete f[0].elfinder,e.each(m,function(t,n){e.each(n,function(e,t){f.on(t.type+(t.namespace?"."+t.namespace:""),t.selector,t.handler)})}))},this.autoSync=function(t){var n;if(p.options.sync>=1e3){if(o&&(clearTimeout(o),o=null,p.trigger("autosync",{action:"stop"})),"stop"===t?++W:W=Math.max(0,--W),W||"forcestop"===t||!p.options.syncStart)return;n=function(t){var i;S.syncMinMs&&(t||o)&&(t&&p.trigger("autosync",{action:"start"}),i=Math.max(p.options.sync,S.syncMinMs),o&&clearTimeout(o),o=setTimeout(function(){var t,a=!0,r=z;S.syncChkAsTs&&A[r]&&(t=A[r].ts)?p.request({data:{cmd:"info",targets:[r],compare:t,reload:1},preventDefault:!0}).done(function(e){var i;a=!0,e.compare&&(i=e.compare,i==t&&(a=!1)),a?p.sync(r).always(function(){i&&(A[r].ts=i),n()}):n()}).fail(function(t,a){t&&0!=a.status?(p.error(t),e.inArray("errOpen",t)!==-1&&p.request({data:{cmd:"open",target:p.lastDir("")||p.root(),tree:1,init:1},notify:{type:"open",cnt:1,hideCnt:!0}})):o=setTimeout(function(){n()},i)}):p.sync(z,!0).always(function(){n()})},i))},n(!0)}},this.insideWorkzone=function(e,t,n){var i=this.getUI("workzone").data("rectangle");return n=n||1,!(e<i.left+n||e>i.left+i.width+n||t<i.top+n||t>i.top+i.height+n)},this.toFront=function(t){var n=f.children(".ui-front:last");t=e(t),f.children().css("z-index",""),t.css("z-index",n.css("z-index")+1)},this.getMaximizeCss=function(){return{width:"100%",height:"100%",margin:0,padding:0,top:0,left:0,display:"block",position:"fixed",zIndex:Math.max(p.zIndex?p.zIndex+1:0,1e3),maxWidth:"",maxHeight:""}},function(){ne&&p.UA.Fullscreen&&(p.UA.Fullscreen=!1,ie&&"undefined"!=typeof ie.attr("allowfullscreen")&&(p.UA.Fullscreen=!0));var t,n,i,a="elfinder-fullscreen",o="elfinder-fullscreen-native",r=function(){var t=0,n=0;e.each(f.children(".ui-dialog,.ui-draggable"),function(i,a){var o=e(a),r=o.position();r.top<0&&(o.css("top",t),t+=20),r.left<0&&(o.css("left",n),n+=20)})},s=p.UA.Fullscreen?{fullElm:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||null},exitFull:function(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():void 0},toFull:function(e){return e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():!!e.msRequestFullscreen&&e.msRequestFullscreen()}}:{fullElm:function(){var e;return f.hasClass(a)?f.get(0):(e=f.find("."+a),e.length?e.get(0):null)},exitFull:function(){var i;e(window).off("resize."+b,c),void 0!==n&&e("body").css("overflow",n),n=void 0,t&&(i=t.elm,l(i),e(i).trigger("resize",{fullscreen:"off"})),e(window).trigger("resize")},toFull:function(t){return n=e("body").css("overflow")||"",e("body").css("overflow","hidden"),e(t).css(p.getMaximizeCss()).addClass(a).trigger("resize",{fullscreen:"on"}),r(),e(window).on("resize."+b,c).trigger("resize"),!0}},l=function(n){t&&t.elm==n&&(e(n).removeClass(a+" "+o).attr("style",t.style),t=null)},c=function(t){var n;t.target===window&&(i&&clearTimeout(i),i=setTimeout(function(){(n=s.fullElm())&&e(n).trigger("resize",{fullscreen:"on"})},100))};e(document).on("fullscreenchange."+b+" webkitfullscreenchange."+b+" mozfullscreenchange."+b+" MSFullscreenChange."+b,function(n){if(p.UA.Fullscreen){var d=s.fullElm(),u=e(window);i&&clearTimeout(i),null===d?(u.off("resize."+b,c),t&&(d=t.elm,l(d),e(d).trigger("resize",{fullscreen:"off"}))):(e(d).addClass(a+" "+o).attr("style","width:100%; height:100%; margin:0; padding:0;").trigger("resize",{fullscreen:"on"}),u.on("resize."+b,c),r()),u.trigger("resize")}}),p.toggleFullscreen=function(n,i){var a=e(n).get(0),o=null;if(o=s.fullElm()){if(o==a){if(i===!0)return o}else if(i===!1)return o;return s.exitFull(),null}return i===!1?null:(t={elm:a,style:e(a).attr("style")},s.toFull(a)!==!1?a:(t=null,null))}}(),function(){var t,n="elfinder-maximized",i=function(e){if(e.target===window&&e.data&&e.data.elm){var n=e.data.elm;t&&clearTimeout(t),t=setTimeout(function(){n.trigger("resize",{maximize:"on"})},100)}},a=function(t){e(window).off("resize."+b,i),e("body").css("overflow",t.data("bodyOvf")),t.removeClass(n).attr("style",t.data("orgStyle")).removeData("bodyOvf").removeData("orgStyle"),t.trigger("resize",{maximize:"off"})},o=function(t){t.data("bodyOvf",e("body").css("overflow")||"").data("orgStyle",t.attr("style")).addClass(n).css(p.getMaximizeCss()),e("body").css("overflow","hidden"),e(window).on("resize."+b,{elm:t},i),t.trigger("resize",{maximize:"on"})};p.toggleMaximize=function(t,i){var r=e(t),s=r.hasClass(n);if(s){if(i===!0)return;a(r)}else{if(i===!1)return;o(r)}}}(),Object.assign(e.ui.keyCode,{F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,DIG0:48,DIG1:49,DIG2:50,DIG3:51,DIG4:52,DIG5:53,DIG6:54,DIG7:55,DIG8:56,DIG9:57,NUM0:96,NUM1:97,NUM2:98,NUM3:99,NUM4:100,NUM5:101,NUM6:102,NUM7:103,NUM8:104,NUM9:105,CONTEXTMENU:93}),this.dragUpload=!1,this.xhrUpload=("undefined"!=typeof XMLHttpRequestUpload||"undefined"!=typeof XMLHttpRequestEventTarget)&&"undefined"!=typeof File&&"undefined"!=typeof FormData,this.transport={},"object"==typeof this.options.transport&&(this.transport=this.options.transport,"function"==typeof this.transport.init&&this.transport.init(this)),"function"!=typeof this.transport.send&&(this.transport.send=function(t){return e.ajax(t)}),"iframe"==this.transport.upload?this.transport.upload=e.proxy(this.uploads.iframe,this):"function"==typeof this.transport.upload?this.dragUpload=!!this.options.dragUploadAllow:this.xhrUpload&&this.options.dragUploadAllow?(this.transport.upload=e.proxy(this.uploads.xhr,this),this.dragUpload=!0):this.transport.upload=e.proxy(this.uploads.iframe,this),this.decodeRawString=function(e){var t=function(e){var t,n,i;for(t=0,n=e.length,i=[];t<n;t++)i.push(e.charCodeAt(t));return i},n=function(e){var n,i,a,o=[];for("string"==typeof e&&(e=t(e)),n=0,i=e.length;a=e[n],n<i;n++)a>=55296&&a<=56319?o.push((1023&a)+64<<10|1023&e[++n]):o.push(a);return o},i=function(e){var t,n,i,a,o=String.fromCharCode;for(t=0,n=e.length,a="";i=e[t],t<n;t++)a+=i<=127?o(i):i<=223&&i>=194?o((31&i)<<6|63&e[++t]):i<=239&&i>=224?o((15&i)<<12|(63&e[++t])<<6|63&e[++t]):i<=247&&i>=240?o(55296|((7&i)<<8|(63&e[++t])<<2|e[++t]>>>4&3)-64,56320|(15&e[t++])<<6|63&e[t]):o(65533);return a};return i(n(e))},this.getContents=function(t,n){var i,a,o=this,r=e.Deferred(),s=n||"arraybuffer";return r.fail(function(){a&&"pending"===a.state()&&a.reject()}),i=o.openUrl(t),o.isSameOrigin(i)||(i=o.openUrl(t,!0)),a=o.request({data:{cmd:"get"},options:{url:i,type:"get",cache:!0,dataType:"binary",responseType:s,processData:!1}}).fail(function(){r.reject()}).done(function(e){r.resolve(e)}),r},p.hashCheckers=[],function(t){var n={check:!0},i=function(e){var i,a=new n.SparkMD5.ArrayBuffer;return i=t.asyncJob(function(e){a.append(e)},e).done(function(){i._md5=a.end()})},a=function(i,a){var o,r;try{o=new n.jsSHA("SHA"+("3"===a.substr(0,1)?a:"-"+a),"ARRAYBUFFER"),r=t.asyncJob(function(e){o.update(e)},i).done(function(){r._sha=o.getHash("HEX")})}catch(s){r=e.Deferred.reject()}return r};t.options.cdns.sparkmd5&&t.hashCheckers.push("md5"),t.options.cdns.jssha&&(t.hashCheckers=t.hashCheckers.concat(["sha1","sha224","sha256","sha384","sha512","sha3-224","sha3-256","sha3-384","sha3-512","shake128","shake256"])),t.getContentsHashes=function(o,r){var s,l=e.Deferred(),c=t.arrayFlip(r||["md5"],!0),d=[],p=[],u={};if(l.fail(function(){s&&s.reject()}),n.check){delete n.check;var h=e.Deferred();window.ArrayBuffer&&t.options.cdns.sparkmd5&&(d.push(h),t.loadScript([t.options.cdns.sparkmd5],function(e){var t=e||window.SparkMD5;window.SparkMD5&&delete window.SparkMD5,h.resolve(),t&&(n.SparkMD5=t)},{tryRequire:!0,error:function(){h.reject()}}));var f=e.Deferred();window.ArrayBuffer&&t.options.cdns.jssha&&(d.push(f),t.loadScript([t.options.cdns.jssha],function(e){var t=e||window.jsSHA;window.jsSHA&&delete window.jsSHA,f.resolve(),t&&(n.jsSHA=t)},{tryRequire:!0,error:function(){f.reject()}}))}return e.when.apply(null,d).always(function(){Object.keys(n).length?s=t.getContents(o).done(function(r){var s=r instanceof ArrayBuffer&&r.byteLength>0&&t.sliceArrayBuffer(r,1048576);c.md5&&n.SparkMD5&&p.push(function(){var e=i(s).done(function(){var n;u.md5=e._md5,(n=t.file(o))&&(n.md5=e._md5),l.notify(u)});return l.fail(function(){e.reject()}),e}),n.jsSHA&&e.each(["1","224","256","384","512","3-224","3-256","3-384","3-512","ke128","ke256"],function(e,n){c["sha"+n]&&p.push(function(){var e=a(s,n).done(function(){var i;u["sha"+n]=e._sha,(i=t.file(o))&&(i["sha"+n]=e._sha),l.notify(u)});return e})}),p.length?t.sequence(p).always(function(){l.resolve(u)}):l.reject()}).fail(function(){l.reject()}):l.reject()}),l}}(this),this.error=function(){var e=arguments[0],t=arguments[1]||null;return 1==arguments.length&&"function"==typeof e?p.bind("error",e):e===!0?this:p.trigger("error",{error:e,opts:t})},e.each(T,function(t,n){p[n]=function(){var t=arguments[0];return 1==arguments.length&&"function"==typeof t?p.bind(n,t):p.trigger(n,e.isPlainObject(t)?t:{})}}),this.enable(function(){!k&&p.api&&p.visible()&&p.ui.overlay.is(":hidden")&&!f.children(".elfinder-dialog."+p.res("class","editing")+":visible").length&&(k=!0,document.activeElement&&document.activeElement.blur(),f.removeClass("elfinder-disabled"))}).disable(function(){C=k,k=!1,f.addClass("elfinder-disabled")}).open(function(){j=[]}).select(function(t){var n=0,i=[];j=e.grep(t.data.selected||t.data.value||[],function(e){return i.length||p.maxTargets&&++n>p.maxTargets?(i.push(e),!1):!!A[e]}),i.length&&(p.trigger("unselectfiles",{files:i,inselect:!0}),p.toast({mode:"warning",msg:p.i18n(["errMaxTargets",p.maxTargets])}))}).error(function(t){var n={cssClass:"elfinder-dialog-error",title:p.i18n(p.i18n("error")),resizable:!1,destroyOnClose:!0,buttons:{}};n.buttons[p.i18n(p.i18n("btnClose"))]=function(){e(this).elfinderdialog("close")},t.data.opts&&e.isPlainObject(t.data.opts)&&Object.assign(n,t.data.opts),p.dialog('<span class="elfinder-dialog-icon elfinder-dialog-icon-error"/>'+p.i18n(t.data.error),n)}).bind("tmb",function(t){e.each(t.data.images||[],function(e,t){A[e]&&(A[e].tmb=t)})}).bind("searchstart",function(e){Object.assign(p.searchStatus,e.data),p.searchStatus.state=1}).bind("search",function(e){p.searchStatus.state=2}).bind("searchend",function(){p.searchStatus.state=0,p.searchStatus.ininc=!1,p.searchStatus.mixed=!1}),!0===this.options.sound&&this.bind("playsound",function(t){var n=L.canPlayType&&L.canPlayType('audio/wav; codecs="1"'),i=t.data&&t.data.soundFile;n&&i&&""!=n&&"no"!=n&&e(L).html('<source src="'+N+i+'" type="audio/wav">')[0].play()}),e.each(this.options.handlers,function(e,t){p.bind(e,t)}),this.history=new this.history(this),this.roots={},this.leafRoots={},this._commands={},Array.isArray(this.options.commands)||(this.options.commands=[]),e.inArray("*",this.options.commands)!==-1&&(this.options.commands=Object.keys(this.commands)),this.commandMap={},this.volOptions={},this.hasVolOptions=!1,this.trashes={},this.optionsByHashes={},this.uiAutoHide=[],this.one("open",function(){p.uiAutoHide.length&&setTimeout(function(){p.trigger("uiautohide")},500)}),this.bind("uiautohide",function(){p.uiAutoHide.length&&p.uiAutoHide.shift()()}),this.options.width&&(H=this.options.width),this.options.height&&(q=this.options.height),this.options.heightBase&&(_=e(this.options.heightBase)),this.options.soundPath&&(N=this.options.soundPath.replace(/\/+$/,"")+"/"),p.one("opendone",function(){var t;e(document).on("click."+b,function(t){k&&!p.options.enableAlways&&!e(t.target).closest(f).length&&p.disable()}).on(w+" "+x,ee),p.options.useBrowserHistory&&e(window).on("popstate."+b,function(t){var n=t.originalEvent.state&&t.originalEvent.state.thash;n&&!e.isEmptyObject(p.files())&&p.request({data:{cmd:"open",target:n,onhistory:1},notify:{type:"open",cnt:1,hideCnt:!0},syncOnFail:!0})}),e(window).on("resize."+b,function(e){e.target===this&&(t&&clearTimeout(t),t=setTimeout(function(){p.trigger("resize",{width:f.width(),height:f.height()})},100))}).on("beforeunload."+b,function(t){var n,i;return f.is(":visible")&&(p.ui.notify.children().length&&e.inArray("hasNotifyDialog",p.options.windowCloseConfirm)!==-1?n=p.i18n("ntfsmth"):f.find("."+p.res("class","editing")).length&&e.inArray("editingFile",p.options.windowCloseConfirm)!==-1?n=p.i18n("editingFile"):(i=Object.keys(p.selected()).length)&&e.inArray("hasSelectedItem",p.options.windowCloseConfirm)!==-1?n=p.i18n("hasSelected",""+i):(i=Object.keys(p.clipboard()).length)&&e.inArray("hasClipboardData",p.options.windowCloseConfirm)!==-1&&(n=p.i18n("hasClipboard",""+i)),n)?(t.returnValue=n,n):void p.trigger("unload")}),e(window).on("message."+b,function(e){var t,n,i=e.originalEvent||null;if(i&&0===p.uploadURL.indexOf(i.origin))try{t=JSON.parse(i.data),n=t.data||null,n&&(n.error?(t.bind&&p.trigger(t.bind+"fail",n),p.error(n.error)):(n.warning&&p.error(n.warning),p.updateCache(n),n.removed&&n.removed.length&&p.remove(n),n.added&&n.added.length&&p.add(n),n.changed&&n.changed.length&&p.change(n),t.bind&&(p.trigger(t.bind,n),p.trigger(t.bind+"done")),n.sync&&p.sync()))}catch(e){p.sync()}}),p.options.enableAlways?(e(window).on("focus."+b,function(e){e.target===this&&p.enable()}),ne&&e(window.top).on("focus."+b,function(){!p.enable()||ie&&!ie.is(":visible")||setTimeout(function(){e(window).trigger("focus")},10)})):ne&&e(window).on("blur."+b,function(e){k&&e.target===this&&p.disable()}),ne&&f.on("click",function(t){e(window).trigger("focus")}),p.options.enableByMouseOver&&f.on("mouseenter touchstart",function(t){ne&&e(window).trigger("focus"),!p.enabled()&&p.enable()})}),f[0].elfinder=this,u.push(function(){var t=p.lang,n=p.baseUrl+"js/i18n/elfinder."+t+".js",i=e.Deferred().done(function(){p.i18[t]&&(p.lang=t),p.trigger("i18load"),l="en"===p.lang?p.i18.en:e.extend(!0,{},p.i18.en,p.i18[p.lang])});return p.i18[t]?i.resolve():(p.lang="en",p.hasRequire?require([n],function(){i.resolve()},function(){i.resolve()}):p.loadScript([n],function(){i.resolve()},{loadType:"tag",error:function(){i.resolve()}})),i}()),c=function(){var t;return p.messages=l.messages,e.fn.selectable&&e.fn.draggable&&e.fn.droppable&&e.fn.resizable?f.length?p.options.url?(t=Object.assign({name:p.i18n("name"),perm:p.i18n("perms"),date:p.i18n("modify"),size:p.i18n("size"),kind:p.i18n("kind"),modestr:p.i18n("mode"),modeoct:p.i18n("mode"),modeboth:p.i18n("mode")},p.options.uiOptions.cwd.listView.columnsCustomName),p.getColumnName=function(e){return t[e]||p.i18n(e)},p.direction=l.direction,p.dateFormat=p.options.dateFormat||l.dateFormat,p.fancyFormat=p.options.fancyDateFormat||l.fancyDateFormat,p.nonameDateFormat=(p.options.nonameDateFormat||l.nonameDateFormat).replace(/[\/\\]/g,"_"),p.cssClass="ui-helper-reset ui-helper-clearfix ui-widget ui-widget-content ui-corner-all elfinder elfinder-"+("rtl"==p.direction?"rtl":"ltr")+(p.UA.Touch?" elfinder-touch"+(p.options.resizable?" touch-punch":""):"")+(p.UA.Mobile?" elfinder-mobile":"")+" "+p.options.cssClass,f.addClass(p.cssClass).on(y,function(){!k&&p.enable()}),function(){var t,n,i,a,o,r=w+"draggable keyup."+b+"draggable";p.draggable={appendTo:f,addClasses:!1,distance:4,revert:!0,refreshPositions:!1,cursor:"crosshair",cursorAt:{left:50,top:47},scroll:!1,start:function(r,s){var l,c,d=s.helper,u=e.grep(d.data("files")||[],function(e){return!!e&&(E[e]=!0,!0)}),h=!1;for(o=f.attr("style"),f.width(f.width()).height(f.height()),t="ltr"===p.direction,n=p.getUI("workzone").data("rectangle"),i=n.top+n.height,a=i-p.getUI("navdock").outerHeight(!0),p.draggingUiHelper=d,l=u.length;l--;)if(c=u[l],A[c].locked){h=!0,d.data("locked",!0);break}!h&&p.trigger("lockfiles",{files:u}),d.data("autoScrTm",setInterval(function(){d.data("autoScr")&&p.autoScroll[d.data("autoScr")](d.data("autoScrVal"))},50))},drag:function(o,r){var s,l,c,d=r.helper;((l=n.top>o.pageY)||a<o.pageY)&&(s=n.cwdEdge>o.pageX?(t?"navbar":"cwd")+(l?"Up":"Down"):(t?"cwd":"navbar")+(l?"Up":"Down"),l||("cwd"===s.substr(0,3)?i<o.pageY?c=i:s=null:c=a),s&&(d.data("autoScr",s),d.data("autoScrVal",Math.pow(l?n.top-o.pageY:o.pageY-c,1.3)))),s||d.data("autoScr")&&d.data("refreshPositions",1).data("autoScr",null),d.data("refreshPositions")&&e(this).elfUiWidgetInstance("draggable")&&(d.data("refreshPositions")>0?(e(this).draggable("option",{refreshPositions:!0,elfRefresh:!0}),d.data("refreshPositions",-1)):(e(this).draggable("option",{refreshPositions:!1,elfRefresh:!1}),d.data("refreshPositions",null)))},stop:function(t,n){var i,a=n.helper;e(document).off(r),e(this).elfUiWidgetInstance("draggable")&&e(this).draggable("option",{refreshPositions:!1}),p.draggingUiHelper=null,p.trigger("focus").trigger("dragstop"),a.data("droped")||(i=e.grep(a.data("files")||[],function(e){return!!e}),p.trigger("unlockfiles",{files:i}),p.trigger("selectfiles",{files:i})),p.enable(),f.attr("style",o),a.data("autoScrTm")&&clearInterval(a.data("autoScrTm"))},helper:function(t,n){var i,a,o,s=this.id?e(this):e(this).parents("[id]:first"),l=e('<div class="elfinder-drag-helper"><span class="elfinder-drag-helper-icon-status"/></div>'),c=function(t){var n,i=t.mime,a=p.tmb(t);return n='<div class="elfinder-cwd-icon elfinder-cwd-icon-drag '+p.mime2class(i)+' ui-corner-all"/>',a&&(n=e(n).addClass(a.className).css("background-image","url('"+a.url+"')").get(0).outerHTML),n};return p.draggingUiHelper&&p.draggingUiHelper.stop(!0,!0),p.trigger("dragstart",{target:s[0],originalEvent:t},!0),i=s.hasClass(p.res("class","cwdfile"))?p.selected():[p.navId2Hash(s.attr("id"))],l.append(c(A[i[0]])).data("files",i).data("locked",!1).data("droped",!1).data("namespace",b).data("dropover",0),(a=i.length)>1&&l.append(c(A[i[a-1]])+'<span class="elfinder-drag-num">'+a+"</span>"),e(document).on(r,function(e){var t=e.shiftKey||e.ctrlKey||e.metaKey;o!==t&&(o=t,l.is(":visible")&&l.data("dropover")&&!l.data("droped")&&(l.toggleClass("elfinder-drag-helper-plus",!!l.data("locked")||o),p.trigger(o?"unlockfiles":"lockfiles",{files:i,helper:l})))}),l}}}(),p.commands.getfile&&("function"==typeof p.options.getFileCallback?(p.bind("dblclick",function(e){e.preventDefault(),p.exec("getfile").fail(function(){p.exec("open",e.data&&e.data.file?[e.data.file]:void 0)})}),p.shortcut({pattern:"enter",description:p.i18n("cmdgetfile"),callback:function(){p.exec("getfile").fail(function(){p.exec("mac"==p.OS?"rename":"open")})}}).shortcut({pattern:"ctrl+enter",description:p.i18n("mac"==p.OS?"cmdrename":"cmdopen"),callback:function(){p.exec("mac"==p.OS?"rename":"open")}})):p.options.getFileCallback=null),e.each(p.commands,function(t,n){var i,a,o=Object.assign({},n.prototype);if(e.isFunction(n)&&!p._commands[t]&&(n.prototype.forceLoad||e.inArray(t,p.options.commands)!==-1)){if(i=n.prototype.extendsCmd||""){if(!e.isFunction(p.commands[i]))return!0;n.prototype=Object.assign({},R,new p.commands[i],n.prototype)}else n.prototype=Object.assign({},R,n.prototype);p._commands[t]=new n,n.prototype=o,a=p.options.commandsOptions[t]||{},i&&p.options.commandsOptions[i]&&(a=e.extend(!0,{},p.options.commandsOptions[i],a)),p._commands[t].setup(t,a),p._commands[t].linkedCmds.length&&e.each(p._commands[t].linkedCmds,function(t,n){var i=p.commands[n];e.isFunction(i)&&!p._commands[n]&&(i.prototype=R,p._commands[n]=new i,p._commands[n].setup(n,p.options.commandsOptions[n]||{}))})}}),p.ui={workzone:e("<div/>").appendTo(f).elfinderworkzone(p),navbar:e("<div/>").appendTo(f).elfindernavbar(p,p.options.uiOptions.navbar||{}),navdock:e("<div/>").appendTo(f).elfindernavdock(p,p.options.uiOptions.navdock||{}),contextmenu:e("<div/>").appendTo(f).elfindercontextmenu(p),overlay:e("<div/>").appendTo(f).elfinderoverlay({show:function(){p.disable()},hide:function(){C&&p.enable()}}),cwd:e("<div/>").appendTo(f).elfindercwd(p,p.options.uiOptions.cwd||{}),notify:p.dialog("",{cssClass:"elfinder-dialog-notify",position:p.options.notifyDialog.position,absolute:!0,resizable:!1,autoOpen:!1,closeOnEscape:!1,title:"&nbsp;",width:parseInt(p.options.notifyDialog.width)}),statusbar:e('<div class="ui-widget-header ui-helper-clearfix ui-corner-bottom elfinder-statusbar"/>').hide().appendTo(f),toast:e('<div class="elfinder-toast"/>').appendTo(f),bottomtray:e('<div class="elfinder-bottomtray">').appendTo(f)},e.each(p.options.ui||[],function(t,n){var i="elfinder"+n,a=p.options.uiOptions[n]||{};!p.ui[n]&&e.fn[i]&&(p.ui[n]=e("<"+(a.tag||"div")+"/>").appendTo(f),p.ui[n][i](p,a))}),p.resize(H,q),p.options.resizable&&(f.resizable({resize:function(e,t){p.resize(t.size.width,t.size.height)},handles:"se",minWidth:300,minHeight:200}),p.UA.Touch&&f.addClass("touch-punch")),function(){var e=p.getUI("navbar"),t=p.getUI("cwd").parent();p.autoScroll={navbarUp:function(t){e.scrollTop(Math.max(0,e.scrollTop()-t))},navbarDown:function(t){e.scrollTop(e.scrollTop()+t)},cwdUp:function(e){t.scrollTop(Math.max(0,t.scrollTop()-e))},cwdDown:function(e){t.scrollTop(t.scrollTop()+e)}}}(),p.UA.Touch&&!function(){var e,t,n,i,a,o,r,s,l,c=p.getUI("navbar"),d=p.getUI("toolbar"),u="touchmove.stopscroll",h=function(e){var n=e.originalEvent.touches||[{}],i=n[0].pageY||null;(!t||i<t)&&(e.preventDefault(),s&&clearTimeout(s))},m=function(e){e.preventDefault(),s&&clearTimeout(s)},g=function(){s=setTimeout(function(){f.off(u)},100)},v=50;c=c.children().length?c:null,d=d.length?d:null,f.on("touchstart touchmove touchend",function(s){if("touchend"===s.type)return e=!1,t=!1,void g();var b,y,w,x,k,C=s.originalEvent.touches||[{}],T=C[0].pageX||null,z=C[0].pageY||null,I="ltr"===p.direction;null===T||null===z||"touchstart"===s.type&&C.length>1||("touchstart"===s.type?(n=f.offset(),i=f.width(),c&&(e=!1,c.is(":hidden")?(l||(l=Math.max(50,i/10)),(I?T-n.left:i+n.left-T)<l&&(e=T)):s.originalEvent._preventSwipeX||(o=c.width(),y=I?T<n.left+o:T>n.left+i-o,y?(l=Math.max(50,i/10),e=T):e=!1)),d&&(t=!1,s.originalEvent._preventSwipeY||(r=d.height(),a=n.top,z-a<(d.is(":hidden")?v:r+30)&&(t=z,f.on(u,d.is(":hidden")?m:h))))):(c&&e!==!1&&(b=(I?e>T:e<T)?"navhide":"navshow",w=Math.abs(e-T),("navhide"===b&&w>.6*o||w>("navhide"===b?o/3:45)&&("navshow"===b||(I?T<n.left+20:T>n.left+i-20)))&&(p.getUI("navbar").trigger(b,{handleW:l}),e=!1)),d&&t!==!1&&(x=d.offset().top,Math.abs(t-z)>Math.min(45,r/3)&&(k=t>z?"slideUp":"slideDown",("slideDown"===k||x+20>z)&&(d.is("slideDown"===k?":hidden":":visible")&&d.stop(!0,!0).trigger("toggle",{duration:100,handleH:v}),t=!1)))))})}(),p.dragUpload&&!function(){var t,n,i=function(t){return"TEXTAREA"!==t.target.nodeName&&"INPUT"!==t.target.nodeName&&0===e(t.target).closest("div.ui-dialog-content").length},a="native-drag-enter",o="native-drag-disable",r="class",s=p.res(r,"navdir"),l=(p.res(r,"droppable"),p.res(r,"adroppable"),p.res(r,"navarrow"),p.res(r,"adroppable")),c=p.getUI("workzone"),d="ltr"===p.direction,u=function(){n&&clearTimeout(n),n=null};f.on("dragenter",function(e){u(),i(e)&&(e.preventDefault(),e.stopPropagation(),t=c.data("rectangle"))}).on("dragleave",function(e){u(),i(e)&&(e.preventDefault(),e.stopPropagation())}).on("dragover",function(e){var a;i(e)?(e.preventDefault(),e.stopPropagation(),e.originalEvent.dataTransfer.dropEffect="none",n||(n=setTimeout(function(){var i,o=t.top+t.height,r=o-p.getUI("navdock").outerHeight(!0);((a=e.pageY<t.top)||e.pageY>r)&&(i=t.cwdEdge>e.pageX?(d?"navbar":"cwd")+(a?"Up":"Down"):(d?"cwd":"navbar")+(a?"Up":"Down"),a||"cwd"===i.substr(0,3)&&(o<e.pageY?r=o:i=""),i&&p.autoScroll[i](Math.pow(a?t.top-e.pageY:e.pageY-r,1.3))),n=null},20))):u()}).on("drop",function(e){u(),i(e)&&(e.stopPropagation(),e.preventDefault())}),f.on("dragenter",".native-droppable",function(t){if(t.originalEvent.dataTransfer){var n,i=e(t.currentTarget),r=t.currentTarget.id||null,s=null;if(!r){s=p.cwd(),i.data(o,!1);try{e.each(t.originalEvent.dataTransfer.types,function(e,t){"elfinderfrom:"===t.substr(0,13)&&(n=t.substr(13).toLowerCase())})}catch(t){}}s&&(!s.write||n&&n===(window.location.href+s.hash).toLowerCase())?i.data(o,!0):(t.preventDefault(),t.stopPropagation(),i.data(a,!0),i.addClass(l))}}).on("dragleave",".native-droppable",function(t){if(t.originalEvent.dataTransfer){var n=e(t.currentTarget);t.preventDefault(),t.stopPropagation(),n.data(a)?n.data(a,!1):n.removeClass(l)}}).on("dragover",".native-droppable",function(t){if(t.originalEvent.dataTransfer){var n=e(t.currentTarget);t.preventDefault(),t.stopPropagation(),t.originalEvent.dataTransfer.dropEffect=n.data(o)?"none":"copy",n.data(a,!1)}}).on("drop",".native-droppable",function(t){if(t.originalEvent&&t.originalEvent.dataTransfer){var n,i=e(t.currentTarget);t.preventDefault(),t.stopPropagation(),i.removeClass(l),n=t.currentTarget.id?i.hasClass(s)?p.navId2Hash(t.currentTarget.id):p.cwdId2Hash(t.currentTarget.id):p.cwd().hash,t.originalEvent._target=n,p.exec("upload",{dropEvt:t.originalEvent,target:n},void 0,n)}})}(),null===p.cssloaded?!function(){var e,t,n=function(){f.data("cssautoloadHide").remove(),f.removeData("cssautoloadHide"),p.cssloaded=!0,p.trigger("cssloaded")};"hidden"===f.css("visibility")?(e=1e3,t=setInterval(function(){(--e<0||"hidden"!==f.css("visibility"))&&(clearInterval(t),n())},10)):n()}():(p.cssloaded=!0,p.trigger("cssloaded")),p.zIndexCalc(),void p.trigger("init").request({data:{cmd:"open",target:p.startDir(),init:1,tree:1},preventDone:!0,notify:{type:"open",cnt:1,hideCnt:!0},freeze:!0}).fail(function(){p.trigger("fail").disable().lastDir(""),D={},M={},e(document).add(f).off("."+b),p.trigger=function(){}}).done(function(t){var n=function(e){var t=p.file(p.trashes[e]);p.options.debug;t&&t.volumeid&&delete p.volOptions[t.volumeid].trashHash,p.trashes[e]=!1,p.debug("backend-error",'Trash hash "'+e+'" was not found or not writable.')},i={};p.options.rawStringDecoder&&p.registRawStringDecoder(p.options.rawStringDecoder),p.zIndexCalc(),p.load().debug("api",p.api),f.trigger("resize"),V(t),p.trigger("open",t,!1),p.trigger("opendone"),ne&&p.options.enableAlways&&e(window).trigger("focus"),e.each(p.trashes,function(e){var t=p.file(e);t?"directory"===t.mime&&t.write||n(e):i[e]=!0}),Object.keys(i).length&&p.request({data:{cmd:"info",targets:Object.keys(i)},preventDefault:!0}).done(function(t){t&&t.files&&e.each(t.files,function(e,t){"directory"===t.mime&&t.write&&delete i[t.hash]})}).always(function(){e.each(i,n)}),p[p.options.enableAlways?"enable":"disable"]()})):alert(p.i18n("errURL")):alert(p.i18n("errNode")):alert(p.i18n("errJqui"))},a&&"function"==typeof a&&(p.bootCallback=a,a.call(f.get(0),p,{dfrdsBeforeBootup:u})),e.when.apply(null,u).done(function(){c()}).fail(function(e){p.error(e)})};return("undefined"==typeof n||n)&&(window.elFinder=i),i.prototype={uniqueid:0,res:function(e,t){return this.resources[e]&&this.resources[e][t]},OS:navigator.userAgent.indexOf("Mac")!==-1?"mac":navigator.userAgent.indexOf("Win")!==-1?"win":"other",UA:function(){var e=!document.unqueID&&!window.opera&&!window.sidebar&&window.localStorage&&"WebkitAppearance"in document.documentElement.style,t={ltIE6:"undefined"==typeof window.addEventListener&&"undefined"==typeof document.documentElement.style.maxHeight,ltIE7:"undefined"==typeof window.addEventListener&&"undefined"==typeof document.querySelectorAll,ltIE8:"undefined"==typeof window.addEventListener&&"undefined"==typeof document.getElementsByClassName,ltIE9:document.uniqueID&&document.documentMode<=9,ltIE10:document.uniqueID&&document.documentMode<=10,gtIE11:document.uniqueID&&document.documentMode>=11,IE:document.uniqueID,Firefox:window.sidebar,Opera:window.opera,Webkit:e,Chrome:e&&window.chrome,Safari:e&&!window.chrome,Mobile:"undefined"!=typeof window.orientation,Touch:"undefined"!=typeof window.ontouchstart,iOS:navigator.platform.match(/^iP(?:[ao]d|hone)/),Fullscreen:"undefined"!=typeof(document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen),Angle:0,Rotated:!1};return t}(),hasRequire:"function"==typeof define&&define.amd,currentReqCmd:"",i18:{en:{translator:"",language:"English",direction:"ltr",dateFormat:"d.m.Y H:i",fancyDateFormat:"$1 H:i",nonameDateFormat:"ymd-His",messages:{}},months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["msJan","msFeb","msMar","msApr","msMay","msJun","msJul","msAug","msSep","msOct","msNov","msDec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},kinds:{unknown:"Unknown",directory:"Folder",group:"Selects",symlink:"Alias","symlink-broken":"AliasBroken","application/x-empty":"TextPlain","application/postscript":"Postscript","application/vnd.ms-office":"MsOffice","application/msword":"MsWord","application/vnd.ms-word":"MsWord","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"MsWord","application/vnd.ms-word.document.macroEnabled.12":"MsWord","application/vnd.openxmlformats-officedocument.wordprocessingml.template":"MsWord","application/vnd.ms-word.template.macroEnabled.12":"MsWord","application/vnd.ms-excel":"MsExcel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"MsExcel","application/vnd.ms-excel.sheet.macroEnabled.12":"MsExcel","application/vnd.openxmlformats-officedocument.spreadsheetml.template":"MsExcel","application/vnd.ms-excel.template.macroEnabled.12":"MsExcel","application/vnd.ms-excel.sheet.binary.macroEnabled.12":"MsExcel","application/vnd.ms-excel.addin.macroEnabled.12":"MsExcel","application/vnd.ms-powerpoint":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.presentation":"MsPP","application/vnd.ms-powerpoint.presentation.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.slideshow":"MsPP","application/vnd.ms-powerpoint.slideshow.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.template":"MsPP","application/vnd.ms-powerpoint.template.macroEnabled.12":"MsPP","application/vnd.ms-powerpoint.addin.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.slide":"MsPP","application/vnd.ms-powerpoint.slide.macroEnabled.12":"MsPP","application/pdf":"PDF","application/xml":"XML","application/vnd.oasis.opendocument.text":"OO","application/vnd.oasis.opendocument.text-template":"OO","application/vnd.oasis.opendocument.text-web":"OO","application/vnd.oasis.opendocument.text-master":"OO","application/vnd.oasis.opendocument.graphics":"OO","application/vnd.oasis.opendocument.graphics-template":"OO","application/vnd.oasis.opendocument.presentation":"OO","application/vnd.oasis.opendocument.presentation-template":"OO","application/vnd.oasis.opendocument.spreadsheet":"OO","application/vnd.oasis.opendocument.spreadsheet-template":"OO","application/vnd.oasis.opendocument.chart":"OO","application/vnd.oasis.opendocument.formula":"OO","application/vnd.oasis.opendocument.database":"OO","application/vnd.oasis.opendocument.image":"OO","application/vnd.openofficeorg.extension":"OO","application/x-shockwave-flash":"AppFlash","application/flash-video":"Flash video","application/x-bittorrent":"Torrent","application/javascript":"JS","application/rtf":"RTF","application/rtfd":"RTF","application/x-font-ttf":"TTF","application/x-font-otf":"OTF",
"application/x-rpm":"RPM","application/x-web-config":"TextPlain","application/xhtml+xml":"HTML","application/docbook+xml":"DOCBOOK","application/x-awk":"AWK","application/x-gzip":"GZIP","application/x-bzip2":"BZIP","application/x-xz":"XZ","application/zip":"ZIP","application/x-zip":"ZIP","application/x-rar":"RAR","application/x-tar":"TAR","application/x-7z-compressed":"7z","application/x-jar":"JAR","text/plain":"TextPlain","text/x-php":"PHP","text/html":"HTML","text/javascript":"JS","text/css":"CSS","text/rtf":"RTF","text/rtfd":"RTF","text/x-c":"C","text/x-csrc":"C","text/x-chdr":"CHeader","text/x-c++":"CPP","text/x-c++src":"CPP","text/x-c++hdr":"CPPHeader","text/x-shellscript":"Shell","application/x-csh":"Shell","text/x-python":"Python","text/x-java":"Java","text/x-java-source":"Java","text/x-ruby":"Ruby","text/x-perl":"Perl","text/x-sql":"SQL","text/xml":"XML","text/x-comma-separated-values":"CSV","text/x-markdown":"Markdown","image/x-ms-bmp":"BMP","image/jpeg":"JPEG","image/gif":"GIF","image/png":"PNG","image/tiff":"TIFF","image/x-targa":"TGA","image/vnd.adobe.photoshop":"PSD","image/xbm":"XBITMAP","image/pxm":"PXM","audio/mpeg":"AudioMPEG","audio/midi":"AudioMIDI","audio/ogg":"AudioOGG","audio/mp4":"AudioMPEG4","audio/x-m4a":"AudioMPEG4","audio/wav":"AudioWAV","audio/x-mp3-playlist":"AudioPlaylist","video/x-dv":"VideoDV","video/mp4":"VideoMPEG4","video/mpeg":"VideoMPEG","video/x-msvideo":"VideoAVI","video/quicktime":"VideoMOV","video/x-ms-wmv":"VideoWM","video/x-flv":"VideoFlash","video/x-matroska":"VideoMKV","video/ogg":"VideoOGG"},mimeTypes:{},rules:{defaults:function(e){return!(!e||e.added&&!Array.isArray(e.added)||e.removed&&!Array.isArray(e.removed)||e.changed&&!Array.isArray(e.changed))},open:function(t){return t&&t.cwd&&t.files&&e.isPlainObject(t.cwd)&&Array.isArray(t.files)},tree:function(e){return e&&e.tree&&Array.isArray(e.tree)},parents:function(e){return e&&e.tree&&Array.isArray(e.tree)},tmb:function(t){return t&&t.images&&(e.isPlainObject(t.images)||Array.isArray(t.images))},upload:function(t){return t&&(e.isPlainObject(t.added)||Array.isArray(t.added))},search:function(e){return e&&e.files&&Array.isArray(e.files)}},commands:{},cmdsToAdd:"archive duplicate extract mkdir mkfile paste rm upload",parseUploadData:function(t){var n,i=this;if(!e.trim(t))return{error:["errResponse","errDataEmpty"]};try{n=JSON.parse(t)}catch(a){return{error:["errResponse","errDataNotJSON"]}}return n=i.normalize(n),i.validResponse("upload",n)?(n.removed=e.merge(n.removed||[],e.map(n.added||[],function(e){return i.file(e.hash)?e.hash:null})),n):{error:response.norError||["errResponse"]}},iframeCnt:0,uploads:{xhrUploading:!1,failSyncTm:null,chunkfailReq:{},checkExists:function(t,n,i,a){var o,r=e.Deferred(),s=[],l={},c=function(){for(var e=t.length;--e>-1;)t[e]._remove=!0},d=function(){r.resolve(s,l)},p=function(){var r=[],p=[],u=n!==i.cwd().hash?i.path(n,!0)+i.option("separator",n):"",h=function(e){var n=e==p.length-1,o={cssClass:"elfinder-confirm-upload",title:i.i18n("cmdupload"),text:["errExists",u+p[e].name,"confirmRepl"],all:!n,accept:{label:"btnYes",callback:function(t){n||t?d():h(++e)}},reject:{label:"btnNo",callback:function(i){var a;if(i)for(a=p.length;e<a--;)t[p[a].i]._remove=!0;else t[p[e].i]._remove=!0;n||i?d():h(++e)}},cancel:{label:"btnCancel",callback:function(){c(),d()}},buttons:[{label:"btnBackup",cssClass:"elfinder-confirm-btn-backup",callback:function(t){var i;if(t)for(i=p.length;e<i--;)s.push(p[i].name);else s.push(p[e].name);n||t?d():h(++e)}}]};a||o.buttons.push({label:"btnRename"+(n?"":"All"),cssClass:"elfinder-confirm-btn-rename",callback:function(){s=null,d()}}),i.iframeCnt>0&&delete o.reject,i.confirm(o)};return i.file(n).read?(o=e.map(t,function(e,t){return!e.name||i.UA.iOS&&"image.jpg"===e.name?null:{i:t,name:e.name}}),void i.request({data:{cmd:"ls",target:n,intersect:e.map(o,function(e){return e.name})},notify:{type:"preupload",cnt:1,hideCnt:!0},preventDefault:!0}).done(function(t){var a,s;t&&(t.error?c():i.options.overwriteUploadConfirm&&i.option("uploadOverwrite",n)&&t.list&&(Array.isArray(t.list)?r=t.list||[]:(a=[],r=e.map(t.list,function(e){return"string"==typeof e?e:(a=a.concat(e),!1)}),a.length&&(r=r.concat(a)),l=t.list),p=e.grep(o,function(t){return e.inArray(t.name,r)!==-1}),p.length&&r.length&&n==i.cwd().hash&&(s=e.map(i.files(n),function(e){return e.name}),e.grep(r,function(t){return e.inArray(t,s)===-1}).length&&i.sync()))),p.length>0?h(0):d()}).fail(function(e){c(),d(),e&&i.error(e)})):void d()};return i.api>=2.1&&"object"==typeof t[0]?p():d(),r},checkFile:function(t,n,i){if(t.checked||"files"==t.type)return t.files;if("data"==t.type){var a,o,r=e.Deferred(),s=[],l=[],c=0,d=[],p=!1,u=function(e){return Array.prototype.slice.call(e||[],0)},h=function(e){for(var t,i,a,o=[],r=n.options.folderUploadExclude[n.OS]||null,f=e.length,m=0;m<f&&!p;m++)i=e[m],i&&(i.isFile?(c++,i.file(function(e){r&&e.name.match(r)||(l.push(i.fullPath||""),s.push(e)),c--})):i.isDirectory&&n.api>=2.1&&(c++,d.push(i.fullPath),t=i.createReader(),o=[],(a=function(){t.readEntries(function(e){if(p||!e.length){for(var t=0;t<o.length&&!p;t++)h([o[t]]);c--}else o=o.concat(u(e)),a()},function(){c--})})()))};return a=e.map(t.files.items,function(e){return e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry()}),e.each(a,function(e,t){if(t.isDirectory)return o=!0,!1}),a.length>0?(n.uploads.checkExists(a,i,n,o).done(function(o,u){var f=[];n.options.overwriteUploadConfirm&&n.option("uploadOverwrite",i)&&(null===o&&(t.overwrite=0,o=[]),a=e.grep(a,function(t){var a,r,s,l;return t.isDirectory&&o.length&&(a=e.inArray(t.name,o),a!==-1&&(o.splice(a,1),r=n.uniqueName(t.name+n.options.backupSuffix,null,""),e.each(u,function(e,n){if(t.name==n)return s=e,!1}),s||(s=n.fileByName(t.name,i).hash),n.lockfiles({files:[s]}),l=n.request({data:{cmd:"rename",target:s,name:r},notify:{type:"rename",cnt:1}}).fail(function(e){t._remove=!0,n.sync()}).always(function(){n.unlockfiles({files:[s]})}),f.push(l))),!t._remove})),e.when.apply(e,f).done(function(){var e,t,i=+new Date,f=function(){!p&&c>0?setTimeout(f,10):(e&&clearTimeout(e),n.notify({type:"readdir",id:i,cnt:-1}),p?r.reject():r.resolve([s,l,o,u,d]))};a.length>0?(t=n.escape(a[0].name),a.length>1&&(t+=" ... "+a.length+n.i18n("items")),e=setTimeout(function(){n.notify({type:"readdir",id:i,cnt:1,hideCnt:!0,msg:n.i18n("ntfreaddir")+" ("+t+")",cancel:function(){p=!0}})},n.options.notifyDelay),h(a),setTimeout(f,10)):r.reject()})}),r.promise()):r.reject()}var f=[],m=[],g=t.files[0];if("html"==t.type){var v,b=e("<html/>").append(e.parseHTML(g.replace(/ src=/gi," _elfsrc=")));e("img[_elfsrc]",b).each(function(){var n,i,a=e(this),o=a.closest("a");o&&o.attr("href")&&o.attr("href").match(/\.(?:jpe?g|gif|bmp|png)/i)&&(i=o.attr("href")),n=a.attr("_elfsrc"),n&&(i?(e.inArray(i,f)==-1&&f.push(i),e.inArray(n,m)==-1&&m.push(n)):e.inArray(n,f)==-1&&f.push(n)),1===f.length&&f[0].match(/^data:image\/png/)&&(t.clipdata=!0)}),v=e("a[href]",b),v.each(function(){var t,n=function(e){var t=document.createElement("a");return t.href=e,t};e(this).text()&&(t=n(e(this).attr("href")),!t.href||1!==v.length&&t.pathname.match(/(?:\.html?|\/[^\/.]*)$/i)||e.inArray(t.href,f)==-1&&e.inArray(t.href,m)==-1&&f.push(t.href))})}else{var y,w,x;for(y=/(http[^<>"{}|\\^\[\]`\s]+)/gi;w=y.exec(g);)x=w[1].replace(/&amp;/g,"&"),e.inArray(x,f)==-1&&f.push(x)}return f},xhr:function(t,n){var i=n?n:this,a=i.getUI(),o=new XMLHttpRequest,r=null,s=null,l=t.checked,c=t.isDataType||"data"==t.type,d=t.target||i.cwd().hash,p=t.dropEvt||null,u=i.option("uploadMaxConn",d)!=-1,h=Math.min(5,Math.max(1,i.option("uploadMaxConn",d))),f=1e4,m=30,g=0,v=function(t){var n=e.Deferred();return t.promise?t.always(function(e){n.resolve(Array.isArray(e)&&e.length?c?e[0][0]:e[0]:{})}):n.resolve(t.length?c?t[0][0]:t[0]:{}),n},b=e.Deferred().fail(function(e){var t;"userabort"===e&&(t=!0,e=void 0),w&&(i.uploads.xhrUploading||t)&&v(w).done(function(e){e._cid?i.uploads.chunkfailReq[e._cid]||(i.uploads.chunkfailReq[e._cid]=!0,setTimeout(function(){n.request({data:{cmd:"upload",target:d,chunk:e._chunk,cid:e._cid,upload:["chunkfail"],mimes:"chunkfail"},options:{type:"post",url:i.uploadURL},preventDefault:!0}).always(function(){delete i.uploads.chunkfailReq[e._chunk]})},1e3)):(i.uploads.failSyncTm&&clearTimeout(i.uploads.failSyncTm),i.uploads.failSyncTm=setTimeout(function(){i.sync(d)},1e3))}),!t&&i.sync(),i.uploads.xhrUploading=!1,w=null,e&&i.error(e)}).done(function(e){i.uploads.xhrUploading=!1,w=null,e&&(i.currentReqCmd="upload",e.warning&&i.error(e.warning),i.updateCache(e),e.removed&&e.removed.length&&i.remove(e),e.added&&e.added.length&&i.add(e),e.changed&&e.changed.length&&i.change(e),i.trigger("upload",e,!1),i.trigger("uploaddone"),e.sync&&i.sync(),e.debug&&n.debug("backend-debug",e))}).always(function(){i.abortXHR(o),a.off("uploadabort",j),e(window).off("unload",j),r&&clearTimeout(r),s&&clearTimeout(s),l&&!t.multiupload&&O()&&i.notify({type:"upload",cnt:-x,progress:0,size:0}),P&&I.children(".elfinder-notify-chunkmerge").length&&i.notify({type:"chunkmerge",cnt:-1})}),y=new FormData,w=t.input?t.input.files:i.uploads.checkFile(t,i,d),x=t.checked&&c?w[0].length:w.length,k=0,C=0,T=0,z=!1,I=i.ui.notify,S=!0,A=!1,O=function(){return z=z||I.children(".elfinder-notify-upload").length},j=function(e,t){A=!0,i.abortXHR(o,{quiet:!0,abort:!0}),b.reject(t),O()&&i.notify({type:"upload",cnt:I.children(".elfinder-notify-upload").data("cnt")*-1,progress:0,size:0})},D=function(e){I.children(".elfinder-notify-upload").children(".elfinder-notify-cancel")[e?"show":"hide"]()},M=function(e){return e||(e=T),setTimeout(function(){z=!0,i.notify({type:"upload",cnt:x,progress:k-C,size:e,cancel:function(){a.trigger("uploadabort","userabort")}}),C=k,t.multiupload?S&&D(!0):D(S&&k<e)},i.options.notifyDelay)},U=function(){g++<=m?(O()&&C&&i.notify({type:"upload",cnt:0,progress:0,size:C}),i.abortXHR(o,{quiet:!0}),C=k=0,setTimeout(function(){var e;A||(o.open("POST",i.uploadURL,!0),i.api>=2.1029&&(e=(+new Date).toString(16)+Math.floor(1e3*Math.random()).toString(16),"function"==typeof y["delete"]&&y["delete"]("reqid"),y.append("reqid",e),o._requestId=e),o.send(y))},f)):a.trigger("uploadabort",["errAbort","errTimeout"])},E=t.renames||null,F=t.hashes||null,P=!1;if(a.one("uploadabort",j),e(window).one("unload."+n.namespace,j),!P&&(C=k),!c&&!x)return b.reject(["errUploadNoFiles"]);o.addEventListener("error",function(){0==o.status?A?b.reject():!c&&t.files&&e.grep(t.files,function(e){return!e.type&&e.size===(i.UA.Safari?1802:0)}).length?(errors.push("errFolderUpload"),b.reject(["errAbort","errFolderUpload"])):t.input&&e.grep(t.input.files,function(e){return!e.type&&e.size===(i.UA.Safari?1802:0)}).length?b.reject(["errUploadNoFiles"]):U():a.trigger("uploadabort","errConnect")},!1),o.addEventListener("load",function(e){var n,l=o.status,d=0,p="";if(l>=400?p=l>500?"errResponse":["errResponse","errServerError"]:o.responseText||(p=["errResponse","errDataEmpty"]),p&&(a.trigger("uploadabort"),v(w).done(function(e){return b.reject(e._cid?null:p)})),k=T,O()&&(d=k-C)&&i.notify({type:"upload",cnt:0,progress:d,size:0}),n=i.parseUploadData(o.responseText),n._chunkmerged){y=new FormData;var u=[{_chunkmerged:n._chunkmerged,_name:n._name,_mtime:n._mtime}];return P=!0,a.off("uploadabort",j),s=setTimeout(function(){i.notify({type:"chunkmerge",cnt:1})},i.options.notifyDelay),void(c?R(u,w[1]):R(u))}n._multiupload=!!t.multiupload,n.error?(i.trigger("uploadfail",n),n._chunkfailure||n._multiupload?(A=!0,i.uploads.xhrUploading=!1,r&&clearTimeout(r),I.children(".elfinder-notify-upload").length?(i.notify({type:"upload",cnt:-x,progress:0,size:0}),b.reject(n.error)):b.reject()):b.reject(n.error)):b.resolve(n)},!1),o.upload.addEventListener("loadstart",function(e){!P&&e.lengthComputable&&(k=e.loaded,g&&(k=0),T=e.total,k||(k=parseInt(.05*T)),O()&&(i.notify({type:"upload",cnt:0,progress:k-C,size:t.multiupload?0:T}),C=k))},!1),o.upload.addEventListener("progress",function(e){var n;e.lengthComputable&&!P&&o.readyState<2&&(k=e.loaded,!t.checked&&k>0&&!r&&(r=M(o._totalSize-k)),T||(T=e.total,k||(k=parseInt(.05*T))),n=k-C,O()&&n/e.total>=.05&&(i.notify({type:"upload",cnt:0,progress:n,size:0}),C=k),!t.multiupload&&k>=T&&(S=!1,D(!1)))},!1);var R=function(a,s){var f,m,g,v,w,k,C,T,z,I,j,U,P,R,H=0,q=1,_=[],N=0,L=x,W=0,B=[],$=(new Date).getTime().toString().substr(-9),V=Math.min((n.uplMaxSize?n.uplMaxSize:2097152)-8190,n.options.uploadMaxChunkSize),X=!u&&"",K=function(a,o){var s,l,u=[],h=0;if(!A){for(;a.length&&u.length<o;)u.push(a.shift());if(h=u.length){l=h;for(var f=0;f<h&&!A;f++)s=c?u[f][0][0]._cid||null:u[f][0]._cid||null,P[s]?U--:n.exec("upload",{type:t.type,isDataType:c,files:u[f],checked:!0,target:d,dropEvt:p,renames:E,hashes:F,multiupload:!0,overwrite:0===t.overwrite?0:void 0},void 0,d).fail(function(e){e&&"No such command"===e&&(A=!0,n.error(["errUpload","errPerm"])),s&&(P[s]=!0)}).always(function(t){t&&t.added&&(I=e.merge(I,t.added)),U<=++j&&(n.trigger("multiupload",{added:I}),r&&clearTimeout(r),O()&&i.notify({type:"upload",cnt:-x,progress:0,size:0})),a.length?K(a,1):--l<=1&&(S=!1,D(!1))})}}(u.length<1||A)&&(A?(r&&clearTimeout(r),s&&(P[s]=!0),b.reject()):(b.resolve(),i.uploads.xhrUploading=!1))},G=function(){i.uploads.xhrUploading?setTimeout(function(){G()},100):(i.uploads.xhrUploading=!0,K(_,h))};if(!l&&(c||"files"==t.type)){for((f=n.option("uploadMaxSize",d))||(f=0),v=0;v<a.length;v++){try{T=a[v],m=T.size,X===!1&&(X="",i.api>=2.1&&("slice"in T?X="slice":"mozSlice"in T?X="mozSlice":"webkitSlice"in T&&(X="webkitSlice")))}catch(J){x--,L--;continue}if(f&&m>f||!X&&n.uplMaxSize&&m>n.uplMaxSize)i.error(i.i18n("errUploadFile",T.name)+" "+i.i18n("errUploadFileSize")),x--,L--;else if(!T.type||i.uploadMimeCheck(T.type,d))if(X&&m>V){for(w=0,k=V,C=-1,L=Math.floor(m/V),g=T.lastModified?Math.round(T.lastModified/1e3):0,W+=m,B[$]=0;w<=m;)z=T[X](w,k),z._chunk=T.name+"."+ ++C+"_"+L+".part",z._cid=$,z._range=w+","+z.size+","+m,z._mtime=g,B[$]++,H&&N++,"undefined"==typeof _[N]&&(_[N]=[],c&&(_[N][0]=[],_[N][1]=[])),H=V,q=1,c?(_[N][0].push(z),_[N][1].push(s[v])):_[N].push(z),w=k,k=w+V;null==z?(i.error(i.i18n("errUploadFile",T.name)+" "+i.i18n("errUploadFileSize")),x--,L--):(L+=C,H=0,q=1,N++)}else(n.uplMaxSize&&H+m>=n.uplMaxSize||q>n.uplMaxFile)&&(H=0,q=1,N++),"undefined"==typeof _[N]&&(_[N]=[],c&&(_[N][0]=[],_[N][1]=[])),c?(_[N][0].push(T),_[N][1].push(s[v])):_[N].push(T),H+=m,W+=m,q++;else i.error(i.i18n("errUploadFile",T.name)+" "+i.i18n("errUploadMime")+" ("+i.escape(T.type)+")"),x--,L--}if(0==_.length)return t.checked=!0,!1;if(_.length>1)return r=M(W),I=[],j=0,U=_.length,P=[],G(),!0;c?(a=_[0][0],s=_[0][1]):a=_[0]}return l||(n.UA.Safari&&t.files?o._totalSize=W:r=M(W)),l=!0,a.length||b.reject(["errUploadNoFiles"]),o.open("POST",i.uploadURL,!0),n.customHeaders&&e.each(n.customHeaders,function(e){o.setRequestHeader(e,this)}),n.xhrFields&&e.each(n.xhrFields,function(e){e in o&&(o[e]=this)}),i.api>=2.1029&&(R=(+new Date).toString(16)+Math.floor(1e3*Math.random()).toString(16),y.append("reqid",R),o._requestId=R),y.append("cmd","upload"),y.append(i.newAPI?"target":"current",d),E&&E.length&&(e.each(E,function(e,t){y.append("renames[]",t)}),y.append("suffix",n.options.backupSuffix)),F&&e.each(F,function(e,t){y.append("hashes["+e+"]",t)}),e.each(i.customData,function(e,t){y.append(e,t)}),e.each(i.options.onlyMimes,function(e,t){y.append("mimes[]",t)}),e.each(a,function(e,i){i._chunkmerged?(y.append("chunk",i._chunkmerged),y.append("upload[]",i._name),y.append("mtime[]",i._mtime)):(i._chunkfail?(y.append("upload[]","chunkfail"),y.append("mimes","chunkfail")):(y.append("upload[]",i),t.clipdata&&(t.overwrite=0,y.append("name[]",n.date(n.nonameDateFormat)+".png")),n.UA.iOS&&(i.name.match(/^image\.jpe?g$/i)?(t.overwrite=0,y.append("name[]",n.date(n.nonameDateFormat)+".jpg")):i.name.match(/^capturedvideo\.mov$/i)&&(t.overwrite=0,y.append("name[]",n.date(n.nonameDateFormat)+".mov")))),i._chunk?(y.append("chunk",i._chunk),y.append("cid",i._cid),y.append("range",i._range),y.append("mtime[]",i._mtime)):y.append("mtime[]",i.lastModified?Math.round(i.lastModified/1e3):0))}),c&&e.each(s,function(e,t){y.append("upload_path[]",t)}),0===t.overwrite&&y.append("overwrite",0),p&&y.append("dropWith",parseInt((p.altKey?"1":"0")+(p.ctrlKey?"1":"0")+(p.metaKey?"1":"0")+(p.shiftKey?"1":"0"),2)),o.send(y),!0};if(c)l?R(w[0],w[1]):w.done(function(t){if(E=[],x=t[0].length){if(t[4]&&t[4].length)return void n.request({data:{cmd:"mkdir",target:d,dirs:t[4]},notify:{type:"mkdir",cnt:t[4].length},preventFail:!0}).fail(function(e){e=e||["errUnknown"],"errCmdParams"===e[0]?h=1:(h=0,b.reject(e))}).done(function(n){n.hashes&&(t[1]=e.map(t[1],function(e){return e=e.replace(/\/[^\/]*$/,""),""===e?d:n.hashes[e]}))}).always(function(e){h&&(E=t[2],F=t[3],R(t[0],t[1]))});t[1]=e.map(t[1],function(){return d}),E=t[2],F=t[3],R(t[0],t[1])}else b.reject(["errUploadNoFiles"])}).fail(function(){b.reject()});else if(w.length>0)if(t.clipdata||null!=E)R(w)||b.reject();else{var H=[],q=[],_=n.options.folderUploadExclude[n.OS]||null;e.each(w,function(t,n){var i,a,o=n.webkitRelativePath||n.relativePath||"";return!!o&&(_&&n.name.match(_)?(n._remove=!0,o=void 0):(o=o.replace(/\/[^\/]*$/,""),o&&e.inArray(o,H)===-1&&(H.push(o),i=o.indexOf("/"),i!==-1&&(a=o.substr(0,i))&&e.inArray(a,H)===-1&&H.unshift(a))),void q.push(o))}),E=[],F={},H.length?!function(){var t=e.map(H,function(e){return e.indexOf("/")===-1?{name:e}:null}),i=[];n.uploads.checkExists(t,d,n,!0).done(function(a,o){var r,s,l,p=[];n.options.overwriteUploadConfirm&&n.option("uploadOverwrite",d)&&(i=e.map(t,function(e){return e._remove?e.name:null}),t=e.grep(t,function(e){return!e._remove})),i.length&&e.each(q.concat(),function(t,n){0===e.inArray(n,i)&&(w[t]._remove=!0,delete q[t])}),w=e.grep(w,function(e){return!e._remove}),q=e.grep(q,function(e){return void 0!==e}),t.length?(r=e.Deferred(),a.length?e.each(a,function(t,i){s=n.uniqueName(i+n.options.backupSuffix,null,""),e.each(o,function(e,t){if(a[0]==t)return l=e,!1}),l||(l=n.fileByName(a[0],d).hash),n.lockfiles({files:[l]}),p.push(n.request({data:{cmd:"rename",target:l,name:s},notify:{type:"rename",cnt:1}}).fail(function(e){b.reject(e),n.sync()}).always(function(){n.unlockfiles({files:[l]})}))}):p.push(null),e.when.apply(e,p).done(function(){n.request({data:{cmd:"mkdir",target:d,dirs:H},notify:{type:"mkdir",cnt:H.length},preventFail:!0}).fail(function(e){e=e||["errUnknown"],"errCmdParams"===e[0]?h=1:(h=0,b.reject(e))}).done(function(t){t.hashes&&(q=e.map(q.concat(),function(e){return""===e?d:t.hashes["/"+e]}))}).always(function(e){h&&(c=!0,R(w,q)||b.reject())})})):b.reject()})}():n.uploads.checkExists(w,d,n).done(function(i,a){n.options.overwriteUploadConfirm&&n.option("uploadOverwrite",d)&&(F=a,null===i?t.overwrite=0:E=i,w=e.grep(w,function(e){return!e._remove})),x=w.length,x>0?R(w)||b.reject():b.reject()})}else b.reject();return b},iframe:function(t,n){var i,a,o,r,s=n?n:this,l=!!t.input&&t.input,c=!l&&s.uploads.checkFile(t,s),d=e.Deferred().fail(function(e){e&&s.error(e)}),p="iframe-"+n.namespace+ ++s.iframeCnt,u=e('<form action="'+s.uploadURL+'" method="post" enctype="multipart/form-data" encoding="multipart/form-data" target="'+p+'" style="display:none"><input type="hidden" name="cmd" value="upload" /></form>'),h=this.UA.IE,f=function(){r&&clearTimeout(r),o&&clearTimeout(o),a&&s.notify({type:"upload",cnt:-i}),setTimeout(function(){h&&e('<iframe src="javascript:false;"/>').appendTo(u),u.remove(),m.remove()},100)},m=e('<iframe src="'+(h?"javascript:false;":"about:blank")+'" name="'+p+'" style="position:absolute;left:-1000px;top:-1000px" />').on("load",function(){m.off("load").on("load",function(){f(),d.resolve()}),o=setTimeout(function(){a=!0,s.notify({type:"upload",cnt:i})},s.options.notifyDelay),s.options.iframeTimeout>0&&(r=setTimeout(function(){f(),d.reject([errors.connect,errors.timeout])},s.options.iframeTimeout)),u.submit()}),g=t.target||s.cwd().hash,v=[],b=[],y=[],w={};if(c&&c.length)e.each(c,function(e,t){u.append('<input type="hidden" name="upload[]" value="'+t+'"/>')}),i=1;else{if(!(l&&e(l).is(":file")&&e(l).val()))return d.reject();n.options.overwriteUploadConfirm&&n.option("uploadOverwrite",g)&&(v=l.files?l.files:[{name:e(l).val().replace(/^(?:.+[\\\/])?([^\\\/]+)$/,"$1")}],b.push(s.uploads.checkExists(v,g,s).done(function(n,a){w=a,null===n?t.overwrite=0:(y=n,i=e.grep(v,function(e){return!e._remove}).length,i!=v.length&&(i=0))}))),i=l.files?l.files.length:1,u.append(l)}return e.when.apply(e,b).done(function(){return i<1?d.reject():(u.append('<input type="hidden" name="'+(s.newAPI?"target":"current")+'" value="'+g+'"/>').append('<input type="hidden" name="html" value="1"/>').append('<input type="hidden" name="node" value="'+s.id+'"/>').append(e(l).attr("name","upload[]")),y.length>0&&(e.each(y,function(e,t){u.append('<input type="hidden" name="renames[]" value="'+s.escape(t)+'"/>')}),u.append('<input type="hidden" name="suffix" value="'+n.options.backupSuffix+'"/>')),w&&e.each(y,function(e,t){u.append('<input type="hidden" name="['+e+']" value="'+s.escape(t)+'"/>')}),0===t.overwrite&&u.append('<input type="hidden" name="overwrite" value="0"/>'),e.each(s.options.onlyMimes||[],function(e,t){u.append('<input type="hidden" name="mimes[]" value="'+s.escape(t)+'"/>')}),e.each(s.customData,function(e,t){u.append('<input type="hidden" name="'+e+'" value="'+s.escape(t)+'"/>')}),u.appendTo("body"),void m.appendTo("body"))}),d}},one:function(e,t){var n=this,i=e.toLowerCase(),a=function(e,o){return n.toUnbindEvents[i]||(n.toUnbindEvents[i]=[]),n.toUnbindEvents[i].push({type:i,callback:a}),t.apply(this,arguments)};return this.bind(i,a)},localStorage:function(t,n){var i,a,o,r,s,l=this,c=window.localStorage,d="elfinder-"+(t||"")+this.id,p=window.location.pathname+"-elfinder-",u=this.id,h=[];if("undefined"==typeof t)return r=p.length,s=u.length*-1,e.each(c,function(e){e.substr(0,r)===p&&e.substr(s)===u&&h.push(e)}),e.each(h,function(e,t){c.removeItem(t)}),!0;if(t=p+t+u,null===n)return c.removeItem(t);if(void 0===n&&!(i=c.getItem(t))&&(a=c.getItem(d))&&(n=a,c.removeItem(d)),void 0!==n){o=typeof n,"string"!==o&&"number"!==o&&(n=JSON.stringify(n));try{c.setItem(t,n)}catch(f){try{c.clear(),c.setItem(t,n)}catch(f){l.debug("error",f.toString())}}i=c.getItem(t)}if(i&&("{"===i.substr(0,1)||"["===i.substr(0,1)))try{return JSON.parse(i)}catch(f){}return i},cookie:function(t,n){var i,a,o,r,s,l;if(t="elfinder-"+t+this.id,void 0===n){if(document.cookie&&""!=document.cookie)for(o=document.cookie.split(";"),t+="=",r=0;r<o.length;r++)if(o[r]=e.trim(o[r]),o[r].substring(0,t.length)==t){if(s=decodeURIComponent(o[r].substring(t.length)),"{"===s.substr(0,1)||"["===s.substr(0,1))try{return JSON.parse(s)}catch(c){}return s}return null}if(a=Object.assign({},this.options.cookie),null===n?(n="",a.expires=-1):(l=typeof n,"string"!==l&&"number"!==l&&(n=JSON.stringify(n))),"number"==typeof a.expires&&(i=new Date,i.setTime(i.getTime()+864e5*a.expires),a.expires=i),document.cookie=t+"="+encodeURIComponent(n)+"; expires="+a.expires.toUTCString()+(a.path?"; path="+a.path:"")+(a.domain?"; domain="+a.domain:"")+(a.secure?"; secure":""),n&&("{"===n.substr(0,1)||"["===n.substr(0,1)))try{return JSON.parse(n)}catch(c){}return n},startDir:function(){var e=window.location.hash;return e&&e.match(/^#elf_/)?e.replace(/^#elf_/,""):this.options.startPathHash?this.options.startPathHash:this.lastDir()},lastDir:function(e){return this.options.rememberLastDir?this.storage("lastdir",e):""},_node:e("<span/>"),escape:function(e){return this._node.text(e).html().replace(/"/g,"&quot;").replace(/'/g,"&#039;")},normalize:function(t){var n,i,a,o,r,s=this,l=function(){var e,t;return(t=s.options.fileFilter)&&("function"==typeof t?e=function(e){return t.call(s,e)}:t instanceof RegExp&&(e=function(e){return t.test(e.name)})),e?e:null}(),c=function(t){var n;t.uiCmdMap&&(e.isPlainObject(t.uiCmdMap)&&Object.keys(t.uiCmdMap).length?(t.disabledFlip||(t.disabledFlip={}),n=t.disabledFlip,e.each(t.uiCmdMap,function(e,i){"hidden"!==i||n[e]||(t.disabled.push(e),t.disabledFlip[e]=!0)})):delete t.uiCmdMap)},d=function(t){var n=function(e){var t=typeof e;return"object"===t&&Array.isArray(e)&&(t="array"),t};return e.each(s.optionProperties,function(e,i){void 0!==i&&t[e]&&n(t[e])!==n(i)&&(t[e]=i)}),t.disabled?t.disabledFlip=s.arrayFlip(t.disabled,!0):t.disabledFlip={},t},p=function(t,r,p){var u,h,m,g,v=!r||t,b=!!r&&null;if(t&&t.hash&&t.name&&t.mime){if("application/x-empty"===t.mime&&(t.mime="text/plain"),m=s.isRoot(t),m&&!t.volumeid&&s.debug("warning","The volume root statuses requires `volumeid` property."),m||"directory"===t.mime){if(t.phash){if(t.phash===t.hash)return f=f.concat(['Parent folder of "$1" is itself.',t.name]),b;if(m&&t.volumeid&&0===t.phash.indexOf(t.volumeid))return f=f.concat(['Parent folder of "$1" is inner itself.',t.name]),b}t.volumeid&&(u=t.volumeid,m&&(t.phash&&(s.leafRoots[t.phash]?e.inArray(t.hash,s.leafRoots[t.phash])===-1&&s.leafRoots[t.phash].push(t.hash):s.leafRoots[t.phash]=[t.hash]),s.hasVolOptions=!0,s.volOptions[u]||(s.volOptions[u]={dispInlineRegex:s.options.dispInlineRegex}),h=s.volOptions[u],t.options&&Object.assign(h,t.options),t.disabled&&(h.disabled=t.disabled,h.disabledFlip=s.arrayFlip(t.disabled,!0)),t.tmbUrl&&(h.tmbUrl=t.tmbUrl),h.url&&"/"!==h.url.substr(-1)&&(h.url+="/"),c(h),h.trashHash&&(s.trashes[h.trashHash]===!1?delete h.trashHash:s.trashes[h.trashHash]=t.hash),e.each(s.optionProperties,function(e){h[e]&&(t[e]=h[e])}),"cwd"!==p&&(s.roots[u]=t.hash)),o!==u&&(o=u,a=s.option("i18nFolderName",u))),m&&!t.i18&&(n="volume_"+t.name,i=s.i18n(!1,n),n!==i&&(t.i18=i)),a&&!t.i18&&(n="folder_"+t.name,i=s.i18n(!1,n),n!==i&&(t.i18=i)),m&&(g=s.storage("rootNames"))&&(g[t.hash]&&(t._name=t.name,t._i18=t.i18,t.name=g[t.hash]=g[t.hash],delete t.i18),s.storage("rootNames",g)),s.trashes[t.hash]&&(t.locked=!0)}else if(l)try{if(!l(t))return b}catch(y){s.debug(y)}return t.options&&(s.optionsByHashes[t.hash]=d(t.options)),delete t.options,v}return b},u=function(t){var n=[];return e.each(s.files(),function(i,a){e.each(s.parents(i),function(a,o){if(e.inArray(o,t)!==-1&&e.inArray(i,t)===-1)return n.push(i),!1})}),n},h=function(n,i){e.each(n,function(n,a){var o,r;s.leafRoots[a.hash]&&s.applyLeafRootStats(a),"change"!==i&&a.phash&&s.isRoot(a)&&(o=s.file(a.phash))&&(s.applyLeafRootStats(o),t.changed?(e.each(t.changed,function(e,n){if(n.hash===o.hash)return t.changed[e]=o,r=!0,!1}),r||t.changed.push(o)):t.changed=[o])})},f=[];if(t.customData&&t.customData!==s.prevCustomData){s.prevCustomData=t.customData;try{r=JSON.parse(t.customData),e.isPlainObject(r)&&(s.prevCustomData=r,e.each(Object.keys(r),function(e,t){null===r[t]&&(delete r[t],delete s.optsCustomData[t])}),s.customData=Object.assign({},s.optsCustomData,r))}catch(m){}}return t.options&&d(t.options),t.cwd&&(t.cwd.volumeid&&t.options&&Object.keys(t.options).length&&s.isRoot(t.cwd)&&(s.hasVolOptions=!0,s.volOptions[t.cwd.volumeid]=t.options),t.cwd=p(t.cwd,!0,"cwd")),t.files&&(t.files=e.grep(t.files,p)),t.tree&&(t.tree=e.grep(t.tree,p)),t.added&&(t.added=e.grep(t.added,p)),t.changed&&(t.changed=e.grep(t.changed,p)),t.removed&&t.removed.length&&2===s.searchStatus.state&&(t.removed=t.removed.concat(u(t.removed))),t.api&&(t.init=!0),Object.keys(s.leafRoots).length&&(t.files&&h(t.files),t.tree&&h(t.tree),t.added&&h(t.added),t.changed&&h(t.changed,"change")),t.cwd&&t.cwd.options&&t.options&&Object.assign(t.options,d(t.cwd.options)),t.options&&t.options.url&&"/"!==t.options.url.substr(-1)&&(t.options.url+="/"),f.length&&(t.norError=["errResponse"].concat(f)),t},setSort:function(e,t,n,i){this.storage("sortType",this.sortType=this.sortRules[e]?e:"name"),this.storage("sortOrder",this.sortOrder=/asc|desc/.test(t)?t:"asc"),this.storage("sortStickFolders",(this.sortStickFolders=!!n)?1:""),this.storage("sortAlsoTreeview",(this.sortAlsoTreeview=!!i)?1:""),this.trigger("sortchange")},_sortRules:{name:function(e,t){return i.prototype.naturalCompare(e.i18||e.name,t.i18||t.name)},size:function(e,t){var n=parseInt(e.size)||0,i=parseInt(t.size)||0;return n===i?0:n>i?1:-1},kind:function(e,t){return i.prototype.naturalCompare(e.mime,t.mime)},date:function(e,t){var n=e.ts||e.date||0,i=t.ts||t.date||0;return n===i?0:n>i?1:-1},perm:function(e,t){var n=function(e){return(e.write?2:0)+(e.read?1:0)},i=n(e),a=n(t);return i===a?0:i>a?1:-1},mode:function(e,t){var n=e.mode||e.perm||"",a=t.mode||t.perm||"";return i.prototype.naturalCompare(n,a)},owner:function(e,t){var n=e.owner||"",a=t.owner||"";return i.prototype.naturalCompare(n,a)},group:function(e,t){var n=e.group||"",a=t.group||"";return i.prototype.naturalCompare(n,a)}},sorters:[],naturalCompare:function(e,t){var n=i.prototype.naturalCompare;return"undefined"==typeof n.loc&&(n.loc=navigator.userLanguage||navigator.browserLanguage||navigator.language||"en-US"),"undefined"==typeof n.sort&&("11".localeCompare("2",n.loc,{numeric:!0})>0?window.Intl&&window.Intl.Collator?n.sort=new Intl.Collator(n.loc,{numeric:!0}).compare:n.sort=function(e,t){return e.localeCompare(t,n.loc,{numeric:!0})}:(n.sort=function(e,t){var i,a,o=/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,r=/(^[ ]*|[ ]*$)/g,s=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,l=/^0x[0-9a-f]+$/i,c=/^0/,d=/^[\x01\x21-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e]/,p=function(e){return n.sort.insensitive&&(""+e).toLowerCase()||""+e},u=p(e).replace(r,"").replace(/^_/,"")||"",h=p(t).replace(r,"").replace(/^_/,"")||"",f=u.replace(o,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),m=h.replace(o,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),g=parseInt(u.match(l))||1!=f.length&&u.match(s)&&Date.parse(u),v=parseInt(h.match(l))||g&&h.match(s)&&Date.parse(h)||null,b=0;if(v){if(g<v)return-1;if(g>v)return 1}for(var y=0,w=Math.max(f.length,m.length);y<w;y++){if(i=!(f[y]||"").match(c)&&parseFloat(f[y])||f[y]||0,a=!(m[y]||"").match(c)&&parseFloat(m[y])||m[y]||0,isNaN(i)!==isNaN(a)){if(isNaN(i)&&("string"!=typeof i||!i.match(d)))return 1;if("string"!=typeof a||!a.match(d))return-1}if(0===parseInt(i,10)&&(i=0),0===parseInt(a,10)&&(a=0),typeof i!=typeof a&&(i+="",a+=""),n.sort.insensitive&&"string"==typeof i&&"string"==typeof a&&(b=i.localeCompare(a,n.loc),0!==b))return b;if(i<a)return-1;if(i>a)return 1}return 0},n.sort.insensitive=!0)),n.sort(e,t)},compare:function(e,t){var n,i=this,a=i.sortType,o="asc"==i.sortOrder,r=i.sortStickFolders,s=i.sortRules,l=s[a],c="directory"==e.mime,d="directory"==t.mime;if(r){if(c&&!d)return-1;if(!c&&d)return 1}return n=o?l(e,t):l(t,e),"name"!==a&&0===n?n=o?s.name(e,t):s.name(t,e):n},sortFiles:function(e){return e.sort(this.compare)},notify:function(t){var n,i,a,o=t.type,r=t.id?"elfinder-notify-"+t.id:"",s=this.i18n("undefined"!=typeof t.msg?t.msg:this.messages["ntf"+o]?"ntf"+o:"ntfsmth"),l=this.ui.notify,c=l.children(".elfinder-notify-"+o+(r?"."+r:"")),d=c.children("div.elfinder-notify-cancel").children("button"),p='<div class="elfinder-notify elfinder-notify-{type}'+(r?" "+r:"")+'"><span class="elfinder-dialog-icon elfinder-dialog-icon-{type}"/><span class="elfinder-notify-msg">{msg}</span> <span class="elfinder-notify-cnt"/><div class="elfinder-notify-progressbar"><div class="elfinder-notify-progress"/></div><div class="elfinder-notify-cancel"/></div>',u=t.cnt,h="undefined"!=typeof t.size?parseInt(t.size):null,f="undefined"!=typeof t.progress&&t.progress>=0?t.progress:null,m=t.cancel,g="ui-state-hover",v=function(){c._esc&&e(document).off("keydown",c._esc),c.remove(),!l.children().length&&l.elfinderdialog("close")};return o?(c.length?"undefined"!=typeof t.msg&&c.children("span.elfinder-notify-msg").html(s):(c=e(p.replace(/\{type\}/g,o).replace(/\{msg\}/g,s)).appendTo(l).data("cnt",0),null!=f&&c.data({progress:0,total:0}),m&&(d=e('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">'+this.i18n("btnCancel")+"</span></button>").on("mouseenter mouseleave",function(t){
e(this).toggleClass(g,"mouseenter"===t.type)}),c.children("div.elfinder-notify-cancel").append(d))),n=u+parseInt(c.data("cnt")),n>0?(m&&d.length&&(e.isFunction(m)||"object"==typeof m&&m.promise)&&(c._esc=function(t){"keydown"==t.type&&t.keyCode!=e.ui.keyCode.ESCAPE||(t.preventDefault(),t.stopPropagation(),v(),m.promise?m.reject(0):m(t))},d.on("click",function(e){c._esc(e)}),e(document).on("keydown."+this.namespace,c._esc)),!t.hideCnt&&c.children(".elfinder-notify-cnt").text("("+n+")"),l.is(":hidden")&&l.elfinderdialog("open",this).height("auto"),c.data("cnt",n),null!=f&&(i=c.data("total"))>=0&&(a=c.data("progress"))>=0&&(i+=null!=h?h:u,a+=f,null==h&&u<0&&(a+=100*u),c.data({progress:a,total:i}),null!=h&&(a*=100,i=Math.max(1,i)),f=parseInt(a/i),c.find(".elfinder-notify-progress").animate({width:(f<100?f:100)+"%"},20))):v(),this):this},confirm:function(t){var n,i,a=this,o=!1,r={cssClass:"elfinder-dialog-confirm",modal:!0,resizable:!1,title:this.i18n(t.title||"confirmReq"),buttons:{},close:function(){!o&&t.cancel.callback(),e(this).elfinderdialog("destroy")}},s=this.i18n("apllyAll");return t.cssClass&&(r.cssClass+=" "+t.cssClass),r.buttons[this.i18n(t.accept.label)]=function(){t.accept.callback(!(!n||!n.prop("checked"))),o=!0,e(this).elfinderdialog("close")},r.buttons[this.i18n(t.accept.label)]._cssClass="elfinder-confirm-accept",t.reject&&(r.buttons[this.i18n(t.reject.label)]=function(){t.reject.callback(!(!n||!n.prop("checked"))),o=!0,e(this).elfinderdialog("close")},r.buttons[this.i18n(t.reject.label)]._cssClass="elfinder-confirm-reject"),t.buttons&&t.buttons.length>0&&(i=1,e.each(t.buttons,function(t,s){r.buttons[a.i18n(s.label)]=function(){s.callback(!(!n||!n.prop("checked"))),o=!0,e(this).elfinderdialog("close")},r.buttons[a.i18n(s.label)]._cssClass="elfinder-confirm-extbtn"+i++,s.cssClass&&(r.buttons[a.i18n(s.label)]._cssClass+=" "+s.cssClass)})),r.buttons[this.i18n(t.cancel.label)]=function(){e(this).elfinderdialog("close")},r.buttons[this.i18n(t.cancel.label)]._cssClass="elfinder-confirm-cancel",t.all&&(r.create=function(){var t=e('<div class="elfinder-dialog-confirm-applyall"/>');n=e('<input type="checkbox" />'),e(this).next().find(".ui-dialog-buttonset").prepend(t.append(e("<label>"+s+"</label>").prepend(n)))}),t.optionsCallback&&e.isFunction(t.optionsCallback)&&t.optionsCallback(r),this.dialog('<span class="elfinder-dialog-icon elfinder-dialog-icon-confirm"/>'+this.i18n(t.text),r)},uniqueName:function(e,t,n){var i,a,o=0,r="";if(e=this.i18n(!1,e),t=t||this.cwd().hash,n="undefined"==typeof n?" ":n,(i=e.match(/^(.+)(\.[^.]+)$/))&&(r=i[2],e=i[1]),a=e+r,!this.fileByName(a,t))return a;for(;o<1e4;)if(a=e+n+ ++o+r,!this.fileByName(a,t))return a;return e+Math.random()+r},i18n:function(){var t,n,i,a,o=this,r=this.messages,s=[],l=[],c=function(e){var t;return 0===e.indexOf("#")&&(t=o.file(e.substr(1)))?t.name:e},d=0;for(arguments.length&&arguments[0]===!1&&(a=function(e){return e},d=1),t=d;t<arguments.length;t++)if(i=arguments[t],Array.isArray(i))for(n=0;n<i.length;n++)i[n]instanceof jQuery?s.push(i[n]):"undefined"!=typeof i[n]&&s.push(c(""+i[n]));else i instanceof jQuery?s.push(i[n]):"undefined"!=typeof i&&s.push(c(""+i));for(t=0;t<s.length;t++)e.inArray(t,l)===-1&&(i=s[t],"string"==typeof i?(i=r[i]||(a?a(i):o.escape(i)),i=i.replace(/\$(\d+)/g,function(e,n){return n=t+parseInt(n),n>0&&s[n]&&l.push(n),a?a(s[n]):o.escape(s[n])})):i=i.get(0).outerHTML,s[t]=i);return e.grep(s,function(t,n){return e.inArray(n,l)===-1}).join("<br>")},getIconStyle:function(t,n){var i=this,a={background:"url('{url}') 0 0 no-repeat","background-size":"contain"},o="",r={},s=0;return t.icon&&(o='style="',e.each(a,function(e,a){0===s++&&(a=a.replace("{url}",i.escape(t.icon))),n?r[e]=a:o+=e+":"+a+";"}),o+='"'),n?r:o},mime2class:function(e){var t="elfinder-cwd-icon-",n=e.toLowerCase(),i=this.textMimes[n];return n=n.split("/"),i&&(n[0]+=" "+t+"text"),t+n[0]+(n[1]?" "+t+n[1].replace(/(\.|\+)/g,"-"):"")},mime2kind:function(e){var t,n="object"==typeof e,i=n?e.mime:e;return n&&e.alias&&"symlink-broken"!=i?t="Alias":this.kinds[i]&&(t=!n||"directory"!==i||e.phash&&!e.isroot?this.kinds[i]:"Root"),t||(t=0===i.indexOf("text")?"Text":0===i.indexOf("image")?"Image":0===i.indexOf("audio")?"Audio":0===i.indexOf("video")?"Video":0===i.indexOf("application")?"App":i),this.messages["kind"+t]?this.i18n("kind"+t):i},mimeIsText:function(e){return!!(this.textMimes[e]||0===e.indexOf("text/")&&"rtf"!==e.substr(5,3))},date:function(e,t){var n,i,a,o,r,s,l,c,d,p=this;return t||(t=new Date),s=t[p.getHours](),l=s>12?s-12:s,c=t[p.getMinutes](),d=t[p.getSeconds](),i=t[p.getDate](),a=t[p.getDay](),o=t[p.getMonth]()+1,r=t[p.getFullYear](),n=e.replace(/[a-z]/gi,function(e){switch(e){case"d":return i>9?i:"0"+i;case"j":return i;case"D":return p.i18n(p.i18.daysShort[a]);case"l":return p.i18n(p.i18.days[a]);case"m":return o>9?o:"0"+o;case"n":return o;case"M":return p.i18n(p.i18.monthsShort[o-1]);case"F":return p.i18n(p.i18.months[o-1]);case"Y":return r;case"y":return(""+r).substr(2);case"H":return s>9?s:"0"+s;case"G":return s;case"g":return l;case"h":return l>9?l:"0"+l;case"a":return s>=12?"pm":"am";case"A":return s>=12?"PM":"AM";case"i":return c>9?c:"0"+c;case"s":return d>9?d:"0"+d}return e})},formatDate:function(e,t){var n,i,a,o=this,r=t||e.ts;o.i18;return o.options.clientFormatDate&&r>0?(n=new Date(1e3*r),i=r>=this.yesterday?this.fancyFormat:this.dateFormat,a=o.date(i,n),r>=this.yesterday?a.replace("$1",this.i18n(r>=this.today?"Today":"Yesterday")):a):e.date?e.date.replace(/([a-z]+)\s/i,function(e,t){return o.i18n(t)+" "}):o.i18n("dateUnknown")},toLocaleString:function(e){var t=new Number(e);return t?t.toLocaleString?t.toLocaleString():String(e).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"):e},perms2class:function(e){var t="";return e.read||e.write?e.read?e.write||(t="elfinder-ro"):t="elfinder-wo":t="elfinder-na",e.type&&(t+=" elfinder-"+this.escape(e.type)),t},formatPermissions:function(e){var t=[];return e.read&&t.push(this.i18n("read")),e.write&&t.push(this.i18n("write")),t.length?t.join(" "+this.i18n("and")+" "):this.i18n("noaccess")},formatSize:function(e){var t=1,n="b";return"unknown"==e?this.i18n("unknown"):(e>1073741824?(t=1073741824,n="GB"):e>1048576?(t=1048576,n="MB"):e>1024&&(t=1024,n="KB"),e/=t,(e>0?t>=1048576?e.toFixed(2):Math.round(e):0)+" "+n)},formatFileMode:function(t,n){var i,a,o,r,s,l,c,d,p;if(n||(n=this.options.fileModeStyle.toLowerCase()),t=e.trim(t),t.match(/[rwxs-]{9}$/i)){if(d=t=t.substr(-9),"string"==n)return d;for(p="",o=0,i=0;i<7;i+=3)a=t.substr(i,3),r=0,a.match(/[r]/i)&&(r+=4),a.match(/[w]/i)&&(r+=2),a.match(/[xs]/i)&&(a.match(/[xs]/)&&(r+=1),a.match(/[s]/i)&&(0==i?o+=4:3==i&&(o+=2))),p+=r.toString(8);o&&(p=o.toString(8)+p)}else{if(t=parseInt(t,8),p=t?t.toString(8):"",!t||"octal"==n)return p;for(a=t.toString(8),o=0,a.length>3&&(a=a.substr(-4),o=parseInt(a.substr(0,1),8),a=a.substr(1)),s=1==(1&o),c=2==(2&o),l=4==(4&o),d="",i=0;i<3;i++)d+=4==(4&parseInt(a.substr(i,1),8))?"r":"-",d+=2==(2&parseInt(a.substr(i,1),8))?"w":"-",d+=1==(1&parseInt(a.substr(i,1),8))?0==i&&l||1==i&&c?"s":"x":"-"}return"both"==n?d+" ("+p+")":"string"==n?d:p},registRawStringDecoder:function(t){e.isFunction(t)&&(this.decodeRawString=this.options.rawStringDecoder=t)},uploadMimeCheck:function(t,n){n=n||this.cwd().hash;var i,a,o=!0,r=this.option("uploadMime",n),s=function(n){var i=!1;return"string"==typeof n&&"all"===n.toLowerCase()?i=!0:Array.isArray(n)&&n.length&&e.each(n,function(e,n){if(n=n.toLowerCase(),"all"===n||0===t.indexOf(n))return i=!0,!1}),i};return t&&e.isPlainObject(r)&&(t=t.toLowerCase(),i=s(r.allow),a=s(r.deny),"allow"===r.firstOrder?(o=!1,a||i!==!0||(o=!0)):(o=!0,a!==!0||i||(o=!1))),o},sequence:function(e){var t=e.length,n=function(t,i){return++i,e[i]?n(t.then(e[i]),i):t};return t>1?n(e[0](),0):e[0]()},reloadContents:function(t){var n,i=e.Deferred();try{n=e('<iframe width="1" height="1" scrolling="no" frameborder="no" style="position:absolute; top:-1px; left:-1px" crossorigin="use-credentials">').attr("src",t).one("load",function(){var n=e(this);try{this.contentDocument.location.reload(!0),n.one("load",function(){n.remove(),i.resolve()})}catch(a){n.attr("src","").attr("src",t).one("load",function(){n.remove(),i.resolve()})}}).appendTo("body")}catch(a){n&&n.remove(),i.reject()}return i},makeNetmountOptionOauth:function(t,n,i,a){var o,r="boolean"==typeof a?a:null,s=Object.assign({noOffline:!1,root:"root",pathI18n:"folderId",folders:!0},null===r?a||{}:{noOffline:r}),l=function(n,a,r){var d,p=this,u=Object.keys(e.isPlainObject(r)?r:{}).length;a.next().remove(),u&&(d=e('<select class="ui-corner-all elfinder-tabstop" style="max-width:200px;">').append(e(e.map(r,function(e,t){return'<option value="'+n.escape((t+"").trim())+'">'+n.escape(e)+"</option>"}).join(""))).on("change click",function(a){var r,d=e(this),u=d.val();p.inputs.path.val(u),!s.folders||"change"!==a.type&&d.data("current")===u||(d.next().remove(),d.data("current",u),u!=s.root&&(r=c(),o&&"pending"===o.state()&&n.abortXHR(o,{quiet:!0,abort:!0}),d.after(r),o=n.request({data:{cmd:"netmount",protocol:t,host:i,user:"init",path:u,pass:"folders"},preventDefault:!0}).done(function(e){l.call(p,n,d,e.folders)}).always(function(){n.abortXHR(o,{quiet:!0}),r.remove()}).xhr))}),a.after(e("<div/>").append(d)).closest(".ui-dialog").trigger("tabstopsInit"),d.trigger("focus"))},c=function(){return e('<div class="elfinder-netmount-spinner"/>').append('<span class="elfinder-info-spinner"/>')};return{vars:{},name:n,inputs:{offline:e('<input type="checkbox"/>').on("change",function(){e(this).parents("table.elfinder-netmount-tb").find("select:first").trigger("change","reset")}),host:e('<span><span class="elfinder-info-spinner"/></span><input type="hidden"/>'),path:e('<input type="text" value="'+s.root+'"/>'),user:e('<input type="hidden"/>'),pass:e('<input type="hidden"/>')},select:function(n,a,o){var r=this.inputs,l=r.offline,c=e(r.host[0]),d=o||null;this.vars.mbtn=r.host.closest(".ui-dialog").children(".ui-dialog-buttonpane:first").find("button.elfinder-btncnt-0"),c.data("inrequest")||!c.find("span.elfinder-info-spinner").length&&"reset"!==d&&("winfocus"!==d||c.siblings("span.elfinder-button-icon-reload").length)?(l.closest("tr")[s.noOffline||r.user.val()?"hide":"show"](),c.data("funcexpup")&&c.data("funcexpup")()):(1===l.parent().children().length&&(r.path.parent().prev().html(n.i18n(s.pathI18n)),l.attr("title",n.i18n("offlineAccess")),l.uniqueId().after(e("<label/>").attr("for",l.attr("id")).html(" "+n.i18n("offlineAccess")))),c.data("inrequest",!0).empty().addClass("elfinder-info-spinner").parent().find("span.elfinder-button-icon").remove(),n.request({data:{cmd:"netmount",protocol:t,host:i,user:"init",options:{id:n.id,offline:l.prop("checked")?1:0,pass:r.host[1].value}},preventDefault:!0}).done(function(e){c.removeClass("elfinder-info-spinner").html(e.body.replace(/\{msg:([^}]+)\}/g,function(e,t){return n.i18n(t,i)}))}),s.noOffline&&l.closest("tr").hide()),this.vars.mbtn[e(r.host[1]).val()?"show":"hide"]()},done:function(n,a){var o=this.inputs,r=this.protocol,c=e(o.host[0]),d=e(o.host[1]),p="&nbsp;";if(s.noOffline&&o.offline.closest("tr").hide(),"makebtn"==a.mode)c.removeClass("elfinder-info-spinner").removeData("expires").removeData("funcexpup"),o.host.find("input").on("mouseenter mouseleave",function(){e(this).toggleClass("ui-state-hover")}),d.val(""),o.path.val(s.root).next().remove(),o.user.val(""),o.pass.val(""),!s.noOffline&&o.offline.closest("tr").show(),this.vars.mbtn.hide();else if("folders"==a.mode)a.folders&&l.call(this,n,o.path.nextAll(":last"),a.folders);else{if(a.expires&&(p="()",c.data("expires",a.expires)),c.html(i+p).removeClass("elfinder-info-spinner"),a.expires&&(c.data("funcexpup",function(){var e=Math.floor((c.data("expires")-+new Date/1e3)/60);e<3?c.parent().children(".elfinder-button-icon-reload").click():(c.text(c.text().replace(/\(.*\)/,"("+n.i18n(["minsLeft",e])+")")),setTimeout(function(){c.is(":visible")&&c.data("funcexpup")()},6e4))}),c.data("funcexpup")()),a.reset)return void r.trigger("change","reset");c.parent().append(e('<span class="elfinder-button-icon elfinder-button-icon-reload" title="'+n.i18n("reAuth")+'">').on("click",function(){d.val("reauth"),r.trigger("change","reset")})),d.val(t),this.vars.mbtn.show(),a.folders&&l.call(this,n,o.path,a.folders),o.user.val("done"),o.pass.val("done"),o.offline.closest("tr").hide()}c.removeData("inrequest")},fail:function(t,n){e(this.inputs.host[0]).removeData("inrequest"),this.protocol.trigger("change","reset")}}},findCwdNodes:function(t,n){var i=this,a=this.getUI("cwd"),o=this.cwd().hash,r=e();return n=n||{},e.each(t,function(e,t){if((t.phash===o||i.searchStatus.state>1)&&(r=r.add(a.find("#"+i.cwdHash2Id(t.hash))),n.firstOnly))return!1}),r},convAbsUrl:function(e){if(e.match(/^http/i))return e;if("//"===e.substr(0,2))return window.location.protocol+e;var t,n=window.location.protocol+"//"+window.location.host,i=/[^\/]+\/\.\.\//;for(t="/"===e.substr(0,1)?n+e:n+window.location.pathname.replace(/\/[^\/]+$/,"/")+e,t=t.replace("/./","/");i.test(t);)t=t.replace(i,"");return t},isSameOrigin:function(e){var t;if(e=this.convAbsUrl(e),location.origin&&window.URL)try{return t=new URL(e),location.origin===t.origin}catch(n){}return t=document.createElement("a"),t.href=e,location.protocol===t.protocol&&location.host===t.host&&location.port&&t.port},navHash2Id:function(e){return this.navPrefix+e},navId2Hash:function(e){return"string"==typeof e&&e.substr(this.navPrefix.length)},cwdHash2Id:function(e){return this.cwdPrefix+e},cwdId2Hash:function(e){return"string"==typeof e&&e.substr(this.cwdPrefix.length)},isInWindow:function(e,t){var n,i;return!!(n=e.get(0))&&(!(!t&&null===n.offsetParent)&&(i=n.getBoundingClientRect(),!!document.elementFromPoint(i.left,i.top)))},zIndexCalc:function(){var t=this,n=this.getUI(),i=n.css("z-index");i&&"auto"!==i&&"inherit"!==i?t.zIndex=i:n.parents().each(function(n,i){var a=e(i).css("z-index");if("auto"!==a&&"inherit"!==a&&(a=parseInt(a)))return t.zIndex=a,!1})},loadScript:function(t,n,i,a){var o,r,s={dataType:"script",cache:!0},l={},c={};return i=i||{},i.tryRequire&&this.hasRequire?require(t,n,i.error):(o=function(){var t,o,r;e.each(c,function(e,t){if("success"!==t&&"notmodified"!==t)return r=!0,!1}),r?i.error&&e.isFunction(i.error)&&i.error({loadResults:c}):e.isFunction(n)&&(a&&"undefined"==typeof a.obj[a.name]?(t=a.timeout?a.timeout/10:1,o=setInterval(function(){(--t<0||"undefined"!=typeof a.obj[a.name])&&(clearInterval(o),n())},10)):n())},"tag"===i.loadType?(e("head > script").each(function(){l[this.src]=this}),r=t.length,e.each(t,function(t,n){var a,s=!1;l[n]?(c[t]=l[n]._error||"success",--r<1&&o()):(a=document.createElement("script"),a.charset=i.charset||"UTF-8",e("head").append(a),a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(s=!0,c[t]="success",--r<1&&o())},a.onerror=function(e){c[t]=a._error=e&&e.type?e.type:"error",--r<1&&o()},a.src=n)})):(i=e.isPlainObject(i)?Object.assign(s,i):s,r=0,function d(n,a){void 0!==n&&(c[r++]=a),t.length?e.ajax(Object.assign({},i,{url:t.shift(),success:d,error:d})):o()}())),this},loadCss:function(t){var n=this;return"string"==typeof t&&(t=[t]),e.each(t,function(t,i){i=n.convAbsUrl(i).replace(/^https?:/i,""),e("head > link[href='+url+']").length||e("head").append('<link rel="stylesheet" type="text/css" href="'+i+'" />')}),this},asyncJob:function(t,n,i){var a,o,r=e.Deferred(),s=!1,l=Object.assign({interval:0,numPerOnce:1},i||{}),c=[],d=[],p=[];return r._abort=function(e){o&&clearTimeout(o),d=[],s=!0,"pending"===r.state()&&r[e?"resolve":"reject"](c)},r.fail(function(){r._abort()}).always(function(){r._abort=function(){}}),"function"==typeof t&&Array.isArray(n)?(d=n.concat(),a=function(){s||(p=d.splice(0,l.numPerOnce),e.each(p,function(e,n){if(s)return!1;var i=t(n);null!==i&&c.push(i)}),s||(d.length?o=setTimeout(a,l.interval):r.resolve(c)))},d.length?o=setTimeout(a,0):r.resolve(c)):r.reject(),r},getSize:function(t){var n=this,i=[],a=e.Deferred().fail(function(){e.each(i,function(e,t){t&&(t.syncOnFail(!1),t.reject())})}),o=function(t){var i=[];return"directory"===t.mime&&e.each(n.leafRoots,function(e,a){var o;if(e===t.hash)i.push.apply(i,a);else for(o=(n.file(e)||{}).phash;o;)o===t.hash&&i.push.apply(i,a),o=(n.file(o)||{}).phash}),i},r=function(t){var i=e.Deferred(),a=n.file(t),o=a?a.phash:t;return o&&!n.file(o)?n.request({data:{cmd:"parents",target:o},preventFail:!0}).done(function(){n.one("parentsdone",function(){i.resolve()})}).fail(function(){i.resolve()}):i.resolve(),i},s=function(){var t=e.Deferred(),i=Object.keys(n.leafRoots).length;return i>0?e.each(n.leafRoots,function(e){r(e).done(function(){--i,i<1&&t.resolve()})}):t.resolve(),t};return n.autoSync("stop"),s().done(function(){var r=[],s={},l=[],c=[],d={};e.each(t,function(){r.push.apply(r,o(n.file(this)))}),t.push.apply(t,r),e.each(t,function(){var t=n.root(this),i=n.file(this);i&&(i.sizeInfo||"directory"!==i.mime)?c.push(e.Deferred().resolve(i.sizeInfo?i.sizeInfo:{size:i.size,dirCnt:0,fileCnt:1})):s[t]?s[t].push(this):s[t]=[this]}),e.each(s,function(){var e=l.length;1===this.length&&(d[e]=this[0]),l.push(n.request({data:{cmd:"size",targets:this},preventDefault:!0}))}),i.push.apply(i,l),l.push.apply(l,c),e.when.apply(e,l).fail(function(){a.reject()}).done(function(){var t,i,o,r=function(t,i){var a;(a=n.file(t))&&(a.sizeInfo={isCache:!0},e.each(["size","dirCnt","fileCnt"],function(){a.sizeInfo[this]=i[this]||0}),a.size=parseInt(a.sizeInfo.size),f.push(a))},s=0,l=0,c=0,p=arguments.length,u=[],h="",f=[];for(t=0;t<p;t++)o=arguments[t],i=null,o.isCache||(d[t]&&(i=n.file(d[t]))?r(d[t],o):o.sizes&&e.isPlainObject(o.sizes)&&e.each(o.sizes,function(e,t){r(e,t)})),s+=parseInt(o.size),l!==!1&&("undefined"==typeof o.fileCnt&&(l=!1),l+=parseInt(o.fileCnt||0)),c!==!1&&("undefined"==typeof o.dirCnt&&(c=!1),c+=parseInt(o.dirCnt||0));f.length&&n.change({changed:f}),c!==!1&&u.push(n.i18n("folders")+": "+c),l!==!1&&u.push(n.i18n("files")+": "+l),u.length&&(h="<br>"+u.join(", ")),a.resolve({size:s,fileCnt:l,dirCnt:c,formated:(s>=0?n.formatSize(s):n.i18n("unknown"))+h})}),n.autoSync()}),a},applyLeafRootStats:function(t,n){var i=this,a=n?t:i.file(t.hash)||t,o=a.ts,r=!1;return!n&&t._realStats||(t._realStats={locked:t.locked||0,dirs:t.dirs||0,ts:t.ts}),a.locked||(t.locked=1,r=!0),a.dirs||(t.dirs=1,r=!0),e.each(i.leafRoots[t.hash],function(){var e=i.file(this);e&&e.ts&&(t.ts||0)<e.ts&&(t.ts=e.ts)}),o!==t.ts&&(r=!0),r},abortXHR:function(e,t){var n=t||{};e&&(n.quiet&&(e.quiet=!0),n.abort&&e._requestId&&this.request({data:{cmd:"abort",id:e._requestId},preventDefault:!0}),e.abort(),e=void 0)},arrayFlip:function(t,n){var i,a={},o=e.isArray(t);for(i in t)(o||t.hasOwnProperty(i))&&(a[t[i]]=n||i);return a},splitFileExtention:function(e){var t;return(t=e.match(/^(.+?)?\.((?:tar\.(?:gz|bz|bz2|z|lzo))|cpio\.gz|ps\.gz|xcf\.(?:gz|bz2)|[a-z0-9]{1,4})$/i))?("undefined"==typeof t[1]&&(t[1]=""),[t[1],t[2]]):[e,""]},sliceArrayBuffer:function(e,t){for(var n=[],i=0;i*t<e.byteLength;)n.push(e.slice(i*t,(i+1)*t)),i++;return n},log:function(e){return window.console&&window.console.log&&window.console.log(e),this},debug:function(e,t){var n=this.options.debug;return n&&("all"===n||n[e])&&window.console&&window.console.log&&window.console.log("elfinder debug: ["+e+"] ["+this.id+"]",t),"backend-error"===e?(!this.cwd().hash||n&&("all"===n||n["backend-error"]))&&(t=Array.isArray(t)?t:[t],this.error(t)):"backend-debug"===e&&this.trigger("backenddebug",t),this},time:function(e){window.console&&window.console.time&&window.console.time(e)},timeEnd:function(e){window.console&&window.console.timeEnd&&window.console.timeEnd(e)}},Object.keys||(Object.keys=function(){var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=n.length;return function(a){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.keys called on non-object");var o=[];for(var r in a)e.call(a,r)&&o.push(r);if(t)for(var s=0;s<i;s++)e.call(a,n[s])&&o.push(n[s]);return o}}()),Array.isArray||(Array.isArray=function(e){return jQuery.isArray(e)}),Object.assign||(Object.assign=function(){return jQuery.extend.apply(null,arguments)}),String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");for(var n="",i=0;i<e;i++)n+=t;return n}),i.prototype.version="2.1.33",function(){if(e.ui&&e.ui.ddmanager){var t=e.ui.ddmanager.prepareOffsets;e.ui.ddmanager.prepareOffsets=function(n,i){var a=function(e){if(e.is(":hidden"))return!0;var t=e[0].getBoundingClientRect();return!document.elementFromPoint(t.left,t.top)};if("mousedown"===i.type||n.options.elfRefresh){var o,r,s=e.ui.ddmanager.droppables[n.options.scope]||[],l=s.length;for(o=0;o<l;o++)r=s[o],r.options.autoDisable&&(!r.options.disabled||r.options.autoDisable>1)&&(r.options.disabled=a(r.element),r.options.autoDisable=r.options.disabled?2:1)}return t(n,i)}}}(),e.ajaxTransport("+binary",function(e,t,n){if(window.FormData&&(e.dataType&&"binary"==e.dataType||e.data&&(window.ArrayBuffer&&e.data instanceof ArrayBuffer||window.Blob&&e.data instanceof Blob))){var i;return{send:function(t,n){i=new XMLHttpRequest;var a=e.url,o=e.type,r=e.async||!0,s=e.responseType||"blob",l=e.data||null,c=e.username,d=e.password;i.addEventListener("load",function(){var t={};t[e.dataType]=i.response,n(i.status,i.statusText,t,i.getAllResponseHeaders())}),i.open(o,a,r,c,d);for(var p in t)i.setRequestHeader(p,t[p]);if(e.xhrFields)for(var u in e.xhrFields)u in i&&(i[u]=e.xhrFields[u]);i.responseType=s,i.send(l)},abort:function(){i.abort()}}}}),function(e){function t(t,n){if(!(t.originalEvent.touches.length>1)){e(t.currentTarget).hasClass("touch-punch-keep-default")||t.preventDefault();var i=t.originalEvent.changedTouches[0],a=document.createEvent("MouseEvents");a.initMouseEvent(n,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(a)}}if(e.support.touch="ontouchend"in document,e.support.touch){var n,i,a,o=e.ui.mouse.prototype,r=o._mouseInit,s=o._mouseDestroy;o._touchStart=function(e){var o=this;!n&&o._mouseCapture(e.originalEvent.changedTouches[0])&&(i=e.originalEvent.changedTouches[0].screenX.toFixed(0),a=e.originalEvent.changedTouches[0].screenY.toFixed(0),n=!0,o._touchMoved=!1,t(e,"mouseover"),t(e,"mousemove"),t(e,"mousedown"))},o._touchMove=function(e){if(n){var o=e.originalEvent.changedTouches[0].screenX.toFixed(0),r=e.originalEvent.changedTouches[0].screenY.toFixed(0);Math.abs(i-o)<=4&&Math.abs(a-r)<=4||(this._touchMoved=!0,t(e,"mousemove"))}},o._touchEnd=function(e){n&&(t(e,"mouseup"),t(e,"mouseout"),this._touchMoved||t(e,"click"),n=!1,this._touchMoved=!1)},o._mouseInit=function(){var t=this;t.element.hasClass("touch-punch")&&t.element.on({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")}),r.call(t)},o._mouseDestroy=function(){var t=this;t.element.hasClass("touch-punch")&&t.element.off({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")}),s.call(t)}}}(jQuery),e.fn.elfinder=function(t,n){return"instance"===t?this.getElFinder():this.each(function(){var a,o="string"==typeof t?t:"",r="function"==typeof n?n:void 0;if(this.elfinder)switch(o){case"close":case"hide":this.elfinder.hide();break;case"open":case"show":this.elfinder.show();break;case"destroy":this.elfinder.destroy();break;case"reload":case"restart":this.elfinder&&(a=this.elfinder.options,r=this.elfinder.bootCallback,this.elfinder.destroy(),new i(this,e.extend(!0,a,e.isPlainObject(n)?n:{}),r))}else e.isPlainObject(t)&&new i(this,t,r)})},e.fn.getElFinder=function(){var e;return this.each(function(){if(this.elfinder)return e=this.elfinder,!1}),e},e.fn.elfUiWidgetInstance=function(e){try{return this[e]("instance")}catch(t){var n=this.data("ui-"+e);return n&&"object"==typeof n&&n.widgetFullName==="ui-"+e?n:null}},e.fn.scrollRight||e.fn.extend({scrollRight:function(e){var t=this.get(0);return void 0===e?Math.max(0,t.scrollWidth-(t.scrollLeft+t.clientWidth)):this.scrollLeft(t.scrollWidth-t.clientWidth-e)}}),e.fn.scrollBottom||e.fn.extend({scrollBottom:function(e){var t=this.get(0);return void 0===e?Math.max(0,t.scrollHeight-(t.scrollTop+t.clientHeight)):this.scrollTop(t.scrollHeight-t.clientHeight-e)}}),i.prototype.mimeTypes={"application/postscript":"ai","application/x-executable":"exe","application/msword":"doc","application/vnd.ms-excel":"xls","application/vnd.ms-powerpoint":"ppt","application/pdf":"pdf","text/xml":"xml","application/x-shockwave-flash":"swf","application/x-bittorrent":"torrent","application/x-jar":"jar","application/vnd.oasis.opendocument.text":"odt","application/vnd.oasis.opendocument.text-template":"ott","application/vnd.oasis.opendocument.text-web":"oth","application/vnd.oasis.opendocument.text-master":"odm","application/vnd.oasis.opendocument.graphics":"odg","application/vnd.oasis.opendocument.graphics-template":"otg","application/vnd.oasis.opendocument.presentation":"odp","application/vnd.oasis.opendocument.presentation-template":"otp","application/vnd.oasis.opendocument.spreadsheet":"ods","application/vnd.oasis.opendocument.spreadsheet-template":"ots","application/vnd.oasis.opendocument.chart":"odc","application/vnd.oasis.opendocument.formula":"odf","application/vnd.oasis.opendocument.database":"odb","application/vnd.oasis.opendocument.image":"odi","application/vnd.openofficeorg.extension":"oxt","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","application/vnd.ms-word.document.macroEnabled.12":"docm","application/vnd.openxmlformats-officedocument.wordprocessingml.template":"dotx","application/vnd.ms-word.template.macroEnabled.12":"dotm","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","application/vnd.ms-excel.sheet.macroEnabled.12":"xlsm","application/vnd.openxmlformats-officedocument.spreadsheetml.template":"xltx","application/vnd.ms-excel.template.macroEnabled.12":"xltm","application/vnd.ms-excel.sheet.binary.macroEnabled.12":"xlsb","application/vnd.ms-excel.addin.macroEnabled.12":"xlam","application/vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","application/vnd.ms-powerpoint.presentation.macroEnabled.12":"pptm","application/vnd.openxmlformats-officedocument.presentationml.slideshow":"ppsx","application/vnd.ms-powerpoint.slideshow.macroEnabled.12":"ppsm","application/vnd.openxmlformats-officedocument.presentationml.template":"potx","application/vnd.ms-powerpoint.template.macroEnabled.12":"potm","application/vnd.ms-powerpoint.addin.macroEnabled.12":"ppam","application/vnd.openxmlformats-officedocument.presentationml.slide":"sldx","application/vnd.ms-powerpoint.slide.macroEnabled.12":"sldm","application/x-gzip":"gz","application/x-bzip2":"bz","application/x-xz":"xz","application/zip":"zip","application/x-rar":"rar","application/x-tar":"tar","application/x-7z-compressed":"7z","text/plain":"txt","text/x-php":"php","text/html":"html","text/javascript":"js","text/css":"css","application/rtf":"rtf","application/rtfd":"rtfd","text/x-python":"py","text/x-java-source":"java","text/x-ruby":"rb","text/x-shellscript":"sh","text/x-perl":"pl","text/x-sql":"sql","text/x-csrc":"c","text/x-chdr":"h","text/x-c++src":"cpp","text/x-c++hdr":"hh","text/csv":"csv","text/x-markdown":"md","image/x-ms-bmp":"bmp","image/jpeg":"jpg","image/gif":"gif","image/png":"png","image/tiff":"tif","image/x-targa":"tga","image/vnd.adobe.photoshop":"psd","image/xbm":"xbm","image/pxm":"pxm","audio/mpeg":"mp3","audio/midi":"mid","audio/ogg":"ogg","audio/mp4":"m4a","audio/wav":"wav","audio/x-ms-wma":"wma","video/x-msvideo":"avi","video/x-dv":"dv","video/mp4":"mp4","video/mpeg":"mpeg","video/quicktime":"mov","video/x-ms-wmv":"wm","video/x-flv":"flv","video/x-matroska":"mkv","video/webm":"webm","video/ogg":"ogv","video/MP2T":"m2ts","application/x-mpegURL":"m3u8","application/dash+xml":"mpd","application/andrew-inset":"ez","application/applixware":"aw","application/atom+xml":"atom","application/atomcat+xml":"atomcat","application/atomsvc+xml":"atomsvc","application/ccxml+xml":"ccxml","application/cdmi-capability":"cdmia","application/cdmi-container":"cdmic","application/cdmi-domain":"cdmid","application/cdmi-object":"cdmio","application/cdmi-queue":"cdmiq","application/cu-seeme":"cu","application/davmount+xml":"davmount","application/docbook+xml":"dbk","application/dssc+der":"dssc","application/dssc+xml":"xdssc","application/ecmascript":"ecma","application/emma+xml":"emma","application/epub+zip":"epub","application/exi":"exi","application/font-tdpfr":"pfr","application/gml+xml":"gml","application/gpx+xml":"gpx","application/gxf":"gxf","application/hyperstudio":"stk","application/inkml+xml":"ink","application/ipfix":"ipfix","application/java-serialized-object":"ser","application/java-vm":"class","application/json":"json","application/jsonml+json":"jsonml","application/lost+xml":"lostxml","application/mac-binhex40":"hqx","application/mac-compactpro":"cpt","application/mads+xml":"mads","application/marc":"mrc","application/marcxml+xml":"mrcx","application/mathematica":"ma","application/mathml+xml":"mathml","application/mbox":"mbox","application/mediaservercontrol+xml":"mscml","application/metalink+xml":"metalink","application/metalink4+xml":"meta4","application/mets+xml":"mets","application/mods+xml":"mods","application/mp21":"m21","application/mp4":"mp4s","application/mxf":"mxf","application/octet-stream":"bin","application/oda":"oda","application/oebps-package+xml":"opf","application/ogg":"ogx","application/omdoc+xml":"omdoc","application/onenote":"onetoc","application/oxps":"oxps","application/patch-ops-error+xml":"xer","application/pgp-encrypted":"pgp","application/pgp-signature":"asc","application/pics-rules":"prf","application/pkcs10":"p10","application/pkcs7-mime":"p7m","application/pkcs7-signature":"p7s","application/pkcs8":"p8","application/pkix-attr-cert":"ac","application/pkix-cert":"cer","application/pkix-crl":"crl","application/pkix-pkipath":"pkipath","application/pkixcmp":"pki","application/pls+xml":"pls","application/prs.cww":"cww","application/pskc+xml":"pskcxml","application/rdf+xml":"rdf","application/reginfo+xml":"rif","application/relax-ng-compact-syntax":"rnc","application/resource-lists+xml":"rl","application/resource-lists-diff+xml":"rld","application/rls-services+xml":"rs","application/rpki-ghostbusters":"gbr","application/rpki-manifest":"mft","application/rpki-roa":"roa","application/rsd+xml":"rsd","application/rss+xml":"rss","application/sbml+xml":"sbml","application/scvp-cv-request":"scq","application/scvp-cv-response":"scs","application/scvp-vp-request":"spq","application/scvp-vp-response":"spp","application/sdp":"sdp","application/set-payment-initiation":"setpay","application/set-registration-initiation":"setreg","application/shf+xml":"shf","application/smil+xml":"smi","application/sparql-query":"rq","application/sparql-results+xml":"srx","application/srgs":"gram","application/srgs+xml":"grxml","application/sru+xml":"sru","application/ssdl+xml":"ssdl","application/ssml+xml":"ssml","application/tei+xml":"tei","application/thraud+xml":"tfi","application/timestamped-data":"tsd","application/vnd.3gpp.pic-bw-large":"plb","application/vnd.3gpp.pic-bw-small":"psb","application/vnd.3gpp.pic-bw-var":"pvb","application/vnd.3gpp2.tcap":"tcap","application/vnd.3m.post-it-notes":"pwn","application/vnd.accpac.simply.aso":"aso","application/vnd.accpac.simply.imp":"imp","application/vnd.acucobol":"acu",
"application/vnd.acucorp":"atc","application/vnd.adobe.air-application-installer-package+zip":"air","application/vnd.adobe.formscentral.fcdt":"fcdt","application/vnd.adobe.fxp":"fxp","application/vnd.adobe.xdp+xml":"xdp","application/vnd.adobe.xfdf":"xfdf","application/vnd.ahead.space":"ahead","application/vnd.airzip.filesecure.azf":"azf","application/vnd.airzip.filesecure.azs":"azs","application/vnd.amazon.ebook":"azw","application/vnd.americandynamics.acc":"acc","application/vnd.amiga.ami":"ami","application/vnd.android.package-archive":"apk","application/vnd.anser-web-certificate-issue-initiation":"cii","application/vnd.anser-web-funds-transfer-initiation":"fti","application/vnd.antix.game-component":"atx","application/vnd.apple.installer+xml":"mpkg","application/vnd.aristanetworks.swi":"swi","application/vnd.astraea-software.iota":"iota","application/vnd.audiograph":"aep","application/vnd.blueice.multipass":"mpm","application/vnd.bmi":"bmi","application/vnd.businessobjects":"rep","application/vnd.chemdraw+xml":"cdxml","application/vnd.chipnuts.karaoke-mmd":"mmd","application/vnd.cinderella":"cdy","application/vnd.claymore":"cla","application/vnd.cloanto.rp9":"rp9","application/vnd.clonk.c4group":"c4g","application/vnd.cluetrust.cartomobile-config":"c11amc","application/vnd.cluetrust.cartomobile-config-pkg":"c11amz","application/vnd.commonspace":"csp","application/vnd.contact.cmsg":"cdbcmsg","application/vnd.cosmocaller":"cmc","application/vnd.crick.clicker":"clkx","application/vnd.crick.clicker.keyboard":"clkk","application/vnd.crick.clicker.palette":"clkp","application/vnd.crick.clicker.template":"clkt","application/vnd.crick.clicker.wordbank":"clkw","application/vnd.criticaltools.wbs+xml":"wbs","application/vnd.ctc-posml":"pml","application/vnd.cups-ppd":"ppd","application/vnd.curl.car":"car","application/vnd.curl.pcurl":"pcurl","application/vnd.dart":"dart","application/vnd.data-vision.rdz":"rdz","application/vnd.dece.data":"uvf","application/vnd.dece.ttml+xml":"uvt","application/vnd.dece.unspecified":"uvx","application/vnd.dece.zip":"uvz","application/vnd.denovo.fcselayout-link":"fe_launch","application/vnd.dna":"dna","application/vnd.dolby.mlp":"mlp","application/vnd.dpgraph":"dpg","application/vnd.dreamfactory":"dfac","application/vnd.ds-keypoint":"kpxx","application/vnd.dvb.ait":"ait","application/vnd.dvb.service":"svc","application/vnd.dynageo":"geo","application/vnd.ecowin.chart":"mag","application/vnd.enliven":"nml","application/vnd.epson.esf":"esf","application/vnd.epson.msf":"msf","application/vnd.epson.quickanime":"qam","application/vnd.epson.salt":"slt","application/vnd.epson.ssf":"ssf","application/vnd.eszigno3+xml":"es3","application/vnd.ezpix-album":"ez2","application/vnd.ezpix-package":"ez3","application/vnd.fdf":"fdf","application/vnd.fdsn.mseed":"mseed","application/vnd.fdsn.seed":"seed","application/vnd.flographit":"gph","application/vnd.fluxtime.clip":"ftc","application/vnd.framemaker":"fm","application/vnd.frogans.fnc":"fnc","application/vnd.frogans.ltf":"ltf","application/vnd.fsc.weblaunch":"fsc","application/vnd.fujitsu.oasys":"oas","application/vnd.fujitsu.oasys2":"oa2","application/vnd.fujitsu.oasys3":"oa3","application/vnd.fujitsu.oasysgp":"fg5","application/vnd.fujitsu.oasysprs":"bh2","application/vnd.fujixerox.ddd":"ddd","application/vnd.fujixerox.docuworks":"xdw","application/vnd.fujixerox.docuworks.binder":"xbd","application/vnd.fuzzysheet":"fzs","application/vnd.genomatix.tuxedo":"txd","application/vnd.geogebra.file":"ggb","application/vnd.geogebra.tool":"ggt","application/vnd.geometry-explorer":"gex","application/vnd.geonext":"gxt","application/vnd.geoplan":"g2w","application/vnd.geospace":"g3w","application/vnd.gmx":"gmx","application/vnd.google-earth.kml+xml":"kml","application/vnd.google-earth.kmz":"kmz","application/vnd.grafeq":"gqf","application/vnd.groove-account":"gac","application/vnd.groove-help":"ghf","application/vnd.groove-identity-message":"gim","application/vnd.groove-injector":"grv","application/vnd.groove-tool-message":"gtm","application/vnd.groove-tool-template":"tpl","application/vnd.groove-vcard":"vcg","application/vnd.hal+xml":"hal","application/vnd.handheld-entertainment+xml":"zmm","application/vnd.hbci":"hbci","application/vnd.hhe.lesson-player":"les","application/vnd.hp-hpgl":"hpgl","application/vnd.hp-hpid":"hpid","application/vnd.hp-hps":"hps","application/vnd.hp-jlyt":"jlt","application/vnd.hp-pcl":"pcl","application/vnd.hp-pclxl":"pclxl","application/vnd.hydrostatix.sof-data":"sfd-hdstx","application/vnd.ibm.minipay":"mpy","application/vnd.ibm.modcap":"afp","application/vnd.ibm.rights-management":"irm","application/vnd.ibm.secure-container":"sc","application/vnd.iccprofile":"icc","application/vnd.igloader":"igl","application/vnd.immervision-ivp":"ivp","application/vnd.immervision-ivu":"ivu","application/vnd.insors.igm":"igm","application/vnd.intercon.formnet":"xpw","application/vnd.intergeo":"i2g","application/vnd.intu.qbo":"qbo","application/vnd.intu.qfx":"qfx","application/vnd.ipunplugged.rcprofile":"rcprofile","application/vnd.irepository.package+xml":"irp","application/vnd.is-xpr":"xpr","application/vnd.isac.fcs":"fcs","application/vnd.jam":"jam","application/vnd.jcp.javame.midlet-rms":"rms","application/vnd.jisp":"jisp","application/vnd.joost.joda-archive":"joda","application/vnd.kahootz":"ktz","application/vnd.kde.karbon":"karbon","application/vnd.kde.kchart":"chrt","application/vnd.kde.kformula":"kfo","application/vnd.kde.kivio":"flw","application/vnd.kde.kontour":"kon","application/vnd.kde.kpresenter":"kpr","application/vnd.kde.kspread":"ksp","application/vnd.kde.kword":"kwd","application/vnd.kenameaapp":"htke","application/vnd.kidspiration":"kia","application/vnd.kinar":"kne","application/vnd.koan":"skp","application/vnd.kodak-descriptor":"sse","application/vnd.las.las+xml":"lasxml","application/vnd.llamagraphics.life-balance.desktop":"lbd","application/vnd.llamagraphics.life-balance.exchange+xml":"lbe","application/vnd.lotus-1-2-3":123,"application/vnd.lotus-approach":"apr","application/vnd.lotus-freelance":"pre","application/vnd.lotus-notes":"nsf","application/vnd.lotus-organizer":"org","application/vnd.lotus-screencam":"scm","application/vnd.lotus-wordpro":"lwp","application/vnd.macports.portpkg":"portpkg","application/vnd.mcd":"mcd","application/vnd.medcalcdata":"mc1","application/vnd.mediastation.cdkey":"cdkey","application/vnd.mfer":"mwf","application/vnd.mfmp":"mfm","application/vnd.micrografx.flo":"flo","application/vnd.micrografx.igx":"igx","application/vnd.mif":"mif","application/vnd.mobius.daf":"daf","application/vnd.mobius.dis":"dis","application/vnd.mobius.mbk":"mbk","application/vnd.mobius.mqy":"mqy","application/vnd.mobius.msl":"msl","application/vnd.mobius.plc":"plc","application/vnd.mobius.txf":"txf","application/vnd.mophun.application":"mpn","application/vnd.mophun.certificate":"mpc","application/vnd.mozilla.xul+xml":"xul","application/vnd.ms-artgalry":"cil","application/vnd.ms-cab-compressed":"cab","application/vnd.ms-fontobject":"eot","application/vnd.ms-htmlhelp":"chm","application/vnd.ms-ims":"ims","application/vnd.ms-lrm":"lrm","application/vnd.ms-officetheme":"thmx","application/vnd.ms-pki.seccat":"cat","application/vnd.ms-pki.stl":"stl","application/vnd.ms-project":"mpp","application/vnd.ms-works":"wps","application/vnd.ms-wpl":"wpl","application/vnd.ms-xpsdocument":"xps","application/vnd.mseq":"mseq","application/vnd.musician":"mus","application/vnd.muvee.style":"msty","application/vnd.mynfc":"taglet","application/vnd.neurolanguage.nlu":"nlu","application/vnd.nitf":"ntf","application/vnd.noblenet-directory":"nnd","application/vnd.noblenet-sealer":"nns","application/vnd.noblenet-web":"nnw","application/vnd.nokia.n-gage.data":"ngdat","application/vnd.nokia.n-gage.symbian.install":"n-gage","application/vnd.nokia.radio-preset":"rpst","application/vnd.nokia.radio-presets":"rpss","application/vnd.novadigm.edm":"edm","application/vnd.novadigm.edx":"edx","application/vnd.novadigm.ext":"ext","application/vnd.oasis.opendocument.chart-template":"otc","application/vnd.oasis.opendocument.formula-template":"odft","application/vnd.oasis.opendocument.image-template":"oti","application/vnd.olpc-sugar":"xo","application/vnd.oma.dd2+xml":"dd2","application/vnd.osgeo.mapguide.package":"mgp","application/vnd.osgi.dp":"dp","application/vnd.osgi.subsystem":"esa","application/vnd.palm":"pdb","application/vnd.pawaafile":"paw","application/vnd.pg.format":"str","application/vnd.pg.osasli":"ei6","application/vnd.picsel":"efif","application/vnd.pmi.widget":"wg","application/vnd.pocketlearn":"plf","application/vnd.powerbuilder6":"pbd","application/vnd.previewsystems.box":"box","application/vnd.proteus.magazine":"mgz","application/vnd.publishare-delta-tree":"qps","application/vnd.pvi.ptid1":"ptid","application/vnd.quark.quarkxpress":"qxd","application/vnd.realvnc.bed":"bed","application/vnd.recordare.musicxml":"mxl","application/vnd.recordare.musicxml+xml":"musicxml","application/vnd.rig.cryptonote":"cryptonote","application/vnd.rim.cod":"cod","application/vnd.rn-realmedia":"rm","application/vnd.rn-realmedia-vbr":"rmvb","application/vnd.route66.link66+xml":"link66","application/vnd.sailingtracker.track":"st","application/vnd.seemail":"see","application/vnd.sema":"sema","application/vnd.semd":"semd","application/vnd.semf":"semf","application/vnd.shana.informed.formdata":"ifm","application/vnd.shana.informed.formtemplate":"itp","application/vnd.shana.informed.interchange":"iif","application/vnd.shana.informed.package":"ipk","application/vnd.simtech-mindmapper":"twd","application/vnd.smaf":"mmf","application/vnd.smart.teacher":"teacher","application/vnd.solent.sdkm+xml":"sdkm","application/vnd.spotfire.dxp":"dxp","application/vnd.spotfire.sfs":"sfs","application/vnd.stardivision.calc":"sdc","application/vnd.stardivision.draw":"sda","application/vnd.stardivision.impress":"sdd","application/vnd.stardivision.math":"smf","application/vnd.stardivision.writer":"sdw","application/vnd.stardivision.writer-global":"sgl","application/vnd.stepmania.package":"smzip","application/vnd.stepmania.stepchart":"sm","application/vnd.sun.xml.calc":"sxc","application/vnd.sun.xml.calc.template":"stc","application/vnd.sun.xml.draw":"sxd","application/vnd.sun.xml.draw.template":"std","application/vnd.sun.xml.impress":"sxi","application/vnd.sun.xml.impress.template":"sti","application/vnd.sun.xml.math":"sxm","application/vnd.sun.xml.writer":"sxw","application/vnd.sun.xml.writer.global":"sxg","application/vnd.sun.xml.writer.template":"stw","application/vnd.sus-calendar":"sus","application/vnd.svd":"svd","application/vnd.symbian.install":"sis","application/vnd.syncml+xml":"xsm","application/vnd.syncml.dm+wbxml":"bdm","application/vnd.syncml.dm+xml":"xdm","application/vnd.tao.intent-module-archive":"tao","application/vnd.tcpdump.pcap":"pcap","application/vnd.tmobile-livetv":"tmo","application/vnd.trid.tpt":"tpt","application/vnd.triscape.mxs":"mxs","application/vnd.trueapp":"tra","application/vnd.ufdl":"ufd","application/vnd.uiq.theme":"utz","application/vnd.umajin":"umj","application/vnd.unity":"unityweb","application/vnd.uoml+xml":"uoml","application/vnd.vcx":"vcx","application/vnd.visio":"vsd","application/vnd.visionary":"vis","application/vnd.vsf":"vsf","application/vnd.wap.wbxml":"wbxml","application/vnd.wap.wmlc":"wmlc","application/vnd.wap.wmlscriptc":"wmlsc","application/vnd.webturbo":"wtb","application/vnd.wolfram.player":"nbp","application/vnd.wordperfect":"wpd","application/vnd.wqd":"wqd","application/vnd.wt.stf":"stf","application/vnd.xara":"xar","application/vnd.xfdl":"xfdl","application/vnd.yamaha.hv-dic":"hvd","application/vnd.yamaha.hv-script":"hvs","application/vnd.yamaha.hv-voice":"hvp","application/vnd.yamaha.openscoreformat":"osf","application/vnd.yamaha.openscoreformat.osfpvg+xml":"osfpvg","application/vnd.yamaha.smaf-audio":"saf","application/vnd.yamaha.smaf-phrase":"spf","application/vnd.yellowriver-custom-menu":"cmp","application/vnd.zul":"zir","application/vnd.zzazz.deck+xml":"zaz","application/voicexml+xml":"vxml","application/widget":"wgt","application/winhlp":"hlp","application/wsdl+xml":"wsdl","application/wspolicy+xml":"wspolicy","application/x-abiword":"abw","application/x-ace-compressed":"ace","application/x-apple-diskimage":"dmg","application/x-authorware-bin":"aab","application/x-authorware-map":"aam","application/x-authorware-seg":"aas","application/x-bcpio":"bcpio","application/x-blorb":"blb","application/x-cbr":"cbr","application/x-cdlink":"vcd","application/x-cfs-compressed":"cfs","application/x-chat":"chat","application/x-chess-pgn":"pgn","application/x-conference":"nsc","application/x-cpio":"cpio","application/x-csh":"csh","application/x-debian-package":"deb","application/x-dgc-compressed":"dgc","application/x-director":"dir","application/x-doom":"wad","application/x-dtbncx+xml":"ncx","application/x-dtbook+xml":"dtb","application/x-dtbresource+xml":"res","application/x-dvi":"dvi","application/x-envoy":"evy","application/x-eva":"eva","application/x-font-bdf":"bdf","application/x-font-ghostscript":"gsf","application/x-font-linux-psf":"psf","application/x-font-pcf":"pcf","application/x-font-snf":"snf","application/x-font-type1":"pfa","application/x-freearc":"arc","application/x-futuresplash":"spl","application/x-gca-compressed":"gca","application/x-glulx":"ulx","application/x-gnumeric":"gnumeric","application/x-gramps-xml":"gramps","application/x-gtar":"gtar","application/x-hdf":"hdf","application/x-install-instructions":"install","application/x-iso9660-image":"iso","application/x-java-jnlp-file":"jnlp","application/x-latex":"latex","application/x-lzh-compressed":"lzh","application/x-mie":"mie","application/x-mobipocket-ebook":"prc","application/x-ms-application":"application","application/x-ms-shortcut":"lnk","application/x-ms-wmd":"wmd","application/x-ms-wmz":"wmz","application/x-ms-xbap":"xbap","application/x-msaccess":"mdb","application/x-msbinder":"obd","application/x-mscardfile":"crd","application/x-msclip":"clp","application/x-msdownload":"dll","application/x-msmediaview":"mvb","application/x-msmetafile":"wmf","application/x-msmoney":"mny","application/x-mspublisher":"pub","application/x-msschedule":"scd","application/x-msterminal":"trm","application/x-mswrite":"wri","application/x-netcdf":"nc","application/x-nzb":"nzb","application/x-pkcs12":"p12","application/x-pkcs7-certificates":"p7b","application/x-pkcs7-certreqresp":"p7r","application/x-research-info-systems":"ris","application/x-shar":"shar","application/x-silverlight-app":"xap","application/x-stuffit":"sit","application/x-stuffitx":"sitx","application/x-subrip":"srt","application/x-sv4cpio":"sv4cpio","application/x-sv4crc":"sv4crc","application/x-t3vm-image":"t3","application/x-tads":"gam","application/x-tcl":"tcl","application/x-tex":"tex","application/x-tex-tfm":"tfm","application/x-texinfo":"texinfo","application/x-tgif":"obj","application/x-ustar":"ustar","application/x-wais-source":"src","application/x-x509-ca-cert":"der","application/x-xfig":"fig","application/x-xliff+xml":"xlf","application/x-xpinstall":"xpi","application/x-zmachine":"z1","application/xaml+xml":"xaml","application/xcap-diff+xml":"xdf","application/xenc+xml":"xenc","application/xhtml+xml":"xhtml","application/xml":"xsl","application/xml-dtd":"dtd","application/xop+xml":"xop","application/xproc+xml":"xpl","application/xslt+xml":"xslt","application/xspf+xml":"xspf","application/xv+xml":"mxml","application/yang":"yang","application/yin+xml":"yin","audio/adpcm":"adp","audio/basic":"au","audio/s3m":"s3m","audio/silk":"sil","audio/vnd.dece.audio":"uva","audio/vnd.digital-winds":"eol","audio/vnd.dra":"dra","audio/vnd.dts":"dts","audio/vnd.dts.hd":"dtshd","audio/vnd.lucent.voice":"lvp","audio/vnd.ms-playready.media.pya":"pya","audio/vnd.nuera.ecelp4800":"ecelp4800","audio/vnd.nuera.ecelp7470":"ecelp7470","audio/vnd.nuera.ecelp9600":"ecelp9600","audio/vnd.rip":"rip","audio/webm":"weba","audio/x-aac":"aac","audio/x-aiff":"aif","audio/x-caf":"caf","audio/x-flac":"flac","audio/x-matroska":"mka","audio/x-mpegurl":"m3u","audio/x-ms-wax":"wax","audio/x-pn-realaudio":"ram","audio/x-pn-realaudio-plugin":"rmp","audio/xm":"xm","chemical/x-cdx":"cdx","chemical/x-cif":"cif","chemical/x-cmdf":"cmdf","chemical/x-cml":"cml","chemical/x-csml":"csml","chemical/x-xyz":"xyz","font/collection":"ttc","font/otf":"otf","font/ttf":"ttf","font/woff":"woff","font/woff2":"woff2","image/cgm":"cgm","image/g3fax":"g3","image/ief":"ief","image/ktx":"ktx","image/prs.btif":"btif","image/sgi":"sgi","image/svg+xml":"svg","image/vnd.dece.graphic":"uvi","image/vnd.djvu":"djvu","image/vnd.dvb.subtitle":"sub","image/vnd.dwg":"dwg","image/vnd.dxf":"dxf","image/vnd.fastbidsheet":"fbs","image/vnd.fpx":"fpx","image/vnd.fst":"fst","image/vnd.fujixerox.edmics-mmr":"mmr","image/vnd.fujixerox.edmics-rlc":"rlc","image/vnd.ms-modi":"mdi","image/vnd.ms-photo":"wdp","image/vnd.net-fpx":"npx","image/vnd.wap.wbmp":"wbmp","image/vnd.xiff":"xif","image/webp":"webp","image/x-3ds":"3ds","image/x-cmu-raster":"ras","image/x-cmx":"cmx","image/x-freehand":"fh","image/x-icon":"ico","image/x-mrsid-image":"sid","image/x-pcx":"pcx","image/x-pict":"pic","image/x-portable-anymap":"pnm","image/x-portable-bitmap":"pbm","image/x-portable-graymap":"pgm","image/x-portable-pixmap":"ppm","image/x-rgb":"rgb","image/x-xpixmap":"xpm","image/x-xwindowdump":"xwd","message/rfc822":"eml","model/iges":"igs","model/mesh":"msh","model/vnd.collada+xml":"dae","model/vnd.dwf":"dwf","model/vnd.gdl":"gdl","model/vnd.gtw":"gtw","model/vnd.vtu":"vtu","model/vrml":"wrl","model/x3d+binary":"x3db","model/x3d+vrml":"x3dv","model/x3d+xml":"x3d","text/cache-manifest":"appcache","text/calendar":"ics","text/n3":"n3","text/prs.lines.tag":"dsc","text/richtext":"rtx","text/sgml":"sgml","text/tab-separated-values":"tsv","text/troff":"t","text/turtle":"ttl","text/uri-list":"uri","text/vcard":"vcard","text/vnd.curl":"curl","text/vnd.curl.dcurl":"dcurl","text/vnd.curl.mcurl":"mcurl","text/vnd.curl.scurl":"scurl","text/vnd.fly":"fly","text/vnd.fmi.flexstor":"flx","text/vnd.graphviz":"gv","text/vnd.in3d.3dml":"3dml","text/vnd.in3d.spot":"spot","text/vnd.sun.j2me.app-descriptor":"jad","text/vnd.wap.wml":"wml","text/vnd.wap.wmlscript":"wmls","text/x-asm":"s","text/x-c":"cc","text/x-fortran":"f","text/x-nfo":"nfo","text/x-opml":"opml","text/x-pascal":"p","text/x-setext":"etx","text/x-sfv":"sfv","text/x-uuencode":"uu","text/x-vcalendar":"vcs","text/x-vcard":"vcf","video/3gpp":"3gp","video/3gpp2":"3g2","video/h261":"h261","video/h263":"h263","video/h264":"h264","video/jpeg":"jpgv","video/jpm":"jpm","video/mj2":"mj2","video/vnd.dece.hd":"uvh","video/vnd.dece.mobile":"uvm","video/vnd.dece.pd":"uvp","video/vnd.dece.sd":"uvs","video/vnd.dece.video":"uvv","video/vnd.dvb.file":"dvb","video/vnd.fvt":"fvt","video/vnd.mpegurl":"mxu","video/vnd.ms-playready.media.pyv":"pyv","video/vnd.uvvu.mp4":"uvu","video/vnd.vivo":"viv","video/x-f4v":"f4v","video/x-fli":"fli","video/x-m4v":"m4v","video/x-mng":"mng","video/x-ms-asf":"asf","video/x-ms-vob":"vob","video/x-ms-wmx":"wmx","video/x-ms-wvx":"wvx","video/x-sgi-movie":"movie","video/x-smv":"smv","x-conference/x-cooltalk":"ice","text/x-httpd-cgi":"cgi","text/x-asap":"asp","text/x-jsp":"jsp"},i.prototype._options={cdns:{ace:"//cdnjs.cloudflare.com/ajax/libs/ace/1.3.1",codemirror:"//cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0",ckeditor:"//cdnjs.cloudflare.com/ajax/libs/ckeditor/4.8.0",ckeditor5:"//cdn.ckeditor.com/ckeditor5/1.0.0-alpha.2",tinymce:"//cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.6",simplemde:"//cdnjs.cloudflare.com/ajax/libs/simplemde/1.11.2",hls:"//cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.9/hls.min.js",dash:"//cdnjs.cloudflare.com/ajax/libs/dashjs/2.6.5/dash.all.min.js",prettify:"//cdn.rawgit.com/google/code-prettify/05ad1b76f8af1232da963c17bad144107b07e59a/loader/run_prettify.js",psd:"//cdnjs.cloudflare.com/ajax/libs/psd.js/3.2.0/psd.min.js",rar:"//cdn.rawgit.com/nao-pon/rar.js/6cef13ec66dd67992fc7f3ea22f132d770ebaf8b/rar.min.js",zlibUnzip:"//cdn.rawgit.com/imaya/zlib.js/0.3.1/bin/unzip.min.js",zlibGunzip:"//cdn.rawgit.com/imaya/zlib.js/0.3.1/bin/gunzip.min.js",marked:"//cdnjs.cloudflare.com/ajax/libs/marked/0.3.17/marked.min.js",sparkmd5:"//cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.0/spark-md5.min.js",jssha:"//cdnjs.cloudflare.com/ajax/libs/jsSHA/2.3.1/sha.js"},url:"",requestType:"get",cors:null,requestMaxConn:3,transport:{},urlUpload:"",dragUploadAllow:"auto",overwriteUploadConfirm:!0,uploadMaxChunkSize:10485760,folderUploadExclude:{win:/^(?:desktop\.ini|thumbs\.db)$/i,mac:/^\.ds_store$/i},iframeTimeout:0,customData:{},handlers:{},customHeaders:{},xhrFields:{},lang:"en",baseUrl:"",cssAutoLoad:!0,cssClass:"",commands:["*"],commandsOptions:{getfile:{onlyURL:!1,multiple:!1,folders:!1,oncomplete:"",getPath:!0,getImgSize:!1},open:{method:"post",into:"window"},upload:{ui:"button"},download:{maxRequests:10,minFilesZipdl:2},quicklook:{autoplay:!0,width:450,height:300,textMaxlen:2e3,contain:!1,docked:0,dockHeight:"auto",dockAutoplay:!1,googleDocsMimes:[],getDimThreshold:2e5,mimeRegexNotEmptyCheck:/^application\/vnd\.google-apps\./},edit:{dialogWidth:void 0,mimes:[],useStoredEditor:!1,editors:[],encodings:["Big5","Big5-HKSCS","Cp437","Cp737","Cp775","Cp850","Cp852","Cp855","Cp857","Cp858","Cp862","Cp866","Cp874","EUC-CN","EUC-JP","EUC-KR","GB18030","ISO-2022-CN","ISO-2022-JP","ISO-2022-KR","ISO-8859-1","ISO-8859-2","ISO-8859-3","ISO-8859-4","ISO-8859-5","ISO-8859-6","ISO-8859-7","ISO-8859-8","ISO-8859-9","ISO-8859-13","ISO-8859-15","KOI8-R","KOI8-U","Shift-JIS","Windows-1250","Windows-1251","Windows-1252","Windows-1253","Windows-1254","Windows-1257"],extraOptions:{creativeCloudApiKey:"",managerUrl:null,ckeditor5Mode:"balloon"}},search:{incsearch:{enable:!0,minlen:1,wait:500}},info:{nullUrlDirLinkSelf:!0,showHashMaxsize:104857600,showHashAlgorisms:["md5","sha256"],custom:{}},mkdir:{intoNewFolderToolbtn:!1},resize:{grid8px:"disable",presetSize:[[320,240],[400,400],[640,480],[800,600]],getDimThreshold:204800,dimSubImgSize:307200},rm:{quickTrash:!0,infoCheckWait:10,toTrashMaxItems:1e3},help:{view:["about","shortcuts","help","preference","debug"],helpSource:"",selectActions:["open","edit/download","resize/edit/download","download","quicklook"]}},bootCallback:null,getFileCallback:null,defaultView:"icons",startPathHash:"",sound:!0,ui:["toolbar","tree","path","stat"],uiOptions:{toolbar:[["home","back","forward","up","reload"],["netmount"],["mkdir","mkfile","upload"],["open","download","getfile"],["undo","redo"],["copy","cut","paste","rm","empty"],["duplicate","rename","edit","resize","chmod"],["selectall","selectnone","selectinvert"],["quicklook","info"],["extract","archive"],["search"],["view","sort"],["help"],["fullscreen"]],toolbarExtra:{displayTextLabel:!1,labelExcludeUA:["Mobile"],autoHideUA:["Mobile"],defaultHides:["home","reload"],showPreferenceButton:"none"},tree:{openRootOnLoad:!0,openCwdOnOpen:!0,syncTree:!0,subTreeMax:100,subdirsMaxConn:2,subdirsAtOnce:5},navbar:{minWidth:150,maxWidth:500,autoHideUA:[]},navdock:{disabled:!1,initMaxHeight:"50%",maxHeight:"90%"},cwd:{oldSchool:!1,showSelectCheckboxUA:["Touch"],listView:{columns:["perm","date","size","kind"],columnsCustomName:{},fixedHeader:!0}},path:{toWorkzoneWithoutNavbar:!0},dialog:{focusOnMouseOver:!0}},dispInlineRegex:"^(?:(?:image|video|audio)|application/(?:x-mpegURL|dash+xml)|(?:text/plain|application/pdf)$)",onlyMimes:[],sortRules:{},sortType:"name",sortOrder:"asc",sortStickFolders:!0,sortAlsoTreeview:!1,clientFormatDate:!0,UTCDate:!1,dateFormat:"",fancyDateFormat:"",fileModeStyle:"both",width:"auto",height:400,heightBase:null,resizable:!0,notifyDelay:500,notifyDialog:{position:{top:"12px",right:"12px"},width:280},dialogContained:!1,allowShortcuts:!0,rememberLastDir:!0,reloadClearHistory:!1,useBrowserHistory:!0,showFiles:50,showThreshold:50,validName:!1,fileFilter:!1,backupSuffix:"~",sync:0,syncStart:!0,loadTmbs:5,cookie:{expires:30,domain:"",path:"/",secure:!1},contextmenu:{navbar:["open","download","|","upload","mkdir","|","copy","cut","paste","duplicate","|","rm","empty","|","rename","|","archive","|","places","info","chmod","netunmount"],cwd:["undo","redo","|","back","up","reload","|","upload","mkdir","mkfile","paste","|","empty","|","view","sort","selectall","colwidth","|","places","info","chmod","netunmount","|","fullscreen","|","preference"],files:["getfile","|","open","download","opendir","quicklook","|","upload","mkdir","|","copy","cut","paste","duplicate","|","rm","empty","|","rename","edit","resize","|","archive","extract","|","selectall","selectinvert","|","places","info","chmod","netunmount"]},enableAlways:!1,enableByMouseOver:!0,windowCloseConfirm:["hasNotifyDialog","editingFile"],rawStringDecoder:"object"==typeof Encoding&&e.isFunction(Encoding.convert)?function(e){return Encoding.convert(e,{to:"UNICODE",type:"string"})}:null,debug:["error","warning","event-destroy"]},i.prototype._options.commandsOptions.netmount={ftp:{name:"FTP",inputs:{host:e('<input type="text"/>'),port:e('<input type="number" placeholder="21" class="elfinder-input-optional"/>'),path:e('<input type="text" value="/"/>'),user:e('<input type="text"/>'),pass:e('<input type="password" autocomplete="new-password"/>'),FTPS:e('<input type="checkbox" value="1" title="File Transfer Protocol over SSL/TLS"/>'),encoding:e('<input type="text" placeholder="Optional" class="elfinder-input-optional"/>'),locale:e('<input type="text" placeholder="Optional" class="elfinder-input-optional"/>')}},dropbox2:i.prototype.makeNetmountOptionOauth("dropbox2","Dropbox","Dropbox",{noOffline:!0,root:"/",pathI18n:"path"}),googledrive:i.prototype.makeNetmountOptionOauth("googledrive","Google Drive","Google"),onedrive:i.prototype.makeNetmountOptionOauth("onedrive","One Drive","OneDrive"),box:i.prototype.makeNetmountOptionOauth("box","Box","Box",{noOffline:!0})},i.prototype.history=function(t){var n,i=this,a=!0,o=[],r=function(){o=[t.cwd().hash],n=0,a=!0},s=t.options.useBrowserHistory&&window.history&&window.history.pushState?window.history:null,l=function(s){return s&&i.canForward()||!s&&i.canBack()?(a=!1,t.exec("open",o[s?++n:--n]).fail(r)):e.Deferred().reject()};this.canBack=function(){return n>0},this.canForward=function(){return n<o.length-1},this.back=l,this.forward=function(){return l(!0)},t.open(function(){var e=o.length,i=t.cwd().hash;a&&(n>=0&&e>n+1&&o.splice(n+1),o[o.length-1]!=i&&o.push(i),n=o.length-1),a=!0,s&&(s.state?s.state.thash!=i&&s.pushState({thash:i},null,location.pathname+location.search+"#elf_"+i):s.replaceState({thash:i},null,location.pathname+location.search+"#elf_"+i))}).reload(t.options.reloadClearHistory&&r)},i.prototype.command=function(t){this.fm=t,this.name="",this.className="",this.title="",this.linkedCmds=[],this.state=-1,this.alwaysEnabled=!1,this.noChangeDirOnRemovedCwd=!1,this._disabled=!1,this.disableOnSearch=!1,this.updateOnSelect=!0,this.syncTitleOnChange=!1,this._handlers={enable:function(){this.update(void 0,this.value)},disable:function(){this.update(-1,this.value)},"open reload load sync":function(){this._disabled=!(this.alwaysEnabled||this.fm.isCommandEnabled(this.name)),this.update(void 0,this.value),this.change()}},this.handlers={},this.shortcuts=[],this.options={ui:"button"},this.setup=function(t,n){var i,a,o,r=this,s=this.fm,l=function(t){var n=t.callback||function(){s.exec(r.name,void 0,{_userAction:!0})};t.callback=function(t){var i,a={};r.enabled()&&(s.searchStatus.state<2?i=s.isCommandEnabled(r.name):(e.each(s.selected(),function(t,n){s.optionsByHashes[n]?a[n]=!0:e.each(s.volOptions,function(e){if(!a[e]&&0===n.indexOf(e))return a[e]=!0,!1})}),e.each(a,function(e){if(i=s.isCommandEnabled(r.name,e),!i)return!1})),i&&(r.event=t,n.call(r),delete r.event))}};for(this.name=t,this.title=s.messages["cmd"+t]?s.i18n("cmd"+t):this.extendsCmd&&s.messages["cmd"+this.extendsCmd]?s.i18n("cmd"+this.extendsCmd):t,this.options=Object.assign({},this.options,n),this.listeners=[],n.shortcuts&&("function"==typeof n.shortcuts?o=n.shortcuts(this.fm,this.shortcuts):Array.isArray(n.shortcuts)&&(o=n.shortcuts),this.shortcuts=o||[]),this.updateOnSelect&&(this._handlers.select=function(){this.update(void 0,this.value)}),e.each(Object.assign({},r._handlers,r.handlers),function(t,n){s.bind(t,e.proxy(n,r))}),i=0;i<this.shortcuts.length;i++)a=this.shortcuts[i],l(a),!a.description&&(a.description=this.title),s.shortcut(a);this.disableOnSearch&&s.bind("search searchend",function(){r._disabled="search"===this.type||!(this.alwaysEnabled||s.isCommandEnabled(t)),r.update(void 0,r.value)}),this.init()},this.init=function(){},this.exec=function(t,n){return e.Deferred().reject()},this.getUndo=function(e,t){return!1},this.disabled=function(){return this.state<0},this.enabled=function(){return this.state>-1},this.active=function(){return this.state>0},this.getstate=function(){return-1},this.update=function(e,t){var n=this.state,i=this.value;this._disabled&&0===this.fm.searchStatus?this.state=-1:this.state=void 0!==e?e:this.getstate(),this.value=t,n==this.state&&i==this.value||this.change()},this.change=function(e){var t,n;if("function"==typeof e)this.listeners.push(e);else for(n=0;n<this.listeners.length;n++){t=this.listeners[n];try{t(this.state,this.value)}catch(i){this.fm.debug("error",i)}}return this},this.hashes=function(n){return n?e.grep(Array.isArray(n)?n:[n],function(e){return!!t.file(e)}):t.selected()},this.files=function(t){var n=this.fm;return t?e.map(Array.isArray(t)?t:[t],function(e){return n.file(e)||null}):n.selectedFiles()}},i.prototype.resources={"class":{hover:"ui-state-hover",active:"ui-state-active",disabled:"ui-state-disabled",draggable:"ui-draggable",droppable:"ui-droppable",adroppable:"elfinder-droppable-active",cwdfile:"elfinder-cwd-file",cwd:"elfinder-cwd",tree:"elfinder-tree",treeroot:"elfinder-navbar-root",navdir:"elfinder-navbar-dir",navdirwrap:"elfinder-navbar-dir-wrapper",navarrow:"elfinder-navbar-arrow",navsubtree:"elfinder-navbar-subtree",navcollapse:"elfinder-navbar-collapsed",navexpand:"elfinder-navbar-expanded",treedir:"elfinder-tree-dir",placedir:"elfinder-place-dir",searchbtn:"elfinder-button-search",editing:"elfinder-to-editing"},tpl:{perms:'<span class="elfinder-perms"/>',lock:'<span class="elfinder-lock"/>',symlink:'<span class="elfinder-symlink"/>',navicon:'<span class="elfinder-nav-icon"/>',navspinner:'<span class="elfinder-navbar-spinner"/>',navdir:'<div class="elfinder-navbar-wrapper{root}"><span id="{id}" class="ui-corner-all elfinder-navbar-dir {cssclass}"><span class="elfinder-navbar-arrow"/><span class="elfinder-navbar-icon" {style}/>{symlink}{permissions}{name}</span><div class="elfinder-navbar-subtree" style="display:none"/></div>',placedir:'<div class="elfinder-navbar-wrapper"><span id="{id}" class="ui-corner-all elfinder-navbar-dir {cssclass}" title="{title}"><span class="elfinder-navbar-arrow"/><span class="elfinder-navbar-icon" {style}/>{symlink}{permissions}{name}</span><div class="elfinder-navbar-subtree" style="display:none"/></div>'},mimes:{text:["application/x-empty","application/javascript","application/json","application/xhtml+xml","audio/x-mp3-playlist","application/x-web-config","application/docbook+xml","application/x-php","application/x-perl","application/x-awk","application/x-config","application/x-csh","application/xml","application/sql"]},mixin:{make:function(){var t,n,i,a,o,r,s,l,c,d,p=this,u=this.fm,h=this.name,f=this.requestCmd||h,m=u.getUI("workzone"),g=this.origin&&"navbar"===this.origin?"tree":"cwd",v=u.getUI(g),b="tree"===g,y=b?"navHash2Id":"cwdHash2Id",w=!b&&"list"!=u.storage("view"),x=u.selected(),k=this.move||!1,C=m.hasClass("elfinder-cwd-wrapper-empty"),T=function(){M.is(":hidden")||M.elfinderoverlay("hide").off("click",E),D.removeClass("ui-front").css("position",""),w?n&&n.css("max-height",""):i&&i.css("width","").parent("td").css("overflow","")},z=e.Deferred().fail(function(e){r&&o.attr("class",r),C&&m.addClass("elfinder-cwd-wrapper-empty"),x&&(k&&u.trigger("unlockfiles",{
files:x}),u.clipboard([]),u.trigger("selectfiles",{files:x})),e&&u.error(e)}).always(function(){T(),U(),u.enable().unbind("open",H).trigger("resMixinMake")}),I="tmp_"+parseInt(1e5*Math.random()),S=this.data&&this.data.target?this.data.target:b?u.file(x[0]).hash:u.cwd().hash,A=new Date,O={hash:I,phash:S,name:u.uniqueName(this.prefix,S),mime:this.mime,read:!0,write:!0,date:"Today "+A.getHours()+":"+A.getMinutes(),move:k},j=this.data||{},D=v.trigger("create."+u.namespace,O).find("#"+u[y](I)).on("unselect."+u.namespace,function(){setTimeout(function(){F&&F.trigger("blur")},50)}),M=u.getUI("overlay"),U=function(){D&&D.length&&(F.off(),D.hide(),u.unselectfiles({files:[I]}).unbind("resize",R),setTimeout(function(){b?D.closest(".elfinder-navbar-wrapper").remove():D.remove()},0))},E=function(e){M.is(":hidden")||i.css("z-index",""),q||(U(),z.reject(),e&&(e.stopPropagation(),e.preventDefault()))},F=e(w?"<textarea/>":'<input type="text"/>').on("keyup text",function(){w?(this.style.height="1px",this.style.height=this.scrollHeight+"px"):t&&(this.style.width=t+"px",this.scrollWidth>t&&(this.style.width=this.scrollWidth+10+"px"))}).on("keydown",function(t){t.stopImmediatePropagation(),t.keyCode==e.ui.keyCode.ESCAPE?z.reject():t.keyCode==e.ui.keyCode.ENTER&&F.trigger("blur")}).on("mousedown click dblclick",function(e){e.stopPropagation(),"dblclick"===e.type&&e.preventDefault()}).on("blur",function(){var t,n=e.trim(F.val()),o=F.parent(),r=!0;if(M.is(":hidden")||i.css("z-index",""),""===n)return E();if(!q&&o.length){if(u.options.validName&&u.options.validName.test)try{r=u.options.validName.test(n)}catch(s){r=!1}if(!n||"."===n||".."===n||!r)return q=!0,u.error("directory"===O.mime?"errInvDirname":"errInvName",{modal:!0,close:function(){setTimeout(P,120)}}),!1;if(u.fileByName(n,S))return q=!0,u.error(["errExists",n],{modal:!0,close:function(){setTimeout(P,120)}}),!1;t=x&&k?u.exec("cut",x):null,e.when(t).done(function(){var t={},i={};T(),F.hide().before(e("<span>").text(n)),u.lockfiles({files:[I]}),u.request({data:Object.assign({cmd:f,name:n,target:S},j||{}),notify:{type:f,cnt:1},preventFail:!0,syncOnFail:!0,navigate:{toast:t}}).fail(function(e){u.unlockfiles({files:[I]}),q=!0,F.show().prev().remove(),u.error(e,{modal:!0,close:function(){setTimeout(P,120)}})}).done(function(n){if(n&&n.added&&n.added[0]){var o=n.added[0],r=o.hash,s=(v.find("#"+u[y](r)),{directory:{cmd:"open",msg:"cmdopendir"},text:{cmd:"edit",msg:"cmdedit"},"default":{cmd:"open",msg:"cmdopen"}});x&&k&&u.one(f+"done",function(){u.exec("paste",r)}),k||(Object.assign(i,a||s[o.mime]||s[o.mime.split("/")[0]]||s[e.inArray(o.mime,u.resources.mimes.text)!==-1?"text":"none"]||s["default"]),Object.assign(t,i.cmd?{incwd:{msg:u.i18n(["complete",u.i18n("cmd"+h)]),action:i},inbuffer:{msg:u.i18n(["complete",u.i18n("cmd"+h)]),action:i}}:{inbuffer:{msg:u.i18n(["complete",u.i18n("cmd"+h)])}}))}z.resolve(n)})}).fail(function(){z.reject()})}}),P=function(){var e=u.splitFileExtention(F.val())[0];q||!u.UA.Mobile||u.UA.iOS||(M.on("click",E).elfinderoverlay("show"),i.css("z-index",M.css("z-index")+1)),q=!1,!u.enabled()&&u.enable(),F.trigger("focus").trigger("select"),F[0].setSelectionRange&&F[0].setSelectionRange(0,e.length)},R=function(){D.trigger("scrolltoview",{blink:!1})},H=function(){z&&"pending"===z.state()&&z.reject()},q=!1;return u.isCommandEnabled(f,S)&&D.length?(e.isPlainObject(p.nextAction)&&(a=Object.assign({},p.nextAction)),u.UA.iOS&&F.css("font-size","16px"),b?(o=e("#"+u[y](S)),s=u.res("class","navcollapse"),l=u.res("class","navexpand"),c=u.res("class","navarrow"),d=u.res("class","navsubtree"),D.closest("."+d).show(),o.hasClass(s)||(r=o.attr("class"),o.addClass(s+" "+l+" elfinder-subtree-loaded")),o.is("."+s+":not(."+l+")")&&o.children("."+c).click().data("dfrd").done(function(){F.val()===O.name&&F.val(u.uniqueName(this.prefix,S)).trigger("select").trigger("focus")}.bind(this)),n=D.contents().filter(function(){return 3==this.nodeType&&e(this).parent().attr("id")===u.navHash2Id(O.hash)}),n.replaceWith(F.val(O.name))):(C&&m.removeClass("elfinder-cwd-wrapper-empty"),n=D.find(".elfinder-cwd-filename"),i=n.parent(),D.css("position","relative").addClass("ui-front"),w?n.css("max-height","none"):(t=i.width(),i.width(t-15).parent("td").css("overflow","visible")),n.empty().append(F.val(O.name))),u.bind("resize",R).one("open",H),F.trigger("keyup"),P(),z):z.reject()}},blink:function(e,t){var n,i={slowonce:function(){e.hide().delay(250).fadeIn(750).delay(500).fadeOut(3500)},lookme:function(){e.show().fadeOut(500).fadeIn(750)}};t=t||"slowonce",n=i[t]||i.lookme,e.stop(!0,!0),n()}},e.fn.dialogelfinder=function(t){var n,i="elfinderPosition",a="elfinderDestroyOnClose";if(this.not(".elfinder").each(function(){var n=(e(document),e('<div class="ui-widget-header dialogelfinder-drag ui-corner-top">'+(t.title||"Files")+"</div>")),o=(e('<a href="#" class="dialogelfinder-drag-close ui-corner-all"><span class="ui-icon ui-icon-closethick"> </span></a>').appendTo(n).on("click",function(e){e.preventDefault(),o.dialogelfinder("close")}),e(this).addClass("dialogelfinder").css("position","absolute").hide().appendTo("body").draggable({handle:".dialogelfinder-drag",containment:"window",stop:function(){o.trigger("resize"),r.trigger("resize")}}).elfinder(t).prepend(n)),r=o.elfinder("instance");o.width(parseInt(o.width())||840).data(a,!!t.destroyOnClose).find(".elfinder-toolbar").removeClass("ui-corner-top"),t.position&&o.data(i,t.position),t.autoOpen!==!1&&e(this).dialogelfinder("open")}),"open"==t)n=e(this),pos=n.data(i)||{top:parseInt(e(document).scrollTop()+(e(window).height()<n.height()?2:(e(window).height()-n.height())/2)),left:parseInt(e(document).scrollLeft()+(e(window).width()<n.width()?2:(e(window).width()-n.width())/2))},n.is(":hidden")&&(n.addClass("ui-front").css(pos).show().trigger("resize"),setTimeout(function(){n.trigger("resize").mousedown()},200));else if("close"==t)n=e(this).removeClass("ui-front"),n.is(":visible")&&(n.data(a)?n.elfinder("destroy").remove():n.elfinder("close"));else if("instance"==t)return e(this).getElFinder();return this},"function"==typeof i&&i.prototype.i18&&(i.prototype.i18.en={translator:"Troex Nevelin &lt;troex@fury.scancode.ru&gt;, Naoki Sawada &lt;hypweb+elfinder@gmail.com&gt;",language:"English",direction:"ltr",dateFormat:"M d, Y h:i A",fancyDateFormat:"$1 h:i A",nonameDateFormat:"ymd-His",messages:{error:"Error",errUnknown:"Unknown error.",errUnknownCmd:"Unknown command.",errJqui:"Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.",errNode:"elFinder requires DOM Element to be created.",errURL:"Invalid elFinder configuration! URL option is not set.",errAccess:"Access denied.",errConnect:"Unable to connect to backend.",errAbort:"Connection aborted.",errTimeout:"Connection timeout.",errNotFound:"Backend not found.",errResponse:"Invalid backend response.",errConf:"Invalid backend configuration.",errJSON:"PHP JSON module not installed.",errNoVolumes:"Readable volumes not available.",errCmdParams:'Invalid parameters for command "$1".',errDataNotJSON:"Data is not JSON.",errDataEmpty:"Data is empty.",errCmdReq:"Backend request requires command name.",errOpen:'Unable to open "$1".',errNotFolder:"Object is not a folder.",errNotFile:"Object is not a file.",errRead:'Unable to read "$1".',errWrite:'Unable to write into "$1".',errPerm:"Permission denied.",errLocked:'"$1" is locked and can not be renamed, moved or removed.',errExists:'Item named "$1" already exists.',errInvName:"Invalid file name.",errInvDirname:"Invalid folder name.",errFolderNotFound:"Folder not found.",errFileNotFound:"File not found.",errTrgFolderNotFound:'Target folder "$1" not found.',errPopup:"Browser prevented opening popup window. To open file enable it in browser options.",errMkdir:'Unable to create folder "$1".',errMkfile:'Unable to create file "$1".',errRename:'Unable to rename "$1".',errCopyFrom:'Copying files from volume "$1" not allowed.',errCopyTo:'Copying files to volume "$1" not allowed.',errMkOutLink:"Unable to create a link to outside the volume root.",errUpload:"Upload error.",errUploadFile:'Unable to upload "$1".',errUploadNoFiles:"No files found for upload.",errUploadTotalSize:"Data exceeds the maximum allowed size.",errUploadFileSize:"File exceeds maximum allowed size.",errUploadMime:"File type not allowed.",errUploadTransfer:'"$1" transfer error.',errUploadTemp:"Unable to make temporary file for upload.",errNotReplace:'Object "$1" already exists at this location and can not be replaced by object with another type.',errReplace:'Unable to replace "$1".',errSave:'Unable to save "$1".',errCopy:'Unable to copy "$1".',errMove:'Unable to move "$1".',errCopyInItself:'Unable to copy "$1" into itself.',errRm:'Unable to remove "$1".',errTrash:"Unable into trash.",errRmSrc:"Unable remove source file(s).",errExtract:'Unable to extract files from "$1".',errArchive:"Unable to create archive.",errArcType:"Unsupported archive type.",errNoArchive:"File is not archive or has unsupported archive type.",errCmdNoSupport:"Backend does not support this command.",errReplByChild:'The folder "$1" can\'t be replaced by an item it contains.',errArcSymlinks:"For security reason denied to unpack archives contains symlinks or files with not allowed names.",errArcMaxSize:"Archive files exceeds maximum allowed size.",errResize:'Unable to resize "$1".',errResizeDegree:"Invalid rotate degree.",errResizeRotate:"Unable to rotate image.",errResizeSize:"Invalid image size.",errResizeNoChange:"Image size not changed.",errUsupportType:"Unsupported file type.",errNotUTF8Content:'File "$1" is not in UTF-8 and cannot be edited.',errNetMount:'Unable to mount "$1".',errNetMountNoDriver:"Unsupported protocol.",errNetMountFailed:"Mount failed.",errNetMountHostReq:"Host required.",errSessionExpires:"Your session has expired due to inactivity.",errCreatingTempDir:'Unable to create temporary directory: "$1"',errFtpDownloadFile:'Unable to download file from FTP: "$1"',errFtpUploadFile:'Unable to upload file to FTP: "$1"',errFtpMkdir:'Unable to create remote directory on FTP: "$1"',errArchiveExec:'Error while archiving files: "$1"',errExtractExec:'Error while extracting files: "$1"',errNetUnMount:"Unable to unmount.",errConvUTF8:"Not convertible to UTF-8",errFolderUpload:"Try the modern browser, If you'd like to upload the folder.",errSearchTimeout:'Timed out while searching "$1". Search result is partial.',errReauthRequire:"Re-authorization is required.",errMaxTargets:"Max number of selectable items is $1.",errRestore:"Unable to restore from the trash. Can't identify the restore destination.",errEditorNotFound:"Editor not found to this file type.",errServerError:"Error occurred on the server side.",errEmpty:'Unable to empty folder "$1".',cmdarchive:"Create archive",cmdback:"Back",cmdcopy:"Copy",cmdcut:"Cut",cmddownload:"Download",cmdduplicate:"Duplicate",cmdedit:"Edit file",cmdextract:"Extract files from archive",cmdforward:"Forward",cmdgetfile:"Select files",cmdhelp:"About this software",cmdhome:"Root",cmdinfo:"Get info",cmdmkdir:"New folder",cmdmkdirin:"Into New Folder",cmdmkfile:"New text file",cmdopen:"Open",cmdpaste:"Paste",cmdquicklook:"Preview",cmdreload:"Reload",cmdrename:"Rename",cmdrm:"Delete",cmdtrash:"Into trash",cmdrestore:"Restore",cmdsearch:"Find files",cmdup:"Go to parent folder",cmdupload:"Upload files",cmdview:"View",cmdresize:"Resize & Rotate",cmdsort:"Sort",cmdnetmount:"Mount network volume",cmdnetunmount:"Unmount",cmdplaces:"To Places",cmdchmod:"Change mode",cmdopendir:"Open a folder",cmdcolwidth:"Reset column width",cmdfullscreen:"Full Screen",cmdmove:"Move",cmdempty:"Empty the folder",cmdundo:"Undo",cmdredo:"Redo",cmdpreference:"Preferences",cmdselectall:"Select all",cmdselectnone:"Select none",cmdselectinvert:"Invert selection",btnClose:"Close",btnSave:"Save",btnRm:"Remove",btnApply:"Apply",btnCancel:"Cancel",btnNo:"No",btnYes:"Yes",btnMount:"Mount",btnApprove:"Goto $1 & approve",btnUnmount:"Unmount",btnConv:"Convert",btnCwd:"Here",btnVolume:"Volume",btnAll:"All",btnMime:"MIME Type",btnFileName:"Filename",btnSaveClose:"Save & Close",btnBackup:"Backup",btnRename:"Rename",btnRenameAll:"Rename(All)",btnPrevious:"Prev ($1/$2)",btnNext:"Next ($1/$2)",btnSaveAs:"Save As",ntfopen:"Open folder",ntffile:"Open file",ntfreload:"Reload folder content",ntfmkdir:"Creating folder",ntfmkfile:"Creating files",ntfrm:"Delete items",ntfcopy:"Copy items",ntfmove:"Move items",ntfprepare:"Checking existing items",ntfrename:"Rename files",ntfupload:"Uploading files",ntfdownload:"Downloading files",ntfsave:"Save files",ntfarchive:"Creating archive",ntfextract:"Extracting files from archive",ntfsearch:"Searching files",ntfresize:"Resizing images",ntfsmth:"Doing something",ntfloadimg:"Loading image",ntfnetmount:"Mounting network volume",ntfnetunmount:"Unmounting network volume",ntfdim:"Acquiring image dimension",ntfreaddir:"Reading folder infomation",ntfurl:"Getting URL of link",ntfchmod:"Changing file mode",ntfpreupload:"Verifying upload file name",ntfzipdl:"Creating a file for download",ntfparents:"Getting path infomation",ntfchunkmerge:"Processing the uploaded file",ntftrash:"Doing throw in the trash",ntfrestore:"Doing restore from the trash",ntfchkdir:"Checking destination folder",ntfundo:"Undoing previous operation",ntfredo:"Redoing previous undone",volume_Trash:"Trash",dateUnknown:"unknown",Today:"Today",Yesterday:"Yesterday",msJan:"Jan",msFeb:"Feb",msMar:"Mar",msApr:"Apr",msMay:"May",msJun:"Jun",msJul:"Jul",msAug:"Aug",msSep:"Sep",msOct:"Oct",msNov:"Nov",msDec:"Dec",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December",Sunday:"Sunday",Monday:"Monday",Tuesday:"Tuesday",Wednesday:"Wednesday",Thursday:"Thursday",Friday:"Friday",Saturday:"Saturday",Sun:"Sun",Mon:"Mon",Tue:"Tue",Wed:"Wed",Thu:"Thu",Fri:"Fri",Sat:"Sat",sortname:"by name",sortkind:"by kind",sortsize:"by size",sortdate:"by date",sortFoldersFirst:"Folders first",sortperm:"by permission",sortmode:"by mode",sortowner:"by owner",sortgroup:"by group",sortAlsoTreeview:"Also Treeview","untitled file.txt":"NewFile.txt","untitled folder":"NewFolder",Archive:"NewArchive",confirmReq:"Confirmation required",confirmRm:"Are you sure you want to permanently remove items?<br/>This cannot be undone!",confirmRepl:"Replace old file with new one? (If it contains folders, it will be merged. To backup and replace, select Backup.)",confirmRest:"Replace existing item with the item in trash?",confirmConvUTF8:"Not in UTF-8<br/>Convert to UTF-8?<br/>Contents become UTF-8 by saving after conversion.",confirmNonUTF8:"Character encoding of this file couldn't be detected. It need to temporarily convert to UTF-8 for editting.<br/>Please select character encoding of this file.",confirmNotSave:"It has been modified.<br/>Losing work if you do not save changes.",confirmTrash:"Are you sure you want to move items to trash bin?",apllyAll:"Apply to all",name:"Name",size:"Size",perms:"Permissions",modify:"Modified",kind:"Kind",read:"read",write:"write",noaccess:"no access",and:"and",unknown:"unknown",selectall:"Select all items",selectfiles:"Select item(s)",selectffile:"Select first item",selectlfile:"Select last item",viewlist:"List view",viewicons:"Icons view",places:"Places",calc:"Calculate",path:"Path",aliasfor:"Alias for",locked:"Locked",dim:"Dimensions",files:"Files",folders:"Folders",items:"Items",yes:"yes",no:"no",link:"Link",searcresult:"Search results",selected:"selected items",about:"About",shortcuts:"Shortcuts",help:"Help",webfm:"Web file manager",ver:"Version",protocolver:"protocol version",homepage:"Project home",docs:"Documentation",github:"Fork us on Github",twitter:"Follow us on twitter",facebook:"Join us on facebook",team:"Team",chiefdev:"chief developer",developer:"developer",contributor:"contributor",maintainer:"maintainer",translator:"translator",icons:"Icons",dontforget:"and don't forget to take your towel",shortcutsof:"Shortcuts disabled",dropFiles:"Drop files here",or:"or",selectForUpload:"Select files",moveFiles:"Move items",copyFiles:"Copy items",restoreFiles:"Restore items",rmFromPlaces:"Remove from places",aspectRatio:"Aspect ratio",scale:"Scale",width:"Width",height:"Height",resize:"Resize",crop:"Crop",rotate:"Rotate","rotate-cw":"Rotate 90 degrees CW","rotate-ccw":"Rotate 90 degrees CCW",degree:"°",netMountDialogTitle:"Mount network volume",protocol:"Protocol",host:"Host",port:"Port",user:"User",pass:"Password",confirmUnmount:"Are you sure to unmount $1?",dropFilesBrowser:"Drop or Paste files from browser",dropPasteFiles:"Drop files, Paste URLs or images(clipboard) here",encoding:"Encoding",locale:"Locale",searchTarget:"Target: $1",searchMime:"Search by input MIME Type",owner:"Owner",group:"Group",other:"Other",execute:"Execute",perm:"Permission",mode:"Mode",emptyFolder:"Folder is empty",emptyFolderDrop:"Folder is empty\\A Drop to add items",emptyFolderLTap:"Folder is empty\\A Long tap to add items",quality:"Quality",autoSync:"Auto sync",moveUp:"Move up",getLink:"Get URL link",selectedItems:"Selected items ($1)",folderId:"Folder ID",offlineAccess:"Allow offline access",reAuth:"To re-authenticate",nowLoading:"Now loading...",openMulti:"Open multiple files",openMultiConfirm:"You are trying to open the $1 files. Are you sure you want to open in browser?",emptySearch:"Search results is empty in search target.",editingFile:"It is editing a file.",hasSelected:"You have selected $1 items.",hasClipboard:"You have $1 items in the clipboard.",incSearchOnly:"Incremental search is only from the current view.",reinstate:"Reinstate",complete:"$1 complete",contextmenu:"Context menu",pageTurning:"Page turning",volumeRoots:"Volume roots",reset:"Reset",bgcolor:"Background color",colorPicker:"Color picker","8pxgrid":"8px Grid",enabled:"Enabled",disabled:"Disabled",emptyIncSearch:"Search results is empty in current view.\\APress [Enter] to expand search target.",emptyLetSearch:"First letter search results is empty in current view.",textLabel:"Text label",minsLeft:"$1 mins left",openAsEncoding:"Reopen with selected encoding",saveAsEncoding:"Save with the selected encoding",selectFolder:"Select folder",firstLetterSearch:"First letter search",presets:"Presets",tooManyToTrash:"It's too many items so it can't into trash.",TextArea:"TextArea",folderToEmpty:'Empty the folder "$1".',filderIsEmpty:'There are no items in a folder "$1".',preference:"Preference",language:"Language setting",clearBrowserData:"Initialize the settings saved in this browser",toolbarPref:"Toolbar settings",charsLeft:"... $1 chars left.",sum:"Sum",roughFileSize:"Rough file size",autoFocusDialog:"Focus on the element of dialog with mouseover",select:"Select",selectAction:"Action when select file",useStoredEditor:"Open with the editor used last time",selectinvert:"Invert selection",renameMultiple:"Are you sure you want to rename $1 selected items like $2?<br/>This cannot be undone!",batchRename:"Batch rename",plusNumber:"+ Number",asPrefix:"Add prefix",asSuffix:"Add suffix",changeExtention:"Change extention",columnPref:"Columns settings (List view)",reflectOnImmediate:"All changes will reflect immediately to the archive.",reflectOnUnmount:"Any changes will not reflect until un-mount this volume.",unmountChildren:"The following volume(s) mounted on this volume also unmounted. Are you sure to unmount it?",selectionInfo:"Selection Info",hashChecker:"Algorithms to show the file hash",kindUnknown:"Unknown",kindRoot:"Volume Root",kindFolder:"Folder",kindSelects:"Selections",kindAlias:"Alias",kindAliasBroken:"Broken alias",kindApp:"Application",kindPostscript:"Postscript document",kindMsOffice:"Microsoft Office document",kindMsWord:"Microsoft Word document",kindMsExcel:"Microsoft Excel document",kindMsPP:"Microsoft Powerpoint presentation",kindOO:"Open Office document",kindAppFlash:"Flash application",kindPDF:"Portable Document Format (PDF)",kindTorrent:"Bittorrent file",kind7z:"7z archive",kindTAR:"TAR archive",kindGZIP:"GZIP archive",kindBZIP:"BZIP archive",kindXZ:"XZ archive",kindZIP:"ZIP archive",kindRAR:"RAR archive",kindJAR:"Java JAR file",kindTTF:"True Type font",kindOTF:"Open Type font",kindRPM:"RPM package",kindText:"Text document",kindTextPlain:"Plain text",kindPHP:"PHP source",kindCSS:"Cascading style sheet",kindHTML:"HTML document",kindJS:"Javascript source",kindRTF:"Rich Text Format",kindC:"C source",kindCHeader:"C header source",kindCPP:"C++ source",kindCPPHeader:"C++ header source",kindShell:"Unix shell script",kindPython:"Python source",kindJava:"Java source",kindRuby:"Ruby source",kindPerl:"Perl script",kindSQL:"SQL source",kindXML:"XML document",kindAWK:"AWK source",kindCSV:"Comma separated values",kindDOCBOOK:"Docbook XML document",kindMarkdown:"Markdown text",kindImage:"Image",kindBMP:"BMP image",kindJPEG:"JPEG image",kindGIF:"GIF Image",kindPNG:"PNG Image",kindTIFF:"TIFF image",kindTGA:"TGA image",kindPSD:"Adobe Photoshop image",kindXBITMAP:"X bitmap image",kindPXM:"Pixelmator image",kindAudio:"Audio media",kindAudioMPEG:"MPEG audio",kindAudioMPEG4:"MPEG-4 audio",kindAudioMIDI:"MIDI audio",kindAudioOGG:"Ogg Vorbis audio",kindAudioWAV:"WAV audio",AudioPlaylist:"MP3 playlist",kindVideo:"Video media",kindVideoDV:"DV movie",kindVideoMPEG:"MPEG movie",kindVideoMPEG4:"MPEG-4 movie",kindVideoAVI:"AVI movie",kindVideoMOV:"Quick Time movie",kindVideoWM:"Windows Media movie",kindVideoFlash:"Flash movie",kindVideoMKV:"Matroska movie",kindVideoOGG:"Ogg movie"}}),e.fn.elfinderbutton=function(t){return this.each(function(){var n,i="class",a=t.fm,o=a.res(i,"disabled"),r=a.res(i,"active"),s=a.res(i,"hover"),l="elfinder-button-menu-item",c="elfinder-button-menu-item-selected",d=e('<span class="elfinder-button-text">'+t.title+"</span>"),p=e(this).addClass("ui-state-default elfinder-button").attr("title",t.title).append('<span class="elfinder-button-icon elfinder-button-icon-'+(t.className?t.className:t.name)+'"/>',d).on("mouseenter mouseleave",function(e){!p.hasClass(o)&&p["mouseleave"==e.type?"removeClass":"addClass"](s)}).on("click",function(e){p.hasClass(o)||(n&&t.variants.length>=1?(n.is(":hidden")&&a.getUI().click(),e.stopPropagation(),n.css(h()).slideToggle(100)):a.exec(t.name,f(),{_userAction:!0,_currentType:"toolbar",_currentNode:p}))}),u=function(){n.hide()},h=function(){var e=a.getUI().offset(),t=p.offset();return{top:t.top-e.top,left:t.left-e.left}},f=function(){var e,t=a.selected();return t.length||(t=(e=a.cwd())?[a.cwd().hash]:void 0),t};d.hide(),t.button=p,Array.isArray(t.variants)&&(p.addClass("elfinder-menubutton"),n=e('<div class="ui-front ui-widget ui-widget-content elfinder-button-menu ui-corner-all"/>').hide().appendTo(a.getUI()).on("mouseenter mouseleave","."+l,function(){e(this).toggleClass(s)}).on("click","."+l,function(i){var o=e(this).data("value");i.preventDefault(),i.stopPropagation(),p.removeClass(s),n.hide(),"undefined"==typeof o&&(o={}),"object"==typeof o&&(o._userAction=!0),a.exec(t.name,f(),o)}),a.bind("disable select",u).getUI().on("click",u),t.change(function(){n.html(""),e.each(t.variants,function(i,a){n.append(e('<div class="'+l+'">'+a[1]+"</div>").data("value",a[0]).addClass(a[0]==t.value?c:""))})})),t.change(function(){t.disabled()?p.removeClass(r+" "+s).addClass(o):(p.removeClass(o),p[t.active()?"addClass":"removeClass"](r)),t.syncTitleOnChange&&(d.html(t.title),p.attr("title",t.title))}).change()})},e.fn.elfindercontextmenu=function(t){return this.each(function(){var n,i,a,o,r,s,l,c=(e(this),"elfinder-contextmenu-item"),d="elfinder-contextsubmenu-item",p="elfinder-contextmenu-extra-icon",u={distance:8,start:function(){h.data("drag",!0).data("touching")&&h.find(".ui-state-hover").removeClass("ui-state-hover")},stop:function(){h.data("draged",!0).removeData("drag")}},h=e(this).addClass("touch-punch ui-helper-reset ui-front ui-widget ui-state-default ui-corner-all elfinder-contextmenu elfinder-contextmenu-"+t.direction).hide().on("touchstart",function(e){h.data("touching",!0).children().removeClass("ui-state-hover")}).on("touchend",function(e){h.removeData("touching")}).on("mouseenter mouseleave","."+c,function(t){e(this).toggleClass("ui-state-hover",!("mouseenter"!==t.type&&(h.data("draged")||!h.data("submenuKeep")))),h.data("draged")&&h.data("submenuKeep")&&h.find(".elfinder-contextmenu-sub:visible").parent().addClass("ui-state-hover")}).on("mouseenter mouseleave","."+p,function(t){e(this).parent().toggleClass("ui-state-hover","mouseleave"===t.type)}).on("mouseenter mouseleave","."+c+",."+d,function(t){var n=function(t,n){e.each(n?r:a,function(e,i){if(t[0]===i)return(n?r:a)._cur=e,n?s=t:o=t,!1})};if(t.originalEvent){var i=e(this),l=function(){o&&!o.children("div.elfinder-contextmenu-sub:visible").length&&o.removeClass("ui-state-hover")};"mouseenter"===t.type?i.hasClass(d)?(s&&s.removeClass("ui-state-hover"),o&&(r=o.find("div."+d)),n(i,!0)):(l(),n(i)):i.hasClass(d)?(s=null,r=null):(l(),function(e){setTimeout(function(){e===o&&(o=null)},250)}(o))}}).on("contextmenu",function(){return!1}).on("mouseup",function(){setTimeout(function(){h.removeData("draged")},100)}).draggable(u),f="ltr"==t.direction?"left":"right",m=Object.assign({},t.options.contextmenu),g='<div class="'+c+'{className}"><span class="elfinder-button-icon {icon} elfinder-contextmenu-icon"{style}/><span>{label}</span></div>',v=function(n,i,a,o){var r="",s="",l="";return o&&(o.className&&(r=" "+o.className),o.iconClass&&(l=o.iconClass,i=""),o.iconImg&&(s=" style=\"background:url('"+t.escape(o.iconImg)+"') 0 0 no-repeat;background-size:contain;\"")),e(g.replace("{icon}",i?"elfinder-button-icon-"+i:l?l:"").replace("{label}",n).replace("{style}",s).replace("{className}",r)).on("click",function(e){e.stopPropagation(),e.preventDefault(),a()})},b=function(e){return{backgroundImage:'url("'+e+'")',backgroundRepeat:"no-repeat",backgroundSize:"contain"}},y=function(){var n="touchstart.contextmenuAutoToggle";h.data("hideTm")&&clearTimeout(h.data("hideTm")),h.is(":visible")&&h.on("touchstart",function(e){e.originalEvent.touches.length>1||(h.stop().show(),h.data("hideTm")&&clearTimeout(h.data("hideTm")))}).data("hideTm",setTimeout(function(){h.is(":visible")&&(i.find(".elfinder-cwd-file").off(n),i.find(".elfinder-cwd-file.ui-selected").one(n,function(t){if(!(t.originalEvent.touches.length>1)){var a=e(t.target);return!h.first().length||a.is("input:checkbox")||a.hasClass("elfinder-cwd-select")?void i.find(".elfinder-cwd-file").off(n):(x(t.originalEvent.touches[0].pageX,t.originalEvent.touches[0].pageY),!1)}}).one("unselect."+t.namespace,function(){i.find(".elfinder-cwd-file").off(n)}),h.fadeOut({duration:300,fail:function(){h.css("opacity","1").show()}}))},4500))},w=function(n){var i=n.keyCode,l=e.ui.keyCode.ESCAPE,c=e.ui.keyCode.ENTER,p=e.ui.keyCode.LEFT,u=e.ui.keyCode.RIGHT,h=e.ui.keyCode.UP,f=e.ui.keyCode.DOWN,m="ltr"===t.direction?u:p,g=m===u?p:u;e.inArray(i,[l,c,p,u,h,f])!==-1&&(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),i==l||i===g?o&&r&&s?(s.trigger("mouseleave"),o.addClass("ui-state-hover"),r=null,s=null):i==l&&k():i==h||i==f?r?(s&&s.trigger("mouseleave"),i==f&&(!s||r.length<=++r._cur)?r._cur=0:i==h&&(!s||--r._cur<0)&&(r._cur=r.length-1),s=r.eq(r._cur).trigger("mouseenter")):(r=null,o&&o.trigger("mouseleave"),i==f&&(!o||a.length<=++a._cur)?a._cur=0:i==h&&(!o||--a._cur<0)&&(a._cur=a.length-1),o=a.eq(a._cur).addClass("ui-state-hover")):!o||i!=c&&i!==m||(o.hasClass("elfinder-contextmenu-group")?s?i==c&&s.click():(o.trigger("mouseenter"),r=o.find("div."+d),r._cur=0,s=r.first().addClass("ui-state-hover")):i==c&&o.click()))},x=function(i,a,c){var d,p=h.outerWidth(),u=h.outerHeight(),m=n.attr("style"),g=n.offset(),v=n.width(),b=n.height(),x=t.UA.Mobile?40:2,C=t.UA.Mobile?20:2,i=i-(g?g.left:0),a=a-(g?g.top:0),c=Object.assign(c||{},{top:Math.max(0,a+C+u<b?a+C:a-(a+u-b)),left:Math.max(0,i<p+x||i+x+p<v?i+x:i-x-p),opacity:"1"});l=!0,t.autoSync("stop"),n.width(v),h.stop().removeAttr("style").css(c),t.toFront(h),h.show(),n.attr("style",m),c[f]=parseInt(h.width()),h.find(".elfinder-contextmenu-sub").css(c),t.UA.iOS&&e("div.elfinder div.overflow-scrolling-touch").css("-webkit-overflow-scrolling","auto"),o=null,r=null,s=null,e(document).on("keydown."+t.namespace,w),d=e._data(document).events,d&&d.keydown&&d.keydown.unshift(d.keydown.pop()),t.UA.Mobile&&y(),setTimeout(function(){t.getUI().one("click."+t.namespace,k)},0)},k=function(){if(t.getUI().off("click."+t.namespace,k),e(document).off("keydown."+t.namespace,w),S&&(t.select({selected:S}),S=null),z=I=null,h.is(":visible")||h.children().length){h.removeAttr("style").hide().empty().removeData("submenuKeep");try{h.draggable("instance")||h.draggable(u)}catch(n){h.hasClass("ui-draggable")||h.draggable(u)}h.data("prevNode")&&(h.data("prevNode").after(h),h.removeData("prevNode")),t.trigger("closecontextmenu"),t.UA.iOS&&e("div.elfinder div.overflow-scrolling-touch").css("-webkit-overflow-scrolling","touch")}l&&t.searchStatus.state<1&&!t.searchStatus.ininc&&t.autoSync(),l=!1},C=function(i,o){var r,s=!1,l=!1,u=[],g="cwd"===i,y=0;z=i,I=o,(r=t.option("uiCmdMap",g?void 0:o[0]))||(r={}),g||(u=t.getDisabledCmds(o)),"navbar"===i&&(S=t.selected(),t.select({selected:o,origin:"navbar"})),y=t.selected().length,y>1&&h.append('<div class="ui-corner-top ui-widget-header elfinder-contextmenu-header"><span>'+t.i18n("selectedItems",""+y)+"</span></div>"),a=e(),e.each(m[i]||[],function(m,y){var w,x,C,T,z,I;if("|"===y)return void(s&&(l=!0));if(r[y]?(x=r[y],C=!0):x=y,w=t.getCommand(x),!w||g||t.searchStatus.state&&w.disableOnSearch||(w.__disabled=w._disabled,w._disabled=!(w.alwaysEnabled||!!t._commands[x]&&!(e.inArray(y,u)!==-1||C&&u[x])),e.each(w.linkedCmds,function(e,n){var i;(i=t.getCommand(n))&&(i.__disabled=i._disabled,i._disabled=!(i.alwaysEnabled||!!t._commands[n]&&!u[n]))})),w&&!w._disabled&&w.getstate(o)!=-1){if(w.variants){if(!w.variants.length)return;T=v(w.title,w.className?w.className:w.name,function(){}),z=e('<div class="ui-front ui-corner-all elfinder-contextmenu-sub"/>').hide().appendTo(T.append('<span class="elfinder-contextmenu-arrow"/>')),I=function(e){if(e){var i=n.attr("style");n.width(n.width()),z.css({left:"auto",right:"auto"});var a,o,r,s=T.offset(),l=s.left,c=s.top,d=T.outerWidth(),p=z.outerWidth(!0),u=z.outerHeight(!0),m=n.offset(),g=m.left+n.width(),v=m.top+n.height();r=l+d+p-g,a=l>p&&r>0?t.UA.Mobile?10-p:d-r:d,"right"===f&&l<p&&(a=t.UA.Mobile?30-d:d-(p-l)),r=c+5+u-v,o=r>0&&c<v?5-r:r>0?30-u:5,h.find(".elfinder-contextmenu-sub:visible").hide(),z.css({top:o}).css(f,a).show(),n.attr("style",i)}else z.hide()},T.addClass("elfinder-contextmenu-group").on("mouseleave",".elfinder-contextmenu-sub",function(e){h.data("draged")||h.removeData("submenuKeep")}).on("click","."+d,function(n){var a,r;n.stopPropagation(),h.data("draged")||(h.hide(),r=e(this),a=r.data("exec"),"undefined"==typeof a&&(a={}),"object"==typeof a&&(a._userAction=!0,a._currentType=i,a._currentNode=r),k(),t.exec(w.name,o,a))}).on("touchend",function(e){h.data("drag")||(I(!0),h.data("submenuKeep",!0))}).on("mouseenter mouseleave",function(e){h.data("touching")||(T.data("timer")&&(clearTimeout(T.data("timer")),T.removeData("timer")),"mouseleave"===e.type?h.data("submenuKeep")||T.data("timer",setTimeout(function(){T.removeData("timer"),I(!1)},250)):T.data("timer",setTimeout(function(){T.removeData("timer"),I(!0)},a.find("div.elfinder-contextmenu-sub:visible").length?250:0)))}),e.each(w.variants,function(t,n){var i,a="|"===n?'<div class="elfinder-contextmenu-separator"/>':e('<div class="'+c+" "+d+'"><span>'+n[1]+"</span></div>").data("exec",n[0]);"undefined"!=typeof n[2]&&(i=e("<span/>").addClass("elfinder-button-icon elfinder-contextmenu-icon"),/\//.test(n[2])?i.css(b(n[2])):i.addClass("elfinder-button-icon-"+n[2]),a.prepend(i).addClass(d+"-icon")),z.append(a)})}else T=v(w.title,w.className?w.className:w.name,function(){h.data("draged")||(k(),t.exec(w.name,o,{_userAction:!0,_currentType:i,_currentNode:T}))}),w.extra&&w.extra.node?(e('<span class="elfinder-button-icon elfinder-button-icon-'+(w.extra.icon||"")+" "+p+'"/>').append(w.extra.node).appendTo(T),
e(w.extra.node).trigger("ready",{targets:o})):T.remove("."+p);w.extendsCmd&&T.children("span.elfinder-button-icon").addClass("elfinder-button-icon-"+w.extendsCmd),l&&h.append('<div class="elfinder-contextmenu-separator"/>'),h.append(T),s=!0,l=!1}w&&"undefined"!=typeof w.__disabled&&(w._disabled=w.__disabled,delete w.__disabled,e.each(w.linkedCmds,function(e,n){var i;(i=t.getCommand(n))&&(i._disabled=i.__disabled,delete i.__disabled)}))}),a=h.children("div."+c)},T=function(t){z="raw",e.each(t,function(e,t){var n;"|"===t?h.append('<div class="elfinder-contextmenu-separator"/>'):t.label&&"function"==typeof t.callback&&(n=v(t.label,t.icon,function(){h.data("draged")||(!t.remain&&k(),t.callback())},t.options||null),h.append(n))}),a=h.children("div."+c)},z=null,I=null,S=null;t.one("load",function(){n=t.getUI(),i=t.getUI("cwd"),t.bind("contextmenu",function(n){var a,o=n.data,r={};o.type&&"files"!==o.type&&i.trigger("unselectall"),k(),o.type&&o.targets?(t.trigger("contextmenucreate",o),C(o.type,o.targets),t.trigger("contextmenucreatedone",o)):o.raw&&T(o.raw),h.children().length&&(a=o.prevNode||null,a&&(h.data("prevNode",h.prev()),a.after(h)),o.fitHeight&&(r={maxHeight:Math.min(t.getUI().height(),e(window).height()),overflowY:"auto"},h.draggable("destroy").removeClass("ui-draggable")),x(o.x,o.y,r),o.opened&&"function"==typeof o.opened&&o.opened.call(h))}).one("destroy",function(){h.remove()}).bind("disable",k).bind("select",function(e){"files"===z&&(!e.data||e.data.selected.toString()!==I.toString())&&k()})}).shortcut({pattern:"mac"===t.OS?"ctrl+m":"contextmenu shift+f10",description:"contextmenu",callback:function(n){n.stopPropagation(),n.preventDefault(),e(document).one("contextmenu."+t.namespace,function(e){e.preventDefault(),e.stopPropagation()});var i,a,o,r,s=t.selected();s.length?(i="files",a=s,r=e("#"+t.cwdHash2Id(s[0]))):(i="cwd",a=[t.cwd().hash],o=t.getUI("workzone").offset()),r&&r.length||(r=t.getUI("workzone")),o=r.offset(),o.top+=r.height()/2,o.left+=r.width()/2,t.trigger("contextmenu",{type:i,targets:a,x:o.left,y:o.top})}})})},e.fn.elfindercwd=function(t,n){return this.not(".elfinder-cwd").each(function(){var i,a,o,r=t.UA.Mobile,s="list"==t.viewType,l="select."+t.namespace,c="unselect."+t.namespace,d="disable."+t.namespace,p="enable."+t.namespace,u="class",h=t.res(u,"cwdfile"),f="."+h+(n.oldSchool?":not(.elfinder-cwd-parent)":""),m="ui-selected",g=t.res(u,"disabled"),v=t.res(u,"draggable"),b=t.res(u,"droppable"),y=t.res(u,"hover"),w=t.res(u,"adroppable"),x=h+"-tmp",k=t.options.loadTmbs>0?t.options.loadTmbs:5,C="",T={},z=[],I=[],S=void 0,A=[],O="",j=function(){for(var e="",t=0;t<A.length;t++)e+='<td class="elfinder-col-'+A[t]+'">{'+A[t]+"}</td>";return e},D=function(){return'<tr id="{id}" class="'+h+' {permsclass} {dirclass}" title="{tooltip}"{css}><td class="elfinder-col-name"><div class="elfinder-cwd-file-wrapper"><span class="elfinder-cwd-icon {mime}"{style}/>{marker}<span class="elfinder-cwd-filename">{name}</span></div>'+M+"</td>"+j()+"</tr>"},M=e.map(n.showSelectCheckboxUA,function(e){return!(!t.UA[e]&&!e.match(/^all$/i))||null}).length?'<div class="elfinder-cwd-select"><input type="checkbox"></div>':"",U=!1,E=null,F={icon:'<div id="{id}" class="'+h+' {permsclass} {dirclass} ui-corner-all" title="{tooltip}"><div class="elfinder-cwd-file-wrapper ui-corner-all"><div class="elfinder-cwd-icon {mime} ui-corner-all" unselectable="on"{style}/>{marker}</div><div class="elfinder-cwd-filename" title="{nametitle}">{name}</div>'+M+"</div>",row:""},P=t.res("tpl","perms"),R=t.res("tpl","lock"),H=t.res("tpl","symlink"),q={id:function(e){return t.cwdHash2Id(e.hash)},name:function(e){var n=t.escape(e.i18||e.name);return!s&&(n=n.replace(/([_.])/g,"&#8203;$1")),n},nametitle:function(e){return t.escape(e.i18||e.name)},permsclass:function(e){return t.perms2class(e)},perm:function(e){return t.formatPermissions(e)},dirclass:function(e){var i="directory"==e.mime?"directory":"";return e.isroot&&(i+=" isroot"),e.csscls&&(i+=" "+t.escape(e.csscls)),n.getClass&&(i+=" "+n.getClass(e)),i},style:function(e){return e.icon?t.getIconStyle(e):""},mime:function(e){return t.mime2class(e.mime)},size:function(e){return"directory"!==e.mime||e.size?t.formatSize(e.size):"-"},date:function(e){return t.formatDate(e)},kind:function(e){return t.mime2kind(e)},mode:function(e){return e.perm?t.formatFileMode(e.perm):""},modestr:function(e){return e.perm?t.formatFileMode(e.perm,"string"):""},modeoct:function(e){return e.perm?t.formatFileMode(e.perm,"octal"):""},modeboth:function(e){return e.perm?t.formatFileMode(e.perm,"both"):""},marker:function(e){return(e.alias||"symlink-broken"==e.mime?H:"")+(e.read&&e.write?"":P)+(e.locked?R:"")},tooltip:function(e){var n=t.formatDate(e)+(e.size>0?" ("+t.formatSize(e.size)+")":""),i="";return i=C&&e.path?t.escape(e.path.replace(/\/[^\/]*$/,"")):e.tooltip?t.escape(e.tooltip).replace(/\r/g,"&#13;"):"",s&&(i+=(i?"&#13;":"")+t.escape(e.i18||e.name)),i?i+"&#13;"+n:n}},_={},N=function(n,a){var o,r,s;if(n&&!_[n]&&("undefined"==typeof i&&(e("#elfinderAddBadgeStyle"+t.namespace).length&&e("#elfinderAddBadgeStyle"+t.namespace).remove(),i=e('<style id="addBadgeStyle'+t.namespace+'"/>').insertBefore(e("head").children(":first")).get(0).sheet||null),i)){if(n=n.toLowerCase(),s=n.split("/"),r=t.escape(t.mimeTypes[n]||(a.replace(/.bac?k$/i,"").match(/\.([^.]+)$/)||["",""])[1])){o=".elfinder-cwd-icon-"+s[0].replace(/(\.|\+)/g,"-"),"undefined"!=typeof s[1]&&(o+=".elfinder-cwd-icon-"+s[1].replace(/(\.|\+)/g,"-"));try{i.insertRule(o+':before{content:"'+r.toLowerCase()+'"}',0)}catch(l){}}_[n]=!0}},L=function(e){return e.mime&&"directory"!==e.mime&&!_[e.mime]&&N(e.mime,e.name),F[s?"row":"icon"].replace(/\{([a-z0-9_]+)\}/g,function(n,i){return q[i]?q[i](e,t):e[i]?e[i]:""})},W=e(),B=!1,$=function(t,n){function i(e,t){return e[t+"All"]("[id]:not(."+g+"):not(.elfinder-cwd-parent):first")}var a,o,r,d,p,u=e.ui.keyCode,h=t==u.LEFT||t==u.UP,f=Ie.find("[id]."+m);if(f.length)if(a=f.filter(h?":first":":last"),r=i(a,h?"prev":"next"),r.length)if(s||t==u.LEFT||t==u.RIGHT)o=r;else if(d=a.position().top,p=a.position().left,o=a,h){do o=o.prev("[id]");while(o.length&&!(o.position().top<d&&o.position().left<=p));o.hasClass(g)&&(o=i(o,"next"))}else{do o=o.next("[id]");while(o.length&&!(o.position().top>d&&o.position().left>=p));o.hasClass(g)&&(o=i(o,"prev")),o.length||(r=Ie.find("[id]:not(."+g+"):last"),r.position().top>d&&(o=r))}else o=a;else o=W.length?h?W.prev():W:Ie.find("[id]:not(."+g+"):not(.elfinder-cwd-parent):"+(h?"last":"first"));o&&o.length&&!o.hasClass("elfinder-cwd-parent")&&(a&&n?o=a.add(a[h?"prevUntil":"nextUntil"]("#"+o.attr("id"))).add(o):f.trigger(c),o.trigger(l),ee(o.filter(h?":first":":last")),Z())},V={},X=function(n){e("#"+t.cwdHash2Id(n)).trigger(l)},K=!1,G=function(){t.cwd().hash;M&&Oe.find("input").prop("checked",!0),t.lazy(function(){var n;Ie.find("[id]:not(."+m+"):not(.elfinder-cwd-parent)").trigger(l),t.maxTargets&&(S||I).length>t.maxTargets?(n=e.map(S||I,function(e){return t.file(e)||null}),n=n.slice(0,t.maxTargets),V={},e.each(n,function(e,t){V[t.hash]=!0}),t.toast({mode:"warning",msg:t.i18n(["errMaxTargets",t.maxTargets])})):V=t.arrayFlip(S||I,!0),Z(),M&&Oe.data("pending",!1)},0,{repaint:!0})},J=function(){M&&Oe.find("input").prop("checked",!1),Object.keys(V).length&&(B=!1,V={},Ie.find("[id]."+m).trigger(c),M&&Ie.find("input:checkbox").prop("checked",!1)),Z(),M&&Oe.data("pending",!1),Ie.removeClass("elfinder-cwd-allselected")},Y=function(){var n={};K?J():Object.keys(V).length?(e.each(S||I,function(i,a){var o=e("#"+t.cwdHash2Id(a));V[a]?o.length&&o.trigger(c):(n[a]=!0,o.length&&o.trigger(l))}),V=n,Z()):G()},Q=void 0,Z=function(){var e=Object.keys(V),n={selected:e};K=e.length&&e.length===(S||I).length&&(!t.maxTargets||e.length<=t.maxTargets),M&&(Oe.find("input").prop("checked",K),Ie[K?"addClass":"removeClass"]("elfinder-cwd-allselected")),K?n.selectall=!0:e.length||(n.unselectall=!0),t.trigger("select",n)},ee=function(e,n){if(e.length){var i=e.position().top,a=e.outerHeight(!0),o=Se.scrollTop(),r=Se.get(0).clientHeight,l=he?he.outerHeight(!0):0;i+l+a>o+r?Se.scrollTop(parseInt(i+l+a-r)):i<o&&Se.scrollTop(i),s&&Se.scrollLeft(0),!!n&&t.resources.blink(e,"lookme")}},te=[],ne={},ie=function(e){for(var t=te.length;t--;)if(te[t].hash==e)return t;return-1},ae="elfscrstart",oe="elfscrstop",re=!1,se={disabled:!0,filter:"[id]:first",stop:Z,delay:250,appendTo:"body",autoRefresh:!1,selected:function(t,n){e(n.selected).trigger(l)},unselected:function(t,n){e(n.unselected).trigger(c)}},le={},ce=function(n){var i,a=Ie.data("selectable"),o=function(){var n=Se.offset(),i=e(window),a=n.left-i.scrollLeft()+("ltr"===t.direction?30:Se.width()-30),o=n.top-i.scrollTop()+10+(s?ne.itemH||24:0);return{left:Math.max(0,Math.round(a)),top:Math.max(0,Math.round(o))}}(),r=e(document.elementFromPoint(o.left,o.top)),l={},c={},d=ne.hpi?Math.ceil(Ue.data("rectangle").height/ne.hpi*1.5):pe,p=function(){var e,n=r.attr("id");n&&(ne.getTmbs=[],e=t.cwdId2Hash(n),le[e]=n,ne.attachTmbs[e]&&(c[e]=ne.attachTmbs[e]),a&&(l[n]=!0)),r=r.next()},u=function(){var e;Ie.data("selectable")&&(Object.assign(l,V),e=Object.keys(l),e.length&&(se.filter="#"+e.join(", #"),Ie.selectable("enable").selectable("option",{filter:se.filter}).selectable("refresh"))),Object.keys(c).length&&(ne.getTmbs=[],be(c))};if(le={},a&&Ie.selectable("option","disabled"),r.length&&(r.hasClass(h)||(r=r.closest(f)),r.attr("id")))if(n){for(var m=0;m<d&&(p(),r.length);m++);u()}else ne.repaintJob&&ne.repaintJob._abort(),i=new Array(d),ne.repaintJob=t.asyncJob(function(){p(),r.length||ne.repaintJob&&ne.repaintJob._abort(!0)},i).done(u)},de=function(n){var i=t.cwd().p,a=t.file(i)||null,o=function(n){n&&(Me=e(L(e.extend(!0,{},n,{name:"..",i18:"..",mime:"directory"}))).addClass("elfinder-cwd-parent").on("dblclick",function(){var e=t.cwdId2Hash(this.id);t.trigger("select",{selected:[e]}).exec("open",e)}),(s?Me.children("td:first"):Me).children(".elfinder-cwd-select").remove(),(s?Ie.find("tbody"):Ie).prepend(Me))};a?o(a):t.getUI("tree").length?t.one("parents",function(){o(t.file(i)||null),Se.trigger(oe)}):t.request({data:{cmd:"parents",target:t.cwd().hash},preventFail:!0}).done(function(e){o(t.file(i)||null),Se.trigger(oe)})},pe=t.options.showFiles,ue=function(){if(!(ne.rendering||ne.renderd&&!te.length)){var i,a,o=s?Ie.children("table").children("tbody"):Ie,c=!!e.htmlPrefilter,d=e(c?document.createDocumentFragment():"<div/>"),p=function(n){var i,a,p,u=n||null,h=[],f=!1,g={},v="self"===t.option("tmbUrl"),b=!ne.renderd;i=te.splice(0,pe+(u||0)/(ne.hpi||1)),ne.renderd+=i.length,te.length||(Ae.hide(),Se.off(oe,ue)),a=[],h=e.map(i,function(e){return e.hash&&e.name?("directory"==e.mime&&(f=!0),(e.tmb||v&&0===e.mime.indexOf("image/"))&&(g[e.hash]=e.tmb),T[e.hash]&&a.push(e.hash),L(e)):null}),d.empty().append(h.join("")),f&&!r&&ve(d),p=[],Object.keys(V).length&&d.find("[id]:not(."+m+"):not(.elfinder-cwd-parent)").each(function(){V[t.cwdId2Hash(this.id)]&&p.push(e(this))}),o.append(c?d:d.children()),p.length&&(e.each(p,function(e,t){t.trigger(l)}),Z()),a.length&&t.trigger("lockfiles",{files:a}),!ne.hpi&&Ce(o,i.length),s&&(Ie.find("thead").show(),fe({fitWidth:!E})),Object.keys(g).length&&Object.assign(ne.attachTmbs,g),b&&(r||Ie.data("selectable")||Ie.selectable(se).data("selectable",!0),ce(!0)),!re&&Se.trigger(oe)};ne.renderd||(ne.rendering=!0,Se.scrollTop(0),i=t.cwd().phash,p(),n.oldSchool&&i&&!C&&de(i),s&&(E&&me(),fe({fitWidth:!0})),ne.itemH=(s?o.find("tr:first"):o.find("[id]:first")).outerHeight(!0),t.trigger("cwdrender"),ne.rendering=!1),!ne.rendering&&te.length&&(a=Se.height()+Se.scrollTop()+t.options.showThreshold+ne.row-ne.renderd*ne.hpi)>0&&(ne.rendering=!0,t.lazy(function(){p(a),ne.rendering=!1}))}},he=null,fe=function(i){if(n.listView.fixedHeader){var a,o,r,s,l,c,d,p,u,h,f,m,g,v=function(){var e;e="ltr"===t.direction?Se.scrollLeft()*-1:r.outerWidth(!0)-Se.width()-Se.scrollLeft(),o.css("left")!==e&&o.css("left",e)},b=i||{};if(l=Ie.find("tbody"),p=l.children("tr:first"),p.length){if(r=l.parent(),he?(s=e("#"+t.namespace+"-cwd-thead"),d=s.children("tr:first")):(g=!0,l.addClass("elfinder-cwd-fixheader"),s=Ie.find("thead").attr("id",t.namespace+"-cwd-thead"),d=s.children("tr:first"),c=d.outerHeight(!0),Ie.css("margin-top",c-parseInt(r.css("padding-top"))),o=e("<div/>").addClass(Ie.attr("class")).append(e("<table/>").append(s)),he=e("<div/>").addClass(Se.attr("class")+" elfinder-cwd-fixheader").removeClass("ui-droppable native-droppable").css(Se.position()).css({height:c,width:Ie.outerWidth()}).append(o),"rtl"===t.direction&&he.css("left",Se.data("width")-Se.width()+"px"),v(),Se.after(he).on("scroll.fixheader resize.fixheader",function(e){v(),"resize"===e.type&&(e.stopPropagation(),he.css(Se.position()),Se.data("width",Se.css("overflow","hidden").width()),Se.css("overflow","auto"),fe())})),g||b.fitWidth||Math.abs(p.outerWidth()-d.outerWidth())>2){a=A.length+1;for(var y=0;y<a&&(u=d.children("td:eq("+y+")"),h=p.children("td:eq("+y+")"),f=u.width(),m=h.width(),"undefined"==typeof u.data("delta")&&u.data("delta",u.outerWidth()-f-(h.outerWidth()-m)),m-=u.data("delta"),g||b.fitWidth||f!==m);y++)u.css("width",m+"px")}he.data("widthTimer")&&clearTimeout(he.data("widthTimer")),he.data("widthTimer",setTimeout(function(){he&&(he.css("width",Ie.outerWidth()+"px"),"rtl"===t.direction&&he.css("left",Se.data("width")-Se.width()+"px"))},10))}}},me=function(){if(s&&E){var t,n="elfinder-cwd-colwidth",i=Ie.find("tr[id]:first");i.hasClass(n)||(t=Ie.find("tr."+n),t.removeClass(n).find("td").css("width",""),i.addClass(n),Ie.find("table:first").css("table-layout","fixed"),e.each(e.merge(["name"],A),function(e,t){var n=E[t]||i.find("td.elfinder-col-"+t).width();i.find("td.elfinder-col-"+t).width(n)}))}},ge=Object.assign({},t.droppable,{over:function(n,i){var a,o,r,s=e(this),l=i.helper,c=n.shiftKey||n.ctrlKey||n.metaKey;return n.stopPropagation(),l.data("dropover",l.data("dropover")+1),s.data("dropover",!0),l.data("namespace")===t.namespace&&t.insideWorkzone(n.pageX,n.pageY)?(s.hasClass(t.res(u,"cwdfile"))?(a=t.cwdId2Hash(s.attr("id")),s.data("dropover",a)):(a=t.cwd().hash,t.cwd().write&&s.data("dropover",a)),r=t.file(l.data("files")[0]).phash===a,s.data("dropover")===a?e.each(l.data("files"),function(e,t){if(t===a||r&&!c&&!l.hasClass("elfinder-drag-helper-plus"))return s.removeClass(w),!1}):s.removeClass(w),l.data("locked")||r?o="elfinder-drag-helper-plus":(o="elfinder-drag-helper-move",c&&(o+=" elfinder-drag-helper-plus")),s.hasClass(w)&&l.addClass(o),void setTimeout(function(){s.hasClass(w)&&l.addClass(o)},20)):(s.removeClass(w),void l.removeClass("elfinder-drag-helper-move elfinder-drag-helper-plus"))},out:function(t,n){var i=n.helper;t.stopPropagation(),i.removeClass("elfinder-drag-helper-move elfinder-drag-helper-plus").data("dropover",Math.max(i.data("dropover")-1,0)),e(this).removeData("dropover").removeClass(w)},deactivate:function(){e(this).removeData("dropover").removeClass(w)},drop:function(e,n){J(),t.droppable.drop.call(this,e,n)}}),ve=function(n){n=n?n:s?Ie.find("tbody"):Ie;var i=n.children(".directory:not(."+b+",.elfinder-na,.elfinder-ro)");t.isCommandEnabled("paste")&&i.droppable(ge),t.isCommandEnabled("upload")&&i.addClass("native-droppable"),n.children(".isroot").each(function(n,i){var a=e(i),o=t.cwdId2Hash(i.id);t.isCommandEnabled("paste",o)?a.hasClass(b+",elfinder-na,elfinder-ro")||a.droppable(ge):a.hasClass(b)&&a.droppable("destroy"),t.isCommandEnabled("upload",o)?a.hasClass("native-droppable,elfinder-na,elfinder-ro")||a.addClass("native-droppable"):a.hasClass("native-droppable")&&a.removeClass("native-droppable")})},be=function(n,i){var a=function(t,n){e("<img/>").on("load",function(){t.find(".elfinder-cwd-icon").addClass(n.className).css("background-image","url('"+n.url+"')")}).attr("src",n.url)},o=function(n,o){var r,s,l=e("#"+t.cwdHash2Id(n));l.length&&("1"!=o?(r=t.file(n),r.tmb!==o&&(r.tmb=o),s=t.tmb(r),i?l.find(".elfinder-cwd-icon").addClass(s.className).css("background-image","url('"+s.url+"')"):a(l,s),delete ne.attachTmbs[n]):i?ye([n]):ne.tmbLoading[n]||ne.getTmbs.push(n))};e.isPlainObject(n)&&Object.keys(n).length&&(Object.assign(ne.attachTmbs,n),e.each(n,o),i||!ne.getTmbs.length||Object.keys(ne.tmbLoading).length||ye())},ye=function(n){var i=[],a=!1;return t.oldAPI?void t.request({data:{cmd:"tmb",current:t.cwd().hash},preventFail:!0}).done(function(e){e.images&&Object.keys(e.images).length&&be(e.images),e.tmb&&ye()}):(n?(a=!0,i=n.splice(0,k)):i=ne.getTmbs.splice(0,k),void(i.length&&(a||le[i[0]]||le[i[i.length-1]])&&(e.each(i,function(e,t){ne.tmbLoading[t]=!0}),t.request({data:{cmd:"tmb",targets:i},preventFail:!0}).done(function(t){var o,r=[];t.images&&((o=Object.keys(t.images).length)?(o<i.length&&e.each(i,function(e,n){t.images[n]||r.push(n)}),be(t.images,a)):r=i,r.length&&e.each(r,function(e,t){delete ne.attachTmbs[t]})),a&&n.length&&ye(n)}).always(function(){ne.tmbLoading={},!a&&ne.getTmbs.length&&ye()}))))},we=function(n,i){var a,o,l,c,d,p=s?Ie.find("tbody"):Ie,u=n.length,h={},f=function(e){for(var n,i=Ie.find("[id]:first");i.length;){if(n=t.file(t.cwdId2Hash(i.attr("id"))),!i.hasClass("elfinder-cwd-parent")&&n&&t.compare(e,n)<0)return i;i=i.next("[id]")}},m=function(e){var n,i=te.length;for(n=0;n<i;n++)if(t.compare(e,te[n])<0)return n;return i||-1},g=!!e.htmlPrefilter,v=e(g?document.createDocumentFragment():"<div/>");if(u>pe)ze(),V=t.arrayFlip(e.map(n,function(e){return e.hash}),!0),Z();else{for(u&&Ue.removeClass("elfinder-cwd-wrapper-empty");u--;)a=n[u],o=a.hash,e("#"+t.cwdHash2Id(o)).length||((l=f(a))&&!l.length&&(l=null),!l&&(d=m(a))>=0?te.splice(d,0,a):(v.empty().append(L(a)),"directory"===a.mime&&!r&&ve(v),c=g?v:v.children(),l?l.before(c):p.append(c)),e("#"+t.cwdHash2Id(o)).length&&a.tmb&&(h[o]=a.tmb));s&&(me(),fe({fitWidth:!E})),Ce(p),Object.keys(h).length&&Object.assign(ne.attachTmbs,h)}},xe=function(n){var i,a,o,r,l=n.length,c=t.searchStatus.state>1,d=t.getCommand(t.currentReqCmd)||{};if(!t.cwd().hash&&!d.noChangeDirOnRemovedCwd)return e.each(z.reverse(),function(e,n){if(t.file(n))return r=!0,t.one(t.currentReqCmd+"done",function(){!t.cwd().hash&&t.exec("open",n)}),!1}),void(!r&&!t.cwd().hash&&t.exec("open",t.roots[Object.keys(t.roots)[0]]));for(;l--;){if(i=n[l],(a=e("#"+t.cwdHash2Id(i))).length)try{a.remove(),--ne.renderd}catch(p){t.debug("error",p)}else(o=ie(i))!==-1&&te.splice(o,1);V[i]&&delete V[i],c&&(o=e.inArray(i,I))!==-1&&I.splice(o,1)}c&&t.trigger("cwdhasheschange",I),s&&(me(),fe({fitWidth:!E}))},ke=function(){for(var e="",n="",i=0;i<A.length;i++)e=t.getColumnName(A[i]),n+='<td class="elfinder-cwd-view-th-'+A[i]+' sortable-item">'+e+"</td>";return n},Ce=function(e,t){var n,i=1;e=e||(s?Ie.find("tbody"):Ie),te.length>0&&(e.css({height:"auto"}),n=e.height(),t&&(s||(i=Math.floor(e.width()/e.find("[id]:first").width()),t=Math.ceil(t/i)*i),ne.hpi=n/t,ne.row=ne.hpi*i),Ae.css({top:ne.hpi*te.length+n+"px"}).show())},Te={contextmenu:function(e){e.preventDefault(),t.trigger("contextmenu",{type:"cwd",targets:[t.cwd().hash],x:e.pageX,y:e.pageY})},touchstart:function(e){e.originalEvent.touches.length>1||(Ie.data("longtap",null),Se.data("touching",{x:e.originalEvent.touches[0].pageX,y:e.originalEvent.touches[0].pageY}),e.target!==this&&e.target!==Ie.get(0)||Ie.data("tmlongtap",setTimeout(function(){Ie.data("longtap",!0),t.trigger("contextmenu",{type:"cwd",targets:[t.cwd().hash],x:Se.data("touching").x,y:Se.data("touching").y})},500)))},touchend:function(e){"touchmove"===e.type&&(!Se.data("touching")||Math.abs(Se.data("touching").x-e.originalEvent.touches[0].pageX)+Math.abs(Se.data("touching").y-e.originalEvent.touches[0].pageY)>4)&&Se.data("touching",null),clearTimeout(Ie.data("tmlongtap"))},click:function(e){Ie.data("longtap")&&(e.preventDefault(),e.stopPropagation())}},ze=function(){var n;Ue.append(Oe).removeClass("elfinder-cwd-wrapper-empty elfinder-search-result elfinder-incsearch-result elfinder-letsearch-result"),(t.searchStatus.state>1||t.searchStatus.ininc)&&Ue.addClass("elfinder-search-result"+(t.searchStatus.ininc?" elfinder-"+("/"===C.substr(0,1)?"let":"inc")+"search-result":"")),ne.attachThumbJob&&ne.attachThumbJob._abort(),Ie.data("selectable")&&Ie.selectable("disable").selectable("destroy").removeData("selectable"),t.trigger("cwdinit"),W=e();try{Ie.empty()}catch(i){Ie.html("")}he&&(Se.off("scroll.fixheader resize.fixheader"),he.remove(),he=null),Ie.removeClass("elfinder-cwd-view-icons elfinder-cwd-view-list").addClass("elfinder-cwd-view-"+(s?"list":"icons")).attr("style","").css("height","auto"),Ae.hide(),Se[s?"addClass":"removeClass"]("elfinder-cwd-wrapper-list")._padding=parseInt(Se.css("padding-top"))+parseInt(Se.css("padding-bottom")),t.UA.iOS&&Se.removeClass("overflow-scrolling-touch").addClass("overflow-scrolling-touch"),s&&(Ie.html("<table><thead/><tbody/></table>"),n=e('<tr class="ui-state-default"><td class="elfinder-cwd-view-th-name">'+t.getColumnName("name")+"</td>"+ke()+"</tr>"),Ie.find("thead").hide().append(n.on("contextmenu."+t.namespace,Te.contextmenu).on("touchstart."+t.namespace,"td",Te.touchstart).on("touchmove."+t.namespace+" touchend."+t.namespace+" mouseup."+t.namespace,"td",Te.touchend).on("click."+t.namespace,"td",Te.click)).find("td:first").append(Oe),e.fn.sortable&&n.addClass("touch-punch touch-punch-keep-default").sortable({axis:"x",distance:8,items:"> .sortable-item",start:function(t,n){e(n.item[0]).data("dragging",!0),n.placeholder.width(n.helper.removeClass("ui-state-hover").width()).removeClass("ui-state-active").addClass("ui-state-hover").css("visibility","visible")},update:function(n,i){var a,o,r=e(i.item[0]).attr("class").split(" ")[0].replace("elfinder-cwd-view-th-","");A=e.map(e(this).children(),function(t){var n=e(t).attr("class").split(" ")[0].replace("elfinder-cwd-view-th-","");return o||(r===n?o=!0:a=n),"name"===n?null:n}),F.row=D(),t.storage("cwdCols",A),a=".elfinder-col-"+a+":first",r=".elfinder-col-"+r+":first",t.lazy(function(){Ie.find("tbody tr").each(function(){var t=e(this);t.children(a).after(t.children(r))})})},stop:function(t,n){setTimeout(function(){e(n.item[0]).removeData("dragging")},100)}}),n.find("td").addClass("touch-punch").resizable({handles:"ltr"===t.direction?"e":"w",start:function(t,n){var i=Ie.find("td.elfinder-col-"+n.element.attr("class").split(" ")[0].replace("elfinder-cwd-view-th-","")+":first");n.element.data("resizeTarget",i).data("targetWidth",i.width()),U=!0,"fixed"!==Ie.find("table").css("table-layout")&&(Ie.find("tbody tr:first td").each(function(){e(this).width(e(this).width())}),Ie.find("table").css("table-layout","fixed"))},resize:function(e,t){t.element.data("resizeTarget").width(t.element.data("targetWidth")-(t.originalSize.width-t.size.width))},stop:function(){U=!1,fe({fitWidth:!0}),E={},Ie.find("tbody tr:first td").each(function(){var t=e(this).attr("class").split(" ")[0].replace("elfinder-col-","");E[t]=e(this).width()}),t.storage("cwdColWidth",E)}}).find(".ui-resizable-handle").addClass("ui-icon ui-icon-grip-dotted-vertical")),t.lazy(function(){te=e.map(S||I,function(e){return t.file(e)||null}),te=t.sortFiles(te),S?S=e.map(te,function(e){return e.hash}):I=e.map(te,function(e){return e.hash}),ne={renderd:0,attachTmbs:{},getTmbs:[],tmbLoading:{},lazyOpts:{tm:0}},Ue[te.length<1?"addClass":"removeClass"]("elfinder-cwd-wrapper-empty"),Se.off(oe,ue).on(oe,ue).trigger(oe),t.cwd().write?(Se[t.isCommandEnabled("upload")?"addClass":"removeClass"]("native-droppable"),Se.droppable(t.isCommandEnabled("paste")?"enable":"disable")):Se.removeClass("native-droppable").droppable("disable").removeClass("ui-state-disabled")})},Ie=e(this).addClass("ui-helper-clearfix elfinder-cwd").attr("unselectable","on").on("click."+t.namespace,f,function(n){var i,a,o,r,s,d=this.id?e(this):e(this).parents("[id]:first"),p=e(n.target);if(M&&(p.is("input:checkbox")||p.hasClass("elfinder-cwd-select")))return n.stopPropagation(),n.preventDefault(),d.trigger(d.hasClass(m)?c:l),Z(),void setTimeout(function(){p.prop("checked",d.hasClass(m))},10);if(Ie.data("longtap"))return void n.stopPropagation();if(O||(O=d.attr("id"),setTimeout(function(){O=""},500)),n.shiftKey&&(i=d.prevAll(Q||"."+m+":first"),a=d.nextAll(Q||"."+m+":first"),o=i.length,r=a.length),n.shiftKey&&(o||r))s=o?d.prevUntil("#"+i.attr("id")):d.nextUntil("#"+a.attr("id")),s.add(d).trigger(l);else if(n.ctrlKey||n.metaKey)d.trigger(d.hasClass(m)?c:l);else{if(Se.data("touching")&&d.hasClass(m))return Se.data("touching",null),void t.dblclick({file:t.cwdId2Hash(this.id)});J(),d.trigger(l)}Z()}).on("dblclick."+t.namespace,f,function(n){if(O){var i=t.cwdId2Hash(O);n.stopPropagation(),this.id!==O&&(e(this).trigger(c),e("#"+O).trigger(l),Z()),t.dblclick({file:i})}}).on("touchstart."+t.namespace,f,function(n){if(!(n.originalEvent.touches.length>1)){var i,a=this.id?e(this):e(this).parents("[id]:first"),o=e(n.target),r=n.target.nodeName;if("INPUT"===r||"TEXTAREA"===r)return void n.stopPropagation();if(a.find("input:text,textarea").length)return n.stopPropagation(),void n.preventDefault();if(Se.data("touching",{x:n.originalEvent.touches[0].pageX,y:n.originalEvent.touches[0].pageY}),M&&(o.is("input:checkbox")||o.hasClass("elfinder-cwd-select")))return void n.stopPropagation();i=a.prevAll("."+m+":first").length+a.nextAll("."+m+":first").length,Ie.data("longtap",null),a.addClass(y).data("tmlongtap",setTimeout(function(){Ie.data("longtap",!0),("TD"!=n.target.nodeName||t.selected().length>0)&&(a.trigger(l),Z(),t.trigger("contextmenu",{type:"files",targets:t.selected(),x:n.originalEvent.touches[0].pageX,y:n.originalEvent.touches[0].pageY}))},500))}}).on("touchmove."+t.namespace+" touchend."+t.namespace,f,function(n){if("INPUT"==n.target.nodeName||"TEXTAREA"==n.target.nodeName||e(n.target).hasClass("elfinder-cwd-select"))return void n.stopPropagation();var i=this.id?e(this):e(this).parents("[id]:first");clearTimeout(i.data("tmlongtap")),"touchmove"===n.type?(Se.data("touching",null),i.removeClass(y)):Se.data("touching")&&!Ie.data("longtap")&&i.hasClass(m)&&(n.preventDefault(),Se.data("touching",null),t.dblclick({file:t.cwdId2Hash(this.id)}))}).on("mouseenter."+t.namespace,f,function(n){if(!re){var i=e(this),a=null,o=s?i:i.children("div.elfinder-cwd-file-wrapper,div.elfinder-cwd-filename");if(!(r||i.data("dragRegisted")||i.hasClass(x)||o.hasClass(v)||o.hasClass(g))){if(i.data("dragRegisted",!0),!t.isCommandEnabled("copy",t.searchStatus.state>1?t.cwdId2Hash(i.attr("id")):void 0))return;o.on("mousedown",function(n){var i=n.shiftKey||n.altKey;i&&!t.UA.IE&&Ie.data("selectable")&&(Ie.selectable("disable").selectable("destroy").removeData("selectable"),setTimeout(function(){Ie.selectable(se).selectable("option",{disabled:!1}).selectable("refresh").data("selectable",!0)},10)),o.draggable("option","disabled",i).removeClass("ui-state-disabled"),i?o.attr("draggable","true"):o.removeAttr("draggable").draggable("option","cursorAt",{left:50-parseInt(e(n.currentTarget).css("margin-left")),top:47})}).on("dragstart",function(n){var i=n.dataTransfer||n.originalEvent.dataTransfer||null;if(a=null,i&&!t.UA.IE){var o,r=this.id?e(this):e(this).parents("[id]:first"),s=e("<span>"),c="",d=null,p=null,u=[],h=function(n){var i,a=n.mime,o=t.tmb(n);return i='<div class="elfinder-cwd-icon elfinder-cwd-icon-drag '+t.mime2class(a)+' ui-corner-all"/>',o&&(i=e(i).addClass(o.className).css("background-image","url('"+o.url+"')").get(0).outerHTML),i},f=[];if(r.trigger(l),Z(),e.each(V,function(n){var i=t.file(n),a=i.url;if(i&&"directory"!==i.mime){if(a){if("1"==a)return f.push(n),!0}else a=t.url(i.hash);a&&(a=t.convAbsUrl(a),u.push(n),e("<a>").attr("href",a).text(a).appendTo(s),c+=a+"\n",d||(d=i.mime+":"+i.name+":"+a),p||(p=a+"\n"+i.name))}}),f.length)return e.each(f,function(e,n){var i=t.file(n);i.url="",t.request({data:{cmd:"url",target:n},notify:{type:"url",cnt:1},preventDefault:!0}).always(function(e){i.url=e.url?e.url:"1"})}),!1;if(!c)return!1;i.setDragImage&&(a=e('<div class="elfinder-drag-helper html5-native"></div>').append(h(t.file(u[0]))).appendTo(e(document.body)),(o=u.length)>1&&a.append(h(t.file(u[o-1]))+'<span class="elfinder-drag-num">'+o+"</span>"),i.setDragImage(a.get(0),50,47)),i.effectAllowed="copyLink",i.setData("DownloadURL",d),i.setData("text/x-moz-url",p),i.setData("text/uri-list",c),i.setData("text/plain",c),i.setData("text/html",s.html()),i.setData("elfinderfrom",window.location.href+t.cwd().hash),i.setData("elfinderfrom:"+i.getData("elfinderfrom"),"")}}).on("dragend",function(e){J(),a&&a.remove()}).draggable(t.draggable)}}}).on(l,f,function(n){var i=e(this),a=t.cwdId2Hash(i.attr("id"));B||i.hasClass(g)||(Q="#"+this.id,i.addClass(m).children().addClass(y).find("input:checkbox").prop("checked",!0),V[a]||(V[a]=!0),W=Ie.find("[id]."+m+":last").next())}).on(c,f,function(n){var i=e(this),a=t.cwdId2Hash(i.attr("id"));B||(i.removeClass(m).children().removeClass(y).find("input:checkbox").prop("checked",!1),Ie.hasClass("elfinder-cwd-allselected")&&(M&&Oe.children("input").prop("checked",!1),Ie.removeClass("elfinder-cwd-allselected")),V[a]&&delete V[a])}).on(d,f,function(){var t=e(this).removeClass(y+" "+m).addClass(g),n=t.children(),i=s?t:n.find("div.elfinder-cwd-file-wrapper,div.elfinder-cwd-filename");n.removeClass(y+" "+m),t.hasClass(b)&&t.droppable("disable"),i.hasClass(v)&&i.draggable("disable")}).on(p,f,function(){var t=e(this).removeClass(g),n=s?t:t.children("div.elfinder-cwd-file-wrapper,div.elfinder-cwd-filename");t.hasClass(b)&&t.droppable("enable"),n.hasClass(v)&&n.draggable("enable")}).on("scrolltoview",f,function(t,n){ee(e(this),!n||"undefined"==typeof n.blink||n.blink)}).on("mouseenter."+t.namespace+" mouseleave."+t.namespace,f,function(n){var i="mouseenter"===n.type;i&&re||(t.trigger("hover",{hash:t.cwdId2Hash(e(this).attr("id")),type:n.type}),e(this).toggleClass(y,"mouseenter"==n.type))}).on("contextmenu."+t.namespace,function(n){var i=e(n.target).closest(f);return i.find("input:text,textarea").length?void n.stopPropagation():void(i.length&&("TD"!=n.target.nodeName||e.inArray(t.cwdId2Hash(i.get(0).id),t.selected())>-1)&&(n.stopPropagation(),n.preventDefault(),i.hasClass(g)||Se.data("touching")||(i.hasClass(m)||(J(),i.trigger(l),Z()),t.trigger("contextmenu",{type:"files",targets:t.selected(),x:n.pageX,y:n.pageY}))))}).on("click."+t.namespace,function(e){e.target!==this||Ie.data("longtap")||!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&J()}).on("create."+t.namespace,function(n,i){var a=s?Ie.find("tbody"):Ie,o=a.find(".elfinder-cwd-parent"),r=i.move||!1,l=e(L(i)).addClass(x),c=t.selected();c.length?r&&t.trigger("lockfiles",{files:c}):J(),o.length?o.after(l):a.prepend(l),me(),Se.scrollTop(0).scrollLeft(0)}).on("unselectall",J).on("selectfile",function(n,i){e("#"+t.cwdHash2Id(i)).trigger(l),Z()}).on("colwidth",function(){s&&(Ie.find("table").css("table-layout","").find("td").css("width",""),fe({fitWidth:!0}),t.storage("cwdColWidth",E=null))}),Se=e('<div class="elfinder-cwd-wrapper"/>').droppable(Object.assign({},ge,{autoDisable:!1})).on("contextmenu."+t.namespace,Te.contextmenu).on("touchstart."+t.namespace,Te.touchstart).on("touchmove."+t.namespace+" touchend."+t.namespace,Te.touchend).on("click."+t.namespace,Te.click).on("scroll."+t.namespace,function(){re||(Ie.data("selectable")&&Ie.selectable("disable"),Se.trigger(ae)),re=!0,ne.scrtm&&clearTimeout(ne.scrtm),ne.scrtm&&Math.abs((ne.scrolltop||0)-(ne.scrolltop=this.scrollTop||e(this).scrollTop()))<5&&(ne.scrtm=0,Se.trigger(oe)),ne.scrtm=setTimeout(function(){ne.scrtm=0,Se.trigger(oe)},20)}).on(oe,function(){re=!1,ce()}),Ae=e("<div>&nbsp;</div>").css({position:"absolute",width:"1px",height:"1px"}).hide(),Oe=M?e('<div class="elfinder-cwd-selectall"><input type="checkbox"/></div>').attr("title",t.i18n("selectall")).on("touchstart mousedown click",function(t){return t.stopPropagation(),t.preventDefault(),!e(this).data("pending")&&"click"!==t.type&&(Oe.data("pending",!0),void(Ie.hasClass("elfinder-cwd-allselected")?(Oe.find("input").prop("checked",!1),setTimeout(function(){J()},10)):G()))}):e(),je=null,De=function(t){var n=function(){var t=0;Se.siblings("div.elfinder-panel:visible").each(function(){
t+=e(this).outerHeight(!0)}),Se.height(Ue.height()-t-Se._padding)};t&&n(),je&&clearTimeout(je),je=setTimeout(function(){!t&&n();var e,i;Ie.css("height","auto"),e=Se[0].clientHeight-parseInt(Se.css("padding-top"))-parseInt(Se.css("padding-bottom"))-parseInt(Ie.css("margin-top")),i=Ie.outerHeight(!0),i<e&&Ie.height(e)},10),s&&!U&&(t?Se.trigger("resize.fixheader"):fe()),ce()},Me=e(this).parent().on("resize",De),Ue=Me.children(".elfinder-workzone").append(Se.append(this).append(Ae));q=Object.assign(q,n.replacement||{});try{E=t.storage("cwdColWidth")?t.storage("cwdColWidth"):null}catch(Ee){E=null}t.bind("columnpref",function(i){var a=i.data||{};(A=t.storage("cwdCols"))?(A=e.grep(A,function(e){return n.listView.columns.indexOf(e)!==-1}),n.listView.columns.length>A.length&&e.each(n.listView.columns,function(e,t){A.indexOf(t)===-1&&A.push(t)})):A=n.listView.columns;var o=t.storage("columnhides")||null;o&&Object.keys(o).length&&(A=e.grep(A,function(e){return!o[e]})),F.row=D(),s&&a.repaint&&ze()}).trigger("columnpref"),r&&e("body").on("touchstart touchmove touchend",function(e){}),M&&Ie.addClass("elfinder-has-checkbox"),e(window).on("scroll."+t.namespace,function(){o&&clearTimeout(o),o=setTimeout(function(){Se.trigger(oe)},50)}),e(document).on("keydown."+t.namespace,function(n){n.keyCode==e.ui.keyCode.ESCAPE&&(t.getUI().find(".ui-widget:visible").length||J())}),t.one("init",function(){var n,i,o,s=document.createElement("style"),l=0;document.head&&(document.head.appendChild(s),n=s.sheet,n.insertRule('.elfinder-cwd-wrapper-empty .elfinder-cwd:after{ content:"'+t.i18n("emptyFolder")+'" }',l++),n.insertRule('.elfinder-cwd-wrapper-empty .ui-droppable .elfinder-cwd:after{ content:"'+t.i18n("emptyFolder"+(r?"LTap":"Drop"))+'" }',l++),n.insertRule('.elfinder-cwd-wrapper-empty .ui-droppable-disabled .elfinder-cwd:after{ content:"'+t.i18n("emptyFolder")+'" }',l++),n.insertRule('.elfinder-cwd-wrapper-empty.elfinder-search-result .elfinder-cwd:after{ content:"'+t.i18n("emptySearch")+'" }',l++),n.insertRule('.elfinder-cwd-wrapper-empty.elfinder-search-result.elfinder-incsearch-result .elfinder-cwd:after{ content:"'+t.i18n("emptyIncSearch")+'" }',l++),n.insertRule('.elfinder-cwd-wrapper-empty.elfinder-search-result.elfinder-letsearch-result .elfinder-cwd:after{ content:"'+t.i18n("emptyLetSearch")+'" }',l++)),r||(t.one("open",function(){n&&t.zIndex&&n.insertRule(".ui-selectable-helper{z-index:"+t.zIndex+";}",l++)}),o=e('<div style="position:absolute"/>'),i=t.getUI(),i.on("resize",function(e,t){var n;e.preventDefault(),e.stopPropagation(),t&&t.fullscreen&&(n=i.offset(),"on"===t.fullscreen?(o.css({top:n.top*-1,left:n.left*-1}).appendTo(i),se.appendTo=o):(o.detach(),se.appendTo="body"),Ie.data("selectable")&&Ie.selectable("option",{appendTo:se.appendTo}))})),a=t.getUI("tree").length}).bind("enable",function(){De()}).bind("request.open",function(){ne.getTmbs=[]}).bind("open add remove searchend",function(){var n=t.cwd().hash,i=this.type;if(("open"===i||"searchend"===i||t.searchStatus.state<2)&&(I=e.map(t.files(n),function(e){return e.hash}),t.trigger("cwdhasheschange",I)),"open"===i){var o=function(){var n=!1;return e.each(z,function(e,i){if(t.trashes[i])return n=!0,!1}),n},r=n&&(!t.file(n)||a)?a?function(){var n=e.Deferred();return t.one("treesync",function(e){e.data.always(function(){n.resolve()})}),n}():t.request({data:{cmd:"parents",target:t.cwd().hash},preventFail:!0}):null;e.when(r).done(function(){z=t.parents(t.cwd().hash),Se[o()?"addClass":"removeClass"]("elfinder-cwd-wrapper-trash")}),S=void 0,J(),ze(),De()}}).bind("search",function(n){I=e.map(n.data.files,function(e){return e.hash}),t.trigger("cwdhasheschange",I),S=void 0,t.searchStatus.ininc=!1,ze(),t.autoSync("stop"),De()}).bind("searchend",function(e){(C||S)&&(C="",S?t.trigger("incsearchend",e.data):e.data&&e.data.noupdate||ze()),t.autoSync(),De()}).bind("searchstart",function(e){J(),C=e.data.query}).bind("incsearchstart",function(n){V={},t.lazy(function(){var i,a,o="";a=C=n.data.query||"",a?("/"===a.substr(0,1)&&(a=a.substr(1),o="^"),i=new RegExp(o+a.replace(/([\\*\;\.\?\[\]\{\}\(\)\^\$\-\|])/g,"\\$1"),"i"),S=e.grep(I,function(e){var n=t.file(e);return!(!n||!(n.name.match(i)||n.i18&&n.i18.match(i)))}),t.trigger("incsearch",{hashes:S,query:a}).searchStatus.ininc=!0,ze(),t.autoSync("stop")):t.trigger("incsearchend"),De()})}).bind("incsearchend",function(e){C="",t.searchStatus.ininc=!1,S=void 0,e.data&&e.data.noupdate||ze(),t.autoSync()}).bind("sortchange",function(){var e=Se.scrollLeft(),n=Ie.hasClass("elfinder-cwd-allselected");ze(),t.one("cwdrender",function(){Se.scrollLeft(e),n&&(V=t.arrayFlip(S||I,!0)),(n||Object.keys(V).length)&&Z(),De()})}).bind("viewchange",function(){var e="list"==t.storage("view"),n=Ie.hasClass("elfinder-cwd-allselected");e!=s&&(s=e,t.viewType=s?"list":"icons",ze(),n&&(Ie.addClass("elfinder-cwd-allselected"),Oe.find("input").prop("checked",!0)),Object.keys(V).length&&Z()),De()}).bind("wzresize",function(){var e,n=s?Ie.find("tbody"):Ie;De(!0),ne.hpi&&Ce(n,n.find("[id]").length),e=Ie.offset(),Ue.data("rectangle",Object.assign({width:Ue.width(),height:Ue.height(),cwdEdge:"ltr"===t.direction?e.left:e.left+Ie.width()},Ue.offset())),ne.itemH=(s?n.find("tr:first"):n.find("[id]:first")).outerHeight(!0)}).bind("changeclipboard",function(t){T={},t.data&&t.data.clipboard&&t.data.clipboard.length&&e.each(t.data.clipboard,function(e,t){t.cut&&(T[t.hash]=!0)})}).bind("resMixinMake",function(){me()}).bind("tmbreload",function(t){var n={},i=t.data&&t.data.files?t.data.files:null;e.each(i,function(e,t){t.tmb&&"1"!=t.tmb&&(n[t.hash]=t.tmb)}),Object.keys(n).length&&be(n,!0)}).add(function(n){var i=C?new RegExp(C.replace(/([\\*\;\.\?\[\]\{\}\(\)\^\$\-\|])/g,"\\$1"),"i"):null,a=t.searchStatus.mime,o=t.searchStatus.state>1,r=o&&t.searchStatus.target?t.searchStatus.target:t.cwd().hash,l=t.path(r),c=function(n){var s,c;return s=n.phash===r,!s&&o&&(c=n.path||t.path(n.hash),s=l&&0===c.indexOf(l),!s&&t.searchStatus.mixed&&(s=!!e.grep(t.searchStatus.mixed,function(e){return 0===n.hash.indexOf(e)}).length)),s&&o&&(s=a?0===n.mime.indexOf(a):!!(n.name.match(i)||n.i18&&n.i18.match(i))),s},d=e.grep(n.data.added||[],function(e){return!!c(e)});we(d),2===t.searchStatus.state&&(e.each(d,function(t,n){e.inArray(n.hash,I)===-1&&I.push(n.hash)}),t.trigger("cwdhasheschange",I)),s&&De(),Se.trigger(oe)}).change(function(n){var i,a=t.cwd().hash,o=t.selected();C?e.each(n.data.changed||[],function(n,a){e("#"+t.cwdHash2Id(a.hash)).length&&(xe([a.hash]),a.name.indexOf(C)!==-1&&(we([a],"change"),e.inArray(a.hash,o)!==-1&&X(a.hash),i=!0))}):e.each(e.grep(n.data.changed||[],function(e){return e.phash==a}),function(n,a){e("#"+t.cwdHash2Id(a.hash)).length&&(xe([a.hash]),we([a],"change"),e.inArray(a.hash,o)!==-1&&X(a.hash),i=!0)}),i&&(t.trigger("cwdhasheschange",I),s&&De(),Se.trigger(oe)),Z()}).remove(function(e){var t=s?Ie.find("tbody"):Ie;xe(e.data.removed||[]),Z(),te.length<1&&t.children(f).length<1?(Ue.addClass("elfinder-cwd-wrapper-empty"),M&&Oe.find("input").prop("checked",!1),Ae.hide(),Se.off(oe,ue),De()):(Ce(t),Se.trigger(oe))}).dragstart(function(t){var n=e(t.data.target),i=t.data.originalEvent;n.hasClass(h)&&(n.hasClass(m)||(!(i.ctrlKey||i.metaKey||i.shiftKey)&&J(),n.trigger(l),Z())),Ie.removeClass(g).data("selectable")&&Ie.selectable("disable"),B=!0}).dragstop(function(){Ie.data("selectable")&&Ie.selectable("enable"),B=!1}).bind("lockfiles unlockfiles selectfiles unselectfiles",function(n){var i,a,o,r={lockfiles:d,unlockfiles:p,selectfiles:l,unselectfiles:c},s=r[n.type],u=n.data.files||[],h=u.length,f=n.data.helper||e();if(h>0&&(i=t.parents(u[0])),s!==l&&s!==c||(o=s===l,e.each(u,function(e,t){var n=Ie.hasClass("elfinder-cwd-allselected");V[t]?(n&&(M&&Oe.children("input").prop("checked",!1),Ie.removeClass("elfinder-cwd-allselected"),n=!1),!o&&delete V[t]):o&&(V[t]=!0)})),!f.data("locked")){for(;h--;)try{e("#"+t.cwdHash2Id(u[h])).trigger(s)}catch(n){}!n.data.inselect&&Z()}Se.data("dropover")&&i.indexOf(Se.data("dropover"))!==-1&&(a="lockfiles"!==n.type,f.toggleClass("elfinder-drag-helper-plus",a),Se.toggleClass(w,a))}).bind("mkdir mkfile duplicate upload rename archive extract paste multiupload",function(n){if("upload"!=n.type||!n.data._multiupload){var i=t.cwd().hash;J(),e.each((n.data.added||[]).concat(n.data.changed||[]),function(e,t){t&&t.phash==i&&X(t.hash)}),Z()}}).shortcut({pattern:"ctrl+a",description:"selectall",callback:G}).shortcut({pattern:"ctrl+shift+i",description:"selectinvert",callback:Y}).shortcut({pattern:"left right up down shift+left shift+right shift+up shift+down",description:"selectfiles",type:"keydown",callback:function(e){$(e.keyCode,e.shiftKey)}}).shortcut({pattern:"home",description:"selectffile",callback:function(e){J(),ee(Ie.find("[id]:first").trigger(l)),Z()}}).shortcut({pattern:"end",description:"selectlfile",callback:function(e){J(),ee(Ie.find("[id]:last").trigger(l)),Z()}}).shortcut({pattern:"page_up",description:"pageTurning",callback:function(e){ne.itemH&&Se.scrollTop(Math.round(Se.scrollTop()-Math.floor((Se.height()+(s?ne.itemH*-1:16))/ne.itemH)*ne.itemH))}}).shortcut({pattern:"page_down",description:"pageTurning",callback:function(e){ne.itemH&&Se.scrollTop(Math.round(Se.scrollTop()+Math.floor((Se.height()+(s?ne.itemH*-1:16))/ne.itemH)*ne.itemH))}})}),this},e.fn.elfinderdialog=function(t,n){var i,a,o,r,s=window.navigator.platform.indexOf("Win")!=-1,l={},c={enabled:!1,width:!1,height:!1,defaultSize:null},d=function(t){var i,a;c.enabled&&(a=n.options.dialogContained?o:e(window),i={maxWidth:c.width?a.width()-l.width:null,maxHeight:c.height?a.height()-l.height:null},Object.assign(r,i),t.css(i).trigger("resize"),t.data("hasResizable")&&(t.resizable("option","maxWidth")<i.maxWidth||t.resizable("option","maxHeight")<i.maxHeight)&&t.resizable("option",i))},p=function(e){var t=e.data;i&&clearTimeout(i),i=setTimeout(function(){c.enabled&&d(t)},50)},u=function(){var e="elfinder-dialog",t=o.children("."+e+"."+n.res("class","editing")+":visible");n[t.length?"disable":"enable"]()};return n&&n.ui?o=n.getUI():(o=this.closest(".elfinder"),n||(n=o.elfinder("instance"))),"string"==typeof t?((a=this.closest(".ui-dialog")).length&&("open"===t?"none"===a.css("display")&&a.fadeIn(120,function(){a.trigger("open"),n.trigger("dialogopened",{dialog:a})}):"close"===t||"destroy"===t?(a.stop(!0),(a.is(":visible")||o.is(":hidden"))&&(a.trigger("close"),n.trigger("dialogclosed",{dialog:a})),"destroy"===t&&(a.remove(),n.trigger("dialogremoved",{dialog:a}))):"toTop"===t?(a.trigger("totop"),n.trigger("dialogtotoped",{dialog:a})):"posInit"===t?(a.trigger("posinit"),n.trigger("dialogposinited",{dialog:a})):"tabstopsInit"===t?(a.trigger("tabstopsInit"),n.trigger("dialogtabstopsinited",{dialog:a})):"checkEditing"===t&&u()),this):(t=Object.assign({},e.fn.elfinderdialog.defaults,t),t.allowMinimize&&"auto"===t.allowMinimize&&(t.allowMinimize=!!this.find("textarea,input").length),t.headerBtnPos&&"auto"===t.headerBtnPos&&(t.headerBtnPos=s?"right":"left"),t.headerBtnOrder&&"auto"===t.headerBtnOrder&&(t.headerBtnOrder=s?"close:maximize:minimize":"close:minimize:maximize"),t.modal&&t.allowMinimize&&(t.allowMinimize=!1),n.options.dialogContained?c.width=c.height=c.enabled=!0:(c.width="window"===t.maxWidth,c.height="window"===t.maxHeight,(c.width||c.height)&&(c.enabled=!0)),this.filter(":not(.ui-dialog-content)").each(function(){var i,a,h=e(this).addClass("ui-dialog-content ui-widget-content"),f="elfinder-dialog-active",m="elfinder-dialog",g="elfinder-dialog-notify",v="ui-state-hover",b="elfinder-tabstop",y="elfinder-focus",w="elfinder-dialog-modal",x=parseInt(1e6*Math.random()),k=e('<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="elfinder-dialog-title">'+t.title+"</span></div>"),C=e('<div class="ui-dialog-buttonset"/>'),T=e('<div class=" ui-helper-clearfix ui-dialog-buttonpane ui-widget-content"/>').append(C),z=0,I=0,S=e(),A=e('<div style="width:100%;height:100%;position:absolute;top:0px;left:0px;"/>').hide(),O=function(){t.optimizeNumber&&F.find("input[type=number]").each(function(){e(this).attr("inputmode","numeric"),e(this).attr("pattern","[0-9]*")})},j=function(){S=F.find("."+b),S.length&&(S.attr("tabindex","-1"),S.filter("."+y).length||C.children("."+b+":"+(s?"first":"last")).addClass(y))},D=function(t){var n=S.filter(":visible"),i=t?null:n.filter("."+y+":first");return i&&i.length||(i=n.first()),t&&e.each(n,function(e,a){if(a===t&&n[e+1])return i=n.eq(e+1),!1}),i},M=function(t){var n=S.filter(":visible"),i=n.last();return e.each(n,function(e,a){if(a===t&&n[e-1])return i=n.eq(e-1),!1}),i},U=function(){e.each(t.headerBtnOrder.split(":").reverse(),function(e,t){E[t]&&E[t]()}),s&&k.children(".elfinder-titlebar-button").addClass("elfinder-titlebar-button-right")},E={close:function(){k.prepend(e('<span class="ui-widget-header ui-dialog-titlebar-close ui-corner-all elfinder-titlebar-button"><span class="ui-icon ui-icon-closethick"/></span>').on("mousedown",function(e){e.preventDefault(),e.stopPropagation(),h.elfinderdialog("close")}))},maximize:function(){t.allowMaximize&&(F.on("resize",function(e,t){var n,i;if(e.preventDefault(),e.stopPropagation(),t&&t.maximize){if(i=k.find(".elfinder-titlebar-full"),n="on"===t.maximize,i.children("span.ui-icon").toggleClass("ui-icon-plusthick",!n).toggleClass("ui-icon-arrowreturnthick-1-s",n),n){try{F.hasClass("ui-draggable")&&F.draggable("disable"),F.hasClass("ui-resizable")&&F.resizable("disable")}catch(e){}h.css("width","100%").css("height",F.height()-F.children(".ui-dialog-titlebar").outerHeight(!0)-T.outerHeight(!0))}else{h.attr("style",i.data("style")),i.removeData("style"),P();try{F.hasClass("ui-draggable")&&F.draggable("enable"),F.hasClass("ui-resizable")&&F.resizable("enable")}catch(e){}}F.trigger("resize")}}),k.prepend(e('<span class="ui-widget-header ui-corner-all elfinder-titlebar-button elfinder-titlebar-full"><span class="ui-icon ui-icon-plusthick"/></span>').on("mousedown",function(t){var i=e(this);t.preventDefault(),t.stopPropagation(),F.hasClass("elfinder-maximized")||"undefined"!=typeof i.data("style")||(h.height(h.height()),i.data("style",h.attr("style")||"")),n.toggleMaximize(F)})))},minimize:function(){var i,a;t.allowMinimize&&k.on("dblclick",function(t){e(this).children(".elfinder-titlebar-minimize").trigger("mousedown")}).prepend(e('<span class="ui-widget-header ui-corner-all elfinder-titlebar-button elfinder-titlebar-minimize"><span class="ui-icon ui-icon-minusthick"/></span>').on("mousedown",function(t){var o=e(this),r=n.getUI("bottomtray"),s={width:70,height:24},l=e("<div/>").css(s).addClass(F.get(0).className+" elfinder-dialog-minimized"),c={};t.preventDefault(),t.stopPropagation(),F.data("minimized")?(F.removeData("minimized").before(i.css(Object.assign({position:"absolute"},i.offset()))),n.toFront(i),i.animate(Object.assign({width:F.width(),height:F.height()},a),function(){F.show(),n.toFront(F),i.remove(),u()})):(a=F.data("minimized",!0).position(),i=F.clone().on("mousedown",function(){o.trigger("mousedown")}).removeClass("ui-draggable ui-resizable"),r.append(l),Object.assign(c,l.offset(),s),l.remove(),i.height(F.height()).children(".ui-dialog-content:first").empty(),F.before(i).hide(),i.children(".ui-dialog-content:first,.ui-dialog-buttonpane,.ui-resizable-handle").remove(),i.find(".elfinder-titlebar-minimize,.elfinder-titlebar-full").remove(),i.find(".ui-dialog-titlebar-close").on("mousedown",function(e){e.stopPropagation(),e.preventDefault(),i.remove(),F.show(),h.elfinderdialog("close")}),i.animate(c,function(){i.attr("style","").css({maxWidth:F.width()}).addClass("elfinder-dialog-minimized").appendTo(r),u()}))}))}},F=e('<div class="ui-front ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable std42-dialog touch-punch '+m+" "+t.cssClass+'"/>').hide().append(h).appendTo(o).draggable({containment:n.options.dialogContained?o:null,handle:".ui-dialog-titlebar",start:function(){A.show()},drag:function(e,t){var i=t.offset.top,a=t.offset.left;i<0&&(t.position.top=t.position.top-i),a<0&&(t.position.left=t.position.left-a),n.options.dialogContained&&(t.position.top<0&&(t.position.top=0),t.position.left<0&&(t.position.left=0))},stop:function(e,n){A.hide(),F.css({height:t.height}),h.data("draged",!0)}}).css({width:t.width,height:t.height,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight}).on("touchstart touchmove touchend",function(e){e.stopPropagation()}).on("mousedown",function(e){F.hasClass("ui-front")||setTimeout(function(){F.is(":visible")&&F.trigger("totop")},10)}).on("open",function(){e(this);c.enabled&&(c.defaultSize||(c.defaultSize={width:h.width(),height:h.height()}),d(F),F.trigger("resize").trigger("posinit"),o.on("resize."+n.namespace,F,p)),F.hasClass(g)||o.children("."+m+":visible:not(."+g+")").each(function(){var t=e(this),n=parseInt(t.css("top")),i=parseInt(t.css("left")),a=parseInt(F.css("top")),o=parseInt(F.css("left")),r=Math.abs(n-a)<10,s=Math.abs(i-o)<10;t[0]!=F[0]&&(r||s)&&F.css({top:r?n+10:a,left:s?i+10:o})}),F.data("modal")&&(F.addClass(w),n.getUI("overlay").elfinderoverlay("show")),F.trigger("totop"),"function"==typeof t.open&&e.proxy(t.open,h[0])(),n.UA.Mobile&&D().trigger("focus"),t.closeOnEscape&&e(document).on("keyup."+x,function(t){t.keyCode==e.ui.keyCode.ESCAPE&&F.hasClass(f)&&h.elfinderdialog("close")}),F.hasClass(n.res("class","editing"))&&u()}).on("close",function(i){var a,r;t.beforeclose&&"function"==typeof t.beforeclose?(r=t.beforeclose(),r&&r.promise||(r=r?e.Deferred().resolve():e.Deferred().reject())):r=e.Deferred().resolve(),r.done(function(){c.enabled&&o.off("resize."+n.namespace,p),t.closeOnEscape&&e(document).off("keyup."+x),t.allowMaximize&&n.toggleMaximize(F,!1),F.hide().data("modal")&&n.getUI("overlay").elfinderoverlay("hide"),"function"==typeof t.close&&e.proxy(t.close,h[0])(),t.destroyOnClose&&F.parent().length&&F.hide().remove(),a=o.children("."+m+":visible"),a.length&&a.filter(":last").trigger("totop"),F.hasClass(n.res("class","editing"))&&u()})}).on("totop",function(){var e=n.storage("autoFocusDialog");F.data("focusOnMouseOver",e?e>0:n.options.uiOptions.dialog.focusOnMouseOver),F.data("minimized")&&k.children(".elfinder-titlebar-minimize").trigger("mousedown"),!F.data("modal")&&n.getUI("overlay").is(":visible")?n.getUI("overlay").before(F):n.toFront(F),o.children("."+m+":not(."+w+")").removeClass(f+" ui-front"),F.addClass(f+" ui-front"),!n.UA.Mobile&&D().trigger("focus")}).on("posinit",function(){var i,s,l,c,d,p,u,h=t.position;if(!F.hasClass("elfinder-maximized")){if(!h&&!F.data("resizing")){if(u=o.hasClass("elfinder-fullscreen"),F.css(u?{maxWidth:"100%",maxHeight:"100%",overflow:"auto"}:r),n.UA.Mobile&&!u&&a===n.UA.Rotated)return;a=n.UA.Rotated,d=e(window),i=o.offset(),c={width:F.outerWidth(!0),height:F.outerHeight(!0)},c.right=i.left+c.width,c.bottom=i.top+c.height,p={scrLeft:d.scrollLeft(),scrTop:d.scrollTop(),width:d.width(),height:d.height()},p.right=p.scrLeft+p.width,p.bottom=p.scrTop+p.height,n.options.dialogContained||u?(s=0,l=0):(s=i.top*-1+p.scrTop,l=i.left*-1+p.scrLeft),h={top:c.height>=p.height?s:Math.max(s,parseInt((o.height()-c.height)/2-42)),left:c.width>=p.width?l:Math.max(l,parseInt((o.width()-c.width)/2))},c.right+h.left>p.right&&(h.left=Math.max(l,p.right-c.right)),c.bottom+h.top>p.bottom&&(h.top=Math.max(s,p.bottom-c.bottom))}t.absolute&&(h.position="absolute"),h&&F.css(h)}}).on("resize",function(n,i){var a,o,r=0;i&&(i.minimize||i.maxmize)||F.data("minimized")||(n.stopPropagation(),n.preventDefault(),F.children(".ui-widget-header,.ui-dialog-buttonpane").each(function(){r+=e(this).outerHeight(!0)}),a=!c.enabled||n.originalEvent||F.hasClass("elfinder-maximized")?F.height()-r-F.data("margin-y"):Math.min(c.defaultSize.height,Math.max(parseInt(F.css("max-height")),parseInt(F.css("min-height")))-r-F.data("margin-y")),h.height(a),P(),setTimeout(function(){o=h.height(),o=a<o?o+r+F.data("margin-y"):t.minHeight,F.css("min-height",o),F.data("hasResizable")&&F.resizable("option",{minHeight:o})},0),"function"==typeof t.resize&&e.proxy(t.resize,h[0])(n,i))}).on("tabstopsInit",j).on("focus","."+b,function(){e(this).addClass(v).parent("label").addClass(v),this.id&&e(this).parent().find("label[for="+this.id+"]").addClass(v)}).on("click","select."+b,function(){var t=e(this);t.data("keepFocus")?t.removeData("keepFocus"):t.data("keepFocus",!0)}).on("blur","."+b,function(){e(this).removeClass(v).removeData("keepFocus").parent("label").removeClass(v),this.id&&e(this).parent().find("label[for="+this.id+"]").removeClass(v)}).on("mouseenter mouseleave","."+b,function(n){var i=e(this);t.btnHoverFocus&&F.data("focusOnMouseOver")?"mouseenter"!=n.type||e(":focus").data("keepFocus")||i.trigger("focus"):i.toggleClass(v,"mouseenter"==n.type)}).on("keydown","."+b,function(t){var n=e(this);if(n.is(":focus"))if(t.stopPropagation(),t.keyCode==e.ui.keyCode.ENTER)t.preventDefault(),n.trigger("click");else if(t.keyCode==e.ui.keyCode.TAB&&t.shiftKey||t.keyCode==e.ui.keyCode.LEFT||t.keyCode==e.ui.keyCode.UP){if(n.is("input:text")&&!t.ctrlKey&&!t.metaKey&&t.keyCode==e.ui.keyCode.LEFT)return;if(n.is("select")&&t.keyCode!=e.ui.keyCode.TAB)return;if(n.is("textarea")&&!t.ctrlKey&&!t.metaKey)return;t.preventDefault(),M(this).trigger("focus")}else if(t.keyCode==e.ui.keyCode.TAB||t.keyCode==e.ui.keyCode.RIGHT||t.keyCode==e.ui.keyCode.DOWN){if(n.is("input:text")&&!t.ctrlKey&&!t.metaKey&&t.keyCode==e.ui.keyCode.RIGHT)return;if(n.is("select")&&t.keyCode!=e.ui.keyCode.TAB)return;if(n.is("textarea")&&!t.ctrlKey&&!t.metaKey)return;t.preventDefault(),D(this).trigger("focus")}}).data({modal:t.modal}),P=function(){var e,t=n.getUI();t.hasClass("elfinder-fullscreen")&&(e=F.position(),F.css("top",Math.max(Math.min(Math.max(e.top,0),t.height()-100),0)),F.css("left",Math.max(Math.min(Math.max(e.left,0),t.width()-200),0)))};F.prepend(k),U(),e.each(t.buttons,function(t,n){var i=e('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only elfinder-btncnt-'+I++ +" "+b+'"><span class="ui-button-text">'+t+"</span></button>").on("click",e.proxy(n,h[0]));n._cssClass&&i.addClass(n._cssClass),s?C.append(i):C.prepend(i)}),C.children().length&&(F.append(T),F.show(),T.find("button").each(function(t,n){z+=e(n).outerWidth(!0)}),F.hide(),z+=20,F.width()<z&&F.width(z)),F.append(A),c.enabled&&(l.width=F.outerWidth(!0)-F.width()+(F.outerWidth()-F.width())/2,l.height=F.outerHeight(!0)-F.height()+(F.outerHeight()-F.height())/2),n.options.dialogContained&&(i={maxWidth:o.width()-l.width,maxHeight:o.height()-l.height},t.maxWidth=t.maxWidth?Math.min(i.maxWidth,t.maxWidth):i.maxWidth,t.maxHeight=t.maxHeight?Math.min(i.maxHeight,t.maxHeight):i.maxHeight,F.css(i)),r={maxWidth:F.css("max-width"),maxHeight:F.css("max-height"),overflow:F.css("overflow")},F.trigger("posinit").data("margin-y",h.outerHeight(!0)-h.height()),t.resizable&&F.resizable({minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,start:function(){A.show(),F.data("resizing")!==!0&&F.data("resizing")&&clearTimeout(F.data("resizing")),F.data("resizing",!0)},stop:function(e,t){A.hide(),F.data("resizing",setTimeout(function(){F.data("resizing",!1)},200)),c.enabled&&(c.defaultSize={width:h.width(),height:h.height()})}}).data("hasResizable",!0),"function"==typeof t.create&&e.proxy(t.create,this)(),O(),j(),t.autoOpen&&h.elfinderdialog("open")}),this)},e.fn.elfinderdialog.defaults={cssClass:"",title:"",modal:!1,resizable:!0,autoOpen:!0,closeOnEscape:!0,destroyOnClose:!1,buttons:{},btnHoverFocus:!0,position:null,absolute:!1,width:320,height:"auto",minWidth:200,minHeight:70,maxWidth:null,maxHeight:null,allowMinimize:"auto",allowMaximize:!1,headerBtnPos:"auto",headerBtnOrder:"auto",optimizeNumber:!0},e.fn.elfinderfullscreenbutton=function(t){return this.each(function(){var n=e(this).elfinderbutton(t),i=n.children(".elfinder-button-icon");t.change(function(){var e=t.value;i.toggleClass("elfinder-button-icon-unfullscreen",e),t.className=e?"unfullscreen":""})})},e.fn.elfindernavbar=function(t,n){return this.not(".elfinder-navbar").each(function(){var i,a,o,r,s,l=e(this).hide().addClass("ui-state-default elfinder-navbar"),c=l.css("overflow","hidden").parent(),d=c.children(".elfinder-workzone").append(l),p=l.outerHeight()-l.height(),u="ltr"==t.direction,h=function(){var e=t.getUI("cwd"),n=t.getUI("workzone"),i=n.data("rectangle"),a=e.offset();n.data("rectangle",Object.assign(i,{cwdEdge:"ltr"===t.direction?a.left:a.left+e.width()}))};t.one("cssloaded",function(){p=l.outerHeight()-l.height()}).one("opendone",function(){i&&i.trigger("resize"),l.css("overflow","auto")}).bind("wzresize",function(){var e=0;s||(s=t.getUI("navdock")),s.width(l.get(0).offsetWidth-2),s.children().length>1&&(e=s.outerHeight(!0)),l.height(d.height()-e-p)}),t.UA.Touch&&(o=t.storage("autoHide")||{},"undefined"==typeof o.navbar&&(o.navbar=n.autoHideUA&&n.autoHideUA.length>0&&e.grep(n.autoHideUA,function(e){return!!t.UA[e]}).length,t.storage("autoHide",o)),o.navbar&&t.one("init",function(){l.children().length&&t.uiAutoHide.push(function(){l.stop(!0,!0).trigger("navhide",{duration:"slow",init:!0})})}),t.bind("load",function(){l.children().length&&(a=e('<div class="elfinder-navbar-swipe-handle"/>').hide().appendTo(d),"none"!==a.css("pointer-events")&&(a.remove(),a=null))}),l.on("navshow navhide",function(e,n){var i="navshow"===e.type?"show":"hide",r=n&&n.duration?n.duration:"fast",s=n&&n.handleW?n.handleW:Math.max(50,t.getUI().width()/10);l.stop(!0,!0)[i]({duration:r,step:function(){t.trigger("wzresize")},complete:function(){a&&("show"===i?a.stop(!0,!0).hide():(a.width(s?s:""),t.resources.blink(a,"slowonce"))),t.trigger("navbar"+i),n.init&&t.trigger("uiautohide"),h()}}),o.navbar="show"!==i,t.storage("autoHide",Object.assign(t.storage("autoHide"),{navbar:o.navbar}))}).on("touchstart",function(n){e(this)["scroll"+("ltr"===t.direction?"Right":"Left")]()>5&&(n.originalEvent._preventSwipeX=!0)})),t.UA.Mobile||(i=l.resizable({handles:u?"e":"w",minWidth:n.minWidth||150,maxWidth:n.maxWidth||500,resize:function(){t.trigger("wzresize")},stop:function(e,n){t.storage("navbarWidth",n.size.width),h()}}).on("resize scroll",function(n){n.preventDefault(),n.stopPropagation(),u||"resize"!==n.type||l.css("left",0),clearTimeout(e(this).data("posinit")),e(this).data("posinit",setTimeout(function(){var e=t.UA.Opera&&l.scrollLeft()?20:2;i.css("top",0).css({top:parseInt(l.scrollTop())+"px",left:u?"auto":parseInt(l.scrollRight()-e)*-1,right:u?parseInt(l.scrollLeft()-e)*-1:"auto"}),"resize"===n.type&&t.getUI("cwd").trigger("resize")},50))}).children(".ui-resizable-handle").addClass("ui-front")),(r=t.storage("navbarWidth"))?l.width(r):t.UA.Mobile&&t.one("cssloaded",function(){var n=function(){r=l.parent().width()/2,l.data("defWidth")>r?l.width(r):l.width(l.data("defWidth")),l.data("width",l.width()),t.trigger("wzresize")};l.data("defWidth",l.width()),e(window).on("resize."+t.namespace,n),n()})}),this},e.fn.elfindernavdock=function(t,n){return this.not(".elfinder-navdock").each(function(){var i,a,o=e(this).hide().addClass("ui-state-default elfinder-navdock touch-punch"),r=o.parent(),s=(r.children(".elfinder-workzone").append(o),function(n,i){var a,r=i||o.height(),s=n-r,l=Object.keys(c).length,d=l?s/l:0;s&&(a=o.css("overflow"),o.css("overflow","hidden"),o.height(n),e.each(c,function(e,n){n.height(n.height()+d).trigger("resize."+t.namespace)}),t.trigger("wzresize"),o.css("overflow",a))}),l=e('<div class="ui-front ui-resizable-handle ui-resizable-n"/>').appendTo(o),c={},d=(parseInt(n.initMaxHeight)||50)/100,p=(parseInt(n.maxHeight)||90)/100;o.data("addNode",function(e,n){var r,u,h,f=t.getUI("workzone").height(),m=f*d;return n=Object.assign({first:!1,sizeSync:!0,init:!1},n),e.attr("id")||e.attr("id",t.namespace+"-navdock-"+ +new Date),n.sizeSync&&(c[e.attr("id")]=e),r=o.height(),u=r+e.outerHeight(!0),n.first?l.after(e):o.append(e),a=!0,o.resizable("enable").height(u).show(),t.trigger("wzresize"),n.init&&(h=t.storage("navdockHeight"),u=h?h:u>m?m:u,i=u),s(Math.min(u,f*p)),o}).data("removeNode",function(n,i){var r=e("#"+n);return delete c[n],o.height(o.height()-e("#"+n).outerHeight(!0)),i?"detach"===i?r=r.detach():i.append(r):r.remove(),o.children().length<=1&&(a=!1,o.resizable("disable").height(0).hide()),t.trigger("wzresize"),r}),n.disabled||t.one("init",function(){var e;t.getUI("navbar").children().not(".ui-resizable-handle").length&&(o.data("dockEnabled",!0),o.resizable({maxHeight:t.getUI("workzone").height()*p,handles:{n:l},start:function(n,i){e=o.css("overflow"),o.css("overflow","hidden"),t.trigger("navdockresizestart",{event:n,ui:i},!0)},resize:function(e,n){o.css("top",""),t.trigger("wzresize",{inNavdockResize:!0})},stop:function(n,a){t.trigger("navdockresizestop",{event:n,ui:a},!0),o.css("top",""),i=a.size.height,t.storage("navdockHeight",i),s(i,a.originalSize.height),o.css("overflow",e)}}),t.bind("wzresize",function(e){var n,a;o.is(":visible")&&(n=t.getUI("workzone").height()*p,e.data&&e.data.inNavdockResize||(a=o.height(),n<i?Math.abs(a-n)>1&&s(n):Math.abs(a-i)>1&&s(i)),o.resizable("option","maxHeight",n))})),t.bind("navbarshow navbarhide",function(e){o[a&&"navbarshow"===e.type?"show":"hide"]()})})}),this},e.fn.elfinderoverlay=function(t){var n,i,a,o,r=this.parent().elfinder("instance");return this.filter(":not(.elfinder-overlay)").each(function(){t=Object.assign({},t),e(this).addClass("ui-front ui-widget-overlay elfinder-overlay").hide().on("mousedown",function(e){e.preventDefault(),e.stopPropagation()}).data({cnt:0,show:"function"==typeof t.show?t.show:function(){},hide:"function"==typeof t.hide?t.hide:function(){}})}),"show"==t&&(n=this.eq(0),i=n.data("cnt")+1,a=n.data("show"),r.toFront(n),n.data("cnt",i),n.is(":hidden")&&(n.show(),a())),"hide"==t&&(n=this.eq(0),i=n.data("cnt")-1,o=n.data("hide"),n.data("cnt",i),i<=0&&(n.hide(),o())),this},e.fn.elfinderpanel=function(t){return this.each(function(){var n=e(this).addClass("elfinder-panel ui-state-default ui-corner-all"),i="margin-"+("ltr"==t.direction?"left":"right");t.one("load",function(e){var a=t.getUI("navbar");n.css(i,parseInt(a.outerWidth(!0))),a.on("resize",function(e){e.preventDefault(),e.stopPropagation(),n.is(":visible")&&n.css(i,parseInt(a.outerWidth(!0)))})})})},e.fn.elfinderpath=function(t,n){return this.each(function(){var a,o="",r="",s=[],l="statusbar",c=t.res("class","hover"),d="path"+(i.prototype.uniqueid?i.prototype.uniqueid:"")+"-",p=e('<div class="ui-widget-header ui-helper-clearfix elfinder-workzone-path"/>'),u=e(this).addClass("elfinder-path").html("&nbsp;").on("mousedown","span.elfinder-path-dir",function(n){var i=e(this).attr("id").substr(d.length);n.preventDefault(),i!=t.cwd().hash&&(e(this).addClass(c),o?t.exec("search",o,{target:i,mime:s.join(" ")}):t.trigger("select",{selected:[i]}).exec("open",i))}).prependTo(t.getUI("statusbar").show()),h=e('<div class="elfinder-path-roots"/>').on("click",function(n){n.stopPropagation(),n.preventDefault();var i=e.map(t.roots,function(e){return t.file(e)}),a=[];e.each(i,function(e,n){n.phash||t.root(t.cwd().hash,!0)===n.hash||a.push({label:t.escape(n.i18||n.name),icon:"home",callback:function(){t.exec("open",n.hash)},options:{iconClass:n.csscls||"",iconImg:n.icon||""}})}),t.trigger("contextmenu",{raw:a,x:n.pageX,y:n.pageY})}).append('<span class="elfinder-button-icon elfinder-button-icon-menu" />').appendTo(p),f=function(n){var i=[],a=[];return e.each(t.parents(n),function(e,o){var r=n===o?"elfinder-path-dir elfinder-path-cwd":"elfinder-path-dir",s=t.file(o),l=t.escape(s.i18||s.name);a.push(l),i.push('<span id="'+d+o+'" class="'+r+'" title="'+a.join(t.option("separator"))+'">'+l+"</span>")}),i.join('<span class="elfinder-path-other">'+t.option("separator")+"</span>")},m=function(){var n;u.children("span.elfinder-path-dir").attr("style",""),n="ltr"===t.direction?e("#"+d+t.cwd().hash).prevAll("span.elfinder-path-dir:first"):e(),u.scrollLeft(n.length?n.position().left:0)},g=function(){var t,n,i=u.children("span.elfinder-path-dir"),a=i.length;return"workzone"===l||a<2?void i.attr("style",""):(u.width(u.css("max-width")),
i.css({maxWidth:100/a+"%",display:"inline-block"}),t=u.width()-9,u.children("span.elfinder-path-other").each(function(){t-=e(this).width()}),n=[],i.each(function(i){var a=e(this),o=a.width();t-=o,o<this.scrollWidth&&n.push(i)}),u.width(""),void(n.length?(t>0&&(t/=n.length,e.each(n,function(n,a){var o=e(i[a]);o.css("max-width",o.width()+t)})),i.last().attr("style","")):i.attr("style","")))};t.one("init",function(){a=t.getUI("tree").length,!a&&n.toWorkzoneWithoutNavbar&&(p.append(u).insertBefore(t.getUI("workzone")),l="workzone",t.bind("open",m).one("opendone",function(){t.getUI().trigger("resize")}))}).bind("open searchend parents",function(){o="",r="",s=[],u.html(f(t.cwd().hash)),Object.keys(t.roots).length>1?(u.css("margin",""),h.show()):(u.css("margin",0),h.hide()),g()}).bind("searchstart",function(e){e.data&&(o=e.data.query||"",r=e.data.target||"",s=e.data.mimes||[])}).bind("search",function(e){var n="";n=r?f(r):t.i18n("btnAll"),u.html('<span class="elfinder-path-other">'+t.i18n("searcresult")+": </span>"+n),g()}).bind("navbarshow navbarhide",function(){var e=t.getUI("workzone");"navbarshow"===this.type?(t.unbind("open",m),u.prependTo(t.getUI("statusbar")),p.detach(),l="statusbar"):(p.append(u).insertBefore(e),l="workzone",m(),t.bind("open",m)),t.trigger("uiresize")}).bind("resize",g)})},e.fn.elfinderplaces=function(t,n){return this.each(function(){var i={},a="class",o=t.res(a,"navdir"),r=t.res(a,"navcollapse"),s=t.res(a,"navexpand"),l=t.res(a,"hover"),c=t.res(a,"treeroot"),d=t.res(a,"adroppable"),p=t.res("tpl","placedir"),u=t.res("tpl","perms"),h=e(t.res("tpl","navspinner")),f=n.suffix?n.suffix:"",m="places"+f,g=null,v=function(e){return e.substr(6)},b=function(e){return"place-"+e},y=function(){var n=[],a={};n=e.map(D.children().find("[id]"),function(e){return v(e.id)}),n.length?e.each(n.reverse(),function(e,t){a[t]=i[t]}):a=null,t.storage(m,a)},w=function(){var a,o;m="places"+(n.suffix?n.suffix:""),i={},a=t.storage(m),"string"==typeof a?(a=e.grep(a.split(","),function(e){return!!e}),e.each(a,function(e,t){var n=t.split("#");i[n[0]]=n[1]?n[1]:n[0]})):e.isPlainObject(a)&&(i=a),t.trigger("placesload",{dirs:i,storageKey:m},!0),o=Object.keys(i),o.length&&(j.prepend(h),t.request({data:{cmd:"info",targets:o},preventDefault:!0}).done(function(n){var a={};n.files&&n.files.length&&t.cache(n.files),e.each(n.files,function(e,t){var n=t.hash;a[n]=t}),e.each(i,function(e,t){k(a[e]||Object.assign({notfound:!0},t))}),t.storage("placesState")>0&&j.trigger("click")}).always(function(){h.remove()}))},x=function(n,i){return e(p.replace(/\{id\}/,b(n?n.hash:i)).replace(/\{name\}/,t.escape(n?n.i18||n.name:i)).replace(/\{cssclass\}/,n?t.perms2class(n)+(n.notfound?" elfinder-na":"")+(n.csscls?" "+n.csscls:""):"").replace(/\{permissions\}/,!n||n.read&&n.write&&!n.notfound?"":u).replace(/\{title\}/,n&&n.path?t.escape(n.path):"").replace(/\{symlink\}/,"").replace(/\{style\}/,n&&n.icon?t.getIconStyle(n):""))},k=function(e){var n,a;return"directory"===e.mime&&(a=e.hash,t.files().hasOwnProperty(a)||t.trigger("tree",{tree:[e]}),n=x(e,a),i[a]=e,D.prepend(n),j.addClass(r),A.toggle(D.children().length>1),!0)},C=function(t){var n,a,o=null;return i[t]&&(delete i[t],n=e("#"+b(t)),n.length&&(o=n.text(),n.parent().remove(),a=D.children().length,A.toggle(a>1),a||(j.removeClass(r),M.removeClass(s),D.slideToggle(!1)))),o},T=function(n){var i=e("#"+b(n)),a=i.parent(),o=a.prev("div"),r="ui-state-hover",s=t.getUI("contextmenu");g&&clearTimeout(g),o.length&&(s.find(":first").data("placesHash",n),i.addClass(r),a.insertBefore(o),o=a.prev("div"),g=setTimeout(function(){i.removeClass(r),s.find(":first").data("placesHash")===n&&s.hide().empty()},1500)),o.length||(i.removeClass(r),s.hide().empty())},z=function(t,n){var a=t.hash,o=e("#"+b(n||a)),r=x(t,a);return o.length>0&&(o.parent().replaceWith(r),i[a]=t,!0)},I=function(){D.empty(),j.removeClass(r),M.removeClass(s),D.slideToggle(!1)},S=function(){e.each(i,function(n,i){var a=t.file(n)||i,r=x(a,n),s=null;return a||r.hide(),!(!D.children().length||(e.each(D.children(),function(){var t=e(this);if((a.i18||a.name).localeCompare(t.children("."+o).text())<0)return s=!r.insertBefore(t)}),null===s))||void(!e("#"+b(n)).length&&D.append(r))}),y()},A=e('<span class="elfinder-button-icon elfinder-button-icon-sort elfinder-places-root-icon" title="'+t.i18n("cmdsort")+'"/>').hide().on("click",function(e){e.stopPropagation(),D.empty(),S()}),O=x({hash:"root-"+t.namespace,name:t.i18n(n.name,"places"),read:!0,write:!0}),j=O.children("."+o).addClass(c).on("click",function(e){e.stopPropagation(),j.hasClass(r)&&(M.toggleClass(s),D.slideToggle(),t.storage("placesState",M.hasClass(s)?1:0))}).append(A),D=O.children("."+t.res(a,"navsubtree")),M=e(this).addClass(t.res(a,"tree")+" elfinder-places ui-corner-all").hide().append(O).appendTo(t.getUI("navbar")).on("mouseenter mouseleave","."+o,function(t){e(this).toggleClass("ui-state-hover","mouseenter"==t.type)}).on("click","."+o,function(n){var i=e(this);return i.data("longtap")?void n.stopPropagation():void(!i.hasClass("elfinder-na")&&t.exec("open",i.attr("id").substr(6)))}).on("contextmenu","."+o+":not(."+c+")",function(n){var i=e(this),a=i.attr("id").substr(6);n.preventDefault(),t.trigger("contextmenu",{raw:[{label:t.i18n("moveUp"),icon:"up",remain:!0,callback:function(){T(a),y()}},"|",{label:t.i18n("rmFromPlaces"),icon:"rm",callback:function(){C(a),y()}}],x:n.pageX,y:n.pageY}),i.addClass("ui-state-hover"),t.getUI("contextmenu").children().on("mouseenter",function(){i.addClass("ui-state-hover")}),t.bind("closecontextmenu",function(){i.removeClass("ui-state-hover")})}).droppable({tolerance:"pointer",accept:".elfinder-cwd-file-wrapper,.elfinder-tree-dir,.elfinder-cwd-file",hoverClass:t.res("class","adroppable"),classes:{"ui-droppable-hover":t.res("class","adroppable")},over:function(n,a){var o=a.helper,r=e.grep(o.data("files"),function(e){return"directory"===t.file(e).mime&&!i[e]});n.stopPropagation(),o.data("dropover",o.data("dropover")+1),t.insideWorkzone(n.pageX,n.pageY)&&(r.length>0?(o.addClass("elfinder-drag-helper-plus"),t.trigger("unlockfiles",{files:o.data("files"),helper:o})):e(this).removeClass(d))},out:function(t,n){var i=n.helper;t.stopPropagation(),i.removeClass("elfinder-drag-helper-move elfinder-drag-helper-plus").data("dropover",Math.max(i.data("dropover")-1,0)),e(this).removeData("dropover").removeClass(d)},drop:function(n,a){var o=a.helper,r=!0;e.each(o.data("files"),function(e,n){var a=t.file(n);a&&"directory"==a.mime&&!i[a.hash]?k(a):r=!1}),y(),r&&o.hide()}}).on("touchstart","."+o+":not(."+c+")",function(n){if(!(n.originalEvent.touches.length>1))var i=e(this).attr("id").substr(6),a=e(this).addClass(l).data("longtap",null).data("tmlongtap",setTimeout(function(){a.data("longtap",!0),t.trigger("contextmenu",{raw:[{label:t.i18n("rmFromPlaces"),icon:"rm",callback:function(){C(i),y()}}],x:n.originalEvent.touches[0].pageX,y:n.originalEvent.touches[0].pageY})},500))}).on("touchmove touchend","."+o+":not(."+c+")",function(t){clearTimeout(e(this).data("tmlongtap")),"touchmove"==t.type&&e(this).removeClass(l)});e.fn.sortable&&D.addClass("touch-punch").sortable({appendTo:t.getUI(),revert:!1,helper:function(n){var i=e(n.target).parent();return i.children().removeClass("ui-state-hover"),e('<div class="ui-widget elfinder-place-drag elfinder-'+t.direction+'"/>').append(e('<div class="elfinder-navbar"/>').show().append(i.clone()))},stop:function(t,n){var i=e(n.item[0]),a=M.offset().top,o=M.offset().left,r=M.width(),s=M.height(),l=t.pageX,c=t.pageY;l>o&&l<o+r&&c>a&&c<c+s||(C(v(i.children(":first").attr("id"))),y())},update:function(e,t){y()}}),e(this).on("regist",function(t,n){var a=!1;e.each(n,function(e,t){t&&"directory"==t.mime&&!i[t.hash]&&k(t)&&(a=!0)}),a&&y()}),t.one("load",function(){t.oldAPI||(M.show().parent().show(),w(),t.change(function(t){var n=!1;e.each(t.data.changed,function(e,t){i[t.hash]&&("directory"!==t.mime?C(t.hash)&&(n=!0):z(t)&&(n=!0))}),n&&y()}).bind("rename",function(t){var n=!1;t.data.removed&&e.each(t.data.removed,function(e,i){t.data.added[e]&&z(t.data.added[e],i)&&(n=!0)}),n&&y()}).bind("rm paste",function(t){var n=[],i=!1;t.data.removed&&e.each(t.data.removed,function(e,t){var i=C(t);i&&n.push(i)}),n.length&&(i=!0),t.data.added&&n.length&&e.each(t.data.added,function(t,i){1!==e.inArray(i.name,n)&&"directory"==i.mime&&k(i)}),i&&y()}).bind("sync netmount",function(){var a,o=this,r=n.suffix?n.suffix:"";return"sync"===o.type&&f!==r?(f=r,I(),void w()):(a=Object.keys(i),void(a.length&&(j.prepend(h),t.request({data:{cmd:"info",targets:a},preventDefault:!0}).done(function(n){var a={},r=!1,s=t.cwd().hash;e.each(n.files||[],function(e,n){var i=n.hash;a[i]=n,t.files().hasOwnProperty(n.hash)||t.trigger("tree",{tree:[n]})}),e.each(i,function(e,t){t.notfound===Boolean(a[e])?t.phash===s&&"netmount"!==o.type||a[e]&&"directory"!==a[e].mime?C(e)&&(r=!0):z(a[e]||Object.assign({notfound:!0},t))&&(r=!0):a[e]&&a[e].phash!=s&&z(a[e])}),r&&y()}).always(function(){h.remove()}))))}))})})},e.fn.elfindersearchbutton=function(t){return this.each(function(){var n,i,a=!1,o=t.fm,r=t.options.incsearch||{enable:!1},s=function(e){return o.namespace+e},l=o.getUI("toolbar"),c=o.res("class","searchbtn"),d=e(this).hide().addClass("ui-widget-content elfinder-button "+c).on("click",function(e){e.stopPropagation()}),p=function(){f.data("inctm")&&clearTimeout(f.data("inctm"));var n=e.trim(f.val()),i=!e("#"+s("SearchFromAll")).prop("checked"),r=e("#"+s("SearchMime")).prop("checked");i&&(i=e("#"+s("SearchFromVol")).prop("checked")?o.root(o.cwd().hash):o.cwd().hash),r&&(r=n,n="."),n?t.exec(n,i,r).done(function(){a=!0}).fail(function(){u()}):o.trigger("searchend")},u=function(){f.data("inctm")&&clearTimeout(f.data("inctm")),f.val("").trigger("blur"),(a||h)&&(a=!1,h="",o.lazy(function(){o.trigger("searchend")}))},h="",f=e('<input type="text" size="42"/>').on("focus",function(){h="",d.addClass("ui-state-active"),o.trigger("uiresize"),n&&n.slideDown(function(){d.addClass("ui-state-active")})}).on("blur",function(){n?n.data("infocus")?n.data("infocus",!1):n.slideUp(function(){d.removeClass("ui-state-active"),o.trigger("uiresize")}):d.removeClass("ui-state-active")}).appendTo(d).on("keypress",function(e){e.stopPropagation()}).on("keydown",function(t){t.stopPropagation(),t.keyCode==e.ui.keyCode.ENTER&&p(),t.keyCode==e.ui.keyCode.ESCAPE&&(t.preventDefault(),u())});r.enable&&(r.minlen=r.minlen||2,r.wait=r.wait||500,f.attr("title",o.i18n("incSearchOnly")).on("compositionstart",function(){f.data("composing",!0)}).on("compositionend",function(){f.removeData("composing"),f.trigger("input")}).on("input",function(){f.data("composing")||(f.data("inctm")&&clearTimeout(f.data("inctm")),f.data("inctm",setTimeout(function(){var e=f.val();(0===e.length||e.length>=r.minlen)&&(h!==e&&o.trigger("incsearchstart",{query:e}),h=e,""===e&&o.searchStatus.state>1&&o.searchStatus.query&&f.val(o.searchStatus.query).trigger("select"))},r.wait)))}),o.UA.ltIE8&&f.on("keydown",function(e){229===e.keyCode&&(f.data("imetm")&&clearTimeout(f.data("imetm")),f.data("composing",!0),f.data("imetm",setTimeout(function(){f.removeData("composing")},100)))}).on("keyup",function(t){f.data("imetm")&&clearTimeout(f.data("imetm")),f.data("composing")?t.keyCode===e.ui.keyCode.ENTER&&f.trigger("compositionend"):f.trigger("input")})),e('<span class="ui-icon ui-icon-search" title="'+t.title+'"/>').appendTo(d).on("mousedown",function(e){e.stopPropagation(),e.preventDefault(),d.hasClass("ui-state-active")?p():f.trigger("focus")}),e('<span class="ui-icon ui-icon-close"/>').appendTo(d).on("mousedown",function(e){e.stopPropagation(),e.preventDefault(),""!==f.val()||d.hasClass("ui-state-active")?u():f.trigger("focus")}),o.bind("toolbarload",function(){var e=d.parent();if(e.length&&(l.prepend(d.show()),e.remove(),o.UA.ltIE7)){var t=d.children("ltr"==o.direction?".ui-icon-close":".ui-icon-search");t.css({right:"",left:parseInt(d.width())-t.outerWidth(!0)})}}),o.one("open",function(){n=o.api<2.1?null:e('<div class="ui-front ui-widget ui-widget-content elfinder-button-search-menu ui-corner-all"/>').append(e('<div class="buttonset"/>').append(e('<input id="'+s("SearchFromCwd")+'" name="serchfrom" type="radio" checked="checked"/><label for="'+s("SearchFromCwd")+'">'+o.i18n("btnCwd")+"</label>"),e('<input id="'+s("SearchFromVol")+'" name="serchfrom" type="radio"/><label for="'+s("SearchFromVol")+'">'+o.i18n("btnVolume")+"</label>"),e('<input id="'+s("SearchFromAll")+'" name="serchfrom" type="radio"/><label for="'+s("SearchFromAll")+'">'+o.i18n("btnAll")+"</label>")),e('<div class="buttonset"/>').append(e('<input id="'+s("SearchName")+'" name="serchcol" type="radio" checked="checked"/><label for="'+s("SearchName")+'">'+o.i18n("btnFileName")+"</label>"),e('<input id="'+s("SearchMime")+'" name="serchcol" type="radio"/><label for="'+s("SearchMime")+'">'+o.i18n("btnMime")+"</label>"))).hide().appendTo(o.getUI()),n&&(n.find("div.buttonset").buttonset(),e("#"+s("SearchFromAll")).next("label").attr("title",o.i18n("searchTarget",o.i18n("btnAll"))),e("#"+s("SearchMime")).next("label").attr("title",o.i18n("searchMime")),n.on("mousedown","div.buttonset",function(e){e.stopPropagation(),n.data("infocus",!0)}).on("click","input",function(t){t.stopPropagation(),e.trim(f.val())?p():f.trigger("focus")}))}).bind("searchend",function(){f.val("")}).bind("open parents",function(){var t=[],n=o.file(o.root(o.cwd().hash));n&&(e.each(o.parents(o.cwd().hash),function(e,n){t.push(o.file(n).name)}),e("#"+s("SearchFromCwd")).next("label").attr("title",o.i18n("searchTarget",t.join(o.option("separator")))),e("#"+s("SearchFromVol")).next("label").attr("title",o.i18n("searchTarget",n.name)))}).bind("open",function(){h&&u()}).bind("cwdinit",function(){i=!1}).bind("cwdrender",function(){i=!0}).bind("keydownEsc",function(){h&&"/"===h.substr(0,1)&&(h="",f.val(""),o.trigger("searchend"))}).shortcut({pattern:"ctrl+f f3",description:t.title,callback:function(){f.trigger("select").trigger("focus")}}).shortcut({pattern:"a b c d e f g h i j k l m n o p q r s t u v w x y z dig0 dig1 dig2 dig3 dig4 dig5 dig6 dig7 dig8 dig9 num0 num1 num2 num3 num4 num5 num6 num7 num8 num9",description:o.i18n("firstLetterSearch"),callback:function(t){if(i){var n,a=t.originalEvent.keyCode,r=function(){var t=o.selected(),n=e.ui.keyCode[!t.length||e("#"+o.cwdHash2Id(t[0])).next("[id]").length?"RIGHT":"HOME"];e(document).trigger(e.Event("keydown",{keyCode:n,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}))};a>=96&&a<=105&&(a-=48),n="/"+String.fromCharCode(a),h!==n?(f.val(n),h=n,o.trigger("incsearchstart",{query:n}).one("cwdrender",r)):r()}}})})},e.fn.elfindersortbutton=function(t){return this.each(function(){var n=t.fm,i=t.name,a="class",o=n.res(a,"disabled"),r=n.res(a,"hover"),s="elfinder-button-menu-item",l=s+"-selected",c=l+"-asc",d=l+"-desc",p=e('<span class="elfinder-button-text">'+t.title+"</span>"),u=e(this).addClass("ui-state-default elfinder-button elfinder-menubutton elfiner-button-"+i).attr("title",t.title).append('<span class="elfinder-button-icon elfinder-button-icon-'+i+'"/>',p).on("mouseenter mouseleave",function(e){!u.hasClass(o)&&u.toggleClass(r)}).on("click",function(e){u.hasClass(o)||(e.stopPropagation(),h.is(":hidden")&&n.getUI().click(),h.css(g()).slideToggle(100))}),h=e('<div class="ui-front ui-widget ui-widget-content elfinder-button-menu ui-corner-all"/>').hide().appendTo(n.getUI()).on("mouseenter mouseleave","."+s,function(){e(this).toggleClass(r)}).on("click","."+s,function(e){e.preventDefault(),e.stopPropagation(),m()}),f=function(){h.children("[rel]").removeClass(l+" "+c+" "+d).filter('[rel="'+n.sortType+'"]').addClass(l+" "+("asc"==n.sortOrder?c:d)),h.children(".elfinder-sort-stick").toggleClass(l,n.sortStickFolders),h.children(".elfinder-sort-tree").toggleClass(l,n.sortAlsoTreeview)},m=function(){h.hide()},g=function(){var e=n.getUI().offset(),t=u.offset();return{top:t.top-e.top,left:t.left-e.left}};p.hide(),e.each(n.sortRules,function(t,i){h.append(e('<div class="'+s+'" rel="'+t+'"><span class="ui-icon ui-icon-arrowthick-1-n"/><span class="ui-icon ui-icon-arrowthick-1-s"/>'+n.i18n("sort"+t)+"</div>").data("type",t))}),h.children().on("click",function(i){var a=e(this).attr("rel");t.exec([],{type:a,order:a==n.sortType?"asc"==n.sortOrder?"desc":"asc":n.sortOrder,stick:n.sortStickFolders,tree:n.sortAlsoTreeview})}),e('<div class="'+s+" "+s+'-separated elfinder-sort-ext elfinder-sort-stick"><span class="ui-icon ui-icon-check"/>'+n.i18n("sortFoldersFirst")+"</div>").appendTo(h).on("click",function(){t.exec([],{type:n.sortType,order:n.sortOrder,stick:!n.sortStickFolders,tree:n.sortAlsoTreeview})}),e.fn.elfindertree&&e.inArray("tree",n.options.ui)!==-1&&e('<div class="'+s+" "+s+'-separated elfinder-sort-ext elfinder-sort-tree"><span class="ui-icon ui-icon-check"/>'+n.i18n("sortAlsoTreeview")+"</div>").appendTo(h).on("click",function(){t.exec([],{type:n.sortType,order:n.sortOrder,stick:n.sortStickFolders,tree:!n.sortAlsoTreeview})}),n.bind("disable select",m).getUI().on("click",m),n.bind("sortchange",f),h.children().length>1?t.change(function(){u.toggleClass(o,t.disabled()),f()}).change():u.addClass(o)})},e.fn.elfinderstat=function(t){return this.each(function(){var n=e(this).addClass("elfinder-stat-size"),i=e('<div class="elfinder-stat-selected"/>').on("click","a",function(n){var i=e(this).data("hash");n.preventDefault(),t.exec("opendir",[i])}),a=t.i18n("items"),o=t.i18n("selected"),r=t.i18n("size"),s=function(i){var o=0,r=0,s=t.cwd(),l=!0,c=!0;(s.sizeInfo||s.size)&&(r=s.size,l=!1),e.each(i,function(e,t){o++,l&&(r+=parseInt(t.size)||0,c!==!0||"directory"!==t.mime||t.sizeInfo||(c=!1))}),n.html(a+': <span class="elfinder-stat-incsearch"></span>'+o+',&nbsp;<span class="elfinder-stat-size'+(c?" elfinder-stat-size-recursive":"")+'">'+t.i18n(c?"sum":"size")+": "+t.formatSize(r)+"</span>").attr("title",n.text())},l=function(e){n.find("span.elfinder-stat-incsearch").html(e?e.hashes.length+" / ":""),n.attr("title",n.text())};t.getUI("statusbar").prepend(n).append(i).show(),t.UA.Mobile&&e.fn.tooltip&&t.getUI("statusbar").tooltip({classes:{"ui-tooltip":"elfinder-ui-tooltip ui-widget-shadow"},tooltipClass:"elfinder-ui-tooltip ui-widget-shadow",track:!0}),t.bind("cwdhasheschange",function(n){s(e.map(n.data,function(e){return t.file(e)}))}).change(function(i){var a=i.data.changed||[],o=t.cwd().hash;e.each(a,function(){if(this.hash===o)return this.size&&(n.children(".elfinder-stat-size").addClass("elfinder-stat-size-recursive").html(t.i18n("sum")+": "+t.formatSize(this.size)),n.attr("title",n.text())),!1})}).select(function(){var n,a,s=0,l=0,c=t.selectedFiles(),d=[];1===c.length?(a=c[0],s=a.size,2===t.searchStatus.state&&(n=t.escape(a.path?a.path.replace(/\/[^\/]*$/,""):".."),d.push('<a href="#elf_'+a.phash+'" data-hash="'+a.hash+'" title="'+n+'">'+n+"</a>")),d.push(t.escape(a.i18||a.name)),i.html(d.join("/")+(s>0?", "+t.formatSize(s):""))):c.length?(e.each(c,function(e,t){l++,s+=parseInt(t.size)||0}),i.html(l?o+": "+l+", "+r+": "+t.formatSize(s):"&nbsp;")):i.html(""),i.attr("title",i.text())}).bind("incsearch",function(e){l(e.data)}).bind("incsearchend",function(){l()})})},e.fn.elfindertoast=function(t,n){var i={mode:"success",msg:"",showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1500,hideEasing:"swing",onHidden:void 0,timeOut:3e3,extNode:void 0};return this.each(function(){t=Object.assign({},i,t||{});var a,o=e(this),r=function(e){o.stop(),o[t.showMethod]({duration:t.showDuration,easing:t.showEasing,complete:function(){t.onShown&&t.onShown(),!e&&t.timeOut&&(a=setTimeout(s,t.timeOut))}})},s=function(){o[t.hideMethod]({duration:t.hideDuration,easing:t.hideEasing,complete:function(){t.onHidden&&t.onHidden(),o.remove()}})};o.on("click",function(e){e.stopPropagation(),e.preventDefault(),o.stop().remove()}).on("mouseenter mouseleave",function(e){t.timeOut&&(a&&clearTimeout(a),a=null,"mouseenter"===e.type?r(!0):a=setTimeout(s,t.timeOut))}).hide().addClass("toast-"+t.mode).append(e('<div class="elfinder-toast-msg"/>').html(t.msg.replace(/%([a-zA-Z0-9]+)%/g,function(e,t){return n.i18n(t)}))),t.extNode&&o.append(t.extNode),r()})},e.fn.elfindertoolbar=function(t,n){return this.not(".elfinder-toolbar").each(function(){var i,a,o,r,s,l,c,d,p=t._commands,u=e(this).addClass("ui-helper-clearfix ui-widget-header ui-corner-top elfinder-toolbar"),h={displayTextLabel:!1,labelExcludeUA:["Mobile"],autoHideUA:["Mobile"],showPreferenceButton:"none"},f=function(t){return e.grep(t,function(t){return!e.isPlainObject(t)||(h=Object.assign(h,t),!1)})},m=function(n){var l,c;for(e.each(g,function(e,t){t.detach()}),u.empty(),i=v.length;i--;)if(v[i]){for(r=e('<div class="ui-widget-content ui-corner-all elfinder-buttonset"/>'),a=v[i].length;a--;)l=v[i][a],n&&n[l]||!(o=p[l])||(s="elfinder"+o.options.ui,!g[l]&&e.fn[s]&&(g[l]=e("<div/>")[s](o)),g[l]&&(g[l].children(".elfinder-button-text")[d?"show":"hide"](),r.prepend(g[l])));r.children().length&&u.prepend(r),r.children(":gt(0)").before('<span class="ui-widget-content elfinder-toolbar-button-separator"/>')}(c=p.preference)&&("always"===h.showPreferenceButton||!u.children().length&&"auto"===h.showPreferenceButton)&&(r=e('<div class="ui-widget-content ui-corner-all elfinder-buttonset"/>'),l="preference",s="elfinder"+o.options.ui,g[l]=e("<div/>")[s](c),g[l].children(".elfinder-button-text")[d?"show":"hide"](),r.prepend(g[l]),u.append(r)),!u.data("swipeClose")&&u.children().length?u.show():u.hide(),t.trigger("toolbarload").trigger("uiresize")},g={},v=f(n||[]),b=null,y="";h.showPreferenceButton=h.showPreferenceButton.toLowerCase(),d=t.storage("toolbarTextLabel"),d=null===d?h.displayTextLabel&&(!h.labelExcludeUA||!h.labelExcludeUA.length||!e.grep(h.labelExcludeUA,function(e){return!!t.UA[e]}).length):1==d,u.on("contextmenu",function(e){e.stopPropagation(),e.preventDefault(),t.trigger("contextmenu",{raw:[{label:t.i18n("textLabel"),icon:"accept",callback:function(){d=!d,u.css("height","").find(".elfinder-button-text")[d?"show":"hide"](),t.trigger("uiresize").storage("toolbarTextLabel",d?"1":"0")}},{label:t.i18n("toolbarPref"),icon:"preference",callback:function(){t.exec("help",void 0,{tab:"preference"})}}],x:e.pageX,y:e.pageY})}).on("touchstart",function(e){e.originalEvent.touches.length>1||(u.data("tmlongtap")&&clearTimeout(u.data("tmlongtap")),u.removeData("longtap").data("longtap",{x:e.originalEvent.touches[0].pageX,y:e.originalEvent.touches[0].pageY}).data("tmlongtap",setTimeout(function(){u.removeData("longtapTm").trigger({type:"contextmenu",pageX:u.data("longtap").x,pageY:u.data("longtap").y}).data("longtap",{longtap:!0})},500)))}).on("touchmove touchend",function(e){u.data("tmlongtap")&&(("touchend"===e.type||Math.abs(u.data("longtap").x-e.originalEvent.touches[0].pageX)+Math.abs(u.data("longtap").y-e.originalEvent.touches[0].pageY)>4)&&clearTimeout(u.data("tmlongtap")),u.removeData("longtapTm"))}).on("click",function(e){u.data("longtap")&&u.data("longtap").longtap&&(e.stopImmediatePropagation(),e.preventDefault())}).on("touchend click",".elfinder-button",function(e){u.data("longtap")&&u.data("longtap").longtap&&(e.stopImmediatePropagation(),e.preventDefault())}),u.prev().length&&u.parent().prepend(this),m(),t.bind("open sync select toolbarpref",function(){var n,i,a,o=Object.assign({},t.option("disabledFlip")),r=t.storage("toolbarhides");if(!r&&Array.isArray(h.defaultHides)&&(r={},e.each(h.defaultHides,function(){r[this]=!0}),t.storage("toolbarhides",r)),"select"===this.type){if(t.searchStatus.state<2)return;i=t.selected(),i.length&&(o=t.getDisabledCmds(i,!0))}e.each(r,function(e){o[e]||(o[e]=!0)}),Object.keys(t.commandMap).length&&e.each(t.commandMap,function(e,t){"hidden"===t&&(o[e]=!0)}),a=Object.keys(o),b&&b.toString()===a.sort().toString()||(m(a.length?o:null),n=!0),b=a.sort(),(n||y!==JSON.stringify(t.commandMap))&&(y=JSON.stringify(t.commandMap),n||e.each(e("div.elfinder-button"),function(){var t=e(this).data("origin");t&&e(this).after(t).detach()}),Object.keys(t.commandMap).length&&e.each(t.commandMap,function(n,i){var a,o=t._commands[i],r=o?"elfinder"+o.options.ui:null;r&&e.fn[r]&&(a=g[n],a&&(!g[i]&&e.fn[r]&&(g[i]=e("<div/>")[r](t._commands[i]),g[i]&&(g[i].children(".elfinder-button-text")[d?"show":"hide"](),o.extendsCmd&&g[i].children("span.elfinder-button-icon").addClass("elfinder-button-icon-"+o.extendsCmd))),g[i]&&(a.after(g[i]),g[i].data("origin",a.detach()))))}))}),t.UA.Touch&&(c=t.storage("autoHide")||{},"undefined"==typeof c.toolbar&&(c.toolbar=h.autoHideUA&&h.autoHideUA.length>0&&e.grep(h.autoHideUA,function(e){return!!t.UA[e]}).length,t.storage("autoHide",c)),c.toolbar&&t.one("init",function(){t.uiAutoHide.push(function(){u.stop(!0,!0).trigger("toggle",{duration:500,init:!0})})}),t.bind("load",function(){l=e('<div class="elfinder-toolbar-swipe-handle"/>').hide().appendTo(t.getUI()),"none"!==l.css("pointer-events")&&(l.remove(),l=null)}),u.on("toggle",function(e,n){var i=t.getUI("workzone"),a=u.is(":hidden"),o=i.height(),r=u.height(),s=u.outerHeight(!0),d=s-r,p=Object.assign({step:function(e){i.height(o+(a?(e+d)*-1:r-e)),t.trigger("resize")},always:function(){setTimeout(function(){u.css("height",""),t.trigger("uiresize"),l&&(a?l.stop(!0,!0).hide():(l.height(n.handleH?n.handleH:""),t.resources.blink(l,"slowonce"))),a&&u.scrollTop("0px"),n.init&&t.trigger("uiautohide")},0)}},n);u.data("swipeClose",!a).stop(!0,!0).animate({height:"toggle"},p),c.toolbar=!a,t.storage("autoHide",Object.assign(t.storage("autoHide"),{toolbar:c.toolbar}))}).on("touchstart",function(e){u.scrollBottom()>5&&(e.originalEvent._preventSwipeY=!0)}))}),this},e.fn.elfindertree=function(t,n){var i=t.res("class","tree");return this.not("."+i).each(function(){var a,o,r,s="class",l=t.UA.Mobile,c=t.res(s,"treeroot"),d=n.openRootOnLoad,p=n.openCwdOnOpen,u=p||n.syncTree,h=t.res(s,"navsubtree"),f=t.res(s,"treedir"),m="span."+f,g=t.res(s,"navcollapse"),v=t.res(s,"navexpand"),b="elfinder-subtree-loaded",y="elfinder-subtree-chksubdir",w=t.res(s,"navarrow"),x=t.res(s,"active"),k=t.res(s,"adroppable"),C=t.res(s,"hover"),T=t.res(s,"disabled"),z=t.res(s,"draggable"),I=t.res(s,"droppable"),S="elfinder-navbar-wrapper-root",A="elfinder-navbar-wrapper-pastable",O="elfinder-navbar-wrapper-uploadable",j=function(e){var t=re.offset().left;return t<=e&&e<=t+re.width()},D={},M=[],U=function(n){var i=[];if(e.each(n,function(e,n){D[n]&&i.push(t.navId2Hash(n)),delete D[n]}),i.length)return t.request({data:{cmd:"subdirs",targets:i,preventDefault:!0}}).done(function(n){n&&n.subdirs&&e.each(n.subdirs,function(n,i){var a=e("#"+t.navHash2Id(n));a.removeClass(y),a[i?"addClass":"removeClass"](g)})})},E=null,F=function(){var n=Object.keys(D);n.length&&(E&&E._abort(),a&&clearTimeout(a),M=[],E=t.asyncJob(function(n){return t.isInWindow(e("#"+n))?n:null},n,{numPerOnce:200}).done(function(e){e.length&&(M=e,R())}))},P=0,R=function(){var e,t=n.subdirsMaxConn-P;if(a&&clearTimeout(a),M.length)if(t>0)for(e=0;e<t;e++)M.length&&(P++,U(M.splice(0,n.subdirsAtOnce)).always(function(){P--,R()}));else a=setTimeout(function(){M.length&&R()},50)},H=t.droppable.drop,q=e.extend(!0,{},t.droppable,{over:function(n,i){var a,o,r=e(this),s=i.helper,l=C+" "+k;return n.stopPropagation(),s.data("dropover",s.data("dropover")+1),r.data("dropover",!0),i.helper.data("namespace")===t.namespace&&j(n.clientX)&&t.insideWorkzone(n.pageX,n.pageY)?(r.addClass(C),r.is("."+g+":not(."+v+")")&&r.data("expandTimer",setTimeout(function(){r.is("."+g+"."+C)&&r.children("."+w).click()},500)),r.is(".elfinder-ro,.elfinder-na")?(r.removeClass(k),void s.removeClass("elfinder-drag-helper-move elfinder-drag-helper-plus")):(a=t.navId2Hash(r.attr("id")),r.data("dropover",a),e.each(i.helper.data("files"),function(e,n){if(n===a||t.file(n).phash===a&&!i.helper.hasClass("elfinder-drag-helper-plus"))return r.removeClass(l),!1}),s.data("locked")?o="elfinder-drag-helper-plus":(o="elfinder-drag-helper-move",(n.shiftKey||n.ctrlKey||n.metaKey)&&(o+=" elfinder-drag-helper-plus")),r.hasClass(k)&&s.addClass(o),void setTimeout(function(){r.hasClass(k)&&s.addClass(o)},20))):(r.removeClass(l),void s.removeClass("elfinder-drag-helper-move elfinder-drag-helper-plus"))},out:function(t,n){var i=e(this),a=n.helper;t.stopPropagation(),a.removeClass("elfinder-drag-helper-move elfinder-drag-helper-plus").data("dropover",Math.max(a.data("dropover")-1,0)),i.data("expandTimer")&&clearTimeout(i.data("expandTimer")),i.removeData("dropover").removeClass(C+" "+k)},deactivate:function(){e(this).removeData("dropover").removeClass(C+" "+k)},drop:function(e,t){j(e.clientX)&&H.call(this,e,t)}}),_=e(t.res("tpl","navspinner")),N=t.res("tpl","navdir"),L=t.res("tpl","perms"),W=(t.res("tpl","lock"),t.res("tpl","symlink")),B={},$={id:function(e){return t.navHash2Id(e.hash)},name:function(e){return t.escape(e.i18||e.name)},cssclass:function(e){var i=(e.phash&&!e.isroot?"":c)+" "+f+" "+t.perms2class(e);return e.dirs&&!e.link&&(i+=" "+g)&&e.dirs==-1&&(i+=" "+y),n.getClass&&(i+=" "+n.getClass(e)),e.csscls&&(i+=" "+t.escape(e.csscls)),i},root:function(t){var n="";return!t.phash||t.isroot?(n+=" "+S,!t.disabled||t.disabled.length<1?n+=" "+A+" "+O:(e.inArray("paste",t.disabled)===-1&&(n+=" "+A),e.inArray("upload",t.disabled)===-1&&(n+=" "+O)),n):""},permissions:function(e){return e.read&&e.write?"":L},symlink:function(e){return e.alias?W:""},style:function(e){return e.icon?t.getIconStyle(e):""}},V=function(e){return N.replace(/(?:\{([a-z]+)\})/gi,function(t,n){var i=$[n]?$[n](e):e[n]||"";return"id"===n&&e.dirs==-1&&(D[i]=i),i})},X=function(n,i){return e.map(n||[],function(n){return"directory"!==n.mime||i&&!e("#"+t.navHash2Id(n.hash)).length?null:n})},K=function(n){return n?e("#"+t.navHash2Id(n)).next("."+h):ae},G=function(e,n){for(var i,a=e.children(":first");a.length;){if(i=t.file(t.navId2Hash(a.children("[id]").attr("id"))),(i=t.file(t.navId2Hash(a.children("[id]").attr("id"))))&&Y(n,i)<0)return a;a=a.next()}return e.children("button.elfinder-navbar-pager-next")},J=function(i){for(var a,o,r,s,c,d,p=i.length,u=[],h=p,f=e(),m={},g=t.cwd(),v=function(i,a,o,r){var s={},c=0,d=t.newAPI?Math.min(1e4,Math.max(10,n.subTreeMax)):1e4,p=function(){s={},e.each(a,function(e,t){s[t.hash]=e})},u=function(t){"prepare"===t?e.each(a,function(e,t){t.node&&i.append(t.node.hide())}):"done"===t&&e.each(a,function(e,t){t.node&&t.node.detach().show()})},h=function(t,n){var i;return t.stopPropagation(),n.select?void v(f(n.select)):n.change?void u(n.change):(n.removed&&n.removed.length&&(a=e.grep(a,function(e){return n.removed.indexOf(e.hash)===-1||(!i&&(i=!0),!1)})),n.added&&n.added.length&&(a=a.concat(e.grep(n.added,function(e){return void 0===s[e.hash]&&(!i&&(i=!0),!0)}))),void(i&&(a.sort(Y),p(),v(c))))},f=function(e){if(void 0!==s[e])return Math.floor(s[e]/d)*d},m=t.navId2Hash(i.prev("[id]").attr("id")),v=function(n,o){var r,s,u,b,w,x,k,C,T=[],z={};delete B[m],c=n,i.off("update."+t.namespace,h),a.length>d&&(i.on("update."+t.namespace,h),void 0===n&&(u=0,p(),n=f(g.hash),void 0===n&&(n=0)),b=a.slice(n,n+d),B[m]=i,w=n?Math.max(-1,n-d):-1,x=n+d>=a.length?0:n+d,r=Math.ceil(a.length/d),s=Math.ceil(n/d)),e.each(b||a,function(e,t){T.push(V(t)),t.node&&(z[t.hash]=t.node)}),k=w>-1?e('<button class="elfinder-navbar-pager elfinder-navbar-pager-prev"/>').text(t.i18n("btnPrevious",s,r)).button({icons:{primary:"ui-icon-caret-1-n"}}).on("click",function(e){e.preventDefault(),e.stopPropagation(),v(w,"up")}):e(),C=x?e('<button class="elfinder-navbar-pager elfinder-navbar-pager-next"/>').text(t.i18n("btnNext",s+2,r)).button({icons:{primary:"ui-icon-caret-1-s"}}).on("click",function(e){e.preventDefault(),e.stopPropagation(),v(x,"down")}):e(),y(),i.empty()[b?"addClass":"removeClass"]("elfinder-navbar-hasmore").append(k,T.join(""),C),e.each(z,function(n,i){e("#"+t.navHash2Id(n)).parent().replaceWith(i)}),o&&Q(t.navHash2Id(b["up"===o?b.length-1:0].hash)),!l&&t.lazy(function(){ne(null,i)})},y=function(){e.each(i.children(".elfinder-navbar-wrapper"),function(n,i){var o,r,l=e(i),c=l.children("[id]:first");c.hasClass(b)&&(o=t.navId2Hash(c.attr("id")),
o&&void 0!==(r=s[o])&&(a[r].node=l.detach()))})};v()},y={},w=[],x=!0;h--;)a=i[h],m[a.hash]||e("#"+t.navHash2Id(a.hash)).length||(m[a.hash]=!0,(o=K(a.phash)).length?a.phash&&((s=!o.children().length)||o.hasClass("elfinder-navbar-hasmore")||(r=G(o,a)).length)?s?(y[a.phash]||(y[a.phash]=[]),y[a.phash].push(a)):r?(d=V(a),r.before(d),!l&&(f=f.add(d))):w.push(a):(d=V(a),o[x||a.phash?"append":"prepend"](d),x=!1,a.phash&&!a.isroot||(c=e("#"+t.navHash2Id(a.hash)).parent()),!l&&ne(null,c)):u.push(a));return Object.keys(y).length&&e.each(y,function(e,t){var n=K(e);t.sort(Y),v(n,t)}),w.length&&o.trigger("update."+t.namespace,{added:w}),u.length&&u.length<p?void J(u):void(!l&&f.length&&t.lazy(function(){ne(f)}))},Y=function(e,n){if(t.sortAlsoTreeview){var i,a="asc"==t.sortOrder,o=t.sortType,r=t.sortRules;return i=a?r[t.sortType](e,n):r[t.sortType](n,e),"name"!==o&&0===i?i=a?r.name(e,n):r.name(n,e):i}return t.sortRules.name(e,n)},Q=function(n){var i,a,o,r,s,l,c=e(this),d=e.Deferred();return c.data("autoScrTm")&&clearTimeout(c.data("autoScrTm")),c.data("autoScrTm",setTimeout(function(){i=e("#"+(n||t.navHash2Id(t.cwd().hash))),i.length?((p?i:i.parent()).parents(".elfinder-navbar-wrapper").children("."+b).addClass(v).next("."+h).show(),a=ae.parent().stop(!1,!0),o=a.offset().top,r=a.height(),s=o+r-i.outerHeight(),l=i.offset().top,l<o||l>s?a.animate({scrollTop:a.scrollTop()+l-o-r/3},{duration:"fast",complete:function(){d.resolve()}}):d.resolve()):d.reject()},100)),d},Z=function(n){var i,a,o,r=n||t.cwd(),s=r.hash?[r.hash]:[];for(a=t.root(r.hash),o=t.file(a);o&&(i=o.phash)&&(s.unshift(i),a=t.root(i),o=t.file(a),!e("#"+t.navHash2Id(o.hash)).hasClass(b)););return s},ee=function(n){var i=n||t.cwd(),a=i.hash,o=e("#"+t.navHash2Id(a));if(!o.length){for(;i&&i.phash;)B[i.phash]&&!e("#"+t.navHash2Id(i.hash)).length&&B[i.phash].trigger("update."+t.namespace,{select:i.hash}),i=t.file(i.phash);o=e("#"+t.navHash2Id(a))}return o},te=function(n,i){var a,r,s=t.cwd(),l=s.hash,c=void 0===i?u:i,p=function(n){var i,o,s=e.Deferred(),l=[],d=Z(n),p=function(e,n,i){var a={cmd:e,target:n};return i&&(a.until=i),t.request({data:a,preventFail:!0})};return l=e.map(d,function(n){var a,o,r=t.file(n),s=!!r&&t.isRoot(r),l=e("#"+t.navHash2Id(n)),c=function(e,n){var i,a,o=n||1;return a=!!(i=t.file(e))&&i.phash,a&&o>1?c(a,--o):a},d=function(){var i=c(n);for(a=i;i&&!e("#"+t.navHash2Id(i)).hasClass(b);)a=i,i=c(i);return i||(a=void 0,i=t.root(n)),i}();return l.hasClass(b)||!s&&r&&e("#"+t.navHash2Id(r.phash)).hasClass(b)?null:(s||d===c(n)||d===c(n,2)?(a=void 0,o="tree",s||(n=c(n))):o="parents",i||(i="tree"===o?n:d),p(o,n,a))}),l.length?(ee(t.file(i)),o=t.navHash2Id(i),c&&Q(o),a=e("#"+o),r=e(t.res("tpl","navspinner")).insertBefore(a.children("."+w)),a.removeClass(g),e.when.apply(e,l).done(function(){var e,t,n,i={};if(t=arguments.length,t>0)for(n=0;n<t;n++)e=arguments[n].tree||[],i[d[n]]=Object.assign([],X(e));s.resolve(i)}).fail(function(){s.reject()}),s):s.resolve()},h=function(i,o){var r,l=function(){d&&a&&(K(a.hash).show().prev(m).addClass(v),d=!1),c?Q().done(F):F()};i&&e.each(i,function(e,n){n&&J(n),ee(t.file(e)),n&&ie(n,b)}),n&&(t.api<2.1&&n.push(s),J(n)),r=ee(),r.hasClass(x)||(ae.find(m+"."+x).removeClass(x),r.addClass(x)),r.parents(".elfinder-navbar-wrapper").children("."+f).addClass(b),i?t.lazy(l).done(function(){o.resolve()}):(l(),o.resolve())},y=function(e){a&&(r.remove(),a.addClass(g+(e?"":" "+b)))},k=e.Deferred();return e("#"+t.navHash2Id(l)).length?h(void 0,k):(o=!0,p().done(function(e){h(e,k),y()}).fail(function(){y(!0),k.reject()}).always(function(){o=!1})),t.trigger("treesync",k),k},ne=function(n,i){n||(i&&!i.closest("div."+S).hasClass(O)||(i||ae.find("div."+O)).find(m+":not(.elfinder-ro,.elfinder-na)").addClass("native-droppable"),n=!i||i.closest("div."+S).hasClass(A)?(i||ae.find("div."+A)).find(m+":not(."+I+")"):e(),i&&i.children("div."+S).each(function(){ne(null,e(this))})),n.length&&t.asyncJob(function(t){e(t).droppable(q)},e.makeArray(n),{interval:20,numPerOnce:100})},ie=function(n,i){var a=i==b?"."+g+":not(."+b+")":":not(."+g+")";e.each(n,function(n,o){e("#"+t.navHash2Id(o.phash)+a).filter(function(){return e.grep(e(this).next("."+h).children(),function(t){return!e(t).children().hasClass(c)}).length>0}).addClass(i)})},ae=e(this).addClass(i).on("mouseenter mouseleave",m,function(n){var i="mouseenter"===n.type;if(!i||!oe){var a=e(this);a.hasClass(k+" "+T)||(l||!i||a.data("dragRegisted")||a.hasClass(c+" "+z+" elfinder-na elfinder-wo")||(a.data("dragRegisted",!0),t.isCommandEnabled("copy",t.navId2Hash(a.attr("id")))&&a.draggable(t.draggable)),a.toggleClass(C,i))}}).on("dragenter",m,function(t){if(t.originalEvent.dataTransfer){var n=e(this);n.addClass(C),n.is("."+g+":not(."+v+")")&&n.data("expandTimer",setTimeout(function(){n.is("."+g+"."+C)&&n.children("."+w).click()},500))}}).on("dragleave",m,function(t){if(t.originalEvent.dataTransfer){var n=e(this);n.data("expandTimer")&&clearTimeout(n.data("expandTimer")),n.removeClass(C)}}).on("click",m,function(n){var i=e(this),a=t.navId2Hash(i.attr("id"));t.file(a);return i.data("longtap")?(i.removeData("longtap"),void n.stopPropagation()):void(a==t.cwd().hash||i.hasClass(T)?(i.hasClass(g)&&i.children("."+w).click(),t.select({selected:[a],origin:"tree"})):t.exec("open",a).done(function(){t.one("opendone",function(){t.select({selected:[a],origin:"tree"})})}))}).on("touchstart",m,function(n){if(!(n.originalEvent.touches.length>1)){var i,a=n.originalEvent;return"INPUT"===n.target.nodeName?void n.stopPropagation():void(i=e(this).addClass(C).removeData("longtap").data("tmlongtap",setTimeout(function(e){i.data("longtap",!0),t.trigger("contextmenu",{type:"navbar",targets:[t.navId2Hash(i.attr("id"))],x:a.touches[0].pageX,y:a.touches[0].pageY})},500)))}}).on("touchmove touchend",m,function(t){return"INPUT"===t.target.nodeName?void t.stopPropagation():(clearTimeout(e(this).data("tmlongtap")),void("touchmove"==t.type&&e(this).removeClass(C)))}).on("click",m+"."+g+" ."+w,function(n){var i,a=e(this),o=a.parent(m),r=o.next("."+h),s=e.Deferred(),l=30;n.stopPropagation(),o.hasClass(b)?(o.toggleClass(v),t.lazy(function(){i=o.hasClass(v)?r.children().length+r.find("div.elfinder-navbar-subtree[style*=block]").children().length:r.find("div:visible").length,i>l?(r.toggle(),t.draggingUiHelper&&t.draggingUiHelper.data("refreshPositions",1),F()):r.stop(!0,!0).slideToggle("normal",function(){t.draggingUiHelper&&t.draggingUiHelper.data("refreshPositions",1),F()})}).always(function(){s.resolve()})):(_.insertBefore(a),o.removeClass(g),t.request({cmd:"tree",target:t.navId2Hash(o.attr("id"))}).done(function(e){J(Object.assign([],X(e.tree))),r.children().length&&(o.addClass(g+" "+v),r.children().length>l?(r.show(),t.draggingUiHelper&&t.draggingUiHelper.data("refreshPositions",1),F()):r.stop(!0,!0).slideDown("normal",function(){t.draggingUiHelper&&t.draggingUiHelper.data("refreshPositions",1),F()}))}).always(function(e){_.remove(),o.addClass(b),t.one("treedone",function(){s.resolve()})})),a.data("dfrd",s)}).on("contextmenu",m,function(n){var i=e(this);return i.find("input:text").length?void n.stopPropagation():(n.preventDefault(),t.trigger("contextmenu",{type:"navbar",targets:[t.navId2Hash(e(this).attr("id"))],x:n.pageX,y:n.pageY}),i.addClass("ui-state-hover"),t.getUI("contextmenu").children().on("mouseenter",function(){i.addClass("ui-state-hover")}),void t.bind("closecontextmenu",function(){i.removeClass("ui-state-hover")}))}).on("scrolltoview",m,function(n,i){var a=e(this);Q(a.attr("id")).done(function(){i&&"undefined"!==i.blink&&!i.blink||t.resources.blink(a,"lookme")})}).on("create."+t.namespace,function(n,i){var a=K(i.phash),o=i.move||!1,r=e(V(i)).addClass("elfinder-navbar-wrapper-tmp"),s=t.selected();o&&s.length&&t.trigger("lockfiles",{files:s}),a.prepend(r)}),oe=!1,re=t.getUI("navbar").append(ae).show().on("scroll",function(){oe=!0,r&&clearTimeout(r),r=setTimeout(function(){oe=!1,F()},50)}),se=t.sortAlsoTreeview;t.open(function(e){var n=e.data,i=X(n.files),a=t.getUI("contextmenu");n.init&&ae.empty(),t.UA.iOS&&re.removeClass("overflow-scrolling-touch").addClass("overflow-scrolling-touch"),i.length?t.lazy(function(){a.data("cmdMaps")||a.data("cmdMaps",{}),J(i),ie(i,b),te(i)}):te()}).add(function(e){var t=X(e.data.added);t.length&&(J(t),ie(t,g))}).change(function(n){if(!o){var i,a,r,s,c,d,p,u,f,g,y,w,x=X(n.data.changed,!0),k=x.length,C=k;e();for(e.each(B,function(e,n){n.trigger("update."+t.namespace,{change:"prepare"})});C--;)if(i=x[C],a=i.phash,(r=e("#"+t.navHash2Id(i.hash))).length){if(y=r.parent(),a){if(c=r.closest("."+h),d=K(a),p=r.parent().next(),u=G(d,i),!d.length)continue;d[0]===c[0]&&p.get(0)===u.get(0)||(u.length?u.before(y):d.append(y))}f=r.hasClass(v),g=r.hasClass(b),s=e(V(i)),r.replaceWith(s.children(m)),!l&&ne(null,y),i.dirs&&(f||g)&&(r=e("#"+t.navHash2Id(i.hash)))&&r.next("."+h).children().length&&(f&&r.addClass(v),g&&r.addClass(b)),w|=i.dirs==-1}w&&F(),e.each(B,function(e,n){n.trigger("update."+t.namespace,{change:"done"})}),k&&te(void 0,!1)}}).remove(function(n){var i,a,o,r=n.data.removed,s=r.length;for(e.each(B,function(e,n){n.trigger("update."+t.namespace,{removed:r}),n.trigger("update."+t.namespace,{change:"prepare"})});s--;)(i=e("#"+t.navHash2Id(r[s]))).length&&(o=!0,a=i.closest("."+h),i.parent().detach(),a.children().length||a.hide().prev(m).removeClass(g+" "+v+" "+b));o&&t.getUI("navbar").children(".ui-resizable-handle").trigger("resize"),e.each(B,function(e,n){n.trigger("update."+t.namespace,{change:"done"})})}).bind("lockfiles unlockfiles",function(n){var i="lockfiles"==n.type,a=!!n.data.helper&&n.data.helper.data("locked"),o=i&&!a?"disable":"enable",r=e.grep(n.data.files||[],function(e){var n=t.file(e);return!(!n||"directory"!=n.mime)});e.each(r,function(n,r){var s=e("#"+t.navHash2Id(r));s.length&&!a&&(s.hasClass(z)&&s.draggable(o),s.hasClass(I)&&s.droppable(o),s[i?"addClass":"removeClass"](T))})}).bind("sortchange",function(){if(t.sortAlsoTreeview||se!==t.sortAlsoTreeview){var n,i,a=[],o={},r={},s="",l=!1;t.lazy(function(){n=X(t.files()),se=t.sortAlsoTreeview,ae.empty(),J(e.map(t.roots,function(e){var n=t.file(e);return n&&!n.phash?n:null})),Object.keys(B).length?(a=Z(),a.length>1?(e.each(a,function(e,n){var i=t.file(t.root(n)).volumeid;0===e&&(s=i),r[i]=n,o[n]=[]}),e.each(n,function(e,t){return t.volumeid?void o[r[t.volumeid]||r[s]].push(t):(l=!0,!1)})):l=!0,l?e.each(a,function(e,a){J(n),i=ee(t.file(a)),ie(n,b)}):e.each(o,function(e,n){J(n),i=ee(t.file(e)),ie(n,b)})):(J(n),i=ee(),ie(n,b)),te()},100)}})}),this},e.fn.elfinderuploadbutton=function(t){return this.each(function(){var n=e(this).elfinderbutton(t).off("click"),i=e("<form/>").appendTo(n),a=e('<input type="file" multiple="true" title="'+t.fm.i18n("selectForUpload")+'"/>').on("change",function(){var n=e(this);n.val()&&(t.exec({input:n.remove()[0]}),a.clone(!0).appendTo(i))}).on("dragover",function(e){e.originalEvent.dataTransfer.dropEffect="copy"});i.append(a.clone(!0)),t.change(function(){i[t.disabled()?"hide":"show"]()}).change()})},e.fn.elfinderviewbutton=function(t){return this.each(function(){var n=e(this).elfinderbutton(t),i=n.children(".elfinder-button-icon");t.change(function(){var e="icons"==t.value;i.toggleClass("elfinder-button-icon-view-list",e),t.className=e?"view-list":"",t.title=t.fm.i18n(e?"viewlist":"viewicons"),n.attr("title",t.title)})})},e.fn.elfinderworkzone=function(t){var n="elfinder-workzone";return this.not("."+n).each(function(){var i=e(this).addClass(n),a=i.outerHeight(!0)-i.height(),o=Math.round(i.height()),r=i.parent(),s=function(s){var l=r.height()-a,c=r.attr("style"),d=Math.round(i.height());s&&(s.preventDefault(),s.stopPropagation()),r.css("overflow","hidden").children(":visible:not(."+n+")").each(function(){var t=e(this);"absolute"!=t.css("position")&&"fixed"!=t.css("position")&&(l-=t.outerHeight(!0))}),r.attr("style",c||""),l=Math.max(0,Math.round(l)),o===l&&d===l||(o=Math.round(i.height()),i.height(l),t.trigger("wzresize"))},l=function(){a=i.outerHeight(!0)-i.height(),s()};r.on("resize."+t.namespace,s),t.one("cssloaded",l).bind("uiresize",s)}),this},i.prototype.commands.archive=function(){var t,n=this,i=n.fm,a=[];this.variants=[],this.disableOnSearch=!1,this.nextAction={},i.bind("open reload",function(){n.variants=[],e.each(a=i.option("archivers").create||[],function(e,t){n.variants.push([t,i.mime2kind(t)])}),n.change()}),this.getstate=function(n){var o,r=this.files(n),s=r.length,l=s&&!i.isRoot(r[0])&&(i.file(r[0].phash)||{}).write&&!e.grep(r,function(e){return!e.read}).length;return l&&i.searchStatus.state>1&&(o=i.cwd().volumeid,l=s===e.grep(r,function(e){return!(!e.read||0!==e.hash.indexOf(o))}).length),l&&!this._disabled&&a.length&&(s||t&&"pending"==t.state())?0:-1},this.exec=function(o,r){var s,l,c=this.files(o),d=c.length,p=r||a[0],u=i.file(c[0].phash)||null,h=["errArchive","errPerm","errCreatingTempDir","errFtpDownloadFile","errFtpUploadFile","errFtpMkdir","errArchiveExec","errExtractExec","errRm"];if(t=e.Deferred().fail(function(e){e&&i.error(e)}),!d||!a.length||e.inArray(p,a)===-1)return t.reject();if(!u.write)return t.reject(h);for(s=0;s<d;s++)if(!c[s].read)return t.reject(h);return n.mime=p,n.prefix=(d>1?"Archive":c[0].name)+(i.option("archivers").createext?"."+i.option("archivers").createext[p]:""),n.data={targets:n.hashes(o),type:p},i.cwd().hash!==u.hash?l=i.exec("open",u.hash).done(function(){i.one("cwdrender",function(){i.selectfiles({files:o}),t=e.proxy(i.res("mixin","make"),n)()})}):(i.selectfiles({files:o}),t=e.proxy(i.res("mixin","make"),n)()),t}},(i.prototype.commands.back=function(){this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+left backspace"}],this.getstate=function(){return this.fm.history.canBack()?0:-1},this.exec=function(){return this.fm.history.back()}}).prototype={forceLoad:!0},i.prototype.commands.chmod=function(){this.updateOnSelect=!1;var t=this.fm,n={0:"owner",1:"group",2:"other"},i={read:t.i18n("read"),write:t.i18n("write"),execute:t.i18n("execute"),perm:t.i18n("perm"),kind:t.i18n("kind"),files:t.i18n("files")},a=function(e){return!isNaN(parseInt(e,8)&&parseInt(e,8)<=511)||e.match(/^([r-][w-][x-]){3}$/i)};this.tpl={main:'<div class="ui-helper-clearfix elfinder-info-title"><span class="elfinder-cwd-icon {class} ui-corner-all"/>{title}</div>{dataTable}',itemTitle:'<strong>{name}</strong><span id="elfinder-info-kind">{kind}</span>',groupTitle:"<strong>{items}: {num}</strong>",dataTable:'<table id="{id}-table-perm"><tr><td>{0}</td><td>{1}</td><td>{2}</td></tr></table><div class="">'+i.perm+': <input id="{id}-perm" type="text" size="4" maxlength="3" value="{value}"></div>',fieldset:'<fieldset id="{id}-fieldset-{level}"><legend>{f_title}{name}</legend><input type="checkbox" value="4" id="{id}-read-{level}-perm"{checked-r}> <label for="{id}-read-{level}-perm">'+i.read+'</label><br><input type="checkbox" value="6" id="{id}-write-{level}-perm"{checked-w}> <label for="{id}-write-{level}-perm">'+i.write+'</label><br><input type="checkbox" value="5" id="{id}-execute-{level}-perm"{checked-x}> <label for="{id}-execute-{level}-perm">'+i.execute+"</label><br>"},this.shortcuts=[{}],this.getstate=function(e){var t=this.fm;return e=e||t.selected(),0==e.length&&(e=[t.cwd().hash]),this.checkstate(this.files(e))?0:-1},this.checkstate=function(t){var n=t.length;if(!n)return!1;var i=e.grep(t,function(e){return!(!(e.isowner&&e.perm&&a(e.perm))||1!=n&&"directory"==e.mime)}).length;return n==i},this.exec=function(t){var o=this.hashes(t),r=this.files(o);r.length||(o=[this.fm.cwd().hash],r=this.files(o));var s,l,c=this.fm,d=e.Deferred().always(function(){c.enable()}),p=this.tpl,u=r.length,h=r[0],f=c.namespace+"-perm-"+h.hash,m=p.main,g=' checked="checked"',v=function(){var e={};return e[c.i18n("btnApply")]=b,e[c.i18n("btnCancel")]=function(){I.elfinderdialog("close")},e},b=function(){var t,n=e.trim(e("#"+f+"-perm").val());return!!a(n)&&(I.elfinderdialog("close"),t={cmd:"chmod",targets:o,mode:n},void c.request({data:t,notify:{type:"chmod",cnt:u}}).fail(function(e){d.reject(e)}).done(function(n){n.changed&&n.changed.length&&(n.undo={cmd:"chmod",callback:function(){var t=[];return e.each(S,function(e,n){t.push(c.request({data:{cmd:"chmod",targets:n,mode:e},notify:{type:"undo",cnt:n.length}}))}),e.when.apply(null,t)}},n.redo={cmd:"chmod",callback:function(){return c.request({data:t,notify:{type:"redo",cnt:o.length}})}}),d.resolve(n)}))},y=function(){for(var t,i="",a=0;a<3;a++)t=0,e("#"+f+"-read-"+n[a]+"-perm").is(":checked")&&(t=4|t),e("#"+f+"-write-"+n[a]+"-perm").is(":checked")&&(t=2|t),e("#"+f+"-execute-"+n[a]+"-perm").is(":checked")&&(t=1|t),i+=t.toString(8);e("#"+f+"-perm").val(i)},w=function(t){for(var i,a=0;a<3;a++)i=parseInt(t.slice(a,a+1),8),e("#"+f+"-read-"+n[a]+"-perm").prop("checked",!1),e("#"+f+"-write-"+n[a]+"-perm").prop("checked",!1),e("#"+f+"-execute-"+n[a]+"-perm").prop("checked",!1),4==(4&i)&&e("#"+f+"-read-"+n[a]+"-perm").prop("checked",!0),2==(2&i)&&e("#"+f+"-write-"+n[a]+"-perm").prop("checked",!0),1==(1&i)&&e("#"+f+"-execute-"+n[a]+"-perm").prop("checked",!0);y()},x=function(e){for(var t,n,i,a="777",o="",r=e.length,s=0;s<r;s++){t=T(e[s].perm),S[t]||(S[t]=[]),S[t].push(e[s].hash),o="";for(var l=0;l<3;l++)n=parseInt(t.slice(l,l+1),8),i=parseInt(a.slice(l,l+1),8),4!=(4&n)&&4==(4&i)&&(i-=4),2!=(2&n)&&2==(2&i)&&(i-=2),1!=(1&n)&&1==(1&i)&&(i-=1),o+=i.toString(8);a=o}return a},k=function(e){return e?":"+e:""},C=function(e,t){for(var a,o,r="",s=p.dataTable,l=0;l<3;l++)a=parseInt(e.slice(l,l+1),8),r+=a.toString(8),o=p.fieldset.replace("{f_title}",c.i18n(n[l])).replace("{name}",k(t[n[l]])).replace(/\{level\}/g,n[l]),s=s.replace("{"+l+"}",o).replace("{checked-r}",4==(4&a)?g:"").replace("{checked-w}",2==(2&a)?g:"").replace("{checked-x}",1==(1&a)?g:"");return s=s.replace("{value}",r).replace("{valueCaption}",i.perm)},T=function(e){if(isNaN(parseInt(e,8))){for(var t=e.split(""),n=[],i=0,a=t.length;i<a;i++)0===i||3===i||6===i?t[i].match(/[r]/i)?n.push(1):t[i].match(/[-]/)&&n.push(0):1===i||4===i||7===i?t[i].match(/[w]/i)?n.push(1):t[i].match(/[-]/)&&n.push(0):t[i].match(/[x]/i)?n.push(1):t[i].match(/[-]/)&&n.push(0);n.splice(3,0,","),n.splice(7,0,",");for(var o=n.join(""),r=o.split(","),s=[],l=0,c=r.length;l<c;l++){var d=parseInt(r[l],2).toString(8);s.push(d)}e=s.join("")}else e=parseInt(e,8).toString(8);return e},z={title:this.title,width:"auto",buttons:v(),close:function(){e(this).elfinderdialog("destroy")}},I=c.getUI().find("#"+f),S={},A="";return I.length?(I.elfinderdialog("toTop"),e.Deferred().resolve()):(m=m.replace("{class}",u>1?"elfinder-cwd-icon-group":c.mime2class(h.mime)),u>1?s=p.groupTitle.replace("{items}",c.i18n("items")).replace("{num}",u):(s=p.itemTitle.replace("{name}",h.name).replace("{kind}",c.mime2kind(h)),A=c.tmb(h)),l=C(x(r),1==r.length?r[0]:{}),m=m.replace("{title}",s).replace("{dataTable}",l).replace(/{id}/g,f),I=c.dialog(m,z),I.attr("id",f),A&&e("<img/>").on("load",function(){I.find(".elfinder-cwd-icon").addClass(A.className).css("background-image","url('"+A.url+"')")}).attr("src",A.url),e("#"+f+"-table-perm :checkbox").on("click",function(){y("perm")}),e("#"+f+"-perm").on("keydown",function(t){var n=t.keyCode;if(t.stopPropagation(),n==e.ui.keyCode.ENTER)return void b()}).on("focus",function(t){e(this).trigger("select")}).on("keyup",function(t){3==e(this).val().length&&(e(this).trigger("select"),w(e(this).val()))}),d)}},i.prototype.commands.colwidth=function(){this.alwaysEnabled=!0,this.updateOnSelect=!1,this.getstate=function(){return"fixed"===this.fm.getUI("cwd").find("table").css("table-layout")?0:-1},this.exec=function(){this.fm.getUI("cwd").trigger("colwidth")}},i.prototype.commands.copy=function(){this.shortcuts=[{pattern:"ctrl+c ctrl+insert"}],this.getstate=function(t){var n=this.files(t),i=n.length;return i&&e.grep(n,function(e){return!!e.read}).length==i?0:-1},this.exec=function(t){var n=this.fm,i=e.Deferred().fail(function(e){n.error(e)});return e.each(this.files(t),function(e,t){if(!t.read)return!i.reject(["errCopy",t.name,"errPerm"])}),"rejected"==i.state()?i:i.resolve(n.clipboard(this.hashes(t)))}},i.prototype.commands.cut=function(){var t=this.fm;this.shortcuts=[{pattern:"ctrl+x shift+insert"}],this.getstate=function(n){var i=this.files(n),a=i.length;return a&&e.grep(i,function(e){return!(!e.read||e.locked||t.isRoot(e))}).length==a?0:-1},this.exec=function(n){var i=e.Deferred().fail(function(e){t.error(e)});return e.each(this.files(n),function(e,n){return!n.read||n.locked||t.isRoot(n)?!i.reject(["errCopy",n.name,"errPerm"]):n.locked?!i.reject(["errLocked",n.name]):void 0}),"rejected"==i.state()?i:i.resolve(t.clipboard(this.hashes(n),!0))}},i.prototype.commands.zipdl=function(){},i.prototype.commands.download=function(){var t=this,n=this.fm,i=null,a=!1,o=!1,r=function(r,s){var l,c;if(null!==i&&(n.searchStatus.state>1?o=n.searchStatus.mixed:n.leafRoots[n.cwd().hash]&&(l=n.cwd().volumeid,e.each(r,function(e,t){if(0!==t.indexOf(l))return o=!0,!1})),a=n.isCommandEnabled("zipdl",r[0])),o){if(c=i?"zipdl":"download",r=e.grep(r,function(t){var a=n.file(t),o=!(!a||!i&&"directory"===a.mime||!n.isCommandEnabled(c,t));return a&&s&&!o&&e("#"+n.cwdHash2Id(a.hash)).trigger("unselect"),o}),!r.length)return[]}else if(!n.isCommandEnabled("download",r[0]))return[];return e.grep(t.files(r),function(t){var i=!(!t.read||!a&&"directory"==t.mime);return s&&!i&&e("#"+n.cwdHash2Id(t.hash)).trigger("unselect"),i})};this.linkedCmds=["zipdl"],this.shortcuts=[{pattern:"shift+enter"}],this.getstate=function(e){var t=this.hashes(e),i=t.length,o=this.options.maxRequests||10;return i<1?-1:(i=r(t).length,i&&(a||i<=o&&(!n.UA.IE&&!n.UA.Mobile||1==i))?0:-1)},n.bind("contextmenu",function(n){var i,a,o=t.fm,r=null,s=function(t){var n=t.url||o.url(t.hash);return{icon:"link",node:e("<a/>").attr({href:n,target:"_blank",title:o.i18n("link")}).text(t.name).on("mousedown click touchstart touchmove touchend contextmenu",function(e){e.stopPropagation()}).on("dragstart",function(n){var i=n.dataTransfer||n.originalEvent.dataTransfer||null;if(r=null,i){var a=function(t){var n,i=t.mime,a=o.tmb(t);return n='<div class="elfinder-cwd-icon '+o.mime2class(i)+' ui-corner-all"/>',a&&(n=e(n).addClass(a.className).css("background-image","url('"+a.url+"')").get(0).outerHTML),n};i.effectAllowed="copyLink",i.setDragImage&&(r=e('<div class="elfinder-drag-helper html5-native">').append(a(t)).appendTo(e(document.body)),i.setDragImage(r.get(0),50,47)),o.UA.IE||(i.setData("elfinderfrom",window.location.href+t.phash),i.setData("elfinderfrom:"+i.getData("elfinderfrom"),""))}}).on("dragend",function(e){r&&r.remove()})}};if(t.extra=null,n.data&&(i=n.data.targets||[],1===i.length&&(a=o.file(i[0]))&&"directory"!==a.mime))if("1"!=a.url)t.extra=s(a);else{var l;t.extra={icon:"link",node:e("<a/>").attr({href:"#",title:o.i18n("getLink"),draggable:"false"}).text(a.name).on("click touchstart",function(e){if(!("touchstart"===e.type&&e.originalEvent.touches.length>1)){var t=l.parent();e.stopPropagation(),e.preventDefault(),t.removeClass("ui-state-disabled").addClass("elfinder-button-icon-spinner"),o.request({data:{cmd:"url",target:a.hash},preventDefault:!0}).always(function(e){if(t.removeClass("elfinder-button-icon-spinner"),e.url){var n=o.file(a.hash);n.url=e.url,l.replaceWith(s(a).node)}else t.addClass("ui-state-disabled")})}})},l=t.extra.node,l.ready(function(){setTimeout(function(){l.parent().addClass("ui-state-disabled").css("pointer-events","auto")},10)})}}).one("open",function(){n.api>=2.1012&&(i=n.getCommand("zipdl"))}),this.exec=function(t){var n,i,s,l,c,d=this.hashes(t),p=this.fm,u=(p.options.url,r(d,!0)),h=e.Deferred(),f="",m={},g=!1,v=function(t){return function(){var n,a,o,r=e.Deferred(),s=p.file(p.root(t[0])),c=1===t.length,d=s?s.i18||s.name:null;return c?(n=p.file(t[0]))&&(a=n.i18||n.name):(e.each(t,function(){var e=p.file(this);return!e||o&&o!==e.phash?(o=null,!1):void(o=e.phash)}),o&&(n=p.file(o))&&(a=(n.i18||n.name)+"-"+t.length)),a&&(d=a),d&&(d=" ("+d+")"),p.request({data:{cmd:"zipdl",targets:t},notify:{type:"zipdl",cnt:1,hideCnt:!0,msg:p.i18n("ntfzipdl")+d},cancel:!0,eachCancel:!0,preventDefault:!0}).done(function(n){var o,s,c,d,u,h={},f="dlw"+ +new Date;n.error?(p.error(n.error),r.resolve()):n.zipdl&&(o=n.zipdl,a?a+=".zip":a=o.name,l&&(!p.UA.Safari||p.isSameOrigin(p.options.url))||g?(i=p.options.url+(p.options.url.indexOf("?")===-1?"?":"&")+"cmd=zipdl&download=1",e.each([t[0],o.file,a,o.mime],function(e,t){i+="&targets%5B%5D="+encodeURIComponent(t)}),e.each(p.customData,function(e,t){i+="&"+encodeURIComponent(e)+"="+encodeURIComponent(t)}),i+="&"+encodeURIComponent(a),c=e("<a/>").attr("href",i).attr("download",p.escape(a)).attr("target","_blank").on("click",function(){r.resolve(),s&&s.elfinderdialog("destroy")}),g?(c.append('<span class="elfinder-button-icon elfinder-button-icon-download"></span>'+p.escape(a)),h[p.i18n("btnCancel")]=function(){s.elfinderdialog("destroy")},s=p.dialog(c,{title:p.i18n("link"),buttons:h,width:"200px",destroyOnClose:!0,close:function(){"resolved"!==r.state()&&r.resolve()}})):(b(c.hide().appendTo("body").get(0)),c.remove())):(d=e('<form action="'+p.options.url+'" method="post" target="'+f+'" style="display:none"/>').append('<input type="hidden" name="cmd" value="zipdl"/>').append('<input type="hidden" name="download" value="1"/>'),e.each([t[0],o.file,a,o.mime],function(e,t){d.append('<input type="hidden" name="targets[]" value="'+p.escape(t)+'"/>')}),e.each(p.customData,function(e,t){d.append('<input type="hidden" name="'+e+'" value="'+p.escape(t)+'"/>')}),d.attr("target",f).appendTo("body"),u=e('<iframe style="display:none" name="'+f+'">').appendTo("body").ready(function(){d.submit().remove(),r.resolve(),setTimeout(function(){u.remove()},2e4)})))}).fail(function(e){e&&p.error(e),r.resolve()}),r.promise()}},b=function(e){var t;"function"==typeof MouseEvent?t=new MouseEvent("click"):(t=document.createEvent("MouseEvents"),t.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),e.dispatchEvent(t)};if(!u.length)return h.reject();if(c=e.grep(u,function(e){return"directory"!==e.mime}).length,s=e("<a>").hide().appendTo("body"),l="string"==typeof s.get(0).download,a&&(c!==u.length||c>=(this.options.minFilesZipdl||1)))return s.remove(),g=!l&&p.UA.Mobile,o?(m={},e.each(u,function(e,t){var n=t.hash.split("_",2);m[n[0]]?m[n[0]].push(t.hash):m[n[0]]=[t.hash]}),!g&&p.UA.Mobile&&Object.keys(m).length>1&&(g=!0)):m=[e.map(u,function(e){return e.hash})],h=p.sequence(e.map(m,function(e){return v(e)})).always(function(){p.trigger("download",{files:u})});for(n=0;n<u.length;n++)i=p.openUrl(u[n].hash,!0),!l||p.UA.Safari&&!p.isSameOrigin(i)?p.UA.Mobile?setTimeout(function(){window.open(i)||p.error("errPopup")},100):f+='<iframe class="downloader" id="downloader-'+u[n].hash+'" style="display:none" src="'+i+'"/>':b(s.attr("href",i).attr("download",p.escape(u[n].name)).attr("target","_blank").get(0));return s.remove(),e(f).appendTo("body").ready(function(){setTimeout(function(){e(f).each(function(){e("#"+e(this).attr("id")).remove()})},2e4+1e4*n)}),p.trigger("download",{files:u}),h.resolve()}},i.prototype.commands.duplicate=function(){var t=this.fm;this.getstate=function(n){var i=this.files(n),a=i.length;return a&&t.cwd().write&&e.grep(i,function(e){return!(!e.read||e.phash!==t.cwd().hash||t.isRoot(e))}).length==a?0:-1},this.exec=function(t){var n=this.fm,i=this.files(t),a=i.length,o=e.Deferred().fail(function(e){e&&n.error(e)});return a?(e.each(i,function(e,t){if(!t.read||!n.file(t.phash).write)return!o.reject(["errCopy",t.name,"errPerm"])}),"rejected"==o.state()?o:n.request({data:{cmd:"duplicate",targets:this.hashes(t)},notify:{type:"copy",cnt:a},navigate:{toast:{inbuffer:{msg:n.i18n(["complete",n.i18n("cmdduplicate")])}}}})):o.reject()}},i.prototype.commands.edit=function(){var t,n=this,i=this.fm,a="elfinder-dialog-edit",o=[],r=[],s=function(e){return e.replace(/\s+$/,"")},l=function(t){var a,o=e('<select class="ui-corner-all"/>');return t&&e.each(t,function(e,t){a=i.escape(t.value),o.append('<option value="'+a+'">'+(t.caption?i.escape(t.caption):a)+"</option>")}),e.each(n.options.encodings,function(e,t){o.append('<option value="'+t+'">'+t+"</option>")}),o},c=function(){var t,a;return a="string"==typeof n.options.dialogWidth&&(t=n.options.dialogWidth.match(/(\d+)%/))?parseInt(i.getUI().width()*(t[1]/100)):parseInt(n.options.dialogWidth||650),Math.min(a,e(window).width())},d=function(t){var a,s,l,c=t.length;return c>1&&(a=t[0].mime,s=t[0].name.replace(/^.*(\.[^.]+)$/,"$1")),e.grep(t,function(t){var d;return!l&&(d=!(!i.mimeIsText(t.mime)&&e.inArray(t.mime,1===c?o:r)===-1||n.onlyMimes.length&&e.inArray(t.mime,n.onlyMimes)===-1||!t.read||!t.write||1!==c&&(t.mime!==a||t.name.substr(s.length*-1)!==s)||!i.uploadMimeCheck(t.mime,t.phash)),d||(l=!0),d)})},p=function(t,o,r,d,p){var h,f,m,g,v,b,y=e.Deferred(),w=function(){var e,t=g?g.val():void 0;h.one("_savefail",function(){h.off("_savedone"),m.show().find("button.elfinder-btncnt-0,button.elfinder-btncnt-1").hide()}).one("_savedone",function(){h.off("_savefail")}),h.editor&&(h.editor.save(h[0],h.editor.instance),e=h.editor.confObj,e.info&&e.info.schemeContent&&(t="scheme")),f=I(),y.notifyWith(h,[t,h.data("hash")])},x=function(){h.elfinderdialog("close")},k=function(){h.one("_savedone",function(){m.show(),x()}),w(),m.hide()},C=function(){var t=f,r=i.file(o.phash)?o.phash:i.cwd().hash,s=function(){d.addClass(S).fadeIn(),f=t,i.disable()},l=function(){n.mime=o.mime,n.prefix=o.name.replace(/ \d+(\.[^.]+)?$/,"$1"),n.requestCmd="mkfile",n.nextAction={},n.data={target:r},e.proxy(i.res("mixin","make"),n)().done(function(e){e.added&&e.added.length?(h.data("hash",e.added[0].hash),w(),m.show(),x()):s(),d.fadeIn()}).fail(s).always(function(){delete n.mime,delete n.prefix,delete n.nextAction,delete n.data}),i.trigger("unselectfiles",{files:[o.hash]})},c=null,d=i.getUI().children("."+a+":visible");m.is(":hidden")&&(d=d.add(m)),d.removeClass(S).fadeOut(),i.enable(),i.searchStatus.state<2&&r!==i.cwd().hash&&(c=i.exec("open",[r],{thash:r})),e.when([c]).done(function(){c?i.one("cwdrender",l):l()}).fail(s)},T=function(){return h.editor&&h.editor.save(h[0],h.editor.instance),f!==I()},z={title:i.escape(o.name),width:c(),buttons:{},maxWidth:"window",maxHeight:"window",allowMinimize:!0,allowMaximize:!0,btnHoverFocus:!1,closeOnEscape:!1,close:function(){var e=function(){y.resolve(),h.editor&&h.editor.close(h[0],h.editor.instance),h.elfinderdialog("destroy")};T()?i.confirm({title:n.title,text:"confirmNotSave",accept:{label:"btnSaveClose",callback:function(){w(),e()}},cancel:{label:"btnClose",callback:e},buttons:[{label:"btnSaveAs",callback:function(){setTimeout(C,10)}}]}):e()},open:function(){var e;if(h.initEditArea.call(h,t,o,r,i),f=I(),h.editor)if(e=h.editor.load(h[0])||null,e&&e.done)e.done(function(e){h.editor.instance=e,h.editor.focus(h[0],h.editor.instance),f=I()}).fail(function(e){e&&i.error(e),h.elfinderdialog("destroy")});else{if(e&&("string"==typeof e||Array.isArray(e)))return i.error(e),void h.elfinderdialog("destroy");h.editor.instance=e,h.editor.focus(h[0],h.editor.instance),f=I()}},resize:function(e,t){h.editor&&h.editor.resize(h[0],h.editor.instance,e,t||{})}},I=function(){return h.getContent.call(h,h[0])},S=i.res("class","editing");if(p&&(p.html&&(h=e(p.html)),v={init:p.init||null,load:p.load,getContent:p.getContent||null,save:p.save,beforeclose:"function"==typeof p.beforeclose?p.beforeclose:void 0,close:"function"==typeof p.close?p.close:function(){},focus:"function"==typeof p.focus?p.focus:function(){},resize:"function"==typeof p.resize?p.resize:function(){},instance:null,doSave:w,doCancel:x,doClose:k,file:o,fm:i,confObj:p,trigger:function(e,t){i.trigger("editEditor"+e,Object.assign({},p.info||{},t))}}),!h){if(!i.mimeIsText(o.mime))return y.reject("errEditorNotFound");!function(){var n=function(){g&&(T()?g.attr("title",i.i18n("saveAsEncoding")).addClass("elfinder-edit-changed"):g.attr("title",i.i18n("openAsEncoding")).removeClass("elfinder-edit-changed"))};h=e('<textarea class="elfinder-file-edit" rows="20" id="'+t+'-ta"></textarea>').on("input propertychange",n),
h.editor&&h.editor.info&&!h.editor.info.useTextAreaEvent||h.on("keydown",function(t){var n,i,a=t.keyCode;t.stopPropagation(),a==e.ui.keyCode.TAB&&(t.preventDefault(),this.setSelectionRange&&(n=this.value,i=this.selectionStart,this.value=n.substr(0,i)+"\t"+n.substr(this.selectionEnd),i+=1,this.setSelectionRange(i,i))),(t.ctrlKey||t.metaKey)&&(a!="Q".charCodeAt(0)&&a!="W".charCodeAt(0)||(t.preventDefault(),x()),a=="S".charCodeAt(0)&&(t.preventDefault(),w()))}).on("mouseenter",function(){this.focus()}),h.initEditArea=function(t,i,a){var o=d&&"unknown"!==d?[{value:d}]:[];h.val(a),""!==a&&d&&"UTF-8"===d||o.push({value:"UTF-8"}),g=l(o).on("touchstart",function(e){e.stopPropagation()}).on("change",function(){T()||""===I()||(x(),u(i,e(this).val(),p))}).on("mouseover",n),h.parent().prev().find(".elfinder-titlebar-button:last").after(e('<span class="elfinder-titlebar-button-right"/>').append(g)),setTimeout(function(){h[0].setSelectionRange&&h[0].setSelectionRange(0,0),h.trigger("focus")},10)}}()}return h.data("hash",o.hash),v&&(h.editor=v,"function"==typeof v.beforeclose&&(z.beforeclose=function(){return v.beforeclose(h[0],v.instance)}),"function"==typeof v.init&&(h.initEditArea=v.init),"function"==typeof v.getContent&&(h.getContent=v.getContent)),h.initEditArea||(h.initEditArea=function(){}),h.getContent||(h.getContent=function(){return s(h.val())}),p&&p.info&&p.info.preventGet||(z.buttons[i.i18n("btnSave")]=w,z.buttons[i.i18n("btnSaveClose")]=k,z.buttons[i.i18n("btnSaveAs")]=C,z.buttons[i.i18n("btnCancel")]=x),p&&"function"==typeof p.prepare&&p.prepare(h,z,o),m=i.dialog(h,z).attr("id",t).on("keydown keyup keypress",function(e){e.stopPropagation()}).css({overflow:"hidden",minHeight:"7em"}).addClass("elfinder-edit-editor").closest(".ui-dialog").addClass(a+" "+S),b=(i.options.dialogContained?elfNode:e(window)).width(),m.width()>b&&m.width(b),y.promise()},u=function(t,a,o){var r,s,c,d=t.hash,h=(i.options,e.Deferred()),f="edit-"+i.namespace+"-"+t.hash,m=i.getUI().find("#"+f),g=a?a:0;return m.length?(m.elfinderdialog("toTop"),h.resolve()):t.read&&t.write?o&&o.info&&"function"==typeof o.info.edit?(c=o.info.edit.call(i,t,o),c.promise?c.done(function(){h.resolve()}).fail(function(e){h.reject(e)}):c?h.resolve():h.reject(),h):(o&&o.info&&(o.info.urlAsContent||o.info.preventGet)?(r=e.Deferred(),o.info.preventGet?r.resolve({}):i.url(d,{async:!0,temporary:!0}).done(function(e){r.resolve({content:e})})):r=i.request({data:{cmd:"get",target:d,conv:g,_t:t.ts},options:{type:"get",cache:!0},notify:{type:"file",cnt:1},preventDefault:!0}),r.done(function(a){var r,s,c;a.doconv?i.confirm({title:n.title,text:"unknown"===a.doconv?"confirmNonUTF8":"confirmConvUTF8",accept:{label:"btnConv",callback:function(){h=u(t,r.val(),o)}},cancel:{label:"btnCancel",callback:function(){h.reject()}},optionsCallback:function(t){t.create=function(){var t=e('<div class="elfinder-dialog-confirm-encoding"/>'),n={value:a.doconv};"unknown"===a.doconv&&(n.caption="-"),r=l([n]),e(this).next().find(".ui-dialog-buttonset").prepend(t.append(e("<label>"+i.i18n("encoding")+" </label>").append(r)))}}}):(o&&o.info&&o.info.preventGet||!i.mimeIsText(t.mime)||(s=new RegExp("^(data:"+t.mime.replace(/([.+])/g,"\\$1")+";base64,)","i"),window.atob&&(c=a.content.match(s))&&(a.content=atob(a.content.substr(c[1].length)))),p(f,t,a.content,a.encoding,o).done(function(e){h.resolve(e)}).progress(function(e,t){var n=this;t&&(d=t),i.request({options:{type:"post"},data:{cmd:"put",target:d,encoding:e||a.encoding,content:n.getContent.call(n,n[0])},notify:{type:"save",cnt:1},syncOnFail:!0,preventFail:!0,navigate:{target:"changed",toast:{inbuffer:{msg:i.i18n(["complete",i.i18n("btnSave")])}}}}).fail(function(e){h.reject(e),n.trigger("_savefail")}).done(function(e){setTimeout(function(){n.trigger("focus"),n.editor&&n.editor.focus(n[0],n.editor.instance)},50),n.trigger("_savedone")})}).fail(function(e){h.reject(e)}))}).fail(function(e){var t=Array.isArray(e)?e[0]:e;"errConvUTF8"!==t&&i.sync(),h.reject(e)}),h.promise()):(s=["errOpen",t.name,"errPerm"],i.error(s),h.reject(s))},h={},f=function(a,o){var r=function(t,n){if(n){if(e.inArray(t,n)!==-1)return!0;var a,o;for(o=n.length,a=0;a<o;a++)if(0===t.indexOf(n[a]))return!0;return!1}return i.mimeIsText(t)},s=function(e,t){if(!t||!t.length)return!0;var n,i,a=e.replace(/^.+\.([^.]+)|(.+)$/,"$1$2").toLowerCase();for(i=t.length,n=0;n<i;n++)if(a===t[n].toLowerCase())return!0;return!1};t=i.storage("storedEditors")||{},h={},e.each(n.options.editors||[],function(e,t){var n;1!==o&&t.info&&t.info.single||!r(a.mime,t.mimes||null)||!s(a.name,t.exts||null)||"function"!=typeof t.load||"function"!=typeof t.save||(n=t.info&&t.info.name?t.info.name:"Editor "+e,t.id=t.info&&t.info.id?t.info.id:"editor"+e,t.name=n,t.i18n=i.i18n(n),h[t.id]=t)})},m=function(n,a){n&&a&&(e.isPlainObject(t)||(t={}),t[n]=a.id,i.storage("storedEditors",t),i.trigger("selectfiles",{files:i.selected()}))},g=function(){var e=i.storage("useStoredEditor");return e?e>0:n.options.useStoredEditor},v=function(t,n){var a=[];return e.each(h,function(e,o){a.push({label:i.escape(o.i18n),icon:o.info&&o.info.icon?o.info.icon:"edit",options:{iconImg:o.info&&o.info.iconImg?i.baseUrl+o.info.iconImg:void 0},callback:function(){m(t[0].mime,o),n&&n.call(o)}})}),a},b=function(e){return e.toLowerCase().replace(/ +/g,"")},y=function(e){var n=t[e];return n&&Object.keys(h).length?h[b(n)]:void 0};this.shortcuts=[{pattern:"ctrl+e"}],this.init=function(){var t,n,i=this,a=this.fm,s=this.options,l=[];this.onlyMimes=this.options.mimes||[],a.one("open",function(){s.editors&&Array.isArray(s.editors)&&(e.each(s.editors,function(e,t){t.info&&t.info.cmdCheck&&l.push(t.info.cmdCheck)}),l.length?a.api>=2.103?n=a.request({data:{cmd:"editor",name:l,method:"enabled"},preventDefault:!0}).done(function(e){t=e}).fail(function(){t={}}):(t={},n=e.Deferred().resolve()):n=e.Deferred().resolve(),n.always(function(){t&&(s.editors=e.grep(s.editors,function(e){return!e.info||!e.info.cmdCheck||!!t[e.info.cmdCheck]})),e.each(s.editors,function(e,t){t.setup&&"function"==typeof t.setup&&t.setup.call(t,s,a),t.disabled||t.mimes&&Array.isArray(t.mimes)&&(o=o.concat(t.mimes),t.info&&t.info.single||(r=r.concat(t.mimes)))}),o=(e.uniqueSort||e.unique)(o),r=(e.uniqueSort||e.unique)(r),s.editors=e.grep(s.editors,function(e){return!e.disabled})}))}).bind("select",function(){h=null}).bind("contextmenucreate",function(t){var n,o,r=function(e){var t=i.title;a.one("contextmenucreatedone",function(){i.title=t}),i.title=a.escape(e.i18n),delete i.variants};"files"===t.data.type&&i.enabled()&&(n=a.file(t.data.targets[0]),f(n,t.data.targets.length),Object.keys(h).length>1?g()&&(o=y(n.mime))?(r(o),i.extra={icon:"menu",node:e("<span/>").attr({title:a.i18n("select")}).on("click touchstart",function(t){if(!("touchstart"===t.type&&t.originalEvent.touches.length>1)){var n=e(this);t.stopPropagation(),t.preventDefault(),a.trigger("contextmenu",{raw:v(a.selectedFiles(),function(){var e=a.selected();i.exec(e,{editor:this}),a.trigger("selectfiles",{files:e})}),x:n.offset().left,y:n.offset().top})}})}):(delete i.extra,i.variants=[],e.each(h,function(e,t){i.variants.push([{editor:t},t.i18n,t.info&&t.info.iconImg?a.baseUrl+t.info.iconImg:"edit"])})):(r(h[Object.keys(h)[0]]),delete i.extra))})},this.getstate=function(e){var t=this.files(e),n=t.length;return n&&d(t).length==n?0:-1},this.exec=function(t,n){var i,a=this.fm,o=d(this.files(t)),r=e.map(o,function(e){return e.hash}),s=[],l=n&&n.editor?n.editor:null,c=e(n&&n._currentNode?n._currentNode:e("#"+a.cwdHash2Id(r[0]))),p=function(){var t=e.Deferred();return!l&&Object.keys(h).length>1?g()&&(l=y(o[0].mime))?t.resolve(l):(a.trigger("contextmenu",{raw:v(o,function(){t.resolve(this)}),x:c.offset().left,y:c.offset().top+22,opened:function(){a.one("closecontextmenu",function(){setTimeout(function(){"pending"===t.state()&&t.reject()},10)})}}),a.trigger("selectfiles",{files:r}),t):(Object.keys(h).length>1&&l&&m(o[0].mime,l),t.resolve(l?l:Object.keys(h).length?h[Object.keys(h)[0]]:null))},b=e.Deferred();return null===h&&f(o[0],r.length),c.length||(c=a.getUI("cwd")),p().done(function(t){for(;i=o.shift();)s.push(u(i,void 0,t).fail(function(e){e&&a.error(e)}));s.length?e.when.apply(null,s).done(function(){b.resolve()}).fail(function(){b.reject()}):b.reject()}).fail(function(){b.reject()}),b}},i.prototype.commands.empty=function(){var t=this.fm,n=this,i=function(e){var i=n.files(e);return i.length||(i=[t.cwd()]),i};this.linkedCmds=["rm"],this.getstate=function(t){var n,a=i(t);return n=a.length,e.grep(a,function(e){return!(!e.write||"directory"!==e.mime)}).length==n?0:-1},this.exec=function(n){var a=i(n),o=a.length,r=e.Deferred().done(function(){var n={changed:{}};t.toast({msg:t.i18n(['"'+s.join('", ')+'"',"complete",t.i18n("cmdempty")])}),e.each(a,function(e,t){n.changed[t.hash]=t}),t.change(n)}).always(function(){var n=t.cwd().hash;t.trigger("selectfiles",{files:e.map(a,function(e){return n===e.phash?e.hash:null})})}),s=[],l=function(e){"number"==typeof e?(s.push(a[e].name),delete a[e].dirs):e&&t.error(e),--o<1&&r[s.length?"resolve":"reject"]()};return e.each(a,function(n,i){var a;return i.write&&"directory"===i.mime?t.isCommandEnabled("rm",i.hash)?(a=setTimeout(function(){t.notify({type:"search",cnt:1,hideCnt:!(o>1)})},t.notifyDelay),void t.request({data:{cmd:"open",target:i.hash},preventDefault:!0,asNotOpen:!0}).done(function(r){var s=[];a&&clearTimeout(a),t.ui.notify.children(".elfinder-notify-search").length&&t.notify({type:"search",cnt:-1,hideCnt:!(o>1)}),r&&r.files&&r.files.length?r.files.length>t.maxTargets?l(["errEmpty",i.name,"errMaxTargets",t.maxTargets]):(t.updateCache(r),e.each(r.files,function(e,t){return!t.write||t.locked?(l(["errEmpty",i.name,"errRm",t.name,"errPerm"]),s=[],!1):void s.push(t.hash)}),s.length&&t.exec("rm",s,{_userAction:!0,addTexts:[t.i18n("folderToEmpty",i.name)]}).fail(function(e){t.trigger("unselectfiles",{files:t.selected()}),l(e||"")}).done(function(){l(n)})):(t.toast({mode:"warning",msg:t.i18n("filderIsEmpty",i.name)}),l(""))}).fail(function(e){l(e||"")})):(l(["errCmdNoSupport",'"rm"']),null):(l(["errEmpty",i.name,"errPerm"]),null)}),r}},i.prototype.commands.extract=function(){var t=this,n=t.fm,i=[],a=function(t){return e.grep(t,function(t){return!(!t.read||e.inArray(t.mime,i)===-1)})};this.variants=[],this.disableOnSearch=!0,n.bind("open reload",function(){i=n.option("archivers").extract||[],n.api>2?t.variants=[[{makedir:!0},n.i18n("cmdmkdir")],[{},n.i18n("btnCwd")]]:t.variants=[[{},n.i18n("btnCwd")]],t.change()}),this.getstate=function(e){var t=this.files(e),n=t.length;return n&&this.fm.cwd().write&&a(t).length==n?0:-1},this.exec=function(t,a){var o,r,s,l=this.files(t),c=e.Deferred(),d=l.length,p=a&&a.makedir?1:0,u=!1,h=!1,f=0,m=e.map(n.files(t),function(e){return e.name}),g={};e.grep(n.files(t),function(e){return g[e.name]=e,!1});var v=function(e){switch(e){case"overwrite_all":u=!0;break;case"omit_all":h=!0}},b=function(t){t.read&&n.file(t.phash).write?e.inArray(t.mime,i)===-1?(r=["errExtract",t.name,"errNoArchive"],n.error(r),c.reject(r)):n.request({data:{cmd:"extract",target:t.hash,makedir:p},notify:{type:"extract",cnt:1},syncOnFail:!0,navigate:{toast:p?{incwd:{msg:n.i18n(["complete",n.i18n("cmdextract")]),action:{cmd:"open",msg:"cmdopen"}},inbuffer:{msg:n.i18n(["complete",n.i18n("cmdextract")]),action:{cmd:"open",msg:"cmdopen"}}}:{inbuffer:{msg:n.i18n(["complete",n.i18n("cmdextract")])}}}}).fail(function(e){"rejected"!=c.state()&&c.reject(e)}).done(function(){}):(r=["errExtract",t.name,"errPerm"],n.error(r),c.reject(r))},y=function(t,i){var a=t[i],r=n.splitFileExtention(a.name)[0],l=e.inArray(r,m)>=0,w=function(){i+1<d?y(t,i+1):c.resolve()};!p&&l&&"directory"!=g[r].mime?n.confirm({title:n.i18n("ntfextract"),text:["errExists",r,"confirmRepl"],accept:{label:"btnYes",callback:function(e){if(s=e?"overwrite_all":"overwrite",v(s),u||h){if(u){for(o=i;o<d;o++)b(t[o]);c.resolve()}}else"overwrite"==s&&b(a),i+1<d?y(t,i+1):c.resolve()}},reject:{label:"btnNo",callback:function(e){s=e?"omit_all":"omit",v(s),!u&&!h&&i+1<d?y(t,i+1):h&&c.resolve()}},cancel:{label:"btnCancel",callback:function(){c.resolve()}},all:i+1<d}):p?(b(a),w()):0==f?n.confirm({title:n.i18n("cmdextract"),text:[n.i18n("cmdextract")+' "'+a.name+'"',"confirmRepl"],accept:{label:"btnYes",callback:function(e){e&&(f=1),b(a),w()}},reject:{label:"btnNo",callback:function(e){e&&(f=-1),w()}},cancel:{label:"btnCancel",callback:function(){c.resolve()}},all:i+1<d}):(f>0&&b(a),w())};return this.enabled()&&d&&i.length?(d>0&&y(l,0),c):c.reject()}},(i.prototype.commands.forward=function(){this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{pattern:"ctrl+right"}],this.getstate=function(){return this.fm.history.canForward()?0:-1},this.exec=function(){return this.fm.history.forward()}}).prototype={forceLoad:!0},i.prototype.commands.fullscreen=function(){var t=this,n=this.fm,i=function(e,n){e.preventDefault(),e.stopPropagation(),n&&n.fullscreen&&t.update(void 0,"on"===n.fullscreen)};this.alwaysEnabled=!0,this.updateOnSelect=!1,this.syncTitleOnChange=!0,this.value=!1,this.options={ui:"fullscreenbutton"},this.getstate=function(){return 0},this.exec=function(){var i=n.getUI().get(0),a=i===n.toggleFullscreen(i);return t.title=n.i18n(a?"reinstate":"cmdfullscreen"),t.update(void 0,a),e.Deferred().resolve()},n.bind("init",function(){n.getUI().off("resize."+n.namespace,i).on("resize."+n.namespace,i)})},(i.prototype.commands.getfile=function(){var t=this,n=this.fm,i=function(n){var i=t.options;return n=e.grep(n,function(e){return!("directory"==e.mime&&!i.folders||!e.read)}),i.multiple||1==n.length?n:[]};this.alwaysEnabled=!0,this.callback=n.options.getFileCallback,this._disabled="function"==typeof this.callback,this.getstate=function(e){var t=this.files(e),n=t.length;return this.callback&&n&&i(t).length==n?0:-1},this.exec=function(n){var i,a,o,r=this.fm,s=this.options,l=this.files(n),c=l.length,d=r.option("url"),p=r.option("tmbUrl"),u=e.Deferred().done(function(e){var n,i=function(){"close"==s.oncomplete?r.hide():"destroy"==s.oncomplete&&r.destroy()};r.trigger("getfile",{files:e});try{n=t.callback(e,r)}catch(a){return void r.error(["Error in `getFileCallback`.",a.message])}"object"==typeof n&&"function"==typeof n.done?n.done(i).fail(function(e){e&&r.error(e)}):i()}),h=function(t){return s.onlyURL?s.multiple?e.map(l,function(e){return e.url}):l[0].url:s.multiple?l:l[0]},f=[];for(i=0;i<c;i++){if(a=l[i],"directory"==a.mime&&!s.folders)return u.reject();a.baseUrl=d,"1"==a.url?f.push(r.request({data:{cmd:"url",target:a.hash},notify:{type:"url",cnt:1,hideCnt:!0},preventDefault:!0}).done(function(e){if(e.url){var t=r.file(this.hash);t.url=this.url=e.url}}.bind(a))):a.url=r.url(a.hash),s.onlyURL||(s.getPath&&(a.path=r.path(a.hash),""===a.path&&a.phash&&!function(){var t=e.Deferred();f.push(t),r.path(a.hash,!1,{}).done(function(e){a.path=e}).fail(function(){a.path=""}).always(function(){t.resolve()})}()),a.tmb&&1!=a.tmb&&(a.tmb=p+a.tmb),a.width||a.height||(a.dim?(o=a.dim.split("x"),a.width=o[0],a.height=o[1]):s.getImgSize&&a.mime.indexOf("image")!==-1&&f.push(r.request({data:{cmd:"dim",target:a.hash},notify:{type:"dim",cnt:1,hideCnt:!0},preventDefault:!0}).done(function(e){if(e.dim){var t=e.dim.split("x"),n=r.file(this.hash);n.width=this.width=t[0],n.height=this.height=t[1]}}.bind(a)))))}return f.length?(e.when.apply(null,f).always(function(){u.resolve(h(l))}),u):u.resolve(h(l))}}).prototype={forceLoad:!0},(i.prototype.commands.help=function(){var t,n,i,a,o,r=this.fm,s=this,l='<div class="elfinder-help-link"> <a href="{url}" target="_blank">{link}</a></div>',c='<div class="elfinder-help-team"><div>{author}</div>{work}</div>',d=/\{url\}/,p=/\{link\}/,u=/\{author\}/,h=/\{work\}/,f="replace",m="ui-priority-primary",g="ui-priority-secondary",v="elfinder-help-license",b='<li class="ui-state-default ui-corner-top elfinder-help-tab-{id}"><a href="#'+r.namespace+'-help-{id}">{title}</a></li>',y=['<div class="ui-tabs ui-widget ui-widget-content ui-corner-all elfinder-help">','<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">'],w='<div class="elfinder-help-shortcut"><div class="elfinder-help-shortcut-pattern">{pattern}</div> {descrip}</div>',x='<div class="elfinder-help-separator"/>',k=e("base").length?document.location.href.replace(/#.*$/,""):"",C=function(){y.push('<div id="'+r.namespace+'-help-about" class="ui-tabs-panel ui-widget-content ui-corner-bottom"><div class="elfinder-help-logo"/>'),y.push("<h3>elFinder</h3>"),y.push('<div class="'+m+'">'+r.i18n("webfm")+"</div>"),y.push('<div class="'+g+'">'+r.i18n("ver")+": "+r.version+", "+r.i18n("protocolver")+': <span class="apiver"></span></div>'),y.push('<div class="'+g+'">jQuery/jQuery UI: '+e().jquery+"/"+e.ui.version+"</div>"),y.push(x),y.push(l[f](d,"http://elfinder.org/")[f](p,r.i18n("homepage"))),y.push(l[f](d,"https://github.com/Studio-42/elFinder/wiki")[f](p,r.i18n("docs"))),y.push(l[f](d,"https://github.com/Studio-42/elFinder")[f](p,r.i18n("github"))),y.push(x),y.push('<div class="'+m+'">'+r.i18n("team")+"</div>"),y.push(c[f](u,'Dmitry "dio" Levashov &lt;dio@std42.ru&gt;')[f](h,r.i18n("chiefdev"))),y.push(c[f](u,"Naoki Sawada &lt;hypweb+elfinder@gmail.com&gt;")[f](h,r.i18n("developer"))),y.push(c[f](u,"Troex Nevelin &lt;troex@fury.scancode.ru&gt;")[f](h,r.i18n("maintainer"))),y.push(c[f](u,"Alexey Sukhotin &lt;strogg@yandex.ru&gt;")[f](h,r.i18n("contributor"))),r.i18[r.lang].translator&&e.each(r.i18[r.lang].translator.split(", "),function(){y.push(c[f](u,e.trim(this))[f](h,r.i18n("translator")+" ("+r.i18[r.lang].language+")"))}),y.push(x),y.push('<div class="'+v+'">'+r.i18n("icons")+': Pixelmixer, <a href="http://p.yusukekamiyamane.com" target="_blank">Fugue</a></div>'),y.push(x),y.push('<div class="'+v+'">Licence: 3-clauses BSD Licence</div>'),y.push('<div class="'+v+'">Copyright © 2009-2017, Studio 42</div>'),y.push('<div class="'+v+'">„ …'+r.i18n("dontforget")+" ”</div>"),y.push("</div>")},T=function(){var t=r.shortcuts();y.push('<div id="'+r.namespace+'-help-shortcuts" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),t.length?(y.push('<div class="ui-widget-content elfinder-help-shortcuts">'),e.each(t,function(e,t){y.push(w.replace(/\{pattern\}/,t[0]).replace(/\{descrip\}/,t[1]))}),y.push("</div>")):y.push('<div class="elfinder-help-disabled">'+r.i18n("shortcutsof")+"</div>"),y.push("</div>")},z=function(){y.push('<div id="'+r.namespace+'-help-help" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),y.push('<a href="https://github.com/Studio-42/elFinder/wiki" target="_blank" class="elfinder-dont-panic"><span>DON\'T PANIC</span></a>'),y.push("</div>")},I=!1,S=function(){I=!0,y.push('<div id="'+r.namespace+'-help-preference" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),y.push('<div class="ui-widget-content elfinder-help-preference"></div>'),y.push("</div>")},A=!1,O=function(){A=!0,y.push('<div id="'+r.namespace+'-help-debug" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),y.push('<div class="ui-widget-content elfinder-help-debug"><ul></ul></div>'),y.push("</div>")},j=function(){var t,i,l,c,d,p,u=function(t,n){return e.each(n,function(n,i){t.append(e("<dt/>").text(n)),"undefined"==typeof i?t.append(e("<dd/>").append(e("<span/>").text("undfined"))):"object"!=typeof i||i?"object"==typeof i&&(e.isPlainObject(i)||i.length)?t.append(e("<dd/>").append(u(e("<dl/>"),i))):t.append(e("<dd/>").append(e("<span/>").text(i&&"object"==typeof i?"[]":i?i:'""'))):t.append(e("<dd/>").append(e("<span/>").text("null")))}),t},h=o.children("li").length;(s.debug.options||s.debug.debug)&&(h>=5&&(d=o.children("li:last"),p=a.children("div:last"),p.is(":hidden")?(d.remove(),p.remove()):(d.prev().remove(),p.prev().remove())),l=r.namespace+"-help-debug-"+ +new Date,t=e("<li/>").html('<a href="'+k+"#"+l+'">'+s.debug.debug.cmd+"</a>").prependTo(o),i=e('<div id="'+l+'"/>').data("debug",s.debug),t.on("click.debugrender",function(){var n=i.data("debug");i.removeData("debug"),n&&(i.hide(),n.debug&&(c=e("<fieldset>").append(e("<legend/>").text("debug"),u(e("<dl/>"),n.debug)),i.append(c)),n.options&&(c=e("<fieldset>").append(e("<legend/>").text("options"),u(e("<dl/>"),n.options)),i.append(c)),i.show()),t.off("click.debugrender")}),o.after(i),n&&a.tabs("refresh"))},D="",M=[],U=function(t){t&&"function"==typeof t?M.push(t):M.length&&(e.each(M,function(){this.call(s)}),M=[])};this.alwaysEnabled=!0,this.updateOnSelect=!1,this.state=-1,this.shortcuts=[{pattern:"f1",description:this.title}],r.bind("load",function(){var t,l,c,d,p,u,h=function(){var t=D.find(".elfinder-help-preference"),n=s.options.prefs||["language","toolbarPref","columnPref","selectAction","useStoredEditor","hashChecker","autoFocusDialog","clearBrowserData"],i=e();n=r.arrayFlip(n,!0),r.options.getFileCallback&&delete n.selectAction,n.language&&(n.language=function(){var t=e("<div/>");return U(function(){var n=e("<select/>").on("change",function(){var t=e(this).val();r.storage("lang",t),e("#"+r.id).elfinder("reload")}),i=[],a=s.options.langs||{ar:"اللغة العربية",bg:"Български",ca:"Català",cs:"Čeština",da:"Dansk",de:"Deutsch",el:"Ελληνικά",en:"English",es:"Español",fa:"فارسی‌‎, پارسی‌",fo:"Føroyskt",fr:"Français",he:"עברית‎",hr:"Hrvatski",hu:"Magyar",id:"Bahasa Indonesia",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",no:"Norsk",pl:"Polski",pt_BR:"Português",ro:"Română",ru:"Pусский",si:"සිංහල",sk:"Slovenčina",sl:"Slovenščina",sr:"Srpski",sv:"Svenska",tr:"Türkçe",ug_CN:"ئۇيغۇرچە",uk:"Український",vi:"Tiếng Việt",zh_CN:"简体中文",zh_TW:"正體中文"};e.each(a,function(e,t){i.push('<option value="'+e+'">'+t+"</option>")}),t.replaceWith(n.append(i.join("")).val(r.lang))}),t}()),n.toolbarPref&&(n.toolbarPref=function(){var t=e("<div/>");return U(function(){var n=e.map(r.options.uiOptions.toolbar,function(t){return e.isArray(t)?t:null}),i=[],a=r.storage("toolbarhides")||{};e.each(n,function(){var e=this,t=r.i18n("cmd"+e);t==="cmd"+e&&(t=r.i18n(e)),i.push('<span class="elfinder-help-toolbar-item"><label><input type="checkbox" value="'+e+'" '+(a[e]?"":"checked")+"/>"+t+"</label></span>")}),t.replaceWith(e(i.join(" ")).on("change","input",function(){var t=e(this).val(),n=e(this).is(":checked");n||a[t]?n&&a[t]&&delete a[t]:a[t]=!0,r.storage("toolbarhides",a),r.trigger("toolbarpref")}))}),t}()),n.columnPref&&(n.columnPref=function(){var t=e("<div/>");return U(function(){var n=r.options.uiOptions.cwd.listView.columns,i=[],a=r.storage("columnhides")||{};e.each(n,function(){var e=this,t=r.getColumnName(e);i.push('<span class="elfinder-help-column-item"><label><input type="checkbox" value="'+e+'" '+(a[e]?"":"checked")+"/>"+t+"</label></span>")}),t.replaceWith(e(i.join(" ")).on("change","input",function(){var t=e(this).val(),n=e(this).is(":checked");n||a[t]?n&&a[t]&&delete a[t]:a[t]=!0,r.storage("columnhides",a),r.trigger("columnpref",{repaint:!0})}))}),t}()),n.selectAction&&(n.selectAction=function(){var t=e("<div/>");return U(function(){var n=e("<select/>").on("change",function(){var t=e(this).val();r.storage("selectAction","default"===t?null:t)}),i=[],a=s.options.selectActions;e.inArray("open",a)===-1&&a.unshift("open"),e.each(a,function(t,n){var a=e.map(n.split("/"),function(e){var t=r.i18n("cmd"+e);return t==="cmd"+e&&(t=r.i18n(e)),t});i.push('<option value="'+n+'">'+a.join("/")+"</option>")}),t.replaceWith(n.append(i.join("")).val(r.storage("selectAction")||"open"))}),t}()),n.useStoredEditor&&(n.useStoredEditor=e('<input type="checkbox"/>').prop("checked",function(){var e=r.storage("useStoredEditor");return e?e>0:r.options.commandsOptions.edit.useStoredEditor}()).on("change",function(t){r.storage("useStoredEditor",e(this).is(":checked")?1:-1),r.trigger("selectfiles",{files:r.selected()})})),n.hashChecker&&r.hashCheckers.length&&(n.hashChecker=function(){var t=e("<div/>");return U(function(){var n=[],i=r.arrayFlip(r.storage("hashchekcer")||r.options.commandsOptions.info.showHashAlgorisms,!0);e.each(r.hashCheckers,function(){var e=this,t=r.i18n(e);n.push('<span class="elfinder-help-hashchecker-item"><label><input type="checkbox" value="'+e+'" '+(i[e]?"checked":"")+"/>"+t+"</label></span>")}),t.replaceWith(e(n.join(" ")).on("change","input",function(){var t=e(this).val(),n=e(this).is(":checked");n?i[t]=!0:i[t]&&delete i[t],r.storage("hashchekcer",e.grep(r.hashCheckers,function(e){return i[e]}))}))}),t}()),n.autoFocusDialog&&(n.autoFocusDialog=e('<input type="checkbox"/>').prop("checked",function(){var e=r.storage("autoFocusDialog");return e?e>0:r.options.uiOptions.dialog.focusOnMouseOver}()).on("change",function(t){r.storage("autoFocusDialog",e(this).is(":checked")?1:-1)})),n.clearBrowserData&&(n.clearBrowserData=e("<button/>").text(r.i18n("reset")).button().on("click",function(t){t.preventDefault(),r.storage(),e("#"+r.id).elfinder("reload")})),e.each(n,function(t,n){var a,o=r.arrayFlip(["toolbarPref","columnPref","hashChecker"]," elfinder-help-checkboxes");n&&n!==!0&&(a=r.i18n(t),n instanceof jQuery&&1===n.length&&n.is("input:checkbox")&&(n.attr("id")||n.attr("id","elfinder-help-"+t+"-checkbox"),a='<label for="'+n.attr("id")+'">'+a+"</label>"),i=i.add(e('<dt class="elfinder-help-'+t+o[t]+'">'+a+"</dt>")).add(e('<dd class="elfinder-help-'+t+'"/>').append(n)))}),t.append(e("<dl/>").append(i))},m=s.options.view||["about","shortcuts","help","preference","debug"];e.inArray("preference",m)===-1&&m.push("preference"),e.fn.tabs||(t=e.inArray(m,"debug"))!==!1&&m.splice(t,1),e.each(m,function(e,t){y.push(b[f](/\{id\}/g,t)[f](/\{title\}/,r.i18n(t)))}),y.push("</ul>"),e.inArray("about",m)!==-1&&C(),e.inArray("shortcuts",m)!==-1&&T(),e.inArray("help",m)!==-1&&(l=r.baseUrl+"js/i18n/help/%s.html.js",z()),e.inArray("preference",m)!==-1&&S(),e.inArray("debug",m)!==-1&&O(),y.push("</div>"),D=e(y.join("")),D.find(".ui-tabs-nav li").on("mouseenter mouseleave",function(){e(this).toggleClass("ui-state-hover")}).children().on("click",function(t){var n=e(this);t.preventDefault(),t.stopPropagation(),n.hasClass("ui-tabs-selected")||(n.parent().addClass("ui-tabs-selected ui-state-active").siblings().removeClass("ui-tabs-selected").removeClass("ui-state-active"),D.children(".ui-tabs-panel").hide().filter(n.attr("href")).show())}).filter(":first").trigger("click"),I&&h(),A&&(i=D.find(".elfinder-help-tab-debug").hide(),a=D.find("#"+r.namespace+"-help-debug").children("div:first"),o=a.children("ul:first").on("click",function(e){e.preventDefault(),e.stopPropagation()}),s.debug={},r.bind("backenddebug",function(e){A&&e.data&&e.data.debug&&(s.debug={options:e.data.options,debug:Object.assign({cmd:r.currentReqCmd},e.data.debug)},s.dialog&&j())})),D.find("#"+r.namespace+"-help-about").find(".apiver").text(r.api),s.dialog=r.dialog(D,{title:s.title,width:530,maxWidth:"window",maxHeight:"window",autoOpen:!1,destroyOnClose:!1,close:function(){A&&(i.hide(),a.tabs("destroy")),n=!1}}).on("click",function(e){e.stopPropagation()}).css({overflow:"hidden"}),c=s.dialog.children(".ui-tabs"),d=c.children(".ui-tabs-nav:first"),p=c.children(".ui-tabs-panel"),u=s.dialog.outerHeight(!0)-s.dialog.height(),s.dialog.closest(".ui-dialog").on("resize",function(){p.height(s.dialog.height()-u-d.outerHeight(!0)-20)}),l&&s.dialog.one("initContents",function(){e.ajax({url:s.options.helpSource?s.options.helpSource:l.replace("%s",r.lang),dataType:"html"}).done(function(t){e("#"+r.namespace+"-help-help").html(t)}).fail(function(){e.ajax({url:l.replace("%s","en"),dataType:"html"}).done(function(t){e("#"+r.namespace+"-help-help").html(t)})})}),s.state=0}).one("open",function(){var e=!1;r.one("backenddebug",function(){e=!0}).one("opendone",function(){setTimeout(function(){!e&&A&&(A=!1,i.hide(),a.hide(),o.hide())},0)})}),this.getstate=function(){return 0},this.exec=function(s,l){var c=l?l.tab:void 0,d=function(){A&&(a.tabs(),o.find("a:first").trigger("click"),i.show(),n=!0)};return t?d():(t=!0,r.lazy(U).done(d)),this.dialog.trigger("initContents").elfinderdialog("open").find((c?".elfinder-help-tab-"+c:".ui-tabs-nav li")+" a:first").trigger("click"),e.Deferred().resolve()}}).prototype={forceLoad:!0},i.prototype.commands.preference=function(){this.linkedCmds=["help"],this.alwaysEnabled=!0,this.getstate=function(){return 0},this.exec=function(){return this.fm.exec("help",void 0,{tab:"preference"})}},i.prototype.commands.hidden=function(){this.hidden=!0,this.updateOnSelect=!1,this.getstate=function(){return-1}},(i.prototype.commands.home=function(){this.title="Home",this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+home ctrl+shift+up",description:"Home"}],this.getstate=function(){var e=this.fm.root(),t=this.fm.cwd().hash;return e&&t&&e!=t?0:-1},this.exec=function(){return this.fm.exec("open",this.fm.root())}}).prototype={forceLoad:!0},(i.prototype.commands.info=function(){var t=this.fm,n="elfinder-info-spinner",i="elfinder-info-button",a={calc:t.i18n("calc"),size:t.i18n("size"),unknown:t.i18n("unknown"),path:t.i18n("path"),aliasfor:t.i18n("aliasfor"),modify:t.i18n("modify"),perms:t.i18n("perms"),locked:t.i18n("locked"),dim:t.i18n("dim"),kind:t.i18n("kind"),files:t.i18n("files"),folders:t.i18n("folders"),roots:t.i18n("volumeRoots"),items:t.i18n("items"),yes:t.i18n("yes"),no:t.i18n("no"),link:t.i18n("link"),owner:t.i18n("owner"),group:t.i18n("group"),perm:t.i18n("perm"),getlink:t.i18n("getLink")};this.tpl={main:'<div class="ui-helper-clearfix elfinder-info-title {dirclass}"><span class="elfinder-cwd-icon {class} ui-corner-all"{style}/>{title}</div><table class="elfinder-info-tb">{content}</table>',itemTitle:'<strong>{name}</strong><span class="elfinder-info-kind">{kind}</span>',groupTitle:"<strong>{items}: {num}</strong>",row:'<tr><td class="elfinder-info-label">{label} : </td><td class="{class}">{value}</td></tr>',spinner:'<span>{text}</span> <span class="'+n+" "+n+'-{name}"/>'},this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+i"}],this.init=function(){e.each(a,function(e,n){a[e]=t.i18n(n)})},this.getstate=function(){return 0},this.exec=function(t){var o=this.files(t);o.length||(o=this.files([this.fm.cwd().hash]));var r,s,l,c,d,p,u,h,f=this.fm,m=this.options,g=this.tpl,v=g.row,b=o.length,y=[],w=g.main,x="{label}",k="{value}",C=[],T=null,z={title:f.i18n("selectionInfo"),width:"auto",close:function(){e(this).elfinderdialog("destroy"),T&&"pending"===T.state()&&T.reject(),e.grep(C,function(e){e&&"pending"===e.state()&&e.reject()})}},I=[],S=function(e,t,i){O.find("."+n+"-"+t).parent().html(e).addClass(i||"")},A=f.namespace+"-info-"+e.map(o,function(e){return e.hash}).join("-"),O=f.getUI().find("#"+A),j=[],D="",M="elfinder-font-mono elfinder-info-hash";if(!b)return e.Deferred().reject();if(O.length)return O.elfinderdialog("toTop"),e.Deferred().resolve();if(1===b){if(l=o[0],l.icon&&(D=" "+f.getIconStyle(l)),w=w.replace("{dirclass}",l.csscls?f.escape(l.csscls):"").replace("{class}",f.mime2class(l.mime)).replace("{style}",D),c=g.itemTitle.replace("{name}",f.escape(l.i18||l.name)).replace("{kind}",'<span title="'+f.escape(l.mime)+'">'+f.mime2kind(l)+"</span>"),s=f.tmb(l),l.read?"directory"!=l.mime||l.alias?r=f.formatSize(l.size):(r=g.spinner.replace("{text}",a.calc).replace("{name}","size"),I.push(l.hash)):r=a.unknown,y.push(v.replace(x,a.size).replace(k,r)),l.alias&&y.push(v.replace(x,a.aliasfor).replace(k,l.alias)),(u=f.path(l.hash,!0))?y.push(v.replace(x,a.path).replace(k,f.escape(u).replace(/(\/|\\)/g,"$1&#8203;")).replace("{class}","elfinder-info-path")):(y.push(v.replace(x,a.path).replace(k,g.spinner.replace("{text}",a.calc).replace("{name}","path")).replace("{class}","elfinder-info-path")),C.push(f.path(l.hash,!0,{notify:null}).fail(function(){S(a.unknown,"path")}).done(function(e){S(e.replace(/(\/|\\)/g,"$1&#8203;"),"path")}))),l.read){var U,E=f.escape(l.name);if("1"==l.url)y.push(v.replace(x,a.link).replace(k,'<button class="'+i+" "+n+'-url">'+a.getlink+"</button>"));else{if(m.nullUrlDirLinkSelf&&"directory"==l.mime&&null===l.url){var F=window.location;U=F.pathname+F.search+"#elf_"+l.hash}else U=f.url(l.hash);y.push(v.replace(x,a.link).replace(k,'<a href="'+U+'" target="_blank">'+E+"</a>"));
}}l.dim?y.push(v.replace(x,a.dim).replace(k,l.dim)):l.mime.indexOf("image")!==-1&&(l.width&&l.height?y.push(v.replace(x,a.dim).replace(k,l.width+"x"+l.height)):(y.push(v.replace(x,a.dim).replace(k,g.spinner.replace("{text}",a.calc).replace("{name}","dim"))),C.push(f.request({data:{cmd:"dim",target:l.hash},preventDefault:!0}).fail(function(){S(a.unknown,"dim")}).done(function(e){if(S(e.dim||a.unknown,"dim"),e.dim){var t=e.dim.split("x"),n=f.file(l.hash);n.width=t[0],n.height=t[1]}})))),y.push(v.replace(x,a.modify).replace(k,f.formatDate(l))),y.push(v.replace(x,a.perms).replace(k,f.formatPermissions(l))),y.push(v.replace(x,a.locked).replace(k,l.locked?a.yes:a.no)),l.owner&&y.push(v.replace(x,a.owner).replace(k,l.owner)),l.group&&y.push(v.replace(x,a.group).replace(k,l.group)),l.perm&&y.push(v.replace(x,a.perm).replace(k,f.formatFileMode(l.perm))),window.ArrayBuffer&&(f.options.cdns.sparkmd5||f.options.cdns.jssha)&&"directory"!==l.mime&&l.size>0&&(!m.showHashMaxsize||l.size<=m.showHashMaxsize)&&(h=[],e.each(f.storage("hashchekcer")||m.showHashAlgorisms,function(e,t){l[t]?y.push(v.replace(x,f.i18n(t)).replace(k,l[t]).replace("{class}",M)):(y.push(v.replace(x,f.i18n(t)).replace(k,g.spinner.replace("{text}",a.calc).replace("{name}",t))),h.push(t))}),C.push(f.getContentsHashes(l.hash,h).progress(function(t){e.each(h,function(e,n){t[n]&&S(t[n],n,M)})}).always(function(){e.each(h,function(e,t){S(a.unknown,t)})}))),m.custom&&e.each(m.custom,function(t,n){n.mimes&&!e.grep(n.mimes,function(e){return l.mime===e||0===l.mime.indexOf(e+"/")}).length||n.hashRegex&&!l.hash.match(n.hashRegex)||(y.push(v.replace(x,f.i18n(n.label)).replace(k,n.tpl.replace("{id}",A))),n.action&&"function"==typeof n.action&&j.push(n.action))})}else w=w.replace("{class}","elfinder-cwd-icon-group"),c=g.groupTitle.replace("{items}",a.items).replace("{num}",b),d=e.grep(o,function(e){return"directory"==e.mime}).length,d?(p=e.grep(o,function(e){return!("directory"!==e.mime||e.phash&&!e.isroot)}).length,d-=p,y.push(v.replace(x,a.kind).replace(k,p===b||d===b?a[p?"roots":"folders"]:e.map({roots:p,folders:d,files:b-p-d},function(e,t){return e?a[t]+" "+e:null}).join(", "))),y.push(v.replace(x,a.size).replace(k,g.spinner.replace("{text}",a.calc).replace("{name}","size"))),I=e.map(o,function(e){return e.hash})):(r=0,e.each(o,function(e,t){var n=parseInt(t.size);n>=0&&r>=0?r+=n:r="unknown"}),y.push(v.replace(x,a.kind).replace(k,a.files)),y.push(v.replace(x,a.size).replace(k,f.formatSize(r))));return w=w.replace("{title}",c).replace("{content}",y.join("").replace(/{class}/g,"")),O=f.dialog(w,z),O.attr("id",A),l&&"1"==l.url&&O.on("click","."+n+"-url",function(){e(this).parent().html(g.spinner.replace("{text}",f.i18n("ntfurl")).replace("{name}","url")),f.request({data:{cmd:"url",target:l.hash},preventDefault:!0}).fail(function(){S(E,"url")}).done(function(e){if(e.url){S('<a href="'+e.url+'" target="_blank">'+E+"</a>"||E,"url");var t=f.file(l.hash);t.url=e.url}else S(E,"url")})}),s&&e("<img/>").on("load",function(){O.find(".elfinder-cwd-icon").addClass(s.className).css("background-image","url('"+s.url+"')")}).attr("src",s.url),I.length&&(T=f.getSize(I).done(function(e){S(e.formated,"size")}).fail(function(){S(a.unknown,"size")})),j.length&&e.each(j,function(e,t){try{t(l,f,O)}catch(n){f.debug("error",n)}}),e.Deferred().resolve()}}).prototype={forceLoad:!0},i.prototype.commands.mkdir=function(){var t,n=this.fm,i=this;this.value="",this.disableOnSearch=!0,this.updateOnSelect=!1,this.mime="directory",this.prefix="untitled folder",this.exec=function(a,o){return a&&a.length&&o&&o._currentType&&"navbar"===o._currentType?(this.origin=o._currentType,this.data={target:a[0]}):(this.origin=t?t:"cwd",delete this.data),a||this.options.intoNewFolderToolbtn||n.getUI("cwd").trigger("unselectall"),this.move=!("navbar"===this.origin||!n.selected().length),e.proxy(n.res("mixin","make"),i)()},this.shortcuts=[{pattern:"ctrl+shift+n"}],this.init=function(){this.options.intoNewFolderToolbtn&&(this.syncTitleOnChange=!0)},n.bind("select",function(e){var a=e.data&&e.data.selected?e.data.selected:[];i.className="mkdir",t=a.length?e.data.origin||"":"",a.length&&"navbar"!==t?(i.title=n.i18n("cmdmkdirin"),i.className+=" elfinder-button-icon-mkdirin"):i.title=n.i18n("cmdmkdir"),i.update(void 0,i.title)}),this.getstate=function(i){var a=n.cwd(),o="navbar"===t||i&&i[0]!=a.hash?this.files(i||n.selected()):[],r=o.length;return"navbar"===t?r&&o[0].write&&o[0].read?0:-1:!a.write||r&&e.grep(o,function(e){return!(!e.read||e.locked)}).length!=r?-1:0}},i.prototype.commands.mkfile=function(){this.disableOnSearch=!0,this.updateOnSelect=!1,this.mime="text/plain",this.prefix="untitled file.txt",this.exec=e.proxy(this.fm.res("mixin","make"),this),this.getstate=function(){return this.fm.cwd().write?0:-1}},i.prototype.commands.netmount=function(){var t,n=this;this.alwaysEnabled=!0,this.updateOnSelect=!1,this.drivers=[],this.handlers={load:function(){this.drivers=this.fm.netDrivers}},this.getstate=function(){return this.drivers.length?0:-1},this.exec=function(){var i,a=n.fm,o=e.Deferred(),r=n.options,s=function(){var s,l=function(){c.protocol.trigger("change","winfocus")},c={protocol:e("<select/>").on("change",function(e,n){var o=this.value;t.find(".elfinder-netmount-tr").hide(),t.find(".elfinder-netmount-tr-"+o).show(),i.children(".ui-dialog-buttonpane:first").find("button").show(),"function"==typeof r[o].select&&r[o].select(a,e,n),setTimeout(function(){t.find("input:text.elfinder-tabstop:visible:first").trigger("focus")},20)}).addClass("ui-corner-all")},d={title:a.i18n("netMountDialogTitle"),resizable:!1,modal:!0,destroyOnClose:!1,open:function(){e(window).on("focus."+a.namespace,l),c.protocol.trigger("change")},close:function(){"pending"==o.state()&&o.reject(),e(window).off("focus."+a.namespace,l)},buttons:{}},p=function(){var i=c.protocol.val(),s={cmd:"netmount",protocol:i},l=r[i];return e.each(t.find("input.elfinder-netmount-inputs-"+i),function(t,n){var i,a;a=e(n),a.is(":radio,:checkbox")?a.is(":checked")&&(i=e.trim(a.val())):i=e.trim(a.val()),i&&(s[n.name]=i)}),s.host?(a.request({data:s,notify:{type:"netmount",cnt:1,hideCnt:!0}}).done(function(e){var t;e.added&&e.added.length&&(e.added[0].phash&&(t=a.file(e.added[0].phash))&&(t.dirs||(t.dirs=1,a.change({changed:[t]}))),a.one("netmountdone",function(){a.exec("open",e.added[0].hash)})),o.resolve()}).fail(function(e){l.fail&&"function"==typeof l.fail&&l.fail(a,e),o.reject(e)}),void n.dialog.elfinderdialog("close")):a.trigger("error",{error:"errNetMountHostReq",opts:{modal:!0}})},u=e('<form autocomplete="off"/>').on("keydown","input",function(t){var n,i=!0;t.keyCode===e.ui.keyCode.ENTER&&(e.each(u.find("input:visible:not(.elfinder-input-optional)"),function(){if(""===e(this).val())return i=!1,n=e(this),!1}),i?p():n.trigger("focus"))}),h=e("<div/>");return t=e('<table class="elfinder-info-tb elfinder-netmount-tb"/>').append(e("<tr/>").append(e("<td>"+a.i18n("protocol")+"</td>")).append(e("<td/>").append(c.protocol))),e.each(n.drivers,function(n,i){r[i]&&(c.protocol.append('<option value="'+i+'">'+a.i18n(r[i].name||i)+"</option>"),e.each(r[i].inputs,function(n,o){o.attr("name",n),"hidden"!=o.attr("type")?(o.addClass("ui-corner-all elfinder-netmount-inputs-"+i),t.append(e("<tr/>").addClass("elfinder-netmount-tr elfinder-netmount-tr-"+i).append(e("<td>"+a.i18n(n)+"</td>")).append(e("<td/>").append(o)))):(o.addClass("elfinder-netmount-inputs-"+i),h.append(o))}),r[i].protocol=c.protocol)}),t.append(h),t.find(".elfinder-netmount-tr").hide(),d.buttons[a.i18n("btnMount")]=p,d.buttons[a.i18n("btnCancel")]=function(){n.dialog.elfinderdialog("close")},t.find("select,input").addClass("elfinder-tabstop"),s=a.dialog(u.append(t),d),i=s.closest(".ui-dialog"),s.ready(function(){c.protocol.trigger("change"),s.elfinderdialog("posInit")}),s};return n.dialog?n.dialog.elfinderdialog("open"):n.dialog=s(),o.promise()},n.fm.bind("netmount",function(e){var i=e.data||null,a=n.options;i&&i.protocol&&a[i.protocol]&&"function"==typeof a[i.protocol].done&&(a[i.protocol].done(n.fm,i),t.find("select,input").addClass("elfinder-tabstop"),n.dialog.elfinderdialog("tabstopsInit"))})},i.prototype.commands.netunmount=function(){this.alwaysEnabled=!0,this.updateOnSelect=!1,this.drivers=[],this.handlers={load:function(){this.drivers=this.fm.netDrivers}},this.getstate=function(e){var t,n=this.fm;return e&&this.drivers.length&&!this._disabled&&(t=n.file(e[0]))&&t.netkey?0:-1},this.exec=function(t){var n=this,i=this.fm,a=e.Deferred().fail(function(e){e&&i.error(e)}),o=i.file(t[0]),r=function(t){var n,a=[];return i.leafRoots&&(n=[],e.each(i.leafRoots,function(a,o){var r,s=i.parents(a);(r=e.inArray(t,s))!==-1&&(r=s.length-r,e.each(o,function(e,t){n.push({i:r,hash:t})}))}),n.length&&(n.sort(function(e,t){return e.i<t.i}),e.each(n,function(e,t){a.push(t.hash)}))),a};return this._disabled?a.reject():("pending"==a.state()&&i.confirm({title:n.title,text:i.i18n("confirmUnmount",o.name),accept:{label:"btnUnmount",callback:function(){var t=o.hash,s=r(t),l=[],c=[],d=function(){e.when(l).done(function(){i.request({data:{cmd:"netmount",protocol:"netunmount",host:o.netkey,user:t,pass:"dum"},notify:{type:"netunmount",cnt:1,hideCnt:!0},preventFail:!0}).fail(function(e){a.reject(e)}).done(function(e){a.resolve()})}).fail(function(e){c.length&&i.remove({removed:c}),a.reject(e)})};s.length?i.confirm({title:n.title,text:function(){var t=["unmountChildren"];return e.each(s,function(e,n){t.push([i.file(n).name])}),t}(),accept:{label:"btnUnmount",callback:function(){e.each(s,function(e,t){var n=i.file(t);n.netkey&&l.push(i.request({data:{cmd:"netmount",protocol:"netunmount",host:n.netkey,user:n.hash,pass:"dum"},notify:{type:"netunmount",cnt:1,hideCnt:!0},preventDefault:!0}).done(function(e){e.removed&&(c=c.concat(e.removed))}))}),d()}},cancel:{label:"btnCancel",callback:function(){a.reject()}}}):(l=null,d())}},cancel:{label:"btnCancel",callback:function(){a.reject()}}}),a)}},(i.prototype.commands.open=function(){this.alwaysEnabled=!0,this.noChangeDirOnRemovedCwd=!0,this._handlers={dblclick:function(e){e.preventDefault(),this.exec(e.data&&e.data.file?[e.data.file]:void 0)},"select enable disable reload":function(e){this.update("disable"==e.type?-1:void 0)}},this.shortcuts=[{pattern:"ctrl+down numpad_enter"+("mac"!=this.fm.OS&&" enter")}],this.getstate=function(t){var n=this.files(t),i=n.length;return 1==i?n[0].read?0:-1:i&&!this.fm.UA.Mobile&&e.grep(n,function(e){return!("directory"==e.mime||!e.read)}).length==i?0:-1},this.exec=function(t,n){var i,a,o,r,s,l,c,d,p,u,h,f,m,g,v=this.fm,b=e.Deferred().fail(function(e){e&&v.error(e)}),y=this.files(t),w=y.length,x="object"==typeof n&&n.thash,k=this.options,C=k.into||"window";if(!w&&!x)return b.reject();if(x||1==w&&(i=y[0])&&"directory"==i.mime)return x||!i||i.read?v.request({data:{cmd:"open",target:x||i.hash},notify:{type:"open",cnt:1,hideCnt:!0},syncOnFail:!0,lazy:!1}):b.reject(["errOpen",i.name,"errPerm"]);if(y=e.grep(y,function(e){return"directory"!=e.mime}),w!=y.length)return b.reject();var T=function(){var n,m,g;try{p=new RegExp(v.option("dispInlineRegex"),"i")}catch(x){p=!1}for(u=e("<a>").hide().appendTo(e("body")),h="string"==typeof u.get(0).download,w=y.length;w--;){if(m="elf_open_window",i=y[w],!i.read)return b.reject(["errOpen",i.name,"errPerm"]);if(f=p&&i.mime.match(p),a=v.openUrl(i.hash,!f),v.UA.Mobile||!f){if(h)!f&&u.attr("download",i.name),u.attr("href",a).attr("target","_blank").get(0).click();else if(n=window.open(a),!n)return b.reject("errPopup")}else{if(g="string"==typeof k.method&&"get"===k.method.toLowerCase(),!g&&0===a.indexOf(v.options.url)&&v.customData&&Object.keys(v.customData).length&&!i.mime.match(/^(?:video|audio)/)&&(a=""),"window"===C?(s=c=Math.round(2*screen.availWidth/3),l=d=Math.round(2*screen.availHeight/3),parseInt(i.width)&&parseInt(i.height)?(s=parseInt(i.width),l=parseInt(i.height)):i.dim&&(o=i.dim.split("x"),s=parseInt(o[0]),l=parseInt(o[1])),c>=s&&d>=l?(c=s,d=l):s-c>l-d?d=Math.round(l*(c/s)):c=Math.round(s*(d/l)),r="width="+c+",height="+d,n=window.open(a,m,r+",top=50,left=50,scrollbars=yes,resizable=yes,titlebar=no")):("tabs"===C&&(m=i.hash),n=window.open("about:blank",m)),!n)return b.reject("errPopup");if(""===a){var T=document.createElement("form");T.action=v.options.url,T.method="POST",T.target=m,T.style.display="none";var z=Object.assign({},v.customData,{cmd:"file",target:i.hash,_t:i.ts||parseInt(+new Date/1e3)});e.each(z,function(e,t){var n=document.createElement("input");n.name=e,n.value=t,T.appendChild(n)}),document.body.appendChild(T),T.submit()}else"window"!==C&&(n.location=a);n.trigger("focus")}}return u.remove(),b.resolve(t)};if(w>1)v.confirm({title:"openMulti",text:["openMultiConfirm",w+""],accept:{label:"cmdopen",callback:function(){T()}},cancel:{label:"btnCancel",callback:function(){b.reject()}},buttons:v.getCommand("zipdl")&&v.isCommandEnabled("zipdl",v.cwd().hash)?[{label:"cmddownload",callback:function(){v.exec("download",t),b.reject()}}]:[]});else{if(m=v.storage("selectAction"),m&&(e.each(m.split("/"),function(){var e=this.valueOf();return("open"===e||!(g=v.getCommand(e))||!g.enabled())&&void(g=null)}),g))return g.exec();T()}return b}}).prototype={forceLoad:!0},i.prototype.commands.opendir=function(){this.alwaysEnabled=!0,this.getstate=function(){var e,t=this.fm.selected(),n=t.length;return 1!==n?-1:(e=this.fm.getUI("workzone"),e.hasClass("elfinder-search-result")?0:-1)},this.exec=function(t){var n,i=this.fm,a=e.Deferred(),o=this.files(t),r=o.length;return r&&o[0].phash?(n=o[0].phash,i.trigger("searchend",{noupdate:!0}),i.request({data:{cmd:"open",target:n},notify:{type:"open",cnt:1,hideCnt:!0},syncOnFail:!1}),a):a.reject()}},i.prototype.commands.paste=function(){this.updateOnSelect=!1,this.handlers={changeclipboard:function(){this.update()}},this.shortcuts=[{pattern:"ctrl+v shift+insert"}],this.getstate=function(e){if(this._disabled)return-1;if(e){if(Array.isArray(e)){if(1!=e.length)return-1;e=this.fm.file(e[0])}}else e=this.fm.cwd();return this.fm.clipboard().length&&"directory"==e.mime&&e.write?0:-1},this.exec=function(t,n){var i,a,o=this,r=o.fm,s=n||{},l=t?this.files(t)[0]:r.cwd(),c=r.clipboard(),d=c.length,p=!!d&&c[0].cut,u=s._cmd?s._cmd:p?"move":"copy",h="err"+u.charAt(0).toUpperCase()+u.substr(1),f=[],m=[],g=e.Deferred().fail(function(e){e&&r.error(e)}).always(function(){r.unlockfiles({files:e.map(c,function(e){return e.hash})})}),v=function(t){return t.length&&r._commands.duplicate?r.getCommand("duplicate").exec(t):e.Deferred().resolve()},b=function(t){var n,i=e.Deferred(),a=[],c={},d=function(t,n){for(var i=[],a=t.length;a--;)e.inArray(t[a].name,n)!==-1&&i.unshift(a);return i},h=function(e){var n=a[e],o=t[n],s=e==a.length-1;o&&r.confirm({title:r.i18n(u+"Files"),text:["errExists",o.name,"restore"===u?"confirmRest":"confirmRepl"],all:!s,accept:{label:"btnYes",callback:function(n){s||n?m(t):h(++e)}},reject:{label:"btnNo",callback:function(n){var i;if(n)for(i=a.length;e<i--;)t[a[i]].remove=!0;else t[a[e]].remove=!0;s||n?m(t):h(++e)}},cancel:{label:"btnCancel",callback:function(){i.resolve()}},buttons:[{label:"btnBackup",callback:function(n){var i;if(n)for(i=a.length;e<i--;)t[a[i]].rename=!0;else t[a[e]].rename=!0;s||n?m(t):h(++e)}}]})},f=function(n){var i,o={};n&&(Array.isArray(n)?n.length&&("string"==typeof n[0]?a=d(t,n):(e.each(n,function(e,t){o[t.name]=t.hash}),a=d(t,e.map(o,function(e,t){return t})),e.each(t,function(e,t){o[t.name]&&(c[o[t.name]]=t.name)}))):(i=[],a=e.map(n,function(e){return"string"==typeof e?e:(i=i.concat(e),!1)}),i.length&&(a=a.concat(i)),a=d(t,a),c=n)),a.length?h(0):m(t)},m=function(t){var n,a,o=[],d=e.grep(t,function(e){return e.rename&&o.push(e.name),!e.remove}),h=d.length;return h?(n=e.map(d,function(e){return e.hash}),a={cmd:"paste",dst:l.hash,targets:n,cut:p?1:0,renames:o,hashes:c,suffix:r.options.backupSuffix},void r.request({data:a,notify:{type:u,cnt:h},navigate:{toast:s.noToast?{}:{inbuffer:{msg:r.i18n(["complete",r.i18n("cmd"+u)]),action:{cmd:"open",msg:"cmdopendir",data:[l.hash],done:"select",cwdNot:l.hash}}}}}).done(function(t){var n={},o=t.added&&t.added.length?t.added:null;p&&o&&(e.each(d,function(t,i){var a=i.phash,r=function(t){var n;return e.each(o,function(e,i){if(i.name===t)return n=i.hash,!1}),n},s=r(i.name);s&&(n[a]?n[a].push(s):n[a]=[s])}),Object.keys(n).length&&(t.undo={cmd:"move",callback:function(){var t=[];return e.each(n,function(e,n){t.push(r.request({data:{cmd:"paste",dst:e,targets:n,cut:1},notify:{type:"undo",cnt:n.length}}))}),e.when.apply(null,t)}},t.redo={cmd:"move",callback:function(){return r.request({data:a,notify:{type:"redo",cnt:h}})}})),i.resolve(t)}).fail(function(){i.reject()}).always(function(){r.unlockfiles({files:d})})):i.resolve()};return r.isCommandEnabled(o.name,l.hash)&&t.length?(r.oldAPI?m(t):r.option("copyOverwrite",l.hash)?(n=e.map(t,function(e){return e.name}),l.hash==r.cwd().hash?f(e.map(r.files(),function(e){return e.phash==l.hash?{hash:e.hash,name:e.name}:null})):r.request({data:{cmd:"ls",target:l.hash,intersect:n},notify:{type:"prepare",cnt:1,hideCnt:!0},preventFail:!0}).always(function(e){f(e.list)})):m(t),i):i.resolve()};return d&&l&&"directory"==l.mime?l.write?(i=r.parents(l.hash),e.each(c,function(t,n){return n.read?p&&n.locked?!g.reject(["errLocked",n.name]):e.inArray(n.hash,i)!==-1?!g.reject(["errCopyInItself",n.name]):n.mime&&"directory"!==n.mime&&!r.uploadMimeCheck(n.mime,l.hash)?!g.reject([h,n.name,"errUploadMime"]):(a=r.parents(n.hash),a.pop(),e.inArray(l.hash,a)!==-1&&e.grep(a,function(e){var t=r.file(e);return t.phash==l.hash&&t.name==n.name}).length?!g.reject(["errReplByChild",n.name]):void(n.phash==l.hash?m.push(n.hash):f.push({hash:n.hash,phash:n.phash,name:n.name}))):!g.reject([h,n.name,"errPerm"])}),"rejected"==g.state()?g:(e.when(v(m),b(f)).done(function(e,t){g.resolve(t&&t.undo?t:void 0)}).fail(function(){g.reject()}).always(function(){p&&r.clipboard([])}),g)):g.reject([h,c[0].name,"errPerm"]):g.reject()}},i.prototype.commands.places=function(){var t=this,n=this.fm,i=function(n){return e.grep(t.files(n),function(e){return"directory"==e.mime})},a=null;this.getstate=function(e){var t=this.hashes(e),n=t.length;return a&&n&&n==i(t).length?0:-1},this.exec=function(t){var n=this.files(t);return a.trigger("regist",[n]),e.Deferred().resolve()},n.one("load",function(){a=n.ui.places})},(i.prototype.commands.quicklook=function(){var t,n,i,a,o,r,s,l,c,d,p=this,u=p.fm,h=0,f=1,m=2,g=3,v=4,b=h,y=Element.update?"quicklookupdate":"update",w="elfinder-quicklook-navbar-icon",x="elfinder-quicklook-fullscreen",k="elfinder-quicklook-info-wrapper",C=function(t){e(document).trigger(e.Event("keydown",{keyCode:t,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}))},T=function(e){var t=u.getUI().offset(),n=function(){var t=e.find(".elfinder-cwd-file-wrapper");return t.length?t:e}(),i=n.offset()||{top:0,left:0};return{opacity:0,width:n.width(),height:n.height()-30,top:i.top-t.top,left:i.left-t.left}},z=function(){var i=p.options.contain,a=i?u.getUI():e(window),o=u.getUI().offset(),r=Math.min(t,a.width()-10),s=Math.min(n,a.height()-80);return{opacity:1,width:r,height:s,top:parseInt((a.height()-s-60)/2+(i?0:a.scrollTop()-o.top)),left:parseInt((a.width()-r)/2+(i?0:a.scrollLeft()-o.left))}},I=function(e,t){var n=document.createElement(t||e.substr(0,e.indexOf("/"))),i=!1;try{i=n.canPlayType&&n.canPlayType(e)}catch(a){}return!(!i||""===i||"no"==i)},S=window.navigator.platform.indexOf("Win")!=-1,A=!1,O=!1,j=!1,D=null,M=e.ui.keyCode.LEFT,U=e.ui.keyCode.RIGHT,E="mousemove touchstart "+("onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll"),F=e('<div class="elfinder-quicklook-title"/>'),P=e("<div/>"),R=e('<div class="elfinder-quicklook-info"/>'),H=e('<div class="ui-front elfinder-quicklook-cover"/>'),q=e('<div class="'+w+" "+w+'-fullscreen"/>').on("click touchstart",function(t){if(!j){var n=p.window,i=n.hasClass(x),o=e(window),r=function(){p.preview.trigger("changesize")};t.stopPropagation(),t.preventDefault(),i?(G="",N(),n.toggleClass(x).css(n.data("position")),o.trigger(p.resize).off(p.resize,r),$.off("mouseenter mouseleave"),H.off(E)):(n.toggleClass(x).data("position",{left:n.css("left"),top:n.css("top"),width:n.width(),height:n.height(),display:"block"}).removeAttr("style"),e(window).on(p.resize,r).trigger(p.resize),H.on(E,function(e){O||("mousemove"!==e.type&&"touchstart"!==e.type||(N(),D=setTimeout(function(){(u.UA.Mobile||$.parent().find(".elfinder-quicklook-navbar:hover").length<1)&&$.fadeOut("slow",function(){H.show()})},3e3)),H.is(":visible")&&(L(),H.data("tm",setTimeout(function(){H.show()},3e3))))}).show().trigger("mousemove"),$.on("mouseenter mouseleave",function(e){O||("mouseenter"===e.type?N():H.trigger("mousemove"))})),u.zIndex&&n.css("z-index",u.zIndex+1),u.UA.Mobile?$.attr("style",G):$.attr("style",G).draggable(i?"destroy":{start:function(){O=!0,j=!0,H.show(),N()},stop:function(){O=!1,G=p.navbar.attr("style"),setTimeout(function(){j=!1},20)}}),e(this).toggleClass(w+"-fullscreen-off");var s=n;a.is(".ui-resizable")&&(s=s.add(a)),s.resizable(i?"enable":"disable").removeClass("ui-state-disabled"),n.trigger("viewchange")}}),_=function(){p.update(void 0,function(){var t=p.fm,n=t.selectedFiles(),i=n.length,a=(p.docked(),function(){var a=0;return e.each(n,function(e,t){var n=parseInt(t.ts);a>=0?n>a&&(a=n):a="unknown"}),{hash:n[0].hash+"/"+ +new Date,name:t.i18n("items")+": "+i,mime:"group",size:K,ts:a,files:e.map(n,function(e){return e.hash}),getSize:!0}});return i||(i=1,n=[t.cwd()]),1===i?n[0]:a()}())},N=function(){p.window.hasClass(x)&&(D&&clearTimeout(D),D=null,$.stop(!0,!0).css("display","block"),L())},L=function(){H.data("tm")&&clearTimeout(H.data("tm")),H.removeData("tm"),H.hide()},W=e('<div class="'+w+" "+w+'-prev"/>').on("click touchstart",function(e){return!j&&C(M),!1}),B=e('<div class="'+w+" "+w+'-next"/>').on("click touchstart",function(e){return!j&&C(U),!1}),$=e('<div class="elfinder-quicklook-navbar"/>').append(W).append(q).append(B).append('<div class="elfinder-quicklook-navbar-separator"/>').append(e('<div class="'+w+" "+w+'-close"/>').on("click touchstart",function(e){return!j&&p.window.trigger("close"),!1})),V=e('<span class="ui-front ui-icon elfinder-icon-close ui-icon-closethick"/>').on("mousedown",function(e){e.stopPropagation(),p.window.trigger("close")}),X=e('<span class="ui-front ui-icon elfinder-icon-minimize ui-icon-minusthick"/>').on("mousedown",function(e){e.stopPropagation(),p.docked()?p.window.trigger("navdockout"):p.window.trigger("navdockin")}),K='<span class="elfinder-info-spinner"/>'+u.i18n("calc"),G="",J=!0;this.evUpdate=y,(this.navbar=$)._show=N,this.resize="resize."+u.namespace,this.info=e("<div/>").addClass(k).append(P).append(R),this.autoPlay=function(){return!!p.opened()&&!!p.options[p.docked()?"dockAutoplay":"autoplay"]},this.preview=e('<div class="elfinder-quicklook-preview ui-helper-clearfix"/>').on("change",function(){N(),$.attr("style",G),p.docked()&&$.hide(),p.preview.attr("style","").removeClass("elfinder-overflow-auto"),p.info.attr("style","").hide(),P.removeAttr("class").attr("style",""),R.html("")}).on(y,function(t){var n,i,a=p.fm,r=(p.preview,t.file),s='<div class="elfinder-quicklook-info-data">{value}</div>',c=function(){var c=p.window.css("overflow","hidden");i=a.escape(r.i18||r.name),!r.read&&t.stopImmediatePropagation(),p.window.data("hash",r.hash),p.preview.off("changesize").trigger("change").children().remove(),F.html(i),W.css("visibility",""),B.css("visibility",""),r.hash===a.cwdId2Hash(o.find("[id]:not(.elfinder-cwd-parent):first").attr("id"))&&W.css("visibility","hidden"),r.hash===a.cwdId2Hash(o.find("[id]:last").attr("id"))&&B.css("visibility","hidden"),"directory"===r.mime?d=[r.hash]:"group"===r.mime&&r.getSize&&(d=r.files),R.html(s.replace(/\{value\}/,i)+s.replace(/\{value\}/,a.mime2kind(r))+s.replace(/\{value\}/,d.length?K:a.formatSize(r.size))+s.replace(/\{value\}/,a.i18n("modify")+": "+a.formatDate(r))),d.length&&(l=a.getSize(d).done(function(e){R.find("span.elfinder-info-spinner").parent().html(e.formated)}).fail(function(){R.find("span.elfinder-info-spinner").parent().html(a.i18n("unknown"))}).always(function(){l=null}),l._hash=r.hash),P.addClass("elfinder-cwd-icon ui-corner-all "+a.mime2class(r.mime)),r.icon&&P.css(a.getIconStyle(r,!0)),p.info.attr("class",k),r.csscls&&p.info.addClass(r.csscls),r.read&&(n=a.tmb(r))&&e("<img/>").hide().appendTo(p.preview).on("load",function(){P.addClass(n.className).css("background-image","url('"+n.url+"')"),e(this).remove()}).attr("src",n.url),p.info.delay(100).fadeIn(10),p.window.hasClass(x)&&H.trigger("mousemove"),c.css("overflow","")},d=[];r&&!Object.keys(r).length&&(r=a.cwd()),r&&l&&"pending"===l.state()&&l._hash!==r.hash&&l.reject(),r&&(t.forceUpdate||p.window.data("hash")!==r.hash)?c():t.stopImmediatePropagation()}),this.window=e('<div class="ui-front ui-helper-reset ui-widget elfinder-quicklook touch-punch" style="position:absolute"/>').hide().addClass(u.UA.Touch?"elfinder-touch":"").on("click",function(e){e.stopPropagation()}).append(e('<div class="elfinder-quicklook-titlebar"/>').append(F,e('<span class="elfinder-quicklook-titlebar-icon'+(S?" elfinder-platformWin":"")+'"/>').append(V,X)),this.preview,p.info.hide(),H.hide(),$).draggable({handle:"div.elfinder-quicklook-titlebar"}).on("open",function(t,n){var i=p.window,a=p.value,o=u.getUI("cwd"),s=function(e){b=e,p.update(1,p.value),p.change(),i.trigger("resize."+u.namespace)};J||b!==h?b===v&&(u.getUI("navdock").data("addNode")(c),s(g),p.preview.trigger("changesize"),u.storage("previewDocked","1")):(a&&a.hash!==r&&(o=e("#"+u.cwdHash2Id(a.hash.split("/",2)[0]))),G="",$.attr("style",""),b=f,o.trigger("scrolltoview"),L(),i.css(n||T(o)).show().animate(z(),550,function(){s(m),N()}))}).on("close",function(e,t){var n,i=p.window,a=p.preview.trigger("change"),r=(p.value,(i.data("hash")||"").split("/",2)[0]),s=function(e,n){b=e,n&&i.hide(),a.children().remove(),p.update(0,p.value),i.data("hash",""),t&&t.resolve()};p.opened()&&(l&&"pending"===l.state()&&l.reject(),p.docked()?(c=u.getUI("navdock").data("removeNode")(p.window.attr("id"),"detach"),s(v),u.storage("previewDocked","2")):(b=f,i.hasClass(x)&&q.click(),r&&(n=o.find("#"+r)).length?i.animate(T(n),500,function(){s(h,!0)}):s(h,!0)))}).on("navdockin",function(e,t){var n=p.window,a=u.getUI("navdock"),o=s||a.width(),r=t||{};J&&(r.init=!0),b=g,i=n.attr("style"),n.toggleClass("ui-front").removeClass("ui-widget").draggable("disable").resizable("disable").removeAttr("style").css({width:"100%",height:o,boxSizing:"border-box",paddingBottom:0,zIndex:"unset"}),$.hide(),X.toggleClass("ui-icon-plusthick ui-icon-minusthick elfinder-icon-full elfinder-icon-minimize"),a.data("addNode")(n,r),p.preview.trigger("changesize"),u.storage("previewDocked","1")}).on("navdockout",function(t){var n=p.window,a=u.getUI("navdock"),o=(e.Deferred(),T(p.preview));s=n.outerHeight(),a.data("removeNode")(n.attr("id"),u.getUI()),n.toggleClass("ui-front").addClass("ui-widget").draggable("enable").resizable("enable").attr("style",i),X.toggleClass("ui-icon-plusthick ui-icon-minusthick elfinder-icon-full elfinder-icon-minimize"),b=h,n.trigger("open",o),u.storage("previewDocked","0")}).on("resize."+u.namespace,function(){p.preview.trigger("changesize")}),this.alwaysEnabled=!0,this.value=null,this.handlers={select:function(e,t){d&&clearTimeout(d),e.data&&e.data.selected&&e.data.selected.length?p.opened()&&_():d=setTimeout(function(){p.opened()&&_()},0)},error:function(){p.window.is(":visible")&&p.window.trigger("close")},"searchshow searchhide":function(){this.opened()&&this.window.trigger("close")},navbarshow:function(){setTimeout(function(){p.docked()&&p.preview.trigger("changesize")},0)},destroy:function(){p.window.remove()}},this.shortcuts=[{pattern:"space"}],this.support={audio:{ogg:I('audio/ogg; codecs="vorbis"')||I('audio/ogg; codecs="flac"'),mp3:I("audio/mpeg;"),wav:I('audio/wav; codecs="1"'),m4a:I("audio/mp4;")||I("audio/x-m4a;")||I("audio/aac;"),flac:I("audio/flac;")},video:{ogg:I('video/ogg; codecs="theora"'),webm:I('video/webm; codecs="vp8, vorbis"')||I('video/webm; codecs="vp9"'),mp4:I('video/mp4; codecs="avc1.42E01E"')||I('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'),m3u8:I("application/x-mpegURL","video")||I("application/vnd.apple.mpegURL","video"),mpd:I("application/dash+xml","video")}},this.closed=function(){return b==h||b==v},this.opened=function(){return b==m||b==g},this.docked=function(){return b==g},this.init=function(){var i,l=this.options,c=this.window,d=this.preview;t=l.width>0?parseInt(l.width):450,n=l.height>0?parseInt(l.height):300,"auto"!==l.dockHeight&&(s=parseInt(l.dockHeight),s||(s=void 0)),u.one("load",function(){A=u.getUI("navdock").data("dockEnabled"),!A&&X.hide(),a=u.getUI(),o=u.getUI("cwd"),u.zIndex&&c.css("z-index",u.zIndex+1),c.appendTo(a),e(document).on("keydown."+u.namespace,function(t){t.keyCode==e.ui.keyCode.ESCAPE&&p.opened()&&!p.docked()&&c.trigger("close")}),c.resizable({handles:"se",minWidth:350,minHeight:120,resize:function(){d.trigger("changesize")}}),p.change(function(){p.opened()&&p.value&&(p.value.tmb&&1==p.value.tmb&&(p.value=Object.assign({},u.file(p.value.hash))),d.trigger(e.Event(y,{file:p.value})))}),d.on(y,function(e){var t,n,a;if(t=e.file){if(n=t.hash,a=u.searchStatus.mixed&&u.searchStatus.state>1,"directory"!==t.mime)if(parseInt(t.size)||t.mime.match(l.mimeRegexNotEmptyCheck)){if(p.dispInlineRegex=i,a||u.optionsByHashes[n])try{p.dispInlineRegex=new RegExp(u.option("dispInlineRegex",n),"i")}catch(e){try{p.dispInlineRegex=new RegExp(u.isRoot(t)?u.options.dispInlineRegex:u.option("dispInlineRegex",t.phash),"i")}catch(e){p.dispInlineRegex=/^$/}}}else e.stopImmediatePropagation();else p.dispInlineRegex=/^$/;p.info.show()}else e.stopImmediatePropagation()}),e.each(u.commands.quicklook.plugins||[],function(e,t){"function"==typeof t&&new t(p)})}).one("open",function(){var e,t=Number(u.storage("previewDocked")||l.docked);A&&t>=1&&(e=p.window,p.exec(),e.trigger("navdockin",{init:!0}),2===t?e.trigger("close"):(p.update(void 0,u.cwd()),p.change())),J=!1}).bind("open",function(){r=u.cwd().hash,p.value=u.cwd();try{i=new RegExp(u.option("dispInlineRegex"),"i")}catch(e){i=/^$/}}).bind("change",function(t){t.data&&t.data.changed&&p.opened()&&e.each(t.data.changed,function(){if(p.window.data("hash")===this.hash)return p.window.data("hash",null),p.preview.trigger(y),!1})}).bind("navdockresizestart navdockresizestop",function(e){H["navdockresizestart"===e.type?"show":"hide"]()})},this.getstate=function(){return p.opened()?1:0},this.exec=function(){return p.closed()&&_(),p.enabled()&&p.window.trigger(p.opened()?"close":"open"),e.Deferred().resolve()},this.hideinfo=function(){this.info.stop(!0,!0).hide()}}).prototype={forceLoad:!0},i.prototype.commands.quicklook.plugins=[function(t){var n,i,a=["image/jpeg","image/png","image/gif","image/svg+xml","image/x-ms-bmp"],o=t.preview;n=new Image,n.onload=n.onerror=function(){2==n.height&&a.push("image/webp")},n.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",e.each(navigator.mimeTypes,function(t,n){var i=n.type;0===i.indexOf("image/")&&e.inArray(i,a)&&a.push(i)}),o.on(t.evUpdate,function(n){var r,s,l,c=t.fm,d=n.file,p=!1,u=null,h=function(e){var t=c.file(d.hash);t.width=e[0],t.height=e[1]},f=function(){var e,t,n,i,a;u&&u.state&&"pending"===u.state()&&u.reject(),p||(p=!0,e=s.get(0),t=d.width&&d.height?{w:d.width,h:d.height}:e.naturalWidth?null:{w:s.width(),h:s.height()},t&&s.removeAttr("width").removeAttr("height"),n=d.width||e.naturalWidth||e.width||s.width(),i=d.height||e.naturalHeight||e.height||s.height(),d.width&&d.height||h([n,i]),t&&s.width(t.w).height(t.h),a=(n/i).toFixed(2),o.on("changesize",function(){var e,t,n=parseInt(o.width()),i=parseInt(o.height());a<(n/i).toFixed(2)?(t=i,e=Math.floor(t*a)):(e=n,t=Math.floor(e/a)),s.width(e).height(t).css("margin-top",t<i?Math.floor((i-t)/2):0)}).trigger("changesize"),s.fadeIn(100))},m=function(){l.remove(),t.hideinfo()};i||(i=c.arrayFlip(a)),i[d.mime]&&t.dispInlineRegex.test(d.mime)&&(n.stopImmediatePropagation(),
l=e('<div class="elfinder-quicklook-info-data"> '+c.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),r=c.openUrl(d.hash),s=e("<img/>").hide().appendTo(o).on("load",function(){m(),f()}).on("error",function(){l.remove()}).attr("src",r),d.width&&d.height?f():d.size>(t.options.getDimThreshold||0)&&(u=c.request({data:{cmd:"dim",target:d.hash},preventDefault:!0}).done(function(e){if(e.dim){var t=e.dim.split("x");d.width=t[0],d.height=t[1],h(t),f()}})))})},function(t){var n,i=t.fm,a=i.arrayFlip(["image/vnd.adobe.photoshop","image/x-photoshop"]),o=t.preview,r=function(e,a,r){try{i.replaceXhrSend(),n.fromURL(e).then(function(e){var n;a.attr("src",e.image.toBase64()),setTimeout(function(){n=(a.width()/a.height()).toFixed(2),o.on("changesize",function(){var e,t,i=parseInt(o.width()),r=parseInt(o.height());n<(i/r).toFixed(2)?(t=r,e=Math.floor(t*n)):(e=i,t=Math.floor(e/n)),a.width(e).height(t).css("margin-top",t<r?Math.floor((r-t)/2):0)}).trigger("changesize"),r.remove(),t.hideinfo(),a.fadeIn(100)},1)},function(){r.remove(),a.remove()}),i.restoreXhrSend()}catch(s){i.restoreXhrSend(),r.remove(),a.remove()}};o.on(t.evUpdate,function(s){var l,c,d,p,u,h=s.file;a[h.mime]&&i.options.cdns.psd&&!i.UA.ltIE10&&t.dispInlineRegex.test(h.mime)&&(s.stopImmediatePropagation(),d=e('<div class="elfinder-quicklook-info-data"> '+i.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),l=i.openUrl(h.hash),i.isSameOrigin(l)||(l=i.openUrl(h.hash,!0)),c=e("<img/>").hide().appendTo(o),n?r(l,c,d):(p=window.define,u=window.require,window.require=null,window.define=null,i.loadScript([i.options.cdns.psd],function(){n=require("psd"),p?window.define=p:delete window.define,u?window.require=u:delete window.require,r(l,c,d)})))})},function(t){var n=t.fm,i=n.arrayFlip(["text/html","application/xhtml+xml"]),a=t.preview;a.on(t.evUpdate,function(o){var r,s,l=o.file;i[l.mime]&&t.dispInlineRegex.test(l.mime)&&(!t.options.getSizeMax||l.size<=t.options.getSizeMax)&&(o.stopImmediatePropagation(),s=e('<div class="elfinder-quicklook-info-data"> '+n.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),a.one("change",function(){"pending"==r.state()&&r.reject()}).addClass("elfinder-overflow-auto"),r=n.request({data:{cmd:"get",target:l.hash,conv:1,_t:l.ts},options:{type:"get",cache:!0},preventDefault:!0}).done(function(n){t.hideinfo();var i=e('<iframe class="elfinder-quicklook-preview-html"/>').appendTo(a)[0].contentWindow.document;i.open(),i.write(n.content),i.close()}).always(function(){s.remove()}))})},function(t){var n=t.fm,i=n.arrayFlip(["text/x-markdown"]),a=t.preview,o=null,r=function(n,i){t.hideinfo();var r=e('<iframe class="elfinder-quicklook-preview-html"/>').appendTo(a)[0].contentWindow.document;r.open(),r.write(o(n.content)),r.close(),i.remove()},s=function(e){o=!1,e.remove()};a.on(t.evUpdate,function(l){var c,d,p=l.file;i[p.mime]&&n.options.cdns.marked&&o!==!1&&t.dispInlineRegex.test(p.mime)&&(!t.options.getSizeMax||p.size<=t.options.getSizeMax)&&(l.stopImmediatePropagation(),d=e('<div class="elfinder-quicklook-info-data"> '+n.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),a.one("change",function(){"pending"==c.state()&&c.reject()}).addClass("elfinder-overflow-auto"),c=n.request({data:{cmd:"get",target:p.hash,conv:1,_t:p.ts},options:{type:"get",cache:!0},preventDefault:!0}).done(function(e){o||window.marked?(o||(o=window.marked),r(e,d)):n.loadScript([n.options.cdns.marked],function(t){o=t||window.marked||!1,delete window.marked,o?r(e,d):s(d)},{tryRequire:!0,error:function(){s(d)}})}).fail(function(){s(d)}))})},function(t){var n=t.fm,i=t.preview,a=parseInt(t.options.textMaxlen)||2e3,o=function(){n.options.cdns.prettify?(n.loadScript([n.options.cdns.prettify+(n.options.cdns.prettify.match(/\?/)?"&":"?")+"autorun=false"]),o=function(){return!0}):o=function(){return!1}},r=function(e,t){o()&&("undefined"==typeof window.PR&&t--?setTimeout(function(){r(e,t)},100):"object"==typeof window.PR?(e.css("cursor","wait"),setTimeout(function(){PR.prettyPrint&&PR.prettyPrint(null,e.get(0)),e.css("cursor","")},0)):o=function(){return!1})};i.on(t.evUpdate,function(s){var l,c,d=s.file;d.mime;n.mimeIsText(d.mime)&&(!t.options.getSizeMax||d.size<=t.options.getSizeMax)&&(s.stopImmediatePropagation(),"undefined"==typeof window.PR&&o(),c=e('<div class="elfinder-quicklook-info-data"> '+n.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),i.one("change",function(){"pending"==l.state()&&l.reject()}),l=n.request({data:{cmd:"get",target:d.hash,conv:1,_t:d.ts},options:{type:"get",cache:!0},preventDefault:!0}).done(function(o){var s,l,c,p,u=new RegExp("^(data:"+d.mime.replace(/([.+])/g,"\\$1")+";base64,)","i"),h=o.content;t.hideinfo(),window.atob&&(p=h.match(u))&&(h=atob(h.substr(p[1].length))),l=h.length-a,l>100?s=h.substr(0,a)+"...":l=0,c=e('<div class="elfinder-quicklook-preview-text-wrapper"><pre class="elfinder-quicklook-preview-text prettyprint"></pre></div>'),l&&c.append(e('<div class="elfinder-quicklook-preview-charsleft"><hr/><span>'+n.i18n("charsLeft",n.toLocaleString(l))+"</span></div>").on("click",function(){var t=c.scrollTop();e(this).remove(),c.children("pre").removeClass("prettyprinted").text(h).scrollTop(t),r(c,100)})),c.children("pre").text(s||h),c.on("touchstart",function(t){e(this)["scroll"+("ltr"===n.direction?"Right":"Left")]()>5&&(t.originalEvent._preventSwipeX=!0)}).appendTo(i),r(c,100)}).always(function(){c.remove()}))})},function(t){var n=t.fm,i="application/pdf",a=t.preview,o=!1;n.UA.Safari&&"mac"===n.OS&&!n.UA.iOS||n.UA.IE?o=!0:e.each(navigator.plugins,function(t,n){e.each(n,function(e,t){if(t.type===i)return!(o=!0)})}),o&&a.on(t.evUpdate,function(o){var r,s=o.file;s.mime===i&&t.dispInlineRegex.test(s.mime)&&(o.stopImmediatePropagation(),t.hideinfo(),r=e('<object class="elfinder-quicklook-preview-pdf" data="'+n.openUrl(s.hash)+'" type="application/pdf" />').appendTo(a))})},function(t){var n=t.fm,i="application/x-shockwave-flash",a=t.preview,o=!1;e.each(navigator.plugins,function(t,n){e.each(n,function(e,t){if(t.type===i)return!(o=!0)})}),o&&a.on(t.evUpdate,function(o){var r,s=o.file;s.mime===i&&t.dispInlineRegex.test(s.mime)&&(o.stopImmediatePropagation(),t.hideinfo(),r=e('<embed class="elfinder-quicklook-preview-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+n.openUrl(s.hash)+'" quality="high" type="application/x-shockwave-flash" wmode="transparent" />').appendTo(a))})},function(t){var n,i=t.preview,a={"audio/mpeg":"mp3","audio/mpeg3":"mp3","audio/mp3":"mp3","audio/x-mpeg3":"mp3","audio/x-mp3":"mp3","audio/x-wav":"wav","audio/wav":"wav","audio/x-m4a":"m4a","audio/aac":"m4a","audio/mp4":"m4a","audio/x-mp4":"m4a","audio/ogg":"ogg","audio/flac":"flac","audio/x-flac":"flac"},o=t.window,r=t.navbar;i.on(t.evUpdate,function(s){var l=s.file,c=a[l.mime],d=t.autoPlay(),p=function(){r.css("bottom",o.hasClass("elfinder-quicklook-fullscreen")?"50px":"")};t.dispInlineRegex.test(l.mime)&&t.support.audio[c]&&(s.stopImmediatePropagation(),n=e('<audio class="elfinder-quicklook-preview-audio" controls preload="auto" autobuffer><source src="'+t.fm.openUrl(l.hash)+'" /></audio>').on("change",function(e){e.stopPropagation()}).appendTo(i),d&&n[0].play(),o.on("viewchange.audio",p),p())}).on("change",function(){if(n&&n.parent().length){var e=n[0];o.off("viewchange.audio");try{e.pause(),e.src="",e.load()}catch(t){}n.remove(),n=null}})},function(t){var n,i,a,o=t.fm,r=t.preview,s={"video/mp4":"mp4","video/x-m4v":"mp4","video/quicktime":"mp4","video/ogg":"ogg","application/ogg":"ogg","video/webm":"webm","application/vnd.apple.mpegurl":"m3u8","application/x-mpegurl":"m3u8","application/dash+xml":"mpd"},l=t.window,c=t.navbar;r.on(t.evUpdate,function(d){var p=d.file,u=t.autoPlay(),h=s[p.mime.toLowerCase()],f=function(){o.UA.iOS?l.hasClass("elfinder-quicklook-fullscreen")?(r.css("height","-webkit-calc(100% - 50px)"),c._show()):r.css("height",""):c.css("bottom",l.hasClass("elfinder-quicklook-fullscreen")?"50px":"")},m=function(i){i=i||{},t.hideinfo(),n=e('<video class="elfinder-quicklook-preview-video" controls preload="auto" autobuffer playsinline></video>').on("change",function(e){e.stopPropagation()}),i.src&&n.append('<source src="'+i.src+'" type="'+p.mime+'"/><source src="'+i.src+'"/>'),n.appendTo(r),l.on("viewchange.video",f),f()},g=function(){var e;m(),e=new i,e.loadSource(o.openUrl(p.hash)),e.attachMedia(n[0]),u&&e.on(i.Events.MANIFEST_PARSED,function(){n[0].play()})},v=function(){var e;m(),e=a.MediaPlayer().create(),e.initialize(n[0],o.openUrl(p.hash),u)};!t.dispInlineRegex.test(p.mime)||("m3u8"!==h&&"mpd"!==h||o.UA.ltIE10)&&!t.support.video[h]||(t.support.video[h]&&("m3u8"!==h||o.UA.Safari)?(d.stopImmediatePropagation(),m({src:o.openUrl(p.hash)}),u&&n[0].play()):o.options.cdns.hls&&"m3u8"===h?(d.stopImmediatePropagation(),i?g():o.loadScript([o.options.cdns.hls],function(e){i=e||window.Hls,g()},{tryRequire:!0})):o.options.cdns.dash&&"mpd"===h&&(d.stopImmediatePropagation(),a?v():o.loadScript([o.options.cdns.dash],function(){a=window.dashjs,v()},{tryRequire:!0})))}).on("change",function(){if(n&&n.parent().length){var e=n[0];l.off("viewchange.video");try{e.pause(),e.src="",e.load()}catch(t){}n.remove(),n=null}})},function(t){var n,i=t.preview,a=[],o=t.window,r=t.navbar;e.each(navigator.plugins,function(t,n){e.each(n,function(e,t){(0===t.type.indexOf("audio/")||0===t.type.indexOf("video/"))&&a.push(t.type)})}),a=t.fm.arrayFlip(a),i.on(t.evUpdate,function(s){var l,c=s.file,d=c.mime,p=function(){r.css("bottom",o.hasClass("elfinder-quicklook-fullscreen")?"50px":"")};a[c.mime]&&t.dispInlineRegex.test(c.mime)&&(s.stopImmediatePropagation(),(l=0===d.indexOf("video/"))&&t.hideinfo(),n=e('<embed src="'+t.fm.openUrl(c.hash)+'" type="'+d+'" class="elfinder-quicklook-preview-'+(l?"video":"audio")+'"/>').appendTo(i),o.on("viewchange.embed",p),p())}).on("change",function(){n&&n.parent().length&&(o.off("viewchange.embed"),n.remove(),n=null)})},function(t){var n,i=t.fm,a=i.arrayFlip(["application/zip","application/x-gzip","application/x-tar"]),o=t.preview,r=function(){var e,t,n,a=[];for(this.Y(),n=this.i,e=0,t=n.length;e<t;++e)a[e]=n[e].filename+(n[e].J?" ("+i.formatSize(n[e].J)+")":"");return a},s=function(e){for(var t,n,a,o,r,s=[],l=e.length,c=0,d=function(e){return String.fromCharCode.apply(null,e).replace(/\0+$/,"")};c<l&&0!==e[c];)t=e.subarray(c,c+512),n=d(t.subarray(0,100)),(a=d(t.subarray(345,500)))&&(n=a+n),o=parseInt(d(t.subarray(124,136)),8),r=512*Math.ceil(o/512),"././@LongLink"===n&&(n=d(e.subarray(c+512,c+512+r))),"pax_global_header"!==n&&s.push(n+(o?" ("+i.formatSize(o)+")":"")),c=c+512+r;return s};window.Uint8Array&&window.DataView&&i.options.cdns.zlibUnzip&&i.options.cdns.zlibGunzip&&o.on(t.evUpdate,function(l){var c=l.file,d="application/x-tar"===c.mime;if(a[c.mime]&&(d||("undefined"==typeof n||n)&&("application/zip"===c.mime||"application/x-gzip"===c.mime))){var p,u,h,f,m=function(){h=i.openUrl(c.hash),i.isSameOrigin(h)||(h=i.openUrl(c.hash,!0)),p=i.request({data:{cmd:"get"},options:{url:h,type:"get",cache:!0,dataType:"binary",responseType:"arraybuffer",processData:!1}}).fail(function(){u.remove()}).done(function(e){var t,a;try{"application/zip"===c.mime?(t=new n.Unzip(new Uint8Array(e)),a=r.call(t)):"application/x-gzip"===c.mime?(t=new n.Gunzip(new Uint8Array(e)),a=s(t.decompress())):"application/x-tar"===c.mime&&(a=s(new Uint8Array(e))),g(a)}catch(o){u.remove(),i.debug("error",o)}})},g=function(n){var a,r;n&&n.length&&(n=e.map(n,function(e){return i.decodeRawString(e)}),n.sort(),u.remove(),a="<strong>"+i.escape(c.mime)+"</strong> ("+i.formatSize(c.size)+")<hr/>",r=e('<div class="elfinder-quicklook-preview-archive-wrapper">'+a+'<pre class="elfinder-quicklook-preview-text">'+i.escape(n.join("\n"))+"</pre></div>").on("touchstart",function(t){e(this)["scroll"+("ltr"===i.direction?"Right":"Left")]()>5&&(t.originalEvent._preventSwipeX=!0)}).appendTo(o),t.hideinfo())};l.stopImmediatePropagation(),u=e('<div class="elfinder-quicklook-info-data"> '+i.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),o.one("change",function(){"pending"===p.state()&&p.reject(),u.remove()}),n?m():(window.Zlib&&(f=window.Zlib,delete window.Zlib),i.loadScript([i.options.cdns.zlibUnzip,i.options.cdns.zlibGunzip],function(){window.Zlib&&(n=window.Zlib)?(f?window.Zlib=f:delete window.Zlib,m()):error()}))}})},function(t){var n,i=t.fm,a=i.arrayFlip(["application/x-rar"]),o=t.preview;window.DataView&&o.on(t.evUpdate,function(r){var s=r.file;if(a[s.mime]&&i.options.cdns.rar&&n!==!1){var l,c,d,p,u,h=function(a){if(p)return void l.remove();try{d=n({file:a,type:2,xhrHeaders:i.customHeaders,xhrFields:i.xhrFields},function(n){l.remove();var a,r,c=[];return p||n?void(n&&i.debug("error",n)):(e.each(d.entries,function(){c.push(this.path+(this.size?" ("+i.formatSize(this.size)+")":""))}),void(c.length&&(c=e.map(c,function(e){return i.decodeRawString(e)}),c.sort(),a="<strong>"+i.escape(s.mime)+"</strong> ("+i.formatSize(s.size)+")<hr/>",r=e('<div class="elfinder-quicklook-preview-archive-wrapper">'+a+'<pre class="elfinder-quicklook-preview-text">'+i.escape(c.join("\n"))+"</pre></div>").on("touchstart",function(t){e(this)["scroll"+("ltr"===i.direction?"Right":"Left")]()>5&&(t.originalEvent._preventSwipeX=!0)}).appendTo(o),t.hideinfo())))})}catch(r){l.remove()}},f=function(){n=!1,l.remove()};r.stopImmediatePropagation(),l=e('<div class="elfinder-quicklook-info-data"> '+i.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),o.one("change",function(){d&&(d.abort=!0),l.remove(),p=!0}),c=i.openUrl(s.hash),i.isSameOrigin(c)||(c=i.openUrl(s.hash,!0)),n?h(c):(window.RarArchive&&(u=window.RarArchive,delete window.RarArchive),i.loadScript([i.options.cdns.rar],function(){i.hasRequire?require(["rar"],function(e){n=e,h(c)},f):(n=window.RarArchive)?(u?window.RarArchive=u:delete window.RarArchive,h(c)):f()},{tryRequire:!0,error:f}))}})},function(t){var n,i=t.fm,a=i.arrayFlip(t.options.googleDocsMimes||[]),o=t.preview,r=(t.window,t.navbar);o.on(t.evUpdate,function(s){var l=s.file;if(a[l.mime]){var c,d=t.window,p=function(){r.css("bottom",d.hasClass("elfinder-quicklook-fullscreen")?"56px":"")};"1"==l.url&&(o.hide(),e('<div class="elfinder-quicklook-info-data"><button class="elfinder-info-button">'+i.i18n("getLink")+"</button></div>").appendTo(t.info.find(".elfinder-quicklook-info")).on("click",function(){var n=e(this);n.html('<span class="elfinder-info-spinner">'),i.request({data:{cmd:"url",target:l.hash},preventDefault:!0}).always(function(){n.html("")}).done(function(e){var n=i.file(l.hash);l.url=n.url=e.url||"",l.url&&o.trigger({type:t.evUpdate,file:l,forceUpdate:!0})})})),""!==l.url&&"1"!=l.url&&(s.stopImmediatePropagation(),o.one("change",function(){d.off("viewchange.googledocs"),c.remove(),n.off("load").remove(),n=null}).addClass("elfinder-overflow-auto"),c=e('<div class="elfinder-quicklook-info-data"> '+i.i18n("nowLoading")+'<span class="elfinder-info-spinner"></div>').appendTo(t.info.find(".elfinder-quicklook-info")),n=e('<iframe class="elfinder-quicklook-preview-iframe"/>').css("background-color","transparent").appendTo(o).on("load",function(){t.hideinfo(),c.remove(),t.preview.after(t.info),e(this).css("background-color","#fff").show()}).on("error",function(){c.remove(),t.preview.after(t.info)}).attr("src","//docs.google.com/gview?embedded=true&url="+encodeURIComponent(i.convAbsUrl(i.url(l.hash)))),d.on("viewchange.googledocs",p),p(),t.info.after(t.preview))}})}],(i.prototype.commands.reload=function(){var t=this,n=!1;this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{pattern:"ctrl+shift+r f5"}],this.getstate=function(){return 0},this.init=function(){this.fm.bind("search searchend",function(){n="search"==this.type})},this.fm.bind("contextmenu",function(){var n=t.fm;n.options.sync>=1e3&&(t.extra={icon:"accept",node:e("<span/>").attr({title:n.i18n("autoSync")}).on("click touchstart",function(t){"touchstart"===t.type&&t.originalEvent.touches.length>1||(t.stopPropagation(),t.preventDefault(),e(this).parent().toggleClass("ui-state-disabled",n.options.syncStart).parent().removeClass("ui-state-hover"),n.options.syncStart=!n.options.syncStart,n.autoSync(n.options.syncStart?null:"stop"))}).on("ready",function(){e(this).parent().toggleClass("ui-state-disabled",!n.options.syncStart).css("pointer-events","auto")})})}),this.exec=function(){var t=this.fm;if(!n){var i=t.sync(),a=setTimeout(function(){t.notify({type:"reload",cnt:1,hideCnt:!0}),i.always(function(){t.notify({type:"reload",cnt:-1})})},t.notifyDelay);return i.always(function(){clearTimeout(a),t.trigger("reload")})}e("div.elfinder-toolbar > div."+t.res("class","searchbtn")+" > span.ui-icon-search").click()}}).prototype={forceLoad:!0},i.prototype.commands.rename=function(){this.alwaysEnabled=!0;var t=this,n=t.fm,i=function(e,t,i,a){var o,r=t?t.length:0,s=t?[i.hash].concat(t):[i.hash],l={};if(n.lockfiles({files:s}),n.isRoot(i)){if((o=n.storage("rootNames"))||(o={}),""===a){if(!o[i.hash])return e&&e.reject(),void n.unlockfiles({files:s}).trigger("selectfiles",{files:s});i.name=i._name,i.i18=i._i18,delete o[i.hash],delete i._name,delete i._i18}else"undefined"==typeof i._name&&(i._name=i.name,i._i18=i.i18),i.name=o[i.hash]=a,delete i.i18;return n.storage("rootNames",o),l={changed:[i]},n.updateCache(l),n.change(l),e&&e.resolve(l),void n.unlockfiles({files:s}).trigger("selectfiles",{files:s})}l={cmd:"rename",name:a,target:i.hash},r>0&&(l.targets=t,a.match(/\*/)&&(l.q=a)),n.request({data:l,notify:{type:"rename",cnt:r},navigate:{}}).fail(function(t){e&&e.reject(),t&&Array.isArray(t)&&"errRename"===t[0]||n.sync()}).done(function(t){t.added&&t.added.length&&1===r&&(t.undo={cmd:"rename",callback:function(){return n.request({data:{cmd:"rename",target:t.added[0].hash,name:i.name},notify:{type:"undo",cnt:1}})}},t.redo={cmd:"rename",callback:function(){return n.request({data:{cmd:"rename",target:i.hash,name:a},notify:{type:"rename",cnt:1}})}}),e&&e.resolve(t),n.cwd().hash===i.hash&&n.exec("open",t.added[0].hash)}).always(function(){n.unlockfiles({files:s}).trigger("selectfiles",{files:s})})},a=function(e,t){var i,a,o,r=t||n.selected(),s=n.splitFileExtention(e),l=n.file(r[0]),c=n.file(r[1]);return i=s[1]?"."+s[1]:"",s[1]&&"*"===s[0]?(a='"'+n.splitFileExtention(l.name)[0]+i+'", ',a+='"'+n.splitFileExtention(c.name)[0]+i+'"'):s[0].length>1&&("*"===s[0].substr(-1)?(o=s[0].substr(0,s[0].length-1),a='"'+o+l.name+'", ',a+='"'+o+c.name+'"'):"*"===s[0].substr(0,1)&&(o=s[0].substr(1),a='"'+n.splitFileExtention(l.name)[0]+o+i+'", ',a+='"'+n.splitFileExtention(c.name)[0]+o+i+'"')),a||(a='"'+s[0]+"1"+i+'", "'+s[0]+"2"+i+'"'),r.length>2&&(a+=" ..."),a},o=function(){var t,o=n.selected(),r='<input name="type" type="radio" class="elfinder-tabstop">',s=function(t,i){return e('<label class="elfinder-rename-batch-checks">'+n.i18n(i)+"</label>").prepend(t)},l=e('<input type="text" class="ui-corner-all elfinder-tabstop">'),c=e(r),d=e(r),p=e(r),u=e(r),h=e("<div/>").append(s(c,"plusNumber"),s(d,"asPrefix"),s(p,"asSuffix"),s(u,"changeExtention")),f=e('<div class="elfinder-rename-batch-preview"/>'),m=e('<div class="elfinder-rename-batch"/>').append(e('<div class="elfinder-rename-batch-name"/>').append(l),e('<div class="elfinder-rename-batch-type"/>').append(h),f),g={title:n.i18n("batchRename"),modal:!0,destroyOnClose:!0,width:Math.min(380,n.getUI().width()-20),buttons:{},open:function(){l.on("input",b).trigger("focus")}},v=function(){var e=l.val(),t=n.splitFileExtention(n.file(o[0]).name)[1];return(""!==e||c.is(":checked"))&&(d.is(":checked")?e+="*":p.is(":checked")?e="*"+e+"."+t:u.is(":checked")?e="*."+e:t&&(e+="."+t)),e},b=function(){var e=v();""!==e?f.html(n.i18n(["renameMultiple",o.length,a(e)])):f.empty()},y=h.find("input:radio").on("change",b);g.buttons[n.i18n("btnApply")]=function(){var e,a,r=v();""!==r&&(t.elfinderdialog("close"),a=o,e=n.file(a.shift()),i(void 0,a,e,r))},g.buttons[n.i18n("btnCancel")]=function(){t.elfinderdialog("close")},e.fn.checkboxradio?y.checkboxradio({create:function(e,t){this===c.get(0)&&c.prop("checked",!0).change()}}):h.buttonset({create:function(e,t){c.prop("checked",!0).change()}}),t=n.dialog(m,g)};this.noChangeDirOnRemovedCwd=!0,this.shortcuts=[{pattern:"f2"+("mac"==n.OS?" enter":"")},{pattern:"shift+f2",description:"batchRename",callback:function(){n.selected().length>1&&o()}}],this.getstate=function(i){var a,r,s,l,c,d,p=this.files(i),u=p.length;return u?(u>1&&p[0].phash&&(a=p[0].phash,r=n.splitFileExtention(p[0].name)[1].toLowerCase(),s=p[0].mime),1===u&&(d=n.isRoot(p[0])),c=1===u&&(d||!p[0].locked)||n.api>2.103&&u===e.grep(p,function(e){return!(l||e.locked||e.phash!==a||n.isRoot(e)||s!==e.mime&&r!==n.splitFileExtention(e.name)[1].toLowerCase())||(l&&(l=!0),!1)}).length?0:-1,!d&&0===c&&n.option("disabledFlip",p[0].hash).rename&&(c=-1),c!==-1&&u>1?t.extra={icon:"preference",node:e("<span/>").attr({title:n.i18n("batchRename")}).on("click touchstart",function(e){"touchstart"===e.type&&e.originalEvent.touches.length>1||(e.stopPropagation(),e.preventDefault(),n.getUI().trigger("click"),o())})}:delete t.extra,c):-1},this.exec=function(t,o){var r,s=(n.getUI("cwd"),t||!!n.selected().length&&n.selected()||[n.cwd().hash]),l=s.length,c=n.file(s.shift()),d=".elfinder-cwd-filename",p=o||{},u=n.cwd().hash==c.hash,h="navbar"===p._currentType||"files"===p._currentType?p._currentType:u?"navbar":"files",f="files"!==h,m=e("#"+n[f?"navHash2Id":"cwdHash2Id"](c.hash)),g=!f&&"list"!=n.storage("view"),v=function(){setTimeout(function(){x&&x.trigger("blur")},50)},b=function(){z.is(":hidden")||z.elfinderoverlay("hide").off("click",I),T.removeClass("ui-front").css("position","").off("unselect."+n.namespace,v),g?C&&C.css("max-height",""):f||T.css("width","").parent("td").css("overflow","")},y=e.Deferred().fail(function(e){var t=x.parent(),i=n.escape(c.i18||c.name);x.off(),g&&(i=i.replace(/([_.])/g,"&#8203;$1")),setTimeout(function(){f?x.replaceWith(i):t.length?(x.remove(),t.html(i)):m.find(d).html(i)},0),e&&n.error(e)}).always(function(){b(),n.unbind("resize",S),n.enable()}),w=function(t){var o=e.trim(x.val()),r=(n.splitFileExtention(o),!0),d=function(){x.off(),b(),f?x.replaceWith(n.escape(o)):C.html(n.escape(o)),i(y,s,c,o)};if(z.is(":hidden")||T.css("z-index",""),""===o){if(!n.isRoot(c))return I();f?x.replaceWith(n.escape(c.name)):C.html(n.escape(c.name))}if(!A&&T.length){if(x.off("blur"),1===l&&o===c.name)return y.reject();if(n.options.validName&&n.options.validName.test)try{r=n.options.validName.test(o)}catch(t){r=!1}if("."===o||".."===o||!r)return A=!0,n.error("directory"===c.mime?"errInvDirname":"errInvName",{modal:!0,close:function(){setTimeout(k,120)}}),!1;if(1===l&&n.fileByName(o,c.phash))return A=!0,n.error(["errExists",o],{modal:!0,close:function(){setTimeout(k,120)}}),!1;1===l?d():(n.confirm({title:"cmdrename",text:["renameMultiple",l,a(o,[c.hash].concat(s))],accept:{label:"btnYes",callback:d},cancel:{label:"btnCancel",callback:function(){setTimeout(function(){A=!0,k()},120)}}}),setTimeout(function(){n.trigger("unselectfiles",{files:n.selected()}).trigger("selectfiles",{files:[c.hash].concat(s)})},120))}},x=e(g?"<textarea/>":'<input type="text"/>').on("keyup text",function(){g?(this.style.height="1px",this.style.height=this.scrollHeight+"px"):r&&(this.style.width=r+"px",this.scrollWidth>r&&(this.style.width=this.scrollWidth+10+"px"))}).on("keydown",function(t){t.stopImmediatePropagation(),t.keyCode==e.ui.keyCode.ESCAPE?y.reject():t.keyCode==e.ui.keyCode.ENTER&&(t.preventDefault(),x.trigger("blur"))}).on("mousedown click dblclick",function(e){e.stopPropagation(),"dblclick"===e.type&&e.preventDefault()}).on("blur",w),k=function(){var e=n.splitFileExtention(x.val())[0];A||!n.UA.Mobile||n.UA.iOS||(z.on("click",I).elfinderoverlay("show"),T.css("z-index",z.css("z-index")+1)),!n.enabled()&&n.enable(),A&&(A=!1,x.on("blur",w)),x.trigger("focus").trigger("select"),x[0].setSelectionRange&&x[0].setSelectionRange(0,e.length)},C=f?m.contents().filter(function(){return 3==this.nodeType&&e(this).parent().attr("id")===n.navHash2Id(c.hash)}):m.find(d),T=C.parent(),z=n.getUI("overlay"),I=function(e){z.is(":hidden")||T.css("z-index",""),A||(y.reject(),e&&(e.stopPropagation(),e.preventDefault()))},S=function(){m.trigger("scrolltoview",{blink:!1})},A=!1;return n.UA.iOS&&x.css("font-size","16px"),T.addClass("ui-front").css("position","relative").on("unselect."+n.namespace,v),n.bind("resize",S),f?C.replaceWith(x.val(c.name)):(g?C.css("max-height","none"):f||(r=T.width(),T.width(r-15).parent("td").css("overflow","visible")),C.empty().append(x.val(c.name))),l>1&&n.api<=2.103?y.reject():c&&C.length?c.locked&&!n.isRoot(c)?y.reject(["errLocked",c.name]):(n.one("select",function(){x.parent().length&&c&&e.inArray(c.hash,n.selected())===-1&&x.trigger("blur")}),x.trigger("keyup"),k(),y):y.reject("errCmdParams",this.title)},n.remove(function(t){var i;t.data&&t.data.removed&&(i=n.storage("rootNames"))&&(e.each(t.data.removed,function(e,t){i[t]&&delete i[t]}),n.storage("rootNames",i))})},i.prototype.commands.resize=function(){"use strict";var t=0,n=function(t,n,i){var a=[{x:t/2,y:n/2},{x:-t/2,y:n/2},{x:-t/2,y:-n/2},{x:t/2,y:-n/2}],o=[],r={x:Number.MAX_VALUE,y:Number.MAX_VALUE},s={x:Number.MIN_VALUE,y:Number.MIN_VALUE};return e.each(a,function(e,t){o.push({x:t.x*Math.cos(i)-t.y*Math.sin(i),y:t.x*Math.sin(i)+t.y*Math.cos(i)})}),e.each(o,function(e,t){r.x=Math.min(r.x,t.x),r.y=Math.min(r.y,t.y),s.x=Math.max(s.x,t.x),s.y=Math.max(s.y,t.y)}),{width:s.x-r.x,height:s.y-r.y}};this.updateOnSelect=!1,this.getstate=function(){var e=this.fm.selectedFiles();return 1==e.length&&e[0].read&&e[0].write&&e[0].mime.indexOf("image/")!==-1?0:-1},this.resizeRequest=function(t,n,i){var a=this.fm,o=n||a.file(t.target),r=(o?o.tmb:null,a.isCommandEnabled("resize",t.target));if(r&&(!o||o&&o.read&&o.write&&o.mime.indexOf("image/")!==-1))return a.request({data:Object.assign(t,{cmd:"resize"}),notify:{type:"resize",cnt:1}}).fail(function(e){i&&i.reject(e)}).done(function(){t.quality&&a.storage("jpgQuality",t.quality===a.option("jpgQuality")?null:t.quality),i&&i.resolve()});var s;return s=o?o.mime.indexOf("image/")===-1?["errResize",o.name,"errUsupportType"]:["errResize",o.name,"errPerm"]:["errResize",t.target,"errPerm"],i?i.reject(s):a.error(s),e.Deferred().reject(s)},this.exec=function(i){var a,o,r=this,s=this.fm,l=this.files(i),c=e.Deferred(),d=s.api>1,p=this.options,u=650,h=s.getUI(),f=e().controlgroup?"controlgroup":"buttonset",m="undefined"==typeof p.grid8px||"disable"!==p.grid8px,g=Array.isArray(p.presetSize)?p.presetSize:[],v="elfinder-dialog-resize",b="elfinder-dialog-active",y=s.res("class","editing"),w=function(i,a){var o,l,w,x,k,C="image/jpeg"===i.mime,T=e('<div class="elfinder-dialog-resize"/>'),z='<input type="number" class="ui-corner-all"/>',I='<div class="elfinder-resize-row"/>',S='<div class="elfinder-resize-label"/>',A=null,O=!1,j=function(){O=!0},D=function(){O&&(O=!1,M.trigger("change"))},M=e('<div class="elfinder-resize-control"/>').on("focus","input[type=text],input[type=number]",function(){e(this).trigger("select")}).on("change",function(){A&&clearTimeout(A),A=setTimeout(function(){var e,t,i,a,o,r,l,c,d,p,u,h;it&&!O&&(i=it.data("canvas"))&&(e=M.children("div.elfinder-resize-control-panel:visible"),t=e.find("input.elfinder-resize-quality"),t.is(":visible")&&(a=it.data("ctx"),o=it.get(0),e.hasClass("elfinder-resize-uiresize")?(c=i.width=V.val(),d=i.height=X.val(),a.drawImage(o,0,0,c,d)):e.hasClass("elfinder-resize-uicrop")?(r=K.val(),l=G.val(),c=J.val(),d=Y.val(),i.width=c,i.height=d,a.drawImage(o,r,l,c,d,0,0,c,d)):(p=Z.val(),u=Z.val()*Math.PI/180,h=n(ue,he,u),c=i.width=h.width,d=i.height=h.height,a.save(),p%90!==0&&(a.fillStyle=le.val()||"#FFF",a.fillRect(0,0,c,d)),a.translate(c/2,d/2),a.rotate(u),a.drawImage(o,-o.width/2,-o.height/2,ue,he),a.restore()),i.toBlob(function(e){e&&t.next("span").text(" ("+s.formatSize(e.size)+")")},"image/jpeg",Math.max(Math.min(t.val(),100),1)/100)))},60)}).on("mouseup","input",function(t){e(t.target).trigger("change")}),U=e('<div class="elfinder-resize-preview"/>').on("touchmove",function(t){e(t.target).hasClass("touch-punch")&&(t.stopPropagation(),t.preventDefault())}),E=e('<div class="elfinder-resize-spinner">'+s.i18n("ntfloadimg")+"</div>"),F=e('<div class="elfinder-resize-handle touch-punch"/>'),P=e('<div class="elfinder-resize-handle touch-punch"/>'),R=e('<div class="elfinder-resize-uiresize elfinder-resize-control-panel"/>'),H=e('<div class="elfinder-resize-uicrop elfinder-resize-control-panel"/>'),q=e('<div class="elfinder-resize-rotate elfinder-resize-control-panel"/>'),_=e("<button/>").attr("title",s.i18n("rotate-cw")).append(e('<span class="elfinder-button-icon elfinder-button-icon-rotate-l"/>')),N=e("<button/>").attr("title",s.i18n("rotate-ccw")).append(e('<span class="elfinder-button-icon elfinder-button-icon-rotate-r"/>')),L=e("<span />"),W=e('<button class="elfinder-resize-reset">').text(s.i18n("reset")).on("click",function(){Ne()}).button({icons:{primary:"ui-icon-arrowrefresh-1-n"},text:!1}),B=e('<div class="elfinder-resize-type"/>').append('<input type="radio" name="type" id="'+a+'-resize" value="resize" checked="checked" /><label for="'+a+'-resize">'+s.i18n("resize")+"</label>",'<input class="api2" type="radio" name="type" id="'+a+'-crop" value="crop" /><label class="api2" for="'+a+'-crop">'+s.i18n("crop")+"</label>",'<input class="api2" type="radio" name="type" id="'+a+'-rotate" value="rotate" /><label class="api2" for="'+a+'-rotate">'+s.i18n("rotate")+"</label>"),$="resize",V=(B[f]()[f]("disable").find("input").on("change",function(){$=e(this).val(),Ne(),$e(!0),Ve(!0),Xe(!0),"resize"==$?(R.show(),q.hide(),H.hide(),$e(),C&&Te.insertAfter(R.find(".elfinder-resize-grid8"))):"crop"==$?(q.hide(),R.hide(),H.show(),Ve(),C&&Te.insertAfter(H.find(".elfinder-resize-grid8"))):"rotate"==$&&(R.hide(),H.hide(),q.show(),Xe())}),e(z).on("change",function(){var e=_e(parseInt(V.val())),t=_e(fe?e/de:parseInt(X.val()));e>0&&t>0&&(Le.updateView(e,t),V.val(e),X.val(t))})),X=e(z).on("change",function(){var e=_e(parseInt(X.val())),t=_e(fe?e*de:parseInt(V.val()));t>0&&e>0&&(Le.updateView(t,e),V.val(t),X.val(e))}),K=e(z).on("change",function(){We.updateView()}),G=e(z).on("change",function(){We.updateView()}),J=e(z).on("change",function(){We.updateView("w")}),Y=e(z).on("change",function(){We.updateView("h")}),Q=C&&d?e(z).val(s.storage("jpgQuality")>0?s.storage("jpgQuality"):s.option("jpgQuality")).addClass("elfinder-resize-quality").attr("min","1").attr("max","100").attr("title","1 - 100").on("blur",function(){var e=Math.min(100,Math.max(1,parseInt(this.value)));M.find("input.elfinder-resize-quality").val(e)}):null,Z=e('<input type="number" class="ui-corner-all" maxlength="3" value="0" />').on("change",function(){Be.update()}),ee=e('<div class="elfinder-resize-rotate-slider touch-punch"/>').slider({min:0,max:360,value:Z.val(),animate:!0,start:j,stop:D,change:function(e,t){t.value!=ee.slider("value")&&Be.update(t.value)},slide:function(e,t){Be.update(t.value,!1)}}).find(".ui-slider-handle").addClass("elfinder-tabstop").off("keydown").on("keydown",function(t){t.keyCode!=e.ui.keyCode.LEFT&&t.keyCode!=e.ui.keyCode.RIGHT||(t.stopPropagation(),t.preventDefault(),Be.update(Number(Z.val())+(t.keyCode==e.ui.keyCode.RIGHT?1:-1),!1))}).end(),te={},ne=function(e){var t,n,i,a,o,r,s;try{t=te[Math.round(e.offsetX)][Math.round(e.offsetY)]}catch(e){}t&&(n=t[0],i=t[1],a=t[2],o=t[3],r=t[4],s=t[5],ae(n,i,a,"click"===e.type))},ie=function(t){ae(e(this).css("backgroundColor"),"","","click"===t.type)},ae=function(t,n,i,a){var o,r,s;"string"==typeof t&&(n="",t&&(o=e("<span>").css("backgroundColor",t).css("backgroundColor"))&&(r=o.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i))&&(t=Number(r[1]),
n=Number(r[2]),i=Number(r[3]))),s=""===n?t:"#"+oe(t,n,i),le.val(s).css({backgroundColor:s,backgroundImage:"none",color:t+n+i<384?"#fff":"#000"}),U.css("backgroundColor",s),a&&(qe.off(".picker").removeClass("elfinder-resize-picking"),ce.off(".picker").removeClass("elfinder-resize-picking"))},oe=function(t,n,i){return e.map([t,n,i],function(e){return("0"+parseInt(e).toString(16)).slice(-2)}).join("")},re=e("<button>").text(s.i18n("colorPicker")).on("click",function(){qe.on("mousemove.picker click.picker",ne).addClass("elfinder-resize-picking"),ce.on("mousemove.picker click.picker","span",ie).addClass("elfinder-resize-picking")}).button({icons:{primary:"ui-icon-pin-s"},text:!1}),se=e("<button>").text(s.i18n("reset")).on("click",function(){ae("","","",!0)}).button({icons:{primary:"ui-icon-arrowrefresh-1-n"},text:!1}),le=e('<input class="ui-corner-all elfinder-resize-bg" type="text">').on("focus",function(){e(this).attr("style","")}).on("blur",function(){ae(e(this).val())}),ce=e('<div class="elfinder-resize-pallet">').on("click","span",function(){ae(e(this).css("backgroundColor"))}),de=1,pe=1,ue=0,he=0,fe=!0,me=!1,ge=0,ve=0,be=0,ye=0,we=0,xe=!!C&&m,ke=e("<button>").html(s.i18n("aspectRatio")).on("click",function(){fe=!fe,ke.button("option",{icons:{primary:fe?"ui-icon-locked":"ui-icon-unlocked"}}),Le.fixHeight(),F.resizable("option","aspectRatio",fe).data("uiResizable")._aspectRatio=fe}).button({icons:{primary:fe?"ui-icon-locked":"ui-icon-unlocked"},text:!1}),Ce=e("<button>").html(s.i18n("aspectRatio")).on("click",function(){me=!me,Ce.button("option",{icons:{primary:me?"ui-icon-locked":"ui-icon-unlocked"}}),P.resizable("option","aspectRatio",me).data("uiResizable")._aspectRatio=me}).button({icons:{primary:me?"ui-icon-locked":"ui-icon-unlocked"},text:!1}),Te=e("<button>").html(s.i18n(xe?"enabled":"disabled")).toggleClass("ui-state-active",xe).on("click",function(){xe=!xe,Te.html(s.i18n(xe?"enabled":"disabled")).toggleClass("ui-state-active",xe),ze()}).button(),ze=function(){var t=xe?8:1;e.each([V,X,J,Y,K,G],function(){this.attr("step",t)}),xe&&(V.val(_e(V.val())),X.val(_e(X.val())),J.val(_e(J.val())),Y.val(_e(Y.val())),K.val(_e(K.val())),G.val(_e(G.val())),R.is(":visible")?Le.updateView(V.val(),X.val()):H.is(":visible")&&We.updateView())},Ie=function(){var t,n=function(){le.parent().hide(),ce.hide()};t=Math.min(ge,ve)/Math.sqrt(Math.pow(ue,2)+Math.pow(he,2)),be=Math.ceil(ue*t),ye=Math.ceil(he*t),qe.width(be).height(ye).css("margin-top",(ve-ye)/2+"px").css("margin-left",(ge-be)/2+"px"),qe.is(":visible")&&le.is(":visible")&&("image/png"!==i.mime?(U.css("backgroundColor",le.val()),o=e("<img>"),s.isCORS&&o.attr("crossorigin","use-credentials"),o.on("load",function(){l&&l.width!==be&&Ae()}).on("error",n).attr("src",nt)):n())},Se=function(){Le.updateView(ue,he),Ie(),Pe.width(Fe.width()).height(Fe.height()),Re.width(Fe.width()).height(Fe.height()),We.updateView(),at()},Ae=function(){if(w){var t,n,i,a,r,s,c,d,p,u,h,f,m,g,v,b,y,x,k,C={},T=[],z=function(e,t,n){var i,a,o,r=Math.max(Math.max(e,t),n),s=Math.min(Math.min(e,t),n);return r===s?i=0:e===r?i=((t-n)/(r-s)*60+360)%360:t===r?i=(n-e)/(r-s)*60+120:n===r&&(i=(e-t)/(r-s)*60+240),a=(r-s)/r,o=(.3*e+.59*t+.11*n)/255,[i,a,o,"hsl"]},I=function(e){return 8*Math.round(e/8)};e:try{n=l.width=qe.width(),i=l.height=qe.height(),m=n/ue,w.scale(m,m),w.drawImage(o.get(0),0,0),f=w.getImageData(0,0,n,i).data,g=.1*n,v=.9*n,b=.1*i,y=.9*i;for(var S=0;S<i-1;S++)for(var A=0;A<n-1;A++){if(t=4*A+S*n*4,a=f[t],r=f[t+1],s=f[t+2],c=f[t+3],255!==c){le.parent().hide(),ce.hide();break e}u=z(a,r,s),h=Math.round(u[0]),d=Math.round(100*u[1]),p=Math.round(100*u[2]),te[A]||(te[A]={}),te[A][S]=[a,r,s,h,d,p],(A<g||A>v)&&(S<b||S>y)&&(x=I(a)+","+I(r)+","+I(s),C[x]?++C[x]:C[x]=1)}ce.children(":first").length||(k=1,e.each(C,function(e,t){T.push({c:e,v:t})}),e.each(T.sort(function(e,t){return e.v>t.v?-1:1}),function(){return!(this.v<2||k>10)&&(ce.append(e('<span style="width:20px;height:20px;display:inline-block;background-color:rgb('+this.c+');">')),void++k)}))}catch(O){re.hide(),ce.hide()}}},Oe=function(){try{l=document.createElement("canvas"),w=l.getContext("2d")}catch(e){re.hide(),ce.hide()}},je=function(){rt.on("click","span.elfinder-resize-preset",function(){var t=e(this),n=t.data("s")[0],i=t.data("s")[1],a=ue/he;t.data("s",[i,n]).text(i+"x"+n),ue>n||he>i?ue<=n?n=_e(i*a):he<=i?i=_e(n/a):ue-n>he-i?i=_e(n/a):n=_e(i*a):(n=ue,i=he),V.val(n),X.val(i),Le.updateView(n,i),at()}),st.on("click","span.elfinder-resize-preset",function(){var t=e(this),n=t.data("s")[0],i=t.data("s")[1],a=K.val(),o=G.val();t.data("s",[i,n]).text(i+"x"+n),ue>=n&&he>=i&&(ue-n-a<0&&(a=ue-n),he-i-o<0&&(o=he-i),K.val(a),G.val(o),J.val(n),Y.val(i),We.updateView(),at())}),st.children("span.elfinder-resize-preset").each(function(){var t=e(this),n=t.data("s")[0],i=t.data("s")[1];t[ue>=n&&he>=i?"show":"hide"]()})},De=null,Me=!1,Ue=function(e){var t=s.file(i.hash);t.width=e[0],t.height=e[1]},Ee=function(){var n,a,o,r;Me||(Me=!0,De&&De.state&&"pending"===De.state()&&De.reject(),s.api>=2.103?0===t&&s.request({data:{cmd:"resize",target:i.hash,degree:0,mode:"rotate"},preventDefault:!0}).done(function(e){t=e.losslessRotate?1:-1,1===t&&Z.val()%90===0&&q.children("div.elfinder-resize-quality").hide()}).fail(function(){t=-1}):t=-1,n=Fe.get(0),a=i.width&&i.height?{w:i.width,h:i.height}:n.naturalWidth?null:{w:Fe.width(),h:Fe.height()},a&&Fe.removeAttr("width").removeAttr("height"),ue=i.width||n.naturalWidth||n.width||Fe.width(),he=i.height||n.naturalHeight||n.height||Fe.height(),i.width&&i.height||Ue([ue,he]),a&&Fe.width(a.w).height(a.h),x.show(),r=he/ue,r<1&&U.height()>U.width()*r&&U.height(U.width()*r),U.height()>Fe.height()+20&&U.height(Fe.height()+20),ve=U.height()-(F.outerHeight()-F.height()),E.remove(),de=ue/he,F.append(Fe.show()).show(),V.val(ue),X.val(he),Oe(),je(),Se(),B[f]("enable"),o=M.find("input,select").prop("disabled",!1).filter(":text").on("keydown",function(t){var n;if(t.keyCode==e.ui.keyCode.ENTER)return t.stopPropagation(),t.preventDefault(),n={title:e("input:checked",B).val(),text:"confirmReq",accept:{label:"btnApply",callback:function(){Ge()}},cancel:{label:"btnCancel",callback:function(){e(this).trigger("focus")}}},lt&&(n.buttons=[{label:"btnSaveAs",callback:function(){setTimeout(Je,10)}}]),void s.confirm(n)}).on("keyup",function(){var t=e(this);t.hasClass("elfinder-resize-bg")||setTimeout(function(){t.val(t.val().replace(/[^0-9]/g,""))},10)}).filter(":first"),ze(),!s.UA.Mobile&&o.trigger("focus"),$e())},Fe=e("<img/>").on("load",Ee).on("error",function(){E.text("Unable to load image").css("background","transparent")}),Pe=e("<div/>"),Re=e("<img/>"),He=e("<div/>"),qe=e('<img class="elfinder-resize-imgrotate" />'),_e=function(e,t){return e=xe?8*Math.round(e/8):Math.round(e),e=Math.max(0,e),t&&e>t&&(e=xe?8*Math.floor(t/8):t),e},Ne=function(){V.val(ue),X.val(he),Le.updateView(ue,he),K.val(0),G.val(0),J.val(ue),Y.val(he),We.updateView(),at()},Le={update:function(){V.val(_e(Fe.width()/pe)),X.val(_e(Fe.height()/pe)),at()},updateView:function(e,t){e>ge||t>ve?e/ge>t/ve?(pe=ge/e,Fe.width(ge).height(_e(t*pe))):(pe=ve/t,Fe.height(ve).width(_e(e*pe))):Fe.width(_e(e)).height(_e(t)),pe=Fe.width()/e,L.text("1 : "+(1/pe).toFixed(2)),Le.updateHandle()},updateHandle:function(){F.width(Fe.width()).height(Fe.height())},fixHeight:function(){var e,t;fe&&(e=V.val(),t=_e(e/de),Le.updateView(e,t),X.val(t))}},We={update:function(e){K.val(_e((P.data("x")||P.position().left)/pe,ue)),G.val(_e((P.data("y")||P.position().top)/pe,he)),"xy"!==e&&(J.val(_e((P.data("w")||P.width())/pe,ue-K.val())),Y.val(_e((P.data("h")||P.height())/pe,he-G.val()))),at()},updateView:function(e){var t,n,i,a,o;K.val(_e(K.val(),ue-(xe?8:1))),G.val(_e(G.val(),he-(xe?8:1))),J.val(_e(J.val(),ue-K.val())),Y.val(_e(Y.val(),he-G.val())),me&&(t=He.width()/He.height(),"w"===e?Y.val(_e(parseInt(J.val())/t)):"h"===e&&J.val(_e(parseInt(Y.val())*t))),n=Math.round(parseInt(K.val())*pe),i=Math.round(parseInt(G.val())*pe),"xy"!==e?(a=Math.round(parseInt(J.val())*pe),o=Math.round(parseInt(Y.val())*pe)):(a=P.data("w"),o=P.data("h")),P.data({x:n,y:i,w:a,h:o}).width(a).height(o).css({left:n,top:i}),He.width(a).height(o)},resize_update:function(e,t){P.data({x:t.position.left,y:t.position.top,w:t.size.width,h:t.size.height}),We.update(),We.updateView()},drag_update:function(e,t){P.data({x:t.position.left,y:t.position.top}),We.update("xy")}},Be={mouseStartAngle:0,imageStartAngle:0,imageBeingRotated:!1,setQuality:function(){q.children("div.elfinder-resize-quality")[t>0&&Z.val()%90===0?"hide":"show"]()},update:function(e,t){"undefined"==typeof e&&(we=e=parseInt(Z.val())),"undefined"==typeof t&&(t=!0),!t||s.UA.Opera||s.UA.ltIE8?qe.rotate(e):qe.animate({rotate:e+"deg"}),e%=360,e<0&&(e+=360),Z.val(parseInt(e)),ee.slider("value",Z.val()),Be.setQuality()},execute:function(e){if(Be.imageBeingRotated){var t=Be.getCenter(qe),n=e.originalEvent.touches?e.originalEvent.touches[0]:e,i=n.pageX-t[0],a=n.pageY-t[1],o=Math.atan2(a,i),r=o-Be.mouseStartAngle+Be.imageStartAngle;return r=Math.round(180*parseFloat(r)/Math.PI),e.shiftKey&&(r=15*Math.round((r+6)/15)),qe.rotate(r),r%=360,r<0&&(r+=360),Z.val(r),ee.slider("value",Z.val()),Be.setQuality(),!1}},start:function(t){if(!qe.hasClass("elfinder-resize-picking")){j(),Be.imageBeingRotated=!0;var n=Be.getCenter(qe),i=t.originalEvent.touches?t.originalEvent.touches[0]:t,a=i.pageX-n[0],o=i.pageY-n[1];return Be.mouseStartAngle=Math.atan2(o,a),Be.imageStartAngle=parseFloat(qe.rotate())*Math.PI/180,e(document).on("mousemove",Be.execute),qe.on("touchmove",Be.execute),!1}},stop:function(t){if(Be.imageBeingRotated)return e(document).off("mousemove",Be.execute),qe.off("touchmove",Be.execute),setTimeout(function(){Be.imageBeingRotated=!1},10),D(),!1},getCenter:function(e){var t=qe.rotate();qe.rotate(0);var n=qe.offset(),i=n.left+qe.width()/2,a=n.top+qe.height()/2;return qe.rotate(t),Array(i,a)}},$e=function(e){e?(F.filter(":ui-resizable").resizable("destroy"),F.hide()):(F.show(),F.resizable({alsoResize:Fe,aspectRatio:fe,resize:Le.update,start:j,stop:function(e){Le.fixHeight,Le.updateView(V.val(),X.val()),D()}}),ot())},Ve=function(e){e?(P.filter(":ui-resizable").resizable("destroy").filter(":ui-draggable").draggable("destroy"),Pe.hide()):(Pe.show(),P.resizable({containment:Pe,aspectRatio:me,resize:We.resize_update,start:j,stop:D,handles:"all"}).draggable({handle:He,containment:Re,drag:We.drag_update,start:j,stop:function(){We.updateView("xy"),D()}}),ot(),We.update())},Xe=function(e){e?qe.hide():(qe.show(),ot())},Ke=function(){var e,t,n,i,a,o,r="";if("resize"==$)e=parseInt(V.val())||0,t=parseInt(X.val())||0;else if("crop"==$)e=parseInt(J.val())||0,t=parseInt(Y.val())||0,n=parseInt(K.val())||0,i=parseInt(G.val())||0;else if("rotate"==$){if(e=ue,t=he,a=parseInt(Z.val())||0,a<0||a>360)return s.error("Invalid rotate degree"),!1;if(0==a||360==a)return s.error("errResizeNoChange"),!1;r=le.val()}if(o=Q?parseInt(Q.val()):0,"rotate"!=$){if(e<=0||t<=0)return s.error("Invalid image size"),!1;if(e==ue&&t==he)return s.error("errResizeNoChange"),!1}return{w:e,h:t,x:n,y:i,d:a,q:o,b:r}},Ge=function(){var e;(e=Ke())&&(T.elfinderdialog("close"),r.resizeRequest({target:i.hash,width:e.w,height:e.h,x:e.x,y:e.y,degree:e.d,quality:e.q,bg:e.b,mode:$},i,c))},Je=function(){var t,n=function(){t.addClass(y).fadeIn(function(){k.addClass(b)}),s.disable()},a=function(){r.mime=i.mime,r.prefix=i.name.replace(/ \d+(\.[^.]+)?$/,"$1"),r.requestCmd="mkfile",r.nextAction={},r.data={target:i.phash},e.proxy(s.res("mixin","make"),r)().done(function(a){var o,r;a.added&&a.added.length?(o=a.added[0].hash,r=s.api<2.1032?s.url(i.hash,{async:!0,temporary:!0}):null,e.when(r).done(function(e){s.request({options:{type:"post"},data:{cmd:"put",target:o,encoding:r?"scheme":"hash",content:r?s.convAbsUrl(e):i.hash},notify:{type:"copy",cnt:1},syncOnFail:!0}).fail(n).done(function(e){e=s.normalize(e),s.updateCache(e),i=s.file(o),e.changed&&e.changed.length&&s.change(e),k.show().find(".elfinder-dialog-title").html(s.escape(i.name)),Ge(),t.fadeIn()})}).fail(n)):n()}).fail(n).always(function(){delete r.mime,delete r.prefix,delete r.nextAction,delete r.data}),s.trigger("unselectfiles",{files:[i.hash]})},o=null;Ke()&&(t=h.children("."+v+":visible").removeClass(y).fadeOut(),k.removeClass(b),s.enable(),s.searchStatus.state<2&&i.phash!==s.cwd().hash&&(o=s.exec("open",[i.phash],{thash:i.phash})),e.when([o]).done(function(){o?s.one("cwdrender",a):a()}).fail(n))},Ye={},Qe="elfinder-resize-handle-hline",Ze="elfinder-resize-handle-vline",et="elfinder-resize-handle-point",tt=s.openUrl(i.hash),nt=s.openUrl(i.hash,!s.isSameOrigin(tt)),it=Q?e("<img>").attr("crossorigin",s.isCORS?"use-credentials":"").attr("src",nt).on("load",function(){try{var e=document.createElement("canvas");it.data("canvas",e).data("ctx",e.getContext("2d")),at()}catch(t){it.removeData("canvas").removeData("ctx")}}):null,at=function(){M.find("input.elfinder-resize-quality:visible").trigger("change")},ot=function(t){if(!k.hasClass("elfinder-dialog-minimized")&&!k.is(":hidden")){rt.hide(),st.hide();var n,i,a,o=s.options.dialogContained?h:e(window),r=o.height(),l=o.width(),c="auto",d=!0;k.width(Math.min(u,l-30)),U.attr("style",""),ue&&he&&(ge=U.width()-(F.outerWidth()-F.width()),ve=U.height()-(F.outerHeight()-F.height()),Le.updateView(ue,he)),i=T.find("div.elfinder-resize-control").width(),a=U.width(),n=T.width()-20,a>n?(U.width(n),d=!1):n-a<i&&(l>r?U.width(n-i-20):(U.css({"float":"none",marginLeft:"auto",marginRight:"auto"}),d=!1)),d&&(c=i),ge=U.width()-(F.outerWidth()-F.width()),h.hasClass("elfinder-fullscreen")?k.height()>r&&(r-=2,U.height(r-k.height()+U.height()),k.css("top",0-h.offset().top)):(r-=30,U.height()>r&&U.height(r)),ve=U.height()-(F.outerHeight()-F.height()),ue&&he&&Se(),Fe.height()&&U.height()>Fe.height()+20&&(U.height(Fe.height()+20),ve=U.height()-(F.outerHeight()-F.height()),Ie()),rt.css("width",c).show(),st.css("width",c).show(),st.children("span.elfinder-resize-preset:visible").length||st.hide()}},rt=function(){var t,n=e('<fieldset class="elfinder-resize-preset-container">').append(e("<legend>").html(s.i18n("presets"))).hide();return e.each(g,function(i,a){2===a.length&&(t=!0,n.append(e('<span class="elfinder-resize-preset"/>').data("s",a).text(a[0]+"x"+a[1]).button()))}),t?n:e()}(),st=rt.clone(!0),lt=s.uploadMimeCheck(i.mime,i.phash);R.append(e(I).append(e(S).text(s.i18n("width")),V),e(I).append(e(S).text(s.i18n("height")),X,e('<div class="elfinder-resize-whctrls">').append(ke,W)),Q?e(I).append(e(S).text(s.i18n("quality")),Q,e("<span/>")):e(),C?e(I).append(e(S).text(s.i18n("8pxgrid")).addClass("elfinder-resize-grid8"),Te):e(),e(I).append(e(S).text(s.i18n("scale")),L),e(I).append(rt)),d&&(H.append(e(I).append(e(S).text("X"),K),e(I).append(e(S).text("Y")).append(G),e(I).append(e(S).text(s.i18n("width")),J),e(I).append(e(S).text(s.i18n("height")),Y,e('<div class="elfinder-resize-whctrls">').append(Ce,W.clone(!0))),Q?e(I).append(e(S).text(s.i18n("quality")),Q.clone(!0),e("<span/>")):e(),C?e(I).append(e(S).text(s.i18n("8pxgrid")).addClass("elfinder-resize-grid8")):e(),e(I).append(st)),q.append(e(I).addClass("elfinder-resize-degree").append(e(S).text(s.i18n("rotate")),Z,e("<span/>").text(s.i18n("degree")),e("<div/>").append(_,N)[f]()),e(I).css("height","20px").append(ee),Q?e(I)[t<1?"show":"hide"]().addClass("elfinder-resize-quality").append(e(S).text(s.i18n("quality")),Q.clone(!0),e("<span/>")):e(),e(I).append(e(S).text(s.i18n("bgcolor")),le,re,se),e(I).css("height","20px").append(ce)),_.on("click",function(){we-=90,Be.update(we)}),N.on("click",function(){we+=90,Be.update(we)})),T.append(B).on("resize",function(e){e.stopPropagation()}),d?M.append(R,H.hide(),q.hide()):M.append(R),F.append('<div class="'+Qe+" "+Qe+'-top"/>','<div class="'+Qe+" "+Qe+'-bottom"/>','<div class="'+Ze+" "+Ze+'-left"/>','<div class="'+Ze+" "+Ze+'-right"/>','<div class="'+et+" "+et+'-e"/>','<div class="'+et+" "+et+'-se"/>','<div class="'+et+" "+et+'-s"/>'),U.append(E).append(F.hide()).append(Fe.hide()),d&&(P.css("position","absolute").append('<div class="'+Qe+" "+Qe+'-top"/>','<div class="'+Qe+" "+Qe+'-bottom"/>','<div class="'+Ze+" "+Ze+'-left"/>','<div class="'+Ze+" "+Ze+'-right"/>','<div class="'+et+" "+et+'-n"/>','<div class="'+et+" "+et+'-e"/>','<div class="'+et+" "+et+'-s"/>','<div class="'+et+" "+et+'-w"/>','<div class="'+et+" "+et+'-ne"/>','<div class="'+et+" "+et+'-se"/>','<div class="'+et+" "+et+'-sw"/>','<div class="'+et+" "+et+'-nw"/>'),U.append(Pe.css("position","absolute").hide().append(Re,P.append(He))),U.append(qe.hide())),U.css("overflow","hidden"),T.append(U,M),Ye[s.i18n("btnApply")]=Ge,lt&&(Ye[s.i18n("btnSaveAs")]=function(){setTimeout(Je,10)}),Ye[s.i18n("btnCancel")]=function(){T.elfinderdialog("close")},T.find("input,button").addClass("elfinder-tabstop"),k=s.dialog(T,{title:s.escape(i.name),width:u,resizable:!1,buttons:Ye,open:function(){var t=!!(s.option("substituteImg",i.hash)&&i.size>p.dimSubImgSize),n=!(!i.width||!i.height);if(T.parent().css("overflow","hidden"),x=k.find(".ui-dialog-titlebar .elfinder-titlebar-minimize").hide(),s.bind("resize",ot),Fe.attr("src",tt),Re.attr("src",tt),qe.attr("src",tt),d&&(qe.on("mousedown touchstart",Be.start).on("touchend",Be.stop),e(document).on("mouseup",Be.stop)),n&&!t)return Ee();if(i.size>(p.getDimThreshold||0))De=s.request({data:{cmd:"dim",target:i.hash,substitute:t?400:""},preventDefault:!0}).done(function(e){if(e.dim){var t=e.dim.split("x");return i.width=t[0],i.height=t[1],Ue(t),e.url&&(Fe.attr("src",e.url),Re.attr("src",e.url),qe.attr("src",e.url)),Ee()}});else if(n)return Ee()},close:function(){d&&(qe.off("mousedown touchstart",Be.start).off("touchend",Be.stop),e(document).off("mouseup",Be.stop)),s.unbind("resize",ot),e(this).elfinderdialog("destroy")},resize:function(e,t){t&&"off"===t.minimize&&ot()}}).attr("id",a).closest(".ui-dialog").addClass(v+" "+y),s.UA.ltIE8&&e(".elfinder-dialog").css("filter",""),He.css({opacity:.2,"background-color":"#fff",position:"absolute"}),P.css("cursor","move"),P.find(".elfinder-resize-handle-point").css({"background-color":"#fff",opacity:.5,"border-color":"#000"}),d||B.find(".api2").remove(),M.find("input,select").prop("disabled",!0),M.find("input.elfinder-resize-quality").next("span").addClass("elfinder-resize-jpgsize").attr("title",s.i18n("roughFileSize"))};return l.length&&l[0].mime.indexOf("image/")!==-1?(a="resize-"+s.namespace+"-"+l[0].hash,o=h.find("#"+a),o.length?(o.elfinderdialog("toTop"),c.resolve()):(w(l[0],a),c)):c.reject()}},function(e){var t=function(e,t){var n=0;for(n in t)if("undefined"!=typeof e[t[n]])return t[n];return e[t[n]]="",t[n]};if(e.cssHooks.rotate={get:function(t,n,i){return e(t).rotate()},set:function(t,n){return e(t).rotate(n),n}},e.cssHooks.transform={get:function(e,n,i){var a=t(e.style,["WebkitTransform","MozTransform","OTransform","msTransform","transform"]);return e.style[a]},set:function(e,n){var i=t(e.style,["WebkitTransform","MozTransform","OTransform","msTransform","transform"]);return e.style[i]=n,n}},e.fn.rotate=function(e){var t;return"undefined"==typeof e?window.opera?(t=this.css("transform").match(/rotate\((.*?)\)/),t&&t[1]?Math.round(180*parseFloat(t[1])/Math.PI):0):(t=this.css("transform").match(/rotate\((.*?)\)/),t&&t[1]?parseInt(t[1]):0):(this.css("transform",this.css("transform").replace(/none|rotate\(.*?\)/,"")+"rotate("+parseInt(e)+"deg)"),this)},e.fx.step.rotate=function(t){0==t.state&&(t.start=e(t.elem).rotate(),t.now=t.start),e(t.elem).rotate(t.now)},"undefined"==typeof window.addEventListener&&"undefined"==typeof document.getElementsByClassName){var n=function(e){for(var t=e,n=t.offsetLeft,i=t.offsetTop;t.offsetParent&&(t=t.offsetParent,t==document.body||"static"==t.currentStyle.position);)t!=document.body&&t!=document.documentElement&&(n-=t.scrollLeft,i-=t.scrollTop),n+=t.offsetLeft,i+=t.offsetTop;return{x:n,y:i}},i=function(e){if("static"==e.currentStyle.position){var t=n(e);e.style.position="absolute",e.style.left=t.x+"px",e.style.top=t.y+"px"}},a=function(e,t){var n,a=1,o=1,r=1,s=1;if("undefined"!=typeof e.style.msTransform)return!0;i(e),n=t.match(/rotate\((.*?)\)/);var l=n&&n[1]?parseInt(n[1]):0;l%=360,l<0&&(l=360+l);var c=l*Math.PI/180,d=Math.cos(c),p=Math.sin(c);a*=d,o*=-p,r*=p,s*=d,e.style.filter=(e.style.filter||"").replace(/progid:DXImageTransform\.Microsoft\.Matrix\([^)]*\)/,"")+("progid:DXImageTransform.Microsoft.Matrix(M11="+a+",M12="+o+",M21="+r+",M22="+s+",FilterType='bilinear',sizingMethod='auto expand')");var u=parseInt(e.style.width||e.width||0),h=parseInt(e.style.height||e.height||0);c=l*Math.PI/180;var f=Math.abs(Math.cos(c)),m=Math.abs(Math.sin(c)),g=(u-(u*f+h*m))/2,v=(h-(u*m+h*f))/2;return e.style.marginLeft=Math.floor(g)+"px",e.style.marginTop=Math.floor(v)+"px",!0},o=e.cssHooks.transform.set;e.cssHooks.transform.set=function(e,t){return o.apply(this,[e,t]),a(e,t),t}}}(jQuery),(i.prototype.commands.restore=function(){"use strict";var t=this,n=this.fm,i=0,a=function(t){var o,r=e.Deferred(),s=[],l=[],c=[],d=[];return r._xhrReject=function(){e.each(c,function(){this&&this.reject&&this.reject()}),o&&o._xhrReject()},e.each(t,function(e,t){"directory"===t.mime?s.push(t):l.push(t)}),s.length?(e.each(s,function(e,t){c.push(n.request({data:{cmd:"open",target:t.hash},preventDefault:!0,asNotOpen:!0})),d[e]=t.hash}),e.when.apply(e,c).fail(function(){r.reject()}).done(function(){var t=[];e.each(arguments,function(e,n){n.files&&(n.files.length?t=t.concat(n.files):t.push({hash:"fakefile_"+i++,phash:d[e],mime:"fakefile",name:"fakefile",ts:0}))}),n.cache(t),o=a(t).done(function(e){l=l.concat(e),r.resolve(l)})})):r.resolve(l),r},o=function(o,r,s,l){var c,d,p={},u=[],h=!1,f=[],m=l||{},g=+new Date;n.lockfiles({files:s}),f=e.map(r,function(e){return"directory"===e.mime?e.hash:null}),o.done(function(){f&&n.exec("rm",f,{forceRm:!0,quiet:!0})}).always(function(){n.unlockfiles({files:s})}),c=setTimeout(function(){n.notify({type:"search",id:g,cnt:1,hideCnt:!0,cancel:function(){d&&d._xhrReject(),o.reject()}})},n.notifyDelay),i=0,d=a(r).always(function(){c&&clearTimeout(c),n.notify({type:"search",id:g,cnt:-1,hideCnt:!0})}).fail(function(){o.reject("errRestore","errFileNotFound")}).done(function(i){var a=["errRestore","errFolderNotFound"],r="";i.length?(e.each(i,function(t,i){for(var a,o,s,l=i.phash;l;){if(o=n.trashes[l]){if(!p[o]){if(h)return u.push(i.hash),null;p[o]={},h=!0}s=n.path(i.hash).substr(n.path(l).length).replace(/\\/g,"/"),s=s.replace(/\/[^\/]+?$/,""),""===s&&(s="/"),p[o][s]||(p[o][s]=[]),"fakefile"===i.mime?n.updateCache({removed:[i.hash]}):p[o][s].push(i.hash),(!r||r.length>s.length)&&(r=s);break}a=n.file(l),a?l=a.phash:(l=!1,e.each(n.trashes,function(e){var t=n.file(e),a=n.path(e);if((!t.volumeid||0===i.hash.indexOf(t.volumeid))&&0===n.path(i.hash).indexOf(a))return l=e,!1}))}}),h?e.each(p,function(i,l){var c=Object.keys(l),d=c.length;n.request({data:{cmd:"mkdir",target:i,dirs:c},notify:{type:"chkdir",cnt:d},preventFail:!0}).fail(function(e){o.reject(e),n.unlockfiles({files:s})}).done(function(i){var s,c;(c=i.hashes)?(s=n.getCommand("paste"),s?n.one("mkdirdone",function(){var i=!1;e.each(l,function(e,l){c[e]&&(l.length?n.file(c[e])?(n.clipboard(l,!0),s.exec([c[e]],{_cmd:"restore",noToast:m.noToast||e!==r}).done(function(e){e&&(e.error||e.warning)&&(i=!0)}).fail(function(){i=!0}).always(function(){--d<1&&(o[i?"reject":"resolve"](),u.length&&t.exec(u))})):o.reject(a):--d<1&&(o.resolve(),u.length&&t.exec(u)))})}):o.reject(["errRestore","errCmdNoSupport","(paste)"])):o.reject(a)})}):o.reject(a)):(o.reject("errFileNotFound"),f&&n.exec("rm",f,{forceRm:!0,quiet:!0}))})};this.linkedCmds=["copy","paste","mkdir","rm"],this.updateOnSelect=!1,this.getstate=function(t,i){return t=t||n.selected(),t.length&&e.grep(t,function(e){var t=n.file(e);return!(!t||t.locked||n.isRoot(t))}).length==t.length?0:-1},this.exec=function(i,a){var r=e.Deferred().fail(function(e){e&&n.error(e)}),s=t.files(i);return s.length?(e.each(s,function(e,t){return n.isRoot(t)?!r.reject(["errRestore",t.name]):t.locked?!r.reject(["errLocked",t.name]):void 0}),"pending"===r.state()&&o(r,s,i,a),r):r.reject()}}).prototype={forceLoad:!0},i.prototype.commands.rm=function(){"use strict";var t=this,n=this.fm,i='<div class="ui-helper-clearfix elfinder-rm-title"><span class="elfinder-cwd-icon {class} ui-corner-all"/>{title}<div class="elfinder-rm-desc">{desc}</div></div>',a=function(a,s,c,d,p){var u,h,f,m,g,v,b=s.length,y=n.cwd().hash,w=[],x='<span class="elfinder-info-spinner"/>'+n.i18n("calc");b>1?(m=0,e.each(c,function(e,t){if(!t.size||"unknown"==t.size||"directory"===t.mime)return m="unknown",!1;var n=parseInt(t.size);n>=0&&m>=0&&(m+=n)}),l="unknown"===m,w.push(n.i18n("size")+": "+(l?x:n.formatSize(m))),h=[e(i.replace("{class}","elfinder-cwd-icon-group").replace("{title}","<strong>"+n.i18n("items")+": "+b+"</strong>").replace("{desc}",w.join("<br>")))]):(g=c[0],f=n.tmb(g),l="directory"===g.mime,w.push(n.i18n("size")+": "+(l?x:n.formatSize(g.size))),w.push(n.i18n("modify")+": "+n.formatDate(g)),v=n.escape(g.i18||g.name).replace(/([_.])/g,"&#8203;$1"),h=[e(i.replace("{class}",n.mime2class(g.mime)).replace("{title}","<strong>"+v+"</strong>").replace("{desc}",w.join("<br>")))]),p&&(h=h.concat(p)),h.push(d?"confirmTrash":"confirmRm"),u=n.confirm({title:t.title,text:h,accept:{label:"btnRm",callback:function(){d?o(a,s,d):r(a,s)}},cancel:{label:"btnCancel",callback:function(){n.unlockfiles({files:s}),1===s.length&&n.file(s[0]).phash!==y?n.select({selected:s}):n.selectfiles({files:s}),a.reject()}}}),f&&e("<img/>").on("load",function(){u.find(".elfinder-cwd-icon").addClass(f.className).css("background-image","url('"+f.url+"')")}).attr("src",f.url),l&&(l=n.getSize(e.map(c,function(e){return"directory"===e.mime?e.hash:null})).done(function(e){u.find("span.elfinder-info-spinner").parent().html(n.i18n("size")+": "+e.formated)}).fail(function(){u.find("span.elfinder-info-spinner").parent().html(n.i18n("size")+": "+n.i18n("unknown"))}).always(function(){l=!1}))},o=function(i,o,r){var s,l,c,d={},p=o.length,u=t.options.toTrashMaxItems,h=[],f=e.Deferred();return p>u?void a(i,o,t.files(o),null,[n.i18n("tooManyToTrash")]):(e.each(o,function(e,t){var i=n.file(t),a=n.path(t).replace(/\\/g,"/"),o=a.match(/^[^\/]+?(\/(?:[^\/]+?\/)*)[^\/]+?$/);i&&(o&&(o[1]=o[1].replace(/(^\/.*?)\/?$/,"$1"),d[o[1]]||(d[o[1]]=[]),d[o[1]].push(t)),"directory"===i.mime&&h.push(t))}),h.length?(s=n.request({data:{cmd:"size",targets:h},notify:{type:"readdir",cnt:1,hideCnt:!0},preventDefault:!0}).done(function(e){var t=0;e.fileCnt&&(t+=parseInt(e.fileCnt)),e.dirCnt&&(t+=parseInt(e.dirCnt)),f[t>u?"reject":"resolve"]()}).fail(function(){f.reject()}),setTimeout(function(){var e=s&&s.xhr?s.xhr:null;e&&"pending"==e.state()&&(s.syncOnFail(!1),s.reject(),f.reject())},1e3*t.options.infoCheckWait)):f.resolve(),void f.done(function(){l=Object.keys(d),c=l.length,c?n.request({data:{cmd:"mkdir",target:r,dirs:l},notify:{type:"chkdir",cnt:c},preventFail:!0}).fail(function(e){i.reject(e),n.unlockfiles({files:o})}).done(function(a){var r,s,l,p,u=function(t,i,a){var r,s,l,c;e.each(t,function(e,t){Array.isArray(t)&&(f[e]?f[e]=f[e].concat(t):f[e]=t)}),t.sync&&(f.sync=1),t.added&&t.added.length&&(r=function(){var i=[],a=n.getCommand("restore"),o=e.map(t.added,function(e){return"directory"===e.mime?e.hash:null});return e.each(t.added,function(t,n){e.inArray(n.phash,o)===-1&&i.push(n.hash)}),a.exec(i,{noToast:!0})},l=function(){return n.request({data:a,notify:{type:"redo",cnt:o.length}})},f.undo?(s=f.undo,f.undo=function(){r(),s()}):f.undo=r,f.redo?(c=f.redo,f.redo=function(){l(),c()}):f.redo=l)},h=["errTrash"],f={},m=function(){return n.ui.notify.children(".elfinder-notify-trash").length};(r=a.hashes)?(l=1/c*100,p=1===c?100:5,s=setTimeout(function(){n.notify({type:"trash",cnt:1,hideCnt:!0,progress:p})},n.notifyDelay),e.each(d,function(a,d){var g;r[a]&&(g={cmd:"paste",dst:r[a],targets:d,cut:1},n.request({data:g,preventDefault:!0}).fail(function(e){e&&(h=h.concat(e))}).done(function(e){var t=n.file(d[0]).phash;e=n.normalize(e),n.updateCache(e),u(e,t,g),e.warning&&(h=h.concat(e.warning),delete e.warning),e.removed&&e.removed.length&&n.remove(e),e.added&&e.added.length&&n.add(e),e.changed&&e.changed.length&&n.change(e),n.trigger("paste",e),n.trigger("pastedone"),e.sync&&n.sync()}).always(function(){var a,r=2;m()?n.notify({type:"trash",cnt:0,hideCnt:!0,progress:l}):p+=l,--c<1&&(s&&clearTimeout(s),m()&&n.notify({type:"trash",cnt:-1}),n.unlockfiles({files:o}),Object.keys(f).length?(h.length>1&&((f.removed||f.removed.length)&&(a=e.grep(o,function(t){return e.inArray(t,f.removed)===-1})),a.length?(h>r&&(r=(n.messages[h[r-1]]||"").indexOf("$")===-1?r:r+1),t.exec(a,{addTexts:h.slice(0,r),forceRm:!0})):n.error(h)),f._noSound=!0,f.undo&&f.redo&&(f.undo={cmd:"trash",callback:f.undo},f.redo={cmd:"trash",callback:f.redo}),i.resolve(f)):i.reject(h))}))})):(i.reject("errFolderNotFound"),n.unlockfiles({files:o}))}):(i.reject(["error","The folder hierarchy to be deleting can not be determined."]),n.unlockfiles({files:o}))}).fail(function(){a(i,o,t.files(o),null,[n.i18n("tooManyToTrash")])}))},r=function(e,t,i){var a=i?{}:{type:"rm",cnt:t.length};n.request({data:{cmd:"rm",targets:t},notify:a,preventFail:!0}).fail(function(t){e.reject(t)}).done(function(t){(t.error||t.warning)&&(t.sync=!0),e.resolve(t)}).always(function(){n.unlockfiles({files:t})})},s=function(t){var i,a=null;return t&&t.length&&(t.length>1&&2===n.searchStatus.state?(i=n.file(n.root(t[0])).volumeid,e.grep(t,function(e){return 0!==e.indexOf(i)}).length||(a=n.option("trashHash",t[0]))):a=n.option("trashHash",t[0])),a},l=!1;this.syncTitleOnChange=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"delete ctrl+backspace shift+delete"}],this.handlers={select:function(e){var i=e.data&&e.data.selected&&e.data.selected.length?e.data.selected:null;t.update(void 0,(i?s(i):n.option("trashHash"))?"trash":"rm")}},this.value="rm",this.init=function(){t.change(function(){var i;delete t.extra,t.title=n.i18n("cmd"+t.value),t.className=t.value,t.button&&t.button.children("span.elfinder-button-icon")["trash"===t.value?"addClass":"removeClass"]("elfinder-button-icon-trash"),"trash"===t.value&&(t.extra={icon:"rm",node:e("<span/>").attr({title:n.i18n("cmdrm")}).on("ready",function(e,t){i=t.targets}).on("click touchstart",function(e){"touchstart"===e.type&&e.originalEvent.touches.length>1||(e.stopPropagation(),e.preventDefault(),n.getUI().trigger("click"),n.exec("rm",i,{_userAction:!0,forceRm:!0}))})})})},this.getstate=function(t){var i=this.hashes(t);return i.length&&e.grep(i,function(e){var t=n.file(e);return!(!t||t.locked||n.isRoot(t))}).length==i.length?0:-1},this.exec=function(i,c){var d,p=c||{},u=e.Deferred().always(function(){l&&l.state&&"pending"===l.state()&&l.reject()}).fail(function(e){e&&n.error(e)}).done(function(e){!p.quiet&&!e._noSound&&e.removed&&e.removed.length&&n.trigger("playsound",{soundFile:"rm.wav"})}),h=t.files(i),f=h.length,m=null,g=p.addTexts?p.addTexts:null,v=p.forceRm,b=p.quiet;return f?(e.each(h,function(e,t){return n.isRoot(t)?!u.reject(["errRm",t.name,"errPerm"]):t.locked?!u.reject(["errLocked",t.name]):void 0}),"pending"===u.state()&&(d=t.hashes(i),f=h.length,(v||t.event&&t.event.originalEvent&&t.event.originalEvent.shiftKey)&&(m="",t.title=n.i18n("cmdrm")),null===m&&(m=s(d)),n.lockfiles({files:d}),m&&t.options.quickTrash?o(u,d,m):b?r(u,d,b):a(u,d,h,m,g)),u):u.reject()}},i.prototype.commands.search=function(){"use strict";this.title="Find files",this.options={ui:"searchbutton"},this.alwaysEnabled=!0,this.updateOnSelect=!1,this.getstate=function(){return 0},this.exec=function(t,n,i){var a,o=this.fm,r=[],s=o.options.onlyMimes,l=[];return"string"==typeof t&&t?("object"==typeof n&&(i=n.mime||"",n=n.target||""),n=n?n:"",i?(i=e.trim(i).replace(","," ").split(" "),s.length&&(i=e.map(i,function(t){return t=e.trim(t),t&&(e.inArray(t,s)!==-1||e.grep(s,function(e){return 0===t.indexOf(e)}).length)?t:null}))):i=[].concat(s),o.trigger("searchstart",{query:t,target:n,mimes:i}),!s.length||i.length?""===n&&o.api>=2.1?e.each(o.roots,function(e,n){
r.push(o.request({data:{cmd:"search",q:t,target:n,mimes:i},notify:{type:"search",cnt:1,hideCnt:!r.length},cancel:!0,preventDone:!0}))}):(r.push(o.request({data:{cmd:"search",q:t,target:n,mimes:i},notify:{type:"search",cnt:1,hideCnt:!0},cancel:!0,preventDone:!0})),""!==n&&o.api>=2.1&&Object.keys(o.leafRoots).length&&e.each(o.leafRoots,function(s,c){for(a=s;a;)n===a&&e.each(c,function(){var e=o.file(this);e&&e.volumeid&&l.push(e.volumeid),r.push(o.request({data:{cmd:"search",q:t,target:this,mimes:i},notify:{type:"search",cnt:1,hideCnt:!1},cancel:!0,preventDone:!0}))}),a=(o.file(a)||{}).phash})):r=[e.Deferred().resolve({files:[]})],o.searchStatus.mixed=r.length>1&&l,e.when.apply(e,r).done(function(e){var t,n=arguments.length;if(e.warning&&o.error(e.warning),n>1)for(e.files=e.files||[],t=1;t<n;t++)arguments[t].warning&&o.error(arguments[t].warning),arguments[t].files&&e.files.push.apply(e.files,arguments[t].files);e.files&&e.files.length&&o.cache(e.files),o.lazy(function(){o.trigger("search",e)}).then(function(){return o.lazy(function(){o.trigger("searchdone")})}).then(function(){e.sync&&o.sync()})})):(o.getUI("toolbar").find("."+o.res("class","searchbtn")+" :text").trigger("focus"),e.Deferred().reject())}},i.prototype.commands.selectall=function(){"use strict";var t=0;this.fm.bind("select",function(e){t=e.data&&e.data.selectall?-1:0}),this.state=0,this.updateOnSelect=!1,this.getstate=function(){return t},this.exec=function(){return e(document).trigger(e.Event("keydown",{keyCode:65,ctrlKey:!0,shiftKey:!1,altKey:!1,metaKey:!1})),e.Deferred().resolve()}},i.prototype.commands.selectinvert=function(){"use strict";this.updateOnSelect=!1,this.getstate=function(){return 0},this.exec=function(){return e(document).trigger(e.Event("keydown",{keyCode:73,ctrlKey:!0,shiftKey:!0,altKey:!1,metaKey:!1})),e.Deferred().resolve()}},i.prototype.commands.selectnone=function(){"use strict";var t=this.fm,n=-1;t.bind("select",function(e){n=e.data&&e.data.unselectall?-1:0}),this.state=-1,this.updateOnSelect=!1,this.getstate=function(){return n},this.exec=function(){return t.getUI("cwd").trigger("unselectall"),e.Deferred().resolve()}},i.prototype.commands.sort=function(){"use strict";var t=this,n=t.fm,i=function(){t.variants=[],e.each(n.sortRules,function(i,a){var o={type:i,order:i==n.sortType?"asc"==n.sortOrder?"desc":"asc":n.sortOrder};if(e.inArray(i,n.sorters)!==-1){var r=i==n.sortType?"asc"==o.order?"s":"n":"";t.variants.push([o,(r?'<span class="ui-icon ui-icon-arrowthick-1-'+r+'"></span>':"")+"&nbsp;"+n.i18n("sort"+i)])}}),t.variants.push("|"),t.variants.push([{type:n.sortType,order:n.sortOrder,stick:!n.sortStickFolders,tree:n.sortAlsoTreeview},(n.sortStickFolders?'<span class="ui-icon ui-icon-check"/>':"")+"&nbsp;"+n.i18n("sortFoldersFirst")]),n.ui.tree&&(t.variants.push("|"),t.variants.push([{type:n.sortType,order:n.sortOrder,stick:n.sortStickFolders,tree:!n.sortAlsoTreeview},(n.sortAlsoTreeview?'<span class="ui-icon ui-icon-check"/>':"")+"&nbsp;"+n.i18n("sortAlsoTreeview")]))};this.options={ui:"sortbutton"},n.bind("open sortchange",i).bind("open",function(){n.unbind("add",i).one("add",i),n.getUI("toolbar").find(".elfiner-button-sort .elfinder-button-menu .elfinder-button-menu-item").each(function(){var t=e(this),i=t.attr("rel");t.toggle(!i||e.inArray(i,n.sorters)!==-1)})}).bind("cwdrender",function(){var i=e(n.cwd).find("div.elfinder-cwd-wrapper-list table");i.length&&e.each(n.sortRules,function(a,o){var r=i.find("thead tr td.elfinder-cwd-view-th-"+a);if(r.length){var s,l=a==n.sortType,c={type:a,order:l?"asc"==n.sortOrder?"desc":"asc":n.sortOrder};l&&(r.addClass("ui-state-active"),s="asc"==n.sortOrder?"n":"s",e('<span class="ui-icon ui-icon-triangle-1-'+s+'"/>').appendTo(r)),e(r).on("click",function(i){e(this).data("dragging")||(i.stopPropagation(),n.getUI("cwd").data("longtap")||t.exec([],c))}).on("mouseenter mouseleave",function(t){e(this).toggleClass("ui-state-hover","mouseenter"===t.type)})}})}),this.getstate=function(){return 0},this.exec=function(e,t){var n=this.fm,i=Object.assign({type:n.sortType,order:n.sortOrder,stick:n.sortStickFolders,tree:n.sortAlsoTreeview},t);return n.lazy(function(){n.setSort(i.type,i.order,i.stick,i.tree),this.resolve()})}},i.prototype.commands.undo=function(){"use strict";var t=this,n=this.fm,i=function(e){e?(t.title=n.i18n("cmdundo")+" "+n.i18n("cmd"+e.cmd),t.state=0):(t.title=n.i18n("cmdundo"),t.state=-1),t.change()},a=[];this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+z"}],this.syncTitleOnChange=!0,this.getstate=function(){return this.state},this.setUndo=function(t,o){var r={};t&&e.isPlainObject(t)&&t.cmd&&t.callback&&(Object.assign(r,t),o?(delete o.undo,r.redo=o):n.getCommand("redo").setRedo(null),a.push(r),i(r))},this.exec=function(){var t,o,r=n.getCommand("redo"),s=e.Deferred(),l={};return a.length?(t=a.pop(),t.redo?(Object.assign(l,t.redo),delete t.redo):l=null,s.done(function(){l&&r.setRedo(l,t)}),i(a.length?a[a.length-1]:void 0),o=t.callback(),o&&o.done?o.done(function(){s.resolve()}).fail(function(){s.reject()}):s.resolve(),a.length?this.update(0,a[a.length-1].name):this.update(-1,"")):s.reject(),s},n.bind("exec",function(e){var n=e.data||{};n.opts&&n.opts._userAction&&n.dfrd&&n.dfrd.done&&n.dfrd.done(function(e){e&&e.undo&&e.redo&&(e.undo.redo=e.redo,t.setUndo(e.undo))})})},i.prototype.commands.redo=function(){"use strict";var t=this,n=this.fm,i=function(e){e&&e.callback?(t.title=n.i18n("cmdredo")+" "+n.i18n("cmd"+e.cmd),t.state=0):(t.title=n.i18n("cmdredo"),t.state=-1),t.change()},a=[];this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"shift+ctrl+z ctrl+y"}],this.syncTitleOnChange=!0,this.getstate=function(){return this.state},this.setRedo=function(e,t){null===e?(a=[],i()):e&&e.cmd&&e.callback&&(t&&(e.undo=t),a.push(e),i(e))},this.exec=function(){var t,o,r=n.getCommand("undo"),s=e.Deferred(),l={},c={};return a.length?(t=a.pop(),t.undo&&(Object.assign(l,t.undo),Object.assign(c,t),delete c.undo,s.done(function(){r.setUndo(l,c)})),i(a.length?a[a.length-1]:void 0),o=t.callback(),o&&o.done?o.done(function(){s.resolve()}).fail(function(){s.reject()}):s.resolve(),s):s.reject()}},(i.prototype.commands.up=function(){"use strict";this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+up"}],this.getstate=function(){return this.fm.cwd().phash?0:-1},this.exec=function(){var t=this.fm,n=t.cwd().hash;return this.fm.cwd().phash?this.fm.exec("open",this.fm.cwd().phash).done(function(){t.one("opendone",function(){t.selectfiles({files:[n]})})}):e.Deferred().reject()}}).prototype={forceLoad:!0},i.prototype.commands.upload=function(){"use strict";var t=this.fm.res("class","hover");this.disableOnSearch=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+u"}],this.getstate=function(e){var t,n=this.fm,i=e||[n.cwd().hash];return this._disabled||1!=i.length||(t=n.file(i[0])),t&&"directory"==t.mime&&t.write?0:-1},this.exec=function(n){var i,a,o,r,s,l,c,d=this.fm,p=d.cwd().hash,u=function(){var e,t=n&&n instanceof Array?n:null;return n||(t=t||1!==(e=d.selected()).length||"directory"!==d.file(e[0]).mime?[p]:e),t},h=u(),f=h?h[0]:n&&n.target?n.target:null,m=f?d.file(f):d.cwd(),g=function(t){d.upload(t).fail(function(e){w.reject(e)}).done(function(t){var n;d.getUI("cwd");if(w.resolve(t),t&&t.added&&t.added[0]&&!d.ui.notify.children(".elfinder-notify-upload").length){var i=d.findCwdNodes(t.added);i.length?i.trigger("scrolltoview"):(m.hash!==p?n=e("<div/>").append(e('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all elfinder-tabstop"><span class="ui-button-text">'+d.i18n("cmdopendir")+"</span></button>").on("mouseenter mouseleave",function(t){e(this).toggleClass("ui-state-hover","mouseenter"==t.type)}).on("click",function(){d.exec("open",f).done(function(){d.one("opendone",function(){d.trigger("selectfiles",{files:e.map(t.added,function(e){return e.hash})})})})})):d.trigger("selectfiles",{files:e.map(t.added,function(e){return e.hash})}),d.toast({msg:d.i18n(["complete",d.i18n("cmdupload")]),extNode:n}))}})},v=function(e){i.elfinderdialog("close"),h&&(e.target=h[0]),g(e)},b=function(){var t=m.hash,n=e.map(d.files(t),function(e){return"directory"===e.mime&&e.write?e:null});return n.length?e('<div class="elfinder-upload-dirselect elfinder-tabstop" title="'+d.i18n("folders")+'"/>').on("click",function(t){t.stopPropagation(),t.preventDefault(),n=d.sortFiles(n);var a=e(this),o=(d.cwd(),i.closest("div.ui-dialog")),r=function(e,t){return{label:d.escape(e.i18||e.name),icon:t,remain:!1,callback:function(){var t=o.children(".ui-dialog-titlebar:first").find("span.elfinder-upload-target");h=[e.hash],t.html(" - "+d.escape(e.i18||e.name)),a.trigger("focus")},options:{className:h&&h.length&&e.hash===h[0]?"ui-state-active":"",iconClass:e.csscls||"",iconImg:e.icon||""}}},s=[r(m,"opendir"),"|"];e.each(n,function(e,t){s.push(r(t,"dir"))}),a.trigger("blur"),d.trigger("contextmenu",{raw:s,x:t.pageX||e(this).offset().left,y:t.pageY||e(this).offset().top,prevNode:o,fitHeight:!0})}).append('<span class="elfinder-button-icon elfinder-button-icon-dir" />'):e()},y=function(n,i){var a=e('<input type="file" '+n+"/>").on("change",function(){v({input:a.get(0),type:"files"})}).on("dragover",function(e){e.originalEvent.dataTransfer.dropEffect="copy"});return e('<div class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only elfinder-tabstop elfinder-focus"><span class="ui-button-text">'+d.i18n(i)+"</span></div>").append(e("<form/>").append(a)).on("click",function(e){e.target===this&&(e.stopPropagation(),e.preventDefault(),a.click())}).on("mouseenter mouseleave",function(n){e(this).toggleClass(t,"mouseenter"===n.type)})},w=e.Deferred();return r=function(t){t.stopPropagation(),t.preventDefault();var n,i=!1,a="",o=null,r="",s=null,l=t._target||null,c=t.dataTransfer||null,p=c.items&&c.items.length&&c.items[0].kind?c.items[0].kind:"";if(c){try{if(o=c.getData("elfinderfrom"),o&&(r=window.location.href+d.cwd().hash,!l&&o===r||l===r))return void w.reject()}catch(t){}if("file"===p&&(c.items[0].getAsEntry||c.items[0].webkitGetAsEntry))i=c,a="data";else if("string"!==p&&c.files&&c.files.length&&e.inArray("Text",c.types)===-1)i=c.files,a="files";else{try{(s=c.getData("text/html"))&&s.match(/<(?:img|a)/i)&&(i=[s],a="html")}catch(t){}!i&&(s=c.getData("text"))&&(i=[s],a="text")}}i?g({files:i,type:a,target:l,dropEvt:t}):(n=["errUploadNoFiles"],"file"===p&&n.push("errFolderUpload"),d.error(n),w.reject())},!h&&n?(n.input||n.files?(n.type="files",g(n)):n.dropEvt&&r(n.dropEvt),w):(s=function(t){var n,i=t.originalEvent||t,a=[],o=[];if(i.clipboardData){if(i.clipboardData.items&&i.clipboardData.items.length){o=i.clipboardData.items;for(var r=0;r<o.length;r++)"file"==i.clipboardData.items[r].kind&&(n=i.clipboardData.items[r].getAsFile(),a.push(n))}else i.clipboardData.files&&i.clipboardData.files.length&&(a=i.clipboardData.files);if(a.length)return void v({files:a,type:"files",clipdata:!0})}var s=i.target||i.srcElement;setTimeout(function(){var t,n="text";s.innerHTML&&(e(s).find("img").each(function(t,n){n.src.match(/^webkit-fake-url:\/\//)&&e(n).remove()}),e(s).find("a,img").length&&(n="html"),t=s.innerHTML,s.innerHTML="",v({files:[t],type:n}))},1)},i=e('<div class="elfinder-upload-dialog-wrapper"/>').append(y("multiple","selectForUpload")),!d.UA.Mobile&&function(e){return"undefined"!=typeof e.webkitdirectory||"undefined"!=typeof e.directory}(document.createElement("input"))&&i.append(y("multiple webkitdirectory directory","selectFolder")),m.dirs&&(m.hash===p||e("#"+d.navHash2Id(m.hash)).hasClass("elfinder-subtree-loaded")?b().appendTo(i):(l=e('<div class="elfinder-upload-dirselect" title="'+d.i18n("nowLoading")+'"/>').append('<span class="elfinder-button-icon elfinder-button-icon-spinner" />').appendTo(i),d.request({cmd:"tree",target:m.hash}).done(function(){d.one("treedone",function(){l.replaceWith(b()),c.elfinderdialog("tabstopsInit")})}).fail(function(){l.remove()}))),d.dragUpload?a=e('<div class="ui-corner-all elfinder-upload-dropbox elfinder-tabstop" contenteditable="true" data-ph="'+d.i18n("dropPasteFiles")+'"></div>').on("paste",function(e){s(e)}).on("mousedown click",function(){e(this).trigger("focus")}).on("focus",function(){this.innerHTML=""}).on("mouseover",function(){e(this).addClass(t)}).on("mouseout",function(){e(this).removeClass(t)}).on("dragenter",function(n){n.stopPropagation(),n.preventDefault(),e(this).addClass(t)}).on("dragleave",function(n){n.stopPropagation(),n.preventDefault(),e(this).removeClass(t)}).on("dragover",function(n){n.stopPropagation(),n.preventDefault(),n.originalEvent.dataTransfer.dropEffect="copy",e(this).addClass(t)}).on("drop",function(e){i.elfinderdialog("close"),h&&(e.originalEvent._target=h[0]),r(e.originalEvent)}).prependTo(i).after('<div class="elfinder-upload-dialog-or">'+d.i18n("or")+"</div>")[0]:o=e('<div class="ui-corner-all elfinder-upload-dropbox" contenteditable="true">'+d.i18n("dropFilesBrowser")+"</div>").on("paste drop",function(e){s(e)}).on("mousedown click",function(){e(this).trigger("focus")}).on("focus",function(){this.innerHTML=""}).on("dragenter mouseover",function(){e(this).addClass(t)}).on("dragleave mouseout",function(){e(this).removeClass(t)}).prependTo(i).after('<div class="elfinder-upload-dialog-or">'+d.i18n("or")+"</div>")[0],c=d.dialog(i,{title:this.title+'<span class="elfinder-upload-target">'+(m?" - "+d.escape(m.i18||m.name):"")+"</span>",modal:!0,resizable:!1,destroyOnClose:!0,close:function(){var e=d.getUI("contextmenu");e.is(":visible")&&e.click()}}),w)}},i.prototype.commands.view=function(){"use strict";var e=this.fm;this.value=e.viewType,this.alwaysEnabled=!0,this.updateOnSelect=!1,this.options={ui:"viewbutton"},this.getstate=function(){return 0},this.exec=function(){var t=this,n=e.storage("view","list"==this.value?"icons":"list");return e.lazy(function(){e.viewchange(),t.update(void 0,n),this.resolve()})}},i});
;(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Terminal = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CircularList_1 = require("./utils/CircularList");
var Buffer = (function () {
    function Buffer(_terminal) {
        this._terminal = _terminal;
        this.clear();
    }
    Object.defineProperty(Buffer.prototype, "lines", {
        get: function () {
            return this._lines;
        },
        enumerable: true,
        configurable: true
    });
    Buffer.prototype.fillViewportRows = function () {
        if (this._lines.length === 0) {
            var i = this._terminal.rows;
            while (i--) {
                this.lines.push(this._terminal.blankLine());
            }
        }
    };
    Buffer.prototype.clear = function () {
        this.ydisp = 0;
        this.ybase = 0;
        this.y = 0;
        this.x = 0;
        this.scrollBottom = 0;
        this.scrollTop = 0;
        this.tabs = {};
        this._lines = new CircularList_1.CircularList(this._terminal.scrollback);
        this.scrollBottom = this._terminal.rows - 1;
    };
    Buffer.prototype.resize = function (newCols, newRows) {
        if (this._lines.length === 0) {
            return;
        }
        if (this._terminal.cols < newCols) {
            var ch = [this._terminal.defAttr, ' ', 1];
            for (var i = 0; i < this._lines.length; i++) {
                if (this._lines.get(i) === undefined) {
                    this._lines.set(i, this._terminal.blankLine(undefined, undefined, newCols));
                }
                while (this._lines.get(i).length < newCols) {
                    this._lines.get(i).push(ch);
                }
            }
        }
        var addToY = 0;
        if (this._terminal.rows < newRows) {
            for (var y = this._terminal.rows; y < newRows; y++) {
                if (this._lines.length < newRows + this.ybase) {
                    if (this.ybase > 0 && this._lines.length <= this.ybase + this.y + addToY + 1) {
                        this.ybase--;
                        addToY++;
                        if (this.ydisp > 0) {
                            this.ydisp--;
                        }
                    }
                    else {
                        this._lines.push(this._terminal.blankLine(undefined, undefined, newCols));
                    }
                }
            }
        }
        else {
            for (var y = this._terminal.rows; y > newRows; y--) {
                if (this._lines.length > newRows + this.ybase) {
                    if (this._lines.length > this.ybase + this.y + 1) {
                        this._lines.pop();
                    }
                    else {
                        this.ybase++;
                        this.ydisp++;
                    }
                }
            }
        }
        if (this.y >= newRows) {
            this.y = newRows - 1;
        }
        if (addToY) {
            this.y += addToY;
        }
        if (this.x >= newCols) {
            this.x = newCols - 1;
        }
        this.scrollTop = 0;
        this.scrollBottom = newRows - 1;
    };
    return Buffer;
}());
exports.Buffer = Buffer;



},{"./utils/CircularList":18}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Buffer_1 = require("./Buffer");
var EventEmitter_1 = require("./EventEmitter");
var BufferSet = (function (_super) {
    __extends(BufferSet, _super);
    function BufferSet(_terminal) {
        var _this = _super.call(this) || this;
        _this._terminal = _terminal;
        _this._normal = new Buffer_1.Buffer(_this._terminal);
        _this._normal.fillViewportRows();
        _this._alt = new Buffer_1.Buffer(_this._terminal);
        _this._activeBuffer = _this._normal;
        return _this;
    }
    Object.defineProperty(BufferSet.prototype, "alt", {
        get: function () {
            return this._alt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferSet.prototype, "active", {
        get: function () {
            return this._activeBuffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferSet.prototype, "normal", {
        get: function () {
            return this._normal;
        },
        enumerable: true,
        configurable: true
    });
    BufferSet.prototype.activateNormalBuffer = function () {
        this._alt.clear();
        this._activeBuffer = this._normal;
        this.emit('activate', this._normal);
    };
    BufferSet.prototype.activateAltBuffer = function () {
        this._alt.fillViewportRows();
        this._activeBuffer = this._alt;
        this.emit('activate', this._alt);
    };
    BufferSet.prototype.resize = function (newCols, newRows) {
        this._normal.resize(newCols, newRows);
        this._alt.resize(newCols, newRows);
    };
    return BufferSet;
}(EventEmitter_1.EventEmitter));
exports.BufferSet = BufferSet;



},{"./Buffer":1,"./EventEmitter":6}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHARSETS = {};
exports.DEFAULT_CHARSET = exports.CHARSETS['B'];
exports.CHARSETS['0'] = {
    '`': '\u25c6',
    'a': '\u2592',
    'b': '\u0009',
    'c': '\u000c',
    'd': '\u000d',
    'e': '\u000a',
    'f': '\u00b0',
    'g': '\u00b1',
    'h': '\u2424',
    'i': '\u000b',
    'j': '\u2518',
    'k': '\u2510',
    'l': '\u250c',
    'm': '\u2514',
    'n': '\u253c',
    'o': '\u23ba',
    'p': '\u23bb',
    'q': '\u2500',
    'r': '\u23bc',
    's': '\u23bd',
    't': '\u251c',
    'u': '\u2524',
    'v': '\u2534',
    'w': '\u252c',
    'x': '\u2502',
    'y': '\u2264',
    'z': '\u2265',
    '{': '\u03c0',
    '|': '\u2260',
    '}': '\u00a3',
    '~': '\u00b7'
};
exports.CHARSETS['A'] = {
    '#': '£'
};
exports.CHARSETS['B'] = null;
exports.CHARSETS['4'] = {
    '#': '£',
    '@': '¾',
    '[': 'ij',
    '\\': '½',
    ']': '|',
    '{': '¨',
    '|': 'f',
    '}': '¼',
    '~': '´'
};
exports.CHARSETS['C'] =
    exports.CHARSETS['5'] = {
        '[': 'Ä',
        '\\': 'Ö',
        ']': 'Å',
        '^': 'Ü',
        '`': 'é',
        '{': 'ä',
        '|': 'ö',
        '}': 'å',
        '~': 'ü'
    };
exports.CHARSETS['R'] = {
    '#': '£',
    '@': 'à',
    '[': '°',
    '\\': 'ç',
    ']': '§',
    '{': 'é',
    '|': 'ù',
    '}': 'è',
    '~': '¨'
};
exports.CHARSETS['Q'] = {
    '@': 'à',
    '[': 'â',
    '\\': 'ç',
    ']': 'ê',
    '^': 'î',
    '`': 'ô',
    '{': 'é',
    '|': 'ù',
    '}': 'è',
    '~': 'û'
};
exports.CHARSETS['K'] = {
    '@': '§',
    '[': 'Ä',
    '\\': 'Ö',
    ']': 'Ü',
    '{': 'ä',
    '|': 'ö',
    '}': 'ü',
    '~': 'ß'
};
exports.CHARSETS['Y'] = {
    '#': '£',
    '@': '§',
    '[': '°',
    '\\': 'ç',
    ']': 'é',
    '`': 'ù',
    '{': 'à',
    '|': 'ò',
    '}': 'è',
    '~': 'ì'
};
exports.CHARSETS['E'] =
    exports.CHARSETS['6'] = {
        '@': 'Ä',
        '[': 'Æ',
        '\\': 'Ø',
        ']': 'Å',
        '^': 'Ü',
        '`': 'ä',
        '{': 'æ',
        '|': 'ø',
        '}': 'å',
        '~': 'ü'
    };
exports.CHARSETS['Z'] = {
    '#': '£',
    '@': '§',
    '[': '¡',
    '\\': 'Ñ',
    ']': '¿',
    '{': '°',
    '|': 'ñ',
    '}': 'ç'
};
exports.CHARSETS['H'] =
    exports.CHARSETS['7'] = {
        '@': 'É',
        '[': 'Ä',
        '\\': 'Ö',
        ']': 'Å',
        '^': 'Ü',
        '`': 'é',
        '{': 'ä',
        '|': 'ö',
        '}': 'å',
        '~': 'ü'
    };
exports.CHARSETS['='] = {
    '#': 'ù',
    '@': 'à',
    '[': 'é',
    '\\': 'ç',
    ']': 'ê',
    '^': 'î',
    '_': 'è',
    '`': 'ô',
    '{': 'ä',
    '|': 'ö',
    '}': 'ü',
    '~': 'û'
};



},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompositionHelper = (function () {
    function CompositionHelper(textarea, compositionView, terminal) {
        this.textarea = textarea;
        this.compositionView = compositionView;
        this.terminal = terminal;
        this.isComposing = false;
        this.isSendingComposition = false;
        this.compositionPosition = { start: null, end: null };
    }
    CompositionHelper.prototype.compositionstart = function () {
        this.isComposing = true;
        this.compositionPosition.start = this.textarea.value.length;
        this.compositionView.textContent = '';
        this.compositionView.classList.add('active');
    };
    CompositionHelper.prototype.compositionupdate = function (ev) {
        var _this = this;
        this.compositionView.textContent = ev.data;
        this.updateCompositionElements();
        setTimeout(function () {
            _this.compositionPosition.end = _this.textarea.value.length;
        }, 0);
    };
    CompositionHelper.prototype.compositionend = function () {
        this.finalizeComposition(true);
    };
    CompositionHelper.prototype.keydown = function (ev) {
        if (this.isComposing || this.isSendingComposition) {
            if (ev.keyCode === 229) {
                return false;
            }
            else if (ev.keyCode === 16 || ev.keyCode === 17 || ev.keyCode === 18) {
                return false;
            }
            else {
                this.finalizeComposition(false);
            }
        }
        if (ev.keyCode === 229) {
            this.handleAnyTextareaChanges();
            return false;
        }
        return true;
    };
    CompositionHelper.prototype.finalizeComposition = function (waitForPropogation) {
        var _this = this;
        this.compositionView.classList.remove('active');
        this.isComposing = false;
        this.clearTextareaPosition();
        if (!waitForPropogation) {
            this.isSendingComposition = false;
            var input = this.textarea.value.substring(this.compositionPosition.start, this.compositionPosition.end);
            this.terminal.handler(input);
        }
        else {
            var currentCompositionPosition_1 = {
                start: this.compositionPosition.start,
                end: this.compositionPosition.end,
            };
            this.isSendingComposition = true;
            setTimeout(function () {
                if (_this.isSendingComposition) {
                    _this.isSendingComposition = false;
                    var input = void 0;
                    if (_this.isComposing) {
                        input = _this.textarea.value.substring(currentCompositionPosition_1.start, currentCompositionPosition_1.end);
                    }
                    else {
                        input = _this.textarea.value.substring(currentCompositionPosition_1.start);
                    }
                    _this.terminal.handler(input);
                }
            }, 0);
        }
    };
    CompositionHelper.prototype.handleAnyTextareaChanges = function () {
        var _this = this;
        var oldValue = this.textarea.value;
        setTimeout(function () {
            if (!_this.isComposing) {
                var newValue = _this.textarea.value;
                var diff = newValue.replace(oldValue, '');
                if (diff.length > 0) {
                    _this.terminal.handler(diff);
                }
            }
        }, 0);
    };
    CompositionHelper.prototype.updateCompositionElements = function (dontRecurse) {
        var _this = this;
        if (!this.isComposing) {
            return;
        }
        var cursor = this.terminal.element.querySelector('.terminal-cursor');
        if (cursor) {
            var xtermRows = this.terminal.element.querySelector('.xterm-rows');
            var cursorTop = xtermRows.offsetTop + cursor.offsetTop;
            this.compositionView.style.left = cursor.offsetLeft + 'px';
            this.compositionView.style.top = cursorTop + 'px';
            this.compositionView.style.height = cursor.offsetHeight + 'px';
            this.compositionView.style.lineHeight = cursor.offsetHeight + 'px';
            var compositionViewBounds = this.compositionView.getBoundingClientRect();
            this.textarea.style.left = cursor.offsetLeft + 'px';
            this.textarea.style.top = cursorTop + 'px';
            this.textarea.style.width = compositionViewBounds.width + 'px';
            this.textarea.style.height = compositionViewBounds.height + 'px';
            this.textarea.style.lineHeight = compositionViewBounds.height + 'px';
        }
        if (!dontRecurse) {
            setTimeout(function () { return _this.updateCompositionElements(true); }, 0);
        }
    };
    ;
    CompositionHelper.prototype.clearTextareaPosition = function () {
        this.textarea.style.left = '';
        this.textarea.style.top = '';
    };
    ;
    return CompositionHelper;
}());
exports.CompositionHelper = CompositionHelper;



},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C0;
(function (C0) {
    C0.NUL = '\x00';
    C0.SOH = '\x01';
    C0.STX = '\x02';
    C0.ETX = '\x03';
    C0.EOT = '\x04';
    C0.ENQ = '\x05';
    C0.ACK = '\x06';
    C0.BEL = '\x07';
    C0.BS = '\x08';
    C0.HT = '\x09';
    C0.LF = '\x0a';
    C0.VT = '\x0b';
    C0.FF = '\x0c';
    C0.CR = '\x0d';
    C0.SO = '\x0e';
    C0.SI = '\x0f';
    C0.DLE = '\x10';
    C0.DC1 = '\x11';
    C0.DC2 = '\x12';
    C0.DC3 = '\x13';
    C0.DC4 = '\x14';
    C0.NAK = '\x15';
    C0.SYN = '\x16';
    C0.ETB = '\x17';
    C0.CAN = '\x18';
    C0.EM = '\x19';
    C0.SUB = '\x1a';
    C0.ESC = '\x1b';
    C0.FS = '\x1c';
    C0.GS = '\x1d';
    C0.RS = '\x1e';
    C0.US = '\x1f';
    C0.SP = '\x20';
    C0.DEL = '\x7f';
})(C0 = exports.C0 || (exports.C0 = {}));
;



},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var EventEmitter = (function () {
    function EventEmitter() {
        this._events = this._events || {};
    }
    EventEmitter.prototype.on = function (type, listener) {
        this._events[type] = this._events[type] || [];
        this._events[type].push(listener);
    };
    EventEmitter.prototype.off = function (type, listener) {
        if (!this._events[type]) {
            return;
        }
        var obj = this._events[type];
        var i = obj.length;
        while (i--) {
            if (obj[i] === listener || obj[i].listener === listener) {
                obj.splice(i, 1);
                return;
            }
        }
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (this._events[type]) {
            delete this._events[type];
        }
    };
    EventEmitter.prototype.once = function (type, listener) {
        function on() {
            var args = Array.prototype.slice.call(arguments);
            this.off(type, on);
            return listener.apply(this, args);
        }
        on.listener = listener;
        return this.on(type, on);
    };
    EventEmitter.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._events[type]) {
            return;
        }
        var obj = this._events[type];
        for (var i = 0; i < obj.length; i++) {
            obj[i].apply(this, args);
        }
    };
    EventEmitter.prototype.listeners = function (type) {
        return this._events[type] || [];
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;



},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EscapeSequences_1 = require("./EscapeSequences");
var Charsets_1 = require("./Charsets");
var InputHandler = (function () {
    function InputHandler(_terminal) {
        this._terminal = _terminal;
    }
    InputHandler.prototype.addChar = function (char, code) {
        if (char >= ' ') {
            var ch_width = exports.wcwidth(code);
            if (this._terminal.charset && this._terminal.charset[char]) {
                char = this._terminal.charset[char];
            }
            var row = this._terminal.buffer.y + this._terminal.buffer.ybase;
            if (!ch_width && this._terminal.buffer.x) {
                if (this._terminal.buffer.lines.get(row)[this._terminal.buffer.x - 1]) {
                    if (!this._terminal.buffer.lines.get(row)[this._terminal.buffer.x - 1][2]) {
                        if (this._terminal.buffer.lines.get(row)[this._terminal.buffer.x - 2])
                            this._terminal.buffer.lines.get(row)[this._terminal.buffer.x - 2][1] += char;
                    }
                    else {
                        this._terminal.buffer.lines.get(row)[this._terminal.buffer.x - 1][1] += char;
                    }
                    this._terminal.updateRange(this._terminal.buffer.y);
                }
                return;
            }
            if (this._terminal.buffer.x + ch_width - 1 >= this._terminal.cols) {
                if (this._terminal.wraparoundMode) {
                    this._terminal.buffer.x = 0;
                    this._terminal.buffer.y++;
                    if (this._terminal.buffer.y > this._terminal.buffer.scrollBottom) {
                        this._terminal.buffer.y--;
                        this._terminal.scroll(true);
                    }
                    else {
                        this._terminal.buffer.lines.get(this._terminal.buffer.y).isWrapped = true;
                    }
                }
                else {
                    if (ch_width === 2)
                        return;
                }
            }
            row = this._terminal.buffer.y + this._terminal.buffer.ybase;
            if (this._terminal.insertMode) {
                for (var moves = 0; moves < ch_width; ++moves) {
                    var removed = this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).pop();
                    if (removed[2] === 0
                        && this._terminal.buffer.lines.get(row)[this._terminal.cols - 2]
                        && this._terminal.buffer.lines.get(row)[this._terminal.cols - 2][2] === 2) {
                        this._terminal.buffer.lines.get(row)[this._terminal.cols - 2] = [this._terminal.curAttr, ' ', 1];
                    }
                    this._terminal.buffer.lines.get(row).splice(this._terminal.buffer.x, 0, [this._terminal.curAttr, ' ', 1]);
                }
            }
            this._terminal.buffer.lines.get(row)[this._terminal.buffer.x] = [this._terminal.curAttr, char, ch_width];
            this._terminal.buffer.x++;
            this._terminal.updateRange(this._terminal.buffer.y);
            if (ch_width === 2) {
                this._terminal.buffer.lines.get(row)[this._terminal.buffer.x] = [this._terminal.curAttr, '', 0];
                this._terminal.buffer.x++;
            }
        }
    };
    InputHandler.prototype.bell = function () {
        var _this = this;
        if (!this._terminal.visualBell) {
            return;
        }
        this._terminal.element.style.borderColor = 'white';
        setTimeout(function () { return _this._terminal.element.style.borderColor = ''; }, 10);
        if (this._terminal.popOnBell) {
            this._terminal.focus();
        }
    };
    InputHandler.prototype.lineFeed = function () {
        if (this._terminal.convertEol) {
            this._terminal.buffer.x = 0;
        }
        this._terminal.buffer.y++;
        if (this._terminal.buffer.y > this._terminal.buffer.scrollBottom) {
            this._terminal.buffer.y--;
            this._terminal.scroll();
        }
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x--;
        }
        this._terminal.emit('lineFeed');
    };
    InputHandler.prototype.carriageReturn = function () {
        this._terminal.buffer.x = 0;
    };
    InputHandler.prototype.backspace = function () {
        if (this._terminal.buffer.x > 0) {
            this._terminal.buffer.x--;
        }
    };
    InputHandler.prototype.tab = function () {
        this._terminal.buffer.x = this._terminal.nextStop();
    };
    InputHandler.prototype.shiftOut = function () {
        this._terminal.setgLevel(1);
    };
    InputHandler.prototype.shiftIn = function () {
        this._terminal.setgLevel(0);
    };
    InputHandler.prototype.insertChars = function (params) {
        var param, row, j, ch;
        param = params[0];
        if (param < 1)
            param = 1;
        row = this._terminal.buffer.y + this._terminal.buffer.ybase;
        j = this._terminal.buffer.x;
        ch = [this._terminal.eraseAttr(), ' ', 1];
        while (param-- && j < this._terminal.cols) {
            this._terminal.buffer.lines.get(row).splice(j++, 0, ch);
            this._terminal.buffer.lines.get(row).pop();
        }
    };
    InputHandler.prototype.cursorUp = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.y -= param;
        if (this._terminal.buffer.y < 0) {
            this._terminal.buffer.y = 0;
        }
    };
    InputHandler.prototype.cursorDown = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.y += param;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x--;
        }
    };
    InputHandler.prototype.cursorForward = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.x += param;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    InputHandler.prototype.cursorBackward = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x--;
        }
        this._terminal.buffer.x -= param;
        if (this._terminal.buffer.x < 0) {
            this._terminal.buffer.x = 0;
        }
    };
    InputHandler.prototype.cursorNextLine = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.y += param;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        this._terminal.buffer.x = 0;
    };
    InputHandler.prototype.cursorPrecedingLine = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.y -= param;
        if (this._terminal.buffer.y < 0) {
            this._terminal.buffer.y = 0;
        }
        this._terminal.buffer.x = 0;
    };
    InputHandler.prototype.cursorCharAbsolute = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.x = param - 1;
    };
    InputHandler.prototype.cursorPosition = function (params) {
        var row, col;
        row = params[0] - 1;
        if (params.length >= 2) {
            col = params[1] - 1;
        }
        else {
            col = 0;
        }
        if (row < 0) {
            row = 0;
        }
        else if (row >= this._terminal.rows) {
            row = this._terminal.rows - 1;
        }
        if (col < 0) {
            col = 0;
        }
        else if (col >= this._terminal.cols) {
            col = this._terminal.cols - 1;
        }
        this._terminal.buffer.x = col;
        this._terminal.buffer.y = row;
    };
    InputHandler.prototype.cursorForwardTab = function (params) {
        var param = params[0] || 1;
        while (param--) {
            this._terminal.buffer.x = this._terminal.nextStop();
        }
    };
    InputHandler.prototype.eraseInDisplay = function (params) {
        var j;
        switch (params[0]) {
            case 0:
                this._terminal.eraseRight(this._terminal.buffer.x, this._terminal.buffer.y);
                j = this._terminal.buffer.y + 1;
                for (; j < this._terminal.rows; j++) {
                    this._terminal.eraseLine(j);
                }
                break;
            case 1:
                this._terminal.eraseLeft(this._terminal.buffer.x, this._terminal.buffer.y);
                j = this._terminal.buffer.y;
                while (j--) {
                    this._terminal.eraseLine(j);
                }
                break;
            case 2:
                j = this._terminal.rows;
                while (j--)
                    this._terminal.eraseLine(j);
                break;
            case 3:
                var scrollBackSize = this._terminal.buffer.lines.length - this._terminal.rows;
                if (scrollBackSize > 0) {
                    this._terminal.buffer.lines.trimStart(scrollBackSize);
                    this._terminal.buffer.ybase = Math.max(this._terminal.buffer.ybase - scrollBackSize, 0);
                    this._terminal.buffer.ydisp = Math.max(this._terminal.buffer.ydisp - scrollBackSize, 0);
                    this._terminal.emit('scroll', 0);
                }
                break;
        }
    };
    InputHandler.prototype.eraseInLine = function (params) {
        switch (params[0]) {
            case 0:
                this._terminal.eraseRight(this._terminal.buffer.x, this._terminal.buffer.y);
                break;
            case 1:
                this._terminal.eraseLeft(this._terminal.buffer.x, this._terminal.buffer.y);
                break;
            case 2:
                this._terminal.eraseLine(this._terminal.buffer.y);
                break;
        }
    };
    InputHandler.prototype.insertLines = function (params) {
        var param, row, j;
        param = params[0];
        if (param < 1) {
            param = 1;
        }
        row = this._terminal.buffer.y + this._terminal.buffer.ybase;
        j = this._terminal.rows - 1 - this._terminal.buffer.scrollBottom;
        j = this._terminal.rows - 1 + this._terminal.buffer.ybase - j + 1;
        while (param--) {
            if (this._terminal.buffer.lines.length === this._terminal.buffer.lines.maxLength) {
                this._terminal.buffer.lines.trimStart(1);
                this._terminal.buffer.ybase--;
                this._terminal.buffer.ydisp--;
                row--;
                j--;
            }
            this._terminal.buffer.lines.splice(row, 0, this._terminal.blankLine(true));
            this._terminal.buffer.lines.splice(j, 1);
        }
        this._terminal.updateRange(this._terminal.buffer.y);
        this._terminal.updateRange(this._terminal.buffer.scrollBottom);
    };
    InputHandler.prototype.deleteLines = function (params) {
        var param, row, j;
        param = params[0];
        if (param < 1) {
            param = 1;
        }
        row = this._terminal.buffer.y + this._terminal.buffer.ybase;
        j = this._terminal.rows - 1 - this._terminal.buffer.scrollBottom;
        j = this._terminal.rows - 1 + this._terminal.buffer.ybase - j;
        while (param--) {
            if (this._terminal.buffer.lines.length === this._terminal.buffer.lines.maxLength) {
                this._terminal.buffer.lines.trimStart(1);
                this._terminal.buffer.ybase -= 1;
                this._terminal.buffer.ydisp -= 1;
            }
            this._terminal.buffer.lines.splice(j + 1, 0, this._terminal.blankLine(true));
            this._terminal.buffer.lines.splice(row, 1);
        }
        this._terminal.updateRange(this._terminal.buffer.y);
        this._terminal.updateRange(this._terminal.buffer.scrollBottom);
    };
    InputHandler.prototype.deleteChars = function (params) {
        var param, row, ch;
        param = params[0];
        if (param < 1) {
            param = 1;
        }
        row = this._terminal.buffer.y + this._terminal.buffer.ybase;
        ch = [this._terminal.eraseAttr(), ' ', 1];
        while (param--) {
            this._terminal.buffer.lines.get(row).splice(this._terminal.buffer.x, 1);
            this._terminal.buffer.lines.get(row).push(ch);
        }
    };
    InputHandler.prototype.scrollUp = function (params) {
        var param = params[0] || 1;
        while (param--) {
            this._terminal.buffer.lines.splice(this._terminal.buffer.ybase + this._terminal.buffer.scrollTop, 1);
            this._terminal.buffer.lines.splice(this._terminal.buffer.ybase + this._terminal.buffer.scrollBottom, 0, this._terminal.blankLine());
        }
        this._terminal.updateRange(this._terminal.buffer.scrollTop);
        this._terminal.updateRange(this._terminal.buffer.scrollBottom);
    };
    InputHandler.prototype.scrollDown = function (params) {
        var param = params[0] || 1;
        while (param--) {
            this._terminal.buffer.lines.splice(this._terminal.buffer.ybase + this._terminal.buffer.scrollBottom, 1);
            this._terminal.buffer.lines.splice(this._terminal.buffer.ybase + this._terminal.buffer.scrollTop, 0, this._terminal.blankLine());
        }
        this._terminal.updateRange(this._terminal.buffer.scrollTop);
        this._terminal.updateRange(this._terminal.buffer.scrollBottom);
    };
    InputHandler.prototype.eraseChars = function (params) {
        var param, row, j, ch;
        param = params[0];
        if (param < 1) {
            param = 1;
        }
        row = this._terminal.buffer.y + this._terminal.buffer.ybase;
        j = this._terminal.buffer.x;
        ch = [this._terminal.eraseAttr(), ' ', 1];
        while (param-- && j < this._terminal.cols) {
            this._terminal.buffer.lines.get(row)[j++] = ch;
        }
    };
    InputHandler.prototype.cursorBackwardTab = function (params) {
        var param = params[0] || 1;
        while (param--) {
            this._terminal.buffer.x = this._terminal.prevStop();
        }
    };
    InputHandler.prototype.charPosAbsolute = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.x = param - 1;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    InputHandler.prototype.HPositionRelative = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.x += param;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    InputHandler.prototype.repeatPrecedingCharacter = function (params) {
        var param = params[0] || 1, line = this._terminal.buffer.lines.get(this._terminal.buffer.ybase + this._terminal.buffer.y), ch = line[this._terminal.buffer.x - 1] || [this._terminal.defAttr, ' ', 1];
        while (param--) {
            line[this._terminal.buffer.x++] = ch;
        }
    };
    InputHandler.prototype.sendDeviceAttributes = function (params) {
        if (params[0] > 0) {
            return;
        }
        if (!this._terminal.prefix) {
            if (this._terminal.is('xterm') || this._terminal.is('rxvt-unicode') || this._terminal.is('screen')) {
                this._terminal.send(EscapeSequences_1.C0.ESC + '[?1;2c');
            }
            else if (this._terminal.is('linux')) {
                this._terminal.send(EscapeSequences_1.C0.ESC + '[?6c');
            }
        }
        else if (this._terminal.prefix === '>') {
            if (this._terminal.is('xterm')) {
                this._terminal.send(EscapeSequences_1.C0.ESC + '[>0;276;0c');
            }
            else if (this._terminal.is('rxvt-unicode')) {
                this._terminal.send(EscapeSequences_1.C0.ESC + '[>85;95;0c');
            }
            else if (this._terminal.is('linux')) {
                this._terminal.send(params[0] + 'c');
            }
            else if (this._terminal.is('screen')) {
                this._terminal.send(EscapeSequences_1.C0.ESC + '[>83;40003;0c');
            }
        }
    };
    InputHandler.prototype.linePosAbsolute = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.y = param - 1;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
    };
    InputHandler.prototype.VPositionRelative = function (params) {
        var param = params[0];
        if (param < 1) {
            param = 1;
        }
        this._terminal.buffer.y += param;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x--;
        }
    };
    InputHandler.prototype.HVPosition = function (params) {
        if (params[0] < 1)
            params[0] = 1;
        if (params[1] < 1)
            params[1] = 1;
        this._terminal.buffer.y = params[0] - 1;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        this._terminal.buffer.x = params[1] - 1;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    InputHandler.prototype.tabClear = function (params) {
        var param = params[0];
        if (param <= 0) {
            delete this._terminal.buffer.tabs[this._terminal.buffer.x];
        }
        else if (param === 3) {
            this._terminal.buffer.tabs = {};
        }
    };
    InputHandler.prototype.setMode = function (params) {
        if (params.length > 1) {
            for (var i = 0; i < params.length; i++) {
                this.setMode([params[i]]);
            }
            return;
        }
        if (!this._terminal.prefix) {
            switch (params[0]) {
                case 4:
                    this._terminal.insertMode = true;
                    break;
                case 20:
                    break;
            }
        }
        else if (this._terminal.prefix === '?') {
            switch (params[0]) {
                case 1:
                    this._terminal.applicationCursor = true;
                    break;
                case 2:
                    this._terminal.setgCharset(0, Charsets_1.DEFAULT_CHARSET);
                    this._terminal.setgCharset(1, Charsets_1.DEFAULT_CHARSET);
                    this._terminal.setgCharset(2, Charsets_1.DEFAULT_CHARSET);
                    this._terminal.setgCharset(3, Charsets_1.DEFAULT_CHARSET);
                    break;
                case 3:
                    this._terminal.savedCols = this._terminal.cols;
                    this._terminal.resize(132, this._terminal.rows);
                    break;
                case 6:
                    this._terminal.originMode = true;
                    break;
                case 7:
                    this._terminal.wraparoundMode = true;
                    break;
                case 12:
                    break;
                case 66:
                    this._terminal.log('Serial port requested application keypad.');
                    this._terminal.applicationKeypad = true;
                    this._terminal.viewport.syncScrollArea();
                    break;
                case 9:
                case 1000:
                case 1002:
                case 1003:
                    this._terminal.x10Mouse = params[0] === 9;
                    this._terminal.vt200Mouse = params[0] === 1000;
                    this._terminal.normalMouse = params[0] > 1000;
                    this._terminal.mouseEvents = true;
                    this._terminal.element.classList.add('enable-mouse-events');
                    this._terminal.selectionManager.disable();
                    this._terminal.log('Binding to mouse events.');
                    break;
                case 1004:
                    this._terminal.sendFocus = true;
                    break;
                case 1005:
                    this._terminal.utfMouse = true;
                    break;
                case 1006:
                    this._terminal.sgrMouse = true;
                    break;
                case 1015:
                    this._terminal.urxvtMouse = true;
                    break;
                case 25:
                    this._terminal.cursorHidden = false;
                    break;
                case 1049:
                case 47:
                case 1047:
                    this._terminal.buffers.activateAltBuffer();
                    this._terminal.viewport.syncScrollArea();
                    this._terminal.showCursor();
                    break;
            }
        }
    };
    InputHandler.prototype.resetMode = function (params) {
        if (params.length > 1) {
            for (var i = 0; i < params.length; i++) {
                this.resetMode([params[i]]);
            }
            return;
        }
        if (!this._terminal.prefix) {
            switch (params[0]) {
                case 4:
                    this._terminal.insertMode = false;
                    break;
                case 20:
                    break;
            }
        }
        else if (this._terminal.prefix === '?') {
            switch (params[0]) {
                case 1:
                    this._terminal.applicationCursor = false;
                    break;
                case 3:
                    if (this._terminal.cols === 132 && this._terminal.savedCols) {
                        this._terminal.resize(this._terminal.savedCols, this._terminal.rows);
                    }
                    delete this._terminal.savedCols;
                    break;
                case 6:
                    this._terminal.originMode = false;
                    break;
                case 7:
                    this._terminal.wraparoundMode = false;
                    break;
                case 12:
                    break;
                case 66:
                    this._terminal.log('Switching back to normal keypad.');
                    this._terminal.applicationKeypad = false;
                    this._terminal.viewport.syncScrollArea();
                    break;
                case 9:
                case 1000:
                case 1002:
                case 1003:
                    this._terminal.x10Mouse = false;
                    this._terminal.vt200Mouse = false;
                    this._terminal.normalMouse = false;
                    this._terminal.mouseEvents = false;
                    this._terminal.element.classList.remove('enable-mouse-events');
                    this._terminal.selectionManager.enable();
                    break;
                case 1004:
                    this._terminal.sendFocus = false;
                    break;
                case 1005:
                    this._terminal.utfMouse = false;
                    break;
                case 1006:
                    this._terminal.sgrMouse = false;
                    break;
                case 1015:
                    this._terminal.urxvtMouse = false;
                    break;
                case 25:
                    this._terminal.cursorHidden = true;
                    break;
                case 1049:
                case 47:
                case 1047:
                    this._terminal.buffers.activateNormalBuffer();
                    this._terminal.selectionManager.setBuffer(this._terminal.buffer.lines);
                    this._terminal.refresh(0, this._terminal.rows - 1);
                    this._terminal.viewport.syncScrollArea();
                    this._terminal.showCursor();
                    break;
            }
        }
    };
    InputHandler.prototype.charAttributes = function (params) {
        if (params.length === 1 && params[0] === 0) {
            this._terminal.curAttr = this._terminal.defAttr;
            return;
        }
        var l = params.length, i = 0, flags = this._terminal.curAttr >> 18, fg = (this._terminal.curAttr >> 9) & 0x1ff, bg = this._terminal.curAttr & 0x1ff, p;
        for (; i < l; i++) {
            p = params[i];
            if (p >= 30 && p <= 37) {
                fg = p - 30;
            }
            else if (p >= 40 && p <= 47) {
                bg = p - 40;
            }
            else if (p >= 90 && p <= 97) {
                p += 8;
                fg = p - 90;
            }
            else if (p >= 100 && p <= 107) {
                p += 8;
                bg = p - 100;
            }
            else if (p === 0) {
                flags = this._terminal.defAttr >> 18;
                fg = (this._terminal.defAttr >> 9) & 0x1ff;
                bg = this._terminal.defAttr & 0x1ff;
            }
            else if (p === 1) {
                flags |= 1;
            }
            else if (p === 4) {
                flags |= 2;
            }
            else if (p === 5) {
                flags |= 4;
            }
            else if (p === 7) {
                flags |= 8;
            }
            else if (p === 8) {
                flags |= 16;
            }
            else if (p === 22) {
                flags &= ~1;
            }
            else if (p === 24) {
                flags &= ~2;
            }
            else if (p === 25) {
                flags &= ~4;
            }
            else if (p === 27) {
                flags &= ~8;
            }
            else if (p === 28) {
                flags &= ~16;
            }
            else if (p === 39) {
                fg = (this._terminal.defAttr >> 9) & 0x1ff;
            }
            else if (p === 49) {
                bg = this._terminal.defAttr & 0x1ff;
            }
            else if (p === 38) {
                if (params[i + 1] === 2) {
                    i += 2;
                    fg = this._terminal.matchColor(params[i] & 0xff, params[i + 1] & 0xff, params[i + 2] & 0xff);
                    if (fg === -1)
                        fg = 0x1ff;
                    i += 2;
                }
                else if (params[i + 1] === 5) {
                    i += 2;
                    p = params[i] & 0xff;
                    fg = p;
                }
            }
            else if (p === 48) {
                if (params[i + 1] === 2) {
                    i += 2;
                    bg = this._terminal.matchColor(params[i] & 0xff, params[i + 1] & 0xff, params[i + 2] & 0xff);
                    if (bg === -1)
                        bg = 0x1ff;
                    i += 2;
                }
                else if (params[i + 1] === 5) {
                    i += 2;
                    p = params[i] & 0xff;
                    bg = p;
                }
            }
            else if (p === 100) {
                fg = (this._terminal.defAttr >> 9) & 0x1ff;
                bg = this._terminal.defAttr & 0x1ff;
            }
            else {
                this._terminal.error('Unknown SGR attribute: %d.', p);
            }
        }
        this._terminal.curAttr = (flags << 18) | (fg << 9) | bg;
    };
    InputHandler.prototype.deviceStatus = function (params) {
        if (!this._terminal.prefix) {
            switch (params[0]) {
                case 5:
                    this._terminal.send(EscapeSequences_1.C0.ESC + '[0n');
                    break;
                case 6:
                    this._terminal.send(EscapeSequences_1.C0.ESC + '['
                        + (this._terminal.buffer.y + 1)
                        + ';'
                        + (this._terminal.buffer.x + 1)
                        + 'R');
                    break;
            }
        }
        else if (this._terminal.prefix === '?') {
            switch (params[0]) {
                case 6:
                    this._terminal.send(EscapeSequences_1.C0.ESC + '[?'
                        + (this._terminal.buffer.y + 1)
                        + ';'
                        + (this._terminal.buffer.x + 1)
                        + 'R');
                    break;
                case 15:
                    break;
                case 25:
                    break;
                case 26:
                    break;
                case 53:
                    break;
            }
        }
    };
    InputHandler.prototype.softReset = function (params) {
        this._terminal.cursorHidden = false;
        this._terminal.insertMode = false;
        this._terminal.originMode = false;
        this._terminal.wraparoundMode = true;
        this._terminal.applicationKeypad = false;
        this._terminal.viewport.syncScrollArea();
        this._terminal.applicationCursor = false;
        this._terminal.buffer.scrollTop = 0;
        this._terminal.buffer.scrollBottom = this._terminal.rows - 1;
        this._terminal.curAttr = this._terminal.defAttr;
        this._terminal.buffer.x = this._terminal.buffer.y = 0;
        this._terminal.charset = null;
        this._terminal.glevel = 0;
        this._terminal.charsets = [null];
    };
    InputHandler.prototype.setCursorStyle = function (params) {
        var param = params[0] < 1 ? 1 : params[0];
        switch (param) {
            case 1:
            case 2:
                this._terminal.setOption('cursorStyle', 'block');
                break;
            case 3:
            case 4:
                this._terminal.setOption('cursorStyle', 'underline');
                break;
            case 5:
            case 6:
                this._terminal.setOption('cursorStyle', 'bar');
                break;
        }
        var isBlinking = param % 2 === 1;
        this._terminal.setOption('cursorBlink', isBlinking);
    };
    InputHandler.prototype.setScrollRegion = function (params) {
        if (this._terminal.prefix)
            return;
        this._terminal.buffer.scrollTop = (params[0] || 1) - 1;
        this._terminal.buffer.scrollBottom = (params[1] && params[1] <= this._terminal.rows ? params[1] : this._terminal.rows) - 1;
        this._terminal.buffer.x = 0;
        this._terminal.buffer.y = 0;
    };
    InputHandler.prototype.saveCursor = function (params) {
        this._terminal.buffer.savedX = this._terminal.buffer.x;
        this._terminal.buffer.savedY = this._terminal.buffer.y;
    };
    InputHandler.prototype.restoreCursor = function (params) {
        this._terminal.buffer.x = this._terminal.buffer.savedX || 0;
        this._terminal.buffer.y = this._terminal.buffer.savedY || 0;
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;
exports.wcwidth = (function (opts) {
    var COMBINING_BMP = [
        [0x0300, 0x036F], [0x0483, 0x0486], [0x0488, 0x0489],
        [0x0591, 0x05BD], [0x05BF, 0x05BF], [0x05C1, 0x05C2],
        [0x05C4, 0x05C5], [0x05C7, 0x05C7], [0x0600, 0x0603],
        [0x0610, 0x0615], [0x064B, 0x065E], [0x0670, 0x0670],
        [0x06D6, 0x06E4], [0x06E7, 0x06E8], [0x06EA, 0x06ED],
        [0x070F, 0x070F], [0x0711, 0x0711], [0x0730, 0x074A],
        [0x07A6, 0x07B0], [0x07EB, 0x07F3], [0x0901, 0x0902],
        [0x093C, 0x093C], [0x0941, 0x0948], [0x094D, 0x094D],
        [0x0951, 0x0954], [0x0962, 0x0963], [0x0981, 0x0981],
        [0x09BC, 0x09BC], [0x09C1, 0x09C4], [0x09CD, 0x09CD],
        [0x09E2, 0x09E3], [0x0A01, 0x0A02], [0x0A3C, 0x0A3C],
        [0x0A41, 0x0A42], [0x0A47, 0x0A48], [0x0A4B, 0x0A4D],
        [0x0A70, 0x0A71], [0x0A81, 0x0A82], [0x0ABC, 0x0ABC],
        [0x0AC1, 0x0AC5], [0x0AC7, 0x0AC8], [0x0ACD, 0x0ACD],
        [0x0AE2, 0x0AE3], [0x0B01, 0x0B01], [0x0B3C, 0x0B3C],
        [0x0B3F, 0x0B3F], [0x0B41, 0x0B43], [0x0B4D, 0x0B4D],
        [0x0B56, 0x0B56], [0x0B82, 0x0B82], [0x0BC0, 0x0BC0],
        [0x0BCD, 0x0BCD], [0x0C3E, 0x0C40], [0x0C46, 0x0C48],
        [0x0C4A, 0x0C4D], [0x0C55, 0x0C56], [0x0CBC, 0x0CBC],
        [0x0CBF, 0x0CBF], [0x0CC6, 0x0CC6], [0x0CCC, 0x0CCD],
        [0x0CE2, 0x0CE3], [0x0D41, 0x0D43], [0x0D4D, 0x0D4D],
        [0x0DCA, 0x0DCA], [0x0DD2, 0x0DD4], [0x0DD6, 0x0DD6],
        [0x0E31, 0x0E31], [0x0E34, 0x0E3A], [0x0E47, 0x0E4E],
        [0x0EB1, 0x0EB1], [0x0EB4, 0x0EB9], [0x0EBB, 0x0EBC],
        [0x0EC8, 0x0ECD], [0x0F18, 0x0F19], [0x0F35, 0x0F35],
        [0x0F37, 0x0F37], [0x0F39, 0x0F39], [0x0F71, 0x0F7E],
        [0x0F80, 0x0F84], [0x0F86, 0x0F87], [0x0F90, 0x0F97],
        [0x0F99, 0x0FBC], [0x0FC6, 0x0FC6], [0x102D, 0x1030],
        [0x1032, 0x1032], [0x1036, 0x1037], [0x1039, 0x1039],
        [0x1058, 0x1059], [0x1160, 0x11FF], [0x135F, 0x135F],
        [0x1712, 0x1714], [0x1732, 0x1734], [0x1752, 0x1753],
        [0x1772, 0x1773], [0x17B4, 0x17B5], [0x17B7, 0x17BD],
        [0x17C6, 0x17C6], [0x17C9, 0x17D3], [0x17DD, 0x17DD],
        [0x180B, 0x180D], [0x18A9, 0x18A9], [0x1920, 0x1922],
        [0x1927, 0x1928], [0x1932, 0x1932], [0x1939, 0x193B],
        [0x1A17, 0x1A18], [0x1B00, 0x1B03], [0x1B34, 0x1B34],
        [0x1B36, 0x1B3A], [0x1B3C, 0x1B3C], [0x1B42, 0x1B42],
        [0x1B6B, 0x1B73], [0x1DC0, 0x1DCA], [0x1DFE, 0x1DFF],
        [0x200B, 0x200F], [0x202A, 0x202E], [0x2060, 0x2063],
        [0x206A, 0x206F], [0x20D0, 0x20EF], [0x302A, 0x302F],
        [0x3099, 0x309A], [0xA806, 0xA806], [0xA80B, 0xA80B],
        [0xA825, 0xA826], [0xFB1E, 0xFB1E], [0xFE00, 0xFE0F],
        [0xFE20, 0xFE23], [0xFEFF, 0xFEFF], [0xFFF9, 0xFFFB],
    ];
    var COMBINING_HIGH = [
        [0x10A01, 0x10A03], [0x10A05, 0x10A06], [0x10A0C, 0x10A0F],
        [0x10A38, 0x10A3A], [0x10A3F, 0x10A3F], [0x1D167, 0x1D169],
        [0x1D173, 0x1D182], [0x1D185, 0x1D18B], [0x1D1AA, 0x1D1AD],
        [0x1D242, 0x1D244], [0xE0001, 0xE0001], [0xE0020, 0xE007F],
        [0xE0100, 0xE01EF]
    ];
    function bisearch(ucs, data) {
        var min = 0;
        var max = data.length - 1;
        var mid;
        if (ucs < data[0][0] || ucs > data[max][1])
            return false;
        while (max >= min) {
            mid = (min + max) >> 1;
            if (ucs > data[mid][1])
                min = mid + 1;
            else if (ucs < data[mid][0])
                max = mid - 1;
            else
                return true;
        }
        return false;
    }
    function wcwidthBMP(ucs) {
        if (ucs === 0)
            return opts.nul;
        if (ucs < 32 || (ucs >= 0x7f && ucs < 0xa0))
            return opts.control;
        if (bisearch(ucs, COMBINING_BMP))
            return 0;
        if (isWideBMP(ucs)) {
            return 2;
        }
        return 1;
    }
    function isWideBMP(ucs) {
        return (ucs >= 0x1100 && (ucs <= 0x115f ||
            ucs === 0x2329 ||
            ucs === 0x232a ||
            (ucs >= 0x2e80 && ucs <= 0xa4cf && ucs !== 0x303f) ||
            (ucs >= 0xac00 && ucs <= 0xd7a3) ||
            (ucs >= 0xf900 && ucs <= 0xfaff) ||
            (ucs >= 0xfe10 && ucs <= 0xfe19) ||
            (ucs >= 0xfe30 && ucs <= 0xfe6f) ||
            (ucs >= 0xff00 && ucs <= 0xff60) ||
            (ucs >= 0xffe0 && ucs <= 0xffe6)));
    }
    function wcwidthHigh(ucs) {
        if (bisearch(ucs, COMBINING_HIGH))
            return 0;
        if ((ucs >= 0x20000 && ucs <= 0x2fffd) || (ucs >= 0x30000 && ucs <= 0x3fffd)) {
            return 2;
        }
        return 1;
    }
    var control = opts.control | 0;
    var table = null;
    function init_table() {
        var CODEPOINTS = 65536;
        var BITWIDTH = 2;
        var ITEMSIZE = 32;
        var CONTAINERSIZE = CODEPOINTS * BITWIDTH / ITEMSIZE;
        var CODEPOINTS_PER_ITEM = ITEMSIZE / BITWIDTH;
        table = (typeof Uint32Array === 'undefined')
            ? new Array(CONTAINERSIZE)
            : new Uint32Array(CONTAINERSIZE);
        for (var i = 0; i < CONTAINERSIZE; ++i) {
            var num = 0;
            var pos = CODEPOINTS_PER_ITEM;
            while (pos--)
                num = (num << 2) | wcwidthBMP(CODEPOINTS_PER_ITEM * i + pos);
            table[i] = num;
        }
        return table;
    }
    return function (num) {
        num = num | 0;
        if (num < 32)
            return control | 0;
        if (num < 127)
            return 1;
        var t = table || init_table();
        if (num < 65536)
            return t[num >> 4] >> ((num & 15) << 1) & 3;
        return wcwidthHigh(num);
    };
})({ nul: 0, control: 0 });



},{"./Charsets":3,"./EscapeSequences":5}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var INVALID_LINK_CLASS = 'xterm-invalid-link';
var protocolClause = '(https?:\\/\\/)';
var domainCharacterSet = '[\\da-z\\.-]+';
var negatedDomainCharacterSet = '[^\\da-z\\.-]+';
var domainBodyClause = '(' + domainCharacterSet + ')';
var tldClause = '([a-z\\.]{2,6})';
var ipClause = '((\\d{1,3}\\.){3}\\d{1,3})';
var localHostClause = '(localhost)';
var portClause = '(:\\d{1,5})';
var hostClause = '((' + domainBodyClause + '\\.' + tldClause + ')|' + ipClause + '|' + localHostClause + ')' + portClause + '?';
var pathClause = '(\\/[\\/\\w\\.\\-%~]*)*';
var queryStringHashFragmentCharacterSet = '[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&\'*+,:;~\\=\\.\\-]*';
var queryStringClause = '(\\?' + queryStringHashFragmentCharacterSet + ')?';
var hashFragmentClause = '(#' + queryStringHashFragmentCharacterSet + ')?';
var negatedPathCharacterSet = '[^\\/\\w\\.\\-%]+';
var bodyClause = hostClause + pathClause + queryStringClause + hashFragmentClause;
var start = '(?:^|' + negatedDomainCharacterSet + ')(';
var end = ')($|' + negatedPathCharacterSet + ')';
var strictUrlRegex = new RegExp(start + protocolClause + bodyClause + end);
var HYPERTEXT_LINK_MATCHER_ID = 0;
var Linkifier = (function () {
    function Linkifier() {
        this._nextLinkMatcherId = HYPERTEXT_LINK_MATCHER_ID;
        this._rowTimeoutIds = [];
        this._linkMatchers = [];
        this.registerLinkMatcher(strictUrlRegex, null, { matchIndex: 1 });
    }
    Linkifier.prototype.attachToDom = function (document, rows) {
        this._document = document;
        this._rows = rows;
    };
    Linkifier.prototype.linkifyRow = function (rowIndex) {
        if (!this._document) {
            return;
        }
        var timeoutId = this._rowTimeoutIds[rowIndex];
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        this._rowTimeoutIds[rowIndex] = setTimeout(this._linkifyRow.bind(this, rowIndex), Linkifier.TIME_BEFORE_LINKIFY);
    };
    Linkifier.prototype.setHypertextLinkHandler = function (handler) {
        this._linkMatchers[HYPERTEXT_LINK_MATCHER_ID].handler = handler;
    };
    Linkifier.prototype.setHypertextValidationCallback = function (callback) {
        this._linkMatchers[HYPERTEXT_LINK_MATCHER_ID].validationCallback = callback;
    };
    Linkifier.prototype.registerLinkMatcher = function (regex, handler, options) {
        if (options === void 0) { options = {}; }
        if (this._nextLinkMatcherId !== HYPERTEXT_LINK_MATCHER_ID && !handler) {
            throw new Error('handler must be defined');
        }
        var matcher = {
            id: this._nextLinkMatcherId++,
            regex: regex,
            handler: handler,
            matchIndex: options.matchIndex,
            validationCallback: options.validationCallback,
            priority: options.priority || 0
        };
        this._addLinkMatcherToList(matcher);
        return matcher.id;
    };
    Linkifier.prototype._addLinkMatcherToList = function (matcher) {
        if (this._linkMatchers.length === 0) {
            this._linkMatchers.push(matcher);
            return;
        }
        for (var i = this._linkMatchers.length - 1; i >= 0; i--) {
            if (matcher.priority <= this._linkMatchers[i].priority) {
                this._linkMatchers.splice(i + 1, 0, matcher);
                return;
            }
        }
        this._linkMatchers.splice(0, 0, matcher);
    };
    Linkifier.prototype.deregisterLinkMatcher = function (matcherId) {
        for (var i = 1; i < this._linkMatchers.length; i++) {
            if (this._linkMatchers[i].id === matcherId) {
                this._linkMatchers.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Linkifier.prototype._linkifyRow = function (rowIndex) {
        var row = this._rows[rowIndex];
        if (!row) {
            return;
        }
        var text = row.textContent;
        for (var i = 0; i < this._linkMatchers.length; i++) {
            var matcher = this._linkMatchers[i];
            var linkElements = this._doLinkifyRow(row, matcher);
            if (linkElements.length > 0) {
                if (matcher.validationCallback) {
                    var _loop_1 = function (j) {
                        var element = linkElements[j];
                        matcher.validationCallback(element.textContent, element, function (isValid) {
                            if (!isValid) {
                                element.classList.add(INVALID_LINK_CLASS);
                            }
                        });
                    };
                    for (var j = 0; j < linkElements.length; j++) {
                        _loop_1(j);
                    }
                }
                return;
            }
        }
    };
    Linkifier.prototype._doLinkifyRow = function (row, matcher) {
        var result = [];
        var isHttpLinkMatcher = matcher.id === HYPERTEXT_LINK_MATCHER_ID;
        var nodes = row.childNodes;
        var match = row.textContent.match(matcher.regex);
        if (!match || match.length === 0) {
            return result;
        }
        var uri = match[typeof matcher.matchIndex !== 'number' ? 0 : matcher.matchIndex];
        var rowStartIndex = match.index + uri.length;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var searchIndex = node.textContent.indexOf(uri);
            if (searchIndex >= 0) {
                var linkElement = this._createAnchorElement(uri, matcher.handler, isHttpLinkMatcher);
                if (node.textContent.length === uri.length) {
                    if (node.nodeType === 3) {
                        this._replaceNode(node, linkElement);
                    }
                    else {
                        var element = node;
                        if (element.nodeName === 'A') {
                            return result;
                        }
                        element.innerHTML = '';
                        element.appendChild(linkElement);
                    }
                }
                else if (node.childNodes.length > 1) {
                    for (var j = 0; j < node.childNodes.length; j++) {
                        var childNode = node.childNodes[j];
                        var childSearchIndex = childNode.textContent.indexOf(uri);
                        if (childSearchIndex !== -1) {
                            this._replaceNodeSubstringWithNode(childNode, linkElement, uri, childSearchIndex);
                            break;
                        }
                    }
                }
                else {
                    var nodesAdded = this._replaceNodeSubstringWithNode(node, linkElement, uri, searchIndex);
                    i += nodesAdded;
                }
                result.push(linkElement);
                match = row.textContent.substring(rowStartIndex).match(matcher.regex);
                if (!match || match.length === 0) {
                    return result;
                }
                uri = match[typeof matcher.matchIndex !== 'number' ? 0 : matcher.matchIndex];
                rowStartIndex += match.index + uri.length;
            }
        }
        return result;
    };
    Linkifier.prototype._createAnchorElement = function (uri, handler, isHypertextLinkHandler) {
        var element = this._document.createElement('a');
        element.textContent = uri;
        element.draggable = false;
        if (isHypertextLinkHandler) {
            element.href = uri;
            element.target = '_blank';
            element.addEventListener('click', function (event) {
                if (handler) {
                    return handler(event, uri);
                }
            });
        }
        else {
            element.addEventListener('click', function (event) {
                if (element.classList.contains(INVALID_LINK_CLASS)) {
                    return;
                }
                return handler(event, uri);
            });
        }
        return element;
    };
    Linkifier.prototype._replaceNode = function (oldNode) {
        var newNodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            newNodes[_i - 1] = arguments[_i];
        }
        var parent = oldNode.parentNode;
        for (var i = 0; i < newNodes.length; i++) {
            parent.insertBefore(newNodes[i], oldNode);
        }
        parent.removeChild(oldNode);
    };
    Linkifier.prototype._replaceNodeSubstringWithNode = function (targetNode, newNode, substring, substringIndex) {
        if (targetNode.childNodes.length === 1) {
            targetNode = targetNode.childNodes[0];
        }
        if (targetNode.nodeType !== 3) {
            throw new Error('targetNode must be a text node or only contain a single text node');
        }
        var fullText = targetNode.textContent;
        if (substringIndex === 0) {
            var rightText_1 = fullText.substring(substring.length);
            var rightTextNode_1 = this._document.createTextNode(rightText_1);
            this._replaceNode(targetNode, newNode, rightTextNode_1);
            return 0;
        }
        if (substringIndex === targetNode.textContent.length - substring.length) {
            var leftText_1 = fullText.substring(0, substringIndex);
            var leftTextNode_1 = this._document.createTextNode(leftText_1);
            this._replaceNode(targetNode, leftTextNode_1, newNode);
            return 0;
        }
        var leftText = fullText.substring(0, substringIndex);
        var leftTextNode = this._document.createTextNode(leftText);
        var rightText = fullText.substring(substringIndex + substring.length);
        var rightTextNode = this._document.createTextNode(rightText);
        this._replaceNode(targetNode, leftTextNode, newNode, rightTextNode);
        return 1;
    };
    return Linkifier;
}());
Linkifier.TIME_BEFORE_LINKIFY = 200;
exports.Linkifier = Linkifier;



},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EscapeSequences_1 = require("./EscapeSequences");
var Charsets_1 = require("./Charsets");
var normalStateHandler = {};
normalStateHandler[EscapeSequences_1.C0.BEL] = function (parser, handler) { return handler.bell(); };
normalStateHandler[EscapeSequences_1.C0.LF] = function (parser, handler) { return handler.lineFeed(); };
normalStateHandler[EscapeSequences_1.C0.VT] = normalStateHandler[EscapeSequences_1.C0.LF];
normalStateHandler[EscapeSequences_1.C0.FF] = normalStateHandler[EscapeSequences_1.C0.LF];
normalStateHandler[EscapeSequences_1.C0.CR] = function (parser, handler) { return handler.carriageReturn(); };
normalStateHandler[EscapeSequences_1.C0.BS] = function (parser, handler) { return handler.backspace(); };
normalStateHandler[EscapeSequences_1.C0.HT] = function (parser, handler) { return handler.tab(); };
normalStateHandler[EscapeSequences_1.C0.SO] = function (parser, handler) { return handler.shiftOut(); };
normalStateHandler[EscapeSequences_1.C0.SI] = function (parser, handler) { return handler.shiftIn(); };
normalStateHandler[EscapeSequences_1.C0.ESC] = function (parser, handler) { return parser.setState(ParserState.ESCAPED); };
var escapedStateHandler = {};
escapedStateHandler['['] = function (parser, terminal) {
    terminal.params = [];
    terminal.currentParam = 0;
    parser.setState(ParserState.CSI_PARAM);
};
escapedStateHandler[']'] = function (parser, terminal) {
    terminal.params = [];
    terminal.currentParam = 0;
    parser.setState(ParserState.OSC);
};
escapedStateHandler['P'] = function (parser, terminal) {
    terminal.params = [];
    terminal.currentParam = 0;
    parser.setState(ParserState.DCS);
};
escapedStateHandler['_'] = function (parser, terminal) {
    parser.setState(ParserState.IGNORE);
};
escapedStateHandler['^'] = function (parser, terminal) {
    parser.setState(ParserState.IGNORE);
};
escapedStateHandler['c'] = function (parser, terminal) {
    terminal.reset();
};
escapedStateHandler['E'] = function (parser, terminal) {
    terminal.buffer.x = 0;
    terminal.index();
    parser.setState(ParserState.NORMAL);
};
escapedStateHandler['D'] = function (parser, terminal) {
    terminal.index();
    parser.setState(ParserState.NORMAL);
};
escapedStateHandler['M'] = function (parser, terminal) {
    terminal.reverseIndex();
    parser.setState(ParserState.NORMAL);
};
escapedStateHandler['%'] = function (parser, terminal) {
    terminal.setgLevel(0);
    terminal.setgCharset(0, Charsets_1.DEFAULT_CHARSET);
    parser.setState(ParserState.NORMAL);
    parser.skipNextChar();
};
escapedStateHandler[EscapeSequences_1.C0.CAN] = function (parser) { return parser.setState(ParserState.NORMAL); };
var csiParamStateHandler = {};
csiParamStateHandler['?'] = function (parser) { return parser.setPrefix('?'); };
csiParamStateHandler['>'] = function (parser) { return parser.setPrefix('>'); };
csiParamStateHandler['!'] = function (parser) { return parser.setPrefix('!'); };
csiParamStateHandler['0'] = function (parser) { return parser.setParam(parser.getParam() * 10); };
csiParamStateHandler['1'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 1); };
csiParamStateHandler['2'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 2); };
csiParamStateHandler['3'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 3); };
csiParamStateHandler['4'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 4); };
csiParamStateHandler['5'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 5); };
csiParamStateHandler['6'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 6); };
csiParamStateHandler['7'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 7); };
csiParamStateHandler['8'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 8); };
csiParamStateHandler['9'] = function (parser) { return parser.setParam(parser.getParam() * 10 + 9); };
csiParamStateHandler['$'] = function (parser) { return parser.setPostfix('$'); };
csiParamStateHandler['"'] = function (parser) { return parser.setPostfix('"'); };
csiParamStateHandler[' '] = function (parser) { return parser.setPostfix(' '); };
csiParamStateHandler['\''] = function (parser) { return parser.setPostfix('\''); };
csiParamStateHandler[';'] = function (parser) { return parser.finalizeParam(); };
csiParamStateHandler[EscapeSequences_1.C0.CAN] = function (parser) { return parser.setState(ParserState.NORMAL); };
var csiStateHandler = {};
csiStateHandler['@'] = function (handler, params, prefix) { return handler.insertChars(params); };
csiStateHandler['A'] = function (handler, params, prefix) { return handler.cursorUp(params); };
csiStateHandler['B'] = function (handler, params, prefix) { return handler.cursorDown(params); };
csiStateHandler['C'] = function (handler, params, prefix) { return handler.cursorForward(params); };
csiStateHandler['D'] = function (handler, params, prefix) { return handler.cursorBackward(params); };
csiStateHandler['E'] = function (handler, params, prefix) { return handler.cursorNextLine(params); };
csiStateHandler['F'] = function (handler, params, prefix) { return handler.cursorPrecedingLine(params); };
csiStateHandler['G'] = function (handler, params, prefix) { return handler.cursorCharAbsolute(params); };
csiStateHandler['H'] = function (handler, params, prefix) { return handler.cursorPosition(params); };
csiStateHandler['I'] = function (handler, params, prefix) { return handler.cursorForwardTab(params); };
csiStateHandler['J'] = function (handler, params, prefix) { return handler.eraseInDisplay(params); };
csiStateHandler['K'] = function (handler, params, prefix) { return handler.eraseInLine(params); };
csiStateHandler['L'] = function (handler, params, prefix) { return handler.insertLines(params); };
csiStateHandler['M'] = function (handler, params, prefix) { return handler.deleteLines(params); };
csiStateHandler['P'] = function (handler, params, prefix) { return handler.deleteChars(params); };
csiStateHandler['S'] = function (handler, params, prefix) { return handler.scrollUp(params); };
csiStateHandler['T'] = function (handler, params, prefix) {
    if (params.length < 2 && !prefix) {
        handler.scrollDown(params);
    }
};
csiStateHandler['X'] = function (handler, params, prefix) { return handler.eraseChars(params); };
csiStateHandler['Z'] = function (handler, params, prefix) { return handler.cursorBackwardTab(params); };
csiStateHandler['`'] = function (handler, params, prefix) { return handler.charPosAbsolute(params); };
csiStateHandler['a'] = function (handler, params, prefix) { return handler.HPositionRelative(params); };
csiStateHandler['b'] = function (handler, params, prefix) { return handler.repeatPrecedingCharacter(params); };
csiStateHandler['c'] = function (handler, params, prefix) { return handler.sendDeviceAttributes(params); };
csiStateHandler['d'] = function (handler, params, prefix) { return handler.linePosAbsolute(params); };
csiStateHandler['e'] = function (handler, params, prefix) { return handler.VPositionRelative(params); };
csiStateHandler['f'] = function (handler, params, prefix) { return handler.HVPosition(params); };
csiStateHandler['g'] = function (handler, params, prefix) { return handler.tabClear(params); };
csiStateHandler['h'] = function (handler, params, prefix) { return handler.setMode(params); };
csiStateHandler['l'] = function (handler, params, prefix) { return handler.resetMode(params); };
csiStateHandler['m'] = function (handler, params, prefix) { return handler.charAttributes(params); };
csiStateHandler['n'] = function (handler, params, prefix) { return handler.deviceStatus(params); };
csiStateHandler['p'] = function (handler, params, prefix) {
    switch (prefix) {
        case '!':
            handler.softReset(params);
            break;
    }
};
csiStateHandler['q'] = function (handler, params, prefix, postfix) {
    if (postfix === ' ') {
        handler.setCursorStyle(params);
    }
};
csiStateHandler['r'] = function (handler, params) { return handler.setScrollRegion(params); };
csiStateHandler['s'] = function (handler, params) { return handler.saveCursor(params); };
csiStateHandler['u'] = function (handler, params) { return handler.restoreCursor(params); };
csiStateHandler[EscapeSequences_1.C0.CAN] = function (handler, params, prefix, postfix, parser) { return parser.setState(ParserState.NORMAL); };
var ParserState;
(function (ParserState) {
    ParserState[ParserState["NORMAL"] = 0] = "NORMAL";
    ParserState[ParserState["ESCAPED"] = 1] = "ESCAPED";
    ParserState[ParserState["CSI_PARAM"] = 2] = "CSI_PARAM";
    ParserState[ParserState["CSI"] = 3] = "CSI";
    ParserState[ParserState["OSC"] = 4] = "OSC";
    ParserState[ParserState["CHARSET"] = 5] = "CHARSET";
    ParserState[ParserState["DCS"] = 6] = "DCS";
    ParserState[ParserState["IGNORE"] = 7] = "IGNORE";
})(ParserState || (ParserState = {}));
var Parser = (function () {
    function Parser(_inputHandler, _terminal) {
        this._inputHandler = _inputHandler;
        this._terminal = _terminal;
        this._state = ParserState.NORMAL;
    }
    Parser.prototype.parse = function (data) {
        var l = data.length, j, cs, ch, code, low;
        if (this._terminal.debug) {
            this._terminal.log('data: ' + data);
        }
        this._position = 0;
        if (this._terminal.surrogate_high) {
            data = this._terminal.surrogate_high + data;
            this._terminal.surrogate_high = '';
        }
        for (; this._position < l; this._position++) {
            ch = data[this._position];
            code = data.charCodeAt(this._position);
            if (0xD800 <= code && code <= 0xDBFF) {
                low = data.charCodeAt(this._position + 1);
                if (isNaN(low)) {
                    this._terminal.surrogate_high = ch;
                    continue;
                }
                code = ((code - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
                ch += data.charAt(this._position + 1);
            }
            if (0xDC00 <= code && code <= 0xDFFF)
                continue;
            switch (this._state) {
                case ParserState.NORMAL:
                    if (ch in normalStateHandler) {
                        normalStateHandler[ch](this, this._inputHandler);
                    }
                    else {
                        this._inputHandler.addChar(ch, code);
                    }
                    break;
                case ParserState.ESCAPED:
                    if (ch in escapedStateHandler) {
                        escapedStateHandler[ch](this, this._terminal);
                        break;
                    }
                    switch (ch) {
                        case '(':
                        case ')':
                        case '*':
                        case '+':
                        case '-':
                        case '.':
                            switch (ch) {
                                case '(':
                                    this._terminal.gcharset = 0;
                                    break;
                                case ')':
                                    this._terminal.gcharset = 1;
                                    break;
                                case '*':
                                    this._terminal.gcharset = 2;
                                    break;
                                case '+':
                                    this._terminal.gcharset = 3;
                                    break;
                                case '-':
                                    this._terminal.gcharset = 1;
                                    break;
                                case '.':
                                    this._terminal.gcharset = 2;
                                    break;
                            }
                            this._state = ParserState.CHARSET;
                            break;
                        case '/':
                            this._terminal.gcharset = 3;
                            this._state = ParserState.CHARSET;
                            this._position--;
                            break;
                        case 'N':
                            break;
                        case 'O':
                            break;
                        case 'n':
                            this._terminal.setgLevel(2);
                            break;
                        case 'o':
                            this._terminal.setgLevel(3);
                            break;
                        case '|':
                            this._terminal.setgLevel(3);
                            break;
                        case '}':
                            this._terminal.setgLevel(2);
                            break;
                        case '~':
                            this._terminal.setgLevel(1);
                            break;
                        case '7':
                            this._inputHandler.saveCursor();
                            this._state = ParserState.NORMAL;
                            break;
                        case '8':
                            this._inputHandler.restoreCursor();
                            this._state = ParserState.NORMAL;
                            break;
                        case '#':
                            this._state = ParserState.NORMAL;
                            this._position++;
                            break;
                        case 'H':
                            this._terminal.tabSet();
                            this._state = ParserState.NORMAL;
                            break;
                        case '=':
                            this._terminal.log('Serial port requested application keypad.');
                            this._terminal.applicationKeypad = true;
                            this._terminal.viewport.syncScrollArea();
                            this._state = ParserState.NORMAL;
                            break;
                        case '>':
                            this._terminal.log('Switching back to normal keypad.');
                            this._terminal.applicationKeypad = false;
                            this._terminal.viewport.syncScrollArea();
                            this._state = ParserState.NORMAL;
                            break;
                        default:
                            this._state = ParserState.NORMAL;
                            this._terminal.error('Unknown ESC control: %s.', ch);
                            break;
                    }
                    break;
                case ParserState.CHARSET:
                    if (ch in Charsets_1.CHARSETS) {
                        cs = Charsets_1.CHARSETS[ch];
                        if (ch === '/') {
                            this.skipNextChar();
                        }
                    }
                    else {
                        cs = Charsets_1.DEFAULT_CHARSET;
                    }
                    this._terminal.setgCharset(this._terminal.gcharset, cs);
                    this._terminal.gcharset = null;
                    this._state = ParserState.NORMAL;
                    break;
                case ParserState.OSC:
                    if (ch === EscapeSequences_1.C0.ESC || ch === EscapeSequences_1.C0.BEL) {
                        if (ch === EscapeSequences_1.C0.ESC)
                            this._position++;
                        this._terminal.params.push(this._terminal.currentParam);
                        switch (this._terminal.params[0]) {
                            case 0:
                            case 1:
                            case 2:
                                if (this._terminal.params[1]) {
                                    this._terminal.title = this._terminal.params[1];
                                    this._terminal.handleTitle(this._terminal.title);
                                }
                                break;
                            case 3:
                                break;
                            case 4:
                            case 5:
                                break;
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                                break;
                            case 46:
                                break;
                            case 50:
                                break;
                            case 51:
                                break;
                            case 52:
                                break;
                            case 104:
                            case 105:
                            case 110:
                            case 111:
                            case 112:
                            case 113:
                            case 114:
                            case 115:
                            case 116:
                            case 117:
                            case 118:
                                break;
                        }
                        this._terminal.params = [];
                        this._terminal.currentParam = 0;
                        this._state = ParserState.NORMAL;
                    }
                    else {
                        if (!this._terminal.params.length) {
                            if (ch >= '0' && ch <= '9') {
                                this._terminal.currentParam =
                                    this._terminal.currentParam * 10 + ch.charCodeAt(0) - 48;
                            }
                            else if (ch === ';') {
                                this._terminal.params.push(this._terminal.currentParam);
                                this._terminal.currentParam = '';
                            }
                        }
                        else {
                            this._terminal.currentParam += ch;
                        }
                    }
                    break;
                case ParserState.CSI_PARAM:
                    if (ch in csiParamStateHandler) {
                        csiParamStateHandler[ch](this);
                        break;
                    }
                    this.finalizeParam();
                    this._state = ParserState.CSI;
                case ParserState.CSI:
                    if (ch in csiStateHandler) {
                        if (this._terminal.debug) {
                            this._terminal.log("CSI " + (this._terminal.prefix ? this._terminal.prefix : '') + " " + (this._terminal.params ? this._terminal.params.join(';') : '') + " " + (this._terminal.postfix ? this._terminal.postfix : '') + " " + ch);
                        }
                        csiStateHandler[ch](this._inputHandler, this._terminal.params, this._terminal.prefix, this._terminal.postfix, this);
                    }
                    else {
                        this._terminal.error('Unknown CSI code: %s.', ch);
                    }
                    this._state = ParserState.NORMAL;
                    this._terminal.prefix = '';
                    this._terminal.postfix = '';
                    break;
                case ParserState.DCS:
                    if (ch === EscapeSequences_1.C0.ESC || ch === EscapeSequences_1.C0.BEL) {
                        if (ch === EscapeSequences_1.C0.ESC)
                            this._position++;
                        var pt = void 0;
                        var valid = void 0;
                        switch (this._terminal.prefix) {
                            case '':
                                break;
                            case '$q':
                                pt = this._terminal.currentParam;
                                valid = false;
                                switch (pt) {
                                    case '"q':
                                        pt = '0"q';
                                        break;
                                    case '"p':
                                        pt = '61"p';
                                        break;
                                    case 'r':
                                        pt = ''
                                            + (this._terminal.buffer.scrollTop + 1)
                                            + ';'
                                            + (this._terminal.buffer.scrollBottom + 1)
                                            + 'r';
                                        break;
                                    case 'm':
                                        pt = '0m';
                                        break;
                                    default:
                                        this._terminal.error('Unknown DCS Pt: %s.', pt);
                                        pt = '';
                                        break;
                                }
                                this._terminal.send(EscapeSequences_1.C0.ESC + 'P' + +valid + '$r' + pt + EscapeSequences_1.C0.ESC + '\\');
                                break;
                            case '+p':
                                break;
                            case '+q':
                                pt = this._terminal.currentParam;
                                valid = false;
                                this._terminal.send(EscapeSequences_1.C0.ESC + 'P' + +valid + '+r' + pt + EscapeSequences_1.C0.ESC + '\\');
                                break;
                            default:
                                this._terminal.error('Unknown DCS prefix: %s.', this._terminal.prefix);
                                break;
                        }
                        this._terminal.currentParam = 0;
                        this._terminal.prefix = '';
                        this._state = ParserState.NORMAL;
                    }
                    else if (!this._terminal.currentParam) {
                        if (!this._terminal.prefix && ch !== '$' && ch !== '+') {
                            this._terminal.currentParam = ch;
                        }
                        else if (this._terminal.prefix.length === 2) {
                            this._terminal.currentParam = ch;
                        }
                        else {
                            this._terminal.prefix += ch;
                        }
                    }
                    else {
                        this._terminal.currentParam += ch;
                    }
                    break;
                case ParserState.IGNORE:
                    if (ch === EscapeSequences_1.C0.ESC || ch === EscapeSequences_1.C0.BEL) {
                        if (ch === EscapeSequences_1.C0.ESC)
                            this._position++;
                        this._state = ParserState.NORMAL;
                    }
                    break;
            }
        }
        return this._state;
    };
    Parser.prototype.setState = function (state) {
        this._state = state;
    };
    Parser.prototype.setPrefix = function (prefix) {
        this._terminal.prefix = prefix;
    };
    Parser.prototype.setPostfix = function (postfix) {
        this._terminal.postfix = postfix;
    };
    Parser.prototype.setParam = function (param) {
        this._terminal.currentParam = param;
    };
    Parser.prototype.getParam = function () {
        return this._terminal.currentParam;
    };
    Parser.prototype.finalizeParam = function () {
        this._terminal.params.push(this._terminal.currentParam);
        this._terminal.currentParam = 0;
    };
    Parser.prototype.skipNextChar = function () {
        this._position++;
    };
    return Parser;
}());
exports.Parser = Parser;



},{"./Charsets":3,"./EscapeSequences":5}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementObjectPool_1 = require("./utils/DomElementObjectPool");
var MAX_REFRESH_FRAME_SKIP = 5;
var FLAGS;
(function (FLAGS) {
    FLAGS[FLAGS["BOLD"] = 1] = "BOLD";
    FLAGS[FLAGS["UNDERLINE"] = 2] = "UNDERLINE";
    FLAGS[FLAGS["BLINK"] = 4] = "BLINK";
    FLAGS[FLAGS["INVERSE"] = 8] = "INVERSE";
    FLAGS[FLAGS["INVISIBLE"] = 16] = "INVISIBLE";
})(FLAGS || (FLAGS = {}));
;
var brokenBold = null;
var Renderer = (function () {
    function Renderer(_terminal) {
        this._terminal = _terminal;
        this._refreshRowsQueue = [];
        this._refreshFramesSkipped = 0;
        this._refreshAnimationFrame = null;
        this._spanElementObjectPool = new DomElementObjectPool_1.DomElementObjectPool('span');
        if (brokenBold === null) {
            brokenBold = checkBoldBroken(this._terminal.element);
        }
        this._spanElementObjectPool = new DomElementObjectPool_1.DomElementObjectPool('span');
    }
    Renderer.prototype.queueRefresh = function (start, end) {
        this._refreshRowsQueue.push({ start: start, end: end });
        if (!this._refreshAnimationFrame) {
            this._refreshAnimationFrame = window.requestAnimationFrame(this._refreshLoop.bind(this));
        }
    };
    Renderer.prototype._refreshLoop = function () {
        var skipFrame = this._terminal.writeBuffer.length > 0 && this._refreshFramesSkipped++ <= MAX_REFRESH_FRAME_SKIP;
        if (skipFrame) {
            this._refreshAnimationFrame = window.requestAnimationFrame(this._refreshLoop.bind(this));
            return;
        }
        this._refreshFramesSkipped = 0;
        var start;
        var end;
        if (this._refreshRowsQueue.length > 4) {
            start = 0;
            end = this._terminal.rows - 1;
        }
        else {
            start = this._refreshRowsQueue[0].start;
            end = this._refreshRowsQueue[0].end;
            for (var i = 1; i < this._refreshRowsQueue.length; i++) {
                if (this._refreshRowsQueue[i].start < start) {
                    start = this._refreshRowsQueue[i].start;
                }
                if (this._refreshRowsQueue[i].end > end) {
                    end = this._refreshRowsQueue[i].end;
                }
            }
        }
        this._refreshRowsQueue = [];
        this._refreshAnimationFrame = null;
        this._refresh(start, end);
    };
    Renderer.prototype._refresh = function (start, end) {
        var parent;
        if (end - start >= this._terminal.rows / 2) {
            parent = this._terminal.element.parentNode;
            if (parent) {
                this._terminal.element.removeChild(this._terminal.rowContainer);
            }
        }
        var width = this._terminal.cols;
        var y = start;
        if (end >= this._terminal.rows) {
            this._terminal.log('`end` is too large. Most likely a bad CSR.');
            end = this._terminal.rows - 1;
        }
        for (; y <= end; y++) {
            var row = y + this._terminal.buffer.ydisp;
            var line = this._terminal.buffer.lines.get(row);
            var x = void 0;
            if (this._terminal.buffer.y === y - (this._terminal.buffer.ybase - this._terminal.buffer.ydisp) &&
                this._terminal.cursorState &&
                !this._terminal.cursorHidden) {
                x = this._terminal.buffer.x;
            }
            else {
                x = -1;
            }
            var attr = this._terminal.defAttr;
            var documentFragment = document.createDocumentFragment();
            var innerHTML = '';
            var currentElement = void 0;
            while (this._terminal.children[y].children.length) {
                var child = this._terminal.children[y].children[0];
                this._terminal.children[y].removeChild(child);
                this._spanElementObjectPool.release(child);
            }
            for (var i = 0; i < width; i++) {
                var data = line[i][0];
                var ch = line[i][1];
                var ch_width = line[i][2];
                var isCursor = i === x;
                if (!ch_width) {
                    continue;
                }
                if (data !== attr || isCursor) {
                    if (attr !== this._terminal.defAttr && !isCursor) {
                        if (innerHTML) {
                            currentElement.innerHTML = innerHTML;
                            innerHTML = '';
                        }
                        documentFragment.appendChild(currentElement);
                        currentElement = null;
                    }
                    if (data !== this._terminal.defAttr || isCursor) {
                        if (innerHTML && !currentElement) {
                            currentElement = this._spanElementObjectPool.acquire();
                        }
                        if (currentElement) {
                            if (innerHTML) {
                                currentElement.innerHTML = innerHTML;
                                innerHTML = '';
                            }
                            documentFragment.appendChild(currentElement);
                        }
                        currentElement = this._spanElementObjectPool.acquire();
                        var bg = data & 0x1ff;
                        var fg = (data >> 9) & 0x1ff;
                        var flags = data >> 18;
                        if (isCursor) {
                            currentElement.classList.add('reverse-video');
                            currentElement.classList.add('terminal-cursor');
                        }
                        if (flags & FLAGS.BOLD) {
                            if (!brokenBold) {
                                currentElement.classList.add('xterm-bold');
                            }
                            if (fg < 8) {
                                fg += 8;
                            }
                        }
                        if (flags & FLAGS.UNDERLINE) {
                            currentElement.classList.add('xterm-underline');
                        }
                        if (flags & FLAGS.BLINK) {
                            currentElement.classList.add('xterm-blink');
                        }
                        if (flags & FLAGS.INVERSE) {
                            var temp = bg;
                            bg = fg;
                            fg = temp;
                            if ((flags & 1) && fg < 8) {
                                fg += 8;
                            }
                        }
                        if (flags & FLAGS.INVISIBLE && !isCursor) {
                            currentElement.classList.add('xterm-hidden');
                        }
                        if (flags & FLAGS.INVERSE) {
                            if (bg === 257) {
                                bg = 15;
                            }
                            if (fg === 256) {
                                fg = 0;
                            }
                        }
                        if (bg < 256) {
                            currentElement.classList.add("xterm-bg-color-" + bg);
                        }
                        if (fg < 256) {
                            currentElement.classList.add("xterm-color-" + fg);
                        }
                    }
                }
                if (ch_width === 2) {
                    innerHTML += "<span class=\"xterm-wide-char\">" + ch + "</span>";
                }
                else if (ch.charCodeAt(0) > 255) {
                    innerHTML += "<span class=\"xterm-normal-char\">" + ch + "</span>";
                }
                else {
                    switch (ch) {
                        case '&':
                            innerHTML += '&amp;';
                            break;
                        case '<':
                            innerHTML += '&lt;';
                            break;
                        case '>':
                            innerHTML += '&gt;';
                            break;
                        default:
                            if (ch <= ' ') {
                                innerHTML += '&nbsp;';
                            }
                            else {
                                innerHTML += ch;
                            }
                            break;
                    }
                }
                attr = isCursor ? -1 : data;
            }
            if (innerHTML && !currentElement) {
                currentElement = this._spanElementObjectPool.acquire();
            }
            if (currentElement) {
                if (innerHTML) {
                    currentElement.innerHTML = innerHTML;
                    innerHTML = '';
                }
                documentFragment.appendChild(currentElement);
                currentElement = null;
            }
            this._terminal.children[y].appendChild(documentFragment);
        }
        if (parent) {
            this._terminal.element.appendChild(this._terminal.rowContainer);
        }
        this._terminal.emit('refresh', { element: this._terminal.element, start: start, end: end });
    };
    ;
    Renderer.prototype.refreshSelection = function (start, end) {
        while (this._terminal.selectionContainer.children.length) {
            this._terminal.selectionContainer.removeChild(this._terminal.selectionContainer.children[0]);
        }
        if (!start || !end) {
            return;
        }
        var viewportStartRow = start[1] - this._terminal.buffer.ydisp;
        var viewportEndRow = end[1] - this._terminal.buffer.ydisp;
        var viewportCappedStartRow = Math.max(viewportStartRow, 0);
        var viewportCappedEndRow = Math.min(viewportEndRow, this._terminal.rows - 1);
        if (viewportCappedStartRow >= this._terminal.rows || viewportCappedEndRow < 0) {
            return;
        }
        var documentFragment = document.createDocumentFragment();
        var startCol = viewportStartRow === viewportCappedStartRow ? start[0] : 0;
        var endCol = viewportCappedStartRow === viewportCappedEndRow ? end[0] : this._terminal.cols;
        documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow, startCol, endCol));
        var middleRowsCount = viewportCappedEndRow - viewportCappedStartRow - 1;
        documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow + 1, 0, this._terminal.cols, middleRowsCount));
        if (viewportCappedStartRow !== viewportCappedEndRow) {
            var endCol_1 = viewportEndRow === viewportCappedEndRow ? end[0] : this._terminal.cols;
            documentFragment.appendChild(this._createSelectionElement(viewportCappedEndRow, 0, endCol_1));
        }
        this._terminal.selectionContainer.appendChild(documentFragment);
    };
    Renderer.prototype._createSelectionElement = function (row, colStart, colEnd, rowCount) {
        if (rowCount === void 0) { rowCount = 1; }
        var element = document.createElement('div');
        element.style.height = rowCount * this._terminal.charMeasure.height + "px";
        element.style.top = row * this._terminal.charMeasure.height + "px";
        element.style.left = colStart * this._terminal.charMeasure.width + "px";
        element.style.width = this._terminal.charMeasure.width * (colEnd - colStart) + "px";
        return element;
    };
    return Renderer;
}());
exports.Renderer = Renderer;
function checkBoldBroken(terminal) {
    var document = terminal.ownerDocument;
    var el = document.createElement('span');
    el.innerHTML = 'hello world';
    terminal.appendChild(el);
    var w1 = el.offsetWidth;
    var h1 = el.offsetHeight;
    el.style.fontWeight = 'bold';
    var w2 = el.offsetWidth;
    var h2 = el.offsetHeight;
    terminal.removeChild(el);
    return w1 !== w2 || h1 !== h2;
}



},{"./utils/DomElementObjectPool":19}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Mouse = require("./utils/Mouse");
var Browser = require("./utils/Browser");
var EventEmitter_1 = require("./EventEmitter");
var SelectionModel_1 = require("./SelectionModel");
var BufferLine_1 = require("./utils/BufferLine");
var DRAG_SCROLL_MAX_THRESHOLD = 50;
var DRAG_SCROLL_MAX_SPEED = 15;
var DRAG_SCROLL_INTERVAL = 50;
var WORD_SEPARATORS = ' ()[]{}\'"';
var LINE_DATA_CHAR_INDEX = 1;
var LINE_DATA_WIDTH_INDEX = 2;
var NON_BREAKING_SPACE_CHAR = String.fromCharCode(160);
var ALL_NON_BREAKING_SPACE_REGEX = new RegExp(NON_BREAKING_SPACE_CHAR, 'g');
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["NORMAL"] = 0] = "NORMAL";
    SelectionMode[SelectionMode["WORD"] = 1] = "WORD";
    SelectionMode[SelectionMode["LINE"] = 2] = "LINE";
})(SelectionMode || (SelectionMode = {}));
var SelectionManager = (function (_super) {
    __extends(SelectionManager, _super);
    function SelectionManager(_terminal, _buffer, _rowContainer, _charMeasure) {
        var _this = _super.call(this) || this;
        _this._terminal = _terminal;
        _this._buffer = _buffer;
        _this._rowContainer = _rowContainer;
        _this._charMeasure = _charMeasure;
        _this._enabled = true;
        _this._initListeners();
        _this.enable();
        _this._model = new SelectionModel_1.SelectionModel(_terminal);
        _this._activeSelectionMode = SelectionMode.NORMAL;
        return _this;
    }
    SelectionManager.prototype._initListeners = function () {
        var _this = this;
        this._mouseMoveListener = function (event) { return _this._onMouseMove(event); };
        this._mouseUpListener = function (event) { return _this._onMouseUp(event); };
        this._rowContainer.addEventListener('mousedown', function (event) { return _this._onMouseDown(event); });
        this._buffer.on('trim', function (amount) { return _this._onTrim(amount); });
    };
    SelectionManager.prototype.disable = function () {
        this.clearSelection();
        this._enabled = false;
    };
    SelectionManager.prototype.enable = function () {
        this._enabled = true;
    };
    SelectionManager.prototype.setBuffer = function (buffer) {
        this._buffer = buffer;
        this.clearSelection();
    };
    Object.defineProperty(SelectionManager.prototype, "selectionStart", {
        get: function () { return this._model.finalSelectionStart; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionManager.prototype, "selectionEnd", {
        get: function () { return this._model.finalSelectionEnd; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionManager.prototype, "hasSelection", {
        get: function () {
            var start = this._model.finalSelectionStart;
            var end = this._model.finalSelectionEnd;
            if (!start || !end) {
                return false;
            }
            return start[0] !== end[0] || start[1] !== end[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionManager.prototype, "selectionText", {
        get: function () {
            var start = this._model.finalSelectionStart;
            var end = this._model.finalSelectionEnd;
            if (!start || !end) {
                return '';
            }
            var startRowEndCol = start[1] === end[1] ? end[0] : null;
            var result = [];
            result.push(BufferLine_1.translateBufferLineToString(this._buffer.get(start[1]), true, start[0], startRowEndCol));
            for (var i = start[1] + 1; i <= end[1] - 1; i++) {
                var bufferLine = this._buffer.get(i);
                var lineText = BufferLine_1.translateBufferLineToString(bufferLine, true);
                if (bufferLine.isWrapped) {
                    result[result.length - 1] += lineText;
                }
                else {
                    result.push(lineText);
                }
            }
            if (start[1] !== end[1]) {
                var bufferLine = this._buffer.get(end[1]);
                var lineText = BufferLine_1.translateBufferLineToString(bufferLine, true, 0, end[0]);
                if (bufferLine.isWrapped) {
                    result[result.length - 1] += lineText;
                }
                else {
                    result.push(lineText);
                }
            }
            var formattedResult = result.map(function (line) {
                return line.replace(ALL_NON_BREAKING_SPACE_REGEX, ' ');
            }).join(Browser.isMSWindows ? '\r\n' : '\n');
            return formattedResult;
        },
        enumerable: true,
        configurable: true
    });
    SelectionManager.prototype.clearSelection = function () {
        this._model.clearSelection();
        this._removeMouseDownListeners();
        this.refresh();
    };
    SelectionManager.prototype.refresh = function (isNewSelection) {
        var _this = this;
        if (!this._refreshAnimationFrame) {
            this._refreshAnimationFrame = window.requestAnimationFrame(function () { return _this._refresh(); });
        }
        if (Browser.isLinux && isNewSelection) {
            var selectionText = this.selectionText;
            if (selectionText.length) {
                this.emit('newselection', this.selectionText);
            }
        }
    };
    SelectionManager.prototype._refresh = function () {
        this._refreshAnimationFrame = null;
        this.emit('refresh', { start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd });
    };
    SelectionManager.prototype.selectAll = function () {
        this._model.isSelectAllActive = true;
        this.refresh();
    };
    SelectionManager.prototype._onTrim = function (amount) {
        var needsRefresh = this._model.onTrim(amount);
        if (needsRefresh) {
            this.refresh();
        }
    };
    SelectionManager.prototype._getMouseBufferCoords = function (event) {
        var coords = Mouse.getCoords(event, this._rowContainer, this._charMeasure, this._terminal.cols, this._terminal.rows, true);
        if (!coords) {
            return null;
        }
        coords[0]--;
        coords[1]--;
        coords[1] += this._terminal.buffer.ydisp;
        return coords;
    };
    SelectionManager.prototype._getMouseEventScrollAmount = function (event) {
        var offset = Mouse.getCoordsRelativeToElement(event, this._rowContainer)[1];
        var terminalHeight = this._terminal.rows * this._charMeasure.height;
        if (offset >= 0 && offset <= terminalHeight) {
            return 0;
        }
        if (offset > terminalHeight) {
            offset -= terminalHeight;
        }
        offset = Math.min(Math.max(offset, -DRAG_SCROLL_MAX_THRESHOLD), DRAG_SCROLL_MAX_THRESHOLD);
        offset /= DRAG_SCROLL_MAX_THRESHOLD;
        return (offset / Math.abs(offset)) + Math.round(offset * (DRAG_SCROLL_MAX_SPEED - 1));
    };
    SelectionManager.prototype._onMouseDown = function (event) {
        if (event.button === 2 && this.hasSelection) {
            event.stopPropagation();
            return;
        }
        if (event.button !== 0) {
            return;
        }
        if (!this._enabled) {
            var shouldForceSelection = Browser.isMac && event.altKey;
            if (!shouldForceSelection) {
                return;
            }
            event.stopPropagation();
        }
        event.preventDefault();
        this._dragScrollAmount = 0;
        if (this._enabled && event.shiftKey) {
            this._onIncrementalClick(event);
        }
        else {
            if (event.detail === 1) {
                this._onSingleClick(event);
            }
            else if (event.detail === 2) {
                this._onDoubleClick(event);
            }
            else if (event.detail === 3) {
                this._onTripleClick(event);
            }
        }
        this._addMouseDownListeners();
        this.refresh(true);
    };
    SelectionManager.prototype._addMouseDownListeners = function () {
        var _this = this;
        this._rowContainer.ownerDocument.addEventListener('mousemove', this._mouseMoveListener);
        this._rowContainer.ownerDocument.addEventListener('mouseup', this._mouseUpListener);
        this._dragScrollIntervalTimer = setInterval(function () { return _this._dragScroll(); }, DRAG_SCROLL_INTERVAL);
    };
    SelectionManager.prototype._removeMouseDownListeners = function () {
        this._rowContainer.ownerDocument.removeEventListener('mousemove', this._mouseMoveListener);
        this._rowContainer.ownerDocument.removeEventListener('mouseup', this._mouseUpListener);
        clearInterval(this._dragScrollIntervalTimer);
        this._dragScrollIntervalTimer = null;
    };
    SelectionManager.prototype._onIncrementalClick = function (event) {
        if (this._model.selectionStart) {
            this._model.selectionEnd = this._getMouseBufferCoords(event);
        }
    };
    SelectionManager.prototype._onSingleClick = function (event) {
        this._model.selectionStartLength = 0;
        this._model.isSelectAllActive = false;
        this._activeSelectionMode = SelectionMode.NORMAL;
        this._model.selectionStart = this._getMouseBufferCoords(event);
        if (!this._model.selectionStart) {
            return;
        }
        this._model.selectionEnd = null;
        var line = this._buffer.get(this._model.selectionStart[1]);
        if (!line) {
            return;
        }
        var char = line[this._model.selectionStart[0]];
        if (char[LINE_DATA_WIDTH_INDEX] === 0) {
            this._model.selectionStart[0]++;
        }
    };
    SelectionManager.prototype._onDoubleClick = function (event) {
        var coords = this._getMouseBufferCoords(event);
        if (coords) {
            this._activeSelectionMode = SelectionMode.WORD;
            this._selectWordAt(coords);
        }
    };
    SelectionManager.prototype._onTripleClick = function (event) {
        var coords = this._getMouseBufferCoords(event);
        if (coords) {
            this._activeSelectionMode = SelectionMode.LINE;
            this._selectLineAt(coords[1]);
        }
    };
    SelectionManager.prototype._onMouseMove = function (event) {
        var previousSelectionEnd = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
        this._model.selectionEnd = this._getMouseBufferCoords(event);
        if (!this._model.selectionEnd) {
            this.refresh(true);
            return;
        }
        if (this._activeSelectionMode === SelectionMode.LINE) {
            if (this._model.selectionEnd[1] < this._model.selectionStart[1]) {
                this._model.selectionEnd[0] = 0;
            }
            else {
                this._model.selectionEnd[0] = this._terminal.cols;
            }
        }
        else if (this._activeSelectionMode === SelectionMode.WORD) {
            this._selectToWordAt(this._model.selectionEnd);
        }
        this._dragScrollAmount = this._getMouseEventScrollAmount(event);
        if (this._dragScrollAmount > 0) {
            this._model.selectionEnd[0] = this._terminal.cols - 1;
        }
        else if (this._dragScrollAmount < 0) {
            this._model.selectionEnd[0] = 0;
        }
        if (this._model.selectionEnd[1] < this._buffer.length) {
            var char = this._buffer.get(this._model.selectionEnd[1])[this._model.selectionEnd[0]];
            if (char && char[2] === 0) {
                this._model.selectionEnd[0]++;
            }
        }
        if (!previousSelectionEnd ||
            previousSelectionEnd[0] !== this._model.selectionEnd[0] ||
            previousSelectionEnd[1] !== this._model.selectionEnd[1]) {
            this.refresh(true);
        }
    };
    SelectionManager.prototype._dragScroll = function () {
        if (this._dragScrollAmount) {
            this._terminal.scrollDisp(this._dragScrollAmount, false);
            if (this._dragScrollAmount > 0) {
                this._model.selectionEnd = [this._terminal.cols - 1, this._terminal.buffer.ydisp + this._terminal.rows];
            }
            else {
                this._model.selectionEnd = [0, this._terminal.buffer.ydisp];
            }
            this.refresh();
        }
    };
    SelectionManager.prototype._onMouseUp = function (event) {
        this._removeMouseDownListeners();
    };
    SelectionManager.prototype._convertViewportColToCharacterIndex = function (bufferLine, coords) {
        var charIndex = coords[0];
        for (var i = 0; coords[0] >= i; i++) {
            var char = bufferLine[i];
            if (char[LINE_DATA_WIDTH_INDEX] === 0) {
                charIndex--;
            }
        }
        return charIndex;
    };
    SelectionManager.prototype.setSelection = function (col, row, length) {
        this._model.clearSelection();
        this._removeMouseDownListeners();
        this._model.selectionStart = [col, row];
        this._model.selectionStartLength = length;
        this.refresh();
    };
    SelectionManager.prototype._getWordAt = function (coords) {
        var bufferLine = this._buffer.get(coords[1]);
        if (!bufferLine) {
            return null;
        }
        var line = BufferLine_1.translateBufferLineToString(bufferLine, false);
        var endIndex = this._convertViewportColToCharacterIndex(bufferLine, coords);
        var startIndex = endIndex;
        var charOffset = coords[0] - startIndex;
        var leftWideCharCount = 0;
        var rightWideCharCount = 0;
        if (line.charAt(startIndex) === ' ') {
            while (startIndex > 0 && line.charAt(startIndex - 1) === ' ') {
                startIndex--;
            }
            while (endIndex < line.length && line.charAt(endIndex + 1) === ' ') {
                endIndex++;
            }
        }
        else {
            var startCol = coords[0];
            var endCol = coords[0];
            if (bufferLine[startCol][LINE_DATA_WIDTH_INDEX] === 0) {
                leftWideCharCount++;
                startCol--;
            }
            if (bufferLine[endCol][LINE_DATA_WIDTH_INDEX] === 2) {
                rightWideCharCount++;
                endCol++;
            }
            while (startIndex > 0 && !this._isCharWordSeparator(line.charAt(startIndex - 1))) {
                if (bufferLine[startCol - 1][LINE_DATA_WIDTH_INDEX] === 0) {
                    leftWideCharCount++;
                    startCol--;
                }
                startIndex--;
                startCol--;
            }
            while (endIndex + 1 < line.length && !this._isCharWordSeparator(line.charAt(endIndex + 1))) {
                if (bufferLine[endCol + 1][LINE_DATA_WIDTH_INDEX] === 2) {
                    rightWideCharCount++;
                    endCol++;
                }
                endIndex++;
                endCol++;
            }
        }
        var start = startIndex + charOffset - leftWideCharCount;
        var length = Math.min(endIndex - startIndex + leftWideCharCount + rightWideCharCount + 1, this._terminal.cols);
        return { start: start, length: length };
    };
    SelectionManager.prototype._selectWordAt = function (coords) {
        var wordPosition = this._getWordAt(coords);
        if (wordPosition) {
            this._model.selectionStart = [wordPosition.start, coords[1]];
            this._model.selectionStartLength = wordPosition.length;
        }
    };
    SelectionManager.prototype._selectToWordAt = function (coords) {
        var wordPosition = this._getWordAt(coords);
        if (wordPosition) {
            this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? wordPosition.start : (wordPosition.start + wordPosition.length), coords[1]];
        }
    };
    SelectionManager.prototype._isCharWordSeparator = function (char) {
        return WORD_SEPARATORS.indexOf(char) >= 0;
    };
    SelectionManager.prototype._selectLineAt = function (line) {
        this._model.selectionStart = [0, line];
        this._model.selectionStartLength = this._terminal.cols;
    };
    return SelectionManager;
}(EventEmitter_1.EventEmitter));
exports.SelectionManager = SelectionManager;



},{"./EventEmitter":6,"./SelectionModel":12,"./utils/Browser":15,"./utils/BufferLine":16,"./utils/Mouse":21}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionModel = (function () {
    function SelectionModel(_terminal) {
        this._terminal = _terminal;
        this.clearSelection();
    }
    SelectionModel.prototype.clearSelection = function () {
        this.selectionStart = null;
        this.selectionEnd = null;
        this.isSelectAllActive = false;
        this.selectionStartLength = 0;
    };
    Object.defineProperty(SelectionModel.prototype, "finalSelectionStart", {
        get: function () {
            if (this.isSelectAllActive) {
                return [0, 0];
            }
            if (!this.selectionEnd || !this.selectionStart) {
                return this.selectionStart;
            }
            return this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionModel.prototype, "finalSelectionEnd", {
        get: function () {
            if (this.isSelectAllActive) {
                return [this._terminal.cols, this._terminal.buffer.ybase + this._terminal.rows - 1];
            }
            if (!this.selectionStart) {
                return null;
            }
            if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                return [this.selectionStart[0] + this.selectionStartLength, this.selectionStart[1]];
            }
            if (this.selectionStartLength) {
                if (this.selectionEnd[1] === this.selectionStart[1]) {
                    return [Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1]];
                }
            }
            return this.selectionEnd;
        },
        enumerable: true,
        configurable: true
    });
    SelectionModel.prototype.areSelectionValuesReversed = function () {
        var start = this.selectionStart;
        var end = this.selectionEnd;
        return start[1] > end[1] || (start[1] === end[1] && start[0] > end[0]);
    };
    SelectionModel.prototype.onTrim = function (amount) {
        if (this.selectionStart) {
            this.selectionStart[1] -= amount;
        }
        if (this.selectionEnd) {
            this.selectionEnd[1] -= amount;
        }
        if (this.selectionEnd && this.selectionEnd[1] < 0) {
            this.clearSelection();
            return true;
        }
        if (this.selectionStart && this.selectionStart[1] < 0) {
            this.selectionStart[1] = 0;
        }
        return false;
    };
    return SelectionModel;
}());
exports.SelectionModel = SelectionModel;



},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Viewport = (function () {
    function Viewport(terminal, viewportElement, scrollArea, charMeasure) {
        var _this = this;
        this.terminal = terminal;
        this.viewportElement = viewportElement;
        this.scrollArea = scrollArea;
        this.charMeasure = charMeasure;
        this.currentRowHeight = 0;
        this.lastRecordedBufferLength = 0;
        this.lastRecordedViewportHeight = 0;
        this.terminal.on('scroll', this.syncScrollArea.bind(this));
        this.terminal.on('resize', this.syncScrollArea.bind(this));
        this.viewportElement.addEventListener('scroll', this.onScroll.bind(this));
        setTimeout(function () { return _this.syncScrollArea(); }, 0);
    }
    Viewport.prototype.refresh = function () {
        if (this.charMeasure.height > 0) {
            var rowHeightChanged = this.charMeasure.height !== this.currentRowHeight;
            if (rowHeightChanged) {
                this.currentRowHeight = this.charMeasure.height;
                this.viewportElement.style.lineHeight = this.charMeasure.height + 'px';
                this.terminal.rowContainer.style.lineHeight = this.charMeasure.height + 'px';
            }
            var viewportHeightChanged = this.lastRecordedViewportHeight !== this.terminal.rows;
            if (rowHeightChanged || viewportHeightChanged) {
                this.lastRecordedViewportHeight = this.terminal.rows;
                this.viewportElement.style.height = this.charMeasure.height * this.terminal.rows + 'px';
                this.terminal.selectionContainer.style.height = this.viewportElement.style.height;
            }
            this.scrollArea.style.height = (this.charMeasure.height * this.lastRecordedBufferLength) + 'px';
        }
    };
    Viewport.prototype.syncScrollArea = function () {
        if (this.lastRecordedBufferLength !== this.terminal.buffer.lines.length) {
            this.lastRecordedBufferLength = this.terminal.buffer.lines.length;
            this.refresh();
        }
        else if (this.lastRecordedViewportHeight !== this.terminal.rows) {
            this.refresh();
        }
        else {
            if (this.charMeasure.height !== this.currentRowHeight) {
                this.refresh();
            }
        }
        var scrollTop = this.terminal.buffer.ydisp * this.currentRowHeight;
        if (this.viewportElement.scrollTop !== scrollTop) {
            this.viewportElement.scrollTop = scrollTop;
        }
    };
    Viewport.prototype.onScroll = function (ev) {
        var newRow = Math.round(this.viewportElement.scrollTop / this.currentRowHeight);
        var diff = newRow - this.terminal.buffer.ydisp;
        this.terminal.scrollDisp(diff, true);
    };
    Viewport.prototype.onWheel = function (ev) {
        if (ev.deltaY === 0) {
            return;
        }
        var multiplier = 1;
        if (ev.deltaMode === WheelEvent.DOM_DELTA_LINE) {
            multiplier = this.currentRowHeight;
        }
        else if (ev.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
            multiplier = this.currentRowHeight * this.terminal.rows;
        }
        this.viewportElement.scrollTop += ev.deltaY * multiplier;
        ev.preventDefault();
    };
    ;
    Viewport.prototype.onTouchStart = function (ev) {
        this.lastTouchY = ev.touches[0].pageY;
    };
    ;
    Viewport.prototype.onTouchMove = function (ev) {
        var deltaY = this.lastTouchY - ev.touches[0].pageY;
        this.lastTouchY = ev.touches[0].pageY;
        if (deltaY === 0) {
            return;
        }
        this.viewportElement.scrollTop += deltaY;
        ev.preventDefault();
    };
    ;
    return Viewport;
}());
exports.Viewport = Viewport;



},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prepareTextForTerminal(text, isMSWindows) {
    if (isMSWindows) {
        return text.replace(/\r?\n/g, '\r');
    }
    return text;
}
exports.prepareTextForTerminal = prepareTextForTerminal;
function copyHandler(ev, term, selectionManager) {
    if (term.browser.isMSIE) {
        window.clipboardData.setData('Text', selectionManager.selectionText);
    }
    else {
        ev.clipboardData.setData('text/plain', selectionManager.selectionText);
    }
    ev.preventDefault();
}
exports.copyHandler = copyHandler;
function pasteHandler(ev, term) {
    ev.stopPropagation();
    var text;
    var dispatchPaste = function (text) {
        text = prepareTextForTerminal(text, term.browser.isMSWindows);
        term.handler(text);
        term.textarea.value = '';
        term.emit('paste', text);
        return term.cancel(ev);
    };
    if (term.browser.isMSIE) {
        if (window.clipboardData) {
            text = window.clipboardData.getData('Text');
            dispatchPaste(text);
        }
    }
    else {
        if (ev.clipboardData) {
            text = ev.clipboardData.getData('text/plain');
            dispatchPaste(text);
        }
    }
}
exports.pasteHandler = pasteHandler;
function moveTextAreaUnderMouseCursor(ev, textarea) {
    textarea.style.position = 'fixed';
    textarea.style.width = '20px';
    textarea.style.height = '20px';
    textarea.style.left = (ev.clientX - 10) + 'px';
    textarea.style.top = (ev.clientY - 10) + 'px';
    textarea.style.zIndex = '1000';
    textarea.focus();
    setTimeout(function () {
        textarea.style.position = null;
        textarea.style.width = null;
        textarea.style.height = null;
        textarea.style.left = null;
        textarea.style.top = null;
        textarea.style.zIndex = null;
    }, 4);
}
exports.moveTextAreaUnderMouseCursor = moveTextAreaUnderMouseCursor;
function rightClickHandler(ev, textarea, selectionManager) {
    moveTextAreaUnderMouseCursor(ev, textarea);
    textarea.value = selectionManager.selectionText;
    textarea.select();
}
exports.rightClickHandler = rightClickHandler;



},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Generic_1 = require("./Generic");
var isNode = (typeof navigator === 'undefined') ? true : false;
var userAgent = (isNode) ? 'node' : navigator.userAgent;
var platform = (isNode) ? 'node' : navigator.platform;
exports.isFirefox = !!~userAgent.indexOf('Firefox');
exports.isMSIE = !!~userAgent.indexOf('MSIE') || !!~userAgent.indexOf('Trident');
exports.isMac = Generic_1.contains(['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], platform);
exports.isIpad = platform === 'iPad';
exports.isIphone = platform === 'iPhone';
exports.isMSWindows = Generic_1.contains(['Windows', 'Win16', 'Win32', 'WinCE'], platform);
exports.isLinux = platform.indexOf('Linux') >= 0;



},{"./Generic":20}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LINE_DATA_CHAR_INDEX = 1;
var LINE_DATA_WIDTH_INDEX = 2;
function translateBufferLineToString(line, trimRight, startCol, endCol) {
    if (startCol === void 0) { startCol = 0; }
    if (endCol === void 0) { endCol = null; }
    var lineString = '';
    var widthAdjustedStartCol = startCol;
    var widthAdjustedEndCol = endCol;
    for (var i = 0; i < line.length; i++) {
        var char = line[i];
        lineString += char[LINE_DATA_CHAR_INDEX];
        if (char[LINE_DATA_WIDTH_INDEX] === 0) {
            if (startCol >= i) {
                widthAdjustedStartCol--;
            }
            if (endCol >= i) {
                widthAdjustedEndCol--;
            }
        }
    }
    var finalEndCol = widthAdjustedEndCol || line.length;
    if (trimRight) {
        var rightWhitespaceIndex = lineString.search(/\s+$/);
        if (rightWhitespaceIndex !== -1) {
            finalEndCol = Math.min(finalEndCol, rightWhitespaceIndex);
        }
        if (finalEndCol <= widthAdjustedStartCol) {
            return '';
        }
    }
    return lineString.substring(widthAdjustedStartCol, finalEndCol);
}
exports.translateBufferLineToString = translateBufferLineToString;



},{}],17:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter_js_1 = require("../EventEmitter.js");
var CharMeasure = (function (_super) {
    __extends(CharMeasure, _super);
    function CharMeasure(document, parentElement) {
        var _this = _super.call(this) || this;
        _this._document = document;
        _this._parentElement = parentElement;
        return _this;
    }
    Object.defineProperty(CharMeasure.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharMeasure.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    CharMeasure.prototype.measure = function () {
        var _this = this;
        if (!this._measureElement) {
            this._measureElement = this._document.createElement('span');
            this._measureElement.style.position = 'absolute';
            this._measureElement.style.top = '0';
            this._measureElement.style.left = '-9999em';
            this._measureElement.textContent = 'W';
            this._measureElement.setAttribute('aria-hidden', 'true');
            this._parentElement.appendChild(this._measureElement);
            setTimeout(function () { return _this._doMeasure(); }, 0);
        }
        else {
            this._doMeasure();
        }
    };
    CharMeasure.prototype._doMeasure = function () {
        var geometry = this._measureElement.getBoundingClientRect();
        if (geometry.width === 0 || geometry.height === 0) {
            return;
        }
        if (this._width !== geometry.width || this._height !== geometry.height) {
            this._width = geometry.width;
            this._height = geometry.height;
            this.emit('charsizechanged');
        }
    };
    return CharMeasure;
}(EventEmitter_js_1.EventEmitter));
exports.CharMeasure = CharMeasure;



},{"../EventEmitter.js":6}],18:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter_1 = require("../EventEmitter");
var CircularList = (function (_super) {
    __extends(CircularList, _super);
    function CircularList(maxLength) {
        var _this = _super.call(this) || this;
        _this._array = new Array(maxLength);
        _this._startIndex = 0;
        _this._length = 0;
        return _this;
    }
    Object.defineProperty(CircularList.prototype, "maxLength", {
        get: function () {
            return this._array.length;
        },
        set: function (newMaxLength) {
            var newArray = new Array(newMaxLength);
            for (var i = 0; i < Math.min(newMaxLength, this.length); i++) {
                newArray[i] = this._array[this._getCyclicIndex(i)];
            }
            this._array = newArray;
            this._startIndex = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircularList.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (newLength) {
            if (newLength > this._length) {
                for (var i = this._length; i < newLength; i++) {
                    this._array[i] = undefined;
                }
            }
            this._length = newLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircularList.prototype, "forEach", {
        get: function () {
            var _this = this;
            return function (callbackfn) {
                var i = 0;
                var length = _this.length;
                for (var i_1 = 0; i_1 < length; i_1++) {
                    callbackfn(_this.get(i_1), i_1);
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    CircularList.prototype.get = function (index) {
        return this._array[this._getCyclicIndex(index)];
    };
    CircularList.prototype.set = function (index, value) {
        this._array[this._getCyclicIndex(index)] = value;
    };
    CircularList.prototype.push = function (value) {
        this._array[this._getCyclicIndex(this._length)] = value;
        if (this._length === this.maxLength) {
            this._startIndex++;
            if (this._startIndex === this.maxLength) {
                this._startIndex = 0;
            }
            this.emit('trim', 1);
        }
        else {
            this._length++;
        }
    };
    CircularList.prototype.pop = function () {
        return this._array[this._getCyclicIndex(this._length-- - 1)];
    };
    CircularList.prototype.splice = function (start, deleteCount) {
        var items = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            items[_i - 2] = arguments[_i];
        }
        if (deleteCount) {
            for (var i = start; i < this._length - deleteCount; i++) {
                this._array[this._getCyclicIndex(i)] = this._array[this._getCyclicIndex(i + deleteCount)];
            }
            this._length -= deleteCount;
        }
        if (items && items.length) {
            for (var i = this._length - 1; i >= start; i--) {
                this._array[this._getCyclicIndex(i + items.length)] = this._array[this._getCyclicIndex(i)];
            }
            for (var i = 0; i < items.length; i++) {
                this._array[this._getCyclicIndex(start + i)] = items[i];
            }
            if (this._length + items.length > this.maxLength) {
                var countToTrim = (this._length + items.length) - this.maxLength;
                this._startIndex += countToTrim;
                this._length = this.maxLength;
                this.emit('trim', countToTrim);
            }
            else {
                this._length += items.length;
            }
        }
    };
    CircularList.prototype.trimStart = function (count) {
        if (count > this._length) {
            count = this._length;
        }
        this._startIndex += count;
        this._length -= count;
        this.emit('trim', count);
    };
    CircularList.prototype.shiftElements = function (start, count, offset) {
        if (count <= 0) {
            return;
        }
        if (start < 0 || start >= this._length) {
            throw new Error('start argument out of range');
        }
        if (start + offset < 0) {
            throw new Error('Cannot shift elements in list beyond index 0');
        }
        if (offset > 0) {
            for (var i = count - 1; i >= 0; i--) {
                this.set(start + i + offset, this.get(start + i));
            }
            var expandListBy = (start + count + offset) - this._length;
            if (expandListBy > 0) {
                this._length += expandListBy;
                while (this._length > this.maxLength) {
                    this._length--;
                    this._startIndex++;
                    this.emit('trim', 1);
                }
            }
        }
        else {
            for (var i = 0; i < count; i++) {
                this.set(start + i + offset, this.get(start + i));
            }
        }
    };
    CircularList.prototype._getCyclicIndex = function (index) {
        return (this._startIndex + index) % this.maxLength;
    };
    return CircularList;
}(EventEmitter_1.EventEmitter));
exports.CircularList = CircularList;



},{"../EventEmitter":6}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementObjectPool = (function () {
    function DomElementObjectPool(type) {
        this.type = type;
        this._type = type;
        this._pool = [];
        this._inUse = {};
    }
    DomElementObjectPool.prototype.acquire = function () {
        var element;
        if (this._pool.length === 0) {
            element = this._createNew();
        }
        else {
            element = this._pool.pop();
        }
        this._inUse[element.getAttribute(DomElementObjectPool.OBJECT_ID_ATTRIBUTE)] = element;
        return element;
    };
    DomElementObjectPool.prototype.release = function (element) {
        if (!this._inUse[element.getAttribute(DomElementObjectPool.OBJECT_ID_ATTRIBUTE)]) {
            throw new Error('Could not release an element not yet acquired');
        }
        delete this._inUse[element.getAttribute(DomElementObjectPool.OBJECT_ID_ATTRIBUTE)];
        this._cleanElement(element);
        this._pool.push(element);
    };
    DomElementObjectPool.prototype._createNew = function () {
        var element = document.createElement(this._type);
        var id = DomElementObjectPool._objectCount++;
        element.setAttribute(DomElementObjectPool.OBJECT_ID_ATTRIBUTE, id.toString(10));
        return element;
    };
    DomElementObjectPool.prototype._cleanElement = function (element) {
        element.className = '';
        element.innerHTML = '';
    };
    return DomElementObjectPool;
}());
DomElementObjectPool.OBJECT_ID_ATTRIBUTE = 'data-obj-id';
DomElementObjectPool._objectCount = 0;
exports.DomElementObjectPool = DomElementObjectPool;



},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contains(arr, el) {
    return arr.indexOf(el) >= 0;
}
exports.contains = contains;
;



},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCoordsRelativeToElement(event, element) {
    if (event.pageX == null) {
        return null;
    }
    var x = event.pageX;
    var y = event.pageY;
    while (element && element !== self.document.documentElement) {
        x -= element.offsetLeft;
        y -= element.offsetTop;
        element = 'offsetParent' in element ? element.offsetParent : element.parentElement;
    }
    return [x, y];
}
exports.getCoordsRelativeToElement = getCoordsRelativeToElement;
function getCoords(event, rowContainer, charMeasure, colCount, rowCount, isSelection) {
    if (!charMeasure.width || !charMeasure.height) {
        return null;
    }
    var coords = getCoordsRelativeToElement(event, rowContainer);
    if (!coords) {
        return null;
    }
    coords[0] = Math.ceil((coords[0] + (isSelection ? charMeasure.width / 2 : 0)) / charMeasure.width);
    coords[1] = Math.ceil(coords[1] / charMeasure.height);
    coords[0] = Math.min(Math.max(coords[0], 1), colCount + 1);
    coords[1] = Math.min(Math.max(coords[1], 1), rowCount + 1);
    return coords;
}
exports.getCoords = getCoords;
function getRawByteCoords(event, rowContainer, charMeasure, colCount, rowCount) {
    var coords = getCoords(event, rowContainer, charMeasure, colCount, rowCount);
    var x = coords[0];
    var y = coords[1];
    x += 32;
    y += 32;
    return { x: x, y: y };
}
exports.getRawByteCoords = getRawByteCoords;



},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BufferSet_1 = require("./BufferSet");
var CompositionHelper_1 = require("./CompositionHelper");
var EventEmitter_1 = require("./EventEmitter");
var Viewport_1 = require("./Viewport");
var Clipboard_1 = require("./handlers/Clipboard");
var EscapeSequences_1 = require("./EscapeSequences");
var InputHandler_1 = require("./InputHandler");
var Parser_1 = require("./Parser");
var Renderer_1 = require("./Renderer");
var Linkifier_1 = require("./Linkifier");
var SelectionManager_1 = require("./SelectionManager");
var CharMeasure_1 = require("./utils/CharMeasure");
var Browser = require("./utils/Browser");
var Mouse_1 = require("./utils/Mouse");
var BufferLine_1 = require("./utils/BufferLine");
var document = (typeof window != 'undefined') ? window.document : null;
var WRITE_BUFFER_PAUSE_THRESHOLD = 5;
var WRITE_BATCH_SIZE = 300;
var CURSOR_BLINK_INTERVAL = 600;
function Terminal(options) {
    var self = this;
    if (!(this instanceof Terminal)) {
        return new Terminal(arguments[0], arguments[1], arguments[2]);
    }
    self.browser = Browser;
    self.cancel = Terminal.cancel;
    EventEmitter_1.EventEmitter.call(this);
    if (typeof options === 'number') {
        options = {
            cols: arguments[0],
            rows: arguments[1],
            handler: arguments[2]
        };
    }
    options = options || {};
    Object.keys(Terminal.defaults).forEach(function (key) {
        if (options[key] == null) {
            options[key] = Terminal.options[key];
            if (Terminal[key] !== Terminal.defaults[key]) {
                options[key] = Terminal[key];
            }
        }
        self[key] = options[key];
    });
    if (options.colors.length === 8) {
        options.colors = options.colors.concat(Terminal._colors.slice(8));
    }
    else if (options.colors.length === 16) {
        options.colors = options.colors.concat(Terminal._colors.slice(16));
    }
    else if (options.colors.length === 10) {
        options.colors = options.colors.slice(0, -2).concat(Terminal._colors.slice(8, -2), options.colors.slice(-2));
    }
    else if (options.colors.length === 18) {
        options.colors = options.colors.concat(Terminal._colors.slice(16, -2), options.colors.slice(-2));
    }
    this.colors = options.colors;
    this.options = options;
    this.parent = options.body || options.parent || (document ? document.getElementsByTagName('body')[0] : null);
    this.cols = options.cols || options.geometry[0];
    this.rows = options.rows || options.geometry[1];
    this.geometry = [this.cols, this.rows];
    if (options.handler) {
        this.on('data', options.handler);
    }
    this.cursorState = 0;
    this.cursorHidden = false;
    this.convertEol;
    this.queue = '';
    this.customKeyEventHandler = null;
    this.cursorBlinkInterval = null;
    this.applicationKeypad = false;
    this.applicationCursor = false;
    this.originMode = false;
    this.insertMode = false;
    this.wraparoundMode = true;
    this.charset = null;
    this.gcharset = null;
    this.glevel = 0;
    this.charsets = [null];
    this.decLocator;
    this.x10Mouse;
    this.vt200Mouse;
    this.vt300Mouse;
    this.normalMouse;
    this.mouseEvents;
    this.sendFocus;
    this.utfMouse;
    this.sgrMouse;
    this.urxvtMouse;
    this.element;
    this.children;
    this.refreshStart;
    this.refreshEnd;
    this.savedX;
    this.savedY;
    this.savedCols;
    this.readable = true;
    this.writable = true;
    this.defAttr = (0 << 18) | (257 << 9) | (256 << 0);
    this.curAttr = this.defAttr;
    this.params = [];
    this.currentParam = 0;
    this.prefix = '';
    this.postfix = '';
    this.inputHandler = new InputHandler_1.InputHandler(this);
    this.parser = new Parser_1.Parser(this.inputHandler, this);
    this.renderer = this.renderer || null;
    this.selectionManager = this.selectionManager || null;
    this.linkifier = this.linkifier || new Linkifier_1.Linkifier();
    this.writeBuffer = [];
    this.writeInProgress = false;
    this.xoffSentToCatchUp = false;
    this.writeStopped = false;
    this.surrogate_high = '';
    this.buffers = new BufferSet_1.BufferSet(this);
    this.buffer = this.buffers.active;
    this.buffers.on('activate', function (buffer) {
        this._terminal.buffer = buffer;
    });
    if (this.selectionManager) {
        this.selectionManager.setBuffer(this.buffer.lines);
    }
    this.setupStops();
    this.userScrolling = false;
}
inherits(Terminal, EventEmitter_1.EventEmitter);
Terminal.prototype.eraseAttr = function () {
    return (this.defAttr & ~0x1ff) | (this.curAttr & 0x1ff);
};
Terminal.tangoColors = [
    '#2e3436',
    '#cc0000',
    '#4e9a06',
    '#c4a000',
    '#3465a4',
    '#75507b',
    '#06989a',
    '#d3d7cf',
    '#555753',
    '#ef2929',
    '#8ae234',
    '#fce94f',
    '#729fcf',
    '#ad7fa8',
    '#34e2e2',
    '#eeeeec'
];
Terminal.colors = (function () {
    var colors = Terminal.tangoColors.slice(), r = [0x00, 0x5f, 0x87, 0xaf, 0xd7, 0xff], i;
    i = 0;
    for (; i < 216; i++) {
        out(r[(i / 36) % 6 | 0], r[(i / 6) % 6 | 0], r[i % 6]);
    }
    i = 0;
    for (; i < 24; i++) {
        r = 8 + i * 10;
        out(r, r, r);
    }
    function out(r, g, b) {
        colors.push('#' + hex(r) + hex(g) + hex(b));
    }
    function hex(c) {
        c = c.toString(16);
        return c.length < 2 ? '0' + c : c;
    }
    return colors;
})();
Terminal._colors = Terminal.colors.slice();
Terminal.vcolors = (function () {
    var out = [], colors = Terminal.colors, i = 0, color;
    for (; i < 256; i++) {
        color = parseInt(colors[i].substring(1), 16);
        out.push([
            (color >> 16) & 0xff,
            (color >> 8) & 0xff,
            color & 0xff
        ]);
    }
    return out;
})();
Terminal.defaults = {
    colors: Terminal.colors,
    theme: 'default',
    convertEol: false,
    termName: 'xterm',
    geometry: [80, 24],
    cursorBlink: false,
    cursorStyle: 'block',
    visualBell: false,
    popOnBell: false,
    scrollback: 1000,
    screenKeys: false,
    debug: false,
    cancelEvents: false,
    disableStdin: false,
    useFlowControl: false,
    tabStopWidth: 8
};
Terminal.options = {};
Terminal.focus = null;
each(keys(Terminal.defaults), function (key) {
    Terminal[key] = Terminal.defaults[key];
    Terminal.options[key] = Terminal.defaults[key];
});
Terminal.prototype.focus = function () {
    return this.textarea.focus();
};
Terminal.prototype.getOption = function (key) {
    if (!(key in Terminal.defaults)) {
        throw new Error('No option with key "' + key + '"');
    }
    if (typeof this.options[key] !== 'undefined') {
        return this.options[key];
    }
    return this[key];
};
Terminal.prototype.setOption = function (key, value) {
    if (!(key in Terminal.defaults)) {
        throw new Error('No option with key "' + key + '"');
    }
    switch (key) {
        case 'scrollback':
            if (value < this.rows) {
                var msg = 'Setting the scrollback value less than the number of rows ';
                msg += "(" + this.rows + ") is not allowed.";
                console.warn(msg);
                return false;
            }
            if (this.options[key] !== value) {
                if (this.buffer.lines.length > value) {
                    var amountToTrim = this.buffer.lines.length - value;
                    var needsRefresh = (this.buffer.ydisp - amountToTrim < 0);
                    this.buffer.lines.trimStart(amountToTrim);
                    this.buffer.ybase = Math.max(this.buffer.ybase - amountToTrim, 0);
                    this.buffer.ydisp = Math.max(this.buffer.ydisp - amountToTrim, 0);
                    if (needsRefresh) {
                        this.refresh(0, this.rows - 1);
                    }
                }
                this.buffer.lines.maxLength = value;
                this.viewport.syncScrollArea();
            }
            break;
    }
    this[key] = value;
    this.options[key] = value;
    switch (key) {
        case 'cursorBlink':
            this.setCursorBlinking(value);
            break;
        case 'cursorStyle':
            this.element.classList.toggle("xterm-cursor-style-block", value === 'block');
            this.element.classList.toggle("xterm-cursor-style-underline", value === 'underline');
            this.element.classList.toggle("xterm-cursor-style-bar", value === 'bar');
            break;
        case 'tabStopWidth':
            this.setupStops();
            break;
    }
};
Terminal.prototype.restartCursorBlinking = function () {
    this.setCursorBlinking(this.options.cursorBlink);
};
Terminal.prototype.setCursorBlinking = function (enabled) {
    this.element.classList.toggle('xterm-cursor-blink', enabled);
    this.clearCursorBlinkingInterval();
    if (enabled) {
        var self = this;
        this.cursorBlinkInterval = setInterval(function () {
            self.element.classList.toggle('xterm-cursor-blink-on');
        }, CURSOR_BLINK_INTERVAL);
    }
};
Terminal.prototype.clearCursorBlinkingInterval = function () {
    this.element.classList.remove('xterm-cursor-blink-on');
    if (this.cursorBlinkInterval) {
        clearInterval(this.cursorBlinkInterval);
        this.cursorBlinkInterval = null;
    }
};
Terminal.bindFocus = function (term) {
    on(term.textarea, 'focus', function (ev) {
        if (term.sendFocus) {
            term.send(EscapeSequences_1.C0.ESC + '[I');
        }
        term.element.classList.add('focus');
        term.showCursor();
        term.restartCursorBlinking.apply(term);
        Terminal.focus = term;
        term.emit('focus', { terminal: term });
    });
};
Terminal.prototype.blur = function () {
    return this.textarea.blur();
};
Terminal.bindBlur = function (term) {
    on(term.textarea, 'blur', function (ev) {
        term.refresh(term.buffer.y, term.buffer.y);
        if (term.sendFocus) {
            term.send(EscapeSequences_1.C0.ESC + '[O');
        }
        term.element.classList.remove('focus');
        term.clearCursorBlinkingInterval.apply(term);
        Terminal.focus = null;
        term.emit('blur', { terminal: term });
    });
};
Terminal.prototype.initGlobal = function () {
    var _this = this;
    var term = this;
    Terminal.bindKeys(this);
    Terminal.bindFocus(this);
    Terminal.bindBlur(this);
    on(this.element, 'copy', function (event) {
        if (!term.hasSelection()) {
            return;
        }
        Clipboard_1.copyHandler(event, term, _this.selectionManager);
    });
    var pasteHandlerWrapper = function (event) { return Clipboard_1.pasteHandler(event, term); };
    on(this.textarea, 'paste', pasteHandlerWrapper);
    on(this.element, 'paste', pasteHandlerWrapper);
    if (term.browser.isFirefox) {
        on(this.element, 'mousedown', function (event) {
            if (event.button == 2) {
                Clipboard_1.rightClickHandler(event, _this.textarea, _this.selectionManager);
            }
        });
    }
    else {
        on(this.element, 'contextmenu', function (event) {
            Clipboard_1.rightClickHandler(event, _this.textarea, _this.selectionManager);
        });
    }
    if (term.browser.isLinux) {
        on(this.element, 'auxclick', function (event) {
            if (event.button === 1) {
                Clipboard_1.moveTextAreaUnderMouseCursor(event, _this.textarea, _this.selectionManager);
            }
        });
    }
};
Terminal.bindKeys = function (term) {
    on(term.element, 'keydown', function (ev) {
        if (document.activeElement != this) {
            return;
        }
        term.keyDown(ev);
    }, true);
    on(term.element, 'keypress', function (ev) {
        if (document.activeElement != this) {
            return;
        }
        term.keyPress(ev);
    }, true);
    on(term.element, 'keyup', function (ev) {
        if (!wasMondifierKeyOnlyEvent(ev)) {
            term.focus(term);
        }
    }, true);
    on(term.textarea, 'keydown', function (ev) {
        term.keyDown(ev);
    }, true);
    on(term.textarea, 'keypress', function (ev) {
        term.keyPress(ev);
        this.value = '';
    }, true);
    on(term.textarea, 'compositionstart', term.compositionHelper.compositionstart.bind(term.compositionHelper));
    on(term.textarea, 'compositionupdate', term.compositionHelper.compositionupdate.bind(term.compositionHelper));
    on(term.textarea, 'compositionend', term.compositionHelper.compositionend.bind(term.compositionHelper));
    term.on('refresh', term.compositionHelper.updateCompositionElements.bind(term.compositionHelper));
    term.on('refresh', function (data) {
        term.queueLinkification(data.start, data.end);
    });
};
Terminal.prototype.insertRow = function (row) {
    if (typeof row != 'object') {
        row = document.createElement('div');
    }
    this.rowContainer.appendChild(row);
    this.children.push(row);
    return row;
};
Terminal.prototype.open = function (parent, focus) {
    var _this = this;
    var self = this, i = 0, div;
    this.parent = parent || this.parent;
    if (!this.parent) {
        throw new Error('Terminal requires a parent element.');
    }
    this.context = this.parent.ownerDocument.defaultView;
    this.document = this.parent.ownerDocument;
    this.body = this.document.getElementsByTagName('body')[0];
    this.element = this.document.createElement('div');
    this.element.classList.add('terminal');
    this.element.classList.add('xterm');
    this.element.classList.add('xterm-theme-' + this.theme);
    this.element.classList.add("xterm-cursor-style-" + this.options.cursorStyle);
    this.setCursorBlinking(this.options.cursorBlink);
    this.element.setAttribute('tabindex', 0);
    this.viewportElement = document.createElement('div');
    this.viewportElement.classList.add('xterm-viewport');
    this.element.appendChild(this.viewportElement);
    this.viewportScrollArea = document.createElement('div');
    this.viewportScrollArea.classList.add('xterm-scroll-area');
    this.viewportElement.appendChild(this.viewportScrollArea);
    this.selectionContainer = document.createElement('div');
    this.selectionContainer.classList.add('xterm-selection');
    this.element.appendChild(this.selectionContainer);
    this.rowContainer = document.createElement('div');
    this.rowContainer.classList.add('xterm-rows');
    this.element.appendChild(this.rowContainer);
    this.children = [];
    this.linkifier.attachToDom(document, this.children);
    this.helperContainer = document.createElement('div');
    this.helperContainer.classList.add('xterm-helpers');
    this.element.appendChild(this.helperContainer);
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('xterm-helper-textarea');
    this.textarea.setAttribute('autocorrect', 'off');
    this.textarea.setAttribute('autocapitalize', 'off');
    this.textarea.setAttribute('spellcheck', 'false');
    this.textarea.tabIndex = 0;
    this.textarea.addEventListener('focus', function () {
        self.emit('focus', { terminal: self });
    });
    this.textarea.addEventListener('blur', function () {
        self.emit('blur', { terminal: self });
    });
    this.helperContainer.appendChild(this.textarea);
    this.compositionView = document.createElement('div');
    this.compositionView.classList.add('composition-view');
    this.compositionHelper = new CompositionHelper_1.CompositionHelper(this.textarea, this.compositionView, this);
    this.helperContainer.appendChild(this.compositionView);
    this.charSizeStyleElement = document.createElement('style');
    this.helperContainer.appendChild(this.charSizeStyleElement);
    for (; i < this.rows; i++) {
        this.insertRow();
    }
    this.parent.appendChild(this.element);
    this.charMeasure = new CharMeasure_1.CharMeasure(document, this.helperContainer);
    this.charMeasure.on('charsizechanged', function () {
        self.updateCharSizeStyles();
    });
    this.charMeasure.measure();
    this.viewport = new Viewport_1.Viewport(this, this.viewportElement, this.viewportScrollArea, this.charMeasure);
    this.renderer = new Renderer_1.Renderer(this);
    this.selectionManager = new SelectionManager_1.SelectionManager(this, this.buffer.lines, this.rowContainer, this.charMeasure);
    this.selectionManager.on('refresh', function (data) {
        _this.renderer.refreshSelection(data.start, data.end);
    });
    this.selectionManager.on('newselection', function (text) {
        _this.textarea.value = text;
        _this.textarea.focus();
        _this.textarea.select();
    });
    this.on('scroll', function () { return _this.selectionManager.refresh(); });
    this.viewportElement.addEventListener('scroll', function () { return _this.selectionManager.refresh(); });
    this.refresh(0, this.rows - 1);
    this.initGlobal();
    if (typeof focus == 'undefined') {
        var message = 'You did not pass the `focus` argument in `Terminal.prototype.open()`.\n';
        message += 'The `focus` argument now defaults to `true` but starting with xterm.js 3.0 ';
        message += 'it will default to `false`.';
        console.warn(message);
        focus = true;
    }
    if (focus) {
        this.focus();
    }
    this.bindMouse();
    this.emit('open');
};
Terminal.loadAddon = function (addon, callback) {
    if (typeof exports === 'object' && typeof module === 'object') {
        return require('./addons/' + addon + '/' + addon);
    }
    else if (typeof define == 'function') {
        return require(['./addons/' + addon + '/' + addon], callback);
    }
    else {
        console.error('Cannot load a module without a CommonJS or RequireJS environment.');
        return false;
    }
};
Terminal.prototype.updateCharSizeStyles = function () {
    this.charSizeStyleElement.textContent =
        ".xterm-wide-char{width:" + this.charMeasure.width * 2 + "px;}" +
            (".xterm-normal-char{width:" + this.charMeasure.width + "px;}") +
            (".xterm-rows > div{height:" + this.charMeasure.height + "px;}");
};
Terminal.prototype.bindMouse = function () {
    var el = this.element, self = this, pressed = 32;
    function sendButton(ev) {
        var button, pos;
        button = getButton(ev);
        pos = Mouse_1.getRawByteCoords(ev, self.rowContainer, self.charMeasure, self.cols, self.rows);
        if (!pos)
            return;
        sendEvent(button, pos);
        switch (ev.overrideType || ev.type) {
            case 'mousedown':
                pressed = button;
                break;
            case 'mouseup':
                pressed = 32;
                break;
            case 'wheel':
                break;
        }
    }
    function sendMove(ev) {
        var button = pressed, pos;
        pos = Mouse_1.getRawByteCoords(ev, self.rowContainer, self.charMeasure, self.cols, self.rows);
        if (!pos)
            return;
        button += 32;
        sendEvent(button, pos);
    }
    function encode(data, ch) {
        if (!self.utfMouse) {
            if (ch === 255)
                return data.push(0);
            if (ch > 127)
                ch = 127;
            data.push(ch);
        }
        else {
            if (ch === 2047)
                return data.push(0);
            if (ch < 127) {
                data.push(ch);
            }
            else {
                if (ch > 2047)
                    ch = 2047;
                data.push(0xC0 | (ch >> 6));
                data.push(0x80 | (ch & 0x3F));
            }
        }
    }
    function sendEvent(button, pos) {
        if (self.vt300Mouse) {
            button &= 3;
            pos.x -= 32;
            pos.y -= 32;
            var data = EscapeSequences_1.C0.ESC + '[24';
            if (button === 0)
                data += '1';
            else if (button === 1)
                data += '3';
            else if (button === 2)
                data += '5';
            else if (button === 3)
                return;
            else
                data += '0';
            data += '~[' + pos.x + ',' + pos.y + ']\r';
            self.send(data);
            return;
        }
        if (self.decLocator) {
            button &= 3;
            pos.x -= 32;
            pos.y -= 32;
            if (button === 0)
                button = 2;
            else if (button === 1)
                button = 4;
            else if (button === 2)
                button = 6;
            else if (button === 3)
                button = 3;
            self.send(EscapeSequences_1.C0.ESC + '['
                + button
                + ';'
                + (button === 3 ? 4 : 0)
                + ';'
                + pos.y
                + ';'
                + pos.x
                + ';'
                + (pos.page || 0)
                + '&w');
            return;
        }
        if (self.urxvtMouse) {
            pos.x -= 32;
            pos.y -= 32;
            pos.x++;
            pos.y++;
            self.send(EscapeSequences_1.C0.ESC + '[' + button + ';' + pos.x + ';' + pos.y + 'M');
            return;
        }
        if (self.sgrMouse) {
            pos.x -= 32;
            pos.y -= 32;
            self.send(EscapeSequences_1.C0.ESC + '[<'
                + (((button & 3) === 3 ? button & ~3 : button) - 32)
                + ';'
                + pos.x
                + ';'
                + pos.y
                + ((button & 3) === 3 ? 'm' : 'M'));
            return;
        }
        var data = [];
        encode(data, button);
        encode(data, pos.x);
        encode(data, pos.y);
        self.send(EscapeSequences_1.C0.ESC + '[M' + String.fromCharCode.apply(String, data));
    }
    function getButton(ev) {
        var button, shift, meta, ctrl, mod;
        switch (ev.overrideType || ev.type) {
            case 'mousedown':
                button = ev.button != null
                    ? +ev.button
                    : ev.which != null
                        ? ev.which - 1
                        : null;
                if (self.browser.isMSIE) {
                    button = button === 1 ? 0 : button === 4 ? 1 : button;
                }
                break;
            case 'mouseup':
                button = 3;
                break;
            case 'DOMMouseScroll':
                button = ev.detail < 0
                    ? 64
                    : 65;
                break;
            case 'wheel':
                button = ev.wheelDeltaY > 0
                    ? 64
                    : 65;
                break;
        }
        shift = ev.shiftKey ? 4 : 0;
        meta = ev.metaKey ? 8 : 0;
        ctrl = ev.ctrlKey ? 16 : 0;
        mod = shift | meta | ctrl;
        if (self.vt200Mouse) {
            mod &= ctrl;
        }
        else if (!self.normalMouse) {
            mod = 0;
        }
        button = (32 + (mod << 2)) + button;
        return button;
    }
    on(el, 'mousedown', function (ev) {
        ev.preventDefault();
        self.focus();
        if (!self.mouseEvents)
            return;
        sendButton(ev);
        if (self.vt200Mouse) {
            ev.overrideType = 'mouseup';
            sendButton(ev);
            return self.cancel(ev);
        }
        if (self.normalMouse)
            on(self.document, 'mousemove', sendMove);
        if (!self.x10Mouse) {
            on(self.document, 'mouseup', function up(ev) {
                sendButton(ev);
                if (self.normalMouse)
                    off(self.document, 'mousemove', sendMove);
                off(self.document, 'mouseup', up);
                return self.cancel(ev);
            });
        }
        return self.cancel(ev);
    });
    on(el, 'wheel', function (ev) {
        if (!self.mouseEvents)
            return;
        if (self.x10Mouse
            || self.vt300Mouse
            || self.decLocator)
            return;
        sendButton(ev);
        return self.cancel(ev);
    });
    on(el, 'wheel', function (ev) {
        if (self.mouseEvents)
            return;
        self.viewport.onWheel(ev);
        return self.cancel(ev);
    });
    on(el, 'touchstart', function (ev) {
        if (self.mouseEvents)
            return;
        self.viewport.onTouchStart(ev);
        return self.cancel(ev);
    });
    on(el, 'touchmove', function (ev) {
        if (self.mouseEvents)
            return;
        self.viewport.onTouchMove(ev);
        return self.cancel(ev);
    });
};
Terminal.prototype.destroy = function () {
    this.readable = false;
    this.writable = false;
    this._events = {};
    this.handler = function () { };
    this.write = function () { };
    if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
    }
};
Terminal.prototype.refresh = function (start, end) {
    if (this.renderer) {
        this.renderer.queueRefresh(start, end);
    }
};
Terminal.prototype.queueLinkification = function (start, end) {
    if (this.linkifier) {
        for (var i = start; i <= end; i++) {
            this.linkifier.linkifyRow(i);
        }
    }
};
Terminal.prototype.showCursor = function () {
    if (!this.cursorState) {
        this.cursorState = 1;
        this.refresh(this.buffer.y, this.buffer.y);
    }
};
Terminal.prototype.scroll = function (isWrapped) {
    var row;
    if (this.buffer.lines.length === this.buffer.lines.maxLength) {
        this.buffer.lines.trimStart(1);
        this.buffer.ybase--;
        if (this.buffer.ydisp !== 0) {
            this.buffer.ydisp--;
        }
    }
    this.buffer.ybase++;
    if (!this.userScrolling) {
        this.buffer.ydisp = this.buffer.ybase;
    }
    row = this.buffer.ybase + this.rows - 1;
    row -= this.rows - 1 - this.buffer.scrollBottom;
    if (row === this.buffer.lines.length) {
        this.buffer.lines.push(this.blankLine(undefined, isWrapped));
    }
    else {
        this.buffer.lines.splice(row, 0, this.blankLine(undefined, isWrapped));
    }
    if (this.buffer.scrollTop !== 0) {
        if (this.buffer.ybase !== 0) {
            this.buffer.ybase--;
            if (!this.userScrolling) {
                this.buffer.ydisp = this.buffer.ybase;
            }
        }
        this.buffer.lines.splice(this.buffer.ybase + this.buffer.scrollTop, 1);
    }
    this.updateRange(this.buffer.scrollTop);
    this.updateRange(this.buffer.scrollBottom);
    this.emit('scroll', this.buffer.ydisp);
};
Terminal.prototype.scrollDisp = function (disp, suppressScrollEvent) {
    if (disp < 0) {
        if (this.buffer.ydisp === 0) {
            return;
        }
        this.userScrolling = true;
    }
    else if (disp + this.buffer.ydisp >= this.buffer.ybase) {
        this.userScrolling = false;
    }
    var oldYdisp = this.buffer.ydisp;
    this.buffer.ydisp = Math.max(Math.min(this.buffer.ydisp + disp, this.buffer.ybase), 0);
    if (oldYdisp === this.buffer.ydisp) {
        return;
    }
    if (!suppressScrollEvent) {
        this.emit('scroll', this.buffer.ydisp);
    }
    this.refresh(0, this.rows - 1);
};
Terminal.prototype.scrollPages = function (pageCount) {
    this.scrollDisp(pageCount * (this.rows - 1));
};
Terminal.prototype.scrollToTop = function () {
    this.scrollDisp(-this.buffer.ydisp);
};
Terminal.prototype.scrollToBottom = function () {
    this.scrollDisp(this.buffer.ybase - this.buffer.ydisp);
};
Terminal.prototype.write = function (data) {
    this.writeBuffer.push(data);
    if (this.options.useFlowControl && !this.xoffSentToCatchUp && this.writeBuffer.length >= WRITE_BUFFER_PAUSE_THRESHOLD) {
        this.send(EscapeSequences_1.C0.DC3);
        this.xoffSentToCatchUp = true;
    }
    if (!this.writeInProgress && this.writeBuffer.length > 0) {
        this.writeInProgress = true;
        var self = this;
        setTimeout(function () {
            self.innerWrite();
        });
    }
};
Terminal.prototype.innerWrite = function () {
    var writeBatch = this.writeBuffer.splice(0, WRITE_BATCH_SIZE);
    while (writeBatch.length > 0) {
        var data = writeBatch.shift();
        var l = data.length, i = 0, j, cs, ch, code, low, ch_width, row;
        if (this.xoffSentToCatchUp && writeBatch.length === 0 && this.writeBuffer.length === 0) {
            this.send(EscapeSequences_1.C0.DC1);
            this.xoffSentToCatchUp = false;
        }
        this.refreshStart = this.buffer.y;
        this.refreshEnd = this.buffer.y;
        var state = this.parser.parse(data);
        this.parser.setState(state);
        this.updateRange(this.buffer.y);
        this.refresh(this.refreshStart, this.refreshEnd);
    }
    if (this.writeBuffer.length > 0) {
        var self = this;
        setTimeout(function () {
            self.innerWrite();
        }, 0);
    }
    else {
        this.writeInProgress = false;
    }
};
Terminal.prototype.writeln = function (data) {
    this.write(data + '\r\n');
};
Terminal.prototype.attachCustomKeydownHandler = function (customKeydownHandler) {
    var message = 'attachCustomKeydownHandler() is DEPRECATED and will be removed soon. Please use attachCustomKeyEventHandler() instead.';
    console.warn(message);
    this.attachCustomKeyEventHandler(customKeydownHandler);
};
Terminal.prototype.attachCustomKeyEventHandler = function (customKeyEventHandler) {
    this.customKeyEventHandler = customKeyEventHandler;
};
Terminal.prototype.setHypertextLinkHandler = function (handler) {
    if (!this.linkifier) {
        throw new Error('Cannot attach a hypertext link handler before Terminal.open is called');
    }
    this.linkifier.setHypertextLinkHandler(handler);
    this.refresh(0, this.rows - 1);
};
Terminal.prototype.setHypertextValidationCallback = function (callback) {
    if (!this.linkifier) {
        throw new Error('Cannot attach a hypertext validation callback before Terminal.open is called');
    }
    this.linkifier.setHypertextValidationCallback(callback);
    this.refresh(0, this.rows - 1);
};
Terminal.prototype.registerLinkMatcher = function (regex, handler, options) {
    if (this.linkifier) {
        var matcherId = this.linkifier.registerLinkMatcher(regex, handler, options);
        this.refresh(0, this.rows - 1);
        return matcherId;
    }
};
Terminal.prototype.deregisterLinkMatcher = function (matcherId) {
    if (this.linkifier) {
        if (this.linkifier.deregisterLinkMatcher(matcherId)) {
            this.refresh(0, this.rows - 1);
        }
    }
};
Terminal.prototype.hasSelection = function () {
    return this.selectionManager ? this.selectionManager.hasSelection : false;
};
Terminal.prototype.getSelection = function () {
    return this.selectionManager ? this.selectionManager.selectionText : '';
};
Terminal.prototype.clearSelection = function () {
    if (this.selectionManager) {
        this.selectionManager.clearSelection();
    }
};
Terminal.prototype.selectAll = function () {
    if (this.selectionManager) {
        this.selectionManager.selectAll();
    }
};
Terminal.prototype.keyDown = function (ev) {
    if (this.customKeyEventHandler && this.customKeyEventHandler(ev) === false) {
        return false;
    }
    this.restartCursorBlinking();
    if (!this.compositionHelper.keydown.bind(this.compositionHelper)(ev)) {
        if (this.buffer.ybase !== this.buffer.ydisp) {
            this.scrollToBottom();
        }
        return false;
    }
    var self = this;
    var result = this.evaluateKeyEscapeSequence(ev);
    if (result.key === EscapeSequences_1.C0.DC3) {
        this.writeStopped = true;
    }
    else if (result.key === EscapeSequences_1.C0.DC1) {
        this.writeStopped = false;
    }
    if (result.scrollDisp) {
        this.scrollDisp(result.scrollDisp);
        return this.cancel(ev, true);
    }
    if (isThirdLevelShift(this, ev)) {
        return true;
    }
    if (result.cancel) {
        this.cancel(ev, true);
    }
    if (!result.key) {
        return true;
    }
    this.emit('keydown', ev);
    this.emit('key', result.key, ev);
    this.showCursor();
    this.handler(result.key);
    return this.cancel(ev, true);
};
Terminal.prototype.evaluateKeyEscapeSequence = function (ev) {
    var result = {
        cancel: false,
        key: undefined,
        scrollDisp: undefined
    };
    var modifiers = ev.shiftKey << 0 | ev.altKey << 1 | ev.ctrlKey << 2 | ev.metaKey << 3;
    switch (ev.keyCode) {
        case 8:
            if (ev.shiftKey) {
                result.key = EscapeSequences_1.C0.BS;
                break;
            }
            result.key = EscapeSequences_1.C0.DEL;
            break;
        case 9:
            if (ev.shiftKey) {
                result.key = EscapeSequences_1.C0.ESC + '[Z';
                break;
            }
            result.key = EscapeSequences_1.C0.HT;
            result.cancel = true;
            break;
        case 13:
            result.key = EscapeSequences_1.C0.CR;
            result.cancel = true;
            break;
        case 27:
            result.key = EscapeSequences_1.C0.ESC;
            result.cancel = true;
            break;
        case 37:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'D';
                if (result.key == EscapeSequences_1.C0.ESC + '[1;3D') {
                    result.key = (this.browser.isMac) ? EscapeSequences_1.C0.ESC + 'b' : EscapeSequences_1.C0.ESC + '[1;5D';
                }
            }
            else if (this.applicationCursor) {
                result.key = EscapeSequences_1.C0.ESC + 'OD';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[D';
            }
            break;
        case 39:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'C';
                if (result.key == EscapeSequences_1.C0.ESC + '[1;3C') {
                    result.key = (this.browser.isMac) ? EscapeSequences_1.C0.ESC + 'f' : EscapeSequences_1.C0.ESC + '[1;5C';
                }
            }
            else if (this.applicationCursor) {
                result.key = EscapeSequences_1.C0.ESC + 'OC';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[C';
            }
            break;
        case 38:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'A';
                if (result.key == EscapeSequences_1.C0.ESC + '[1;3A') {
                    result.key = EscapeSequences_1.C0.ESC + '[1;5A';
                }
            }
            else if (this.applicationCursor) {
                result.key = EscapeSequences_1.C0.ESC + 'OA';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[A';
            }
            break;
        case 40:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'B';
                if (result.key == EscapeSequences_1.C0.ESC + '[1;3B') {
                    result.key = EscapeSequences_1.C0.ESC + '[1;5B';
                }
            }
            else if (this.applicationCursor) {
                result.key = EscapeSequences_1.C0.ESC + 'OB';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[B';
            }
            break;
        case 45:
            if (!ev.shiftKey && !ev.ctrlKey) {
                result.key = EscapeSequences_1.C0.ESC + '[2~';
            }
            break;
        case 46:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[3;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[3~';
            }
            break;
        case 36:
            if (modifiers)
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'H';
            else if (this.applicationCursor)
                result.key = EscapeSequences_1.C0.ESC + 'OH';
            else
                result.key = EscapeSequences_1.C0.ESC + '[H';
            break;
        case 35:
            if (modifiers)
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'F';
            else if (this.applicationCursor)
                result.key = EscapeSequences_1.C0.ESC + 'OF';
            else
                result.key = EscapeSequences_1.C0.ESC + '[F';
            break;
        case 33:
            if (ev.shiftKey) {
                result.scrollDisp = -(this.rows - 1);
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[5~';
            }
            break;
        case 34:
            if (ev.shiftKey) {
                result.scrollDisp = this.rows - 1;
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[6~';
            }
            break;
        case 112:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'P';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + 'OP';
            }
            break;
        case 113:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'Q';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + 'OQ';
            }
            break;
        case 114:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'R';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + 'OR';
            }
            break;
        case 115:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[1;' + (modifiers + 1) + 'S';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + 'OS';
            }
            break;
        case 116:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[15;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[15~';
            }
            break;
        case 117:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[17;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[17~';
            }
            break;
        case 118:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[18;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[18~';
            }
            break;
        case 119:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[19;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[19~';
            }
            break;
        case 120:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[20;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[20~';
            }
            break;
        case 121:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[21;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[21~';
            }
            break;
        case 122:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[23;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[23~';
            }
            break;
        case 123:
            if (modifiers) {
                result.key = EscapeSequences_1.C0.ESC + '[24;' + (modifiers + 1) + '~';
            }
            else {
                result.key = EscapeSequences_1.C0.ESC + '[24~';
            }
            break;
        default:
            if (ev.ctrlKey && !ev.shiftKey && !ev.altKey && !ev.metaKey) {
                if (ev.keyCode >= 65 && ev.keyCode <= 90) {
                    result.key = String.fromCharCode(ev.keyCode - 64);
                }
                else if (ev.keyCode === 32) {
                    result.key = String.fromCharCode(0);
                }
                else if (ev.keyCode >= 51 && ev.keyCode <= 55) {
                    result.key = String.fromCharCode(ev.keyCode - 51 + 27);
                }
                else if (ev.keyCode === 56) {
                    result.key = String.fromCharCode(127);
                }
                else if (ev.keyCode === 219) {
                    result.key = String.fromCharCode(27);
                }
                else if (ev.keyCode === 220) {
                    result.key = String.fromCharCode(28);
                }
                else if (ev.keyCode === 221) {
                    result.key = String.fromCharCode(29);
                }
            }
            else if (!this.browser.isMac && ev.altKey && !ev.ctrlKey && !ev.metaKey) {
                if (ev.keyCode >= 65 && ev.keyCode <= 90) {
                    result.key = EscapeSequences_1.C0.ESC + String.fromCharCode(ev.keyCode + 32);
                }
                else if (ev.keyCode === 192) {
                    result.key = EscapeSequences_1.C0.ESC + '`';
                }
                else if (ev.keyCode >= 48 && ev.keyCode <= 57) {
                    result.key = EscapeSequences_1.C0.ESC + (ev.keyCode - 48);
                }
            }
            else if (this.browser.isMac && !ev.altKey && !ev.ctrlKey && ev.metaKey) {
                if (ev.keyCode === 65) {
                    this.selectAll();
                }
            }
            break;
    }
    return result;
};
Terminal.prototype.setgLevel = function (g) {
    this.glevel = g;
    this.charset = this.charsets[g];
};
Terminal.prototype.setgCharset = function (g, charset) {
    this.charsets[g] = charset;
    if (this.glevel === g) {
        this.charset = charset;
    }
};
Terminal.prototype.keyPress = function (ev) {
    var key;
    if (this.customKeyEventHandler && this.customKeyEventHandler(ev) === false) {
        return false;
    }
    this.cancel(ev);
    if (ev.charCode) {
        key = ev.charCode;
    }
    else if (ev.which == null) {
        key = ev.keyCode;
    }
    else if (ev.which !== 0 && ev.charCode !== 0) {
        key = ev.which;
    }
    else {
        return false;
    }
    if (!key || ((ev.altKey || ev.ctrlKey || ev.metaKey) && !isThirdLevelShift(this, ev))) {
        return false;
    }
    key = String.fromCharCode(key);
    this.emit('keypress', key, ev);
    this.emit('key', key, ev);
    this.showCursor();
    this.handler(key);
    return true;
};
Terminal.prototype.send = function (data) {
    var self = this;
    if (!this.queue) {
        setTimeout(function () {
            self.handler(self.queue);
            self.queue = '';
        }, 1);
    }
    this.queue += data;
};
Terminal.prototype.bell = function () {
    if (!this.visualBell)
        return;
    var self = this;
    this.element.style.borderColor = 'white';
    setTimeout(function () {
        self.element.style.borderColor = '';
    }, 10);
    if (this.popOnBell)
        this.focus();
};
Terminal.prototype.log = function () {
    if (!this.debug)
        return;
    if (!this.context.console || !this.context.console.log)
        return;
    var args = Array.prototype.slice.call(arguments);
    this.context.console.log.apply(this.context.console, args);
};
Terminal.prototype.error = function () {
    if (!this.debug)
        return;
    if (!this.context.console || !this.context.console.error)
        return;
    var args = Array.prototype.slice.call(arguments);
    this.context.console.error.apply(this.context.console, args);
};
Terminal.prototype.resize = function (x, y) {
    if (isNaN(x) || isNaN(y)) {
        return;
    }
    if (y > this.getOption('scrollback')) {
        this.setOption('scrollback', y);
    }
    var line, el, i, j, ch, addToY;
    if (x === this.cols && y === this.rows) {
        if (!this.charMeasure.width || !this.charMeasure.height) {
            this.charMeasure.measure();
        }
        return;
    }
    if (x < 1)
        x = 1;
    if (y < 1)
        y = 1;
    this.buffers.resize(x, y);
    while (this.children.length < y) {
        this.insertRow();
    }
    while (this.children.length > y) {
        el = this.children.shift();
        if (!el)
            continue;
        el.parentNode.removeChild(el);
    }
    this.cols = x;
    this.rows = y;
    this.setupStops(this.cols);
    this.charMeasure.measure();
    this.refresh(0, this.rows - 1);
    this.geometry = [this.cols, this.rows];
    this.emit('resize', { terminal: this, cols: x, rows: y });
};
Terminal.prototype.updateRange = function (y) {
    if (y < this.refreshStart)
        this.refreshStart = y;
    if (y > this.refreshEnd)
        this.refreshEnd = y;
};
Terminal.prototype.maxRange = function () {
    this.refreshStart = 0;
    this.refreshEnd = this.rows - 1;
};
Terminal.prototype.setupStops = function (i) {
    if (i != null) {
        if (!this.buffer.tabs[i]) {
            i = this.prevStop(i);
        }
    }
    else {
        this.buffer.tabs = {};
        i = 0;
    }
    for (; i < this.cols; i += this.getOption('tabStopWidth')) {
        this.buffer.tabs[i] = true;
    }
};
Terminal.prototype.prevStop = function (x) {
    if (x == null)
        x = this.buffer.x;
    while (!this.buffer.tabs[--x] && x > 0)
        ;
    return x >= this.cols
        ? this.cols - 1
        : x < 0 ? 0 : x;
};
Terminal.prototype.nextStop = function (x) {
    if (x == null)
        x = this.buffer.x;
    while (!this.buffer.tabs[++x] && x < this.cols)
        ;
    return x >= this.cols
        ? this.cols - 1
        : x < 0 ? 0 : x;
};
Terminal.prototype.eraseRight = function (x, y) {
    var line = this.buffer.lines.get(this.buffer.ybase + y);
    if (!line) {
        return;
    }
    var ch = [this.eraseAttr(), ' ', 1];
    for (; x < this.cols; x++) {
        line[x] = ch;
    }
    this.updateRange(y);
};
Terminal.prototype.eraseLeft = function (x, y) {
    var line = this.buffer.lines.get(this.buffer.ybase + y);
    if (!line) {
        return;
    }
    var ch = [this.eraseAttr(), ' ', 1];
    x++;
    while (x--) {
        line[x] = ch;
    }
    this.updateRange(y);
};
Terminal.prototype.clear = function () {
    if (this.buffer.ybase === 0 && this.buffer.y === 0) {
        return;
    }
    this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y));
    this.buffer.lines.length = 1;
    this.buffer.ydisp = 0;
    this.buffer.ybase = 0;
    this.buffer.y = 0;
    for (var i = 1; i < this.rows; i++) {
        this.buffer.lines.push(this.blankLine());
    }
    this.refresh(0, this.rows - 1);
    this.emit('scroll', this.buffer.ydisp);
};
Terminal.prototype.eraseLine = function (y) {
    this.eraseRight(0, y);
};
Terminal.prototype.blankLine = function (cur, isWrapped, cols) {
    var attr = cur
        ? this.eraseAttr()
        : this.defAttr;
    var ch = [attr, ' ', 1], line = [], i = 0;
    if (isWrapped) {
        line.isWrapped = isWrapped;
    }
    cols = cols || this.cols;
    for (; i < cols; i++) {
        line[i] = ch;
    }
    return line;
};
Terminal.prototype.ch = function (cur) {
    return cur
        ? [this.eraseAttr(), ' ', 1]
        : [this.defAttr, ' ', 1];
};
Terminal.prototype.is = function (term) {
    var name = this.termName;
    return (name + '').indexOf(term) === 0;
};
Terminal.prototype.handler = function (data) {
    if (this.options.disableStdin) {
        return;
    }
    if (this.selectionManager && this.selectionManager.hasSelection) {
        this.selectionManager.clearSelection();
    }
    if (this.buffer.ybase !== this.buffer.ydisp) {
        this.scrollToBottom();
    }
    this.emit('data', data);
};
Terminal.prototype.handleTitle = function (title) {
    this.emit('title', title);
};
Terminal.prototype.index = function () {
    this.buffer.y++;
    if (this.buffer.y > this.buffer.scrollBottom) {
        this.buffer.y--;
        this.scroll();
    }
    if (this.buffer.x >= this.cols) {
        this.buffer.x--;
    }
};
Terminal.prototype.reverseIndex = function () {
    var j;
    if (this.buffer.y === this.buffer.scrollTop) {
        this.buffer.lines.shiftElements(this.buffer.y + this.buffer.ybase, this.rows - 1, 1);
        this.buffer.lines.set(this.buffer.y + this.buffer.ybase, this.blankLine(true));
        this.updateRange(this.buffer.scrollTop);
        this.updateRange(this.buffer.scrollBottom);
    }
    else {
        this.buffer.y--;
    }
};
Terminal.prototype.reset = function () {
    this.options.rows = this.rows;
    this.options.cols = this.cols;
    var customKeyEventHandler = this.customKeyEventHandler;
    var cursorBlinkInterval = this.cursorBlinkInterval;
    var inputHandler = this.inputHandler;
    Terminal.call(this, this.options);
    this.customKeyEventHandler = customKeyEventHandler;
    this.cursorBlinkInterval = cursorBlinkInterval;
    this.inputHandler = inputHandler;
    this.refresh(0, this.rows - 1);
    this.viewport.syncScrollArea();
};
Terminal.prototype.tabSet = function () {
    this.buffer.tabs[this.buffer.x] = true;
};
function on(el, type, handler, capture) {
    if (!Array.isArray(el)) {
        el = [el];
    }
    el.forEach(function (element) {
        element.addEventListener(type, handler, capture || false);
    });
}
function off(el, type, handler, capture) {
    el.removeEventListener(type, handler, capture || false);
}
function cancel(ev, force) {
    if (!this.cancelEvents && !force) {
        return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    return false;
}
function inherits(child, parent) {
    function f() {
        this.constructor = child;
    }
    f.prototype = parent.prototype;
    child.prototype = new f;
}
function indexOf(obj, el) {
    var i = obj.length;
    while (i--) {
        if (obj[i] === el)
            return i;
    }
    return -1;
}
function isThirdLevelShift(term, ev) {
    var thirdLevelKey = (term.browser.isMac && ev.altKey && !ev.ctrlKey && !ev.metaKey) ||
        (term.browser.isMSWindows && ev.altKey && ev.ctrlKey && !ev.metaKey);
    if (ev.type == 'keypress') {
        return thirdLevelKey;
    }
    return thirdLevelKey && (!ev.keyCode || ev.keyCode > 47);
}
Terminal.prototype.matchColor = matchColor;
function matchColor(r1, g1, b1) {
    var hash = (r1 << 16) | (g1 << 8) | b1;
    if (matchColor._cache[hash] != null) {
        return matchColor._cache[hash];
    }
    var ldiff = Infinity, li = -1, i = 0, c, r2, g2, b2, diff;
    for (; i < Terminal.vcolors.length; i++) {
        c = Terminal.vcolors[i];
        r2 = c[0];
        g2 = c[1];
        b2 = c[2];
        diff = matchColor.distance(r1, g1, b1, r2, g2, b2);
        if (diff === 0) {
            li = i;
            break;
        }
        if (diff < ldiff) {
            ldiff = diff;
            li = i;
        }
    }
    return matchColor._cache[hash] = li;
}
matchColor._cache = {};
matchColor.distance = function (r1, g1, b1, r2, g2, b2) {
    return Math.pow(30 * (r1 - r2), 2)
        + Math.pow(59 * (g1 - g2), 2)
        + Math.pow(11 * (b1 - b2), 2);
};
function each(obj, iter, con) {
    if (obj.forEach)
        return obj.forEach(iter, con);
    for (var i = 0; i < obj.length; i++) {
        iter.call(con, obj[i], i, obj);
    }
}
function wasMondifierKeyOnlyEvent(ev) {
    return ev.keyCode === 16 ||
        ev.keyCode === 17 ||
        ev.keyCode === 18;
}
function keys(obj) {
    if (Object.keys)
        return Object.keys(obj);
    var key, keys = [];
    for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keys.push(key);
        }
    }
    return keys;
}
Terminal.translateBufferLineToString = BufferLine_1.translateBufferLineToString;
Terminal.EventEmitter = EventEmitter_1.EventEmitter;
Terminal.inherits = inherits;
Terminal.on = on;
Terminal.off = off;
Terminal.cancel = cancel;
module.exports = Terminal;



},{"./BufferSet":2,"./CompositionHelper":4,"./EscapeSequences":5,"./EventEmitter":6,"./InputHandler":7,"./Linkifier":8,"./Parser":9,"./Renderer":10,"./SelectionManager":11,"./Viewport":13,"./handlers/Clipboard":14,"./utils/Browser":15,"./utils/BufferLine":16,"./utils/CharMeasure":17,"./utils/Mouse":21}]},{},[22])(22)
});
//# sourceMappingURL=xterm.js.map

;
//# sourceMappingURL=scripts.bundle.js.map