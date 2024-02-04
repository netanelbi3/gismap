/*! For license information please see 405.078e88e9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgis_app=self.webpackChunkgis_app||[]).push([[405],{39110:(e,t,o)=>{o.d(t,{A:()=>v,S:()=>p,d:()=>b});var s=o(51554),n=o(19432),c=o(47242),i=o(46895),a=o(52655),l=o(31944),r=o(92358),u=o(65138),d=o(57601),h=o(91438),g=o(89731);const p={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},m="ellipsis",f="container",v=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=(0,r.e)(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}async setFocus(){await(0,c.c)(this),this.el.focus()}connectedCallback(){(0,i.c)(this),(0,a.c)(this),(0,n.c)(this)}disconnectedCallback(){(0,i.d)(this),(0,a.d)(this),(0,n.d)(this)}async componentWillLoad(){(0,c.a)(this),await(0,a.s)(this)}componentDidLoad(){(0,c.s)(this)}renderMenu(){const{expanded:e,menuOpen:t,scale:o,layout:n,messages:c,overlayPositioning:i,hasMenuActions:a}=this;return(0,s.h)("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],hidden:!a,label:c.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:i,placement:"horizontal"===n?"bottom-start":"leading-start",scale:o},(0,s.h)("calcite-action",{icon:m,scale:o,slot:l.S.trigger,text:c.more,textEnabled:e}),(0,s.h)("slot",{name:p.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),(0,s.h)("slot",{name:p.menuTooltip,slot:l.S.tooltip}))}render(){return(0,s.h)("div",{"aria-label":this.label,class:f,role:"group"},(0,s.h)("slot",null),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-ui-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]}]);function b(){if("undefined"===typeof customElements)return;["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,v);break;case"calcite-action":customElements.get(e)||(0,u.d)();break;case"calcite-action-menu":customElements.get(e)||(0,l.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)();break;case"calcite-loader":customElements.get(e)||(0,h.d)();break;case"calcite-popover":customElements.get(e)||(0,g.d)()}}))}b()},70405:(e,t,o)=>{o.r(t),o.d(t,{CalciteActionGroup:()=>n,defineCustomElement:()=>c});var s=o(39110);const n=s.A,c=s.d},19432:(e,t,o)=>{o.d(t,{c:()=>l,d:()=>r});var s=o(51554),n=o(72021);const c=new Set;let i;const a={childList:!0};function l(e){i||(i=(0,n.c)("mutation",u)),i.observe(e.el,a)}function r(e){c.delete(e.el),u(i.takeRecords()),i.disconnect();for(const[t]of c.entries())i.observe(t,a)}function u(e){e.forEach((e=>{let{target:t}=e;(0,s.xE)(t)}))}}}]);
//# sourceMappingURL=405.078e88e9.chunk.js.map