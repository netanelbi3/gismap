"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[9626],{89626:(_,E,T)=>{T.r(E),T.d(E,{loadGLTFMesh:()=>d});var R=T(51995),A=T(76200),e=T(77427),N=T(16889),n=T(22753),t=T(11873),S=T(71353),C=T(67077),o=T(64995),O=T(11587),I=T(79694),r=T(50565),L=T(27474),u=T(25158),M=T(32035),D=T(19093),l=T(48734);Object.freeze(Object.defineProperty({__proto__:null,copy:function(_,E,T){var R,A;const e=_.typedBuffer,N=_.typedBufferStride,n=E.typedBuffer,t=E.typedBufferStride,S=T?T.count:E.count;let C=(null!==(R=null===T||void 0===T?void 0:T.dstIndex)&&void 0!==R?R:0)*N,o=(null!==(A=null===T||void 0===T?void 0:T.srcIndex)&&void 0!==A?A:0)*t;for(let O=0;O<S;++O){for(let _=0;_<9;++_)e[C+_]=n[o+_];C+=N,o+=t}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(_,E,T){var R,A;const e=_.typedBuffer,N=_.typedBufferStride,n=E.typedBuffer,t=E.typedBufferStride,S=T?T.count:E.count;let C=(null!==(R=null===T||void 0===T?void 0:T.dstIndex)&&void 0!==R?R:0)*N,o=(null!==(A=null===T||void 0===T?void 0:T.srcIndex)&&void 0!==A?A:0)*t;for(let O=0;O<S;++O){for(let _=0;_<16;++_)e[C+_]=n[o+_];C+=N,o+=t}}},Symbol.toStringTag,{value:"Module"}));T(53801);var c=T(19131),P=T(92770),i=T(69618);function G(_,E){return new _(new ArrayBuffer(E*_.ElementCount*(0,l.n1)(_.ElementType)))}var U=T(57898),a=T(27053),B=T(57516),s=T(32315),f=T(57661),F=T(68845),H=T(8548);async function d(_,E,T){var e;const n={...T,useTransform:null===(e=null===T||void 0===T?void 0:T.useTransform)||void 0===e||e},t=new a.C(function(_){const E=null===_||void 0===_?void 0:_.resolveFile,T=null===_||void 0===_?void 0:_.requestFile;return E||T?{busy:!1,request:async(_,R,e)=>{var N;const n=null!==(N=null===E||void 0===E?void 0:E(_))&&void 0!==N?N:_;if(T){const _=await T(n,R,null===e||void 0===e?void 0:e.signal);if(void 0!==_)return _}const t="image"===R?"image":"binary"===R?"array-buffer":"json";return(await(0,A.Z)(n,{responseType:t,signal:null!=e?e.signal:null})).data}}:null}(n)),o=(await(0,B.Q)(t,E,n,!0)).model,u=o.lods.shift(),M=new Map,D=new Map;o.textures.forEach(((_,E)=>M.set(E,function(_){return new I.Z({data:((0,f.$A)(_.data),_.data),wrap:Y(_.parameters.wrap)})}(_)))),o.materials.forEach(((_,E)=>D.set(E,function(_,E){const T=new R.Z(function(_,E){return(0,C.f)(g(_[0]),g(_[1]),g(_[2]),E)}(_.color,_.opacity)),A=_.emissiveFactor?new R.Z(function(_){return(0,S.f)(g(_[0]),g(_[1]),g(_[2]))}(_.emissiveFactor)):null,e=_=>{var E;return _?new r.Z({scale:_.scale?[_.scale[0],_.scale[1]]:[1,1],rotation:(0,N.BV)(null!==(E=_.rotation)&&void 0!==E?E:0),offset:_.offset?[_.offset[0],_.offset[1]]:[0,0]}):null};return new O.Z({color:T,colorTexture:E.get(_.textureColor),normalTexture:E.get(_.textureNormal),emissiveColor:A,emissiveTexture:E.get(_.textureEmissive),occlusionTexture:E.get(_.textureOcclusion),alphaMode:V(_.alphaMode),alphaCutoff:_.alphaCutoff,doubleSided:_.doubleSided,metallic:_.metallicFactor,roughness:_.roughnessFactor,metallicRoughnessTexture:E.get(_.textureMetallicRoughness),colorTextureTransform:e(_.colorTextureTransform),normalTextureTransform:e(_.normalTextureTransform),occlusionTextureTransform:e(_.occlusionTextureTransform),emissiveTextureTransform:e(_.emissiveTextureTransform),metallicRoughnessTextureTransform:e(_.metallicRoughnessTextureTransform)})}(_,M))));const l=x(u);for(const R of l.parts)v(l,R,D);const{position:c,normal:P,tangent:i,color:G,texCoord0:s}=l.vertexAttributes,F={position:c.typedBuffer,normal:null!=P?P.typedBuffer:null,tangent:null!=i?i.typedBuffer:null,uv:null!=s?s.typedBuffer:null,color:null!=G?G.typedBuffer:null},H=(0,U.w1)(F,_,n);return{transform:H.transform,vertexSpace:H.vertexSpace,components:l.components,spatialReference:_.spatialReference,vertexAttributes:new L.Q({position:H.vertexAttributes.position,normal:H.vertexAttributes.normal,tangent:H.vertexAttributes.tangent,color:F.color,uv:F.uv})}}function m(_,E){if(null==_)return"-";const T=_.typedBuffer;return"".concat((0,e.s1)(E,T.buffer,(()=>E.size)),"/").concat(T.byteOffset,"/").concat(T.byteLength)}function p(_){return null!=_?_.toString():"-"}function x(_){let E=0;const T={color:!1,tangent:!1,normal:!1,texCoord0:!1},R=new Map,A=new Map,N=[];for(const n of _.parts){const{attributes:{position:_,normal:t,color:S,tangent:C,texCoord0:o}}=n,O="\n      ".concat(m(_,R),"/\n      ").concat(m(t,R),"/\n      ").concat(m(S,R),"/\n      ").concat(m(C,R),"/\n      ").concat(m(o,R),"/\n      ").concat(p(n.transform),"\n    ");let I=!1;const r=(0,e.s1)(A,O,(()=>(I=!0,{start:E,length:_.count})));I&&(E+=_.count),t&&(T.normal=!0),S&&(T.color=!0),C&&(T.tangent=!0),o&&(T.texCoord0=!0),N.push({gltf:n,writeVertices:I,region:r})}return{vertexAttributes:{position:G(u.fP,E),normal:T.normal?G(u.ct,E):null,tangent:T.tangent?G(u.ek,E):null,color:T.color?G(u.mc,E):null,texCoord0:T.texCoord0?G(u.Eu,E):null},parts:N,components:[]}}function v(_,E,T){E.writeVertices&&function(_,E){const{position:T,normal:R,tangent:A,color:e,texCoord0:S}=_.vertexAttributes,C=E.region.start,{attributes:o,transform:O}=E.gltf,I=o.position.count;if((0,M.c)(T.slice(C,I),o.position,O),null!=o.normal&&null!=R){const _=(0,n.n)((0,t.a)(),O),E=R.slice(C,I);(0,M.b)(E,o.normal,_),(0,N.oc)(_)&&(0,M.d)(E,E)}else null!=R&&(0,P.f)(R,0,0,1,{dstIndex:C,count:I});if(null!=o.tangent&&null!=A){const _=(0,n.n)((0,t.a)(),O),E=A.slice(C,I);(0,D.a)(E,o.tangent,_),(0,N.oc)(_)&&(0,D.n)(E,E)}else null!=A&&(0,i.f)(A,0,0,1,1,{dstIndex:C,count:I});if(null!=o.texCoord0&&null!=S?(0,c.a)(S.slice(C,I),o.texCoord0):null!=S&&(0,c.f)(S,0,0,{dstIndex:C,count:I}),null!=o.color&&null!=e){const _=o.color,E=e.slice(C,I);if(4===_.elementCount)_ instanceof u.ek?(0,D.b)(E,_,255):_ instanceof u.mc?(0,i.a)(E,_):_ instanceof u.v6&&(0,D.b)(E,_,1/256);else{(0,i.f)(E,255,255,255,255);const T=u.ne.fromTypedArray(E.typedBuffer,E.typedBufferStride);_ instanceof u.ct?(0,M.e)(T,_,255):_ instanceof u.ne?(0,P.a)(T,_):_ instanceof u.mw&&(0,M.e)(T,_,1/256)}}else null!=e&&(0,i.f)(e.slice(C,I),255,255,255,255)}(_,E);const{indices:R,attributes:A,primitiveType:e,material:S}=E.gltf;let C=(0,s.p)(R||A.position.count,e);const O=E.region.start;if(O){const _=new Uint32Array(C);for(let E=0;E<C.length;E++)_[E]+=O;C=_}_.components.push(new o.Z({name:E.gltf.name,faces:C,material:T.get(S),shading:A.normal?"source":"flat",trustSourceNormals:!0}))}function V(_){switch(_){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Y(_){return{horizontal:X(_.s),vertical:X(_.t)}}function X(_){switch(_){case H.e8.CLAMP_TO_EDGE:return"clamp";case H.e8.MIRRORED_REPEAT:return"mirror";case H.e8.REPEAT:return"repeat"}}function g(_){return _**(1/F.j)*255}},8548:(_,E,T)=>{var R,A,e,N,n,t,S,C,o,O,I,r,L,u,M,D,l,c,P,i;T.d(E,{Br:()=>D,Ho:()=>P,LR:()=>t,Lu:()=>s,MX:()=>A,No:()=>L,Se:()=>F,Tg:()=>l,V1:()=>G,V7:()=>p,VI:()=>u,VY:()=>a,Wf:()=>S,Xg:()=>B,Y5:()=>m,_g:()=>U,cw:()=>I,db:()=>N,e8:()=>r,g:()=>C,l1:()=>c,lP:()=>M,lk:()=>R,q_:()=>f,qi:()=>i,w0:()=>n,wb:()=>o,xS:()=>O,zi:()=>e}),function(_){_[_.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",_[_.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",_[_.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(R||(R={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(A||(A={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(e||(e={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(N||(N={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(n||(n={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(t||(t={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(S||(S={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT"}(C||(C={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(o||(o={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(O||(O={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(r||(r={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(L||(L={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(u||(u={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(M||(M={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(D||(D={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(l||(l={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(c||(c={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(P||(P={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(i||(i={}));const G=33984;var U,a,B;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.Sync=7]="Sync",_[_.UNCOUNTED=8]="UNCOUNTED",_[_.LinesOfCode=8]="LinesOfCode",_[_.Uniform=9]="Uniform",_[_.COUNT=10]="COUNT"}(U||(U={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(a||(a={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(B||(B={}));const s=33306;var f,F,H,d,m,p,x;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(f||(f={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(F||(F={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(H||(H={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(d||(d={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(m||(m={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(p||(p={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(x||(x={}))}}]);
//# sourceMappingURL=9626.0fa18412.chunk.js.map