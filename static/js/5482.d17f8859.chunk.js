"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[5482],{11873:(e,t,o)=>{function n(){return[1,0,0,0,1,0,0,0,1]}function r(e,t,o,n,r,i,s,l,a){return[e,t,o,n,r,i,s,l,a]}function i(e,t){return new Float64Array(e,t,9)}o.d(t,{a:()=>n,c:()=>i,f:()=>r});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:n,createView:i,fromValues:r},Symbol.toStringTag,{value:"Module"}))},48976:(e,t,o)=>{o.d(t,{a:()=>p,c:()=>h,g:()=>c,j:()=>U,k:()=>y,m:()=>d,s:()=>u});var n=o(11873),r=o(98131),i=o(71353),s=o(26277),l=o(11186),a=o(90045);function u(e,t,o){o*=.5;const n=Math.sin(o);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(o),e}function c(e,t){const o=2*Math.acos(t[3]),n=Math.sin(o/2);return n>(0,s.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),o}function d(e,t,o){const n=t[0],r=t[1],i=t[2],s=t[3],l=o[0],a=o[1],u=o[2],c=o[3];return e[0]=n*c+s*l+r*u-i*a,e[1]=r*c+s*a+i*l-n*u,e[2]=i*c+s*u+n*a-r*l,e[3]=s*c-n*l-r*a-i*u,e}function f(e,t,o,n){const r=t[0],i=t[1],l=t[2],a=t[3];let u,c,d,f,p,b=o[0],y=o[1],h=o[2],g=o[3];return c=r*b+i*y+l*h+a*g,c<0&&(c=-c,b=-b,y=-y,h=-h,g=-g),1-c>(0,s.g)()?(u=Math.acos(c),d=Math.sin(u),f=Math.sin((1-n)*u)/d,p=Math.sin(n*u)/d):(f=1-n,p=n),e[0]=f*r+p*b,e[1]=f*i+p*y,e[2]=f*l+p*h,e[3]=f*a+p*g,e}function p(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function b(e,t){const o=t[0]+t[4]+t[8];let n;if(o>0)n=Math.sqrt(o+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{let o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);const r=(o+1)%3,i=(o+2)%3;n=Math.sqrt(t[3*o+o]-t[3*r+r]-t[3*i+i]+1),e[o]=.5*n,n=.5/n,e[3]=(t[3*r+i]-t[3*i+r])*n,e[r]=(t[3*r+o]+t[3*o+r])*n,e[i]=(t[3*i+o]+t[3*o+i])*n}return e}function y(e,t,o,n){const r=.5*Math.PI/180;t*=r,o*=r,n*=r;const i=Math.sin(t),s=Math.cos(t),l=Math.sin(o),a=Math.cos(o),u=Math.sin(n),c=Math.cos(n);return e[0]=i*a*c-s*l*u,e[1]=s*l*c+i*a*u,e[2]=s*a*u-i*l*c,e[3]=s*a*c+i*l*u,e}const h=a.c,g=a.s,w=a.a,m=d,C=a.b,T=a.d,v=a.l,I=a.f,A=I,O=a.g,M=O,S=a.n,U=a.h,E=a.e;const R=(0,i.c)(),N=(0,i.f)(1,0,0),_=(0,i.f)(0,1,0);const V=(0,r.a)(),Z=(0,r.a)();const F=(0,n.a)();Object.freeze(Object.defineProperty({__proto__:null,add:w,calculateW:function(e,t){const o=t[0],n=t[1],r=t[2];return e[0]=o,e[1]=n,e[2]=r,e[3]=Math.sqrt(Math.abs(1-o*o-n*n-r*r)),e},conjugate:p,copy:h,dot:T,equals:E,exactEquals:U,fromEuler:y,fromMat3:b,getAxisAngle:c,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:function(e,t){const o=t[0],n=t[1],r=t[2],i=t[3],s=o*o+n*n+r*r+i*i,l=s?1/s:0;return e[0]=-o*l,e[1]=-n*l,e[2]=-r*l,e[3]=i*l,e},len:A,length:I,lerp:v,mul:m,multiply:d,normalize:S,random:function(e){const t=s.R,o=t(),n=t(),r=t(),i=Math.sqrt(1-o),l=Math.sqrt(o);return e[0]=i*Math.sin(2*Math.PI*n),e[1]=i*Math.cos(2*Math.PI*n),e[2]=l*Math.sin(2*Math.PI*r),e[3]=l*Math.cos(2*Math.PI*r),e},rotateX:function(e,t,o){o*=.5;const n=t[0],r=t[1],i=t[2],s=t[3],l=Math.sin(o),a=Math.cos(o);return e[0]=n*a+s*l,e[1]=r*a+i*l,e[2]=i*a-r*l,e[3]=s*a-n*l,e},rotateY:function(e,t,o){o*=.5;const n=t[0],r=t[1],i=t[2],s=t[3],l=Math.sin(o),a=Math.cos(o);return e[0]=n*a-i*l,e[1]=r*a+s*l,e[2]=i*a+n*l,e[3]=s*a-r*l,e},rotateZ:function(e,t,o){o*=.5;const n=t[0],r=t[1],i=t[2],s=t[3],l=Math.sin(o),a=Math.cos(o);return e[0]=n*a+r*l,e[1]=r*a-n*l,e[2]=i*a+s*l,e[3]=s*a-i*l,e},rotationTo:function(e,t,o){const n=(0,l.j)(t,o);return n<-.999999?((0,l.b)(R,N,t),(0,l.k)(R)<1e-6&&(0,l.b)(R,_,t),(0,l.n)(R,R),u(e,R,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,l.b)(R,t,o),e[0]=R[0],e[1]=R[1],e[2]=R[2],e[3]=1+n,S(e,e))},scale:C,set:g,setAxes:function(e,t,o,n){const r=F;return r[0]=o[0],r[3]=o[1],r[6]=o[2],r[1]=n[0],r[4]=n[1],r[7]=n[2],r[2]=-t[0],r[5]=-t[1],r[8]=-t[2],S(e,b(e,r))},setAxisAngle:u,slerp:f,sqlerp:function(e,t,o,n,r,i){return f(V,t,r,i),f(Z,o,n,i),f(e,V,Z,2*i*(1-i)),e},sqrLen:M,squaredLength:O,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,o)=>{function n(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function i(e,t){return new Float64Array(e,t,4)}o.d(t,{I:()=>s,a:()=>n,b:()=>r,c:()=>i});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:r,create:n,createView:i,fromValues:function(e,t,o,n){return[e,t,o,n]}},Symbol.toStringTag,{value:"Module"}))},8229:(e,t,o)=>{function n(){return new Float32Array(3)}function r(e,t,o){const n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}function i(){return n()}function s(){return r(1,1,1)}function l(){return r(1,0,0)}function a(){return r(0,1,0)}function u(){return r(0,0,1)}o.d(t,{c:()=>n,f:()=>r});const c=i(),d=s(),f=l(),p=a(),b=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:f,UNIT_Y:p,UNIT_Z:b,ZEROS:c,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},create:n,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:r,ones:s,unitX:l,unitY:a,unitZ:u,zeros:i},Symbol.toStringTag,{value:"Module"}))},21134:(e,t,o)=>{o.d(t,{Z:()=>w});var n,r=o(27366),i=o(84652),s=o(49861),l=o(25243),a=o(27135),u=o(69912),c=o(2632),d=o(87125),f=o(51995),p=o(46784);let b=n=class extends p.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new n({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,r._)([(0,s.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],b.prototype,"minValue",void 0),(0,r._)([(0,s.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],b.prototype,"maxValue",void 0),(0,r._)([(0,s.Cb)({type:f.Z,json:{type:[l.z8],write:!0}})],b.prototype,"color",void 0),b=n=(0,r._)([(0,u.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],b);const y=b;var h;let g=h=class extends c.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,r._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],g.prototype,"type",void 0),(0,r._)([(0,s.Cb)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,r._)([(0,s.Cb)({type:d.I,json:{write:!0}})],g.prototype,"legendOptions",void 0),(0,r._)([(0,s.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,r._)([(0,s.Cb)({type:[y],json:{write:!0}})],g.prototype,"colorClassBreakInfos",void 0),g=h=(0,r._)([(0,u.j)("esri.renderers.PointCloudClassBreaksRenderer")],g);const w=g},2632:(e,t,o)=>{o.d(t,{Z:()=>A});var n,r=o(27366),i=o(43404),s=o(46784),l=o(84652),a=o(49861),u=(o(25243),o(69912));o(63780),o(93169);let c=n=class extends s.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,r._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),(0,r._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=n=(0,r._)([(0,u.j)("esri.renderers.support.pointCloud.ColorModulation")],c);const d=c,f=new i.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends s.wq{};(0,r._)([(0,a.Cb)({type:f.apiValues,readOnly:!0,nonNullable:!0,json:{type:f.jsonValues,read:!1,write:f.write}})],p.prototype,"type",void 0),p=(0,r._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);const b=p;var y,h=o(27135);let g=y=class extends b{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,r._)([(0,h.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],g.prototype,"type",void 0),(0,r._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"size",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"useRealWorldSymbolSizes",void 0),g=y=(0,r._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],g);const w=g;var m;let C=m=class extends b{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new m({scaleFactor:this.scaleFactor})}};(0,r._)([(0,h.J)({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),(0,r._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0),C=m=(0,r._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C);const T={key:"type",base:b,typeMap:{"fixed-size":w,splat:C}},v=(0,i.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let I=class extends s.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.d9)(this.pointSizeAlgorithm),colorModulation:(0,l.d9)(this.colorModulation),pointsPerInch:(0,l.d9)(this.pointsPerInch)}}};(0,r._)([(0,a.Cb)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],I.prototype,"type",void 0),(0,r._)([(0,a.Cb)({types:T,json:{write:!0}})],I.prototype,"pointSizeAlgorithm",void 0),(0,r._)([(0,a.Cb)({type:d,json:{write:!0}})],I.prototype,"colorModulation",void 0),(0,r._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],I.prototype,"pointsPerInch",void 0),I=(0,r._)([(0,u.j)("esri.renderers.PointCloudRenderer")],I),(I||(I={})).fieldTransformTypeKebabDict=new i.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const A=I},89431:(e,t,o)=>{o.d(t,{Z:()=>p});var n,r=o(27366),i=o(84652),s=o(49861),l=(o(25243),o(27135)),a=o(69912),u=o(2632),c=o(87125),d=o(57203);let f=n=class extends u.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new n({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,r._)([(0,l.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],f.prototype,"type",void 0),(0,r._)([(0,s.Cb)({json:{write:!0},type:String})],f.prototype,"field",void 0),(0,r._)([(0,s.Cb)({type:c.I,json:{write:!0}})],f.prototype,"legendOptions",void 0),(0,r._)([(0,s.Cb)({type:u.Z.fieldTransformTypeKebabDict.apiValues,json:{type:u.Z.fieldTransformTypeKebabDict.jsonValues,read:u.Z.fieldTransformTypeKebabDict.read,write:u.Z.fieldTransformTypeKebabDict.write}})],f.prototype,"fieldTransformType",void 0),(0,r._)([(0,s.Cb)({type:[d.Z],json:{write:!0}})],f.prototype,"stops",void 0),f=n=(0,r._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],f);const p=f},87005:(e,t,o)=>{o.d(t,{Z:()=>w});var n,r=o(27366),i=o(84652),s=o(49861),l=o(25243),a=o(27135),u=o(69912),c=o(2632),d=o(87125),f=o(51995),p=o(46784);let b=n=class extends p.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new n({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,r._)([(0,s.Cb)({type:[String],json:{write:!0}})],b.prototype,"values",void 0),(0,r._)([(0,s.Cb)({type:f.Z,json:{type:[l.z8],write:!0}})],b.prototype,"color",void 0),b=n=(0,r._)([(0,u.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],b);const y=b;var h;let g=h=class extends c.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,r._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],g.prototype,"type",void 0),(0,r._)([(0,s.Cb)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,r._)([(0,s.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,r._)([(0,s.Cb)({type:[y],json:{write:!0}})],g.prototype,"colorUniqueValueInfos",void 0),(0,r._)([(0,s.Cb)({type:d.I,json:{write:!0}})],g.prototype,"legendOptions",void 0),g=h=(0,r._)([(0,u.j)("esri.renderers.PointCloudUniqueValueRenderer")],g);const w=g},35482:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var n=o(63780),r=o(18722),i=o(48976),s=o(98131),l=o(11186),a=o(8229),u=o(78952),c=o(50628),d=(o(93169),o(21134)),f=o(89431),p=o(87005),b=o(28278),y=o(2821);function h(e,t,o){return null!==e&&void 0!==e&&e.attributeInfo.useElevation?t?function(e,t){const o=new Float64Array(t);for(let n=0;n<t;n++)o[n]=e[3*n+2];return o}(t,o):null:null!==e&&void 0!==e&&e.attributeInfo.storageInfo?(0,b.qM)(e.attributeInfo.storageInfo,e.buffer,o):null}function g(e,t,o,n,r){const i=e.length/3;let s=0;for(let l=0;l<i;l++){let i=!0;for(let e=0;e<n.length&&i;e++){const{filterJSON:t}=n[e],o=r[e].values[l];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=m(t.requiredSetBits),n=m(t.requiredClearBits);(o&e)===e&&0==(o&n)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&o,n=o>>>4&15,r=n>1,s=1===e,l=e===n;let a=!1;for(const o of t.includedReturns)if("last"===o&&l||"firstOfMany"===o&&s&&r||"lastOfMany"===o&&l&&r||"single"===o&&!r){a=!0;break}a||(i=!1);break}}}i&&(o[s]=l,e[3*s]=e[3*l],e[3*s+1]=e[3*l+1],e[3*s+2]=e[3*l+2],t[3*s]=t[3*l],t[3*s+1]=t[3*l+1],t[3*s+2]=t[3*l+2],s++)}return s}function w(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function m(e){let t=0;for(const o of e||[])t|=1<<o;return t}class C{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&o.push(t.pointIdFilterMap.buffer);for(const n of t.attributes)"buffer"in n.values&&(0,r.eP)(n.values.buffer)&&n.values.buffer!==t.rgb.buffer&&o.push(n.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const o=(0,b.W7)(t,e);if(null==o.vertexAttributes.position)return;const n=(0,b.I_)(t,o.vertexAttributes.position),r=o.header.fields,i=[r.offsetX,r.offsetY,r.offsetZ],s=[r.scaleX,r.scaleY,r.scaleZ],l=n.length/3,a=new Float64Array(3*l);for(let e=0;e<l;e++)a[3*e]=n[3*e]*s[0]+i[0],a[3*e+1]=n[3*e+1]*s[1]+i[1],a[3*e+2]=n[3*e+2]*s[2]+i[2];return a}if("lepcc-xyz"===e.encoding)return(0,y.Gi)(t).result}(e.schema,e.geometryBuffer);let o=t.length/3,r=null;const i=new Array,s=h(e.primaryAttributeData,t,o);null!=e.primaryAttributeData&&s&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:s});const l=h(e.modulationAttributeData,t,o);null!=e.modulationAttributeData&&l&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:l});let a=function(e,t,o,n){var r;const{rendererJSON:i,isRGBRenderer:s}=e;let l=null,a=null;if(t&&s)l=t;else if(t&&"pointCloudUniqueValueRenderer"===(null===i||void 0===i?void 0:i.type)){a=p.Z.fromJSON(i);const e=a.colorUniqueValueInfos;l=new Uint8Array(3*n);const o=w(a.fieldTransformType);for(let r=0;r<n;r++){const n=(o?o(t[r]):t[r])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(n)){l[3*r]=e[t].color.r,l[3*r+1]=e[t].color.g,l[3*r+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===(null===i||void 0===i?void 0:i.type)){a=f.Z.fromJSON(i);const e=a.stops;l=new Uint8Array(3*n);const o=w(a.fieldTransformType);for(let r=0;r<n;r++){const n=o?o(t[r]):t[r],i=e.length-1;if(n<e[0].value)l[3*r]=e[0].color.r,l[3*r+1]=e[0].color.g,l[3*r+2]=e[0].color.b;else if(n>=e[i].value)l[3*r]=e[i].color.r,l[3*r+1]=e[i].color.g,l[3*r+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(n<e[t].value){const o=(n-e[t-1].value)/(e[t].value-e[t-1].value);l[3*r]=e[t].color.r*o+e[t-1].color.r*(1-o),l[3*r+1]=e[t].color.g*o+e[t-1].color.g*(1-o),l[3*r+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===(null===i||void 0===i?void 0:i.type)){a=d.Z.fromJSON(i);const e=a.colorClassBreakInfos;l=new Uint8Array(3*n);const o=w(a.fieldTransformType);for(let r=0;r<n;r++){const n=o?o(t[r]):t[r];for(let t=0;t<e.length;t++)if(n>=e[t].minValue&&n<=e[t].maxValue){l[3*r]=e[t].color.r,l[3*r+1]=e[t].color.g,l[3*r+2]=e[t].color.b;break}}}else l=new Uint8Array(3*n).fill(255);if(o&&null!==(r=a)&&void 0!==r&&r.colorModulation){const e=a.colorModulation.minValue,t=a.colorModulation.maxValue,r=.3;for(let i=0;i<n;i++){const n=o[i],s=n>=t?1:n<=e?r:r+(1-r)*(n-e)/(t-e);l[3*i]=s*l[3*i],l[3*i+1]=s*l[3*i+1],l[3*i+2]=s*l[3*i+2]}}return l}(e.rendererInfo,s,l,o);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const s=e.filterAttributesData.filter(n.pC).map((e=>{const n=h(e,t,o),r={attributeInfo:e.attributeInfo,values:n};return i.push(r),r}));r=new Uint32Array(o),o=g(t,a,r,e.filterInfo,s)}for(const n of e.userAttributesData){const e=h(n,t,o);i.push({attributeInfo:n.attributeInfo,values:e})}3*o<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const c=this._transformCoordinates(t,o,e.obb,u.Z.fromJSON(e.inSR),u.Z.fromJSON(e.outSR));return{obb:e.obb,points:c,rgb:a,attributes:i,pointIdFilterMap:r}}_transformCoordinates(e,t,o,n,r){if(!(0,c.projectBuffer)(e,n,0,e,r,0,t))throw new Error("Can't reproject");const s=(0,a.f)(o.center[0],o.center[1],o.center[2]),u=(0,a.c)(),d=(0,a.c)();(0,i.a)(T,o.quaternion);const f=new Float32Array(3*t);for(let i=0;i<t;i++)u[0]=e[3*i]-s[0],u[1]=e[3*i+1]-s[1],u[2]=e[3*i+2]-s[2],(0,l.v)(d,u,T),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(d[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(d[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(d[2])),f[3*i]=u[0],f[3*i+1]=u[1],f[3*i+2]=u[2];return f}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let n=0;n<t;n++)e[3*n+2]+=o}}const T=(0,s.a)();function v(){return new C}},28278:(e,t,o)=>{o.d(t,{I_:()=>f,W7:()=>y,qM:()=>g});var n=o(10064),r=o(84652),i=o(32718),s=o(2821),l=o(4760);const a=i.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,t,o){let r="",i=0;for(;i<o;){const s=e[t+i];if(s<128)r+=String.fromCharCode(s),i++;else if(s>=192&&s<224){if(i+1>=o)throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const l=(31&s)<<6|63&e[t+i+1];r+=String.fromCharCode(l),i+=2}else if(s>=224&&s<240){if(i+2>=o)throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(15&s)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];r+=String.fromCharCode(l),i+=3}else{if(!(s>=240&&s<248))throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=o)throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(7&s)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(l>=65536){const e=55296+(l-65536>>10),t=56320+(1023&l);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(l);i+=4}}}return r}function c(e,t){const o={byteOffset:0,byteCount:0,fields:Object.create(null)};let n=0;for(let r=0;r<t.length;r++){const i=t[r],s=i.valueType||i.type,l=m[s];o.fields[i.property]=l(e,n),n+=w[s].BYTES_PER_ELEMENT}return o.byteCount=n,o}function d(e,t,o){const r=[];let i,s,l=0;for(s=0;s<e;s+=1){if(i=t[s],i>0){if(r.push(u(o,l,i-1)),0!==o[l+i-1])throw new n.Z("string-array-error","Invalid string array: missing null termination.")}else r.push(null);l+=i}return r}function f(e,t){return new(0,w[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function p(e,t,o){const i=null!=t.header?c(e,t.header):{byteOffset:0,byteCount:0,fields:{count:o}},s={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let l=i.byteCount;for(let c=0;c<t.ordering.length;c++){var a,u;const e=t.ordering[c],o=(0,r.d9)(t[e]);if(o.count=null!==(a=i.fields.count)&&void 0!==a?a:0,"String"===o.valueType){if(o.byteOffset=l,o.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==o.encoding)throw new n.Z("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding});if(o.timeEncoding&&"ECMA_ISO8601"!==o.timeEncoding)throw new n.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:o.timeEncoding})}else{if(!C(o.valueType))throw new n.Z("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=T(o.valueType);l+=l%e!=0?e-l%e:0,o.byteOffset=l,o.byteCount=e*o.valuesPerElement*o.count}}l+=null!==(u=o.byteCount)&&void 0!==u?u:0,s.entries[e]=o}return s.byteCount=l-s.byteOffset,s}function b(e,t,o){if(t!==e&&a.error("Invalid ".concat(o," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new n.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function y(e,t){const o=c(e,t&&t.header);let n=o.byteCount;const r={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},i=o.fields,s=null!=i.vertexCount?i.vertexCount:i.count;for(const u of t.ordering){if(!t.vertexAttributes[u])continue;const e={...t.vertexAttributes[u],byteOffset:n,count:s},o=h[u]||"_"+u;r.vertexAttributes[o]=e,n+=T(e.valueType)*e.valuesPerElement*s}const l=i.faceCount;if(t.faces&&l){r.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const o={...t.faces[e],byteOffset:n,count:l};r.faces[e]=o,n+=T(o.valueType)*o.valuesPerElement*l}}const a=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&a){r.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const o={...t.featureAttributes[e],byteOffset:n,count:a};r.featureAttributes[e]=o,n+=("UInt64"===o.valueType?8:T(o.valueType))*o.valuesPerElement*a}}return b(n,e.byteLength,"geometry"),r.byteCount=n-r.byteOffset,r}const h={position:l.T.POSITION,normal:l.T.NORMAL,color:l.T.COLOR,uv0:l.T.UV0,region:l.T.UVREGION};function g(e,t,o){if("lepcc-rgb"===e.encoding)return(0,s.IT)(t);if("lepcc-intensity"===e.encoding)return(0,s.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new n.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(a.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(a.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=p(t,e,o);b(r.byteOffset+r.byteCount,t.byteLength,"attribute");const i=r.entries.attributeValues||r.entries.objectIds;if(i){if("String"===i.valueType){const e=r.entries.attributeByteCounts,o=f(t,e),n=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,o){return d(e,t,o).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(e.count,o,n):d(e.count,o,n)}return f(t,i)}throw new n.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const w={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},m={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function C(e){return w.hasOwnProperty(e)}function T(e){return C(e)?w[e].BYTES_PER_ELEMENT:0}},2821:(e,t,o)=>{o.d(t,{Gi:()=>u,IT:()=>b,ti:()=>g});var n=o(10064);const r=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function s(e,t,o){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,o+i.identifierOffset,i.identifierLength)),version:t.getUint16(o+i.versionOffset,r),checksum:t.getUint32(o+i.checksumOffset,r)}}const l={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function a(e,t){return{sizeLo:e.getUint32(t+l.sizeLo,r),sizeHi:e.getUint32(t+l.sizeHi,r),minX:e.getFloat64(t+l.minX,r),minY:e.getFloat64(t+l.minY,r),minZ:e.getFloat64(t+l.minZ,r),maxX:e.getFloat64(t+l.maxX,r),maxY:e.getFloat64(t+l.maxY,r),maxZ:e.getFloat64(t+l.maxZ,r),errorX:e.getFloat64(t+l.errorX,r),errorY:e.getFloat64(t+l.errorY,r),errorZ:e.getFloat64(t+l.errorZ,r),count:e.getUint32(t+l.count,r),reserved:e.getUint32(t+l.reserved,r)}}function u(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:u}=s(e,t,o);if(o+=i.byteCount,"LEPCC     "!==r)throw new n.Z("lepcc-decode-error","Bad identifier");if(u>1)throw new n.Z("lepcc-decode-error","Unknown version");const d=a(t,o);if(o+=l.byteCount,d.sizeHi*2**32+d.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const f=new Float64Array(3*d.count),p=[],b=[],y=[],h=[];if(o=c(e,o,p),o=c(e,o,b),o=c(e,o,y),o=c(e,o,h),o!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad length");let g=0,w=0;for(let n=0;n<p.length;n++){w+=p[n];let e=0;for(let t=0;t<b[n];t++){e+=y[g];const t=h[g];f[3*g]=Math.min(d.maxX,d.minX+2*d.errorX*e),f[3*g+1]=Math.min(d.maxY,d.minY+2*d.errorY*w),f[3*g+2]=Math.min(d.maxZ,d.minZ+2*d.errorZ*t),g++}}return{errorX:d.errorX,errorY:d.errorY,errorZ:d.errorZ,result:f}}function c(e,t,o){const n=[];t=d(e,t,n);const r=[];for(let i=0;i<n.length;i++){r.length=0,t=d(e,t,r);for(let e=0;e<r.length;e++)o.push(r[e]+n[i])}return t}function d(e,t,o){const i=new DataView(e,t),s=i.getUint8(0),l=31&s,a=!!(32&s),u=(192&s)>>6;let c=0;if(0===u)c=i.getUint32(1,r),t+=5;else if(1===u)c=i.getUint16(1,r),t+=3;else{if(2!==u)throw new n.Z("lepcc-decode-error","Bad count type");c=i.getUint8(1),t+=2}if(a)throw new n.Z("lepcc-decode-error","LUT not implemented");const d=Math.ceil(c*l/8),f=new Uint8Array(e,t,d);let p=0,b=0,y=0;const h=-1>>>32-l;for(let n=0;n<c;n++){for(;b<l;)p|=f[y]<<b,b+=8,y+=1;o[n]=p&h,p>>>=l,b-=l,b+l>32&&(p|=f[y-1]>>8-b)}return t+y}const f={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function p(e,t){return{sizeLo:e.getUint32(t+f.sizeLo,r),sizeHi:e.getUint32(t+f.sizeHi,r),count:e.getUint32(t+f.count,r),colorMapCount:e.getUint16(t+f.colorMapCount,r),lookupMethod:e.getUint8(t+f.lookupMethod),compressionMethod:e.getUint8(t+f.compressionMethod)}}function b(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:l}=s(e,t,o);if(o+=i.byteCount,"ClusterRGB"!==r)throw new n.Z("lepcc-decode-error","Bad identifier");if(l>1)throw new n.Z("lepcc-decode-error","Unknown version");const a=p(t,o);if(o+=f.byteCount,a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");if((2===a.lookupMethod||1===a.lookupMethod)&&0===a.compressionMethod){if(3*a.colorMapCount+a.count+o!==e.byteLength||a.colorMapCount>256)throw new n.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,o,3*a.colorMapCount),r=new Uint8Array(e,o+3*a.colorMapCount,a.count),i=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++){const o=r[e];i[3*e]=t[3*o],i[3*e+1]=t[3*o+1],i[3*e+2]=t[3*o+2]}return i}if(0===a.lookupMethod&&0===a.compressionMethod){if(3*a.count+o!==e.byteLength||0!==a.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,o).slice()}if(a.lookupMethod<=2&&1===a.compressionMethod){if(o+3!==e.byteLength||1!==a.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");const r=t.getUint8(o),i=t.getUint8(o+1),s=t.getUint8(o+2),l=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++)l[3*e]=r,l[3*e+1]=i,l[3*e+2]=s;return l}throw new n.Z("lepcc-decode-error","Bad method "+a.lookupMethod+","+a.compressionMethod)}const y={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,t){return{sizeLo:e.getUint32(t+y.sizeLo,r),sizeHi:e.getUint32(t+y.sizeHi,r),count:e.getUint32(t+y.count,r),scaleFactor:e.getUint16(t+y.scaleFactor,r),bitsPerPoint:e.getUint8(t+y.bitsPerPoint),reserved:e.getUint8(t+y.reserved)}}function g(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:l}=s(e,t,o);if(o+=i.byteCount,"Intensity "!==r)throw new n.Z("lepcc-decode-error","Bad identifier");if(l>1)throw new n.Z("lepcc-decode-error","Unknown version");const a=h(t,o);if(o+=y.byteCount,a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const u=new Uint16Array(a.count);if(8===a.bitsPerPoint){if(a.count+o!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,o,a.count);for(let e=0;e<a.count;e++)u[e]=t[e]*a.scaleFactor}else if(16===a.bitsPerPoint){if(2*a.count+o!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,o,a.count);for(let e=0;e<a.count;e++)u[e]=t[e]*a.scaleFactor}else{const t=[];if(d(e,o,t)!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(let e=0;e<a.count;e++)u[e]=t[e]*a.scaleFactor}return u}},4760:(e,t,o)=>{var n;o.d(t,{T:()=>n}),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(n||(n={}))}}]);
//# sourceMappingURL=5482.d17f8859.chunk.js.map