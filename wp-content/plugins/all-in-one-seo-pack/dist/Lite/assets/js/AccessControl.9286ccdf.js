import{e as c}from"./index.4776f7d5.js";import{A as a}from"./WebmasterTools.0cf9ba15.js";import{C as u}from"./Blur.404d53ce.js";import{C as _}from"./Card.a455f6aa.js";import{C as p}from"./ProBadge.d6147ee5.js";import{C as m}from"./SettingsRow.8a127375.js";import{C as d}from"./Index.7823cadd.js";import{n as l}from"./vueComponentNormalizer.58b0a173.js";import"./isArrayLikeObject.5268a676.js";import"./default-i18n.0e73c33c.js";import"./WpTable.8ff25002.js";import"./index.4a5acef5.js";import"./client.d00863cc.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./constants.9efee5f7.js";import"./portal-vue.esm.272b3133.js";import"./attachments.52d4e34c.js";import"./cleanForSlug.788b395f.js";import"./MetaTag.ceacc375.js";import"./Tooltip.060399ab.js";import"./Slide.8aaa5049.js";import"./Row.dfea53f7.js";var f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aioseo-access-control-lite"},[o("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[o("span",[t._v(t._s(t.strings.accessControl))]),o("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[o("core-blur",[t._l(t.getLiteRoles,function(s){return[o("core-settings-row",{key:s.name,attrs:{name:s.label},scopedSlots:t._u([{key:"content",fn:function(){return[o("div",{staticClass:"toggle"},[o("base-toggle",{attrs:{disabled:!0,value:!0}},[t._v(" "+t._s(t.strings.useDefaultSettings)+" ")])],1)]},proxy:!0}],null,!0)})]})],2),o("cta",{attrs:{"feature-list":[t.strings.granularControl,t.strings.wpRoles,t.strings.seoManagerRole,t.strings.seoEditorRole],"cta-link":t.$links.getPricingUrl("access-control","access-control-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("access-control",null,"home"),"align-top":""},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])})],1)],1)},g=[];const h={components:{CoreBlur:u,CoreCard:_,CoreProBadge:p,CoreSettingsRow:m,Cta:d},mixins:[a],data(){return{strings:{wpRoles:this.$t.__("WP Roles (Editor, Author)",this.$td),seoManagerRole:this.$t.__("SEO Manager Role",this.$td),seoEditorRole:this.$t.__("SEO Editor Role",this.$td),defaultSettings:this.$t.__("Default settings that just work",this.$td),granularControl:this.$t.__("Granular controls per role",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},computed:{getLiteRoles(){const t=this.getRoles;let e=1;for(;8>t.length;)t.push({label:this.$t.__("Custom Role",this.$td)+" "+e,name:"customRole"+e}),e++;return t}}},r={};var v=l(h,f,g,!1,$,null,null,null);function $(t){for(let e in r)this[e]=r[e]}const n=function(){return v.exports}();var C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aioseo-access-control"},[t.isUnlicensed?t._e():o("access-control"),t.isUnlicensed?o("access-control-lite"):t._e()],1)},y=[];const x={components:{AccessControl:n,AccessControlLite:n},computed:{...c(["isUnlicensed"])}},i={};var R=l(x,C,y,!1,A,null,null,null);function A(t){for(let e in i)this[e]=i[e]}const K=function(){return R.exports}();export{K as default};