(function (Vue$1, $) {
  'use strict';

  Vue$1 = Vue$1 && Vue$1.hasOwnProperty('default') ? Vue$1['default'] : Vue$1;
  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

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
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
  * Main MacGyver "service" (acutally just a Vue prototype extension)
  * This service requires {$http, $toast} to be available on the prototype
  * @var {Object}
  */

  Vue$1.prototype.$macgyver = function () {
    var $macgyver = {}; // Sanity checks

    ['$http'].forEach(function (service) {
      if (!$macgyver[service]) console.warn("Vue.prototype.".concat(service, " is not available, declare it before MacGvyer loads or there may be errors later"));
    });
    /**
    * Storage for all MacGyver registered widgets
    * @var {Object}
    */

    $macgyver.widgets = {};
    /**
    * Add a known widget to the widgets lookup object
    * @param {string} [id] The unique ID of the widget to add (this is optional if id is specified in properties)
    * @param {Object} [properties] Optional properties of the widget to add
    * @param {boolean} [options.isContainer] Indicates that the widget can contain other widgets (under the `items` array)
    * @param {boolean} [options.isContainerArray] Addition to `isContainer` that indicates the widget will contain an array of rows (like a table)
    * @param {string} [options.title=id] Optional human readable title of the widget
    * @param {string} [options.icon="far fa-square"] Optional icon to display in the form editor
    * @param {Object} [options.config] Optional list of configuration the widget takes, this is in the form of a MacGyver form
    * @param {boolean} [options.userPlaceable=true] Whether this component should be listed as placeable by the user (if false, its hidden in the mgFormEditor UI)
    * @param {string} [options.category="Misc"] Which category this widget fits into when displaying the 'Add widget' dialog in mgFormEditor
    * @param {boolean|function} [options.format=false] Whether the value of the widget can be exposed as a string. If this is === true the exact value is used, if === false (default) it will be ignored when making a digest of the form, if a function it will be called as (value) and expected to return a string value. NOTE: In the spec file, which is a flat JSON file any function argument will be overridden to `true`
    * @param {string} [options.formatAlign='left'] The prefered column alignment when showing the result of `options.format`
    * @param {boolean} [options.preferId=true] Whether the widget recommends needing an ID when its created, if false, no default ID is allocated via mgFormEditor
    * @param {array <string>} [options.shorthand] Other aliases the widget answers to in shorthand mode (e.g. `{shorthand: ['boolean']}` will map that widget to the boolean type
    *
    * @returns {$macgyver} This chainable object
    */

    $macgyver.register = function (id, options) {
      // Argument mangling {{{
      if (id && options) {
        // both id + options
        options.id = id;
      } else if (_.isPlainObject(id)) {
        // Just options
        var _ref = [id.id, id];
        id = _ref[0];
        options = _ref[1];
      } else {
        throw new Error('$macgyver.register(id, options) requires either an ID + options or an options object');
      } // }}}


      if (!_.isString(options.id) || !options.id.startsWith('mg')) throw new Error('Widget IDs must be simple strings beginning with "mg*"');
      $macgyver.widgets[options.id] = _objectSpread2({
        title: _.startCase(options.id),
        userPlaceable: true,
        category: 'Misc',
        icon: 'far far-square',
        format: false,
        formatAlign: 'left',
        isContainer: false,
        isContainerArray: false,
        preferId: true
      }, options);
      return $macgyver;
    };

    $macgyver.$nextId = 0;

    $macgyver.nextId = function () {
      return "mgForm".concat($macgyver.$nextId++);
    };
    /**
    * Set of convenience functions to manage on-screen MacGyver forms
    */


    $macgyver.forms = {};
    /**
    * Convenience function to validate all MacGyver forms on a screen and return the array of failed validations
    * @param {string} [id] The form ID to validate, if omitted the first form on the page is used
    * @param {boolean} [showErrors=true] Allow the form to display a list of errors as well as returning them
    * @returns {array <Object>} Collection where each item is {error}
    */

    $macgyver.forms.validate = function (id) {
      var showErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!id) id = _.keys($macgyver.$forms)[0];
      if (!id) throw new Error('No MacGyver form found');
      console.log('Use form', id);
      var responses = [];
      $macgyver.forms.emitDown(id, 'mgValidate', function (error) {
        return responses.push({
          error: error
        });
      });
      if (showErrors) $macgyver.forms.emit(id, 'mgErrors', responses);
      return responses;
    };
    /**
    * Emit a message to a specific mgForm element
    * @param {string} id The ID of the form to emit to
    * @param {string} msg The message to emit
    * @param {*} [payload...] The payload of the message to emit
    */


    $macgyver.forms.emit = function (id, msg) {
      var _$macgyver$$forms$id;

      if (!$macgyver.$forms[id]) throw new Error('Unknown form ID');

      for (var _len = arguments.length, payload = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        payload[_key - 2] = arguments[_key];
      }

      (_$macgyver$$forms$id = $macgyver.$forms[id]).$emit.apply(_$macgyver$$forms$id, [msg].concat(payload));
    };
    /**
    * Emit a message to all child controls of a given form
    * @param {string} id The ID of the form to emit to
    * @param {string} msg The message to emit
    * @param {*} [payload...] The payload of the message to emit
    */


    $macgyver.forms.emitDown = function (id, msg) {
      var _$macgyver$$forms$id2;

      if (!$macgyver.$forms[id]) throw new Error('Unknown form ID');

      for (var _len2 = arguments.length, payload = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        payload[_key2 - 2] = arguments[_key2];
      }

      (_$macgyver$$forms$id2 = $macgyver.$forms[id]).$emitDown.apply(_$macgyver$$forms$id2, [msg].concat(payload));
    };

    $macgyver.forms.getPath = function (id, path, fallback) {
      console.log('PREGP', {
        id: id,
        path: path,
        fallback: fallback
      });
      var res = $macgyver.utils.getPath($macgyver.$forms[id], path, fallback);
      console.log('GP', id, path, '=', res);
      return res;
    };
    /**
    * Execute a function on a form
    * The default behaviour of this function is documented within the function
    * @param {string} id The ID of the form to execute the function on
    * @param {string} action The action to execute
    * @emits mgRun Event fired at the form level only. Use the form property handleActions to specify if the form should handle or trap the event to override
    */


    $macgyver.forms.run = function (id, action) {
      // 1. Emit mgRun to parents and see if they want to handle it {{{
      var handled = false;
      $macgyver.$forms[id].$emitUp('mgRun', {
        action: action
      }, function (isHandled) {
        if (isHandled) handled = true;
      });
      if (handled) return; // }}}
      // 2. Use FORM.$props.onAction(action) and see if returns truthy {{{

      if ($macgyver.$forms[id].$props.onAction && $macgyver.$forms[id].$props.onAction(action)) return; // }}}
      // 3. See if FORM.$props.actions[action] exists and if so whether it returns truthy {{{

      var _ref2 = /^([a-z0-9\_]*?)(\(.*\))?$/i.exec(action) || [],
          _ref3 = _slicedToArray(_ref2, 3),
          junk = _ref3[0],
          actionReadable = _ref3[1],
          actionArgs = _ref3[2];

      if (actionReadable && $macgyver.$forms[id].$props.actions && $macgyver.$forms[id].$props.actions[actionReadable]) {
        // Collapse strings to functions
        var func = _.isString($macgyver.$forms[id].$props.actions[actionReadable]) ? $macgyver.$forms[id][actionReadable] : $macgyver.$forms[id].$props.actions[actionReadable]; // Tidy up actionArgs

        actionArgs = _(actionArgs || '').trim('()').split(',').map(function (i) {
          return i && JSON.parse(i.replace(/'/g, '"'));
        });
        if (func.apply($macgyver.$forms[id], actionArgs)) return;
      } // }}}
      // 4. If all else failed and FORM.$props.actionsFallback is true - handle it via vm.$eval


      $macgyver.$forms[id].$eval.call($macgyver.$forms[id], action); // }}}
    }; // $macgyver.notify{} {{{

    /**
    * A collection of ways MacGyver can notify the user
    * These should be replaced by whatever your local framework supports
    */


    $macgyver.notify = {};
    /**
    * Signify that a loading event is taking place
    * This function should be overridden by the framework to include whatever load handling is requried
    * By default it uses https://www.npmjs.com/package/@momsfriendlydevco/loader
    * @param {string} id The unique ID for the loading item
    * @param {boolean} [status=true] Whether the item is performing an operation that requires loading
    * @param {Object} [options] Additional options
    * @param {boolean} [options.foreground=false] Whether the loading event should occur in the foreground
    */

    $macgyver.notify.loading = function (id) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var options = arguments.length > 2 ? arguments[2] : undefined;

      if (status && options && options.foreground) {
        Loader.start(id, status);
      } else if (status) {
        Loader.startBackground(id, status);
      } else {
        Loader.stop(id);
      }
    };
    /**
    * Provide a warning message to the user
    * @param {string} message The message to display
    */


    $macgyver.notify.warn = function (message) {
      return $toast.warning(message);
    };
    /**
    * Provide an error message to the user
    * @param {string} message The message to display
    */


    $macgyver.notify.error = function (message) {
      return $toast.error(message);
    }; // }}}

    /**
    * Glue various MacGyver emitter handlers to a registered component
    * Registers a few universal handles, which can be called via $macgyver.forms.emitDown(id, EVENT):
    *   - mgIdentify - component will respond with its Vue instance
    *   - mgRefresh - component with refresh its data state
    *
    * Adds a watcher which will emit `mgChange` when the `data` property changes (basically transforms the change event to `mgChange`)
    *
    * @param {VueInstance} component The component to register against
    */


    $macgyver.inject = function (component) {
      // Sanity checks {{{
      if (!component.$props.form) throw new Error('Cannot locate $props.form <string>, make sure that vm{props: {form: String, config: Object}} is declared'); // }}}

      component.$on('mgIdentify', function (reply) {
        return reply(component);
      }); // Read in initial data value

      if (component.$props.config.$dataPath) {
        var refresher = function refresher() {
          component.data = _.get($macgyver.$forms[component.$props.form].$props.data, component.$props.config.$dataPath);
        };

        component.$on('mgRefresh', refresher);
        refresher();
      } // Inject data watcher which transforms change operations into emitters to the nearest parent form {{{


      component.$watch('data', function (val) {
        $macgyver.$forms[component.$props.form].$emit('mgChange', component.$props.config.$dataPath, val);
      }); // }}}
    };
    /**
    * Flatten the a spec into an object lookup where each key is the dotted notation of the key
    * NOTE: Specifying {want:'array'} will add the extra property 'path' onto the output collection
    * @param {Object} root The data or spec object to examine
    * @param {Object} [options] Optional settings to use
    * @param {number} [options.maxDepth=0] How far down the tree to recurse, set to falsy to infinitely recurse
    * @param {Object|function} [options.filter] Either a Lodash match expression or a function to run on each widget - only truthy values are appended to the output. Function is called as `(widget, dataPath, specPath, depth)`
    * @param {Object|function} [options.filterChildren] Either a Lodash match expression or a function to run on each widget - only truthy values are recursed into. Function is called as `(widget, dataPath, specPath, depth)`
    * @param {string} [type="auto"] How to recurse into items. ENUM: 'auto' (try to determine how to recurse from root element), 'spec', 'data'
    * @param {string} [want="object"] How to return the output. ENUM: 'object' (an object where each key is the path and the value is the object), 'array' (a flattened version of an object), object is faster
    * @param {boolean|string} [wantDataPath=false] Whether to mutate the output widget with a dotted notation string indicating where to look in a data object for the value of the widget, if this is a string it specifies the key to use as storage
    * @param {boolean} [wantSpec=false] Whether to mutate the output widget with the widget specification as an object for each item
    * @param {boolean|string} [wantSpecPath=false] Whether to mutate the output widget with a dotted notation path on where to find the widget within a spec object, if this is a string it specifies the key to use as storage
    */


    $macgyver.flatten = function (root, options) {
      var settings = _.defaults(options, {
        maxDepth: 0,
        filter: undefined,
        filterChildren: undefined,
        type: 'auto',
        want: 'object',
        wantDataPath: false,
        wantSpec: false,
        wantSpecPath: false
      });

      if (settings.filter && !_.isFunction(settings.filter) && _.isObject(settings.filter)) settings.filter = _.matches(settings.filter);
      if (settings.want != 'object' && settings.want != 'array') throw new Error('$macgyver.flatten({want}) can only be "object" or "array"');

      if (settings.type == 'auto') {
        if (root.items) {
          settings.type = 'spec';
        } else if (_.every(root, function (k, v) {
          return !v.items;
        })) {
          settings.type = 'data';
        } else {
          throw new Error('Cannot determine type of input object to $macgyver.flatten(), specify it explicitly with {type=spec|data}');
        }
      }

      var found = settings.want == 'object' ? {} : [];

      var depthScanner = function depthScanner(node, dataPath, specPath, depth) {
        if (!_.isObject(node)) return; // Add to bucket of found objects?

        if (!settings.filter // No filter
        || settings.filter.call(node, node, path, depth) // OR we pass the filter
        ) {
            if (settings.wantDataPath) node[_.isString(settings.wantDataPath) ? settings.wantDataPath : 'path'] = dataPath.concat([node.id]).filter(function (i) {
              return i;
            }).join('.');
            if (settings.wantSpecPath) node[_.isString(settings.wantSpecPath) ? settings.wantSpecPath : 'specPath'] = specPath.join('.');

            if (settings.want == 'object') {
              if (node.id) found[node.id] = node;
            } else {
              found.push(node);
            }
          } // Recurse into children?


        var recursionSubject = settings.type == 'spec' ? node.items : node;

        if (_.isArray(recursionSubject) && (!settings.filterChildren // No filter
        || settings.filterChildren.call(node, node, dataPath, specPath, depth) // ...or we pass the filter
        ) && (!settings.maxDepth || depth <= settings.maxDepth)) {
          recursionSubject.forEach(function (item, itemIndex) {
            return depthScanner(item, dataPath, specPath.concat(settings.type == 'spec' ? ['items', itemIndex] : [itemIndex]), depth + 1);
          });
        }
      };

      depthScanner(root, [], [], 0);
      return found;
    };
    /**
    * Apply various criteria to a 'rough' spec to turn it into a clean one
    *
    * NOTE: 'Shorthand' is a simple `{id1: spec1, id2: spec2}` way of setting up a form. See the widget config for an example
    *       Shorthand may also have types that omit the `mg` prefix e.g. `text` instead of `mgText`
    *
    * @param {Object|array} spec A MacGyver spec to process and mutate
    * @param {Object} [options] Additional options to use
    * @param {boolean} [options.clone=true] Whether to clone the object before neatening, slow but Vue disallows mutation
    * @param {boolean} [options.convertArray=true] Convert arrays to object if not already in that format
    * @param {function} [options.convertArrayWrapper] Function used to convert from array - defaults to a simple mgContainer wrapper. Called as (spec)
    * @param {boolean} [options.convertShorthand=true] Accept shorthand format and convert if necessary
    * @param {function} [options.convertShorthandDetect] Function used to detect shorthand format - defaults to object with valid string keys sans 'id' field. Called as (spec)
    * @param {function} [options.convertShorthandTranslate] Function used to convert shorthand format. Called as (spec)
    * @param {boolean} [options.widgetDefaults=true] Assign each item its default values from the widget config if that setting is omitted
    * @param {string} [options.widgetTitles=true] Add any missing title fields from the ID
    * @param {boolean} [options.deblank=true] Reformat null/undefined/empty forms into a skeleton form
    * @returns {Object} The mutated spec
    */


    $macgyver.neatenSpec = function (spec, options) {
      var settings = _objectSpread2({
        clone: true,
        convertArray: true,
        convertArrayWrapper: function convertArrayWrapper(items) {
          return {
            type: 'mgContainer',
            showTitles: false,
            items: items
          };
        },
        convertShorthand: true,
        convertShorthandDetect: function convertShorthandDetect(spec) {
          return _.isPlainObject(spec) // Simple object
          && !_.has(spec, 'type') // It doesn't have a type key (i.e. there is only one item in this object
          && _.every(spec, function (v, k) {
            return !_.has(v, 'id') && (!_.has(v, 'type') || v.type != 'mgContainer');
          });
        },
        // Each item lacks and ID and either doesn't have a type or that type is not a container
        convertShorthandTranslate: function convertShorthandTranslate(spec) {
          return {
            type: 'mgContainer',
            items: _.map(spec, function (v, k) {
              return _objectSpread2({
                id: k
              }, v, {
                type: function () {
                  if (_.isString(v)) v = {
                    type: v
                  }; // Only key given is a string, assume it means type

                  if (!v.type) return 'mgText'; // No type given, assume mgText

                  if (v.type.startsWith('mg')) return v.type; // Type begins with 'mg' - trust the user

                  v.type = v.type.toLowerCase();
                  return Object.keys($macgyver.widgets) // Search for likely widgets
                  .find(function (wid) {
                    var widget = $macgyver.widgets[wid];
                    return widget.id.substr(2).toLowerCase() == v.type // Matched after 'mg' part. e.g. 'text' becomes 'mgText'
                    || (widget.shorthand || []).find(function (s) {
                      return s == v.type;
                    }) // Matched a shorthand alias
                    ;
                  }) || v.type;
                }()
              });
            })
          };
        },
        widgetDefaults: true,
        widgetTitles: true,
        deblank: true
      }, options);

      var layout = settings.clone ? _.cloneDeep(spec) : spec; // Output spec

      if (settings.deblank && _.isEmpty(layout)) {
        // Convert empty or unusable values into a skeleton
        layout = {
          type: 'mgContainer',
          items: []
        };
      }

      if (settings.convertArray && _.isArray(layout)) {
        // convert array spec -> object?
        layout = settings.convertArrayWrapper(layout);
      }

      if (settings.convertShorthand && settings.convertShorthandDetect(layout)) {
        // Is shorthand format
        layout = settings.convertShorthandTranslate(layout);
      }

      $macgyver.flatten(layout, {
        type: 'spec',
        want: 'array',
        wantDataPath: '$dataPath',
        wantSpecPath: '$specPath'
      }).forEach(function (widget) {
        if (!widget.type || !$macgyver.widgets[widget.type]) {
          // Remap unknown widget
          console.log("Unknown widget '".concat(widget.type, "'"), widget);
          widget.errorText = widget.type ? "Unknown widget '".concat(widget.type, "'") : 'Widget type not specified';
          widget.errorWidgetType = widget.type;
          widget.type = 'mgError';
        } else if (settings.widgetDefaults) {
          Object.assign(widget, _($macgyver.widgets[widget.type].config).pickBy(function (v, k) {
            return !_.has(widget, k) && _.has(v, 'default');
          }).mapValues(function (v) {
            return v["default"];
          }).value());
        }

        if (settings.widgetTitles && !widget.title && widget.id) widget.title = _.startCase(widget.id);
      });
      return layout;
    };
    /**
    * Fetch any artbitrary data set from a URL
    * This function is designed to accept a customizable single-string URL which the user can customize and a spec options object that the requesting widget can define
    * NOTE: This function will invoke the loading notifier and call the warning notifier on an error
    *
    * @param {string} url The URL to fetch
    * @param {Object} [options] Additional options
    * @param {boolean} [options.type='object'] What data type to expect from the server. ENUM: 'object', 'array', 'raw'. If array and mappings are specified each member of the collection is mapped and an array returned
    * @param {Object <Object>} [options.mappings={}] Mappings to extract, each key is the mapping name with the value as an object containing `{required <boolean>}`
    * @param {function} [options.format] Data formatter, defaults to a simple passthrough. Called as `(output, session)`
    * @param {string|function} [options.formatError] Error thrown if the formatter fails, can be a string or function called as `(err)`. Defaults to 'Unable to format data feed from ${url} - ${err.toString()}`
    * @returns {Object} The extracted data object
    *
    * @example Fetch a simple collection
    * fetch('/api/datafeeds/random/users')
    *
    * @example Generate a random number as an object and return the extracted value as the promise response
    * fetch('/api/datafeeds/random/number?$extract=number', {mappings: {extract: {required: true}, format: d => d.extract}});
    *
    * @example Fetch a collection of items extracting both 'id' and 'title' fields
    * fetch('/api/datafeeds/random/users?$title=name&$id=_id', {mappings: {_id: {required: true}, title: {required: true}}})
    */


    $macgyver.fetch = function (url, options) {
      return Promise.resolve() // Create the initial session {{{
      .then(function () {
        return {
          mappings: {},
          parsedUrl: new URL(url, window.location),
          settings: _objectSpread2({
            type: 'object',
            mappings: {},
            format: function format(data, session) {
              return data;
            },
            formatError: function formatError(err) {
              return "Unable to format data feed from ".concat(url, " - ").concat(err.toString());
            }
          }, options)
        };
      }) // }}}
      // Extract mappings from the URL string {{{
      .then(function (session) {
        if (!_.isEmpty(session.settings.mappings)) {
          // Extract mappings
          Array.from(session.parsedUrl.searchParams.entries()).forEach(function (pair) {
            var _pair = _slicedToArray(pair, 2),
                k = _pair[0],
                v = _pair[1];

            if (k.startsWith('$')) {
              session.mappings[k] = v;
              session.parsedUrl.searchParams["delete"](k);
            }
          });
        }

        return session;
      }) // }}}
      // Verify that requested mappings are present {{{
      .then(function (session) {
        var checkRequired = _(session.settings).pickBy(function (v, k) {
          return k.required && !_.has(session.mappings, v);
        }).map(function (v, k) {
          return k;
        }).value();

        if (checkRequired.length) throw "Required URL \"".concat(url, "\" is missing the required mappings: ").concat(checkRequired.join(', '));
        return session;
      }) // }}}
      // Make the request {{{
      .then(function (session) {
        return $macgyver.$http.get(session.parsedUrl.toString()).then(function (res) {
          return session.response = res;
        }).then(function () {
          return session;
        });
      }) // }}}
      // Apply object cohersion + mappings {{{
      .then(function (session) {
        // FIXME: This logic is probably buggered - Too drunk, MC - 2019-01-04 
        switch (session.settings.type) {
          case 'array':
            if (!_.isArray(session.response.data)) throw "Expected an array from data feed \"".concat(url, "\" but got a non-array");

            if (!_.isEmpty(session.mappings)) {
              var pickKeys = _.map(session.settings.mappings, function (v, k) {
                return session.mappings['$' + k];
              });

              session.output = session.response.data.map(function (doc) {
                return (// Remap data using mappings
                  _.pick(doc, pickKeys)
                );
              });
            } else {
              session.output = session.response.data;
            }

            return session;

          case 'object':
            if (!_.isPlainObject(session.response.data)) throw "Expected object return from data feed \"".concat(url, "\" but got a non-plain-object");

            if (!_.isEmpty(session.mappings)) {
              session.output = _(session.mappings).mapKeys(function (v, k) {
                return k.replace(/^\$/, '');
              }) // Remove '$' prefix
              .mapValues(function (v, k) {
                return session.response.data[session.mappings['$' + k]];
              }).value();
            } else {
              session.output = session.response.data;
            }

            return session;

          case 'raw':
            session.output = session.response.data;
            return session;
        }
      }) // }}}
      // Apply formatter {{{
      .then(function (session) {
        try {
          return session.settings.format(session.output, session);
        } catch (err) {
          throw _.isString(session.settings.formatError) ? session.settings.formatError : session.settings.formatError(err);
        }
      }) // }}}
      ["catch"](function (err) {
        $macgyver.notify.error(err);
        throw err;
      })["finally"](function () {
        return $macgyver.notify.loading(url, false);
      });
    };
    /**
    * Register of known forms to their Vue instance mapping
    * @var $Object <VueInstance>}
    */


    $macgyver.$forms = {};
    /**
    * Registeres a MacGyver form by its generated ID
    * @params {VueInstance} component The Vue component to register
    */

    $macgyver.injectForm = function (component) {
      $macgyver.$forms[component.id] = component;
      component.$on('mgIdentify', function (reply) {
        return reply(component);
      });
    };
    /**
    * Set of misc utility helper functions
    * @var {Object};
    */


    $macgyver.utils = {};
    /**
    * Navigate down a dotted notation path and set the final value using Vue.set()
    * This function is designed to work as simillaly as possible to _.set()
    * @param {Object} target The source object, usually the root controller
    * @param {string|array} path Either a path in dotted or array notation
    * @param {*} value The value set
    */

    $macgyver.utils.setPath = function (target, path, value) {
      var chunks = typeof path == 'string' ? path.split('.') : path; // Ensure all paths up to this chunk-1 exist

      var targ = target;

      for (var i = 0; i < chunks.length - 1; i++) {
        if (targ[chunks[i]] === undefined) {
          targ = Vue$1.set(targ, chunks[i], {}); // Traversal point not yet setup
        } else {
          targ = targ[chunks[i]]; // Recurse into the newly created child (or the existing branch)
        }
      }

      return Vue$1.set(targ, chunks[chunks.length - 1], value);
    };
    /**
    * Provides a function to quickly get a data path on a Vue component by its path
    * This function is designed to work as simillaly as possible to _.get()
    * @param {Object} target The source object, usually the root controller
    * @param {string|array} path Either a path in dotted or array notation
    * @param {*} [fallback=undefined] Optional fallback to return if no value is found
    * @returns {*} Either the found value or the fallback
    */


    $macgyver.utils.getPath = function (target, path, fallback) {
      return _.get(target, path, fallback);
    }; // Absorb various methods from a Vue prototype


    var vInstance = new Vue$1();
    ['$on', '$off', '$once', '$emit'].forEach(function (method) {
      return $macgyver[method] = vInstance[method].bind(vInstance);
    });
    return $macgyver;
  }();

  var script = Vue$1.prototype.$macgyver;

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;

  /* template */

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = undefined;
    /* style inject */
    
    /* style inject SSR */
    

    
    var MacGyver = normalizeComponent_1(
      {},
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  /**
  * Main MacGyver loader
  */
  window.macgyver = MacGyver; // Import all MacGyver components
  // NOTE: These are defined as dynamic imports as we need window.macgyver to be a accessible

  Promise.resolve().then(function () { return mgAlert$1; });
  Promise.resolve().then(function () { return mgButton$1; });
  Promise.resolve().then(function () { return mgCheckBox$1; });
  Promise.resolve().then(function () { return mgChoiceButtons$1; });
  Promise.resolve().then(function () { return mgChoiceCheckbox$1; });
  Promise.resolve().then(function () { return mgChoiceDropdown$1; });
  Promise.resolve().then(function () { return mgChoicePopup$1; }); // FIXME: Needs $prompt

  Promise.resolve().then(function () { return mgChoiceRadio$1; }); // FIXME: Not working
  //... import('./components/mgChoiceTags');

  Promise.resolve().then(function () { return mgCodeEditor$1; });
  Promise.resolve().then(function () { return mgComponent$1; });
  Promise.resolve().then(function () { return mgContainer$1; });
  Promise.resolve().then(function () { return mgDate$1; });
  Promise.resolve().then(function () { return mgEmail$1; });
  Promise.resolve().then(function () { return mgError$1; }); //... import('./components/mgFormEditor');

  Promise.resolve().then(function () { return mgForm$1; }); //... import('./components/mgGridDashboard');

  Promise.resolve().then(function () { return mgGrid$1; });
  Promise.resolve().then(function () { return mgHeading$1; });
  Promise.resolve().then(function () { return mgHtml$1; });
  Promise.resolve().then(function () { return mgIcon$1; }); // Not in showcase

  Promise.resolve().then(function () { return mgInfoBlock$1; }); // Not in showcase
  //... import('./components/mgInfoChart');

  Promise.resolve().then(function () { return mgLabel$1; });
  Promise.resolve().then(function () { return mgList$1; });
  Promise.resolve().then(function () { return mgNumber$1; });
  Promise.resolve().then(function () { return mgPermissions$1; });
  Promise.resolve().then(function () { return mgPlaceholder$1; });
  Promise.resolve().then(function () { return mgRestQuery$1; }); // FIXME: Needs $prompt

  Promise.resolve().then(function () { return mgSeperator$1; });
  Promise.resolve().then(function () { return mgTable$1; });
  Promise.resolve().then(function () { return mgTextArea$1; });
  Promise.resolve().then(function () { return mgText$1; });
  Promise.resolve().then(function () { return mgTime$1; });
  Promise.resolve().then(function () { return mgToggle$1; });
  Promise.resolve().then(function () { return mgUrl$1; });

  macgyver.register({
    id: 'mgAlert',
    title: 'Alert Box',
    icon: 'far fa-exclamation-triangle',
    category: 'General Decoration',
    preferId: false,
    config: {
      text: {
        type: 'mgText',
        "default": 'This is an alert!'
      },
      style: {
        type: 'mgChoiceButtons',
        "default": 'alert-info',
        iconSelected: 'fa fa-fw fa-check',
        iconDefault: 'fa fa-fw',
        "enum": [{
          id: 'alert-success',
          "class": 'btn-success'
        }, {
          id: 'alert-info',
          "class": 'btn-info'
        }, {
          id: 'alert-warning',
          "class": 'btn-warning'
        }, {
          id: 'alert-danger',
          "class": 'btn-danger'
        }]
      }
    }
  });
  var script$1 = Vue.component('mgAlert', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "alert", class: _vm.$props.config.style }, [
      _vm._v("\n\t" + _vm._s(_vm.$props.config.text || _vm.data) + "\n")
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

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
    

    
    var mgAlert = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  var mgAlert$1 = /*#__PURE__*/Object.freeze({
    'default': mgAlert
  });

  macgyver.register('mgButton', {
    title: 'Button',
    icon: 'far fa-mouse-pointer',
    category: 'Interaction',
    preferId: false,
    config: {
      text: {
        type: 'mgText'
      },
      icon: {
        type: 'mgIcon',
        "default": 'far fa-check'
      },
      tooltip: {
        type: 'mgText'
      },
      action: {
        type: 'mgText'
      },
      "class": {
        type: 'mgText',
        advanced: true,
        "default": 'btn btn-light'
      }
    },
    format: true
  });
  var script$2 = Vue.component('mgButton', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "a",
      {
        directives: [
          {
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.$props.config.tooltip,
            expression: "$props.config.tooltip"
          }
        ],
        class: _vm.$props.config.class,
        on: {
          click: function($event) {
            return _vm.$macgyver.forms.run(_vm.form, _vm.$props.config.action)
          }
        }
      },
      [
        _vm.$props.config.icon
          ? _c("i", { class: _vm.$props.config.icon })
          : _vm._e(),
        _vm._v("\n\t" + _vm._s(_vm.$props.config.text) + "\n")
      ]
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgButton = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  var mgButton$1 = /*#__PURE__*/Object.freeze({
    'default': mgButton
  });

  macgyver.register('mgCheckBox', {
    title: 'Check Box',
    icon: 'far fa-check-square',
    category: 'Simple Inputs',
    preferId: true,
    config: {},
    format: function format(v) {
      return v ? 'Yes' : 'No';
    },
    formatAlign: 'center'
  });
  var script$3 = Vue.component('mgCheckBox', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "text-center" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.data,
            expression: "data"
          }
        ],
        attrs: { type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.data)
            ? _vm._i(_vm.data, null) > -1
            : _vm.data
        },
        on: {
          change: function($event) {
            var $$a = _vm.data,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (_vm.data = $$a.concat([$$v]));
              } else {
                $$i > -1 &&
                  (_vm.data = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.data = $$c;
            }
          }
        }
      })
    ])
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgCheckBox = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  var mgCheckBox$1 = /*#__PURE__*/Object.freeze({
    'default': mgCheckBox
  });

  macgyver.register('mgChoiceButtons', {
    title: 'Choice Buttons',
    icon: 'fas fa-rectangle-landscape',
    category: 'Choice Selectors',
    preferId: true,
    config: {
      "enum": {
        // Each item is in the form {id, [title], [class], [classActive], [classInactive], [tooltip]}
        type: 'mgList',
        title: 'List items',
        "default": ['Item One', 'Item Two', 'Item Three']
      },
      classWrapper: {
        type: 'mgText',
        "default": 'btn-group',
        title: 'Group CSS class',
        advanced: true
      },
      itemClassActive: {
        type: 'mgText',
        "default": 'btn btn-primary',
        advanced: true
      },
      itemClassInactive: {
        type: 'mgText',
        "default": 'btn btn-light',
        advanced: true
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      }
    },
    format: true // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?

  });
  var script$4 = Vue.component('mgChoiceButtons', {
    data: function data() {
      return {
        data: undefined,
        enumIter: []
      };
    },
    props: {
      config: Object,
      form: String
    },
    methods: {
      select: function select(id) {
        this.data = id;
      }
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
      });
    },
    watch: {
      '$props.config.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props.config["enum"]) && _.isString(this.$props.config["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props.config["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props.config["enum"]) && _.isObject(this.$props.config["enum"][0])) {
            // Collection
            this.enumIter = this.$props.config["enum"];
          }
        }
      }
    }
  });

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD;
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mg-choice-buttons", class: _vm.$props.config.classWrapper },
      _vm._l(_vm.enumIter, function(item) {
        return _c(
          "a",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: item.tooltip,
                expression: "item.tooltip"
              }
            ],
            key: item.id,
            class:
              _vm.data == item.id
                ? item.classActive ||
                  item.class ||
                  _vm.$props.config.itemClassActive
                : item.classInactive ||
                  item.class ||
                  _vm.$props.config.itemClassInactive,
            on: {
              click: function($event) {
                return _vm.select(item.id)
              }
            }
          },
          [_vm._v("\n\t\t" + _vm._s(item.title) + "\n\t")]
        )
      }),
      0
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = function (inject) {
      if (!inject) return
      inject("data-v-8a4205fe_0", { source: "\n.fa-invisible:before {\n\tcontent: \"\\f111\";\n\tvisibility: hidden;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgChoiceButtons.vue"],"names":[],"mappings":";AAsEA;CACA,gBAAA;CACA,kBAAA;AACA","file":"mgChoiceButtons.vue","sourcesContent":["<script>\nmacgyver.register('mgChoiceButtons', {\n\ttitle: 'Choice Buttons',\n\ticon: 'fas fa-rectangle-landscape',\n\tcategory: 'Choice Selectors',\n\tpreferId: true,\n\tconfig: {\n\t\tenum: { // Each item is in the form {id, [title], [class], [classActive], [classInactive], [tooltip]}\n\t\t\ttype: 'mgList',\n\t\t\ttitle: 'List items',\n\t\t\tdefault: ['Item One', 'Item Two', 'Item Three'],\n\t\t},\n\t\tclassWrapper: {type: 'mgText', default: 'btn-group', title: 'Group CSS class', advanced: true},\n\t\titemClassActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},\n\t\titemClassInactive: {type: 'mgText', default: 'btn btn-light', advanced: true},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t},\n\tformat: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?\n});\n\nexport default Vue.component('mgChoiceButtons', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tenumIter: [],\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tmethods: {\n\t\tselect(id) {\n\t\t\tthis.data = id;\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t});\n\t},\n\twatch: {\n\t\t'$props.config.enum': {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\tif (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings\n\t\t\t\t\tthis.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));\n\t\t\t\t} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection\n\t\t\t\t\tthis.enumIter = this.$props.config.enum;\n\t\t\t\t}\n\t\t\t},\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-choice-buttons\" :class=\"$props.config.classWrapper\">\n\t\t<a\n\t\t\tv-for=\"item in enumIter\"\n\t\t\t:key=\"item.id\"\n\t\t\t:class=\"data == item.id ? item.classActive || item.class || $props.config.itemClassActive : item.classInactive || item.class || $props.config.itemClassInactive\"\n\t\t\tv-tooltip=\"item.tooltip\"\n\t\t\t@click=\"select(item.id)\"\n\t\t>\n\t\t\t{{item.title}}\n\t\t</a>\n\t</div>\n</template>\n\n<style>\n.fa-invisible:before {\n\tcontent: \"\\f111\";\n\tvisibility: hidden;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject SSR */
    

    
    var mgChoiceButtons = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      browser,
      undefined
    );

  var mgChoiceButtons$1 = /*#__PURE__*/Object.freeze({
    'default': mgChoiceButtons
  });

  macgyver.register('mgChoiceCheckbox', {
    title: 'Checkbox multiple-choice',
    icon: 'far fa-list',
    category: 'Choice Selectors',
    preferId: true,
    config: {
      "enum": {
        type: 'mgList',
        title: 'List items',
        "default": ['Item One', 'Item Two', 'Item Three']
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      },
      sort: {
        type: 'mgChoiceRadio',
        "default": 'addOrder',
        advanced: true,
        help: 'Sort newly ticked items into their correct position',
        "enum": [{
          id: 'addOrder',
          title: 'No sorting'
        }, {
          id: 'sortId',
          title: 'Sort by item ID'
        }, {
          id: 'sortTitle',
          title: 'Sort by title'
        }]
      }
    },
    format: true // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?

  });
  var script$5 = Vue.component('mgChoiceCheckbox', {
    data: function data() {
      return {
        data: undefined,
        enumIter: []
      };
    },
    props: {
      config: Object,
      form: String
    },
    methods: {
      change: function change(id) {
        var _this = this;

        if (!this.data) this.data = [];

        if (this.data.some(function (i) {
          return i == id;
        })) {
          // Checked
          this.data = this.data.filter(function (i) {
            return i != id;
          });
        } else {
          this.data.push(id);

          if (this.$props.config.sort == 'sortId') {
            this.data.sort();
          } else if (this.$props.config.sort == 'sortTitle') {
            this.data = _.sortBy(this.data, function (i) {
              return _this.config["enum"].find(function (e) {
                return e.id == i;
              });
            });
          }
        }
      }
    },
    created: function created() {
      var _this2 = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this2.$props.config.required && !_this2.data) return reply("".concat(_this2.$props.config.title, " is required"));
      });
      if (!_.isArray(this.data)) this.data = [];
    },
    watch: {
      '$props.config.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props.config["enum"]) && _.isString(this.$props.config["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props.config["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props.config["enum"]) && _.isObject(this.$props.config["enum"][0])) {
            // Collection
            this.enumIter = this.$props.config["enum"];
          }
        }
      }
    }
  });

  /* script */
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      _vm._l(_vm.enumIter, function(item) {
        return _c("div", { key: item.id, staticClass: "form-check" }, [
          _c("input", {
            attrs: {
              type: "checkbox",
              id: "mg-choice-checkbox-" + _vm.$props.config.id + "-" + item.id
            },
            domProps: { checked: _vm.data.includes(item.id) },
            on: {
              change: function($event) {
                return _vm.change(item.id)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "form-check-label",
              attrs: {
                for: "mg-choice-checkbox-" + _vm.$props.config.id + "-" + item.id
              }
            },
            [_vm._v("\n\t\t\t" + _vm._s(item.title) + "\n\t\t")]
          )
        ])
      }),
      0
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgChoiceCheckbox = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      undefined
    );

  var mgChoiceCheckbox$1 = /*#__PURE__*/Object.freeze({
    'default': mgChoiceCheckbox
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var vueSelect = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=9)}([function(t,e){function n(t){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return "function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o;},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};},function(t,e,n){var o=n(5),i=n(6),s=n(7);t.exports=function(t){return o(t)||i(t)||s()};},function(t,e,n){var o=n(2);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e]);});}return t};},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}};},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)};},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};},function(t,e,n){var o=n(1);n.n(o).a;},function(t,e,n){n.r(e);var o=n(3),i=n.n(o),s=n(2),r=n.n(s),a=n(0),l=n.n(a),u=n(4),c=n.n(u),h={watch:{typeAheadPointer:function(){this.maybeAdjustScroll();}},methods:{maybeAdjustScroll:function(){var t=this.pixelsToPointerTop(),e=this.pixelsToPointerBottom();return t<=this.viewport().top?this.scrollTo(t):e>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function(){var t=0;if(this.$refs.dropdownMenu)for(var e=0;e<this.typeAheadPointer;e++)t+=this.$refs.dropdownMenu.children[e].offsetHeight;return t},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var t=!!this.$refs.dropdownMenu&&this.$refs.dropdownMenu.children[this.typeAheadPointer];return t?t.offsetHeight:0},viewport:function(){return {top:this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop:0,bottom:this.$refs.dropdownMenu?this.$refs.dropdownMenu.offsetHeight+this.$refs.dropdownMenu.scrollTop:0}},scrollTo:function(t){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop=t:null}}},p={data:function(){return {typeAheadPointer:-1}},watch:{filteredOptions:function(){this.typeAheadPointer=0;}},methods:{typeAheadUp:function(){this.typeAheadPointer>0&&(this.typeAheadPointer--,this.maybeAdjustScroll&&this.maybeAdjustScroll());},typeAheadDown:function(){this.typeAheadPointer<this.filteredOptions.length-1&&(this.typeAheadPointer++,this.maybeAdjustScroll&&this.maybeAdjustScroll());},typeAheadSelect:function(){this.filteredOptions[this.typeAheadPointer]?this.select(this.filteredOptions[this.typeAheadPointer]):this.taggable&&this.search.length&&this.select(this.search),this.clearSearchOnSelect&&(this.search="");}}},d={props:{loading:{type:Boolean,default:!1}},data:function(){return {mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading);},loading:function(t){this.mutableLoading=t;}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function f(t,e,n,o,i,s,r,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r);},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot);}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)};}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l];}return {exports:t,options:u}}var y={Deselect:f({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])},[],!1,null,null,null).exports,OpenIndicator:f({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])},[],!1,null,null,null).exports},b={components:c()({},y),mixins:[h,p,d],props:{value:{},components:{type:Object,default:function(){return {}}},options:{type:Array,default:function(){return []}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},getOptionLabel:{type:Function,default:function(t){if("object"===l()(t)){if(!t.hasOwnProperty(this.label))return;return t[this.label]}return t}},getOptionKey:{type:Function,default:function(t){if("object"===l()(t)&&t.id)return t.id;try{return JSON.stringify(t)}catch(t){return}}},onTab:{type:Function,default:function(){this.selectOnTab&&this.typeAheadSelect();}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return (e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter(function(t){var o=n.getOptionLabel(t);return "number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)})}},createOption:{type:Function,default:function(t){return "object"===l()(this.optionList[0])&&(t=r()({},this.label,t)),this.$emit("option:created",t),t}},resetOnOptionsChange:{type:Boolean,default:!1},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},searchInputQuerySelector:{type:String,default:"[type=search]"}},data:function(){return {search:"",open:!1,pushedTags:[],_value:[]}},watch:{options:function(t){!this.taggable&&this.resetOnOptionsChange&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value);},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t);},multiple:function(){this.clearSelection();}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.maybePushTag);},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map(function(t){return e.findOptionFromReducedValue(t)}):this.$data._value=this.findOptionFromReducedValue(t);},select:function(t){this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&(t=this.createOption(t)),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t)),this.onAfterSelect(t);},deselect:function(t){var e=this;this.updateValue(this.selectedValue.filter(function(n){return !e.optionComparator(n,t)}));},clearSelection:function(){this.updateValue(this.multiple?[]:null);},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="");},updateValue:function(t){var e=this;this.isTrackingValues&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map(function(t){return e.reduce(t)}):this.reduce(t)),this.$emit("input",t);},toggleDropdown:function(t){var e=t.target,n=[this.$el,this.searchEl,this.$refs.toggle];void 0!==this.$refs.openIndicator&&n.push.apply(n,[this.$refs.openIndicator.$el].concat(i()(Array.prototype.slice.call(this.$refs.openIndicator.$el.childNodes)))),(n.indexOf(e)>-1||e.classList.contains("vs__selected"))&&(this.open?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus()));},isOptionSelected:function(t){var e=this;return this.selectedValue.some(function(n){return e.optionComparator(n,t)})},optionComparator:function(t,e){if("object"!==l()(t)&&"object"!==l()(e)){if(t===e)return !0}else{if(t===this.reduce(e))return !0;if(this.getOptionLabel(t)===this.getOptionLabel(e)||this.getOptionLabel(t)===e)return !0;if(this.reduce(t)===this.reduce(e))return !0}return !1},findOptionFromReducedValue:function(t){var e=this;return this.options.find(function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)})||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur");},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t);}},optionExists:function(t){var e=this;return this.optionList.some(function(n){return "object"===l()(n)&&e.getOptionLabel(n)===t||n===t})},normalizeOptionForSlot:function(t){return "object"===l()(t)?t:r()({},this.label,t)},maybePushTag:function(t){this.pushTags&&this.pushedTags.push(t);},onEscape:function(){this.search.length?this.search="":this.searchEl.blur();},onSearchBlur:function(){if(!this.mousedown||this.searching)return this.clearSearchOnBlur&&(this.search=""),void this.closeSearchOptions();this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions();},onSearchFocus:function(){this.open=!0,this.$emit("search:focus");},onMousedown:function(){this.mousedown=!0;},onMouseUp:function(){this.mousedown=!1;},onSearchKeyDown:function(t){switch(t.keyCode){case 8:return this.maybeDeleteValue();case 9:return this.onTab()}},onSearchKeyUp:function(t){switch(t.keyCode){case 27:return this.onEscape();case 38:return t.preventDefault(),this.typeAheadUp();case 40:return t.preventDefault(),this.typeAheadDown();case 13:return t.preventDefault(),this.typeAheadSelect()}}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushedTags)},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this;return {search:{attributes:{disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-expanded":this.dropdownOpen,"aria-label":"Search for option",ref:"search",role:"combobox",type:"search",autocomplete:"off",value:this.search},events:{keydown:this.onSearchKeyDown,keyup:this.onSearchKeyUp,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}}}},childComponents:function(){return c()({},y,this.components)},stateClasses:function(){return {"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},clearSearchOnBlur:function(){return this.clearSearchOnSelect&&!this.multiple},searching:function(){return !!this.search},dropdownOpen:function(){return !this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;return this.taggable&&this.search.length&&!this.optionExists(this.search)&&e.unshift(this.search),e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return !this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},g=(n(8),f(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",on:{mousedown:function(e){return e.preventDefault(),t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button","aria-label":"Deselect option"},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})}),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear selection"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{role:"listbox"},on:{mousedown:t.onMousedown,mouseup:t.onMouseUp}},[t._l(t.filteredOptions,function(e,o){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":o===t.typeAheadPointer},attrs:{role:"option"},on:{mouseover:function(e){t.typeAheadPointer=o;},mousedown:function(n){return n.preventDefault(),n.stopPropagation(),t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)}),t._v(" "),t.filteredOptions.length?t._e():n("li",{staticClass:"vs__no-options",on:{mousedown:function(t){t.stopPropagation();}}},[t._t("no-options",[t._v("Sorry, no matching options.")])],2)],2):t._e()])],1)},[],!1,null,null,null).exports),m={ajax:d,pointer:p,pointerScroll:h};n.d(e,"VueSelect",function(){return g}),n.d(e,"mixins",function(){return m});e.default=g;}])});

  });

  var VueSelect = unwrapExports(vueSelect);
  var vueSelect_1 = vueSelect.VueSelect;

  Vue.component('v-select', VueSelect);
  macgyver.register('mgChoiceDropdown', {
    title: 'Dropdown multiple-choice',
    icon: 'far fa-chevron-circle-down',
    category: 'Choice Selectors',
    preferId: true,
    config: {
      "enum": {
        type: 'mgList',
        title: 'List items',
        "default": ['Item One', 'Item Two', 'Item Three']
      },
      enumUrl: {
        type: 'mgUrl',
        advanced: true,
        help: 'Data feed URL to fetch choice values from'
      },
      placeholder: {
        type: 'mgText',
        help: 'Ghost text to display when there is no value'
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      }
    },
    format: true,
    // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
    shorthand: ['choice', 'choose', 'dropdown', 'pick']
  });
  var script$6 = Vue.component('mgChoiceDropdown', {
    data: function data() {
      return {
        data: undefined,
        value: [],
        enumIter: []
      };
    },
    props: {
      config: Object,
      form: String
    },
    methods: {
      change: function change(val) {
        this.data = val.id;
      }
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
      });
      this.$watch('$props.config.enumUrl', function () {
        if (!_this.$props.config.enumUrl) return;

        _this.$macgyver.fetchEnumUrl(_this.$props.config.enumUrl).then(function (data) {
          return _this.$set(_this.$props.config, 'enum', data);
        });
      }, {
        immediate: true
      });
      this.$watch('$props.config.enum', function () {
        if (_.isArray(_this.$props.config["enum"]) && _.isString(_this.$props.config["enum"][0])) {
          // Array of strings
          _this.enumIter = _this.$props.config["enum"].map(function (i) {
            return {
              id: _.camelCase(i),
              title: i
            };
          });
        } else if (_.isArray(_this.$props.config["enum"]) && _.isObject(_this.$props.config["enum"][0])) {
          // Collection
          _this.enumIter = _this.$props.config["enum"];
        }

        if (_this.data) _this.value = _this.enumIter.find(function (e) {
          return e.id == _this.data;
        }) || _this.data;
      }, {
        immediate: true
      });
    }
  });

  /* script */
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-select", {
      attrs: {
        value: _vm.value,
        label: "title",
        options: _vm.enumIter,
        placeholder: _vm.$props.config.placeholder
      },
      on: { input: _vm.change }
    })
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = function (inject) {
      if (!inject) return
      inject("data-v-979e24da_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Make look consistant with Bootstrap */\n.v-select.open .dropdown-toggle {\n\tborder-color: #5cb3fd;\n}\n\n/* Remove weird dropdown icon that Bootstrap adds */\n.v-select .dropdown-toggle::after {\n\tdisplay: none;\n}\n\n/* Wider spacing for clear button */\n.v-select .dropdown-toggle .clear {\n\tmargin-right: 10px;\n}\n\n/* Align dropdown icon correctly */\n.v-select .open-indicator {\n\tmargin-top: -2px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgChoiceDropdown.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4EA,wCAAA;AACA;CACA,qBAAA;AACA;;AAEA,mDAAA;AACA;CACA,aAAA;AACA;;AAEA,mCAAA;AACA;CACA,kBAAA;AACA;;AAEA,kCAAA;AACA;CACA,gBAAA;AACA","file":"mgChoiceDropdown.vue","sourcesContent":["<script>\nimport VueSelect from 'vue-select';\nimport 'vue-select/dist/vue-select.css';\n\nVue.component('v-select', VueSelect);\n\nmacgyver.register('mgChoiceDropdown', {\n\ttitle: 'Dropdown multiple-choice',\n\ticon: 'far fa-chevron-circle-down',\n\tcategory: 'Choice Selectors',\n\tpreferId: true,\n\tconfig: {\n\t\tenum: {\n\t\t\ttype: 'mgList',\n\t\t\ttitle: 'List items',\n\t\t\tdefault: ['Item One', 'Item Two', 'Item Three'],\n\t\t},\n\t\tenumUrl: {type: 'mgUrl', advanced: true, help: 'Data feed URL to fetch choice values from'},\n\t\tplaceholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t},\n\tformat: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?\n\tshorthand: ['choice', 'choose', 'dropdown', 'pick'],\n});\n\nexport default Vue.component('mgChoiceDropdown', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tvalue: [],\n\t\tenumIter: [],\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tmethods: {\n\t\tchange(val) {\n\t\t\tthis.data = val.id;\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t});\n\n\t\tthis.$watch('$props.config.enumUrl', ()=> {\n\t\t\tif (!this.$props.config.enumUrl) return;\n\t\t\tthis.$macgyver.fetchEnumUrl(this.$props.config.enumUrl)\n\t\t\t\t.then(data => this.$set(this.$props.config, 'enum', data))\n\t\t}, {immediate: true});\n\n\t\tthis.$watch('$props.config.enum', ()=> {\n\t\t\tif (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings\n\t\t\t\tthis.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));\n\t\t\t} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection\n\t\t\t\tthis.enumIter = this.$props.config.enum;\n\t\t\t}\n\n\t\t\tif (this.data) this.value = this.enumIter.find(e => e.id == this.data) || this.data;\n\t\t}, {immediate: true});\n\t},\n});\n</script>\n\n<template>\n\t<v-select\n\t\t:value=\"value\"\n\t\tlabel=\"title\"\n\t\t:options=\"enumIter\"\n\t\t:placeholder=\"$props.config.placeholder\"\n\t\t@input=\"change\"\n\t/>\n</template>\n\n<style>\n/* Make look consistant with Bootstrap */\n.v-select.open .dropdown-toggle {\n\tborder-color: #5cb3fd;\n}\n\n/* Remove weird dropdown icon that Bootstrap adds */\n.v-select .dropdown-toggle::after {\n\tdisplay: none;\n}\n\n/* Wider spacing for clear button */\n.v-select .dropdown-toggle .clear {\n\tmargin-right: 10px;\n}\n\n/* Align dropdown icon correctly */\n.v-select .open-indicator {\n\tmargin-top: -2px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    

    
    var mgChoiceDropdown = normalizeComponent_1(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      browser,
      undefined
    );

  var mgChoiceDropdown$1 = /*#__PURE__*/Object.freeze({
    'default': mgChoiceDropdown
  });

  macgyver.register('mgChoicePopup', {
    title: 'Choice Popup',
    icon: 'fas fa-window',
    category: 'Choice Selectors',
    preferId: true,
    config: {
      "enum": {
        // Each item is in the form {id, [title], [class], [classActive], [classInactive]}
        type: 'mgList',
        title: 'List items',
        "default": ['Item One', 'Item Two', 'Item Three']
      },
      popupTitle: {
        type: 'mgText',
        "default": 'Select item'
      },
      inactiveText: {
        type: 'mgText',
        "default": 'Select item...',
        advanced: true
      },
      iconActive: {
        type: 'mgIcon',
        "default": 'far fa-check',
        advanced: true
      },
      iconInactive: {
        type: 'mgIcon',
        "default": 'far fa-ellipsis-h',
        advanced: true
      },
      classActive: {
        type: 'mgText',
        "default": 'btn btn-primary',
        advanced: true
      },
      classInactive: {
        type: 'mgText',
        "default": 'btn btn-default',
        advanced: true
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      }
    },
    format: true // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?

  });
  var script$7 = Vue.component('mgChoicePopup', {
    data: function data() {
      return {
        data: undefined,
        activeTitle: undefined,
        enumIter: []
      };
    },
    props: {
      config: Object,
      form: String
    },
    methods: {
      select: function select(id) {
        var _this = this;

        this.$prompt.macgyver({
          title: this.$props.config.popupTitle,
          form: {
            id: 'selected',
            type: 'mgChoiceButtons',
            "enum": this.enumIter,
            classWrapper: 'list-group',
            itemClassActive: 'list-group-item active',
            itemClassInactive: 'list-group-item'
          },
          data: {
            selected: this.data
          },
          buttons: [],
          onShow: function onShow() {
            // Bind to the mg-form element, detect the first change and close the dialog
            _this.$macgyver.$forms.promptMacGyver.$on('mgChange', function () {
              return setTimeout(function () {
                // Timeout not really needed but it lets the button highlight before we close
                _this.$prompt.$settings.$defer.resolve(_this.$prompt.$settings.data);

                _this.$prompt.close(true);
              }, 100);
            });
          }
        }).then(function (form) {
          return _this.$set(_this, 'data', form.selected);
        });
      }
    },
    created: function created() {
      var _this2 = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this2.$props.config.required && !_this2.data) return reply("".concat(_this2.$props.config.title, " is required"));
      });
    },
    watch: {
      data: function data() {
        var _this3 = this;

        if (this.data && this.enumIter.length) {
          var activeItem = this.enumIter.find(function (e) {
            return e.id == _this3.data;
          });
          this.$set(this, 'activeTitle', activeItem ? activeItem.title : '');
        }
      },
      '$props.config.enumUrl': {
        immediate: true,
        handler: function handler() {
          var _this4 = this;

          if (!this.$props.config.enumUrl) return;
          this.$macgyver.fetch(this.$props.config.enumUrl, {
            type: 'array',
            mappings: {
              id: {
                required: true
              },
              title: {
                required: true
              }
            }
          }).tap(function (data) {
            return console.log('mgPopup got feed', data);
          }).then(function (data) {
            return _this4.$set(_this4.$props.config, 'enum', data);
          });
        }
      },
      '$props.config.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props.config["enum"]) && _.isString(this.$props.config["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props.config["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props.config["enum"]) && _.isObject(this.$props.config["enum"][0])) {
            // Collection
            this.enumIter = this.$props.config["enum"];
          }
        }
      }
    }
  });

  /* script */
  const __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-choice-popup" }, [
      _c(
        "a",
        {
          class: _vm.data
            ? _vm.$props.config.classActive
            : _vm.$props.config.classInactive,
          on: {
            click: function($event) {
              return _vm.select()
            }
          }
        },
        [
          _c("i", {
            class: _vm.data
              ? _vm.$props.config.iconActive
              : _vm.$props.config.iconInactive
          }),
          _vm._v(
            "\n\t\t" +
              _vm._s(
                this.data ? _vm.activeTitle : _vm.$props.config.inactiveText
              ) +
              "\n\t"
          )
        ]
      )
    ])
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgChoicePopup = normalizeComponent_1(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      undefined,
      undefined
    );

  var mgChoicePopup$1 = /*#__PURE__*/Object.freeze({
    'default': mgChoicePopup
  });

  macgyver.register('mgChoiceRadio', {
    title: 'Radio multiple-choice',
    icon: 'far fa-list-ul',
    category: 'Choice Selectors',
    preferId: true,
    config: {
      "enum": {
        type: 'mgList',
        title: 'List items',
        "default": ['Item One', 'Item Two', 'Item Three']
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      }
    },
    format: true // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?

  });
  var script$8 = Vue.component('mgChoiceRadio', {
    data: function data() {
      return {
        data: undefined,
        enumIter: []
      };
    },
    props: {
      config: Object,
      form: String
    },
    methods: {
      select: function select(id) {
        this.data = id;
      }
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
      });
    },
    watch: {
      '$props.config.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props.config["enum"]) && _.isString(this.$props.config["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props.config["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props.config["enum"]) && _.isObject(this.$props.config["enum"][0])) {
            // Collection
            this.enumIter = this.$props.config["enum"];
          }
        }
      }
    }
  });

  /* script */
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      _vm._l(_vm.enumIter, function(item) {
        return _c("div", { key: item.id, staticClass: "form-check" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data,
                expression: "data"
              }
            ],
            attrs: {
              type: "radio",
              name: _vm.$props.config.id,
              id: "check-" + _vm.$props.config.id + "-" + item.id
            },
            domProps: { value: item.id, checked: _vm._q(_vm.data, item.id) },
            on: {
              change: function($event) {
                _vm.data = item.id;
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "form-check-label",
              attrs: { for: "check-" + _vm.$props.config.id + "-" + item.id }
            },
            [_vm._v("\n\t\t\t" + _vm._s(item.title) + "\n\t\t")]
          )
        ])
      }),
      0
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgChoiceRadio = normalizeComponent_1(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      undefined,
      undefined
    );

  var mgChoiceRadio$1 = /*#__PURE__*/Object.freeze({
    'default': mgChoiceRadio
  });

  macgyver.register('mgCodeEditor', {
    requires: 'node_modules/ace-builds/src-noconflict/ace.js',
    title: 'Code Editor',
    icon: 'fal fa-code',
    category: 'Complex Inputs',
    preferId: true,
    config: {
      syntax: {
        type: 'mgChoiceDropdown',
        "enum": ['text', 'json', 'javascript'],
        "default": 'json'
      },
      theme: {
        type: 'mgChoiceDropdown',
        "enum": ['chrome'],
        advanced: true,
        "default": 'chrome',
        help: 'The syntax color scheme to use'
      },
      height: {
        type: 'mgText',
        "default": '400px',
        help: 'The size of the editing window as a valid CSS measurement'
      }
    }
  });
  var script$9 = Vue.component('mgCodeEditor', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    watch: {
      config: function config() {
        this.editor.getSession().setMode("ace/mode/".concat(this.$props.config.syntax));
        this.editor.setTheme("ace/theme/".concat(this.$props.config.theme));
      }
    },
    created: function created() {
      this.$macgyver.inject(this);
    },
    beforeDestroy: function beforeDestroy() {
      this.editor.destroy();
      this.editor.container.remove();
    },
    mounted: function mounted() {
      var _this = this;

      this.editor = ace.edit(this.$el);
      this.editor.$blockScrolling = Infinity;
      this.editor.setValue(_.isObject(this.data) ? JSON.stringify(this.data, null, '\t') : this.data ? this.data : '', 1);
      this.editor.setOptions({
        showPrintMargin: false
      });
      this.editor.on('change', function () {
        return _this.$macgyver.forms.emit(_this.form, 'mgChange', _this.$props.config.id, _this.editor.getValue());
      });
      this.$nextTick(function () {
        return _this.editor.resize();
      });
    },
    render: function render(h) {
      return h('div', {
        attrs: {
          "class": 'mg-code-editor',
          style: "height: ".concat(this.$props.config.height, "; width: 100%")
        }
      });
    }
  });

  /* script */
  const __vue_script__$9 = script$9;

  /* template */

    /* style */
    const __vue_inject_styles__$9 = function (inject) {
      if (!inject) return
      inject("data-v-f4f37b5e_0", { source: "\n.mg-code-editor {\n\tborder: 1px solid #f0f0f0;\n\tborder-radius: 5px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgCodeEditor.vue"],"names":[],"mappings":";AA+DA;CACA,yBAAA;CACA,kBAAA;AACA","file":"mgCodeEditor.vue","sourcesContent":["<script>\nmacgyver.register('mgCodeEditor', {\n\trequires: 'node_modules/ace-builds/src-noconflict/ace.js',\n\ttitle: 'Code Editor',\n\ticon: 'fal fa-code',\n\tcategory: 'Complex Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\tsyntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript'], default: 'json'},\n\t\ttheme: {type: 'mgChoiceDropdown', enum: ['chrome'], advanced: true, default: 'chrome', help: 'The syntax color scheme to use'},\n\t\theight: {type: 'mgText', default: '400px', help: 'The size of the editing window as a valid CSS measurement'},\n\t},\n});\n\nexport default Vue.component('mgCodeEditor', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\twatch: {\n\t\tconfig() {\n\t\t\tthis.editor.getSession().setMode(`ace/mode/${this.$props.config.syntax}`);\n\t\t\tthis.editor.setTheme(`ace/theme/${this.$props.config.theme}`);\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n\tbeforeDestroy() {\n\t\tthis.editor.destroy();\n\t\tthis.editor.container.remove();\n\t},\n\tmounted() {\n\t\tthis.editor = ace.edit(this.$el);\n\t\tthis.editor.$blockScrolling = Infinity;\n\n\t\tthis.editor.setValue(\n\t\t\t_.isObject(this.data) ? JSON.stringify(this.data, null, '\\t')\n\t\t\t: this.data ? this.data\n\t\t\t: ''\n\t\t, 1);\n\t\tthis.editor.setOptions({\n\t\t\tshowPrintMargin: false,\n\t\t});\n\t\tthis.editor.on('change', ()=> this.$macgyver.forms.emit(this.form, 'mgChange', this.$props.config.id, this.editor.getValue()));\n\n\t\tthis.$nextTick(()=> this.editor.resize());\n\t},\n\trender(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tclass: 'mg-code-editor',\n\t\t\t\tstyle: `height: ${this.$props.config.height}; width: 100%`,\n\t\t\t},\n\t\t});\n\t},\n});\n</script>\n\n<style>\n.mg-code-editor {\n\tborder: 1px solid #f0f0f0;\n\tborder-radius: 5px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = undefined;
    /* style inject SSR */
    

    
    var mgCodeEditor = normalizeComponent_1(
      {},
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      browser,
      undefined
    );

  var mgCodeEditor$1 = /*#__PURE__*/Object.freeze({
    'default': mgCodeEditor
  });

  /**
  * Instance of a MacGyver widget
  * This is the parent of all other mg* components except mgContainer
  */
  var script$a = Vue.component('mgComponent', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    render: function render(h) {
      var _this = this;

      if (!this.$macgyver.widgets[this.$props.config.type]) return h('mg-error', {
        props: {
          form: this.form,
          config: {
            errorText: "Unknown type: ".concat(this.$props.config.type)
          }
        }
      });
      return h(this.$props.config.type, {
        nativeOn: {
          mousedown: function mousedown(e) {
            return _this.$macgyver.$forms[_this.$props.form].$emit('mgComponent.mouseDown', _this, e);
          },
          mouseup: function mouseup(e) {
            return _this.$macgyver.$forms[_this.$props.form].$emit('mgComponent.mouseUp', _this, e);
          },
          mousemove: function mousemove(e) {
            return _this.$macgyver.$forms[_this.$props.form].$emit('mgComponent.mouseMove', _this, e);
          },
          mouseout: function mouseout(e) {
            return _this.$macgyver.$forms[_this.$props.form].$emit('mgComponent.mouseOut', _this, e);
          }
        },
        props: {
          form: this.$props.form,
          config: this.$props.config,
          data: this.data
        }
      });
    }
  });

  /* script */
  const __vue_script__$a = script$a;

  /* template */

    /* style */
    const __vue_inject_styles__$a = undefined;
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = undefined;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgComponent = normalizeComponent_1(
      {},
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      undefined,
      undefined
    );

  var mgComponent$1 = /*#__PURE__*/Object.freeze({
    'default': mgComponent
  });

  /**
  * MacGyver component loader
  * This is a meta component that loads other dynamic components as an array
  * @param {Object} config The config specification
  * @param {array} config.items A collection of sub-item objects to display
  * @param {string} [config.title] The title of the container to display
  * @param {string} [config.layout="form"] The layout profile to use. ENUM: form = A standard horizontal form layout, card = a Bootstrap 4 card with header and footer, columns = vertically sorted column display
  * @param {boolean} [config.items[].help] Optional help text to show under the element
  * @param {boolean} [config.items[].showTitle=true] Whether to show the left-hand-side form title for the item
  * @param {string} [config.items[].title] Optional title to display for the widget
  * @param {string} config.items[].type The type of the object to render. This corresponds to a `mg*` component
  */

  macgyver.register('mgContainer', {
    title: 'Container layout',
    icon: 'far fa-th-large',
    category: 'Layout',
    isContainer: true,
    preferId: false,
    config: {
      layout: {
        type: 'mgChoiceRadio',
        title: 'Layout profile',
        help: 'How to layout child elements',
        "default": 'form',
        "enum": [{
          id: 'form',
          title: 'Simple form layout'
        }, {
          id: 'formFloating',
          title: 'Form with floating labels'
        }, {
          id: 'card',
          title: 'Card based layout'
        }, {
          id: 'columns',
          title: 'Vertical column layout'
        }]
      },
      showTitles: {
        type: 'mgToggle',
        "default": true,
        help: 'Show titles for fields',
        showIf: "layout == 'form' || layout == 'card'"
      },
      columnHeaders: {
        type: 'mgToggle',
        "default": false,
        help: 'Show column headers',
        showIf: "layout == 'columns'"
      },
      collapsable: {
        type: 'mgToggle',
        "default": false,
        help: 'This card can be hidden',
        showIf: "layout == 'card'"
      },
      collapsed: {
        type: 'mgToggle',
        "default": false,
        help: 'This card is collapsed by default',
        showIf: "layout == 'card'"
      },
      border: {
        type: 'mgToggle',
        "default": true,
        help: 'Show a border around the container',
        showIf: "layout == 'columns'"
      }
    },
    configChildren: {
      help: {
        type: 'mgText',
        title: 'Help text',
        help: 'Optional help text for the item - just like what you are reading now'
      },
      showTitle: {
        type: 'mgToggle',
        "default": true,
        title: 'Show Title',
        help: 'Whether to show the side title for this element'
      },
      title: {
        type: 'mgText',
        title: 'Title'
      },
      rowClass: {
        type: 'mgChoiceDropdown',
        title: 'Styling',
        help: 'Additional styling to apply to the widget',
        "default": '',
        "enum": [{
          id: '',
          title: 'Normal'
        }, {
          id: 'mgContainerRowLarge',
          title: 'Large text'
        }]
      }
    }
  });
  var script$b = Vue.component('mgContainer', {
    data: function data() {
      return {
        highlights: {} // Lookup of extra classes to add to widgets

      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    },
    methods: {
      isBlank: function isBlank(path) {
        return !!this.$macgyver.forms.getPath(this.$props.form, path);
      }
    },
    mounted: function mounted() {
      var _this = this;

      if (this.$props.config.collapsable) {
        var $card = $(this.$el).find('.card').first();
        $card.find('.card-header').first().on('click', function () {
          var $body = $(_this.$el).find('.card-body');

          if ($card.hasClass('card-collapsed')) {
            $body.slideDown({
              complete: function complete() {
                return $card.removeClass('card-collapsed');
              }
            });
          } else {
            $body.slideUp({
              complete: function complete() {
                return $card.addClass('card-collapsed');
              }
            });
          }
        });
      }
    }
  });

  /* script */
  const __vue_script__$b = script$b;

  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.$props.config.layout == "form" ||
      _vm.$props.config.layout === undefined
      ? _c(
          "div",
          _vm._l(_vm.$props.config.items, function(widget, widgetIndex) {
            return _c(
              "div",
              {
                key: widget.id,
                staticClass: "form-group row mgComponent",
                class: [
                  _vm.highlights[widgetIndex],
                  widget.mgValidation == "error" ? "has-error" : "",
                  widget.rowClass
                ]
              },
              [
                widget.showTitle || _vm.$props.config.showTitles
                  ? _c(
                      "label",
                      { staticClass: "control-label text-left col-sm-3" },
                      [_vm._v("\n\t\t\t" + _vm._s(widget.title) + "\n\t\t")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class:
                      widget.showTitle || _vm.$props.config.showTitles
                        ? "col-sm-9"
                        : "col-sm-12"
                  },
                  [
                    _c("mg-component", {
                      attrs: { form: _vm.$props.form, config: widget }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                widget.help
                  ? _c(
                      "div",
                      {
                        staticClass: "help-block",
                        class:
                          widget.showTitle || _vm.$props.config.showTitles
                            ? "col-sm-9 col-sm-offset-3"
                            : "col-sm-12"
                      },
                      [_vm._v(_vm._s(widget.help))]
                    )
                  : _vm._e()
              ]
            )
          }),
          0
        )
      : _vm.$props.config.layout == "formFloating"
      ? _c(
          "div",
          _vm._l(_vm.$props.config.items, function(widget, widgetIndex) {
            return _c(
              "div",
              {
                key: widget.id,
                staticClass:
                  "form-group mgContainer-formFloating row mgComponent",
                class: [
                  _vm.highlights[widgetIndex],
                  widget.mgValidation == "error" ? "has-error" : "",
                  widget.rowClass
                ]
              },
              [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c("mg-component", {
                      staticClass: "control-input",
                      class: _vm.isBlank(widget.$dataPath) && "blank",
                      attrs: { form: _vm.$props.form, config: widget }
                    }),
                    _vm._v(" "),
                    _vm.$props.config.showTitles
                      ? _c(
                          "label",
                          { staticClass: "control-label text-left col-sm-3" },
                          [
                            _vm._v(
                              "\n\t\t\t\t" + _vm._s(widget.title) + "\n\t\t\t"
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("pre", [
                      _vm._v("ISB? " + _vm._s(_vm.isBlank(widget.$dataPath)))
                    ]),
                    _vm._v(" "),
                    _c("pre", [_vm._v(_vm._s(widget))])
                  ],
                  1
                ),
                _vm._v(" "),
                widget.help
                  ? _c(
                      "div",
                      {
                        staticClass: "help-block",
                        class:
                          widget.showTitle || _vm.$props.config.showTitles
                            ? "col-sm-9 col-sm-offset-3"
                            : "col-sm-12"
                      },
                      [_vm._v(_vm._s(widget.help))]
                    )
                  : _vm._e()
              ]
            )
          }),
          0
        )
      : _vm.$props.config.layout == "card"
      ? _c("div", [
          _c(
            "div",
            {
              staticClass: "card mg-container",
              class: {
                "card-collapsable": _vm.$props.config.collapsable,
                "card-collapsed": _vm.$props.config.collapsed
              }
            },
            [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(_vm._s(_vm.$props.config.title))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                _vm._l(_vm.$props.config.items, function(widget, widgetIndex) {
                  return _c(
                    "div",
                    {
                      key: widget.id,
                      staticClass: "form-group row mgComponent",
                      class: [
                        _vm.highlights[widgetIndex],
                        widget.mgValidation == "error" ? "has-error" : "",
                        widget.rowClass
                      ]
                    },
                    [
                      widget.showTitle || _vm.$props.config.showTitles
                        ? _c(
                            "label",
                            { staticClass: "control-label text-left col-sm-3" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(widget.title) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          class:
                            widget.showTitle || _vm.$props.config.showTitles
                              ? "col-sm-9"
                              : "col-sm-12"
                        },
                        [
                          _c("mg-component", {
                            attrs: { form: _vm.$props.form, config: widget }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      widget.help
                        ? _c(
                            "div",
                            {
                              staticClass: "help-block",
                              class:
                                widget.showTitle || _vm.$props.config.showTitles
                                  ? "col-sm-9 col-sm-offset-3"
                                  : "col-sm-12"
                            },
                            [_vm._v(_vm._s(widget.help))]
                          )
                        : _vm._e()
                    ]
                  )
                }),
                0
              )
            ]
          )
        ])
      : _vm.$props.config.layout == "columns"
      ? _c("div", [
          _c(
            "table",
            {
              staticClass: "mg-container",
              class: _vm.$props.config.border
                ? "table table-bordered"
                : "mg-container-columns-no-border",
              staticStyle: { width: "100%" }
            },
            [
              _vm.$props.config.columnHeaders
                ? _c("thead", [
                    _c(
                      "tr",
                      _vm._l(_vm.config.items, function(widget) {
                        return _c("th", { key: widget.id }, [
                          _vm._v(_vm._s(widget.title))
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("tbody", [
                _c(
                  "tr",
                  _vm._l(_vm.$props.config.items, function(widget, widgetIndex) {
                    return _c(
                      "td",
                      {
                        key: widget.id,
                        class: [
                          _vm.highlights[widgetIndex],
                          widget.mgValidation == "error" ? "has-error" : "",
                          widget.rowClass
                        ]
                      },
                      [
                        _c("mg-component", {
                          attrs: { form: _vm.$props.form, config: widget }
                        }),
                        _vm._v(" "),
                        widget.help
                          ? _c("div", { staticClass: "help-block" }, [
                              _vm._v(_vm._s(widget.help))
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  }),
                  0
                )
              ])
            ]
          )
        ])
      : _c("div", { staticClass: "mg-container" }, [
          _c("div", { staticClass: "alert alert-danger" }, [
            _vm._v(
              '\n\t\tUnsupported mgContainer layout "' +
                _vm._s(_vm.$props.config.layout || "Unspecified") +
                '"\n\t\t'
            ),
            _c("pre", [_vm._v(_vm._s(_vm.$props.config))])
          ])
        ])
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = function (inject) {
      if (!inject) return
      inject("data-v-64d3bd58_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Card layout {{{ */\n/* Collapsable card {{{ */\n.mg-container.card.card-collapsable {\n\ttransition: all 0.2s ease-in;\n}\n.mg-container.card.card-collapsable .card-header {\n\tcursor: pointer;\n}\n.mg-container.card.card-collapsable .card-header::after {\n\tfont-family: \"Font Awesome 5 Pro\";\n\tcontent: '\\f054';\n\tfloat: right;\n\ttransition: transform 0.4s;\n}\n.mg-container.card.card-collapsable:not(.card-collapsed) .card-header::after {\n\ttransform: rotate(90deg);\n}\n\n\n/* Collapsed card {{{ */\n.mg-container.card.card-collapsable.card-collapsed {\n\tbox-shadow: none;\n\tborder-bottom: none;\n\tmargin-bottom: 0px;\n}\n.mg-container.card.card-collapsable.card-collapsed .card-body {\n\tdisplay: none;\n}\n/* }}} */\n/* }}} */\n/* }}} */\n\n/* formFloating {{{ */\n.mgContainer-formFloating > .col-12 {\n\tposition: relative;\n\tline-height: 14px;\n\tmargin: 0 0px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n.mgContainer-formFloating > .col-12 > .control-input {\n\theight: 45px;\n\tpadding-top: 8px;\n\tpadding-bottom: 2px;\n\tpadding-left: 2px;\n\tpadding-right: 12px;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n\tcolor: #333333;\n\tbackground-color: #ffffff;\n\tbackground-image: none;\n\toutline: none;\n\t/* border: 1px solid rgba(120, 120, 120, 0.5);\n\t*/\n\tborder: none; \n\tborder-bottom: 1px solid #bbb;\n\t-moz-box-shadow: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tborder-radius: 0;\n\tposition: relative;\n}\n.mgContainer-formFloating > .col-12 > .control-input.blank + .control-label {\n\ttransform: translateY(0px);\n\tcolor: #bbb;\n\tfont-size: 15px;\n\tfont-weight: 100;\n\topacity: 1;\n}\n.mgContainer-formFloating > .col-12 > .control-input.control-input:focus + .control-label {\n\ttransform: translateY(-21px);\n\tcolor: #66afe9;\n\tfont-size: 14px;\n\topacity: 1;\n\tfont-weight: 100;\n\tbackground-color: white;\n}\n.mgContainer-formFloating > .col-12 > .control-label {\n\tcolor: #aaa;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tposition: absolute;\n\tz-index: 2;\n\tleft: 2px;\n\ttop: 16px;\n\tpadding: 0 0px;\n\tpointer-events: none;\n\tbackground: white;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-21px);\n\tfont-weight: 500;\n}\n/* }}} */\n\n/* Columns layout {{{ */\n.mg-container.mg-container-columns-no-border th,\n.mg-container.mg-container-columns-no-border td {\n\tpadding: 5px;\n}\n/* }}} */\n\n/* Misc utility types {{{ */\n.mg-form .help-block {\n\tfont-size: 80%;\n\tcolor: #6c757d !important;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgContainer.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsJA,oBAAA;AACA,yBAAA;AACA;CACA,4BAAA;AACA;AAEA;CACA,eAAA;AACA;AAEA;CACA,iCAAA;CACA,gBAAA;CACA,YAAA;CACA,0BAAA;AACA;AAEA;CACA,wBAAA;AACA;;;AAGA,uBAAA;AACA;CACA,gBAAA;CACA,mBAAA;CACA,kBAAA;AACA;AAEA;CACA,aAAA;AACA;AACA,QAAA;AACA,QAAA;AACA,QAAA;;AAEA,qBAAA;AACA;CACA,kBAAA;CACA,iBAAA;CACA,aAAA;CACA,qBAAA;CACA,WAAA;AACA;AAEA;CACA,YAAA;CACA,gBAAA;CACA,mBAAA;CACA,iBAAA;CACA,mBAAA;CACA,eAAA;CACA,uBAAA;CACA,cAAA;CACA,yBAAA;CACA,sBAAA;CACA,aAAA;CACA;EACA;CACA,YAAA;CACA,6BAAA;CACA,qBAAA;CACA,wBAAA;CACA,gBAAA;CACA,gBAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;CACA,WAAA;CACA,eAAA;CACA,gBAAA;CACA,UAAA;AACA;AAEA;CACA,4BAAA;CACA,cAAA;CACA,eAAA;CACA,UAAA;CACA,gBAAA;CACA,uBAAA;AACA;AAEA;CACA,WAAA;CACA,qBAAA;CACA,eAAA;CACA,kBAAA;CACA,UAAA;CACA,SAAA;CACA,SAAA;CACA,cAAA;CACA,oBAAA;CACA,iBAAA;CACA,0BAAA;CACA,4BAAA;CACA,gBAAA;AACA;AACA,QAAA;;AAEA,uBAAA;AACA;;CAEA,YAAA;AACA;AACA,QAAA;;AAEA,2BAAA;AACA;CACA,cAAA;CACA,yBAAA;AACA;AACA,QAAA","file":"mgContainer.vue","sourcesContent":["<script>\n/**\n* MacGyver component loader\n* This is a meta component that loads other dynamic components as an array\n* @param {Object} config The config specification\n* @param {array} config.items A collection of sub-item objects to display\n* @param {string} [config.title] The title of the container to display\n* @param {string} [config.layout=\"form\"] The layout profile to use. ENUM: form = A standard horizontal form layout, card = a Bootstrap 4 card with header and footer, columns = vertically sorted column display\n* @param {boolean} [config.items[].help] Optional help text to show under the element\n* @param {boolean} [config.items[].showTitle=true] Whether to show the left-hand-side form title for the item\n* @param {string} [config.items[].title] Optional title to display for the widget\n* @param {string} config.items[].type The type of the object to render. This corresponds to a `mg*` component\n*/\n\nmacgyver.register('mgContainer', {\n\ttitle: 'Container layout',\n\ticon: 'far fa-th-large',\n\tcategory: 'Layout',\n\tisContainer: true,\n\tpreferId: false,\n\tconfig: {\n\t\tlayout: {\n\t\t\ttype: 'mgChoiceRadio',\n\t\t\ttitle: 'Layout profile',\n\t\t\thelp: 'How to layout child elements',\n\t\t\tdefault: 'form',\n\t\t\tenum: [\n\t\t\t\t{id: 'form', title: 'Simple form layout'},\n\t\t\t\t{id: 'formFloating', title: 'Form with floating labels'},\n\t\t\t\t{id: 'card', title: 'Card based layout'},\n\t\t\t\t{id: 'columns', title: 'Vertical column layout'},\n\t\t\t],\n\t\t},\n\t\tshowTitles: {type: 'mgToggle', default: true, help: 'Show titles for fields', showIf: \"layout == 'form' || layout == 'card'\"},\n\t\tcolumnHeaders: {type: 'mgToggle', default: false, help: 'Show column headers', showIf: \"layout == 'columns'\"},\n\t\tcollapsable: {type: 'mgToggle', default: false, help: 'This card can be hidden', showIf: \"layout == 'card'\"},\n\t\tcollapsed: {type: 'mgToggle', default: false, help: 'This card is collapsed by default', showIf: \"layout == 'card'\"},\n\t\tborder: {type: 'mgToggle', default: true, help: 'Show a border around the container', showIf: \"layout == 'columns'\"},\n\t},\n\tconfigChildren: {\n\t\thelp: {type: 'mgText', title: 'Help text', help: 'Optional help text for the item - just like what you are reading now'},\n\t\tshowTitle: {type: 'mgToggle', default: true, title: 'Show Title', help: 'Whether to show the side title for this element'},\n\t\ttitle: {type: 'mgText', title: 'Title'},\n\t\trowClass: {type: 'mgChoiceDropdown', title: 'Styling', help: 'Additional styling to apply to the widget', default: '', enum: [\n\t\t\t{id: '', title: 'Normal'},\n\t\t\t{id: 'mgContainerRowLarge', title: 'Large text'},\n\t\t]},\n\t},\n});\n\nexport default Vue.component('mgContainer', {\n\tdata: ()=> ({\n\t\thighlights: {}, // Lookup of extra classes to add to widgets\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n\tmethods: {\n\t\tisBlank(path) {\n\t\t\treturn !! this.$macgyver.forms.getPath(this.$props.form, path);\n\t\t},\n\t},\n\tmounted() {\n\t\tif (this.$props.config.collapsable) {\n\t\t\tvar $card = $(this.$el).find('.card').first();\n\n\t\t\t$card.find('.card-header').first().on('click', ()=> {\n\t\t\t\tvar $body = $(this.$el).find('.card-body');\n\t\t\t\tif ($card.hasClass('card-collapsed')) {\n\t\t\t\t\t$body.slideDown({complete: ()=> $card.removeClass('card-collapsed')});\n\t\t\t\t} else {\n\t\t\t\t\t$body.slideUp({complete: ()=> $card.addClass('card-collapsed')});\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t},\n});\n</script>\n\n<template>\n\t<div v-if=\"$props.config.layout == 'form' || $props.config.layout === undefined\">\n\t\t<div v-for=\"(widget, widgetIndex) in $props.config.items\" :key=\"widget.id\" class=\"form-group row mgComponent\" :class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\">\n\t\t\t<label v-if=\"widget.showTitle || $props.config.showTitles\" class=\"control-label text-left col-sm-3\">\n\t\t\t\t{{widget.title}}\n\t\t\t</label>\n\t\t\t<div :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9' : 'col-sm-12'\">\n\t\t\t\t<mg-component :form=\"$props.form\" :config=\"widget\"/>\n\t\t\t</div>\n\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t</div>\n\t</div>\n\t<div v-else-if=\"$props.config.layout == 'formFloating'\">\n\t\t<div v-for=\"(widget, widgetIndex) in $props.config.items\" :key=\"widget.id\" class=\"form-group mgContainer-formFloating row mgComponent\" :class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<mg-component :form=\"$props.form\" :config=\"widget\" class=\"control-input\" :class=\"isBlank(widget.$dataPath) && 'blank'\"/>\n\t\t\t\t<label v-if=\"$props.config.showTitles\" class=\"control-label text-left col-sm-3\">\n\t\t\t\t\t{{widget.title}}\n\t\t\t\t</label>\n\t\t\t\t<pre>ISB? {{isBlank(widget.$dataPath)}}</pre>\n\t\t\t\t<pre>{{widget}}</pre>\n\t\t\t</div>\n\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t</div>\n\t</div>\n\t<div v-else-if=\"$props.config.layout == 'card'\">\n\t\t<div class=\"card mg-container\" :class=\"{'card-collapsable': $props.config.collapsable, 'card-collapsed': $props.config.collapsed}\">\n\t\t\t<div class=\"card-header\">{{$props.config.title}}</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div v-for=\"(widget, widgetIndex) in $props.config.items\" :key=\"widget.id\" class=\"form-group row mgComponent\" :class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\">\n\t\t\t\t\t<label v-if=\"widget.showTitle || $props.config.showTitles\" class=\"control-label text-left col-sm-3\">\n\t\t\t\t\t\t{{widget.title}}\n\t\t\t\t\t</label>\n\t\t\t\t\t<div :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9' : 'col-sm-12'\">\n\t\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"widget\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div v-else-if=\"$props.config.layout == 'columns'\">\n\t\t<table class=\"mg-container\" :class=\"$props.config.border ? 'table table-bordered' : 'mg-container-columns-no-border'\" style=\"width: 100%\">\n\t\t\t<thead v-if=\"$props.config.columnHeaders\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th v-for=\"widget in config.items\" :key=\"widget.id\">{{widget.title}}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td v-for=\"(widget, widgetIndex) in $props.config.items\" :key=\"widget.id\" :class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\">\n\t\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"widget\"/>\n\t\t\t\t\t\t<div class=\"help-block\" v-if=\"widget.help\">{{widget.help}}</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div v-else class=\"mg-container\">\n\t\t<div class=\"alert alert-danger\">\n\t\t\tUnsupported mgContainer layout \"{{$props.config.layout || 'Unspecified'}}\"\n\t\t\t<pre>{{$props.config}}</pre>\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n/* Card layout {{{ */\n/* Collapsable card {{{ */\n.mg-container.card.card-collapsable {\n\ttransition: all 0.2s ease-in;\n}\n\n.mg-container.card.card-collapsable .card-header {\n\tcursor: pointer;\n}\n\n.mg-container.card.card-collapsable .card-header::after {\n\tfont-family: \"Font Awesome 5 Pro\";\n\tcontent: '\\f054';\n\tfloat: right;\n\ttransition: transform 0.4s;\n}\n\n.mg-container.card.card-collapsable:not(.card-collapsed) .card-header::after {\n\ttransform: rotate(90deg);\n}\n\n\n/* Collapsed card {{{ */\n.mg-container.card.card-collapsable.card-collapsed {\n\tbox-shadow: none;\n\tborder-bottom: none;\n\tmargin-bottom: 0px;\n}\n\n.mg-container.card.card-collapsable.card-collapsed .card-body {\n\tdisplay: none;\n}\n/* }}} */\n/* }}} */\n/* }}} */\n\n/* formFloating {{{ */\n.mgContainer-formFloating > .col-12 {\n\tposition: relative;\n\tline-height: 14px;\n\tmargin: 0 0px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input {\n\theight: 45px;\n\tpadding-top: 8px;\n\tpadding-bottom: 2px;\n\tpadding-left: 2px;\n\tpadding-right: 12px;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n\tcolor: #333333;\n\tbackground-color: #ffffff;\n\tbackground-image: none;\n\toutline: none;\n\t/* border: 1px solid rgba(120, 120, 120, 0.5);\n\t*/\n\tborder: none; \n\tborder-bottom: 1px solid #bbb;\n\t-moz-box-shadow: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tborder-radius: 0;\n\tposition: relative;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input.blank + .control-label {\n\ttransform: translateY(0px);\n\tcolor: #bbb;\n\tfont-size: 15px;\n\tfont-weight: 100;\n\topacity: 1;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input.control-input:focus + .control-label {\n\ttransform: translateY(-21px);\n\tcolor: #66afe9;\n\tfont-size: 14px;\n\topacity: 1;\n\tfont-weight: 100;\n\tbackground-color: white;\n}\n\n.mgContainer-formFloating > .col-12 > .control-label {\n\tcolor: #aaa;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tposition: absolute;\n\tz-index: 2;\n\tleft: 2px;\n\ttop: 16px;\n\tpadding: 0 0px;\n\tpointer-events: none;\n\tbackground: white;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-21px);\n\tfont-weight: 500;\n}\n/* }}} */\n\n/* Columns layout {{{ */\n.mg-container.mg-container-columns-no-border th,\n.mg-container.mg-container-columns-no-border td {\n\tpadding: 5px;\n}\n/* }}} */\n\n/* Misc utility types {{{ */\n.mg-form .help-block {\n\tfont-size: 80%;\n\tcolor: #6c757d !important;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* style inject SSR */
    

    
    var mgContainer = normalizeComponent_1(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      browser,
      undefined
    );

  var mgContainer$1 = /*#__PURE__*/Object.freeze({
    'default': mgContainer
  });

  macgyver.register('mgDate', {
    title: 'Date selection',
    icon: 'far fa-calendar',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      min: {
        type: 'mgDate',
        title: 'Earliest date'
      },
      max: {
        type: 'mgDate',
        title: 'Latest date'
      },
      required: {
        type: 'mgToggle',
        "default": false
      }
    },
    format: function format(v) {
      if (!v) return '';
      var d = v instanceof Date ? v : new Date(v);
      console.log('mgDate SHOULD BE DATE', d);
      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    },
    formatAlign: 'center'
  });
  var script$c = Vue.component('mgDate', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
        if (_this.$props.config.min && _.isString(_this.data) && _this.data < _this.$props.config.min) return reply("".concat($props.config.title, " is too early (earliest date is ").concat(_this.$props.config.min, ")"));
        if (_this.$props.config.max && _.isString(_this.data) && _this.data > $props.config.max) return reply("".concat($props.config.title, " is too late (latest date is ").concat(_this.$props.config.max, ")"));
      });
    }
  });

  /* script */
  const __vue_script__$c = script$c;

  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("input", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: { type: "date" },
      domProps: { value: _vm.data },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.data = $event.target.value;
        }
      }
    })
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$c = undefined;
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgDate = normalizeComponent_1(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      undefined,
      undefined
    );

  var mgDate$1 = /*#__PURE__*/Object.freeze({
    'default': mgDate
  });

  macgyver.register('mgEmail', {
    title: 'Email address',
    icon: 'far fa-at',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      placeholder: {
        type: 'mgText',
        help: 'Ghost text to display when the text box has no value'
      },
      required: {
        type: 'mgToggle',
        "default": false
      }
    },
    format: function format(v) {
      if (!v) return '';
      return "<a href=\"mailto:".concat(v, "\">").concat(v, "</a>");
    }
  });
  var script$d = Vue.component('mgEmail', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
      });
    }
  });

  /* script */
  const __vue_script__$d = script$d;

  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("input", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: { type: "email", placeholder: _vm.$props.config.placeholder },
      domProps: { value: _vm.data },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.data = $event.target.value;
        }
      }
    })
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = undefined;
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgEmail = normalizeComponent_1(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      undefined,
      undefined
    );

  var mgEmail$1 = /*#__PURE__*/Object.freeze({
    'default': mgEmail
  });

  macgyver.register('mgError', {
    userPlacable: false,
    title: 'Error display',
    icon: 'far fa-exclamation-circle',
    category: 'General Decoration',
    preferId: false,
    config: {
      errorText: {
        type: 'mgText'
      }
    }
  });
  var script$e = Vue.component('mgError', {
    computed: {
      // Mutate the incomming config back to what the original object probably was
      displayConfig: function displayConfig() {
        if (!this.$props.config) return 'No config';
        return _(this.$props.config).pickBy(function (v, k) {
          return !k.startsWith('error');
        }).set('type', this.$props.config.errorWidgetType).value();
      }
    },
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$e = script$e;

  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "alert alert-danger" }, [
      _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.config.errorText) + "\n\t"),
      _c("pre", [_vm._v("Config: " + _vm._s(_vm.displayConfig))]),
      _vm._v(" "),
      _c("pre", [_vm._v("Data: " + _vm._s(_vm.data || "No data"))])
    ])
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$e = undefined;
    /* scoped */
    const __vue_scope_id__$e = undefined;
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgError = normalizeComponent_1(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      undefined,
      undefined
    );

  var mgError$1 = /*#__PURE__*/Object.freeze({
    'default': mgError
  });

  /**
  * The top level MacGyver form
  * @param {string} [form] Unique form name
  * @param {Object|Array} config The MacGyver form object either in long form nested array structure or short form object (which is converted)
  * @param {Object} [data] The data binding
  *
  * @emits change Emitted as `(data)` whenever any data changes
  * @emits changeItem Emitted as `({path, value})` when any single item changes
  */
  var script$f = Vue.component('mgForm', {
    data: function data() {
      return {
        id: undefined,
        // Set on create
        editing: false,
        // Set by mgFormEditor when its this components parent
        errors: [],
        // array <Object> {error}
        layout: undefined // Calculated version of config after its been though $macgyver.neatenSpec()

      };
    },
    props: {
      form: String,
      config: [Object, Array],
      // Can be a single object, array of objects or shorthand style
      data: Object,
      actionsFallback: {
        type: Boolean,
        "default": true
      },
      onAction: Function,
      actions: {
        // Object of functions e.g. `{customFunc: ()=> {}}`
        type: Object,
        validator: function validator(v) {
          return _.every(function (v) {
            return _.isFunction(v);
          });
        }
      }
    },
    created: function created() {
      var _this = this;

      this.id = this.$props.form || this.$macgyver.nextId();
      this.$macgyver.injectForm(this);
      this.$on('mgChange', function (path, value) {
        _this.$macgyver.utils.setPath(_this, "$props.data.".concat(path), value);

        _this.$emit('changeItem', {
          path: path,
          value: value
        });

        _this.$emit('change', _this.$props.data);
      });
      this.$on('mgErrors', function (errors) {
        return _this.errors = errors;
      });
      this.$on('mgForm.rebuild', function () {
        return _this.rebuild();
      });
    },
    methods: {
      /**
      * Force the form to rebuild its config
      */
      rebuild: function rebuild() {
        console.log('Rebuild config');
        this.$set(this, 'layout', this.$macgyver.neatenSpec(this.$props.config));
      }
    },
    watch: {
      config: {
        immediate: true,
        handler: function handler() {
          // Config has been clobbered - rebuild the layout
          this.rebuild();
        }
      },
      data: function data() {
        // Data object has been clobbered - tell all children to refetch their data
        this.$macgyver.forms.emitDown(this.id, 'mgRefresh');
      }
    }
  });

  /* script */
  const __vue_script__$f = script$f;

  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "form",
      {
        staticClass: "form-horizontal mg-form",
        on: {
          submit: function($event) {
            $event.preventDefault();
            return _vm.submit()
          }
        }
      },
      [
        _vm.errors.length
          ? _c("div", { staticClass: "alert alert-warning" }, [
              _c(
                "ul",
                _vm._l(_vm.errors, function(err) {
                  return _c("li", [_vm._v(_vm._s(err.error))])
                }),
                0
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("mg-component", { attrs: { form: _vm.id, config: _vm.layout } })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = undefined;
    /* scoped */
    const __vue_scope_id__$f = undefined;
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgForm = normalizeComponent_1(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      undefined,
      undefined
    );

  var mgForm$1 = /*#__PURE__*/Object.freeze({
    'default': mgForm
  });

  /**
  * MacGyver component layout for grids
  * This container displays a 2D layout table where each cell can contain a unique widget
  */
  macgyver.register('mgGrid', {
    title: 'Grid layout',
    icon: 'far fa-grip-horizontal',
    category: 'Layout',
    isContainer: true,
    preferId: false,
    config: {
      items: {
        type: 'mgUnknown',
        "default": []
      }
    },
    format: true
  });
  var script$g = Vue.component('mgGrid', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$g = script$g;

  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "table",
      { staticClass: "table table-striped table-bordered" },
      _vm._l(_vm.$props.config.items, function(row) {
        return _c(
          "tr",
          _vm._l(row.items, function(cell) {
            return _c(
              "td",
              [
                _c("mg-component", {
                  attrs: { form: _vm.$props.form, config: cell }
                })
              ],
              1
            )
          }),
          0
        )
      }),
      0
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    const __vue_inject_styles__$g = undefined;
    /* scoped */
    const __vue_scope_id__$g = undefined;
    /* module identifier */
    const __vue_module_identifier__$g = undefined;
    /* functional template */
    const __vue_is_functional_template__$g = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgGrid = normalizeComponent_1(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$g,
      __vue_script__$g,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      undefined,
      undefined
    );

  var mgGrid$1 = /*#__PURE__*/Object.freeze({
    'default': mgGrid
  });

  macgyver.register('mgHeading', {
    title: 'Heading',
    icon: 'far fa-heading',
    category: 'General Decoration',
    preferId: false,
    config: {
      text: {
        type: 'mgText'
      }
    }
  });
  var script$h = Vue.component('mgHeading', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$h = script$h;

  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("legend", { staticClass: "form-control-static" }, [
      _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.config.text) + "\n")
    ])
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    const __vue_inject_styles__$h = undefined;
    /* scoped */
    const __vue_scope_id__$h = undefined;
    /* module identifier */
    const __vue_module_identifier__$h = undefined;
    /* functional template */
    const __vue_is_functional_template__$h = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgHeading = normalizeComponent_1(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$h,
      __vue_script__$h,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      undefined,
      undefined
    );

  var mgHeading$1 = /*#__PURE__*/Object.freeze({
    'default': mgHeading
  });

  macgyver.register('mgHtml', {
    title: 'Static HTML',
    icon: 'fab fa-html5',
    category: 'General Decoration',
    preferId: false,
    config: {
      text: {
        type: 'mgTextArea'
      }
    }
  });
  var script$i = Vue.component('mgHtml', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$i = script$i;

  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", {
        staticClass: "form-control-static",
        domProps: { innerHTML: _vm._s(_vm.data || _vm.$props.config.text) }
      })
    ])
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    const __vue_inject_styles__$i = undefined;
    /* scoped */
    const __vue_scope_id__$i = undefined;
    /* module identifier */
    const __vue_module_identifier__$i = undefined;
    /* functional template */
    const __vue_is_functional_template__$i = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgHtml = normalizeComponent_1(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$i,
      __vue_script__$i,
      __vue_scope_id__$i,
      __vue_is_functional_template__$i,
      __vue_module_identifier__$i,
      undefined,
      undefined
    );

  var mgHtml$1 = /*#__PURE__*/Object.freeze({
    'default': mgHtml
  });

  macgyver.register('mgIcon', {
    title: 'Icon',
    icon: 'far fa-flag',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      iconFallback: {
        type: 'mgIcon',
        "default": 'far fa-info',
        help: 'The icon to use if non is selected'
      },
      required: {
        type: 'mgToggle',
        "default": false
      },
      iconFeed: {
        type: 'mgText',
        "default": '/api/webfonts/fa.json',
        advanced: true,
        help: 'The data source to import icon information',
        relative: true
      },
      "class": {
        type: 'mgText',
        "default": 'btn btn-light btn-circle',
        advanced: true
      },
      classActive: {
        type: 'mgText',
        advanced: true
      },
      classInactive: {
        type: 'mgText',
        advanced: true
      }
    },
    format: true
  });
  var script$j = Vue.component('mgIcon', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
      });
    },
    methods: {
      selectIcon: function selectIcon() {
        var _this2 = this;

        Promise.resolve().then(function () {
          return _this2.$macgyver.notify.loading(_this2._uid, true);
        }).then(function () {
          return _this2.$http.get(_this2.$props.config.iconFeed);
        }).tap(function () {
          return _this2.$macgyver.notify.loading(_this2._uid, false);
        }).then(function (res) {
          return _this2.$prompt.macgyver({
            title: 'Select icon',
            buttons: [],
            // We're capturing the first click so we don't need confirm buttons
            form: [{
              id: 'class',
              type: 'mgChoiceButtons',
              showTitle: false,
              classWrapper: '',
              "enum": res.data.map(function (icon) {
                return {
                  id: icon["class"],
                  "class": "btn btn-icon-fixed ".concat(icon["class"], " fa-fw"),
                  classActive: "btn btn-primary btn-icon-fixed ".concat(icon["class"], " fa-fw")
                };
              })
            }],
            data: {
              "class": _this2.data
            },
            onShow: function onShow() {
              // Bind to the mg-form element, detect the first change and close the dialog
              _this2.$macgyver.$forms.promptMacGyver.$on('mgChange', function () {
                return setTimeout(function () {
                  // Timeout not really needed but it lets the button highlight before we close
                  _this2.$prompt.$settings.$defer.resolve(_this2.$prompt.$settings.data);

                  _this2.$prompt.close(true);
                }, 100);
              });
            }
          });
        }).then(function (form) {
          return _this2.data = form["class"];
        });
      }
    }
  });

  /* script */
  const __vue_script__$j = script$j;

  /* template */
  var __vue_render__$g = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("a", {
      staticClass: "btn btn-light",
      class: _vm.data
        ? [_vm.data, _vm.$props.config.classActive || _vm.$props.config.class]
        : [
            _vm.$props.config.iconFallback,
            _vm.$props.config.classInactive || _vm.$props.config.class
          ],
      on: {
        click: function($event) {
          return _vm.selectIcon()
        }
      }
    })
  };
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

    /* style */
    const __vue_inject_styles__$j = function (inject) {
      if (!inject) return
      inject("data-v-c912ecba_0", { source: "\n.btn.btn-icon-fixed {\n\tbox-shadow: none;\n\twidth: 32px;\n\theight: 32px;\n\tpadding: 7px 0;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgIcon.vue"],"names":[],"mappings":";AA+EA;CACA,gBAAA;CACA,WAAA;CACA,YAAA;CACA,cAAA;AACA","file":"mgIcon.vue","sourcesContent":["<script>\nmacgyver.register('mgIcon', {\n\ttitle: 'Icon',\n\ticon: 'far fa-flag',\n\tcategory: 'Simple Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\ticonFallback: {type: 'mgIcon', default: 'far fa-info', help: 'The icon to use if non is selected'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\ticonFeed: {type: 'mgText', default: '/api/webfonts/fa.json', advanced: true, help: 'The data source to import icon information', relative: true},\n\t\tclass: {type: 'mgText', default: 'btn btn-light btn-circle', advanced: true},\n\t\tclassActive: {type: 'mgText', advanced: true},\n\t\tclassInactive: {type: 'mgText', advanced: true},\n\t},\n\tformat: true,\n});\n\nexport default Vue.component('mgIcon', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t});\n\t},\n\tmethods: {\n\t\tselectIcon() {\n\t\t\tPromise.resolve()\n\t\t\t\t.then(()=> this.$macgyver.notify.loading(this._uid, true))\n\t\t\t\t.then(()=> this.$http.get(this.$props.config.iconFeed))\n\t\t\t\t.tap(()=> this.$macgyver.notify.loading(this._uid, false))\n\t\t\t\t.then(res => this.$prompt.macgyver({\n\t\t\t\t\ttitle: 'Select icon',\n\t\t\t\t\tbuttons: [], // We're capturing the first click so we don't need confirm buttons\n\t\t\t\t\tform: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 'class',\n\t\t\t\t\t\t\ttype: 'mgChoiceButtons',\n\t\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\t\tclassWrapper: '',\n\t\t\t\t\t\t\tenum: res.data.map(icon => ({\n\t\t\t\t\t\t\t\tid: icon.class,\n\t\t\t\t\t\t\t\tclass: `btn btn-icon-fixed ${icon.class} fa-fw`,\n\t\t\t\t\t\t\t\tclassActive: `btn btn-primary btn-icon-fixed ${icon.class} fa-fw`,\n\t\t\t\t\t\t\t})),\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t\tdata: {\n\t\t\t\t\t\tclass: this.data,\n\t\t\t\t\t},\n\t\t\t\t\tonShow: ()=> {\n\t\t\t\t\t\t// Bind to the mg-form element, detect the first change and close the dialog\n\t\t\t\t\t\tthis.$macgyver.$forms.promptMacGyver.$on('mgChange', ()=> setTimeout(()=> { // Timeout not really needed but it lets the button highlight before we close\n\t\t\t\t\t\t\tthis.$prompt.$settings.$defer.resolve(this.$prompt.$settings.data);\n\t\t\t\t\t\t\tthis.$prompt.close(true)\n\t\t\t\t\t\t}, 100));\n\t\t\t\t\t},\n\t\t\t\t}))\n\t\t\t\t.then(form => this.data = form.class)\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<a\n\t\t@click=\"selectIcon()\"\n\t\tclass=\"btn btn-light\"\n\t\t:class=\"data ? [data, $props.config.classActive || $props.config.class] : [$props.config.iconFallback, $props.config.classInactive || $props.config.class]\"\n\t/>\n</template>\n\n<style>\n.btn.btn-icon-fixed {\n\tbox-shadow: none;\n\twidth: 32px;\n\theight: 32px;\n\tpadding: 7px 0;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$j = undefined;
    /* module identifier */
    const __vue_module_identifier__$j = undefined;
    /* functional template */
    const __vue_is_functional_template__$j = false;
    /* style inject SSR */
    

    
    var mgIcon = normalizeComponent_1(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$j,
      __vue_script__$j,
      __vue_scope_id__$j,
      __vue_is_functional_template__$j,
      __vue_module_identifier__$j,
      browser,
      undefined
    );

  var mgIcon$1 = /*#__PURE__*/Object.freeze({
    'default': mgIcon
  });

  macgyver.register('mgInfoBlock', {
    title: 'Info Block',
    icon: 'far fa-info-square',
    category: 'Data display',
    config: {
      text: {
        type: 'mgText',
        help: 'Text to display, if a URL is also specified this is overridden when the result loads',
        "default": ''
      },
      url: {
        type: 'mgUrl',
        relative: true,
        "default": '/api/datafeeds/random/number?$extract=number'
      },
      coloring: {
        type: 'mgChoiceDropdown',
        "default": 'bg-primary',
        "enum": [{
          id: 'bg-primary text-white',
          text: 'Primary'
        }, {
          id: 'bg-secondary',
          text: 'Secondary'
        }, {
          id: 'bg-success text-white',
          text: 'Success'
        }, {
          id: 'bg-danger text-white',
          text: 'Danger'
        }, {
          id: 'bg-warning text-white',
          text: 'Warning'
        }, {
          id: 'bg-info text-white',
          text: 'Info'
        }, {
          id: 'bg-light',
          text: 'Light'
        }, {
          id: 'bg-dark text-white',
          text: 'Dark'
        }, {
          id: 'bg-muted',
          text: 'Muted'
        }]
      },
      icon: {
        type: 'mgIcon',
        "default": 'far fa-info-circle'
      },
      iconLoading: {
        type: 'mgIcon',
        "default": 'far fa-spinner fa-spin'
      },
      iconSize: {
        type: 'mgChoiceButtons',
        "default": 'fa-4x',
        "enum": [{
          id: '',
          text: 'Normal'
        }, {
          id: 'fa-2x',
          text: '2x'
        }, {
          id: 'fa-3x',
          text: '3x'
        }, {
          id: 'fa-4x',
          text: '4x'
        }, {
          id: 'fa-5x',
          text: '5x'
        }, {
          id: 'fa-6x',
          text: '6x'
        }, {
          id: 'fa-7x',
          text: '7x'
        }, {
          id: 'fa-8x',
          text: '8x'
        }]
      }
    },
    format: false
  });
  var script$k = Vue.component('mgInfoBlock', {
    data: function data() {
      return {
        data: undefined,
        isLoading: false
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$watch('$props.config.url', function () {
        if (!_this.$props.config.url) return;
        Promise.resolve().then(function () {
          return _this.isLoading = true;
        }).then(function () {
          return _this.$macgyver.fetch(_this.$props.config.url, {
            type: 'object',
            mappings: {
              extract: {
                required: true
              }
            },
            format: function format(d) {
              return d.extract;
            }
          });
        }).then(function (data) {
          return _this.$set(_this, 'data', data);
        }).then(function () {
          return _this.isLoading = false;
        });
      }, {
        immediate: true
      });
    }
  });

  /* script */
  const __vue_script__$k = script$k;

  /* template */
  var __vue_render__$h = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "card mg-info-block", class: _vm.$props.config.coloring },
      [
        _c("div", { staticClass: "card-body media" }, [
          _c("div", { staticClass: "mr-3" }, [
            _c("i", {
              class: [
                _vm.isLoading
                  ? _vm.$props.config.iconLoading
                  : _vm.$props.config.icon,
                _vm.$props.config.iconSize
              ]
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-body" }, [
            _c("div", { staticClass: "mg-info-block-text" }, [
              _vm._v(_vm._s(_vm.data || _vm.$props.config.text))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mg-info-block-title" }, [
              _vm._v(_vm._s(_vm.$props.config.title))
            ])
          ])
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$k = function (inject) {
      if (!inject) return
      inject("data-v-2d6b032a_0", { source: "\n.mg-info-block {\n\tbackground: transparent;\n\tborder-radius: 5px;\n}\n.mg-info-block .mg-info-block-text {\n\tfont-size: 200%;\n\tfont-weight: bold;\n}\n.mg-info-block .mg-info-block-title {\n\tfont-size: 90%;\n\topacity: 0.8;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgInfoBlock.vue"],"names":[],"mappings":";AAsFA;CACA,uBAAA;CACA,kBAAA;AACA;AAEA;CACA,eAAA;CACA,iBAAA;AACA;AAEA;CACA,cAAA;CACA,YAAA;AACA","file":"mgInfoBlock.vue","sourcesContent":["<script>\nmacgyver.register('mgInfoBlock', {\n\ttitle: 'Info Block',\n\ticon: 'far fa-info-square',\n\tcategory: 'Data display',\n\tconfig: {\n\t\ttext: {type: 'mgText', help: 'Text to display, if a URL is also specified this is overridden when the result loads', default: ''},\n\t\turl: {type: 'mgUrl', relative: true, default: '/api/datafeeds/random/number?$extract=number'},\n\t\tcoloring: {\n\t\t\ttype: 'mgChoiceDropdown',\n\t\t\tdefault: 'bg-primary',\n\t\t\tenum: [\n\t\t\t\t{id: 'bg-primary text-white', text: 'Primary'},\n\t\t\t\t{id: 'bg-secondary', text: 'Secondary'},\n\t\t\t\t{id: 'bg-success text-white', text: 'Success'},\n\t\t\t\t{id: 'bg-danger text-white', text: 'Danger'},\n\t\t\t\t{id: 'bg-warning text-white', text: 'Warning'},\n\t\t\t\t{id: 'bg-info text-white', text: 'Info'},\n\t\t\t\t{id: 'bg-light', text: 'Light'},\n\t\t\t\t{id: 'bg-dark text-white', text: 'Dark'},\n\t\t\t\t{id: 'bg-muted', text: 'Muted'},\n\t\t\t],\n\t\t},\n\t\ticon: {type: 'mgIcon', default: 'far fa-info-circle'},\n\t\ticonLoading: {type: 'mgIcon', default: 'far fa-spinner fa-spin'},\n\t\ticonSize: {\n\t\t\ttype: 'mgChoiceButtons',\n\t\t\tdefault: 'fa-4x',\n\t\t\tenum: [\n\t\t\t\t{id: '', text: 'Normal'},\n\t\t\t\t{id: 'fa-2x', text: '2x'},\n\t\t\t\t{id: 'fa-3x', text: '3x'},\n\t\t\t\t{id: 'fa-4x', text: '4x'},\n\t\t\t\t{id: 'fa-5x', text: '5x'},\n\t\t\t\t{id: 'fa-6x', text: '6x'},\n\t\t\t\t{id: 'fa-7x', text: '7x'},\n\t\t\t\t{id: 'fa-8x', text: '8x'},\n\t\t\t],\n\t\t},\n\t},\n\tformat: false,\n});\n\nexport default Vue.component('mgInfoBlock', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tisLoading: false,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\n\t\tthis.$watch('$props.config.url', ()=> {\n\t\t\tif (!this.$props.config.url) return;\n\t\t\tPromise.resolve()\n\t\t\t\t.then(()=> this.isLoading = true)\n\t\t\t\t.then(()=> this.$macgyver.fetch(this.$props.config.url, {\n\t\t\t\t\ttype: 'object',\n\t\t\t\t\tmappings: {extract: {required: true}},\n\t\t\t\t\tformat: d => d.extract,\n\t\t\t\t}))\n\t\t\t\t.then(data => this.$set(this, 'data', data))\n\t\t\t\t.then(()=> this.isLoading = false)\n\t\t}, {immediate: true});\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"card mg-info-block\" :class=\"$props.config.coloring\">\n\t\t<div class=\"card-body media\">\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<i :class=\"[isLoading ? $props.config.iconLoading : $props.config.icon, $props.config.iconSize]\"/>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<div class=\"mg-info-block-text\">{{data || $props.config.text}}</div>\n\t\t\t\t<div class=\"mg-info-block-title\">{{$props.config.title}}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-info-block {\n\tbackground: transparent;\n\tborder-radius: 5px;\n}\n\n.mg-info-block .mg-info-block-text {\n\tfont-size: 200%;\n\tfont-weight: bold;\n}\n\n.mg-info-block .mg-info-block-title {\n\tfont-size: 90%;\n\topacity: 0.8;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$k = undefined;
    /* module identifier */
    const __vue_module_identifier__$k = undefined;
    /* functional template */
    const __vue_is_functional_template__$k = false;
    /* style inject SSR */
    

    
    var mgInfoBlock = normalizeComponent_1(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$k,
      __vue_script__$k,
      __vue_scope_id__$k,
      __vue_is_functional_template__$k,
      __vue_module_identifier__$k,
      browser,
      undefined
    );

  var mgInfoBlock$1 = /*#__PURE__*/Object.freeze({
    'default': mgInfoBlock
  });

  macgyver.register('mgLabel', {
    title: 'Read-only label',
    icon: 'far fa-font',
    category: 'General Decoration',
    preferId: false,
    config: {
      text: {
        type: 'mgText'
      },
      "class": {
        type: 'mgText',
        "default": 'form-control-static',
        advanced: true
      }
    }
  });
  var script$l = Vue.component('mgLabel', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$l = script$l;

  /* template */
  var __vue_render__$i = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { class: _vm.$props.config.class }, [
      _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.config.text) + "\n")
    ])
  };
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$l = undefined;
    /* scoped */
    const __vue_scope_id__$l = undefined;
    /* module identifier */
    const __vue_module_identifier__$l = undefined;
    /* functional template */
    const __vue_is_functional_template__$l = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgLabel = normalizeComponent_1(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
      __vue_inject_styles__$l,
      __vue_script__$l,
      __vue_scope_id__$l,
      __vue_is_functional_template__$l,
      __vue_module_identifier__$l,
      undefined,
      undefined
    );

  var mgLabel$1 = /*#__PURE__*/Object.freeze({
    'default': mgLabel
  });

  macgyver.register('mgList', {
    title: 'List',
    icon: 'far fa-list-ul',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      allowDelete: {
        type: 'mgToggle',
        "default": true
      },
      min: {
        type: 'mgNumber',
        title: 'Minimum number of items'
      },
      max: {
        type: 'mgNumber',
        title: 'Maximum number of items'
      },
      required: {
        type: 'mgToggle',
        "default": false
      },
      numbered: {
        type: 'mgToggle',
        "default": true
      },
      addButtonActiveClass: {
        type: 'mgText',
        "default": 'btn btn-block btn-success fa fa-plus',
        advanced: true
      },
      addButtonInactiveClass: {
        type: 'mgText',
        "default": 'btn btn-block btn-disabled fa fa-plus',
        advanced: true
      }
    },
    format: function format(v) {
      return (v || []).join(', ');
    }
  });
  var script$m = Vue.component('mgList', {
    data: function data() {
      return {
        data: undefined,
        newItem: ''
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && (!_this.data || !_this.data.length)) return reply("".concat(_this.$props.config.title, " is required"));
        if (_this.$props.config.min && _.isString(_this.data) && _this.data.length < _this.$props.config.min) return reply("".concat(_this.$props.config.title, " must have at least ").concat(_this.$props.config.min, " items"));
        if (_this.$props.config.max && _.isString(_this.data) && _this.data.length > _this.$props.config.max) return reply("".concat(_this.$props.config.title, " must have at most ").concat(_this.$props.config.max, " items"));
      });
    },
    methods: {
      addItem: function addItem() {
        if (!_.isArray(this.data)) this.data = [];
        this.data.push(this.newItem);
        this.newItem = '';
      },
      changeItem: function changeItem(index, value) {
        this.$set(this.data, index, value);
      },
      removeItem: function removeItem(index) {
        this.data = this.data.filter(function (x, i) {
          return i != index;
        });
      }
    }
  });

  /* script */
  const __vue_script__$m = script$m;

  /* template */
  var __vue_render__$j = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("table", { staticClass: "table table-bordered mg-list" }, [
      _c(
        "tbody",
        _vm._l(_vm.data, function(row, rowIndex) {
          return _c("tr", [
            _vm.$props.config.numbered
              ? _c("td", { staticClass: "row-number-cell" }, [
                  _vm._v(_vm._s(_vm._f("number")(rowIndex + 1)))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: row },
                on: {
                  change: function($event) {
                    return _vm.changeItem(rowIndex, $event.srcElement.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.$props.config.allowDelete
              ? _c("td", { staticClass: "verb-cell" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-link btn-link-danger btn-xs text-muted",
                      on: {
                        click: function($event) {
                          return _vm.removeItem(rowIndex)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-trash" })]
                  )
                ])
              : _vm._e()
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("tfoot", { staticClass: "hidden-print" }, [
        _c("tr", [
          _vm.$props.config.numbered
            ? _c("td", { staticClass: "row-number-cell" }, [
                !_vm.$props.config.allowDelete
                  ? _c("a", {
                      class: _vm.newItem
                        ? _vm.$props.config.addButtonActiveClass
                        : _vm.$props.config.addButtonInactiveClass,
                      on: {
                        click: function($event) {
                          return _vm.addItem()
                        }
                      }
                    })
                  : _c("i", { staticClass: "far fa-asterisk" })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "td",
            { attrs: { colspan: _vm.$props.config.allowDelete ? 1 : 2 } },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newItem,
                    expression: "newItem"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.newItem },
                on: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.addItem()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.newItem = $event.target.value;
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _vm.$props.config.allowDelete
            ? _c("td", { staticClass: "verb-cell" }, [
                _c("a", {
                  class: _vm.newItem
                    ? _vm.$props.config.addButtonActiveClass
                    : _vm.$props.config.addButtonInactiveClass,
                  on: {
                    click: function($event) {
                      return _vm.addItem()
                    }
                  }
                })
              ])
            : _vm._e()
        ])
      ])
    ])
  };
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$m = function (inject) {
      if (!inject) return
      inject("data-v-aaff4dae_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Cell padding */\n.mg-list td {\n\tpadding: 0px !important;\n}\n.mg-list td input[type=\"text\"] {\n\tborder: none;\n}\n\n/* Row number cell */\n.mg-list td.row-number-cell {\n\ttext-align: center;\n\twidth: 30px;\n\tvertical-align: middle;\n}\n\n/* Verb cell */\n.mg-list .verb-cell {\n\twidth: 30px;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgList.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkFA,iBAAA;AACA;CACA,uBAAA;AACA;AAEA;CACA,YAAA;AACA;;AAEA,oBAAA;AACA;CACA,kBAAA;CACA,WAAA;CACA,sBAAA;AACA;;AAEA,cAAA;AACA;CACA,WAAA;CACA,kBAAA;CACA,sBAAA;AACA","file":"mgList.vue","sourcesContent":["<script>\nmacgyver.register('mgList', {\n\ttitle: 'List',\n\ticon: 'far fa-list-ul',\n\tcategory: 'Simple Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\tallowDelete: {type: 'mgToggle', default: true},\n\t\tmin: {type: 'mgNumber', title: 'Minimum number of items'},\n\t\tmax: {type: 'mgNumber', title: 'Maximum number of items'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tnumbered: {type: 'mgToggle', default: true},\n\t\taddButtonActiveClass: {type: 'mgText', default: 'btn btn-block btn-success fa fa-plus', advanced: true},\n\t\taddButtonInactiveClass: {type: 'mgText', default: 'btn btn-block btn-disabled fa fa-plus', advanced: true},\n\t},\n\tformat: v => (v || []).join(', '),\n});\n\nexport default Vue.component('mgList', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tnewItem: '',\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && (!this.data || !this.data.length)) return reply(`${this.$props.config.title} is required`);\n\t\t\tif (this.$props.config.min && _.isString(this.data) && this.data.length < this.$props.config.min) return reply(`${this.$props.config.title} must have at least ${this.$props.config.min} items`);\n\t\t\tif (this.$props.config.max && _.isString(this.data) && this.data.length > this.$props.config.max) return reply(`${this.$props.config.title} must have at most ${this.$props.config.max} items`);\n\t\t});\n\t},\n\tmethods: {\n\t\taddItem() {\n\t\t\tif (!_.isArray(this.data)) this.data = [];\n\t\t\tthis.data.push(this.newItem);\n\t\t\tthis.newItem = '';\n\t\t},\n\t\tchangeItem(index, value) {\n\t\t\tthis.$set(this.data, index, value);\n\t\t},\n\t\tremoveItem(index) {\n\t\t\tthis.data = this.data.filter((x, i) => i != index);\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<table class=\"table table-bordered mg-list\">\n\t\t<tbody>\n\t\t\t<tr v-for=\"(row, rowIndex) in data\">\n\t\t\t\t<td v-if=\"$props.config.numbered\" class=\"row-number-cell\">{{rowIndex + 1 | number}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<input :value=\"row\" @change=\"changeItem(rowIndex, $event.srcElement.value)\" type=\"text\" class=\"form-control\"/>\n\t\t\t\t</td>\n\t\t\t\t<td v-if=\"$props.config.allowDelete\" class=\"verb-cell\">\n\t\t\t\t\t<a @click=\"removeItem(rowIndex)\" class=\"btn btn-link btn-link-danger btn-xs text-muted\"><i class=\"fa fa-trash\"></i></a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot class=\"hidden-print\">\n\t\t\t<tr>\n\t\t\t\t<td v-if=\"$props.config.numbered\" class=\"row-number-cell\">\n\t\t\t\t\t<a v-if=\"!$props.config.allowDelete\" @click=\"addItem()\" :class=\"newItem ? $props.config.addButtonActiveClass : $props.config.addButtonInactiveClass\"/>\n\t\t\t\t\t<i v-else class=\"far fa-asterisk\"></i>\n\t\t\t\t</td>\n\t\t\t\t<td :colspan=\"$props.config.allowDelete ? 1 : 2\">\n\t\t\t\t\t<input @keyup.enter=\"addItem()\" v-model=\"newItem\" type=\"text\" class=\"form-control\"/>\n\t\t\t\t</td>\n\t\t\t\t<td v-if=\"$props.config.allowDelete\" class=\"verb-cell\">\n\t\t\t\t\t<a @click=\"addItem()\" :class=\"newItem ? $props.config.addButtonActiveClass : $props.config.addButtonInactiveClass\"/>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</template>\n\n<style>\n/* Cell padding */\n.mg-list td {\n\tpadding: 0px !important;\n}\n\n.mg-list td input[type=\"text\"] {\n\tborder: none;\n}\n\n/* Row number cell */\n.mg-list td.row-number-cell {\n\ttext-align: center;\n\twidth: 30px;\n\tvertical-align: middle;\n}\n\n/* Verb cell */\n.mg-list .verb-cell {\n\twidth: 30px;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$m = undefined;
    /* module identifier */
    const __vue_module_identifier__$m = undefined;
    /* functional template */
    const __vue_is_functional_template__$m = false;
    /* style inject SSR */
    

    
    var mgList = normalizeComponent_1(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
      __vue_inject_styles__$m,
      __vue_script__$m,
      __vue_scope_id__$m,
      __vue_is_functional_template__$m,
      __vue_module_identifier__$m,
      browser,
      undefined
    );

  var mgList$1 = /*#__PURE__*/Object.freeze({
    'default': mgList
  });

  macgyver.register('mgNumber', {
    title: 'Number',
    icon: 'far fa-sort-numeric-down',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      min: {
        type: 'mgNumber',
        title: 'Minimum value'
      },
      max: {
        type: 'mgNumber',
        title: 'Maximum value'
      },
      step: {
        type: 'mgNumber',
        title: 'Value to increment / decrement by'
      },
      placeholder: {
        type: 'mgNumber',
        help: 'Ghost text to display when there is no value'
      },
      required: {
        type: 'mgToggle',
        "default": false
      },
      "interface": {
        type: 'mgChoiceDropdown',
        title: 'Interface',
        help: 'How to allow number input',
        "default": 'bumpers',
        "enum": [{
          id: 'bumpers',
          title: 'Number input with buttons'
        }, {
          id: 'slider',
          title: 'Slider bar'
        }, {
          id: 'input',
          title: 'Number input box only'
        }]
      },
      bumperDownClass: {
        type: 'mgText',
        "default": 'btn btn-light fa fa-arrow-down input-group-prepend',
        advanced: true
      },
      bumperUpClass: {
        type: 'mgText',
        "default": 'btn btn-light fa fa-arrow-up input-group-append',
        advanced: true
      },
      prefix: {
        type: 'mgText',
        title: 'Prefix',
        help: 'Prefix to show before the input (input interface only)'
      },
      prefixClass: {
        type: 'mgText',
        "default": 'input-group-prepend input-group-text',
        advanced: true
      },
      suffix: {
        type: 'mgText',
        title: 'Suffix',
        help: 'Suffix to show after the input (input interface only)'
      },
      suffixClass: {
        type: 'mgText',
        "default": 'input-group-append input-group-text',
        advanced: true
      }
    },
    format: function format(v) {
      if (!v) return '';
      return (_.isNumber(v) ? v : parseInt(v)).toLocaleString();
    },
    formatAlign: 'right',
    shorthand: ['integer', 'int', 'float']
  });
  var script$n = Vue.component('mgNumber', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    methods: {
      add: function add(steps) {
        if (!_.isNumber(this.data)) return this.data = this.$props.config.min || 0; // Not already a number default to the min or zero

        this.data += steps * (this.$props.config.step || 1);
        if (this.$props.config.max && this.data > this.$props.config.max) this.data = this.$props.config.max;
        if (this.$props.config.min && this.data < this.$props.config.min) this.data = this.$props.config.min;
      }
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
        if (_this.$props.config.min && _this.data < _this.$props.config.min) return reply("".concat(_this.$props.config.title, " is too small (minimum value is ").concat(_this.$props.config.min, ")"));
        if (_this.$props.config.max && _this.data > _this.$props.config.max) return reply("".concat(_this.$props.config.title, " is too large (maximum value is ").concat(_this.$props.config.max, ")"));
      });
    }
  });

  /* script */
  const __vue_script__$n = script$n;

  /* template */
  var __vue_render__$k = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-number" }, [
      _vm.$props.config.interface == "slider"
        ? _c("div", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data,
                  expression: "data"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "range",
                placeholder: _vm.$props.config.placeholder,
                min: _vm.$props.config.min,
                max: _vm.$props.config.max,
                step: _vm.$props.config.step
              },
              domProps: { value: _vm.data },
              on: {
                __r: function($event) {
                  _vm.data = $event.target.value;
                }
              }
            })
          ])
        : _vm.$props.config.interface == "bumpers"
        ? _c("div", { staticClass: "input-group" }, [
            _c("a", {
              staticClass: "hidden-print",
              class: _vm.$props.config.bumperDownClass,
              on: {
                click: function($event) {
                  return _vm.add(-1)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data,
                  expression: "data"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "number",
                placeholder: _vm.$props.config.placeholder,
                min: _vm.$props.config.min,
                max: _vm.$props.config.max,
                step: _vm.$props.config.step
              },
              domProps: { value: _vm.data },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.data = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "hidden-print",
              class: _vm.$props.config.bumperUpClass,
              on: {
                click: function($event) {
                  return _vm.add(1)
                }
              }
            })
          ])
        : _vm.$props.config.interface == "input"
        ? _c("div", { staticClass: "input-group" }, [
            _vm.$props.config.prefix
              ? _c("div", { class: _vm.$props.config.prefixClass }, [
                  _vm._v(_vm._s(_vm.$props.config.prefix))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data,
                  expression: "data"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "number",
                placeholder: _vm.$props.config.placeholder,
                min: _vm.$props.config.min,
                max: _vm.$props.config.max,
                step: _vm.$props.config.step
              },
              domProps: { value: _vm.data },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.data = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _vm.$props.config.suffix
              ? _c("div", { class: _vm.$props.config.suffixClass }, [
                  _vm._v(_vm._s(_vm.$props.config.suffix))
                ])
              : _vm._e()
          ])
        : _c("div", { staticClass: "alert alert-warning" }, [
            _vm._v(
              "\n\t\tUnknown mgNumber interface '" +
                _vm._s(_vm.$props.config.interface) +
                "'\n\t"
            )
          ])
    ])
  };
  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;

    /* style */
    const __vue_inject_styles__$n = function (inject) {
      if (!inject) return
      inject("data-v-54db866f_0", { source: "\n.mg-number input[type=number] {\n\tpadding: 0 10px;\n}\n.mg-number .btn {\n\tbox-shadow: none;\n\tborder: 1px solid #f0f0f0;\n}\n\n/* Hide the spin button in mgNumber controls */\n.mg-number input[type=number]::-webkit-outer-spin-button,\n.mg-number input[type=number]::-webkit-inner-spin-button {\n\t/* display: none; <- Crashes Chrome on hover */\n\t-webkit-appearance: none;\n\tmargin: 0; /* <-- Apparently some margin is still there even though it's hidden */\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgNumber.vue"],"names":[],"mappings":";AAkFA;CACA,eAAA;AACA;AAEA;CACA,gBAAA;CACA,yBAAA;AACA;;AAEA,8CAAA;AACA;;CAEA,8CAAA;CACA,wBAAA;CACA,SAAA,EAAA,sEAAA;AACA","file":"mgNumber.vue","sourcesContent":["<script>\nmacgyver.register('mgNumber', {\n\ttitle: 'Number',\n\ticon: 'far fa-sort-numeric-down',\n\tcategory: 'Simple Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\tmin: {type: 'mgNumber', title: 'Minimum value'},\n\t\tmax: {type: 'mgNumber', title: 'Maximum value'},\n\t\tstep: {type: 'mgNumber', title: 'Value to increment / decrement by'},\n\t\tplaceholder: {type: 'mgNumber', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tinterface: {type: 'mgChoiceDropdown', title: 'Interface', help: 'How to allow number input', default: 'bumpers', enum: [\n\t\t\t{id: 'bumpers', title: 'Number input with buttons'},\n\t\t\t{id: 'slider', title: 'Slider bar'},\n\t\t\t{id: 'input', title: 'Number input box only'},\n\t\t]},\n\t\tbumperDownClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-down input-group-prepend', advanced: true},\n\t\tbumperUpClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-up input-group-append', advanced: true},\n\t\tprefix: {type: 'mgText', title: 'Prefix', help: 'Prefix to show before the input (input interface only)'},\n\t\tprefixClass: {type: 'mgText', default: 'input-group-prepend input-group-text', advanced: true},\n\t\tsuffix: {type: 'mgText', title: 'Suffix', help: 'Suffix to show after the input (input interface only)'},\n\t\tsuffixClass: {type: 'mgText', default: 'input-group-append input-group-text', advanced: true},\n\t},\n\tformat: v => {\n\t\tif (!v) return '';\n\t\treturn (_.isNumber(v) ? v : parseInt(v)).toLocaleString();\n\t},\n\tformatAlign: 'right',\n\tshorthand: ['integer', 'int', 'float'],\n});\n\nexport default Vue.component('mgNumber', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tmethods: {\n\t\tadd(steps) {\n\t\t\tif (!_.isNumber(this.data)) return this.data = this.$props.config.min || 0; // Not already a number default to the min or zero\n\n\t\t\tthis.data += steps * (this.$props.config.step || 1);\n\t\t\tif (this.$props.config.max && this.data > this.$props.config.max) this.data = this.$props.config.max;\n\t\t\tif (this.$props.config.min && this.data < this.$props.config.min) this.data = this.$props.config.min;\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t\tif (this.$props.config.min && this.data < this.$props.config.min) return reply(`${this.$props.config.title} is too small (minimum value is ${this.$props.config.min})`);\n\t\t\tif (this.$props.config.max && this.data > this.$props.config.max) return reply(`${this.$props.config.title} is too large (maximum value is ${this.$props.config.max})`);\n\t\t});\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-number\">\n\t\t<div v-if=\"$props.config.interface == 'slider'\">\n\t\t\t<input v-model=\"data\" type=\"range\" class=\"form-control\" :placeholder=\"$props.config.placeholder\" :min=\"$props.config.min\" :max=\"$props.config.max\" :step=\"$props.config.step\"/>\n\t\t</div>\n\t\t<div v-else-if=\"$props.config.interface == 'bumpers'\" class=\"input-group\">\n\t\t\t<a @click=\"add(-1)\" class=\"hidden-print\" :class=\"$props.config.bumperDownClass\"></a>\n\t\t\t<input v-model=\"data\" type=\"number\" class=\"form-control\" :placeholder=\"$props.config.placeholder\" :min=\"$props.config.min\" :max=\"$props.config.max\" :step=\"$props.config.step\"/>\n\t\t\t<a @click=\"add(1)\" class=\"hidden-print\" :class=\"$props.config.bumperUpClass\"></a>\n\t\t</div>\n\t\t<div v-else-if=\"$props.config.interface == 'input'\" class=\"input-group\">\n\t\t\t<div v-if=\"$props.config.prefix\" :class=\"$props.config.prefixClass\">{{$props.config.prefix}}</div>\n\t\t\t<input v-model=\"data\" type=\"number\" class=\"form-control\" :placeholder=\"$props.config.placeholder\" :min=\"$props.config.min\" :max=\"$props.config.max\" :step=\"$props.config.step\"/>\n\t\t\t<div v-if=\"$props.config.suffix\" :class=\"$props.config.suffixClass\">{{$props.config.suffix}}</div>\n\t\t</div>\n\t\t<div v-else class=\"alert alert-warning\">\n\t\t\tUnknown mgNumber interface '{{$props.config.interface}}'\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-number input[type=number] {\n\tpadding: 0 10px;\n}\n\n.mg-number .btn {\n\tbox-shadow: none;\n\tborder: 1px solid #f0f0f0;\n}\n\n/* Hide the spin button in mgNumber controls */\n.mg-number input[type=number]::-webkit-outer-spin-button,\n.mg-number input[type=number]::-webkit-inner-spin-button {\n\t/* display: none; <- Crashes Chrome on hover */\n\t-webkit-appearance: none;\n\tmargin: 0; /* <-- Apparently some margin is still there even though it's hidden */\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$n = undefined;
    /* module identifier */
    const __vue_module_identifier__$n = undefined;
    /* functional template */
    const __vue_is_functional_template__$n = false;
    /* style inject SSR */
    

    
    var mgNumber = normalizeComponent_1(
      { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
      __vue_inject_styles__$n,
      __vue_script__$n,
      __vue_scope_id__$n,
      __vue_is_functional_template__$n,
      __vue_module_identifier__$n,
      browser,
      undefined
    );

  var mgNumber$1 = /*#__PURE__*/Object.freeze({
    'default': mgNumber
  });

  macgyver.register('mgPermissions', {
    title: 'Permissions',
    icon: 'far fa-key',
    category: 'System Administration',
    preferId: true,
    config: {
      textEmpty: {
        type: 'mgText',
        help: 'Text to display when no permissions are set',
        "default": 'No permissions selected'
      },
      permissionsFeed: _defineProperty({
        type: 'mgUrl',
        relative: true,
        "default": '/api/users/meta',
        advanced: true,
        help: 'The data source to import user permissions'
      }, "relative", true)
    },
    format: true
  });
  var script$o = Vue.component('mgPermissions', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$watch('data', function () {
        if (_.isString(_this.data)) _this.$set(_this, 'data', /\|\|/.test(_this.data) ? _this.data.split(/\s*\|\|\s*/) // `foo || bar` -> ['foo', 'bar']
        : [_this.data]);
      }, {
        immediate: true
      });
    },
    methods: {
      edit: function edit() {
        var _this2 = this;

        Promise.resolve().then(function () {
          return _this2.$macgyver.notify.loading(_this2._uid, true);
        }).then(function () {
          return _this2.$http.get(_this2.$props.config.permissionsFeed)["catch"](_this2.$toast["catch"]);
        }).tap(function () {
          return _this2.$macgyver.notify.loading(_this2._uid, false);
        }).then(function (res) {
          return _this2.$prompt.macgyver({
            title: 'Select permissions',
            form: [{
              id: 'class',
              type: 'mgChoiceCheckbox',
              showTitle: false,
              classWrapper: '',
              sort: 'sortId',
              "enum": _(res.data).pickBy(function (v, k) {
                return k.startsWith('permissions.');
              }).map(function (v, k) {
                return {
                  id: k.replace(/^permissions\./, ''),
                  title: Vue.filter('permissionCase')(k.replace(/^permissions\./, ''))
                };
              }).value()
            }],
            data: {
              "class": _.clone(_this2.data)
            }
          });
        }).then(function (form) {
          return _this2.data = form["class"];
        })["catch"](function (e) {}); // Ignore rejection - was probably the user cancelling the permission set
      }
    }
  });

  /* script */
  const __vue_script__$o = script$o;

  /* template */
  var __vue_render__$l = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "a",
      {
        staticClass: "form-control-static",
        on: {
          click: function($event) {
            return _vm.edit()
          }
        }
      },
      [
        _vm._l(_vm.data, function(permission) {
          return _c(
            "span",
            { key: permission, staticClass: "badge badge-info" },
            [
              _vm._v(
                "\n\t\t" + _vm._s(_vm._f("permissionCase")(permission)) + "\n\t"
              )
            ]
          )
        }),
        _vm._v(" "),
        !_vm.data || !_vm.data.length
          ? _c("span", { staticClass: "font-italic text-muted" }, [
              _vm._v("\n\t\t" + _vm._s(_vm.$props.config.textEmpty) + "\n\t")
            ])
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$l = [];
  __vue_render__$l._withStripped = true;

    /* style */
    const __vue_inject_styles__$o = undefined;
    /* scoped */
    const __vue_scope_id__$o = undefined;
    /* module identifier */
    const __vue_module_identifier__$o = undefined;
    /* functional template */
    const __vue_is_functional_template__$o = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgPermissions = normalizeComponent_1(
      { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
      __vue_inject_styles__$o,
      __vue_script__$o,
      __vue_scope_id__$o,
      __vue_is_functional_template__$o,
      __vue_module_identifier__$o,
      undefined,
      undefined
    );

  var mgPermissions$1 = /*#__PURE__*/Object.freeze({
    'default': mgPermissions
  });

  macgyver.register('mgPlaceholder', {
    title: 'Placeholder',
    icon: 'far fa-traffic-cone',
    category: 'General Decoration',
    preferId: true,
    config: {
      text: {
        type: 'mgText'
      },
      height: {
        type: 'mgNumber',
        "default": '100%'
      },
      style: {
        type: 'mgChoiceButtons',
        "default": 'mg-placeholder-box',
        iconSelected: 'far fa-fw fa-check',
        iconDefault: 'far fa-fw',
        "enum": [{
          id: 'mg-placeholder-box',
          title: 'Lined box'
        }, {
          id: 'mg-placeholder-construction',
          title: 'Construction area'
        }]
      }
    }
  });
  var script$p = Vue.component('mgPlaceholder', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$p = script$p;

  /* template */
  var __vue_render__$m = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mg-placeholder",
        class: _vm.$props.config.style,
        style: "height: " + (_vm.$props.config.height || "auto")
      },
      [
        _vm.$props.config.text
          ? _c("div", { staticClass: "mg-placeholder-text" }, [
              _vm._v("\n\t\t" + _vm._s(_vm.$props.config.text) + "\n\t")
            ])
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$m = [];
  __vue_render__$m._withStripped = true;

    /* style */
    const __vue_inject_styles__$p = function (inject) {
      if (!inject) return
      inject("data-v-60afbb2c_0", { source: "\n.mg-placeholder {\n\tmin-height: 100px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n/* Style: placeholder-box {{{ */\n.mg-placeholder.mg-placeholder-box {\n\tborder: 1px solid #000;\n\tbackground:\n\t\tlinear-gradient(to top left,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%),\n\t\tlinear-gradient(to top right,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%);\n}\n.mg-placeholder.mg-placeholder-box > .mg-placeholder-text {\n\tbackground: #FFF;\n\tborder-radius: 10px;\n\tpadding: 10px 15px;\n}\n/* }}} */\n\n/* Style: placeholder-construction {{{ */\n.mg-placeholder.mg-placeholder-construction {\n\tbackground: repeating-linear-gradient(45deg, #dfc458, #dfc458 10px, #666 10px, #666 20px);\n}\n.mg-placeholder.mg-placeholder-construction > .mg-placeholder-text {\n\tfont-size: 20pt;\n\tcolor: #FFF;\n\ttext-shadow: -2px -2px 1px #000, 2px -2px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgPlaceholder.vue"],"names":[],"mappings":";AA6CA;CACA,iBAAA;CACA,aAAA;CACA,uBAAA;CACA,mBAAA;CACA,kBAAA;AACA;;AAEA,+BAAA;AACA;CACA,sBAAA;CACA;;;;;;;;;;;;sBAYA;AACA;AAEA;CACA,gBAAA;CACA,mBAAA;CACA,kBAAA;AACA;AACA,QAAA;;AAEA,wCAAA;AACA;CACA,yFAAA;AACA;AAEA;CACA,eAAA;CACA,WAAA;CACA,uFAAA;AACA;AACA,QAAA","file":"mgPlaceholder.vue","sourcesContent":["<script>\nmacgyver.register('mgPlaceholder', {\n\ttitle: 'Placeholder',\n\ticon: 'far fa-traffic-cone',\n\tcategory: 'General Decoration',\n\tpreferId: true,\n\tconfig: {\n\t\ttext: {type: 'mgText'},\n\t\theight: {type: 'mgNumber', default: '100%'},\n\t\tstyle: {\n\t\t\ttype: 'mgChoiceButtons',\n\t\t\tdefault: 'mg-placeholder-box',\n\t\t\ticonSelected: 'far fa-fw fa-check',\n\t\t\ticonDefault: 'far fa-fw',\n\t\t\tenum: [\n\t\t\t\t{id: 'mg-placeholder-box', title: 'Lined box'},\n\t\t\t\t{id: 'mg-placeholder-construction', title: 'Construction area'},\n\t\t\t],\n\t\t},\n\t},\n});\n\nexport default Vue.component('mgPlaceholder', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-placeholder\" :class=\"$props.config.style\" :style=\"`height: ${$props.config.height || 'auto'}`\">\n\t\t<div v-if=\"$props.config.text\" class=\"mg-placeholder-text\">\n\t\t\t{{$props.config.text}}\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-placeholder {\n\tmin-height: 100px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n/* Style: placeholder-box {{{ */\n.mg-placeholder.mg-placeholder-box {\n\tborder: 1px solid #000;\n\tbackground:\n\t\tlinear-gradient(to top left,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%),\n\t\tlinear-gradient(to top right,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%);\n}\n\n.mg-placeholder.mg-placeholder-box > .mg-placeholder-text {\n\tbackground: #FFF;\n\tborder-radius: 10px;\n\tpadding: 10px 15px;\n}\n/* }}} */\n\n/* Style: placeholder-construction {{{ */\n.mg-placeholder.mg-placeholder-construction {\n\tbackground: repeating-linear-gradient(45deg, #dfc458, #dfc458 10px, #666 10px, #666 20px);\n}\n\n.mg-placeholder.mg-placeholder-construction > .mg-placeholder-text {\n\tfont-size: 20pt;\n\tcolor: #FFF;\n\ttext-shadow: -2px -2px 1px #000, 2px -2px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$p = undefined;
    /* module identifier */
    const __vue_module_identifier__$p = undefined;
    /* functional template */
    const __vue_is_functional_template__$p = false;
    /* style inject SSR */
    

    
    var mgPlaceholder = normalizeComponent_1(
      { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
      __vue_inject_styles__$p,
      __vue_script__$p,
      __vue_scope_id__$p,
      __vue_is_functional_template__$p,
      __vue_module_identifier__$p,
      browser,
      undefined
    );

  var mgPlaceholder$1 = /*#__PURE__*/Object.freeze({
    'default': mgPlaceholder
  });

  macgyver.register('mgRestQuery', {
    title: 'ReST Query',
    icon: 'far fa-database',
    category: 'Data display',
    preferId: true,
    config: {
      "class": {
        type: 'mgText',
        advanced: true
      },
      classActive: {
        type: 'mgText',
        "default": 'btn btn-primary',
        advanced: true
      },
      classInactive: {
        type: 'mgText',
        "default": 'btn btn-light',
        advanced: true
      },
      iconActive: {
        type: 'mgIcon',
        "default": 'fa fa-database'
      },
      iconInactive: {
        type: 'mgIcon',
        "default": 'far fa-plus'
      },
      textActive: {
        type: 'mgText',
        "default": 'Edit query'
      },
      textInactive: {
        type: 'mgText',
        "default": 'Add query'
      }
    },
    format: true
  });
  var script$q = Vue.component('mgRestQuery', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    computed: {
      codeDisplay: function codeDisplay() {
        if (!this.data) return '';
        return '<pre class="pre-sm">' + JSON.stringify(this.data, null, '\t').replace(/\n/g, '<br/>') + '</pre>';
      }
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
      });
    },
    methods: {
      editQuery: function editQuery() {
        var _this2 = this;

        Promise.resolve().then(function (res) {
          return _this2.$prompt.macgyver({
            title: 'Edit query',
            // buttons: [], // We assume closing the dialog resolves so no need for buttons
            form: [{
              id: 'query',
              type: 'mgCodeEditor',
              showTitle: false
            }],
            data: {
              query: _this2.data
            }
          });
        }).then(function (form) {
          return _this2.data = JSON.parse(form.query);
        });
      }
    }
  });

  /* script */
  const __vue_script__$q = script$q;

  /* template */
  var __vue_render__$n = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "a",
      {
        directives: [
          {
            name: "tooltip",
            rawName: "v-tooltip",
            value: { content: _vm.codeDisplay, classes: "text-left" },
            expression: "{content: codeDisplay, classes: 'text-left'}"
          }
        ],
        staticClass: "btn btn-light",
        class: _vm.data
          ? [_vm.data, _vm.$props.config.classActive || _vm.$props.config.class]
          : [_vm.$props.config.classInactive || _vm.$props.config.class],
        on: {
          click: function($event) {
            return _vm.editQuery()
          }
        }
      },
      [
        _c("i", {
          class: _vm.data
            ? _vm.$props.config.iconActive
            : _vm.$props.config.iconInactive
        }),
        _vm._v(
          "\n\t" +
            _vm._s(
              _vm.data
                ? _vm.$props.config.textActive
                : _vm.$props.config.textInactive
            ) +
            "\n"
        )
      ]
    )
  };
  var __vue_staticRenderFns__$n = [];
  __vue_render__$n._withStripped = true;

    /* style */
    const __vue_inject_styles__$q = undefined;
    /* scoped */
    const __vue_scope_id__$q = undefined;
    /* module identifier */
    const __vue_module_identifier__$q = undefined;
    /* functional template */
    const __vue_is_functional_template__$q = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgRestQuery = normalizeComponent_1(
      { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
      __vue_inject_styles__$q,
      __vue_script__$q,
      __vue_scope_id__$q,
      __vue_is_functional_template__$q,
      __vue_module_identifier__$q,
      undefined,
      undefined
    );

  var mgRestQuery$1 = /*#__PURE__*/Object.freeze({
    'default': mgRestQuery
  });

  macgyver.register('mgSeperator', {
    title: 'Seperator',
    icon: 'far fa-minus',
    category: 'General Decoration'
  });
  var script$r = Vue.component('mgSeperator', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    }
  });

  /* script */
  const __vue_script__$r = script$r;

  /* template */
  var __vue_render__$o = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("hr", { staticClass: "mg-seperator" })
  };
  var __vue_staticRenderFns__$o = [];
  __vue_render__$o._withStripped = true;

    /* style */
    const __vue_inject_styles__$r = function (inject) {
      if (!inject) return
      inject("data-v-1f68243f_0", { source: "\n.mg-seperator {\n\tmargin-top: 0px;\n\tmargin-bottom: 10px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgSeperator.vue"],"names":[],"mappings":";AA0BA;CACA,eAAA;CACA,mBAAA;AACA","file":"mgSeperator.vue","sourcesContent":["<script>\nmacgyver.register('mgSeperator', {\n\ttitle: 'Seperator',\n\ticon: 'far fa-minus',\n\tcategory: 'General Decoration',\n});\n\nexport default Vue.component('mgSeperator', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n});\n</script>\n\n<template>\n\t<hr class=\"mg-seperator\"/>\n</template>\n\n<style>\n.mg-seperator {\n\tmargin-top: 0px;\n\tmargin-bottom: 10px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$r = undefined;
    /* module identifier */
    const __vue_module_identifier__$r = undefined;
    /* functional template */
    const __vue_is_functional_template__$r = false;
    /* style inject SSR */
    

    
    var mgSeperator = normalizeComponent_1(
      { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
      __vue_inject_styles__$r,
      __vue_script__$r,
      __vue_scope_id__$r,
      __vue_is_functional_template__$r,
      __vue_module_identifier__$r,
      browser,
      undefined
    );

  var mgSeperator$1 = /*#__PURE__*/Object.freeze({
    'default': mgSeperator
  });

  macgyver.register('mgTable', {
    title: 'Table layout',
    icon: 'far fa-table',
    category: 'Layout',
    isContainer: true,
    isContainerArray: true,
    preferId: false,
    config: {
      url: {
        type: 'mgUrl',
        relative: true,
        help: 'Data feed to populate the table'
      },
      allowAdd: {
        type: 'mgToggle',
        title: 'Allow Row Addition',
        "default": true
      },
      allowDelete: {
        type: 'mgToggle',
        title: 'Allow Row Deletion',
        "default": true
      },
      textEmpty: {
        type: 'mgText',
        title: 'No data message',
        "default": 'No data'
      },
      items: {
        type: 'mgTableEditor',
        title: 'Column setup',
        "default": [{
          id: 'col1',
          type: 'mgText'
        }, {
          id: 'col2',
          title: 'mgText'
        }, {
          id: 'col3',
          title: 'mgText'
        }]
      },
      addButtonActiveClass: {
        type: 'mgText',
        "default": 'btn btn-block btn-success fa fa-plus',
        advanced: true
      },
      addButtonInactiveClass: {
        type: 'mgText',
        "default": 'btn btn-block btn-disabled fa fa-plus',
        advanced: true
      },
      rowNumbers: {
        type: 'mgToggle',
        help: 'Show the row number at the beginning of each row',
        "default": true
      }
    },
    configChildren: {
      showTitle: {
        type: 'mgToggle',
        "default": false,
        title: 'Show Title'
      }
    }
  });
  var script$s = Vue.component('mgTable', {
    data: function data() {
      return {
        data: [],
        newRow: [],
        isAdding: false
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    },
    mounted: function mounted() {
      var _this = this;

      this.$watch('$props.config.url', function () {
        if (!_this.$props.config.url) return;

        _this.$macgyver.fetch(_this.$props.config.url, {
          type: 'array'
        }).then(function (data) {
          return _this.$set(_this.$props.config, 'data', data);
        });
      }, {
        immediate: true
      });
    },
    watch: {
      data: {
        immediate: true,
        handler: function handler() {
          // Ensure that data is always an array
          if (!_.isArray(this.data)) this.data = [];
        }
      }
    },
    methods: {
      createRow: function createRow(offset) {
        // Offset is the row to create after - i.e. array position splice
        console.log("FIXME: createRow(".concat(offset, ")"));
      },
      deleteRow: function deleteRow(offset) {
        console.log("FIXME: deleteRow(".concat(offset, ")"));
      }
    }
  });

  /* script */
  const __vue_script__$s = script$s;

  /* template */
  var __vue_render__$p = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "table",
      { staticClass: "table table-bordered table-striped table-hover" },
      [
        _c("thead", [
          _c(
            "tr",
            [
              _vm.$props.config.rowNumbers
                ? _c("th", { staticClass: "row-number" }, [_vm._v("#")])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.$props.config.items, function(col) {
                return _c(
                  "th",
                  {
                    key: col.id,
                    style:
                      (col.width ? "width: " + col.width + "; " : "") + col.class
                  },
                  [_vm._v("\n\t\t\t\t" + _vm._s(col.title) + "\n\t\t\t")]
                )
              }),
              _vm._v(" "),
              _c("th", { staticClass: "btn-context" })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          [
            !_vm.data || !_vm.data.length
              ? _c("tr", [
                  _c(
                    "td",
                    {
                      attrs: {
                        colspan:
                          _vm.$props.config.items.length +
                          (_vm.$props.config.rowNumbers ? 2 : 1)
                      }
                    },
                    [
                      _c("div", { staticClass: "alert alert-warning m-10" }, [
                        _vm._v(_vm._s(_vm.$props.config.textEmpty || "No data"))
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.data, function(row, rowNumber) {
              return _c(
                "tr",
                [
                  _vm.$props.config.rowNumbers
                    ? _c("td", { staticClass: "row-number" }, [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(_vm._f("number")(rowNumber + 1)) +
                            "\n\t\t\t"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.$props.config.items, function(col) {
                    return _c(
                      "td",
                      { key: col.id, class: col.class },
                      [
                        _c("mg-component", {
                          attrs: { form: _vm.$props.form, config: col }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("td", { staticClass: "btn-context" }, [
                    _c("div", { staticClass: "btn-group" }, [
                      _vm._m(0, true),
                      _vm._v(" "),
                      _c("ul", { staticClass: "dropdown-menu pull-right" }, [
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.createRow(rowNumber)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "far fa-arrow-circle-up" }),
                              _vm._v(" Add row above")
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.createRow(rowNumber)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "far fa-arrow-circle-down"
                              }),
                              _vm._v(" Add row below")
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.$props.config.allowDelete
                          ? _c("li", { staticClass: "dropdown-divider" })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.$props.config.allowDelete
                          ? _c("li", { staticClass: "dropdown-item-danger" }, [
                              _c(
                                "a",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteRow(rowNumber)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "far fa-trash" }),
                                  _vm._v(" Delete")
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ],
                2
              )
            }),
            _vm._v(" "),
            _vm.$props.config.allowAdd
              ? _c(
                  "tr",
                  { staticClass: "mgTable-append" },
                  [
                    _vm.$props.config.rowNumbers
                      ? _c("td", { staticClass: "row-number" }, [
                          _c("i", { staticClass: "far fa-asterisk" })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.$props.config.items, function(col, colNumber) {
                      return _c(
                        "td",
                        { key: col.id },
                        [
                          _c("mg-component", {
                            attrs: {
                              form: _vm.$props.form,
                              config: col,
                              data: _vm.newRow[colNumber]
                            }
                          })
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _c("td", [
                      _c("a", {
                        class: _vm.isAdding
                          ? _vm.$props.config.addButtonActiveClass
                          : _vm.$props.config.addButtonInactiveClass,
                        on: {
                          click: function($event) {
                            return _vm.createRow()
                          }
                        }
                      })
                    ])
                  ],
                  2
                )
              : _vm._e()
          ],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__$p = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "a",
        { staticClass: "btn btn-context", attrs: { "data-toggle": "dropdown" } },
        [_c("i", { staticClass: "far fa-ellipsis-v" })]
      )
    }
  ];
  __vue_render__$p._withStripped = true;

    /* style */
    const __vue_inject_styles__$s = function (inject) {
      if (!inject) return
      inject("data-v-dabb5bc8_0", { source: "\n.mg-table .row-number {\n\tfont-size: 16px;\n\ttext-align: middle;\n}\n.mg-table td.row-number {\n\tmargin-top: 14px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgTable.vue"],"names":[],"mappings":";AA2HA;CACA,eAAA;CACA,kBAAA;AACA;AAEA;CACA,gBAAA;AACA","file":"mgTable.vue","sourcesContent":["<script>\nmacgyver.register('mgTable', {\n\ttitle: 'Table layout',\n\ticon: 'far fa-table',\n\tcategory: 'Layout',\n\tisContainer: true,\n\tisContainerArray: true,\n\tpreferId: false,\n\tconfig: {\n\t\turl: {type: 'mgUrl', relative: true, help: 'Data feed to populate the table'},\n\t\tallowAdd: {type: 'mgToggle', title: 'Allow Row Addition', default: true},\n\t\tallowDelete: {type: 'mgToggle', title: 'Allow Row Deletion', default: true},\n\t\ttextEmpty: {type: 'mgText', title: 'No data message', default: 'No data'},\n\t\titems: {\n\t\t\ttype: 'mgTableEditor',\n\t\t\ttitle: 'Column setup',\n\t\t\tdefault: [\n\t\t\t\t{id: 'col1', type: 'mgText'},\n\t\t\t\t{id: 'col2', title: 'mgText'},\n\t\t\t\t{id: 'col3', title: 'mgText'},\n\t\t\t],\n\t\t},\n\t\taddButtonActiveClass: {type: 'mgText', default: 'btn btn-block btn-success fa fa-plus', advanced: true},\n\t\taddButtonInactiveClass: {type: 'mgText', default: 'btn btn-block btn-disabled fa fa-plus', advanced: true},\n\t\trowNumbers: {type: 'mgToggle', help: 'Show the row number at the beginning of each row', default: true},\n\t},\n\tconfigChildren: {\n\t\tshowTitle: {type: 'mgToggle', default: false, title: 'Show Title'},\n\t},\n});\n\nexport default Vue.component('mgTable', {\n\tdata: ()=> ({\n\t\tdata: [],\n\t\tnewRow: [],\n\t\tisAdding: false,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n\tmounted() {\n\t\tthis.$watch('$props.config.url', ()=> {\n\t\t\tif (!this.$props.config.url) return;\n\t\t\tthis.$macgyver.fetch(this.$props.config.url, {type: 'array'})\n\t\t\t\t.then(data => this.$set(this.$props.config, 'data', data))\n\t\t}, {immediate: true});\n\t},\n\twatch: {\n\t\tdata: {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\t// Ensure that data is always an array\n\t\t\t\tif (!_.isArray(this.data)) this.data = [];\n\t\t\t},\n\t\t},\n\t},\n\tmethods: {\n\t\tcreateRow(offset) { // Offset is the row to create after - i.e. array position splice\n\t\t\tconsole.log(`FIXME: createRow(${offset})`);\n\t\t},\n\t\tdeleteRow(offset) {\n\t\t\tconsole.log(`FIXME: deleteRow(${offset})`);\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<table class=\"table table-bordered table-striped table-hover\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th v-if=\"$props.config.rowNumbers\" class=\"row-number\">#</th>\n\t\t\t\t<th v-for=\"col in $props.config.items\" :key=\"col.id\" :style=\"(col.width ? 'width: ' + col.width + '; ' : '') + col.class\">\n\t\t\t\t\t{{col.title}}\n\t\t\t\t</th>\n\t\t\t\t<th class=\"btn-context\"></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr v-if=\"!data || !data.length\">\n\t\t\t\t<td :colspan=\"$props.config.items.length + ($props.config.rowNumbers ? 2 : 1)\">\n\t\t\t\t\t<div class=\"alert alert-warning m-10\">{{$props.config.textEmpty || 'No data'}}</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr v-for=\"(row, rowNumber) in data\">\n\t\t\t\t<td v-if=\"$props.config.rowNumbers\" class=\"row-number\">\n\t\t\t\t\t{{rowNumber + 1 | number}}\n\t\t\t\t</td>\n\t\t\t\t<td v-for=\"col in $props.config.items\" :key=\"col.id\" :class=\"col.class\">\n\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"col\"/>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"btn-context\">\n\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t<a class=\"btn btn-context\" data-toggle=\"dropdown\"><i class=\"far fa-ellipsis-v\"></i></a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t\t<li><a @click=\"createRow(rowNumber)\"><i class=\"far fa-arrow-circle-up\"></i> Add row above</a></li>\n\t\t\t\t\t\t\t<li><a @click=\"createRow(rowNumber)\"><i class=\"far fa-arrow-circle-down\"></i> Add row below</a></li>\n\t\t\t\t\t\t\t<li v-if=\"$props.config.allowDelete\" class=\"dropdown-divider\"></li>\n\t\t\t\t\t\t\t<li v-if=\"$props.config.allowDelete\" class=\"dropdown-item-danger\"><a @click=\"deleteRow(rowNumber)\"><i class=\"far fa-trash\"></i> Delete</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr class=\"mgTable-append\" v-if=\"$props.config.allowAdd\">\n\t\t\t\t<td v-if=\"$props.config.rowNumbers\" class=\"row-number\">\n\t\t\t\t\t<i class=\"far fa-asterisk\"></i>\n\t\t\t\t</td>\n\t\t\t\t<td v-for=\"(col, colNumber) in $props.config.items\" :key=\"col.id\">\n\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"col\" :data=\"newRow[colNumber]\"/>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<a @click=\"createRow()\" :class=\"isAdding ? $props.config.addButtonActiveClass : $props.config.addButtonInactiveClass\"></a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</template>\n\n<style>\n.mg-table .row-number {\n\tfont-size: 16px;\n\ttext-align: middle;\n}\n\n.mg-table td.row-number {\n\tmargin-top: 14px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$s = undefined;
    /* module identifier */
    const __vue_module_identifier__$s = undefined;
    /* functional template */
    const __vue_is_functional_template__$s = false;
    /* style inject SSR */
    

    
    var mgTable = normalizeComponent_1(
      { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
      __vue_inject_styles__$s,
      __vue_script__$s,
      __vue_scope_id__$s,
      __vue_is_functional_template__$s,
      __vue_module_identifier__$s,
      browser,
      undefined
    );

  var mgTable$1 = /*#__PURE__*/Object.freeze({
    'default': mgTable
  });

  macgyver.register('mgTextArea', {
    title: 'Multi-line text',
    icon: 'fa fa-align-justify',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      rows: {
        type: 'mgNumber',
        title: 'Line height',
        "default": 3
      },
      lengthMin: {
        type: 'mgNumber',
        title: 'Minimum Length'
      },
      lengthMax: {
        type: 'mgNumber',
        title: 'Maximum Length'
      },
      placeholder: {
        type: 'mgTextArea',
        help: 'Ghost text to display when there is no value'
      },
      required: {
        type: 'mgToggle',
        "default": false
      }
    },
    format: true
  });
  var script$t = Vue.component('mgTextArea', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
        if (_this.$props.config.lengthMin && _.isString(_this.data) && _this.data.length < _this.$props.config.lengthMin) return reply("".concat(_this.$props.config.title, " is too small (minimum length is ").concat(_this.$props.config.lengthMin, ")"));
        if (_this.$props.config.lengthMax && _.isString(_this.data) && _this.data.length > _this.$props.config.lengthMax) return reply("".concat(_this.$props.config.title, " is too long (maximum length is ").concat(_this.$props.config.lengthMax, ")"));
      });
    }
  });

  /* script */
  const __vue_script__$t = script$t;

  /* template */
  var __vue_render__$q = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("textarea", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: {
        placeholder: _vm.config.placeholder,
        minlength: _vm.$props.config.lengthMin,
        maxlength: _vm.$props.config.lengthMin,
        rows: _vm.$props.config.rows,
        autocomplete: "off"
      },
      domProps: { value: _vm.data },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.data = $event.target.value;
        }
      }
    })
  };
  var __vue_staticRenderFns__$q = [];
  __vue_render__$q._withStripped = true;

    /* style */
    const __vue_inject_styles__$t = undefined;
    /* scoped */
    const __vue_scope_id__$t = undefined;
    /* module identifier */
    const __vue_module_identifier__$t = undefined;
    /* functional template */
    const __vue_is_functional_template__$t = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgTextArea = normalizeComponent_1(
      { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
      __vue_inject_styles__$t,
      __vue_script__$t,
      __vue_scope_id__$t,
      __vue_is_functional_template__$t,
      __vue_module_identifier__$t,
      undefined,
      undefined
    );

  var mgTextArea$1 = /*#__PURE__*/Object.freeze({
    'default': mgTextArea
  });

  macgyver.register('mgText', {
    title: 'Text',
    icon: 'far fa-edit',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      lengthMin: {
        type: 'mgNumber',
        title: 'Minimum Length'
      },
      lengthMax: {
        type: 'mgNumber',
        title: 'Maximum Length'
      },
      placeholder: {
        type: 'mgText',
        help: 'Ghost text to display when there is no value'
      },
      required: {
        type: 'mgToggle',
        "default": false
      },
      focus: {
        type: 'mgToggle',
        "default": false,
        help: 'Auto-focus the element when it appears on screen'
      },
      autoComplete: {
        type: 'mgChoiceDropdown',
        help: 'Allow auto-complete value propagation',
        "default": 'off',
        advanced: true,
        "enum": [{
          id: 'on',
          title: 'Automatic'
        }, {
          id: 'name',
          title: 'Name'
        }, {
          id: 'email',
          title: 'Email'
        }, {
          id: 'username',
          title: 'Username'
        }, {
          id: 'street-address',
          title: 'Street address'
        }, {
          id: 'address-line1',
          title: 'Address line 1'
        }, {
          id: 'address-line2',
          title: 'Address line 2'
        }, {
          id: 'address-line3',
          title: 'Address line 3'
        }, {
          id: 'adress-level1',
          title: 'Address level 1'
        }, {
          id: 'adress-level2',
          title: 'Address level 2'
        }, {
          id: 'adress-level3',
          title: 'Address level 3'
        }, {
          id: 'adress-level4',
          title: 'Address level 4'
        }, {
          id: 'country',
          title: 'Country code'
        }, {
          id: 'country-name',
          title: 'Country name'
        }, {
          id: 'postal-code',
          title: 'Postcode'
        }]
      }
    },
    format: true
  });
  var script$u = Vue.component('mgText', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
        if (_this.$props.config.lengthMin && _.isString(_this.data) && _this.data.length < _this.$props.config.lengthMin) return reply("".concat(_this.$props.config.title, " is too small (minimum length is ").concat(_this.$props.config.lengthMin, ")"));
        if (_this.$props.config.lengthMax && _.isString(_this.data) && _this.data.length > _this.$props.config.lengthMax) return reply("".concat(_this.$props.config.title, " is too long (maximum length is ").concat(_this.$props.config.lengthMax, ")"));
      });
    },
    mounted: function mounted() {
      if (this.$props.config.focus) {
        var $el = $(this.$el);

        var focusVisible = function focusVisible() {
          if ($el.is(':visible')) {
            $el.focus();
          } else {
            setTimeout(focusVisible, 100);
          }
        };

        focusVisible();
      }
    }
  });

  /* script */
  const __vue_script__$u = script$u;

  /* template */
  var __vue_render__$r = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("input", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: {
        type: "text",
        autocomplete: _vm.$props.config.autoComplete,
        placeholder: _vm.$props.config.placeholder
      },
      domProps: { value: _vm.data },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.data = $event.target.value;
        }
      }
    })
  };
  var __vue_staticRenderFns__$r = [];
  __vue_render__$r._withStripped = true;

    /* style */
    const __vue_inject_styles__$u = undefined;
    /* scoped */
    const __vue_scope_id__$u = undefined;
    /* module identifier */
    const __vue_module_identifier__$u = undefined;
    /* functional template */
    const __vue_is_functional_template__$u = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgText = normalizeComponent_1(
      { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
      __vue_inject_styles__$u,
      __vue_script__$u,
      __vue_scope_id__$u,
      __vue_is_functional_template__$u,
      __vue_module_identifier__$u,
      undefined,
      undefined
    );

  var mgText$1 = /*#__PURE__*/Object.freeze({
    'default': mgText
  });

  macgyver.register('mgTime', {
    title: 'Time selection',
    icon: 'fa fa-clock',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      min: {
        type: 'mgTime',
        title: 'Earliest time'
      },
      max: {
        type: 'mgNumber',
        title: 'Latest time'
      },
      required: {
        type: 'mgToggle',
        "default": false
      }
    },
    format: function format(v) {
      if (!v) return '';
      var d = v instanceof Date ? v : new Date(v);
      return d.toLocaleTimeString();
    },
    formatAlign: 'center'
  });
  var script$v = Vue.component('mgTime', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
        if (_this.$props.config.min && _.isString(_this.data) && _this.data < _this.$props.config.min) return reply("".concat(_this.$props.config.title, " is too early (earliest time is ").concat(_this.$props.config.min, ")"));
        if (_this.$props.config.max && _.isString(_this.data) && _this.data > _this.$props.config.max) return reply("".concat(_this.$props.config.title, " is too late (latest time is ").concat(_this.$props.config.max, ")"));
      });
    }
  });

  /* script */
  const __vue_script__$v = script$v;

  /* template */
  var __vue_render__$s = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("input", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: { type: "time" },
      domProps: { value: _vm.data },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.data = $event.target.value;
        }
      }
    })
  };
  var __vue_staticRenderFns__$s = [];
  __vue_render__$s._withStripped = true;

    /* style */
    const __vue_inject_styles__$v = undefined;
    /* scoped */
    const __vue_scope_id__$v = undefined;
    /* module identifier */
    const __vue_module_identifier__$v = undefined;
    /* functional template */
    const __vue_is_functional_template__$v = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgTime = normalizeComponent_1(
      { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
      __vue_inject_styles__$v,
      __vue_script__$v,
      __vue_scope_id__$v,
      __vue_is_functional_template__$v,
      __vue_module_identifier__$v,
      undefined,
      undefined
    );

  var mgTime$1 = /*#__PURE__*/Object.freeze({
    'default': mgTime
  });

  var dist = createCommonjsModule(function (module, exports) {
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
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
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
  /******/ 	// identity function for calling harmony imports with the correct context
  /******/ 	__webpack_require__.i = function(value) { return value; };
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, {
  /******/ 				configurable: false,
  /******/ 				enumerable: true,
  /******/ 				get: getter
  /******/ 			});
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "/dist/";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 2);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {


  /* styles */
  __webpack_require__(7);

  var Component = __webpack_require__(5)(
    /* script */
    __webpack_require__(1),
    /* template */
    __webpack_require__(6),
    /* scopeId */
    "data-v-25adc6c0",
    /* cssModules */
    null
  );

  module.exports = Component.exports;


  /***/ }),
  /* 1 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var DEFAULT_COLOR_CHECKED = '#75c791';
  var DEFAULT_COLOR_UNCHECKED = '#bfcbd9';
  var DEFAULT_LABEL_CHECKED = 'on';
  var DEFAULT_LABEL_UNCHECKED = 'off';
  var DEFAULT_SWITCH_COLOR = '#fff';

  var contains = function contains(object, title) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.hasOwnProperty(title);
  };

  var px = function px(v) {
    return v + 'px';
  };

  var translate3d = function translate3d(x, y) {
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0px';

    return 'translate3d(' + x + ', ' + y + ', ' + z + ')';
  };

  /* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ToggleButton',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      sync: {
        type: Boolean,
        default: false
      },
      speed: {
        type: Number,
        default: 300
      },
      color: {
        type: [String, Object],
        validator: function validator(value) {
          return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked || value.disabled : typeof value === 'string';
        }
      },
      switchColor: {
        type: [String, Object],
        validator: function validator(value) {
          return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'string';
        }
      },
      cssColors: {
        type: Boolean,
        default: false
      },
      labels: {
        type: [Boolean, Object],
        default: false,
        validator: function validator(value) {
          return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
        }
      },
      height: {
        type: Number,
        default: 22
      },
      width: {
        type: Number,
        default: 50
      },
      margin: {
        type: Number,
        default: 3
      },
      fontSize: {
        type: Number
      }
    },
    computed: {
      className: function className() {
        var toggled = this.toggled,
            disabled = this.disabled;


        return ['vue-js-switch', { toggled: toggled, disabled: disabled }];
      },
      coreStyle: function coreStyle() {
        return {
          width: px(this.width),
          height: px(this.height),
          backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
          borderRadius: px(Math.round(this.height / 2))
        };
      },
      buttonRadius: function buttonRadius() {
        return this.height - this.margin * 2;
      },
      distance: function distance() {
        return px(this.width - this.height + this.margin);
      },
      buttonStyle: function buttonStyle() {
        var transition = 'transform ' + this.speed + 'ms';
        var margin = px(this.margin);

        var transform = this.toggled ? translate3d(this.distance, margin) : translate3d(margin, margin);

        var background = this.switchColor ? this.switchColorCurrent : null;

        return {
          width: px(this.buttonRadius),
          height: px(this.buttonRadius),
          transition: transition,
          transform: transform,
          background: background
        };
      },
      labelStyle: function labelStyle() {
        return {
          lineHeight: px(this.height),
          fontSize: this.fontSize ? px(this.fontSize) : null
        };
      },
      colorChecked: function colorChecked() {
        var color = this.color;


        if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) !== 'object') {
          return color || DEFAULT_COLOR_CHECKED;
        }

        return contains(color, 'checked') ? color.checked : DEFAULT_COLOR_CHECKED;
      },
      colorUnchecked: function colorUnchecked() {
        var color = this.color;


        return contains(color, 'unchecked') ? color.unchecked : DEFAULT_COLOR_UNCHECKED;
      },
      colorDisabled: function colorDisabled() {
        var color = this.color;


        return contains(color, 'disabled') ? color.disabled : this.colorCurrent;
      },
      colorCurrent: function colorCurrent() {
        return this.toggled ? this.colorChecked : this.colorUnchecked;
      },
      labelChecked: function labelChecked() {
        var labels = this.labels;


        return contains(labels, 'checked') ? labels.checked : DEFAULT_LABEL_CHECKED;
      },
      labelUnchecked: function labelUnchecked() {
        var labels = this.labels;


        return contains(labels, 'unchecked') ? labels.unchecked : DEFAULT_LABEL_UNCHECKED;
      },
      switchColorChecked: function switchColorChecked() {
        var switchColor = this.switchColor;


        return contains(switchColor, 'checked') ? switchColor.checked : DEFAULT_SWITCH_COLOR;
      },
      switchColorUnchecked: function switchColorUnchecked() {
        var switchColor = this.switchColor;


        return contains(switchColor, 'unchecked') ? switchColor.unchecked : DEFAULT_SWITCH_COLOR;
      },
      switchColorCurrent: function switchColorCurrent() {
        var switchColor = this.switchColor;


        if ((typeof switchColor === 'undefined' ? 'undefined' : _typeof(switchColor)) !== 'object') {
          return switchColor || DEFAULT_SWITCH_COLOR;
        }

        return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
      }
    },
    watch: {
      value: function value(_value) {
        if (this.sync) {
          this.toggled = !!_value;
        }
      }
    },
    data: function data() {
      return {
        toggled: !!this.value
      };
    },

    methods: {
      toggle: function toggle(event) {
        this.toggled = !this.toggled;
        this.$emit('input', this.toggled);
        this.$emit('change', {
          value: this.toggled,
          srcEvent: event
        });
      }
    }
  });

  /***/ }),
  /* 2 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_vue__);
  /* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a; });


  var installed = false;

  /* harmony default export */ __webpack_exports__["default"] = ({
    install: function install(Vue) {
      if (installed) {
        return;
      }

      Vue.component('ToggleButton', __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a);
      installed = true;
    }
  });



  /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.i, ".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""]);

  // exports


  /***/ }),
  /* 4 */
  /***/ (function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


  /***/ }),
  /* 5 */
  /***/ (function(module, exports) {

  // this module is a runtime utility for cleaner component module output and will
  // be included in the final webpack user bundle

  module.exports = function normalizeComponent (
    rawScriptExports,
    compiledTemplate,
    scopeId,
    cssModules
  ) {
    var esModule;
    var scriptExports = rawScriptExports = rawScriptExports || {};

    // ES6 modules interop
    var type = typeof rawScriptExports.default;
    if (type === 'object' || type === 'function') {
      esModule = rawScriptExports;
      scriptExports = rawScriptExports.default;
    }

    // Vue.extend constructor export interop
    var options = typeof scriptExports === 'function'
      ? scriptExports.options
      : scriptExports;

    // render functions
    if (compiledTemplate) {
      options.render = compiledTemplate.render;
      options.staticRenderFns = compiledTemplate.staticRenderFns;
    }

    // scopedId
    if (scopeId) {
      options._scopeId = scopeId;
    }

    // inject cssModules
    if (cssModules) {
      var computed = Object.create(options.computed || null);
      Object.keys(cssModules).forEach(function (key) {
        var module = cssModules[key];
        computed[key] = function () { return module };
      });
      options.computed = computed;
    }

    return {
      esModule: esModule,
      exports: scriptExports,
      options: options
    }
  };


  /***/ }),
  /* 6 */
  /***/ (function(module, exports) {

  module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
    return _c('label', {
      class: _vm.className
    }, [_c('input', {
      staticClass: "v-switch-input",
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "disabled": _vm.disabled
      },
      domProps: {
        "checked": _vm.value
      },
      on: {
        "change": function($event) {
          $event.stopPropagation();
          return _vm.toggle($event)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "v-switch-core",
      style: (_vm.coreStyle)
    }, [_c('div', {
      staticClass: "v-switch-button",
      style: (_vm.buttonStyle)
    })]), _vm._v(" "), (_vm.labels) ? [(_vm.toggled) ? _c('span', {
      staticClass: "v-switch-label v-left",
      style: (_vm.labelStyle)
    }, [_vm._t("checked", [
      [_vm._v(_vm._s(_vm.labelChecked))]
    ])], 2) : _c('span', {
      staticClass: "v-switch-label v-right",
      style: (_vm.labelStyle)
    }, [_vm._t("unchecked", [
      [_vm._v(_vm._s(_vm.labelUnchecked))]
    ])], 2)] : _vm._e()], 2)
  },staticRenderFns: []};

  /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag

  // load the styles
  var content = __webpack_require__(3);
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add the styles to the DOM
  var update = __webpack_require__(8)("2283861f", content, true);

  /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {

  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
    Modified by Evan You @yyx990803
  */

  var hasDocument = typeof document !== 'undefined';

  if (typeof DEBUG !== 'undefined' && DEBUG) {
    if (!hasDocument) {
      throw new Error(
      'vue-style-loader cannot be used in a non-browser environment. ' +
      "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
    ) }
  }

  var listToStyles = __webpack_require__(9);

  /*
  type StyleObject = {
    id: number;
    parts: Array<StyleObjectPart>
  }

  type StyleObjectPart = {
    css: string;
    media: string;
    sourceMap: ?string
  }
  */

  var stylesInDom = {/*
    [id: number]: {
      id: number,
      refs: number,
      parts: Array<(obj?: StyleObjectPart) => void>
    }
  */};

  var head = hasDocument && (document.head || document.getElementsByTagName('head')[0]);
  var singletonElement = null;
  var singletonCounter = 0;
  var isProduction = false;
  var noop = function () {};

  // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

  module.exports = function (parentId, list, _isProduction) {
    isProduction = _isProduction;

    var styles = listToStyles(parentId, list);
    addStylesToDom(styles);

    return function update (newList) {
      var mayRemove = [];
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
      if (newList) {
        styles = listToStyles(parentId, newList);
        addStylesToDom(styles);
      } else {
        styles = [];
      }
      for (var i = 0; i < mayRemove.length; i++) {
        var domStyle = mayRemove[i];
        if (domStyle.refs === 0) {
          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j]();
          }
          delete stylesInDom[domStyle.id];
        }
      }
    }
  };

  function addStylesToDom (styles /* Array<StyleObject> */) {
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];
      if (domStyle) {
        domStyle.refs++;
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j](item.parts[j]);
        }
        for (; j < item.parts.length; j++) {
          domStyle.parts.push(addStyle(item.parts[j]));
        }
        if (domStyle.parts.length > item.parts.length) {
          domStyle.parts.length = item.parts.length;
        }
      } else {
        var parts = [];
        for (var j = 0; j < item.parts.length; j++) {
          parts.push(addStyle(item.parts[j]));
        }
        stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
      }
    }
  }

  function createStyleElement () {
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    head.appendChild(styleElement);
    return styleElement
  }

  function addStyle (obj /* StyleObjectPart */) {
    var update, remove;
    var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]');

    if (styleElement) {
      if (isProduction) {
        // has SSR styles and in production mode.
        // simply do nothing.
        return noop
      } else {
        // has SSR styles but in dev mode.
        // for some reason Chrome can't handle source map in server-rendered
        // style tags - source maps in <style> only works if the style tag is
        // created and inserted dynamically. So we remove the server rendered
        // styles and inject new ones.
        styleElement.parentNode.removeChild(styleElement);
      }
    }

    if (isOldIE) {
      // use singleton mode for IE9.
      var styleIndex = singletonCounter++;
      styleElement = singletonElement || (singletonElement = createStyleElement());
      update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
      remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
    } else {
      // use multi-style-tag mode in all other cases
      styleElement = createStyleElement();
      update = applyToTag.bind(null, styleElement);
      remove = function () {
        styleElement.parentNode.removeChild(styleElement);
      };
    }

    update(obj);

    return function updateStyle (newObj /* StyleObjectPart */) {
      if (newObj) {
        if (newObj.css === obj.css &&
            newObj.media === obj.media &&
            newObj.sourceMap === obj.sourceMap) {
          return
        }
        update(obj = newObj);
      } else {
        remove();
      }
    }
  }

  var replaceText = (function () {
    var textStore = [];

    return function (index, replacement) {
      textStore[index] = replacement;
      return textStore.filter(Boolean).join('\n')
    }
  })();

  function applyToSingletonTag (styleElement, index, remove, obj) {
    var css = remove ? '' : obj.css;

    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = replaceText(index, css);
    } else {
      var cssNode = document.createTextNode(css);
      var childNodes = styleElement.childNodes;
      if (childNodes[index]) styleElement.removeChild(childNodes[index]);
      if (childNodes.length) {
        styleElement.insertBefore(cssNode, childNodes[index]);
      } else {
        styleElement.appendChild(cssNode);
      }
    }
  }

  function applyToTag (styleElement, obj) {
    var css = obj.css;
    var media = obj.media;
    var sourceMap = obj.sourceMap;

    if (media) {
      styleElement.setAttribute('media', media);
    }

    if (sourceMap) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
      // http://stackoverflow.com/a/26603875
      css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }

    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      while (styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }


  /***/ }),
  /* 9 */
  /***/ (function(module, exports) {

  /**
   * Translates the list format produced by css-loader into something
   * easier to manipulate.
   */
  module.exports = function listToStyles (parentId, list) {
    var styles = [];
    var newStyles = {};
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = item[0];
      var css = item[1];
      var media = item[2];
      var sourceMap = item[3];
      var part = {
        id: parentId + ':' + i,
        css: css,
        media: media,
        sourceMap: sourceMap
      };
      if (!newStyles[id]) {
        styles.push(newStyles[id] = { id: id, parts: [part] });
      } else {
        newStyles[id].parts.push(part);
      }
    }
    return styles
  };


  /***/ })
  /******/ ]);
  });

  });

  var ToggleButton = unwrapExports(dist);

  Vue.use(ToggleButton);
  macgyver.register('mgToggle', {
    requires: 'node_modules/vue-js-toggle-button/dist/index.js',
    title: 'Toggle Switch',
    icon: 'far fa-toggle-on',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      onText: {
        type: 'mgText',
        "default": 'on'
      },
      onColor: {
        type: 'mgColor',
        "default": '#75c791',
        advanced: true
      },
      offText: {
        type: 'mgText',
        "default": 'off'
      },
      offColor: {
        type: 'mgColor',
        "default": '#bfcbd9',
        advanced: true
      },
      switchColor: {
        type: 'mgColor',
        "default": '#fff',
        advanced: true
      },
      disabledColor: {
        type: 'mgColor',
        "default": '#cccccc'
      }
    },
    format: function format(v, config) {
      return v ? config.onText : config.offText;
    },
    formatAlign: 'center',
    shorthand: ['boolean', 'switch', 'toggle']
  });
  var script$w = Vue.component('mgToggle', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      this.$macgyver.inject(this);
    },
    methods: {
      change: function change(e) {
        this.$macgyver.forms.emit(this.form, 'mgChange', this.config.id, e.value);
      }
    }
  });

  /* script */
  const __vue_script__$w = script$w;

  /* template */
  var __vue_render__$t = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("toggle-button", {
      attrs: {
        value: false,
        color: {
          checked: _vm.$props.config.onColor,
          unchecked: _vm.$props.config.offColor,
          disabled: _vm.$props.config.disabledColor
        },
        labels: {
          checked: _vm.$props.config.onText,
          unchecked: _vm.$props.config.offText
        },
        switchColor: _vm.$props.config.switchColor
      },
      on: { change: _vm.change }
    })
  };
  var __vue_staticRenderFns__$t = [];
  __vue_render__$t._withStripped = true;

    /* style */
    const __vue_inject_styles__$w = undefined;
    /* scoped */
    const __vue_scope_id__$w = undefined;
    /* module identifier */
    const __vue_module_identifier__$w = undefined;
    /* functional template */
    const __vue_is_functional_template__$w = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgToggle = normalizeComponent_1(
      { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
      __vue_inject_styles__$w,
      __vue_script__$w,
      __vue_scope_id__$w,
      __vue_is_functional_template__$w,
      __vue_module_identifier__$w,
      undefined,
      undefined
    );

  var mgToggle$1 = /*#__PURE__*/Object.freeze({
    'default': mgToggle
  });

  macgyver.register('mgUrl', {
    title: 'URL',
    icon: 'far fa-globe',
    category: 'Simple Inputs',
    preferId: true,
    config: {
      placeholder: {
        type: 'mgUrl',
        help: 'Ghost text to display when there is no value'
      },
      required: {
        type: 'mgToggle',
        "default": false
      },
      relative: {
        type: 'mgToggle',
        help: 'Allow relative URL paths to the host'
      } // FIXME: Not yet implemented

    },
    format: function format(v) {
      if (!v) return '';
      return "<a href=\"".concat(v, "\" target=\"_blank\">").concat(v, "</a>");
    },
    shorthand: ['uri']
  });
  var script$x = Vue.component('mgUrl', {
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: Object,
      form: String
    },
    created: function created() {
      var _this = this;

      this.$macgyver.inject(this);
      this.$on('mgValidate', function (reply) {
        if (_this.$props.config.required && !_this.data) return reply("".concat(_this.$props.config.title, " is required"));
      });
    }
  });

  /* script */
  const __vue_script__$x = script$x;

  /* template */
  var __vue_render__$u = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("input", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: { type: "url", placeholder: _vm.$props.config.placeholder },
      domProps: { value: _vm.data },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.data = $event.target.value;
        }
      }
    })
  };
  var __vue_staticRenderFns__$u = [];
  __vue_render__$u._withStripped = true;

    /* style */
    const __vue_inject_styles__$x = undefined;
    /* scoped */
    const __vue_scope_id__$x = undefined;
    /* module identifier */
    const __vue_module_identifier__$x = undefined;
    /* functional template */
    const __vue_is_functional_template__$x = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mgUrl = normalizeComponent_1(
      { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
      __vue_inject_styles__$x,
      __vue_script__$x,
      __vue_scope_id__$x,
      __vue_is_functional_template__$x,
      __vue_module_identifier__$x,
      undefined,
      undefined
    );

  var mgUrl$1 = /*#__PURE__*/Object.freeze({
    'default': mgUrl
  });

}(Vue, $));
//# sourceMappingURL=macgyver.js.map
