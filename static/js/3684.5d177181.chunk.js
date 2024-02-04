"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[3684],{82582:(e,t,i)=>{i.d(t,{dp:()=>o,o2:()=>l,yZ:()=>a});var s=i(16889),r=i(68860);const n=96;function a(e,t){const i=t||e.extent,s=e.width,a=(0,r.c9)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*a*r.hd*n:0}function o(e,t){return e/((0,r.c9)(t)*r.hd*n)}function l(e,t,i){return function(e,t){return 0===t||(0,s.W8)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.W8)(e,t)||e>t}(e,i)}},39383:(e,t,i)=>{i.d(t,{T:()=>f});var s=i(66978),r=i(43e3),n=i(26885),a=i(55067),o=i(17842),l=i(68860),h=i(49229),d=i(84319),p=i(10435),u=i(98029),c=i(90316);function v(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}class y{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=p.v}getSizeVVFieldStops(e){var t;const i=this._vvSizeFieldStops;if(i)switch(i.type){case"static":return i;case"level-dependent":return null!==(t=i.levels[e])&&void 0!==t?t:(()=>{let t=1/0,s=0;for(const o in i.levels){const i=parseFloat(o),r=Math.abs(e-i);r<t&&(t=r,s=i)}if(t===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-s)/2),n=i.levels[s],a=new Float32Array(n.values);return a[2]*=r,a[3]*=r,{sizes:n.sizes,values:a}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=(0,u.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,c.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){this.outsideLabelsVisible=null!=e&&e.excludedLabelsVisible}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,r;if((0,d.$K)(e.minSize)&&(0,d.$K)(e.maxSize))if((0,d.hj)(e.minSize)&&(0,d.hj)(e.maxSize))i=(0,o.F2)(e.minSize),r=(0,o.F2)(e.maxSize);else{const s=t.scale;i=(0,o.F2)(v(s,e.minSize.stops)),r=(0,o.F2)(v(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,o.F2)(v(t.scale,s.scaleStops.stops))),s.unitValue){const e=(0,l.c9)(t.spatialReference)/h.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=e.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const n=e.opacity;n&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const a=e.rotation;a&&(i.vvRotationEnabled=!0,i.vvRotationType=a.type)}}class f extends a.Z{constructor(e){super(e),this._rendererInfo=new y,this._materialItemsRequestQueue=new r.Z,this.attributeView=new n.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const i=(0,s.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,t){let{items:i,abortOptions:s,resolver:r}=t;const{painter:n,pixelRatio:a}=e,o=i.map((e=>n.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,s)));Promise.all(o).then((e=>{if(!this.stage)return void r.reject();const t=e.map(((e,t)=>({id:i[t].id,mosaicItem:e})));r.resolve(t)}),r.reject)}}},55067:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(93169),r=i(80613),n=i(64510),a=i(52424),o=i(40655);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends n.Z{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},53684:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var s=i(27366),r=i(44055),n=i(40281),a=i(94172),o=(i(32718),i(25243),i(63780),i(93169),i(10064),i(69912)),l=i(34999),h=i(9014),d=i(49818),p=i(95986),u=i(75391),c=i(77318),v=i(67581);let y=class extends((0,p.y)(v.Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const i=this.layer;return this.graphicsViews.reverse().flatMap((t=>{const s=this._popupTemplates.get(t),r=t.hitTest(e);for(const e of r)e.layer=i,e.sourceLayer=i,e.popupTemplate=s;return r})).map((t=>({type:"graphic",graphic:t,layer:i,mapPoint:e})))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.addAttachHandles([(0,a.YP)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.featureCollections}),(e=>{this._clear();for(const{popupInfo:t,featureSet:i,layerDefinition:s}of e){const e=d.Z.fromJSON(i),a=new n.Z(e.features),o=s.drawingInfo,l=t?r.Z.fromJSON(t):null,p=(0,h.i)(o.renderer),v=new c.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:a,renderer:p,container:new u.Z(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=v,this._popupTemplates.set(v,l),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=p.symbol):this.layer.lineSymbol=p.symbol:this.layer.polygonSymbol=p.symbol,this.graphicsViews.push(v),this.container.addChild(v.container)}}),a.nn),(0,a.YP)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.polygonSymbol}),(e=>{this._graphicsViewMap.polygon.renderer=new l.Z({symbol:e})}),a.nn),(0,a.YP)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.lineSymbol}),(e=>{this._graphicsViewMap.polyline.renderer=new l.Z({symbol:e})}),a.nn),(0,a.YP)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.pointSymbol}),(e=>{this._graphicsViewMap.point.renderer=new l.Z({symbol:e})}),a.nn)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=(0,s._)([(0,o.j)("esri.views.2d.layers.GeoRSSLayerView2D")],y);const f=y},95986:(e,t,i)=>{i.d(t,{y:()=>A});var s=i(27366),r=i(40281),n=i(60354),a=i(10064),o=i(94172),l=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),d=i(82582),p=i(33624),u=i(64634),c=i(46784);let v=class extends c.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({readOnly:!0})],v.prototype,"version",null),v=(0,s._)([(0,h.j)("esri.views.layers.support.ClipArea")],v);const y=v;var f;let g=f=class extends y{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=f=(0,s._)([(0,h.j)("esri.views.layers.support.ClipRect")],g);const m=g;i(59486);var _,b=i(32238),w=i(77981),S=i(53866),R=i(80885);const C={base:b.Z,key:"type",typeMap:{extent:S.Z,polygon:R.Z}};let V=_=class extends y{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new _({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,l.Cb)({types:C,json:{read:w.im,write:!0}})],V.prototype,"geometry",void 0),V=_=(0,s._)([(0,h.j)("esri.views.layers.support.Geometry")],V);const x=V;let P=class extends y{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),P=(0,s._)([(0,h.j)("esri.views.layers.support.Path")],P);const I=P,M=r.Z.ofType({key:"type",base:null,typeMap:{rect:m,path:I,geometry:x}}),A=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new M,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),o.tX)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,d.o2)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:M,set(e){const t=(0,n.Z)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updating",null),(0,s._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,l.Cb)({type:u.Z})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},82022:(e,t,i)=>{i.d(t,{Z:()=>m});var s=i(92026),r=i(39383),n=i(22753),a=i(23588),o=i(15245),l=i(8229),h=i(91340),d=i(87422),p=i(84319),u=i(44070),c=i(8548),v=i(45412);const y=Math.PI/180;class f extends d.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,a.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.M2)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(c.zi.ONE,c.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(c.MX.LINES,8*i.length,c.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,a.c)()}}_createShaderProgram(e){if(this._program)return;this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",g().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:a,rotation:d,viewpoint:p}=t,u=y*d,{x:c,y:v}=p.targetGeometry,f=(0,h.or)(c,t.spatialReference);this._localOrigin.x=f,this._localOrigin.y=v;const g=a*s[0],m=a*s[1],_=r*g,b=r*m,w=(0,n.g)(this._dvsMat3);(0,n.m)(w,w,i),(0,n.h)(w,w,(0,o.f)(g/2,m/2)),(0,n.c)(w,w,(0,l.f)(s[0]/_,-m/b,1)),(0,n.r)(w,w,-u)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,n=new Float32Array(r),a=new Uint32Array(8*t.length);let o=0,l=0;for(const h of t)h&&(n[2*o]=h[0]-i,n[2*o+1]=h[1]-s,n[2*o+2]=h[0]-i,n[2*o+3]=h[3]-s,n[2*o+4]=h[2]-i,n[2*o+5]=h[3]-s,n[2*o+6]=h[2]-i,n[2*o+7]=h[1]-s,a[l]=o+0,a[l+1]=o+3,a[l+2]=o+3,a[l+3]=o+2,a[l+4]=o+2,a[l+5]=o+1,a[l+6]=o+1,a[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=u.f.createVertex(e,c.l1.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=u.f.createIndex(e,c.l1.DYNAMIC_DRAW,a),!this._vao){const t=g();this._vao=new v.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const g=()=>(0,p.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:c.g.FLOAT}]});let m=class extends r.T{constructor(e){super(e),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new f(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(c.wb.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},75391:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(80613),r=i(82022);class n extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},67581:(e,t,i)=>{i.d(t,{Z:()=>v});var s=i(27366),r=i(7138),n=i(91505),a=i(79056),o=i(32718),l=i(92026),h=i(67426),d=i(49861),p=(i(25243),i(63780),i(93169),i(69912)),u=i(46634);let c=class extends((0,a.IG)((0,h.v)(n.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],c.prototype,"visible",null),(0,s._)([(0,d.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],c);const v=c}}]);
//# sourceMappingURL=3684.5d177181.chunk.js.map