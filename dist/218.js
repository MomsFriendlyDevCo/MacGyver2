(self.webpackChunkVueMacgyver=self.webpackChunkVueMacgyver||[]).push([[218],{193:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>i});var r=e(645),o=e.n(r)()((function(n){return n[1]}));o.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Add missing Bootstrap color variables */\n.mg-form {\n\t--btn-default-bg: #e9ecef;\n\t--btn-default-fg: #495057;\n}\n",""]);const i=o},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},218:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>p});var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"mg-form"},[n.errors.length?e("div",{staticClass:"alert alert-warning"},[e("ul",n._l(n.errors,(function(t){return e("li",[n._v(n._s(t.error))])})),0)]):n._e(),n._v(" "),n.spec?e("mg-component",{attrs:{config:n.spec.spec}}):n._e()],1)};function o(n){return function(n){if(Array.isArray(n))return a(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||s(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,i=void 0;try{for(var s,a=n[Symbol.iterator]();!(r=(s=a.next()).done)&&(e.push(s.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}}(n,t)||s(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,t){if(n){if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}r._withStripped=!0;const l=app.mgComponent("mgForm",{provide:function(){return{$mgForm:this}},data:function(){return{id:void 0,editing:!1,errors:[],spec:void 0,formData:{},inRefresh:!1}},props:{form:String,config:[Object,Array],data:Object,populateDefaults:{type:Boolean,default:!0},onAction:Function,actionsFallback:{type:Boolean,default:!0},actions:{type:[Function,Object],validator:function(n){return _.isFunction(n)||_.every((function(n){return _.isFunction(n)}))}}},created:function(){this.id=this.id||this.$props.form||this.$macgyver.nextId()},mounted:function(){var n=this;this.$watch("$props.config",(function(){n.rebuild()}),{immediate:!0,deep:!0}),this.$watch("$props.data",(function(){n.rebuildData()}),{immediate:!0,deep:!0}),this.$on("mgChange",(function(t){n.inRefresh||(n.$macgyver.utils.setPath(n.formData,t.path,t.value),n.$emit("changeItem",t),n.$emit("change",function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},n.formData)),n.refreshShowIfs())})),this.$on("mgErrors",(function(t){return n.errors=t}))},methods:{rebuild:function(){if(this.id=this.id||this.$props.form||this.$macgyver.nextId(),this.spec=this.$macgyver.compileSpec(this.$props.config),!this.spec||!this.spec.spec)throw new Error("Invalid Macgyver form spec")},rebuildData:function(){var n=this;this.inRefresh||(this.inRefresh=!0,this.formData=this.$props.data?_.cloneDeep(this.$props.data):{},this.$props.populateDefaults&&this.assignDefaults(),this.refreshShowIfs(),this.$emit.down("mgRefreshForm"),this.$nextTick((function(){return n.inRefresh=!1})))},refreshShowIfs:function(){var n=this;this.spec&&this.spec.showIfs.forEach((function(t){return t.show=n.$macgyver.utils.evalMatch(t.showIf,n.formData)}))},assignDefaults:function(){this.spec&&(_.defaultsDeep(this.formData,this.getPrototype()),this.$emit("change",this.formData))},getPrototype:function(){return this.id?this.$macgyver.forms.getPrototype(this.spec.spec):{}},run:function(n,t){var e,r;if("function"==typeof n)return n.call(null!=t?t:this);for(var s=!1,a=arguments.length,c=new Array(a>2?a-2:0),u=2;u<a;u++)c[u-2]=arguments[u];if(this.$emit.up.call(null!=t?t:this,"mgRun",{action:n,params:c},(function(n){n&&(s=!0)})),!(s||this.$props.onAction&&(e=this.$props.onAction).call.apply(e,[null!=t?t:this,n].concat(c))))if(this.$props.actions&&_.isFunction(this.$props.actions))this.$props.actions.call(null!=t?t:this,n);else{var l=/^([a-z0-9\_]*?)(\(.*\))?$/i.exec(n)||[],f=i(l,3),p=(f[0],f[1]),h=f[2];if(p&&this.$props.actions&&this.$props.actions[p]){var d=_.isString(this.$props.actions[p])?this[p]:this.$props.actions[p];if(h=(h||"").replace(/^\(/,"").replace(/\)$/,"").split(",").map((function(n){return n&&JSON.parse(n.replace(/'/g,'"'))})),d.call.apply(d,[null!=t?t:this].concat(o(h),c)))return}(r=this.$macgyver.$eval).call.apply(r,[null!=t?t:this,n].concat(c))}},getComponentBySpecPath:function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=!1;if(this.$emit.down("mgIdentify",(function(t){e||t.$props.$specPath!=n||(e=t)})),!e&&t)throw new Error('Cannot edit component by non-existant specPath "'.concat(n,'"'));return e}}});e(722);var f=(0,e(900).Z)(l,r,[],!1,null,null,null);f.options.__file="src/components/mgForm.vue";const p=f.exports},900:(n,t,e)=>{"use strict";function r(n,t,e,r,o,i,s,a){var c,u="function"==typeof n?n.options:n;if(t&&(u.render=t,u.staticRenderFns=e,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(n,t){return c.call(t),l(n,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:n,options:u}}e.d(t,{Z:()=>r})},722:(n,t,e)=>{var r=e(193);"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals),(0,e(346).Z)("51443e2b",r,!1,{})},346:(n,t,e)=>{"use strict";function r(n,t){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:n+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):e.push(r[s]={id:s,parts:[a]})}return e}e.d(t,{Z:()=>d});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,l=function(){},f=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(n,t,e,o){u=e,f=o||{};var s=r(n,t);return m(s),function(t){for(var e=[],o=0;o<s.length;o++){var a=s[o];(c=i[a.id]).refs--,e.push(c)}for(t?m(s=r(n,t)):s=[],o=0;o<e.length;o++){var c;if(0===(c=e[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function m(n){for(var t=0;t<n.length;t++){var e=n[t],r=i[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(g(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var s=[];for(o=0;o<e.parts.length;o++)s.push(g(e.parts[o]));i[e.id]={id:e.id,refs:1,parts:s}}}}function v(){var n=document.createElement("style");return n.type="text/css",s.appendChild(n),n}function g(n){var t,e,r=document.querySelector("style["+p+'~="'+n.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(h){var o=c++;r=a||(a=v()),t=$.bind(null,r,o,!1),e=$.bind(null,r,o,!0)}else r=v(),t=w.bind(null,r),e=function(){r.parentNode.removeChild(r)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else e()}}var y,b=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function $(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}function w(n,t){var e=t.css,r=t.media,o=t.sourceMap;if(r&&n.setAttribute("media",r),f.ssrId&&n.setAttribute(p,t.id),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);