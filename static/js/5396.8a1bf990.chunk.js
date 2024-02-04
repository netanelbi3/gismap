"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[5396],{42388:(e,t,i)=>{i.d(t,{j:()=>h});var r=i(27366),s=i(7138),a=i(49861),o=(i(25243),i(63780),i(93169),i(69912));const n={visible:"visibleSublayers"};let h=class extends s.Z{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(n[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,i=null===e||void 0===e?void 0:e.sublayers,r=[],s=e=>{const{minScale:i,maxScale:a,sublayers:o,visible:n}=e;n&&(0===t||(0===i||t<=i)&&(0===a||t>=a))&&(o?o.forEach(s):r.push(e))};return null!==i&&void 0!==i&&i.forEach(s),r}toJSON(){const{layer:e,layers:t}=this,{imageFormat:i,imageTransparency:r,version:s}=e;return{format:i,request:"GetMap",service:"WMS",styles:"",transparent:r?"TRUE":"FALSE",version:s,layers:t}}};(0,r._)([(0,a.Cb)()],h.prototype,"layer",null),(0,r._)([(0,a.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,r._)([(0,a.Cb)({type:Number})],h.prototype,"scale",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],h.prototype,"version",null),(0,r._)([(0,a.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,r._)([(0,o.j)("esri.layers.support.ExportWMSImageParameters")],h)},90110:(e,t,i)=>{i.d(t,{c:()=>o});var r=i(62272),s=i(80613),a=i(64510);class o extends a.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.U.bitmap],target:()=>this.children,drawPhase:s.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},15396:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var r=i(27366),s=i(32718),a=i(92026),o=i(66978),n=i(94172),h=i(49861),p=(i(25243),i(63780),i(93169),i(69912)),l=i(53866),d=i(90110),u=i(95986),c=i(9229),m=i(67581),y=i(13107),g=i(10064),f=i(45948),b=i(42388);const x=e=>{let t=class extends e{initialize(){this.exportImageParameters=new b.j({layer:this.layer})}destroy(){this.exportImageParameters=(0,a.SC)(this.exportImageParameters)}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new g.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:i}=t;if(!i)return Promise.reject(new g.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i}));const r=this.createFetchPopupFeaturesQuery(e);if(!r)return Promise.resolve([]);const{extent:s,width:a,height:o,x:n,y:h}=r;if(!(s&&a&&o))throw new g.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:a,height:o});return t.fetchFeatureInfo(s,a,o,n,h)}};return(0,r._)([(0,h.Cb)()],t.prototype,"exportImageParameters",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,r._)([(0,h.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,h.Cb)(f.qG)],t.prototype,"timeExtent",void 0),t=(0,r._)([(0,p.j)("esri.layers.mixins.WMSLayerView")],t),t};let v=class extends(x((0,y.Z)((0,u.y)(m.Z)))){constructor(){super(...arguments),this.bitmapContainer=new d.c}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,o.D_)(e)||s.Z.getLogger(this).error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new d.c,this.container.addChild(this.bitmapContainer),this.strategy=new c.Z({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,n.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=(0,a.SC)(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:r,y:s}=e,{spatialReference:a}=t;let o,n=0,h=0;if(i.children.some((e=>{const{width:t,height:i,resolution:p,x:d,y:u}=e,c=d+p*t,m=u-p*i;return r>=d&&r<=c&&s<=u&&s>=m&&(o=new l.Z({xmin:d,ymin:m,xmax:c,ymax:u,spatialReference:a}),n=t,h=i,!0)})),!o)return null;const p=o.width/n,d=Math.round((r-o.xmin)/p),u=Math.round((o.ymax-s)/p);return{extent:o,width:n,height:h,x:d,y:u}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,r){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,...r})}};(0,r._)([(0,h.Cb)()],v.prototype,"strategy",void 0),(0,r._)([(0,h.Cb)()],v.prototype,"updating",void 0),v=(0,r._)([(0,p.j)("esri.views.2d.layers.WMSLayerView2D")],v);const _=v},9229:(e,t,i)=>{i.d(t,{Z:()=>M});var r=i(27366),s=i(7138),a=(i(93169),i(66978)),o=i(49861),n=(i(25243),i(63780),i(69912)),h=i(65156),p=i(92975),l=i(22824);const d=Math.PI/180;function u(e){return e*d}function c(e,t){const i=u(t.rotation),r=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i)),[a,o]=t.size;return e[0]=Math.round(o*s+a*r),e[1]=Math.round(o*r+a*s),e}var m=i(45956),y=i(37995),g=i(73828);const f=(0,h.Ue)(),b=[0,0],x=new g.Z(0,0,0,0),v=2048,_=2048,w=!1,C=!1,P=!1;let S=class extends s.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=P,this.imageMaxWidth=v,this.imageMaxHeight=_,this.imageRotationSupported=w,this.imageNormalizationSupported=C,this.update=(0,a.Ds)((async(e,t)=>{var i,r;if((0,a.k_)(t),!e.stationary||this.destroyed)return;const s=e.state,o=(0,p.C5)(s.spatialReference),n=this.hidpi?e.pixelRatio:1,h=this.imageNormalizationSupported&&s.worldScreenWidth&&s.worldScreenWidth<s.size[0],l=null!==(i=this.imageMaxWidth)&&void 0!==i?i:0,d=null!==(r=this.imageMaxHeight)&&void 0!==r?r:0;h?(b[0]=s.worldScreenWidth,b[1]=s.size[1]):this.imageRotationSupported?(b[0]=s.size[0],b[1]=s.size[1]):c(b,s);const u=Math.floor(b[0]*n)>l||Math.floor(b[1]*n)>d,m=o&&(s.extent.xmin<o.valid[0]||s.extent.xmax>o.valid[1]),y=!this.imageNormalizationSupported&&m,g=!u&&!y,f=this.imageRotationSupported?s.rotation:0,v=this.container.children.slice();if(g){const e=h?s.paddedViewState.center:s.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(s,b,e,s.resolution,f,n,t)}else{let e=Math.min(l,d);y&&(e=Math.min(s.worldScreenWidth,e)),this._imagePromise=this._tiledExport(s,e,n,t)}try{var _;const e=null!==(_=await this._imagePromise)&&void 0!==_?_:[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of v)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(x){this._imagePromise=null,(0,a.r9)(x)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,r,s,o){const n=await this.fetchSource(e,Math.floor(t*s),Math.floor(i*s),{rotation:r,pixelRatio:s,signal:o});(0,a.k_)(o);const h=new m.eY(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=r,h.pixelRatio=s,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.k_)(o),h}async _singleExport(e,t,i,r,s,a,o){!function(e,t,i,r){const[s,a]=t,[o,n]=r,h=.5*i;e[0]=s-h*o,e[1]=a-h*n,e[2]=s+h*o,e[3]=a+h*n}(f,i,r,t);const n=(0,h.HH)(f,e.spatialReference);return[await this._export(n,t[0],t[1],s,a,o)]}_tiledExport(e,t,i,r){const s=l.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new y.Z(s),o=a.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((s,o,p,l)=>{x.set(s,o,p,0),a.getTileBounds(f,x);const d=(0,h.HH)(f,e.spatialReference);n.push(this._export(d,t,t,0,i,r).then((e=>(0!==l&&(x.set(s,o,p,l),a.getTileBounds(f,x),e.x=f[0],e.y=f[3]),e))))})),Promise.all(n)}};(0,r._)([(0,o.Cb)()],S.prototype,"_imagePromise",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"bitmaps",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"container",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"fetchSource",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"hidpi",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"imageMaxWidth",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"imageMaxHeight",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"imageRotationSupported",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"imageNormalizationSupported",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"requestUpdate",void 0),(0,r._)([(0,o.Cb)()],S.prototype,"updating",null),S=(0,r._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],S);const M=S},13107:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(27366),s=i(32718),a=i(66978),o=i(94172),n=i(49861),h=(i(25243),i(63780),i(93169),i(69912));const p=e=>{let t=class extends e{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||s.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,r._)([(0,n.Cb)()],t.prototype,"layer",void 0),t=(0,r._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=5396.8a1bf990.chunk.js.map