"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[1979],{61156:(e,n,t)=>{t.d(n,{A:()=>D,B:()=>T,C:()=>b,D:()=>A,E:()=>L,F:()=>I,G:()=>V,H:()=>_,I:()=>j,J:()=>k,K:()=>C,L:()=>H,M:()=>O,N:()=>q,a:()=>c,b:()=>u,c:()=>s,d:()=>a,e:()=>o,f:()=>l,g:()=>B,h:()=>f,i:()=>h,j:()=>g,k:()=>N,l:()=>v,m:()=>M,n:()=>y,o:()=>G,p:()=>w,q:()=>P,r:()=>m,s:()=>x,t:()=>p,u:()=>R,v:()=>Z,w:()=>d,x:()=>z,y:()=>E,z:()=>S});var i=t(99058),r=t(40237);function o(e){return i.G.extendedSpatialReferenceInfo(e)}function s(e,n,t){return i.G.clip(r.N,e,n,t)}function c(e,n,t){return i.G.cut(r.N,e,n,t)}function u(e,n,t){return i.G.contains(r.N,e,n,t)}function a(e,n,t){return i.G.crosses(r.N,e,n,t)}function l(e,n,t,o){return i.G.distance(r.N,e,n,t,o)}function f(e,n,t){return i.G.equals(r.N,e,n,t)}function h(e,n,t){return i.G.intersects(r.N,e,n,t)}function p(e,n,t){return i.G.touches(r.N,e,n,t)}function d(e,n,t){return i.G.within(r.N,e,n,t)}function g(e,n,t){return i.G.disjoint(r.N,e,n,t)}function G(e,n,t){return i.G.overlaps(r.N,e,n,t)}function m(e,n,t,o){return i.G.relate(r.N,e,n,t,o)}function N(e,n){return i.G.isSimple(r.N,e,n)}function x(e,n){return i.G.simplify(r.N,e,n)}function v(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.G.convexHull(r.N,e,n,t)}function M(e,n,t){return i.G.difference(r.N,e,n,t)}function y(e,n,t){return i.G.symmetricDifference(r.N,e,n,t)}function w(e,n,t){return i.G.intersect(r.N,e,n,t)}function R(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return i.G.union(r.N,e,n,t)}function P(e,n,t,o,s,c,u){return i.G.offset(r.N,e,n,t,o,s,c,u)}function Z(e,n,t,o){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return i.G.buffer(r.N,e,n,t,o,s)}function z(e,n,t,o,s,c,u){return i.G.geodesicBuffer(r.N,e,n,t,o,s,c,u)}function E(e,n,t){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return i.G.nearestCoordinate(r.N,e,n,t,o)}function S(e,n,t){return i.G.nearestVertex(r.N,e,n,t)}function D(e,n,t,o,s){return i.G.nearestVertices(r.N,e,n,t,o,s)}function T(e,n,t,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const o=i.G.rotate(n,t,r);return o.spatialReference=e,o}function b(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(n,t);return r.spatialReference=e,r}function A(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(n,t);return r.spatialReference=e,r}function L(e,n,t,o,s){return i.G.generalize(r.N,e,n,t,o,s)}function I(e,n,t,o){return i.G.densify(r.N,e,n,t,o)}function V(e,n,t,o){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return i.G.geodesicDensify(r.N,e,n,t,o,s)}function _(e,n,t){return i.G.planarArea(r.N,e,n,t)}function j(e,n,t){return i.G.planarLength(r.N,e,n,t)}function k(e,n,t,o){return i.G.geodesicArea(r.N,e,n,t,o)}function C(e,n,t,o){return i.G.geodesicLength(r.N,e,n,t,o)}function H(e,n,t){return null==n||null==t?[]:i.G.intersectLinesToPoints(r.N,e,n,t)}function O(e,n){i.G.changeDefaultSpatialReferenceTolerance(e,n)}function q(e){i.G.clearDefaultSpatialReferenceTolerance(e)}const B=Object.freeze(Object.defineProperty({__proto__:null,buffer:Z,changeDefaultSpatialReferenceTolerance:O,clearDefaultSpatialReferenceTolerance:q,clip:s,contains:u,convexHull:v,crosses:a,cut:c,densify:I,difference:M,disjoint:g,distance:l,equals:f,extendedSpatialReferenceInfo:o,flipHorizontal:b,flipVertical:A,generalize:L,geodesicArea:k,geodesicBuffer:z,geodesicDensify:V,geodesicLength:C,intersect:w,intersectLinesToPoints:H,intersects:h,isSimple:N,nearestCoordinate:E,nearestVertex:S,nearestVertices:D,offset:P,overlaps:G,planarArea:_,planarLength:j,relate:m,rotate:T,simplify:x,symmetricDifference:y,touches:p,union:R,within:d},Symbol.toStringTag,{value:"Module"}))},40237:(e,n,t)=>{t.d(n,{N:()=>i});const i={convertToGEGeometry:function(e,n){return null==n?null:e.convertJSONToGeometry(n)},exportPoint:function(e,n,t){const i=new r(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),s=e.hasM(n);return o&&(i.z=e.getPointZ(n)),s&&(i.m=e.getPointM(n)),i},exportPolygon:function(e,n,t){return new o(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportPolyline:function(e,n,t){return new s(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportMultipoint:function(e,n,t){return new c(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))},exportExtent:function(e,n,t){const i=e.hasZ(n),r=e.hasM(n),o=new u(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(i){const t=e.getZExtent(n);o.zmin=t.vmin,o.zmax=t.vmax}if(r){const t=e.getMExtent(n);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class r{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(e,n,t,i){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class s{constructor(e,n,t,i){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class c{constructor(e,n,t,i){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class u{constructor(e,n,t,i,r){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},92846:(e,n,t)=>{t.r(n),t.d(n,{executeGEOperation:()=>r});var i=t(61156);function r(e){return(0,i.g[e.operation])(...e.parameters)}}}]);
//# sourceMappingURL=1979.dddba6d5.chunk.js.map