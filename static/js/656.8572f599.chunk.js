"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[656,9951],{71277:(e,t,l)=>{function n(e){return e=e||globalThis.location.hostname,m.some((t=>{var l;return null!=(null===(l=e)||void 0===l?void 0:l.match(t))}))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}l.d(t,{XO:()=>n,pJ:()=>a});const o=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,m=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,r,/^jsapps.esri.com$/,s,i]},19951:(e,t,l)=>{l.d(t,{m:()=>d,resolveWebStyleSymbol:()=>p});var n=l(51508),a=l(71277),o=l(10064),r=l(35995),s=l(7575),i=l(53283),m=l(42283),c=l(1472),u=l(38048),y=l(81854);function p(e,t,l,p){const f=e.name;return null==f?Promise.reject(new o.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,l){const n=u.wm.replaceAll(/\{SymbolName\}/gi,e),a=null!=t.portal?t.portal:s.Z.getDefault();return(0,u.EJ)(n,l).then((e=>{const t=(0,u.KV)(e.data);return(0,m.im)(t,{portal:a,url:(0,r.mN)((0,r.Yd)(n)),origin:"portal-item"})}))}(f,t,p):(0,u.n2)(e,t,p).then((e=>function(e,t,l,p,f,b){var g,h,v,w;const N=null!=(null===l||void 0===l?void 0:l.portal)?l.portal:s.Z.getDefault(),S={portal:N,url:(0,r.mN)(e.baseUrl),origin:"portal-item"},Z=d(t,e.data);if(!Z){const e="The symbol name '".concat(t,"' could not be found");return Promise.reject(new o.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let J=(0,i.f)(f(Z,p),S),D=null!==(g=null===(h=Z.thumbnail)||void 0===h?void 0:h.href)&&void 0!==g?g:null;const E=null===(v=Z.thumbnail)||void 0===v?void 0:v.imageData;(0,a.XO)()&&(J=null!==(w=(0,a.pJ)(J))&&void 0!==w?w:"",D=(0,a.pJ)(D));const U={portal:N,url:(0,r.mN)((0,r.Yd)(J)),origin:"portal-item"};return(0,u.EJ)(J,b).then((a=>{const o="cimRef"===p?(0,u.KV)(a.data):a.data,r=(0,m.im)(o,U);if(r&&(0,n.dU)(r)){if(D){const e=(0,i.f)(D,S);r.thumbnail=new y.p({url:e})}else E&&(r.thumbnail=new y.p({url:"data:image/png;base64,".concat(E)}));e.styleUrl?r.styleOrigin=new c.Z({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new c.Z({portal:l.portal,styleName:e.styleName,name:t}))}return r}))}(e,f,t,l,u.v9,p)))}function d(e,t){return t.items.find((t=>t.name===e))}},80656:(e,t,l)=>{l.d(t,{fetchCIMSymbolReference:()=>u});var n=l(71277),a=l(10064),o=l(66978),r=l(35995),s=l(7575),i=l(53283),m=l(38048),c=l(19951);async function u(e,t,l){if(!e.name)throw new a.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const n=m.wm.replaceAll(/\{SymbolName\}/gi,e.name);try{const e=await(0,m.EJ)(n,t);return(0,m.KV)(e.data)}catch(l){return(0,o.r9)(l),null}}(e,l);try{return async function(e,t,l,u){const y={portal:null!=(null===l||void 0===l?void 0:l.portal)?l.portal:s.Z.getDefault(),url:(0,r.mN)(e.baseUrl),origin:"portal-item"},p=(0,c.m)(t,e.data);if(!p)throw new a.Z("symbolstyleutils:symbol-name-not-found","The symbol name '".concat(t,"' could not be found"),{symbolName:t});let d=(0,i.f)((0,m.v9)(p,"cimRef"),y);(0,n.XO)()&&(d=(0,n.pJ)(d));try{const e=await(0,m.EJ)(d,u);return(0,m.KV)(e.data)}catch(f){return(0,o.r9)(f),null}}(await(0,m.n2)(e,t,l),e.name,t,l)}catch(u){return(0,o.r9)(u),null}}}}]);
//# sourceMappingURL=656.8572f599.chunk.js.map