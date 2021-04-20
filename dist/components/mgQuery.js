/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ "use strict";
/******/ var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgQuery.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgQuery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app.mgComponent('mgQuery', {\n  meta: {\n    title: 'Query',\n    icon: 'far fa-filter',\n    category: 'Data display'\n  },\n  data: function data() {\n    return {\n      //data: {'$or': [{name: 'foo'}]},\n      queryComponent: {\n        type: \"mgContainer\",\n        layout: \"query\",\n        items: []\n      }\n    };\n  },\n  props: {\n    //config: Object,\n\n    /**\n    * The spec is composed of an object lookup with the dotted notation path as the key and an object set of properties\n    * @property {string} [type='string'] The type of the field, used to determine the component to use as the value input\n    * @property {boolean} [showOperand=true] Whether to allow the user to select the operand (\"Equals\", \"Is in\" etc.) if false this only allows straight equality\n    * @property {array <string>|array <object>|string} [enum] If the type is a string this restricts operand values to a list of selectable values. The value can also be one of the following meta values: '$FIELDS' - list all spec fields\n    */\n    //spec: {type: 'mgCode', syntax: 'json'},\n    spec: {\n      // FIXME: Test case\n      type: Object,\n      default: function _default() {\n        return {\n          //_id: {type: 'objectId'},\n          name: {\n            type: 'string'\n          },\n\n          /*\n          username: {type: 'string'},\n          email: {type: 'string'},\n          'address.street': {type: 'string'},\n          'address.city': {type: 'string'},\n          'address.zip': {type: 'string'},\n          'address.state': {type: 'string'},\n          'address.country': {type: 'string'},\n          phone: {type: 'string'},\n          website: {type: 'string'},\n          'company.name': {type: 'string'},\n          role: {type: 'string', enum: ['user', 'admin', 'root']},\n          status: {type: 'string', enum: ['pending', 'active', 'deleted']},\n          lastLogin: {type: 'date'},\n          */\n          sort: {\n            type: 'string',\n            showOperand: false,\n            enum: '$FIELDS'\n          },\n          limit: {\n            type: 'number',\n            showOperand: false\n          },\n          skip: {\n            type: 'number',\n            showOperand: false\n          }\n        };\n      }\n    }\n  },\n  created: function created() {\n    this.$debugging = true;\n    this.$watchAll(['$props.url', '$props.spec'], this.refresh, {\n      immediate: true\n    }); // FIXME: deep?\n  },\n  methods: {\n    refresh: function refresh() {\n      var _this = this;\n\n      //this.data = {'$or': [{name: 'foo'}]};\n      this.data = {\n        name: {\n          '$eq': 'foo'\n        }\n      };\n      this.$debug('refresh', _.cloneDeep(this.data), _.cloneDeep(this.$props.spec));\n      if (!_.isPlainObject(this.data)) this.data = {}; //if (!_.isPlainObject(this.$props.spec)) return;\n      // Calculate which fields we can use in enums\n\n      var fieldsEnum = Object.keys(this.$props.spec).map(function (key) {\n        return {\n          id: key,\n          title: _.startCase(key)\n        };\n      });\n      this.$debug('fieldsEnum', fieldsEnum);\n      /**\n      * Populate enum values from a spec branch\n      * Really this just deals with meta cases like '$FIELDS' (see spec definition for 'enum')\n      * @param {Object} pathSpec The path branch specification\n      * @returns {array} An mgChoice* compatible ENUM composed of {id, title}\n      */\n\n      var populateEnum = function populateEnum(pathSpec) {\n        return pathSpec.enum === '$FIELDS' ? fieldsEnum : pathSpec.enum;\n      };\n\n      this.queryComponent.items = Object.keys(this.data).map(function (path, pathIndex) {\n        return (// Examine each path key\n          Object.keys(_typeof(_this.data[path]) == 'object' ? _this.data[path] : {\n            $eq: _this.data[path]\n          }) // Examine each operand key\n          .map(function (operand, operandIndex) {\n            var value = _this.data[path];\n            var pathSpec = _this.spec[path] || {\n              unknown: true,\n              type: 'string'\n            };\n            var row = {\n              // FIXME: Incremental, unique\n              id: 'id' + _.random(10000, 99999),\n              type: 'mgContainer',\n              layout: 'query-row',\n              items: [{\n                type: 'mgChoiceDropdown',\n                enum: fieldsEnum,\n                default: path,\n                onChange: function onChange(value) {\n                  if (_.isPlainObject(_this.data[path])) {\n                    // Multiple value setter\n                    console.log('Change field with other operands', path, 'to', value, {\n                      leaf: _this.data[path]\n                    });\n                    delete _this.data[path][operand];\n                    _this.data[value][operand] = '';\n                  } else {\n                    // Single value setter\n                    console.log('Change simple field', path, 'to', value, {\n                      leaf: _this.data[path]\n                    });\n                    delete _this.data[path];\n                    _this.data[value] = '';\n                  }\n\n                  _this.refresh();\n                }\n              }, {\n                type: 'mgChoiceDropdown',\n                enum: [].concat(_toConsumableArray(['string', 'number'].includes(pathSpec.type) ? [{\n                  id: '$eq',\n                  title: 'Equals'\n                }, {\n                  id: '$ne',\n                  title: 'Does not equal'\n                }] : []), _toConsumableArray(pathSpec.type == 'date' ? [{\n                  id: '$eq',\n                  title: 'Is on'\n                }, {\n                  id: '$ne',\n                  title: 'Is not on'\n                }] : []), [{\n                  id: '$exists',\n                  title: 'Is present'\n                }], _toConsumableArray(pathSpec.type != 'date' ? [{\n                  id: '$in',\n                  title: 'Is one of'\n                }, {\n                  id: '$nin',\n                  title: 'Is not one of'\n                }] : []), _toConsumableArray(pathSpec.type == 'number' ? [{\n                  id: '$gt',\n                  title: 'Is greater than'\n                }, {\n                  id: '$gte',\n                  title: 'Is equal or greater than'\n                }, {\n                  id: '$lt',\n                  title: 'Is less than'\n                }, {\n                  id: '$lte',\n                  title: 'Is equal or less than'\n                }] : []), _toConsumableArray(pathSpec.type == 'date' ? [{\n                  id: '$gt',\n                  title: 'Is after'\n                }, {\n                  id: '$gte',\n                  title: 'Is on or after'\n                }, {\n                  id: '$lt',\n                  title: 'Is before'\n                }, {\n                  id: '$lte',\n                  title: 'Is on or before'\n                }] : [])),\n                default: operand,\n                onChange: function onChange(value) {\n                  debugger;\n\n                  if (_.isPlainObject(_this.data[path])) {\n                    // Multiple operand setter\n                    console.log('Change nested operand for path', path, 'to', value);\n                    delete _this.$data[path][operand];\n                    _this.$data[path].$eq = value;\n                  } else if (value == '$eq') {\n                    // Single operand setter\n                    console.log('Change simple operand for path', path, 'to', value);\n                    _this.data[path] = value;\n                  } else {\n                    _this.data[path] = _objectSpread(_objectSpread({}, _.isPlainObject(_this.data[path]) ? _this.data : null), {}, _defineProperty({}, value, ''));\n                  }\n\n                  _this.refresh();\n                }\n              }]\n            };\n\n            if (value === undefined) {// Special case for when a path operand hasn't been defined yet - usually just after the user has added a new path or tried to change an existing one\n              // Pass\n            } else if (['$eq', '$ne'].includes(operand) && pathSpec.enum) {\n              row.items.push({\n                type: 'mgChoiceDropdown',\n                enum: populateEnum(pathSpec),\n                default: value\n              });\n            } else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'string') {\n              row.items.push({\n                type: 'mgText',\n                default: value\n              });\n            } else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'number') {\n              row.items.push({\n                type: 'mgNumber',\n                default: value\n              });\n            } else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'date') {\n              row.items.push({\n                type: 'mgDate',\n                default: value\n              });\n            } else if (operand == '$exists') {\n              row.items.push({\n                type: 'mgToggle',\n                onText: 'yes',\n                offText: 'no',\n                default: value\n              });\n            } else if (operand == '$in' || operand == '$nin') {\n              row.items.push({\n                type: 'mgChoiceTags',\n                default: value,\n                enum: populateEnum(pathSpec)\n              });\n            } else {\n              row.items.push({\n                type: 'mgError',\n                text: \"Unsupported operand \\\"\".concat(operand, \"\\\"\")\n              });\n            }\n\n            return row;\n          })\n        );\n      }).reduce(function (t, v) {\n        return t.concat(v);\n      }, []); // Flatten\n    } //changeField(path, value) {\n    //\tconsole.log('Change', path, '=', value);\n    //},\n\n  }\n}));\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgQuery.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/mgQuery.vue":
/*!************************************!*\
  !*** ./src/components/mgQuery.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mgQuery_vue_vue_type_template_id_25c08324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mgQuery.vue?vue&type=template&id=25c08324& */ \"./src/components/mgQuery.vue?vue&type=template&id=25c08324&\");\n/* harmony import */ var _mgQuery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mgQuery.vue?vue&type=script&lang=js& */ \"./src/components/mgQuery.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _mgQuery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _mgQuery_vue_vue_type_template_id_25c08324___WEBPACK_IMPORTED_MODULE_0__.render,\n  _mgQuery_vue_vue_type_template_id_25c08324___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/mgQuery.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgQuery.vue?");

/***/ }),

/***/ "./src/components/mgQuery.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/mgQuery.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mgQuery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mgQuery.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgQuery.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mgQuery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgQuery.vue?");

/***/ }),

/***/ "./src/components/mgQuery.vue?vue&type=template&id=25c08324&":
/*!*******************************************************************!*\
  !*** ./src/components/mgQuery.vue?vue&type=template&id=25c08324& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mgQuery_vue_vue_type_template_id_25c08324___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mgQuery_vue_vue_type_template_id_25c08324___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mgQuery_vue_vue_type_template_id_25c08324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mgQuery.vue?vue&type=template&id=25c08324& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgQuery.vue?vue&type=template&id=25c08324&\");\n\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgQuery.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgQuery.vue?vue&type=template&id=25c08324&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/mgQuery.vue?vue&type=template&id=25c08324& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"mg-form\", {\n        attrs: { form: _vm.$props.id + \"-subform\", config: _vm.queryComponent }\n      }),\n      _vm._v(\" \"),\n      this.$debugging\n        ? _c(\"div\", { staticClass: \"card\" }, [\n            _c(\"div\", { staticClass: \"card-header\" }, [\n              _vm._v(\"\\n\\t\\t\\tRaw data\\n\\t\\t\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"card-body\" }, [\n              _c(\"pre\", [_vm._v(_vm._s(_vm.data))])\n            ])\n          ])\n        : _vm._e(),\n      _vm._v(\" \"),\n      this.$debugging\n        ? _c(\"div\", { staticClass: \"card\" }, [\n            _c(\"div\", { staticClass: \"card-header\" }, [\n              _vm._v(\"\\n\\t\\t\\tRaw spec\\n\\t\\t\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"card-body\" }, [\n              _c(\"pre\", [_vm._v(_vm._s(_vm.queryComponent))])\n            ])\n          ])\n        : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./src/components/mgQuery.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ normalizeComponent)\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://@momsfriendlydevco/macgyver/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/chunk loaded */
/******/ (() => {
/******/ 	var deferred = [];
/******/ 	__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 		if(chunkIds) {
/******/ 			priority = priority || 0;
/******/ 			for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 			deferred[i] = [chunkIds, fn, priority];
/******/ 			return;
/******/ 		}
/******/ 		var notFulfilled = Infinity;
/******/ 		for (var i = 0; i < deferred.length; i++) {
/******/ 			var [chunkIds, fn, priority] = deferred[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 0; j < chunkIds.length; j++) {
/******/ 				if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 					chunkIds.splice(j--, 1);
/******/ 				} else {
/******/ 					fulfilled = false;
/******/ 					if(priority < notFulfilled) notFulfilled = priority;
/******/ 				}
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferred.splice(i--, 1)
/******/ 				result = fn();
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"components/mgQuery": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		for(moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(runtime) runtime(__webpack_require__);
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		__webpack_require__.O();
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = global["webpackChunk_momsfriendlydevco_macgyver"] = global["webpackChunk_momsfriendlydevco_macgyver"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./src/components/mgQuery.vue");
/******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ var __webpack_exports__default = __webpack_exports__.default;
/******/ export { __webpack_exports__default as default };
/******/ 
