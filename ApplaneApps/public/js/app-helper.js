

/*d3v3 starts from here*/
!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null===n?0/0:+n}function e(n){return!isNaN(n)}function r(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function u(n){return n.length}function i(n){for(var t=1;n*t%1;)t*=10;return t}function o(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function a(){this._=Object.create(null)}function c(n){return(n+="")===da||n[0]===ma?ma+n:n}function l(n){return(n+="")[0]===ma?n.slice(1):n}function s(n){return c(n)in this._}function f(n){return(n=c(n))in this._&&delete this._[n]}function h(){var n=[];for(var t in this._)n.push(l(t));return n}function g(){var n=0;for(var t in this._)++n;return n}function p(){for(var n in this._)return!1;return!0}function v(){this._=Object.create(null)}function d(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function m(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=ya.length;r>e;++e){var u=ya[e]+t;if(u in n)return u}}function y(){}function M(){}function x(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new a;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function b(){ta.event.preventDefault()}function _(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function w(n){for(var t=new M,e=0,r=arguments.length;++e<r;)t[arguments[e]]=x(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function S(n){return xa(n,ka),n}function k(n){return"function"==typeof n?n:function(){return ba(n,this)}}function E(n){return"function"==typeof n?n:function(){return _a(n,this)}}function A(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function N(n){return n.trim().replace(/\s+/g," ")}function C(n){return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g")}function z(n){return(n+"").trim().split(/^|\s+/)}function q(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=z(n).map(L);var u=n.length;return"function"==typeof t?r:e}function L(n){var t=C(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",N(u+" "+n))):e.setAttribute("class",N(u.replace(t," ")))}}function T(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function R(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function D(n){return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function P(){var n=this.parentNode;n&&n.removeChild(this)}function U(n){return{__data__:n}}function j(n){return function(){return Sa(this,n)}}function F(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function H(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function O(n){return xa(n,Aa),n}function Y(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function I(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=Z;a>0&&(n=n.slice(0,a));var l=Ca.get(n);return l&&(n=l,c=V),a?t?u:r:t?y:i}function Z(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function V(n,t){var e=Z(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function X(){var n=".dragsuppress-"+ ++qa,t="click"+n,e=ta.select(oa).on("touchmove"+n,b).on("dragstart"+n,b).on("selectstart"+n,b);if(za){var r=ia.style,u=r[za];r[za]="none"}return function(i){if(e.on(n,null),za&&(r[za]=u),i){var o=function(){e.on(t,null)};e.on(t,function(){b(),o()},!0),setTimeout(o,0)}}}function $(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>La&&(oa.scrollX||oa.scrollY)){e=ta.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();La=!(u.f||u.e),e.remove()}return La?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function B(){return ta.event.changedTouches[0].identifier}function W(){return ta.event.target}function J(){return oa}function G(n){return n>0?1:0>n?-1:0}function K(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function Q(n){return n>1?0:-1>n?Da:Math.acos(n)}function nt(n){return n>1?ja:-1>n?-ja:Math.asin(n)}function tt(n){return((n=Math.exp(n))-1/n)/2}function et(n){return((n=Math.exp(n))+1/n)/2}function rt(n){return((n=Math.exp(2*n))-1)/(n+1)}function ut(n){return(n=Math.sin(n/2))*n}function it(){}function ot(n,t,e){return this instanceof ot?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ot?new ot(n.h,n.s,n.l):xt(""+n,bt,ot):new ot(n,t,e)}function at(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new dt(u(n+120),u(n),u(n-120))}function ct(n,t,e){return this instanceof ct?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof ct?new ct(n.h,n.c,n.l):n instanceof st?ht(n.l,n.a,n.b):ht((n=_t((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new ct(n,t,e)}function lt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new st(e,Math.cos(n*=Fa)*t,Math.sin(n)*t)}function st(n,t,e){return this instanceof st?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof st?new st(n.l,n.a,n.b):n instanceof ct?lt(n.h,n.c,n.l):_t((n=dt(n)).r,n.g,n.b):new st(n,t,e)}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Ja,r=gt(r)*Ga,i=gt(i)*Ka,new dt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?new ct(Math.atan2(e,t)*Ha,Math.sqrt(t*t+e*e),n):new ct(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n,t,e){return this instanceof dt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof dt?new dt(n.r,n.g,n.b):xt(""+n,dt,at):new dt(n,t,e)}function mt(n){return new dt(n>>16,255&n>>8,255&n)}function yt(n){return mt(n)+""}function Mt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function xt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(St(u[0]),St(u[1]),St(u[2]))}return(i=tc.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function bt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new ot(r,u,c)}function _t(n,t,e){n=wt(n),t=wt(t),e=wt(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Ja),u=pt((.2126729*n+.7151522*t+.072175*e)/Ga),i=pt((.0193339*n+.119192*t+.9503041*e)/Ka);return st(116*u-16,500*(r-u),200*(u-i))}function wt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function St(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function kt(n){return"function"==typeof n?n:function(){return n}}function Et(n){return n}function At(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=ta.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!oa.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{o.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,o,"on"),null==r?i:i.get(Ct(r))}function Ct(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qt(){var n=Lt(),t=Tt()-n;t>24?(isFinite(t)&&(clearTimeout(ic),ic=setTimeout(qt,t)),uc=0):(uc=1,ac(qt))}function Lt(){var n=Date.now();for(oc=ec;oc;)n>=oc.t&&(oc.f=oc.c(n-oc.t)),oc=oc.n;return n}function Tt(){for(var n,t=ec,e=1/0;t;)t.f?t=n?n.n=t.n:ec=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return rc=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*va(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:Et;return function(n){var e=lc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=sc.get(g)||Ut;var M=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new hc(e-1)),1),e}function i(n,e){return t(n=new hc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{hc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{hc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{hc=jt;var r=new jt;return r._=t,n(r,e)._}finally{hc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=pc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&hc!==jt,o=new(i?jt:hc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(0|r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=C[o in pc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,N.c.toString(),t,r)}function c(n,t,r){return e(n,N.x.toString(),t,r)}function l(n,t,r){return e(n,N.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{hc=jt;var t=new hc;return t._=n,r(t)}finally{hc=Date}}var r=t(n);return e.parse=function(n){try{hc=jt;var t=r.parse(n);return t&&t._}finally{hc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var M=ta.map(),x=It(v),b=Zt(v),_=It(d),w=Zt(d),S=It(m),k=Zt(m),E=It(y),A=Zt(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var N={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Yt(n.getDate(),t,2)},e:function(n,t){return Yt(n.getDate(),t,2)},H:function(n,t){return Yt(n.getHours(),t,2)},I:function(n,t){return Yt(n.getHours()%12||12,t,2)},j:function(n,t){return Yt(1+fc.dayOfYear(n),t,3)},L:function(n,t){return Yt(n.getMilliseconds(),t,3)},m:function(n,t){return Yt(n.getMonth()+1,t,2)},M:function(n,t){return Yt(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Yt(n.getSeconds(),t,2)},U:function(n,t){return Yt(fc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Yt(fc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Yt(n.getFullYear()%100,t,2)},Y:function(n,t){return Yt(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},C={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe};return t}function Yt(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function It(n){return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i")}function Zt(n){for(var t=new a,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=0|va(t)/60,u=va(t)%60;return e+Yt(r,"0",2)+Yt(u,"0",2)}function oe(n,t,e){dc.lastIndex=0;var r=dc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&xc.hasOwnProperty(n.type)&&xc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=Fa,t=t*Fa/2+Da/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);_c.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;wc.point=function(o,a){wc.point=n,r=(t=o)*Fa,u=Math.cos(a=(e=a)*Fa/2+Da/4),i=Math.sin(a)},wc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Me(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function xe(n){return[Math.atan2(n[1],n[0]),nt(n[2])]}function be(n,t){return va(n[0]-t[0])<Ta&&va(n[1]-t[1])<Ta}function _e(n,t){n*=Fa;var e=Math.cos(t*=Fa);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++Sc,Ec+=(n-Ec)/Sc,Ac+=(t-Ac)/Sc,Nc+=(e-Nc)/Sc}function Se(){function n(n,u){n*=Fa;var i=Math.cos(u*=Fa),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);kc+=l,Cc+=l*(t+(t=o)),zc+=l*(e+(e=a)),qc+=l*(r+(r=c)),we(t,e,r)}var t,e,r;Dc.point=function(u,i){u*=Fa;var o=Math.cos(i*=Fa);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Dc.point=n,we(t,e,r)}}function ke(){Dc.point=_e}function Ee(){function n(n,t){n*=Fa;var e=Math.cos(t*=Fa),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-Q(g)/h,v=Math.atan2(h,g);Lc+=p*l,Tc+=p*s,Rc+=p*f,kc+=v,Cc+=v*(r+(r=o)),zc+=v*(u+(u=a)),qc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Dc.point=function(o,a){t=o,e=a,Dc.point=n,o*=Fa;var c=Math.cos(a*=Fa);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Dc.lineEnd=function(){n(t,e),Dc.lineEnd=ke,Dc.point=_e}}function Ae(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ne(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(be(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new qe(e,n,null,!0),l=new qe(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new qe(r,n,null,!1),l=new qe(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),ze(i),ze(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function ze(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function qe(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=Fe(m,p);g.length?(b||(i.polygonStart(),b=!0),Ce(g,De,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Re(),x=t(M),b=!1;return y}}function Te(n){return n.length>1}function Re(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:y,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function De(n,t){return((n=n.x)[0]<0?n[1]-ja-Ta:ja-n[1])-((t=t.x)[0]<0?t[1]-ja-Ta:ja-t[1])}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Da:-Da,c=va(i-e);va(c-Da)<Ta?(n.point(e,r=(r+o)/2>0?ja:-ja),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Da&&(va(e-u)<Ta&&(e-=u*Ta),va(i-a)<Ta&&(i-=a*Ta),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return va(o)>Ta?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*ja,r.point(-Da,u),r.point(0,u),r.point(Da,u),r.point(Da,0),r.point(Da,-u),r.point(0,-u),r.point(-Da,-u),r.point(-Da,0),r.point(-Da,u);else if(va(n[0]-t[0])>Ta){var i=n[0]<t[0]?Da:-Da;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Fe(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;_c.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+Da/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+Da/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>Da,k=p*M;if(_c.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Pa:b,S^h>=e^m>=e){var E=de(pe(f),pe(n));Me(E);var A=de(u,E);Me(A);var N=(S^b>=0?-1:1)*nt(A[2]);(r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ta>i||Ta>i&&0>_c)^1&o}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Da:-Da),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(be(e,g)||be(p,g))&&(p[0]+=Ta,p[1]+=Ta,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&be(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),M=m*m-y*(ve(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=ye(d,(-m-x)/y);if(me(b,p),b=xe(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=va(A-Da)<Ta,C=N||Ta>A;if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(va(b[0]-w)<Ta?k:E):k<=b[1]&&b[1]<=E:A>Da^(w<=b[0]&&b[0]<=S)){var z=ye(d,(-m+x)/y);return me(z,p),[b,xe(z)]}}}function u(t,e){var r=o?n:Da-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=va(i)>Ta,c=gr(n,6*Fa);return Le(t,e,c,o?[0,-n]:[-Da,n-Da])}function Oe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Ye(n,t,e,r){function u(r,u){return va(r[0]-n)<Ta?u>0?0:3:va(r[0]-e)<Ta?u>0?2:1:va(r[1]-t)<Ta?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&K(l,i,n)>0&&++t:i[1]<=r&&K(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0}function g(){v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Uc,Math.min(Uc,n)),t=Math.max(-Uc,Math.min(Uc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,E=a,A=Re(),N=Oe(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return C}}function Ie(n){var t=0,e=Da/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Da/180,e=n[1]*Da/180):[180*(t/Da),180*(e/Da)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,nt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Fc+=u*n-r*t,r=n,u=t}var t,e,r,u;Zc.point=function(i,o){Zc.point=n,t=r=i,e=u=o},Zc.lineEnd=function(){n(t,e)}}function Xe(n,t){Hc>n&&(Hc=n),n>Yc&&(Yc=n),Oc>t&&(Oc=t),t>Ic&&(Ic=t)}function $e(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function We(n,t){Ec+=n,Ac+=t,++Nc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);Cc+=o*(t+n)/2,zc+=o*(e+r)/2,qc+=o,We(t=n,e=r)}var t,e;Xc.point=function(r,u){Xc.point=n,We(t=r,e=u)}}function Ge(){Xc.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);Cc+=o*(r+n)/2,zc+=o*(u+t)/2,qc+=o,o=u*n-r*t,Lc+=o*(r+n),Tc+=o*(u+t),Rc+=3*o,We(r=n,u=t)}var t,e,r,u;Xc.point=function(i,o){Xc.point=n,We(t=r=i,e=u=o)},Xc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Pa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:y};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=a+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),E=va(va(w)-1)<Ta||va(r-h)<Ta?(r+h)/2:Math.atan2(_,b),A=n(E,k),N=A[0],C=A[1],z=N-t,q=C-e,L=M*z-y*q;
    (L*L/x>i||va((y*z+M*q)/x-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,N,C,E,b/=S,_/=S,w,d,m),m.point(N,C),u(N,C,E,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Fa),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ha,e*Ha])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*Fa,n[1]*Fa),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Ha,n[1]*Ha]}function r(){a=Ae(o=lr(m,y,M),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,M=0,x=Pc,b=Et,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(x(o,f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Pc):He((_=+n)*Fa),u()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=n?Ye(n[0][0],n[0][1],n[1][0],n[1][1]):Et,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Fa,d=n[1]%360*Fa,r()):[v*Ha,d*Ha]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Fa,y=n[1]%360*Fa,M=n.length>2?n[2]%360*Fa:0,r()):[m*Ha,y*Ha,M*Ha]},ta.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*Fa,e*Fa)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Da?n-Pa:-Da>n?n+Pa:n,t]}function lr(n,t,e){return n?t||e?Ae(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>Da?t-Pa:-Da>t?t+Pa:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),nt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),nt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Pa)):(u=n+o*Pa,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=xe([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,Me(e);var r=Q(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ta)%(2*Math.PI)}function vr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function Mr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(ut(r-t)+u*o*ut(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ha,Math.atan2(o,Math.sqrt(r*r+u*u))*Ha]}:function(){return[n*Ha,t*Ha]};return p.distance=h,p}function xr(){function n(n,u){var i=Math.sin(u*=Fa),o=Math.cos(u),a=va((n*=Fa)-t),c=Math.cos(a);$c+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Bc.point=function(u,i){t=u*Fa,e=Math.sin(i*=Fa),r=Math.cos(i),Bc.point=n},Bc.lineEnd=function(){Bc.point=Bc.lineEnd=y}}function br(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function _r(n,t){function e(n,t){o>0?-ja+Ta>t&&(t=-ja+Ta):t>ja-Ta&&(t=ja-Ta);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Da/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=G(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-ja]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return va(u)<Ta?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-G(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Da/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Da*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Da/4+t/2)),-n]}function Ar(n){return n[0]}function Nr(n){return n[1]}function Cr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&K(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function qr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Lr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function Tr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=ol.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),rl.remove(n),ol.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&va(e-c.circle.x)<Ta&&va(r-c.circle.cy)<Ta;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&va(e-l.circle.x)<Ta&&va(r-l.circle.cy)<Ta;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=rl._;a;)if(r=Fr(a,o)-i,r>Ta)a=a.L;else{if(u=i-Hr(a,o),!(u>Ta)){r>-Ta?(t=a.P,e=a):u>-Ta?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(rl.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),rl.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Jr(t.site,c.site),void 0;Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Kr(e.edge,l,p,x),c.edge=Jr(l,n,null,x),e.edge=Jr(n,p,null,x),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Yr(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=el,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(va(r-t)>Ta||va(u-e)>Ta)&&(a.splice(o,0,new Qr(Gr(i.site,s,va(r-f)<Ta&&p-u>Ta?{x:f,y:va(t-f)<Ta?e:p}:va(u-p)<Ta&&h-r>Ta?{x:va(e-p)<Ta?t:h,y:p}:va(r-h)<Ta&&u-g>Ta?{x:h,y:va(t-h)<Ta?e:g}:va(u-g)<Ta&&r-f>Ta?{x:va(e-g)<Ta?t:f,y:g}:null),i.site,null)),++c)}function Ir(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-Ra)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=al.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=il._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}il.insert(y,m),y||(ul=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(ul=t.N),il.remove(t),al.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=tl,r=Oe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||va(t.a.x-t.b.x)<Ta&&va(t.a.y-t.b.y)<Ta)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return tl.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),el[n.i].edges.push(new Qr(u,n,t)),el[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,tl.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(tl=[],el=new Array(n.length),rl=new nu,il=new nu;;)if(u=ul,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(el[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Yr(t));var o={cells:el,edges:tl};return rl=il=tl=el=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t,e,r,u,i,o){var a,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>o||r>h||u>g)){if(p=n.point){var p,v=t-p[0],d=e-p[1],m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,o=e+y,a=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,o),a}function gu(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+Mt(Math.round(e+i*n))+Mt(Math.round(r+o*n))+Mt(Math.round(u+a*n))}}function pu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=mu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function vu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function du(n,t){var e,r,u,i=ll.lastIndex=sl.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=ll.exec(n))&&(r=sl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:vu(e,r)})),i=sl.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function mu(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function yu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(mu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Mu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function bu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function wu(n){return n*n*n}function Su(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function ku(n){return function(t){return Math.pow(t,n)}}function Eu(n){return 1-Math.cos(n*ja)}function Au(n){return Math.pow(2,10*(n-1))}function Nu(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Pa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Pa/t)}}function zu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function qu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return lt(e+i*n,r+o*n,u+a*n)+""}}function Tu(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return at(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Du(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pu(n){var t=[n.a,n.b],e=[n.c,n.d],r=ju(t),u=Uu(t,e),i=ju(Fu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ha,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ha:0}function Uu(n,t){return n[0]*t[0]+n[1]*t[1]}function ju(n){var t=Math.sqrt(Uu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Fu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=ta.transform(n),o=ta.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:vu(a[0],c[0])},{i:3,x:vu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:vu(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:vu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:vu(g[0],p[0])},{i:e-2,x:vu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Yu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Iu(n){for(var t=n.source,e=n.target,r=Vu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Zu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Vu(n,t){if(n===t)return n;for(var e=Zu(n),r=Zu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Xu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Bu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Wu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Gu(n,t){return ta.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ri,n}function Ku(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Qu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function ni(n){return n.children}function ti(n){return n.value}function ei(n,t){return t.value-n.value}function ri(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ui(n){return n.x}function ii(n){return n.y}function oi(n,t,e){n.y0=t,n.y=e}function ai(n){return ta.range(n.length)}function ci(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function li(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function si(n){return n.reduce(fi,0)}function fi(n,t){return n+t[1]}function hi(n,t){return gi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function gi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function pi(n){return[ta.min(n),ta.max(n)]}function vi(n,t){return n.value-t.value}function di(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function mi(n,t){n._pack_next=t,t._pack_prev=n}function yi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Mi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],wi(r,u,i),t(i),di(r,i),r._pack_prev=i,di(i,u),u=r._pack_next,o=3;l>o;o++){wi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(yi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!yi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?mi(r,u=a):mi(r=c,u),o--):(di(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(bi)}}function xi(n){n._pack_next=n._pack_prev=n}function bi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function wi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function Si(n,t){return n.parent==t.parent?1:2}function ki(n){var t=n.children;return t.length?t[0]:n.t}function Ei(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ai(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ni(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function zi(n){return 1+ta.max(n,function(n){return n.y})}function qi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function Ri(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Di(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Pi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ui(n){return n.rangeExtent?n.rangeExtent():Pi(n.range())}function ji(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Fi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Hi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:bl}function Oi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=ta.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Yi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Oi:ji,c=r?Yu:Ou;return o=u(n,t,c,e),a=u(t,n,c,mu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Du)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Xi(n,t)},i.tickFormat=function(t,e){return $i(n,t,e)},i.nice=function(t){return Zi(n,t),u()},i.copy=function(){return Yi(n,t,e,r)},u()}function Ii(n,t){return ta.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Zi(n,t){return Fi(n,Hi(Vi(n,t)[2]))}function Vi(n,t){null==t&&(t=10);var e=Pi(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Xi(n,t){return ta.range.apply(ta,Vi(n,t))}function $i(n,t,e){var r=Vi(n,t);if(e){var u=lc.exec(e);if(u.shift(),"s"===u[8]){var i=ta.formatPrefix(Math.max(va(r[0]),va(r[1])));return u[7]||(u[7]="."+Bi(i.scale(r[2]))),u[8]="f",e=ta.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Wi(u[8],r)),e=u.join("")}else e=",."+Bi(r[2])+"f";return ta.format(e)}function Bi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Wi(n,t){var e=Bi(t[2]);return n in _l?Math.abs(e-Bi(Math.max(va(t[0]),va(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Ji(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Fi(r.map(u),e?Math:Sl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Pi(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return wl;arguments.length<2?t=wl:"function"!=typeof t&&(t=ta.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Ji(n.copy(),t,e,r)},Ii(o,n)}function Gi(n,t,e){function r(t){return n(u(t))}var u=Ki(t),i=Ki(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return $i(e,n,t)},r.nice=function(n){return r.domain(Zi(e,n))},r.exponent=function(o){return arguments.length?(u=Ki(t=o),i=Ki(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Gi(n.copy(),t,e)},Ii(r,n)}function Ki(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Qi(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new a;for(var i,o=-1,c=r.length;++o<c;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+a);return i=r(c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):0|(l-c)/(n.length-1+a);return i=r(c+Math.round(s*a/2+(l-c-(n.length-1+a)*s)/2),s),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c));return i=r(s+Math.round((f-s-(n.length-a)*h)/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Pi(t.a[0])},e.copy=function(){return Qi(n,t)},e.domain(n)}function no(r,u){function i(){var n=0,t=u.length;for(a=[];++n<t;)a[n-1]=ta.quantile(r,n/t);return o}function o(n){return isNaN(n=+n)?void 0:u[ta.bisect(a,n)]}var a;return o.domain=function(u){return arguments.length?(r=u.map(t).filter(e).sort(n),i()):r},o.range=function(n){return arguments.length?(u=n,i()):u},o.quantiles=function(){return a},o.invertExtent=function(n){return n=u.indexOf(n),0>n?[0/0,0/0]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},o.copy=function(){return no(r,u)},i()}function to(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return to(n,t,e)},u()}function eo(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return eo(n,t)},e}function ro(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return $i(n,t,e)},t.copy=function(){return ro(n)},t}function uo(){return 0}function io(n){return n.innerRadius}function oo(n){return n.outerRadius}function ao(n){return n.startAngle}function co(n){return n.endAngle}function lo(n){return n&&n.padAngle}function so(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function fo(n,t,e,r,u){var i=n[0]-t[0],o=n[1]-t[1],a=(u?r:-r)/Math.sqrt(i*i+o*o),c=a*o,l=-a*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,E=_-p,A=w-v,N=S-p,C=k-v;return E*E+A*A>N*N+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function ho(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=kt(e),p=kt(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ar,r=Nr,u=Ne,i=go,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=zl.get(n)||go).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function go(n){return n.join("L")}function po(n){return go(n)+"Z"}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function yo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function Mo(n,t){return n.length<4?go(n):n[1]+_o(n.slice(1,-1),wo(n,t))}function xo(n,t){return n.length<3?go(n):n[0]+_o((n.push(n[0]),n),wo([n[n.length-2]].concat(n,[n[1]]),t))}function bo(n,t){return n.length<3?go(n):n[0]+_o(n,wo(n,t))}function _o(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return go(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function wo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function So(n){if(n.length<3)return go(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",No(Tl,o),",",No(Tl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Co(c,o,a);return n.pop(),c.push("L",r),c.join("")}function ko(n){if(n.length<4)return go(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(No(Tl,i)+","+No(Tl,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Co(e,i,o);return e.join("")}function Eo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[No(Tl,o),",",No(Tl,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Co(t,o,a);return t.join("")}function Ao(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return So(n)}function No(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Co(n,t,e){n.push("C",No(ql,t),",",No(ql,e),",",No(Ll,t),",",No(Ll,e),",",No(Tl,t),",",No(Tl,e))}function zo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function qo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=zo(u,i);++t<e;)r[t]=(o+(o=zo(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=qo(n),a=-1,c=n.length-1;++a<c;)t=zo(n[a],n[a+1]),va(t)<Ta?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?go(n):n[0]+_o(n,Lo(n))}function Ro(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-ja,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Do(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=kt(e),b=kt(u),_=e===r?function(){return g}:kt(r),w=u===i?function(){return p}:kt(i);++y<M;)o.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Nr,o=Ne,a=go,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=zl.get(n)||go).key,l=a.reverse||a,s=a.closed?"M":"L",t):c
},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Po(n){return n.radius}function Uo(n){return[n.x,n.y]}function jo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-ja;return[e*Math.cos(r),e*Math.sin(r)]}}function Fo(){return 64}function Ho(){return"circle"}function Oo(n){var t=Math.sqrt(n/Da);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Yo(n){return function(){var t,e;(t=this[n])&&(e=t[t.active])&&(--t.count?delete t[t.active]:delete this[n],t.active+=.5,e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function Io(n,t,e){return xa(n,Hl),n.namespace=t,n.id=e,n}function Zo(n,t,e,r){var u=n.id,i=n.namespace;return H(n,"function"==typeof e?function(n,o,a){n[i][u].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vo(n){return null==n&&(n=""),function(){this.textContent=n}}function Xo(n){return null==n?"__transition__":"__transition_"+n+"__"}function $o(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),o=i[r];if(!o){var c=u.time;o=i[r]={tween:new a,time:c,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++i.count,ta.timer(function(u){function a(e){if(i.active>r)return s();var u=i[i.active];u&&(--i.count,delete i[i.active],u.event&&u.event.interrupt.call(n,n.__data__,u.index)),i.active=r,o.event&&o.event.start.call(n,n.__data__,t),o.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&v.push(r)}),h=o.ease,f=o.duration,ta.timer(function(){return p.c=l(e||1)?Ne:l,1},0,c)}function l(e){if(i.active!==r)return 1;for(var u=e/f,a=h(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,n.__data__,t),s()):void 0}function s(){return--i.count?delete i[r]:delete n[e],1}var f,h,g=o.delay,p=oc,v=[];return p.t=g+c,u>=g?a(u-g):(p.c=a,void 0)},0,c)}}function Bo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Wo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Jo(n){return n.toISOString()}function Go(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Wl,u);return i==Wl.length?[t.year,Vi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Wl[i-1]<Wl[i]/u?i-1:i]:[Kl,Vi(n,e)[2]]}return r.invert=function(t){return Ko(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ko)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ko(+e+1),t).length}var i=r.domain(),o=Pi(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Fi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ko(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ko(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Pi(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ko(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Go(n.copy(),t,e)},Ii(r,n)}function Ko(n){return new Date(n)}function Qo(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:"3.5.3"};Date.now||(Date.now=function(){return+new Date});var ea=[].slice,ra=function(n){return ea.call(n)},ua=document,ia=ua.documentElement,oa=window;try{ra(ia.childNodes)[0].nodeType}catch(aa){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{ua.createElement("div").style.setProperty("opacity",0,"")}catch(ca){var la=oa.Element.prototype,sa=la.setAttribute,fa=la.setAttributeNS,ha=oa.CSSStyleDeclaration.prototype,ga=ha.setProperty;la.setAttribute=function(n,t){sa.call(this,n,t+"")},la.setAttributeNS=function(n,t,e){fa.call(this,n,t,e+"")},ha.setProperty=function(n,t,e){ga.call(this,n,t+"",e)}}ta.ascending=n,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var r,u=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)e(r=+n[o])&&(u+=r);else for(;++o<i;)e(r=+t.call(n,n[o],o))&&(u+=r);return u},ta.mean=function(n,r){var u,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)e(u=t(n[a]))?i+=u:--c;else for(;++a<o;)e(u=t(r.call(n,n[a],a)))?i+=u:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(r,u){var i,o=[],a=r.length,c=-1;if(1===arguments.length)for(;++c<a;)e(i=t(r[c]))&&o.push(i);else for(;++c<a;)e(i=t(u.call(r,r[c],c)))&&o.push(i);return o.length?ta.quantile(o.sort(n),.5):void 0},ta.variance=function(n,r){var u,i,o=n.length,a=0,c=0,l=-1,s=0;if(1===arguments.length)for(;++l<o;)e(u=t(n[l]))&&(i=u-a,a+=i/++s,c+=i*(u-a));else for(;++l<o;)e(u=t(r.call(n,n[l],l)))&&(i=u-a,a+=i/++s,c+=i*(u-a));return s>1?c/(s-1):void 0},ta.deviation=function(){var n=ta.variance.apply(this,arguments);return n?Math.sqrt(n):n};var pa=r(n);ta.bisectLeft=pa.left,ta.bisect=ta.bisectRight=pa.right,ta.bisector=function(t){return r(1===t.length?function(e,r){return n(t(e),r)}:t)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=0|Math.random()*i--,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,u),e=new Array(t);++n<t;)for(var r,i=-1,o=e[n]=new Array(r);++i<r;)o[i]=arguments[i][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var va=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,u=[],o=i(va(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)u.push(r/o);else for(;(r=n+e*++a)<t;)u.push(r/o);return u},ta.map=function(n,t){var e=new a;if(n instanceof a)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var o in n)e.set(o,n[o]);return e};var da="__proto__",ma="\x00";o(a,{has:s,get:function(n){return this._[c(n)]},set:function(n,t){return this._[c(n)]=t},remove:f,keys:h,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:l(t),value:this._[t]});return n},size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t),this._[t])}}),ta.nest=function(){function n(t,o,c){if(c>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,v=i[c++],d=new a;++g<p;)(h=d.get(l=v(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new v;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},o(v,{has:s,add:function(n){return this._[c(n+="")]=!0,n},remove:f,values:h,size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=d(n,t,t[e]);return n};var ya=["webkit","ms","moz","Moz","o","O"];ta.dispatch=function(){for(var n=new M,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=x(n);return n},M.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(Ma,"\\$&")};var Ma=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,xa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ba=function(n,t){return t.querySelector(n)},_a=function(n,t){return t.querySelectorAll(n)},wa=ia.matches||ia[m(ia,"matchesSelector")],Sa=function(n,t){return wa.call(n,t)};"function"==typeof Sizzle&&(ba=function(n,t){return Sizzle(n,t)[0]||null},_a=Sizzle,Sa=Sizzle.matchesSelector),ta.selection=function(){return Na};var ka=ta.selection.prototype=[];ka.select=function(n){var t,e,r,u,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return S(i)},ka.selectAll=function(n){var t,e,r=[];n=E(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=ra(n.call(e,e.__data__,a,u))),t.parentNode=e);return S(r)};var Ea={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ta.ns={prefix:Ea,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),Ea.hasOwnProperty(e)?{space:Ea[e],local:n}:n}},ka.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(A(t,n[t]));return this}return this.each(A(n,t))},ka.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=z(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!C(n[u]).test(t))return!1;return!0}for(t in n)this.each(q(t,n[t]));return this}return this.each(q(n,t))},ka.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(T(e,n[e],t));return this}if(2>r)return oa.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(T(n,t,e))},ka.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},ka.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ka.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ka.append=function(n){return n=D(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ka.insert=function(n,t){return n=D(n),t=k(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ka.remove=function(){return this.each(P)},ka.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new a,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=U(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=U(i);for(;f>r;++r)p[r]=U(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),l.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var c=O([]),l=S([]),s=S([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return l.enter=function(){return c},l.exit=function(){return s},l},ka.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ka.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return S(u)},ka.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ka.sort=function(n){n=F.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ka.each=function(n){return H(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ka.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},ka.empty=function(){return!this.node()},ka.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ka.size=function(){var n=0;return H(this,function(){++n}),n};var Aa=[];ta.selection.enter=O,ta.selection.enter.prototype=Aa,Aa.append=ka.append,Aa.empty=ka.empty,Aa.node=ka.node,Aa.call=ka.call,Aa.size=ka.size,Aa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return S(o)},Aa.insert=function(n,t){return arguments.length<2&&(t=Y(this)),ka.insert.call(this,n,t)},ta.select=function(n){var t=["string"==typeof n?ba(n,ua):n];return t.parentNode=ia,S([t])},ta.selectAll=function(n){var t=ra("string"==typeof n?_a(n,ua):n);return t.parentNode=ia,S([t])};var Na=ta.select(ia);ka.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(I(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(I(n,t,e))};var Ca=ta.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ca.forEach(function(n){"on"+n in ua&&Ca.remove(n)});var za="onselectstart"in ua?null:m(ia.style,"userSelect"),qa=0;ta.mouse=function(n){return $(n,_())};var La=/WebKit/.test(oa.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=_().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return $(n,r)},ta.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&ta.event.target===f),g({type:"dragend"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=e.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=ta.select(u()).on(i+d,a).on(o+d,c),y=X(),M=t(h,v);r?(l=r.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:"dragstart"})}}var e=w(n,"drag","dragstart","dragend"),r=null,u=t(y,ta.mouse,J,"mousemove","mouseup"),i=t(B,ta.touch,W,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},ta.rebind(n,e,"on")},ta.touches=function(n,t){return arguments.length<2&&(t=_().touches),t?ra(t).map(function(t){var e=$(n,t);return e.identifier=t.identifier,e}):[]};var Ta=1e-6,Ra=Ta*Ta,Da=Math.PI,Pa=2*Da,Ua=Pa-Ta,ja=Da/2,Fa=Da/180,Ha=180/Da,Oa=Math.SQRT2,Ya=2,Ia=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=et(v),o=i/(Ya*h)*(e*rt(Oa*t+v)-tt(v));return[r+o*l,u+o*s,i*e/et(Oa*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Oa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Ia*f)/(2*i*Ya*h),p=(c*c-i*i-Ia*f)/(2*c*Ya*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Oa;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(z,s).on(Xa+".zoom",h).on("dblclick.zoom",g).on(T,f)}function t(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function e(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function r(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=e(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function i(t,e,i,o){t.__chart__={x:k.x,y:k.y,k:k.k},r(Math.pow(2,o)),u(v=e,i),t=ta.select(t),N>0&&(t=t.transition().duration(N)),t.call(n.event)}function o(){x&&x.domain(M.range().map(function(n){return(n-k.x)/k.k}).map(M.invert)),S&&S.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function a(n){C++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function l(n){--C||n({type:"zoomend"}),v=null}function s(){function n(){s=1,u(ta.mouse(r),h),c(o)}function e(){f.on(q,null).on(L,null),g(s&&ta.event.target===i),l(o)}var r=this,i=ta.event.target,o=R.of(r,arguments),s=0,f=ta.select(oa).on(q,n).on(L,e),h=t(ta.mouse(r)),g=X();Fl.call(r),a(o)}function f(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=t(n))}),n}function e(){var t=ta.event.target;ta.select(t).on(x,o).on(_,h),w.push(t);for(var e=ta.event.changedTouches,r=0,u=e.length;u>r;++r)d[e[r].identifier]=null;var a=n(),c=Date.now();if(1===a.length){if(500>c-y){var l=a[0];i(p,l,d[l.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),b()}y=c}else if(a.length>1){var l=a[0],s=a[1],f=l[0]-s[0],g=l[1]-s[1];m=f*f+g*g}}function o(){var n,t,e,i,o=ta.touches(p);Fl.call(p);for(var a=0,l=o.length;l>a;++a,i=null)if(e=o[a],i=d[e.identifier]){if(t)break;n=e,t=i}if(i){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*g)}y=null,u(n,t),c(v)}function h(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(w).on(M,null),S.on(z,s).on(T,f),E(),l(v)}var g,p=this,v=R.of(p,arguments),d={},m=0,M=".zoom-"+ta.event.changedTouches[0].identifier,x="touchmove"+M,_="touchend"+M,w=[],S=ta.select(p),E=X();e(),a(v),S.on(z,null).on(T,e)}function h(){var n=R.of(this,arguments);m?clearTimeout(m):(p=t(v=d||ta.mouse(this)),Fl.call(this),a(n)),m=setTimeout(function(){m=null,l(n)},50),b(),r(Math.pow(2,.002*Za())*k.k),u(v,p),c(n)}function g(){var n=ta.mouse(this),e=Math.log(k.k)/Math.LN2;i(this,n,t(n),ta.event.shiftKey?Math.ceil(e)-1:Math.floor(e)+1)}var p,v,d,m,y,M,x,_,S,k={x:0,y:0,k:1},E=[960,500],A=Va,N=250,C=0,z="mousedown.zoom",q="mousemove.zoom",L="mouseup.zoom",T="touchstart.zoom",R=w(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=R.of(this,arguments),t=k;Ul?ta.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},a(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=v?v[0]:e/2,i=v?v[1]:r/2,o=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:u-r[0]*a,y:i-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){l(n)}).each("end.zoom",function(){l(n)}):(this.__chart__=k,a(n),c(n),l(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Va:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(d=t&&[+t[0],+t[1]],n):d},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(N=+t,n):N},n.x=function(t){return arguments.length?(x=t,M=t.copy(),k={x:0,y:0,k:1},n):x},n.y=function(t){return arguments.length?(S=t,_=t.copy(),k={x:0,y:0,k:1},n):S},ta.rebind(n,R,"on")};var Za,Va=[0,1/0],Xa="onwheel"in ua?(Za=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ua?(Za=function(){return ta.event.wheelDelta},"mousewheel"):(Za=function(){return-ta.event.detail},"MozMousePixelScroll");ta.color=it,it.prototype.toString=function(){return this.rgb()+""},ta.hsl=ot;var $a=ot.prototype=new it;$a.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,this.l/n)},$a.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,n*this.l)},$a.rgb=function(){return at(this.h,this.s,this.l)},ta.hcl=ct;var Ba=ct.prototype=new it;Ba.brighter=function(n){return new ct(this.h,this.c,Math.min(100,this.l+Wa*(arguments.length?n:1)))},Ba.darker=function(n){return new ct(this.h,this.c,Math.max(0,this.l-Wa*(arguments.length?n:1)))},Ba.rgb=function(){return lt(this.h,this.c,this.l).rgb()},ta.lab=st;var Wa=18,Ja=.95047,Ga=1,Ka=1.08883,Qa=st.prototype=new it;Qa.brighter=function(n){return new st(Math.min(100,this.l+Wa*(arguments.length?n:1)),this.a,this.b)},Qa.darker=function(n){return new st(Math.max(0,this.l-Wa*(arguments.length?n:1)),this.a,this.b)},Qa.rgb=function(){return ft(this.l,this.a,this.b)},ta.rgb=dt;var nc=dt.prototype=new it;nc.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new dt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new dt(u,u,u)},nc.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new dt(n*this.r,n*this.g,n*this.b)},nc.hsl=function(){return bt(this.r,this.g,this.b)},nc.toString=function(){return"#"+Mt(this.r)+Mt(this.g)+Mt(this.b)};var tc=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});tc.forEach(function(n,t){tc.set(n,mt(t))}),ta.functor=kt,ta.xhr=At(Et),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new v,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},ta.csv=ta.dsv(",","text/csv"),ta.tsv=ta.dsv("	","text/tab-separated-values");var ec,rc,uc,ic,oc,ac=oa[m(oa,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};rc?rc.n=i:ec=i,rc=i,uc||(ic=clearTimeout(ic),uc=1,ac(qt))},ta.timer.flush=function(){Lt(),Tt()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var cc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),cc[8+e/3]};var lc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,sc=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),fc=ta.time={},hc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){gc.setUTCDate.apply(this._,arguments)},setDay:function(){gc.setUTCDay.apply(this._,arguments)},setFullYear:function(){gc.setUTCFullYear.apply(this._,arguments)},setHours:function(){gc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){gc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){gc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){gc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){gc.setUTCSeconds.apply(this._,arguments)},setTime:function(){gc.setTime.apply(this._,arguments)}};var gc=Date.prototype;fc.year=Ft(function(n){return n=fc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),fc.years=fc.year.range,fc.years.utc=fc.year.utc.range,fc.day=Ft(function(n){var t=new hc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),fc.days=fc.day.range,fc.days.utc=fc.day.utc.range,fc.dayOfYear=function(n){var t=fc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=fc[n]=Ft(function(n){return(n=fc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});fc[n+"s"]=e.range,fc[n+"s"].utc=e.utc.range,fc[n+"OfYear"]=function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)}}),fc.week=fc.sunday,fc.weeks=fc.sunday.range,fc.weeks.utc=fc.sunday.utc.range,fc.weekOfYear=fc.sundayOfYear;var pc={"-":"",_:" ",0:"0"},vc=/^\s*\d+/,dc=/^%/;ta.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var mc=ta.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ta.format=mc.numberFormat,ta.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,yc),le(yc.s,this.s,this),this.s?this.t+=yc.t:this.s=yc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var yc=new ce;ta.geo.stream=function(n,t){n&&Mc.hasOwnProperty(n.type)?Mc[n.type](n,t):se(n,t)};var Mc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},xc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])
},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};ta.geo.area=function(n){return bc=0,ta.geo.stream(n,wc),bc};var bc,_c=new ce,wc={sphere:function(){bc+=4*Da},point:y,lineStart:y,lineEnd:y,polygonStart:function(){_c.reset(),wc.lineStart=ge},polygonEnd:function(){var n=2*_c;bc+=0>n?4*Da+n:n,wc.lineStart=wc.lineEnd=wc.point=y}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*Fa,e*Fa]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);Me(o),o=xe(o);var c=t-p,l=c>0?1:-1,v=o[0]*Ha*l,d=va(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Ha;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Ha;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=va(r)>180?r+(r>0?360:-360):r}else v=n,d=e;wc.point(n,e),t(n,e)}function i(){wc.lineStart()}function o(){u(v,d),wc.lineEnd(),va(y)>Ta&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,wc.polygonStart()},polygonEnd:function(){wc.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>_c?(s=-(h=180),f=-(g=90)):y>Ta?g=90:-Ta>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){Sc=kc=Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,Dc);var t=Lc,e=Tc,r=Rc,u=t*t+e*e+r*r;return Ra>u&&(t=Cc,e=zc,r=qc,Ta>kc&&(t=Ec,e=Ac,r=Nc),u=t*t+e*e+r*r,Ra>u)?[0/0,0/0]:[Math.atan2(e,t)*Ha,nt(r/Math.sqrt(u))*Ha]};var Sc,kc,Ec,Ac,Nc,Cc,zc,qc,Lc,Tc,Rc,Dc={sphere:y,point:_e,lineStart:Se,lineEnd:ke,polygonStart:function(){Dc.lineStart=Ee},polygonEnd:function(){Dc.lineStart=Se}},Pc=Le(Ne,Pe,je,[-Da,-Da/2]),Uc=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ye(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Ie(Ze)}).raw=Ze,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=ta.geo.albers(),o=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ta,f+.12*l+Ta],[s-.214*l-Ta,f+.234*l-Ta]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ta,f+.166*l+Ta],[s-.115*l-Ta,f+.234*l-Ta]]).stream(c).point,n},n.scale(1070)};var jc,Fc,Hc,Oc,Yc,Ic,Zc={point:y,lineStart:y,lineEnd:y,polygonStart:function(){Fc=0,Zc.lineStart=Ve},polygonEnd:function(){Zc.lineStart=Zc.lineEnd=Zc.point=y,jc+=va(Fc/2)}},Vc={point:Xe,lineStart:y,lineEnd:y,polygonStart:y,polygonEnd:y},Xc={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){Xc.lineStart=Ke},polygonEnd:function(){Xc.point=We,Xc.lineStart=Je,Xc.lineEnd=Ge}};ta.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),ta.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return jc=0,ta.geo.stream(n,u(Zc)),jc},n.centroid=function(n){return Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,u(Xc)),Rc?[Lc/Rc,Tc/Rc]:qc?[Cc/qc,zc/qc]:Nc?[Ec/Nc,Ac/Nc]:[0/0,0/0]},n.bounds=function(n){return Yc=Ic=-(Hc=Oc=1/0),ta.geo.stream(n,u(Vc)),[[Hc,Oc],[Yc,Ic]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):Et,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ur,ta.geo.projectionMutator=ir,(ta.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t}return n=lr(n[0]%360*Fa,n[1]*Fa,n.length>2?n[2]*Fa:0),t.invert=function(t){return t=n.invert(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t},t},cr.invert=ar,ta.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*Fa,-n[1]*Fa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ha,n[1]*=Ha}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*Fa,u*Fa),n):t},n.precision=function(r){return arguments.length?(e=gr(t*Fa,(u=+r)*Fa),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Fa,u=n[1]*Fa,i=t[1]*Fa,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},ta.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return va(n%d)>Ta}).map(s)).concat(ta.range(Math.ceil(a/v)*v,o,v).filter(function(n){return va(n%m)>Ta}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ta],[180,90-Ta]]).minorExtent([[-180,-80-Ta],[180,80+Ta]])},ta.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return Mr(n[0]*Fa,n[1]*Fa,t[0]*Fa,t[1]*Fa)},ta.geo.length=function(n){return $c=0,ta.geo.stream(n,Bc),$c};var $c,Bc={sphere:y,point:y,lineStart:xr,lineEnd:y,polygonStart:y,polygonEnd:y},Wc=br(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ur(Wc)}).raw=Wc;var Jc=br(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},Et);(ta.geo.azimuthalEquidistant=function(){return ur(Jc)}).raw=Jc,(ta.geo.conicConformal=function(){return Ie(_r)}).raw=_r,(ta.geo.conicEquidistant=function(){return Ie(wr)}).raw=wr;var Gc=br(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ur(Gc)}).raw=Gc,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-ja]},(ta.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Kc=br(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ur(Kc)}).raw=Kc;var Qc=br(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ur(Qc)}).raw=Qc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-ja]},(ta.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=kt(e),i=kt(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Cr(a),s=Cr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Nr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return xa(n,nl),n};var nl=ta.geom.polygon.prototype=[];nl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},nl.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},nl.clip=function(n){for(var t,e,r,u,i,o,a=Tr(n),c=-1,l=this.length-Tr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],qr(o,s,u)?(qr(i,s,u)||n.push(Lr(i,o,s,u)),n.push(o)):qr(i,s,u)&&n.push(Lr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var tl,el,rl,ul,il,ol=[],al=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ir),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ta)*Ta,y:Math.round(o(n,t)/Ta)*Ta,i:t}})}var r=Ar,u=Nr,i=r,o=u,a=cl;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Ir),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=kt(r=n),t):r},t.y=function(n){return arguments.length?(o=kt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?cl:n,t):a===cl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===cl?null:a&&a[1]},t)};var cl=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(va(c-e)+va(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,M=kt(a),x=kt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},k.find=function(n){return hu(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Nr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=gu,ta.interpolateObject=pu,ta.interpolateNumber=vu,ta.interpolateString=du;var ll=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sl=new RegExp(ll.source,"g");ta.interpolate=mu,ta.interpolators=[function(n,t){var e=typeof t;return("string"===e?tc.has(t)||/^(#|rgb\(|hsl\()/.test(t)?gu:du:t instanceof it?gu:Array.isArray(t)?yu:"object"===e&&isNaN(t)?pu:vu)(n,t)}],ta.interpolateArray=yu;var fl=function(){return Et},hl=ta.map({linear:fl,poly:ku,quad:function(){return _u},cubic:function(){return wu},sin:function(){return Eu},exp:function(){return Au},circle:function(){return Nu},elastic:Cu,back:zu,bounce:function(){return qu}}),gl=ta.map({"in":Et,out:xu,"in-out":bu,"out-in":function(n){return bu(xu(n))}});ta.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=hl.get(e)||fl,r=gl.get(r)||Et,Mu(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Lu,ta.interpolateHsl=Tu,ta.interpolateLab=Ru,ta.interpolateRound=Du,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,"g");return(ta.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Pu(e?e.matrix:pl)})(n)},Pu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var pl={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Hu,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Iu(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Pa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,a.resume()}var e,r,u,i,o,a={},c=ta.dispatch("start","tick","end"),l=[1,1],s=.9,f=vl,h=dl,g=-30,p=ml,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,M,x,b=m.length,_=y.length;for(e=0;_>e;++e)a=y[e],f=a.source,h=a.target,M=h.x-f.x,x=h.y-f.y,(p=M*M+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,M*=p,x*=p,h.x-=M*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=M*(d=1-d),f.y+=x*d);if((d=r*v)&&(M=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)a=m[e],a.x+=(M-a.x)*d,a.y+=(x-a.y)*d;if(g)for(Ju(t=ta.geom.quadtree(m),r,o),e=-1;++e<b;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ta.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;l>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=y.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=ta.behavior.drag().origin(Et).on("dragstart.force",Xu).on("drag.force",t).on("dragend.force",$u)),arguments.length?(this.on("mouseover.force",Bu).on("mouseout.force",Wu).call(e),void 0):e},ta.rebind(a,c,"on")};var vl=20,dl=1,ml=1/0;ta.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Qu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ei,e=ni,r=ti;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Ku(t,function(n){n.children&&(n.value=0)}),Qu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Gu(e,r)},ta.layout.pie=function(){function n(o){var a,c=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===yl?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){d[n]={data:o[n],value:a=l[n],startAngle:s,endAngle:s+=a*p+g,padAngle:h}}),d}var t=Number,e=yl,r=0,u=Pa,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var yl={};ta.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=Et,e=ai,r=ci,u=oi,i=ui,o=ii;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Ml.get(t)||ai,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:xl.get(t)||ci,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var Ml=ta.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(li),i=n.map(si),o=ta.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},"default":ai}),xl=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ci});ta.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[ta.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=pi,u=hi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=kt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return gi(n,t)}:kt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Qu(a,function(n){n.r=+s(n.value)}),Qu(a,Mi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Qu(a,function(n){n.r+=f}),Qu(a,Mi),Qu(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=ta.layout.hierarchy().sort(vi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Gu(n,e)},ta.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Qu(h,e),h.parent.m=-h.z,Ku(h,r),l)Ku(f,i);else{var g=f,p=f,v=f;Ku(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Ku(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ni(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=Ei(o),u=ki(u),o&&u;)c=ki(c),i=Ei(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ai(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!Ei(i)&&(i.t=o,i.m+=f-s),u&&!ki(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=ta.layout.hierarchy().sort(null).value(null),a=Si,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Gu(n,o)},ta.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Qu(c,function(n){var t=n.children;t&&t.length?(n.x=qi(t),n.y=zi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Qu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=ta.layout.hierarchy().sort(null).value(null),e=Si,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Gu(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Ri,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ri(t):Di(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Di(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ri:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h
},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Gu(i,a)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var bl={floor:Et,ceil:Et};ta.scale.linear=function(){return Yi([0,1],[0,1],mu,!1)};var _l={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Ji(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var wl=ta.format(".0e"),Sl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Gi(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return Qi([],{t:"range",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(kl)},ta.scale.category20=function(){return ta.scale.ordinal().range(El)},ta.scale.category20b=function(){return ta.scale.ordinal().range(Al)},ta.scale.category20c=function(){return ta.scale.ordinal().range(Nl)};var kl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(yt),El=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(yt),Al=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(yt),Nl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(yt);ta.scale.quantile=function(){return no([],[])},ta.scale.quantize=function(){return to(0,1,[0,1])},ta.scale.threshold=function(){return eo([.5],[0,1])},ta.scale.identity=function(){return ro([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=o.apply(this,arguments)-ja,f=a.apply(this,arguments)-ja,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ua)return t(l,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,E=0,A=0,N=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===Cl?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(A*=-1),l&&(A=nt(d/l*Math.sin(m))),n&&(E=nt(d/n*Math.sin(m)))),l){y=l*Math.cos(s+A),M=l*Math.sin(s+A),x=l*Math.cos(f-A),b=l*Math.sin(f-A);var C=Math.abs(f-s-2*A)<=Da?0:1;if(A&&so(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-E),w=n*Math.sin(f-E),S=n*Math.cos(s+E),k=n*Math.sin(s+E);var q=Math.abs(s-f+2*E)<=Da?0:1;if(E&&so(_,w,S,k)===1-g^q){var L=(s+f)/2;_=n*Math.cos(L),w=n*Math.sin(L),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Lr([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=fo(null==S?[_,w]:[S,k],[y,M],l,H,g),Y=fo([x,b],[_,w],l,H,g);p===H?N.push("M",O[0],"A",H,",",H," 0 0,",v," ",O[1],"A",l,",",l," 0 ",1-g^so(O[1][0],O[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",H,",",H," 0 0,",v," ",Y[0]):N.push("M",O[0],"A",H,",",H," 0 1,",v," ",Y[0])}else N.push("M",y,",",M);if(null!=S){var I=Math.min(p,(n-F)/(j-1)),Z=fo([y,M],[S,k],n,-I,g),V=fo([_,w],null==x?[y,M]:[x,b],n,-I,g);p===I?N.push("L",V[0],"A",I,",",I," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^so(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",I,",",I," 0 0,",v," ",Z[0]):N.push("L",V[0],"A",I,",",I," 0 0,",v," ",Z[0])}else N.push("L",_,",",w)}else N.push("M",y,",",M),null!=x&&N.push("A",l,",",l," 0 ",C,",",g," ",x,",",b),N.push("L",_,",",w),null!=S&&N.push("A",n,",",n," 0 ",q,",",1-g," ",S,",",k);return N.push("Z"),N.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=io,r=oo,u=uo,i=Cl,o=ao,a=co,c=lo;return n.innerRadius=function(t){return arguments.length?(e=kt(t),n):e},n.outerRadius=function(t){return arguments.length?(r=kt(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=kt(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Cl?Cl:kt(t),n):i},n.startAngle=function(t){return arguments.length?(o=kt(t),n):o},n.endAngle=function(t){return arguments.length?(a=kt(t),n):a},n.padAngle=function(t){return arguments.length?(c=kt(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-ja;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Cl="auto";ta.svg.line=function(){return ho(Et)};var zl=ta.map({linear:go,"linear-closed":po,step:vo,"step-before":mo,"step-after":yo,basis:So,"basis-open":ko,"basis-closed":Eo,bundle:Ao,cardinal:bo,"cardinal-open":Mo,"cardinal-closed":xo,monotone:To});zl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var ql=[0,2/3,1/3,0],Ll=[0,1/3,2/3,0],Tl=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=ho(Ro);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},mo.reverse=yo,yo.reverse=mo,ta.svg.area=function(){return Do(Et)},ta.svg.area.radial=function(){var n=Do(Ro);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)-ja,s=l.call(n,u,r)-ja;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Da)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Po,c=ao,l=co;return n.radius=function(t){return arguments.length?(a=kt(t),n):a},n.source=function(t){return arguments.length?(i=kt(t),n):i},n.target=function(t){return arguments.length?(o=kt(t),n):o},n.startAngle=function(t){return arguments.length?(c=kt(t),n):c},n.endAngle=function(t){return arguments.length?(l=kt(t),n):l},n},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=Uo;return n.source=function(e){return arguments.length?(t=kt(e),n):t},n.target=function(t){return arguments.length?(e=kt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=Uo,e=n.projection;return n.projection=function(n){return arguments.length?e(jo(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(Rl.get(t.call(this,n,r))||Oo)(e.call(this,n,r))}var t=Ho,e=Fo;return n.type=function(e){return arguments.length?(t=kt(e),n):t},n.size=function(t){return arguments.length?(e=kt(t),n):e},n};var Rl=ta.map({circle:Oo,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Pl)),e=t*Pl;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Dl),e=t*Dl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Dl),e=t*Dl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ta.svg.symbolTypes=Rl.keys();var Dl=Math.sqrt(3),Pl=Math.tan(30*Fa);ka.transition=function(n){for(var t,e,r=Ul||++Ol,u=Xo(n),i=[],o=jl||{time:Date.now(),ease:Su,delay:0,duration:250},a=-1,c=this.length;++a<c;){i.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(e=l[s])&&$o(e,s,u,r,o),t.push(e)}return Io(i,u,r)},ka.interrupt=function(n){return this.each(null==n?Fl:Yo(Xo(n)))};var Ul,jl,Fl=Yo(Xo()),Hl=[],Ol=0;Hl.call=ka.call,Hl.empty=ka.empty,Hl.node=ka.node,Hl.size=ka.size,ta.transition=function(n,t){return n&&n.transition?Ul?n.transition(t):n:Na.transition(n)},ta.transition.prototype=Hl,Hl.select=function(n){var t,e,r,u=this.id,i=this.namespace,o=[];n=k(n);for(var a=-1,c=this.length;++a<c;){o.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,a))?("__data__"in r&&(e.__data__=r.__data__),$o(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Io(o,i,u)},Hl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=this.namespace,c=[];n=E(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[a][o],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$o(u,p,a,o,i),t.push(u)}return Io(c,a,o)},Hl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Io(u,this.namespace,this.id)},Hl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):H(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Hl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:mu,a=ta.ns.qualify(n);return Zo(this,"attr."+n,t,a.local?i:u)},Hl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Hl.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=oa.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=mu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Zo(this,"style."+n,t,u)},Hl.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,oa.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Hl.text=function(n){return Zo(this,"text",n,Vo)},Hl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Hl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ta.ease.apply(ta,arguments)),H(this,function(r){r[e][t].ease=n}))},Hl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:H(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Hl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:H(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Hl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=jl,i=Ul;try{Ul=e,H(this,function(t,u,i){jl=t[r][e],n.call(t,t.__data__,u,i)})}finally{jl=u,Ul=i}}else H(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch("start","end","interrupt"))).on(n,t)});return this},Hl.transition=function(){for(var n,t,e,r,u=this.id,i=++Ol,o=this.namespace,a=[],c=0,l=this.length;l>c;c++){a.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[o][u],$o(e,s,o,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Io(a,o,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):Et:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ta),d=ta.transition(p.exit()).style("opacity",Ta).remove(),m=ta.transition(p.order()).style("opacity",1),y=Math.max(u,0)+o,M=Ui(f),x=l.selectAll(".domain").data([0]),b=(x.enter().append("path").attr("class","domain"),ta.transition(x));v.append("line"),v.append("text");var _,w,S,k,E=v.select("line"),A=m.select("line"),N=p.select("text").text(g),C=v.select("text"),z=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Bo,_="x",S="y",w="x2",k="y2",N.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),b.attr("d","M"+M[0]+","+q*i+"V0H"+M[1]+"V"+q*i)):(n=Wo,_="y",S="x",w="y2",k="x2",N.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),b.attr("d","M"+q*i+","+M[0]+"H0V"+M[1]+"H"+q*i)),E.attr(k,q*u),C.attr(S,q*y),A.attr(w,0).attr(k,q*u),z.attr(_,0).attr(S,q*y),f.rangeBand){var L=f,T=L.rangeBand()/2;s=f=function(n){return L(n)+T}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=Yl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Il?t+"":Yl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Yl="bottom",Il={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(i){i.each(function(){var i=ta.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,Et);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Zl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=ta.transition(i),h=ta.transition(o);c&&(s=Ui(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=Ui(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==ta.event.keyCode&&(N||(y=null,z[0]-=s[1],z[1]-=f[1],N=2),b())}function p(){32==ta.event.keyCode&&2==N&&(z[0]+=s[1],z[1]+=f[1],N=0,b())}function v(){var n=ta.mouse(x),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),N||(ta.event.altKey?(y||(y=[(s[0]+s[1])/2,(f[0]+f[1])/2]),z[0]=s[+(n[0]<y[0])],z[1]=f[+(n[1]<y[1])]):y=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,l,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:N?"move":"resize"}))}function d(n,t,e){var r,u,a=Ui(t),c=a[0],l=a[1],p=z[e],v=e?f:s,d=v[1]-v[0];return N&&(c-=p,l-=d+p),r=(e?g:h)?Math.max(c,Math.min(l,n[e])):n[e],N?u=(r+=p)+d:(y&&(p=Math.max(c,Math.min(l,2*y[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ta.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),C(),w({type:"brushend"})}var y,M,x=this,_=ta.select(ta.event.target),w=a.of(x,arguments),S=ta.select(x),k=_.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&l,N=_.classed("extent"),C=X(),z=ta.mouse(x),q=ta.select(oa).on("keydown.brush",u).on("keyup.brush",p);if(ta.event.changedTouches?q.on("touchmove.brush",v).on("touchend.brush",m):q.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),N)z[0]=s[0]-z[0],z[1]=f[0]-z[1];else if(k){var L=+/w$/.test(k),T=+/^n/.test(k);M=[s[1-L]-z[0],f[1-T]-z[1]],z[0]=s[L],z[1]=f[T]}else ta.event.altKey&&(y=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),ta.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=w(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],f=[0,0],h=!0,g=!0,p=Vl[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ul?ta.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=yu(s,t.x),r=yu(f,t.y);return i=o=null,function(u){s=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Vl[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,p=Vl[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(h=!!t[0],g=!!t[1]):c?h=!!t:l&&(g=!!t),n):c&&l?[h,g]:c?h:l?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),l&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(h=u,u=a,a=h))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&f[0]==f[1]},ta.rebind(n,a,"on")};var Zl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Vl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Xl=fc.format=mc.timeFormat,$l=Xl.utc,Bl=$l("%Y-%m-%dT%H:%M:%S.%LZ");Xl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Jo:Bl,Jo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Jo.toString=Bl.toString,fc.second=Ft(function(n){return new hc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),fc.seconds=fc.second.range,fc.seconds.utc=fc.second.utc.range,fc.minute=Ft(function(n){return new hc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),fc.minutes=fc.minute.range,fc.minutes.utc=fc.minute.utc.range,fc.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new hc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),fc.hours=fc.hour.range,fc.hours.utc=fc.hour.utc.range,fc.month=Ft(function(n){return n=fc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),fc.months=fc.month.range,fc.months.utc=fc.month.utc.range;var Wl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Jl=[[fc.second,1],[fc.second,5],[fc.second,15],[fc.second,30],[fc.minute,1],[fc.minute,5],[fc.minute,15],[fc.minute,30],[fc.hour,1],[fc.hour,3],[fc.hour,6],[fc.hour,12],[fc.day,1],[fc.day,2],[fc.week,1],[fc.month,1],[fc.month,3],[fc.year,1]],Gl=Xl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ne]]),Kl={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ko)},floor:Et,ceil:Et};Jl.year=fc.year,fc.scale=function(){return Go(ta.scale.linear(),Jl,Gl)};var Ql=Jl.map(function(n){return[n[0].utc,n[1]]}),ns=$l.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ne]]);Ql.year=fc.year.utc,fc.scale.utc=function(){return Go(ta.scale.linear(),Ql,ns)},ta.text=At(function(n){return n.responseText}),ta.json=function(n,t){return Nt(n,"application/json",Qo,t)},ta.html=function(n,t){return Nt(n,"text/html",na,t)},ta.xml=At(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(ta):"object"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();

/*d3.tip.js starts from here*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module with d3 as a dependency.
        define(['d3'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = function(d3) {
            d3.tip = factory(d3)
            return d3.tip
        }
    } else {
        // Browser global.
        root.d3.tip = factory(root.d3)
    }
}(this, function (d3) {

    // Public - contructs a new tooltip
    //
    // Returns a tip
    return function() {
        var direction = d3_tip_direction,
            offset    = d3_tip_offset,
            html      = d3_tip_html,
            node      = initNode(),
            svg       = null,
            point     = null,
            target    = null

        function tip(vis) {
            svg = getSVGNode(vis)
            point = svg.createSVGPoint()
            document.body.appendChild(node)
        }

        // Public - show the tooltip on the screen
        //
        // Returns a tip
        tip.show = function() {
            var args = Array.prototype.slice.call(arguments)
            if(args[args.length - 1] instanceof SVGElement) target = args.pop()

            var content = html.apply(this, args),
                poffset = offset.apply(this, args),
                dir     = direction.apply(this, args),
                nodel   = d3.select(node),
                i       = directions.length,
                coords,
                scrollTop  = document.documentElement.scrollTop || document.body.scrollTop,
                scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft

            nodel.html(content)
                .style({ opacity: 1, 'pointer-events': 'all' })

            while(i--) nodel.classed(directions[i], false)
            coords = direction_callbacks.get(dir).apply(this)
            nodel.classed(dir, true).style({
                top: (coords.top +  poffset[0]) + scrollTop + 'px',
                left: (coords.left + poffset[1]) + scrollLeft + 'px'
            })

            return tip
        }

        // Public - hide the tooltip
        //
        // Returns a tip
        tip.hide = function() {
            var nodel = d3.select(node)
            nodel.style({ opacity: 0, 'pointer-events': 'none' })
            return tip
        }

        // Public: Proxy attr calls to the d3 tip container.  Sets or gets attribute value.
        //
        // n - name of the attribute
        // v - value of the attribute
        //
        // Returns tip or attribute value
        tip.attr = function(n, v) {
            if (arguments.length < 2 && typeof n === 'string') {
                return d3.select(node).attr(n)
            } else {
                var args =  Array.prototype.slice.call(arguments)
                d3.selection.prototype.attr.apply(d3.select(node), args)
            }

            return tip
        }

        // Public: Proxy style calls to the d3 tip container.  Sets or gets a style value.
        //
        // n - name of the property
        // v - value of the property
        //
        // Returns tip or style property value
        tip.style = function(n, v) {
            if (arguments.length < 2 && typeof n === 'string') {
                return d3.select(node).style(n)
            } else {
                var args =  Array.prototype.slice.call(arguments)
                d3.selection.prototype.style.apply(d3.select(node), args)
            }

            return tip
        }

        // Public: Set or get the direction of the tooltip
        //
        // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
        //     sw(southwest), ne(northeast) or se(southeast)
        //
        // Returns tip or direction
        tip.direction = function(v) {
            if (!arguments.length) return direction
            direction = v == null ? v : d3.functor(v)

            return tip
        }

        // Public: Sets or gets the offset of the tip
        //
        // v - Array of [x, y] offset
        //
        // Returns offset or
        tip.offset = function(v) {
            if (!arguments.length) return offset
            offset = v == null ? v : d3.functor(v)

            return tip
        }

        // Public: sets or gets the html value of the tooltip
        //
        // v - String value of the tip
        //
        // Returns html value or tip
        tip.html = function(v) {
            if (!arguments.length) return html
            html = v == null ? v : d3.functor(v)

            return tip
        }

        function d3_tip_direction() { return 'n' }
        function d3_tip_offset() { return [0, 0] }
        function d3_tip_html() { return ' ' }

        var direction_callbacks = d3.map({
                n:  direction_n,
                s:  direction_s,
                e:  direction_e,
                w:  direction_w,
                nw: direction_nw,
                ne: direction_ne,
                sw: direction_sw,
                se: direction_se
            }),

            directions = direction_callbacks.keys()

        function direction_n() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.n.y - node.offsetHeight,
                left: bbox.n.x - node.offsetWidth / 2
            }
        }

        function direction_s() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.s.y,
                left: bbox.s.x - node.offsetWidth / 2
            }
        }

        function direction_e() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.e.y - node.offsetHeight / 2,
                left: bbox.e.x
            }
        }

        function direction_w() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.w.y - node.offsetHeight / 2,
                left: bbox.w.x - node.offsetWidth
            }
        }

        function direction_nw() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.nw.y - node.offsetHeight,
                left: bbox.nw.x - node.offsetWidth
            }
        }

        function direction_ne() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.ne.y - node.offsetHeight,
                left: bbox.ne.x
            }
        }

        function direction_sw() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.sw.y,
                left: bbox.sw.x - node.offsetWidth
            }
        }

        function direction_se() {
            var bbox = getScreenBBox()
            return {
                top:  bbox.se.y,
                left: bbox.e.x
            }
        }

        function initNode() {
            var node = d3.select(document.createElement('div'))
            node.style({
                position: 'absolute',
                top: 0,
                opacity: 0,
                'pointer-events': 'none',
                'box-sizing': 'border-box'
            })

            return node.node()
        }

        function getSVGNode(el) {
            el = el.node()
            if(el.tagName.toLowerCase() === 'svg')
                return el

            return el.ownerSVGElement
        }

        // Private - gets the screen coordinates of a shape
        //
        // Given a shape on the screen, will return an SVGPoint for the directions
        // n(north), s(south), e(east), w(west), ne(northeast), se(southeast), nw(northwest),
        // sw(southwest).
        //
        //    +-+-+
        //    |   |
        //    +   +
        //    |   |
        //    +-+-+
        //
        // Returns an Object {n, s, e, w, nw, sw, ne, se}
        function getScreenBBox() {
            var targetel   = target || d3.event.target;

            while ('undefined' === typeof targetel.getScreenCTM && 'undefined' === targetel.parentNode) {
                targetel = targetel.parentNode;
            }

            var bbox       = {},
                matrix     = targetel.getScreenCTM(),
                tbbox      = targetel.getBBox(),
                width      = tbbox.width,
                height     = tbbox.height,
                x          = tbbox.x,
                y          = tbbox.y

            point.x = x
            point.y = y
            bbox.nw = point.matrixTransform(matrix)
            point.x += width
            bbox.ne = point.matrixTransform(matrix)
            point.y += height
            bbox.se = point.matrixTransform(matrix)
            point.x -= width
            bbox.sw = point.matrixTransform(matrix)
            point.y -= height / 2
            bbox.w  = point.matrixTransform(matrix)
            point.x += width
            bbox.e = point.matrixTransform(matrix)
            point.x -= width / 2
            point.y -= height / 2
            bbox.n = point.matrixTransform(matrix)
            point.y += height
            bbox.s = point.matrixTransform(matrix)

            return bbox
        }

        return tip
    };

}));

/*d3pie starts from here*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports,
        // like Node
        module.exports = factory(require());
    } else {
        // browser globals (root is window)
        root.d3pie = factory(root);
    }
}(this, function () {

    var _scriptName = "d3pie";
    var _version = "0.1.5";

    // used to uniquely generate IDs and classes, ensuring no conflict between multiple pies on the same page
    var _uniqueIDCounter = 0;


    // this section includes all helper libs on the d3pie object. They're populated via grunt-template. Note: to keep
    // the syntax highlighting from getting all messed up, I commented out each line. That REQUIRES each of the files
    // to have an empty first line. Crumby, yes, but acceptable.
    //// --------- _default-settings.js -----------/**
    /**
     * Contains the out-the-box settings for the script. Any of these settings that aren't explicitly overridden for the
     * d3pie instance will inherit from these. This is also included on the main website for use in the generation script.
     */
    var defaultSettings = {
        header: {
            title: {
                text: "",
                color: "#333333",
                fontSize: 18,
                font: "arial"
            },
            subtitle: {
                text: "",
                color: "#666666",
                fontSize: 14,
                font: "arial"
            },
            location: "top-center",
            titleSubtitlePadding: 8
        },
        footer: {
            text: "",
            color: "#666666",
            fontSize: 14,
            font: "arial",
            location: "left"
        },
        size: {
            canvasHeight: 500,
            canvasWidth: 500,
            pieInnerRadius: "0%",
            pieOuterRadius: null
        },
        data: {
            sortOrder: "none",
            ignoreSmallSegments: {
                enabled: false,
                valueType: "percentage",
                value: null
            },
            smallSegmentGrouping: {
                enabled: false,
                value: 1,
                valueType: "percentage",
                label: "Other",
                color: "#cccccc"
            },
            content: []
        },
        labels: {
            outer: {
                format: "label",
                hideWhenLessThanPercentage: null,
                pieDistance: 30
            },
            inner: {
                format: "percentage",
                hideWhenLessThanPercentage: null
            },
            mainLabel: {
                color: "#333333",
                font: "arial",
                fontSize: 10
            },
            percentage: {
                color: "#dddddd",
                font: "arial",
                fontSize: 10,
                decimalPlaces: 0
            },
            value: {
                color: "#cccc44",
                font: "arial",
                fontSize: 10
            },
            lines: {
                enabled: true,
                style: "curved",
                color: "segment"
            },
            truncation: {
                enabled: false,
                length: 30
            }
        },
        effects: {
            load: {
                effect: "default",
                speed: 1000
            },
            pullOutSegmentOnClick: {
                effect: "bounce",
                speed: 300,
                size: 10
            },
            highlightSegmentOnMouseover: true,
            highlightLuminosity: -0.2
        },
        tooltips: {
            enabled: false,
            type: "placeholder", // caption|placeholder
            string: "",
            placeholderParser: null,
            styles: {
                fadeInSpeed: 250,
                backgroundColor: "#000000",
                backgroundOpacity: 0.5,
                color: "#efefef",
                borderRadius: 2,
                font: "arial",
                fontSize: 10,
                padding: 4
            }
        },
        misc: {
            colors: {
                background: null,
                segments: [
                    "#2484c1", "#65a620", "#7b6888", "#a05d56", "#961a1a", "#d8d23a", "#e98125", "#d0743c", "#635222", "#6ada6a",
                    "#0c6197", "#7d9058", "#207f33", "#44b9b0", "#bca44a", "#e4a14b", "#a3acb2", "#8cc3e9", "#69a6f9", "#5b388f",
                    "#546e91", "#8bde95", "#d2ab58", "#273c71", "#98bf6e", "#4daa4b", "#98abc5", "#cc1010", "#31383b", "#006391",
                    "#c2643f", "#b0a474", "#a5a39c", "#a9c2bc", "#22af8c", "#7fcecf", "#987ac6", "#3d3b87", "#b77b1c", "#c9c2b6",
                    "#807ece", "#8db27c", "#be66a2", "#9ed3c6", "#00644b", "#005064", "#77979f", "#77e079", "#9c73ab", "#1f79a7"
                ],
                segmentStroke: "#ffffff"
            },
            gradient: {
                enabled: false,
                percentage: 95,
                color: "#000000"
            },
            canvasPadding: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
            pieCenterOffset: {
                x: 0,
                y: 0
            },
            cssPrefix: null
        },
        callbacks: {
            onload: null,
            onMouseoverSegment: null,
            onMouseoutSegment: null,
            onClickSegment: null
        }
    };

    //// --------- validate.js -----------
    var validate = {

        // called whenever a new pie chart is created
        initialCheck: function (pie) {
            var cssPrefix = pie.cssPrefix;
            var element = pie.element;
            var options = pie.options;

            // confirm d3 is available [check minimum version]
            if (!window.d3 || !window.d3.hasOwnProperty("version")) {
                console.error("d3pie error: d3 is not available");
                return false;
            }

            // confirm element is either a DOM element or a valid string for a DOM element
            if (!(element instanceof HTMLElement)) {
                console.error("d3pie error: the first d3pie() param must be a valid DOM element (not jQuery) or a ID string.");
                return false;
            }

            // confirm the CSS prefix is valid. It has to start with a-Z and contain nothing but a-Z0-9_-
            if (!(/[a-zA-Z][a-zA-Z0-9_-]*$/.test(cssPrefix))) {
                console.error("d3pie error: invalid options.misc.cssPrefix");
                return false;
            }

            // confirm some data has been supplied
            if (!helpers.isArray(options.data.content)) {
                console.error("d3pie error: invalid config structure: missing data.content property.");
                return false;
            }
            if (options.data.content.length === 0) {
                console.error("d3pie error: no data supplied.");
                return false;
            }

            // clear out any invalid data. Each data row needs a valid positive number and a label
            var data = [];
            for (var i = 0; i < options.data.content.length; i++) {
                if (typeof options.data.content[i].value !== "number" || isNaN(options.data.content[i].value)) {
                    console.log("not valid: ", options.data.content[i]);
                    continue;
                }
                if (options.data.content[i].value <= 0) {
                    console.log("not valid - should have positive value: ", options.data.content[i]);
                    continue;
                }
                data.push(options.data.content[i]);
            }
            pie.options.data.content = data;

            // labels.outer.hideWhenLessThanPercentage - 1-100
            // labels.inner.hideWhenLessThanPercentage - 1-100

            return true;
        }
    };
    //// --------- helpers.js -----------
    var helpers = {

        // creates the SVG element
        addSVGSpace: function (pie) {
            var element = pie.element;
            var canvasWidth = pie.options.size.canvasWidth;
            var canvasHeight = pie.options.size.canvasHeight;
            var backgroundColor = pie.options.misc.colors.background;

            var svg = d3.select(element).append("svg:svg")
//                .attr("width", '100%')
//                .attr("height", '100%')
//                .style("width", canvasWidth+'px')
//                .style("height", canvasHeight+'px')
                .attr("viewBox", "0 0 " + canvasWidth + " " + canvasHeight)
                .attr("preserveAspectRatio", "xMinYMin meet")   //the next three lines are added to make pie chart responsive
                .append("g")
                .attr("transform", "translate(0,0)");

            if (backgroundColor !== "transparent") {
                svg.style("background-color", function () {
                    return backgroundColor;
                });
            }

            return svg;
        },

        whenIdExists: function (id, callback) {
            var inc = 1;
            var giveupIterationCount = 1000;

            var interval = setInterval(function () {
                if (document.getElementById(id)) {
                    clearInterval(interval);
                    callback();
                }
                if (inc > giveupIterationCount) {
                    clearInterval(interval);
                }
                inc++;
            }, 1);
        },

        whenElementsExist: function (els, callback) {
            var inc = 1;
            var giveupIterationCount = 1000;

            var interval = setInterval(function () {
                var allExist = true;
                for (var i = 0; i < els.length; i++) {
                    if (!document.getElementById(els[i])) {
                        allExist = false;
                        break;
                    }
                }
                if (allExist) {
                    clearInterval(interval);
                    callback();
                }
                if (inc > giveupIterationCount) {
                    clearInterval(interval);
                }
                inc++;
            }, 1);
        },

        shuffleArray: function (array) {
            var currentIndex = array.length, tmpVal, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // and swap it with the current element
                tmpVal = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = tmpVal;
            }
            return array;
        },

        processObj: function (obj, is, value) {
            if (typeof is === 'string') {
                return helpers.processObj(obj, is.split('.'), value);
            } else if (is.length === 1 && value !== undefined) {
                obj[is[0]] = value;
                return obj[is[0]];
            } else if (is.length === 0) {
                return obj;
            } else {
                return helpers.processObj(obj[is[0]], is.slice(1), value);
            }
        },

        getDimensions: function (id) {
            var el = document.getElementById(id);
            var w = 0, h = 0;
            if (el) {
                var dimensions = el.getBBox();
                w = dimensions.width;
                h = dimensions.height;
            } else {
                console.log("error: getDimensions() " + id + " not found.");
            }
            return { w: w, h: h };
        },

        /**
         * This is based on the SVG coordinate system, where top-left is 0,0 and bottom right is n-n.
         * @param r1
         * @param r2
         * @returns {boolean}
         */
        rectIntersect: function (r1, r2) {
            var returnVal = (
                // r2.left > r1.right
                (r2.x > (r1.x + r1.w)) ||

                // r2.right < r1.left
                ((r2.x + r2.w) < r1.x) ||

                // r2.top < r1.bottom
                ((r2.y + r2.h) < r1.y) ||

                // r2.bottom > r1.top
                (r2.y > (r1.y + r1.h))
                );

            return !returnVal;
        },

        /**
         * Returns a lighter/darker shade of a hex value, based on a luminance value passed.
         * @param hex a hex color value such as “#abc” or “#123456″ (the hash is optional)
         * @param lum the luminosity factor: -0.1 is 10% darker, 0.2 is 20% lighter, etc.
         * @returns {string}
         */
        getColorShade: function (hex, lum) {

            // validate hex string
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            lum = lum || 0;

            // convert to decimal and change luminosity
            var newHex = "#";
            for (var i = 0; i < 3; i++) {
                var c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
                newHex += ("00" + c).substr(c.length);
            }

            return newHex;
        },

        /**
         * Users can choose to specify segment colors in three ways (in order of precedence):
         *    1. include a "color" attribute for each row in data.content
         *    2. include a misc.colors.segments property which contains an array of hex codes
         *    3. specify nothing at all and rely on this lib provide some reasonable defaults
         *
         * This function sees what's included and populates this.options.colors with whatever's required
         * for this pie chart.
         * @param data
         */
        initSegmentColors: function (pie) {
            var data = pie.options.data.content;
            var colors = pie.options.misc.colors.segments;

            // TODO this needs a ton of error handling

            var finalColors = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty("color")) {
                    finalColors.push(data[i].color);
                } else {
                    finalColors.push(colors[i]);
                }
            }

            return finalColors;
        },

        applySmallSegmentGrouping: function (data, smallSegmentGrouping) {
            var totalSize;
            if (smallSegmentGrouping.valueType === "percentage") {
                totalSize = math.getTotalPieSize(data);
            }

            // loop through each data item
            var newData = [];
            var groupedData = [];
            var totalGroupedData = 0;
            for (var i = 0; i < data.length; i++) {
                if (smallSegmentGrouping.valueType === "percentage") {
                    var dataPercent = (data[i].value / totalSize) * 100;
                    if (dataPercent <= smallSegmentGrouping.value) {
                        groupedData.push(data[i]);
                        totalGroupedData += data[i].value;
                        continue;
                    }
                    data[i].isGrouped = false;
                    newData.push(data[i]);
                } else {
                    if (data[i].value <= smallSegmentGrouping.value) {
                        groupedData.push(data[i]);
                        totalGroupedData += data[i].value;
                        continue;
                    }
                    data[i].isGrouped = false;
                    newData.push(data[i]);
                }
            }

            // we're done! See if there's any small segment groups to add
            if (groupedData.length) {
                newData.push({
                    color: smallSegmentGrouping.color,
                    label: smallSegmentGrouping.label,
                    value: totalGroupedData,
                    isGrouped: true,
                    groupedData: groupedData
                });
            }

            return newData;
        },

        // for debugging
        showPoint: function (svg, x, y) {
            svg.append("circle").attr("cx", x).attr("cy", y).attr("r", 2).style("fill", "black");
        },

        isFunction: function (functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        },

        isArray: function (o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        }
    };


// taken from jQuery
    var extend = function () {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false,
            toString = Object.prototype.toString,
            hasOwn = Object.prototype.hasOwnProperty,
            class2type = {
                "[object Boolean]": "boolean",
                "[object Number]": "number",
                "[object String]": "string",
                "[object Function]": "function",
                "[object Array]": "array",
                "[object Date]": "date",
                "[object RegExp]": "regexp",
                "[object Object]": "object"
            },

            jQuery = {
                isFunction: function (obj) {
                    return jQuery.type(obj) === "function";
                },
                isArray: Array.isArray ||
                    function (obj) {
                        return jQuery.type(obj) === "array";
                    },
                isWindow: function (obj) {
                    return obj !== null && obj === obj.window;
                },
                isNumeric: function (obj) {
                    return !isNaN(parseFloat(obj)) && isFinite(obj);
                },
                type: function (obj) {
                    return obj === null ? String(obj) : class2type[toString.call(obj)] || "object";
                },
                isPlainObject: function (obj) {
                    if (!obj || jQuery.type(obj) !== "object" || obj.nodeType) {
                        return false;
                    }
                    try {
                        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                            return false;
                        }
                    } catch (e) {
                        return false;
                    }
                    var key;
                    for (key in obj) {
                    }
                    return key === undefined || hasOwn.call(obj, key);
                }
            };
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (i; i < length; i++) {
            if ((options = arguments[i]) !== null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        // WARNING: RECURSION
                        target[name] = extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    //// --------- math.js -----------
    var math = {

        toRadians: function (degrees) {
            return degrees * (Math.PI / 180);
        },

        toDegrees: function (radians) {
            return radians * (180 / Math.PI);
        },

        computePieRadius: function (pie) {
            var size = pie.options.size;
            var canvasPadding = pie.options.misc.canvasPadding;

            // outer radius is either specified (e.g. through the generator), or omitted altogether
            // and calculated based on the canvas dimensions. Right now the estimated version isn't great - it should
            // be possible to calculate it to precisely generate the maximum sized pie, but it's fussy as heck. Something
            // for the next release.

            // first, calculate the default _outerRadius
            var w = size.canvasWidth - canvasPadding.left - canvasPadding.right;
            var h = size.canvasHeight - canvasPadding.top - canvasPadding.bottom;

            // now factor in the footer, title & subtitle
            if (pie.options.header.location !== "pie-center") {
                h -= pie.textComponents.headerHeight;
            }

            if (pie.textComponents.footer.exists) {
                h -= pie.textComponents.footer.h;
            }

            // for really teeny pies, h may be < 0. Adjust it back
            h = (h < 0) ? 0 : h;

            var outerRadius = ((w < h) ? w : h) / 3;
            var innerRadius, percent;

            // if the user specified something, use that instead
            if (size.pieOuterRadius !== null) {
                if (/%/.test(size.pieOuterRadius)) {
                    percent = parseInt(size.pieOuterRadius.replace(/[\D]/, ""), 10);
                    percent = (percent > 99) ? 99 : percent;
                    percent = (percent < 0) ? 0 : percent;

                    var smallestDimension = (w < h) ? w : h;

                    // now factor in the label line size
                    if (pie.options.labels.outer.format !== "none") {
                        var pieDistanceSpace = parseInt(pie.options.labels.outer.pieDistance, 10) * 2;
                        if (smallestDimension - pieDistanceSpace > 0) {
                            smallestDimension -= pieDistanceSpace;
                        }
                    }

                    outerRadius = Math.floor((smallestDimension / 100) * percent) / 2;
                } else {
                    outerRadius = parseInt(size.pieOuterRadius, 10);
                }
            }

            // inner radius
            if (/%/.test(size.pieInnerRadius)) {
                percent = parseInt(size.pieInnerRadius.replace(/[\D]/, ""), 10);
                percent = (percent > 99) ? 99 : percent;
                percent = (percent < 0) ? 0 : percent;
                innerRadius = Math.floor((outerRadius / 100) * percent);
            } else {
                innerRadius = parseInt(size.pieInnerRadius, 10);
            }

            pie.innerRadius = innerRadius;
            pie.outerRadius = outerRadius;
        },

        getTotalPieSize: function (data) {
            var totalSize = 0;
            for (var i = 0; i < data.length; i++) {
                totalSize += data[i].value;
            }
            return totalSize;
        },

        sortPieData: function (pie) {
            var data = pie.options.data.content;
            var sortOrder = pie.options.data.sortOrder;

            switch (sortOrder) {
                case "none":
                    // do nothing
                    break;
                case "random":
                    data = helpers.shuffleArray(data);
                    break;
                case "value-asc":
                    data.sort(function (a, b) {
                        return (a.value < b.value) ? -1 : 1;
                    });
                    break;
                case "value-desc":
                    data.sort(function (a, b) {
                        return (a.value < b.value) ? 1 : -1;
                    });
                    break;
                case "label-asc":
                    data.sort(function (a, b) {
                        return (a.label.toLowerCase() > b.label.toLowerCase()) ? 1 : -1;
                    });
                    break;
                case "label-desc":
                    data.sort(function (a, b) {
                        return (a.label.toLowerCase() < b.label.toLowerCase()) ? 1 : -1;
                    });
                    break;
            }

            return data;
        },



        // var pieCenter = math.getPieCenter();
        getPieTranslateCenter: function (pieCenter) {
            return "translate(" + pieCenter.x + "," + pieCenter.y + ")";
        },

        /**
         * Used to determine where on the canvas the center of the pie chart should be. It takes into account the
         * height and position of the title, subtitle and footer, and the various paddings.
         * @private
         */
        calculatePieCenter: function (pie) {
            var pieCenterOffset = pie.options.misc.pieCenterOffset;
            var hasTopTitle = (pie.textComponents.title.exists && pie.options.header.location !== "pie-center");
            var hasTopSubtitle = (pie.textComponents.subtitle.exists && pie.options.header.location !== "pie-center");

            var headerOffset = pie.options.misc.canvasPadding.top;
            if (hasTopTitle && hasTopSubtitle) {
                headerOffset += pie.textComponents.title.h + pie.options.header.titleSubtitlePadding + pie.textComponents.subtitle.h;
            } else if (hasTopTitle) {
                headerOffset += pie.textComponents.title.h;
            } else if (hasTopSubtitle) {
                headerOffset += pie.textComponents.subtitle.h;
            }

            var footerOffset = 0;
            if (pie.textComponents.footer.exists) {
                footerOffset = pie.textComponents.footer.h + pie.options.misc.canvasPadding.bottom;
            }

            var x = ((pie.options.size.canvasWidth - pie.options.misc.canvasPadding.left - pie.options.misc.canvasPadding.right) / 2) + pie.options.misc.canvasPadding.left;
            var y = ((pie.options.size.canvasHeight - footerOffset - headerOffset) / 2) + headerOffset;

            x += pieCenterOffset.x;
            y += pieCenterOffset.y;

            pie.pieCenter = { x: x, y: y };
        },


        /**
         * Rotates a point (x, y) around an axis (xm, ym) by degrees (a).
         * @param x
         * @param y
         * @param xm
         * @param ym
         * @param a angle in degrees
         * @returns {Array}
         */
        rotate: function (x, y, xm, ym, a) {

            a = a * Math.PI / 180; // convert to radians

            var cos = Math.cos,
                sin = Math.sin,
            // subtract midpoints, so that midpoint is translated to origin and add it in the end again
                xr = (x - xm) * cos(a) - (y - ym) * sin(a) + xm,
                yr = (x - xm) * sin(a) + (y - ym) * cos(a) + ym;

            return { x: xr, y: yr };
        },

        /**
         * Translates a point x, y by distance d, and by angle a.
         * @param x
         * @param y
         * @param dist
         * @param a angle in degrees
         */
        translate: function (x, y, d, a) {
            var rads = math.toRadians(a);
            return {
                x: x + d * Math.sin(rads),
                y: y - d * Math.cos(rads)
            };
        },

        // from: http://stackoverflow.com/questions/19792552/d3-put-arc-labels-in-a-pie-chart-if-there-is-enough-space
        pointIsInArc: function (pt, ptData, d3Arc) {
            // Center of the arc is assumed to be 0,0
            // (pt.x, pt.y) are assumed to be relative to the center
            var r1 = d3Arc.innerRadius()(ptData), // Note: Using the innerRadius
                r2 = d3Arc.outerRadius()(ptData),
                theta1 = d3Arc.startAngle()(ptData),
                theta2 = d3Arc.endAngle()(ptData);

            var dist = pt.x * pt.x + pt.y * pt.y,
                angle = Math.atan2(pt.x, -pt.y); // Note: different coordinate system

            angle = (angle < 0) ? (angle + Math.PI * 2) : angle;

            return (r1 * r1 <= dist) && (dist <= r2 * r2) &&
                (theta1 <= angle) && (angle <= theta2);
        }
    };

    //// --------- labels.js -----------
    var labels = {

        /**
         * Adds the labels to the pie chart, but doesn't position them. There are two locations for the
         * labels: inside (center) of the segments, or outside the segments on the edge.
         * @param section "inner" or "outer"
         * @param sectionDisplayType "percentage", "value", "label", "label-value1", etc.
         * @param pie
         */
        add: function (pie, section, sectionDisplayType) {
            var include = labels.getIncludes(sectionDisplayType);
            var settings = pie.options.labels;

            // group the label groups (label, percentage, value) into a single element for simpler positioning
            var outerLabel = pie.svg.insert("g", "." + pie.cssPrefix + "labels-" + section)
                .attr("class", pie.cssPrefix + "labels-" + section);

            var labelGroup = outerLabel.selectAll("." + pie.cssPrefix + "labelGroup-" + section)
                .data(pie.options.data.content)
                .enter()
                .append("g")
                .attr("id", function (d, i) {
                    return pie.cssPrefix + "labelGroup" + i + "-" + section;
                })
                .attr("data-index", function (d, i) {
                    return i;
                })
                .attr("class", pie.cssPrefix + "labelGroup-" + section)
                .style("opacity", 0);

            // 1. Add the main label
            if (include.mainLabel) {
                labelGroup.append("text")
                    .attr("id", function (d, i) {
                        return pie.cssPrefix + "segmentMainLabel" + i + "-" + section;
                    })
                    .attr("class", pie.cssPrefix + "segmentMainLabel-" + section)
                    .text(function (d) {
                        var str = d.label;
                        if (settings.truncation.enabled && d.label.length > settings.truncation.length) {
                            str = d.label.substring(0, settings.truncation.length) + "...";
                        }
                        return str;
                    })
                    .style("font-size", settings.mainLabel.fontSize + "px")
                    .style("font-family", settings.mainLabel.font)
                    .style("fill", settings.mainLabel.color);
            }

            // 2. Add the percentage label
            if (include.percentage) {
                labelGroup.append("text")
                    .attr("id", function (d, i) {
                        return pie.cssPrefix + "segmentPercentage" + i + "-" + section;
                    })
                    .attr("class", pie.cssPrefix + "segmentPercentage-" + section)
                    .text(function (d, i) {
                        return segments.getPercentage(pie, i) + "%";
                    })
                    .style("font-size", settings.percentage.fontSize + "px")
                    .style("font-family", settings.percentage.font)
                    .style("fill", settings.percentage.color);
            }

            // 3. Add the value label
            if (include.value) {
                labelGroup.append("text")
                    .attr("id", function (d, i) {
                        return pie.cssPrefix + "segmentValue" + i + "-" + section;
                    })
                    .attr("class", pie.cssPrefix + "segmentValue-" + section)
                    .text(function (d) {
                        return d.value;
                    })
                    .style("font-size", settings.value.fontSize + "px")
                    .style("font-family", settings.value.font)
                    .style("fill", settings.value.color);
            }
        },

        /**
         * @param section "inner" / "outer"
         */
        positionLabelElements: function (pie, section, sectionDisplayType) {
            labels["dimensions-" + section] = [];

            // get the latest widths, heights
            var labelGroups = d3.selectAll("." + pie.cssPrefix + "labelGroup-" + section);
            labelGroups.each(function (d, i) {
                var mainLabel = d3.select(this).selectAll("." + pie.cssPrefix + "segmentMainLabel-" + section);
                var percentage = d3.select(this).selectAll("." + pie.cssPrefix + "segmentPercentage-" + section);
                var value = d3.select(this).selectAll("." + pie.cssPrefix + "segmentValue-" + section);

                labels["dimensions-" + section].push({
                    mainLabel: (mainLabel.node() !== null) ? mainLabel.node().getBBox() : null,
                    percentage: (percentage.node() !== null) ? percentage.node().getBBox() : null,
                    value: (value.node() !== null) ? value.node().getBBox() : null
                });
            });

            var singleLinePad = 5;
            var dims = labels["dimensions-" + section];
            switch (sectionDisplayType) {
                case "label-value1":
                    d3.selectAll("." + pie.cssPrefix + "segmentValue-" + section)
                        .attr("dx", function (d, i) {
                            return dims[i].mainLabel.width + singleLinePad;
                        });
                    break;
                case "label-value2":
                    d3.selectAll("." + pie.cssPrefix + "segmentValue-" + section)
                        .attr("dy", function (d, i) {
                            return dims[i].mainLabel.height;
                        });
                    break;
                case "label-percentage1":
                    d3.selectAll("." + pie.cssPrefix + "segmentPercentage-" + section)
                        .attr("dx", function (d, i) {
                            return dims[i].mainLabel.width + singleLinePad;
                        });
                    break;
                case "label-percentage2":
                    d3.selectAll("." + pie.cssPrefix + "segmentPercentage-" + section)
                        .attr("dx", function (d, i) {
                            return (dims[i].mainLabel.width / 2) - (dims[i].percentage.width / 2);
                        })
                        .attr("dy", function (d, i) {
                            return dims[i].mainLabel.height;
                        });
                    break;
            }
        },

        computeLabelLinePositions: function (pie) {
            pie.lineCoordGroups = [];
            d3.selectAll("." + pie.cssPrefix + "labelGroup-outer")
                .each(function (d, i) {
                    return labels.computeLinePosition(pie, i);
                });
        },

        computeLinePosition: function (pie, i) {
            var angle = segments.getSegmentAngle(i, pie.options.data.content, pie.totalSize, { midpoint: true });
            var originCoords = math.rotate(pie.pieCenter.x, pie.pieCenter.y - pie.outerRadius, pie.pieCenter.x, pie.pieCenter.y, angle);
            var heightOffset = pie.outerLabelGroupData[i].h / 5; // TODO check
            var labelXMargin = 6; // the x-distance of the label from the end of the line [TODO configurable]

            var quarter = Math.floor(angle / 90);
            var midPoint = 4;
            var x2, y2, x3, y3;

            // this resolves an issue when the
            if (quarter === 2 && angle === 180) {
                quarter = 1;
            }

            switch (quarter) {
                case 0:
                    x2 = pie.outerLabelGroupData[i].x - labelXMargin - ((pie.outerLabelGroupData[i].x - labelXMargin - originCoords.x) / 2);
                    y2 = pie.outerLabelGroupData[i].y + ((originCoords.y - pie.outerLabelGroupData[i].y) / midPoint);
                    x3 = pie.outerLabelGroupData[i].x - labelXMargin;
                    y3 = pie.outerLabelGroupData[i].y - heightOffset;
                    break;
                case 1:
                    x2 = originCoords.x + (pie.outerLabelGroupData[i].x - originCoords.x) / midPoint;
                    y2 = originCoords.y + (pie.outerLabelGroupData[i].y - originCoords.y) / midPoint;
                    x3 = pie.outerLabelGroupData[i].x - labelXMargin;
                    y3 = pie.outerLabelGroupData[i].y - heightOffset;
                    break;
                case 2:
                    var startOfLabelX = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
                    x2 = originCoords.x - (originCoords.x - startOfLabelX) / midPoint;
                    y2 = originCoords.y + (pie.outerLabelGroupData[i].y - originCoords.y) / midPoint;
                    x3 = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
                    y3 = pie.outerLabelGroupData[i].y - heightOffset;
                    break;
                case 3:
                    var startOfLabel = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
                    x2 = startOfLabel + ((originCoords.x - startOfLabel) / midPoint);
                    y2 = pie.outerLabelGroupData[i].y + (originCoords.y - pie.outerLabelGroupData[i].y) / midPoint;
                    x3 = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
                    y3 = pie.outerLabelGroupData[i].y - heightOffset;
                    break;
            }

            /*
             * x1 / y1: the x/y coords of the start of the line, at the mid point of the segments arc on the pie circumference
             * x2 / y2: if "curved" line style is being used, this is the midpoint of the line. Other
             * x3 / y3: the end of the line; closest point to the label
             */
            if (pie.options.labels.lines.style === "straight") {
                pie.lineCoordGroups[i] = [
                    { x: originCoords.x, y: originCoords.y },
                    { x: x3, y: y3 }
                ];
            } else {
                pie.lineCoordGroups[i] = [
                    { x: originCoords.x, y: originCoords.y },
                    { x: x2, y: y2 },
                    { x: x3, y: y3 }
                ];
            }
        },

        addLabelLines: function (pie) {
            var lineGroups = pie.svg.insert("g", "." + pie.cssPrefix + "pieChart") // meaning, BEFORE .pieChart
                .attr("class", pie.cssPrefix + "lineGroups")
                .style("opacity", 0);

            var lineGroup = lineGroups.selectAll("." + pie.cssPrefix + "lineGroup")
                .data(pie.lineCoordGroups)
                .enter()
                .append("g")
                .attr("class", pie.cssPrefix + "lineGroup");

            var lineFunction = d3.svg.line()
                .interpolate("basis")
                .x(function (d) {
                    return d.x;
                })
                .y(function (d) {
                    return d.y;
                });

            lineGroup.append("path")
                .attr("d", lineFunction)
                .attr("stroke", function (d, i) {
                    return (pie.options.labels.lines.color === "segment") ? pie.options.colors[i] : pie.options.labels.lines.color;
                })
                .attr("stroke-width", 1)
                .attr("fill", "none")
                .style("opacity", function (d, i) {
                    var percentage = pie.options.labels.outer.hideWhenLessThanPercentage;
                    var segmentPercentage = segments.getPercentage(pie, i);
                    var isHidden = (percentage !== null && segmentPercentage < percentage) || pie.options.data.content[i].label === "";
                    return isHidden ? 0 : 1;
                });
        },

        positionLabelGroups: function (pie, section) {
            d3.selectAll("." + pie.cssPrefix + "labelGroup-" + section)
                .style("opacity", 0)
                .attr("transform", function (d, i) {
                    var x, y;
                    if (section === "outer") {
                        x = pie.outerLabelGroupData[i].x;
                        y = pie.outerLabelGroupData[i].y;
                    } else {
                        var pieCenterCopy = extend(true, {}, pie.pieCenter);

                        // now recompute the "center" based on the current _innerRadius
                        if (pie.innerRadius > 0) {
                            var angle = segments.getSegmentAngle(i, pie.options.data.content, pie.totalSize, { midpoint: true });
                            var newCoords = math.translate(pie.pieCenter.x, pie.pieCenter.y, pie.innerRadius, angle);
                            pieCenterCopy.x = newCoords.x;
                            pieCenterCopy.y = newCoords.y;
                        }

                        var dims = helpers.getDimensions(pie.cssPrefix + "labelGroup" + i + "-inner");
                        var xOffset = dims.w / 2;
                        var yOffset = dims.h / 4; // confusing! Why 4? should be 2, but it doesn't look right

                        x = pieCenterCopy.x + (pie.lineCoordGroups[i][0].x - pieCenterCopy.x) / 1.8;
                        y = pieCenterCopy.y + (pie.lineCoordGroups[i][0].y - pieCenterCopy.y) / 1.8;

                        x = x - xOffset;
                        y = y + yOffset;
                    }

                    return "translate(" + x + "," + y + ")";
                });
        },


        fadeInLabelsAndLines: function (pie) {

            // fade in the labels when the load effect is complete - or immediately if there's no load effect
            var loadSpeed = (pie.options.effects.load.effect === "default") ? pie.options.effects.load.speed : 1;
            setTimeout(function () {
                var labelFadeInTime = (pie.options.effects.load.effect === "default") ? 400 : 1; // 400 is hardcoded for the present

                d3.selectAll("." + pie.cssPrefix + "labelGroup-outer")
                    .transition()
                    .duration(labelFadeInTime)
                    .style("opacity", function (d, i) {
                        var percentage = pie.options.labels.outer.hideWhenLessThanPercentage;
                        var segmentPercentage = segments.getPercentage(pie, i);
                        return (percentage !== null && segmentPercentage < percentage) ? 0 : 1;
                    });

                d3.selectAll("." + pie.cssPrefix + "labelGroup-inner")
                    .transition()
                    .duration(labelFadeInTime)
                    .style("opacity", function (d, i) {
                        var percentage = pie.options.labels.inner.hideWhenLessThanPercentage;
                        var segmentPercentage = segments.getPercentage(pie, i);
                        return (percentage !== null && segmentPercentage < percentage) ? 0 : 1;
                    });

                d3.selectAll("g." + pie.cssPrefix + "lineGroups")
                    .transition()
                    .duration(labelFadeInTime)
                    .style("opacity", 1);

                // once everything's done loading, trigger the onload callback if defined
                if (helpers.isFunction(pie.options.callbacks.onload)) {
                    setTimeout(function () {
                        try {
                            pie.options.callbacks.onload();
                        } catch (e) {
                        }
                    }, labelFadeInTime);
                }
            }, loadSpeed);
        },

        getIncludes: function (val) {
            var addMainLabel = false;
            var addValue = false;
            var addPercentage = false;

            // TODO refactor... somehow
            switch (val) {
                case "label":
                    addMainLabel = true;
                    break;
                case "value":
                    addValue = true;
                    break;
                case "percentage":
                    addPercentage = true;
                    break;
                case "label-value1":
                case "label-value2":
                    addMainLabel = true;
                    addValue = true;
                    break;
                case "label-percentage1":
                case "label-percentage2":
                    addMainLabel = true;
                    addPercentage = true;
                    break;
            }
            return {
                mainLabel: addMainLabel,
                value: addValue,
                percentage: addPercentage
            };
        },


        /**
         * This does the heavy-lifting to compute the actual coordinates for the outer label groups. It does two things:
         * 1. Make a first pass and position them in the ideal positions, based on the pie sizes
         * 2. Do some basic collision avoidance.
         */
        computeOuterLabelCoords: function (pie) {

            // 1. figure out the ideal positions for the outer labels
            pie.svg.selectAll("." + pie.cssPrefix + "labelGroup-outer")
                .each(function (d, i) {
                    return labels.getIdealOuterLabelPositions(pie, i);
                });

            // 2. now adjust those positions to try to accommodate conflicts
            labels.resolveOuterLabelCollisions(pie);
        },

        /**
         * This attempts to resolve label positioning collisions.
         */
        resolveOuterLabelCollisions: function (pie) {
            var size = pie.options.data.content.length;
            labels.checkConflict(pie, 0, "clockwise", size);
            labels.checkConflict(pie, size - 1, "anticlockwise", size);
        },

        checkConflict: function (pie, currIndex, direction, size) {
            var i, curr;

            if (size <= 1) {
                return;
            }

            var currIndexHemisphere = pie.outerLabelGroupData[currIndex].hs;
            if (direction === "clockwise" && currIndexHemisphere !== "right") {
                return;
            }
            if (direction === "anticlockwise" && currIndexHemisphere !== "left") {
                return;
            }
            var nextIndex = (direction === "clockwise") ? currIndex + 1 : currIndex - 1;

            // this is the current label group being looked at. We KNOW it's positioned properly (the first item
            // is always correct)
            var currLabelGroup = pie.outerLabelGroupData[currIndex];

            // this one we don't know about. That's the one we're going to look at and move if necessary
            var examinedLabelGroup = pie.outerLabelGroupData[nextIndex];

            var info = {
                labelHeights: pie.outerLabelGroupData[0].h,
                center: pie.pieCenter,
                lineLength: (pie.outerRadius + pie.options.labels.outer.pieDistance),
                heightChange: pie.outerLabelGroupData[0].h + 1 // 1 = padding
            };

            // loop through *ALL* label groups examined so far to check for conflicts. This is because when they're
            // very tightly fitted, a later label group may still appear high up on the page
            if (direction === "clockwise") {
                i = 0;
                for (; i <= currIndex; i++) {
                    curr = pie.outerLabelGroupData[i];

                    // if there's a conflict with this label group, shift the label to be AFTER the last known
                    // one that's been properly placed
                    if (helpers.rectIntersect(curr, examinedLabelGroup)) {
                        labels.adjustLabelPos(pie, nextIndex, currLabelGroup, info);
                        break;
                    }
                }
            } else {
                i = size - 1;
                for (; i >= currIndex; i--) {
                    curr = pie.outerLabelGroupData[i];

                    // if there's a conflict with this label group, shift the label to be AFTER the last known
                    // one that's been properly placed
                    if (helpers.rectIntersect(curr, examinedLabelGroup)) {
                        labels.adjustLabelPos(pie, nextIndex, currLabelGroup, info);
                        break;
                    }
                }
            }
            labels.checkConflict(pie, nextIndex, direction, size);
        },

        // does a little math to shift a label into a new position based on the last properly placed one
        adjustLabelPos: function (pie, nextIndex, lastCorrectlyPositionedLabel, info) {
            var xDiff, yDiff, newXPos, newYPos;
            newYPos = lastCorrectlyPositionedLabel.y + info.heightChange;
            yDiff = info.center.y - newYPos;

            if (Math.abs(info.lineLength) > Math.abs(yDiff)) {
                xDiff = Math.sqrt((info.lineLength * info.lineLength) - (yDiff * yDiff));
            } else {
                xDiff = Math.sqrt((yDiff * yDiff) - (info.lineLength * info.lineLength));
            }

            // ahhh! info.lineLength is no longer a constant.....

            if (lastCorrectlyPositionedLabel.hs === "right") {
                newXPos = info.center.x + xDiff;
            } else {
                newXPos = info.center.x - xDiff - pie.outerLabelGroupData[nextIndex].w;
            }

            pie.outerLabelGroupData[nextIndex].x = newXPos;
            pie.outerLabelGroupData[nextIndex].y = newYPos;
        },

        /**
         * @param i 0-N where N is the dataset size - 1.
         */
        getIdealOuterLabelPositions: function (pie, i) {
            var labelGroupDims = d3.select("#" + pie.cssPrefix + "labelGroup" + i + "-outer").node().getBBox();
            var angle = segments.getSegmentAngle(i, pie.options.data.content, pie.totalSize, { midpoint: true });

            var originalX = pie.pieCenter.x;
            var originalY = pie.pieCenter.y - (pie.outerRadius + pie.options.labels.outer.pieDistance);
            var newCoords = math.rotate(originalX, originalY, pie.pieCenter.x, pie.pieCenter.y, angle);

            // if the label is on the left half of the pie, adjust the values
            var hemisphere = "right"; // hemisphere
            if (angle > 180) {
                newCoords.x -= (labelGroupDims.width + 8);
                hemisphere = "left";
            } else {
                newCoords.x += 8;
            }

            pie.outerLabelGroupData[i] = {
                x: newCoords.x,
                y: newCoords.y,
                w: labelGroupDims.width,
                h: labelGroupDims.height,
                hs: hemisphere
            };
        }
    };

    //// --------- segments.js -----------
    var segments = {

        /**
         * Creates the pie chart segments and displays them according to the desired load effect.
         * @private
         */
        create: function (pie) {
            var pieCenter = pie.pieCenter;
            var colors = pie.options.colors;
            var loadEffects = pie.options.effects.load;
            var segmentStroke = pie.options.misc.colors.segmentStroke;

            // we insert the pie chart BEFORE the title, to ensure the title overlaps the pie
            var pieChartElement = pie.svg.insert("g", "#" + pie.cssPrefix + "title")
                .attr("transform", function () {
                    return math.getPieTranslateCenter(pieCenter);
                })
                .attr("class", pie.cssPrefix + "pieChart");

            var arc = d3.svg.arc()
                .innerRadius(pie.innerRadius)
                .outerRadius(pie.outerRadius)
                .startAngle(0)
                .endAngle(function (d) {
                    return (d.value / pie.totalSize) * 2 * Math.PI;
                });

            var g = pieChartElement.selectAll("." + pie.cssPrefix + "arc")
                .data(pie.options.data.content)
                .enter()
                .append("g")
                .attr("class", pie.cssPrefix + "arc");

            // if we're not fading in the pie, just set the load speed to 0
            var loadSpeed = loadEffects.speed;
            if (loadEffects.effect === "none") {
                loadSpeed = 0;
            }

            g.append("path")
                .attr("id", function (d, i) {
                    return pie.cssPrefix + "segment" + i;
                })
                .attr("fill", function (d, i) {
                    var color = colors[i];
                    if (pie.options.misc.gradient.enabled) {
                        color = "url(#" + pie.cssPrefix + "grad" + i + ")";
                    }
                    return color;
                })
                .style("stroke", segmentStroke)
                .style("stroke-width", 1)
                .transition()
                .ease("cubic-in-out")
                .duration(loadSpeed)
                .attr("data-index", function (d, i) {
                    return i;
                })
                .attrTween("d", function (b) {
                    var i = d3.interpolate({ value: 0 }, b);
                    return function (t) {
                        return pie.arc(i(t));
                    };
                });

            pie.svg.selectAll("g." + pie.cssPrefix + "arc")
                .attr("transform",
                function (d, i) {
                    var angle = 0;
                    if (i > 0) {
                        angle = segments.getSegmentAngle(i - 1, pie.options.data.content, pie.totalSize);
                    }
                    return "rotate(" + angle + ")";
                }
            );
            pie.arc = arc;
        },

        addGradients: function (pie) {
            var grads = pie.svg.append("defs")
                .selectAll("radialGradient")
                .data(pie.options.data.content)
                .enter().append("radialGradient")
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", "120%")
                .attr("id", function (d, i) {
                    return pie.cssPrefix + "grad" + i;
                });

            grads.append("stop").attr("offset", "0%").style("stop-color", function (d, i) {
                return pie.options.colors[i];
            });
            grads.append("stop").attr("offset", pie.options.misc.gradient.percentage + "%").style("stop-color", pie.options.misc.gradient.color);
        },

        addSegmentEventHandlers: function (pie) {
            var arc = d3.selectAll("." + pie.cssPrefix + "arc,." + pie.cssPrefix + "labelGroup-inner,." + pie.cssPrefix + "labelGroup-outer");

            arc.on("click", function () {
                var currentEl = d3.select(this);
                var segment;

                // mouseover works on both the segments AND the segment labels, hence the following
                if (currentEl.attr("class") === pie.cssPrefix + "arc") {
                    segment = currentEl.select("path");
                } else {
                    var index = currentEl.attr("data-index");
                    segment = d3.select("#" + pie.cssPrefix + "segment" + index);
                }
                var isExpanded = segment.attr("class") === pie.cssPrefix + "expanded";
                segments.onSegmentEvent(pie, pie.options.callbacks.onClickSegment, segment, isExpanded);
                if (pie.options.effects.pullOutSegmentOnClick.effect !== "none") {
                    if (isExpanded) {
                        segments.closeSegment(pie, segment.node());
                    } else {
                        segments.openSegment(pie, segment.node());
                    }
                }
            });

            arc.on("mouseover", function () {
                var currentEl = d3.select(this);
                var segment, index;

                if (currentEl.attr("class") === pie.cssPrefix + "arc") {
                    segment = currentEl.select("path");
                } else {
                    index = currentEl.attr("data-index");
                    segment = d3.select("#" + pie.cssPrefix + "segment" + index);
                }

                if (pie.options.effects.highlightSegmentOnMouseover) {
                    index = segment.attr("data-index");
                    var segColor = pie.options.colors[index];
                    segment.style("fill", helpers.getColorShade(segColor, pie.options.effects.highlightLuminosity));
                }

                if (pie.options.tooltips.enabled) {
                    index = segment.attr("data-index");
                    tt.showTooltip(pie, index);
                }

                var isExpanded = segment.attr("class") === pie.cssPrefix + "expanded";
                segments.onSegmentEvent(pie, pie.options.callbacks.onMouseoverSegment, segment, isExpanded);
            });

            arc.on("mousemove", function () {
                tt.moveTooltip(pie);
            });

            arc.on("mouseout", function () {
                var currentEl = d3.select(this);
                var segment, index;

                if (currentEl.attr("class") === pie.cssPrefix + "arc") {
                    segment = currentEl.select("path");
                } else {
                    index = currentEl.attr("data-index");
                    segment = d3.select("#" + pie.cssPrefix + "segment" + index);
                }

                if (pie.options.effects.highlightSegmentOnMouseover) {
                    index = segment.attr("data-index");
                    var color = pie.options.colors[index];
                    if (pie.options.misc.gradient.enabled) {
                        color = "url(#" + pie.cssPrefix + "grad" + index + ")";
                    }
                    segment.style("fill", color);
                }

                if (pie.options.tooltips.enabled) {
                    index = segment.attr("data-index");
                    tt.hideTooltip(pie, index);
                }

                var isExpanded = segment.attr("class") === pie.cssPrefix + "expanded";
                segments.onSegmentEvent(pie, pie.options.callbacks.onMouseoutSegment, segment, isExpanded);
            });
        },

        // helper function used to call the click, mouseover, mouseout segment callback functions
        onSegmentEvent: function (pie, func, segment, isExpanded) {
            if (!helpers.isFunction(func)) {
                return;
            }
            var index = parseInt(segment.attr("data-index"), 10);
            func({
                segment: segment.node(),
                index: index,
                expanded: isExpanded,
                data: pie.options.data.content[index]
            });
        },

        openSegment: function (pie, segment) {
            if (pie.isOpeningSegment) {
                return;
            }
            pie.isOpeningSegment = true;

            // close any open segments
            if (d3.selectAll("." + pie.cssPrefix + "expanded").length > 0) {
                segments.closeSegment(pie, d3.select("." + pie.cssPrefix + "expanded").node());
            }

            d3.select(segment).transition()
                .ease(pie.options.effects.pullOutSegmentOnClick.effect)
                .duration(pie.options.effects.pullOutSegmentOnClick.speed)
                .attr("transform", function (d, i) {
                    var c = pie.arc.centroid(d),
                        x = c[0],
                        y = c[1],
                        h = Math.sqrt(x * x + y * y),
                        pullOutSize = parseInt(pie.options.effects.pullOutSegmentOnClick.size, 10);

                    return "translate(" + ((x / h) * pullOutSize) + ',' + ((y / h) * pullOutSize) + ")";
                })
                .each("end", function (d, i) {
                    pie.currentlyOpenSegment = segment;
                    pie.isOpeningSegment = false;
                    d3.select(this).attr("class", pie.cssPrefix + "expanded");
                });
        },

        closeSegment: function (pie, segment) {
            d3.select(segment).transition()
                .duration(400)
                .attr("transform", "translate(0,0)")
                .each("end", function (d, i) {
                    d3.select(this).attr("class", "");
                    pie.currentlyOpenSegment = null;
                });
        },

        getCentroid: function (el) {
            var bbox = el.getBBox();
            return {
                x: bbox.x + bbox.width / 2,
                y: bbox.y + bbox.height / 2
            };
        },

        /**
         * General helper function to return a segment's angle, in various different ways.
         * @param index
         * @param opts optional object for fine-tuning exactly what you want.
         */
        getSegmentAngle: function (index, data, totalSize, opts) {
            var options = extend({
                // if true, this returns the full angle from the origin. Otherwise it returns the single segment angle
                compounded: true,

                // optionally returns the midpoint of the angle instead of the full angle
                midpoint: false
            }, opts);

            var currValue = data[index].value;
            var fullValue;
            if (options.compounded) {
                fullValue = 0;

                // get all values up to and including the specified index
                for (var i = 0; i <= index; i++) {
                    fullValue += data[i].value;
                }
            }

            if (typeof fullValue === 'undefined') {
                fullValue = currValue;
            }

            // now convert the full value to an angle
            var angle = (fullValue / totalSize) * 360;

            // lastly, if we want the midpoint, factor that sucker in
            if (options.midpoint) {
                var currAngle = (currValue / totalSize) * 360;
                angle -= (currAngle / 2);
            }

            return angle;
        },

        getPercentage: function (pie, index) {
            return Math.floor((pie.options.data.content[index].value / pie.totalSize) * 100);
        }
    };

    //// --------- text.js -----------
    var text = {
        offscreenCoord: -10000,

        addTitle: function (pie) {
            var title = pie.svg.selectAll("." + pie.cssPrefix + "title")
                .data([pie.options.header.title])
                .enter()
                .append("text")
                .text(function (d) {
                    return d.text;
                })
                .attr({
                    id: pie.cssPrefix + "title",
                    class: pie.cssPrefix + "title",
                    x: text.offscreenCoord,
                    y: text.offscreenCoord
                })
                .attr("text-anchor", function () {
                    var location;
                    if (pie.options.header.location === "top-center" || pie.options.header.location === "pie-center") {
                        location = "middle";
                    } else {
                        location = "left";
                    }
                    return location;
                })
                .attr("fill", function (d) {
                    return d.color;
                })
                .style("font-size", function (d) {
                    return d.fontSize + "px";
                })
                .style("font-family", function (d) {
                    return d.font;
                });
        },

        positionTitle: function (pie) {
            var textComponents = pie.textComponents;
            var headerLocation = pie.options.header.location;
            var canvasPadding = pie.options.misc.canvasPadding;
            var canvasWidth = pie.options.size.canvasWidth;
            var titleSubtitlePadding = pie.options.header.titleSubtitlePadding;

            var x;
            if (headerLocation === "top-left") {
                x = canvasPadding.left;
            } else {
                x = ((canvasWidth - canvasPadding.right) / 2) + canvasPadding.left;
            }

            // add whatever offset has been added by user
            x += pie.options.misc.pieCenterOffset.x;

            var y = canvasPadding.top + textComponents.title.h;

            if (headerLocation === "pie-center") {
                y = pie.pieCenter.y;

                // still not fully correct
                if (textComponents.subtitle.exists) {
                    var totalTitleHeight = textComponents.title.h + titleSubtitlePadding + textComponents.subtitle.h;
                    y = y - (totalTitleHeight / 2) + textComponents.title.h;
                } else {
                    y += (textComponents.title.h / 4);
                }
            }

            pie.svg.select("#" + pie.cssPrefix + "title")
                .attr("x", x)
                .attr("y", y);
        },

        addSubtitle: function (pie) {
            var headerLocation = pie.options.header.location;

            pie.svg.selectAll("." + pie.cssPrefix + "subtitle")
                .data([pie.options.header.subtitle])
                .enter()
                .append("text")
                .text(function (d) {
                    return d.text;
                })
                .attr("x", text.offscreenCoord)
                .attr("y", text.offscreenCoord)
                .attr("id", pie.cssPrefix + "subtitle")
                .attr("class", pie.cssPrefix + "subtitle")
                .attr("text-anchor", function () {
                    var location;
                    if (headerLocation === "top-center" || headerLocation === "pie-center") {
                        location = "middle";
                    } else {
                        location = "left";
                    }
                    return location;
                })
                .attr("fill", function (d) {
                    return d.color;
                })
                .style("font-size", function (d) {
                    return d.fontSize + "px";
                })
                .style("font-family", function (d) {
                    return d.font;
                });
        },

        positionSubtitle: function (pie) {
            var canvasPadding = pie.options.misc.canvasPadding;
            var canvasWidth = pie.options.size.canvasWidth;

            var x;
            if (pie.options.header.location === "top-left") {
                x = canvasPadding.left;
            } else {
                x = ((canvasWidth - canvasPadding.right) / 2) + canvasPadding.left;
            }

            // add whatever offset has been added by user
            x += pie.options.misc.pieCenterOffset.x;

            var y = text.getHeaderHeight(pie);
            pie.svg.select("#" + pie.cssPrefix + "subtitle")
                .attr("x", x)
                .attr("y", y);
        },

        addFooter: function (pie) {
            pie.svg.selectAll("." + pie.cssPrefix + "footer")
                .data([pie.options.footer])
                .enter()
                .append("text")
                .text(function (d) {
                    return d.text;
                })
                .attr("x", text.offscreenCoord)
                .attr("y", text.offscreenCoord)
                .attr("id", pie.cssPrefix + "footer")
                .attr("class", pie.cssPrefix + "footer")
                .attr("text-anchor", function () {
                    var location = "left";
                    if (pie.options.footer.location === "bottom-center") {
                        location = "middle";
                    } else if (pie.options.footer.location === "bottom-right") {
                        location = "left"; // on purpose. We have to change the x-coord to make it properly right-aligned
                    }
                    return location;
                })
                .attr("fill", function (d) {
                    return d.color;
                })
                .style("font-size", function (d) {
                    return d.fontSize + "px";
                })
                .style("font-family", function (d) {
                    return d.font;
                });
        },

        positionFooter: function (pie) {
            var footerLocation = pie.options.footer.location;
            var footerWidth = pie.textComponents.footer.w;
            var canvasWidth = pie.options.size.canvasWidth;
            var canvasHeight = pie.options.size.canvasHeight;
            var canvasPadding = pie.options.misc.canvasPadding;

            var x;
            if (footerLocation === "bottom-left") {
                x = canvasPadding.left;
            } else if (footerLocation === "bottom-right") {
                x = canvasWidth - footerWidth - canvasPadding.right;
            } else {
                x = canvasWidth / 2; // TODO - shouldn't this also take into account padding?
            }

            pie.svg.select("#" + pie.cssPrefix + "footer")
                .attr("x", x)
                .attr("y", canvasHeight - canvasPadding.bottom);
        },

        getHeaderHeight: function (pie) {
            var h;
            if (pie.textComponents.title.exists) {

                // if the subtitle isn't defined, it'll be set to 0
                var totalTitleHeight = pie.textComponents.title.h + pie.options.header.titleSubtitlePadding + pie.textComponents.subtitle.h;
                if (pie.options.header.location === "pie-center") {
                    h = pie.pieCenter.y - (totalTitleHeight / 2) + totalTitleHeight;
                } else {
                    h = totalTitleHeight + pie.options.misc.canvasPadding.top;
                }
            } else {
                if (pie.options.header.location === "pie-center") {
                    var footerPlusPadding = pie.options.misc.canvasPadding.bottom + pie.textComponents.footer.h;
                    h = ((pie.options.size.canvasHeight - footerPlusPadding) / 2) + pie.options.misc.canvasPadding.top + (pie.textComponents.subtitle.h / 2);
                } else {
                    h = pie.options.misc.canvasPadding.top + pie.textComponents.subtitle.h;
                }
            }
            return h;
        }
    };

    //// --------- validate.js -----------
    var tt = {
        addTooltips: function (pie) {

            // group the label groups (label, percentage, value) into a single element for simpler positioning
            var tooltips = pie.svg.insert("g")
                .attr("class", pie.cssPrefix + "tooltips");

            tooltips.selectAll("." + pie.cssPrefix + "tooltip")
                .data(pie.options.data.content)
                .enter()
                .append("g")
                .attr("class", pie.cssPrefix + "tooltip")
                .attr("id", function (d, i) {
                    return pie.cssPrefix + "tooltip" + i;
                })
                .style("opacity", 0)
                .append("rect")
                .attr({
                    rx: pie.options.tooltips.styles.borderRadius,
                    ry: pie.options.tooltips.styles.borderRadius,
                    x: -pie.options.tooltips.styles.padding,
                    opacity: pie.options.tooltips.styles.backgroundOpacity
                })
                .style("fill", pie.options.tooltips.styles.backgroundColor);

            tooltips.selectAll("." + pie.cssPrefix + "tooltip")
                .data(pie.options.data.content)
                .append("text")
                .attr("fill", function (d) {
                    return pie.options.tooltips.styles.color;
                })
                .style("font-size", function (d) {
                    return pie.options.tooltips.styles.fontSize;
                })
                .style("font-family", function (d) {
                    return pie.options.tooltips.styles.font;
                })
                .text(function (d, i) {
                    var caption = pie.options.tooltips.string;
                    if (pie.options.tooltips.type === "caption") {
                        caption = d.caption;
                    }
                    return tt.replacePlaceholders(pie, caption, i, {
                        label: d.label,
                        value: d.value,
                        percentage: segments.getPercentage(pie, i)
                    });
                });

            tooltips.selectAll("." + pie.cssPrefix + "tooltip rect")
                .attr({
                    width: function (d, i) {
                        var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + i);
                        return dims.w + (2 * pie.options.tooltips.styles.padding);
                    },
                    height: function (d, i) {
                        var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + i);
                        return dims.h + (2 * pie.options.tooltips.styles.padding);
                    },
                    y: function (d, i) {
                        var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + i);
                        return -(dims.h / 2) + 1;
                    }
                });
        },

        showTooltip: function (pie, index) {

            var fadeInSpeed = pie.options.tooltips.styles.fadeInSpeed;
            if (tt.currentTooltip === index) {
                fadeInSpeed = 1;
            }

            tt.currentTooltip = index;
            d3.select("#" + pie.cssPrefix + "tooltip" + index)
                .transition()
                .duration(fadeInSpeed)
                .style("opacity", function () {
                    return 1;
                });

            tt.moveTooltip(pie);
        },

        moveTooltip: function (pie) {
            d3.selectAll("#" + pie.cssPrefix + "tooltip" + tt.currentTooltip)
                .attr("transform", function (d) {
                    var mouseCoords = d3.mouse(this.parentElement);
                    var x = mouseCoords[0] + pie.options.tooltips.styles.padding + 2;
                    var y = mouseCoords[1] - (2 * pie.options.tooltips.styles.padding) - 2;
                    return "translate(" + x + "," + y + ")";
                });
        },

        hideTooltip: function (pie, index) {
            d3.select("#" + pie.cssPrefix + "tooltip" + index)
                .style("opacity", function () {
                    return 0;
                });

            // move the tooltip offscreen. This ensures that when the user next mousovers the segment the hidden
            // element won't interfere
            d3.select("#" + pie.cssPrefix + "tooltip" + tt.currentTooltip)
                .attr("transform", function (d, i) {

                    // klutzy, but it accounts for tooltip padding which could push it onscreen
                    var x = pie.options.size.canvasWidth + 1000;
                    var y = pie.options.size.canvasHeight + 1000;
                    return "translate(" + x + "," + y + ")";
                });
        },

        replacePlaceholders: function (pie, str, index, replacements) {

            // if the user has defined a placeholderParser function, call it before doing the replacements
            if (helpers.isFunction(pie.options.tooltips.placeholderParser)) {
                pie.options.tooltips.placeholderParser(index, replacements);
            }

            var replacer = function () {
                return function (match) {
                    var placeholder = arguments[1];
                    if (replacements.hasOwnProperty(placeholder)) {
                        return replacements[arguments[1]];
                    } else {
                        return arguments[0];
                    }
                };
            };
            return str.replace(/\{(\w+)\}/g, replacer(replacements));
        }
    };


    // --------------------------------------------------------------------------------------------

    // our constructor
    var d3pie = function (element, options) {

        // element can be an ID or DOM element
        this.element = element;
        if (typeof element === "string") {
            var el = element.replace(/^#/, ""); // replace any jQuery-like ID hash char
            this.element = document.getElementById(el);
        }

        var opts = {};
        extend(true, opts, defaultSettings, options);
        this.options = opts;

        // if the user specified a custom CSS element prefix (ID, class), use it
        if (this.options.misc.cssPrefix !== null) {
            this.cssPrefix = this.options.misc.cssPrefix;
        } else {
            this.cssPrefix = "p" + _uniqueIDCounter + "_";
            _uniqueIDCounter++;
        }


        // now run some validation on the user-defined info
        if (!validate.initialCheck(this)) {
            return;
        }

        // add a data-role to the DOM node to let anyone know that it contains a d3pie instance, and the d3pie version
        d3.select(this.element).attr(_scriptName, _version);

        // things that are done once
        this.options.data.content = math.sortPieData(this);
        if (this.options.data.smallSegmentGrouping.enabled) {
            this.options.data.content = helpers.applySmallSegmentGrouping(this.options.data.content, this.options.data.smallSegmentGrouping);
        }
        this.options.colors = helpers.initSegmentColors(this);
        this.totalSize = math.getTotalPieSize(this.options.data.content);

        _init.call(this);
    };

    d3pie.prototype.recreate = function () {
        this.options.data.content = math.sortPieData(this);
        if (this.options.data.smallSegmentGrouping.enabled) {
            this.options.data.content = helpers.applySmallSegmentGrouping(this.options.data.content, this.options.data.smallSegmentGrouping);
        }
        this.options.colors = helpers.initSegmentColors(this);
        this.totalSize = math.getTotalPieSize(this.options.data.content);

        _init.call(this);
    };

    d3pie.prototype.redraw = function () {
        this.element.innerHTML = "";
        _init.call(this);
    };

    d3pie.prototype.destroy = function () {
        this.element.innerHTML = ""; // clear out the SVG
        d3.select(this.element).attr(_scriptName, null); // remove the data attr
    };

    /**
     * Returns all pertinent info about the current open info. Returns null if nothing's open, or if one is, an object of
     * the following form:
     *    {
     * 	  element: DOM NODE,
     * 	  index: N,
     * 	  data: {}
     * 	}
     */
    d3pie.prototype.getOpenSegment = function () {
        var segment = this.currentlyOpenSegment;
        if (segment !== null && typeof segment !== "undefined") {
            var index = parseInt(d3.select(segment).attr("data-index"), 10);
            return {
                element: segment,
                index: index,
                data: this.options.data.content[index]
            };
        } else {
            return null;
        }
    };

    d3pie.prototype.openSegment = function (index) {
        index = parseInt(index, 10);
        if (index < 0 || index > this.options.data.content.length - 1) {
            return;
        }
        segments.openSegment(this, d3.select("#" + this.cssPrefix + "segment" + index).node());
    };

    d3pie.prototype.closeSegment = function () {
        var segment = this.currentlyOpenSegment;
        if (segment) {
            segments.closeSegment(this, segment);
        }
    };

    // this let's the user dynamically update aspects of the pie chart without causing a complete redraw. It
    // intelligently re-renders only the part of the pie that the user specifies. Some things cause a repaint, others
    // just redraw the single element
    d3pie.prototype.updateProp = function (propKey, value) {
        switch (propKey) {
            case "header.title.text":
                var oldVal = helpers.processObj(this.options, propKey);
                helpers.processObj(this.options, propKey, value);
                d3.select("#" + this.cssPrefix + "title").html(value);
                if ((oldVal === "" && value !== "") || (oldVal !== "" && value === "")) {
                    this.redraw();
                }
                break;

            case "header.subtitle.text":
                var oldValue = helpers.processObj(this.options, propKey);
                helpers.processObj(this.options, propKey, value);
                d3.select("#" + this.cssPrefix + "subtitle").html(value);
                if ((oldValue === "" && value !== "") || (oldValue !== "" && value === "")) {
                    this.redraw();
                }
                break;

            case "callbacks.onload":
            case "callbacks.onMouseoverSegment":
            case "callbacks.onMouseoutSegment":
            case "callbacks.onClickSegment":
            case "effects.pullOutSegmentOnClick.effect":
            case "effects.pullOutSegmentOnClick.speed":
            case "effects.pullOutSegmentOnClick.size":
            case "effects.highlightSegmentOnMouseover":
            case "effects.highlightLuminosity":
                helpers.processObj(this.options, propKey, value);
                break;

            // everything else, attempt to update it & do a repaint
            default:
                helpers.processObj(this.options, propKey, value);

                this.destroy();
                this.recreate();
                break;
        }
    };


    // ------------------------------------------------------------------------------------------------


    var _init = function () {

        // prep-work
        this.svg = helpers.addSVGSpace(this);

        // store info about the main text components as part of the d3pie object instance
        this.textComponents = {
            headerHeight: 0,
            title: {
                exists: this.options.header.title.text !== "",
                h: 0,
                w: 0
            },
            subtitle: {
                exists: this.options.header.subtitle.text !== "",
                h: 0,
                w: 0
            },
            footer: {
                exists: this.options.footer.text !== "",
                h: 0,
                w: 0
            }
        };

        this.outerLabelGroupData = [];

        // add the key text components offscreen (title, subtitle, footer). We need to know their widths/heights for later computation
        if (this.textComponents.title.exists) {
            text.addTitle(this);
        }
        if (this.textComponents.subtitle.exists) {
            text.addSubtitle(this);
        }
        text.addFooter(this);

        // the footer never moves. Put it in place now
        var self = this;
        helpers.whenIdExists(this.cssPrefix + "footer", function () {
            text.positionFooter(self);
            var d3 = helpers.getDimensions(self.cssPrefix + "footer");
            self.textComponents.footer.h = d3.h;
            self.textComponents.footer.w = d3.w;
        });

        // now create the pie chart and position everything accordingly
        var reqEls = [];
        if (this.textComponents.title.exists) {
            reqEls.push(this.cssPrefix + "title");
        }
        if (this.textComponents.subtitle.exists) {
            reqEls.push(this.cssPrefix + "subtitle");
        }
        if (this.textComponents.footer.exists) {
            reqEls.push(this.cssPrefix + "footer");
        }

        helpers.whenElementsExist(reqEls, function () {
            if (self.textComponents.title.exists) {
                var d1 = helpers.getDimensions(self.cssPrefix + "title");
                self.textComponents.title.h = d1.h;
                self.textComponents.title.w = d1.w;
            }
            if (self.textComponents.subtitle.exists) {
                var d2 = helpers.getDimensions(self.cssPrefix + "subtitle");
                self.textComponents.subtitle.h = d2.h;
                self.textComponents.subtitle.w = d2.w;
            }
            // now compute the full header height
            if (self.textComponents.title.exists || self.textComponents.subtitle.exists) {
                var headerHeight = 0;
                if (self.textComponents.title.exists) {
                    headerHeight += self.textComponents.title.h;
                    if (self.textComponents.subtitle.exists) {
                        headerHeight += self.options.header.titleSubtitlePadding;
                    }
                }
                if (self.textComponents.subtitle.exists) {
                    headerHeight += self.textComponents.subtitle.h;
                }
                self.textComponents.headerHeight = headerHeight;
            }

            // at this point, all main text component dimensions have been calculated
            math.computePieRadius(self);

            // this value is used all over the place for placing things and calculating locations. We figure it out ONCE
            // and store it as part of the object
            math.calculatePieCenter(self);

            // position the title and subtitle
            text.positionTitle(self);
            text.positionSubtitle(self);

            // now create the pie chart segments, and gradients if the user desired
            if (self.options.misc.gradient.enabled) {
                segments.addGradients(self);
            }
            segments.create(self); // also creates this.arc
            labels.add(self, "inner", self.options.labels.inner.format);
            labels.add(self, "outer", self.options.labels.outer.format);

            // position the label elements relatively within their individual group (label, percentage, value)
            labels.positionLabelElements(self, "inner", self.options.labels.inner.format);
            labels.positionLabelElements(self, "outer", self.options.labels.outer.format);
            labels.computeOuterLabelCoords(self);

            // this is (and should be) dumb. It just places the outer groups at their calculated, collision-free positions
            labels.positionLabelGroups(self, "outer");

            // we use the label line positions for many other calculations, so ALWAYS compute them
            labels.computeLabelLinePositions(self);

            // only add them if they're actually enabled
            if (self.options.labels.lines.enabled && self.options.labels.outer.format !== "none") {
                labels.addLabelLines(self);
            }

            labels.positionLabelGroups(self, "inner");
            labels.fadeInLabelsAndLines(self);

            // add and position the tooltips
            if (self.options.tooltips.enabled) {
                tt.addTooltips(self);
            }

            segments.addSegmentEventHandlers(self);
        });
    };

    return d3pie;
}));

/*q.js statrs from here*/
(function (definition) {
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

        // CommonJS
    } else if (typeof exports === "object") {
        module.exports = definition();

        // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

        // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

        // <script>
    } else {
        Q = definition();
    }
})(function () {
    "use strict";

    var hasStacks = false;
    try {
        throw new Error();
    } catch (e) {
        hasStacks = !!e.stack;
    }

// All code after this point will be filtered from stack traces reported
// by Q.
    var qStartingLine = captureLine();
    var qFileName;

// shims

// used for fallback in "allResolved"
    var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
    var nextTick =(function () {
        // linked list of tasks (single, with head node)
        var head = {task: void 0, next: null};
        var tail = head;
        var flushing = false;
        var requestTick = void 0;
        var isNodeJS = false;

        function flush() {
            /* jshint loopfunc: true */

            while (head.next) {
                head = head.next;
                var task = head.task;
                head.task = void 0;
                var domain = head.domain;

                if (domain) {
                    head.domain = void 0;
                    domain.enter();
                }

                try {
                    task();

                } catch (e) {
                    if (isNodeJS) {
                        // In node, uncaught exceptions are considered fatal errors.
                        // Re-throw them synchronously to interrupt flushing!

                        // Ensure continuation if the uncaught exception is suppressed
                        // listening "uncaughtException" events (as domains does).
                        // Continue in next event to avoid tick recursion.
                        if (domain) {
                            domain.exit();
                        }
                        setTimeout(flush, 0);
                        if (domain) {
                            domain.enter();
                        }

                        throw e;

                    } else {
                        // In browsers, uncaught exceptions are not fatal.
                        // Re-throw them asynchronously to avoid slow-downs.
                        setTimeout(function() {
                            throw e;
                        }, 0);
                    }
                }

                if (domain) {
                    domain.exit();
                }
            }

            flushing = false;
        }

        nextTick = function (task) {
            tail = tail.next = {
                task: task,
                domain: isNodeJS && process.domain,
                next: null
            };

            if (!flushing) {
                flushing = true;
                requestTick();
            }
        };

        if (typeof process !== "undefined" && process.nextTick) {
            // Node.js before 0.9. Note that some fake-Node environments, like the
            // Mocha test runner, introduce a `process` global without a `nextTick`.
            isNodeJS = true;

            requestTick = function () {
                process.nextTick(flush);
            };

        } else if (typeof setImmediate === "function") {
            // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
            if (typeof window !== "undefined") {
                requestTick = setImmediate.bind(window, flush);
            } else {
                requestTick = function () {
                    setImmediate(flush);
                };
            }

        } else if (typeof MessageChannel !== "undefined") {
            // modern browsers
            // http://www.nonblocking.io/2011/06/windownexttick.html
            var channel = new MessageChannel();
            // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
            // working message ports the first time a page loads.
            channel.port1.onmessage = function () {
                requestTick = requestPortTick;
                channel.port1.onmessage = flush;
                flush();
            };
            var requestPortTick = function () {
                // Opera requires us to provide a message payload, regardless of
                // whether we use it.
                channel.port2.postMessage(0);
            };
            requestTick = function () {
                setTimeout(flush, 0);
                requestPortTick();
            };

        } else {
            // old browsers
            requestTick = function () {
                setTimeout(flush, 0);
            };
        }

        return nextTick;
    })();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
    var call = Function.call;
    function uncurryThis(f) {
        return function () {
            return call.apply(f, arguments);
        };
    }
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

    var array_slice = uncurryThis(Array.prototype.slice);

    var array_reduce = uncurryThis(
        Array.prototype.reduce || function (callback, basis) {
            var index = 0,
                length = this.length;
            // concerning the initial value, if one is not provided
            if (arguments.length === 1) {
                // seek to the first value in the array, accounting
                // for the possibility that is is a sparse array
                do {
                    if (index in this) {
                        basis = this[index++];
                        break;
                    }
                    if (++index >= length) {
                        throw new TypeError();
                    }
                } while (1);
            }
            // reduce
            for (; index < length; index++) {
                // account for the possibility that the array is sparse
                if (index in this) {
                    basis = callback(basis, this[index], index);
                }
            }
            return basis;
        }
    );

    var array_indexOf = uncurryThis(
        Array.prototype.indexOf || function (value) {
            // not a very good shim, but good enough for our one use of it
            for (var i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return i;
                }
            }
            return -1;
        }
    );

    var array_map = uncurryThis(
        Array.prototype.map || function (callback, thisp) {
            var self = this;
            var collect = [];
            array_reduce(self, function (undefined, value, index) {
                collect.push(callback.call(thisp, value, index, self));
            }, void 0);
            return collect;
        }
    );

    var object_create = Object.create || function (prototype) {
        function Type() { }
        Type.prototype = prototype;
        return new Type();
    };

    var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

    var object_keys = Object.keys || function (object) {
        var keys = [];
        for (var key in object) {
            if (object_hasOwnProperty(object, key)) {
                keys.push(key);
            }
        }
        return keys;
    };

    var object_toString = uncurryThis(Object.prototype.toString);

    function isObject(value) {
        return value === Object(value);
    }

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
    function isStopIteration(exception) {
        return (
            object_toString(exception) === "[object StopIteration]" ||
                exception instanceof QReturnValue
            );
    }

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
    var QReturnValue;
    if (typeof ReturnValue !== "undefined") {
        QReturnValue = ReturnValue;
    } else {
        QReturnValue = function (value) {
            this.value = value;
        };
    }

// long stack traces

    var STACK_JUMP_SEPARATOR = "From previous event:";

    function makeStackTraceLong(error, promise) {
        // If possible, transform the error stack trace by removing Node and Q
        // cruft, then concatenating with the stack trace of `promise`. See #57.
        if (hasStacks &&
            promise.stack &&
            typeof error === "object" &&
            error !== null &&
            error.stack &&
            error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
            ) {
            var stacks = [];
            for (var p = promise; !!p; p = p.source) {
                if (p.stack) {
                    stacks.unshift(p.stack);
                }
            }
            stacks.unshift(error.stack);

            var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
            error.stack = filterStackString(concatedStacks);
        }
    }

    function filterStackString(stackString) {
        var lines = stackString.split("\n");
        var desiredLines = [];
        for (var i = 0; i < lines.length; ++i) {
            var line = lines[i];

            if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
                desiredLines.push(line);
            }
        }
        return desiredLines.join("\n");
    }

    function isNodeFrame(stackLine) {
        return stackLine.indexOf("(module.js:") !== -1 ||
            stackLine.indexOf("(node.js:") !== -1;
    }

    function getFileNameAndLineNumber(stackLine) {
        // Named functions: "at functionName (filename:lineNumber:columnNumber)"
        // In IE10 function name can have spaces ("Anonymous function") O_o
        var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
        if (attempt1) {
            return [attempt1[1], Number(attempt1[2])];
        }

        // Anonymous functions: "at filename:lineNumber:columnNumber"
        var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
        if (attempt2) {
            return [attempt2[1], Number(attempt2[2])];
        }

        // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
        var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
        if (attempt3) {
            return [attempt3[1], Number(attempt3[2])];
        }
    }

    function isInternalFrame(stackLine) {
        var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

        if (!fileNameAndLineNumber) {
            return false;
        }

        var fileName = fileNameAndLineNumber[0];
        var lineNumber = fileNameAndLineNumber[1];

        return fileName === qFileName &&
            lineNumber >= qStartingLine &&
            lineNumber <= qEndingLine;
    }

// discover own file name and line number range for filtering stack
// traces
    function captureLine() {
        if (!hasStacks) {
            return;
        }

        try {
            throw new Error();
        } catch (e) {
            var lines = e.stack.split("\n");
            var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
            var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
            if (!fileNameAndLineNumber) {
                return;
            }

            qFileName = fileNameAndLineNumber[0];
            return fileNameAndLineNumber[1];
        }
    }

    function deprecate(callback, name, alternative) {
        return function () {
            if (typeof console !== "undefined" &&
                typeof console.warn === "function") {
                console.warn(name + " is deprecated, use " + alternative +
                    " instead.", new Error("").stack);
            }
            return callback.apply(callback, arguments);
        };
    }

// end of shims
// beginning of real work

    /**
     * Constructs a promise for an immediate reference, passes promises through, or
     * coerces promises from different systems.
     * @param value immediate reference or promise
     */
    function Q(value) {
        // If the object is already a Promise, return it directly.  This enables
        // the resolve function to both be used to created references from objects,
        // but to tolerably coerce non-promises to promises.
        if (isPromise(value)) {
            return value;
        }

        // assimilate thenables
        if (isPromiseAlike(value)) {
            return coerce(value);
        } else {
            return fulfill(value);
        }
    }
    Q.resolve = Q;

    /**
     * Performs a task in a future turn of the event loop.
     * @param {Function} task
     */
    Q.nextTick = nextTick;

    /**
     * Controls whether or not long stack traces will be on
     */
    Q.longStackSupport = false;

    /**
     * Constructs a {promise, resolve, reject} object.
     *
     * `resolve` is a callback to invoke with a more resolved value for the
     * promise. To fulfill the promise, invoke `resolve` with any value that is
     * not a thenable. To reject the promise, invoke `resolve` with a rejected
     * thenable, or invoke `reject` with the reason directly. To resolve the
     * promise to another thenable, thus putting it in the same state, invoke
     * `resolve` with that other thenable.
     */
    Q.defer = defer;
    function defer() {
        // if "messages" is an "Array", that indicates that the promise has not yet
        // been resolved.  If it is "undefined", it has been resolved.  Each
        // element of the messages array is itself an array of complete arguments to
        // forward to the resolved promise.  We coerce the resolution value to a
        // promise using the `resolve` function because it handles both fully
        // non-thenable values and other thenables gracefully.
        var messages = [], progressListeners = [], resolvedPromise;

        var deferred = object_create(defer.prototype);
        var promise = object_create(Promise.prototype);

        promise.promiseDispatch = function (resolve, op, operands) {
            var args = array_slice(arguments);
            if (messages) {
                messages.push(args);
                if (op === "when" && operands[1]) { // progress operand
                    progressListeners.push(operands[1]);
                }
            } else {
                nextTick(function () {
                    resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
                });
            }
        };

        // XXX deprecated
        promise.valueOf = function () {
            if (messages) {
                return promise;
            }
            var nearerValue = nearer(resolvedPromise);
            if (isPromise(nearerValue)) {
                resolvedPromise = nearerValue; // shorten chain
            }
            return nearerValue;
        };

        promise.inspect = function () {
            if (!resolvedPromise) {
                return { state: "pending" };
            }
            return resolvedPromise.inspect();
        };

        if (Q.longStackSupport && hasStacks) {
            try {
                throw new Error();
            } catch (e) {
                // NOTE: don't try to use `Error.captureStackTrace` or transfer the
                // accessor around; that causes memory leaks as per GH-111. Just
                // reify the stack trace as a string ASAP.
                //
                // At the same time, cut off the first line; it's always just
                // "[object Promise]\n", as per the `toString`.
                promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            }
        }

        // NOTE: we do the checks for `resolvedPromise` in each method, instead of
        // consolidating them into `become`, since otherwise we'd create new
        // promises with the lines `become(whatever(value))`. See e.g. GH-252.

        function become(newPromise) {
            resolvedPromise = newPromise;
            promise.source = newPromise;

            array_reduce(messages, function (undefined, message) {
                nextTick(function () {
                    newPromise.promiseDispatch.apply(newPromise, message);
                });
            }, void 0);

            messages = void 0;
            progressListeners = void 0;
        }

        deferred.promise = promise;
        deferred.resolve = function (value) {
            if (resolvedPromise) {
                return;
            }

            become(Q(value));
        };

        deferred.fulfill = function (value) {
            if (resolvedPromise) {
                return;
            }

            become(fulfill(value));
        };
        deferred.reject = function (reason) {
            if (resolvedPromise) {
                return;
            }

            become(reject(reason));
        };
        deferred.notify = function (progress) {
            if (resolvedPromise) {
                return;
            }

            array_reduce(progressListeners, function (undefined, progressListener) {
                nextTick(function () {
                    progressListener(progress);
                });
            }, void 0);
        };

        return deferred;
    }

    /**
     * Creates a Node-style callback that will resolve or reject the deferred
     * promise.
     * @returns a nodeback
     */
    defer.prototype.makeNodeResolver = function () {
        var self = this;
        return function (error, value) {
            if (error) {
                self.reject(error);
            } else if (arguments.length > 2) {
                self.resolve(array_slice(arguments, 1));
            } else {
                self.resolve(value);
            }
        };
    };

    /**
     * @param resolver {Function} a function that returns nothing and accepts
     * the resolve, reject, and notify functions for a deferred.
     * @returns a promise that may be resolved with the given resolve and reject
     * functions, or rejected by a thrown exception in resolver
     */
    Q.Promise = promise; // ES6
    Q.promise = promise;
    function promise(resolver) {
        if (typeof resolver !== "function") {
            throw new TypeError("resolver must be a function.");
        }
        var deferred = defer();
        try {
            resolver(deferred.resolve, deferred.reject, deferred.notify);
        } catch (reason) {
            deferred.reject(reason);
        }
        return deferred.promise;
    }

    promise.race = race; // ES6
    promise.all = all; // ES6
    promise.reject = reject; // ES6
    promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
    Q.passByCopy = function (object) {
        //freeze(object);
        //passByCopies.set(object, true);
        return object;
    };

    Promise.prototype.passByCopy = function () {
        //freeze(object);
        //passByCopies.set(object, true);
        return this;
    };

    /**
     * If two promises eventually fulfill to the same value, promises that value,
     * but otherwise rejects.
     * @param x {Any*}
     * @param y {Any*}
     * @returns {Any*} a promise for x and y if they are the same, but a rejection
     * otherwise.
     *
     */
    Q.join = function (x, y) {
        return Q(x).join(y);
    };

    Promise.prototype.join = function (that) {
        return Q([this, that]).spread(function (x, y) {
            if (x === y) {
                // TODO: "===" should be Object.is or equiv
                return x;
            } else {
                throw new Error("Can't join: not the same: " + x + " " + y);
            }
        });
    };

    /**
     * Returns a promise for the first of an array of promises to become fulfilled.
     * @param answers {Array[Any*]} promises to race
     * @returns {Any*} the first promise to be fulfilled
     */
    Q.race = race;
    function race(answerPs) {
        return promise(function(resolve, reject) {
            // Switch to this once we can assume at least ES5
            // answerPs.forEach(function(answerP) {
            //     Q(answerP).then(resolve, reject);
            // });
            // Use this in the meantime
            for (var i = 0, len = answerPs.length; i < len; i++) {
                Q(answerPs[i]).then(resolve, reject);
            }
        });
    }

    Promise.prototype.race = function () {
        return this.then(Q.race);
    };

    /**
     * Constructs a Promise with a promise descriptor object and optional fallback
     * function.  The descriptor contains methods like when(rejected), get(name),
     * set(name, value), post(name, args), and delete(name), which all
     * return either a value, a promise for a value, or a rejection.  The fallback
     * accepts the operation name, a resolver, and any further arguments that would
     * have been forwarded to the appropriate method above had a method been
     * provided with the proper name.  The API makes no guarantees about the nature
     * of the returned object, apart from that it is usable whereever promises are
     * bought and sold.
     */
    Q.makePromise = Promise;
    function Promise(descriptor, fallback, inspect) {
        if (fallback === void 0) {
            fallback = function (op) {
                return reject(new Error(
                    "Promise does not support operation: " + op
                ));
            };
        }
        if (inspect === void 0) {
            inspect = function () {
                return {state: "unknown"};
            };
        }

        var promise = object_create(Promise.prototype);

        promise.promiseDispatch = function (resolve, op, args) {
            var result;
            try {
                if (descriptor[op]) {
                    result = descriptor[op].apply(promise, args);
                } else {
                    result = fallback.call(promise, op, args);
                }
            } catch (exception) {
                result = reject(exception);
            }
            if (resolve) {
                resolve(result);
            }
        };

        promise.inspect = inspect;

        // XXX deprecated `valueOf` and `exception` support
        if (inspect) {
            var inspected = inspect();
            if (inspected.state === "rejected") {
                promise.exception = inspected.reason;
            }

            promise.valueOf = function () {
                var inspected = inspect();
                if (inspected.state === "pending" ||
                    inspected.state === "rejected") {
                    return promise;
                }
                return inspected.value;
            };
        }

        return promise;
    }

    Promise.prototype.toString = function () {
        return "[object Promise]";
    };

    Promise.prototype.then = function (fulfilled, rejected, progressed) {
        var self = this;
        var deferred = defer();
        var done = false;   // ensure the untrusted promise makes at most a
        // single call to one of the callbacks

        function _fulfilled(value) {
            try {
                return typeof fulfilled === "function" ? fulfilled(value) : value;
            } catch (exception) {
                return reject(exception);
            }
        }

        function _rejected(exception) {
            if (typeof rejected === "function") {
                makeStackTraceLong(exception, self);
                try {
                    return rejected(exception);
                } catch (newException) {
                    return reject(newException);
                }
            }
            return reject(exception);
        }

        function _progressed(value) {
            return typeof progressed === "function" ? progressed(value) : value;
        }

        nextTick(function () {
            self.promiseDispatch(function (value) {
                if (done) {
                    return;
                }
                done = true;

                deferred.resolve(_fulfilled(value));
            }, "when", [function (exception) {
                if (done) {
                    return;
                }
                done = true;

                deferred.resolve(_rejected(exception));
            }]);
        });

        // Progress propagator need to be attached in the current tick.
        self.promiseDispatch(void 0, "when", [void 0, function (value) {
            var newValue;
            var threw = false;
            try {
                newValue = _progressed(value);
            } catch (e) {
                threw = true;
                if (Q.onerror) {
                    Q.onerror(e);
                } else {
                    throw e;
                }
            }

            if (!threw) {
                deferred.notify(newValue);
            }
        }]);

        return deferred.promise;
    };

    /**
     * Registers an observer on a promise.
     *
     * Guarantees:
     *
     * 1. that fulfilled and rejected will be called only once.
     * 2. that either the fulfilled callback or the rejected callback will be
     *    called, but not both.
     * 3. that fulfilled and rejected will not be called in this turn.
     *
     * @param value      promise or immediate reference to observe
     * @param fulfilled  function to be called with the fulfilled value
     * @param rejected   function to be called with the rejection exception
     * @param progressed function to be called on any progress notifications
     * @return promise for the return value from the invoked callback
     */
    Q.when = when;
    function when(value, fulfilled, rejected, progressed) {
        return Q(value).then(fulfilled, rejected, progressed);
    }

    Promise.prototype.thenResolve = function (value) {
        return this.then(function () { return value; });
    };

    Q.thenResolve = function (promise, value) {
        return Q(promise).thenResolve(value);
    };

    Promise.prototype.thenReject = function (reason) {
        return this.then(function () { throw reason; });
    };

    Q.thenReject = function (promise, reason) {
        return Q(promise).thenReject(reason);
    };

    /**
     * If an object is not a promise, it is as "near" as possible.
     * If a promise is rejected, it is as "near" as possible too.
     * If it’s a fulfilled promise, the fulfillment value is nearer.
     * If it’s a deferred promise and the deferred has been resolved, the
     * resolution is "nearer".
     * @param object
     * @returns most resolved (nearest) form of the object
     */

// XXX should we re-do this?
    Q.nearer = nearer;
    function nearer(value) {
        if (isPromise(value)) {
            var inspected = value.inspect();
            if (inspected.state === "fulfilled") {
                return inspected.value;
            }
        }
        return value;
    }

    /**
     * @returns whether the given object is a promise.
     * Otherwise it is a fulfilled value.
     */
    Q.isPromise = isPromise;
    function isPromise(object) {
        return isObject(object) &&
            typeof object.promiseDispatch === "function" &&
            typeof object.inspect === "function";
    }

    Q.isPromiseAlike = isPromiseAlike;
    function isPromiseAlike(object) {
        return isObject(object) && typeof object.then === "function";
    }

    /**
     * @returns whether the given object is a pending promise, meaning not
     * fulfilled or rejected.
     */
    Q.isPending = isPending;
    function isPending(object) {
        return isPromise(object) && object.inspect().state === "pending";
    }

    Promise.prototype.isPending = function () {
        return this.inspect().state === "pending";
    };

    /**
     * @returns whether the given object is a value or fulfilled
     * promise.
     */
    Q.isFulfilled = isFulfilled;
    function isFulfilled(object) {
        return !isPromise(object) || object.inspect().state === "fulfilled";
    }

    Promise.prototype.isFulfilled = function () {
        return this.inspect().state === "fulfilled";
    };

    /**
     * @returns whether the given object is a rejected promise.
     */
    Q.isRejected = isRejected;
    function isRejected(object) {
        return isPromise(object) && object.inspect().state === "rejected";
    }

    Promise.prototype.isRejected = function () {
        return this.inspect().state === "rejected";
    };

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
    var unhandledReasons = [];
    var unhandledRejections = [];
    var trackUnhandledRejections = true;

    function resetUnhandledRejections() {
        unhandledReasons.length = 0;
        unhandledRejections.length = 0;

        if (!trackUnhandledRejections) {
            trackUnhandledRejections = true;
        }
    }

    function trackRejection(promise, reason) {
        if (!trackUnhandledRejections) {
            return;
        }

        unhandledRejections.push(promise);
        if (reason && typeof reason.stack !== "undefined") {
            unhandledReasons.push(reason.stack);
        } else {
            unhandledReasons.push("(no stack) " + reason);
        }
    }

    function untrackRejection(promise) {
        if (!trackUnhandledRejections) {
            return;
        }

        var at = array_indexOf(unhandledRejections, promise);
        if (at !== -1) {
            unhandledRejections.splice(at, 1);
            unhandledReasons.splice(at, 1);
        }
    }

    Q.resetUnhandledRejections = resetUnhandledRejections;

    Q.getUnhandledReasons = function () {
        // Make a copy so that consumers can't interfere with our internal state.
        return unhandledReasons.slice();
    };

    Q.stopUnhandledRejectionTracking = function () {
        resetUnhandledRejections();
        trackUnhandledRejections = false;
    };

    resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

    /**
     * Constructs a rejected promise.
     * @param reason value describing the failure
     */
    Q.reject = reject;
    function reject(reason) {
        var rejection = Promise({
            "when": function (rejected) {
                // note that the error has been handled
                if (rejected) {
                    untrackRejection(this);
                }
                return rejected ? rejected(reason) : this;
            }
        }, function fallback() {
            return this;
        }, function inspect() {
            return { state: "rejected", reason: reason };
        });

        // Note that the reason has not been handled.
        trackRejection(rejection, reason);

        return rejection;
    }

    /**
     * Constructs a fulfilled promise for an immediate reference.
     * @param value immediate reference
     */
    Q.fulfill = fulfill;
    function fulfill(value) {
        return Promise({
            "when": function () {
                return value;
            },
            "get": function (name) {
                return value[name];
            },
            "set": function (name, rhs) {
                value[name] = rhs;
            },
            "delete": function (name) {
                delete value[name];
            },
            "post": function (name, args) {
                // Mark Miller proposes that post with no name should apply a
                // promised function.
                if (name === null || name === void 0) {
                    return value.apply(void 0, args);
                } else {
                    return value[name].apply(value, args);
                }
            },
            "apply": function (thisp, args) {
                return value.apply(thisp, args);
            },
            "keys": function () {
                return object_keys(value);
            }
        }, void 0, function inspect() {
            return { state: "fulfilled", value: value };
        });
    }

    /**
     * Converts thenables to Q promises.
     * @param promise thenable promise
     * @returns a Q promise
     */
    function coerce(promise) {
        var deferred = defer();
        nextTick(function () {
            try {
                promise.then(deferred.resolve, deferred.reject, deferred.notify);
            } catch (exception) {
                deferred.reject(exception);
            }
        });
        return deferred.promise;
    }

    /**
     * Annotates an object such that it will never be
     * transferred away from this process over any promise
     * communication channel.
     * @param object
     * @returns promise a wrapping of that object that
     * additionally responds to the "isDef" message
     * without a rejection.
     */
    Q.master = master;
    function master(object) {
        return Promise({
            "isDef": function () {}
        }, function fallback(op, args) {
            return dispatch(object, op, args);
        }, function () {
            return Q(object).inspect();
        });
    }

    /**
     * Spreads the values of a promised array of arguments into the
     * fulfillment callback.
     * @param fulfilled callback that receives variadic arguments from the
     * promised array
     * @param rejected callback that receives the exception if the promise
     * is rejected.
     * @returns a promise for the return value or thrown exception of
     * either callback.
     */
    Q.spread = spread;
    function spread(value, fulfilled, rejected) {
        return Q(value).spread(fulfilled, rejected);
    }

    Promise.prototype.spread = function (fulfilled, rejected) {
        return this.all().then(function (array) {
            return fulfilled.apply(void 0, array);
        }, rejected);
    };

    /**
     * The async function is a decorator for generator functions, turning
     * them into asynchronous generators.  Although generators are only part
     * of the newest ECMAScript 6 drafts, this code does not cause syntax
     * errors in older engines.  This code should continue to work and will
     * in fact improve over time as the language improves.
     *
     * ES6 generators are currently part of V8 version 3.19 with the
     * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
     * for longer, but under an older Python-inspired form.  This function
     * works on both kinds of generators.
     *
     * Decorates a generator function such that:
     *  - it may yield promises
     *  - execution will continue when that promise is fulfilled
     *  - the value of the yield expression will be the fulfilled value
     *  - it returns a promise for the return value (when the generator
     *    stops iterating)
     *  - the decorated function returns a promise for the return value
     *    of the generator or the first rejected promise among those
     *    yielded.
     *  - if an error is thrown in the generator, it propagates through
     *    every following yield until it is caught, or until it escapes
     *    the generator function altogether, and is translated into a
     *    rejection for the promise returned by the decorated generator.
     */
    Q.async = async;
    function async(makeGenerator) {
        return function () {
            // when verb is "send", arg is a value
            // when verb is "throw", arg is an exception
            function continuer(verb, arg) {
                var result;

                // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
                // engine that has a deployed base of browsers that support generators.
                // However, SM's generators use the Python-inspired semantics of
                // outdated ES6 drafts.  We would like to support ES6, but we'd also
                // like to make it possible to use generators in deployed browsers, so
                // we also support Python-style generators.  At some point we can remove
                // this block.

                if (typeof StopIteration === "undefined") {
                    // ES6 Generators
                    try {
                        result = generator[verb](arg);
                    } catch (exception) {
                        return reject(exception);
                    }
                    if (result.done) {
                        return result.value;
                    } else {
                        return when(result.value, callback, errback);
                    }
                } else {
                    // SpiderMonkey Generators
                    // FIXME: Remove this case when SM does ES6 generators.
                    try {
                        result = generator[verb](arg);
                    } catch (exception) {
                        if (isStopIteration(exception)) {
                            return exception.value;
                        } else {
                            return reject(exception);
                        }
                    }
                    return when(result, callback, errback);
                }
            }
            var generator = makeGenerator.apply(this, arguments);
            var callback = continuer.bind(continuer, "next");
            var errback = continuer.bind(continuer, "throw");
            return callback();
        };
    }

    /**
     * The spawn function is a small wrapper around async that immediately
     * calls the generator and also ends the promise chain, so that any
     * unhandled errors are thrown instead of forwarded to the error
     * handler. This is useful because it's extremely common to run
     * generators at the top-level to work with libraries.
     */
    Q.spawn = spawn;
    function spawn(makeGenerator) {
        Q.done(Q.async(makeGenerator)());
    }

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
    /**
     * Throws a ReturnValue exception to stop an asynchronous generator.
     *
     * This interface is a stop-gap measure to support generator return
     * values in older Firefox/SpiderMonkey.  In browsers that support ES6
     * generators like Chromium 29, just use "return" in your generator
     * functions.
     *
     * @param value the return value for the surrounding generator
     * @throws ReturnValue exception with the value.
     * @example
     * // ES6 style
     * Q.async(function* () {
     *      var foo = yield getFooPromise();
     *      var bar = yield getBarPromise();
     *      return foo + bar;
     * })
     * // Older SpiderMonkey style
     * Q.async(function () {
     *      var foo = yield getFooPromise();
     *      var bar = yield getBarPromise();
     *      Q.return(foo + bar);
     * })
     */
    Q["return"] = _return;
    function _return(value) {
        throw new QReturnValue(value);
    }

    /**
     * The promised function decorator ensures that any promise arguments
     * are settled and passed as values (`this` is also settled and passed
     * as a value).  It will also ensure that the result of a function is
     * always a promise.
     *
     * @example
     * var add = Q.promised(function (a, b) {
     *     return a + b;
     * });
     * add(Q(a), Q(B));
     *
     * @param {function} callback The function to decorate
     * @returns {function} a function that has been decorated.
     */
    Q.promised = promised;
    function promised(callback) {
        return function () {
            return spread([this, all(arguments)], function (self, args) {
                return callback.apply(self, args);
            });
        };
    }

    /**
     * sends a message to a value in a future turn
     * @param object* the recipient
     * @param op the name of the message operation, e.g., "when",
     * @param args further arguments to be forwarded to the operation
     * @returns result {Promise} a promise for the result of the operation
     */
    Q.dispatch = dispatch;
    function dispatch(object, op, args) {
        return Q(object).dispatch(op, args);
    }

    Promise.prototype.dispatch = function (op, args) {
        var self = this;
        var deferred = defer();
        nextTick(function () {
            self.promiseDispatch(deferred.resolve, op, args);
        });
        return deferred.promise;
    };

    /**
     * Gets the value of a property in a future turn.
     * @param object    promise or immediate reference for target object
     * @param name      name of property to get
     * @return promise for the property value
     */
    Q.get = function (object, key) {
        return Q(object).dispatch("get", [key]);
    };

    Promise.prototype.get = function (key) {
        return this.dispatch("get", [key]);
    };

    /**
     * Sets the value of a property in a future turn.
     * @param object    promise or immediate reference for object object
     * @param name      name of property to set
     * @param value     new value of property
     * @return promise for the return value
     */
    Q.set = function (object, key, value) {
        return Q(object).dispatch("set", [key, value]);
    };

    Promise.prototype.set = function (key, value) {
        return this.dispatch("set", [key, value]);
    };

    /**
     * Deletes a property in a future turn.
     * @param object    promise or immediate reference for target object
     * @param name      name of property to delete
     * @return promise for the return value
     */
    Q.del = // XXX legacy
        Q["delete"] = function (object, key) {
            return Q(object).dispatch("delete", [key]);
        };

    Promise.prototype.del = // XXX legacy
        Promise.prototype["delete"] = function (key) {
            return this.dispatch("delete", [key]);
        };

    /**
     * Invokes a method in a future turn.
     * @param object    promise or immediate reference for target object
     * @param name      name of method to invoke
     * @param value     a value to post, typically an array of
     *                  invocation arguments for promises that
     *                  are ultimately backed with `resolve` values,
     *                  as opposed to those backed with URLs
     *                  wherein the posted value can be any
     *                  JSON serializable object.
     * @return promise for the return value
     */
// bound locally because it is used by other methods
    Q.mapply = // XXX As proposed by "Redsandro"
        Q.post = function (object, name, args) {
            return Q(object).dispatch("post", [name, args]);
        };

    Promise.prototype.mapply = // XXX As proposed by "Redsandro"
        Promise.prototype.post = function (name, args) {
            return this.dispatch("post", [name, args]);
        };

    /**
     * Invokes a method in a future turn.
     * @param object    promise or immediate reference for target object
     * @param name      name of method to invoke
     * @param ...args   array of invocation arguments
     * @return promise for the return value
     */
    Q.send = // XXX Mark Miller's proposed parlance
        Q.mcall = // XXX As proposed by "Redsandro"
            Q.invoke = function (object, name /*...args*/) {
                return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
            };

    Promise.prototype.send = // XXX Mark Miller's proposed parlance
        Promise.prototype.mcall = // XXX As proposed by "Redsandro"
            Promise.prototype.invoke = function (name /*...args*/) {
                return this.dispatch("post", [name, array_slice(arguments, 1)]);
            };

    /**
     * Applies the promised function in a future turn.
     * @param object    promise or immediate reference for target function
     * @param args      array of application arguments
     */
    Q.fapply = function (object, args) {
        return Q(object).dispatch("apply", [void 0, args]);
    };

    Promise.prototype.fapply = function (args) {
        return this.dispatch("apply", [void 0, args]);
    };

    /**
     * Calls the promised function in a future turn.
     * @param object    promise or immediate reference for target function
     * @param ...args   array of application arguments
     */
    Q["try"] =
        Q.fcall = function (object /* ...args*/) {
            return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
        };

    Promise.prototype.fcall = function (/*...args*/) {
        return this.dispatch("apply", [void 0, array_slice(arguments)]);
    };

    /**
     * Binds the promised function, transforming return values into a fulfilled
     * promise and thrown errors into a rejected one.
     * @param object    promise or immediate reference for target function
     * @param ...args   array of application arguments
     */
    Q.fbind = function (object /*...args*/) {
        var promise = Q(object);
        var args = array_slice(arguments, 1);
        return function fbound() {
            return promise.dispatch("apply", [
                this,
                args.concat(array_slice(arguments))
            ]);
        };
    };
    Promise.prototype.fbind = function (/*...args*/) {
        var promise = this;
        var args = array_slice(arguments);
        return function fbound() {
            return promise.dispatch("apply", [
                this,
                args.concat(array_slice(arguments))
            ]);
        };
    };

    /**
     * Requests the names of the owned properties of a promised
     * object in a future turn.
     * @param object    promise or immediate reference for target object
     * @return promise for the keys of the eventually settled object
     */
    Q.keys = function (object) {
        return Q(object).dispatch("keys", []);
    };

    Promise.prototype.keys = function () {
        return this.dispatch("keys", []);
    };

    /**
     * Turns an array of promises into a promise for an array.  If any of
     * the promises gets rejected, the whole array is rejected immediately.
     * @param {Array*} an array (or promise for an array) of values (or
     * promises for values)
     * @returns a promise for an array of the corresponding values
     */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
    Q.all = all;
    function all(promises) {
        return when(promises, function (promises) {
            var countDown = 0;
            var deferred = defer();
            array_reduce(promises, function (undefined, promise, index) {
                var snapshot;
                if (
                    isPromise(promise) &&
                        (snapshot = promise.inspect()).state === "fulfilled"
                    ) {
                    promises[index] = snapshot.value;
                } else {
                    ++countDown;
                    when(
                        promise,
                        function (value) {
                            promises[index] = value;
                            if (--countDown === 0) {
                                deferred.resolve(promises);
                            }
                        },
                        deferred.reject,
                        function (progress) {
                            deferred.notify({ index: index, value: progress });
                        }
                    );
                }
            }, void 0);
            if (countDown === 0) {
                deferred.resolve(promises);
            }
            return deferred.promise;
        });
    }

    Promise.prototype.all = function () {
        return all(this);
    };

    /**
     * Waits for all promises to be settled, either fulfilled or
     * rejected.  This is distinct from `all` since that would stop
     * waiting at the first rejection.  The promise returned by
     * `allResolved` will never be rejected.
     * @param promises a promise for an array (or an array) of promises
     * (or values)
     * @return a promise for an array of promises
     */
    Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
    function allResolved(promises) {
        return when(promises, function (promises) {
            promises = array_map(promises, Q);
            return when(all(array_map(promises, function (promise) {
                return when(promise, noop, noop);
            })), function () {
                return promises;
            });
        });
    }

    Promise.prototype.allResolved = function () {
        return allResolved(this);
    };

    /**
     * @see Promise#allSettled
     */
    Q.allSettled = allSettled;
    function allSettled(promises) {
        return Q(promises).allSettled();
    }

    /**
     * Turns an array of promises into a promise for an array of their states (as
     * returned by `inspect`) when they have all settled.
     * @param {Array[Any*]} values an array (or promise for an array) of values (or
     * promises for values)
     * @returns {Array[State]} an array of states for the respective values.
     */
    Promise.prototype.allSettled = function () {
        return this.then(function (promises) {
            return all(array_map(promises, function (promise) {
                promise = Q(promise);
                function regardless() {
                    return promise.inspect();
                }
                return promise.then(regardless, regardless);
            }));
        });
    };

    /**
     * Captures the failure of a promise, giving an oportunity to recover
     * with a callback.  If the given promise is fulfilled, the returned
     * promise is fulfilled.
     * @param {Any*} promise for something
     * @param {Function} callback to fulfill the returned promise if the
     * given promise is rejected
     * @returns a promise for the return value of the callback
     */
    Q.fail = // XXX legacy
        Q["catch"] = function (object, rejected) {
            return Q(object).then(void 0, rejected);
        };

    Promise.prototype.fail = // XXX legacy
        Promise.prototype["catch"] = function (rejected) {
            return this.then(void 0, rejected);
        };

    /**
     * Attaches a listener that can respond to progress notifications from a
     * promise's originating deferred. This listener receives the exact arguments
     * passed to ``deferred.notify``.
     * @param {Any*} promise for something
     * @param {Function} callback to receive any progress notifications
     * @returns the given promise, unchanged
     */
    Q.progress = progress;
    function progress(object, progressed) {
        return Q(object).then(void 0, void 0, progressed);
    }

    Promise.prototype.progress = function (progressed) {
        return this.then(void 0, void 0, progressed);
    };

    /**
     * Provides an opportunity to observe the settling of a promise,
     * regardless of whether the promise is fulfilled or rejected.  Forwards
     * the resolution to the returned promise when the callback is done.
     * The callback can return a promise to defer completion.
     * @param {Any*} promise
     * @param {Function} callback to observe the resolution of the given
     * promise, takes no arguments.
     * @returns a promise for the resolution of the given promise when
     * ``fin`` is done.
     */
    Q.fin = // XXX legacy
        Q["finally"] = function (object, callback) {
            return Q(object)["finally"](callback);
        };

    Promise.prototype.fin = // XXX legacy
        Promise.prototype["finally"] = function (callback) {
            callback = Q(callback);
            return this.then(function (value) {
                return callback.fcall().then(function () {
                    return value;
                });
            }, function (reason) {
                // TODO attempt to recycle the rejection with "this".
                return callback.fcall().then(function () {
                    throw reason;
                });
            });
        };

    /**
     * Terminates a chain of promises, forcing rejections to be
     * thrown as exceptions.
     * @param {Any*} promise at the end of a chain of promises
     * @returns nothing
     */
    Q.done = function (object, fulfilled, rejected, progress) {
        return Q(object).done(fulfilled, rejected, progress);
    };

    Promise.prototype.done = function (fulfilled, rejected, progress) {
        var onUnhandledError = function (error) {
            // forward to a future turn so that ``when``
            // does not catch it and turn it into a rejection.
            nextTick(function () {
                makeStackTraceLong(error, promise);
                if (Q.onerror) {
                    Q.onerror(error);
                } else {
                    throw error;
                }
            });
        };

        // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
        var promise = fulfilled || rejected || progress ?
            this.then(fulfilled, rejected, progress) :
            this;

        if (typeof process === "object" && process && process.domain) {
            onUnhandledError = process.domain.bind(onUnhandledError);
        }

        promise.then(void 0, onUnhandledError);
    };

    /**
     * Causes a promise to be rejected if it does not get fulfilled before
     * some milliseconds time out.
     * @param {Any*} promise
     * @param {Number} milliseconds timeout
     * @param {String} custom error message (optional)
     * @returns a promise for the resolution of the given promise if it is
     * fulfilled before the timeout, otherwise rejected.
     */
    Q.timeout = function (object, ms, message) {
        return Q(object).timeout(ms, message);
    };

    Promise.prototype.timeout = function (ms, message) {
        var deferred = defer();
        var timeoutId = setTimeout(function () {
            deferred.reject(new Error(message || "Timed out after " + ms + " ms"));
        }, ms);

        this.then(function (value) {
            clearTimeout(timeoutId);
            deferred.resolve(value);
        }, function (exception) {
            clearTimeout(timeoutId);
            deferred.reject(exception);
        }, deferred.notify);

        return deferred.promise;
    };

    /**
     * Returns a promise for the given value (or promised value), some
     * milliseconds after it resolved. Passes rejections immediately.
     * @param {Any*} promise
     * @param {Number} milliseconds
     * @returns a promise for the resolution of the given promise after milliseconds
     * time has elapsed since the resolution of the given promise.
     * If the given promise rejects, that is passed immediately.
     */
    Q.delay = function (object, timeout) {
        if (timeout === void 0) {
            timeout = object;
            object = void 0;
        }
        return Q(object).delay(timeout);
    };

    Promise.prototype.delay = function (timeout) {
        return this.then(function (value) {
            var deferred = defer();
            setTimeout(function () {
                deferred.resolve(value);
            }, timeout);
            return deferred.promise;
        });
    };

    /**
     * Passes a continuation to a Node function, which is called with the given
     * arguments provided as an array, and returns a promise.
     *
     *      Q.nfapply(FS.readFile, [__filename])
     *      .then(function (content) {
     *      })
     *
     */
    Q.nfapply = function (callback, args) {
        return Q(callback).nfapply(args);
    };

    Promise.prototype.nfapply = function (args) {
        var deferred = defer();
        var nodeArgs = array_slice(args);
        nodeArgs.push(deferred.makeNodeResolver());
        this.fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };

    /**
     * Passes a continuation to a Node function, which is called with the given
     * arguments provided individually, and returns a promise.
     * @example
     * Q.nfcall(FS.readFile, __filename)
     * .then(function (content) {
     * })
     *
     */
    Q.nfcall = function (callback /*...args*/) {
        var args = array_slice(arguments, 1);
        return Q(callback).nfapply(args);
    };

    Promise.prototype.nfcall = function (/*...args*/) {
        var nodeArgs = array_slice(arguments);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        this.fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };

    /**
     * Wraps a NodeJS continuation passing function and returns an equivalent
     * version that returns a promise.
     * @example
     * Q.nfbind(FS.readFile, __filename)("utf-8")
     * .then(console.log)
     * .done()
     */
    Q.nfbind =
        Q.denodeify = function (callback /*...args*/) {
            var baseArgs = array_slice(arguments, 1);
            return function () {
                var nodeArgs = baseArgs.concat(array_slice(arguments));
                var deferred = defer();
                nodeArgs.push(deferred.makeNodeResolver());
                Q(callback).fapply(nodeArgs).fail(deferred.reject);
                return deferred.promise;
            };
        };

    Promise.prototype.nfbind =
        Promise.prototype.denodeify = function (/*...args*/) {
            var args = array_slice(arguments);
            args.unshift(this);
            return Q.denodeify.apply(void 0, args);
        };

    Q.nbind = function (callback, thisp /*...args*/) {
        var baseArgs = array_slice(arguments, 2);
        return function () {
            var nodeArgs = baseArgs.concat(array_slice(arguments));
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            function bound() {
                return callback.apply(thisp, arguments);
            }
            Q(bound).fapply(nodeArgs).fail(deferred.reject);
            return deferred.promise;
        };
    };

    Promise.prototype.nbind = function (/*thisp, ...args*/) {
        var args = array_slice(arguments, 0);
        args.unshift(this);
        return Q.nbind.apply(void 0, args);
    };

    /**
     * Calls a method of a Node-style object that accepts a Node-style
     * callback with a given array of arguments, plus a provided callback.
     * @param object an object that has the named method
     * @param {String} name name of the method of object
     * @param {Array} args arguments to pass to the method; the callback
     * will be provided by Q and appended to these arguments.
     * @returns a promise for the value or error
     */
    Q.nmapply = // XXX As proposed by "Redsandro"
        Q.npost = function (object, name, args) {
            return Q(object).npost(name, args);
        };

    Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
        Promise.prototype.npost = function (name, args) {
            var nodeArgs = array_slice(args || []);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
            return deferred.promise;
        };

    /**
     * Calls a method of a Node-style object that accepts a Node-style
     * callback, forwarding the given variadic arguments, plus a provided
     * callback argument.
     * @param object an object that has the named method
     * @param {String} name name of the method of object
     * @param ...args arguments to pass to the method; the callback will
     * be provided by Q and appended to these arguments.
     * @returns a promise for the value or error
     */
    Q.nsend = // XXX Based on Mark Miller's proposed "send"
        Q.nmcall = // XXX Based on "Redsandro's" proposal
            Q.ninvoke = function (object, name /*...args*/) {
                var nodeArgs = array_slice(arguments, 2);
                var deferred = defer();
                nodeArgs.push(deferred.makeNodeResolver());
                Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
                return deferred.promise;
            };

    Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
        Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
            Promise.prototype.ninvoke = function (name /*...args*/) {
                var nodeArgs = array_slice(arguments, 1);
                var deferred = defer();
                nodeArgs.push(deferred.makeNodeResolver());
                this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
                return deferred.promise;
            };

    /**
     * If a function would like to support both Node continuation-passing-style and
     * promise-returning-style, it can end its internal promise chain with
     * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
     * elects to use a nodeback, the result will be sent there.  If they do not
     * pass a nodeback, they will receive the result promise.
     * @param object a result (or a promise for a result)
     * @param {Function} nodeback a Node.js-style callback
     * @returns either the promise or nothing
     */
    Q.nodeify = nodeify;
    function nodeify(object, nodeback) {
        return Q(object).nodeify(nodeback);
    }

    Promise.prototype.nodeify = function (nodeback) {
        if (nodeback) {
            this.then(function (value) {
                nextTick(function () {
                    nodeback(null, value);
                });
            }, function (error) {
                nextTick(function () {
                    nodeback(error);
                });
            });
        } else {
            return this;
        }
    };

// All code before this point will be filtered from stack traces.
    var qEndingLine = captureLine();

    return Q;

});


/*lru-cache starts from here*/
;(function () { // closure for web browsers

    if (typeof module === 'object' && module.exports) {
        module.exports = LRUCache
    } else {
        // just set the global for non-node platforms.
        this.LRUCache = LRUCache
    }

    function hOP (obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key)
    }

    function naiveLength () { return 1 }

    function LRUCache (options) {
        if (!(this instanceof LRUCache))
            return new LRUCache(options)

        if (typeof options === 'number')
            options = { max: options }

        if (!options)
            options = {}

        this._max = options.max
        // Kind of weird to have a default max of Infinity, but oh well.
        if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
            this._max = Infinity

        this._lengthCalculator = options.length || naiveLength
        if (typeof this._lengthCalculator !== "function")
            this._lengthCalculator = naiveLength

        this._allowStale = options.stale || false
        this._maxAge = options.maxAge || null
        this._dispose = options.dispose
        this.reset()
    }

// resize the cache when the max changes.
    Object.defineProperty(LRUCache.prototype, "max",
        { set : function (mL) {
            if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
            this._max = mL
            if (this._length > this._max) trim(this)
        }
            , get : function () { return this._max }
            , enumerable : true
        })

// resize the cache when the lengthCalculator changes.
    Object.defineProperty(LRUCache.prototype, "lengthCalculator",
        { set : function (lC) {
            if (typeof lC !== "function") {
                this._lengthCalculator = naiveLength
                this._length = this._itemCount
                for (var key in this._cache) {
                    this._cache[key].length = 1
                }
            } else {
                this._lengthCalculator = lC
                this._length = 0
                for (var key in this._cache) {
                    this._cache[key].length = this._lengthCalculator(this._cache[key].value)
                    this._length += this._cache[key].length
                }
            }

            if (this._length > this._max) trim(this)
        }
            , get : function () { return this._lengthCalculator }
            , enumerable : true
        })

    Object.defineProperty(LRUCache.prototype, "length",
        { get : function () { return this._length }
            , enumerable : true
        })


    Object.defineProperty(LRUCache.prototype, "itemCount",
        { get : function () { return this._itemCount }
            , enumerable : true
        })

    LRUCache.prototype.forEach = function (fn, thisp) {
        thisp = thisp || this
        var i = 0;
        for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
            i++
            var hit = this._lruList[k]
            if (this._maxAge && (Date.now() - hit.now > this._maxAge)) {
                del(this, hit)
                if (!this._allowStale) hit = undefined
            }
            if (hit) {
                fn.call(thisp, hit.value, hit.key, this)
            }
        }
    }

    LRUCache.prototype.keys = function () {
        var keys = new Array(this._itemCount)
        var i = 0
        for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
            var hit = this._lruList[k]
            keys[i++] = hit.key
        }
        return keys
    }

    LRUCache.prototype.values = function () {
        var values = new Array(this._itemCount)
        var i = 0
        for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
            var hit = this._lruList[k]
            values[i++] = hit.value
        }
        return values
    }

    LRUCache.prototype.reset = function () {
        if (this._dispose && this._cache) {
            for (var k in this._cache) {
                this._dispose(k, this._cache[k].value)
            }
        }

        this._cache = Object.create(null) // hash of items by key
        this._lruList = Object.create(null) // list of items in order of use recency
        this._mru = 0 // most recently used
        this._lru = 0 // least recently used
        this._length = 0 // number of items in the list
        this._itemCount = 0
    }

// Provided for debugging/dev purposes only. No promises whatsoever that
// this API stays stable.
    LRUCache.prototype.dump = function () {
        return this._cache
    }

    LRUCache.prototype.dumpLru = function () {
        return this._lruList
    }

    LRUCache.prototype.set = function (key, value) {
        if (hOP(this._cache, key)) {
            // dispose of the old one before overwriting
            if (this._dispose) this._dispose(key, this._cache[key].value)
            if (this._maxAge) this._cache[key].now = Date.now()
            this._cache[key].value = value
            this.get(key)
            return true
        }

        var len = this._lengthCalculator(value)
        var age = this._maxAge ? Date.now() : 0
        var hit = new Entry(key, value, this._mru++, len, age)

        // oversized objects fall out of cache automatically.
        if (hit.length > this._max) {
            if (this._dispose) this._dispose(key, value)
            return false
        }

        this._length += hit.length
        this._lruList[hit.lu] = this._cache[key] = hit
        this._itemCount ++

        if (this._length > this._max) trim(this)
        return true
    }

    LRUCache.prototype.has = function (key) {
        if (!hOP(this._cache, key)) return false
        var hit = this._cache[key]
        if (this._maxAge && (Date.now() - hit.now > this._maxAge)) {
            return false
        }
        return true
    }

    LRUCache.prototype.get = function (key) {
        return get(this, key, true)
    }

    LRUCache.prototype.peek = function (key) {
        return get(this, key, false)
    }

    LRUCache.prototype.pop = function () {
        var hit = this._lruList[this._lru]
        del(this, hit)
        return hit || null
    }

    LRUCache.prototype.del = function (key) {
        del(this, this._cache[key])
    }

    function get (self, key, doUse) {
        var hit = self._cache[key]
        if (hit) {
            if (self._maxAge && (Date.now() - hit.now > self._maxAge)) {
                del(self, hit)
                if (!self._allowStale) hit = undefined
            } else {
                if (doUse) use(self, hit)
            }
            if (hit) hit = hit.value
        }
        return hit
    }

    function use (self, hit) {
        shiftLU(self, hit)
        hit.lu = self._mru ++
        self._lruList[hit.lu] = hit
    }

    function trim (self) {
        while (self._lru < self._mru && self._length > self._max)
            del(self, self._lruList[self._lru])
    }

    function shiftLU (self, hit) {
        delete self._lruList[ hit.lu ]
        while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
    }

    function del (self, hit) {
        if (hit) {
            if (self._dispose) self._dispose(hit.key, hit.value)
            self._length -= hit.length
            self._itemCount --
            delete self._cache[ hit.key ]
            shiftLU(self, hit)
        }
    }

// classy, since V8 prefers predictable objects.
    function Entry (key, value, lu, length, now) {
        this.key = key
        this.value = value
        this.lu = lu
        this.length = length
        this.now = now
    }

})()

/*Util.js starts from here*/
var Util = {};

Util.ObjConstrunctor = {}.constructor;

var require = function (key) {
    if (key == "ApplaneCore/apputil/util.js") {
        return Util;
    } else if (key == "q") {
        return Q;
    } else if (key == "../../lib/ModuleManager.js") {
        return ModuleManager;
    } else if (key == "ApplaneDB/lib/EventManager.js") {
        return EventManager;
    } else if (key == "ApplaneDB/lib/Document.js") {
        return Document;
    } else if (key == "./DataModel.js") {
        return DataModel;
    } else if (key == "ApplaneDB/public/js/ViewUtility.js") {
        return ViewUtility;
    } else {
        alert("Not supported required>>>" + key)
    }
};
//var module = {};
//var exports = {};
//
//var EventManager = {};
Util.NOT_CONNECTED_MESSAGE = "Unable to connect. Check your internet connection."
Util.INVALID_TOKEN = "Not connected"
Util.UNEXPECTED_ERROR = "Something went wrong, but we're working to fix it as soon as we can. Thank you for your patience.";
Util.clone = function (value) {
    return angular.copy(value);
}
Util.isObject = function (obj) {

    if (obj === undefined || obj === null || obj === true || obj === false || Array.isArray(obj)) {
        return false;
    } else if (obj.constructor === Util.ObjConstrunctor) {
        return true;
    } else {
        return false;
    }
}
Util.isArray = function (value) {
    return angular.isArray(value);
}
Util.equals = function (value1, value2) {
    return angular.equals(value1, value2);
}

Util.getIndex = function (array, field, value) {
    if (!array || array.length == 0) {
        return undefined;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i][field] == value) {
            return i;
        }

    }
}

Util.sort = function (data, type, field) {
    if (!data || data.length == 0) {
        return;
    }
    if (!field) {
        if (!type || type == "asc") {
            data.sort(function (a, b) {
                return a - b
            });
        } else if (type == "desc") {
            data.sort(function (a, b) {
                return a - b
            });
            data.reverse();
        }
    } else {
        var fieldValueType = undefined;
        for (var i = 0; i < data.length; i++) {
            if (data[i][field]) {
                var fieldValue = data[i][field];
                fieldValueType = typeof fieldValue;
                if (fieldValueType === "object" && fieldValue instanceof Date) {
                    fieldValueType = "date";
                }
                break;
            }
        }
        if (fieldValueType) {
            if (!type || type == "asc") {
                data.sort(function (a, b) {
                    if (a[field] === undefined && b[field] === undefined)
                        return 0;
                    if (a[field] === undefined && b[field] !== undefined)
                        return -1;
                    if (a[field] !== undefined && b[field] === undefined)
                        return 1;
                    if (fieldValueType === "number") {
                        return a[field] - b[field];
                    } else if (fieldValueType === "string") {
                        var nameA = a[field].toLowerCase();
                        var nameB = b[field].toLowerCase();
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    } else if (fieldValueType === "date") {
                        var dateA = new Date(a[field]);
                        var dateB = new Date(b[field]);
                        return dateA - dateB;
                    }
                })
            } else if (type == "desc") {
                data.sort(function (a, b) {
                    if (a[field] === undefined && b[field] === undefined)
                        return 0;
                    if (a[field] === undefined && b[field] !== undefined)
                        return 1;
                    if (a[field] !== undefined && b[field] === undefined)
                        return -1;
                    if (fieldValueType === "number") {
                        return b[field] - a[field];
                    } else if (fieldValueType === "string") {
                        var nameA = a[field].toLowerCase();
                        var nameB = b[field].toLowerCase();
                        if (nameB < nameA)
                            return -1
                        if (nameB > nameA)
                            return 1
                        return 0
                    } else if (fieldValueType === "date") {
                        var dateA = new Date(a[field]);
                        var dateB = new Date(b[field])
                        return dateB - dateA;
                    }
                })
            }
        }
    }

}

Util.isJSONObject = function (value) {
    return Util.isObject(value)
}

Util.deepEqual = function (val1, val2) {
    return Util.equals(val1, val2);
}

Util.deepClone = function (value) {
    return angular.copy(value);

}

Util.iterateArrayWithPromise = function (array, task) {
    var Q = require("q");
    var D = Q.defer();

    var index = 0;

    var loop = function (index) {
        try {
            var onResolve = function () {
                index = index + 1;
                if (index == array.length) {
                    D.resolve();
                } else {
                    loop(index);
                }
            }
            try {
                var p = task(index, array[index]);

                if (!p) {
                    onResolve();
                    return;
                }
                p.then(onResolve)
                    .fail(function (err) {
                        D.reject(err);
                    })
            } catch (e) {
                D.reject(e);
            }

        } catch (e) {
            D.reject(e);
        }
    }

    if (!array || array.length == 0) {
        D.resolve();
    } else {
        loop(0);
    }

    return D.promise;

}

Util.iterateArrayWithoutPromise = function (array, task, reverse) {

    var length = array ? array.length : 0;
    if (length == 0) {
        return;
    }
    var index = reverse ? (length - 1) : 0;

    function loop(index) {
        try {
            var onResolve = function () {
                index = reverse ? (index - 1) : index + 1;
                if ((!reverse && index == array.length) || (reverse && index == -1)) {
                    return;
                } else {
                    return loop(index);
                }
            }
            try {
                var p = task(index, array[index]);
                if (Q.isPromise(p)) {
                    return p.then(onResolve)
                        .fail(function (err) {
                            throw err;
                        })
                } else {
                    return onResolve();
                }


            } catch (e) {
                throw e;
            }
        } catch (e) {
            throw e;
        }
    }

    return loop(index);

}

Util.getUniqueTempId = function () {
    Util.nextUniqueTemp = Util.nextUniqueTemp || 0;
    Util.nextUniqueTemp = Util.nextUniqueTemp + 1;
    return Util.nextUniqueTemp + "__temp__";
}

Util.isTemp = function (_id) {
    if ((!_id) || (typeof _id == 'string' && _id.indexOf("__temp__") > 0)) {
        return true;
    }
}

Util.populate_IdInArray = function (updates) {
    if (!updates) {
        return;
    }
    for (var k in updates) {
        var value = updates[k];
        if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
                if (Util.isJSONObject(value[i])) {
                    if (!(value[i]._id)) {
                        value[i]._id = Util.getUniqueTempId();
                    }
                    Util.populate_IdInArray(value[i]);
                } else {
                    break;
                }
            }
        } else if (Util.isJSONObject(value)) {
            Util.populate_IdInArray(value);
        }
    }
}

Util.isExists = function (array, value, key) {
    if (!array || !value) {
        return;
    }
    return Util.checkValue(array, value, key);
};

Util.checkValue = function (array, value, key) {
    for (var i = 0; i < array.length; i++) {
        var cExp;
        var exp;
        if (key && Util.isJSONObject(value)) {
            cExp = array[i][key];
            exp = value[key];
        } else {
            cExp = array[i];
            exp = value;
        }
        if (Util.deepEqual(cExp, exp)) {
            return i;
        }
    }
}

Util.putDottedValue = function (model, expression, value, populateTempId) {
    if (!model) {
        alert("Model does not exits for putting dotted value")
        return;
    }
    var lastDottedIndex = expression.lastIndexOf(".");
    if (lastDottedIndex >= 0) {
        var firstExpression = expression.substring(0, lastDottedIndex);
        expression = expression.substring(lastDottedIndex + 1);
        model = Util.resolveDot(model, firstExpression, true);
    }
    if (Array.isArray(model)) {
        if (model.length == 0) {
            var newObject = {}
            if (populateTempId) {
                newObject._id = Util.getUniqueTempId()
            }
            model.push(newObject);
        }
        var model = model[0];
        model[expression] = value;
    } else if (Util.isJSONObject(model)) {
        model[expression] = value;
    } else {
        throw new Error("Un supported model while putDottedValue>>>>" + JSON.stringify(model) + ">>>>expression>>>>" + expression + ">>value>>>>" + JSON.stringify(value));
    }


}

Util.resolveDottedValue = function (model, expression, confirm, confirmType) {
    return Util.resolveDot(model, expression, confirm, confirmType);
}

Util.resolveDot = function (model, expression, confirm, confirmType) {
    if (!model) {
        return;
    }

    while (expression !== undefined) {
        var fieldIndex = expression.indexOf(".");
        var exp = expression;
        if (fieldIndex >= 0) {
            exp = expression.substring(0, fieldIndex);
            expression = expression.substring(fieldIndex + 1);
        } else {
            expression = undefined;
        }

        if ((model[exp] === undefined || model[exp] === null) && !confirm) {
            return;
        }
        if (model[exp] !== undefined && model[exp] !== null) {
            model = model[exp];
        } else {
            if (expression) {
                model[exp] = {}
            } else {
                if (confirmType == 'array') {
                    model[exp] = [];
                } else {
                    model[exp] = {}
                }
            }
            model = model[exp];
        }

    }
    return model;
}

/*Util.evaluateFilter = function (query, row) {
 if (query && row && query._id && row._id && query._id == row._id) {
 return true;
 } else {
 return false;
 }
 }*/

Util.evaluateFilter = function (filter, row) {
    var keys = Object.keys(filter);
    var keyLength = keys.length;
    var evaluated = false;
    for (var i = 0; i < keyLength; i++) {
        var key = keys[i];
        if (key === "$or" || key === "$and") {
            var value = filter[key];
            if (value) {
                for (var j = 0; j < value.length; j++) {
                    evaluated = Util.evaluateFilter(value[j], row);
                    if ((evaluated && key === "$or") || (!evaluated && key === "$and")) {
                        break;
                    }
                }
            } else {
                evaluated = true;
            }
        } else {
            if (Util.isJSONObject(filter[key])) {
                for (var opr in filter[key]) {
                    evaluated = evaluateExpression(key, opr, filter[key][opr], row);
                    if (!evaluated) {
                        break;
                    }
                }
            } else {
                evaluated = evaluateExpression(key, "$eq", filter[key], row);
            }
        }
        if (!evaluated) {
            break;
        }
    }
    return evaluated;
}

function evaluateExpression(column, operator, filterValue, row) {
    var columnValue = Util.resolveValue(row, column);
    if (operator == "$eq") {
        return ((columnValue === null || columnValue === undefined) && (filterValue === null || filterValue === undefined)) || Util.deepEqual(columnValue, filterValue);
    }
    return false;
}

Util.resolveValue = function (row, expression) {
    return Util.resolveDot(row, expression);
}

Util.getField = function (expression, fields) {
    if (fields && fields.length > 0) {
        var index = expression.indexOf(".");
        if (index !== -1) {
            var firstPart = expression.substr(0, index);
            var rest = expression.substr(index + 1);
            var firstPartField = getFieldDef(firstPart, fields);
            if (firstPartField) {
                return Util.getField(rest, firstPartField.fields);
            }
        } else {
            return getFieldDef(expression, fields);
        }
    }
}

Util.replaceDotToUnderscore = function (value) {
    if (value && value.indexOf(".") > 0) {
        return value.replace(/\./g, "_");
    } else {
        return value;
    }
}

function getFieldDef(expression, fields) {
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.field === expression) {
            return field;
        }
    }
}

function setPlaneData(data, newData, alias) {
    if (data && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            var record = data[i];
            newData.push(record);
            if (record[alias] && record[alias].length > 0) {
                setPlaneData(record[alias], newData, alias)
            }
//            delete record[alias];   /* we cannot delete children's data as the same rederence used in grid */
        }
    }
}

Util.populateDataKeyMapping = function (data, dataModel) {
    dataModel.keyMapping = {};
    /* used to define the mapping with _id and index of data as this is used in dataRowIndex in pl-grid */
    if (data === undefined || dataModel === undefined || !(Array.isArray(data))) {
        return;
    }
    var _id = undefined;
    for (var i = 0; i < data.length; i++) {
        _id = data[i]._id;
        if (angular.isObject(_id)) {
            _id = JSON.stringify(_id);
        }
        if (dataModel.keyMapping[_id] !== undefined) {
            continue;
            /* if _id may not be present for reporting purpose*/
//            throw new Error("Duplicate _id is not allowed but found with key " + _id);
        }
        dataModel.keyMapping[_id] = i;

    }
};

Util.getDataMappingKey = function (entity, keyMapping) {
    if (entity == undefined || entity._id == undefined || keyMapping === undefined) {
        return undefined;
    } else {
        var _id = entity._id;
        if (angular.isObject(_id)) {
            _id = JSON.stringify(_id);
        }
        return keyMapping[_id];
    }
};

Util.validateData = function (data, query, metadata, dataModel) {
    var viewFields = metadata.viewFields;
    // if viewFields are provided then the data is of the viewField is treated as main data.(manjeet 13-01-2015)
    if (viewFields && viewFields.length > 0) {
        var viewField = viewFields[0];
        if (data && data.length > 1) {
            throw new Error("data length should be equal to 1 when viewFields are defined");
        }
        if (data && data.length > 0) {
            var _id = data[0]["_id"];
            var viewFieldData = data[0][viewField];
            metadata._id = _id;
            data.splice(0, (data.length));
            for (var i = 0; i < viewFieldData.length; i++) {
                data.push(viewFieldData[i]);
            }
        }
    }
    var alias = query && query.$recursion && query.$recursion.$alias ? query.$recursion.$alias : "children";
    ensure_IdInArray(data, alias);
    if (metadata.transformRecursionToLinear) {
        var newData = [];
        setPlaneData(data, newData, alias);
        /* used to moved all children at the top level data */
        dataModel.data = newData;
    }
    if (data && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            if (!data[i]._id) {
                data[i]._id = Util.getUniqueTempId();
            }
        }
    }
    if (!metadata.dataProcessedOnServer) {
        return ViewUtility.processDataForView(data, query, metadata);
    } else {
        metadata.dataProcessedOnServer = false;
    }
}

Util.setDateWithZeroTimezone = function (dateToSet) {
    var utcDate = new Date("2014-01-10"); //to sove utc and curent time zone issue on end date like 1 sep, ...
    utcDate.setUTCFullYear(dateToSet.getFullYear());
    utcDate.setUTCMonth(dateToSet.getMonth());
    utcDate.setUTCDate(dateToSet.getDate());
    utcDate.setUTCHours(0);
    utcDate.setUTCMinutes(0);
    utcDate.setUTCSeconds(0);
    utcDate.setUTCMilliseconds(0);
    return utcDate;
}

function ensure_IdInArray(data, alias) {
    for (var i = 0; i < data.length; i++) {
        var row = data[i];
        Util.populate_IdInArray(row);
        if (row[alias] && row[alias].length > 0) {
            ensure_IdInArray(row[alias], alias);
        }
    }
}

Util.INC_VALUE = 100;

function handleDown(array, sortField, srcIndex, targetIndex) {
    var updatedFields = [];
    var targetField = array[targetIndex];
    var targetFieldSortOrder = targetField[sortField];
    targetFieldSortOrder = targetFieldSortOrder;
    var sourceField = array[srcIndex];
    if (targetIndex == (array.length - 1)) {  /*is last*/
        sourceField[sortField] = targetFieldSortOrder + Util.INC_VALUE;
        updatedFields.push(sourceField);
    } else {
        var targetNextIndex = targetIndex + 1;
        var targetNextField = array[targetNextIndex];
        if (targetNextField.__systemcolumn__) {
            sourceField[sortField] = targetFieldSortOrder + Util.INC_VALUE;
            updatedFields.push(sourceField);
        } else {
            var targetNextFieldSortOrder = targetNextField[sortField];
            targetNextFieldSortOrder = targetNextFieldSortOrder;

            if (targetFieldSortOrder < targetNextFieldSortOrder) {
                var newValue = (targetFieldSortOrder + targetNextFieldSortOrder ) / 2;
                sourceField[sortField] = newValue;
                updatedFields.push(sourceField);

            } else if (targetFieldSortOrder > targetNextFieldSortOrder) {
                throw new Error("Target next index can never be less than target index")
            } else {
                var counter = 2;    //initial 2, one for it self and one more so that division will not be reach up to next higher value
                var higherValue = undefined;
                var lastIndex = undefined;
                for (var i = targetIndex + 1; i < array.length; i++) {
                    var iteratorField = array[i];
                    if (iteratorField.__systemcolumn__) {
                        break;
                    }
                    var iteratorFieldSortOrder = iteratorField[sortField];
                    iteratorFieldSortOrder = iteratorFieldSortOrder;
                    if (iteratorFieldSortOrder > targetFieldSortOrder) {
                        higherValue = iteratorFieldSortOrder;
                        lastIndex = i - 1;
                        break;
                    } else if (iteratorFieldSortOrder < targetFieldSortOrder) {
                        throw new Error("Target next index can never be less than target index")
                    } else {
                        lastIndex = i;
                        counter += 1;
                    }
                }
                if (higherValue == undefined) {
                    higherValue = targetFieldSortOrder + Util.INC_VALUE;
                }

                var difference = (higherValue - targetFieldSortOrder) / counter;
                var cumulativeDiff = difference + targetFieldSortOrder;
                sourceField[sortField] = cumulativeDiff;
                updatedFields.push(sourceField);
                for (var i = targetIndex + 1; i <= lastIndex; i++) {
                    cumulativeDiff += difference;
                    array[i][sortField] = cumulativeDiff;
                    updatedFields.push(array[i]);
                }
            }
        }

    }
    return updatedFields;
}

function handleUp(array, sortField, srcIndex, targetIndex) {
    var updatedFields = [];
    var targetField = array[targetIndex];
    var targetFieldSortOrder = targetField[sortField];
    targetFieldSortOrder = targetFieldSortOrder;
    var sourceField = array[srcIndex];
    if (targetIndex == 0) {  /*is first*/
        sourceField[sortField] = targetFieldSortOrder - Util.INC_VALUE;
        updatedFields.push(sourceField);
    } else {
        var targetPreviousIndex = targetIndex - 1;
        var targetPreviousField = array[targetPreviousIndex];
        if (targetPreviousField.__systemcolumn__) {
            sourceField[sortField] = targetFieldSortOrder - Util.INC_VALUE;
            updatedFields.push(sourceField);
        } else {
            var targetPreviousFieldSortOrder = targetPreviousField[sortField];
            targetPreviousFieldSortOrder = targetPreviousFieldSortOrder;

            if (targetFieldSortOrder > targetPreviousFieldSortOrder) {
                var newValue = (targetFieldSortOrder + targetPreviousFieldSortOrder ) / 2;
                sourceField[sortField] = newValue;
                updatedFields.push(sourceField);

            } else if (targetFieldSortOrder < targetPreviousFieldSortOrder) {
                throw new Error("Target previous index can never be greater than target index")
            } else {
                var counter = 2;    //initial 2, one for it self and one more so that division will not be reach up to next higher value
                var lowerValue = undefined;
                var lastIndex = undefined;
                for (var i = targetIndex - 1; i >= 0; i--) {
                    var iteratorField = array[i];
                    if (iteratorField.__systemcolumn__) {
                        break;
                    }
                    var iteratorFieldSortOrder = iteratorField[sortField];
                    iteratorFieldSortOrder = iteratorFieldSortOrder;
                    if (iteratorFieldSortOrder < targetFieldSortOrder) {
                        lowerValue = iteratorFieldSortOrder;
                        lastIndex = i + 1;
                        break;
                    } else if (iteratorFieldSortOrder > targetFieldSortOrder) {
                        throw new Error("Target previous index can never be greater than target index")
                    } else {
                        counter += 1;
                        lastIndex = i;
                    }
                }
                if (lowerValue == undefined) {
                    lowerValue = targetFieldSortOrder - Util.INC_VALUE;
                }
                var difference = (targetFieldSortOrder - lowerValue) / counter;
                var cumulativeDiff = targetFieldSortOrder - difference;
                sourceField[sortField] = cumulativeDiff;
                updatedFields.push(sourceField);
                for (var i = targetIndex - 1; i >= lastIndex; i--) {
                    cumulativeDiff -= difference;
                    array[i][sortField] = cumulativeDiff;
                    updatedFields.push(array[i]);
                }
            }
        }

    }
    return updatedFields;
}

Util.changeIndex = function (array, indexField, srcIndex, targetIndex) {
    if (!array || array.length < 2) {
        return;
    }
    if (srcIndex < 0 || srcIndex >= array.length || targetIndex < 0 || targetIndex >= array.length) {
        throw new Error("Index out of bound ");
    }
    if (srcIndex === targetIndex) {
        //both are same
        return;
    }
    var direction = "";
    if (srcIndex < targetIndex) {
        var result = handleDown(array, indexField, srcIndex, targetIndex);
        return result;
    } else {
        var result = handleUp(array, indexField, srcIndex, targetIndex);
        return result;
    }
}

Util.fkQuery = function (db, query, field, value, queryOptions) {
    function getFkData(query, options) {
        if (queryOptions && queryOptions.token) {
            options = options || {};
            options.token = queryOptions.token;
        }
        if (queryOptions && queryOptions.viewId) {
            options = options || {};
            options.viewId = queryOptions.viewId;
        }
        return db.query(query, options);
    }

    function verifyFkResult(query, key, newData) {
        var options = {};
        if (queryOptions && queryOptions.token) {
            options.token = queryOptions.token;
        }
        if (queryOptions && queryOptions.viewId) {
            options.viewId = queryOptions.viewId;
        }
        options.cache = false;
        db.query(query, options).then(function (queryResult) {
            var queryRes = queryResult && queryResult.response && queryResult.response.result ? queryResult.response.result : [];
            if (JSON.stringify(newData.response.result) !== JSON.stringify(queryRes)) {
                db.removeCache(key);
            }
        });
    }

    function filterFkData(result, field, value) {
        if (result && result.response && result.response.result.length > 0) {
            var data = result.response.result;
            var length = data.length;
            var newResult = [];
            if (value) {
                var lowerCaseValue = value.toLowerCase();
                for (var i = 0; i < length; i++) {
                    if (data[i][field] && data[i][field].toLowerCase().indexOf(lowerCaseValue) == 0) {
                        newResult.push(data[i]);
                    }
                }
            } else {
                newResult = data;
            }
            return {response: {result: newResult}};
        }
    }

    function prepareFkOptions(query, value, field, queryOptions, options) {
        var Q = require("q");
        var d = Q.defer();

        if (value && value.trim().length > 0) {
            query.$filter = query.$filter || {};
            value = formatValue(value);
            var filterValue = {"$regex": "^" + value + "", "$options": "i"};
            if (queryOptions.otherDisplayFields && queryOptions.otherDisplayFields.length > 0) {
                var orFilterArray = [];
                var filter = {};
                filter[field] = filterValue;
                orFilterArray.push(filter);
                for (var i = 0; i < queryOptions.otherDisplayFields.length; i++) {
                    var otherDisplayField = queryOptions.otherDisplayFields[i];
                    var otherDisplayFilter = {};
                    otherDisplayFilter[otherDisplayField] = filterValue;
                    orFilterArray.push(otherDisplayFilter);
                }
                delete queryOptions.otherDisplayFields;
                if (query.$filter.$or) {
                    query.$filter.$and = query.$filter.$and || [];
                    query.$filter.$and.push({$or: orFilterArray});
                } else {
                    query.$filter.$or = orFilterArray;
                }

            } else {
                query.$filter[field] = filterValue;
            }
            options.cache = false;
        } else {
            options.cache = true;
        }
        query.$filter && Object.keys(query.$filter).length > 0 ? options.cache = false : options.cache = true;
        if (queryOptions && (!queryOptions.cacheEnabled)) {
            options.cache = false;
        }
        d.resolve();
        return d.promise;
    }

    function formatValue(value) {
        if (value.indexOf('(') >= 0) {
            value = value.replace('(', '\\(');
        }
        if (value.indexOf(')') >= 0) {
            value = value.replace(')', '\\)');
        }
        return value;
    }

    var key = "Query-" + JSON.stringify(query);
    var options = {};
    return prepareFkOptions(query, value, field, queryOptions, options).then(
        function () {
            var result = db.getCache(key);
            return filterFkData(result, field, value);
        }).then(function (newData) {
            if (newData && newData.response.result.length > 0) {
                verifyFkResult(query, key, newData);
                return newData;
            } else {
                return getFkData(query, options);
            }
        });
}

Util.asyncIterator = function (array, task) {
    var D = Q.defer();
    if (!array || array.length == 0) {
        D.resolve();
        return D.promise;
    }
    try {
        var p = [];
        var resolvedPromises = 0;
        var errors = [];

        var onResolve = function () {
            finalResolve();
        };

        var onReject = function (err) {
            var errDetail = {};
            errDetail.message = err.message;
            errDetail.stack = err.stack;
            errors.push(errDetail);
            finalResolve();
        };

        var finalResolve = function () {
            resolvedPromises = resolvedPromises + 1;
            if (resolvedPromises === array.length) {
                if (errors.length > 0) {
                    D.reject(new Error(errors.length > 1 ? JSON.stringify(errors) : JSON.stringify(errors[0])))
                } else {
                    D.resolve();
                }
            }
        };
        for (var i = 0; i < array.length; i++) {
            callTask(i, array[i], task).then(onResolve).fail(onReject);
        }
    } catch (e) {
        D.reject(e);
    }
    return D.promise;
};

function callTask(i, record, task) {
    var D = Q.defer();
    setTimeout(function () {
        var retValue = task(i, record);
        if (Q.isPromise(retValue)) {
            retValue.then(
                function (val) {
                    D.resolve(val);
                }).fail(function (err) {
                    D.reject(err);
                });
        } else {
            D.resolve(retValue);
        }
    }, 10);
    return D.promise;
}

Util.removeSpecialChar = function (inputString) {
    if (inputString) {
        var outputString = inputString.replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, '_').replace(/^(_)+|(_)+$/g, '');
        return outputString;
    }
}

Util.replaceDollarAndThis = function (data, changeTo) {
    if (data === true || data === false || data === null || data === undefined) {
        return data;
    }
    if (typeof data==="string" && data.indexOf("$$") < 0) {
        data = data.toString();
        changeTo = changeTo || "row.entity.";
        data = data.replace(/\$/g, changeTo).replace(/\'/g, "\"");
        data = data.replace(/this./g, changeTo).replace(/\'/g, "\"");
    }
    return data;
};

/*ModuleManager starts from here*/
(function (definition) {

    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        ModuleManager = definition();
    }

})(function () {
    "use strict";
    function ModuleManager() {
    }

    ModuleManager.triggerModules = function (event, document, collection, db, options) {
        var EventManager = require("ApplaneDB/lib/EventManager.js");
        return EventManager.triggerEvents(event, document, collection.events, collection, db, options)

    }
    return ModuleManager;

});