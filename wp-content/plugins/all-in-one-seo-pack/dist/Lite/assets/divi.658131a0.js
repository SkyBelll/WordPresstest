import{n as y,V as l}from"./js/vueComponentNormalizer.58b0a173.js";import{d as m,S as B}from"./js/index.4a5acef5.js";import{T as L}from"./js/index.ac8da735.js";import{s as c}from"./js/index.4776f7d5.js";import{j as C,m as D}from"./js/attachments.52d4e34c.js";import{b as M}from"./js/_baseSet.055f40ac.js";import{i as x}from"./js/isEqual.90be431f.js";import{A as k}from"./js/App.e67f11b2.js";import{i as P}from"./js/portal-vue.esm.272b3133.js";import{P as q}from"./js/App.c6ffcea0.js";import"./js/client.d00863cc.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.3bc9d58c.js";import"./js/default-i18n.0e73c33c.js";import"./js/constants.9efee5f7.js";import"./js/isArrayLikeObject.5268a676.js";import"./js/cleanForSlug.788b395f.js";import"./js/_baseIsEqual.4e44c7e9.js";import"./js/_getTag.e79f4b6e.js";/* empty css                */import"./js/params.bea1a08d.js";import"./js/WpTable.8ff25002.js";import"./js/JsonValues.08065e69.js";import"./js/SettingsRow.8a127375.js";import"./js/Row.dfea53f7.js";import"./js/Checkbox.93944087.js";import"./js/Checkmark.627d69a4.js";import"./js/LicenseKeyBar.1eaa4b0d.js";import"./js/LogoGear.fa7af154.js";import"./js/Tabs.5f143cbd.js";import"./js/TruSeoScore.98a47fd6.js";import"./js/Information.d80e4486.js";import"./js/Slide.8aaa5049.js";import"./js/Portal.de907673.js";import"./js/MaxCounts.5a7ca2fd.js";import"./js/RadioToggle.18d51233.js";import"./js/GoogleSearchPreview.153cd296.js";import"./js/HtmlTagsEditor.c1435120.js";import"./js/Editor.5a52a16a.js";import"./js/UnfilteredHtml.b3886c4e.js";import"./js/Tooltip.060399ab.js";import"./js/Plus.6ec3819c.js";import"./js/popup.25df8419.js";import"./js/Blur.404d53ce.js";import"./js/Index.7823cadd.js";import"./js/Table.64065090.js";import"./js/InternalOutbound.fed0cdcc.js";import"./js/RequiredPlans.c312629f.js";import"./js/Image.03ee6721.js";import"./js/Img.b806c655.js";import"./js/FacebookPreview.b0ae02b6.js";import"./js/dannie-profile.e0152a9f.js";import"./js/TwitterPreview.af1ce378.js";import"./js/Book.7d439a03.js";import"./js/Build.dc549300.js";import"./js/Redirects.56f64bd7.js";import"./js/Index.16980ab4.js";import"./js/ProBadge.d6147ee5.js";import"./js/External.1af3387c.js";import"./js/Exclamation.c0680526.js";import"./js/Gear.21727cf4.js";import"./js/Card.a455f6aa.js";import"./js/Eye.a1ab72cf.js";function b(t,e,o){return t==null?t:M(t,e,o)}const S=t=>t.parentElement.removeChild(t),$=()=>{const t=f();document.body.classList.toggle("aioseo-settings-bar-is-active",t),document.body.classList.toggle("aioseo-settings-bar-is-inactive",!t)},A=()=>{const t=u();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),g(t)},O=()=>{p.addEventListener("change",()=>{E(),g(u())}),X.observe(document.querySelector(".et-fb-page-settings-bar"),{attributeFilter:["class"]}),document.body.addEventListener("click",F),s.addEventListener("click",()=>{const t=new Event("aioseo-divi-toggle-modal");document.dispatchEvent(t)})},T=()=>{const t=u();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),$(),E(),N()||g(t)},E=()=>{!w()||(s=S(s))},g=t=>{if(w())return;const e=document.querySelector(".et-fb-page-settings-bar"),o=e.querySelector(".et-fb-page-settings-bar__toggle-button"),n=e.querySelectorAll(".et-fb-page-settings-bar__column");if(R(t),f())if(p.matches){const i=[...n].filter(d=>d.classList.contains("et-fb-page-settings-bar__column--main"));i.length&&i[0].appendChild(s)}else{const i=[...n].filter(d=>d.classList.contains("et-fb-page-settings-bar__column--left"));i.length&&i[0].insertBefore(s)}else o.insertAdjacentElement("afterend",s)},R=t=>{r(s,"aioseo-settings-bar-root"),s.classList.add(`aioseo-settings-bar-root-${t}`),r(s,"aioseo-settings-bar-root-is-mobile"),["aioseo-settings-bar-root-is-mobile",`aioseo-settings-bar-root-is-mobile-${t}`].forEach(n=>{s.classList.toggle(n,!p.matches)}),r(s,"aioseo-settings-bar-root-is-desktop"),["aioseo-settings-bar-root-is-desktop",`aioseo-settings-bar-root-is-desktop-${t}`].forEach(n=>{s.classList.toggle(n,p.matches)})},r=(t,e)=>{const o=[`${e}-left`,`${e}-right`,`${e}-top`,`${e}-top-left`,`${e}-top-right`,`${e}-bottom`,`${e}-bottom-left`,`${e}-bottom-right`];t.classList.remove(...o)},u=()=>{const t=document.querySelector(".et-fb-page-settings-bar").classList;return t.contains("et-fb-page-settings-bar--horizontal")&&!t.contains("et-fb-page-settings-bar--top")?"bottom":t.contains("et-fb-page-settings-bar--top")&&!t.contains("et-fb-page-settings-bar--corner")?"top":t.contains("et-fb-page-settings-bar--bottom-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"bottom-left":"bottom-right":t.contains("et-fb-page-settings-bar--top-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"top-left":"top-right":t.contains("et-fb-page-settings-bar--vertical--right")?"right":t.contains("et-fb-page-settings-bar--vertical--left")?"left":""},F=t=>{if(!U())return;const e=t.target,o=".aioseo-modal",n=".aioseo-app.post-settings-modal";if(!e.closest(o)&&!e.closest(n)&&!(e!==document.querySelector(o)&&e.contains(document.querySelector(o)))&&e!==s){const i=new Event("aioseo-divi-toggle-modal",{open:!1});document.dispatchEvent(i)}},U=()=>!document.querySelector(".aioseo-modal").classList.contains("aioseo-modal-is-closed"),w=()=>document.documentElement!==s&&document.documentElement.contains(s),f=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--active"),N=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--dragged")&&!f(),p=window.matchMedia("(min-width: 768px)"),X=new MutationObserver(T),Y="#aioseo-settings";let s=document.querySelector(Y);s=S(s);const j=()=>{$(),A(),O()};let _={};const a=()=>{const t={..._},e=C();x(t,e)||(_=e,D())},z=()=>{c.dispatch("saveCurrentPost",c.state.currentPost)},V=()=>{a(),window.addEventListener("message",t=>{t.data.eventType==="et_fb_section_content_change"&&m(a,1e3)}),window.wp&&window.wp.hooks.addFilter("et.builder.store.setting.update","aioseo",(t,e)=>{if(t)switch(e){case"et_pb_post_settings_title":b(ETBuilderBackendDynamic,"postTitle",t),m(a,1e3);break;case"et_pb_post_settings_excerpt":b(ETBuilderBackendDynamic,"postMeta.post_excerpt",t),m(a,1e3);break}return t}),document.querySelector(".et-fb-button--save-draft, .et-fb-button--publish").addEventListener("click",z)};var Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aioseo-draggable"},[t.completelyDraggable?o("div",{on:{dragMouseDown:t.dragMouseDown}},[t._t("default")],2):t._e(),t.completelyDraggable?t._e():o("div",[t._t("default")],2)])},W=[];const G={props:{completelyDraggable:{type:Boolean,default(){return!0}}},data(){return{position1:0,position2:0,position3:0,position4:0}},methods:{dragMouseDown(t){t=t||window.event,t.preventDefault(),this.position3=t.clientX,this.position4=t.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag(t){t=t||window.event,t.preventDefault(),this.position1=this.position3-t.clientX,this.position2=this.position4-t.clientY,this.position3=t.clientX,this.position4=t.clientY,this.$el.style.top=this.$el.offsetTop-this.position2+"px",this.$el.style.left=this.$el.offsetLeft-this.position1+"px"},closeDragElement(){document.onmouseup=null,document.onmousemove=null}}},v={};var H=y(G,Q,W,!1,I,null,null,null);function I(t){for(let e in v)this[e]=v[e]}const J=function(){return H.exports}();var K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("util-draggable",{ref:"modal-container",attrs:{completelyDraggable:!1}},[o("div",{staticClass:"aioseo-modal",class:{"aioseo-modal-is-closed":!t.isOpen}},[o("div",{staticClass:"aioseo-modal-header",on:{mousedown:function(n){return n.preventDefault(),function(i){return t.$refs["modal-container"].dragMouseDown(i)}.apply(null,arguments)}}},[o("div",{staticClass:"aioseo-modal-header-title"},[t._v(t._s(t.strings.header))]),o("div",{staticClass:"aioseo-modal-header-close",on:{click:function(n){t.isOpen=!1}}},[o("svg-close")],1)]),o("div",{staticClass:"aioseo-modal-body edit-post-sidebar"},[o("PostSettings")],1)])])},Z=[];const tt={components:{PostSettings:k,SvgClose:B,UtilDraggable:J},data(){return{isOpen:!1,strings:{header:this.$t.sprintf(this.$t.__("%1$s settings",this.$td),"All in One SEO")}}},methods:{toggleModal(){this.isOpen=!this.isOpen}},beforeUnmount(){document.removeEventListener("aioseo-divi-toggle-modal",this.toggleModal)},mounted(){this.$nextTick(function(){document.addEventListener("aioseo-divi-toggle-modal",this.toggleModal)})}},h={};var et=y(tt,K,Z,!1,ot,null,null,null);function ot(t){for(let e in h)this[e]=h[e]}const st=function(){return et.exports}();l.prototype.$truSeo=new L;const nt=()=>{new l({store:c,data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"},render:t=>t(st)}).$mount("#aioseo-app-modal > div")},it=()=>{l.use(P),document.querySelector("#aioseo-modal-portal")&&new l({store:c,render:e=>e(q)}).$mount("#aioseo-modal-portal")},rt=()=>{j(),nt(),it(),V()};window.addEventListener("message",function(t){t.data.eventType==="et_builder_api_ready"&&rt()});
