import{n as O,V as T}from"./js/vueComponentNormalizer.58b0a173.js";import"./js/index.4a5acef5.js";import{a as Q,s as X}from"./js/index.4776f7d5.js";import{S as j}from"./js/Standalone.8b8c1fe5.js";import{C as rr,a as er}from"./js/Overview.5413cab8.js";import{e as or}from"./js/elemLoaded.b1f6e29c.js";import{c as s}from"./js/_commonjsHelpers.10c44588.js";import"./js/client.d00863cc.js";import"./js/translations.3bc9d58c.js";import"./js/default-i18n.0e73c33c.js";import"./js/constants.9efee5f7.js";import"./js/isArrayLikeObject.5268a676.js";import"./js/portal-vue.esm.272b3133.js";import"./js/Rocket.35b77f44.js";import"./js/External.1af3387c.js";import"./js/DonutChartWithLegend.2807983e.js";import"./js/AnimatedNumber.fb66de3f.js";var ur=function(){var r=this,e=r.$createElement,o=r._self._c||e;return r.internalOptions.internal?o("div",[o("core-seo-setup",{attrs:{isWpDashboard:!0}})],1):r._e()},nr=[];const ar={mixins:[j],components:{CoreSeoSetup:rr},computed:{...Q(["internalOptions"])}},p={};var tr=O(ar,ur,nr,!1,ir,null,null,null);function ir(r){for(let e in p)this[e]=p[e]}const sr=function(){return tr.exports}();var cr=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"aioseo-app",staticStyle:{"background-color":"transparent"}},[o("core-overview",{attrs:{isWpDashboard:!0}})],1)},fr=[];const dr={components:{CoreOverview:er},mixins:[j]},b={};var lr=O(dr,cr,fr,!1,pr,null,null,null);function pr(r){for(let e in b)this[e]=b[e]}const br=function(){return lr.exports}();var xr=typeof s=="object"&&s&&s.Object===Object&&s,vr=xr,mr=vr,gr=typeof self=="object"&&self&&self.Object===Object&&self,$r=mr||gr||Function("return this")(),_r=$r,Sr=_r,yr=Sr.Symbol,l=yr;function Rr(r,e){for(var o=-1,n=r==null?0:r.length,u=Array(n);++o<n;)u[o]=e(r[o],o,r);return u}var Ar=Rr,hr=Array.isArray,Cr=hr,x=l,U=Object.prototype,Or=U.hasOwnProperty,Tr=U.toString,i=x?x.toStringTag:void 0;function jr(r){var e=Or.call(r,i),o=r[i];try{r[i]=void 0;var n=!0}catch{}var u=Tr.call(r);return n&&(e?r[i]=o:delete r[i]),u}var Ur=jr,Lr=Object.prototype,Mr=Lr.toString;function Er(r){return Mr.call(r)}var Wr=Er,v=l,kr=Ur,wr=Wr,zr="[object Null]",Ir="[object Undefined]",m=v?v.toStringTag:void 0;function Nr(r){return r==null?r===void 0?Ir:zr:m&&m in Object(r)?kr(r):wr(r)}var Zr=Nr;function Dr(r){return r!=null&&typeof r=="object"}var Fr=Dr,Pr=Zr,Gr=Fr,Hr="[object Symbol]";function Vr(r){return typeof r=="symbol"||Gr(r)&&Pr(r)==Hr}var Jr=Vr,g=l,Yr=Ar,Br=Cr,qr=Jr,Kr=1/0,$=g?g.prototype:void 0,_=$?$.toString:void 0;function L(r){if(typeof r=="string")return r;if(Br(r))return Yr(r,L)+"";if(qr(r))return _?_.call(r):"";var e=r+"";return e=="0"&&1/r==-Kr?"-0":e}var Qr=L,Xr=Qr;function re(r){return r==null?"":Xr(r)}var c=re;function ee(r,e,o){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),o=o>u?u:o,o<0&&(o+=u),u=e>o?0:o-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}var oe=ee,ue=oe;function ne(r,e,o){var n=r.length;return o=o===void 0?n:o,!e&&o>=n?r:ue(r,e,o)}var ae=ne,te="\\ud800-\\udfff",ie="\\u0300-\\u036f",se="\\ufe20-\\ufe2f",ce="\\u20d0-\\u20ff",fe=ie+se+ce,de="\\ufe0e\\ufe0f",le="\\u200d",pe=RegExp("["+le+te+fe+de+"]");function be(r){return pe.test(r)}var M=be;function xe(r){return r.split("")}var ve=xe,E="\\ud800-\\udfff",me="\\u0300-\\u036f",ge="\\ufe20-\\ufe2f",$e="\\u20d0-\\u20ff",_e=me+ge+$e,Se="\\ufe0e\\ufe0f",ye="["+E+"]",f="["+_e+"]",d="\\ud83c[\\udffb-\\udfff]",Re="(?:"+f+"|"+d+")",W="[^"+E+"]",k="(?:\\ud83c[\\udde6-\\uddff]){2}",w="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="\\u200d",z=Re+"?",I="["+Se+"]?",he="(?:"+Ae+"(?:"+[W,k,w].join("|")+")"+I+z+")*",Ce=I+z+he,Oe="(?:"+[W+f+"?",f,k,w,ye].join("|")+")",Te=RegExp(d+"(?="+d+")|"+Oe+Ce,"g");function je(r){return r.match(Te)||[]}var Ue=je,Le=ve,Me=M,Ee=Ue;function We(r){return Me(r)?Ee(r):Le(r)}var ke=We,we=ae,ze=M,Ie=ke,Ne=c;function Ze(r){return function(e){e=Ne(e);var o=ze(e)?Ie(e):void 0,n=o?o[0]:e.charAt(0),u=o?we(o,1).join(""):e.slice(1);return n[r]()+u}}var De=Ze,Fe=De,Pe=Fe("toUpperCase"),Ge=Pe,He=c,Ve=Ge;function Je(r){return Ve(He(r).toLowerCase())}var Ye=Je;function Be(r,e,o,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(o=r[++u]);++u<a;)o=e(o,r[u],u,r);return o}var qe=Be;function Ke(r){return function(e){return r==null?void 0:r[e]}}var Qe=Ke,Xe=Qe,ro={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},eo=Xe(ro),oo=eo,uo=oo,no=c,ao=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,to="\\u0300-\\u036f",io="\\ufe20-\\ufe2f",so="\\u20d0-\\u20ff",co=to+io+so,fo="["+co+"]",lo=RegExp(fo,"g");function po(r){return r=no(r),r&&r.replace(ao,uo).replace(lo,"")}var bo=po,xo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function vo(r){return r.match(xo)||[]}var mo=vo,go=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function $o(r){return go.test(r)}var _o=$o,N="\\ud800-\\udfff",So="\\u0300-\\u036f",yo="\\ufe20-\\ufe2f",Ro="\\u20d0-\\u20ff",Ao=So+yo+Ro,Z="\\u2700-\\u27bf",D="a-z\\xdf-\\xf6\\xf8-\\xff",ho="\\xac\\xb1\\xd7\\xf7",Co="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Oo="\\u2000-\\u206f",To=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",F="A-Z\\xc0-\\xd6\\xd8-\\xde",jo="\\ufe0e\\ufe0f",P=ho+Co+Oo+To,G="['\u2019]",S="["+P+"]",Uo="["+Ao+"]",H="\\d+",Lo="["+Z+"]",V="["+D+"]",J="[^"+N+P+H+Z+D+F+"]",Mo="\\ud83c[\\udffb-\\udfff]",Eo="(?:"+Uo+"|"+Mo+")",Wo="[^"+N+"]",Y="(?:\\ud83c[\\udde6-\\uddff]){2}",B="[\\ud800-\\udbff][\\udc00-\\udfff]",t="["+F+"]",ko="\\u200d",y="(?:"+V+"|"+J+")",wo="(?:"+t+"|"+J+")",R="(?:"+G+"(?:d|ll|m|re|s|t|ve))?",A="(?:"+G+"(?:D|LL|M|RE|S|T|VE))?",q=Eo+"?",K="["+jo+"]?",zo="(?:"+ko+"(?:"+[Wo,Y,B].join("|")+")"+K+q+")*",Io="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",No="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Zo=K+q+zo,Do="(?:"+[Lo,Y,B].join("|")+")"+Zo,Fo=RegExp([t+"?"+V+"+"+R+"(?="+[S,t,"$"].join("|")+")",wo+"+"+A+"(?="+[S,t+y,"$"].join("|")+")",t+"?"+y+"+"+R,t+"+"+A,No,Io,H,Do].join("|"),"g");function Po(r){return r.match(Fo)||[]}var Go=Po,Ho=mo,Vo=_o,Jo=c,Yo=Go;function Bo(r,e,o){return r=Jo(r),e=o?void 0:e,e===void 0?Vo(r)?Yo(r):Ho(r):r.match(e)||[]}var qo=Bo,Ko=qe,Qo=bo,Xo=qo,ru="['\u2019]",eu=RegExp(ru,"g");function ou(r){return function(e){return Ko(Xo(Qo(e).replace(eu,"")),r,"")}}var uu=ou,nu=Ye,au=uu,tu=au(function(r,e,o){return e=e.toLowerCase(),r+(o?nu(e):e)}),h=tu;T.config.productionTip=!1;const iu=[{id:"aioseo-seo-setup-app",component:sr},{id:"aioseo-overview-app",component:br}],C=r=>{new T({store:X,render:e=>e(r.component)}).$mount("#"+r.id)};iu.forEach(r=>{document.getElementById(r.id)?C(r):(or("#"+r.id,h(r.id)),document.addEventListener("animationstart",function(e){h(r.id)===e.animationName&&C(r)},{passive:!0}))});
