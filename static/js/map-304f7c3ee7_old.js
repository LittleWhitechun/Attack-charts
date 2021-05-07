/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
var index_missile_dict = {}
var move_mis = {}
var last_hover = false;



$(document).ready(function () {
    $('#header_menu_button, #mobile_menu_close_button').on('click', function (event) {
        if ($('#mobile_menu').hasClass('closed')) {
            $('#mobile_menu').removeClass('closed');
            $('#splash').animate( { display: "block" }, 250);
            $('#mobile_menu').animate({left: '0px'}, 250);
            $("#header, #footer, #content").addClass("blured");
        }
        else {
            $('#mobile_menu').addClass('closed');
            $('#splash').animate( { display: "none" }, 250);
            $('#mobile_menu').animate({left: '-300px'}, 250);
            $("#header, #footer, #content").removeClass("blured");
        }
    });
});
// document ready event
$(document).ready(function () {
    // Show-hide footer for mobile version
    $('#footer_openclose_button').on('click', function (event) {
        if ($('#footer').hasClass('closed')) {
            $('#footer').removeClass('closed');
            $('#footer_openclose_button').removeClass('closed');
            $('#footer').animate({height: '160px'}, 250);
        }
        else {
            $('#footer').addClass('closed');
            $('#footer_openclose_button').addClass('closed');
            $('#footer').animate({height: '50px'}, 250);
        }
    });

});

$(window).resize(function() {
if (!$('#footer').hasClass('closed')) {
    $('#footer').addClass('closed');
    $('#footer_openclose_button').addClass('closed');
    $('#footer').animate({height: '50px'}, 250);
}});
document.addEventListener("DOMContentLoaded", function(event) {

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // var gdprAgreed = getCookie('cookie_accepted')

    // function setCookie(name, value, options) {
    //     options = options || {};

    //     var expires = options.expires;

    //     if (typeof expires == "number" && expires) {
    //         var d = new Date();
    //         d.setDate(d.getDate() + expires);
    //         expires = options.expires = d;
    //     }

    //     if (expires && expires.toUTCString) {
    //         options.expires = expires.toUTCString();
    //     }

    //     value = encodeURIComponent(value);

    //     var updatedCookie = name + "=" + value;

    //     for (var propName in options) {
    //         updatedCookie += "; " + propName;
    //         var propValue = options[propName];
    //         if (propValue !== true) {
    //             updatedCookie += "=" + propValue;
    //         }
    //     }

    //     document.cookie = updatedCookie;
    // }
    // if (navigator.cookieEnabled) {
    //     if (!gdprAgreed) {


    //         var gdprPopup = '<div class="gdprPopup"><div class="gdprPopupContainer"><div class="gdprMessage">'+window.lang.getText("GDPR_TEXT")+'</div><p class="gdprButton">'+window.lang.getText("GDPR_OK_BUTTON")+'</div></div></div>'

    //         document.querySelector('body').insertAdjacentHTML('beforeEnd', gdprPopup)



    //         document.querySelector('.gdprButton').onclick = function(){
    //             event.preventDefault();
    //             setCookie('cookie_accepted', true, {'expires':30});
    //             document.querySelector('.gdprPopup').remove();
    //         }

    //         document.querySelector('*').setAttribute('style', 'box-sizing : border-box;');

    //         document.querySelector('.gdprPopup').setAttribute('style', 'border : 1px solid black; background : rgba(0,0,0,.8); color : white; font-family : MuseoSans,Arial,Helvetica,sans-serif; font-size : 16px; position : fixed; left : 0; bottom : 0; width : 100%; z-index : 500; font-size : .8em; padding-bottom : .5em; padding-top : 1em;');

    //         document.querySelector('.gdprPopupContainer').setAttribute('style', 'width : 90%; max-width : 1030px; margin-left : auto; margin-right : auto;');

    //         document.querySelector('.gdprPopupContainer a').setAttribute('style', 'color : white;');

    //         document.querySelector('.gdprMessage').setAttribute('style', 'width : 80%; float : left; margin-bottom : .5em; padding-bottom : .5em;');

    //         document.querySelector('.gdprButton').setAttribute('style', 'cursor:pointer;position : relative; float : right; margin-right : -15px; width : auto; text-decoration : none; background-color : #006D5C; text-decoration : none; padding : 1.083em 1.5em; min-width : 12em; color : #FFF; font-size : .75em; border-radius : 1px; text-transform : uppercase; right : 0; top : 4px; margin-bottom : 10px;   text-align:center;transition : all .15s ease-in;box-sizing: border-box;');

    //         document.querySelector('.gdprButton').onmouseover = function(){
    //             this.style.background = '#005446'
    //         };

    //         document.querySelector('.gdprButton').onmouseout = function(){
    //             this.style.background = '#006D5C'
    //         };

    //         window.onresize = function() {
    //             var w = window.innerWidth;
    //             if(w < 655) {

    //                 document.querySelector('.gdprMessage').style.width = '100%';
    //                 document.querySelector('.gdprButton').style.marginRight = '0';
    //                 document.querySelector('.gdprButton').style.width = '100%';

    //             }

    //             else {

    //                 document.querySelector('.gdprMessage').style.width = '80%';
    //                 document.querySelector('.gdprMessage').style.cssFloat = 'left';
    //                 document.querySelector('.gdprButton').style.marginRight ='-15px';
    //                 document.querySelector('.gdprButton').style.width = 'auto';

    //             }
    //         }
    //     };
    // }
})
window.disabledCountries = [131];

        window.lang = {
            _db: {
                "404_DESCRIPTION": "Page you are looking for could not be found",
                "404_TITLE": "Page not found",
                "ALL_RIGHTS_RESERVED": "All Rights Reserved.",
                "AM_I_INFECTED_LINK": "https:\/\/kas.pr\/cybermap_ww_win_kis_smmbuild.exe",
                "AM_I_INFECTED": "Am I Infected?",
                "BUZZ_CTA_THREATPOST": "Read this on the Threadpost blog",
                "CONTINENT_AFRIKA": "Africa",
                "CONTINENT_ASIA": "Asia",
                "CONTINENT_EUROPE": "Europe",
                "CONTINENT_NORTH_AMERICA": "North America",
                "CONTINENT_OCEANIA": "Oceania",
                "CONTINENT_SOUTH_AMERICA": "South America",
                "CONTINENT_WORLD": "WORLD",
                "CONTROL_DISABLE_DEMO_MODE": "Disable demo mode",
                "CONTROL_ENABLE_DEMO_MODE": "Enable demo mode",
                "CONTROL_GLOBE_VIEW": "Switch to Globe view",
                "CONTROL_PLANE_VIEW": "Switch to Plane view",
                "CONTROL_TOGGLE_COLOR": "Toggle map Color",
                "CONTROL_ZOOM_IN": "Zoom in",
                "CONTROL_ZOOM_OUT": "Zoom out",
                "COPYRIGHT": "2018 AO Kaspersky Lab.",
                "DATA_FROM_KASPERSKY_LAB": "Based on data from Kaspersky.",
                "META_DESCRIPTION": null,
                "META_KEYWORDS": null,
                "TITLE": "Kaspersky Cyberthreat real-time map",
                "DETECTIONS_DISCOVERED": "Detections discovered since 00:00 GMT",
                "DOWNLOAD_TRIAL": "Protect Yourself",
                "DOWNLOAD_TRIAL_LINK_ANDROID": "https:\/\/go.onelink.me\/fwk7?pid=smm&c=gl_cybermap_btn&af_web_dp=https%3A%2F%2Fwww.kaspersky.com%2Fadvert%2Ffree-cloud-antivirus%3Fredef%3D1%26THRU%26reseller%3Dgl_cybermap_acq_ona_smm__onl_b2c_cybm_buttn____vpn___",
                "DOWNLOAD_TRIAL_LINK_MAC": "https:\/\/go.onelink.me\/fwk7?pid=smm&c=gl_cybermap_btn&af_web_dp=https%3A%2F%2Fwww.kaspersky.com%2Fadvert%2Ffree-cloud-antivirus%3Fredef%3D1%26THRU%26reseller%3Dgl_cybermap_acq_ona_smm__onl_b2c_cybm_buttn____vpn___",
                "DOWNLOAD_TRIAL_LINK_WIN": "https:\/\/go.onelink.me\/fwk7?pid=smm&c=gl_cybermap_btn&af_web_dp=https%3A%2F%2Fwww.kaspersky.com%2Fadvert%2Ffree-cloud-antivirus%3Fredef%3D1%26THRU%26reseller%3Dgl_cybermap_acq_ona_smm__onl_b2c_cybm_buttn____vpn___",
                "FOOTER_DOWNLOAD_SCREENSAVER": null,
                // "GDPR_OK_BUTTON": "ACCEPT AND CLOSE",
                // "GDPR_TEXT": "We use cookies to make your experience of our websites better. By using and further navigating this website you accept this. Detailed information about the use of cookies on this website is available by clicking on <a href=\"https:\/\/www.kaspersky.com\/web-privacy-policy\" target=\"_blank\">more information<\/a>.",
                "HEADER_TITLE": "<b>CYBERTHREAT<\/b> REAL-TIME MAP",
                "KASPERSKY_WEBSITE": "\/\/www.kaspersky.com\/",
                "LANG_NAME": "English",
                "LINK_FB": "\/\/www.facebook.com\/Kaspersky",
                "LINK_GOOGLE_PLUS": "\/\/plus.google.com\/+KasperskyLab",
                "LINK_LINKEDIN": "\/\/www.linkedin.com\/company\/kaspersky-lab",
                "LINK_TWITTER": "\/\/twitter.com\/kaspersky",
                "LINK_VK": "",
                "MAP_CITY_BER": "Berlin",
                "MAP_CITY_CAI": "Cairo",
                "MAP_CITY_DUB": "Dubai",
                "MAP_CITY_IST": "\u0130stanbul",
                "MAP_CITY_JOH": "Johannesburg",
                "MAP_CITY_LAX": "Tokyo",
                "MAP_CITY_LON": "London",
                "MAP_CITY_MAD": "Madrid",
                "MAP_CITY_MIA": "Miami",
                "MAP_CITY_MOS": "Moscow",
                "MAP_CITY_MUM": "Mumbai",
                "MAP_CITY_NAI": "Nairobi",
                "MAP_CITY_NYC": "New York City",
                "MAP_CITY_RIO": "Rio de Janeiro",
                "MAP_CITY_ROM": "Rome",
                "MAP_CITY_STP": "Saint Petersburg",
                "MAP_CITY_SYD": "Sydney",
                "MAP_COUNTRY_ABW": "Aruba",
                "MAP_COUNTRY_AFG": "Afghanistan",
                "MAP_COUNTRY_AGO": "Angola",
                "MAP_COUNTRY_AIA": "Anguilla",
                "MAP_COUNTRY_ALA": "Aland Islands",
                "MAP_COUNTRY_ALB": "Albania",
                "MAP_COUNTRY_ALL": "All countries",
                "MAP_COUNTRY_AND": "Andorra",
                "MAP_COUNTRY_ANT": "Netherlands Antilles",
                "MAP_COUNTRY_ARE": "United Arab Emirates",
                "MAP_COUNTRY_ARG": "Argentina",
                "MAP_COUNTRY_ARM": "Armenia",
                "MAP_COUNTRY_ASM": "American Samoa",
                "MAP_COUNTRY_ATA": "Antarctica",
                "MAP_COUNTRY_ATF": "French Southern Territories",
                "MAP_COUNTRY_ATG": "Antigua And Barbuda",
                "MAP_COUNTRY_AUS": "Australia",
                "MAP_COUNTRY_AUT": "Austria",
                "MAP_COUNTRY_AZE": "Azerbaijan",
                "MAP_COUNTRY_BDI": "Burundi",
                "MAP_COUNTRY_BEL": "Belgium",
                "MAP_COUNTRY_BEN": "Benin",
                "MAP_COUNTRY_BES": "Bonaire, Sint Eustatius And Saba",
                "MAP_COUNTRY_BFA": "Burkina Faso",
                "MAP_COUNTRY_BGD": "Bangladesh",
                "MAP_COUNTRY_BGR": "Bulgaria",
                "MAP_COUNTRY_BHR": "Bahrain",
                "MAP_COUNTRY_BHS": "Bahamas",
                "MAP_COUNTRY_BIH": "Bosnia and Herzegovina",
                "MAP_COUNTRY_BLM": "Saint Barthelemy",
                "MAP_COUNTRY_BLR": "Belarus",
                "MAP_COUNTRY_BLZ": "Belize",
                "MAP_COUNTRY_BMU": "Bermuda",
                "MAP_COUNTRY_BOL": "Bolivia",
                "MAP_COUNTRY_BRA": "Brazil",
                "MAP_COUNTRY_BRB": "Barbados",
                "MAP_COUNTRY_BRN": "Brunei Darussalam",
                "MAP_COUNTRY_BTN": "Bhutan",
                "MAP_COUNTRY_BVT": "Bouvet Island",
                "MAP_COUNTRY_BWA": "Botswana",
                "MAP_COUNTRY_CAF": "Central African Republic",
                "MAP_COUNTRY_CAN": "Canada",
                "MAP_COUNTRY_CCK": "Cocos (Keeling) Islands",
                "MAP_COUNTRY_CHE": "Switzerland",
                "MAP_COUNTRY_CHL": "Chile",
                "MAP_COUNTRY_CHN": "China",
                "MAP_COUNTRY_CIV": "C\u00f4te d'Ivoire",
                "MAP_COUNTRY_CMR": "Cameroon",
                "MAP_COUNTRY_COD": "Congo Democratic Republic",
                "MAP_COUNTRY_COG": "Congo Republic",
                "MAP_COUNTRY_COK": "Cook Islands",
                "MAP_COUNTRY_COL": "Colombia",
                "MAP_COUNTRY_COM": "Comoros",
                "MAP_COUNTRY_CPV": "Cabo Verde",
                "MAP_COUNTRY_CRI": "Costa Rica",
                "MAP_COUNTRY_CUB": "Cuba",
                "MAP_COUNTRY_CUW": "Cura\u0437ao",
                "MAP_COUNTRY_CXR": "Christmas Island",
                "MAP_COUNTRY_CYM": "Cayman Islands",
                "MAP_COUNTRY_CYP": "Cyprus",
                "MAP_COUNTRY_CZE": "Czech Republic",
                "MAP_COUNTRY_DEU": "Germany",
                "MAP_COUNTRY_DJI": "Djibouti",
                "MAP_COUNTRY_DMA": "Dominica",
                "MAP_COUNTRY_DNK": "Denmark",
                "MAP_COUNTRY_DOM": "Dominican Republic",
                "MAP_COUNTRY_DZA": "Algeria",
                "MAP_COUNTRY_ECU": "Ecuador",
                "MAP_COUNTRY_EGY": "Egypt",
                "MAP_COUNTRY_ERI": "Eritrea",
                "MAP_COUNTRY_ESH": "Western Sahara",
                "MAP_COUNTRY_ESP": "Spain",
                "MAP_COUNTRY_EST": "Estonia",
                "MAP_COUNTRY_ETH": "Ethiopia",
                "MAP_COUNTRY_FIN": "Finland",
                "MAP_COUNTRY_FJI": "Fiji",
                "MAP_COUNTRY_FLK": "Falkland Islands (Malvinas)",
                "MAP_COUNTRY_FRA": "France",
                "MAP_COUNTRY_FRO": "Faroe Islands",
                "MAP_COUNTRY_FSM": "Micronesia, Federated States Of",
                "MAP_COUNTRY_GAB": "Gabon",
                "MAP_COUNTRY_GBR": "United Kingdom",
                "MAP_COUNTRY_GEO": "Georgia",
                "MAP_COUNTRY_GGY": "Guernsey",
                "MAP_COUNTRY_GHA": "Ghana",
                "MAP_COUNTRY_GIB": "Gibraltar",
                "MAP_COUNTRY_GIN": "Guinea",
                "MAP_COUNTRY_GLP": "Guadeloupe",
                "MAP_COUNTRY_GMB": "Gambia",
                "MAP_COUNTRY_GNB": "Guinea-Bissau",
                "MAP_COUNTRY_GNQ": "Equatorial Guinea",
                "MAP_COUNTRY_GRC": "Greece",
                "MAP_COUNTRY_GRD": "Grenada",
                "MAP_COUNTRY_GRL": "Greenland",
                "MAP_COUNTRY_GTM": "Guatemala",
                "MAP_COUNTRY_GUF": "French Guiana",
                "MAP_COUNTRY_GUM": "Guam",
                "MAP_COUNTRY_GUY": "Guyana",
                "MAP_COUNTRY_HKG": "Hong Kong",
                "MAP_COUNTRY_HMD": "Heard Island And Mcdonald Islands",
                "MAP_COUNTRY_HND": "Honduras",
                "MAP_COUNTRY_HRV": "Croatia",
                "MAP_COUNTRY_HTI": "Haiti",
                "MAP_COUNTRY_HUN": "Hungary",
                "MAP_COUNTRY_IDN": "Indonesia",
                "MAP_COUNTRY_IMN": "Isle Of Man",
                "MAP_COUNTRY_IND": "India",
                "MAP_COUNTRY_IOT": "British Indian Ocean Territory",
                "MAP_COUNTRY_IRL": "Ireland",
                "MAP_COUNTRY_IRN": "Iran",
                "MAP_COUNTRY_IRQ": "Iraq",
                "MAP_COUNTRY_ISL": "Iceland",
                "MAP_COUNTRY_ISR": "Israel",
                "MAP_COUNTRY_ITA": "Italy",
                "MAP_COUNTRY_JAM": "Jamaica",
                "MAP_COUNTRY_JEY": "Jersey",
                "MAP_COUNTRY_JOR": "Jordan",
                "MAP_COUNTRY_JPN": "Japan",
                "MAP_COUNTRY_KAZ": "Kazakhstan",
                "MAP_COUNTRY_KEN": "Kenya",
                "MAP_COUNTRY_KGZ": "Kyrgyzstan",
                "MAP_COUNTRY_KHM": "Cambodia",
                "MAP_COUNTRY_KIR": "Kiribati",
                "MAP_COUNTRY_KNA": "Saint Kitts And Nevis",
                "MAP_COUNTRY_KOR": "South Korea",
                "MAP_COUNTRY_KWT": "Kuwait",
                "MAP_COUNTRY_LAO": "Laos",
                "MAP_COUNTRY_LBN": "Lebanon",
                "MAP_COUNTRY_LBR": "Liberia",
                "MAP_COUNTRY_LBY": "Libya",
                "MAP_COUNTRY_LCA": "Saint Lucia",
                "MAP_COUNTRY_LIE": "Liechtenstein",
                "MAP_COUNTRY_LKA": "Sri Lanka",
                "MAP_COUNTRY_LSO": "Lesotho",
                "MAP_COUNTRY_LTU": "Lithuania",
                "MAP_COUNTRY_LUX": "Luxembourg",
                "MAP_COUNTRY_LVA": "Latvia",
                "MAP_COUNTRY_MAC": "Macao",
                "MAP_COUNTRY_MAF": "Saint Martin",
                "MAP_COUNTRY_MAR": "Morocco",
                "MAP_COUNTRY_MCO": "Monaco",
                "MAP_COUNTRY_MDA": "Moldova",
                "MAP_COUNTRY_MDG": "Madagascar",
                "MAP_COUNTRY_MDV": "Maldives",
                "MAP_COUNTRY_MEX": "Mexico",
                "MAP_COUNTRY_MHL": "Marshall Islands",
                "MAP_COUNTRY_MKD": "Macedonia",
                "MAP_COUNTRY_MLI": "Mali",
                "MAP_COUNTRY_MLT": "Malta",
                "MAP_COUNTRY_MMR": "Myanmar",
                "MAP_COUNTRY_MNE": "Montenegro",
                "MAP_COUNTRY_MNG": "Mongolia",
                "MAP_COUNTRY_MNP": "Northern Mariana Islands",
                "MAP_COUNTRY_MOZ": "Mozambique",
                "MAP_COUNTRY_MRT": "Mauritania",
                "MAP_COUNTRY_MSR": "Montserrat",
                "MAP_COUNTRY_MTQ": "Martinique",
                "MAP_COUNTRY_MUS": "Mauritius",
                "MAP_COUNTRY_MWI": "Malawi",
                "MAP_COUNTRY_MYS": "Malaysia",
                "MAP_COUNTRY_MYT": "Mayotte",
                "MAP_COUNTRY_NAM": "Namibia",
                "MAP_COUNTRY_NCL": "New Caledonia",
                "MAP_COUNTRY_NER": "Niger",
                "MAP_COUNTRY_NFK": "Norfolk Island",
                "MAP_COUNTRY_NGA": "Nigeria",
                "MAP_COUNTRY_NIC": "Nicaragua",
                "MAP_COUNTRY_NIU": "Niue",
                "MAP_COUNTRY_NLD": "Netherlands",
                "MAP_COUNTRY_NOR": "Norway",
                "MAP_COUNTRY_NPL": "Nepal",
                "MAP_COUNTRY_NRU": "Nauru",
                "MAP_COUNTRY_NZL": "New Zealand",
                "MAP_COUNTRY_OMN": "Oman",
                "MAP_COUNTRY_PAK": "Pakistan",
                "MAP_COUNTRY_PAN": "Panama",
                "MAP_COUNTRY_PCN": "Pitcairn",
                "MAP_COUNTRY_PER": "Peru",
                "MAP_COUNTRY_PHL": "Philippines",
                "MAP_COUNTRY_PLW": "Palau",
                "MAP_COUNTRY_PNG": "Papua New Guinea",
                "MAP_COUNTRY_POL": "Poland",
                "MAP_COUNTRY_PRI": "Puerto Rico",
                "MAP_COUNTRY_PRK": "North Korea",
                "MAP_COUNTRY_PRT": "Portugal",
                "MAP_COUNTRY_PRY": "Paraguay",
                "MAP_COUNTRY_PSE": "Palestinian Territory, Occupied",
                "MAP_COUNTRY_PYF": "French Polynesia",
                "MAP_COUNTRY_QAT": "Qatar",
                "MAP_COUNTRY_REU": "Reunion",
                "MAP_COUNTRY_ROU": "Romania",
                "MAP_COUNTRY_RUS": "Russia",
                "MAP_COUNTRY_RWA": "Rwanda",
                "MAP_COUNTRY_SAU": "Saudi Arabia",
                "MAP_COUNTRY_SDN": "Sudan",
                "MAP_COUNTRY_SEN": "Senegal",
                "MAP_COUNTRY_SGP": "Singapore",
                "MAP_COUNTRY_SGS": "South Georgia And The South Sandwich Islands",
                "MAP_COUNTRY_SHN": "Saint Helena, Ascension And Tristan Da Cunha",
                "MAP_COUNTRY_SJM": "Svalbard",
                "MAP_COUNTRY_SLB": "Solomon Islands",
                "MAP_COUNTRY_SLE": "Sierra Leone",
                "MAP_COUNTRY_SLV": "El Salvador",
                "MAP_COUNTRY_SMR": "San Marino",
                "MAP_COUNTRY_SOM": "Somalia",
                "MAP_COUNTRY_SPM": "Saint Pierre And Miquelon",
                "MAP_COUNTRY_SRB": "Serbia",
                "MAP_COUNTRY_SSD": "South Sudan",
                "MAP_COUNTRY_STP": "Sao Tome And Principe",
                "MAP_COUNTRY_SUR": "Suriname",
                "MAP_COUNTRY_SVK": "Slovakia",
                "MAP_COUNTRY_SVN": "Slovenia",
                "MAP_COUNTRY_SWE": "Sweden",
                "MAP_COUNTRY_SWZ": "Swaziland",
                "MAP_COUNTRY_SXM": "Sint Maarten",
                "MAP_COUNTRY_SYC": "Seychelles",
                "MAP_COUNTRY_SYR": "Syria",
                "MAP_COUNTRY_TCA": "Turks And Caicos Islands",
                "MAP_COUNTRY_TCD": "Chad",
                "MAP_COUNTRY_TGO": "Togo",
                "MAP_COUNTRY_THA": "Thailand",
                "MAP_COUNTRY_TJK": "Tajikistan",
                "MAP_COUNTRY_TKL": "Tokelau",
                "MAP_COUNTRY_TKM": "Turkmenistan",
                "MAP_COUNTRY_TLS": "Timor-Leste",
                "MAP_COUNTRY_TON": "Tonga",
                "MAP_COUNTRY_TTO": "Trinidad And Tobago",
                "MAP_COUNTRY_TUN": "Tunisia",
                "MAP_COUNTRY_TUR": "Turkey",
                "MAP_COUNTRY_TUV": "Tuvalu",
                "MAP_COUNTRY_TWN": "China (Taiwan)",
                "MAP_COUNTRY_TZA": "Tanzania",
                "MAP_COUNTRY_UGA": "Uganda",
                "MAP_COUNTRY_UKR": "Ukraine",
                "MAP_COUNTRY_UMI": "United States Minor Outlying Islands",
                "MAP_COUNTRY_URY": "Uruguay",
                "MAP_COUNTRY_USA": "United States",
                "MAP_COUNTRY_UZB": "Uzbekistan",
                "MAP_COUNTRY_VAT": "Holy See (Vatican City State)",
                "MAP_COUNTRY_VCT": "Saint Vincent And The Grenadines",
                "MAP_COUNTRY_VEN": "Venezuela",
                "MAP_COUNTRY_VGB": "Virgin Islands, British",
                "MAP_COUNTRY_VIR": "Virgin Islands, U.S.",
                "MAP_COUNTRY_VNM": "Vietnam",
                "MAP_COUNTRY_VUT": "Vanuatu",
                "MAP_COUNTRY_WLF": "Wallis And Futuna",
                "MAP_COUNTRY_WSM": "Samoa",
                "MAP_COUNTRY_XKX": "Kosovo",
                "MAP_COUNTRY_YEM": "Yemen",
                "MAP_COUNTRY_ZAF": "South Africa",
                "MAP_COUNTRY_ZMB": "Zambia",
                "MAP_COUNTRY_ZWE": "Zimbabwe",
                "MENU_BUZZ": "BUZZ",
                "MENU_DATA_SOURCES": "DATA SOURCES",
                "MENU_MAP": "MAP",
                "MENU_SHARE_LABEL": "Share",
                "MENU_STATISTICS": "STATISTICS",
                "MENU_WIDGET": "WIDGET",
                "META_COPYRIGHT": "AO Kaspersky Lab. All Rights Reserved.",
                "META_DESCRIPTION_BUZZ": "BUZZ | Find out if you are under cyber-attack here",
                "META_DESCRIPTION_MAP": "MAP | Find out if you are under cyber-attack here",
                "META_DESCRIPTION_STATS": "STATISTICS | Find out if you are under cyber-attack here",
                "META_DESCRIPTION_SUBSYSTEMS": "DATA SOURCES | Find out if you are under cyber-attack here",
                "META_DESCRIPTION_TOS": "Terms of Service | Find out if you are under cyber-attack here",
                "META_DESCRIPTION_WIDGET": "WIDGET | Find out if you are under cyber-attack here",
                "META_KEYWORDS_BUZZ": "BUZZ, cybermap, cyberwar, cyberattack, attack",
                "META_KEYWORDS_MAP": "MAP, cybermap, cyberwar, cyberattack, attack",
                "META_KEYWORDS_STATS": "STATISTICS, cybermap, cyberwar, cyberattack, attack",
                "META_KEYWORDS_SUBSYSTEMS": "DATA SOURCES, cybermap, cyberwar, cyberattack, attack",
                "META_KEYWORDS_TOS": "Terms of Service, cybermap, cyberwar, cyberattack, attack",
                "META_KEYWORDS_WIDGET": "WIDGET, cybermap, cyberwar, cyberattack, attack",
                "MORE_DETAILS": "More details",
                "MOST_ATTACKED_COUNTRY": "MOST-ATTACKED COUNTRY",
                "NUMBER_SYMBOL": "#",
                "PRIVACY_POLICY": "Privacy policy",
                "PRIVACY_POLICY_URL": "https:\/\/www.kaspersky.com\/web-privacy-policy",
                "SCREENSAVER_CPU": null,
                "SCREENSAVER_DOWNLOAD_MAC": null,
                "SCREENSAVER_DOWNLOAD_TITLE": null,
                "SCREENSAVER_DOWNLOAD_WIN_X64": null,
                "SCREENSAVER_DOWNLOAD_WIN_X86": null,
                "SCREENSAVER_GPU": null,
                "SCREENSAVER_REQUIREMENTS": null,
                "SHARE_DATA": "Share data",
                "SOCIAL_HASH_TAGS": "#CyberSecurityMap #CyberSecurity #CyberWar",
                "SOCIAL_LINK": "https:\/\/cybermap.kaspersky.com\/",
                "SOCIAL_TEXT": "Find out if you\u2019re under cyber-attack here",
                "STATISTICS_BOTNET_ACTIVITY": "Botnet activity",
                "STATISTICS_DETECTIONS_PER_SECOND": "DETECTIONS PER SECOND",
                "STATISTICS_HISTORY": "HISTORICAL STATISTICS",
                "STATISTICS_IN_THE_LAST": "IN THE LAST",
                "STATISTICS_INFECTED_MAIL": "Infected Mail",
                "STATISTICS_LAST_MONTH": "Last month",
                "STATISTICS_LAST_WEEK": "Last week",
                "STATISTICS_LOCAL_INFECTIONS": "Local infections",
                "STATISTICS_MONTH": "MONTH",
                "STATISTICS_MOST_INFECTED_TODAY": "MOST INFECTED TODAY",
                "STATISTICS_NETWORK_ATTACKS": "Network attacks",
                "STATISTICS_NO_DATA": "NO DATA",
                "STATISTICS_ON_DEMAND_SCAN": "On-Demand Scan",
                "STATISTICS_PER_COUNTRY": "PER COUNTRY",
                "STATISTICS_REAL_TIME": "REAL-TIME",
                "STATISTICS_SEE_HISTORICAL_DATA": "See historical data",
                "STATISTICS_SPAM": "Spam",
                "STATISTICS_TIME_PERIOD": "TIME PERIOD",
                "STATISTICS_TOP": "Top",
                "STATISTICS_TOTALS_RESET": "Detection totals reset every day at 0:00:00 GMT.",
                "STATISTICS_VULNERABILITIES": "Vulnerabilities",
                "STATISTICS_WEB_THREATS": "Web threats",
                "STATISTICS_WEEK": "WEEK",
                "STATISTICS_WORLDWIDE": "WORLDWIDE",
                "SUBSYSTEMS_ESSENTIAL_PROTECTION": "ESSENTIAL PROTECTION FOR YOUR PC AGAINST MALWARE",
                "SUBSYSTEMS_ESSENTIAL_PROTECTION_LINK": "https:\/\/www.kaspersky.com\/downloads\/thank-you\/total-security-free-trial?redef=1&reseller=gl_cybermap_trd_ona_smm__onl_b2c_cybm_lnk____ktsmd___",
                "SUBTITLE": "Cyberthreat Real-Time Map",
                "TERMS_AND_CONDITIONS_BODY": "Your use of the web site indicates that you agree to be bound by these terms and conditions. AO Kaspersky Lab (further Kaspersky Lab) reserves the right to change these terms of use or modify any features of the web site at any time at its sole discretion, without notice. If you continue to use the web site after any changes, you will be deemed to have accepted the changes. If you do not agree to all of the terms of use, do not use the web site.<br\/>Kaspersky Lab is the owner of all rights, whether exclusive or otherwise to the web site. Kaspersky Lab has all necessary rights, including the intellectually property rights, as well as licenses to posted material and information, including, but not limited to, text, photographs, graphics, video, audio content, and computer code (the content) on the web site.<br\/>Kaspersky Lab hereby grants you the right to view and use the web site and content solely for informational, personal, or non-commercial purposes.<br\/>You may download, save on your computer or share the content from the web site purposely made available by the Kaspersky Lab for such purposes, provided that you (1) do not remove any proprietary notices, (2) use downloadable content only for your personal, non-commercial purpose and do not redistribute it, (3) make no modifications to any such content and do not misrepresent or demean the content.<br\/>Any distribution, publishing, or reproduction of content from this web site not expressly provided in these terms of use is strictly forbidden, except to the extent that the foregoing restrictions are expressly prohibited by applicable law.<br\/><br\/>THE CONTENT ON THIS WEB SITE IS PROVIDED \u2019AS IS\u2019 WITHOUT WARRANTY OR CONDITIONS OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.<br\/>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE RIGHTHOLDER BE LIABLE FOR ANY SPECIAL, INCIDENTAL, PUNITIVE, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER ARISING OUT OF OR IN ANY WAY RELATED TO THE USE OF THE CONTENT ON THE WEB SITE.<br\/><br\/>\u00a9 2018 AO Kaspersky Lab. All Rights Reserved. The Software and any accompanying documentation are copyrighted and protected by copyright laws and international copyright treaties, as well as other intellectual property laws and treaties.<br\/><br\/>",
                "TERMS_AND_CONDITIONS_INTRO": "IMPORTANT LEGAL NOTICE TO ALL USERS: CAREFULLY READ THE FOLLOWING TERMS OF USE BEFORE YOU START USING THE WEB SITE.",
                "TERMS_AND_CONDITIONS_LAST_UPDATE": "The last modification was on 18.08.2015",
                "TERMS_AND_CONDITIONS_TITLE": "Terms of use for the web site.",
                "TERMS_OF_SERVICE": "Terms of Service",
                "THREATS_URL": "https:\/\/threats.kaspersky.com\/en\/threat\/",
                "TITLE_BUZZ": "BUZZ | Kaspersky Cyberthreat real-time map",
                "TITLE_MAP": "MAP | Kaspersky Cyberthreat real-time map",
                "TITLE_STATS": "STATISTICS | Kaspersky Cyberthreat real-time map",
                "TITLE_SUBSYSTEMS": "DATA SOURCES | Kaspersky Cyberthreat real-time map",
                "TITLE_TOS": "Terms of Service | Kaspersky Cyberthreat real-time map",
                "TITLE_WIDGET": "WIDGET | Kaspersky Cyberthreat real-time map",
                "WIDGET_COLOR_THEME": "Color Theme",
                "WIDGET_DARK_THEME": "Dark",
                "WIDGET_DESCRIPTION": "Add the Cybermap to your site by configuring the parameters below and adding the resulting HTML code.",
                "WIDGET_EMAIL_TOPIC": "Cybermap widget installation",
                "WIDGET_HEIGHT": "Height",
                "WIDGET_LANGUAGE": "Language",
                "WIDGET_LIGHT_THEME": "Light",
                "WIDGET_MAIL_THIS_CODE": "MAIL THIS CODE",
                "WIDGET_TAG_RENDER_DESCRIPTION": "Insert this tag where you want the widget to render",
                "WIDGET_TITLE": "CYBERMAP WIDGET",
                "WIDGET_TYPE": "Type",
                "WIDGET_TYPE_DYNAMIC": "Dynamic",
                "WIDGET_TYPE_STATIC": "Static",
                "WIDGET_WIDTH": "Width"
            },

            // languages: (function () {
            //     var o = ["de", "en", "es", "fr", "it", "ja", "pt", "ru", "tr", "cn"];
            //     return o.map(function (e) {
            //         return e[0]
            //     }).sort();
            // }()),

            lang: function () {
                return 'en';
            },

            getText: function (id) {
                return this._db[id];
            }
        }
        var platformDetection = {
          isDesktop: true,
          isTablet: false,
          isMobile: false,
          isIOS: false,
          isAndroid: false
      };
      window.geoIP = {};
      window.geoIP.country = "CN";
      // window.geoIP.coord = [39.9289, 116.3883];
      // window.geoIP.coord = [22.7255313300, 108.3581561800]
      window.geoIP.test_points = [
          [39.9289, 116.3883],
          [24.8864305400, 102.9089205100],
          [34.3978581100, 108.7976077300]
      ]

      window.geoIP.coord = [
        [39.9289, 116.3883],
        // [24.8864305400, 102.9089205100],
        // [34.3978581100, 108.7976077300],
        // [22.687053188898144,78.61856040000002],
      ]
      for(let i = 0;i < 10;i++){
        window.geoIP.coord.push([Math.floor(Math.random() * (40 - 25)) + 25,Math.floor(Math.random() * (120 - 90)) + 90])
      }
      window.geoIP.coord2 = [
        [61.58821111848236, 96.43939559999997],
        [47.73513717142143,65.9047176]
      ]
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern -o ./dist/lodash.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /** Used to pool arrays and objects used internally */
  var arrayPool = [],
      objectPool = [];

  /** Used to generate unique IDs */
  var idCounter = 0;

  /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
  var keyPrefix = +new Date + '';

  /** Used as the size when optimizations are enabled for large arrays */
  var largeArraySize = 75;

  /** Used as the max size of the `arrayPool` and `objectPool` */
  var maxPoolSize = 40;

  /** Used to detect and test whitespace */
  var whitespace = (
    // whitespace
    ' \t\x0B\f\xA0\ufeff' +

    // line terminators
    '\n\r\u2028\u2029' +

    // unicode category "Zs" space separators
    '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
  );

  /** Used to match empty string literals in compiled template source */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /**
   * Used to match ES6 template delimiters
   * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match regexp flags from their coerced string values */
  var reFlags = /\w*$/;

  /** Used to detected named functions */
  var reFuncName = /^\s*function[ \n\r\t]+\w/;

  /** Used to match "interpolate" template delimiters */
  var reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match leading whitespace and zeros to be removed */
  var reLeadingSpacesAndZeros = RegExp('^[' + whitespace + ']*0+(?=.$)');

  /** Used to ensure capturing order of template delimiters */
  var reNoMatch = /($^)/;

  /** Used to detect functions containing a `this` reference */
  var reThis = /\bthis\b/;

  /** Used to match unescaped characters in compiled string literals */
  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

  /** Used to assign default `context` object properties */
  var contextProps = [
    'Array', 'Boolean', 'Date', 'Function', 'Math', 'Number', 'Object',
    'RegExp', 'String', '_', 'attachEvent', 'clearTimeout', 'isFinite', 'isNaN',
    'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify */
  var templateCounter = 0;

  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';

  /** Used to identify object classifications that `_.clone` supports */
  var cloneableClasses = {};
  cloneableClasses[funcClass] = false;
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
  cloneableClasses[boolClass] = cloneableClasses[dateClass] =
  cloneableClasses[numberClass] = cloneableClasses[objectClass] =
  cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

  /** Used as an internal `_.debounce` options object */
  var debounceOptions = {
    'leading': false,
    'maxWait': 0,
    'trailing': false
  };

  /** Used as the property descriptor for `__bindData__` */
  var descriptor = {
    'configurable': false,
    'enumerable': false,
    'value': null,
    'writable': false
  };

  /** Used to determine if values are of the language type Object */
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };

  /** Used to escape characters for inclusion in compiled string literals */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Used as a reference to the global object */
  var root = (objectTypes[typeof window] && window) || this;

  /** Detect free variable `exports` */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module` */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports` */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    root = freeGlobal;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `_.indexOf` without support for binary searches
   * or `fromIndex` constraints.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the matched value or `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    var index = (fromIndex || 0) - 1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * An implementation of `_.contains` for cache objects that mimics the return
   * signature of `_.indexOf` by returning `0` if the value is found, else `-1`.
   *
   * @private
   * @param {Object} cache The cache object to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns `0` if `value` is found, else `-1`.
   */
  function cacheIndexOf(cache, value) {
    var type = typeof value;
    cache = cache.cache;

    if (type == 'boolean' || value == null) {
      return cache[value] ? 0 : -1;
    }
    if (type != 'number' && type != 'string') {
      type = 'object';
    }
    var key = type == 'number' ? value : keyPrefix + value;
    cache = (cache = cache[type]) && cache[key];

    return type == 'object'
      ? (cache && baseIndexOf(cache, value) > -1 ? 0 : -1)
      : (cache ? 0 : -1);
  }

  /**
   * Adds a given value to the corresponding cache object.
   *
   * @private
   * @param {*} value The value to add to the cache.
   */
  function cachePush(value) {
    var cache = this.cache,
        type = typeof value;

    if (type == 'boolean' || value == null) {
      cache[value] = true;
    } else {
      if (type != 'number' && type != 'string') {
        type = 'object';
      }
      var key = type == 'number' ? value : keyPrefix + value,
          typeCache = cache[type] || (cache[type] = {});

      if (type == 'object') {
        (typeCache[key] || (typeCache[key] = [])).push(value);
      } else {
        typeCache[key] = true;
      }
    }
  }

  /**
   * Used by `_.max` and `_.min` as the default callback when a given
   * collection is a string value.
   *
   * @private
   * @param {string} value The character to inspect.
   * @returns {number} Returns the code unit of given character.
   */
  function charAtCallback(value) {
    return value.charCodeAt(0);
  }

  /**
   * Used by `sortBy` to compare transformed `collection` elements, stable sorting
   * them in ascending order.
   *
   * @private
   * @param {Object} a The object to compare to `b`.
   * @param {Object} b The object to compare to `a`.
   * @returns {number} Returns the sort order indicator of `1` or `-1`.
   */
  function compareAscending(a, b) {
    var ac = a.criteria,
        bc = b.criteria,
        index = -1,
        length = ac.length;

    while (++index < length) {
      var value = ac[index],
          other = bc[index];

      if (value !== other) {
        if (value > other || typeof value == 'undefined') {
          return 1;
        }
        if (value < other || typeof other == 'undefined') {
          return -1;
        }
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to return the same value for
    // `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
    //
    // This also ensures a stable sort in V8 and other engines.
    // See http://code.google.com/p/v8/issues/detail?id=90
    return a.index - b.index;
  }

  /**
   * Creates a cache object to optimize linear searches of large arrays.
   *
   * @private
   * @param {Array} [array=[]] The array to search.
   * @returns {null|Object} Returns the cache object or `null` if caching should not be used.
   */
  function createCache(array) {
    var index = -1,
        length = array.length,
        first = array[0],
        mid = array[(length / 2) | 0],
        last = array[length - 1];

    if (first && typeof first == 'object' &&
        mid && typeof mid == 'object' && last && typeof last == 'object') {
      return false;
    }
    var cache = getObject();
    cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;

    var result = getObject();
    result.array = array;
    result.cache = cache;
    result.push = cachePush;

    while (++index < length) {
      result.push(array[index]);
    }
    return result;
  }

  /**
   * Used by `template` to escape characters for inclusion in compiled
   * string literals.
   *
   * @private
   * @param {string} match The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
  }

  /**
   * Gets an array from the array pool or creates a new one if the pool is empty.
   *
   * @private
   * @returns {Array} The array from the pool.
   */
  function getArray() {
    return arrayPool.pop() || [];
  }

  /**
   * Gets an object from the object pool or creates a new one if the pool is empty.
   *
   * @private
   * @returns {Object} The object from the pool.
   */
  function getObject() {
    return objectPool.pop() || {
      'array': null,
      'cache': null,
      'criteria': null,
      'false': false,
      'index': 0,
      'null': false,
      'number': null,
      'object': null,
      'push': null,
      'string': null,
      'true': false,
      'undefined': false,
      'value': null
    };
  }

  /**
   * Releases the given array back to the array pool.
   *
   * @private
   * @param {Array} [array] The array to release.
   */
  function releaseArray(array) {
    array.length = 0;
    if (arrayPool.length < maxPoolSize) {
      arrayPool.push(array);
    }
  }

  /**
   * Releases the given object back to the object pool.
   *
   * @private
   * @param {Object} [object] The object to release.
   */
  function releaseObject(object) {
    var cache = object.cache;
    if (cache) {
      releaseObject(cache);
    }
    object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
    if (objectPool.length < maxPoolSize) {
      objectPool.push(object);
    }
  }

  /**
   * Slices the `collection` from the `start` index up to, but not including,
   * the `end` index.
   *
   * Note: This function is used instead of `Array#slice` to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @private
   * @param {Array|Object|string} collection The collection to slice.
   * @param {number} start The start index.
   * @param {number} end The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);

    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new `lodash` function using the given context object.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns the `lodash` function.
   */
  function runInContext(context) {
    // Avoid issues with some ES3 environments that attempt to use values, named
    // after built-in constructors like `Object`, for the creation of literals.
    // ES5 clears this up by stating that literals must use built-in constructors.
    // See http://es5.github.io/#x11.1.5.
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

    /** Native constructor references */
    var Array = context.Array,
        Boolean = context.Boolean,
        Date = context.Date,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /**
     * Used for `Array` method references.
     *
     * Normally `Array.prototype` would suffice, however, using an array literal
     * avoids issues in Narwhal.
     */
    var arrayRef = [];

    /** Used for native method references */
    var objectProto = Object.prototype;

    /** Used to restore the original `_` reference in `noConflict` */
    var oldDash = context._;

    /** Used to resolve the internal [[Class]] of values */
    var toString = objectProto.toString;

    /** Used to detect if a method is native */
    var reNative = RegExp('^' +
      String(toString)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/toString| for [^\]]+/g, '.*?') + '$'
    );

    /** Native method shortcuts */
    var ceil = Math.ceil,
        clearTimeout = context.clearTimeout,
        floor = Math.floor,
        fnToString = Function.prototype.toString,
        getPrototypeOf = isNative(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
        hasOwnProperty = objectProto.hasOwnProperty,
        push = arrayRef.push,
        setTimeout = context.setTimeout,
        splice = arrayRef.splice,
        unshift = arrayRef.unshift;

    /** Used to set meta data on functions */
    var defineProperty = (function() {
      // IE 8 only accepts DOM elements
      try {
        var o = {},
            func = isNative(func = Object.defineProperty) && func,
            result = func(o, o, o) && func;
      } catch(e) { }
      return result;
    }());

    /* Native method shortcuts for methods with the same name as other `lodash` methods */
    var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
        nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
        nativeIsFinite = context.isFinite,
        nativeIsNaN = context.isNaN,
        nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;

    /** Used to lookup a built-in constructor by [[Class]] */
    var ctorByClass = {};
    ctorByClass[arrayClass] = Array;
    ctorByClass[boolClass] = Boolean;
    ctorByClass[dateClass] = Date;
    ctorByClass[funcClass] = Function;
    ctorByClass[objectClass] = Object;
    ctorByClass[numberClass] = Number;
    ctorByClass[regexpClass] = RegExp;
    ctorByClass[stringClass] = String;

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps the given value to enable intuitive
     * method chaining.
     *
     * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
     * and `unshift`
     *
     * Chaining is supported in custom builds as long as the `value` method is
     * implicitly or explicitly included in the build.
     *
     * The chainable wrapper functions are:
     * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
     * `compose`, `concat`, `countBy`, `create`, `createCallback`, `curry`,
     * `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`, `flatten`,
     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
     * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
     * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `pull`, `push`,
     * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
     * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
     * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
     * and `zip`
     *
     * The non-chainable wrapper functions are:
     * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `findIndex`,
     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`, `identity`,
     * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
     * `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`,
     * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
     * `lastIndexOf`, `mixin`, `noConflict`, `parseInt`, `pop`, `random`, `reduce`,
     * `reduceRight`, `result`, `shift`, `size`, `some`, `sortedIndex`, `runInContext`,
     * `template`, `unescape`, `uniqueId`, and `value`
     *
     * The wrapper functions `first` and `last` return wrapped values when `n` is
     * provided, otherwise they return unwrapped values.
     *
     * Explicit chaining can be enabled by using the `_.chain` method.
     *
     * @name _
     * @constructor
     * @category Chaining
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns a `lodash` instance.
     * @example
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // returns an unwrapped value
     * wrapped.reduce(function(sum, num) {
     *   return sum + num;
     * });
     * // => 6
     *
     * // returns a wrapped value
     * var squares = wrapped.map(function(num) {
     *   return num * num;
     * });
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      // don't wrap if already wrapped, even if wrapped by a different `lodash` constructor
      return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
       ? value
       : new lodashWrapper(value);
    }

    /**
     * A fast path for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap in a `lodash` instance.
     * @param {boolean} chainAll A flag to enable chaining for all methods
     * @returns {Object} Returns a `lodash` instance.
     */
    function lodashWrapper(value, chainAll) {
      this.__chain__ = !!chainAll;
      this.__wrapped__ = value;
    }
    // ensure `new lodashWrapper` is an instance of `lodash`
    lodashWrapper.prototype = lodash.prototype;

    /**
     * An object used to flag environments features.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    var support = lodash.support = {};

    /**
     * Detect if functions can be decompiled by `Function#toString`
     * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.funcDecomp = !isNative(context.WinRTError) && reThis.test(runInContext);

    /**
     * Detect if `Function#name` is supported (all but IE).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.funcNames = typeof Function.name == 'string';

    /**
     * By default, the template delimiters used by Lo-Dash are similar to those in
     * embedded Ruby (ERB). Change the following template settings to use alternative
     * delimiters.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'escape': /<%-([\s\S]+?)%>/g,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'evaluate': /<%([\s\S]+?)%>/g,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type string
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type Object
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type Function
         */
        '_': lodash
      }
    };

    /*--------------------------------------------------------------------------*/

    /**
     * The base implementation of `_.bind` that creates the bound function and
     * sets its meta data.
     *
     * @private
     * @param {Array} bindData The bind data array.
     * @returns {Function} Returns the new bound function.
     */
    function baseBind(bindData) {
      var func = bindData[0],
          partialArgs = bindData[2],
          thisArg = bindData[4];

      function bound() {
        // `Function#bind` spec
        // http://es5.github.io/#x15.3.4.5
        if (partialArgs) {
          // avoid `arguments` object deoptimizations by using `slice` instead
          // of `Array.prototype.slice.call` and not assigning `arguments` to a
          // variable as a ternary expression
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        // mimic the constructor's `return` behavior
        // http://es5.github.io/#x13.2.2
        if (this instanceof bound) {
          // ensure `new bound` is an instance of `func`
          var thisBinding = baseCreate(func.prototype),
              result = func.apply(thisBinding, args || arguments);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisArg, args || arguments);
      }
      setBindData(bound, bindData);
      return bound;
    }

    /**
     * The base implementation of `_.clone` without argument juggling or support
     * for `thisArg` binding.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep=false] Specify a deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates clones with source counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, callback, stackA, stackB) {
      if (callback) {
        var result = callback(value);
        if (typeof result != 'undefined') {
          return result;
        }
      }
      // inspect [[Class]]
      var isObj = isObject(value);
      if (isObj) {
        var className = toString.call(value);
        if (!cloneableClasses[className]) {
          return value;
        }
        var ctor = ctorByClass[className];
        switch (className) {
          case boolClass:
          case dateClass:
            return new ctor(+value);

          case numberClass:
          case stringClass:
            return new ctor(value);

          case regexpClass:
            result = ctor(value.source, reFlags.exec(value));
            result.lastIndex = value.lastIndex;
            return result;
        }
      } else {
        return value;
      }
      var isArr = isArray(value);
      if (isDeep) {
        // check for circular references and return corresponding clone
        var initedStack = !stackA;
        stackA || (stackA = getArray());
        stackB || (stackB = getArray());

        var length = stackA.length;
        while (length--) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        result = isArr ? ctor(value.length) : {};
      }
      else {
        result = isArr ? slice(value) : assign({}, value);
      }
      // add array properties assigned by `RegExp#exec`
      if (isArr) {
        if (hasOwnProperty.call(value, 'index')) {
          result.index = value.index;
        }
        if (hasOwnProperty.call(value, 'input')) {
          result.input = value.input;
        }
      }
      // exit for shallow clone
      if (!isDeep) {
        return result;
      }
      // add the source value to the stack of traversed objects
      // and associate it with its clone
      stackA.push(value);
      stackB.push(result);

      // recursively populate clone (susceptible to call stack limits)
      (isArr ? forEach : forOwn)(value, function(objValue, key) {
        result[key] = baseClone(objValue, isDeep, callback, stackA, stackB);
      });

      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    function baseCreate(prototype, properties) {
      return isObject(prototype) ? nativeCreate(prototype) : {};
    }
    // fallback for browsers without `Object.create`
    if (!nativeCreate) {
      baseCreate = (function() {
        function Object() {}
        return function(prototype) {
          if (isObject(prototype)) {
            Object.prototype = prototype;
            var result = new Object;
            Object.prototype = null;
          }
          return result || context.Object();
        };
      }());
    }

    /**
     * The base implementation of `_.createCallback` without support for creating
     * "_.pluck" or "_.where" style callbacks.
     *
     * @private
     * @param {*} [func=identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of the created callback.
     * @param {number} [argCount] The number of arguments the callback accepts.
     * @returns {Function} Returns a callback function.
     */
    function baseCreateCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      // exit early for no `thisArg` or already bound by `Function#bind`
      if (typeof thisArg == 'undefined' || !('prototype' in func)) {
        return func;
      }
      var bindData = func.__bindData__;
      if (typeof bindData == 'undefined') {
        if (support.funcNames) {
          bindData = !func.name;
        }
        bindData = bindData || !support.funcDecomp;
        if (!bindData) {
          var source = fnToString.call(func);
          if (!support.funcNames) {
            bindData = !reFuncName.test(source);
          }
          if (!bindData) {
            // checks if `func` references the `this` keyword and stores the result
            bindData = reThis.test(source);
            setBindData(func, bindData);
          }
        }
      }
      // exit early if there are no `this` references or `func` is bound
      if (bindData === false || (bindData !== true && bindData[1] & 1)) {
        return func;
      }
      switch (argCount) {
        case 1: return function(value) {
          return func.call(thisArg, value);
        };
        case 2: return function(a, b) {
          return func.call(thisArg, a, b);
        };
        case 3: return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
        case 4: return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
      }
      return bind(func, thisArg);
    }

    /**
     * The base implementation of `createWrapper` that creates the wrapper and
     * sets its meta data.
     *
     * @private
     * @param {Array} bindData The bind data array.
     * @returns {Function} Returns the new function.
     */
    function baseCreateWrapper(bindData) {
      var func = bindData[0],
          bitmask = bindData[1],
          partialArgs = bindData[2],
          partialRightArgs = bindData[3],
          thisArg = bindData[4],
          arity = bindData[5];

      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          key = func;

      function bound() {
        var thisBinding = isBind ? thisArg : this;
        if (partialArgs) {
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        if (partialRightArgs || isCurry) {
          args || (args = slice(arguments));
          if (partialRightArgs) {
            push.apply(args, partialRightArgs);
          }
          if (isCurry && args.length < arity) {
            bitmask |= 16 & ~32;
            return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
          }
        }
        args || (args = arguments);
        if (isBindKey) {
          func = thisBinding[key];
        }
        if (this instanceof bound) {
          thisBinding = baseCreate(func.prototype);
          var result = func.apply(thisBinding, args);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisBinding, args);
      }
      setBindData(bound, bindData);
      return bound;
    }

    /**
     * The base implementation of `_.difference` that accepts a single array
     * of values to exclude.
     *
     * @private
     * @param {Array} array The array to process.
     * @param {Array} [values] The array of values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     */
    function baseDifference(array, values) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          isLarge = length >= largeArraySize && indexOf === baseIndexOf,
          result = [];

      if (isLarge) {
        var cache = createCache(values);
        if (cache) {
          indexOf = cacheIndexOf;
          values = cache;
        } else {
          isLarge = false;
        }
      }
      while (++index < length) {
        var value = array[index];
        if (indexOf(values, value) < 0) {
          result.push(value);
        }
      }
      if (isLarge) {
        releaseObject(values);
      }
      return result;
    }

    /**
     * The base implementation of `_.flatten` without support for callback
     * shorthands or `thisArg` binding.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
     * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
     * @param {number} [fromIndex=0] The index to start from.
     * @returns {Array} Returns a new flattened array.
     */
    function baseFlatten(array, isShallow, isStrict, fromIndex) {
      var index = (fromIndex || 0) - 1,
          length = array ? array.length : 0,
          result = [];

      while (++index < length) {
        var value = array[index];

        if (value && typeof value == 'object' && typeof value.length == 'number'
            && (isArray(value) || isArguments(value))) {
          // recursively flatten arrays (susceptible to call stack limits)
          if (!isShallow) {
            value = baseFlatten(value, isShallow, isStrict);
          }
          var valIndex = -1,
              valLength = value.length,
              resIndex = result.length;

          result.length += valLength;
          while (++valIndex < valLength) {
            result[resIndex++] = value[valIndex];
          }
        } else if (!isStrict) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.isEqual`, without support for `thisArg` binding,
     * that allows partial "_.where" style comparisons.
     *
     * @private
     * @param {*} a The value to compare.
     * @param {*} b The other value to compare.
     * @param {Function} [callback] The function to customize comparing values.
     * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
     * @param {Array} [stackA=[]] Tracks traversed `a` objects.
     * @param {Array} [stackB=[]] Tracks traversed `b` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
      // used to indicate that when comparing objects, `a` has at least the properties of `b`
      if (callback) {
        var result = callback(a, b);
        if (typeof result != 'undefined') {
          return !!result;
        }
      }
      // exit early for identical values
      if (a === b) {
        // treat `+0` vs. `-0` as not equal
        return a !== 0 || (1 / a == 1 / b);
      }
      var type = typeof a,
          otherType = typeof b;

      // exit early for unlike primitive values
      if (a === a &&
          !(a && objectTypes[type]) &&
          !(b && objectTypes[otherType])) {
        return false;
      }
      // exit early for `null` and `undefined` avoiding ES3's Function#call behavior
      // http://es5.github.io/#x15.3.4.4
      if (a == null || b == null) {
        return a === b;
      }
      // compare [[Class]] names
      var className = toString.call(a),
          otherClass = toString.call(b);

      if (className == argsClass) {
        className = objectClass;
      }
      if (otherClass == argsClass) {
        otherClass = objectClass;
      }
      if (className != otherClass) {
        return false;
      }
      switch (className) {
        case boolClass:
        case dateClass:
          // coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
          return +a == +b;

        case numberClass:
          // treat `NaN` vs. `NaN` as equal
          return (a != +a)
            ? b != +b
            // but treat `+0` vs. `-0` as not equal
            : (a == 0 ? (1 / a == 1 / b) : a == +b);

        case regexpClass:
        case stringClass:
          // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
          // treat string primitives and their corresponding object instances as equal
          return a == String(b);
      }
      var isArr = className == arrayClass;
      if (!isArr) {
        // unwrap any `lodash` wrapped values
        var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
            bWrapped = hasOwnProperty.call(b, '__wrapped__');

        if (aWrapped || bWrapped) {
          return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
        }
        // exit for functions and DOM nodes
        if (className != objectClass) {
          return false;
        }
        // in older versions of Opera, `arguments` objects have `Array` constructors
        var ctorA = a.constructor,
            ctorB = b.constructor;

        // non `Object` object instances with different constructors are not equal
        if (ctorA != ctorB &&
              !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
              ('constructor' in a && 'constructor' in b)
            ) {
          return false;
        }
      }
      // assume cyclic structures are equal
      // the algorithm for detecting cyclic structures is adapted from ES 5.1
      // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
      var initedStack = !stackA;
      stackA || (stackA = getArray());
      stackB || (stackB = getArray());

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == a) {
          return stackB[length] == b;
        }
      }
      var size = 0;
      result = true;

      // add `a` and `b` to the stack of traversed objects
      stackA.push(a);
      stackB.push(b);

      // recursively compare objects and arrays (susceptible to call stack limits)
      if (isArr) {
        // compare lengths to determine if a deep comparison is necessary
        length = a.length;
        size = b.length;
        result = size == length;

        if (result || isWhere) {
          // deep compare the contents, ignoring non-numeric properties
          while (size--) {
            var index = length,
                value = b[size];

            if (isWhere) {
              while (index--) {
                if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
                  break;
                }
              }
            } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
              break;
            }
          }
        }
      }
      else {
        // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
        // which, in this case, is more costly
        forIn(b, function(value, key, b) {
          if (hasOwnProperty.call(b, key)) {
            // count the number of properties.
            size++;
            // deep compare each property value.
            return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
          }
        });

        if (result && !isWhere) {
          // ensure both objects have the same number of properties
          forIn(a, function(value, key, a) {
            if (hasOwnProperty.call(a, key)) {
              // `size` will be `-1` if `a` has more properties than `b`
              return (result = --size > -1);
            }
          });
        }
      }
      stackA.pop();
      stackB.pop();

      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }

    /**
     * The base implementation of `_.merge` without argument juggling or support
     * for `thisArg` binding.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} [callback] The function to customize merging properties.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     */
    function baseMerge(object, source, callback, stackA, stackB) {
      (isArray(source) ? forEach : forOwn)(source, function(source, key) {
        var found,
            isArr,
            result = source,
            value = object[key];

        if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
          // avoid merging previously merged cyclic sources
          var stackLength = stackA.length;
          while (stackLength--) {
            if ((found = stackA[stackLength] == source)) {
              value = stackB[stackLength];
              break;
            }
          }
          if (!found) {
            var isShallow;
            if (callback) {
              result = callback(value, source);
              if ((isShallow = typeof result != 'undefined')) {
                value = result;
              }
            }
            if (!isShallow) {
              value = isArr
                ? (isArray(value) ? value : [])
                : (isPlainObject(value) ? value : {});
            }
            // add `source` and associated `value` to the stack of traversed objects
            stackA.push(source);
            stackB.push(value);

            // recursively merge objects and arrays (susceptible to call stack limits)
            if (!isShallow) {
              baseMerge(value, source, callback, stackA, stackB);
            }
          }
        }
        else {
          if (callback) {
            result = callback(value, source);
            if (typeof result == 'undefined') {
              result = source;
            }
          }
          if (typeof result != 'undefined') {
            value = result;
          }
        }
        object[key] = value;
      });
    }

    /**
     * The base implementation of `_.random` without argument juggling or support
     * for returning floating-point numbers.
     *
     * @private
     * @param {number} min The minimum possible value.
     * @param {number} max The maximum possible value.
     * @returns {number} Returns a random number.
     */
    function baseRandom(min, max) {
      return min + floor(nativeRandom() * (max - min + 1));
    }

    /**
     * The base implementation of `_.uniq` without support for callback shorthands
     * or `thisArg` binding.
     *
     * @private
     * @param {Array} array The array to process.
     * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
     * @param {Function} [callback] The function called per iteration.
     * @returns {Array} Returns a duplicate-value-free array.
     */
    function baseUniq(array, isSorted, callback) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          result = [];

      var isLarge = !isSorted && length >= largeArraySize && indexOf === baseIndexOf,
          seen = (callback || isLarge) ? getArray() : result;

      if (isLarge) {
        var cache = createCache(seen);
        indexOf = cacheIndexOf;
        seen = cache;
      }
      while (++index < length) {
        var value = array[index],
            computed = callback ? callback(value, index, array) : value;

        if (isSorted
              ? !index || seen[seen.length - 1] !== computed
              : indexOf(seen, computed) < 0
            ) {
          if (callback || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      if (isLarge) {
        releaseArray(seen.array);
        releaseObject(seen);
      } else if (callback) {
        releaseArray(seen);
      }
      return result;
    }

    /**
     * Creates a function that aggregates a collection, creating an object composed
     * of keys generated from the results of running each element of the collection
     * through a callback. The given `setter` function sets the keys and values
     * of the composed object.
     *
     * @private
     * @param {Function} setter The setter function.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter) {
      return function(collection, callback, thisArg) {
        var result = {};
        callback = lodash.createCallback(callback, thisArg, 3);

        var index = -1,
            length = collection ? collection.length : 0;

        if (typeof length == 'number') {
          while (++index < length) {
            var value = collection[index];
            setter(result, value, callback(value, index, collection), collection);
          }
        } else {
          forOwn(collection, function(value, key, collection) {
            setter(result, value, callback(value, key, collection), collection);
          });
        }
        return result;
      };
    }

    /**
     * Creates a function that, when called, either curries or invokes `func`
     * with an optional `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of method flags to compose.
     *  The bitmask may be composed of the following flags:
     *  1 - `_.bind`
     *  2 - `_.bindKey`
     *  4 - `_.curry`
     *  8 - `_.curry` (bound)
     *  16 - `_.partial`
     *  32 - `_.partialRight`
     * @param {Array} [partialArgs] An array of arguments to prepend to those
     *  provided to the new function.
     * @param {Array} [partialRightArgs] An array of arguments to append to those
     *  provided to the new function.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new function.
     */
    function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          isPartial = bitmask & 16,
          isPartialRight = bitmask & 32;

      if (!isBindKey && !isFunction(func)) {
        throw new TypeError;
      }
      if (isPartial && !partialArgs.length) {
        bitmask &= ~16;
        isPartial = partialArgs = false;
      }
      if (isPartialRight && !partialRightArgs.length) {
        bitmask &= ~32;
        isPartialRight = partialRightArgs = false;
      }
      var bindData = func && func.__bindData__;
      if (bindData && bindData !== true) {
        // clone `bindData`
        bindData = slice(bindData);
        if (bindData[2]) {
          bindData[2] = slice(bindData[2]);
        }
        if (bindData[3]) {
          bindData[3] = slice(bindData[3]);
        }
        // set `thisBinding` is not previously bound
        if (isBind && !(bindData[1] & 1)) {
          bindData[4] = thisArg;
        }
        // set if previously bound but not currently (subsequent curried functions)
        if (!isBind && bindData[1] & 1) {
          bitmask |= 8;
        }
        // set curried arity if not yet set
        if (isCurry && !(bindData[1] & 4)) {
          bindData[5] = arity;
        }
        // append partial left arguments
        if (isPartial) {
          push.apply(bindData[2] || (bindData[2] = []), partialArgs);
        }
        // append partial right arguments
        if (isPartialRight) {
          unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
        }
        // merge flags
        bindData[1] |= bitmask;
        return createWrapper.apply(null, bindData);
      }
      // fast path for `_.bind`
      var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
      return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
    }

    /**
     * Used by `escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} match The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeHtmlChar(match) {
      return htmlEscapes[match];
    }

    /**
     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
     * customized, this method returns the custom method, otherwise it returns
     * the `baseIndexOf` function.
     *
     * @private
     * @returns {Function} Returns the "indexOf" function.
     */
    function getIndexOf() {
      var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
      return result;
    }

    /**
     * Checks if `value` is a native function.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
     */
    function isNative(value) {
      return typeof value == 'function' && reNative.test(value);
    }

    /**
     * Sets `this` binding data on a given function.
     *
     * @private
     * @param {Function} func The function to set data on.
     * @param {Array} value The data array to set.
     */
    var setBindData = !defineProperty ? noop : function(func, value) {
      descriptor.value = value;
      defineProperty(func, '__bindData__', descriptor);
    };

    /**
     * A fallback implementation of `isPlainObject` which checks if a given value
     * is an object created by the `Object` constructor, assuming objects created
     * by the `Object` constructor have no inherited enumerable properties and that
     * there are no `Object.prototype` extensions.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     */
    function shimIsPlainObject(value) {
      var ctor,
          result;

      // avoid non Object objects, `arguments` objects, and DOM elements
      if (!(value && toString.call(value) == objectClass) ||
          (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor))) {
        return false;
      }
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      forIn(value, function(value, key) {
        result = key;
      });
      return typeof result == 'undefined' || hasOwnProperty.call(value, result);
    }

    /**
     * Used by `unescape` to convert HTML entities to characters.
     *
     * @private
     * @param {string} match The matched character to unescape.
     * @returns {string} Returns the unescaped character.
     */
    function unescapeHtmlChar(match) {
      return htmlUnescapes[match];
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Checks if `value` is an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
     * @example
     *
     * (function() { return _.isArguments(arguments); })(1, 2, 3);
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == argsClass || false;
    }

    /**
     * Checks if `value` is an array.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
     * @example
     *
     * (function() { return _.isArray(arguments); })();
     * // => false
     *
     * _.isArray([1, 2, 3]);
     * // => true
     */
    var isArray = nativeIsArray || function(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == arrayClass || false;
    };

    /**
     * A fallback implementation of `Object.keys` which produces an array of the
     * given object's own enumerable property names.
     *
     * @private
     * @type Function
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names.
     */
    var shimKeys = function(object) {
      var index, iterable = object, result = [];
      if (!iterable) return result;
      if (!(objectTypes[typeof object])) return result;
        for (index in iterable) {
          if (hasOwnProperty.call(iterable, index)) {
            result.push(index);
          }
        }
      return result
    };

    /**
     * Creates an array composed of the own enumerable property names of an object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names.
     * @example
     *
     * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
     * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
     */
    var keys = !nativeKeys ? shimKeys : function(object) {
      if (!isObject(object)) {
        return [];
      }
      return nativeKeys(object);
    };

    /**
     * Used to convert characters to HTML entities:
     *
     * Though the `>` character is escaped for symmetry, characters like `>` and `/`
     * don't require escaping in HTML and have no special meaning unless they're part
     * of a tag or an unquoted attribute value.
     * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
     */
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    /** Used to convert HTML entities to characters */
    var htmlUnescapes = invert(htmlEscapes);

    /** Used to match HTML entities and HTML characters */
    var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
        reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');

    /*--------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object. Subsequent sources will overwrite property assignments of previous
     * sources. If a callback is provided it will be executed to produce the
     * assigned values. The callback is bound to `thisArg` and invoked with two
     * arguments; (objectValue, sourceValue).
     *
     * @static
     * @memberOf _
     * @type Function
     * @alias extend
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param {Function} [callback] The function to customize assigning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
     * // => { 'name': 'fred', 'employer': 'slate' }
     *
     * var defaults = _.partialRight(_.assign, function(a, b) {
     *   return typeof a == 'undefined' ? b : a;
     * });
     *
     * var object = { 'name': 'barney' };
     * defaults(object, { 'name': 'fred', 'employer': 'slate' });
     * // => { 'name': 'barney', 'employer': 'slate' }
     */
    var assign = function(object, source, guard) {
      var index, iterable = object, result = iterable;
      if (!iterable) return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
        var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);
      } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
        callback = args[--argsLength];
      }
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
        }
        }
      }
      return result
    };

    /**
     * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
     * be cloned, otherwise they will be assigned by reference. If a callback
     * is provided it will be executed to produce the cloned values. If the
     * callback returns `undefined` cloning will be handled by the method instead.
     * The callback is bound to `thisArg` and invoked with one argument; (value).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep=false] Specify a deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the cloned value.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * var shallow = _.clone(characters);
     * shallow[0] === characters[0];
     * // => true
     *
     * var deep = _.clone(characters, true);
     * deep[0] === characters[0];
     * // => false
     *
     * _.mixin({
     *   'clone': _.partialRight(_.clone, function(value) {
     *     return _.isElement(value) ? value.cloneNode(false) : undefined;
     *   })
     * });
     *
     * var clone = _.clone(document.body);
     * clone.childNodes.length;
     * // => 0
     */
    function clone(value, isDeep, callback, thisArg) {
      // allows working with "Collections" methods without using their `index`
      // and `collection` arguments for `isDeep` and `callback`
      if (typeof isDeep != 'boolean' && isDeep != null) {
        thisArg = callback;
        callback = isDeep;
        isDeep = false;
      }
      return baseClone(value, isDeep, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }

    /**
     * Creates a deep clone of `value`. If a callback is provided it will be
     * executed to produce the cloned values. If the callback returns `undefined`
     * cloning will be handled by the method instead. The callback is bound to
     * `thisArg` and invoked with one argument; (value).
     *
     * Note: This method is loosely based on the structured clone algorithm. Functions
     * and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
     * objects created by constructors other than `Object` are cloned to plain `Object` objects.
     * See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the deep cloned value.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * var deep = _.cloneDeep(characters);
     * deep[0] === characters[0];
     * // => false
     *
     * var view = {
     *   'label': 'docs',
     *   'node': element
     * };
     *
     * var clone = _.cloneDeep(view, function(value) {
     *   return _.isElement(value) ? value.cloneNode(true) : undefined;
     * });
     *
     * clone.node == view.node;
     * // => false
     */
    function cloneDeep(value, callback, thisArg) {
      return baseClone(value, true, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }

    /**
     * Creates an object that inherits from the given `prototype` object. If a
     * `properties` object is provided its own enumerable properties are assigned
     * to the created object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, { 'constructor': Circle });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties ? assign(result, properties) : result;
    }

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object for all destination properties that resolve to `undefined`. Once a
     * property is set, additional defaults of the same property will be ignored.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param- {Object} [guard] Allows working with `_.reduce` without using its
     *  `key` and `object` arguments as sources.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * var object = { 'name': 'barney' };
     * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
     * // => { 'name': 'barney', 'employer': 'slate' }
     */
    var defaults = function(object, source, guard) {
      var index, iterable = object, result = iterable;
      if (!iterable) return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          if (typeof result[index] == 'undefined') result[index] = iterable[index];
        }
        }
      }
      return result
    };

    /**
     * This method is like `_.findIndex` except that it returns the key of the
     * first element that passes the callback check, instead of the element itself.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [callback=identity] The function called per
     *  iteration. If a property name or object is provided it will be used to
     *  create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {string|undefined} Returns the key of the found element, else `undefined`.
     * @example
     *
     * var characters = {
     *   'barney': {  'age': 36, 'blocked': false },
     *   'fred': {    'age': 40, 'blocked': true },
     *   'pebbles': { 'age': 1,  'blocked': false }
     * };
     *
     * _.findKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => 'barney' (property order is not guaranteed across environments)
     *
     * // using "_.where" callback shorthand
     * _.findKey(characters, { 'age': 1 });
     * // => 'pebbles'
     *
     * // using "_.pluck" callback shorthand
     * _.findKey(characters, 'blocked');
     * // => 'fred'
     */
    function findKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwn(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [callback=identity] The function called per
     *  iteration. If a property name or object is provided it will be used to
     *  create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {string|undefined} Returns the key of the found element, else `undefined`.
     * @example
     *
     * var characters = {
     *   'barney': {  'age': 36, 'blocked': true },
     *   'fred': {    'age': 40, 'blocked': false },
     *   'pebbles': { 'age': 1,  'blocked': true }
     * };
     *
     * _.findLastKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => returns `pebbles`, assuming `_.findKey` returns `barney`
     *
     * // using "_.where" callback shorthand
     * _.findLastKey(characters, { 'age': 40 });
     * // => 'fred'
     *
     * // using "_.pluck" callback shorthand
     * _.findLastKey(characters, 'blocked');
     * // => 'pebbles'
     */
    function findLastKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwnRight(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }

    /**
     * Iterates over own and inherited enumerable properties of an object,
     * executing the callback for each property. The callback is bound to `thisArg`
     * and invoked with three arguments; (value, key, object). Callbacks may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
     *
     * _.forIn(new Shape, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
     */
    var forIn = function(collection, callback, thisArg) {
      var index, iterable = collection, result = iterable;
      if (!iterable) return result;
      if (!objectTypes[typeof iterable]) return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
        for (index in iterable) {
          if (callback(iterable[index], index, collection) === false) return result;
        }
      return result
    };

    /**
     * This method is like `_.forIn` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
     *
     * _.forInRight(new Shape, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'move', 'y', and 'x' assuming `_.forIn ` logs 'x', 'y', and 'move'
     */
    function forInRight(object, callback, thisArg) {
      var pairs = [];

      forIn(object, function(value, key) {
        pairs.push(key, value);
      });

      var length = pairs.length;
      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(pairs[length--], pairs[length], object) === false) {
          break;
        }
      }
      return object;
    }

    /**
     * Iterates over own enumerable properties of an object, executing the callback
     * for each property. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, key, object). Callbacks may exit iteration early by
     * explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
     * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
     */
    var forOwn = function(collection, callback, thisArg) {
      var index, iterable = collection, result = iterable;
      if (!iterable) return result;
      if (!objectTypes[typeof iterable]) return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          if (callback(iterable[index], index, collection) === false) return result;
        }
      return result
    };

    /**
     * This method is like `_.forOwn` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
     * // => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
     */
    function forOwnRight(object, callback, thisArg) {
      var props = keys(object),
          length = props.length;

      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        var key = props[length];
        if (callback(object[key], key, object) === false) {
          break;
        }
      }
      return object;
    }

    /**
     * Creates a sorted array of property names of all enumerable properties,
     * own and inherited, of `object` that have function values.
     *
     * @static
     * @memberOf _
     * @alias methods
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names that have function values.
     * @example
     *
     * _.functions(_);
     * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
     */
    function functions(object) {
      var result = [];
      forIn(object, function(value, key) {
        if (isFunction(value)) {
          result.push(key);
        }
      });
      return result.sort();
    }

    /**
     * Checks if the specified property name exists as a direct property of `object`,
     * instead of an inherited property.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @param {string} key The name of the property to check.
     * @returns {boolean} Returns `true` if key is a direct property, else `false`.
     * @example
     *
     * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
     * // => true
     */
    function has(object, key) {
      return object ? hasOwnProperty.call(object, key) : false;
    }

    /**
     * Creates an object composed of the inverted keys and values of the given object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the created inverted object.
     * @example
     *
     * _.invert({ 'first': 'fred', 'second': 'barney' });
     * // => { 'fred': 'first', 'barney': 'second' }
     */
    function invert(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index];
        result[object[key]] = key;
      }
      return result;
    }

    /**
     * Checks if `value` is a boolean value.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a boolean value, else `false`.
     * @example
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        value && typeof value == 'object' && toString.call(value) == boolClass || false;
    }

    /**
     * Checks if `value` is a date.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a date, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     */
    function isDate(value) {
      return value && typeof value == 'object' && toString.call(value) == dateClass || false;
    }

    /**
     * Checks if `value` is a DOM element.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     */
    function isElement(value) {
      return value && value.nodeType === 1 || false;
    }

    /**
     * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
     * length of `0` and objects with no own enumerable properties are considered
     * "empty".
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Array|Object|string} value The value to inspect.
     * @returns {boolean} Returns `true` if the `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({});
     * // => true
     *
     * _.isEmpty('');
     * // => true
     */
    function isEmpty(value) {
      var result = true;
      if (!value) {
        return result;
      }
      var className = toString.call(value),
          length = value.length;

      if ((className == arrayClass || className == stringClass || className == argsClass ) ||
          (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
        return !length;
      }
      forOwn(value, function() {
        return (result = false);
      });
      return result;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent to each other. If a callback is provided it will be executed
     * to compare values. If the callback returns `undefined` comparisons will
     * be handled by the method instead. The callback is bound to `thisArg` and
     * invoked with two arguments; (a, b).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} a The value to compare.
     * @param {*} b The other value to compare.
     * @param {Function} [callback] The function to customize comparing values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'name': 'fred' };
     * var copy = { 'name': 'fred' };
     *
     * object == copy;
     * // => false
     *
     * _.isEqual(object, copy);
     * // => true
     *
     * var words = ['hello', 'goodbye'];
     * var otherWords = ['hi', 'goodbye'];
     *
     * _.isEqual(words, otherWords, function(a, b) {
     *   var reGreet = /^(?:hello|hi)$/i,
     *       aGreet = _.isString(a) && reGreet.test(a),
     *       bGreet = _.isString(b) && reGreet.test(b);
     *
     *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
     * });
     * // => true
     */
    function isEqual(a, b, callback, thisArg) {
      return baseIsEqual(a, b, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 2));
    }

    /**
     * Checks if `value` is, or can be coerced to, a finite number.
     *
     * Note: This is not the same as native `isFinite` which will return true for
     * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
     * @example
     *
     * _.isFinite(-101);
     * // => true
     *
     * _.isFinite('10');
     * // => true
     *
     * _.isFinite(true);
     * // => false
     *
     * _.isFinite('');
     * // => false
     *
     * _.isFinite(Infinity);
     * // => false
     */
    function isFinite(value) {
      return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }

    /**
     * Checks if `value` is a function.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     */
    function isFunction(value) {
      return typeof value == 'function';
    }

    /**
     * Checks if `value` is the language type of Object.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(1);
     * // => false
     */
    function isObject(value) {
      // check if the value is the ECMAScript language type of Object
      // http://es5.github.io/#x8
      // and avoid a V8 bug
      // http://code.google.com/p/v8/issues/detail?id=2291
      return !!(value && objectTypes[typeof value]);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * Note: This is not the same as native `isNaN` which will return `true` for
     * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // `NaN` as a primitive is the only value that is not equal to itself
      // (perform the [[Class]] check first to avoid errors with some host objects in IE)
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(undefined);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is a number.
     *
     * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(8.4 * 5);
     * // => true
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        value && typeof value == 'object' && toString.call(value) == numberClass || false;
    }

    /**
     * Checks if `value` is an object created by the `Object` constructor.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * _.isPlainObject(new Shape);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     */
    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
      if (!(value && toString.call(value) == objectClass)) {
        return false;
      }
      var valueOf = value.valueOf,
          objProto = isNative(valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

      return objProto
        ? (value == objProto || getPrototypeOf(value) == objProto)
        : shimIsPlainObject(value);
    };

    /**
     * Checks if `value` is a regular expression.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a regular expression, else `false`.
     * @example
     *
     * _.isRegExp(/fred/);
     * // => true
     */
    function isRegExp(value) {
      return value && typeof value == 'object' && toString.call(value) == regexpClass || false;
    }

    /**
     * Checks if `value` is a string.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
     * @example
     *
     * _.isString('fred');
     * // => true
     */
    function isString(value) {
      return typeof value == 'string' ||
        value && typeof value == 'object' && toString.call(value) == stringClass || false;
    }

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     */
    function isUndefined(value) {
      return typeof value == 'undefined';
    }

    /**
     * Creates an object with the same keys as `object` and values generated by
     * running each own enumerable property of `object` through the callback.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new object with values of the results of each `callback` execution.
     * @example
     *
     * _.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(num) { return num * 3; });
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     *
     * var characters = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
     *
     * // using "_.pluck" callback shorthand
     * _.mapValues(characters, 'age');
     * // => { 'fred': 40, 'pebbles': 1 }
     */
    function mapValues(object, callback, thisArg) {
      var result = {};
      callback = lodash.createCallback(callback, thisArg, 3);

      forOwn(object, function(value, key, object) {
        result[key] = callback(value, key, object);
      });
      return result;
    }

    /**
     * Recursively merges own enumerable properties of the source object(s), that
     * don't resolve to `undefined` into the destination object. Subsequent sources
     * will overwrite property assignments of previous sources. If a callback is
     * provided it will be executed to produce the merged values of the destination
     * and source properties. If the callback returns `undefined` merging will
     * be handled by the method instead. The callback is bound to `thisArg` and
     * invoked with two arguments; (objectValue, sourceValue).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param {Function} [callback] The function to customize merging properties.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * var names = {
     *   'characters': [
     *     { 'name': 'barney' },
     *     { 'name': 'fred' }
     *   ]
     * };
     *
     * var ages = {
     *   'characters': [
     *     { 'age': 36 },
     *     { 'age': 40 }
     *   ]
     * };
     *
     * _.merge(names, ages);
     * // => { 'characters': [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }] }
     *
     * var food = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
     *
     * var otherFood = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
     *
     * _.merge(food, otherFood, function(a, b) {
     *   return _.isArray(a) ? a.concat(b) : undefined;
     * });
     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
     */
    function merge(object) {
      var args = arguments,
          length = 2;

      if (!isObject(object)) {
        return object;
      }
      // allows working with `_.reduce` and `_.reduceRight` without using
      // their `index` and `collection` arguments
      if (typeof args[2] != 'number') {
        length = args.length;
      }
      if (length > 3 && typeof args[length - 2] == 'function') {
        var callback = baseCreateCallback(args[--length - 1], args[length--], 2);
      } else if (length > 2 && typeof args[length - 1] == 'function') {
        callback = args[--length];
      }
      var sources = slice(arguments, 1, length),
          index = -1,
          stackA = getArray(),
          stackB = getArray();

      while (++index < length) {
        baseMerge(object, sources[index], callback, stackA, stackB);
      }
      releaseArray(stackA);
      releaseArray(stackB);
      return object;
    }

    /**
     * Creates a shallow clone of `object` excluding the specified properties.
     * Property names may be specified as individual arguments or as arrays of
     * property names. If a callback is provided it will be executed for each
     * property of `object` omitting the properties the callback returns truey
     * for. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The source object.
     * @param {Function|...string|string[]} [callback] The properties to omit or the
     *  function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns an object without the omitted properties.
     * @example
     *
     * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
     * // => { 'name': 'fred' }
     *
     * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
     *   return typeof value == 'number';
     * });
     * // => { 'name': 'fred' }
     */
    function omit(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var props = [];
        forIn(object, function(value, key) {
          props.push(key);
        });
        props = baseDifference(props, baseFlatten(arguments, true, false, 1));

        var index = -1,
            length = props.length;

        while (++index < length) {
          var key = props[index];
          result[key] = object[key];
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (!callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }

    /**
     * Creates a two dimensional array of an object's key-value pairs,
     * i.e. `[[key1, value1], [key2, value2]]`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns new array of key-value pairs.
     * @example
     *
     * _.pairs({ 'barney': 36, 'fred': 40 });
     * // => [['barney', 36], ['fred', 40]] (property order is not guaranteed across environments)
     */
    function pairs(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }

    /**
     * Creates a shallow clone of `object` composed of the specified properties.
     * Property names may be specified as individual arguments or as arrays of
     * property names. If a callback is provided it will be executed for each
     * property of `object` picking the properties the callback returns truey
     * for. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The source object.
     * @param {Function|...string|string[]} [callback] The function called per
     *  iteration or property names to pick, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns an object composed of the picked properties.
     * @example
     *
     * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
     * // => { 'name': 'fred' }
     *
     * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
     *   return key.charAt(0) != '_';
     * });
     * // => { 'name': 'fred' }
     */
    function pick(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var index = -1,
            props = baseFlatten(arguments, true, false, 1),
            length = isObject(object) ? props.length : 0;

        while (++index < length) {
          var key = props[index];
          if (key in object) {
            result[key] = object[key];
          }
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }

    /**
     * An alternative to `_.reduce` this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable properties through a callback, with each callback execution
     * potentially mutating the `accumulator` object. The callback is bound to
     * `thisArg` and invoked with four arguments; (accumulator, value, key, object).
     * Callbacks may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var squares = _.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(result, num) {
     *   num *= num;
     *   if (num % 2) {
     *     return result.push(num) < 3;
     *   }
     * });
     * // => [1, 9, 25]
     *
     * var mapped = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     * });
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     */
    function transform(object, callback, accumulator, thisArg) {
      var isArr = isArray(object);
      if (accumulator == null) {
        if (isArr) {
          accumulator = [];
        } else {
          var ctor = object && object.constructor,
              proto = ctor && ctor.prototype;

          accumulator = baseCreate(proto);
        }
      }
      if (callback) {
        callback = lodash.createCallback(callback, thisArg, 4);
        (isArr ? forEach : forOwn)(object, function(value, index, object) {
          return callback(accumulator, value, index, object);
        });
      }
      return accumulator;
    }

    /**
     * Creates an array composed of the own enumerable property values of `object`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property values.
     * @example
     *
     * _.values({ 'one': 1, 'two': 2, 'three': 3 });
     * // => [1, 2, 3] (property order is not guaranteed across environments)
     */
    function values(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates an array of elements from the specified indexes, or keys, of the
     * `collection`. Indexes may be specified as individual arguments or as arrays
     * of indexes.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(number|number[]|string|string[])} [index] The indexes of `collection`
     *   to retrieve, specified as individual indexes or arrays of indexes.
     * @returns {Array} Returns a new array of elements corresponding to the
     *  provided indexes.
     * @example
     *
     * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
     * // => ['a', 'c', 'e']
     *
     * _.at(['fred', 'barney', 'pebbles'], 0, 2);
     * // => ['fred', 'pebbles']
     */
    function at(collection) {
      var args = arguments,
          index = -1,
          props = baseFlatten(args, true, false, 1),
          length = (args[2] && args[2][args[1]] === collection) ? 1 : props.length,
          result = Array(length);

      while(++index < length) {
        result[index] = collection[props[index]];
      }
      return result;
    }

    /**
     * Checks if a given value is present in a collection using strict equality
     * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
     * offset from the end of the collection.
     *
     * @static
     * @memberOf _
     * @alias include
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {*} target The value to check for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {boolean} Returns `true` if the `target` element is found, else `false`.
     * @example
     *
     * _.contains([1, 2, 3], 1);
     * // => true
     *
     * _.contains([1, 2, 3], 1, 2);
     * // => false
     *
     * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
     * // => true
     *
     * _.contains('pebbles', 'eb');
     * // => true
     */
    function contains(collection, target, fromIndex) {
      var index = -1,
          indexOf = getIndexOf(),
          length = collection ? collection.length : 0,
          result = false;

      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
      if (isArray(collection)) {
        result = indexOf(collection, target, fromIndex) > -1;
      } else if (typeof length == 'number') {
        result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
      } else {
        forOwn(collection, function(value) {
          if (++index >= fromIndex) {
            return !(result = value === target);
          }
        });
      }
      return result;
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through the callback. The corresponding value
     * of each key is the number of times the key was returned by the callback.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
    });

    /**
     * Checks if the given callback returns truey value for **all** elements of
     * a collection. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias all
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if all elements passed the callback check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes']);
     * // => false
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.every(characters, 'age');
     * // => true
     *
     * // using "_.where" callback shorthand
     * _.every(characters, { 'age': 36 });
     * // => false
     */
    function every(collection, callback, thisArg) {
      var result = true;
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          if (!(result = !!callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return (result = !!callback(value, index, collection));
        });
      }
      return result;
    }

    /**
     * Iterates over elements of a collection, returning an array of all elements
     * the callback returns truey for. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias select
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of elements that passed the callback check.
     * @example
     *
     * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
     * // => [2, 4, 6]
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.filter(characters, 'blocked');
     * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
     *
     * // using "_.where" callback shorthand
     * _.filter(characters, { 'age': 36 });
     * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
     */
    function filter(collection, callback, thisArg) {
      var result = [];
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            result.push(value);
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result.push(value);
          }
        });
      }
      return result;
    }

    /**
     * Iterates over elements of a collection, returning the first element that
     * the callback returns truey for. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias detect, findWhere
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the found element, else `undefined`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': false },
     *   { 'name': 'fred',    'age': 40, 'blocked': true },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
     * ];
     *
     * _.find(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => { 'name': 'barney', 'age': 36, 'blocked': false }
     *
     * // using "_.where" callback shorthand
     * _.find(characters, { 'age': 1 });
     * // =>  { 'name': 'pebbles', 'age': 1, 'blocked': false }
     *
     * // using "_.pluck" callback shorthand
     * _.find(characters, 'blocked');
     * // => { 'name': 'fred', 'age': 40, 'blocked': true }
     */
    function find(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            return value;
          }
        }
      } else {
        var result;
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result = value;
            return false;
          }
        });
        return result;
      }
    }

    /**
     * This method is like `_.find` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the found element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(num) {
     *   return num % 2 == 1;
     * });
     * // => 3
     */
    function findLast(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forEachRight(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result = value;
          return false;
        }
      });
      return result;
    }

    /**
     * Iterates over elements of a collection, executing the callback for each
     * element. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection). Callbacks may exit iteration early by
     * explicitly returning `false`.
     *
     * Note: As with other "Collections" methods, objects with a `length` property
     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
     * may be used for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
     * // => logs each number and returns '1,2,3'
     *
     * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
     * // => logs each number and returns the object (property order is not guaranteed across environments)
     */
    function forEach(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;

      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (++index < length) {
          if (callback(collection[index], index, collection) === false) {
            break;
          }
        }
      } else {
        forOwn(collection, callback);
      }
      return collection;
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias eachRight
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
     * // => logs each number from right to left and returns '3,2,1'
     */
    function forEachRight(collection, callback, thisArg) {
      var length = collection ? collection.length : 0;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (length--) {
          if (callback(collection[length], length, collection) === false) {
            break;
          }
        }
      } else {
        var props = keys(collection);
        length = props.length;
        forOwn(collection, function(value, key, collection) {
          key = props ? props[--length] : --length;
          return callback(collection[key], key, collection);
        });
      }
      return collection;
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of a collection through the callback. The corresponding value
     * of each key is an array of the elements responsible for generating the key.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * // using "_.pluck" callback shorthand
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of the collection through the given callback. The corresponding
     * value of each key is the last element responsible for generating the key.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var keys = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.indexBy(keys, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(characters, function(key) { this.fromCharCode(key.code); }, String);
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     */
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });

    /**
     * Invokes the method named by `methodName` on each element in the `collection`
     * returning an array of the results of each invoked method. Additional arguments
     * will be provided to each invoked method. If `methodName` is a function it
     * will be invoked for, and `this` bound to, each element in the `collection`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|string} methodName The name of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [arg] Arguments to invoke the method with.
     * @returns {Array} Returns a new array of the results of each invoked method.
     * @example
     *
     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invoke([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    function invoke(collection, methodName) {
      var args = slice(arguments, 2),
          index = -1,
          isFunc = typeof methodName == 'function',
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      forEach(collection, function(value) {
        result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
      });
      return result;
    }

    /**
     * Creates an array of values by running each element in the collection
     * through the callback. The callback is bound to `thisArg` and invoked with
     * three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias collect
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of the results of each `callback` execution.
     * @example
     *
     * _.map([1, 2, 3], function(num) { return num * 3; });
     * // => [3, 6, 9]
     *
     * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
     * // => [3, 6, 9] (property order is not guaranteed across environments)
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.map(characters, 'name');
     * // => ['barney', 'fred']
     */
    function map(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;

      callback = lodash.createCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        var result = Array(length);
        while (++index < length) {
          result[index] = callback(collection[index], index, collection);
        }
      } else {
        result = [];
        forOwn(collection, function(value, key, collection) {
          result[++index] = callback(value, key, collection);
        });
      }
      return result;
    }

    /**
     * Retrieves the maximum value of a collection. If the collection is empty or
     * falsey `-Infinity` is returned. If a callback is provided it will be executed
     * for each value in the collection to generate the criterion by which the value
     * is ranked. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.max(characters, function(chr) { return chr.age; });
     * // => { 'name': 'fred', 'age': 40 };
     *
     * // using "_.pluck" callback shorthand
     * _.max(characters, 'age');
     * // => { 'name': 'fred', 'age': 40 };
     */
    function max(collection, callback, thisArg) {
      var computed = -Infinity,
          result = computed;

      // allows working with functions like `_.map` without using
      // their `index` argument as a callback
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;

        while (++index < length) {
          var value = collection[index];
          if (value > result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection))
          ? charAtCallback
          : lodash.createCallback(callback, thisArg, 3);

        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current > computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }

    /**
     * Retrieves the minimum value of a collection. If the collection is empty or
     * falsey `Infinity` is returned. If a callback is provided it will be executed
     * for each value in the collection to generate the criterion by which the value
     * is ranked. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.min(characters, function(chr) { return chr.age; });
     * // => { 'name': 'barney', 'age': 36 };
     *
     * // using "_.pluck" callback shorthand
     * _.min(characters, 'age');
     * // => { 'name': 'barney', 'age': 36 };
     */
    function min(collection, callback, thisArg) {
      var computed = Infinity,
          result = computed;

      // allows working with functions like `_.map` without using
      // their `index` argument as a callback
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;

        while (++index < length) {
          var value = collection[index];
          if (value < result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection))
          ? charAtCallback
          : lodash.createCallback(callback, thisArg, 3);

        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current < computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }

    /**
     * Retrieves the value of a specified property from all elements in the collection.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {string} property The name of the property to pluck.
     * @returns {Array} Returns a new array of property values.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.pluck(characters, 'name');
     * // => ['barney', 'fred']
     */
    var pluck = map;

    /**
     * Reduces a collection to a value which is the accumulated result of running
     * each element in the collection through the callback, where each successive
     * callback execution consumes the return value of the previous execution. If
     * `accumulator` is not provided the first element of the collection will be
     * used as the initial `accumulator` value. The callback is bound to `thisArg`
     * and invoked with four arguments; (accumulator, value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @alias foldl, inject
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] Initial value of the accumulator.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var sum = _.reduce([1, 2, 3], function(sum, num) {
     *   return sum + num;
     * });
     * // => 6
     *
     * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     *   return result;
     * }, {});
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     */
    function reduce(collection, callback, accumulator, thisArg) {
      if (!collection) return accumulator;
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);

      var index = -1,
          length = collection.length;

      if (typeof length == 'number') {
        if (noaccum) {
          accumulator = collection[++index];
        }
        while (++index < length) {
          accumulator = callback(accumulator, collection[index], index, collection);
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          accumulator = noaccum
            ? (noaccum = false, value)
            : callback(accumulator, value, index, collection)
        });
      }
      return accumulator;
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias foldr
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] Initial value of the accumulator.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var list = [[0, 1], [2, 3], [4, 5]];
     * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, callback, accumulator, thisArg) {
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);
      forEachRight(collection, function(value, index, collection) {
        accumulator = noaccum
          ? (noaccum = false, value)
          : callback(accumulator, value, index, collection);
      });
      return accumulator;
    }

    /**
     * The opposite of `_.filter` this method returns the elements of a
     * collection that the callback does **not** return truey for.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of elements that failed the callback check.
     * @example
     *
     * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
     * // => [1, 3, 5]
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.reject(characters, 'blocked');
     * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
     *
     * // using "_.where" callback shorthand
     * _.reject(characters, { 'age': 36 });
     * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
     */
    function reject(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);
      return filter(collection, function(value, index, collection) {
        return !callback(value, index, collection);
      });
    }

    /**
     * Retrieves a random element or `n` random elements from a collection.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to sample.
     * @param {number} [n] The number of elements to sample.
     * @param- {Object} [guard] Allows working with functions like `_.map`
     *  without using their `index` arguments as `n`.
     * @returns {Array} Returns the random sample(s) of `collection`.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     *
     * _.sample([1, 2, 3, 4], 2);
     * // => [3, 1]
     */
    function sample(collection, n, guard) {
      if (collection && typeof collection.length != 'number') {
        collection = values(collection);
      }
      if (n == null || guard) {
        return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
      }
      var result = shuffle(collection);
      result.length = nativeMin(nativeMax(0, n), result.length);
      return result;
    }

    /**
     * Creates an array of shuffled values, using a version of the Fisher-Yates
     * shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to shuffle.
     * @returns {Array} Returns a new shuffled collection.
     * @example
     *
     * _.shuffle([1, 2, 3, 4, 5, 6]);
     * // => [4, 1, 6, 3, 5, 2]
     */
    function shuffle(collection) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      forEach(collection, function(value) {
        var rand = baseRandom(0, ++index);
        result[index] = result[rand];
        result[rand] = value;
      });
      return result;
    }

    /**
     * Gets the size of the `collection` by returning `collection.length` for arrays
     * and array-like objects or the number of own enumerable properties for objects.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns `collection.length` or number of own enumerable properties.
     * @example
     *
     * _.size([1, 2]);
     * // => 2
     *
     * _.size({ 'one': 1, 'two': 2, 'three': 3 });
     * // => 3
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      var length = collection ? collection.length : 0;
      return typeof length == 'number' ? length : keys(collection).length;
    }

    /**
     * Checks if the callback returns a truey value for **any** element of a
     * collection. The function returns as soon as it finds a passing value and
     * does not iterate over the entire collection. The callback is bound to
     * `thisArg` and invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias any
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if any element passed the callback check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.some(characters, 'blocked');
     * // => true
     *
     * // using "_.where" callback shorthand
     * _.some(characters, { 'age': 1 });
     * // => false
     */
    function some(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          if ((result = callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return !(result = callback(value, index, collection));
        });
      }
      return !!result;
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through the callback. This method
     * performs a stable sort, that is, it will preserve the original sort order
     * of equal elements. The callback is bound to `thisArg` and invoked with
     * three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an array of property names is provided for `callback` the collection
     * will be sorted by each property value.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of sorted elements.
     * @example
     *
     * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
     * // => [3, 1, 2]
     *
     * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
     * // => [3, 1, 2]
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36 },
     *   { 'name': 'fred',    'age': 40 },
     *   { 'name': 'barney',  'age': 26 },
     *   { 'name': 'fred',    'age': 30 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.map(_.sortBy(characters, 'age'), _.values);
     * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
     *
     * // sorting by multiple properties
     * _.map(_.sortBy(characters, ['name', 'age']), _.values);
     * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
     */
    function sortBy(collection, callback, thisArg) {
      var index = -1,
          isArr = isArray(callback),
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      if (!isArr) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      forEach(collection, function(value, key, collection) {
        var object = result[++index] = getObject();
        if (isArr) {
          object.criteria = map(callback, function(key) { return value[key]; });
        } else {
          (object.criteria = getArray())[0] = callback(value, key, collection);
        }
        object.index = index;
        object.value = value;
      });

      length = result.length;
      result.sort(compareAscending);
      while (length--) {
        var object = result[length];
        result[length] = object.value;
        if (!isArr) {
          releaseArray(object.criteria);
        }
        releaseObject(object);
      }
      return result;
    }

    /**
     * Converts the `collection` to an array.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to convert.
     * @returns {Array} Returns the new converted array.
     * @example
     *
     * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
     * // => [2, 3, 4]
     */
    function toArray(collection) {
      if (collection && typeof collection.length == 'number') {
        return slice(collection);
      }
      return values(collection);
    }

    /**
     * Performs a deep comparison of each element in a `collection` to the given
     * `properties` object, returning an array of all elements that have equivalent
     * property values.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Object} props The object of property values to filter by.
     * @returns {Array} Returns a new array of elements that have the given properties.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
     *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * _.where(characters, { 'age': 36 });
     * // => [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
     *
     * _.where(characters, { 'pets': ['dino'] });
     * // => [{ 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }]
     */
    var where = filter;

    /*--------------------------------------------------------------------------*/

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are all falsey.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to compact.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * Creates an array excluding all values of the provided arrays using strict
     * equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to process.
     * @param {...Array} [values] The arrays of values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
     * // => [1, 3, 4]
     */
    function difference(array) {
      return baseDifference(array, baseFlatten(arguments, true, true, 1));
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element that passes the callback check, instead of the element itself.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': false },
     *   { 'name': 'fred',    'age': 40, 'blocked': true },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
     * ];
     *
     * _.findIndex(characters, function(chr) {
     *   return chr.age < 20;
     * });
     * // => 2
     *
     * // using "_.where" callback shorthand
     * _.findIndex(characters, { 'age': 36 });
     * // => 0
     *
     * // using "_.pluck" callback shorthand
     * _.findIndex(characters, 'blocked');
     * // => 1
     */
    function findIndex(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0;

      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        if (callback(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': true },
     *   { 'name': 'fred',    'age': 40, 'blocked': false },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': true }
     * ];
     *
     * _.findLastIndex(characters, function(chr) {
     *   return chr.age > 30;
     * });
     * // => 1
     *
     * // using "_.where" callback shorthand
     * _.findLastIndex(characters, { 'age': 36 });
     * // => 0
     *
     * // using "_.pluck" callback shorthand
     * _.findLastIndex(characters, 'blocked');
     * // => 2
     */
    function findLastIndex(array, callback, thisArg) {
      var length = array ? array.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(array[length], length, array)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Gets the first element or first `n` elements of an array. If a callback
     * is provided elements at the beginning of the array are returned as long
     * as the callback returns truey. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias head, take
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback] The function called
     *  per element or the number of elements to return. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the first element(s) of `array`.
     * @example
     *
     * _.first([1, 2, 3]);
     * // => 1
     *
     * _.first([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.first([1, 2, 3], function(num) {
     *   return num < 3;
     * });
     * // => [1, 2]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.first(characters, 'blocked');
     * // => [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]
     *
     * // using "_.where" callback shorthand
     * _.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
     * // => ['barney', 'fred']
     */
    function first(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = -1;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[0] : undefined;
        }
      }
      return slice(array, 0, nativeMin(nativeMax(0, n), length));
    }

    /**
     * Flattens a nested array (the nesting can be to any depth). If `isShallow`
     * is truey, the array will only be flattened a single level. If a callback
     * is provided each element of the array is passed through the callback before
     * flattening. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to flatten.
     * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new flattened array.
     * @example
     *
     * _.flatten([1, [2], [3, [[4]]]]);
     * // => [1, 2, 3, 4];
     *
     * _.flatten([1, [2], [3, [[4]]]], true);
     * // => [1, 2, 3, [[4]]];
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
     *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.flatten(characters, 'pets');
     * // => ['hoppy', 'baby puss', 'dino']
     */
    function flatten(array, isShallow, callback, thisArg) {
      // juggle arguments
      if (typeof isShallow != 'boolean' && isShallow != null) {
        thisArg = callback;
        callback = (typeof isShallow != 'function' && thisArg && thisArg[isShallow] === array) ? null : isShallow;
        isShallow = false;
      }
      if (callback != null) {
        array = map(array, callback, thisArg);
      }
      return baseFlatten(array, isShallow);
    }

    /**
     * Gets the index at which the first occurrence of `value` is found using
     * strict equality for comparisons, i.e. `===`. If the array is already sorted
     * providing `true` for `fromIndex` will run a faster binary search.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
     *  to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value or `-1`.
     * @example
     *
     * _.indexOf([1, 2, 3, 1, 2, 3], 2);
     * // => 1
     *
     * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
     * // => 4
     *
     * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
     * // => 2
     */
    function indexOf(array, value, fromIndex) {
      if (typeof fromIndex == 'number') {
        var length = array ? array.length : 0;
        fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
      } else if (fromIndex) {
        var index = sortedIndex(array, value);
        return array[index] === value ? index : -1;
      }
      return baseIndexOf(array, value, fromIndex);
    }

    /**
     * Gets all but the last element or last `n` elements of an array. If a
     * callback is provided elements at the end of the array are excluded from
     * the result as long as the callback returns truey. The callback is bound
     * to `thisArg` and invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback=1] The function called
     *  per element or the number of elements to exclude. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     *
     * _.initial([1, 2, 3], 2);
     * // => [1]
     *
     * _.initial([1, 2, 3], function(num) {
     *   return num > 1;
     * });
     * // => [1]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.initial(characters, 'blocked');
     * // => [{ 'name': 'barney',  'blocked': false, 'employer': 'slate' }]
     *
     * // using "_.where" callback shorthand
     * _.pluck(_.initial(characters, { 'employer': 'na' }), 'name');
     * // => ['barney', 'fred']
     */
    function initial(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : callback || n;
      }
      return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }

    /**
     * Creates an array of unique values present in all provided arrays using
     * strict equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of shared values.
     * @example
     *
     * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
     * // => [1, 2]
     */
    function intersection() {
      var args = [],
          argsIndex = -1,
          argsLength = arguments.length,
          caches = getArray(),
          indexOf = getIndexOf(),
          trustIndexOf = indexOf === baseIndexOf,
          seen = getArray();

      while (++argsIndex < argsLength) {
        var value = arguments[argsIndex];
        if (isArray(value) || isArguments(value)) {
          args.push(value);
          caches.push(trustIndexOf && value.length >= largeArraySize &&
            createCache(argsIndex ? args[argsIndex] : seen));
        }
      }
      var array = args[0],
          index = -1,
          length = array ? array.length : 0,
          result = [];

      outer:
      while (++index < length) {
        var cache = caches[0];
        value = array[index];

        if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
          argsIndex = argsLength;
          (cache || seen).push(value);
          while (--argsIndex) {
            cache = caches[argsIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
              continue outer;
            }
          }
          result.push(value);
        }
      }
      while (argsLength--) {
        cache = caches[argsLength];
        if (cache) {
          releaseObject(cache);
        }
      }
      releaseArray(caches);
      releaseArray(seen);
      return result;
    }

    /**
     * Gets the last element or last `n` elements of an array. If a callback is
     * provided elements at the end of the array are returned as long as the
     * callback returns truey. The callback is bound to `thisArg` and invoked
     * with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback] The function called
     *  per element or the number of elements to return. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the last element(s) of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     *
     * _.last([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.last([1, 2, 3], function(num) {
     *   return num > 1;
     * });
     * // => [2, 3]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.pluck(_.last(characters, 'blocked'), 'name');
     * // => ['fred', 'pebbles']
     *
     * // using "_.where" callback shorthand
     * _.last(characters, { 'employer': 'na' });
     * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
     */
    function last(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[length - 1] : undefined;
        }
      }
      return slice(array, nativeMax(0, length - n));
    }

    /**
     * Gets the index at which the last occurrence of `value` is found using strict
     * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
     * as the offset from the end of the collection.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value or `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
     * // => 4
     *
     * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var index = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * Removes all provided values from the given array using strict equality for
     * comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to modify.
     * @param {...*} [value] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3, 1, 2, 3];
     * _.pull(array, 2, 3);
     * console.log(array);
     * // => [1, 1]
     */
    function pull(array) {
      var args = arguments,
          argsIndex = 0,
          argsLength = args.length,
          length = array ? array.length : 0;

      while (++argsIndex < argsLength) {
        var index = -1,
            value = args[argsIndex];
        while (++index < length) {
          if (array[index] === value) {
            splice.call(array, index--, 1);
            length--;
          }
        }
      }
      return array;
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to but not including `end`. If `start` is less than `stop` a
     * zero-length range is created unless a negative `step` is specified.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns a new range array.
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    function range(start, end, step) {
      start = +start || 0;
      step = typeof step == 'number' ? step : (+step || 1);

      if (end == null) {
        end = start;
        start = 0;
      }
      // use `Array(length)` so engines like Chakra and V8 avoid slower modes
      // http://youtu.be/XAqIpGU8ZZk#t=17m25s
      var index = -1,
          length = nativeMax(0, ceil((end - start) / (step || 1))),
          result = Array(length);

      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }

    /**
     * Removes all elements from an array that the callback returns truey for
     * and returns an array of removed elements. The callback is bound to `thisArg`
     * and invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to modify.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4, 5, 6];
     * var evens = _.remove(array, function(num) { return num % 2 == 0; });
     *
     * console.log(array);
     * // => [1, 3, 5]
     *
     * console.log(evens);
     * // => [2, 4, 6]
     */
    function remove(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];

      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (callback(value, index, array)) {
          result.push(value);
          splice.call(array, index--, 1);
          length--;
        }
      }
      return result;
    }

    /**
     * The opposite of `_.initial` this method gets all but the first element or
     * first `n` elements of an array. If a callback function is provided elements
     * at the beginning of the array are excluded from the result as long as the
     * callback returns truey. The callback is bound to `thisArg` and invoked
     * with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias drop, tail
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback=1] The function called
     *  per element or the number of elements to exclude. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a slice of `array`.
     * @example
     *
     * _.rest([1, 2, 3]);
     * // => [2, 3]
     *
     * _.rest([1, 2, 3], 2);
     * // => [3]
     *
     * _.rest([1, 2, 3], function(num) {
     *   return num < 3;
     * });
     * // => [3]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': false,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true, 'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.pluck(_.rest(characters, 'blocked'), 'name');
     * // => ['fred', 'pebbles']
     *
     * // using "_.where" callback shorthand
     * _.rest(characters, { 'employer': 'slate' });
     * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
     */
    function rest(array, callback, thisArg) {
      if (typeof callback != 'number' && callback != null) {
        var n = 0,
            index = -1,
            length = array ? array.length : 0;

        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
      }
      return slice(array, n);
    }

    /**
     * Uses a binary search to determine the smallest index at which a value
     * should be inserted into a given sorted array in order to maintain the sort
     * order of the array. If a callback is provided it will be executed for
     * `value` and each element of `array` to compute their sort ranking. The
     * callback is bound to `thisArg` and invoked with one argument; (value).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([20, 30, 50], 40);
     * // => 2
     *
     * // using "_.pluck" callback shorthand
     * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
     * // => 2
     *
     * var dict = {
     *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
     * };
     *
     * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return dict.wordToNumber[word];
     * });
     * // => 2
     *
     * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return this.wordToNumber[word];
     * }, dict);
     * // => 2
     */
    function sortedIndex(array, value, callback, thisArg) {
      var low = 0,
          high = array ? array.length : low;

      // explicitly reference `identity` for better inlining in Firefox
      callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
      value = callback(value);

      while (low < high) {
        var mid = (low + high) >>> 1;
        (callback(array[mid]) < value)
          ? low = mid + 1
          : high = mid;
      }
      return low;
    }

    /**
     * Creates an array of unique values, in order, of the provided arrays using
     * strict equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of combined values.
     * @example
     *
     * _.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
     * // => [1, 2, 3, 5, 4]
     */
    function union() {
      return baseUniq(baseFlatten(arguments, true, true));
    }

    /**
     * Creates a duplicate-value-free version of an array using strict equality
     * for comparisons, i.e. `===`. If the array is sorted, providing
     * `true` for `isSorted` will use a faster algorithm. If a callback is provided
     * each element of `array` is passed through the callback before uniqueness
     * is computed. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias unique
     * @category Arrays
     * @param {Array} array The array to process.
     * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a duplicate-value-free array.
     * @example
     *
     * _.uniq([1, 2, 1, 3, 1]);
     * // => [1, 2, 3]
     *
     * _.uniq([1, 1, 2, 2, 3], true);
     * // => [1, 2, 3]
     *
     * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
     * // => ['A', 'b', 'C']
     *
     * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
     * // => [1, 2.5, 3]
     *
     * // using "_.pluck" callback shorthand
     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniq(array, isSorted, callback, thisArg) {
      // juggle arguments
      if (typeof isSorted != 'boolean' && isSorted != null) {
        thisArg = callback;
        callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
        isSorted = false;
      }
      if (callback != null) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      return baseUniq(array, isSorted, callback);
    }

    /**
     * Creates an array excluding all provided values using strict equality for
     * comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to filter.
     * @param {...*} [value] The values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
     * // => [2, 3, 4]
     */
    function without(array) {
      return baseDifference(array, slice(arguments, 1));
    }

    /**
     * Creates an array that is the symmetric difference of the provided arrays.
     * See http://en.wikipedia.org/wiki/Symmetric_difference.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of values.
     * @example
     *
     * _.xor([1, 2, 3], [5, 2, 1, 4]);
     * // => [3, 5, 4]
     *
     * _.xor([1, 2, 5], [2, 3, 5], [3, 4, 5]);
     * // => [1, 4, 5]
     */
    function xor() {
      var index = -1,
          length = arguments.length;

      while (++index < length) {
        var array = arguments[index];
        if (isArray(array) || isArguments(array)) {
          var result = result
            ? baseUniq(baseDifference(result, array).concat(baseDifference(array, result)))
            : array;
        }
      }
      return result || [];
    }

    /**
     * Creates an array of grouped elements, the first of which contains the first
     * elements of the given arrays, the second of which contains the second
     * elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @alias unzip
     * @category Arrays
     * @param {...Array} [array] Arrays to process.
     * @returns {Array} Returns a new array of grouped elements.
     * @example
     *
     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     */
    function zip() {
      var array = arguments.length > 1 ? arguments : arguments[0],
          index = -1,
          length = array ? max(pluck(array, 'length')) : 0,
          result = Array(length < 0 ? 0 : length);

      while (++index < length) {
        result[index] = pluck(array, index);
      }
      return result;
    }

    /**
     * Creates an object composed from arrays of `keys` and `values`. Provide
     * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
     * or two arrays, one of `keys` and one of corresponding `values`.
     *
     * @static
     * @memberOf _
     * @alias object
     * @category Arrays
     * @param {Array} keys The array of keys.
     * @param {Array} [values=[]] The array of values.
     * @returns {Object} Returns an object composed of the given keys and
     *  corresponding values.
     * @example
     *
     * _.zipObject(['fred', 'barney'], [30, 40]);
     * // => { 'fred': 30, 'barney': 40 }
     */
    function zipObject(keys, values) {
      var index = -1,
          length = keys ? keys.length : 0,
          result = {};

      if (!values && length && !isArray(keys[0])) {
        values = [];
      }
      while (++index < length) {
        var key = keys[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a function that executes `func`, with  the `this` binding and
     * arguments of the created function, only after being called `n` times.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {number} n The number of times the function must be called before
     *  `func` is executed.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('Done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => logs 'Done saving!', after all saves have completed
     */
    function after(n, func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that, when called, invokes `func` with the `this`
     * binding of `thisArg` and prepends any additional `bind` arguments to those
     * provided to the bound function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to bind.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var func = function(greeting) {
     *   return greeting + ' ' + this.name;
     * };
     *
     * func = _.bind(func, { 'name': 'fred' }, 'hi');
     * func();
     * // => 'hi fred'
     */
    function bind(func, thisArg) {
      return arguments.length > 2
        ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
        : createWrapper(func, 1, null, null, thisArg);
    }

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method. Method names may be specified as individual arguments or as arrays
     * of method names. If no method names are provided all the function properties
     * of `object` will be bound.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...string} [methodName] The object method names to
     *  bind, specified as individual method names or arrays of method names.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'onClick': function() { console.log('clicked ' + this.label); }
     * };
     *
     * _.bindAll(view);
     * jQuery('#docs').on('click', view.onClick);
     * // => logs 'clicked docs', when the button is clicked
     */
    function bindAll(object) {
      var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
          index = -1,
          length = funcs.length;

      while (++index < length) {
        var key = funcs[index];
        object[key] = createWrapper(object[key], 1, null, null, object);
      }
      return object;
    }

    /**
     * Creates a function that, when called, invokes the method at `object[key]`
     * and prepends any additional `bindKey` arguments to those provided to the bound
     * function. This method differs from `_.bind` by allowing bound functions to
     * reference methods that will be redefined or don't yet exist.
     * See http://michaux.ca/articles/lazy-function-definition-pattern.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Object} object The object the method belongs to.
     * @param {string} key The key of the method.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'name': 'fred',
     *   'greet': function(greeting) {
     *     return greeting + ' ' + this.name;
     *   }
     * };
     *
     * var func = _.bindKey(object, 'greet', 'hi');
     * func();
     * // => 'hi fred'
     *
     * object.greet = function(greeting) {
     *   return greeting + 'ya ' + this.name + '!';
     * };
     *
     * func();
     * // => 'hiya fred!'
     */
    function bindKey(object, key) {
      return arguments.length > 2
        ? createWrapper(key, 19, slice(arguments, 2), null, object)
        : createWrapper(key, 3, null, null, object);
    }

    /**
     * Creates a function that is the composition of the provided functions,
     * where each function consumes the return value of the function that follows.
     * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
     * Each function is executed with the `this` binding of the composed function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {...Function} [func] Functions to compose.
     * @returns {Function} Returns the new composed function.
     * @example
     *
     * var realNameMap = {
     *   'pebbles': 'penelope'
     * };
     *
     * var format = function(name) {
     *   name = realNameMap[name.toLowerCase()] || name;
     *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
     * };
     *
     * var greet = function(formatted) {
     *   return 'Hiya ' + formatted + '!';
     * };
     *
     * var welcome = _.compose(greet, format);
     * welcome('pebbles');
     * // => 'Hiya Penelope!'
     */
    function compose() {
      var funcs = arguments,
          length = funcs.length;

      while (length--) {
        if (!isFunction(funcs[length])) {
          throw new TypeError;
        }
      }
      return function() {
        var args = arguments,
            length = funcs.length;

        while (length--) {
          args = [funcs[length].apply(this, args)];
        }
        return args[0];
      };
    }

    /**
     * Creates a function which accepts one or more arguments of `func` that when
     * invoked either executes `func` returning its result, if all `func` arguments
     * have been provided, or returns a function that accepts one or more of the
     * remaining `func` arguments, and so on. The arity of `func` can be specified
     * if `func.length` is not sufficient.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var curried = _.curry(function(a, b, c) {
     *   console.log(a + b + c);
     * });
     *
     * curried(1)(2)(3);
     * // => 6
     *
     * curried(1, 2)(3);
     * // => 6
     *
     * curried(1, 2, 3);
     * // => 6
     */
    function curry(func, arity) {
      arity = typeof arity == 'number' ? arity : (+arity || func.length);
      return createWrapper(func, 4, null, null, null, arity);
    }

    /**
     * Creates a function that will delay the execution of `func` until after
     * `wait` milliseconds have elapsed since the last time it was invoked.
     * Provide an options object to indicate that `func` should be invoked on
     * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
     * to the debounced function will return the result of the last `func` call.
     *
     * Note: If `leading` and `trailing` options are `true` `func` will be called
     * on the trailing edge of the timeout only if the the debounced function is
     * invoked more than once during the `wait` timeout.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to debounce.
     * @param {number} wait The number of milliseconds to delay.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
     * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
     * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // avoid costly calculations while the window size is in flux
     * var lazyLayout = _.debounce(calculateLayout, 150);
     * jQuery(window).on('resize', lazyLayout);
     *
     * // execute `sendMail` when the click event is fired, debouncing subsequent calls
     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * });
     *
     * // ensure `batchLog` is executed once after 1 second of debounced calls
     * var source = new EventSource('/stream');
     * source.addEventListener('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }, false);
     */
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      wait = nativeMax(0, wait) || 0;
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = options.leading;
        maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      var delayed = function() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0) {
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          var isCalled = trailingCall;
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = null;
            }
          }
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      };

      var maxDelayed = function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (trailing || (maxWait !== wait)) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
        }
      };

      return function() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);

        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0;

          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          }
          else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        }
        else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
        return result;
      };
    }

    /**
     * Defers executing the `func` function until the current call stack has cleared.
     * Additional arguments will be provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to defer.
     * @param {...*} [arg] Arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) { console.log(text); }, 'deferred');
     * // logs 'deferred' after one or more milliseconds
     */
    function defer(func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 1);
      return setTimeout(function() { func.apply(undefined, args); }, 1);
    }

    /**
     * Executes the `func` function after `wait` milliseconds. Additional arguments
     * will be provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay execution.
     * @param {...*} [arg] Arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) { console.log(text); }, 1000, 'later');
     * // => logs 'later' after one second
     */
    function delay(func, wait) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 2);
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided it will be used to determine the cache key for storing the result
     * based on the arguments provided to the memoized function. By default, the
     * first argument provided to the memoized function is used as the cache key.
     * The `func` is executed with the `this` binding of the memoized function.
     * The result cache is exposed as the `cache` property on the memoized function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] A function used to resolve the cache key.
     * @returns {Function} Returns the new memoizing function.
     * @example
     *
     * var fibonacci = _.memoize(function(n) {
     *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
     * });
     *
     * fibonacci(9)
     * // => 34
     *
     * var data = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
     *
     * // modifying the result cache
     * var get = _.memoize(function(name) { return data[name]; }, _.identity);
     * get('pebbles');
     * // => { 'name': 'pebbles', 'age': 1 }
     *
     * get.cache.pebbles.name = 'penelope';
     * get('pebbles');
     * // => { 'name': 'penelope', 'age': 1 }
     */
    function memoize(func, resolver) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var memoized = function() {
        var cache = memoized.cache,
            key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];

        return hasOwnProperty.call(cache, key)
          ? cache[key]
          : (cache[key] = func.apply(this, arguments));
      }
      memoized.cache = {};
      return memoized;
    }

    /**
     * Creates a function that is restricted to execute `func` once. Repeat calls to
     * the function will return the value of the first call. The `func` is executed
     * with the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` executes `createApplication` once
     */
    function once(func) {
      var ran,
          result;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (ran) {
          return result;
        }
        ran = true;
        result = func.apply(this, arguments);

        // clear the `func` variable so the function may be garbage collected
        func = null;
        return result;
      };
    }

    /**
     * Creates a function that, when called, invokes `func` with any additional
     * `partial` arguments prepended to those provided to the new function. This
     * method is similar to `_.bind` except it does **not** alter the `this` binding.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) { return greeting + ' ' + name; };
     * var hi = _.partial(greet, 'hi');
     * hi('fred');
     * // => 'hi fred'
     */
    function partial(func) {
      return createWrapper(func, 16, slice(arguments, 1));
    }

    /**
     * This method is like `_.partial` except that `partial` arguments are
     * appended to those provided to the new function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var defaultsDeep = _.partialRight(_.merge, _.defaults);
     *
     * var options = {
     *   'variable': 'data',
     *   'imports': { 'jq': $ }
     * };
     *
     * defaultsDeep(options, _.templateSettings);
     *
     * options.variable
     * // => 'data'
     *
     * options.imports
     * // => { '_': _, 'jq': $ }
     */
    function partialRight(func) {
      return createWrapper(func, 32, null, slice(arguments, 1));
    }

    /**
     * Creates a function that, when executed, will only call the `func` function
     * at most once per every `wait` milliseconds. Provide an options object to
     * indicate that `func` should be invoked on the leading and/or trailing edge
     * of the `wait` timeout. Subsequent calls to the throttled function will
     * return the result of the last `func` call.
     *
     * Note: If `leading` and `trailing` options are `true` `func` will be called
     * on the trailing edge of the timeout only if the the throttled function is
     * invoked more than once during the `wait` timeout.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to throttle.
     * @param {number} wait The number of milliseconds to throttle executions to.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // avoid excessively updating the position while scrolling
     * var throttled = _.throttle(updatePosition, 100);
     * jQuery(window).on('scroll', throttled);
     *
     * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? options.leading : leading;
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      debounceOptions.leading = leading;
      debounceOptions.maxWait = wait;
      debounceOptions.trailing = trailing;

      return debounce(func, wait, debounceOptions);
    }

    /**
     * Creates a function that provides `value` to the wrapper function as its
     * first argument. Additional arguments provided to the function are appended
     * to those provided to the wrapper function. The wrapper is executed with
     * the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {*} value The value to wrap.
     * @param {Function} wrapper The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('Fred, Wilma, & Pebbles');
     * // => '<p>Fred, Wilma, &amp; Pebbles</p>'
     */
    function wrap(value, wrapper) {
      return createWrapper(wrapper, 16, [value]);
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var object = { 'name': 'fred' };
     * var getter = _.constant(object);
     * getter() === object;
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Produces a callback bound to an optional `thisArg`. If `func` is a property
     * name the created callback will return the property value for a given element.
     * If `func` is an object the created callback will return `true` for elements
     * that contain the equivalent object properties, otherwise it will return `false`.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} [func=identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of the created callback.
     * @param {number} [argCount] The number of arguments the callback accepts.
     * @returns {Function} Returns a callback function.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // wrap to create custom callback shorthands
     * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
     *   return !match ? func(callback, thisArg) : function(object) {
     *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
     *   };
     * });
     *
     * _.filter(characters, 'age__gt38');
     * // => [{ 'name': 'fred', 'age': 40 }]
     */
    function createCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (func == null || type == 'function') {
        return baseCreateCallback(func, thisArg, argCount);
      }
      // handle "_.pluck" style callback shorthands
      if (type != 'object') {
        return property(func);
      }
      var props = keys(func),
          key = props[0],
          a = func[key];

      // handle "_.where" style callback shorthands
      if (props.length == 1 && a === a && !isObject(a)) {
        // fast path the common case of providing an object with a single
        // property containing a primitive value
        return function(object) {
          var b = object[key];
          return a === b && (a !== 0 || (1 / a == 1 / b));
        };
      }
      return function(object) {
        var length = props.length,
            result = false;

        while (length--) {
          if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
            break;
          }
        }
        return result;
      };
    }

    /**
     * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
     * corresponding HTML entities.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} string The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('Fred, Wilma, & Pebbles');
     * // => 'Fred, Wilma, &amp; Pebbles'
     */
    function escape(string) {
      return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
    }

    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'name': 'fred' };
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Adds function properties of a source object to the destination object.
     * If `object` is a function methods will be added to its prototype as well.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Function|Object} [object=lodash] object The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.chain=true] Specify whether the functions added are chainable.
     * @example
     *
     * function capitalize(string) {
     *   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
     * }
     *
     * _.mixin({ 'capitalize': capitalize });
     * _.capitalize('fred');
     * // => 'Fred'
     *
     * _('fred').capitalize().value();
     * // => 'Fred'
     *
     * _.mixin({ 'capitalize': capitalize }, { 'chain': false });
     * _('fred').capitalize();
     * // => 'Fred'
     */
    function mixin(object, source, options) {
      var chain = true,
          methodNames = source && functions(source);

      if (!source || (!options && !methodNames.length)) {
        if (options == null) {
          options = source;
        }
        ctor = lodashWrapper;
        source = object;
        object = lodash;
        methodNames = functions(source);
      }
      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      var ctor = object,
          isFunc = isFunction(ctor);

      forEach(methodNames, function(methodName) {
        var func = object[methodName] = source[methodName];
        if (isFunc) {
          ctor.prototype[methodName] = function() {
            var chainAll = this.__chain__,
                value = this.__wrapped__,
                args = [value];

            push.apply(args, arguments);
            var result = func.apply(object, args);
            if (chain || chainAll) {
              if (value === result && isObject(result)) {
                return this;
              }
              result = new ctor(result);
              result.__chain__ = chainAll;
            }
            return result;
          };
        }
      });
    }

    /**
     * Reverts the '_' variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      context._ = oldDash;
      return this;
    }

    /**
     * A no-operation function.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @example
     *
     * var object = { 'name': 'fred' };
     * _.noop(object) === undefined;
     * // => true
     */
    function noop() {
      // no operation performed
    }

    /**
     * Gets the number of milliseconds that have elapsed since the Unix epoch
     * (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @example
     *
     * var stamp = _.now();
     * _.defer(function() { console.log(_.now() - stamp); });
     * // => logs the number of milliseconds it took for the deferred function to be called
     */
    var now = isNative(now = Date.now) && now || function() {
      return new Date().getTime();
    };

    /**
     * Converts the given value into an integer of the specified radix.
     * If `radix` is `undefined` or `0` a `radix` of `10` is used unless the
     * `value` is a hexadecimal, in which case a `radix` of `16` is used.
     *
     * Note: This method avoids differences in native ES3 and ES5 `parseInt`
     * implementations. See http://es5.github.io/#E.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} value The value to parse.
     * @param {number} [radix] The radix used to interpret the value to parse.
     * @returns {number} Returns the new integer value.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     */
    var parseInt = nativeParseInt(whitespace + '08') == 8 ? nativeParseInt : function(value, radix) {
      // Firefox < 21 and Opera < 15 follow the ES3 specified implementation of `parseInt`
      return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, '') : value, radix || 0);
    };

    /**
     * Creates a "_.pluck" style function, which returns the `key` value of a
     * given object.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} key The name of the property to retrieve.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var characters = [
     *   { 'name': 'fred',   'age': 40 },
     *   { 'name': 'barney', 'age': 36 }
     * ];
     *
     * var getName = _.property('name');
     *
     * _.map(characters, getName);
     * // => ['barney', 'fred']
     *
     * _.sortBy(characters, getName);
     * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
     */
    function property(key) {
      return function(object) {
        return object[key];
      };
    }

    /**
     * Produces a random number between `min` and `max` (inclusive). If only one
     * argument is provided a number between `0` and the given number will be
     * returned. If `floating` is truey or either `min` or `max` are floats a
     * floating-point number will be returned instead of an integer.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {number} [min=0] The minimum possible value.
     * @param {number} [max=1] The maximum possible value.
     * @param {boolean} [floating=false] Specify returning a floating-point number.
     * @returns {number} Returns a random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(min, max, floating) {
      var noMin = min == null,
          noMax = max == null;

      if (floating == null) {
        if (typeof min == 'boolean' && noMax) {
          floating = min;
          min = 1;
        }
        else if (!noMax && typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand +'').length - 1)))), max);
      }
      return baseRandom(min, max);
    }

    /**
     * Resolves the value of property `key` on `object`. If `key` is a function
     * it will be invoked with the `this` binding of `object` and its result returned,
     * else the property value is returned. If `object` is falsey then `undefined`
     * is returned.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Object} object The object to inspect.
     * @param {string} key The name of the property to resolve.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = {
     *   'cheese': 'crumpets',
     *   'stuff': function() {
     *     return 'nonsense';
     *   }
     * };
     *
     * _.result(object, 'cheese');
     * // => 'crumpets'
     *
     * _.result(object, 'stuff');
     * // => 'nonsense'
     */
    function result(object, key) {
      if (object) {
        var value = object[key];
        return isFunction(value) ? object[key]() : value;
      }
    }

    /**
     * A micro-templating method that handles arbitrary delimiters, preserves
     * whitespace, and correctly escapes quotes within interpolated code.
     *
     * Note: In the development build, `_.template` utilizes sourceURLs for easier
     * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
     *
     * For more information on precompiling templates see:
     * http://lodash.com/custom-builds
     *
     * For more information on Chrome extension sandboxes see:
     * http://developer.chrome.com/stable/extensions/sandboxingEval.html
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} text The template text.
     * @param {Object} data The data object used to populate the text.
     * @param {Object} [options] The options object.
     * @param {RegExp} [options.escape] The "escape" delimiter.
     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
     * @param {Object} [options.imports] An object to import into the template as local variables.
     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
     * @param {string} [sourceURL] The sourceURL of the template's compiled source.
     * @param {string} [variable] The data object variable name.
     * @returns {Function|string} Returns a compiled function when no `data` object
     *  is given, else it returns the interpolated text.
     * @example
     *
     * // using the "interpolate" delimiter to create a compiled template
     * var compiled = _.template('hello <%= name %>');
     * compiled({ 'name': 'fred' });
     * // => 'hello fred'
     *
     * // using the "escape" delimiter to escape HTML in data property values
     * _.template('<b><%- value %></b>', { 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // using the "evaluate" delimiter to generate HTML
     * var list = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
     * _.template(list, { 'people': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
     * _.template('hello ${ name }', { 'name': 'pebbles' });
     * // => 'hello pebbles'
     *
     * // using the internal `print` function in "evaluate" delimiters
     * _.template('<% print("hello " + name); %>!', { 'name': 'barney' });
     * // => 'hello barney!'
     *
     * // using a custom template delimiters
     * _.templateSettings = {
     *   'interpolate': /{{([\s\S]+?)}}/g
     * };
     *
     * _.template('hello {{ name }}!', { 'name': 'mustache' });
     * // => 'hello mustache!'
     *
     * // using the `imports` option to import jQuery
     * var list = '<% jq.each(people, function(name) { %><li><%- name %></li><% }); %>';
     * _.template(list, { 'people': ['fred', 'barney'] }, { 'imports': { 'jq': jQuery } });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the `sourceURL` option to specify a custom sourceURL for the template
     * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
     *
     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
     * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     *   var __t, __p = '', __e = _.escape;
     *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
     *   return __p;
     * }
     *
     * // using the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and a stack trace
     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(text, data, options) {
      // based on John Resig's `tmpl` implementation
      // http://ejohn.org/blog/javascript-micro-templating/
      // and Laura Doktorova's doT.js
      // https://github.com/olado/doT
      var settings = lodash.templateSettings;
      text = String(text || '');

      // avoid missing dependencies when `iteratorTemplate` is not defined
      options = defaults({}, options, settings);

      var imports = defaults({}, options.imports, settings.imports),
          importsKeys = keys(imports),
          importsValues = values(imports);

      var isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // compile the regexp to match each delimiter
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // escape characters that cannot be included in string literals
        source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // replace delimiters with snippets
        if (escapeValue) {
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // the JS engine embedded in Adobe products requires returning the `match`
        // string in order to produce the correct `offset` value
        return match;
      });

      source += "';\n";

      // if `variable` is not specified, wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain
      var variable = options.variable,
          hasVariable = variable;

      if (!hasVariable) {
        variable = 'obj';
        source = 'with (' + variable + ') {\n' + source + '\n}\n';
      }
      // cleanup code by stripping empty strings
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // frame code as the function body
      source = 'function(' + variable + ') {\n' +
        (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
        "var __t, __p = '', __e = _.escape" +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      // Use a sourceURL for easier debugging.
      // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
      var sourceURL = '\n/*\n//# sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';

      try {
        var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
      } catch(e) {
        e.source = source;
        throw e;
      }
      if (data) {
        return result(data);
      }
      // provide the compiled function's source by its `toString` method, in
      // supported environments, or the `source` property as a convenience for
      // inlining compiled templates during the build process
      result.source = source;
      return result;
    }

    /**
     * Executes the callback `n` times, returning an array of the results
     * of each callback execution. The callback is bound to `thisArg` and invoked
     * with one argument; (index).
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {number} n The number of times to execute the callback.
     * @param {Function} callback The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns an array of the results of each `callback` execution.
     * @example
     *
     * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
     * // => [3, 6, 4]
     *
     * _.times(3, function(n) { mage.castSpell(n); });
     * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
     *
     * _.times(3, function(n) { this.cast(n); }, mage);
     * // => also calls `mage.castSpell(n)` three times
     */
    function times(n, callback, thisArg) {
      n = (n = +n) > -1 ? n : 0;
      var index = -1,
          result = Array(n);

      callback = baseCreateCallback(callback, thisArg, 1);
      while (++index < n) {
        result[index] = callback(index);
      }
      return result;
    }

    /**
     * The inverse of `_.escape` this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
     * corresponding characters.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} string The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('Fred, Barney &amp; Pebbles');
     * // => 'Fred, Barney & Pebbles'
     */
    function unescape(string) {
      return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
    }

    /**
     * Generates a unique ID. If `prefix` is provided the ID will be appended to it.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} [prefix] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return String(prefix == null ? '' : prefix) + id;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object that wraps the given value with explicit
     * method chaining enabled.
     *
     * @static
     * @memberOf _
     * @category Chaining
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36 },
     *   { 'name': 'fred',    'age': 40 },
     *   { 'name': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _.chain(characters)
     *     .sortBy('age')
     *     .map(function(chr) { return chr.name + ' is ' + chr.age; })
     *     .first()
     *     .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      value = new lodashWrapper(value);
      value.__chain__ = true;
      return value;
    }

    /**
     * Invokes `interceptor` with the `value` as the first argument and then
     * returns `value`. The purpose of this method is to "tap into" a method
     * chain in order to perform operations on intermediate results within
     * the chain.
     *
     * @static
     * @memberOf _
     * @category Chaining
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3, 4])
     *  .tap(function(array) { array.pop(); })
     *  .reverse()
     *  .value();
     * // => [3, 2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * Enables explicit method chaining on the wrapper object.
     *
     * @name chain
     * @memberOf _
     * @category Chaining
     * @returns {*} Returns the wrapper object.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // without explicit chaining
     * _(characters).first();
     * // => { 'name': 'barney', 'age': 36 }
     *
     * // with explicit chaining
     * _(characters).chain()
     *   .first()
     *   .pick('age')
     *   .value();
     * // => { 'age': 36 }
     */
    function wrapperChain() {
      this.__chain__ = true;
      return this;
    }

    /**
     * Produces the `toString` result of the wrapped value.
     *
     * @name toString
     * @memberOf _
     * @category Chaining
     * @returns {string} Returns the string result.
     * @example
     *
     * _([1, 2, 3]).toString();
     * // => '1,2,3'
     */
    function wrapperToString() {
      return String(this.__wrapped__);
    }

    /**
     * Extracts the wrapped value.
     *
     * @name valueOf
     * @memberOf _
     * @alias value
     * @category Chaining
     * @returns {*} Returns the wrapped value.
     * @example
     *
     * _([1, 2, 3]).valueOf();
     * // => [1, 2, 3]
     */
    function wrapperValueOf() {
      return this.__wrapped__;
    }

    /*--------------------------------------------------------------------------*/

    // add functions that return wrapped values when chaining
    lodash.after = after;
    lodash.assign = assign;
    lodash.at = at;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.chain = chain;
    lodash.compact = compact;
    lodash.compose = compose;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.createCallback = createCallback;
    lodash.curry = curry;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.map = map;
    lodash.mapValues = mapValues;
    lodash.max = max;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.min = min;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.pull = pull;
    lodash.range = range;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.shuffle = shuffle;
    lodash.sortBy = sortBy;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.values = values;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;

    // add aliases
    lodash.collect = map;
    lodash.drop = rest;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;
    lodash.unzip = zip;

    // add functions to `lodash.prototype`
    mixin(lodash);

    /*--------------------------------------------------------------------------*/

    // add functions that return unwrapped values when chaining
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.contains = contains;
    lodash.escape = escape;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.has = has;
    lodash.identity = identity;
    lodash.indexOf = indexOf;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isNaN = isNaN;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isUndefined = isUndefined;
    lodash.lastIndexOf = lastIndexOf;
    lodash.mixin = mixin;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.result = result;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.template = template;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;

    // add aliases
    lodash.all = every;
    lodash.any = some;
    lodash.detect = find;
    lodash.findWhere = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.include = contains;
    lodash.inject = reduce;

    mixin(function() {
      var source = {}
      forOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }(), false);

    /*--------------------------------------------------------------------------*/

    // add functions capable of returning wrapped and unwrapped values when chaining
    lodash.first = first;
    lodash.last = last;
    lodash.sample = sample;

    // add aliases
    lodash.take = first;
    lodash.head = first;

    forOwn(lodash, function(func, methodName) {
      var callbackable = methodName !== 'sample';
      if (!lodash.prototype[methodName]) {
        lodash.prototype[methodName]= function(n, guard) {
          var chainAll = this.__chain__,
              result = func(this.__wrapped__, n, guard);

          return !chainAll && (n == null || (guard && !(callbackable && typeof n == 'function')))
            ? result
            : new lodashWrapper(result, chainAll);
        };
      }
    });

    /*--------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type string
     */
    lodash.VERSION = '2.4.1';

    // add "Chaining" functions to the wrapper
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.value = wrapperValueOf;
    lodash.prototype.valueOf = wrapperValueOf;

    // add `Array` functions that return unwrapped values
    forEach(['join', 'pop', 'shift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var chainAll = this.__chain__,
            result = func.apply(this.__wrapped__, arguments);

        return chainAll
          ? new lodashWrapper(result, chainAll)
          : result;
      };
    });

    // add `Array` functions that return the existing wrapped value
    forEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        func.apply(this.__wrapped__, arguments);
        return this;
      };
    });

    // add `Array` functions that return new wrapped values
    forEach(['concat', 'slice', 'splice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
      };
    });

    return lodash;
  }

  /*--------------------------------------------------------------------------*/

  // expose Lo-Dash
  var _ = runInContext();

  // some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lo-Dash to the global object even when an AMD loader is present in
    // case Lo-Dash is loaded with a RequireJS shim config.
    // See http://requirejs.org/docs/api.html#config-shim
    root._ = _;

    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module
    define(function() {
      return _;
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports && freeModule) {
    // in Node.js or RingoJS
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    }
    // in Narwhal or Rhino -require
    else {
      freeExports._ = _;
    }
  }
  else {
    // in a browser or Rhino
    root._ = _;
  }
}.call(this));

//     keymaster.js
//     (c) 2011-2013 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.

;(function(global){
  var k,
    _handlers = {},
    _mods = { 16: false, 18: false, 17: false, 91: false },
    _scope = 'all',
    // modifier keys
    _MODIFIERS = {
      '⇧': 16, shift: 16,
      '⌥': 18, alt: 18, option: 18,
      '⌃': 17, ctrl: 17, control: 17,
      '⌘': 91, command: 91
    },
    // special keys
    _MAP = {
      backspace: 8, tab: 9, clear: 12,
      enter: 13, 'return': 13,
      esc: 27, escape: 27, space: 32,
      left: 37, up: 38,
      right: 39, down: 40,
      del: 46, 'delete': 46,
      home: 36, end: 35,
      pageup: 33, pagedown: 34,
      ',': 188, '.': 190, '/': 191,
      '`': 192, '-': 189, '=': 187,
      ';': 186, '\'': 222,
      '[': 219, ']': 221, '\\': 220
    },
    code = function(x){
      return _MAP[x] || x.toUpperCase().charCodeAt(0);
    },
    _downKeys = [];

  for(k=1;k<20;k++) _MAP['f'+k] = 111+k;

  // IE doesn't support Array#indexOf, so have a simple replacement
  function index(array, item){
    var i = array.length;
    while(i--) if(array[i]===item) return i;
    return -1;
  }

  // for comparing mods before unassignment
  function compareArray(a1, a2) {
    if (a1.length != a2.length) return false;
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
  }

  var modifierMap = {
      16:'shiftKey',
      18:'altKey',
      17:'ctrlKey',
      91:'metaKey'
  };
  function updateModifierKey(event) {
      for(k in _mods) _mods[k] = event[modifierMap[k]];
  };

  // handle keydown event
  function dispatch(event) {
    var key, handler, k, i, modifiersMatch, scope;
    key = event.keyCode;

    if (index(_downKeys, key) == -1) {
        _downKeys.push(key);
    }

    // if a modifier key, set the key.<modifierkeyname> property to true and return
    if(key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
    if(key in _mods) {
      _mods[key] = true;
      // 'assignKey' from inside this closure is exported to window.key
      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = true;
      return;
    }
    updateModifierKey(event);

    // see if we need to ignore the keypress (filter() can can be overridden)
    // by default ignore key presses if a select, textarea, or input is focused
    if(!assignKey.filter.call(this, event)) return;

    // abort if no potentially matching shortcuts found
    if (!(key in _handlers)) return;

    scope = getScope();

    // for each potential shortcut
    for (i = 0; i < _handlers[key].length; i++) {
      handler = _handlers[key][i];

      // see if it's in the current scope
      if(handler.scope == scope || handler.scope == 'all'){
        // check if modifiers match if any
        modifiersMatch = handler.mods.length > 0;
        for(k in _mods)
          if((!_mods[k] && index(handler.mods, +k) > -1) ||
            (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
        // call the handler and stop the event if neccessary
        if((handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch){
          if(handler.method(event, handler)===false){
            if(event.preventDefault) event.preventDefault();
              else event.returnValue = false;
            if(event.stopPropagation) event.stopPropagation();
            if(event.cancelBubble) event.cancelBubble = true;
          }
        }
      }
    }
  };

  // unset modifier keys on keyup
  function clearModifier(event){
    var key = event.keyCode, k,
        i = index(_downKeys, key);

    // remove key from _downKeys
    if (i >= 0) {
        _downKeys.splice(i, 1);
    }

    if(key == 93 || key == 224) key = 91;
    if(key in _mods) {
      _mods[key] = false;
      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = false;
    }
  };

  function resetModifiers() {
    for(k in _mods) _mods[k] = false;
    for(k in _MODIFIERS) assignKey[k] = false;
  };

  // parse and assign shortcut
  function assignKey(key, scope, method){
    var keys, mods;
    keys = getKeys(key);
    if (method === undefined) {
      method = scope;
      scope = 'all';
    }

    // for each shortcut
    for (var i = 0; i < keys.length; i++) {
      // set modifier keys if any
      mods = [];
      key = keys[i].split('+');
      if (key.length > 1){
        mods = getMods(key);
        key = [key[key.length-1]];
      }
      // convert to keycode and...
      key = key[0]
      key = code(key);
      // ...store handler
      if (!(key in _handlers)) _handlers[key] = [];
      _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
    }
  };

  // unbind all handlers for given key in current scope
  function unbindKey(key, scope) {
    var multipleKeys, keys,
      mods = [],
      i, j, obj;

    multipleKeys = getKeys(key);

    for (j = 0; j < multipleKeys.length; j++) {
      keys = multipleKeys[j].split('+');

      if (keys.length > 1) {
        mods = getMods(keys);
        key = keys[keys.length - 1];
      }

      key = code(key);

      if (scope === undefined) {
        scope = getScope();
      }
      if (!_handlers[key]) {
        return;
      }
      for (i in _handlers[key]) {
        obj = _handlers[key][i];
        // only clear handlers if correct scope and mods match
        if (obj.scope === scope && compareArray(obj.mods, mods)) {
          _handlers[key][i] = {};
        }
      }
    }
  };

  // Returns true if the key with code 'keyCode' is currently down
  // Converts strings into key codes.
  function isPressed(keyCode) {
      if (typeof(keyCode)=='string') {
        keyCode = code(keyCode);
      }
      return index(_downKeys, keyCode) != -1;
  }

  function getPressedKeyCodes() {
      return _downKeys.slice(0);
  }

  function filter(event){
    var tagName = (event.target || event.srcElement).tagName;
    // ignore keypressed in any elements that support keyboard data input
    return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
  }

  // initialize key.<modifier> to false
  for(k in _MODIFIERS) assignKey[k] = false;

  // set current scope (default 'all')
  function setScope(scope){ _scope = scope || 'all' };
  function getScope(){ return _scope || 'all' };

  // delete all handlers for a given scope
  function deleteScope(scope){
    var key, handlers, i;

    for (key in _handlers) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length; ) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);
        else i++;
      }
    }
  };

  // abstract key logic for assign and unassign
  function getKeys(key) {
    var keys;
    key = key.replace(/\s/g, '');
    keys = key.split(',');
    if ((keys[keys.length - 1]) == '') {
      keys[keys.length - 2] += ',';
    }
    return keys;
  }

  // abstract mods logic for assign and unassign
  function getMods(key) {
    var mods = key.slice(0, key.length - 1);
    for (var mi = 0; mi < mods.length; mi++)
    mods[mi] = _MODIFIERS[mods[mi]];
    return mods;
  }

  // cross-browser events
  function addEvent(object, event, method) {
    if (object.addEventListener)
      object.addEventListener(event, method, false);
    else if(object.attachEvent)
      object.attachEvent('on'+event, function(){ method(window.event) });
  };

  // set the handlers globally on document
  addEvent(document, 'keydown', function(event) { dispatch(event) }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
  addEvent(document, 'keyup', clearModifier);

  // reset modifiers to false whenever the window is (re)focused.
  addEvent(window, 'focus', resetModifiers);

  // store previously defined key
  var previousKey = global.key;

  // restore previously defined key and return reference to our key object
  function noConflict() {
    var k = global.key;
    global.key = previousKey;
    return k;
  }

  // set window.key and window.key.set/get/deleteScope, and the default filter
  global.key = assignKey;
  global.key.setScope = setScope;
  global.key.getScope = getScope;
  global.key.deleteScope = deleteScope;
  global.key.filter = filter;
  global.key.isPressed = isPressed;
  global.key.getPressedKeyCodes = getPressedKeyCodes;
  global.key.noConflict = noConflict;
  global.key.unbind = unbindKey;

  if(typeof module !== 'undefined') module.exports = key;

})(this);

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.2
 */

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


(function(_global) {
  "use strict";

  var shim = {};
  if (typeof(exports) === 'undefined') {
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      shim.exports = {};
      define(function() {
        return shim.exports;
      });
    } else {
      // gl-matrix lives in a browser, define its namespaces in global
      shim.exports = typeof(window) !== 'undefined' ? window : _global;
    }
  }
  else {
    // gl-matrix lives in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function(exports) {
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


if(!GLMAT_EPSILON) {
    var GLMAT_EPSILON = 0.000001;
}

if(!GLMAT_ARRAY_TYPE) {
    var GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
}

if(!GLMAT_RANDOM) {
    var GLMAT_RANDOM = Math.random;
}

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    GLMAT_ARRAY_TYPE = type;
}

if(typeof(exports) !== 'undefined') {
    exports.glMatrix = glMatrix;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */

var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
vec2.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec2 = vec2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */

var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
vec3.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    var z = (GLMAT_RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

	return out;
};

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateY = function(out, a, b, c){
	var p = [], r=[];
	//Translate point to the origin
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];

	//perform rotation
	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
	r[1] = p[1];
	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

	//translate to correct position
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];

	return out;
};

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateZ = function(out, a, b, c){
	var p = [], r=[];
	//Translate point to the origin
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];

	//perform rotation
	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
	r[2] = p[2];

	//translate to correct position
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];

	return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec3 = vec3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */

var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
vec4.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = GLMAT_RANDOM();
    out[1] = GLMAT_RANDOM();
    out[2] = GLMAT_RANDOM();
    out[3] = GLMAT_RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec4 = vec4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x2 Matrix
 * @name mat2
 */

var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return null;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) {
    L[2] = a[2]/a[0];
    U[0] = a[0];
    U[1] = a[1];
    U[3] = a[3] - L[2] * U[1];
    return [L, D, U];
};

if(typeof(exports) !== 'undefined') {
    exports.mat2 = mat2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
};

if(typeof(exports) !== 'undefined') {
    exports.mat2d = mat2d;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3x3 Matrix
 * @name mat3
 */

var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};


if(typeof(exports) !== 'undefined') {
    exports.mat3 = mat3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4x4 Matrix
 * @name mat4
 */

var mat4 = {};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < GLMAT_EPSILON) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < GLMAT_EPSILON &&
        Math.abs(eyey - centery) < GLMAT_EPSILON &&
        Math.abs(eyez - centerz) < GLMAT_EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};


if(typeof(exports) !== 'undefined') {
    exports.mat4 = mat4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class Quaternion
 * @name quat
 */

var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[5]-m[7])*fRoot;
        out[1] = (m[6]-m[2])*fRoot;
        out[2] = (m[1]-m[3])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }

    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.quat = quat;
}
;













  })(shim.exports);
})(this);

(function (root, factory) {
    'use strict';

    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.MersenneTwister = factory();
    }
}(this, function () {
    /**
     * A standalone, pure JavaScript implementation of the Mersenne Twister pseudo random number generator. Compatible with
     * Node.js, requirejs and browser environments. Packages are available for npm, Jam and Bower.
     *
     * @module MersenneTwister
     * @author Raphael Pigulla <pigulla@four66.com>
     * @license See the attached LICENSE file.
     * @version 0.1.1
     */

    /*
     * Most comments were stripped from the source. If needed you can still find them in the original C code:
     * http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c
     *
     * The original port to JavaScript, on which this file is based, was done by Sean McCullough. It can be found at:
     * https://gist.github.com/banksean/300494
     */
    'use strict';

    var MAX_INT = 4294967296.0,
        N = 624,
        M = 397,
        UPPER_MASK = 0x80000000,
        LOWER_MASK = 0x7fffffff,
        MATRIX_A = 0x9908b0df;

    /**
     * Instantiates a new Mersenne Twister.
     *
     * @constructor
     * @alias module:MersenneTwister
     * @since 0.1.0
     * @param {number=} seed The initial seed value.
     */
    var MersenneTwister = function (seed) {
        if (typeof seed === 'undefined') {
            seed = new Date().getTime();
        }

        this.mt = new Array(N);
        this.mti = N + 1;

        this.seed(seed);
    };

    /**
     * Initializes the state vector by using one unsigned 32-bit integer "seed", which may be zero.
     *
     * @since 0.1.0
     * @param {number} seed The seed value.
     */
    MersenneTwister.prototype.seed = function (seed) {
        var s;

        this.mt[0] = seed >>> 0;

        for (this.mti = 1; this.mti < N; this.mti++) {
            s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
            this.mt[this.mti] =
                (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253) + this.mti;
            this.mt[this.mti] >>>= 0;
        }
    };

    /**
     * Initializes the state vector by using an array key[] of unsigned 32-bit integers of the specified length. If
     * length is smaller than 624, then each array of 32-bit integers gives distinct initial state vector. This is
     * useful if you want a larger seed space than 32-bit word.
     *
     * @since 0.1.0
     * @param {array} vector The seed vector.
     */
    MersenneTwister.prototype.seedArray = function (vector) {
        var i = 1,
            j = 0,
            k = N > vector.length ? N : vector.length,
            s;

        this.seed(19650218);

        for (; k > 0; k--) {
            s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);

            this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525))) +
                vector[j] + j;
            this.mt[i] >>>= 0;
            i++;
            j++;
            if (i >= N) {
                this.mt[0] = this.mt[N - 1];
                i = 1;
            }
            if (j >= vector.length) {
                j = 0;
            }
        }

        for (k = N - 1; k; k--) {
            s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
            this.mt[i] =
                (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941)) - i;
            this.mt[i] >>>= 0;
            i++;
            if (i >= N) {
                this.mt[0] = this.mt[N - 1];
                i = 1;
            }
        }

        this.mt[0] = 0x80000000;
    };

    /**
     * Generates a random unsigned 32-bit integer.
     *
     * @since 0.1.0
     * @returns {number}
     */
    MersenneTwister.prototype.int = function () {
        var y,
            kk,
            mag01 = new Array(0, MATRIX_A);

        if (this.mti >= N) {
            if (this.mti === N + 1) {
                this.seed(5489);
            }

            for (kk = 0; kk < N - M; kk++) {
                y = (this.mt[kk] & UPPER_MASK) | (this.mt[kk + 1] & LOWER_MASK);
                this.mt[kk] = this.mt[kk + M] ^ (y >>> 1) ^ mag01[y & 1];
            }

            for (; kk < N - 1; kk++) {
                y = (this.mt[kk] & UPPER_MASK) | (this.mt[kk + 1] & LOWER_MASK);
                this.mt[kk] = this.mt[kk + (M - N)] ^ (y >>> 1) ^ mag01[y & 1];
            }

            y = (this.mt[N - 1] & UPPER_MASK) | (this.mt[0] & LOWER_MASK);
            this.mt[N - 1] = this.mt[M - 1] ^ (y >>> 1) ^ mag01[y & 1];
            this.mti = 0;
        }

        y = this.mt[this.mti++];

        y ^= (y >>> 11);
        y ^= (y << 7) & 0x9d2c5680;
        y ^= (y << 15) & 0xefc60000;
        y ^= (y >>> 18);

        return y >>> 0;
    };

    /**
     * Generates a random unsigned 31-bit integer.
     *
     * @since 0.1.0
     * @returns {number}
     */
    MersenneTwister.prototype.int31 = function () {
        return this.int() >>> 1;
    };

    /**
     * Generates a random real in the interval [0;1] with 32-bit resolution.
     *
     * @since 0.1.0
     * @returns {number}
     */
    MersenneTwister.prototype.real = function () {
        return this.int() * (1.0 / (MAX_INT - 1));
    };

    /**
     * Generates a random real in the interval ]0;1[ with 32-bit resolution.
     *
     * @since 0.1.0
     * @returns {number}
     */
    MersenneTwister.prototype.realx = function () {
        return (this.int() + 0.5) * (1.0 / MAX_INT);
    };

    /**
     * Generates a random real in the interval [0;1[ with 32-bit resolution.
     *
     * @since 0.1.0
     * @returns {number}
     */
    MersenneTwister.prototype.rnd = function () {
        return this.int() * (1.0 / MAX_INT);
    };

    /**
     * Generates a random real in the interval [0;1[ with 53-bit resolution.
     *
     * @since 0.1.0
     * @returns {number}
     */
    MersenneTwister.prototype.rndHiRes = function () {
        var a = this.int() >>> 5,
            b = this.int() >>> 6;

        return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
    };

    var instance = new MersenneTwister();

    /**
     * A static version of [rnd]{@link module:MersenneTwister#rnd} on a randomly seeded instance.
     *
     * @static
     * @function random
     * @memberof module:MersenneTwister
     * @returns {number}
     */
    MersenneTwister.random = function () {
        return instance.rnd();
    };

    return MersenneTwister;
}));

/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */

(function(global){
  var module = global.noise = {};

  function Grad(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }

  Grad.prototype.dot2 = function(x, y) {
    return this.x*x + this.y*y;
  };

  Grad.prototype.dot3 = function(x, y, z) {
    return this.x*x + this.y*y + this.z*z;
  };

  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

  var p = [151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  // To remove the need for index wrapping, double the permutation table length
  var perm = new Array(512);
  var gradP = new Array(512);

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  module.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  };

  module.seed(0);

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 2D simplex noise
  module.simplex2 = function(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin)*F2; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var t = (i+j)*G2;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      i1=1; j1=0;
    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      i1=0; j1=1;
    }
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;
    var gi0 = gradP[i+perm[j]];
    var gi1 = gradP[i+i1+perm[j+j1]];
    var gi2 = gradP[i+1+perm[j+1]];
    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot2(x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
  };

  // 3D simplex noise
  module.simplex3 = function(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var k = Math.floor(zin+s);

    var t = (i+j+k)*G3;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    var z0 = zin-k+t;

    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if(x0 >= y0) {
      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;

    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;

    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;
    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

    // Calculate the contribution from the four corners
    var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if(t3<0) {
      n3 = 0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);

  };

  // ##### Perlin noise stuff

  function fade(t) {
    return t*t*t*(t*(t*6-15)+10);
  }

  function lerp(a, b, t) {
    return (1-t)*a + t*b;
  }

  // 2D Perlin Noise
  module.perlin2 = function(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X; y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255;

    // Calculate noise contributions from each of the four corners
    var n00 = gradP[X+perm[Y]].dot2(x, y);
    var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
    var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
    var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);
    // Compute the fade curve value for x
    var u = fade(x);

    // Interpolate the four results
    return lerp(
        lerp(n00, n10, u),
        lerp(n01, n11, u),
       fade(y));
  };

  // 3D Perlin Noise
  module.perlin3 = function(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    // Get relative xyz coordinates of point within that cell
    x = x - X; y = y - Y; z = z - Z;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255; Z = Z & 255;

    // Calculate noise contributions from each of the eight corners
    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

    // Compute the fade curve value for x, y, z
    var u = fade(x);
    var v = fade(y);
    var w = fade(z);

    // Interpolate
    return lerp(
        lerp(
          lerp(n000, n100, u),
          lerp(n001, n101, u), w),
        lerp(
          lerp(n010, n110, u),
          lerp(n011, n111, u), w),
       v);
  };

})(this);

var GTW = window.GTW || {};
// todo: remove and move all images
GTW.resource_url = function(path) { return 'static/map/' + path; };

(function() {

    // constants
    var PI = Math.PI;
    var HALF_PI = PI / 2;
    var TWO_PI = 2 * PI;

    // math functions
    function deg2rad(deg) {
        return Math.PI * deg / 180;
    }

    function rad2deg(rad) {
        return 180 * rad / Math.PI;
    }

    function lerp(a, b, x) {
        return (1 - x) * a + x * b;
    }

    function clamp(x, a, b) {
        if (x < a)
            return a;
        else if (x > b)
            return b;
        else
            return x;
    }

    function smoothstep(x) {
        return 3 * x * x - 2 * x * x * x;
    }

    function modulo(x, y) {
        return ((x % y) + y) % y;
    }

    function sign(x) {
        if (x < 0)
            return -1;
        else if (x > 0)
            return 1;
        else
            return 0;
    }

    // utility functions
    function toggleProperty(obj, name) {
        return obj[name] = !obj[name];
    }

    function hashDJB2(str) {
        var h = 5381;
        for (var i = str.length-1; i >=0; --i)
            h = ((h << 5) + h) + str.charCodeAt(i);
        return h;
    }

    function makeUuid(delim) {
        function S4(count) {
            count = count || 1;
            var result = '';
            while (count--)
                result += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            return result;
        }

        if (_.isUndefined(delim))
            delim = '-';

        return _.map([ 2, 1, 1, 1, 3 ], function(n) { return S4(n) }).join(delim);
    }


    // random numbers
    var _gaussNext = 0;
    var random = Math.random;

    var Random = {
        // < n
        cardinal: function(n) {
            return Math.floor(n * random());
        },

        // [lb, ub)
        integer: function(lb, ub) {
            return lb + Math.floor((ub - lb) * random());
        },

        // [lb, ub]
        uniform: function(lb, ub) {
            return lerp(lb, ub, Math.random());
        },


        gauss: function(mu, sigma) {
            var z = _gaussNext;
            _gaussNext = 0;
            if (z === 0) {
                var x2pi = TWO_PI * random();
                var g2rad = Math.sqrt(-2 * Math.log(1 - random()));
                z = Math.cos(x2pi) * g2rad;
                _gaussNext = Math.sin(x2pi) * g2rad;
            }
            return mu + z*sigma
        },

        choose: function(arr) {
            var i = Random.cardinal(arr.length);
            return arr[i];
        },

        uniformVec3: function(vec, scale) {
            vec[0] = scale * 2*(random() - 0.5);
            vec[1] = scale * 2*(random() - 0.5);
            vec[2] = scale * 2*(random() - 0.5);
            return vec;
        },

        unitVec3: function(vec) {
            Random.uniformVec3(vec, 1);
            vec3.normalize(vec, vec);
            return vec;
        },

        shuffle: function(arr) {
            for (var i = arr.length-1; i >= 0; --i) {
                var j = Random.cardinal(i + 1);
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        },

        distribute: function(a, b, exp) {
            return lerp(a, b, Math.pow(random(), exp));
        },
    };

    function miniball(points, numIters) {
        var numIters = numIters || 1;

        var indices = [];
        for (var i = 0; i < points.length; ++i)
            indices.push(i);

        var ballCenter = vec3.create();
        var bestCenter = vec3.create();
        var ballRadius = 0;
        var bestRadius = Infinity;

        var q = vec3.create();
        for (var iter = 0; iter < numIters; ++iter) {
            if (iter > 0)
                Random.shuffle(indices);

            for (var i = 0; i < indices.length; ++i) {
                var index = indices[i];
                var p = points[index];

                if (i === 0) {
                    vec3.copy(ballCenter, p);
                    ballRadius = 0;
                    continue;
                }

                if (vec3.dist(ballCenter, p) < ballRadius)
                    continue;

                vec3.sub(q, ballCenter, p);
                vec3.normalize(q, q);
                vec3.scale(q, q, ballRadius);
                vec3.add(q, q, ballCenter);
                vec3.lerp(ballCenter, p, q, 0.5);
                ballRadius = 0.5 * vec3.dist(p, q);
                if (ballRadius > bestRadius)
                    break;
          }

          if (ballRadius && ballRadius < bestRadius) {
            vec3.copy(bestCenter, ballCenter);
            bestRadius = ballRadius;
          }
        }

        return {
          center: bestCenter,
          radius: bestRadius
        };
    }

    // base64 functions
    var Base64 = {
        decode: function(src, type) {
            var raw = atob(src);
            var len = raw.length;
            var buf = new ArrayBuffer(len);
            var dst = new Uint8Array(buf);
            for (var i = 0; i < len; ++i) 
                dst[i] = raw.charCodeAt(i);

            return type ? new type(buf) : buf;
        },

        encode: function(src) {
            var src = new Uint8Array(src.buffer, src.byteOffset, src.byteLength);
            var len = src.length;
            var dst = '';
            for (var i = 0; i < len; ++i)
                dst += String.fromCharCode(src[i]);

            return btoa(dst);
        },
    };

    // precision timing
    var timeNow;
    if (this.performance && performance.now) {
        timeNow = function() {
            return 0.001*performance.now();
        };
    }
    else 
    {
        timeNow = function() {
            return 0.001*Date.now();
        };
    }

    function forEachLine(text, callback) {
        var sp = 0;
        var lineno = 0;
        while (sp < text.length) {
            var ep = text.indexOf('\n', sp);
            if (ep == -1)
                ep = text.length;

            var line = text.substr(sp, ep - sp);
            sp = ep + 1;

            callback(line, lineno++);
        }
    }

    // Firefox layerX / WebKit offsetX
    function getMouseEventOffset(e) {
        if (_.isUndefined(e.offsetX))
            return [e.layerX, e.layerY];
        else
            return [e.offsetX, e.offsetY];
    }

    // let's pollute some global namespace
    _.extend(this, {
        PI: PI,
        HALF_PI: HALF_PI,
        TWO_PI: TWO_PI,
        deg2rad: deg2rad,
        rad2deg: rad2deg,
        lerp: lerp,
        clamp: clamp,
        smoothstep: smoothstep,
        modulo: modulo,
        sign: sign,
        toggleProperty: toggleProperty,
        hashDJB2: hashDJB2,
        makeUuid: makeUuid,
        Random: Random,
        miniball: miniball,
        Base64: Base64,
        timeNow: timeNow,
        forEachLine: forEachLine,
        getMouseEventOffset: getMouseEventOffset,
    });

    // requestAnimationFrame shim
    if (!this.requestAnimationFrame) {
        this.requestAnimationFrame = (
            this.webkitRequestAnimationFrame ||
            this.mozRequestAnimationFrame ||
            this.msRequestAnimationFrame ||
            function(callback) {
                setTimeout(callback, 1000/60);
            });
    }

    // saveFileAs (might be webkit only...)
    this.saveFileAs = function(data, filename, type) {
        type = type || 'application/octet-binary';
        var blob = new Blob([ data ], { type: type });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.click();
        URL.revokeObjectURL(blob);
    };

}).call(window);


// some extra functions for gl-matrix
vec2.load = function(out, source, offset) {
    out[0] = source[offset + 0];
    out[1] = source[offset + 1];
};

vec2.save = function(vec, source, offset) {
    source[offset + 0] = vec[0];
    source[offset + 1] = vec[1];
};

vec3.load = function(out, source, offset) {
    out[0] = source[offset + 0];
    out[1] = source[offset + 1];
    out[2] = source[offset + 2];
};

vec3.save = function(vec, source, offset) {
    source[offset + 0] = vec[0];
    source[offset + 1] = vec[1];
    source[offset + 2] = vec[2];
};

vec4.load = function(out, source, offset) {
    out[0] = source[offset + 0];
    out[1] = source[offset + 1];
    out[2] = source[offset + 2];
    out[3] = source[offset + 3];
};

vec4.save = function(vec, source, offset) {
    source[offset + 0] = vec[0];
    source[offset + 1] = vec[1];
    source[offset + 2] = vec[2];
    source[offset + 3] = vec[3];
};

vec2.perp = function(out, vec) {
    var tmp = vec[0];
    out[0] = -vec[1];
    out[1] = tmp;
};

mat4.lerp = function(out, a, b, f) {
    for (var i = 0; i < 16; ++i) {
        out[i] = (1-f)*a[i] + f*b[i];
    }
    return out;
};

function make_event_emitter(obj) {
    function get_listeners(obj) {
        return obj._listeners || (obj._listeners = {});
    }

    _.assign(obj, {
        on: function(event_name, callback) {
            var ll = get_listeners(this);
            var l = ll[event_name];
            if (!l) l = ll[event_name] = [];
            l.push(callback);
        },

        off: function(event_name, callback) {
            var ll = get_listeners(this);
            var l = ll[event_name];
            if (l) ll[event_name] = _.without(l, callback);
        },

        emit: function(event_name) {
            var ll = get_listeners(this);
            var l = ll[event_name];
            if (l) {
                var args = Array.prototype.slice.call(arguments, 1);
                l.forEach(function(callback) { callback.apply(null, args) });
            }
        }
    });
}

// a little WebGL sugar
var webgl = (function() {

    // keeps track of array flag of the vertex attributes
    var attribArrayManager = {
        enabledMask: 0,
        maxEnabledIndex: -1,

        disableAll: function() {
            for (var index = 0; index <= this.maxEnabledIndex; ++index) {
                var mask = 1 << index;
                if (mask & this.enabledMask)
                    gl.disableVertexAttribArray(index);
            }

            this.enabledMask = 0;
            this.maxEnabledIndex = -1;
        },

        enable: function(index) {
            var mask = 1 << index;
            if (!(mask & this.enabledMask)) {
                gl.enableVertexAttribArray(index);
                this.enabledMask |= mask;
                this.maxEnabledIndex = Math.max(this.maxEnabledIndex, index);
            }
        },

        disable: function(index) {
            var mask = 1 << index;
            if (mask & this.enabledMask) {
                gl.disableVertexAttribArray(index);
                this.enabledMask &= ~mask;
                // XXX don't bother changing maxEnabledIndex
            }
        },
    };

    // program class
    function Program(name) {
        this.name = name;
        this.program = null;

        this.attribs = {};
        this.uniforms = {};
    }

    Program.prototype.setProgram = function(program) {
        this.program = program;

        var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < numAttribs; ++i) {
            var attrib = gl.getActiveAttrib(program, i);
            this.attribs[attrib.name] = {
                index: gl.getAttribLocation(program, attrib.name),
                name: attrib.name,
                size: attrib.size,
                type: attrib.type,
            };
        }

        var nextTexUnit = 0;
        function assignTexUnit(uniform) {
            if (uniform.type == gl.SAMPLER_2D || uniform.type == gl.SAMPLER_CUBE) {
                var unit = nextTexUnit;
                nextTexUnit += uniform.size;
                return unit;
            }

            return -1;
        }

        var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < numUniforms; ++i) {
            var uniform = gl.getActiveUniform(program, i);
            this.uniforms[uniform.name] = {
                location: gl.getUniformLocation(program, uniform.name),
                name: uniform.name,
                size: uniform.size,
                type: uniform.type,
                texUnit: assignTexUnit(uniform),
            };
        }
    };

    Program.prototype.use = function() {
        gl.useProgram(this.program);
        attribArrayManager.disableAll();
        return this;
    };

    Program.prototype.getUniformLocation = function(name) {
        var uniform = this.uniforms[name];
        //console.assert(uniform, 'missing uniform: '+name);
        return uniform ? uniform.location : null;
    };

    Program.prototype.getAttribIndex = function(name) {
        var attrib = this.attribs[name];
        //console.assert(uniform, 'missing attrib: '+name);
        return attrib ? attrib.index : -1;
    };

    Program.prototype.uniform1i = function(name, x) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform1i(location, x);
    };

    Program.prototype.uniform1f = function(name, x) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform1f(location, x);
    };

    Program.prototype.uniform2f = function(name, x, y) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform2f(location, x, y);
    };

    Program.prototype.uniform3f = function(name, x, y, z) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform3f(location, x, y, z);
    };

    Program.prototype.uniform4f = function(name, x, y, z, w) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform4f(location, x, y, z, w);
    };

    Program.prototype.uniform1fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform1fv(location, v);
    };

    Program.prototype.uniform2fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform2fv(location, v);
    };

    Program.prototype.uniform3fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform3fv(location, v);
    };

    Program.prototype.uniform4fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform4fv(location, v);
    };

    Program.prototype.uniformMatrix3fv = function(name, data, transpose) {
        var location = this.getUniformLocation(name);
        if (location) {
            transpose = transpose || false;
            gl.uniformMatrix3fv(location, transpose, data);
        }
    };

    Program.prototype.uniformMatrix4fv = function(name, data, transpose) {
        var location = this.getUniformLocation(name);
        if (location) {
            transpose = transpose || false;
            gl.uniformMatrix4fv(location, transpose, data);
        }
    };

    Program.prototype.uniformSampler = function(name, target, texture) {
        var uniform = this.uniforms[name];
        if (uniform) {
            gl.activeTexture(gl.TEXTURE0 + uniform.texUnit);
            gl.bindTexture(target, texture);
            gl.uniform1i(uniform.location, uniform.texUnit);
        }
    };

    Program.prototype.uniformSampler2D = function(name, texture) {
        this.uniformSampler(name, gl.TEXTURE_2D, texture);
    };

    Program.prototype.uniformSamplerCube = function(name, texture) {
        this.uniformSampler(name, gl.TEXTURE_CUBE_MAP, texture);
    };

    Program.prototype.enableVertexAttribArray = function(name) {
        var attrib = this.attribs[name];
        if (attrib)
            attribArrayManager.enable(attrib.index);
    };

    Program.prototype.disableVertexAttribArray = function(name) {
        var attrib = this.attribs[name];
        if (attrib)
            attribArrayManager.disable(attrib.index);
    };

    Program.prototype.vertexAttribPointer = function(name, size, type, normalize, offset, stride) {
        var attrib = this.attribs[name];
        if (attrib) {
            attribArrayManager.enable(attrib.index);
            gl.vertexAttribPointer(attrib.index, size, type, normalize, offset, stride);
        }
    };

    // program creation
    function createShader(type, source, name) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS))
            return shader;

        // compilation error
        var log = gl.getShaderInfoLog(shader);

        forEachLine(source, function(line, i) {
            var lineNumber = ('  '+(i + 1)).slice(-3);
        });

        throw {
            type: 'COMPILE',
            shaderType: (type == gl.VERTEX_SHADER ? 'vertex' : 'fragment'),
            name: name,
            shader: shader,
            source: gl.getShaderSource(shader),
            log: gl.getShaderInfoLog(shader),
        };
    }

    function createProgram(options) {
        //var FRAGMENT_HEADER = 'precision mediump float;\n';
        var FRAGMENT_HEADER = 'precision highp float;\n';
        var program = gl.createProgram();
        gl.attachShader(program, createShader(gl.VERTEX_SHADER, options.vertexSource, options.name));
        gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, FRAGMENT_HEADER + options.fragmentSource, options.name));
        gl.linkProgram(program);

        if (gl.getProgramParameter(program, gl.LINK_STATUS))
            return program;

        // link error
        throw {
            type: 'LINK',
            name: options.name,
            program: program,
            log: gl.getProgramInfoLog(program),
        };
    }

    // program loader
    var shaderSources = {};
    function fetchShaderSources(urls) {
        shaderSources = {};

        function processSourceText(text) {
            var regex = /^\/\/\s*(\w+(?:.(vertex|fragment))?)\s*\/\//;
            var source = [];
            forEachLine(text,  function(line) {
                var m = regex.exec(line);
                if (m) {
                    var key = m[1];
                    shaderSources[key] = source = [];
                } else {
                    source.push(line);
                }
            });
        }

        _.each(urls, function(url) {
            if (_.isObject(url)) {
                _.extend(shaderSources, url);
                return;
            }

            // fetch url synchronously
            $.ajax({
                url: url,
                async: false,
                cache: false,
                success: processSourceText,
            });
        });

        // concatenate lines
        _.each(shaderSources, function(source, key) {
            if (_.isArray(source))
                shaderSources[key] = source.join('\n');
        });

        //saveFileAs(JSON.stringify(shaderSources), 'shaders.js', 'application/js');
    }

    var getProgram = (function() {
        function checkSourceExists(name) {
            var exists = !!shaderSources[name];
            console.assert(exists, name+' not found.');
            return exists;
        }

        function makeProgram(name, options) {
            if (!(checkSourceExists(name) &&
                  checkSourceExists(name+'.vertex') &&
                  checkSourceExists(name+'.fragment')))
            {
                return;
            }

            options = options || {};

            var defines = '';
            if (options.defines) {
                _.each(options.defines, function(dv, dk) {
                    defines += '#define '+dk+' '+dv+'\n';
                });
            }

            // common functions, uniforms, varyings etc
            var common = defines + (shaderSources[name] || '');

            // remove attributes for fragment shader
            var commonFragment = _.reject(common.split('\n'), function(line) {
                    return line.match(/attribute/);
                }).join('\n');

            try {
                var program = new Program(name);
                program.setProgram(createProgram({
                    name: name,
                    vertexSource: common + shaderSources[name+'.vertex'],
                    fragmentSource: commonFragment + shaderSources[name+'.fragment'],
                }));

                return program;
            }
            catch (error) {
                onGLSLError(error);
                return null;
            }
        }

        function hashProgram(name, options) {
            var defs = [];
            if (options && options.defines) {
                _.each(options.defines, function(dv, dk) {
                    defs.push(dk+'='+dv);
                });
            }

            return name+' '+defs.join(' ');
        }

        return _.memoize(makeProgram, hashProgram);
    })();

    // render texture
    function RenderTexture(width, height, depth, floatColor) {
        this.width = width;
        this.height = height;

        this.framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);

        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);

        this.dataType = floatColor ? gl.FLOAT : gl.UNSIGNED_BYTE;
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, this.dataType, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
        this.depthTexture = null;
        this.depthRenderbuffer = null;

        depth = depth ? 'TEXTURE' : 'NONE';
        depth = 'RENDERBUFFER';
        switch (depth) {
            case 'TEXTURE':
                this.depthTexture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
                break;

            case 'RENDERBUFFER':
                this.depthRenderbuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthRenderbuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthRenderbuffer);
                gl.bindRenderbuffer(gl.RENDERBUFFER, null);
            break;
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    RenderTexture.prototype.render = function(callback) {
        var vp = gl.getParameter(gl.VIEWPORT);
        gl.viewport(0, 0, this.width, this.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);

        callback();

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(vp[0], vp[1], vp[2], vp[3]);
    };

    RenderTexture.prototype.resize = function(width, height) {
        this.width = width;
        this.height = height;

        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, this.dataType, null);

        if (this.depthTexture) {
            gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);
        }

        if (this.depthRenderbuffer) {
            gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthRenderbuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        }
    };

    // webgl object
    return {
        makeBuffer: function(target, data, usage) {
            usage = usage || gl.STATIC_DRAW;
            var buffer = gl.createBuffer();
            gl.bindBuffer(target, buffer);
            gl.bufferData(target, data, usage);
            return buffer;
        },

        makeVertexBuffer: function(arr, usage) {
            return this.makeBuffer(gl.ARRAY_BUFFER, arr, usage);
        },

        makeElementBuffer: function(arr, usage) {
            return this.makeBuffer(gl.ELEMENT_ARRAY_BUFFER, arr, usage);
        },

        bindVertexBuffer: function(buffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        },

        bindElementBuffer: function(buffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        },

        setupCanvas: function(canvas, options) {
            options = options || {};
            options = _.defaults(options, {
                antialias: false,
                // alpha:true,
                preserveDrawingBuffer: true,
                extensions: [],
                shaderSources: [ 'shaders/all-shaders.glsl' ],
            });

            function tryContext(type) {
                try {
                    return canvas.getContext(type, options);
                }
                catch (e) {
                    // XXX return the exception?
                    return null;
                }
            }

            var gl = tryContext('webgl') || tryContext('experimental-webgl');
            if (gl) {
                var extensions = this.extensions = {};
                _.each(options.extensions, function(name) {
                    extensions[name] = gl.getExtension(name);
                });

                window.gl = gl;

                // load the shaders
                fetchShaderSources(options.shaderSources);
            }

            return gl;
        },

        getProgram: getProgram,

        createTexture2D: function(options) {
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);

            options = options || {};
            options.width = options.width || options.size || 4;
            options.height = options.height || options.width;
            options.format = options.format || gl.RGBA;
            options.type = options.type || gl.UNSIGNED_BYTE;
            options.mag = options.mag || options.filter || gl.NEAREST;
            options.min = options.min || options.mag;

            options.wrapS = options.wrapS || options.wrap || gl.CLAMP_TO_EDGE;
            options.wrapT = options.wrapT || options.wrapS;

            options.dataFormat = options.dataFormat || options.format;
            options.data = options.data || null;

            var level = 0;
            var border = 0;

            gl.texImage2D(gl.TEXTURE_2D, level, options.format,
                          options.width, options.height, border,
                          options.dataFormat, options.type, options.data);

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, options.min);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, options.mag);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, options.wrapS);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, options.wrapT);

            if (options.aniso) {
                var ext = webgl.extensions.WEBKIT_EXT_texture_filter_anisotropic;
                ext && gl.texParameteri(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, options.aniso);
            }

            return texture;
        },

        loadTexture2D: function(url, options) {
            options = options || {};
            options = _.defaults(options, {
                mipmap: false,
                flip: false,
                callback: null,
                filter: gl.LINEAR,
            });

            var texture = this.createTexture2D(options); //创建纹理对象

            var image = new Image();  //创建Image对象
            image.src = url;
            image.onload = function() {
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flip ? 1 : 0);  //当options.flip为1，进行y轴反转？
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image); //配置纹理图像

                if (options.mipmap) {
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); //配置纹理参数
                    gl.generateMipmap(gl.TEXTURE_2D); //
                }

                if (options.callback)
                    options.callback(texture);
            };

            return texture;
        },

        RenderTexture: RenderTexture,
    };

})();


// GLSL error reporting
window.onGLSLError = function(error) {
    var errors = {};
    forEachLine(error.log, function(e, i) {
        var match = e.match(/^ERROR: \d+:(\d+):(.*)$/);
        if (match) {
            var line = parseInt(match[1]);
            var desc = match[2];

            if (!errors[line])
                errors[line] = [];

            errors[line].push(desc);
        }
    });

    switch (error.type) {
        case 'COMPILE':
            html = "<div class=\"description\">GLSL compile error in " + (error.shaderType.toLowerCase()) + " shader \"" + error.name + "\":</div>";

            forEachLine(error.source, function(line, index) {
                var descs = errors[index+1];
                if (descs) {
                    descs = _.map(descs, function(desc) {
                        return "<div class='description'>" + desc + "</div>";
                    }).join('');

                    html += "<span class='highlight'>" + line + "</span> " + descs;
                }
                else
                {
                    html += line + '\n';
                }
            });

            break;

        case 'LINK':
            html = "<div class=\"description\">GLSL link error in program \"" + error.name + "\":<br/>\n" + error.log + "\n</div>";
            break;
    }

    $('.glsl-error').html('<code>' + html + '</code>').show();
};

// some extra utility functions
var GTW = GTW || {};

(function() {

    GTW.create_gradient_texture = function(stops) {
        var canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1;

        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

        _.each(stops, function(color, offset) {
            gradient.addColorStop(parseFloat(offset), color);
        });

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        var texture = webgl.createTexture2D({ filter:gl.LINEAR });
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);

        return texture;
    };

    GTW.load_resources = function(urls, callback) {
        var results = {};
        var todo = _.keys(urls).length;

        function set_result(key, result) {
            results[key] = result;
            if (--todo === 0)
                callback(results);
        }

        _.each(urls, function(url, key) {
            if ((/\.(jpg|png)$/i).test(url)) {
                var img = new Image();
                img.src = url;
                img.onload = function() {
                    set_result(key, img);
                };
            }
            else
            {
                $.getJSON(url, function(result) {
                    set_result(key, result);
                });
            }
        });
    };

})();

var GTW = GTW || {};

// simplified camera. just takes care of matrices etc
(function() {

    function Camera() {
        // projection parameters
        this.fov = 60;
        this.near = 0.01;
        this.far = 150;

        // matrices
        this.viewport = vec4.create();
        this.proj = mat4.create();
        this.view = mat4.create();
        this.bill = mat3.create();
        this.mvp = mat4.create();
        this.mvpInv = mat4.create();
        this.viewInv = mat4.create();
        this.viewPos = vec3.create();
        this.viewDir = vec3.create();
    }

    var up = vec3.fromValues(0, 1, 0);
    var ref = vec3.create();

    Camera.prototype._update_projection = function() {
        //var H = this.viewport[3];
        //var h = 60;
        //var aspect = this.viewport[2] / (H - h);
        //mat4.perspective(this.proj, deg2rad(this.fov), aspect, this.near, this.far);
        //mat4.translate(this.proj, this.proj, [0, 20*h/(2*H), 0]);
        //mat4.scale(this.proj, this.proj, [1, (H - h)/H, 1]);

        var aspect = this.viewport[2] / this.viewport[3];
        mat4.perspective(this.proj, deg2rad(this.fov), aspect, this.near, this.far);
    };

    Camera.prototype._update_mvp = function() {
        // billboard
        var b = this.bill;
        var v = this.view;
        b[0] = v[0]; b[1] = v[4]; b[2] = v[8];
        b[3] = v[1]; b[4] = v[5]; b[5] = v[9];
        b[6] = v[2]; b[7] = v[6]; b[8] = v[10];

        // combined
        mat4.multiply(this.mvp, this.proj, this.view);
        mat4.invert(this.mvpInv, this.mvp);
        mat4.invert(this.viewInv, this.view);

        // XXX could be just pos/dir?
        vec3.transformMat4(this.viewPos, [0, 0, 0], this.viewInv);
        vec3.set(this.viewDir, -this.viewInv[8], -this.viewInv[9], -this.viewInv[10]);
    };

    Camera.prototype.update = function(pos, dir) {
        this._update_projection();

        // view
        vec3.add(ref, pos, dir);
        mat4.lookAt(this.view, pos, ref, up);

        this._update_mvp();
    };

    var view_tmp = mat4.create();
    Camera.prototype.update_quat = function(pos, rot, view_lerp) {
        this._update_projection();

        // view
        mat4.fromRotationTranslation(view_tmp, rot, pos);
        mat4.invert(view_tmp, view_tmp);

        if (!view_lerp)
            mat4.copy(this.view, view_tmp);
        else {
            // blend between 0=(pos,rot) to 1=(current view matrix)
            var v1 = view_tmp;
            var v0 = this.view;

            var a0 = view_lerp;
            var a1 = 1 - view_lerp;

            for (var i = 0; i < 16; ++i) {
                v0[i] = a0 * v0[i] + a1 * v1[i];
            }
        }
        // lerp

        this._update_mvp();
    };

    Camera.prototype.unproject = function(out, win) {
        var v = vec4.create();
        v[0] = 2 * (win[0] / this.viewport[2]) - 1;
        v[1] = 2 * (win[1] / this.viewport[3]) - 1;
        v[1] = 1 - v[1];
        v[2] = 0;
        v[3] = 1;

        vec4.transformMat4(v, v, this.mvpInv);
        out[0] = v[0] / v[3];
        out[1] = v[1] / v[3];
    };

    let offsetHeight = document.getElementById('app').offsetHeight;
    let offsetTop = document.getElementById('app').offsetTop;

    Camera.prototype.project = function(objX, objY, objZ) {
      
      var input = vec4.create()
      var output = vec4.create()

      input[0] = objX
      input[1] = objY
      input[2] = objZ
      input[3] = 1.0

      // vec4.transformMat4(output, input, modelviewMatrix);//模型视图变换
      // vec4.transformMat4(input, output, this.proj);//投影变换
      vec4.transformMat4(output, input, this.mvp)

      //透视除法，进入标准化设备坐标
      if (output[3] == 0.0) return;
      output[0] /= output[3];
      output[1] /= output[3];
      output[2] /= output[3];

      //将坐标由-1到1，转换到0-1
      output[0] = output[0] * 0.5 + 0.5;
      output[1] = output[1] * 0.5 + 0.5;
      output[2] = output[2] * 0.5 + 0.5;
      // console.log("input:", input)
      //将x,y转换到屏幕坐标
      output[0] = output[0] * this.viewport[2] + this.viewport[0];
      output[1] = output[1] * this.viewport[3] + this.viewport[1];

      let offsetHeight = document.getElementById('webgl-canvas').offsetHeight;
      // let offsetTop = document.getElementById('webgl-canvas').offsetTop;

      winX = output[0];
      winY = offsetTop + offsetHeight - output[1];
      winZ = output[2];
      return {
          "x" : winX,
          "y" : winY,
          "z" : winZ
      }
  
    }

    GTW.Camera = Camera;

})();

var GTW = GTW || {};

(function() {

    var MS_PER_HOUR = 3600000;
    var MS_PER_DAY = 86400000;

    function expovariate(mu) {
      let aa = -mu * Math.log(1.0 - MersenneTwister.random());
        return aa;
        return mu;
    }

    // an event record
    function KEvent() {
        this.type = 0;
        this.target = 0;
        this.source = 0;
        this.count = 0;
        this.remaining = 0;
        this.end_time = 0;
        this.next_event_time = 0;
        this.coords = null;             // ddos only
        this.angle = 0;

        this.target_coords = null; //飞线源经纬度
        this.source_coords = null; //飞线目的地经纬度
    }

    KEvent.prototype.next_event = function() {
        var remaining_time = Math.max(0, this.end_time - this.next_event_time);
        var mean_time_to_next_event = remaining_time / this.remaining;
        var time_to_next_event = expovariate(mean_time_to_next_event);
        
        this.next_event_time += time_to_next_event;
        this.angle += Math.PI/5;
    };

    function Simulator() {
        this.next_fetch_time = 0;
        this.kevents = [];
    }

    Simulator.prototype.clear_events = function() {
        this.kevents = [];
    };

    Simulator.prototype.add_events = function(data, start_time) {
        for (var i = 0; i < data.length; i ++) {
          var count = data[i].count;

          var eventType = data[i].eventType;
          if (!(!!GTW.systems[eventType]))
              continue;
          var ke = new KEvent();
          ke.type = eventType;
          ke.target = data[i].target;
          ke.source = data[i].source;
          ke.remaining = ke.count = count;

          ke.next_event_time = start_time;
          ke.end_time = start_time + MS_PER_HOUR;
  
          
          //添加经纬度
          if(data[i].target_coords != undefined && data[i].source_coords != undefined){
            ke.target_coords = data[i].target_coords
            ke.source_coords = data[i].source_coords
          }
            

          // prime first event
          ke.next_event();
          // console.log(ke.coords)
          this.kevents.push(ke);
      }
      
    };

    Simulator.prototype.add_ddos_events = function(data, start_time) {

      var timeslot_duration = MS_PER_HOUR / 100;
      var target_coord = vec2.create();
      var source_coord = vec2.create();
      for(let i=0;i<data.length;i++){
        
        var system_id = data[i].system_id;
        var target_key = data[i].target_key;
        var source_key = data[i].source_key;
        var timeslot_index = i;
        var timeslot_count = 500;
        target_coord = data[i].target_coord;
        source_coord = data[i].source_coord;
        if (timeslot_count == 0) {
          // end of run
          break;
        }
        var timeslot_time = start_time + timeslot_duration * timeslot_index;
        var timeslot_count_factor = 30;
        var timeslot_count_max = 500;
        timeslot_count = Math.min(
          timeslot_count * timeslot_count_factor,
          timeslot_count_max);

          if (!!GTW.systems[system_id]) {
            var ke = new KEvent();
            ke.type = system_id;
            ke.source = source_key;
            ke.target = target_key;
            ke.remaining = ke.count = timeslot_count;

            ke.next_event_time = timeslot_time;
            ke.end_time = timeslot_time + timeslot_duration;

            ke.coords = vec4.fromValues(
                target_coord[0],
                target_coord[1],
                source_coord[0],
                source_coord[1]
            );

            ke.next_event();
            this.kevents.push(ke);
        }
      }
    };

    // now is now in UTC
    Simulator.prototype.fetch = function(now) {
      console.log("simulator fetch")
        var hour = Math.floor((now / MS_PER_HOUR) % 24);

        // one hour from now
        this.next_fetch_time = (1 + Math.floor(now / MS_PER_HOUR))*MS_PER_HOUR;

        var self = this;
        function process_event_data(data)
        {
            // var events = Base64.decode(data.events, Uint32Array);
            var events = data.events;
            // var totals = Base64.decode(data.totals, Uint32Array);
            var totals = data.totals;
            // events = [events]
            GTW.reset_counters();
            GTW.update_counters(totals);//目前没看到影响

            if (data.totals8) {
                // ddos cumulative totals
                // var totals8 = Base64.decode(data.totals8, Uint32Array);
                var totals8 = data.totals8;
                GTW.update_counters(totals8);//目前没看到影响
            }

            var start_time = now;
            self.clear_events();
            self.add_events(events, start_time);//左边前7位数据以及飞线

            // if (data.events8) {
            //     // ddos visualization events
            //     var ddos_events = data.events8;
            //     self.add_ddos_events(ddos_events, start_time);//针雨
            // }

            // if (data.counts8) {
            //     // add ddos count events as regular events
            //     var counts8 = data.counts8;
            //     // self.add_events(counts8, start_time);//左边数据最后一位
            //   }

            var flushed = self.poll_events(now);  // flush expired events,刷新过期事件

            // add to counters对刷新后的事件重新进行计数计数
            // XXX same as main.js
            _.each(flushed, function(ke) {

                var should_count_event = true;
                if (ke.type == 8 && ke.coords)
                    should_count_event = false;
                if (ke.type == 8 && ke.target == 0)
                    should_count_event = false;

                if (should_count_event) {
                    var system = GTW.systems[ke.type];
                    ++system.count;
                    ++system.target_count[ke.target];
                    ++GTW.total_target_count[ke.target];
                }
            });
        }

        // var url = 'static/map/4.json';
        var url = 'static/map/new_events.json';
        $.getJSON(url, process_event_data);
    };

    // return a list of events fired since last poll
    Simulator.prototype.poll_events = function(now) {
        if (this.next_fetch_time < now) {
            this.fetch(now);
        }

        // a list of fired keys
        var fired_events = [];
        
        _.each(this.kevents, function(ke) {
            // fire as many events as available for this timeslot
            while (ke.next_event_time <= now) {//如果start_time小于现在 就展示
                fired_events.push(ke);

                if (--ke.remaining == 0) {
                    // dead
                    ke.next_event_time = Infinity;
                    break;
                }

                // schedule the next event
                ke.next_event();
            }
            // fired_events.push(ke);
        });
        
        return fired_events;
        // return this.kevents
    };

    GTW.Simulator = Simulator;

})();

var GTW = GTW || {};

// The MissileSystem keeps track of active missile trajectories and explosions and
// renders them.
(function () {
    // for overall infection count/rank
    GTW.total_target_count = new Int32Array(256);
    GTW.total_target_rank = new Int32Array(256);
    GTW.top_infected = new Int32Array(10);

    // for rank calculations
    var country_keys = [];
    for (var i = 0; i < 256; ++i) {
        if (_.contains(disabledCountries, i)) {
            continue
        }
        country_keys.push(i);
    }

    function compute_ranks(count, rank) {
        country_keys.sort(function (a, b) {
            return count[b] - count[a];
        });

        _.each(country_keys, function (country_key, index) {
            rank[country_key] = 1 + index;
        });
    }

    // overall rank
    GTW.compute_total_target_rank = function () {
        compute_ranks(GTW.total_target_count, GTW.total_target_rank);

        for (var i = 0; i < GTW.top_infected.length; ++i) {
            GTW.top_infected[i] = country_keys[i];
        }
    }

    // iOS 8 is returning element [0] as undefined when using lodash's each iterator
    // https://bugs.webkit.org/show_bug.cgi?id=142792
    GTW.systems_foreach = function (callback) {
        var keys = Object.keys(GTW.systems);
        for (var i=0; i < keys.length; i++) {
            var system = GTW.systems[keys[i]];
            callback(system);
        }
    };

    // counter reset at midnight
    function reset_counters() {
        // first reset everything to zero
        GTW.systems_foreach(function (system) {
            system.count = 0;
            for (var i = 0; i < 256; ++i)
                system.target_count[i] = 0;
        });

        for (var i = 0; i < 256; ++i)
            GTW.total_target_count[i] = 0;
    }

    function update_counters(data) {
        // if (!data)
        //     return;
        // // now evaluate the totals data
        // for (var i = 0; i < data.length; i += 2) {
        //     var k = data[i + 0];
        //     var count = data[i + 1];    //k和count 两个为一组 第一第二 第三第四 。。。

        //     var system_id = (k >> 16) & 0xff;//结果为1或2或3 -8
        //     var target_id = (k >> 8) & 0xff;//结果为0 122 15 129 64 217 40 。。。很多 
        //     if (!(!!GTW.systems[system_id])) //GTW.systems 返回的是8种攻击类型的数据
        //         continue;

        //     var system = GTW.systems[system_id];
        //     if (!! system) {
        //         if (target_id === 0) {
        //             // global count
        //             system.count = count;//用于计算所有的8项攻击数
        //         } else {
        //             // per-country count
        //             system.target_count[target_id] = count;//单个国家的计数

        //             // per-country all-system count
        //             GTW.total_target_count[target_id] += count; //单个国家的所有计数
        //         }
        //     }
        // }
        for (var i = 0; i < data.length; i ++) {
          var count = data[i].count;    //k和count 两个为一组 第一第二 第三第四 。。。

          var system_id = data[i].system_id;
          var target_id = data[i].target_id; 
          if (!(!!GTW.systems[system_id])) //GTW.systems 返回的是8种攻击类型的数据
              continue;

          var system = GTW.systems[system_id];
          if (!! system) {
              if (target_id === 0) {
                  // global count
                  system.count = count;//用于计算所有的8项攻击数
              } else {
                  // per-country count
                  // system.target_count[target_id] = count;//单个国家的计数

                  // per-country all-system count
                  // GTW.total_target_count[target_id] += count; //单个国家的所有计数
              }
          }
      }
    }

    // from array of objects with a "start_time" property
    function find_oldest(now, arr) {
        var oldest = null, oldest_time = 0;
        for (var i = 0; i < arr.length; ++i) {
            var obj = arr[i];
            if (!obj.alive)
                return obj;

            var elapsed = now - obj.start_time;
            if (elapsed > oldest_time) {
                oldest_time = elapsed;
                oldest = obj;
            }
        }
        
        return oldest ? oldest : _.sample(arr);
    }

    var N_MISSILES = 9000;
    var N_STEPS = 100;

    var N_VERTS_PER_MISSILE = N_STEPS * 8;
    var N_ICONS = N_MISSILES;

    function MissileSystem(env) {
        var self = this;

        this.mode_params;
        this.setMode("world");

        this.programs = {
            missile: webgl.getProgram('missile'),
            impact: webgl.getProgram('impact'),
            icon: webgl.getProgram('icon'),
            cone: webgl.getProgram('cone'),
        };

        this.buffers = {
            missile: null,
            icon: null,
            cone: null,
            quad: webgl.makeVertexBuffer(new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])),
        };

        this.textures = {
            impact: webgl.loadTexture2D(GTW.resource_url('textures/impact-512.jpg'), {mipmap: false}),
        };

        // cone geometry
        (function () {

            var verts = [];
            var n_cols = 32;
            for (var i = 0; i < n_cols; ++i) {
                var theta = TWO_PI * i / (n_cols - 1);
                var x = Math.cos(theta);
                var y = Math.sin(theta);
                verts.push(x, 0, y, x, 1, y);
            }

            verts = new Float32Array(verts);
            self.buffers.cone = webgl.makeVertexBuffer(verts);
            self.n_cone_verts = verts.length / 3;

        })();

        this.init_missiles(env);
        this.init_icons();
    }
    MissileSystem.prototype.register_click = function() {

    }
    MissileSystem.prototype.init_missiles = function (env) {
        var self = this;

        var verts = new Float32Array(N_MISSILES * N_VERTS_PER_MISSILE);
        var vert_buffer = null;

        function Missile(index) {
            this.index = index;
            this.verts = verts.subarray(this.index * N_VERTS_PER_MISSILE, (this.index + 1) * N_VERTS_PER_MISSILE);
            
            this.source_coord = vec3.create();
            this.target_coord = vec3.create();

            this.source_mat = mat4.create();
            this.target_mat = mat4.create();

            this.start_time = 0;
            this.alive = false;

            this.has_source = true;
            this.has_target = true;
            this.draw_source_impact = true;
        }

        var tmp1 = vec3.create();
        var tmp2 = vec3.create();
        var tmp3 = vec3.create();
        var tmp4 = vec3.create();

        function get_matrix(mat, coord, scale, env) {
            var v0 = tmp1;
            var v1 = tmp2;
            var dir = tmp3;
            var pos = tmp4;

            env.project(pos, coord);

            // rotation
            if (env.projection.blend > 0.5) {
                vec3.normalize(dir, pos);
                vec3.set(v0, 0, 1, 0);
                vec3.cross(v0, dir, v0);
                vec3.normalize(v0, v0);
                vec3.cross(v1, v0, dir);

                mat[0] = v0[0];
                mat[1] = v0[1];
                mat[2] = v0[2];

                mat[4] = dir[0];
                mat[5] = dir[1];
                mat[6] = dir[2];

                mat[8] = v1[0];
                mat[9] = v1[1];
                mat[10] = v1[2];
            } else {
                mat4.identity(mat);
                mat4.rotateX(mat, mat, -0.5 * Math.PI);
            }

            if (scale)
                mat4.scale(mat, mat, [scale, scale, scale]);

            // translation
            mat[12] = pos[0];
            mat[13] = pos[1];
            mat[14] = pos[2];
        }

        // source_coord may be null
        var launched_index_list = []
        Missile.prototype.launch = function (env, style, target_coord, source_coord, scale, angle, mode_params,count) {
          //没有就加进去 有就跳出
          // if(launched_index_list.indexOf(this.index) == -1){
          //   launched_index_list.push(this.index);
          //   }else{return;}
            
            this.style = style;

            this.shape = self.shapes[this.style];
            // todo change to variable
            this.color = GTW.systems[this.style].getRGBColor();
              
            //计算出每个的最后一位
            let index_alpha = (this.index/(N_MISSILES)).toString()
            let alpha_i = index_alpha.indexOf('.')
            //截取小数点后5位
            index_alpha = index_alpha.slice(0,alpha_i + 5)
            this.color = Float32Array.from([this.color[0],this.color[1],this.color[2],Number(index_alpha)]);
            index_missile_dict[index_alpha] = [env, style, target_coord, source_coord, scale, angle, mode_params, this.index,count];
            this.has_source = !!source_coord;
            this.start_time = env.time;
            this.alive = true;
            
            // source and target coords 转换坐标
            if (this.has_source)
                vec3.copy(this.source_coord, source_coord);
            vec3.copy(this.target_coord, target_coord);

            // missile arc 计算导弹弧度，可以根据公式，修改飞线的形状
            if (this.has_source) {
                var cdist = vec2.distance(source_coord, target_coord);
                var height = mode_params.height * cdist;
                
                // direction of line
                var dx = (target_coord[0] - source_coord[0]) / cdist;
                var dy = (target_coord[1] - source_coord[1]) / cdist;

                // perp vector for "angled" shots
                var nscale = 200;
                var nx = nscale * -dy;
                var ny = nscale * dx;

                angle = angle || 0;
                var cos = Math.cos(angle);
                var sin = Math.sin(angle);

                var dp = this.index * N_VERTS_PER_MISSILE;
                var v = tmp1;
                var c = tmp2;

                // var tempalt = 0
                for (var i = 0; i < N_STEPS; ++i) {
                    
                    var u = i / (N_STEPS - 1);
                    vec3.lerp(c, source_coord, target_coord, u);
                    // var alt

                    
                    // if(i >= N_STEPS / 3 && i <= N_STEPS / 2) {
                    //   alt = tempalt;
                    // } else {
                    //   alt = height * Math.sin(u * Math.PI) * 0.15;
                    //   if(i == N_STEPS / 3 - 1) {
                    //     tempalt = alt
                    //   }
                    // }
                    var alt = height * Math.sin(u * Math.PI) * 0.15;
                    
                    c[0] += sin * alt * nx;
                    c[1] += sin * alt * ny;
                    // if(i >= N_STEPS /3 && i <= N_STEPS / 2) {
                    //   c[2] = alt;
                    // } else {
                    //   c[2] += cos * alt;
                    // }
                    c[2] += cos * alt;

                    env.project(v, c);

                    verts[dp + 0] = v[0];
                    verts[dp + 1] = v[1];
                    verts[dp + 2] = v[2];
                    verts[dp + 3] = -u;

                    verts[dp + 4] = v[0];
                    verts[dp + 5] = v[1];
                    verts[dp + 6] = v[2];
                    verts[dp + 7] = u;

                    dp += 8;
                }

                // update the array buffer
                var offset_bytes = 4 * this.index * N_VERTS_PER_MISSILE;
                webgl.bindVertexBuffer(vert_buffer);
                gl.bufferSubData(gl.ARRAY_BUFFER, offset_bytes, this.verts);
            }

            // source and target matrices
            if (this.has_source) {
                if (this.source_coord[2] < 0.015) {
                    get_matrix(this.source_mat, this.source_coord, scale, env);
                    this.draw_source_impact = true;
                  } else {
                    // ddos fire from the sky
                    this.draw_source_impact = false;
                  }
                } else {
                if (mode_params.ff_impacts)
                    this.start_time -= 1;
                }

            get_matrix(this.target_mat, this.target_coord, scale, env);
        };

        this.missiles = [];
        for (var i = 0; i < N_MISSILES; ++i) {
            this.missiles.push(new Missile(i));
        }

        this.buffers.missile = vert_buffer = webgl.makeVertexBuffer(verts);
    };

    MissileSystem.prototype.init_icons = function () {
        var shape_verts = [];
        var shapes = [];

        function push_shape_vert(theta, i) {
            shape_verts.push(Math.cos(theta), Math.sin(theta), i);
        }

        // shape object, points to a segment of the shape vertex buffer
        function Shape() {
            this.offset = 0;
            this.count = 0;
        }

        Shape.prototype.draw = function () {
            gl.drawArrays(gl.LINES, this.offset, this.count);
        };

        // create shape and vertices for n_sides
        function create_shape(n_sides) {
            var shape = new Shape();
            shape.offset = shape_verts.length / 3;

            var semi = n_sides < 0;
            n_sides = Math.abs(n_sides);

            var theta_step;
            if (semi) {
                // semicircle shape
                theta_step = Math.PI / n_sides;
            } else {
                theta_step = TWO_PI / n_sides;
            }

            var n_rings = 5;
            for (var i = 0; i < n_rings; ++i) {
                var theta = 0;
                for (var j = 0; j < n_sides; ++j) {
                    push_shape_vert(theta, i);
                    push_shape_vert(theta + theta_step, i);
                    theta += theta_step;
                }
                if (semi) {
                    push_shape_vert(theta, i);
                    push_shape_vert(0, i);
                }

                if (n_sides == 31) {
                    // DDOS
                    theta = 0.80;
                    push_shape_vert(theta, i);
                    push_shape_vert(theta + Math.PI, i);
                }
            }

            shape.count = shape_verts.length / 3 - shape.offset;
            return shape;
        }

        // create a shape for each system
        GTW.systems_foreach(function (system) {
            var shape = create_shape(system.n_sides);
            shapes[system.id] = shape;
        });

        this.shapes = shapes;

        // make a vertex buffer from shape vertex data
        shape_verts = new Float32Array(shape_verts);
        this.buffers.icon = webgl.makeVertexBuffer(shape_verts);
    };

    var global_missiles = {missiles_data:[]}
    Object.defineProperty(global_missiles,'missiles_data',{
      get: function(){
        return missiles_data;
      },
      set: function(value){
        missiles_data = value;
      }
    });
    global_missiles.missiles_data = []

    MissileSystem.prototype.draw = function (env) {
        var self = this;

        var debug_counts = {
            active: 0,
            curves: 0
        };

        gl.enable(gl.DEPTH_TEST);
        gl.depthMask(false);

        // missiles
        if (this.mode_params.use_missiles) {
            // gl.enable(gl.BLEND);
            // gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            var pgm = this.programs.missile.use();
            
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniform3fv('view_position', env.camera.viewPos);
            pgm.uniform1f('width', this.mode_params.width);

            webgl.bindVertexBuffer(this.buffers.missile);
            pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
            if(global_missiles.missiles_data.length == 0){
              global_missiles.missiles_data = this.missiles;
            }
            
            _.each(global_missiles.missiles_data, function (missile) {
                missile.alive = true; //alive控制了missile对象的呈现与消失
                
                if (!missile.alive || !missile.has_source)
                    return;
                ++debug_counts.curves;
                var t = env.time - missile.start_time;   
                // if (t < 4) {
                    // pgm.uniform1f('time', 0.5 * t);
                    let colorArr = missile.color;
                    if(colorArr && colorArr.length == 4){
                      pgm.uniform4f('color', colorArr[0],colorArr[1],colorArr[2],colorArr[3]);
                    } else {
                      pgm.uniform4f('color', 1,0,1,1);
                    }
                    var vert_count = 2 * N_STEPS;
                    var vert_start = vert_count * missile.index;
                    gl.drawArrays(gl.TRIANGLE_STRIP, vert_start, vert_count);
                // }
            });
        }

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        // impacts 散点底部的圆形图标
        if (this.mode_params.use_impacts && env.high_quality) {
            var pgm = this.programs.impact.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniformSampler2D('t_color', this.textures.impact);
            webgl.bindVertexBuffer(this.buffers.quad);

            pgm.vertexAttribPointer('position', 2, gl.FLOAT, false, 0, 0);

            _.each(this.missiles, function (missile) {
                if (!missile.alive)
                    return;
                // console.log(missile.alive)
                ++debug_counts.active;

                var t = env.time - missile.start_time;
                //注释之前，impact会消失，注释之后，impact不消失，但会变成方形
                //注释后，会影响弹框的显示
                if (t > 4) {
                    missile.alive = false;
                    return;
                }

                // pgm.uniform4f('color', missile.color);
                if(missile.color != undefined)
                  pgm.uniform4f('color', missile.color[0],missile.color[1],missile.color[2],missile.color[3]);

                if (missile.has_source && missile.draw_source_impact && t < 1) {
                    pgm.uniformMatrix4fv('mat', missile.source_mat);
                    pgm.uniform1f('time', t);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                }

                if (missile.has_target && t >= 1) {
                    pgm.uniformMatrix4fv('mat', missile.target_mat);
                    pgm.uniform1f('time', (t - 1) / 3);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                }
            });
        }

        // cones
        if (this.mode_params.use_cones && env.high_quality) {
            var pgm = this.programs.cone.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);

            webgl.bindVertexBuffer(this.buffers.cone);
            pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, 0, 0);

            _.each(this.missiles, function (missile) {
                if (!missile.alive)
                    return;

                var t = env.time - missile.start_time;
                if (missile.has_target && t >= 1 && t < 2) {
                    // pgm.uniform3fv('color', missile.color);
                    if(missile.color != undefined)
                      pgm.uniform4f('color', missile.color[0],missile.color[1],missile.color[2],missile.color[3]);
                    pgm.uniformMatrix4fv('mat', missile.target_mat);
                    pgm.uniform1f('time', t - 1);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, self.n_cone_verts);
                }
            });
        }

        // icons  冒泡散点的形状
        if (this.mode_params.use_icons) {
            var pgm = this.programs.icon.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniform1f('scale', 0.050);
            webgl.bindVertexBuffer(this.buffers.icon);
            pgm.vertexAttribPointer('vertex', 3, gl.FLOAT, false, 0, 0);

            gl.lineWidth(2);

            _.each(this.missiles, function (missile) {
                if (!missile.alive)
                    return;
                var t = env.time - missile.start_time;

                if (t >= 1 && t < 2) {
                    pgm.uniformMatrix4fv('mat', missile.target_mat);
                    // pgm.uniform3fv('color', missile.color);
                    //着色器部分color的类型为uniform vec3，此处也传值长度为3的值
                    if(missile.color != undefined)
                      // pgm.uniform4f('color', missile.color[0],missile.color[1],missile.color[2],missile.color[3]);
                      pgm.uniform3f('color', missile.color[0], missile.color[1], missile.color[2]);
                    pgm.uniform1f('time', t - 1);
                    if(missile.shape != undefined)
                      missile.shape.draw();
                }
            });

            gl.lineWidth(1);
        }

        gl.depthMask(true);

        //missile_debug('active: '+debug_counts.active + '  curves:'+debug_counts.curves);
    };
    var missile_counter = 0
    MissileSystem.prototype.launch = function (env, style, target, source, angle,count) {
        // style is 1..5
        // target is [lon, lat]
        // source is [lon, lat] or null/undefined
        // if((style == 4 || style == 5)  && flag8 < 1) {
        //   console.log("system id = 4 || 5")
        //   flag8++
        // }
        //找到距离当前时间最久远的事件missile
        var missile = find_oldest(env.time, this.missiles);
        // var missile = null
        // if((missile_counter + 1) < this.missiles.length) {
        //   missile = this.missiles[missile_counter]
        //   missile_counter ++
        // } else {
        //   missile_counter = 0
        //   missile = this.missiles[missile_counter]
        // }
        //该事件对象missile调用方法launch，替换为poll_events筛选出的事件
        missile.launch(env, style, target, source, this.mode_params.scale, angle, this.mode_params,count);
        // if(missile.has_source) {
        //   console.log("launch missile: ", missile)
        // }
        return missile;
    };

    /// Set parameters for missile system using mode as input
    MissileSystem.prototype.setMode = function (mode) {
        switch (mode) {
            case 'world':
                this.mode_params = {
                    use_missiles: true,
                    use_impacts: true,
                    use_cones: true,
                    use_icons: true,
                    scale: 1.0,
                    width: 0.1,
                    height: 0.005,
                    ff_impacts: false
                };
                break;
            case 'scape':
                this.mode_params = {
                    use_missiles: true,
                    use_impacts: false,
                    use_cones: true,
                    use_icons: true,
                    scale: 30.0,
                    width: 10.0,
                    height: 0.100,
                    ff_impacts: true
                };
                break;
        }
        this.clear();
    };

    MissileSystem.prototype.clear = function () {
        _.each(this.missiles, function (m) {
            m.alive = false;
        });
    };

    // env contains the projection function (maps [lon,lat,alt] to [x,y,z])
    GTW.MissileSystem = MissileSystem;
    GTW.reset_counters = reset_counters;
    GTW.update_counters = update_counters;
})();

var GTW = GTW || {};
// coordinate projection maths
(function() {

    //var ALT_SCALE = 0.000010;       // ecer
    //var ALT_SCALE = 0.000005;       // mercator
    var ALT_SCALE = 1.0;
    var SCALE = 10;

    GTW.project_mercator = function(out, p) {
        var lon = p[0];
        var lat = p[1];

        var phi = Math.PI * lat/180;
        var ly = 90/Math.PI * Math.log(Math.tan(0.25*Math.PI + 0.5*phi));

        out[0] = -lon/180;
        out[1] = clamp(ly/90, -1, 1);
        out[2] = -ALT_SCALE * p[2];
        vec3.scale(out, out, SCALE);
    }

    GTW.project_ecef = function(out, p) {
        // LLA to ECEF
        // http://stackoverflow.com/questions/10473852/convert-latitude-and-longitude-to-point-in-3d-space

        var lon = deg2rad(p[0]);
        var lat = deg2rad(p[1]);
        var alt = ALT_SCALE * p[2];

        var f = 1/298.257223563;    // flattening
        var ff = (1 - f) * (1 - f);
        //var R = 1;                  // equitorial radius

        var lc = Math.cos(lat);
        var ls = Math.sin(lat);

        //var C = 1 / Math.sqrt(lc*lc + ff*ls*ls);
        //var S = C * ff;
        var C = 1;
        var S = 1;
        
        out[0] = -(C + alt)*lc * Math.cos(lon);
        out[2] =  (C + alt)*lc * Math.sin(lon);
        out[1] =  (S + alt)*ls;
        vec3.scale(out, out, SCALE);
    }

})();

var GTW = GTW || {};

// get localized country name
GTW.get_country_name = function(country) {
    if (window.lang) {
        return lang.getText('MAP_COUNTRY_' + country.iso3);
    } else {
        return country.name.en;
    }
};

(function() {

    var PATTERN_SCALE = [ 4 * 360, 4 * 180 ];
    var SEA_DEPTH = 0.014;
    var EXTRUDE_HEIGHT = SEA_DEPTH * 10;

    // push vecs onto a flat array
    function push_vec(arr) {
        for (var i = 1; i < arguments.length; ++i)
            arr.push.apply(arr, arguments[i]);
    }

    //背景星星
    // GTW.Stars = (function() {
    //     function Stars() {
    //         var N_STARS = 10000;
    //         this.count = N_STARS;

    //         function make_verts() {
    //             var v = vec3.create();
    //             var stars = new Float32Array(N_STARS << 2);
    //             for (var i = 0; i < stars.length; i += 4) {
    //                 Random.unitVec3(v);
    //                 vec3.scale(v, v, 50);
    //                 stars[i + 0] = v[0];
    //                 stars[i + 1] = v[1];
    //                 stars[i + 2] = v[2];
    //                 stars[i + 3] = lerp(0.1, 2.5, Math.pow(Math.random(), 10.0));
    //             }

    //             return webgl.makeVertexBuffer(stars);
    //         }

    //         this.buffers = {
    //             vert: make_verts(),
    //         };

    //         this.programs = {
    //             main: webgl.getProgram('stars'),
    //         };

    //         this.mvp = mat4.create();
    //     };

    //     Stars.prototype.draw = function(env) {
    //         gl.disable(gl.DEPTH_TEST);
    //         gl.enable(gl.BLEND);
    //         gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    //         var pgm = this.programs.main.use();

    //         var mvp_stars = this.mvp;
    //         mat4.copy(mvp_stars, env.camera.view);
    //         mvp_stars[12] = 0;
    //         mvp_stars[13] = 0;
    //         mvp_stars[14] = 0;
    //         mat4.multiply(mvp_stars, env.camera.proj, mvp_stars);
    //         pgm.uniformMatrix4fv('mvp', mvp_stars);
    //         pgm.uniform4f('color', 1.0, 1.0, 1.0, 0.5);

    //         webgl.bindVertexBuffer(this.buffers.vert);
    //         pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
    //         gl.drawArrays(gl.POINTS, 0, this.count);
    //     };

    //     return Stars;
    // })();



    GTW.Corona = (function() {

        function Corona() {

            var n_verts = 0;
            function make_verts() {
                var vertex = [];
                var n_segments = 128;
                for (var i = 0; i < n_segments+1; ++i) {
                    var theta = TWO_PI * i/n_segments;
                    var u = i/(n_segments + 1);
                    var x = Math.cos(theta);
                    var y = Math.sin(theta);
                    vertex.push(x, y, u, 0, x, y, u, 1);
                }
                n_verts = vertex.length / 4;
                return webgl.makeVertexBuffer(new Float32Array(vertex));
            }

            this.buffers = {
                vert: make_verts(),
            };
            this.vertex_count = n_verts;

            this.programs = {
                main: webgl.getProgram('corona'),
            };

            this.textures = {
                smoke: webgl.loadTexture2D(GTW.resource_url('textures/smoke.jpg'), { mipmap:true,
                    wrapS:gl.REPEAT, wrapT:gl.CLAMP_TO_EDGE  }),
            };
        }

        //光晕
        Corona.prototype.draw = function(env, zoff) {
            var pgm = this.programs.main.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniformMatrix3fv('bill', env.camera.bill);
            pgm.uniformSampler2D('t_smoke', this.textures.smoke);
            pgm.uniform1f('time', env.time);
            pgm.uniform1f('zoff', zoff || 0);

            gl.disable(gl.CULL_FACE);
            gl.enable(gl.BLEND);

            if (env.palette === 'dark') {
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
                pgm.uniform3f('color0', 0 / 255.0 , 77.0 / 255.0, 251.0 / 255.0);
                pgm.uniform3f('color1', 0.00, 0.00, 0.00);
                // pgm.uniform3f('color1', 20.0 / 255.0 , 177.0 / 255.0, 251.0 / 255.0);
            } else {
                gl.blendFunc(gl.DST_COLOR, gl.ZERO);
                pgm.uniform3f('color0', 0.07, 0.25, 0.16);
                pgm.uniform3f('color1', 1.00, 1.00, 1.00);
            }

            webgl.bindVertexBuffer(this.buffers.vert);
            pgm.vertexAttribPointer('vertex', 4, gl.FLOAT, false, 0, 0);


            gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.vertex_count);

            gl.disable(gl.BLEND);
        };

        return Corona;

    })();



    GTW.World = (function() {

        function World() {
            this.buffers = {
                map: {
                    vert: null,
                    face: null,
                    line: null,
                },

                grid: {
                    vert: null,
                    elem: null,
                },
            };

            this.border = {
                buffer: gl.createBuffer(),
                count: 0
            };

            this.build_grid();

            this.programs = {
                main: webgl.getProgram('map_main'),
                grid: webgl.getProgram('map_grid'),
                line: webgl.getProgram('map_line'),
                pick: webgl.getProgram('map_pick'),
            };

            this.textures = {
                blur: webgl.loadTexture2D(GTW.resource_url('textures/map_blur.jpg')),
                pattern: webgl.loadTexture2D(GTW.resource_url('textures/pattern.png'), { mipmap:true, wrap:gl.REPEAT, aniso:4 }),
            };

            this.countries = [];
            this.countriesAll = [];

            function decode_hex(out, hex) {
                for (var i = 0; i < 3; ++i) {
                    var h = parseInt(hex.substr(2*i, 2), 16);
                    out[i] = h/255;
                }
                return out;
            }

            var self = this;
            this.key_to_country = {};

            var map_url = GTW.resource_url('map.json');

            this.extruded_country_index = -1;
            this.bordered_country_index = -1;

            GTW.load_resources({
                map: map_url
            }, function(resources) {
                self.countriesAll = resources.map.countries;
                self.countries = _.filter(resources.map.countries, function(cntr){
                    return !_.contains(disabledCountries, cntr.key);
                });
                // resources.map.countries = self.countries;

                // self.geoip = (function() {

                //     var iso2 = window.geoIP.country;
                //     var coord = window.geoIP.coord;
                //     var country = _.find(self.countries, function(c) { return c.iso2 == iso2 });

                //     if (!country)
                //         return null;

                //     return {
                //         country: country,
                //         country_index: self.countries.indexOf(country),
                //         coord: vec3.fromValues(coord[1], coord[0], SEA_DEPTH)
                //     };
                // }());
                self.geoip = (function() {

                  var iso2 = window.geoIP.country;
                  var coord = window.geoIP.coord;
                  var coord2 = window.geoIP.coord2;
                  var country = _.find(self.countries, function(c) { return c.iso2 == iso2 });
                  
                  if (!country)
                      return null;

                  let coordList = [];
                  for(let i=0;i<coord.length;i++){
                      coordList.push(vec3.fromValues(coord[i][1], coord[i][0], SEA_DEPTH))
                  }
                  let coordList2 = [];
                  for(let i=0;i<coord2.length;i++){
                      coordList2.push(vec3.fromValues(coord2[i][1], coord2[i][0], SEA_DEPTH))
                  }
                  return {
                      country: country,
                      country_index: self.countries.indexOf(country),
                      coord: coordList,
                      coord2: coordList2
                  };
                }());

                if (self.geoip)
                    self.extruded_country_index = self.geoip.country_index;

                _.each(self.countries, function(c) {
                    c.tone = Math.random();

                    // decode cities
                    var c2 = Base64.decode(c.cities, Int16Array);
                    // var c2 = c.cities;
                    var cities = c.cities = new Float32Array(c2.length);
                    for (var i = 0; i < cities.length; i += 3) {
                        cities[i + 0] = c2[i + 0] / 32768.0;
                        cities[i + 1] = 180.0 * c2[i + 1] / 32768.0;
                        cities[i + 2] = 90.0 * c2[i + 2] / 32768.0;
                    }

                    //console.log(c.name.en, cities.length/3);
                    self.key_to_country[c.key] = c;

                    var geoip_country = self.geoip ? self.geoip.country : null;

                    c.borders = Base64.decode(c.borders, Uint16Array);
                    // c.borders = c.borders;
                    c.center = vec3.fromValues(
                        c.center[0],
                        c.center[1],
                        (c == geoip_country) ? SEA_DEPTH : 0);

                });

                self.build_geometry(resources.map);
                self.emit('loaded');
            });
        }

        make_event_emitter(World.prototype);

        World.prototype.build_grid = function() {
            var verts = [];
            var elems = [];

            var coord = vec3.create();
            coord[2] = -SEA_DEPTH;

            var v = vec3.create();
            var n = vec3.create();
            var uv = vec2.create();

            for (var lat = -180; lat <= 180; lat += 1) {
                for (var lon = -90; lon <= 90; lon += 1) {
                    vec2.set(coord, lat, lon);
                    vec2.set(uv, (lat + 180)/360, 1 - (lon + 90)/180);

                    GTW.project_mercator(v, coord);
                    vec3.set(n, 0, 0, -1);
                    push_vec(verts, v, n);

                    GTW.project_ecef(v, coord);
                    vec3.normalize(n, v);
                    push_vec(verts, v, n);

                    push_vec(verts, uv);
                }
            }

            function vertex_at(i, j) { return 181*i + j; }

            for (var i = 0; i < 360; ++i) {
                for (var j = 0; j < 180; ++j) {
                    elems.push(
                        // triangle 1
                        vertex_at(i, j),
                        vertex_at(i+1, j),
                        vertex_at(i+1, j+1),

                        // triangle 2
                        vertex_at(i+1, j+1),
                        vertex_at(i, j+1),
                        vertex_at(i, j)
                    );
                }
            }

            this.buffers.grid.vert = webgl.makeVertexBuffer(new Float32Array(verts));
            this.buffers.grid.elem = webgl.makeElementBuffer(new Uint16Array(elems));

            this.grid_vert_count = verts.length / 5;
            this.grid_elem_count = elems.length;
            this.grid_vert_stride_bytes = (3 + 3 + 3 + 3 + 2) << 2;
        };

        World.prototype.build_geometry = function(map_data) {
            var verts = [];
            var geom_data = map_data.geom;
            var coord = vec3.create();
            var v = vec3.create();
            var c = vec2.create();

            // convert indices
            geom_data.faces = Base64.decode(geom_data.faces, Uint16Array);
            // geom_data.faces = geom_data.faces;
            geom_data.lines = Base64.decode(geom_data.lines, Uint16Array);
            // geom_data.lines =geom_data.lines;
            geom_data.coast = Base64.decode(geom_data.coast, Uint16Array);
            // geom_data.coast = geom_data.coast;

            // convert source verts
            geom_data.verts = Base64.decode(geom_data.verts, Int16Array);

            function push_vert(src_index, alt) {
                coord[0] = 180.0 * geom_data.verts[2*src_index + 0]/32768.0;
                coord[1] = 90.0 * geom_data.verts[2*src_index + 1]/32768.0;
                coord[2] = alt;

                // texcoord
                c[0] = 0.5 + coord[0]/360;
                c[1] = 0.5 - coord[1]/180;

                var vert_index = verts.length / (6 + 6 + 2);

                GTW.project_mercator(v, coord);
                verts.push(v[0], v[1], v[2]);
                verts.push(0, 0, 0);

                GTW.project_ecef(v, coord);
                verts.push(v[0], v[1], v[2]);
                verts.push(0, 0, 0);

                verts.push(c[0], c[1]);
                return vert_index;
            }

            var n_verts = geom_data.verts.length;
            for (var i = 0; i < n_verts; ++i)
                push_vert(i, 0);

            // new verts/faces for coast extrusion
            var faces = Array.apply([], geom_data.faces);   // convert to extendible array
            faces.length = geom_data.faces.length;
            faces.constructor = Array;

            this.coast_start = faces.length;
            for (var i = 0; i < geom_data.coast.length; i += 2) {
                var e0 = geom_data.coast[i + 0];
                var e1 = geom_data.coast[i + 1];

                var f0 = push_vert(e0, -SEA_DEPTH);
                var f1 = push_vert(e1, -SEA_DEPTH);

                var e0 = push_vert(e0, 0);
                var e1 = push_vert(e1, 0);

                faces.push(e0, e1, f0);
                faces.push(e1, f1, f0);
            }
        
            // XXX at this point... need to add border faces
            if (this.geoip) {
                var borders = this.geoip.country.borders;
                var b0 = 0xffff;
                for (var i = 0; i < borders.length; ++i) {
                    var b1 = borders[i];
                    if (b1 == 0xffff) {
                        b0 = 0xffff;
                        continue;
                    }
                    if (b0 != 0xffff) {
                        var f0 = push_vert(b0, 0);
                        var f1 = push_vert(b1, 0);

                        var e0 = push_vert(b0, 1.02*SEA_DEPTH);
                        var e1 = push_vert(b1, 1.02*SEA_DEPTH);

                        faces.push(e0, e1, f0);
                        faces.push(e1, f1, f0);
                    }
                    b0 = b1;
                }
            }

            this.coast_count = faces.length - this.coast_start;

            // calculate normals
            var v01 = vec3.create();
            var v02 = vec3.create();
            var stride = 6 + 6 + 2;
            for (var i = 0; i < faces.length; i += 3) {
                var e0 = faces[i + 0];
                var e1 = faces[i + 1];
                var e2 = faces[i + 2];

                for (var k = 0; k < 2; ++k) {
                    var offset = k * 6;

                    for (var j = 0; j < 3; ++j) {
                        v01[j] = verts[stride*e1 + offset + j] - verts[stride*e0 + offset + j];
                        v02[j] = verts[stride*e2 + offset + j] - verts[stride*e0 + offset + j];
                    }

                    vec3.cross(v, v01, v02);
                    vec3.normalize(v, v);

                    for (var j = 0; j < 3; ++j) {
                        verts[stride*e0 + offset + 3 + j] += v[j];
                        verts[stride*e1 + offset + 3 + j] += v[j];
                        verts[stride*e2 + offset + 3 + j] += v[j];
                    }
                }
            }

            vec3.forEach(verts, stride, 3, 0, function(v) {
                vec3.normalize(v, v);
            });

            vec3.forEach(verts, stride, 9, 0, function(v) {
                vec3.normalize(v, v);
            });

            // create webgl buffers
            this.buffers.map.vert = webgl.makeVertexBuffer(new Float32Array(verts));
            this.buffers.map.face = webgl.makeElementBuffer(new Uint16Array(faces));
            this.buffers.map.line = webgl.makeElementBuffer(new Uint16Array(geom_data.lines));

            this.face_count = geom_data.faces.length;
            this.line_count = geom_data.lines.length;
            this.map_vert_stride_bytes = (6 + 6 + 2) << 2;
        };

        World.prototype.draw = function(env) {
            if (!this.buffers.map.vert)
                return;

            gl.disable(gl.BLEND);
            gl.enable(gl.CULL_FACE);
            gl.cullFace(gl.BACK);
            gl.enable(gl.DEPTH_TEST);

            var USE_GRID = true;
            var USE_MAP = true;
            var USE_LINES = true;
            var USE_COAST = true;
            var USE_BORDER = true;

            var projection_blend = smoothstep(env.projection.blend);
            var is_flat = projection_blend < 0.25;
            var self = this;

            if (USE_GRID) {
                var pgm = this.programs.grid.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniformSampler2D('t_blur', this.textures.blur);
                pgm.uniformSampler2D('t_pattern', this.textures.pattern);
                pgm.uniform2fv('pattern_scale', PATTERN_SCALE);
                pgm.uniform1f('blend', projection_blend);

                //地球海洋颜色
                if (env.palette === 'dark') {
                  // pgm.uniform3f('color0', 0.07, 0.09, 0.07);
                  // pgm.uniform3f('color1', 0.36, 0.41, 0.36);

                  pgm.uniform3f('color1', 6/255.0, 43/255.0, 60/255.0);
                  // pgm.uniform3f('color1', 1, 1, 1);
                } else {
                    pgm.uniform3f('color0', 0.93, 0.95, 0.93);
                    pgm.uniform3f('color1', 0.42, 0.48, 0.42);
                }

                var stride = this.grid_vert_stride_bytes;
                webgl.bindVertexBuffer(this.buffers.grid.vert);
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, stride, 48);

                pgm.uniform4f('color', 1, 1, 1, 1);
                webgl.bindElementBuffer(this.buffers.grid.elem);

                pgm.uniform1f('offset_x', 0);
                gl.drawElements(gl.TRIANGLES, this.grid_elem_count, gl.UNSIGNED_SHORT, 0);

                if (is_flat) {
                    pgm.uniform1f('offset_x', -20);
                    gl.drawElements(gl.TRIANGLES, this.grid_elem_count, gl.UNSIGNED_SHORT, 0);
                    pgm.uniform1f('offset_x', 20);
                    gl.drawElements(gl.TRIANGLES, this.grid_elem_count, gl.UNSIGNED_SHORT, 0);
                }
            }

            if (USE_MAP) {
                var pgm = this.programs.main.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniformSampler2D('t_blur', this.textures.blur);
                pgm.uniform1f('blend', projection_blend);

                pgm.uniform3fv('view_pos', env.camera.viewPos);
                pgm.uniform3fv('light_pos', env.light.position);


                var stride = this.map_vert_stride_bytes;
                webgl.bindVertexBuffer(this.buffers.map.vert);
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                pgm.vertexAttribPointer('normal', 3, gl.FLOAT, false, stride, 12);
                pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                pgm.vertexAttribPointer('normal2', 3, gl.FLOAT, false, stride, 36);
                pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, stride, 48);

                pgm.uniform1f('alpha', 1.0);

                //地球大陆颜色
                // if (env.palette === 'dark') {
                //     pgm.uniform3f('color0', 0.10, 0.12, 0.11);
                //     pgm.uniform3f('color1', 0.20, 0.23, 0.21);
                // } else {
                //     pgm.uniform3f('color0', 0.41, 0.61, 0.48);
                //     pgm.uniform3f('color1', 0.51, 0.69, 0.53);
                // }

                gl.disable(gl.BLEND);
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.BACK);
                gl.enable(gl.DEPTH_TEST);

                //gl.depthFunc(gl.ALWAYS);
                webgl.bindElementBuffer(this.buffers.map.face);
                _.each(this.countriesAll, function(c, index) {
                  

                  if(c.iso3 == 'CHN') {
                    //palette: 调色板，可选dark和light
                    //color0不参与颜色设置，设置为任意颜色均可
                    pgm.uniform3f('color1',13/255.0, 255/255.0, 255/255.0);
                    pgm.uniform3f('color0',0, 0, 0); 

                    //给中国贴图
                    
                  } else {
                    pgm.uniform3f('color1', 6.0/255.0, 82.0/255.0, 117.0/255.0);
                    pgm.uniform3f('color0',0, 0, 0);
                  }


                    pgm.uniform1f('height', (index == self.extruded_country_index) ? EXTRUDE_HEIGHT : 0.0);

                    pgm.uniform1f('tone', c.tone);
                    pgm.uniform1f('offset_x', 0);
                    gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);

                    if (is_flat) {
                        pgm.uniform1f('offset_x', -20);
                        gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);
                        pgm.uniform1f('offset_x', 20);
                        gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);
                    }
                });
                gl.depthFunc(gl.LESS);

                if (USE_COAST) {
                    gl.disable(gl.CULL_FACE);
                    pgm.uniform1f('tone', 0.50);
                    pgm.uniform1f('offset_x', 0);
                    gl.drawElements(gl.TRIANGLES, this.coast_count, gl.UNSIGNED_SHORT, this.coast_start << 1);

                    if (is_flat) {
                        pgm.uniform1f('offset_x', -20);
                        gl.drawElements(gl.TRIANGLES, this.coast_count, gl.UNSIGNED_SHORT, this.coast_start << 1);
                        pgm.uniform1f('offset_x', 20);
                        gl.drawElements(gl.TRIANGLES, this.coast_count, gl.UNSIGNED_SHORT, this.coast_start << 1);
                    }
                }

                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
                gl.disable(gl.DEPTH_TEST);
                gl.enable(gl.CULL_FACE);

                // highlight
                if (env.pick_index >= 0) {
                    var c = this.countries[env.pick_index];
                    pgm.uniform1f('tone', 1.0);
                    pgm.uniform1f('alpha', 0.5);
                    pgm.uniform1f('offset_x', 0);
                    pgm.uniform1f('height', (env.pick_index == self.extruded_country_index) ? EXTRUDE_HEIGHT : 0.0);

                    gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);
                }
                gl.disable(gl.CULL_FACE);
            }

            if (USE_LINES) {
                gl.enable(gl.DEPTH_TEST);
                gl.depthMask(false);

                //地图边界
                var pgm = this.programs.line.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                pgm.vertexAttribPointer('normal', 3, gl.FLOAT, false, stride, 12);
                pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                pgm.vertexAttribPointer('normal2', 3, gl.FLOAT, false, stride, 36);
                pgm.uniform1f('blend', projection_blend);
                pgm.uniform4f('color', 1,1,1, 0.125);
                pgm.uniform1f('height', 0);
                webgl.bindElementBuffer(this.buffers.map.line);
                gl.drawElements(gl.LINES, this.line_count, gl.UNSIGNED_SHORT, 0);

                gl.depthMask(true);
            }

            if (USE_BORDER) {
                if (env.pick_index !== this.bordered_country_index) {
                    // border should match pick index
                    this.set_border(env.pick_index);
                }

                if (this.border.count) {
                    var pgm = this.programs.line.use();
                    pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                    pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                    pgm.vertexAttribPointer('normal', 3, gl.FLOAT, false, stride, 12);
                    pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                    pgm.vertexAttribPointer('normal2', 3, gl.FLOAT, false, stride, 36);
                    pgm.uniform1f('blend', projection_blend);
                    pgm.uniform1f('height', (this.bordered_country_index == this.extruded_country_index) ? EXTRUDE_HEIGHT : 0.0);
                    pgm.uniform4f('color', 1,1,1, 0.5);
                    webgl.bindElementBuffer(this.border.buffer);
                    gl.lineWidth(2);
                    gl.drawElements(gl.LINES, this.border.count, gl.UNSIGNED_SHORT, 0);
                    gl.lineWidth(1);
                }
            }

            gl.disable(gl.DEPTH_TEST);
            gl.disable(gl.CULL_FACE);
        };

        World.prototype.pick = (function() {

            var mvp_pick = mat4.create();
            var pick_size = 4;
            var pick_pixels = new Uint8Array((pick_size*pick_size) << 2);

            var test_count = 0;

            var get_pick_framebuffer = (function() {

                var fb = null;
                var tex_color = null;
                var rb_depth = null;

                function create_pick_framebuffer() {
                    fb = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

                    var tex_color = webgl.createTexture2D({ size:pick_size });
                    gl.bindTexture(gl.TEXTURE_2D, tex_color);
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex_color, 0);

                    var rb_depth = gl.createRenderbuffer();
                    gl.bindRenderbuffer(gl.RENDERBUFFER, rb_depth);
                    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, pick_size, pick_size);
                    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, rb_depth);
                    gl.bindRenderbuffer(gl.RENDERBUFFER, null);

                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                }

                return function() {
                    if (!fb) {
                        create_pick_framebuffer();
                    }
                    return fb;
                };

            })();

            function pick(env, mx, my) {
                // setup viewport & projection matrix
                var vp = env.camera.viewport;
                var mvp = mvp_pick;
                var dx = pick_size;
                var dy = pick_size;
                mat4.identity(mvp);
                mat4.translate(mvp, mvp, [
                         (vp[2] - 2*(mx - vp[0])) / dx,
                        -(vp[3] - 2*(my - vp[1])) / dy,
                         0]);
                mat4.scale(mvp, mvp, [vp[2]/dx, vp[3]/dy, 1]);
                mat4.multiply(mvp, mvp, env.camera.mvp);

                var fb = get_pick_framebuffer();
                gl.viewport(0, 0, pick_size, pick_size);
                gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

                gl.clearColor(0, 0, 1, 0);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

                // DRAW ALL THE STUFF
                gl.disable(gl.BLEND);
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.BACK);
                gl.enable(gl.DEPTH_TEST);

                var pgm = this.programs.pick.use();
                pgm.uniformMatrix4fv('mvp', mvp);
                // console.log(mvp)
                webgl.bindVertexBuffer(this.buffers.map.vert);

                var stride = this.map_vert_stride_bytes;
                var offset = (env.projection.blend < 0.5) ? 0 : 24;
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, offset);
                webgl.bindElementBuffer(this.buffers.map.face);
                  
                // console.log(this.countries)
                _.each(this.countries, function(country, index) {
                    pgm.uniform1f('color', index/255);
                    gl.drawElements(gl.TRIANGLES, country.face_count, gl.UNSIGNED_SHORT, country.face_offset << 1);
                });

                // then draw the coast

                gl.disable(gl.CULL_FACE);
                gl.disable(gl.DEPTH_TEST);
                gl.readPixels(0, 0, pick_size, pick_size, gl.RGBA, gl.UNSIGNED_BYTE, pick_pixels);
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                gl.viewport(vp[0], vp[1], vp[2], vp[3]);

                // find the most frequent index
                var best_index = -1;
                var best_count = 0;
                var counts = {};
                for (var i = 0; i < pick_pixels.length; i += 4) {
                    if (pick_pixels[i + 3]) {
                        var bubble_index = (pick_pixels[i + 1] << 8) | pick_pixels[i + 0];
                        var count = counts[bubble_index] || 0;
                        counts[bubble_index] = ++count;
                        if (count > best_count) {
                            best_index = bubble_index;
                            best_count = count;
                        }
                    }
                }
                // console.log(best_index)
                test_count++;
                return best_index;
            }

            return pick;
        })();
        // end pick

        World.prototype.set_border = function(country_index) {
            if (country_index < 0 ) {
                this.border.count = 0;
                this.bordered_country_index = -1;
                return;
            }

            var country = this.countries[country_index];

            var lines = [];
            var borders = country.borders;
            var last = -1;
            for (var i = 0; i < borders.length; ++i) {
                var e = borders[i];
                if (e == 0xffff) {
                    last = -1;
                    continue;
                }
                if (last >= 0) lines.push(last, e);
                last = e;
            }

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.border.buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(lines), gl.STATIC_DRAW);
            this.border.count = lines.length;
            this.bordered_country_index = country_index;
        };

        return World;

    })();

})();

var GTW = GTW || {};

(function() {

    GTW.Labels = (function() {

        var TEXTURE_SIZE = 2048;

        function Labels() {
            this.buffers = {
                vert: null,
            };

            this.programs = {
                label: webgl.getProgram('label'),
            };

            this.texture = webgl.createTexture2D({
                size: TEXTURE_SIZE,
                mipmap: true,
                min: gl.LINEAR_MIPMAP_LINEAR,
                aniso: 4,
                format: gl.LUMINANCE,
            });
            // stop webgl complaining while loading
            gl.generateMipmap(gl.TEXTURE_2D);

            this.country_count = 0;
            this.labels = [];
            this.geoip_iso2 = null;

            var self = this;
            this.load_label_data(function() {
                self.render_labels('en');
                self.project_labels('ecef');
            });
        }

        Labels.prototype.load_label_data = function(callback) {
            var self = this;

            $.getJSON(GTW.resource_url('labels.json'), function(labels_data) {
                // 1. grab label names from text.json, put into labels_data
                function translate_labels_data() {
                    var lang = window.lang;

                    _.each(labels_data.countries, function(c) {
                        var id = 'MAP_COUNTRY_' + c.iso3.toUpperCase();
                        c.name = lang.getText(id);
                    });

                    _.each(labels_data.cities, function(c) {
                        var id = 'MAP_CITY_' + c.code.toUpperCase();
                        c.name = lang.getText(id);
                    });
                }
                translate_labels_data();


                function Label() {
                    // lon/lat/alt
                    this.coord = vec3.create();
                    this.coord[2] = 0.0001;    // altitude

                    // current projection
                    this.pos = vec3.create();
                    this.mat = mat4.create();

                    this.box = vec4.create();

                    this.name = '';
                    this.font_size = 0;
                }

                function add_labels(labels_data, uppercase, reject) {
                    _.each(labels_data, function(label_data) {
                        // XXX bit ugly... fix this eventually
                        if (uppercase) {
                            if (reject && label_data.font_size < 5)
                                return;
                            //if (!reject && label_data.font_size > 5)
                            //    return;
                        }


                        var label = new Label();
                        vec2.copy(label.coord, label_data.coord);
                        label.coord[2] *= 2;    // bump the height a little
                        label.name = label_data.name;
                        label.font_size = label_data.font_size;

                        if (uppercase) {
                            label.name = label.name.toUpperCase();
                        } else {
                            label.font_size = 3;
                        }

                        if (label_data.iso2)
                            label.iso2 = label_data.iso2;

                        self.labels.push(label);
                    });
                }

                // bigger countries
                add_labels(labels_data.countries, true, true);
                self.country_count = self.labels.length;

                // smaller countries & cities
                add_labels(labels_data.cities, false, false);
                add_labels(labels_data.countries, true, false);
                self.city_count = self.labels.length - self.country_count;

                // set up vertex buffers
                var n_verts = 6 * 5 * self.labels.length;
                self.buffers.vert = webgl.makeVertexBuffer(new Float32Array(n_verts));

                // done
                callback();
            });
        };

        //国家名称背景
        Labels.prototype.render_labels = function(lang) {
            // set up a 2K canvas and rendering context
            var canv = document.createElement('canvas');
            canv.width = canv.height = TEXTURE_SIZE;
            var ctx = canv.getContext('2d');
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canv.width, canv.height);

            ctx.font = '30px Ubuntu Mono';
            ctx.fillStyle = 'white';
            ctx.textBaseline = 'top';

            // render all labels to canvas
            var tpos = [0, 0];
            var th = 35;

            _.each(this.labels, function(label) {
                var text = label.name;
                var tw = ctx.measureText(text).width;

                if (tpos[0] + tw >= canv.width) {
                    tpos[0] = 0;
                    tpos[1] += th;
                }

                ctx.fillText(text, tpos[0], tpos[1] - 0);

                vec4.set(label.box, tpos[0], tpos[1], tpos[0] + tw, tpos[1] + th);
                vec4.scale(label.box, label.box, 1/TEXTURE_SIZE);

                tpos[0] += tw;
            });

            // update texture
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, canv);
            gl.generateMipmap(gl.TEXTURE_2D);
        };

        Labels.prototype.project_labels = function(projection_type) {
            if (!this.labels.length) return;

            var project = (projection_type == 'ecef') ? GTW.project_ecef : GTW.project_mercator;
            var dir = vec3.create();
            var v0 = vec3.create();
            var v1 = vec3.create();

            function get_matrix(out, v, scale_x, scale_y) {
                mat4.identity(out);
                //mat4.rotateX(l.mat, l.mat, HALF_PI);

                //var scale_y = 0.01 * font_size;
                //var scale_x = scale_y * width;

                if (projection_type == 'ecef') {
                    vec3.normalize(dir, v);
                    vec3.set(v0, 0, 1, 0);
                    vec3.cross(v0, dir, v0);
                    vec3.normalize(v0, v0);
                    vec3.cross(v1, v0, dir);

                    out[0] = v0[0];
                    out[1] = v0[1];
                    out[2] = v0[2];

                    out[4] = dir[0];
                    out[5] = dir[1];
                    out[6] = dir[2];

                    out[8] = v1[0];
                    out[9] = v1[1];
                    out[10] = v1[2];

                    mat4.rotateX(out, out, HALF_PI);
                }

                mat4.scale(out, out, [scale_x, scale_y, 1]);
                out[12] = v[0];
                out[13] = v[1];
                out[14] = v[2];
            }

            var verts = [];
            var v = vec3.create();
            var quad = [ -1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, -1, ];
            var self = this;

            _.each(this.labels, function(label) {
                // deal with extruded country
                if (label.iso2 == self.geoip_iso2) {
                    label.coord[2] = 0.015;
                } else {
                    label.coord[2] = 0.001;
                }

                project(label.pos, label.coord);
                // console.log(label.pos)
                // console.log(`${label.pos};${label.coord}`)

                var scale = 1.00*label.font_size;
                get_matrix(label.mat, label.pos,
                    scale*(label.box[2] - label.box[0]),
                    scale*(label.box[3] - label.box[1]));

                for (var i = 0; i < quad.length; i += 2) {
                    // position
                    v[0] = quad[i + 0];
                    v[1] = quad[i + 1];
                    v[2] = 0;
                    vec3.transformMat4(v, v, label.mat);
                    verts.push(v[0], v[1], v[2]);

                    // texcoord
                    v[0] = 0.5*(1 + quad[i + 0]);
                    v[1] = 0.5*(1 + quad[i + 1]);
                    v[0] = lerp(label.box[2], label.box[0], v[0]);
                    v[1] = lerp(label.box[3], label.box[1], v[1]);
                    verts.push(v[0], v[1]);
                }
            });

            // update vertex buffer
            webgl.bindVertexBuffer(this.buffers.vert);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(verts));
        };

        var v = vec3.create();

        Labels.prototype.draw = function(env) {
            if (this.labels.length == 0)
                return;

            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            gl.depthMask(false);

            // center of circle of interest
            env.project(v, env.geocam.coord);
            // console.log(v)
            var MERCATOR_RADIUS = 3;
            var ECEF_RADIUS = 10;
            var radius = lerp(MERCATOR_RADIUS, ECEF_RADIUS, env.projection.blend);

            var pgm = this.programs.label.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniform4f('circle_of_interest', v[0], v[1], v[2], radius);
            pgm.uniformSampler2D('t_color', this.texture);

            webgl.bindVertexBuffer(this.buffers.vert);
            pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, 20, 0);
            pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, 20, 12);

            // country labels
            pgm.uniform1i('inside', 0);
            gl.drawArrays(gl.TRIANGLES, 0, 6 * this.country_count);

            // city labels
            pgm.uniform1i('inside', 1);
            gl.drawArrays(gl.TRIANGLES, 6 * this.country_count, 6 * this.city_count);

            gl.depthMask(true);
            gl.disable(gl.BLEND);
        };

        return Labels;

    })();

})();

var GTW = window.GTW || {};
GTW.init_scape = function(env, missiles) {

    var Body = (function() {
        function Body() {
            this.pos = vec3.create();
            this.rot = quat.create();
            this.tan = vec3.create();

            this.forward = vec3.fromValues(0, 0, -1);   // forward vector
            this.up = vec3.fromValues(0, 1, 0);   // forward vector
        }

        var P = vec3.create();
        var P0 = vec3.create();

        var T = vec3.create();
        var T0 = vec3.create();

        var Q = quat.create();
        var Q0 = quat.create();

        var U0 = vec3.create();
        var U = vec3.create();

        Body.prototype.move_to = function(pos, dir, up) {
            vec3.copy(P, pos);          // next pos
            vec3.copy(P0, this.pos);    // curr pos
            vec3.copy(T0, this.tan);    // curr tan
            vec3.sub(T, P, P0);         // next tan
            vec3.normalize(T, T);

            quat.copy(Q0, this.rot);    // curr rot

            // rotate toward up
            if (up) {
                vec3.transformQuat(U0, this.up, this.rot);  // curr up
                vec3.copy(U, up);   // next up
                var dot = vec3.dot(U0, U);
                if (dot < 0.999999) {
                    vec3.cross(Q, U0, U);
                    Q[3] = 1 + dot;
                    quat.normalize(Q, Q);
                    quat.multiply(Q, Q, Q0);
                    if (quat.dot(Q0, Q) < 0)
                        quat.scale(Q, Q, -1);
                }
                //vec3.copy(this.tan, T);
                quat.copy(this.rot, Q);
                quat.copy(Q0, Q);
            }

            if (dir) {
                vec3.normalize(this.tan, dir);
                quat.rotationTo(this.rot, this.forward, this.tan);
            } else {
                var dot = vec3.dot(T0, T);
                if (dot < 0.999999) {
                    vec3.cross(Q, T0, T);
                    Q[3] = 1 + dot;
                    quat.normalize(Q, Q);
                    quat.multiply(Q, Q, Q0);
                    if (quat.dot(Q0, Q) < 0)
                        quat.scale(Q, Q, -1);
                }
                vec3.copy(this.tan, T);
                quat.copy(this.rot, Q);
            }

            vec3.copy(this.pos, P);
        };

        Body.prototype.follow = function(pos, rot, lp, lr) {
            vec3.lerp(this.pos, this.pos, pos, lp || 0.05);
            vec4.lerp(this.rot, this.rot, rot, lr || 0.02);
            quat.normalize(this.rot, this.rot);
        };

        Body.prototype.roll = function(theta) {
            var R = this.rot;
            quat.rotateZ(R, R, theta);
        };

        return Body;
    }());




    var body = new Body();
    var body2 = new Body();

    // source/target coords
    var c0 = [ -180, 0, 0 ];
    var c1 = [ 180, 0, 0 ];

    var rows = 128;
    var cols = 512;

    var verts = [];
    var texcoords = [];
    var quads = [];
    var lines = [];

    // source and target of the missile
    var source_coord = vec3.fromValues( c0[0], c0[1], 0 );
    var target_coord = vec3.fromValues( c1[0], c1[1], 0 );

    // directions along the map
    var u_vec = vec3.create();  // camera direction
    var v_vec = vec3.create();  // horizon direction

    vec3.sub(u_vec, target_coord, source_coord);
    vec2.normalize(u_vec, u_vec);
    vec2.perp(v_vec, u_vec);

    var u_dist = 360.0;
    var v_dist = 0.200 * u_dist;

    vec2.scale(u_vec, u_vec, u_dist);
    vec2.scale(v_vec, v_vec, v_dist);

    var P = vec4.create();
    var N = vec3.create();

    var freq = 3.0;

    function fbm(u, v) {
        u += noise_offset[0];
        v += noise_offset[1];

        var n = 16, h = 0, w = 0.5;
        while (n--) {
            h += w * noise.perlin2(u, v)
            w *= 0.5; u *= 2; v *= 2;
        }
        return h;
    }

    var pow = Math.pow;
    var abs = Math.abs;

    function get_terrain_center_v(u) {
        return 0.5 + 0.50*noise.perlin2(meander*u + noise_offset[0], noise_offset[1]);
    }

    var noise_offset = vec2.create();
    var gulley_width = 2.5;
    var mountain_power = 3.0;
    var meander = 2.0;

    // u,v to (lon,lat,alt)
    var get_terrain_coord = (function() {
        var P = vec3.create();

        return function(out, u, v, n) {
            if (typeof n == 'undefined') n = 1;

            vec3.set(P, 0, 0, 0);
            vec3.scaleAndAdd(P, target_coord, u_vec, u);
            vec3.scaleAndAdd(P, P, v_vec, 2*(v-0.5));

            var center = get_terrain_center_v(u);
            var d = abs(v - center);
            var alt = 0.05 + 0.95*smoothstep( clamp(gulley_width*d, 0, 1) ); //0.5-2.5

            var terrain = n * (fbm(8*freq*u, freq*v) + 1);
            alt *= pow(terrain, mountain_power); // 0.5-3
            alt -= 0.075;

            if (alt < 0) {
                alt = 0;
            } else {
                alt *= 2;   // higher mountains
            }

            // rolling ground
            var alt2 = (1 + noise.perlin2(8*u, 1*v))*0.25 + 0.05*fbm(8*u, v);
            alt += alt2;

            P[2] = 0.500 * alt;
            vec3.copy(out, P);
            //env.project(out, P);
        }
    }());

    // u,v to xyz
    function get_terrain_position(out, u, v, n) {
        get_terrain_coord(out, u, v, n);
        env.project(out, out);
    }

    for (var i = 0; i < rows; ++i) {
        for (var j = 0; j < cols; ++j) {
            var u = j/(cols-1);
            var v = i/(rows-1);

            // add the coord
            get_terrain_position(P, u, v);
            verts.push(P[0], P[1], P[2], 0.0);
            texcoords.push(j, i);

            // add the grid line elements
            var e0 = i*cols + j;
            var e1 = e0 + 1;
            var e2 = e0 + cols;

            if (j < cols - 1)
                lines.push(e0, e1);
            if (i < rows - 1)
                lines.push(e0, e2);

            if (i < rows - 1) {
                if (i && !j) quads.push(e0);
                quads.push(e0, e2);
                if (i < rows - 2 && j == cols - 1) quads.push(e2);
            }
        }
    }

    verts = new Float32Array(verts);
    var n_verts = verts.length/4;
    quads = new Uint16Array(quads);
    var n_quads = quads.length;
    lines = new Uint16Array(lines);
    var n_lines = lines.length;
    texcoords = new Float32Array(texcoords);

    var buffers = {
        verts: webgl.makeVertexBuffer(verts),
        quads: webgl.makeElementBuffer(quads),
        lines: webgl.makeElementBuffer(lines),
        texcoords: webgl.makeVertexBuffer(texcoords)
    };

    var textures = {
        pattern: webgl.loadTexture2D(GTW.resource_url('textures/pattern2.png'), { mipmap:true, wrap:gl.REPEAT, aniso:4 }),
    };

    var programs = {
        'scape': webgl.getProgram('scape'),
        'scape_lines': webgl.getProgram('scape_lines')
    };

    // update terrain with new offsets
    function reset_terrain() {
        noise_offset[0] = 100*Math.random();
        noise_offset[1] = 100*Math.random();
        gulley_width = lerp(1.5, 5.5, Math.random());
        mountain_power = lerp(2.0, 3.0, Math.random());
        meander = lerp(1.0, 7.0, Math.random());

        var dp = 0;
        for (var i = 0; i < rows; ++i) {
            for (var j = 0; j < cols; ++j) {
                var u = j/(cols-1);
                var v = i/(rows-1);
                get_terrain_position(P, u, v);
                verts[dp + 0] = P[0];
                verts[dp + 1] = P[1];
                verts[dp + 2] = P[2];
                dp += 4;
            }
        }

        webgl.bindVertexBuffer(buffers.verts);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, verts);
    }

    // camera path
    var P0 = vec3.create();
    vec3.copy(P0, target_coord);

    var P1 = vec3.clone(P0);
    vec3.scaleAndAdd(P1, P0, u_vec, 1.0);

    env.project(P0, P0);
    env.project(P1, P1);

    var H = 0.15;

    var pos = vec3.create();
    var dir = vec3.create();
    vec3.sub(dir, P1, P0)

    var up = vec3.create();
    vec3.add(up, P0, P1);
    vec3.normalize(up, up);

    var hh = 0.0;

    var land_color_base = (function() {
        var color0 = vec4.fromValues(0.10, 0.12, 0.11, 1);
        var color1 = vec4.fromValues(0.20, 0.23, 0.21, 1);
        var tone = 0.1;
        var land_color = vec4.create();
        vec4.lerp(land_color, color0, color1, tone);
        return land_color;
    }());
    var land_color = vec4.clone(land_color_base);
    var land_color1 = vec4.clone(land_color_base);

    var fog_color_base = vec3.fromValues(0.01, 0.05, 0.02);
    var fog_color = vec3.clone(fog_color_base);
    var fog_color1 = vec3.clone(fog_color_base);

    function draw() {
        vec3.lerp(fog_color, fog_color, fog_color1, 0.05);
        vec3.lerp(land_color, land_color, land_color1, 0.05);

        // 2nd order lerp to avoid flashing
        vec3.lerp(fog_color1, fog_color1, fog_color_base, 0.05);
        vec3.lerp(land_color1, land_color1, land_color_base, 0.05);

        // solid

        var pgm = programs.scape.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4fv('color', land_color);
        pgm.uniform3fv('fog_color', fog_color);
        pgm.uniformSampler2D('pattern', textures.pattern);

        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
        webgl.bindVertexBuffer(buffers.texcoords);
        pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, 0, 0);

        webgl.bindElementBuffer(buffers.quads);

        gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.POLYGON_OFFSET_FILL);
        gl.polygonOffset(1, 1);

        gl.drawElements(gl.TRIANGLE_STRIP, n_quads, gl.UNSIGNED_SHORT, 0);

        gl.disable(gl.POLYGON_OFFSET_FILL);

        // lines

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        var pgm = programs.scape_lines.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4f('color', 140/255, 160/255, 138/255, 0.5);
        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
        webgl.bindElementBuffer(buffers.lines);
        gl.drawElements(gl.LINES, n_lines, gl.UNSIGNED_SHORT, 0);
    }

    var P0 = vec3.create();
    var P1 = vec3.create();
    var PC = vec3.create();
    var F = vec3.create();
    var N = vec3.create();

    var duration = 10;
    var time = duration + 1;

    function expovariate(mu) {
        return -mu * Math.log(1.0 - MersenneTwister.random());
    }

    var next_missile_time = 0;
    var mean_missile_interval = 0.30;

    var camera_shake = 0;
    var do_reset = true;

    function reset() {
        time = 0;
        reset_terrain();
        next_missile_time = expovariate(mean_missile_interval);
        do_reset = true;
    }

    function sample_active_system_ids() {
        var active_ids = [];
        GTW.systems_foreach(function(system) { system.enabled && active_ids.push(system.id) });
        return _.sample(active_ids);
    }

    function update() {
        var u = (time / duration);
        u *= 0.8;
        time += 1/60;

        var center = get_terrain_center_v(u);
        get_terrain_position(P0, u, center, 0);
        get_terrain_position(P1, u+0.01, center, 0);
        vec3.sub(F, P1, P0);
        vec3.normalize(F, F);
        vec3.normalize(N, P0);

        get_terrain_position(P0, u, center);
        vec3.scaleAndAdd(P0, P0, N, 0.5);

        if (do_reset) {
            vec3.copy(PC, P0);
            body2.move_to(PC, F, N);
            vec3.copy(body.pos, body2.pos);
            vec3.copy(body.rot, body2.rot);
            do_reset = false;
        } else {
            vec3.lerp(PC, PC, P0, 0.1);
            body2.move_to(PC, null, N);
            body.follow(body2.pos, body2.rot, 0.1, 0.05);
        }

        body.roll(0.010*noise.perlin2(env.time, 0.934));
        //body.look(P0, F, N);


        // fire off some missile impacts here
        // var source_coord = P0;
        // var target_coord = P1;
        // var target_u = Random.uniform(u + 0.2, 1.0);
        // var target_v = get_terrain_center_v(target_u) + Random.gauss(0, 0.1);
        // var source_u = Random.uniform(0, 1);
        // var source_v = Random.uniform(0, 1);
        // get_terrain_coord(target_coord, target_u, target_v);
        // get_terrain_coord(source_coord, source_u, source_v);

        // missiles.launch(env, system_id, target_coord, source_coord, 30);
        if (time > next_missile_time) {
            next_missile_time = time + expovariate(mean_missile_interval);
            var system_id = sample_active_system_ids();
            
            if (Math.random() < 0.3) {
                var target_coord = P0;
                var source_coord = null;
                var dist = Math.random();
                var target_u = u + lerp(0.01, 0.2, dist);
                var target_v = get_terrain_center_v(target_u) + Random.gauss(0, 0.1);
                get_terrain_coord(target_coord, target_u, target_v);
                // var missile = missiles.launch(env, system_id, target_coord, source_coord);
                // vec3.scaleAndAdd(fog_color1, fog_color1, missile.color, 0.5*dist);
                // vec3.scaleAndAdd(land_color1, land_color1, missile.color, 0.5*(1-dist));

                // if (dist < 0.1) {
                //     env.flash(missile.color);
                //     camera_shake = 1;
                // }

            } else {
                var source_coord = P0;
                var target_coord = P1;
                var target_u = Random.uniform(u + 0.2, 1.0);
                var target_v = get_terrain_center_v(target_u) + Random.gauss(0, 0.1);
                var source_u = Random.uniform(0, 1);
                var source_v = Random.uniform(0, 1);
                get_terrain_coord(target_coord, target_u, target_v);
                get_terrain_coord(source_coord, source_u, source_v);
                missiles.launch(env, system_id, target_coord, source_coord, 30,null);
            }
        }
    }

    function update_camera() {
        vec3.copy(P0, body.pos);
        env.camera.update_quat(P0, body.rot);

        if (camera_shake > 0.001) {
            var t = 5*env.time;
            var s = 3*Math.sin(Math.PI*camera_shake);
            env.camera.mvp[12] += s * 0.2*fbm(t, 0.3123123);
            env.camera.mvp[13] += s * 1.5*(fbm(t, 0.9123123) - 0.125);
            mat4.invert(env.camera.mvpInv, env.camera.mvp);
            camera_shake *= 0.85;
        }
    }

    return {
        reset: reset,
        draw: draw,
        update: update,
        update_camera: update_camera,
        shake: function() { camera_shake = 1 }
    };

}

var GTW = window.GTW || {};
GTW.init_demo = function(env, missile_system) {

    var scape = GTW.init_scape(env, missile_system);

    var missile = null;
    var system_color = vec3.create();

    var Body = (function() {
        function Body() {
            this.pos = vec3.create();
            this.rot = quat.create();
        }

        var origin = vec3.create();
        var yup = vec3.fromValues(0, 1, 0);

        var F = vec3.create();
        var R = vec3.create();
        var U = vec3.create();

        var F0 = vec3.fromValues(0, 0, 1);

        var m4 = mat4.create();
        var m3 = mat3.create();

        var ref = vec3.create();

        // very confused by all this... cross-products, coord systems and pov
        // http://www.songho.ca/opengl/gl_lookattoaxes.html
        Body.prototype.look = function(eye, dir, up) {
            up = up || yup;
            vec3.copy(this.pos, eye);

            vec3.add(ref, eye, dir);
            mat4.lookAt(m4, eye, ref, up);
            mat3.fromMat4(m3, m4);
            mat3.invert(m3, m3);

            var R = this.rot;
            quat.fromMat3(R, m3);
            quat.normalize(R, R);
        };

        var tmp = vec3.create();
        Body.prototype.look_at = function(eye, ref, up) {
            ref = ref || origin;
            up = up || yup;
            vec3.sub(tmp, ref, eye);
            this.look(eye, tmp, up);
        };

        Body.prototype.move_forward = function() {
            vec3.set(tmp, 0, 0, 1);
            vec3.transformQuat(tmp, tmp, this.rot);
            var speed = 0.1;
            vec3.scaleAndAdd(this.pos, this.pos, tmp, speed);
        };

        Body.prototype.follow = function(pos, rot, lp, lr) {
            vec3.lerp(this.pos, this.pos, pos, lp || 0.05);
            vec4.lerp(this.rot, this.rot, rot, lr || 0.02);
            quat.normalize(this.rot, this.rot);
        };

        Body.prototype.roll = function(theta) {
            var R = this.rot;
            quat.rotateZ(R, R, theta);
        };

        return Body;
    }());


    function make_gl_matrix_temps(gl_matrix_type) {
        var N_TEMPS = 16;
        return _.times(N_TEMPS, gl_matrix_type.create);
    }

    var temps = {
        vec3: make_gl_matrix_temps(vec3),
        vec4: make_gl_matrix_temps(vec4),
        quat: make_gl_matrix_temps(quat),
        mat4: make_gl_matrix_temps(mat4),
        mat3: make_gl_matrix_temps(mat3),
    };

    var bodies = {
        missile: new Body(),
        player: new Body(),
        orbit: new Body(),
    };

    function init_missile(source_coord, target_coord, color, n_sides) {
        var source_coord = vec3.clone(source_coord);
        var target_coord = vec3.clone(target_coord);

        var cdist = vec2.distance(source_coord, target_coord);
        var height = 0.005*cdist;

        var tmp1 = vec3.create();
        var tmp2 = vec3.create();

        var dp = 0;
        var v = tmp1;
        var c = tmp2;

        var N_STEPS = 103;
        var verts = new Float32Array(4 * N_STEPS * 8);
        for (var i = 0; i < N_STEPS; ++i) {
            var u = i/(N_STEPS-1);
            vec3.lerp(c, source_coord, target_coord, u);
            var alt = height * Math.sin(u * Math.PI) * 0.85;
            c[2] += alt;
            env.project(v, c);

            vec3.save(v, verts, dp + 0);
            verts[dp + 3] = -u;

            vec3.save(v, verts, dp + 4);
            verts[dp + 7] = u;

            dp += 8;
        }
        var vert_count = dp/4;

        // path, tangents etc
        var path = [];
        var sp = 0;
        var v0 = tmp1;
        var v1 = tmp2;
        var tan = vec3.create();
        for (var i = 0; i < N_STEPS; ++i) {
            vec3.load(v0, verts, sp);
            path.push( v0[0], v0[1], v0[2] );

            if (i < N_STEPS - 1) {
                vec3.load(v1, verts, sp + 8);
                vec3.sub(tan, v1, v0);
            }

            path.push( tan[0], tan[1], tan[2] );

            sp += 8;
        }

        var Frame = (function() {
            function Frame() {
                this.P = vec3.create();
                this.T = vec3.create();
                this.Q = quat.create();
            }
            Frame.prototype.update = function() {
                vec3.normalize(this.T, this.T);
                quat.rotationTo(this.Q, [0,0,1], this.T);
            };
            Frame.prototype.transform = function(out, v) {
                vec3.transformQuat(out, v, this.Q);
                vec3.add(out, out, this.P);
            };
            return Frame;
        }());

        var frames = [];
        for (var sp = 0; sp < path.length; sp += 6) {
            var frame = new Frame();
            vec3.load(frame.P, path, sp + 0);
            vec3.load(frame.T, path, sp + 3);
            frame.update();
            quat.rotateZ(frame.Q, frame.Q, TWO_PI * i/N_STEPS);
            frames.push(frame);
        }

        var tube_verts = [];
        var ring_verts = [];

        (function() {
            // this section creates the line strips detailing the rings
            var s = 0;

            var v0 = vec3.create(); // last vert
            var v1 = vec3.create();  // curr vert

            function push_vert(arr, frame, theta, radius, side) {
                v0[0] = Math.cos(theta) * radius;
                v0[1] = Math.sin(theta) * radius;
                v0[2] = 0.0;
                frame.transform(v0, v0);
                arr.push(v0[0], v0[1], v0[2], side);
            }

            function repeat_vert(arr) {
                var sp = arr.length - 4;
                arr.push(
                    arr[sp + 0],
                    arr[sp + 1],
                    arr[sp + 2],
                    arr[sp + 3]);
            }

            var semi = n_sides < 0;
            n_sides = Math.abs(n_sides);

            var sp = 0;
            for (var i = 0; i < frames.length; ++i) {
                var frame = frames[i];
                var frame2 = frames[i + 1];

                var u = i/(N_STEPS - 1);
                var radius = lerp(0.02, 0.07, u);

                var dtheta = (semi ? Math.PI : TWO_PI) / n_sides;
                var theta = 0;
                var width = 0.00015/radius;

                for (var j = 0; j <= n_sides; ++j) {
                    var degen = i && !j;

                    if (semi && (j == n_sides)) theta = 0;

                    degen && repeat_vert(ring_verts);
                    push_vert(ring_verts, frame, theta, radius - width, -u);

                    degen && repeat_vert(ring_verts);
                    push_vert(ring_verts, frame, theta, radius + width, u);

                    if (frame2) {
                        degen && repeat_vert(tube_verts);
                        push_vert(tube_verts, frame, theta, radius, u);
                        degen && repeat_vert(tube_verts);
                        push_vert(tube_verts, frame2, theta, radius, u);
                    }

                    theta += dtheta;
                }
            }
        }());

        ring_verts = new Float32Array(ring_verts);
        tube_verts = new Float32Array(tube_verts);

        var n_ring_verts = ring_verts.length/4;
        var n_tube_verts = tube_verts.length/4;

        var buffers = {
            verts: webgl.makeVertexBuffer(verts),
            ring_verts: webgl.makeVertexBuffer(ring_verts),
            tube_verts: webgl.makeVertexBuffer(tube_verts)
        };

        var programs = {
            missile: webgl.getProgram('missile_tube'),
            simple: webgl.getProgram('simple'),
            rings: webgl.getProgram('rings')
        };

        var body = new Body();
        bodies.missile = body;
        var pos = vec3.create();
        var dir = vec3.create();
        var up = vec3.create();

        function draw(env) {
            gl.enable(gl.DEPTH_TEST);
            gl.depthMask(false);

            if (1) {
                // draw rings
                gl.lineWidth(5);
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

                var pgm = programs.rings.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniform3fv('color', color);

                webgl.bindVertexBuffer(buffers.ring_verts);
                pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, n_ring_verts);
                gl.lineWidth(1);
            }

            if (1) {
                // draw tube
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

                var pgm = programs.missile.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniform3fv('color', color);

                var mt = clamp(env.demo_time/5.0, 0, 2);
                pgm.uniform1f('time', mt);

                webgl.bindVertexBuffer(buffers.tube_verts);
                pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, n_tube_verts);
            }

            gl.depthMask(true);
            gl.disable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);

            var t = Math.max(0, env.demo_time);
            t = t / 5;  // 5 secs duration
            t = t - ~~t;    // fmod 0..1

            var f = (t * (N_STEPS - 1));    // integer/fractional part
            var i = ~~f;
            f -= i;

            var sp = 6 * i;

            vec3.set(pos, 0, 0, 0);
            vec3.set(dir, 0, 0, 0);

            for (var j = 0; j < 2; ++j) {
                f = 1-f;    // lerp
                for (var k = 0; k < 3; ++k) {
                    pos[k] += f * path[sp + k];
                    dir[k] += f * path[sp + 3 + k];
                }
                sp += 6;
            }

            body.look(pos, dir, pos);
        }

        return {
            draw: draw
        };

    }

    var stage = 0;

    function update_player_body() {
        var b0;
        var body = bodies.player;
        var camera = env.camera;

        if (env.demo_time < 5.0) {
            stage = 0;

            // "ZOOM/DESCEND"
            camera.near = 0.01;
            camera.far = 1000;

            b0 = bodies.missile;
            var t = env.demo_time/5;
            body.follow(b0.pos, b0.rot, 0.01 + t*0.50, t*t);
            body.roll(0.10*noise.perlin2(1.0*env.demo_time, 0.0));
        } else if (env.demo_time < 15.0) {
            if (stage == 0) {
                stage = 1;
                env.flash(system_color);
                scape.reset();
                missile_system.setMode('scape');
                env.draw_world = false;
            }
        } else if (env.demo_time < 20.0) {
            if (stage == 1) {
                stage = 2;
                env.flash(system_color);
                missile_system.setMode('world');
                env.draw_world = true;
            }

            // "EJECT"
            camera.near = 0.01;
            camera.far = 500;

            b0 = bodies.orbit;
            var t = (env.demo_time - 15) / 5;
            body.follow(b0.pos, b0.rot, 0.00005 + Math.pow(t, 3)*0.50, 0.2);

            // blend the camera view matrix during the exit phase
            // to get a seamless transition
            camera.update_quat(body.pos, body.rot, t);
            return;
        } else {
            // reset
        }

        camera.update_quat(body.pos, body.rot);
    }

    function update(env) {
        update_player_body();
        if (!env.draw_world) {
            scape.update();
            scape.update_camera()
        }
    }

    function draw(env) {
        // if (!env.draw_world) {
        //     scape.draw(env);
        //     missile_system.draw(env);
        // } else {
        //     // only draw for descent
        //     if (missile && env.demo_time < 5)
        //         missile.draw(env);
        // }
        missile.draw(env);
    }

    function setup(env, source_coord, target_coord) {
        var system = GTW.systems[env.solo_system_id];
        var color = system.getRGBColor();
        vec3.copy(system_color, color);
        missile = init_missile(source_coord, target_coord, color, system.n_sides);

        var b = bodies.player;
        vec3.copy(b.pos, env.camera.viewPos);
        quat.rotationTo(b.rot, [0,0,-1], env.camera.viewDir);

        // eject target
        var co = [ target_coord[0], target_coord[1], 1.6 ]
        env.project(bodies.orbit.pos, co);

        var dir = vec3.clone(bodies.orbit.pos);
        vec3.normalize(dir, dir);
        vec3.negate(dir, dir);
        quat.rotationTo(bodies.orbit.rot, [0,0,-1], dir);
    }

    function exit() {
        if (!env.draw_world) {
            missile_system.setMode('world');
            env.draw_world = true;
        }
    }

    return {
        draw: draw,
        setup: setup,
        update: update,
        exit: exit
    };

};

var GTW = window.GTW || {};
GTW.init_hedgehog = function(env) {

    var verts = new Float32Array([ 0, 0, 1, 0, 0, 1, 1, 1 ]);
    var buffers = {
        verts: webgl.makeVertexBuffer(verts),
        lines: null,
    };
    var programs = {
        simple: webgl.getProgram('simple'),
        hedgehog: webgl.getProgram('hedgehog')
    };

    var canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    var ctx = canvas.getContext('2d');

    function Card() {
        this.position = vec3.create();

        var scale = 2.0;
        this.scale = vec2.fromValues(scale*1.0, scale*0.25);
        this.texture = null;
    }

    Card.prototype.destroy = function() {
        gl.deleteTexture(this.texture);
        this.texture = null;
    };

    var cards = [];

    function setup(env, world) {
        _.each(cards, function(c) { c.destroy() });
        cards = [];
        var lines = [];

        for (var i = 0; i < 10; ++i) {
            var key = GTW.top_infected[i];
            var country = world.key_to_country[key];
            if (!country) continue;

            var rank = i + 1;

            var co = country.center;

            var card = new Card();
            var P = card.position;
            var alt = 0.5;
            vec3.set(P, co[0], co[1], alt);
            env.project(P, P);

            // line to ground
            var P0 = vec3.create();
            vec3.set(P0, co[0], co[1], 0.0);
            env.project(P0, P0);
            lines.push(P[0], P[1], P[2]);
            lines.push(P0[0], P0[1], P0[2]);

            var lang = MAP.lang;

            // text
            ctx.fillStyle = '#b1bfb1';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "#475147";
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#000';
            ctx.font = 'bold 32px "Ubuntu Mono"';
            ctx.fillText(GTW.get_country_name(country).toUpperCase(), 30, 60);


            ctx.font = 'bold 20px "Ubuntu Mono"';
            if (window.lang) {
                ctx.fillText( window.lang.getText('NUMBER_SYMBOL') + rank + " " + window.lang.getText('MOST_ATTACKED_COUNTRY'), 30, 90);
            }
            else {
                if (lang == 'ru')
                    ctx.fillText('№' + rank + " в мире по числу атак", 30, 90);                                  
                else
                    ctx.fillText('#' + rank + " MOST-ATTACKED COUNTRY", 30, 90);                
            }

            var tex = card.texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            gl.generateMipmap(gl.TEXTURE_2D);

            cards.push(card);
        }

        if (buffers.lines) {
            gl.deleteBuffer(buffers.lines);
            buffers.lines = null;
        }

        buffers.lines = webgl.makeVertexBuffer(new Float32Array(lines));
    }

    var fade = 0;
    var fade_rate = 0.02;
    var visible = false;

    function draw_lines(env) {
        var pgm = programs.simple.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4f('color', 1, 1, 1, fade*0.5);
        webgl.bindVertexBuffer(buffers.lines);
        pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.LINES, 0, cards.length * 2);
    }

    function draw_cards(env) {
        var pgm = programs.hedgehog.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniformMatrix3fv('bill', env.camera.bill);
        pgm.uniform4f('color', 1, 1, 1, 1);
        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('coord', 2, gl.FLOAT, false, 0, 0);

        _.each(cards, function(card) {
            pgm.uniform3fv('position', card.position);
            pgm.uniform2fv('scale', card.scale);
            pgm.uniformSampler2D('t_color', card.texture);
            pgm.uniform1f('fade', fade);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        });
    }

    function draw(env) {
        if (visible) {
            fade = Math.min(1, fade + fade_rate);
        } else {
            fade = Math.max(0, fade - fade_rate);
        }

        if (fade == 0) return;

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        draw_cards(env);
        draw_lines(env);

        gl.disable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
    }

    function show() {
        visible = true;
    }

    function hide() {
        visible = false;
    }

    return {
        show: show,
        hide: hide,
        draw: draw,
        setup: setup,
    };

};

var GTW = window.GTW || {};
GTW.init_connectors = function() {
    var max_lines = 20;
    var verts = new Float32Array(8 * max_lines);
    var n_lines = 0;
    var buffers = {
        verts: webgl.makeVertexBuffer(verts)
    };
    var programs = {
        connector: webgl.getProgram('connector')
    };

    function draw(env) {
        gl.disable(gl.DEPTH_TEST);
        var pgm = programs.connector.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4f('color', 0.27, 0.43, 0.35, 1.0);
        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.LINES, 0, 2*n_lines);
    }

    function add_line(v0, v1) {
        var dp = 8 * n_lines;
        vec3.save(v0, verts, dp + 0);
        verts[dp + 3] = 0.0;
        vec3.save(v1, verts, dp + 4);
        verts[dp + 7] = 1.0;
        ++n_lines;
        webgl.bindVertexBuffer(buffers.verts);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, verts);
    }
    
    function clear() {
        n_lines = 0;
    }

    return {
        draw: draw,
        add_line: add_line,
        clear: clear
    };
};

var GTW = window.GTW || {};
let marker_screen_list = [];
let marker_screen_list2 = [];
GTW.init_marker = function(env) {
    // geometry
    // textures
    // programs

    var coords = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
    var buffers = {
        verts: webgl.makeVertexBuffer(new Float32Array(coords))
    };
    var textures = {
        pin_sharp: webgl.loadTexture2D(GTW.resource_url('textures/pin-sharp.png'), { mipmap: false }),
        pin_sharp2: webgl.loadTexture2D(GTW.resource_url('textures/webp.webp'), { mipmap: false }),
    };
    var programs = {
        marker: webgl.getProgram('marker'),
    };

    var mat = mat4.create();
    var pos = vec3.create();
    var pos_target = vec3.create();
    var pos_source = vec3.create();

    var time = 0;
    var done = true;
    var flash_cancelled = false;

    let oList = [];
    let oList2 = [];
    let coordList = []
    let coordList2 = []
    function set_coord(coord, coord2) {
      //label打点动效
        // var o = vec3.create();
        // env.project(o, coord);

        // mat4.identity(mat);
        // mat4.translate(mat, mat, o);

        // vec3.copy(pos_target, o);
        // vec3.copy(pos_source, o);

        // // determine "up" vector from coord to drop pin from a height
        // var v0 = vec3.create();
        // var v1 = vec3.create();
        // var v2 = vec3.create();

        // vec3.normalize(v0, pos_target);
        // vec3.set(v1, 0, 1, 0);
        // vec3.cross(v2, v0, v1);
        // vec3.normalize(v2, v2);
        // vec3.cross(v1, v2, v0);

        // vec3.scaleAndAdd(pos_source, pos_source, v1, 10.0);

        // time = 0;
        // done = false;

        //将经纬度转为三维的点
        for(let i=0; i<coord.length;i++){
          var o = vec3.create();
          env.project(o, coord[i]);
          coordList.push([coord[i][0],coord[i][1]])
          oList.push(o)
        }
        for(let j=0; j<coord2.length;j++){
          var o = vec3.create();
          env.project(o, coord2[j]);
          coordList2.push([coord2[j][0],coord2[j][1]])
          oList2.push(o)
        }
    }
    function draw_line_3d22d(pointList,env = null){
      if(document.readyState != "complete"){
        return
      }
      // console.log('draw!!!')
      let context = document.getElementById('mask-canvas').getContext("2d")
      context.clearRect(0,0,document.getElementById('mask-canvas').width,document.getElementById('mask-canvas').height)

      let chinacanvas = document.getElementById('china-canvas')
      let maskcanvas = document.getElementById('mask-canvas')
      let chinacanvasLeft = chinacanvas.getBoundingClientRect().left
      let chinacanvasTop = chinacanvas.getBoundingClientRect().top
      let webglcanvasLeft = document.getElementById('webgl-canvas').getBoundingClientRect().left
      let webglcanvasTop = document.getElementById('webgl-canvas').getBoundingClientRect().top

      let maskcanvasTop = document.getElementById('mask-canvas').getBoundingClientRect().top
      let maskcanvasLeft = document.getElementById('mask-canvas').getBoundingClientRect().left

      var chart = echarts.getInstanceById(document.getElementById('china-canvas').getAttribute('_echarts_instance_'))
      let seriesModel = chart.getModel().getSeriesByIndex(0)
      let coordSys = seriesModel.coordinateSystem;

      context.beginPath();
      // for(let i = 0;i<20;i++){
      //   let rand_coord = [Math.floor(Math.random() * (135 - 73)) + 73,Math.floor(Math.random() * (53 - 3)) + 3]
      //   pointList.push({'coord':rand_coord,'screen':env.camera.project(rand_coord[0], rand_coord[1], 1),isShow:true})
      // }
      pointList.forEach(boompoint => {
        if(!boompoint.isShow){
          return
        }
        // if(boompoint['screen'].z > 0.999){
        //   return
        // }

        let p = vec3.create();
        let n = vec3.create();
        let co = vec3.create();
        let dp = Math.cos(deg2rad(70));
        vec2.copy(co, boompoint.coord);
        env.project(p, co);
        vec3.normalize(n, p)
        if(vec3.dot(n, env.camera.viewDir) >= -dp){
          return
        }

        coord = boompoint['coord']
        screen = boompoint['screen']
        isShow = boompoint['isShow'] 
        //传入经纬度 获取offsetX,offsetY
        let point = coordSys.dataToPoint([coord[0], coord[1]]);
        let startX = screen.x
        let startY = screen.y - webglcanvasTop
        let endX = point[0]*1.3 + chinacanvasLeft - maskcanvasLeft
        let endY = point[1] + chinacanvasTop - maskcanvasTop
        let offsetX = 0
        // if(startY == endY){
        //   offsetX = offsetY = 0
        // }else if(startY > endY){
        //   offsetY = 200
        // }else{
        //   offsetY = -200
        // }
        let offsetY = 1.2*(startY - endY)
        let controlX = (startX + endX)/2
        let controlY = (startY + endY)/2 + offsetY

        context.moveTo(screen.x,screen.y - webglcanvasTop)
        context.quadraticCurveTo(controlX,controlY,endX,endY)
        // context.lineTo(point[0] + chinacanvasLeft,point[1])
        context.lineWidth = 2;
        let grd=context.createLinearGradient(screen.x, screen.y - webglcanvasTop, point[0] + chinacanvasLeft, point[1]);
        grd.addColorStop(0,'#7B68EE');
        grd.addColorStop(1,'#4B0082');

        context.strokeStyle = grd;
      })
      context.stroke();
    }

    function draw(env) {
        // if (!done) {
        //     time = time + 0.01;
        //     if (time > 1.0) {
        //         time = 1.0;
        //         done = true;
        //         var w = 0.70;

        //         if (!flash_cancelled)
        //             env.flash([ w, w, w ]);
        //     }
        //     vec3.lerp(pos, pos_source, pos_target, Math.pow(time, 0.75));
        // }

        
        
        gl.enable(gl.DEPTH_TEST);//深度测试
        gl.enable(gl.BLEND);//颜色混合
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);//颜色混合的方法

        var pgm = programs.marker.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);//地球旋转的位置
        pgm.uniformMatrix3fv('bill', env.camera.bill);//也是和地球旋转有关

        webgl.bindVertexBuffer(buffers.verts);//绑定顶点缓冲区
        pgm.uniform1f('scale', 0.10);//缩放
        pgm.uniform1f('fuzz', 0);//模糊
        pgm.vertexAttribPointer('coord', 2, gl.FLOAT, false, 0, 0);//点的位置
        
        if(oList != []){
          draw_mark(oList,coordList,textures.pin_sharp,'炸弹',marker_screen_list)
          draw_line_3d22d(marker_screen_list,env)
          // marker_screen_list.forEach(item => draw_line_3d22d(item))
          draw_mark(oList2,coordList2,textures.pin_sharp2,'消息',marker_screen_list2)
          
        }
        function draw_mark(list,coordList,texture,type,screen_list){
          if(list.length == screen_list.length){
            for(let i =0;i<list.length;i++){
              if(i == screen_list[i].index){
                pgm.uniform3fv('pos', list[i]);
                screen_list[i].screen = env.camera.project(list[i][0], list[i][1], list[i][2])
                screen_list[i].coord = coordList[i]
                // if(i==0){
                //   console.log(screen_list[i].screen.x)
                //   console.log(screen_list[i].screen.y)
                // }
                pgm.uniformSampler2D('u_Sampler', texture);//marke形状
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);//绘制
              }
            }
          }else{
            for(let j =0;j<list.length;j++){
              pgm.uniform3fv('pos', list[j]);//当前点的位置
              screen_list.push({
                index:j,
                type:type,
                screen:env.camera.project(list[j][0], list[j][1], list[j][2]),
                coord:coordList[j],
                isShow:true
              })
              pgm.uniformSampler2D('u_Sampler', texture);//marke形状
              gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);//绘制
            }
          }
          // console.log(screen_list)
      }

      
      }
    return {
        draw: draw,
        set_coord: set_coord,
        cancel_flash: function() {
            flash_cancelled = true;
        }
    };
};

var GTW = window.GTW || {};
GTW.init_flash = function(env) {
    var quad = new Float32Array([ 0,0, 1,0, 0,1, 1,1 ]);
    var buffers = { verts: webgl.makeVertexBuffer(quad) };
    var programs = { simple: webgl.getProgram('simple') };
    var mvp = mat4.create();
    mat4.translate(mvp, mvp, [-1, -1, 0, 0]);
    mat4.scale(mvp, mvp, [2, 2, 2]);

    var color = vec4.create();

    function draw(env) {
        if (color[3] < 0.001) return;
        color[3] *= 0.97;

        var pgm = programs.simple.use();
        pgm.uniformMatrix4fv('mvp', mvp);
        pgm.uniform4fv('color', color);

        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 2, gl.FLOAT, false, 0, 0);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        gl.disable(gl.BLEND);
    }

    return {
        draw: draw,
        flash: function(c) {
            vec3.copy(color, c);
            color[3] = 2.0;
        },
    };
};

var GTW = window.GTW || {};
var MAP = window.MAP || {};


// XXX should this really be here?
function System(id, shortname, name, description, color, sides) {
    // ID
    this.id = id;
    this.shortname = shortname;
    this.name = name;
    this.description = description;
    this.color = color;
    this.n_sides = sides;

    // show on map
    this.enabled = true;
    // show on stats
    this.enabled_graph = true;

    this.count = 0;
    this.target_count = new Int32Array(256);
    this.target_rank = new Int32Array(256);
    this.graph = new Int32Array(60);
};

System.prototype.getRGBColor = function () {
    var color = this.color;
    if (color[0] == '#')
        color = color.substr(1);

    var c = vec3.create();
    c[0] = parseInt(color.substr(0, 2), 16) / 255;
    c[1] = parseInt(color.substr(2, 2), 16) / 255;
    c[2] = parseInt(color.substr(4, 2), 16) / 255;
    return c;
};

// per-system rank
System.prototype.compute_target_rank = function () {
    compute_ranks(this.target_count, this.target_rank);
};

// Function to initialize map object
// opts - dictionary with keys and values
MAP.init = function (opts) {
    MAP.attachedUpdateEventsCallbacks = [];
    MAP.showSystemInfo = null;
    MAP.countrySelect = null;
    MAP.updateCountryStats = null;

    // zoom/altitude constants
    var ZOOM_INITIAL = 2.00;
    var ZOOM_DEFAULT = 1.60;
    var ZOOM_CLOSEUP = 1.00;

    var UI = opts.functions;
    var high_quality = (opts.quality == 'high');
    var map_visible = true;
    var showMapLabels = !!opts.showMapLabels;
    var showCountryPops = !!opts.showCountryPops;
    var demoEnabled = !!opts.demoEnabled;
    var demoFlightEnabled = !!opts.demoFlightEnabled;
    var allowInteraction = !!opts.allowInteraction;
    var showSubsystemPopup = !!opts.showSubsystemPopup;
    var showCountryPopup = !!opts.showCountryPopup;
    // todo remove this and use showMapLabels
    var is_widget = !!opts.widget;
    var is_screensaver = !!opts.screensaver;
    var systems = opts.systems;
    var startCountry = opts.startCountry;
    var startFromSelectedCountry = opts.startFromSelectedCountry
    var countryForGraph = opts.countryForGraph;

    GTW.systems = {};
    _.forEach(opts.systems, function (s) {
            GTW.systems[s.id] = new System(s.id, s.shortname, s.name, s.description, s.color, s.edges);
        }
    );



    function attachUpdateEventsCallback(funcName) {
        MAP.attachedUpdateEventsCallbacks.push(funcName);
    }

    function showSystemInfo(funcName) {
        MAP.showSystemInfo = funcName;
    }

    function countrySelect(funcName) {
        MAP.countrySelect = funcName;
    }

    function updateCountryStats(funcName) {
        MAP.updateCountryStats = funcName;
    }

    // popup country box
    var popup_country = null;
    var timeout_popup_country = null;

    // popup that shows when marker drops
    var marker_animation_popup_timeout = null;

    function cancel_marker_animation_popup() {
        if (marker_animation_popup_timeout) {
            clearTimeout(marker_animation_popup_timeout);
            marker_animation_popup_timeout = null;
            vec3.copy(env.geocam.coord_target, env.geocam.coord);
            marker.cancel_flash();
        }
    }

    function setup_connector_line(el, country) {
        connectors.clear();

        if (!el || !country) return;

        var rect = el.getBoundingClientRect();
        var canvas_rect = canvas.getBoundingClientRect();
        var cx = rect.left + 0.5 * rect.width;
        var cy = rect.top + 0.5 * rect.height;

        // convert to canvas coords
        cx -= canvas_rect.left;
        cy -= canvas_rect.top;

        var v0 = vec3.create();
        v0[0] = 2 * (cx / canvas.width - 0.5);
        v0[1] = -2 * (cy / canvas.height - 0.5);

        var v1 = vec3.create();
        var co = vec3.create();

        // corrected endpoints for some country, per client request
        var country_endpoints = {
            NO: [9.787, 61.391],
            SE: [15.179, 60.131],
            FI: [26.199, 63.0149],
        };
        var endpoint = country_endpoints[country.iso2];
        if (endpoint) vec2.copy(co, endpoint);
        else vec3.copy(co, country.center);
        
        env.project(v1, co);
        // console.log(v0, v1)
        connectors.add_line(v0, v1);
    }

    // hide popup if country goes out of view
    function update_popup_country_connector_line() {
        if (popup_country && !is_country_visible(popup_country, 70)) {
            UI.hide_country_popup();
            setTimeout(function() { connectors.clear() }, 1000);
        }
    }

    setInterval(update_popup_country_connector_line, 500);

    function set_popup_country(country) {
      // console.log(country)
        if (country === popup_country)
            return;

        if (country) {
            MAP.countrySelect(country);
            //UI.show_country_popup(GTW.get_country_name(country), country);
            // make the counters update
            next_counter_update_time = 0.0;
            next_rank_update_time = 0.0;
        } else {
            /*
            UI.hide_country_popup();*/
            MAP.countrySelect(null);
        }

        popup_country = country;
        setup_connector_line($('#countrypop')[0], country);
    }

    // need to listen to close button to maintain state
    $('#countrypop').on('click', '.popclose', function () {
        set_popup_country(null);
    });

    // top-infected links
    $('#topinfected').on('click', 'li', function (e) {
        on_interaction();

        var key = this.dataset.key;
        var country = world.key_to_country[key];
        if (country) {
            vec3.set(
                env.geocam.coord_target,
                country.center[0],
                country.center[1],
                ZOOM_CLOSEUP);

            if (showCountryPopup)
                set_popup_country(country);
        }
    });

    // set up canvas and webgl
    var bindKey = key.noConflict();
    var canvas = $('#webgl-canvas')[0];
    window.gl = webgl.setupCanvas(canvas, {
        antialias: high_quality ? true : false,
        // alpha:true,
        //premultipliedAlpha: false,
        extensions: high_quality ? ['WEBKIT_EXT_texture_filter_anisotropic'] : [],
        shaderSources: [
            GTW.SHADER_SOURCES || 'static/map/all-shaders.glsl',
            'static/map/demo-shaders.glsl'
        ],
    });

    if (!window.gl) {
        console.warn('WebGL initialization failed.');

        $('#webgl-splash').show();
        $('#webgl-proceed').on('click', function () {
            $('#webgl-splash').hide();
        });

        // dummy UI implementation
        MAP.lang = 'en';

        _.assign(MAP, {
            zoom_in: function () {
            },
            zoom_out: function () {
            },
            set_view: function () {
            },
            set_language: function (lang) {
                MAP.lang = lang
            },
            set_palette: function () {
            },
            toggle_palette: function () {
            },
            toggle_map: function (system) {
            },
            toggle_graph: function (system) {
            },
        });

        return;
    }


    // rendering environment
    var env = {
        camera: new GTW.Camera(),
        flash: function (color) {
            flash.flash(color)
        },
        high_quality: high_quality,

        orbit: {
            rotate: vec3.fromValues(deg2rad(15), 0, 0),
            translate: vec3.fromValues(0, 0, -20),

            pos: vec3.create(),
            dir: vec3.create(),
        },

        geocam: {
            coord: vec3.fromValues(0, 0, 5),
            coord_target: vec3.fromValues(0, 0, 2),
            coord_delta: vec3.create(),
            lerp_speed: 0.2,
        },

        camera_mode: 'geocam',

        time: timeNow(),
        demo_time_start: 0,
        demo_time: 0,
        pickRay: null,

        light: {
            position: vec3.fromValues(20, 20, -20),
            position2: vec3.fromValues(20, -25, -20),
        },

        //project: project_ecef,
        project: function (out, coord) {
            if (this.projection.blend < 0.5)
                GTW.project_mercator(out, coord);
            else
                GTW.project_ecef(out, coord);
        },

        // hmm...
        projection: {
            blend: 1,
            dir: 1,
        },

        pick_required: false,
        pick_index: -1,

        palette: 'dark',
        solo_system_id: 1,

        draw_world: true
    };

    // Cairo
    var start_coord = [-90.0, 30.0444];
    vec2.copy(env.geocam.coord, start_coord);
    vec2.copy(env.geocam.coord_target, start_coord);

    env.camera.near = 0.01;
    env.camera.far = 200;
    MAP._env = env;

    if (is_widget || is_screensaver) {
        // firefox on windows has less depth precision
        env.camera.near = 1.0;
    }

    // draw functions
    var temps = {
        mat4: mat4.create(),
        vec3: vec3.create(),
        vec4: vec4.create(),
    };

    var pos0 = vec3.create();
    var pos1 = vec3.create();
    var dir0 = vec3.create();
    var dir1 = vec3.create();

    var zoom_limits = {
        mercator: [0.15, 1.0],
        ecef: [0.35, 4.5],
    };

    // zoom out to see whole world
    function geocam_zoom_out() {
        env.geocam.coord_target[2] = ZOOM_DEFAULT;
        env.geocam.lerp_speed = 0.2;
    }

    function update_camera() {
        if (env.camera_mode == 'orbit') {
            var mat = temps.mat4;
            mat4.identity(mat);
            mat4.rotateY(mat, mat, -env.orbit.rotate[1]);
            mat4.rotateX(mat, mat, env.orbit.rotate[0]);
            vec3.transformMat4(env.orbit.pos, env.orbit.translate, mat);

            var v = temps.vec3;
            vec3.set(v, 0, 0, 1);
            vec3.transformMat4(v, v, mat);
            vec3.copy(env.orbit.dir, v);

            env.camera.update(env.orbit.pos, env.orbit.dir);
        }

        else if (env.camera_mode == 'geocam') {
            var ecef = env.projection.dir > 0;

            var coord = env.geocam.coord;
            var target = env.geocam.coord_target;
            var delta = env.geocam.coord_delta;

            vec3.add(target, target, delta);
            target[1] = clamp(target[1], -80, 80);

            var zl;
            if (ecef)
                zl = zoom_limits.ecef;
            else
                zl = zoom_limits.mercator;

            target[2] = clamp(target[2], zl[0], zl[1]);

            if (ecef) {
                // wrap-around longitudinally
                if (coord[0] < -180) {
                    coord[0] += 360;
                    target[0] += 360;
                } else if (coord[0] > 180) {
                    coord[0] -= 360;
                    target[0] -= 360;
                }
            } else {
                // clamp longitude
                target[0] = clamp(target[0], -180, 180);
            }

            vec3.lerp(coord, coord, target, env.geocam.lerp_speed);

            // decay delta
            vec3.scale(delta, delta, 0.90);

            // mercator projection
            GTW.project_mercator(pos0, [coord[0], coord[1], 0]);
            GTW.project_mercator(pos1, coord);
            pos1[1] -= 2;
            vec3.sub(dir0, pos0, pos1);
            vec3.normalize(dir0, dir0);

            //var side_on = 1 - clamp(coord[2], 0.0, 1.0);
            //vec3.set(dir0, 0, smoothstep(side_on), 1);
            //vec3.normalize(dir0, dir0);
            vec3.copy(pos0, pos1);

            // ecef projection
            var tmp = [0, 0, 0];
            GTW.project_ecef(tmp, [coord[0], coord[1], 0]);
            GTW.project_ecef(pos1, coord);

            // tilt effect
            var h = clamp(2 * (ZOOM_DEFAULT - coord[2]), 0, 1);
            var h = lerp(0, 2, h);
            pos1[1] -= h;

            vec3.sub(dir1, tmp, pos1);
            vec3.normalize(dir1, dir1);

            //vec3.normalize(dir1, pos1);
            //vec3.negate(dir1, dir1);

            // mix projections
            var t = smoothstep(env.projection.blend);
            vec3.lerp(pos0, pos0, pos1, t);
            vec3.lerp(dir0, dir0, dir1, t);

            // update camera
            env.camera.update(pos0, dir0);
        }

        // projection animation
        env.projection.blend = clamp(
            env.projection.blend + env.projection.dir / 120,
            0,
            1);
    }

    function update_lights() {
        return;
        var theta = 0.1 * env.time;
        var r = 20;

        env.light.position[0] = r * Math.cos(theta);
        env.light.position[2] = r * Math.sin(theta);

        env.light.position2[0] = r * Math.cos(theta + Math.PI);
        env.light.position2[2] = r * Math.sin(theta + Math.PI);
    }

    var start_time = timeNow();
    var selected_country = null;

    function format_time(hour, minute, second) {
        if (hour < 10) hour = '0' + hour;
        if (minute < 10) minute = '0' + minute;
        if (second < 10) second = '0' + second;
        return hour + ':' + minute + ':' + second;
    }

    function format_coord(coord) {
        function to_angle(x) {
            return (x < 0 ? '-' : '+') + Math.abs(x).toFixed(2) + '°';
        }

        return to_angle(coord[0]) + ' ' + to_angle(coord[1]) + ' ' + Math.abs(coord[2]).toFixed(3);
    }

    // graph canvas element, context and current dimensions
    var graph_canvas = null;
    var graph_ctx = null;
    var graph_w = 0;
    var graph_h = 0;

    // scrolling graph entries and current entry pointer
    var graph_ptr = 0;
    var graph_length = 100;

    GTW.systems_foreach(function (system) {
        system.graph = new Int32Array(graph_length);
    });

    // graph time detached from real time to avoid gaps on pause/resume
    var graph_time = 0;

    // current maximum on the y axis
    var graph_max_value = 100;

    // attach/detach graph to canvas element
    function attach_graph_canvas(el) {
        if (graph_canvas === el) return;
        graph_canvas = el;
        graph_ctx = el.getContext('2d');
    }

    function draw_graph() {
        // match canvas dimensions to client dimensions
        /*
         if (graph_w !== graph_canvas.clientWidth &&
         graph_h !== graph_canvas.clientHeight)
         {
         graph_w = graph_canvas.width = graph_canvas.clientWidth;
         graph_h = graph_canvas.height = graph_canvas.clientHeight;
         }
         */
        var graphElemWidth = graph_canvas.clientWidth;
        if (graph_w !== graphElemWidth) {
            graph_w = graph_canvas.width = graphElemWidth;
        }



        var graphElemHeight = ($(document).height() - (250 + $('#header').height() + $('#footer').height()));
        if (graphElemHeight < 150) {
            graphElemHeight = 150;
        }
        if (graphElemHeight > 700) {
            graphElemHeight = 700;
        }
        if (graph_h !== graphElemHeight) {
            graph_h = graph_canvas.height = graphElemHeight;
        }
        // graph_h = 0
        var dx = graph_w / (graph_length - 1);

        //graph_ctx.fillStyle = '#000';
        //graph_ctx.fillRect(0, 0, graph_w, graph_h);
        graph_ctx.clearRect(0, 0, graph_w, graph_h);

        // labels
        graph_ctx.font = '12px Ubuntu Mono';

        var x = graph_w - 1;
        var max_value = Math.floor(graph_max_value * 0.1) * 10;
        var step = 5;
        if (max_value > 20) step = 10;
        if (max_value > 50) step = 20;
        if (max_value > 100) step = 50;
        if (max_value > 500) step = 100;
        if (max_value > 2000) step = 500;
        if (max_value > 5000) step = 2000;

        graph_ctx.textBaseline = 'middle';
        graph_ctx.textAlign = 'right';
        for (var value = 0; value < max_value; value += step) {
            var y = (1 - value / max_value) * graph_h;
            y = Math.floor(y);
            graph_ctx.fillStyle = '#181818';
            graph_ctx.fillRect(0, y, graph_w, 1);
        }

        graph_ctx.lineWidth = 1.5;
        var next_max_value = 0;

        GTW.systems_foreach(function (system) {
            if (!system.enabled_graph)
                return;

            graph_ctx.strokeStyle = "#" + system.color;

            graph_ctx.beginPath();
            for (var i = 0; i < graph_length; ++i) {
                var p = modulo(graph_ptr - i - 1, graph_length);
                var value = system.graph[p];
                next_max_value = Math.max(next_max_value, value);
                var x = graph_w - i * dx;
                var y = (1 - value / max_value) * graph_h;

                if (i == 0)
                    graph_ctx.moveTo(x, y);
                else
                    graph_ctx.lineTo(x, y);
            }
            graph_ctx.stroke();

            graph_max_value = clamp(
                lerp(graph_max_value, next_max_value * 1.5, 0.2),
                20, 10000);
        });

        // Numbers on top!
        for (var value2 = 0; value2 < max_value; value2 += step) {
            var y = (1 - value2 / max_value) * graph_h;
            graph_ctx.fillStyle = '#fff';
            graph_ctx.fillText('' + value2, graph_w - 10, y - 10);
        }


    }

    function update_graph() {
        var curr_second = ~~graph_time;
        graph_time += 1 / 60;

        var ptr = curr_second % graph_length;
        if (ptr === graph_ptr) {
            // already done this entry, skip
            return;
        } else {
            graph_ptr = ptr;
        }

        if (graph_canvas)
            draw_graph();

        // reset counts at head of graph
        GTW.systems_foreach(function (system) {
            system.graph[graph_ptr] = 0;
        });
    }

    var simulator = new GTW.Simulator();
    var missiles = new GTW.MissileSystem(env);
    // var stars = new GTW.Stars();
    var corona = new GTW.Corona();
    var world = new GTW.World();
    MAP.World = world;
    var labels = new GTW.Labels();
    var demo = GTW.init_demo(env, missiles);
    var marker = GTW.init_marker(env);
    var hedgehog = GTW.init_hedgehog();
    var connectors = GTW.init_connectors();
    var flash = GTW.init_flash();

    function _random_city_coord(out, cities) {
        var n_cities = cities.length / 3;

        // weighted sample
        var value = Math.random();

        // binary search using cumulative probability
        var high = n_cities - 1;
        var low = 0;
        var index = 0;
        while (low <= high) {
            var mid = (low + high) >> 1;
            var cp = cities[3 * mid + 0];
            if (cp > value)
                high = mid - 1;
            else
                low = mid + 1;
        }
        index = high;

        //var i = 3 * Random.cardinal(n_cities);
        var i = 3 * index;
        var lon = cities[i + 1];
        var lat = cities[i + 2];

        // jitter
        lat += Random.gauss(0, 0.01);
        lon += Random.gauss(0, 0.01);

        // return coord
        out[0] = lon;
        out[1] = lat;
    };

    function random_city_coord(out, country_key) {
        if (country_key === 0)
            return false;

        var country = world.key_to_country[country_key];
        if (!country)
            return false;

        _random_city_coord(out, country.cities);

        if (world.geoip && (country == world.geoip.country)) {
            out[2] = 0.014;
        } else {
            out[2] = 0.000;
        }

        return true;
    }

    // translate events into missile launches
    var next_counter_update_time = 0.0;
    var next_rank_update_time = 0.0;
    var next_top_infected_update_time = 0.0;

    var el_top_infected = $('#topinfectedlist');

    var target_coord = vec3.create();
    var source_coord = vec3.create();

    // one-shot boolean for discarding batch of events after an animation freeze
    var discard_events = false;

    function launch_missile(system_id, target_key, source_key, coords, angle,count,target_coords, source_coords) {
        
        if (coords) {
            // explicit ddos locations
            // console.log(coords)
            target_coord[0] = coords[0];
            target_coord[1] = coords[1];
            target_coord[2] = 0;

            if (world.geoip && (target_key == world.geoip.country)) {
                // geoip country is raised
                target_coord[2] += 0.014;
            }

            if (source_key) {
                source_coord[0] = coords[2];
                source_coord[1] = coords[3];
                source_coord[2] = 0;

                if (world.geoip && (source_key == world.geoip.country)) {
                    // geoip country is raised
                    target_coord[2] += 0.014;
                }

                angle = (Math.random() - 0.5) * Math.PI;
                missiles.launch(env, system_id, target_coord, source_coord, angle,count);

            } else {
                // airstrike
                vec3.copy(source_coord, target_coord);

                var theta = angle;
                var distance = 0.5 * lerp(5, 6, Math.random());

                source_coord[0] += distance * Math.cos(theta);
                source_coord[1] += distance * Math.sin(theta);
                source_coord[2] += lerp(0.150, 0.200, Math.random());

                missiles.launch(env, system_id, target_coord, source_coord,angle,count);
            }

        } else {
            // standard cybermap (non-ddos) behaviour
            if (!random_city_coord(target_coord, target_key)) {
                // country not found
                return;
            }

            if (source_key) {
                // random_city_coord(source_coord, source_key);
                // missiles.launch(env, system_id, target_coord, source_coord,null,count);
                if(target_coords != null && source_coords != null){
                  var source = new Float32Array([source_coords[0], source_coords[1], 0])
                  var target = new Float32Array([target_coords[0], target_coords[1], 0])
                  missiles.launch(env, system_id, target, source,null,count);
                }
                else {

                  random_city_coord(source_coord, source_key);
                  // console.log("target_coord, source_coord", target_coord, source_coord);
                  missiles.launch(env, system_id, target_coord, source_coord,null,count);
                }
            } else {
                missiles.launch(env, system_id, target_coord, null,null,count);
            }

        }
    }

    function update_missiles(events) {
        // discard events after a long pause
        if (discard_events) {
            discard_events = false;
            return;
        }

        if (!world.countries.length)
            return;
        // console.log("events length: ", events)
        // FIXME refactor with code in simulator.js:fetch()
        _.each(events, function (ke) {
          
            var system = GTW.systems[ke.type];

            var should_count_event = true;
            if (ke.type == 8 && ke.coords)
                should_count_event = false;
            if (ke.type == 8 && ke.target == 0)
                should_count_event = false;

            if (should_count_event) {
                ++system.count;
                ++system.target_count[ke.target];

                if(!(!!countryForGraph) || MAP.getCountryKeyByIso2(countryForGraph) == ke.target)
                    ++system.graph[graph_ptr];
            }

            // note: this is shared
            ++GTW.total_target_count[ke.target];

            // don't launch missiles if map isn't running
            if (!map_visible)
                return;

            // don't launch missiles in scape mode (i think?)
            if (!env.draw_world)
                return;

            // don't launch missiles if system is disabled by user
            if (!system.enabled)
                return;
                        if(ke.coords){
            }
            // if(ke.type != 8)
            if(ke.source_coords != null && ke.target_coords != null){
              // if(ke.type == 8) {
              //   console.log("type1 = 8")
              // }
              launch_missile(ke.type, ke.target, ke.source, ke.coords, ke.angle,ke.count, ke.target_coords, ke.source_coords);
            } else {
              // if(ke.type == 8) {
              //   console.log("type2 = 8")
              // }
              launch_missile(ke.type, ke.target, ke.source, ke.coords, ke.angle,ke.count,null, null);
            }
        });

        // update the country popup rank (eg CHINA: #19 MOST-INFECTED COUNTRY)
        if (popup_country && (next_rank_update_time < env.time)) {
            var key = popup_country.key;
            GTW.compute_total_target_rank();

            MAP.updateCountryStats(key, GTW.total_target_rank[key], GTW.systems);
            // next_rank_update_time = env.time + 1.0;
            //修改为infinity，防止一根飞线渲染多次
            next_rank_update_time = env.time + Infinity;
        }

        // update the top infected list (stats/MOST INFECTED TODAY: 1. Russia 2. India etc)
        if (next_top_infected_update_time < env.time) {
            GTW.compute_total_target_rank();
            var html = [];
            for (var i = 0; i < 5; ++i) {
                var key = GTW.top_infected[i];
                var country = world.key_to_country[key];

                if (country && !_.contains(disabledCountries, country.key)){
                    html.push('<li data-key="' + key + '">' + GTW.get_country_name(country) + '</li>');
                }
            }

            el_top_infected.html(html.join(''));
            next_top_infected_update_time = env.time + 5.0;

            // update the hedgehog to match
            hedgehog.setup(env, world);

            // update the UI.stats_top5
            update_ui_stats_top5();

            // check if we're required to fly to top-infected country as geoip failed
            if (start_marker_animation_to_top_infected_country_because_geoip_failed) {
                var top_infected_country_key = GTW.top_infected[0];
                var top_infected_country = world.key_to_country[top_infected_country_key];
                if (top_infected_country) {
                    start_marker_animation(top_infected_country);
                    start_marker_animation_to_top_infected_country_because_geoip_failed = false;
                }
            }
        }

        // update the global system counts (map & stats/OAS: 5738321 ODS: 2314812 etc..)
        if (next_counter_update_time < env.time) {
            _.each(MAP.attachedUpdateEventsCallbacks, function(func) {
                func(GTW.systems);
            });


            next_counter_update_time = env.time + Random.uniform(0.1, 0.5);
        }
    }

    var update_ui_stats_top5 = (function () {
        var last_top5 = [0, 0, 0, 0, 0];

        return function () {
            if (!UI.stats_top5) return;

            var changed = false;
            for (var i = 0; i < 5; ++i) {
                var key = GTW.top_infected[i];
                if (last_top5[i] !== key) {
                    changed = true;
                    break;
                }
            }

            if (!changed) return;

            var result = [];
            for (var i = 0; i < 5; ++i) {
                var key = GTW.top_infected[i];
                last_top5[i] = key;
                var country = world.key_to_country[key];
                if (!country) continue;
                result.push({
                    key: key,
                    name: country.name
                });
            }
            UI.stats_top5(result);
        };
    }());

    var animation_state = 'idle';
    var animation_next_state_time = 0;
    var animation_next_state = 'idle';

    change_animation_state('idle');

    function schedule_animation_state(new_state, delay) {
        // animation_next_state_time = env.time + delay;
        // animation_next_state = new_state;
    }

    function change_animation_state(new_state, force) {
        if (!force && (new_state === animation_state))
            return;

        if ($('body').hasClass('scroll')) // dont allow demo stuff when the visitor is reading about types!!!
            return;

        switch (new_state) {
            case 'idle':
                UI.set_demo_state(false);
                env.geocam.lerp_speed = 0.200;

                if (high_quality && demoEnabled)
                    schedule_animation_state('spin_1', 30);
                break;

            case 'spin_1':
                if (env.projection.dir < 0) {
                    MAP.set_view('globe');
                }

                if (!MAP.is_bad_mode) {
                    UI.set_demo_state(true);
                    cancel_marker_animation_popup();
                    hedgehog.setup(env, world);
                    hedgehog.show();
                    schedule_animation_state('solo', 20);
                }

                env.geocam.lerp_speed = 0.015;
                geocam_zoom_out();
                set_popup_country(null);
                break;

            // case 'solo':
            //     hedgehog.hide();
            //     var sysIdArray = [];
            //     GTW.systems_foreach(function (system) {
            //         if (system.enabled) {
            //             sysIdArray.push(system.id);
            //         }
            //     });
            //     if (sysIdArray.length > 0) {
            //         env.solo_system_id = _.sample(sysIdArray);
            //         if (showSubsystemPopup) {
            //             MAP.showSystemInfo(GTW.systems[env.solo_system_id]);
            //         }
            //         else {
            //             MAP.showSystemInfo(null);
            //         }
            //         schedule_animation_state('spin_2', 15);
            //     }
            //     break;

            case 'spin_2':
                MAP.showSystemInfo(null);
                if (demoFlightEnabled)
                    schedule_animation_state('demo', 5);
                else
                    schedule_animation_state('spin_1', 5);
                break;

            case 'demo':
                env.demo_time_start = env.time;
                var demo_ok = false;

                (function () {
                    var source_country = sample_visible_countries(true);
                    var target_country = sample_top10_countries();

                    if (!(source_country && target_country)) {
                        // try again in 5 secs
                        return;
                    }

                    var target_coord = vec3.create();
                    random_city_coord(target_coord, target_country.key);
                    demo.setup(env, source_country.center, target_coord);


                    // exit position
                    vec2.copy(env.geocam.coord_target, target_coord);
                    vec2.copy(env.geocam.coord, target_coord);

                    // XXX these need to be put in demo code or cancellable
                    setTimeout(function () {
                        set_popup_country(target_country);
                        MAP.showSystemInfo(null);
                    }, 5000);
                    setTimeout(function () {
                        set_popup_country(null)
                    }, 15000);

                    demo_ok = true;
                }());

                if (demo_ok)
                    schedule_animation_state('spin_1', 20);
                else {
                    change_animation_state('spin_2', 0);
                    return;
                }
                break;
        }
        ;

        animation_state = new_state;
        //$('title').text('PHASE: '+animation_state);
    }

    // do things based on animation state
    function update_animation() {
        if (env.time > animation_next_state_time) {
            change_animation_state(animation_next_state);
        }

        // dt is seconds since last update
        // delta is degrees
        // rpm is 360deg/60sec = 6deg/sec

        if (is_widget || is_screensaver) {
            env.geocam.coord_delta[0] = env.dt * 6;
            return;
        }

        switch (animation_state) {
            case 'spin_1':
            case 'spin_2':
            case 'solo':
                var ecef = env.projection.dir > 0;
                if (ecef) {
                    var dt = env.dt;
                    var deg_per_rpm = -dt * 6;

                    // 0..1 over 5 seconds
                    var rpm_curve = Math.min(1, env.time * 0.2);
                    var rpm = lerp(10, 2, rpm_curve);
                    env.geocam.coord_delta[0] = rpm * deg_per_rpm;
                }
                break;

            default:
                break;
        }
        ;
    }

    // stop animation
    function on_interaction() {
        set_popup_country(null);
        change_animation_state('idle', true);
        demo.exit();
        hedgehog.hide();
        cancel_marker_animation_popup();
    }

    function on_interaction2() {
        // this version is specifically for mousedown, which is having trouble with the
        // zoom in-out behviour. bit of a mess but...
        //
        //set_popup_country(null);
        change_animation_state('idle', true);
        demo.exit();
        hedgehog.hide();
        cancel_marker_animation_popup();
    }


    var get_time_now = (function () {

        // offset zero means current time
        var t_offset = 0;

        var ms_per_hour = 1000 * 3600;
        var ms_per_day = ms_per_hour * 24;

        if (0) {
            (function () {
                // start at beginning of today instead (for testing ddos data)
                var t_now = Date.now();
                var t_day = Math.floor(t_now / ms_per_day) * ms_per_day;
                var t_start = t_day + (0.00 * ms_per_hour);
                var t_offset = t_start - t_now;
                t_offset = 0;
            }());
            // fast-forward
            bindKey(']', function () {
                t_offset += 1.0 * ms_per_hour;
            });
        }

        return function () {
            return Date.now() + t_offset;
        };

    }());


    // returns Date.now(), but checks for pauses when out-of-focus
    var get_current_time = (function () {
        var last_frame_time = get_time_now();
        var max_frame_delta = 1000.0;
        return function () {
            var now = get_time_now();
            if (now - last_frame_time > max_frame_delta) {
                discard_events = true;
            }
            last_frame_time = now;
            return now;
        };
    }());

    function draw() {
        // setup camera and rendering environment
        env.time = (timeNow() - start_time) * 1.0;
        env.dt = 1 / 60;

        var now = get_current_time();
        var events = simulator.poll_events(now);
        update_missiles(events);
        update_graph();

        if (!map_visible) {
            // bail now if map not running (eg we're on the stats page)
            return;
        }

        /** -- debug animation --
         el_debug.text(debug_template({
            curr: animation_state,
            next: animation_next_state,
            remain: (animation_next_state_time - env.time).toFixed(2),
        }));
         */
        //修改动画状态
        update_animation();
        update_camera();
        update_lights();

        if (animation_state == 'demo') {
            demo.update(env);
        }

        // do picking only within draw time
        if (env.pick_required) {
            var pick_index = world.pick(env, mousePos[0], mousePos[1]);
            // console.log(world)
            if (pick_index !== env.pick_index) {
              // console.log(pick_index)
                canvas.style.cursor = (pick_index < 0) ? 'default' : 'pointer';
                env.pick_index = pick_index;

                if (pick_index >= 0) {
                    selected_country = world.countries[pick_index];
                    UI.show_country_name(world.countries[pick_index].iso3);
                } else {
                    selected_country = null;
                    UI.show_country_name(null);
                }
              // console.log(selected_country)
            }
            env.pick_required = false;
        }

        // draw scene
        var bg = (env.palette === 'dark') ? 0.0 : 0.9;
        gl.clearColor(bg, bg, bg, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        if (env.projection.blend > 0.5) {
            // stars.draw(env);

            if (env.draw_world)
                corona.draw(env);
            else
                corona.draw(env, -1);
        }


        if (env.draw_world) {
            world.draw(env);
            if (!is_widget && showMapLabels) labels.draw(env);
            missiles.draw(env);
            marker.draw(env);
        }

        if (animation_state == 'demo') {
            env.demo_time = env.time - env.demo_time_start;
            demo.draw(env);
        }

        if (showCountryPops)
            hedgehog.draw(env);

        if (animation_state == 'idle') {
            connectors.draw(env);
        }

        flash.draw(env);
    }

    var animation = (function () {

        var enabled = false;

        function animate() {
            if (enabled) {
                requestAnimationFrame(animate);
                draw();
            }
        }

        return {
            start: function () {
                if (!enabled) {
                    enabled = true;
                    discard_events = true;
                    animate();
                }
            },

            stop: function () {
                enabled = false;
            }
        };

    }());

    function resize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        // if (is_widget || is_screensaver) {
        //     canvas.height = canvas.clientHeight;
        // } else {
        //     if (platformDetection.isMobile) {
        //         canvas.height = $("#app").innerHeight();//parseInt($(window).innerHeight()) - (parseInt($('#header').height()) + 45);
        //     } else {
        //         canvas.height = $("#app").innerHeight();//parseInt($(window).innerHeight()) - (parseInt($('#header').height()) + parseInt($('#footer').height()));
        //     }
        // }

        var aspect = canvas.width / canvas.height;
        if (aspect < 1) {
            env.camera.fov = 60 / aspect;
        } else {
            env.camera.fov = 60;
        }

        gl.viewport(0, 0, canvas.width, canvas.height);
        vec4.copy(env.camera.viewport, gl.getParameter(gl.VIEWPORT));

        // GTW.init_marker(env)
    }

    window.addEventListener('resize', resize, false);
    resize();

    // event interaction
    var mousePos = [0, 0];
    var mousePosStart = [0, 0];
    var mouseButton = -1;
    canvas.oncontextmenu = function () {
        return false;
    }

    function on_map_click(click_distance) {
        // on touchend/mouseup - test if we should select something
        // console.log(is_widget,is_screensaver,click_distance > MIN_CLICK_DISTANCE,env.pick_index)
        if (is_widget || is_screensaver) {
            // no interations on widget
            return;
        }
        // var MIN_CLICK_DISTANCE = 5;
        // if (click_distance > MIN_CLICK_DISTANCE) {
          //     // too far from mousedown/touchstart point
          //     return;
          // }
          
        if (env.pick_index < 0) {
            // nothing picked
            set_popup_country(null);
            geocam_zoom_out();
            return;
        }

        cancel_marker_animation_popup();

        // pick country
        var country = world.countries[env.pick_index];

        if (_.contains(disabledCountries, country.key)) {
            return;
        }
        $('#eventpop').css('display','none');
        if (country === popup_country) {
            // same country as selected: zoom out
            set_popup_country(null);
            geocam_zoom_out();
        } else {
            // new country: zoom in
            // console.log('变化')
            vec3.set(
                env.geocam.coord_target,
                country.center[0],
                country.center[1],
                ZOOM_CLOSEUP);

            if (showCountryPopup)
                set_popup_country(country);
        }

        MAP.showSystemInfo(null);
    }
    var isCountry = true;
    var handlers = {
        mousedown: function (e) {
          // console.log(`${e.clientX},${e.clientY}`)
          // console.log(`${e.clientX},${e.clientY}`)
          // console.log('类型:'+marker_screen_list[2].type+',序号:'+marker_screen_list[2].index)
          // console.log(`screen:${marker_screen_list[2].screen.x},${marker_screen_list[2].screen.y},${marker_screen_list[2].screen.z}`)
          for(let j=0; j<marker_screen_list.length;j++){

            if(Math.abs(marker_screen_list[j].screen.x - e.clientX)<10 && Math.abs(marker_screen_list[j].screen.y - e.clientY)<10){
              console.log('类型:'+marker_screen_list[j].type+',序号:'+marker_screen_list[j].index)
              console.log(`screen:${marker_screen_list[j].screen.x},${marker_screen_list[j].screen.y},${marker_screen_list[j].screen.z}`)
              // draw_line_3d22d(marker_screen_list[j]['coord'],marker_screen_list[j].screen)
              //toggle
              marker_screen_list[j].isShow = !marker_screen_list[j].isShow
            }
          }for(let k=0; k<marker_screen_list2.length;k++){
            if(Math.abs(marker_screen_list2[k].screen.x - e.clientX) && Math.abs(marker_screen_list2[k].screen.y - e.clientY)<15){
              console.log('类型:'+marker_screen_list2[k].type+',序号:'+marker_screen_list2[k].index)
            }
          }
            if (allowInteraction)
                on_interaction2();
                const pick_size = 1;

            let pick_pixels = new Uint8Array((pick_size*pick_size) << 2)
            let rect = e.target.getBoundingClientRect()
            let pick_x = e.clientX-rect.left
            let pick_y = rect.bottom-e.clientY
            gl.readPixels(pick_x, pick_y, pick_size, pick_size, gl.RGBA, gl.UNSIGNED_BYTE, pick_pixels);
            
            let mis_id = (pick_pixels[3]/255.0).toString()
            mis_id = mis_id.slice(0,mis_id.indexOf('.')+5)
            
            if(index_missile_dict[mis_id]){
             
              isCountry = false;
              $('#eventpop').css("display", "block");
              let type = index_missile_dict[mis_id][1];
              let count = index_missile_dict[mis_id][8];

              for(let i=1;i<9;i++){
                $(".eventpop_subsystem[data-detectiontype='" + i + "'] .eventpop_subsystem_stats").html('');
                $(".eventpop_subsystem[data-detectiontype='" + i + "']").css('display','none');
              }
              $(".eventpop_subsystem[data-detectiontype='" + type + "'] .eventpop_subsystem_stats").html(count);
              $(".eventpop_subsystem[data-detectiontype='" + type + "']").css('display','block');

            
              
              $("#countrypop").css("display", "none");
              setup_connector_line();
            }
    
         

            mouseButton = e.button;
            e.preventDefault();
            //env.pickRay.fromWindowCoords(e.offsetX, canvas.height - e.offsetY - 1);
            return false;
        },

        mouseup: function (e) {
          //  console.log(e)
          if(isCountry){
            var newMousePos = getMouseEventOffset(e);
            var click_distance = vec2.dist(newMousePos, mousePosStart);
            // if (allowInteraction)
            //     on_map_click(click_distance);
            mouseButton = -1;
            return false;
          }else{
            isCountry = true;
          }
            
        },
        mousemove: function (e) {
          // console.log('move')
            if (allowInteraction) {
                var newMousePos = getMouseEventOffset(e);
                var dx = newMousePos[0] - mousePos[0];
                var dy = newMousePos[1] - mousePos[1];
                mousePos = newMousePos;

                if (env.camera_mode == 'orbit') {
                    switch (mouseButton) {
                        case 0:
                            env.orbit.rotate[0] += 0.0025 * dy
                            env.orbit.rotate[1] += 0.0025 * dx
                            break;

                        case 1:
                            env.orbit.translate[0] += 0.010 * dx
                            env.orbit.translate[1] += 0.010 * dy
                            break;

                        case 2:
                            var d = (Math.abs(dx) > Math.abs(dy)) ? dx : -dy;
                            env.orbit.translate[2] += 0.050 * d;
                            break;

                        default:
                            env.pick_required = true;
                            break;
                    }
                }
                else if (env.camera_mode == 'geocam') {
                    var delta = env.geocam.coord_delta;
                    switch (mouseButton) {
                        case 0:
                            delta[0] -= 0.030 * dx;
                            delta[1] += 0.030 * dy;
                            break;

                        case 2:
                            var d = (Math.abs(dx) > Math.abs(dy)) ? dx : -dy;
                            delta[2] = -0.01 * d;
                            break;

                        default:
                            env.pick_required = true;
                            break;
                    }
                }
            }

            for(let key in move_mis){
              missiles.missiles[key].color = move_mis[key]
            }

            const pick_size = 1;
            let pick_pixels = new Uint8Array((pick_size*pick_size) << 2)
            let rect = e.target.getBoundingClientRect()
            let pick_x = e.clientX-rect.left
            let pick_y = rect.bottom-e.clientY
            gl.readPixels(pick_x, pick_y, pick_size, pick_size, gl.RGBA, gl.UNSIGNED_BYTE, pick_pixels);
            
            let mis_id = (pick_pixels[3]/255.0).toString()
            mis_id = mis_id.slice(0,mis_id.indexOf('.')+5)
            if(index_missile_dict[mis_id]){
              last_hover = true;
              let click_mis_index = index_missile_dict[mis_id][7]
              let colorArr = missiles.missiles[click_mis_index].color
              let click_mis = missiles.missiles[click_mis_index]
              // console.log(colorArr)
              missiles.missiles[click_mis_index].color = [1,1,1,colorArr[3]]
              move_mis[click_mis_index] = colorArr
            } else{
              // if(last_hover){
              //   console.log('mouse leave')
              //   for(let key in move_mis){
              //     missiles.missiles[key].color = move_mis[key]
              //   }
              // }
            }

            return false;
        },

        mousewheel: function (e) {
            // if (allowInteraction) {

            //     var SCALE = 0.9;
            //     var dy = e.wheelDelta / 120;

            //     if (env.camera_mode == 'orbit') {
            //         env.orbit.translate[2] *= (dy < 0) ? SCALE : 1 / SCALE;
            //     } else if (env.camera_mode == 'geocam') {
            //         env.geocam.coord_delta[2] -= 0.01 * dy;
            //     }
            // }
            // e.preventDefault();

            return false;
        },
    };

    function register_interaction_handlers() {
        // patch firefox mousewheel
        canvas.addEventListener('DOMMouseScroll', function (e) {
            e.wheelDelta = -120 * e.detail;
            return handlers.mousewheel(e);
        }, false);

        _.each(handlers, function (f, name) {
            canvas.addEventListener(name, f, false);
        });

        // check mouseup outside doc to prevent sticking the drag
        document.addEventListener('mouseup', function (e) {
            mouseButton = -1;
        }, false);
    }

    // todo - check on staging with allowInteraction param
    function register_touch_handlers() {
        var pinch_dist0 = 0;
        var gesture = 'none';

        var start_pos = vec2.create();
        var pos0 = vec2.create();
        var pos1 = vec2.create();

        function get_touch_pos(out, e) {
            var touch = e.touches[0] || e.changedTouches[0];
            var rect = canvas.getBoundingClientRect();
            var x = touch.clientX - rect.left;
            var y = touch.clientY - rect.top;
            out[0] = x;
            out[1] = y;
        }

        function get_pinch_dist(e) {
            if (e.touches.length !== 2)
                return 0;

            var rect = canvas.getBoundingClientRect();
            var t0 = e.touches[0];
            var t1 = e.touches[1];

            vec2.set(pos0, t0.clientX - rect.left, t0.clientY - rect.top);
            vec2.set(pos1, t1.clientX - rect.left, t1.clientY - rect.top);

            return vec2.dist(pos0, pos1);
        }

        canvas.addEventListener('touchstart', function (e) {
            //on_interaction();
            // console.log('touchstart')
            if (allowInteraction) {
                var num_touches = e.touches.length;
                if (num_touches == 2) {
                    // pinch start
                    pinch_dist0 = get_pinch_dist(e);
                    gesture = 'pinch';
                }
                else if (num_touches == 1) {
                    get_touch_pos(pos0, e);
                    vec2.copy(start_pos, pos0);

                    // request a pick for country (mousePos is required)
                    env.pick_required = true;
                    vec2.copy(mousePos, start_pos);

                    gesture = 'drag';
                }
            }
            e.preventDefault();
            e.stopPropagation();
        }, false);

        canvas.addEventListener('touchend', function (e) {
          // console.log('touchends')
            if (allowInteraction) {
                if (gesture == 'drag') {
                    get_touch_pos(pos1, e);
                    var click_distance = vec2.dist(start_pos, pos1);
                    // on_map_click(click_distance);
                }

                gesture = 'none';
            }
            return false;
        }, false);

        canvas.addEventListener('touchmove', function (e) {
            if (allowInteraction) {
                if (gesture == 'drag') {
                    get_touch_pos(pos1, e);
                    var dx = pos1[0] - pos0[0];
                    var dy = pos1[1] - pos0[1];
                    vec2.copy(pos0, pos1);

                    var delta = env.geocam.coord_delta;
                    delta[0] -= 0.030 * dx;
                    delta[1] += 0.030 * dy;
                }
                else if (gesture == 'pinch') {
                    var pinch_dist = get_pinch_dist(e);
                    var pinch_scale = pinch_dist / pinch_dist0;
                    var delta = env.geocam.coord_delta;
                    delta[2] = (pinch_scale < 1) ? 0.02 / pinch_scale : -0.02 * pinch_scale;
                }
            }
            return false;

        }, false);

    }

    function open_main_site() {
        // open main site in a new tab
        window.open('http://cybermap.kaspersky.com/', '_blank');
    }

    if (is_widget || is_screensaver) {
        /*
         document.addEventListener('mouseup', function(e) {
         open_main_site();
         }, false);
         */
    } else {
        var has_touch_events = ('ontouchstart' in document.documentElement);
        if (has_touch_events)
            register_touch_handlers();
        else
            register_interaction_handlers();
    }

    function toggles(obj, prop) {
        return function () {
            toggleProperty(obj, prop);
        };
    }

    function switch_projection() {
        env.projection.dir = -env.projection.dir;
        if (env.projection.dir > 0) {
            geocam_zoom_out();
        }
    }

    // keyboard shortcuts
    var key_handlers = {};

    _.each(key_handlers, function (f, name) {
        bindKey(name, f);
    });

    // start animation
    animation.start();

    $('.toggle').on('click', function (e) {
        $(this).toggleClass('disabled');
        if (this.id == 'projection') {
            switch_projection();
            return;
        }
    });

    // UI interface
    function toggle_system_prop(system_id, prop_name, value) {
        if (typeof value == 'undefined')
            return GTW.systems[system_id][prop_name] = !GTW.systems[system_id][prop_name];
        else
            return GTW.systems[system_id][prop_name] = value;
    }

    MAP.lang = 'en';

    MAP.getCountryKeyByIso2 = function(iso2) {
        var country = null;
        for (var key in world.countries)
            if (world.countries[key].iso2 == iso2) {
                country = world.countries[key];
                break;
            }

        return (!!country) ? country.key : null;
    }

    MAP.getCountryNameByIso2 = function(iso2) {
        var country = null;
        for (var key in world.countries)
            if (world.countries[key].iso2 == iso2) {
                country = world.countries[key];
                break;
            }

        return (!!country) ? GTW.get_country_name(country) : "";
    }

    var UI_ZOOM_STEP = 0.025;

    _.assign(MAP, {
        zoom_in: function () {
            env.geocam.coord_delta[2] -= UI_ZOOM_STEP;
        },

        zoom_out: function () {
            env.geocam.coord_delta[2] += UI_ZOOM_STEP;
        },
        //平面球面逻辑
        set_view: function (mode) {
            if (mode == 'flat') {
                env.projection.dir = -1;
                labels.project_labels('mercator');
                geocam_zoom_out();
                set_popup_country(null);

                // cancel any demo mode
                this.set_demo(false);
                UI.set_view_state('flat');
            }
            else if (mode == 'globe') {
                env.projection.dir = 1;
                labels.project_labels('ecef');
                geocam_zoom_out();
                set_popup_country(null);
                UI.set_view_state('globe');
            }
        },

        set_language: function (lang) {
            if (MAP.lang !== lang) {
                MAP.lang = lang;
                labels.render_labels(lang);
                labels.project_labels(env.projection.blend < 0.5 ? 'mercator' : 'ecef');
                hedgehog.setup(env, world);
            }
        },

        set_palette: function (palette) {
            if (palette !== env.palette) {
                env.palette = palette;
            }
        },

        toggle_palette: function () {
            this.set_palette(env.palette === 'dark' ? 'light' : 'dark');
        },

        toggle_map: function (system, value) {
            return toggle_system_prop(system, 'enabled', value);
        },

        toggle_graph: function (system, value) {
            return toggle_system_prop(system, 'enabled_graph', value);
        },

        set_demo: function (enable) {
           // if (!high_quality) {
                // no demo on mobile
             //   return;
           // }

            UI.hide_country_popup();

            if (enable) {
                change_animation_state('spin_1');
            } else {
                change_animation_state('idle');

                env.draw_world = true;
                missiles.setMode('world');
                hedgehog.hide();
                set_popup_country(null);
            }
        },
        get_demo: function () {
            return (animation_state != 'idle');
        },
        pause: function () {
            map_visible = false;
            //animation.stop();
        },

        resume: function () {
            map_visible = true;
            //animation.start();
        },

        attach_graph_canvas: function (el) {
            attach_graph_canvas(el);
        },

        detach_graph_canvas: function () {
            this.attach_graph_canvas(null);
        },

        attachUpdateEventsCallback: function (f) {
            attachUpdateEventsCallback(f);
        },

        showSystemInfo: function(f) {
            showSystemInfo(f);
        },

        countrySelect: function(f) {
            countrySelect(f);
        },

        updateCountryStats: function(f) {
            updateCountryStats(f);
        }
    });









    var is_country_visible = (function () {
        var p = vec3.create();
        var n = vec3.create();
        var co = vec3.create();
        var zaxis = [0, 0, 1];

        return function (country, angle) {
            // always visible in mercator projection
            if (env.projection.blend < 0.50) return true;

            var dp = Math.cos(deg2rad(angle || 90));
            vec2.copy(co, country.center);
            // console.log(country.center)
            env.project(p, co);
            vec3.normalize(n, p);   // XXX not true in flat mode
            return vec3.dot(n, env.camera.viewDir) < -dp;
        };
    }());

    function sample_visible_countries(visible) {
        var visible = _.filter(world.countries, function (c) {
            return is_country_visible(c, 30) == visible;
        });
        return _.sample(visible);
    }

    function sample_top10_countries() {
        var key = _.sample(GTW.top_infected);
        var country = world.key_to_country[key];
        return country;
    }

    function start_marker_animation(country, coord,coord2) {
        if (!country) return;
        if (is_widget) return;

        on_interaction();

        var co = country.center;
        env.geocam.lerp_speed = 0.015;
        vec3.set(env.geocam.coord_target, co[0], co[1], ZOOM_CLOSEUP);

        // coord = coord || co;
        coord = coord || co;
        coord2 = coord2 || co;
        setTimeout(function () {
            marker.set_coord(coord,coord2);
        }, 100);

        // setTimeout(function () {
        //     marker.set_coord(coord);
        // }, 3000);

        if (high_quality) {
            // only for desktop
            marker_animation_popup_timeout = setTimeout(function () {
                if (showCountryPopup)
                    set_popup_country(country);
            }, 5000);
        }
    }

    var start_marker_animation_to_top_infected_country_because_geoip_failed = false;

    function got_country_data() {
        if (!UI.got_country_data) return;

        var data = {};
        _.each(world.countries, function (country) {
            data[country.key] = {
                key: country.key,
                name: country.name
            };
        });

        UI.got_country_data(data);
    }

    // geolocation
    world.on('loaded', function () {
        // callback to interface with country names
        got_country_data();

        if (MAP.is_bad_mode) {
            // don't do marker animation
            return;
        }

        var country;
        var coord;
        var coord2;
        if (!country && startCountry && startCountry!= "") {
            var iso2 = startCountry;
            for (var key in world.countries)
                if (world.countries[key].iso2 == iso2) {
                    country = world.countries[key];
                    break;
                }
        }

        if (!country && world.geoip) {
            country = world.geoip.country;
            coord = world.geoip.coord;
            coord2 = world.geoip.coord2;
        }

        if(country) {
            setTimeout(start_marker_animation(country, coord,coord2), 1000);
            labels.geoip_iso2 = country.iso2;
            labels.project_labels('ecef');
            UI.got_geoip_data(country.key);
        }
        else {
            // geoip failed: use the most active country data when available
            start_marker_animation_to_top_infected_country_because_geoip_failed = true;
            UI.got_geoip_data(-1);
        }
    });

    // BAD mode
    if (MAP.is_bad_mode) {
        GTW.systems_foreach(function (system) {
            system.enabled = (system.name == 'BAD');
            change_animation_state('spin_1');
        });
    }

};


// Webgl related
var mapModus = 0; // 0 = globe | 1 = plane
var demoModeActive = 0; // 0 = false | 1 = true
var mapColor = 0; // 0 = map color 1 | 1 = map color 2

var MAP_functions = {
    show_country_popup: function(name, country) {
        $("#countrypop_title").html(name);
        if ($("#countrypop").hasClass('hidden')) {
            $("#countrypop").show();

            $("#countrypop").removeClass('hidden');

        } else {
            $("#countrypop").addClass('pulse');
            setTimeout(function() {
                $("#countrypop").removeClass('pulse');
            }, 1000);
        }
        setTimeout(updateCountryPopLinks(name, country.iso2), 100);

        if (window.nesaShowData){
            fillNesapop(name, false);
        }
    },
    show_country_name: function(iso3) {
        if(iso3 != null)
        {
            $("#selected-country-name").text(window.lang.getText("MAP_COUNTRY_"+iso3));
            $("canvas").focus();
        }
        else
        {
            $("#selected-country-name").text("");
            $("canvas").focus();
        }
    },
    hide_country_popup: function() {
        $("#countrypop").addClass('hidden');
        setTimeout(function() {
            if($("#countrypop").hasClass('hidden')) {
                $("#countrypop").hide();
            }
        }, 1000);

        if (window.nesaShowData) {
            fillNesapop('', false);
        }
    },
    set_demo_state: function(state) {
        if(state == true)
        {
            $('#map_control_type_plane').hide();
            $('#map_control_type_globe').show();
            $('#map_control_demo_on').hide();
            $('#map_control_demo_off').show();
        }
        else {
            $('#map_control_demo_on').show();
            $('#map_control_demo_off').hide();
        }
    },
    set_view_state: function(state) { },
    got_country_data: function(countries_data) {
        webgl_countries_data = countries_data;
        MAP.set_language(window.lang.lang());
    },
    stats_top5: function(top5) { // called whenever top5 changes

        if($("#most_infected").length) { // do we have a top5 block
            lastTop5Data = top5;

            $.each(top5, function( top_index, top_value ) {
                top5[top_index].name = countriesDict[top_value.key];
            });


            for(var i = 0; i < 5; i++) {
                $($('#most_infected_links a')[i]).attr('data-country-id', top5[i].key);
                $($('#most_infected_links li a span.name')[i]).html(top5[i].name);
            }
        } else {
            lastTop5Data = top5;
        }
    },
    got_geoip_data: function(country_key) {
        // if (key < 0) then geoip failed
        // otherwise key is user's detected country
        if($("div[data-subpage='2']").length) { // do we have a statistics page?
            if(isSet(countries[currCountryStatisticsCountry])) {
                // closeDropdowns(0);
                currCountryStatisticsCountry = country_key;
                $('.stats_overview.two .stats_overview_controls .location .label.english').html(countries[currCountryStatisticsCountry]);
                loadStatisticsCountryData(true, false);
            }
            detectedCountryId = country_key;
        } else {
            detectedCountryId = country_key;
        }
    }
};
//切换地图到平面
var switchMapViewToPlane = (function(event) {
  console.log("switchMapViewToPlane")
    if(MAP.get_demo()) { MAP.set_demo(false); }
    $('#map_control_type_globe').hide();
    $('#map_control_type_plane').show();
    MAP.set_view('flat');
    localStorage.setItem("view", "plane");
    mapModus = 1;
    return false;
});
//切换地图到球
var switchMapViewToGlobe = (function(event) {
    if(MAP.get_demo()) { MAP.set_demo(false); }
    $('#map_control_type_globe').show();
    $('#map_control_type_plane').hide();
    MAP.set_view('globe');
    localStorage.setItem("view", "globe");
    mapModus = 0;
    return false;
});

// var switchMapColorToDark = (function(event) {
//     $('#map_control_color_light').show();
//     $('#map_control_color_dark').hide();
//     MAP.set_palette('dark');
//     localStorage.setItem("color", "dark");
//     mapColor = 0;
//     return false;
// });
// var switchMapColorToLight = (function(event) {
//     $('#map_control_color_light').hide();
//     $('#map_control_color_dark').show();
//     MAP.set_palette('light');
//     localStorage.setItem("color", "light");
//     mapColor = 1;
//     return false;
// });


// var switchMapToDemoOn = (function(event) {
//     MAP.set_demo(true);
//     $('#map_control_demo_on').hide();
//     $('#map_control_demo_off').show();
//     demoModeActive = 1;
//     return false;
// });
// var switchMapToDemoOff = (function(event) {
//     MAP.set_demo(false);
//     $('#map_control_demo_on').show();
//     $('#map_control_demo_off').hide();
//     demoModeActive = 0;
//     return false;
// });

var zoomIn = (function(event) {
    if(MAP.get_demo()) { MAP.set_demo(false); }
    MAP.zoom_in();
    return false;
});
var zoomOut = (function(event) {
    if(MAP.get_demo()) { MAP.set_demo(false); }
    MAP.zoom_out();
    return false;
});

$( document ).ready(function() {
    // toggle view events
    $('#map_control_type_globe').on('click', switchMapViewToPlane);
    $('#map_control_type_plane').on('click', switchMapViewToGlobe);

    // toggle color events
    // $('#map_control_color_light').on('click', switchMapColorToLight);
    // $('#map_control_color_dark').on('click', switchMapColorToDark);

    // zoom in/out events
    // $('#map_control_zoom_in').on('click', zoomIn);
    // $('#map_control_zoom_out').on('click', zoomOut);

    // toggle demo mode events
    // $('#map_control_demo_on').on('click', switchMapToDemoOn);
    // $('#map_control_demo_off').on('click', switchMapToDemoOff);
});

DetectionTypeCarousel = function(container, eventTypes, country, clickCallbacks) {
    // jQuery-element as a container for drawing carousel
    this.$container = container;
    // eventTypes for carousel with all settings
    this.eventTypes = eventTypes;
    // country. If coutry is null - world counters are shown
    this.country = country;
    // callbacks for on click events (click on event type)
    this.callbacks = clickCallbacks;

    initSubsystemCarousel = function($container, eventTypes, callbacks) {
        $container.css("display", "block");

        var html = "";
        html +="<div id='systempop'></div>";
        html +="<div class='detection_types'>";
        html +="<ul class='type-icons' id='detection-type-panel'>";
        html +="<li id='detection_types_prev'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='113.7 35.8 367.9 770.4' enable-background='new 113.7 35.8 367.9 770.4' xml:space='preserve'><path d='M434.7,35.8l46.9,39L193.1,420.9l288.4,346.2l-46.8,39l-321-385.2'/></svg></li>";
        for (i = 0; i< eventTypes.length; i++)
        {
            html +="<li data-detectiontype='" + eventTypes[i].id + "' class='symbol' title='" + eventTypes[i].name + "'>";
            if( eventTypes[i].icon != "" &&  eventTypes[i].icon != null)
            {
                html +="<img class='icon' src='" + eventTypes[i].icon + "'/>";
            }
            html +="<span class='name' style='color: #" + eventTypes[i].color + "'>" + eventTypes[i].shortname + "</span>";
            html +="<div class='count'>0</div>";
            html +="<div class='count_line'></div>";
            html +="</li>";
        }
        html +="<li id='detection_types_next'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='162.2 35.8 367.9 770.4' enable-background='new 162.2 35.8 367.9 770.4' xml:space='preserve'><path d='M530.1,420.9l-321,385.2l-46.8-39l288.4-346.2L162.2,74.8l46.9-39'/></svg></li>";
        html +="</ul>";
        html +="</div>";
        $container.append(html);

        rearrangeDetectionTypePanel($container);

        $( window ).resize(function(){ rearrangeDetectionTypePanel($container); });
        $("#detection_types_next").on("click", function() { slideNext(); });
        $("#detection_types_prev").on("click", function() { slidePrev(); });
        $('#detection-type-panel li[data-detectiontype]').on('click', function(event) { detectionTypeClick(event, callbacks); });
    };

    initSubsystemCarousel(this.$container, this.eventTypes, this.callbacks);

    function rearrangeDetectionTypePanel($container){
        var containerWidth = $container.outerWidth();
        var width = 0;
        $("#detection-type-panel > *").each(
            function() {
                if ($(this).css("display") != "none") {
                    width += $(this).outerWidth();
                }
            });
        $("#detection_types_prev").css("visibility", "hidden");
        $("#detection_types_next").css("visibility", "hidden");
        if(containerWidth < width)
        {
            $($("#detection-type-panel > *").get().reverse()).each(function()
            {
                if ($(this).attr("id") != "detection_types_prev" && $(this).attr("id") != "detection_types_next")
                {
                    $(this).css("display", "none");
                }

                var width = 0;
                $("#detection-type-panel > *").each(
                    function() {
                        if($(this).css("display") != "none")
                            width += $(this).outerWidth();
                    });

                if(width < containerWidth)
                    return false;
            });
        }
        else
        {
            $("#detection-type-panel > *").each(function()
            {
                if ($(this).css("display") == "none")
                {
                    if (containerWidth >= width + $(this).outerWidth())
                    {
                        $(this).css("display", "block");
                        width += $(this).outerWidth();
                    }
                }
            });
        }

        $("#detection-type-panel > *").each(function()
        {
            if ($(this).css("display") == "none")
            {
                $("#detection_types_prev").css("visibility", "visible");
                $("#detection_types_next").css("visibility", "visible");
                return false;
            }
        });

        $("#systempop").css("left", $container.position.left);
        $("#systempop").css("right", $container.position.right);
    }

    function slideNext() {
        $lastItem = $("#detection-type-panel > li")[$("#detection-type-panel > li").length - 2];

        if ($($lastItem).css("display") == "none") {
            $($lastItem).css("display", "block");
            $('#detection_types_prev').after($lastItem);
            $($("#detection-type-panel > *").get().reverse()).each(function () {
                if ($(this).css("display") != "none" && $(this).attr("id") != "detection_types_prev" && $(this).attr("id") != "detection_types_next") {
                    $(this).css("display", "none");
                    return false;
                }
            });
        }
    }

    function slidePrev(){
        $firstItem = $("#detection-type-panel > li")[1];
        $lastItem = $("#detection-type-panel > li")[$("#detection-type-panel > li").length - 2];

        if ($($lastItem).css("display") == "none")
        {
            $($firstItem).css("display", "none");
            $('#detection_types_next').before($firstItem);

            $("#detection-type-panel > *").each(function()
            {
                if ($(this).css("display") == "none" && $(this).attr("id") != "detection_types_prev" && $(this).attr("id") != "detection_types_next")
                {
                    $(this).css("display", "block");
                    return false;
                }
            });
        }
    }

    function detectionTypeClick(event, callbacks) {
      // console.log(event)
        var detectionType = $(event.target).closest("li").attr('data-detectiontype');
        var gaEventLabel = detectionType.toUpperCase();
        $("ul.type-icons li[data-detectiontype='"+detectionType+"']").toggleClass("disabled");
        if(!!callbacks && typeof Array.isArray(callbacks))
        {
            for(i=0; i<callbacks.length; i++) {
                callbacks[i](detectionType);
            }
        }
    }
};

DetectionTypeCarousel.prototype.UpdateCounters = function(carousel, events) {
    var keys = Object.keys(GTW.systems);
    for (var i=0; i < keys.length; i++) {
        var system = GTW.systems[keys[i]];
        selector = '.type-icons .symbol[data-detectiontype="' + system.id + '"] .count';
        if(!!carousel.country)
            $(selector).text(system.target_count[carousel.country]);
        else
            $(selector).text(system.count);
    }
};

DetectionTypeCarousel.prototype.ShowEventTypeInfo = function(system) {

    if(!!system) {
        $('#systempop').empty().html('');
        $('#systempop').append("<h4 style='color: #" + system.color + "'>" + system.shortname + " - " + system.name + "</h4>");
        $('#systempop').append(system.description);
        $('#systempop').fadeIn();
    }
    else {
        $('#systempop').fadeOut(400, function () {
            $('#systempop').empty().html('');
        });
    }
};


CountryPopup = function(container) {
    // jQuery-element as a container for drawing carousel
    this.$container = container;
};

CountryPopup.prototype.setCountry = function(countryPopup, country){
    var shareCurrCountryPopup = (function(shareToPlatform, name, code) {
        var url = window.location.protocol + "//" + window.location.host + "/";
        if(window.versionId != "default")
            url += "special/" + window.versionId + "/";
        if(window.lang.lang() != "en")
            url += window.lang.lang() + "/";

        url += "#startcountry=" + code;

        var url_short = "https://kas.pr/map";
        var redirect_url = window.location.hostname + "/fb_share_finish.html";

        var image = window.location.hostname + "/images/social_share.jpg";
        var return_url = "";

        var country_name = $('#countrypop_title').html();
        var country_rank = $('#countrypop_ranking').text();
        country_rank = "#"+country_rank+" " + window.lang.getText("MOST_ATTACKED_COUNTRY");

        var hastags = window.lang.getText("SOCIAL_HASH_TAGS");


        url = encodeURIComponent(url);
        url_short = encodeURIComponent(url_short);
        redirect_url = encodeURIComponent(redirect_url);
        title = encodeURIComponent(title);
        image = encodeURIComponent(image);
        country_name = encodeURIComponent(country_name);
        country_rank = encodeURIComponent(country_rank);
        hastags = encodeURIComponent(hastags);


        var title = window.lang.getText("HEADER_CYBERTHREAT") + " " + window.lang.getText("HEADER_REAL_TIME_MAP");

        var devider = encodeURIComponent(" | ");
        var text = country_name+devider+hastags;

        switch(shareToPlatform) {
            case "facebook":
                return_url = 'https://www.facebook.com/dialog/feed?app_id=634328833377154&display=popup&link='+url;
                break;
            case "twitter":
                return_url = 'https://twitter.com/intent/tweet?text='+text+'&url='+url;
                break;
            case "gplus":
                return_url = text;
                break;
            case "vk":
                return_url = 'https://vk.com/share.php?url='+url+'&noparse=true';
                break;
            default:
                if (logToConsole) console.log("Cant share countrypop, dont know "+shareToPlatform);
        }
        return return_url;
    });

    if (country == null) {
        $(countryPopup.$container).hide();
    }
    else {
        $(countryPopup.$container).show();
        $("#countrypop_title", countryPopup.$container).html(lang.getText("MAP_COUNTRY_" + country.iso3.toUpperCase()));

        $("#more_detail", countryPopup.$container).attr("href", $("#more_detail", countryPopup.$container).data("base-url") + "#country=" + country.key + "&type=oas&period=w");

        $('#countrypop_sharing_icons .facebook a', countryPopup.$container).attr('href', shareCurrCountryPopup("facebook", country.name, country.iso2));
        $('#countrypop_sharing_icons .twitter a', countryPopup.$container).attr('href', shareCurrCountryPopup("twitter", country.name, country.iso2));
        $('#countrypop_sharing_icons .gplus a', countryPopup.$container).attr('href', "https://plus.google.com/share?url=" + encodeURIComponent(window.location.href));
        $('#countrypop_sharing_icons .vk a', countryPopup.$container).attr('href', shareCurrCountryPopup("vk", country.name, country.iso2));
    }
};

CountryPopup.prototype.updateCountryStats = function(countryPopup, country, rank, systems) {
    $("#countrypop_ranking", countryPopup.$container).html(rank);
    var keys = Object.keys(systems);
    for (var i=0; i < keys.length; i++) {
        var system = GTW.systems[keys[i]];
        $(".countrypop_subsystem[data-detectiontype='" + system.id + "'] .countrypop_subsystem_stats", countryPopup.$container).html(system.target_count[country]);
    }
};
//# sourceMappingURL=map.js.map

window.feedUrl = "default";
window.versionId = "default";

$(document).ready(function () {
    $(".menu li a[data-subpage=\'1\']").addClass("active");
    $("#app").css("top", $('#header').height() + "px");
    console.log("初始化map_systems");

    var map_systems = [];
    map_systems.push({
        id: 1,
        shortname: "OAS",
        name: "On-Access Scan",
        description: "OAS (On-Access Scan) shows malware detection flow during On-Access Scan, i.e. when objects are accessed during open, copy, run or save operations.",
        color: "38b349",
        icon: "",
        edges: 5
    });
    map_systems.push({
        id: 2,
        shortname: "ODS",
        name: "On-Demand Scan",
        description: "ODS (On Demand Scanner) shows malware detection flow during On-Demand Scan, when the user manually selects the ’Scan for viruses’ option in the context menu.",
        color: "ed1c24",
        icon: "",
        edges: 4
    });
    map_systems.push({
        id: 3,
        shortname: "MAV",
        name: "Mail Anti Virus",
        description: "MAV (Mail Anti-Virus) shows malware detection flow during Mail Anti-Virus scan when new objects appear in an email application (Outlook, The Bat, Thunderbird). The MAV scans incoming messages and calls OAS when saving attachments to a disk.",
        color: "f26522",
        icon: "",
        edges: 3
    });
    map_systems.push({
        id: 4,
        shortname: "WAV",
        name: "Web Anti-Virus",
        description: "WAV (Web Anti-Virus) shows malware detection flow during Web Anti-Virus scan when the html page of a website opens or a file is downloads. It checks the ports specified in the Web Anti-Virus settings.",
        color: "0087f4",
        icon: "",
        edges: 32
    });
    map_systems.push({
        id: 5,
        shortname: "IDS",
        name: "Intrusion Detection Scan",
        description: "IDS (Intrusion Detection System) shows network attacks detection flow.",
        color: "ec008c",
        icon: "",
        edges: 6
    });
    map_systems.push({
        id: 6,
        shortname: "VUL",
        name: "Vulnerability Scan",
        description: "VUL (Vulnerability Scan) shows vulnerability detection flow.",
        color: "fbf267",
        icon: "",
        edges: 8
    });
    map_systems.push({
        id: 7,
        shortname: "KAS",
        name: "Kaspersky Anti-Spam",
        description: "KAS (Kaspersky Anti-Spam) shows suspicious and unwanted email traffic discovered by Kaspersky’s Reputation Filtering technology.",
        color: "855ff4",
        icon: "",
        edges: -16
    });
    map_systems.push({
        id: 8,
        shortname: "BAD",
        name: "Botnet Activity Detection",
        description: "BAD (Botnet Activity Detection) shows statistics on identified IP-addresses of DDoS-attacks victims and botnet C&amp;C servers. These statistics were acquired with the help of the DDoS Intelligence system (part of the solution Kaspersky DDoS Protection).",
        color: "00d1a9",
        icon: "",
        edges: 31
    });

    $(function () {
        var countryForGraph = null;
        var hash = window.location.hash;
        var param = {};
        hash.slice(1).split("&").forEach(function (part) {
            var item = part.split("=");
            param[(item[0]).toLowerCase()] = decodeURIComponent(item[1]);
        });

        startCountry = 'auto';
        startFromSelectedCountry = true;
        if (typeof param["startcountry"] !== 'undefined') {
            startCountry = (param["startcountry"]).toUpperCase();
            startFromSelectedCountry = true;
        }
        
        // initialise and start the map component
        MAP.init({
            functions: MAP_functions,
            quality: (platformDetection.isMobile ? 'medium' : 'high'),
            systems: map_systems,
            showMapLabels: true,
            showCountryPops: false,
            demoEnabled: true,
            demoFlightEnabled: true,
            allowInteraction: true,
            startCountry: startCountry,
            startFromSelectedCountry: startFromSelectedCountry,
            showSubsystemPopup: true,
            showCountryPopup: true,
            countryForGraph: countryForGraph
        });
        //缓存地球风格、颜色
        if (localStorage.getItem("color") !== null && localStorage.getItem("color") ==
            "light")
            switchMapColorToLight();
        if (localStorage.getItem("view") !== null && localStorage.getItem("view") ==
            "plane")
            switchMapViewToPlane();


        MAP.World.on('loaded', function () {
            var contryForCarousel = null;

            $("#stats_graph").css("display", "none");

            var carousel = new DetectionTypeCarousel(
                $("#detection_types_container"),
                map_systems,
                contryForCarousel,
                [MAP.toggle_map, MAP.toggle_graph]);

            MAP.attachUpdateEventsCallback(function (event) {
                carousel.UpdateCounters(carousel, event);
            });
            MAP.showSystemInfo(carousel.ShowEventTypeInfo)

            var countryPopup = new CountryPopup($("#countrypop"));
            MAP.countrySelect(function (country) {
                countryPopup.setCountry(countryPopup, country);
            });
            MAP.updateCountryStats(function (country, rank, systems) {
                countryPopup.updateCountryStats(countryPopup, country, rank,
                    systems);
            });
        });
    });

});
window.nesaShowData = false;


//地球纹理绘制
// var aTextureCoordLocation;
// var uSamplerLocation;
// aTextureCoordLocation = gl.getAttribLocation(shaderProgram,"aTextureCoord")
// gl.enableVertexAttribArray(aTextureCoordLocation);
// uSamplerLocation = gl.getUniformLocation(shaderProgram,"uSampler");

// textureCoordBuffer = gl.makeVertexBuffer();

// var earthTexture = webgl.loadTexture2D(GTW.resource_url('textures/earthTexture.png'), { mipmap: true })
// pgm.uniformSampler2D('uSampler', earthTexture);
// drawEarth(20,10);
// webgl.bindVertexBuffer(buffers.verts);
// function drawEarth(column,row){
//   var eachLog = 180 / column;
//   var eachLat = 90 / row;
//   for(var i = 0;i < column;i++){
//     for(var j = 0;j < row;j++){
//       var log1 = eachLog * i;
//       var log2 = eachLog * (i+1);
//       var lat1 = eachLat * j;
//       var lat2 = eachLat * (j+1);
//       var p1 = getXYZ(log1,lat1,R);
//       var p2 = getXYZ(log2,lat1,R);
//       var p3 = getXYZ(log1,lat2,R);
//       var p4 = getXYZ(log2,lat2,R);
                
      
//       var vertices;
//       var textureCoords;
      
//       //东北半球
//       vertices = [p1[0],p1[1],p1[2],//左下角点
//             p2[0],p2[1],p2[2],//右下角点
//             p3[0],p3[1],p3[2],//左上角点
//             p4[0],p4[1],p4[2]];//右上角点
//       textureCoords = [0.5+log1/360,0.5+lat1/180,//左下角点
//                0.5+log2/360,0.5+lat1/180,//右下角点
//                0.5+log1/360,0.5+lat2/180,//左上角点
//                0.5+log2/360,0.5+lat2/180];//右上角点
//       drawFace(vertices,textureCoords);
      
//       //东南半球
//       vertices = [p3[0],-p3[1],p3[2],
//             p4[0],-p4[1],p4[2],
//             p1[0],-p1[1],p1[2],
//             p2[0],-p2[1],p2[2]];
//       textureCoords = [0.5+log1/360,0.5-lat2/180,
//                0.5+log2/360,0.5-lat2/180,
//                0.5+log1/360,0.5-lat1/180,
//                0.5+log2/360,0.5-lat1/180];
//       drawFace(vertices,textureCoords);
      
//       //西北半球
//       vertices = [-p2[0],p2[1],p2[2],
//             -p1[0],p1[1],p1[2],
//             -p4[0],p4[1],p4[2],
//             -p3[0],p3[1],p3[2]];
//       textureCoords = [0.5-log2/360,0.5+lat1/180,
//                0.5-log1/360,0.5+lat1/180,
//                0.5-log2/360,0.5+lat2/180,
//                0.5-log1/360,0.5+lat2/180];
//       drawFace(vertices,textureCoords);
      
//       //西南半球
//       vertices = [-p4[0],-p4[1],p4[2],
//             -p3[0],-p3[1],p3[2],
//             -p2[0],-p2[1],p2[2],
//             -p1[0],-p1[1],p1[2]];
//       textureCoords = [0.5-log2/360,0.5-lat2/180,
//                0.5-log1/360,0.5-lat2/180,
//                0.5-log2/360,0.5-lat1/180,
//                0.5-log1/360,0.5-lat1/180];
//       drawFace(vertices,textureCoords);
//     }
//   }
// }