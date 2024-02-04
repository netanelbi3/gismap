"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[8048,2078],{18048:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var s=r(27366),i=r(77178),o=r(93002),a=r(32718),n=r(97642),l=r(66978),c=r(94172),u=r(49861),d=(r(25243),r(63780),r(93169),r(23879)),p=r(38511),h=r(69912),y=r(31201),v=r(25265),b=r(30651),f=r(6693),m=r(6061),w=r(29598),_=r(56811),g=r(19610),I=r(98995),O=r(30219),S=r(84938),P=r(16791);const L=Symbol("WebScene");var C=r(84933),R=r(9634),x=r(41190);let A=class extends((0,f.h)((0,_.M)((0,m.q)((0,w.I)((0,P.Q)((0,S.K)((0,n.R)(b.Z)))))))){constructor(e){super(e),this.allLayers=new i.Z({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,O.a)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,l.Ds)((async(e,t,s)=>{const{save:i,saveAs:o}=await r.e(907).then(r.bind(r,80907));switch(e){case C.x.SAVE:return i(this,t);case C.x.SAVE_AS:return o(this,s,t)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,c.YP)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&L in e}),(e=>{const t="prevent-adding-tables";this.removeHandles(t),e&&(this.tables.removeAll(),this.addHandles((0,c.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),a.Z.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),t))}),c.tX),(0,c.YP)((()=>this.visible),this._onVisibilityChange.bind(this),c.Z_)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===v.s3.USER}_writeLayers(e,t,r,s){const i=[];if(!e)return i;e.forEach((e=>{const t=(0,x.Nw)(e,s.webmap?s.webmap.getLayerJSONFromResourceInfo(e):null,s);(null===t||void 0===t?void 0:t.layerType)&&i.push(t)})),t.layers=i}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,t,r){const{itemId:s,layerType:i}=t;if("GroupLayer"===i&&s)return new I.default({id:s,portal:null===r||void 0===r?void 0:r.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}set visibilityMode(e){const t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}async beforeSave(){return(0,R.Pl)(this)}load(e){const t=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:g.T},e).catch((e=>{if((0,l.r9)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(t),Promise.resolve(this)}async loadAll(){return(0,o.G)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(C.x.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(C.x.SAVE_AS,t,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error("Layer readded to Grouplayer: uid=".concat(e.uid)):this.addHandles((0,c.YP)((()=>e.visible),(t=>this._onChildVisibilityChange(e,t)),c.Z_),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((t=>{t!==e&&(t.visible=!1)}))}_enforceVisibility(e,t){if(!(0,d.vw)(this).initialized)return;const r=this.layers;let s=r.find((e=>e.visible));switch(e){case"exclusive":r.length&&!s&&(s=r.at(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":r.forEach((e=>{e.visible=t}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((t=>{t.visible=e}))}_onChildVisibilityChange(e,t){switch(this.visibilityMode){case"exclusive":t?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,s._)([(0,u.Cb)({readOnly:!0,dependsOn:[]})],A.prototype,"allLayers",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],A.prototype,"allTables",void 0),(0,s._)([(0,u.Cb)({json:{read:!0,write:!0}})],A.prototype,"blendMode",void 0),(0,s._)([(0,u.Cb)()],A.prototype,"fullExtent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],A.prototype,"sourceIsPortalItem",null),(0,s._)([(0,u.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],A.prototype,"layers",void 0),(0,s._)([(0,y.c)("layers")],A.prototype,"_writeLayers",null),(0,s._)([(0,u.Cb)({type:["GroupLayer"]})],A.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,t,r){return{enabled:"Group Layer"===(null===e||void 0===e?void 0:e.type)&&(null===r||void 0===r?void 0:r.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],A.prototype,"portalItem",null),(0,s._)([(0,p.r)("web-map","portalItem",["itemId"])],A.prototype,"readPortalItem",null),(0,s._)([(0,y.c)("web-map","portalItem",{itemId:{type:String}})],A.prototype,"writePortalItem",null),(0,s._)([(0,u.Cb)()],A.prototype,"spatialReference",void 0),(0,s._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"group"})],A.prototype,"type",void 0),(0,s._)([(0,u.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,t,r)=>{"inherited"!==e&&(t[r]=e)}}}}})],A.prototype,"visibilityMode",null),A=(0,s._)([(0,h.j)("esri.layers.GroupLayer")],A);const F=A},62078:(e,t,r)=>{r.d(t,{FO:()=>p,W7:()=>h,addOrUpdateResource:()=>n,fetchResources:()=>a,removeAllResources:()=>c,removeResource:()=>l});var s=r(76200),i=r(10064),o=r(35995);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const s=(0,o.v_)(e.itemUrl,"resources"),{start:i=1,num:a=10,sortOrder:n="asc",sortField:l="created"}=t,c={query:{start:i,num:a,sortOrder:n,sortField:l,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(s,c);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:s,resource:i}=t;return{created:new Date(r),size:s,resource:e.resourceFromPath(i)}}))}}async function n(e,t,r,s){if(!e.hasPath())throw new i.Z("portal-item-resource-".concat(t,":invalid-path"),"Resource does not have a valid path");const a=e.portalItem;await a.load(s);const n=(0,o.v_)(a.userItemUrl,"add"===t?"addResources":"updateResources"),[l,c]=u(e.path),d=new FormData;return l&&"."!==l&&d.append("resourcesPrefix",l),null!=s&&s.compress&&d.append("compress","true"),d.append("fileName",c),d.append("file",r,c),d.append("f","json"),null!==s&&void 0!==s&&s.access&&d.append("access",s.access),await a.portal.request(n,{method:"post",body:d,signal:null===s||void 0===s?void 0:s.signal}),e}async function l(e,t,r){if(!t.hasPath())throw new i.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const s=(0,o.v_)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,o.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,o.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[s,i]=u(t);return[s,i,r]}async function p(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,s.Z)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,s]=d(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+s))}},9634:(e,t,r)=>{r.d(t,{Hn:()=>l,Pl:()=>y,bx:()=>c});var s=r(14921),i=r(10064),o=r(66978),a=r(71907),n=r(62078);async function l(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const s=await u(e,t,r);await d(s,t,r)}async function c(e,t,r,s){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const o=await u(r,s,i);await e.update({data:t}),await d(o,s,i)}async function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null===t||void 0===t||!t.resources)return;const s=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),c=new Set,u=[];l.forEach((t=>{s.delete(t),e.paths.push(t)}));for(const i of t.resources.toUpdate)if(s.delete(i.resource.path),l.has(i.resource.path)||c.has(i.resource.path)){const{resource:t,content:s,finish:o,error:l}=i,c=(0,n.W7)(t,(0,a.DO)());e.paths.push(c.path),u.push(p({resource:c,content:s,compress:i.compress,finish:o,error:l},r))}else e.paths.push(i.resource.path),u.push(h(i,r)),c.add(i.resource.path);for(const i of t.resources.toAdd)e.paths.push(i.resource.path),s.has(i.resource.path)?s.delete(i.resource.path):u.push(p(i,r));if(0===u.length)return s;const d=await(0,o.UO)(u);if((0,o.k_)(r),d.length>0)throw new i.Z("save:resources","Failed to save one or more resources",{errors:d});return s}async function d(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e||!t.portalItem)return;const s=[];for(const i of e){const e=t.portalItem.resourceFromPath(i);s.push(e.portalItem.removeResource(e,r))}await(0,o.as)(s)}async function p(e,t){var r,i;const o={...null!=t?t:{},compress:e.compress},a=await(0,s.q6)(e.resource.portalItem.addResource(e.resource,await(0,n.FO)(e.content),o));if(!0!==a.ok)throw null!==(r=e.error)&&void 0!==r&&r.call(e,a.error),a.error;null===(i=e.finish)||void 0===i||i.call(e,e.resource)}async function h(e,t){var r,i;const o=await(0,s.q6)(e.resource.update(await(0,n.FO)(e.content),t));if(!0!==o.ok)throw null!==(r=e.error)&&void 0!==r&&r.call(e,o.error),o.error;null===(i=e.finish)||void 0===i||i.call(e,e.resource)}async function y(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}}}]);
//# sourceMappingURL=8048.8787f1f5.chunk.js.map