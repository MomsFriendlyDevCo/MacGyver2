(function ($, Vue$1, VueRouter) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Vue$1 = Vue$1 && Vue$1.hasOwnProperty('default') ? Vue$1['default'] : Vue$1;
  VueRouter = VueRouter && VueRouter.hasOwnProperty('default') ? VueRouter['default'] : VueRouter;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var script = {
    data: function data() {
      return {
        config: {},
        data: {},
        examples: ['examples/mgChoiceTree.json', 'examples/mgHtml.json', 'examples/mgQuery.json', 'examples/mgWysiwyg.json', 'examples/simple.json', 'examples/shorthand.json', 'examples/showcase.json', 'examples/showIf.json'],
        example: this.$route.query.example || 'examples/showcase.json'
      };
    },
    methods: {
      randomizeData: function randomizeData() {
        this.data = {
          demoText: 'Hello World ' + _.random(100, 999),
          demoNumberSimple: _.random(100, 999)
        };
      }
    },
    watch: {
      example: {
        immediate: true,
        handler: function handler() {
          var _this = this;

          this.$router.push({
            query: _objectSpread2(_objectSpread2({}, this.$route.query), {}, {
              example: this.example
            })
          });
          this.$http.get(this.example).then(function (res) {
            _this.data = {};
            _this.config = res.data;
          });
        }
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "window-panes" }, [
      _c(
        "div",
        { staticClass: "window-pane-left" },
        [
          !_vm.$route.query.edit
            ? _c("mg-form", {
                attrs: { config: _vm.config, data: _vm.data },
                on: {
                  change: function($event) {
                    _vm.data = $event;
                  }
                }
              })
            : _c("mg-form-editor", {
                attrs: { config: _vm.config },
                on: {
                  change: function($event) {
                    _vm.config = $event;
                  }
                }
              })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "window-pane-right" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-header d-flex justify-content-between p-1" },
                [
                  _c("h4", { staticClass: "card-title" }, [_vm._v("Config")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btn-group" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default dropdown-toggle",
                        attrs: { "data-toggle": "dropdown" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.example) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "dropdown-menu" },
                      _vm._l(_vm.examples, function(exampleItem) {
                        return _c("li", { key: _vm.example }, [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              on: {
                                click: function($event) {
                                  _vm.example = exampleItem;
                                }
                              }
                            },
                            [
                              _c("i", {
                                class:
                                  _vm.example == exampleItem
                                    ? "fas fa-check-circle"
                                    : "far fa-circle"
                              }),
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(exampleItem) +
                                  "\n\t\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "card-body",
                  staticStyle: { height: "200px", "overflow-y": "scroll" }
                },
                [_c("pre", [_vm._v(_vm._s(_vm.config))])]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-3" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header p-1" }, [
                _c("div", { staticClass: "btn-group float-right m-1" }, [
                  _c("a", {
                    staticClass: "btn btn-sm btn-light far fa-random",
                    on: {
                      click: function($event) {
                        return _vm.randomizeData()
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "card-title" }, [_vm._v("Form data")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "card-body",
                  staticStyle: { height: "200px", "overflow-y": "scroll" }
                },
                [_c("pre", [_vm._v(_vm._s(_vm.data))])]
              )
            ])
          ])
        ])
      ])
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-bafea072_0", { source: "\na {\n\tcursor: pointer;\n}\n.card .card-title {\n\tmargin-left: 5px;\n\tmargin-bottom: 0;\n}\n.window-panes {\n\tdisplay: block;\n\tposition: fixed;\n\ttop: 60px;\n\tleft: 10px;\n\tbottom: 10px;\n\tright: 10px;\n}\n.window-panes > * {\n\toverflow: auto;\n\theight: calc(100% - 60px);\n\tdisplay: block;\n\tpadding: 20px;\n}\n.window-panes > .window-pane-left {\n\tposition: fixed;\n\tleft: 10px;\n\twidth: calc(50% - 20px);\n\tz-index: 100;\n}\n.window-panes > .window-pane-right {\n\tposition: fixed;\n\tright: 10px;\n\twidth: calc(50% - 20px);\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/demo/form.vue"],"names":[],"mappings":";AAwGA;CACA,eAAA;AACA;AAEA;CACA,gBAAA;CACA,gBAAA;AACA;AAEA;CACA,cAAA;CACA,eAAA;CACA,SAAA;CACA,UAAA;CACA,YAAA;CACA,WAAA;AACA;AAEA;CACA,cAAA;CACA,yBAAA;CACA,cAAA;CACA,aAAA;AACA;AAEA;CACA,eAAA;CACA,UAAA;CACA,uBAAA;CACA,YAAA;AACA;AAEA;CACA,eAAA;CACA,WAAA;CACA,uBAAA;AACA","file":"form.vue","sourcesContent":["<script>\nexport default {\n\tdata() { return {\n\t\tconfig: {},\n\t\tdata: {},\n\t\texamples: [\n\t\t\t'examples/mgChoiceTree.json',\n\t\t\t'examples/mgHtml.json',\n\t\t\t'examples/mgQuery.json',\n\t\t\t'examples/mgWysiwyg.json',\n\t\t\t'examples/simple.json',\n\t\t\t'examples/shorthand.json',\n\t\t\t'examples/showcase.json',\n\t\t\t'examples/showIf.json',\n\t\t],\n\t\texample: this.$route.query.example || 'examples/showcase.json',\n\t}},\n\tmethods: {\n\t\trandomizeData() {\n\t\t\tthis.data = {\n\t\t\t\tdemoText: 'Hello World ' + _.random(100, 999),\n\t\t\t\tdemoNumberSimple: _.random(100, 999),\n\t\t\t}\n\t\t},\n\t},\n\twatch: {\n\t\texample: {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\tthis.$router.push({query: {...this.$route.query, example: this.example}});\n\n\t\t\t\tthis.$http.get(this.example)\n\t\t\t\t\t.then(res => {\n\t\t\t\t\t\tthis.data = {};\n\t\t\t\t\t\tthis.config = res.data;\n\t\t\t\t\t});\n\t\t\t},\n\t\t},\n\t},\n};\n</script>\n\n<template>\n\t<div class=\"window-panes\">\n\t\t<div class=\"window-pane-left\">\n\t\t\t<mg-form\n\t\t\t\tv-if=\"!$route.query.edit\"\n\t\t\t\t:config=\"config\"\n\t\t\t\t:data=\"data\"\n\t\t\t\t@change=\"data = $event\"\n\t\t\t/>\n\t\t\t<mg-form-editor\n\t\t\t\tv-else\n\t\t\t\t:config=\"config\"\n\t\t\t\t@change=\"config = $event\"\n\t\t\t/>\n\t\t</div>\n\n\t\t<div class=\"window-pane-right\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between p-1\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Config</h4>\n\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t{{example}}\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li v-for=\"exampleItem in examples\" :key=\"example\">\n\t\t\t\t\t\t\t\t\t\t<a @click=\"example = exampleItem\" class=\"dropdown-item\">\n\t\t\t\t\t\t\t\t\t\t\t<i :class=\"example == exampleItem ? 'fas fa-check-circle' : 'far fa-circle'\"/>\n\t\t\t\t\t\t\t\t\t\t\t{{exampleItem}}\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\" style=\"height: 200px; overflow-y: scroll\">\n\t\t\t\t\t\t\t<pre>{{config}}</pre>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row mt-3\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-header p-1\">\n\t\t\t\t\t\t\t<div class=\"btn-group float-right m-1\">\n\t\t\t\t\t\t\t\t<a @click=\"randomizeData()\" class=\"btn btn-sm btn-light far fa-random\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Form data</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\" style=\"height: 200px; overflow-y: scroll\">\n\t\t\t\t\t\t\t<pre>{{data}}</pre>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<style>\na {\n\tcursor: pointer;\n}\n\n.card .card-title {\n\tmargin-left: 5px;\n\tmargin-bottom: 0;\n}\n\n.window-panes {\n\tdisplay: block;\n\tposition: fixed;\n\ttop: 60px;\n\tleft: 10px;\n\tbottom: 10px;\n\tright: 10px;\n}\n\n.window-panes > * {\n\toverflow: auto;\n\theight: calc(100% - 60px);\n\tdisplay: block;\n\tpadding: 20px;\n}\n\n.window-panes > .window-pane-left {\n\tposition: fixed;\n\tleft: 10px;\n\twidth: calc(50% - 20px);\n\tz-index: 100;\n}\n\n.window-panes > .window-pane-right {\n\tposition: fixed;\n\tright: 10px;\n\twidth: calc(50% - 20px);\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  var script$1 = {
    data: function data() {
      return {
        formData: {
          text: 'Hello world',
          number: 10
        }
      };
    }
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", { staticClass: "card mb-2" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("mgText")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("mg-text", {
                attrs: { value: _vm.formData.text },
                on: {
                  change: function($event) {
                    _vm.formData.text = $event;
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [
                _vm._v("Value: "),
                _c("code", [_vm._v(_vm._s(_vm.formData.text))])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("mgNumber")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("mg-number", {
                attrs: { value: _vm.formData.number, min: 0, max: 100 },
                on: {
                  change: function($event) {
                    _vm.formData.number = $event;
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [
                _vm._v("Value: "),
                _c("code", [_vm._v(_vm._s(_vm.formData.number))])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1)
        ])
      ])
    ])
  };
  var __vue_staticRenderFns__$1 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "col-md-6" }, [
        _c("pre", [
          _vm._v(
            '<mg-text\n\t:value="formData.text"\n\t@change="formData.text = $event"\n/>'
          )
        ])
      ])
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "col-md-6" }, [
        _c("pre", [
          _vm._v(
            '<mg-number\n\t:value="formData.number"\n\t@change="formData.number = $event"\n\t:min="0"\n\t:max="100"\n/>'
          )
        ])
      ])
    }
  ];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  var script$2 = {};

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "nav",
      { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
      [
        _c("a", { staticClass: "navbar-brand" }, [_vm._v("MacGyver")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse",
            attrs: { id: "navbarAreas" }
          },
          [
            _c("ul", { staticClass: "navbar-nav" }, [
              _c("li", { staticClass: "navbar-item mr-1" }, [
                _c(
                  "a",
                  {
                    class:
                      _vm.$route.path == "/" && !_vm.$route.query.edit
                        ? "btn btn-primary text-white"
                        : "btn btn-light",
                    on: {
                      click: function($event) {
                        return _vm.$router.push({
                          path: "/",
                          query: Object.assign({}, _vm.$route.query, {
                            edit: undefined
                          })
                        })
                      }
                    }
                  },
                  [_vm._v("Form view")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "navbar-item mr-1" }, [
                _c(
                  "a",
                  {
                    class:
                      _vm.$route.path == "/" && _vm.$route.query.edit
                        ? "btn btn-primary text-white"
                        : "btn btn-light",
                    on: {
                      click: function($event) {
                        return _vm.$router.push({
                          path: "/",
                          query: Object.assign({}, _vm.$route.query, { edit: 1 })
                        })
                      }
                    }
                  },
                  [_vm._v("Editor")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "navbar-item" }, [
                _c(
                  "a",
                  {
                    class:
                      _vm.$route.path == "/standalone"
                        ? "btn btn-primary text-white"
                        : "btn btn-light",
                    on: {
                      click: function($event) {
                        return _vm.$router.push({ path: "/standalone" })
                      }
                    }
                  },
                  [_vm._v("Standalone")]
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm._m(1)
      ]
    )
  };
  var __vue_staticRenderFns__$2 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "button",
        {
          staticClass: "navbar-toggler",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarAreas"
          }
        },
        [_c("span", { staticClass: "navbar-toggler-icon" })]
      )
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("ul", { staticClass: "navbar-nav" }, [
        _c("li", { staticClass: "navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-light",
              attrs: { href: "https://github.com/MomsFriendlyDevCo/MacGyver2" }
            },
            [
              _c("i", { staticClass: "fab fa-github" }),
              _vm._v("\n\t\t\t\tGitHub\n\t\t\t")
            ]
          )
        ])
      ])
    }
  ];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-5799aa90_0", { source: "\n.navbar .btn.btn-primary > a {\n\tcolor: #FFF;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/demo/navbar.vue"],"names":[],"mappings":";AA6CA;CACA,WAAA;AACA","file":"navbar.vue","sourcesContent":["<script>\nexport default {\n};\n</script>\n\n<template>\n\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t\t<a class=\"navbar-brand\">MacGyver</a>\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarAreas\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarAreas\">\n\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t<li class=\"navbar-item mr-1\">\n\t\t\t\t\t<a\n\t\t\t\t\t\t:class=\"$route.path == '/' && !$route.query.edit ? 'btn btn-primary text-white' : 'btn btn-light'\"\n\t\t\t\t\t\t@click=\"$router.push({path: '/', query: {...$route.query, edit: undefined}})\"\n\t\t\t\t\t>Form view</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navbar-item mr-1\">\n\t\t\t\t\t<a\n\t\t\t\t\t\t:class=\"$route.path == '/' && $route.query.edit  ? 'btn btn-primary text-white' : 'btn btn-light'\"\n\t\t\t\t\t\t@click=\"$router.push({path: '/', query: {...$route.query, edit: 1}})\"\n\t\t\t\t\t>Editor</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navbar-item\">\n\t\t\t\t\t<a\n\t\t\t\t\t\t:class=\"$route.path == '/standalone' ? 'btn btn-primary text-white' : 'btn btn-light'\"\n\t\t\t\t\t\t@click=\"$router.push({path: '/standalone'})\"\n\t\t\t\t\t>Standalone</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<ul class=\"navbar-nav\">\n\t\t\t<li class=\"navbar-item\">\n\t\t\t\t<a href=\"https://github.com/MomsFriendlyDevCo/MacGyver2\" class=\"btn btn-light\">\n\t\t\t\t\t<i class=\"fab fa-github\"/>\n\t\t\t\t\tGitHub\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n</template>\n\n<style>\n.navbar .btn.btn-primary > a {\n\tcolor: #FFF;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      createInjector,
      undefined,
      undefined
    );

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  function nextTick(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues
  var versions = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;

  function binding(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd () { return '/' }
  function chdir (dir) {
      throw new Error('process.chdir is not supported');
  }function umask() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp){
    var clocktime = performanceNow.call(performance)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var process = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var axios = createCommonjsModule(function (module, exports) {
  /* axios v0.19.2 | (c) 2020 by Matt Zabriskie */
  (function webpackUniversalModuleDefinition(root, factory) {
  	module.exports = factory();
  })(commonjsGlobal, function() {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId])
  /******/ 			return installedModules[moduleId].exports;
  /******/
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			exports: {},
  /******/ 			id: moduleId,
  /******/ 			loaded: false
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.loaded = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {

  	module.exports = __webpack_require__(1);

  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var bind = __webpack_require__(3);
  	var Axios = __webpack_require__(4);
  	var mergeConfig = __webpack_require__(22);
  	var defaults = __webpack_require__(10);
  	
  	/**
  	 * Create an instance of Axios
  	 *
  	 * @param {Object} defaultConfig The default config for the instance
  	 * @return {Axios} A new instance of Axios
  	 */
  	function createInstance(defaultConfig) {
  	  var context = new Axios(defaultConfig);
  	  var instance = bind(Axios.prototype.request, context);
  	
  	  // Copy axios.prototype to instance
  	  utils.extend(instance, Axios.prototype, context);
  	
  	  // Copy context to instance
  	  utils.extend(instance, context);
  	
  	  return instance;
  	}
  	
  	// Create the default instance to be exported
  	var axios = createInstance(defaults);
  	
  	// Expose Axios class to allow class inheritance
  	axios.Axios = Axios;
  	
  	// Factory for creating new instances
  	axios.create = function create(instanceConfig) {
  	  return createInstance(mergeConfig(axios.defaults, instanceConfig));
  	};
  	
  	// Expose Cancel & CancelToken
  	axios.Cancel = __webpack_require__(23);
  	axios.CancelToken = __webpack_require__(24);
  	axios.isCancel = __webpack_require__(9);
  	
  	// Expose all/spread
  	axios.all = function all(promises) {
  	  return Promise.all(promises);
  	};
  	axios.spread = __webpack_require__(25);
  	
  	module.exports = axios;
  	
  	// Allow use of default import syntax in TypeScript
  	module.exports.default = axios;


  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var bind = __webpack_require__(3);
  	
  	/*global toString:true*/
  	
  	// utils is a library of generic helper functions non-specific to axios
  	
  	var toString = Object.prototype.toString;
  	
  	/**
  	 * Determine if a value is an Array
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an Array, otherwise false
  	 */
  	function isArray(val) {
  	  return toString.call(val) === '[object Array]';
  	}
  	
  	/**
  	 * Determine if a value is undefined
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if the value is undefined, otherwise false
  	 */
  	function isUndefined(val) {
  	  return typeof val === 'undefined';
  	}
  	
  	/**
  	 * Determine if a value is a Buffer
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Buffer, otherwise false
  	 */
  	function isBuffer(val) {
  	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
  	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  	}
  	
  	/**
  	 * Determine if a value is an ArrayBuffer
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
  	 */
  	function isArrayBuffer(val) {
  	  return toString.call(val) === '[object ArrayBuffer]';
  	}
  	
  	/**
  	 * Determine if a value is a FormData
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an FormData, otherwise false
  	 */
  	function isFormData(val) {
  	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
  	}
  	
  	/**
  	 * Determine if a value is a view on an ArrayBuffer
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
  	 */
  	function isArrayBufferView(val) {
  	  var result;
  	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
  	    result = ArrayBuffer.isView(val);
  	  } else {
  	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  	  }
  	  return result;
  	}
  	
  	/**
  	 * Determine if a value is a String
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a String, otherwise false
  	 */
  	function isString(val) {
  	  return typeof val === 'string';
  	}
  	
  	/**
  	 * Determine if a value is a Number
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Number, otherwise false
  	 */
  	function isNumber(val) {
  	  return typeof val === 'number';
  	}
  	
  	/**
  	 * Determine if a value is an Object
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an Object, otherwise false
  	 */
  	function isObject(val) {
  	  return val !== null && typeof val === 'object';
  	}
  	
  	/**
  	 * Determine if a value is a Date
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Date, otherwise false
  	 */
  	function isDate(val) {
  	  return toString.call(val) === '[object Date]';
  	}
  	
  	/**
  	 * Determine if a value is a File
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a File, otherwise false
  	 */
  	function isFile(val) {
  	  return toString.call(val) === '[object File]';
  	}
  	
  	/**
  	 * Determine if a value is a Blob
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Blob, otherwise false
  	 */
  	function isBlob(val) {
  	  return toString.call(val) === '[object Blob]';
  	}
  	
  	/**
  	 * Determine if a value is a Function
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Function, otherwise false
  	 */
  	function isFunction(val) {
  	  return toString.call(val) === '[object Function]';
  	}
  	
  	/**
  	 * Determine if a value is a Stream
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Stream, otherwise false
  	 */
  	function isStream(val) {
  	  return isObject(val) && isFunction(val.pipe);
  	}
  	
  	/**
  	 * Determine if a value is a URLSearchParams object
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
  	 */
  	function isURLSearchParams(val) {
  	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  	}
  	
  	/**
  	 * Trim excess whitespace off the beginning and end of a string
  	 *
  	 * @param {String} str The String to trim
  	 * @returns {String} The String freed of excess whitespace
  	 */
  	function trim(str) {
  	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
  	}
  	
  	/**
  	 * Determine if we're running in a standard browser environment
  	 *
  	 * This allows axios to run in a web worker, and react-native.
  	 * Both environments support XMLHttpRequest, but not fully standard globals.
  	 *
  	 * web workers:
  	 *  typeof window -> undefined
  	 *  typeof document -> undefined
  	 *
  	 * react-native:
  	 *  navigator.product -> 'ReactNative'
  	 * nativescript
  	 *  navigator.product -> 'NativeScript' or 'NS'
  	 */
  	function isStandardBrowserEnv() {
  	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
  	                                           navigator.product === 'NativeScript' ||
  	                                           navigator.product === 'NS')) {
  	    return false;
  	  }
  	  return (
  	    typeof window !== 'undefined' &&
  	    typeof document !== 'undefined'
  	  );
  	}
  	
  	/**
  	 * Iterate over an Array or an Object invoking a function for each item.
  	 *
  	 * If `obj` is an Array callback will be called passing
  	 * the value, index, and complete array for each item.
  	 *
  	 * If 'obj' is an Object callback will be called passing
  	 * the value, key, and complete object for each property.
  	 *
  	 * @param {Object|Array} obj The object to iterate
  	 * @param {Function} fn The callback to invoke for each item
  	 */
  	function forEach(obj, fn) {
  	  // Don't bother if no value provided
  	  if (obj === null || typeof obj === 'undefined') {
  	    return;
  	  }
  	
  	  // Force an array if not already something iterable
  	  if (typeof obj !== 'object') {
  	    /*eslint no-param-reassign:0*/
  	    obj = [obj];
  	  }
  	
  	  if (isArray(obj)) {
  	    // Iterate over array values
  	    for (var i = 0, l = obj.length; i < l; i++) {
  	      fn.call(null, obj[i], i, obj);
  	    }
  	  } else {
  	    // Iterate over object keys
  	    for (var key in obj) {
  	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
  	        fn.call(null, obj[key], key, obj);
  	      }
  	    }
  	  }
  	}
  	
  	/**
  	 * Accepts varargs expecting each argument to be an object, then
  	 * immutably merges the properties of each object and returns result.
  	 *
  	 * When multiple objects contain the same key the later object in
  	 * the arguments list will take precedence.
  	 *
  	 * Example:
  	 *
  	 * ```js
  	 * var result = merge({foo: 123}, {foo: 456});
  	 * console.log(result.foo); // outputs 456
  	 * ```
  	 *
  	 * @param {Object} obj1 Object to merge
  	 * @returns {Object} Result of all merge properties
  	 */
  	function merge(/* obj1, obj2, obj3, ... */) {
  	  var result = {};
  	  function assignValue(val, key) {
  	    if (typeof result[key] === 'object' && typeof val === 'object') {
  	      result[key] = merge(result[key], val);
  	    } else {
  	      result[key] = val;
  	    }
  	  }
  	
  	  for (var i = 0, l = arguments.length; i < l; i++) {
  	    forEach(arguments[i], assignValue);
  	  }
  	  return result;
  	}
  	
  	/**
  	 * Function equal to merge with the difference being that no reference
  	 * to original objects is kept.
  	 *
  	 * @see merge
  	 * @param {Object} obj1 Object to merge
  	 * @returns {Object} Result of all merge properties
  	 */
  	function deepMerge(/* obj1, obj2, obj3, ... */) {
  	  var result = {};
  	  function assignValue(val, key) {
  	    if (typeof result[key] === 'object' && typeof val === 'object') {
  	      result[key] = deepMerge(result[key], val);
  	    } else if (typeof val === 'object') {
  	      result[key] = deepMerge({}, val);
  	    } else {
  	      result[key] = val;
  	    }
  	  }
  	
  	  for (var i = 0, l = arguments.length; i < l; i++) {
  	    forEach(arguments[i], assignValue);
  	  }
  	  return result;
  	}
  	
  	/**
  	 * Extends object a by mutably adding to it the properties of object b.
  	 *
  	 * @param {Object} a The object to be extended
  	 * @param {Object} b The object to copy properties from
  	 * @param {Object} thisArg The object to bind function to
  	 * @return {Object} The resulting value of object a
  	 */
  	function extend(a, b, thisArg) {
  	  forEach(b, function assignValue(val, key) {
  	    if (thisArg && typeof val === 'function') {
  	      a[key] = bind(val, thisArg);
  	    } else {
  	      a[key] = val;
  	    }
  	  });
  	  return a;
  	}
  	
  	module.exports = {
  	  isArray: isArray,
  	  isArrayBuffer: isArrayBuffer,
  	  isBuffer: isBuffer,
  	  isFormData: isFormData,
  	  isArrayBufferView: isArrayBufferView,
  	  isString: isString,
  	  isNumber: isNumber,
  	  isObject: isObject,
  	  isUndefined: isUndefined,
  	  isDate: isDate,
  	  isFile: isFile,
  	  isBlob: isBlob,
  	  isFunction: isFunction,
  	  isStream: isStream,
  	  isURLSearchParams: isURLSearchParams,
  	  isStandardBrowserEnv: isStandardBrowserEnv,
  	  forEach: forEach,
  	  merge: merge,
  	  deepMerge: deepMerge,
  	  extend: extend,
  	  trim: trim
  	};


  /***/ }),
  /* 3 */
  /***/ (function(module, exports) {
  	
  	module.exports = function bind(fn, thisArg) {
  	  return function wrap() {
  	    var args = new Array(arguments.length);
  	    for (var i = 0; i < args.length; i++) {
  	      args[i] = arguments[i];
  	    }
  	    return fn.apply(thisArg, args);
  	  };
  	};


  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var buildURL = __webpack_require__(5);
  	var InterceptorManager = __webpack_require__(6);
  	var dispatchRequest = __webpack_require__(7);
  	var mergeConfig = __webpack_require__(22);
  	
  	/**
  	 * Create a new instance of Axios
  	 *
  	 * @param {Object} instanceConfig The default config for the instance
  	 */
  	function Axios(instanceConfig) {
  	  this.defaults = instanceConfig;
  	  this.interceptors = {
  	    request: new InterceptorManager(),
  	    response: new InterceptorManager()
  	  };
  	}
  	
  	/**
  	 * Dispatch a request
  	 *
  	 * @param {Object} config The config specific for this request (merged with this.defaults)
  	 */
  	Axios.prototype.request = function request(config) {
  	  /*eslint no-param-reassign:0*/
  	  // Allow for axios('example/url'[, config]) a la fetch API
  	  if (typeof config === 'string') {
  	    config = arguments[1] || {};
  	    config.url = arguments[0];
  	  } else {
  	    config = config || {};
  	  }
  	
  	  config = mergeConfig(this.defaults, config);
  	
  	  // Set config.method
  	  if (config.method) {
  	    config.method = config.method.toLowerCase();
  	  } else if (this.defaults.method) {
  	    config.method = this.defaults.method.toLowerCase();
  	  } else {
  	    config.method = 'get';
  	  }
  	
  	  // Hook up interceptors middleware
  	  var chain = [dispatchRequest, undefined];
  	  var promise = Promise.resolve(config);
  	
  	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
  	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  	  });
  	
  	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
  	    chain.push(interceptor.fulfilled, interceptor.rejected);
  	  });
  	
  	  while (chain.length) {
  	    promise = promise.then(chain.shift(), chain.shift());
  	  }
  	
  	  return promise;
  	};
  	
  	Axios.prototype.getUri = function getUri(config) {
  	  config = mergeConfig(this.defaults, config);
  	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  	};
  	
  	// Provide aliases for supported request methods
  	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  	  /*eslint func-names:0*/
  	  Axios.prototype[method] = function(url, config) {
  	    return this.request(utils.merge(config || {}, {
  	      method: method,
  	      url: url
  	    }));
  	  };
  	});
  	
  	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  	  /*eslint func-names:0*/
  	  Axios.prototype[method] = function(url, data, config) {
  	    return this.request(utils.merge(config || {}, {
  	      method: method,
  	      url: url,
  	      data: data
  	    }));
  	  };
  	});
  	
  	module.exports = Axios;


  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	function encode(val) {
  	  return encodeURIComponent(val).
  	    replace(/%40/gi, '@').
  	    replace(/%3A/gi, ':').
  	    replace(/%24/g, '$').
  	    replace(/%2C/gi, ',').
  	    replace(/%20/g, '+').
  	    replace(/%5B/gi, '[').
  	    replace(/%5D/gi, ']');
  	}
  	
  	/**
  	 * Build a URL by appending params to the end
  	 *
  	 * @param {string} url The base of the url (e.g., http://www.google.com)
  	 * @param {object} [params] The params to be appended
  	 * @returns {string} The formatted url
  	 */
  	module.exports = function buildURL(url, params, paramsSerializer) {
  	  /*eslint no-param-reassign:0*/
  	  if (!params) {
  	    return url;
  	  }
  	
  	  var serializedParams;
  	  if (paramsSerializer) {
  	    serializedParams = paramsSerializer(params);
  	  } else if (utils.isURLSearchParams(params)) {
  	    serializedParams = params.toString();
  	  } else {
  	    var parts = [];
  	
  	    utils.forEach(params, function serialize(val, key) {
  	      if (val === null || typeof val === 'undefined') {
  	        return;
  	      }
  	
  	      if (utils.isArray(val)) {
  	        key = key + '[]';
  	      } else {
  	        val = [val];
  	      }
  	
  	      utils.forEach(val, function parseValue(v) {
  	        if (utils.isDate(v)) {
  	          v = v.toISOString();
  	        } else if (utils.isObject(v)) {
  	          v = JSON.stringify(v);
  	        }
  	        parts.push(encode(key) + '=' + encode(v));
  	      });
  	    });
  	
  	    serializedParams = parts.join('&');
  	  }
  	
  	  if (serializedParams) {
  	    var hashmarkIndex = url.indexOf('#');
  	    if (hashmarkIndex !== -1) {
  	      url = url.slice(0, hashmarkIndex);
  	    }
  	
  	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  	  }
  	
  	  return url;
  	};


  /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	function InterceptorManager() {
  	  this.handlers = [];
  	}
  	
  	/**
  	 * Add a new interceptor to the stack
  	 *
  	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
  	 * @param {Function} rejected The function to handle `reject` for a `Promise`
  	 *
  	 * @return {Number} An ID used to remove interceptor later
  	 */
  	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  	  this.handlers.push({
  	    fulfilled: fulfilled,
  	    rejected: rejected
  	  });
  	  return this.handlers.length - 1;
  	};
  	
  	/**
  	 * Remove an interceptor from the stack
  	 *
  	 * @param {Number} id The ID that was returned by `use`
  	 */
  	InterceptorManager.prototype.eject = function eject(id) {
  	  if (this.handlers[id]) {
  	    this.handlers[id] = null;
  	  }
  	};
  	
  	/**
  	 * Iterate over all the registered interceptors
  	 *
  	 * This method is particularly useful for skipping over any
  	 * interceptors that may have become `null` calling `eject`.
  	 *
  	 * @param {Function} fn The function to call for each interceptor
  	 */
  	InterceptorManager.prototype.forEach = function forEach(fn) {
  	  utils.forEach(this.handlers, function forEachHandler(h) {
  	    if (h !== null) {
  	      fn(h);
  	    }
  	  });
  	};
  	
  	module.exports = InterceptorManager;


  /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var transformData = __webpack_require__(8);
  	var isCancel = __webpack_require__(9);
  	var defaults = __webpack_require__(10);
  	
  	/**
  	 * Throws a `Cancel` if cancellation has been requested.
  	 */
  	function throwIfCancellationRequested(config) {
  	  if (config.cancelToken) {
  	    config.cancelToken.throwIfRequested();
  	  }
  	}
  	
  	/**
  	 * Dispatch a request to the server using the configured adapter.
  	 *
  	 * @param {object} config The config that is to be used for the request
  	 * @returns {Promise} The Promise to be fulfilled
  	 */
  	module.exports = function dispatchRequest(config) {
  	  throwIfCancellationRequested(config);
  	
  	  // Ensure headers exist
  	  config.headers = config.headers || {};
  	
  	  // Transform request data
  	  config.data = transformData(
  	    config.data,
  	    config.headers,
  	    config.transformRequest
  	  );
  	
  	  // Flatten headers
  	  config.headers = utils.merge(
  	    config.headers.common || {},
  	    config.headers[config.method] || {},
  	    config.headers
  	  );
  	
  	  utils.forEach(
  	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  	    function cleanHeaderConfig(method) {
  	      delete config.headers[method];
  	    }
  	  );
  	
  	  var adapter = config.adapter || defaults.adapter;
  	
  	  return adapter(config).then(function onAdapterResolution(response) {
  	    throwIfCancellationRequested(config);
  	
  	    // Transform response data
  	    response.data = transformData(
  	      response.data,
  	      response.headers,
  	      config.transformResponse
  	    );
  	
  	    return response;
  	  }, function onAdapterRejection(reason) {
  	    if (!isCancel(reason)) {
  	      throwIfCancellationRequested(config);
  	
  	      // Transform response data
  	      if (reason && reason.response) {
  	        reason.response.data = transformData(
  	          reason.response.data,
  	          reason.response.headers,
  	          config.transformResponse
  	        );
  	      }
  	    }
  	
  	    return Promise.reject(reason);
  	  });
  	};


  /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	/**
  	 * Transform the data for a request or a response
  	 *
  	 * @param {Object|String} data The data to be transformed
  	 * @param {Array} headers The headers for the request or response
  	 * @param {Array|Function} fns A single function or Array of functions
  	 * @returns {*} The resulting transformed data
  	 */
  	module.exports = function transformData(data, headers, fns) {
  	  /*eslint no-param-reassign:0*/
  	  utils.forEach(fns, function transform(fn) {
  	    data = fn(data, headers);
  	  });
  	
  	  return data;
  	};


  /***/ }),
  /* 9 */
  /***/ (function(module, exports) {
  	
  	module.exports = function isCancel(value) {
  	  return !!(value && value.__CANCEL__);
  	};


  /***/ }),
  /* 10 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var normalizeHeaderName = __webpack_require__(11);
  	
  	var DEFAULT_CONTENT_TYPE = {
  	  'Content-Type': 'application/x-www-form-urlencoded'
  	};
  	
  	function setContentTypeIfUnset(headers, value) {
  	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
  	    headers['Content-Type'] = value;
  	  }
  	}
  	
  	function getDefaultAdapter() {
  	  var adapter;
  	  if (typeof XMLHttpRequest !== 'undefined') {
  	    // For browsers use XHR adapter
  	    adapter = __webpack_require__(12);
  	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
  	    // For node use HTTP adapter
  	    adapter = __webpack_require__(12);
  	  }
  	  return adapter;
  	}
  	
  	var defaults = {
  	  adapter: getDefaultAdapter(),
  	
  	  transformRequest: [function transformRequest(data, headers) {
  	    normalizeHeaderName(headers, 'Accept');
  	    normalizeHeaderName(headers, 'Content-Type');
  	    if (utils.isFormData(data) ||
  	      utils.isArrayBuffer(data) ||
  	      utils.isBuffer(data) ||
  	      utils.isStream(data) ||
  	      utils.isFile(data) ||
  	      utils.isBlob(data)
  	    ) {
  	      return data;
  	    }
  	    if (utils.isArrayBufferView(data)) {
  	      return data.buffer;
  	    }
  	    if (utils.isURLSearchParams(data)) {
  	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
  	      return data.toString();
  	    }
  	    if (utils.isObject(data)) {
  	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
  	      return JSON.stringify(data);
  	    }
  	    return data;
  	  }],
  	
  	  transformResponse: [function transformResponse(data) {
  	    /*eslint no-param-reassign:0*/
  	    if (typeof data === 'string') {
  	      try {
  	        data = JSON.parse(data);
  	      } catch (e) { /* Ignore */ }
  	    }
  	    return data;
  	  }],
  	
  	  /**
  	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
  	   * timeout is not created.
  	   */
  	  timeout: 0,
  	
  	  xsrfCookieName: 'XSRF-TOKEN',
  	  xsrfHeaderName: 'X-XSRF-TOKEN',
  	
  	  maxContentLength: -1,
  	
  	  validateStatus: function validateStatus(status) {
  	    return status >= 200 && status < 300;
  	  }
  	};
  	
  	defaults.headers = {
  	  common: {
  	    'Accept': 'application/json, text/plain, */*'
  	  }
  	};
  	
  	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  	  defaults.headers[method] = {};
  	});
  	
  	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  	});
  	
  	module.exports = defaults;


  /***/ }),
  /* 11 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	module.exports = function normalizeHeaderName(headers, normalizedName) {
  	  utils.forEach(headers, function processHeader(value, name) {
  	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
  	      headers[normalizedName] = value;
  	      delete headers[name];
  	    }
  	  });
  	};


  /***/ }),
  /* 12 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var settle = __webpack_require__(13);
  	var buildURL = __webpack_require__(5);
  	var buildFullPath = __webpack_require__(16);
  	var parseHeaders = __webpack_require__(19);
  	var isURLSameOrigin = __webpack_require__(20);
  	var createError = __webpack_require__(14);
  	
  	module.exports = function xhrAdapter(config) {
  	  return new Promise(function dispatchXhrRequest(resolve, reject) {
  	    var requestData = config.data;
  	    var requestHeaders = config.headers;
  	
  	    if (utils.isFormData(requestData)) {
  	      delete requestHeaders['Content-Type']; // Let the browser set it
  	    }
  	
  	    var request = new XMLHttpRequest();
  	
  	    // HTTP basic authentication
  	    if (config.auth) {
  	      var username = config.auth.username || '';
  	      var password = config.auth.password || '';
  	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
  	    }
  	
  	    var fullPath = buildFullPath(config.baseURL, config.url);
  	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
  	
  	    // Set the request timeout in MS
  	    request.timeout = config.timeout;
  	
  	    // Listen for ready state
  	    request.onreadystatechange = function handleLoad() {
  	      if (!request || request.readyState !== 4) {
  	        return;
  	      }
  	
  	      // The request errored out and we didn't get a response, this will be
  	      // handled by onerror instead
  	      // With one exception: request that using file: protocol, most browsers
  	      // will return status as 0 even though it's a successful request
  	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
  	        return;
  	      }
  	
  	      // Prepare the response
  	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
  	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
  	      var response = {
  	        data: responseData,
  	        status: request.status,
  	        statusText: request.statusText,
  	        headers: responseHeaders,
  	        config: config,
  	        request: request
  	      };
  	
  	      settle(resolve, reject, response);
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Handle browser request cancellation (as opposed to a manual cancellation)
  	    request.onabort = function handleAbort() {
  	      if (!request) {
  	        return;
  	      }
  	
  	      reject(createError('Request aborted', config, 'ECONNABORTED', request));
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Handle low level network errors
  	    request.onerror = function handleError() {
  	      // Real errors are hidden from us by the browser
  	      // onerror should only fire if it's a network error
  	      reject(createError('Network Error', config, null, request));
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Handle timeout
  	    request.ontimeout = function handleTimeout() {
  	      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
  	      if (config.timeoutErrorMessage) {
  	        timeoutErrorMessage = config.timeoutErrorMessage;
  	      }
  	      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
  	        request));
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Add xsrf header
  	    // This is only done if running in a standard browser environment.
  	    // Specifically not if we're in a web worker, or react-native.
  	    if (utils.isStandardBrowserEnv()) {
  	      var cookies = __webpack_require__(21);
  	
  	      // Add xsrf header
  	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
  	        cookies.read(config.xsrfCookieName) :
  	        undefined;
  	
  	      if (xsrfValue) {
  	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
  	      }
  	    }
  	
  	    // Add headers to the request
  	    if ('setRequestHeader' in request) {
  	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
  	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
  	          // Remove Content-Type if data is undefined
  	          delete requestHeaders[key];
  	        } else {
  	          // Otherwise add header to the request
  	          request.setRequestHeader(key, val);
  	        }
  	      });
  	    }
  	
  	    // Add withCredentials to request if needed
  	    if (!utils.isUndefined(config.withCredentials)) {
  	      request.withCredentials = !!config.withCredentials;
  	    }
  	
  	    // Add responseType to request if needed
  	    if (config.responseType) {
  	      try {
  	        request.responseType = config.responseType;
  	      } catch (e) {
  	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
  	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
  	        if (config.responseType !== 'json') {
  	          throw e;
  	        }
  	      }
  	    }
  	
  	    // Handle progress if needed
  	    if (typeof config.onDownloadProgress === 'function') {
  	      request.addEventListener('progress', config.onDownloadProgress);
  	    }
  	
  	    // Not all browsers support upload events
  	    if (typeof config.onUploadProgress === 'function' && request.upload) {
  	      request.upload.addEventListener('progress', config.onUploadProgress);
  	    }
  	
  	    if (config.cancelToken) {
  	      // Handle cancellation
  	      config.cancelToken.promise.then(function onCanceled(cancel) {
  	        if (!request) {
  	          return;
  	        }
  	
  	        request.abort();
  	        reject(cancel);
  	        // Clean up request
  	        request = null;
  	      });
  	    }
  	
  	    if (requestData === undefined) {
  	      requestData = null;
  	    }
  	
  	    // Send the request
  	    request.send(requestData);
  	  });
  	};


  /***/ }),
  /* 13 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var createError = __webpack_require__(14);
  	
  	/**
  	 * Resolve or reject a Promise based on response status.
  	 *
  	 * @param {Function} resolve A function that resolves the promise.
  	 * @param {Function} reject A function that rejects the promise.
  	 * @param {object} response The response.
  	 */
  	module.exports = function settle(resolve, reject, response) {
  	  var validateStatus = response.config.validateStatus;
  	  if (!validateStatus || validateStatus(response.status)) {
  	    resolve(response);
  	  } else {
  	    reject(createError(
  	      'Request failed with status code ' + response.status,
  	      response.config,
  	      null,
  	      response.request,
  	      response
  	    ));
  	  }
  	};


  /***/ }),
  /* 14 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var enhanceError = __webpack_require__(15);
  	
  	/**
  	 * Create an Error with the specified message, config, error code, request and response.
  	 *
  	 * @param {string} message The error message.
  	 * @param {Object} config The config.
  	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
  	 * @param {Object} [request] The request.
  	 * @param {Object} [response] The response.
  	 * @returns {Error} The created error.
  	 */
  	module.exports = function createError(message, config, code, request, response) {
  	  var error = new Error(message);
  	  return enhanceError(error, config, code, request, response);
  	};


  /***/ }),
  /* 15 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Update an Error with the specified config, error code, and response.
  	 *
  	 * @param {Error} error The error to update.
  	 * @param {Object} config The config.
  	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
  	 * @param {Object} [request] The request.
  	 * @param {Object} [response] The response.
  	 * @returns {Error} The error.
  	 */
  	module.exports = function enhanceError(error, config, code, request, response) {
  	  error.config = config;
  	  if (code) {
  	    error.code = code;
  	  }
  	
  	  error.request = request;
  	  error.response = response;
  	  error.isAxiosError = true;
  	
  	  error.toJSON = function() {
  	    return {
  	      // Standard
  	      message: this.message,
  	      name: this.name,
  	      // Microsoft
  	      description: this.description,
  	      number: this.number,
  	      // Mozilla
  	      fileName: this.fileName,
  	      lineNumber: this.lineNumber,
  	      columnNumber: this.columnNumber,
  	      stack: this.stack,
  	      // Axios
  	      config: this.config,
  	      code: this.code
  	    };
  	  };
  	  return error;
  	};


  /***/ }),
  /* 16 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var isAbsoluteURL = __webpack_require__(17);
  	var combineURLs = __webpack_require__(18);
  	
  	/**
  	 * Creates a new URL by combining the baseURL with the requestedURL,
  	 * only when the requestedURL is not already an absolute URL.
  	 * If the requestURL is absolute, this function returns the requestedURL untouched.
  	 *
  	 * @param {string} baseURL The base URL
  	 * @param {string} requestedURL Absolute or relative URL to combine
  	 * @returns {string} The combined full path
  	 */
  	module.exports = function buildFullPath(baseURL, requestedURL) {
  	  if (baseURL && !isAbsoluteURL(requestedURL)) {
  	    return combineURLs(baseURL, requestedURL);
  	  }
  	  return requestedURL;
  	};


  /***/ }),
  /* 17 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Determines whether the specified URL is absolute
  	 *
  	 * @param {string} url The URL to test
  	 * @returns {boolean} True if the specified URL is absolute, otherwise false
  	 */
  	module.exports = function isAbsoluteURL(url) {
  	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  	  // by any combination of letters, digits, plus, period, or hyphen.
  	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  	};


  /***/ }),
  /* 18 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Creates a new URL by combining the specified URLs
  	 *
  	 * @param {string} baseURL The base URL
  	 * @param {string} relativeURL The relative URL
  	 * @returns {string} The combined URL
  	 */
  	module.exports = function combineURLs(baseURL, relativeURL) {
  	  return relativeURL
  	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
  	    : baseURL;
  	};


  /***/ }),
  /* 19 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	// Headers whose duplicates are ignored by node
  	// c.f. https://nodejs.org/api/http.html#http_message_headers
  	var ignoreDuplicateOf = [
  	  'age', 'authorization', 'content-length', 'content-type', 'etag',
  	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  	  'referer', 'retry-after', 'user-agent'
  	];
  	
  	/**
  	 * Parse headers into an object
  	 *
  	 * ```
  	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
  	 * Content-Type: application/json
  	 * Connection: keep-alive
  	 * Transfer-Encoding: chunked
  	 * ```
  	 *
  	 * @param {String} headers Headers needing to be parsed
  	 * @returns {Object} Headers parsed into an object
  	 */
  	module.exports = function parseHeaders(headers) {
  	  var parsed = {};
  	  var key;
  	  var val;
  	  var i;
  	
  	  if (!headers) { return parsed; }
  	
  	  utils.forEach(headers.split('\n'), function parser(line) {
  	    i = line.indexOf(':');
  	    key = utils.trim(line.substr(0, i)).toLowerCase();
  	    val = utils.trim(line.substr(i + 1));
  	
  	    if (key) {
  	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
  	        return;
  	      }
  	      if (key === 'set-cookie') {
  	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
  	      } else {
  	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
  	      }
  	    }
  	  });
  	
  	  return parsed;
  	};


  /***/ }),
  /* 20 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	module.exports = (
  	  utils.isStandardBrowserEnv() ?
  	
  	  // Standard browser envs have full support of the APIs needed to test
  	  // whether the request URL is of the same origin as current location.
  	    (function standardBrowserEnv() {
  	      var msie = /(msie|trident)/i.test(navigator.userAgent);
  	      var urlParsingNode = document.createElement('a');
  	      var originURL;
  	
  	      /**
  	    * Parse a URL to discover it's components
  	    *
  	    * @param {String} url The URL to be parsed
  	    * @returns {Object}
  	    */
  	      function resolveURL(url) {
  	        var href = url;
  	
  	        if (msie) {
  	        // IE needs attribute set twice to normalize properties
  	          urlParsingNode.setAttribute('href', href);
  	          href = urlParsingNode.href;
  	        }
  	
  	        urlParsingNode.setAttribute('href', href);
  	
  	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  	        return {
  	          href: urlParsingNode.href,
  	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
  	          host: urlParsingNode.host,
  	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
  	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
  	          hostname: urlParsingNode.hostname,
  	          port: urlParsingNode.port,
  	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
  	            urlParsingNode.pathname :
  	            '/' + urlParsingNode.pathname
  	        };
  	      }
  	
  	      originURL = resolveURL(window.location.href);
  	
  	      /**
  	    * Determine if a URL shares the same origin as the current location
  	    *
  	    * @param {String} requestURL The URL to test
  	    * @returns {boolean} True if URL shares the same origin, otherwise false
  	    */
  	      return function isURLSameOrigin(requestURL) {
  	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
  	        return (parsed.protocol === originURL.protocol &&
  	            parsed.host === originURL.host);
  	      };
  	    })() :
  	
  	  // Non standard browser envs (web workers, react-native) lack needed support.
  	    (function nonStandardBrowserEnv() {
  	      return function isURLSameOrigin() {
  	        return true;
  	      };
  	    })()
  	);


  /***/ }),
  /* 21 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	module.exports = (
  	  utils.isStandardBrowserEnv() ?
  	
  	  // Standard browser envs support document.cookie
  	    (function standardBrowserEnv() {
  	      return {
  	        write: function write(name, value, expires, path, domain, secure) {
  	          var cookie = [];
  	          cookie.push(name + '=' + encodeURIComponent(value));
  	
  	          if (utils.isNumber(expires)) {
  	            cookie.push('expires=' + new Date(expires).toGMTString());
  	          }
  	
  	          if (utils.isString(path)) {
  	            cookie.push('path=' + path);
  	          }
  	
  	          if (utils.isString(domain)) {
  	            cookie.push('domain=' + domain);
  	          }
  	
  	          if (secure === true) {
  	            cookie.push('secure');
  	          }
  	
  	          document.cookie = cookie.join('; ');
  	        },
  	
  	        read: function read(name) {
  	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  	          return (match ? decodeURIComponent(match[3]) : null);
  	        },
  	
  	        remove: function remove(name) {
  	          this.write(name, '', Date.now() - 86400000);
  	        }
  	      };
  	    })() :
  	
  	  // Non standard browser env (web workers, react-native) lack needed support.
  	    (function nonStandardBrowserEnv() {
  	      return {
  	        write: function write() {},
  	        read: function read() { return null; },
  	        remove: function remove() {}
  	      };
  	    })()
  	);


  /***/ }),
  /* 22 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	/**
  	 * Config-specific merge-function which creates a new config-object
  	 * by merging two configuration objects together.
  	 *
  	 * @param {Object} config1
  	 * @param {Object} config2
  	 * @returns {Object} New object resulting from merging config2 to config1
  	 */
  	module.exports = function mergeConfig(config1, config2) {
  	  // eslint-disable-next-line no-param-reassign
  	  config2 = config2 || {};
  	  var config = {};
  	
  	  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  	  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  	  var defaultToConfig2Keys = [
  	    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
  	    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
  	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
  	    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
  	    'httpsAgent', 'cancelToken', 'socketPath'
  	  ];
  	
  	  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
  	    if (typeof config2[prop] !== 'undefined') {
  	      config[prop] = config2[prop];
  	    }
  	  });
  	
  	  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
  	    if (utils.isObject(config2[prop])) {
  	      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
  	    } else if (typeof config2[prop] !== 'undefined') {
  	      config[prop] = config2[prop];
  	    } else if (utils.isObject(config1[prop])) {
  	      config[prop] = utils.deepMerge(config1[prop]);
  	    } else if (typeof config1[prop] !== 'undefined') {
  	      config[prop] = config1[prop];
  	    }
  	  });
  	
  	  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
  	    if (typeof config2[prop] !== 'undefined') {
  	      config[prop] = config2[prop];
  	    } else if (typeof config1[prop] !== 'undefined') {
  	      config[prop] = config1[prop];
  	    }
  	  });
  	
  	  var axiosKeys = valueFromConfig2Keys
  	    .concat(mergeDeepPropertiesKeys)
  	    .concat(defaultToConfig2Keys);
  	
  	  var otherKeys = Object
  	    .keys(config2)
  	    .filter(function filterAxiosKeys(key) {
  	      return axiosKeys.indexOf(key) === -1;
  	    });
  	
  	  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
  	    if (typeof config2[prop] !== 'undefined') {
  	      config[prop] = config2[prop];
  	    } else if (typeof config1[prop] !== 'undefined') {
  	      config[prop] = config1[prop];
  	    }
  	  });
  	
  	  return config;
  	};


  /***/ }),
  /* 23 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * A `Cancel` is an object that is thrown when an operation is canceled.
  	 *
  	 * @class
  	 * @param {string=} message The message.
  	 */
  	function Cancel(message) {
  	  this.message = message;
  	}
  	
  	Cancel.prototype.toString = function toString() {
  	  return 'Cancel' + (this.message ? ': ' + this.message : '');
  	};
  	
  	Cancel.prototype.__CANCEL__ = true;
  	
  	module.exports = Cancel;


  /***/ }),
  /* 24 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var Cancel = __webpack_require__(23);
  	
  	/**
  	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
  	 *
  	 * @class
  	 * @param {Function} executor The executor function.
  	 */
  	function CancelToken(executor) {
  	  if (typeof executor !== 'function') {
  	    throw new TypeError('executor must be a function.');
  	  }
  	
  	  var resolvePromise;
  	  this.promise = new Promise(function promiseExecutor(resolve) {
  	    resolvePromise = resolve;
  	  });
  	
  	  var token = this;
  	  executor(function cancel(message) {
  	    if (token.reason) {
  	      // Cancellation has already been requested
  	      return;
  	    }
  	
  	    token.reason = new Cancel(message);
  	    resolvePromise(token.reason);
  	  });
  	}
  	
  	/**
  	 * Throws a `Cancel` if cancellation has been requested.
  	 */
  	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  	  if (this.reason) {
  	    throw this.reason;
  	  }
  	};
  	
  	/**
  	 * Returns an object that contains a new `CancelToken` and a function that, when called,
  	 * cancels the `CancelToken`.
  	 */
  	CancelToken.source = function source() {
  	  var cancel;
  	  var token = new CancelToken(function executor(c) {
  	    cancel = c;
  	  });
  	  return {
  	    token: token,
  	    cancel: cancel
  	  };
  	};
  	
  	module.exports = CancelToken;


  /***/ }),
  /* 25 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Syntactic sugar for invoking a function and expanding an array for arguments.
  	 *
  	 * Common use case would be to use `Function.prototype.apply`.
  	 *
  	 *  ```js
  	 *  function f(x, y, z) {}
  	 *  var args = [1, 2, 3];
  	 *  f.apply(null, args);
  	 *  ```
  	 *
  	 * With `spread` this example can be re-written.
  	 *
  	 *  ```js
  	 *  spread(function(x, y, z) {})([1, 2, 3]);
  	 *  ```
  	 *
  	 * @param {Function} callback
  	 * @returns {Function}
  	 */
  	module.exports = function spread(callback) {
  	  return function wrap(arr) {
  	    return callback.apply(null, arr);
  	  };
  	};


  /***/ })
  /******/ ])
  });

  });

  Vue.prototype.$http = function () {
    // Make Axios request JSON by default
    axios.defaults.headers.common.Accept = 'application/json'; // Make Axios encode using jQueries parameter serializer to keep Monoxide happy

    axios.defaults.paramsSerializer = $.param; // Monkey patch Axios so that any error response gets correctly decoded rather than weird stuff like 'Server returned a 403 code'

    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (!error.response || !error.response.status) {
        // Recommended method to catch network errors as per https://github.com/axios/axios/issues/383#issuecomment-234079506
        return Promise.reject('Network error');
      } else if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      } else {
        return Promise.reject(error.response);
      }
    });
    return axios;
  }();

  var script$3 = Vue.prototype.$http;

  /* script */
  const __vue_script__$3 = script$3;

  /* template */

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = normalizeComponent(
      {},
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  $(function () {
    window.app = {};
    app.router = new VueRouter({
      routes: [{
        path: '/',
        component: __vue_component__
      }, {
        path: '/standalone',
        component: __vue_component__$1
      }]
    });
    app.vue = new Vue$1({
      el: '#app',
      router: app.router,
      components: {
        navbar: __vue_component__$2
      }
    });
  });

}($, Vue, VueRouter));
//# sourceMappingURL=demo.js.map
