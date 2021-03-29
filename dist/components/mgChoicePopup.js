/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgChoicePopup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgChoicePopup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app.mgComponent('mgChoicePopup', {\n  meta: {\n    title: 'Choice Popup',\n    icon: 'fas fa-window-maximize',\n    category: 'Choice Selectors',\n    preferId: true\n  },\n  data: function data() {\n    return {\n      activeTitle: undefined,\n      enumIter: []\n    };\n  },\n  props: {\n    enum: {\n      type: 'mgTable',\n      title: 'List items',\n      items: [{\n        id: 'id',\n        title: 'ID'\n      }, {\n        id: 'title',\n        title: 'Title'\n      }, {\n        id: 'class',\n        title: 'Classes'\n      }, {\n        id: 'classActive',\n        title: 'Active Class'\n      }, {\n        id: 'classInactive',\n        title: 'Inactive Class'\n      }]\n    },\n    required: {\n      type: 'mgToggle',\n      default: false,\n      help: 'One choice must be selected'\n    },\n    popupTitle: {\n      type: 'mgText',\n      default: 'Select item',\n      advanced: true\n    },\n    inactiveText: {\n      type: 'mgText',\n      default: 'Select item...',\n      advanced: true\n    },\n    iconActive: {\n      type: 'mgIcon',\n      default: 'far fa-check',\n      advanced: true\n    },\n    iconInactive: {\n      type: 'mgIcon',\n      default: 'far fa-ellipsis-h',\n      advanced: true\n    },\n    classActive: {\n      type: 'mgText',\n      default: 'btn btn-primary',\n      advanced: true\n    },\n    classInactive: {\n      type: 'mgText',\n      default: 'btn btn-default',\n      advanced: true\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    this.$on('mgValidate', function (reply) {\n      if (_this.$props.required && !_this.data) return reply(\"\".concat(_this.$props.title, \" is required\"));\n    });\n  },\n  methods: {\n    select: function select(id) {\n      var _this2 = this;\n\n      this.$prompt.macgyver({\n        title: this.$props.popupTitle,\n        form: {\n          id: 'selected',\n          type: 'mgChoiceButtons',\n          enum: this.enumIter,\n          classWrapper: 'list-group',\n          itemClassActive: 'list-group-item active',\n          itemClassInactive: 'list-group-item'\n        },\n        data: {\n          selected: this.data\n        },\n        buttons: [],\n        onShow: function onShow() {\n          // Bind to the mg-form element, detect the first change and close the dialog\n          _this2.$macgyver.$forms.promptMacGyver.$on('mgChange', function () {\n            return setTimeout(function () {\n              // Timeout not really needed but it lets the button highlight before we close\n              _this2.$prompt.$settings.$defer.resolve(_this2.$prompt.$settings.data);\n\n              _this2.$prompt.close(true);\n            }, 100);\n          });\n        }\n      }).then(function (form) {\n        return _this2.$set(_this2, 'data', form.selected);\n      });\n    }\n  },\n  watch: {\n    data: function data() {\n      var _this3 = this;\n\n      if (this.data && this.enumIter.length) {\n        var activeItem = this.enumIter.find(function (e) {\n          return e.id == _this3.data;\n        });\n        this.$set(this, 'activeTitle', activeItem ? activeItem.title : '');\n      }\n    },\n    '$props.enumUrl': {\n      immediate: true,\n      handler: function handler() {\n        var _this4 = this;\n\n        if (!this.$props.enumUrl) return;\n        this.$macgyver.utils.fetch(this.$props.enumUrl, {\n          type: 'array',\n          mappings: {\n            id: {\n              required: true\n            },\n            title: {\n              required: true\n            }\n          }\n        }).tap(function (data) {\n          return console.log('mgPopup got feed', data);\n        }).then(function (data) {\n          return _this4.$set(_this4.$props, 'enum', data);\n        });\n      }\n    },\n    '$props.enum': {\n      immediate: true,\n      handler: function handler() {\n        if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) {\n          // Array of strings\n          this.enumIter = this.$props.enum.map(function (i) {\n            return {\n              id: _.camelCase(i),\n              title: i\n            };\n          });\n        } else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) {\n          // Collection\n          this.enumIter = this.$props.enum;\n        }\n      }\n    }\n  }\n}));\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgChoicePopup.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/mgChoicePopup.vue":
/*!******************************************!*\
  !*** ./src/components/mgChoicePopup.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mgChoicePopup_vue_vue_type_template_id_1e3fed9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mgChoicePopup.vue?vue&type=template&id=1e3fed9e& */ \"./src/components/mgChoicePopup.vue?vue&type=template&id=1e3fed9e&\");\n/* harmony import */ var _mgChoicePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mgChoicePopup.vue?vue&type=script&lang=js& */ \"./src/components/mgChoicePopup.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _mgChoicePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _mgChoicePopup_vue_vue_type_template_id_1e3fed9e___WEBPACK_IMPORTED_MODULE_0__.render,\n  _mgChoicePopup_vue_vue_type_template_id_1e3fed9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/mgChoicePopup.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgChoicePopup.vue?");

/***/ }),

/***/ "./src/components/mgChoicePopup.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/mgChoicePopup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_mgChoicePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mgChoicePopup.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgChoicePopup.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_mgChoicePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgChoicePopup.vue?");

/***/ }),

/***/ "./src/components/mgChoicePopup.vue?vue&type=template&id=1e3fed9e&":
/*!*************************************************************************!*\
  !*** ./src/components/mgChoicePopup.vue?vue&type=template&id=1e3fed9e& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mgChoicePopup_vue_vue_type_template_id_1e3fed9e___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mgChoicePopup_vue_vue_type_template_id_1e3fed9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mgChoicePopup_vue_vue_type_template_id_1e3fed9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mgChoicePopup.vue?vue&type=template&id=1e3fed9e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgChoicePopup.vue?vue&type=template&id=1e3fed9e&\");\n\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgChoicePopup.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgChoicePopup.vue?vue&type=template&id=1e3fed9e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgChoicePopup.vue?vue&type=template&id=1e3fed9e& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"mg-choice-popup\" }, [\n    _c(\n      \"a\",\n      {\n        class: _vm.data ? _vm.$props.classActive : _vm.$props.classInactive,\n        on: {\n          click: function($event) {\n            return _vm.select()\n          }\n        }\n      },\n      [\n        _c(\"i\", {\n          class: _vm.data ? _vm.$props.iconActive : _vm.$props.iconInactive\n        }),\n        _vm._v(\n          \"\\n\\t\\t\" +\n            _vm._s(this.data ? _vm.activeTitle : _vm.$props.inactiveText) +\n            \"\\n\\t\"\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgChoicePopup.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ normalizeComponent)\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/mgChoicePopup.vue");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});