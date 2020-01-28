(function (Vue$1, $) {
            'use strict';

            Vue$1 = Vue$1 && Vue$1.hasOwnProperty('default') ? Vue$1['default'] : Vue$1;
            $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

            var global$1 = (typeof global !== "undefined" ? global :
                        typeof self !== "undefined" ? self :
                        typeof window !== "undefined" ? window : {});

            function _typeof(obj) {
              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function (obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function (obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }

              return _typeof(obj);
            }

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

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }

              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };

              return _setPrototypeOf(o, p);
            }

            function isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;

              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }

            function _construct(Parent, args, Class) {
              if (isNativeReflectConstruct()) {
                _construct = Reflect.construct;
              } else {
                _construct = function _construct(Parent, args, Class) {
                  var a = [null];
                  a.push.apply(a, args);
                  var Constructor = Function.bind.apply(Parent, a);
                  var instance = new Constructor();
                  if (Class) _setPrototypeOf(instance, Class.prototype);
                  return instance;
                };
              }

              return _construct.apply(null, arguments);
            }

            function _isNativeFunction(fn) {
              return Function.toString.call(fn).indexOf("[native code]") !== -1;
            }

            function _wrapNativeSuper(Class) {
              var _cache = typeof Map === "function" ? new Map() : undefined;

              _wrapNativeSuper = function _wrapNativeSuper(Class) {
                if (Class === null || !_isNativeFunction(Class)) return Class;

                if (typeof Class !== "function") {
                  throw new TypeError("Super expression must either be null or a function");
                }

                if (typeof _cache !== "undefined") {
                  if (_cache.has(Class)) return _cache.get(Class);

                  _cache.set(Class, Wrapper);
                }

                function Wrapper() {
                  return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                }

                Wrapper.prototype = Object.create(Class.prototype, {
                  constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                });
                return _setPrototypeOf(Wrapper, Class);
              };

              return _wrapNativeSuper(Class);
            }

            function _slicedToArray(arr, i) {
              return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
            }

            function _toConsumableArray(arr) {
              return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
            }

            function _arrayWithoutHoles(arr) {
              if (Array.isArray(arr)) {
                for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

                return arr2;
              }
            }

            function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            }

            function _iterableToArray(iter) {
              if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
            }

            function _iterableToArrayLimit(arr, i) {
              if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
                return;
              }

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

            function _nonIterableSpread() {
              throw new TypeError("Invalid attempt to spread non-iterable instance");
            }

            function _nonIterableRest() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }

            function _wrapRegExp(re, groups) {
              _wrapRegExp = function (re, groups) {
                return new BabelRegExp(re, undefined, groups);
              };

              var _RegExp = _wrapNativeSuper(RegExp);

              var _super = RegExp.prototype;

              var _groups = new WeakMap();

              function BabelRegExp(re, flags, groups) {
                var _this = _RegExp.call(this, re, flags);

                _groups.set(_this, groups || _groups.get(re));

                return _this;
              }

              _inherits(BabelRegExp, _RegExp);

              BabelRegExp.prototype.exec = function (str) {
                var result = _super.exec.call(this, str);

                if (result) result.groups = buildGroups(result, this);
                return result;
              };

              BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
                if (typeof substitution === "string") {
                  var groups = _groups.get(this);

                  return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
                    return "$" + groups[name];
                  }));
                } else if (typeof substitution === "function") {
                  var _this = this;

                  return _super[Symbol.replace].call(this, str, function () {
                    var args = [];
                    args.push.apply(args, arguments);

                    if (typeof args[args.length - 1] !== "object") {
                      args.push(buildGroups(args, _this));
                    }

                    return substitution.apply(this, args);
                  });
                } else {
                  return _super[Symbol.replace].call(this, str, substitution);
                }
              };

              function buildGroups(result, re) {
                var g = _groups.get(re);

                return Object.keys(g).reduce(function (groups, name) {
                  groups[name] = result[g[name]];
                  return groups;
                }, Object.create(null));
              }

              return _wrapRegExp.apply(this, arguments);
            }

            /**
             * Checks if `value` is classified as an `Array` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array, else `false`.
             * @example
             *
             * _.isArray([1, 2, 3]);
             * // => true
             *
             * _.isArray(document.body.children);
             * // => false
             *
             * _.isArray('abc');
             * // => false
             *
             * _.isArray(_.noop);
             * // => false
             */
            var isArray = Array.isArray;

            var isArray_1 = isArray;

            var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

            function unwrapExports (x) {
            	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
            }

            function createCommonjsModule(fn, module) {
            	return module = { exports: {} }, fn(module, module.exports), module.exports;
            }

            /** Detect free variable `global` from Node.js. */
            var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

            var _freeGlobal = freeGlobal;

            /** Detect free variable `self`. */
            var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

            /** Used as a reference to the global object. */
            var root = _freeGlobal || freeSelf || Function('return this')();

            var _root = root;

            /** Built-in value references. */
            var Symbol$1 = _root.Symbol;

            var _Symbol = Symbol$1;

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */
            var nativeObjectToString = objectProto.toString;

            /** Built-in value references. */
            var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

            /**
             * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the raw `toStringTag`.
             */
            function getRawTag(value) {
              var isOwn = hasOwnProperty.call(value, symToStringTag),
                  tag = value[symToStringTag];

              try {
                value[symToStringTag] = undefined;
                var unmasked = true;
              } catch (e) {}

              var result = nativeObjectToString.call(value);
              if (unmasked) {
                if (isOwn) {
                  value[symToStringTag] = tag;
                } else {
                  delete value[symToStringTag];
                }
              }
              return result;
            }

            var _getRawTag = getRawTag;

            /** Used for built-in method references. */
            var objectProto$1 = Object.prototype;

            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */
            var nativeObjectToString$1 = objectProto$1.toString;

            /**
             * Converts `value` to a string using `Object.prototype.toString`.
             *
             * @private
             * @param {*} value The value to convert.
             * @returns {string} Returns the converted string.
             */
            function objectToString(value) {
              return nativeObjectToString$1.call(value);
            }

            var _objectToString = objectToString;

            /** `Object#toString` result references. */
            var nullTag = '[object Null]',
                undefinedTag = '[object Undefined]';

            /** Built-in value references. */
            var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

            /**
             * The base implementation of `getTag` without fallbacks for buggy environments.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */
            function baseGetTag(value) {
              if (value == null) {
                return value === undefined ? undefinedTag : nullTag;
              }
              return (symToStringTag$1 && symToStringTag$1 in Object(value))
                ? _getRawTag(value)
                : _objectToString(value);
            }

            var _baseGetTag = baseGetTag;

            /**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */
            function isObjectLike(value) {
              return value != null && typeof value == 'object';
            }

            var isObjectLike_1 = isObjectLike;

            /** `Object#toString` result references. */
            var symbolTag = '[object Symbol]';

            /**
             * Checks if `value` is classified as a `Symbol` primitive or object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
             * @example
             *
             * _.isSymbol(Symbol.iterator);
             * // => true
             *
             * _.isSymbol('abc');
             * // => false
             */
            function isSymbol(value) {
              return typeof value == 'symbol' ||
                (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
            }

            var isSymbol_1 = isSymbol;

            /** Used to match property names within property paths. */
            var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                reIsPlainProp = /^\w*$/;

            /**
             * Checks if `value` is a property name and not a property path.
             *
             * @private
             * @param {*} value The value to check.
             * @param {Object} [object] The object to query keys on.
             * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
             */
            function isKey(value, object) {
              if (isArray_1(value)) {
                return false;
              }
              var type = typeof value;
              if (type == 'number' || type == 'symbol' || type == 'boolean' ||
                  value == null || isSymbol_1(value)) {
                return true;
              }
              return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
                (object != null && value in Object(object));
            }

            var _isKey = isKey;

            /**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */
            function isObject(value) {
              var type = typeof value;
              return value != null && (type == 'object' || type == 'function');
            }

            var isObject_1 = isObject;

            /** `Object#toString` result references. */
            var asyncTag = '[object AsyncFunction]',
                funcTag = '[object Function]',
                genTag = '[object GeneratorFunction]',
                proxyTag = '[object Proxy]';

            /**
             * Checks if `value` is classified as a `Function` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a function, else `false`.
             * @example
             *
             * _.isFunction(_);
             * // => true
             *
             * _.isFunction(/abc/);
             * // => false
             */
            function isFunction(value) {
              if (!isObject_1(value)) {
                return false;
              }
              // The use of `Object#toString` avoids issues with the `typeof` operator
              // in Safari 9 which returns 'object' for typed arrays and other constructors.
              var tag = _baseGetTag(value);
              return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
            }

            var isFunction_1 = isFunction;

            /** Used to detect overreaching core-js shims. */
            var coreJsData = _root['__core-js_shared__'];

            var _coreJsData = coreJsData;

            /** Used to detect methods masquerading as native. */
            var maskSrcKey = (function() {
              var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
              return uid ? ('Symbol(src)_1.' + uid) : '';
            }());

            /**
             * Checks if `func` has its source masked.
             *
             * @private
             * @param {Function} func The function to check.
             * @returns {boolean} Returns `true` if `func` is masked, else `false`.
             */
            function isMasked(func) {
              return !!maskSrcKey && (maskSrcKey in func);
            }

            var _isMasked = isMasked;

            /** Used for built-in method references. */
            var funcProto = Function.prototype;

            /** Used to resolve the decompiled source of functions. */
            var funcToString = funcProto.toString;

            /**
             * Converts `func` to its source code.
             *
             * @private
             * @param {Function} func The function to convert.
             * @returns {string} Returns the source code.
             */
            function toSource(func) {
              if (func != null) {
                try {
                  return funcToString.call(func);
                } catch (e) {}
                try {
                  return (func + '');
                } catch (e) {}
              }
              return '';
            }

            var _toSource = toSource;

            /**
             * Used to match `RegExp`
             * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
             */
            var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

            /** Used to detect host constructors (Safari). */
            var reIsHostCtor = /^\[object .+?Constructor\]$/;

            /** Used for built-in method references. */
            var funcProto$1 = Function.prototype,
                objectProto$2 = Object.prototype;

            /** Used to resolve the decompiled source of functions. */
            var funcToString$1 = funcProto$1.toString;

            /** Used to check objects for own properties. */
            var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

            /** Used to detect if a method is native. */
            var reIsNative = RegExp('^' +
              funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
            );

            /**
             * The base implementation of `_.isNative` without bad shim checks.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a native function,
             *  else `false`.
             */
            function baseIsNative(value) {
              if (!isObject_1(value) || _isMasked(value)) {
                return false;
              }
              var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
              return pattern.test(_toSource(value));
            }

            var _baseIsNative = baseIsNative;

            /**
             * Gets the value at `key` of `object`.
             *
             * @private
             * @param {Object} [object] The object to query.
             * @param {string} key The key of the property to get.
             * @returns {*} Returns the property value.
             */
            function getValue(object, key) {
              return object == null ? undefined : object[key];
            }

            var _getValue = getValue;

            /**
             * Gets the native function at `key` of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {string} key The key of the method to get.
             * @returns {*} Returns the function if it's native, else `undefined`.
             */
            function getNative(object, key) {
              var value = _getValue(object, key);
              return _baseIsNative(value) ? value : undefined;
            }

            var _getNative = getNative;

            /* Built-in method references that are verified to be native. */
            var nativeCreate = _getNative(Object, 'create');

            var _nativeCreate = nativeCreate;

            /**
             * Removes all key-value entries from the hash.
             *
             * @private
             * @name clear
             * @memberOf Hash
             */
            function hashClear() {
              this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
              this.size = 0;
            }

            var _hashClear = hashClear;

            /**
             * Removes `key` and its value from the hash.
             *
             * @private
             * @name delete
             * @memberOf Hash
             * @param {Object} hash The hash to modify.
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function hashDelete(key) {
              var result = this.has(key) && delete this.__data__[key];
              this.size -= result ? 1 : 0;
              return result;
            }

            var _hashDelete = hashDelete;

            /** Used to stand-in for `undefined` hash values. */
            var HASH_UNDEFINED = '__lodash_hash_undefined__';

            /** Used for built-in method references. */
            var objectProto$3 = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

            /**
             * Gets the hash value for `key`.
             *
             * @private
             * @name get
             * @memberOf Hash
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function hashGet(key) {
              var data = this.__data__;
              if (_nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? undefined : result;
              }
              return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
            }

            var _hashGet = hashGet;

            /** Used for built-in method references. */
            var objectProto$4 = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

            /**
             * Checks if a hash value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf Hash
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function hashHas(key) {
              var data = this.__data__;
              return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
            }

            var _hashHas = hashHas;

            /** Used to stand-in for `undefined` hash values. */
            var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

            /**
             * Sets the hash `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf Hash
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the hash instance.
             */
            function hashSet(key, value) {
              var data = this.__data__;
              this.size += this.has(key) ? 0 : 1;
              data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
              return this;
            }

            var _hashSet = hashSet;

            /**
             * Creates a hash object.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function Hash(entries) {
              var index = -1,
                  length = entries == null ? 0 : entries.length;

              this.clear();
              while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
              }
            }

            // Add methods to `Hash`.
            Hash.prototype.clear = _hashClear;
            Hash.prototype['delete'] = _hashDelete;
            Hash.prototype.get = _hashGet;
            Hash.prototype.has = _hashHas;
            Hash.prototype.set = _hashSet;

            var _Hash = Hash;

            /**
             * Removes all key-value entries from the list cache.
             *
             * @private
             * @name clear
             * @memberOf ListCache
             */
            function listCacheClear() {
              this.__data__ = [];
              this.size = 0;
            }

            var _listCacheClear = listCacheClear;

            /**
             * Performs a
             * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
             * comparison between two values to determine if they are equivalent.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to compare.
             * @param {*} other The other value to compare.
             * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
             * @example
             *
             * var object = { 'a': 1 };
             * var other = { 'a': 1 };
             *
             * _.eq(object, object);
             * // => true
             *
             * _.eq(object, other);
             * // => false
             *
             * _.eq('a', 'a');
             * // => true
             *
             * _.eq('a', Object('a'));
             * // => false
             *
             * _.eq(NaN, NaN);
             * // => true
             */
            function eq(value, other) {
              return value === other || (value !== value && other !== other);
            }

            var eq_1 = eq;

            /**
             * Gets the index at which the `key` is found in `array` of key-value pairs.
             *
             * @private
             * @param {Array} array The array to inspect.
             * @param {*} key The key to search for.
             * @returns {number} Returns the index of the matched value, else `-1`.
             */
            function assocIndexOf(array, key) {
              var length = array.length;
              while (length--) {
                if (eq_1(array[length][0], key)) {
                  return length;
                }
              }
              return -1;
            }

            var _assocIndexOf = assocIndexOf;

            /** Used for built-in method references. */
            var arrayProto = Array.prototype;

            /** Built-in value references. */
            var splice = arrayProto.splice;

            /**
             * Removes `key` and its value from the list cache.
             *
             * @private
             * @name delete
             * @memberOf ListCache
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function listCacheDelete(key) {
              var data = this.__data__,
                  index = _assocIndexOf(data, key);

              if (index < 0) {
                return false;
              }
              var lastIndex = data.length - 1;
              if (index == lastIndex) {
                data.pop();
              } else {
                splice.call(data, index, 1);
              }
              --this.size;
              return true;
            }

            var _listCacheDelete = listCacheDelete;

            /**
             * Gets the list cache value for `key`.
             *
             * @private
             * @name get
             * @memberOf ListCache
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function listCacheGet(key) {
              var data = this.__data__,
                  index = _assocIndexOf(data, key);

              return index < 0 ? undefined : data[index][1];
            }

            var _listCacheGet = listCacheGet;

            /**
             * Checks if a list cache value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf ListCache
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function listCacheHas(key) {
              return _assocIndexOf(this.__data__, key) > -1;
            }

            var _listCacheHas = listCacheHas;

            /**
             * Sets the list cache `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf ListCache
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the list cache instance.
             */
            function listCacheSet(key, value) {
              var data = this.__data__,
                  index = _assocIndexOf(data, key);

              if (index < 0) {
                ++this.size;
                data.push([key, value]);
              } else {
                data[index][1] = value;
              }
              return this;
            }

            var _listCacheSet = listCacheSet;

            /**
             * Creates an list cache object.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function ListCache(entries) {
              var index = -1,
                  length = entries == null ? 0 : entries.length;

              this.clear();
              while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
              }
            }

            // Add methods to `ListCache`.
            ListCache.prototype.clear = _listCacheClear;
            ListCache.prototype['delete'] = _listCacheDelete;
            ListCache.prototype.get = _listCacheGet;
            ListCache.prototype.has = _listCacheHas;
            ListCache.prototype.set = _listCacheSet;

            var _ListCache = ListCache;

            /* Built-in method references that are verified to be native. */
            var Map$1 = _getNative(_root, 'Map');

            var _Map = Map$1;

            /**
             * Removes all key-value entries from the map.
             *
             * @private
             * @name clear
             * @memberOf MapCache
             */
            function mapCacheClear() {
              this.size = 0;
              this.__data__ = {
                'hash': new _Hash,
                'map': new (_Map || _ListCache),
                'string': new _Hash
              };
            }

            var _mapCacheClear = mapCacheClear;

            /**
             * Checks if `value` is suitable for use as unique object key.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
             */
            function isKeyable(value) {
              var type = typeof value;
              return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
                ? (value !== '__proto__')
                : (value === null);
            }

            var _isKeyable = isKeyable;

            /**
             * Gets the data for `map`.
             *
             * @private
             * @param {Object} map The map to query.
             * @param {string} key The reference key.
             * @returns {*} Returns the map data.
             */
            function getMapData(map, key) {
              var data = map.__data__;
              return _isKeyable(key)
                ? data[typeof key == 'string' ? 'string' : 'hash']
                : data.map;
            }

            var _getMapData = getMapData;

            /**
             * Removes `key` and its value from the map.
             *
             * @private
             * @name delete
             * @memberOf MapCache
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function mapCacheDelete(key) {
              var result = _getMapData(this, key)['delete'](key);
              this.size -= result ? 1 : 0;
              return result;
            }

            var _mapCacheDelete = mapCacheDelete;

            /**
             * Gets the map value for `key`.
             *
             * @private
             * @name get
             * @memberOf MapCache
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function mapCacheGet(key) {
              return _getMapData(this, key).get(key);
            }

            var _mapCacheGet = mapCacheGet;

            /**
             * Checks if a map value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf MapCache
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function mapCacheHas(key) {
              return _getMapData(this, key).has(key);
            }

            var _mapCacheHas = mapCacheHas;

            /**
             * Sets the map `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf MapCache
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the map cache instance.
             */
            function mapCacheSet(key, value) {
              var data = _getMapData(this, key),
                  size = data.size;

              data.set(key, value);
              this.size += data.size == size ? 0 : 1;
              return this;
            }

            var _mapCacheSet = mapCacheSet;

            /**
             * Creates a map cache object to store key-value pairs.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function MapCache(entries) {
              var index = -1,
                  length = entries == null ? 0 : entries.length;

              this.clear();
              while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
              }
            }

            // Add methods to `MapCache`.
            MapCache.prototype.clear = _mapCacheClear;
            MapCache.prototype['delete'] = _mapCacheDelete;
            MapCache.prototype.get = _mapCacheGet;
            MapCache.prototype.has = _mapCacheHas;
            MapCache.prototype.set = _mapCacheSet;

            var _MapCache = MapCache;

            /** Error message constants. */
            var FUNC_ERROR_TEXT = 'Expected a function';

            /**
             * Creates a function that memoizes the result of `func`. If `resolver` is
             * provided, it determines the cache key for storing the result based on the
             * arguments provided to the memoized function. By default, the first argument
             * provided to the memoized function is used as the map cache key. The `func`
             * is invoked with the `this` binding of the memoized function.
             *
             * **Note:** The cache is exposed as the `cache` property on the memoized
             * function. Its creation may be customized by replacing the `_.memoize.Cache`
             * constructor with one whose instances implement the
             * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
             * method interface of `clear`, `delete`, `get`, `has`, and `set`.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Function
             * @param {Function} func The function to have its output memoized.
             * @param {Function} [resolver] The function to resolve the cache key.
             * @returns {Function} Returns the new memoized function.
             * @example
             *
             * var object = { 'a': 1, 'b': 2 };
             * var other = { 'c': 3, 'd': 4 };
             *
             * var values = _.memoize(_.values);
             * values(object);
             * // => [1, 2]
             *
             * values(other);
             * // => [3, 4]
             *
             * object.a = 2;
             * values(object);
             * // => [1, 2]
             *
             * // Modify the result cache.
             * values.cache.set(object, ['a', 'b']);
             * values(object);
             * // => ['a', 'b']
             *
             * // Replace `_.memoize.Cache`.
             * _.memoize.Cache = WeakMap;
             */
            function memoize(func, resolver) {
              if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              var memoized = function() {
                var args = arguments,
                    key = resolver ? resolver.apply(this, args) : args[0],
                    cache = memoized.cache;

                if (cache.has(key)) {
                  return cache.get(key);
                }
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result) || cache;
                return result;
              };
              memoized.cache = new (memoize.Cache || _MapCache);
              return memoized;
            }

            // Expose `MapCache`.
            memoize.Cache = _MapCache;

            var memoize_1 = memoize;

            /** Used as the maximum memoize cache size. */
            var MAX_MEMOIZE_SIZE = 500;

            /**
             * A specialized version of `_.memoize` which clears the memoized function's
             * cache when it exceeds `MAX_MEMOIZE_SIZE`.
             *
             * @private
             * @param {Function} func The function to have its output memoized.
             * @returns {Function} Returns the new memoized function.
             */
            function memoizeCapped(func) {
              var result = memoize_1(func, function(key) {
                if (cache.size === MAX_MEMOIZE_SIZE) {
                  cache.clear();
                }
                return key;
              });

              var cache = result.cache;
              return result;
            }

            var _memoizeCapped = memoizeCapped;

            /** Used to match property names within property paths. */
            var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

            /** Used to match backslashes in property paths. */
            var reEscapeChar = /\\(\\)?/g;

            /**
             * Converts `string` to a property path array.
             *
             * @private
             * @param {string} string The string to convert.
             * @returns {Array} Returns the property path array.
             */
            var stringToPath = _memoizeCapped(function(string) {
              var result = [];
              if (string.charCodeAt(0) === 46 /* . */) {
                result.push('');
              }
              string.replace(rePropName, function(match, number, quote, subString) {
                result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
              });
              return result;
            });

            var _stringToPath = stringToPath;

            /**
             * A specialized version of `_.map` for arrays without support for iteratee
             * shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns the new mapped array.
             */
            function arrayMap(array, iteratee) {
              var index = -1,
                  length = array == null ? 0 : array.length,
                  result = Array(length);

              while (++index < length) {
                result[index] = iteratee(array[index], index, array);
              }
              return result;
            }

            var _arrayMap = arrayMap;

            /** Used as references for various `Number` constants. */
            var INFINITY = 1 / 0;

            /** Used to convert symbols to primitives and strings. */
            var symbolProto = _Symbol ? _Symbol.prototype : undefined,
                symbolToString = symbolProto ? symbolProto.toString : undefined;

            /**
             * The base implementation of `_.toString` which doesn't convert nullish
             * values to empty strings.
             *
             * @private
             * @param {*} value The value to process.
             * @returns {string} Returns the string.
             */
            function baseToString(value) {
              // Exit early for strings to avoid a performance hit in some environments.
              if (typeof value == 'string') {
                return value;
              }
              if (isArray_1(value)) {
                // Recursively convert values (susceptible to call stack limits).
                return _arrayMap(value, baseToString) + '';
              }
              if (isSymbol_1(value)) {
                return symbolToString ? symbolToString.call(value) : '';
              }
              var result = (value + '');
              return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
            }

            var _baseToString = baseToString;

            /**
             * Converts `value` to a string. An empty string is returned for `null`
             * and `undefined` values. The sign of `-0` is preserved.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to convert.
             * @returns {string} Returns the converted string.
             * @example
             *
             * _.toString(null);
             * // => ''
             *
             * _.toString(-0);
             * // => '-0'
             *
             * _.toString([1, 2, 3]);
             * // => '1,2,3'
             */
            function toString(value) {
              return value == null ? '' : _baseToString(value);
            }

            var toString_1 = toString;

            /**
             * Casts `value` to a path array if it's not one.
             *
             * @private
             * @param {*} value The value to inspect.
             * @param {Object} [object] The object to query keys on.
             * @returns {Array} Returns the cast property path array.
             */
            function castPath(value, object) {
              if (isArray_1(value)) {
                return value;
              }
              return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
            }

            var _castPath = castPath;

            /** Used as references for various `Number` constants. */
            var INFINITY$1 = 1 / 0;

            /**
             * Converts `value` to a string key if it's not a string or symbol.
             *
             * @private
             * @param {*} value The value to inspect.
             * @returns {string|symbol} Returns the key.
             */
            function toKey(value) {
              if (typeof value == 'string' || isSymbol_1(value)) {
                return value;
              }
              var result = (value + '');
              return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
            }

            var _toKey = toKey;

            /**
             * The base implementation of `_.get` without support for default values.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {Array|string} path The path of the property to get.
             * @returns {*} Returns the resolved value.
             */
            function baseGet(object, path) {
              path = _castPath(path, object);

              var index = 0,
                  length = path.length;

              while (object != null && index < length) {
                object = object[_toKey(path[index++])];
              }
              return (index && index == length) ? object : undefined;
            }

            var _baseGet = baseGet;

            /**
             * Gets the value at `path` of `object`. If the resolved value is
             * `undefined`, the `defaultValue` is returned in its place.
             *
             * @static
             * @memberOf _
             * @since 3.7.0
             * @category Object
             * @param {Object} object The object to query.
             * @param {Array|string} path The path of the property to get.
             * @param {*} [defaultValue] The value returned for `undefined` resolved values.
             * @returns {*} Returns the resolved value.
             * @example
             *
             * var object = { 'a': [{ 'b': { 'c': 3 } }] };
             *
             * _.get(object, 'a[0].b.c');
             * // => 3
             *
             * _.get(object, ['a', '0', 'b', 'c']);
             * // => 3
             *
             * _.get(object, 'a.b.c', 'default');
             * // => 'default'
             */
            function get(object, path, defaultValue) {
              var result = object == null ? undefined : _baseGet(object, path);
              return result === undefined ? defaultValue : result;
            }

            var get_1 = get;

            var defineProperty = (function() {
              try {
                var func = _getNative(Object, 'defineProperty');
                func({}, '', {});
                return func;
              } catch (e) {}
            }());

            var _defineProperty$1 = defineProperty;

            /**
             * The base implementation of `assignValue` and `assignMergeValue` without
             * value checks.
             *
             * @private
             * @param {Object} object The object to modify.
             * @param {string} key The key of the property to assign.
             * @param {*} value The value to assign.
             */
            function baseAssignValue(object, key, value) {
              if (key == '__proto__' && _defineProperty$1) {
                _defineProperty$1(object, key, {
                  'configurable': true,
                  'enumerable': true,
                  'value': value,
                  'writable': true
                });
              } else {
                object[key] = value;
              }
            }

            var _baseAssignValue = baseAssignValue;

            /**
             * Creates a base function for methods like `_.forIn` and `_.forOwn`.
             *
             * @private
             * @param {boolean} [fromRight] Specify iterating from right to left.
             * @returns {Function} Returns the new base function.
             */
            function createBaseFor(fromRight) {
              return function(object, iteratee, keysFunc) {
                var index = -1,
                    iterable = Object(object),
                    props = keysFunc(object),
                    length = props.length;

                while (length--) {
                  var key = props[fromRight ? length : ++index];
                  if (iteratee(iterable[key], key, iterable) === false) {
                    break;
                  }
                }
                return object;
              };
            }

            var _createBaseFor = createBaseFor;

            /**
             * The base implementation of `baseForOwn` which iterates over `object`
             * properties returned by `keysFunc` and invokes `iteratee` for each property.
             * Iteratee functions may exit iteration early by explicitly returning `false`.
             *
             * @private
             * @param {Object} object The object to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @param {Function} keysFunc The function to get the keys of `object`.
             * @returns {Object} Returns `object`.
             */
            var baseFor = _createBaseFor();

            var _baseFor = baseFor;

            /**
             * The base implementation of `_.times` without support for iteratee shorthands
             * or max array length checks.
             *
             * @private
             * @param {number} n The number of times to invoke `iteratee`.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns the array of results.
             */
            function baseTimes(n, iteratee) {
              var index = -1,
                  result = Array(n);

              while (++index < n) {
                result[index] = iteratee(index);
              }
              return result;
            }

            var _baseTimes = baseTimes;

            /** `Object#toString` result references. */
            var argsTag = '[object Arguments]';

            /**
             * The base implementation of `_.isArguments`.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an `arguments` object,
             */
            function baseIsArguments(value) {
              return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
            }

            var _baseIsArguments = baseIsArguments;

            /** Used for built-in method references. */
            var objectProto$5 = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

            /** Built-in value references. */
            var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

            /**
             * Checks if `value` is likely an `arguments` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an `arguments` object,
             *  else `false`.
             * @example
             *
             * _.isArguments(function() { return arguments; }());
             * // => true
             *
             * _.isArguments([1, 2, 3]);
             * // => false
             */
            var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
              return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
                !propertyIsEnumerable.call(value, 'callee');
            };

            var isArguments_1 = isArguments;

            /**
             * This method returns `false`.
             *
             * @static
             * @memberOf _
             * @since 4.13.0
             * @category Util
             * @returns {boolean} Returns `false`.
             * @example
             *
             * _.times(2, _.stubFalse);
             * // => [false, false]
             */
            function stubFalse() {
              return false;
            }

            var stubFalse_1 = stubFalse;

            var isBuffer_1 = createCommonjsModule(function (module, exports) {
            /** Detect free variable `exports`. */
            var freeExports =  exports && !exports.nodeType && exports;

            /** Detect free variable `module`. */
            var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

            /** Detect the popular CommonJS extension `module.exports`. */
            var moduleExports = freeModule && freeModule.exports === freeExports;

            /** Built-in value references. */
            var Buffer = moduleExports ? _root.Buffer : undefined;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

            /**
             * Checks if `value` is a buffer.
             *
             * @static
             * @memberOf _
             * @since 4.3.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
             * @example
             *
             * _.isBuffer(new Buffer(2));
             * // => true
             *
             * _.isBuffer(new Uint8Array(2));
             * // => false
             */
            var isBuffer = nativeIsBuffer || stubFalse_1;

            module.exports = isBuffer;
            });

            /** Used as references for various `Number` constants. */
            var MAX_SAFE_INTEGER = 9007199254740991;

            /** Used to detect unsigned integer values. */
            var reIsUint = /^(?:0|[1-9]\d*)$/;

            /**
             * Checks if `value` is a valid array-like index.
             *
             * @private
             * @param {*} value The value to check.
             * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
             * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
             */
            function isIndex(value, length) {
              var type = typeof value;
              length = length == null ? MAX_SAFE_INTEGER : length;

              return !!length &&
                (type == 'number' ||
                  (type != 'symbol' && reIsUint.test(value))) &&
                    (value > -1 && value % 1 == 0 && value < length);
            }

            var _isIndex = isIndex;

            /** Used as references for various `Number` constants. */
            var MAX_SAFE_INTEGER$1 = 9007199254740991;

            /**
             * Checks if `value` is a valid array-like length.
             *
             * **Note:** This method is loosely based on
             * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
             * @example
             *
             * _.isLength(3);
             * // => true
             *
             * _.isLength(Number.MIN_VALUE);
             * // => false
             *
             * _.isLength(Infinity);
             * // => false
             *
             * _.isLength('3');
             * // => false
             */
            function isLength(value) {
              return typeof value == 'number' &&
                value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
            }

            var isLength_1 = isLength;

            /** `Object#toString` result references. */
            var argsTag$1 = '[object Arguments]',
                arrayTag = '[object Array]',
                boolTag = '[object Boolean]',
                dateTag = '[object Date]',
                errorTag = '[object Error]',
                funcTag$1 = '[object Function]',
                mapTag = '[object Map]',
                numberTag = '[object Number]',
                objectTag = '[object Object]',
                regexpTag = '[object RegExp]',
                setTag = '[object Set]',
                stringTag = '[object String]',
                weakMapTag = '[object WeakMap]';

            var arrayBufferTag = '[object ArrayBuffer]',
                dataViewTag = '[object DataView]',
                float32Tag = '[object Float32Array]',
                float64Tag = '[object Float64Array]',
                int8Tag = '[object Int8Array]',
                int16Tag = '[object Int16Array]',
                int32Tag = '[object Int32Array]',
                uint8Tag = '[object Uint8Array]',
                uint8ClampedTag = '[object Uint8ClampedArray]',
                uint16Tag = '[object Uint16Array]',
                uint32Tag = '[object Uint32Array]';

            /** Used to identify `toStringTag` values of typed arrays. */
            var typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
            typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
            typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
            typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
            typedArrayTags[uint32Tag] = true;
            typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
            typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
            typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
            typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
            typedArrayTags[mapTag] = typedArrayTags[numberTag] =
            typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
            typedArrayTags[setTag] = typedArrayTags[stringTag] =
            typedArrayTags[weakMapTag] = false;

            /**
             * The base implementation of `_.isTypedArray` without Node.js optimizations.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
             */
            function baseIsTypedArray(value) {
              return isObjectLike_1(value) &&
                isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
            }

            var _baseIsTypedArray = baseIsTypedArray;

            /**
             * The base implementation of `_.unary` without support for storing metadata.
             *
             * @private
             * @param {Function} func The function to cap arguments for.
             * @returns {Function} Returns the new capped function.
             */
            function baseUnary(func) {
              return function(value) {
                return func(value);
              };
            }

            var _baseUnary = baseUnary;

            var _nodeUtil = createCommonjsModule(function (module, exports) {
            /** Detect free variable `exports`. */
            var freeExports =  exports && !exports.nodeType && exports;

            /** Detect free variable `module`. */
            var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

            /** Detect the popular CommonJS extension `module.exports`. */
            var moduleExports = freeModule && freeModule.exports === freeExports;

            /** Detect free variable `process` from Node.js. */
            var freeProcess = moduleExports && _freeGlobal.process;

            /** Used to access faster Node.js helpers. */
            var nodeUtil = (function() {
              try {
                // Use `util.types` for Node.js 10+.
                var types = freeModule && freeModule.require && freeModule.require('util').types;

                if (types) {
                  return types;
                }

                // Legacy `process.binding('util')` for Node.js < 10.
                return freeProcess && freeProcess.binding && freeProcess.binding('util');
              } catch (e) {}
            }());

            module.exports = nodeUtil;
            });

            /* Node.js helper references. */
            var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

            /**
             * Checks if `value` is classified as a typed array.
             *
             * @static
             * @memberOf _
             * @since 3.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
             * @example
             *
             * _.isTypedArray(new Uint8Array);
             * // => true
             *
             * _.isTypedArray([]);
             * // => false
             */
            var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

            var isTypedArray_1 = isTypedArray;

            /** Used for built-in method references. */
            var objectProto$6 = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

            /**
             * Creates an array of the enumerable property names of the array-like `value`.
             *
             * @private
             * @param {*} value The value to query.
             * @param {boolean} inherited Specify returning inherited property names.
             * @returns {Array} Returns the array of property names.
             */
            function arrayLikeKeys(value, inherited) {
              var isArr = isArray_1(value),
                  isArg = !isArr && isArguments_1(value),
                  isBuff = !isArr && !isArg && isBuffer_1(value),
                  isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
                  skipIndexes = isArr || isArg || isBuff || isType,
                  result = skipIndexes ? _baseTimes(value.length, String) : [],
                  length = result.length;

              for (var key in value) {
                if ((inherited || hasOwnProperty$5.call(value, key)) &&
                    !(skipIndexes && (
                       // Safari 9 has enumerable `arguments.length` in strict mode.
                       key == 'length' ||
                       // Node.js 0.10 has enumerable non-index properties on buffers.
                       (isBuff && (key == 'offset' || key == 'parent')) ||
                       // PhantomJS 2 has enumerable non-index properties on typed arrays.
                       (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                       // Skip index properties.
                       _isIndex(key, length)
                    ))) {
                  result.push(key);
                }
              }
              return result;
            }

            var _arrayLikeKeys = arrayLikeKeys;

            /** Used for built-in method references. */
            var objectProto$7 = Object.prototype;

            /**
             * Checks if `value` is likely a prototype object.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
             */
            function isPrototype(value) {
              var Ctor = value && value.constructor,
                  proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$7;

              return value === proto;
            }

            var _isPrototype = isPrototype;

            /**
             * Creates a unary function that invokes `func` with its argument transformed.
             *
             * @private
             * @param {Function} func The function to wrap.
             * @param {Function} transform The argument transform.
             * @returns {Function} Returns the new function.
             */
            function overArg(func, transform) {
              return function(arg) {
                return func(transform(arg));
              };
            }

            var _overArg = overArg;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeKeys = _overArg(Object.keys, Object);

            var _nativeKeys = nativeKeys;

            /** Used for built-in method references. */
            var objectProto$8 = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

            /**
             * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             */
            function baseKeys(object) {
              if (!_isPrototype(object)) {
                return _nativeKeys(object);
              }
              var result = [];
              for (var key in Object(object)) {
                if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
                  result.push(key);
                }
              }
              return result;
            }

            var _baseKeys = baseKeys;

            /**
             * Checks if `value` is array-like. A value is considered array-like if it's
             * not a function and has a `value.length` that's an integer greater than or
             * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
             * @example
             *
             * _.isArrayLike([1, 2, 3]);
             * // => true
             *
             * _.isArrayLike(document.body.children);
             * // => true
             *
             * _.isArrayLike('abc');
             * // => true
             *
             * _.isArrayLike(_.noop);
             * // => false
             */
            function isArrayLike(value) {
              return value != null && isLength_1(value.length) && !isFunction_1(value);
            }

            var isArrayLike_1 = isArrayLike;

            /**
             * Creates an array of the own enumerable property names of `object`.
             *
             * **Note:** Non-object values are coerced to objects. See the
             * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
             * for more details.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Object
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             * @example
             *
             * function Foo() {
             *   this.a = 1;
             *   this.b = 2;
             * }
             *
             * Foo.prototype.c = 3;
             *
             * _.keys(new Foo);
             * // => ['a', 'b'] (iteration order is not guaranteed)
             *
             * _.keys('hi');
             * // => ['0', '1']
             */
            function keys(object) {
              return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
            }

            var keys_1 = keys;

            /**
             * The base implementation of `_.forOwn` without support for iteratee shorthands.
             *
             * @private
             * @param {Object} object The object to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Object} Returns `object`.
             */
            function baseForOwn(object, iteratee) {
              return object && _baseFor(object, iteratee, keys_1);
            }

            var _baseForOwn = baseForOwn;

            /**
             * Removes all key-value entries from the stack.
             *
             * @private
             * @name clear
             * @memberOf Stack
             */
            function stackClear() {
              this.__data__ = new _ListCache;
              this.size = 0;
            }

            var _stackClear = stackClear;

            /**
             * Removes `key` and its value from the stack.
             *
             * @private
             * @name delete
             * @memberOf Stack
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function stackDelete(key) {
              var data = this.__data__,
                  result = data['delete'](key);

              this.size = data.size;
              return result;
            }

            var _stackDelete = stackDelete;

            /**
             * Gets the stack value for `key`.
             *
             * @private
             * @name get
             * @memberOf Stack
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function stackGet(key) {
              return this.__data__.get(key);
            }

            var _stackGet = stackGet;

            /**
             * Checks if a stack value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf Stack
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function stackHas(key) {
              return this.__data__.has(key);
            }

            var _stackHas = stackHas;

            /** Used as the size to enable large array optimizations. */
            var LARGE_ARRAY_SIZE = 200;

            /**
             * Sets the stack `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf Stack
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the stack cache instance.
             */
            function stackSet(key, value) {
              var data = this.__data__;
              if (data instanceof _ListCache) {
                var pairs = data.__data__;
                if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
                  pairs.push([key, value]);
                  this.size = ++data.size;
                  return this;
                }
                data = this.__data__ = new _MapCache(pairs);
              }
              data.set(key, value);
              this.size = data.size;
              return this;
            }

            var _stackSet = stackSet;

            /**
             * Creates a stack cache object to store key-value pairs.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function Stack(entries) {
              var data = this.__data__ = new _ListCache(entries);
              this.size = data.size;
            }

            // Add methods to `Stack`.
            Stack.prototype.clear = _stackClear;
            Stack.prototype['delete'] = _stackDelete;
            Stack.prototype.get = _stackGet;
            Stack.prototype.has = _stackHas;
            Stack.prototype.set = _stackSet;

            var _Stack = Stack;

            /** Used to stand-in for `undefined` hash values. */
            var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

            /**
             * Adds `value` to the array cache.
             *
             * @private
             * @name add
             * @memberOf SetCache
             * @alias push
             * @param {*} value The value to cache.
             * @returns {Object} Returns the cache instance.
             */
            function setCacheAdd(value) {
              this.__data__.set(value, HASH_UNDEFINED$2);
              return this;
            }

            var _setCacheAdd = setCacheAdd;

            /**
             * Checks if `value` is in the array cache.
             *
             * @private
             * @name has
             * @memberOf SetCache
             * @param {*} value The value to search for.
             * @returns {number} Returns `true` if `value` is found, else `false`.
             */
            function setCacheHas(value) {
              return this.__data__.has(value);
            }

            var _setCacheHas = setCacheHas;

            /**
             *
             * Creates an array cache object to store unique values.
             *
             * @private
             * @constructor
             * @param {Array} [values] The values to cache.
             */
            function SetCache(values) {
              var index = -1,
                  length = values == null ? 0 : values.length;

              this.__data__ = new _MapCache;
              while (++index < length) {
                this.add(values[index]);
              }
            }

            // Add methods to `SetCache`.
            SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
            SetCache.prototype.has = _setCacheHas;

            var _SetCache = SetCache;

            /**
             * A specialized version of `_.some` for arrays without support for iteratee
             * shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} predicate The function invoked per iteration.
             * @returns {boolean} Returns `true` if any element passes the predicate check,
             *  else `false`.
             */
            function arraySome(array, predicate) {
              var index = -1,
                  length = array == null ? 0 : array.length;

              while (++index < length) {
                if (predicate(array[index], index, array)) {
                  return true;
                }
              }
              return false;
            }

            var _arraySome = arraySome;

            /**
             * Checks if a `cache` value for `key` exists.
             *
             * @private
             * @param {Object} cache The cache to query.
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function cacheHas(cache, key) {
              return cache.has(key);
            }

            var _cacheHas = cacheHas;

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG = 1,
                COMPARE_UNORDERED_FLAG = 2;

            /**
             * A specialized version of `baseIsEqualDeep` for arrays with support for
             * partial deep comparisons.
             *
             * @private
             * @param {Array} array The array to compare.
             * @param {Array} other The other array to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} stack Tracks traversed `array` and `other` objects.
             * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
             */
            function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                  arrLength = array.length,
                  othLength = other.length;

              if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                return false;
              }
              // Assume cyclic values are equal.
              var stacked = stack.get(array);
              if (stacked && stack.get(other)) {
                return stacked == other;
              }
              var index = -1,
                  result = true,
                  seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

              stack.set(array, other);
              stack.set(other, array);

              // Ignore non-index properties.
              while (++index < arrLength) {
                var arrValue = array[index],
                    othValue = other[index];

                if (customizer) {
                  var compared = isPartial
                    ? customizer(othValue, arrValue, index, other, array, stack)
                    : customizer(arrValue, othValue, index, array, other, stack);
                }
                if (compared !== undefined) {
                  if (compared) {
                    continue;
                  }
                  result = false;
                  break;
                }
                // Recursively compare arrays (susceptible to call stack limits).
                if (seen) {
                  if (!_arraySome(other, function(othValue, othIndex) {
                        if (!_cacheHas(seen, othIndex) &&
                            (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                          return seen.push(othIndex);
                        }
                      })) {
                    result = false;
                    break;
                  }
                } else if (!(
                      arrValue === othValue ||
                        equalFunc(arrValue, othValue, bitmask, customizer, stack)
                    )) {
                  result = false;
                  break;
                }
              }
              stack['delete'](array);
              stack['delete'](other);
              return result;
            }

            var _equalArrays = equalArrays;

            /** Built-in value references. */
            var Uint8Array = _root.Uint8Array;

            var _Uint8Array = Uint8Array;

            /**
             * Converts `map` to its key-value pairs.
             *
             * @private
             * @param {Object} map The map to convert.
             * @returns {Array} Returns the key-value pairs.
             */
            function mapToArray(map) {
              var index = -1,
                  result = Array(map.size);

              map.forEach(function(value, key) {
                result[++index] = [key, value];
              });
              return result;
            }

            var _mapToArray = mapToArray;

            /**
             * Converts `set` to an array of its values.
             *
             * @private
             * @param {Object} set The set to convert.
             * @returns {Array} Returns the values.
             */
            function setToArray(set) {
              var index = -1,
                  result = Array(set.size);

              set.forEach(function(value) {
                result[++index] = value;
              });
              return result;
            }

            var _setToArray = setToArray;

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG$1 = 1,
                COMPARE_UNORDERED_FLAG$1 = 2;

            /** `Object#toString` result references. */
            var boolTag$1 = '[object Boolean]',
                dateTag$1 = '[object Date]',
                errorTag$1 = '[object Error]',
                mapTag$1 = '[object Map]',
                numberTag$1 = '[object Number]',
                regexpTag$1 = '[object RegExp]',
                setTag$1 = '[object Set]',
                stringTag$1 = '[object String]',
                symbolTag$1 = '[object Symbol]';

            var arrayBufferTag$1 = '[object ArrayBuffer]',
                dataViewTag$1 = '[object DataView]';

            /** Used to convert symbols to primitives and strings. */
            var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
                symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

            /**
             * A specialized version of `baseIsEqualDeep` for comparing objects of
             * the same `toStringTag`.
             *
             * **Note:** This function only supports comparing values with tags of
             * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @param {string} tag The `toStringTag` of the objects to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} stack Tracks traversed `object` and `other` objects.
             * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
             */
            function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
              switch (tag) {
                case dataViewTag$1:
                  if ((object.byteLength != other.byteLength) ||
                      (object.byteOffset != other.byteOffset)) {
                    return false;
                  }
                  object = object.buffer;
                  other = other.buffer;

                case arrayBufferTag$1:
                  if ((object.byteLength != other.byteLength) ||
                      !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
                    return false;
                  }
                  return true;

                case boolTag$1:
                case dateTag$1:
                case numberTag$1:
                  // Coerce booleans to `1` or `0` and dates to milliseconds.
                  // Invalid dates are coerced to `NaN`.
                  return eq_1(+object, +other);

                case errorTag$1:
                  return object.name == other.name && object.message == other.message;

                case regexpTag$1:
                case stringTag$1:
                  // Coerce regexes to strings and treat strings, primitives and objects,
                  // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                  // for more details.
                  return object == (other + '');

                case mapTag$1:
                  var convert = _mapToArray;

                case setTag$1:
                  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
                  convert || (convert = _setToArray);

                  if (object.size != other.size && !isPartial) {
                    return false;
                  }
                  // Assume cyclic values are equal.
                  var stacked = stack.get(object);
                  if (stacked) {
                    return stacked == other;
                  }
                  bitmask |= COMPARE_UNORDERED_FLAG$1;

                  // Recursively compare objects (susceptible to call stack limits).
                  stack.set(object, other);
                  var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                  stack['delete'](object);
                  return result;

                case symbolTag$1:
                  if (symbolValueOf) {
                    return symbolValueOf.call(object) == symbolValueOf.call(other);
                  }
              }
              return false;
            }

            var _equalByTag = equalByTag;

            /**
             * Appends the elements of `values` to `array`.
             *
             * @private
             * @param {Array} array The array to modify.
             * @param {Array} values The values to append.
             * @returns {Array} Returns `array`.
             */
            function arrayPush(array, values) {
              var index = -1,
                  length = values.length,
                  offset = array.length;

              while (++index < length) {
                array[offset + index] = values[index];
              }
              return array;
            }

            var _arrayPush = arrayPush;

            /**
             * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
             * `keysFunc` and `symbolsFunc` to get the enumerable property names and
             * symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {Function} keysFunc The function to get the keys of `object`.
             * @param {Function} symbolsFunc The function to get the symbols of `object`.
             * @returns {Array} Returns the array of property names and symbols.
             */
            function baseGetAllKeys(object, keysFunc, symbolsFunc) {
              var result = keysFunc(object);
              return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
            }

            var _baseGetAllKeys = baseGetAllKeys;

            /**
             * A specialized version of `_.filter` for arrays without support for
             * iteratee shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} predicate The function invoked per iteration.
             * @returns {Array} Returns the new filtered array.
             */
            function arrayFilter(array, predicate) {
              var index = -1,
                  length = array == null ? 0 : array.length,
                  resIndex = 0,
                  result = [];

              while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                  result[resIndex++] = value;
                }
              }
              return result;
            }

            var _arrayFilter = arrayFilter;

            /**
             * This method returns a new empty array.
             *
             * @static
             * @memberOf _
             * @since 4.13.0
             * @category Util
             * @returns {Array} Returns the new empty array.
             * @example
             *
             * var arrays = _.times(2, _.stubArray);
             *
             * console.log(arrays);
             * // => [[], []]
             *
             * console.log(arrays[0] === arrays[1]);
             * // => false
             */
            function stubArray() {
              return [];
            }

            var stubArray_1 = stubArray;

            /** Used for built-in method references. */
            var objectProto$9 = Object.prototype;

            /** Built-in value references. */
            var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeGetSymbols = Object.getOwnPropertySymbols;

            /**
             * Creates an array of the own enumerable symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of symbols.
             */
            var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
              if (object == null) {
                return [];
              }
              object = Object(object);
              return _arrayFilter(nativeGetSymbols(object), function(symbol) {
                return propertyIsEnumerable$1.call(object, symbol);
              });
            };

            var _getSymbols = getSymbols;

            /**
             * Creates an array of own enumerable property names and symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names and symbols.
             */
            function getAllKeys(object) {
              return _baseGetAllKeys(object, keys_1, _getSymbols);
            }

            var _getAllKeys = getAllKeys;

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG$2 = 1;

            /** Used for built-in method references. */
            var objectProto$a = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

            /**
             * A specialized version of `baseIsEqualDeep` for objects with support for
             * partial deep comparisons.
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} stack Tracks traversed `object` and `other` objects.
             * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
             */
            function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
                  objProps = _getAllKeys(object),
                  objLength = objProps.length,
                  othProps = _getAllKeys(other),
                  othLength = othProps.length;

              if (objLength != othLength && !isPartial) {
                return false;
              }
              var index = objLength;
              while (index--) {
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
                  return false;
                }
              }
              // Assume cyclic values are equal.
              var stacked = stack.get(object);
              if (stacked && stack.get(other)) {
                return stacked == other;
              }
              var result = true;
              stack.set(object, other);
              stack.set(other, object);

              var skipCtor = isPartial;
              while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key],
                    othValue = other[key];

                if (customizer) {
                  var compared = isPartial
                    ? customizer(othValue, objValue, key, other, object, stack)
                    : customizer(objValue, othValue, key, object, other, stack);
                }
                // Recursively compare objects (susceptible to call stack limits).
                if (!(compared === undefined
                      ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
                      : compared
                    )) {
                  result = false;
                  break;
                }
                skipCtor || (skipCtor = key == 'constructor');
              }
              if (result && !skipCtor) {
                var objCtor = object.constructor,
                    othCtor = other.constructor;

                // Non `Object` object instances with different constructors are not equal.
                if (objCtor != othCtor &&
                    ('constructor' in object && 'constructor' in other) &&
                    !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
                      typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                  result = false;
                }
              }
              stack['delete'](object);
              stack['delete'](other);
              return result;
            }

            var _equalObjects = equalObjects;

            /* Built-in method references that are verified to be native. */
            var DataView = _getNative(_root, 'DataView');

            var _DataView = DataView;

            /* Built-in method references that are verified to be native. */
            var Promise$1 = _getNative(_root, 'Promise');

            var _Promise = Promise$1;

            /* Built-in method references that are verified to be native. */
            var Set$1 = _getNative(_root, 'Set');

            var _Set = Set$1;

            /* Built-in method references that are verified to be native. */
            var WeakMap$1 = _getNative(_root, 'WeakMap');

            var _WeakMap = WeakMap$1;

            /** `Object#toString` result references. */
            var mapTag$2 = '[object Map]',
                objectTag$1 = '[object Object]',
                promiseTag = '[object Promise]',
                setTag$2 = '[object Set]',
                weakMapTag$1 = '[object WeakMap]';

            var dataViewTag$2 = '[object DataView]';

            /** Used to detect maps, sets, and weakmaps. */
            var dataViewCtorString = _toSource(_DataView),
                mapCtorString = _toSource(_Map),
                promiseCtorString = _toSource(_Promise),
                setCtorString = _toSource(_Set),
                weakMapCtorString = _toSource(_WeakMap);

            /**
             * Gets the `toStringTag` of `value`.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */
            var getTag = _baseGetTag;

            // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
            if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
                (_Map && getTag(new _Map) != mapTag$2) ||
                (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
                (_Set && getTag(new _Set) != setTag$2) ||
                (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
              getTag = function(value) {
                var result = _baseGetTag(value),
                    Ctor = result == objectTag$1 ? value.constructor : undefined,
                    ctorString = Ctor ? _toSource(Ctor) : '';

                if (ctorString) {
                  switch (ctorString) {
                    case dataViewCtorString: return dataViewTag$2;
                    case mapCtorString: return mapTag$2;
                    case promiseCtorString: return promiseTag;
                    case setCtorString: return setTag$2;
                    case weakMapCtorString: return weakMapTag$1;
                  }
                }
                return result;
              };
            }

            var _getTag = getTag;

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG$3 = 1;

            /** `Object#toString` result references. */
            var argsTag$2 = '[object Arguments]',
                arrayTag$1 = '[object Array]',
                objectTag$2 = '[object Object]';

            /** Used for built-in method references. */
            var objectProto$b = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

            /**
             * A specialized version of `baseIsEqual` for arrays and objects which performs
             * deep comparisons and tracks traversed objects enabling objects with circular
             * references to be compared.
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} [stack] Tracks traversed `object` and `other` objects.
             * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
             */
            function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
              var objIsArr = isArray_1(object),
                  othIsArr = isArray_1(other),
                  objTag = objIsArr ? arrayTag$1 : _getTag(object),
                  othTag = othIsArr ? arrayTag$1 : _getTag(other);

              objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
              othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

              var objIsObj = objTag == objectTag$2,
                  othIsObj = othTag == objectTag$2,
                  isSameTag = objTag == othTag;

              if (isSameTag && isBuffer_1(object)) {
                if (!isBuffer_1(other)) {
                  return false;
                }
                objIsArr = true;
                objIsObj = false;
              }
              if (isSameTag && !objIsObj) {
                stack || (stack = new _Stack);
                return (objIsArr || isTypedArray_1(object))
                  ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
                  : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
              }
              if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
                var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
                    othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

                if (objIsWrapped || othIsWrapped) {
                  var objUnwrapped = objIsWrapped ? object.value() : object,
                      othUnwrapped = othIsWrapped ? other.value() : other;

                  stack || (stack = new _Stack);
                  return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                }
              }
              if (!isSameTag) {
                return false;
              }
              stack || (stack = new _Stack);
              return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
            }

            var _baseIsEqualDeep = baseIsEqualDeep;

            /**
             * The base implementation of `_.isEqual` which supports partial comparisons
             * and tracks traversed objects.
             *
             * @private
             * @param {*} value The value to compare.
             * @param {*} other The other value to compare.
             * @param {boolean} bitmask The bitmask flags.
             *  1 - Unordered comparison
             *  2 - Partial comparison
             * @param {Function} [customizer] The function to customize comparisons.
             * @param {Object} [stack] Tracks traversed `value` and `other` objects.
             * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
             */
            function baseIsEqual(value, other, bitmask, customizer, stack) {
              if (value === other) {
                return true;
              }
              if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
                return value !== value && other !== other;
              }
              return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
            }

            var _baseIsEqual = baseIsEqual;

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG$4 = 1,
                COMPARE_UNORDERED_FLAG$2 = 2;

            /**
             * The base implementation of `_.isMatch` without support for iteratee shorthands.
             *
             * @private
             * @param {Object} object The object to inspect.
             * @param {Object} source The object of property values to match.
             * @param {Array} matchData The property names, values, and compare flags to match.
             * @param {Function} [customizer] The function to customize comparisons.
             * @returns {boolean} Returns `true` if `object` is a match, else `false`.
             */
            function baseIsMatch(object, source, matchData, customizer) {
              var index = matchData.length,
                  length = index,
                  noCustomizer = !customizer;

              if (object == null) {
                return !length;
              }
              object = Object(object);
              while (index--) {
                var data = matchData[index];
                if ((noCustomizer && data[2])
                      ? data[1] !== object[data[0]]
                      : !(data[0] in object)
                    ) {
                  return false;
                }
              }
              while (++index < length) {
                data = matchData[index];
                var key = data[0],
                    objValue = object[key],
                    srcValue = data[1];

                if (noCustomizer && data[2]) {
                  if (objValue === undefined && !(key in object)) {
                    return false;
                  }
                } else {
                  var stack = new _Stack;
                  if (customizer) {
                    var result = customizer(objValue, srcValue, key, object, source, stack);
                  }
                  if (!(result === undefined
                        ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
                        : result
                      )) {
                    return false;
                  }
                }
              }
              return true;
            }

            var _baseIsMatch = baseIsMatch;

            /**
             * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` if suitable for strict
             *  equality comparisons, else `false`.
             */
            function isStrictComparable(value) {
              return value === value && !isObject_1(value);
            }

            var _isStrictComparable = isStrictComparable;

            /**
             * Gets the property names, values, and compare flags of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the match data of `object`.
             */
            function getMatchData(object) {
              var result = keys_1(object),
                  length = result.length;

              while (length--) {
                var key = result[length],
                    value = object[key];

                result[length] = [key, value, _isStrictComparable(value)];
              }
              return result;
            }

            var _getMatchData = getMatchData;

            /**
             * A specialized version of `matchesProperty` for source values suitable
             * for strict equality comparisons, i.e. `===`.
             *
             * @private
             * @param {string} key The key of the property to get.
             * @param {*} srcValue The value to match.
             * @returns {Function} Returns the new spec function.
             */
            function matchesStrictComparable(key, srcValue) {
              return function(object) {
                if (object == null) {
                  return false;
                }
                return object[key] === srcValue &&
                  (srcValue !== undefined || (key in Object(object)));
              };
            }

            var _matchesStrictComparable = matchesStrictComparable;

            /**
             * The base implementation of `_.matches` which doesn't clone `source`.
             *
             * @private
             * @param {Object} source The object of property values to match.
             * @returns {Function} Returns the new spec function.
             */
            function baseMatches(source) {
              var matchData = _getMatchData(source);
              if (matchData.length == 1 && matchData[0][2]) {
                return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
              }
              return function(object) {
                return object === source || _baseIsMatch(object, source, matchData);
              };
            }

            var _baseMatches = baseMatches;

            /**
             * The base implementation of `_.hasIn` without support for deep paths.
             *
             * @private
             * @param {Object} [object] The object to query.
             * @param {Array|string} key The key to check.
             * @returns {boolean} Returns `true` if `key` exists, else `false`.
             */
            function baseHasIn(object, key) {
              return object != null && key in Object(object);
            }

            var _baseHasIn = baseHasIn;

            /**
             * Checks if `path` exists on `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {Array|string} path The path to check.
             * @param {Function} hasFunc The function to check properties.
             * @returns {boolean} Returns `true` if `path` exists, else `false`.
             */
            function hasPath(object, path, hasFunc) {
              path = _castPath(path, object);

              var index = -1,
                  length = path.length,
                  result = false;

              while (++index < length) {
                var key = _toKey(path[index]);
                if (!(result = object != null && hasFunc(object, key))) {
                  break;
                }
                object = object[key];
              }
              if (result || ++index != length) {
                return result;
              }
              length = object == null ? 0 : object.length;
              return !!length && isLength_1(length) && _isIndex(key, length) &&
                (isArray_1(object) || isArguments_1(object));
            }

            var _hasPath = hasPath;

            /**
             * Checks if `path` is a direct or inherited property of `object`.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Object
             * @param {Object} object The object to query.
             * @param {Array|string} path The path to check.
             * @returns {boolean} Returns `true` if `path` exists, else `false`.
             * @example
             *
             * var object = _.create({ 'a': _.create({ 'b': 2 }) });
             *
             * _.hasIn(object, 'a');
             * // => true
             *
             * _.hasIn(object, 'a.b');
             * // => true
             *
             * _.hasIn(object, ['a', 'b']);
             * // => true
             *
             * _.hasIn(object, 'b');
             * // => false
             */
            function hasIn(object, path) {
              return object != null && _hasPath(object, path, _baseHasIn);
            }

            var hasIn_1 = hasIn;

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG$5 = 1,
                COMPARE_UNORDERED_FLAG$3 = 2;

            /**
             * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
             *
             * @private
             * @param {string} path The path of the property to get.
             * @param {*} srcValue The value to match.
             * @returns {Function} Returns the new spec function.
             */
            function baseMatchesProperty(path, srcValue) {
              if (_isKey(path) && _isStrictComparable(srcValue)) {
                return _matchesStrictComparable(_toKey(path), srcValue);
              }
              return function(object) {
                var objValue = get_1(object, path);
                return (objValue === undefined && objValue === srcValue)
                  ? hasIn_1(object, path)
                  : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
              };
            }

            var _baseMatchesProperty = baseMatchesProperty;

            /**
             * This method returns the first argument it receives.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Util
             * @param {*} value Any value.
             * @returns {*} Returns `value`.
             * @example
             *
             * var object = { 'a': 1 };
             *
             * console.log(_.identity(object) === object);
             * // => true
             */
            function identity(value) {
              return value;
            }

            var identity_1 = identity;

            /**
             * The base implementation of `_.property` without support for deep paths.
             *
             * @private
             * @param {string} key The key of the property to get.
             * @returns {Function} Returns the new accessor function.
             */
            function baseProperty(key) {
              return function(object) {
                return object == null ? undefined : object[key];
              };
            }

            var _baseProperty = baseProperty;

            /**
             * A specialized version of `baseProperty` which supports deep paths.
             *
             * @private
             * @param {Array|string} path The path of the property to get.
             * @returns {Function} Returns the new accessor function.
             */
            function basePropertyDeep(path) {
              return function(object) {
                return _baseGet(object, path);
              };
            }

            var _basePropertyDeep = basePropertyDeep;

            /**
             * Creates a function that returns the value at `path` of a given object.
             *
             * @static
             * @memberOf _
             * @since 2.4.0
             * @category Util
             * @param {Array|string} path The path of the property to get.
             * @returns {Function} Returns the new accessor function.
             * @example
             *
             * var objects = [
             *   { 'a': { 'b': 2 } },
             *   { 'a': { 'b': 1 } }
             * ];
             *
             * _.map(objects, _.property('a.b'));
             * // => [2, 1]
             *
             * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
             * // => [1, 2]
             */
            function property(path) {
              return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
            }

            var property_1 = property;

            /**
             * The base implementation of `_.iteratee`.
             *
             * @private
             * @param {*} [value=_.identity] The value to convert to an iteratee.
             * @returns {Function} Returns the iteratee.
             */
            function baseIteratee(value) {
              // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
              // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
              if (typeof value == 'function') {
                return value;
              }
              if (value == null) {
                return identity_1;
              }
              if (typeof value == 'object') {
                return isArray_1(value)
                  ? _baseMatchesProperty(value[0], value[1])
                  : _baseMatches(value);
              }
              return property_1(value);
            }

            var _baseIteratee = baseIteratee;

            /**
             * Creates an object with the same keys as `object` and values generated
             * by running each own enumerable string keyed property of `object` thru
             * `iteratee`. The iteratee is invoked with three arguments:
             * (value, key, object).
             *
             * @static
             * @memberOf _
             * @since 2.4.0
             * @category Object
             * @param {Object} object The object to iterate over.
             * @param {Function} [iteratee=_.identity] The function invoked per iteration.
             * @returns {Object} Returns the new mapped object.
             * @see _.mapKeys
             * @example
             *
             * var users = {
             *   'fred':    { 'user': 'fred',    'age': 40 },
             *   'pebbles': { 'user': 'pebbles', 'age': 1 }
             * };
             *
             * _.mapValues(users, function(o) { return o.age; });
             * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
             *
             * // The `_.property` iteratee shorthand.
             * _.mapValues(users, 'age');
             * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
             */
            function mapValues(object, iteratee) {
              var result = {};
              iteratee = _baseIteratee(iteratee);

              _baseForOwn(object, function(value, key, object) {
                _baseAssignValue(result, key, iteratee(value, key, object));
              });
              return result;
            }

            var mapValues_1 = mapValues;

            /** Used for built-in method references. */
            var objectProto$c = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

            /**
             * Assigns `value` to `key` of `object` if the existing value is not equivalent
             * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
             * for equality comparisons.
             *
             * @private
             * @param {Object} object The object to modify.
             * @param {string} key The key of the property to assign.
             * @param {*} value The value to assign.
             */
            function assignValue(object, key, value) {
              var objValue = object[key];
              if (!(hasOwnProperty$9.call(object, key) && eq_1(objValue, value)) ||
                  (value === undefined && !(key in object))) {
                _baseAssignValue(object, key, value);
              }
            }

            var _assignValue = assignValue;

            /**
             * The base implementation of `_.set`.
             *
             * @private
             * @param {Object} object The object to modify.
             * @param {Array|string} path The path of the property to set.
             * @param {*} value The value to set.
             * @param {Function} [customizer] The function to customize path creation.
             * @returns {Object} Returns `object`.
             */
            function baseSet(object, path, value, customizer) {
              if (!isObject_1(object)) {
                return object;
              }
              path = _castPath(path, object);

              var index = -1,
                  length = path.length,
                  lastIndex = length - 1,
                  nested = object;

              while (nested != null && ++index < length) {
                var key = _toKey(path[index]),
                    newValue = value;

                if (index != lastIndex) {
                  var objValue = nested[key];
                  newValue = customizer ? customizer(objValue, key, nested) : undefined;
                  if (newValue === undefined) {
                    newValue = isObject_1(objValue)
                      ? objValue
                      : (_isIndex(path[index + 1]) ? [] : {});
                  }
                }
                _assignValue(nested, key, newValue);
                nested = nested[key];
              }
              return object;
            }

            var _baseSet = baseSet;

            /**
             * The base implementation of  `_.pickBy` without support for iteratee shorthands.
             *
             * @private
             * @param {Object} object The source object.
             * @param {string[]} paths The property paths to pick.
             * @param {Function} predicate The function invoked per property.
             * @returns {Object} Returns the new object.
             */
            function basePickBy(object, paths, predicate) {
              var index = -1,
                  length = paths.length,
                  result = {};

              while (++index < length) {
                var path = paths[index],
                    value = _baseGet(object, path);

                if (predicate(value, path)) {
                  _baseSet(result, _castPath(path, object), value);
                }
              }
              return result;
            }

            var _basePickBy = basePickBy;

            /** Built-in value references. */
            var getPrototype = _overArg(Object.getPrototypeOf, Object);

            var _getPrototype = getPrototype;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

            /**
             * Creates an array of the own and inherited enumerable symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of symbols.
             */
            var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
              var result = [];
              while (object) {
                _arrayPush(result, _getSymbols(object));
                object = _getPrototype(object);
              }
              return result;
            };

            var _getSymbolsIn = getSymbolsIn;

            /**
             * This function is like
             * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
             * except that it includes inherited enumerable properties.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             */
            function nativeKeysIn(object) {
              var result = [];
              if (object != null) {
                for (var key in Object(object)) {
                  result.push(key);
                }
              }
              return result;
            }

            var _nativeKeysIn = nativeKeysIn;

            /** Used for built-in method references. */
            var objectProto$d = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$a = objectProto$d.hasOwnProperty;

            /**
             * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             */
            function baseKeysIn(object) {
              if (!isObject_1(object)) {
                return _nativeKeysIn(object);
              }
              var isProto = _isPrototype(object),
                  result = [];

              for (var key in object) {
                if (!(key == 'constructor' && (isProto || !hasOwnProperty$a.call(object, key)))) {
                  result.push(key);
                }
              }
              return result;
            }

            var _baseKeysIn = baseKeysIn;

            /**
             * Creates an array of the own and inherited enumerable property names of `object`.
             *
             * **Note:** Non-object values are coerced to objects.
             *
             * @static
             * @memberOf _
             * @since 3.0.0
             * @category Object
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             * @example
             *
             * function Foo() {
             *   this.a = 1;
             *   this.b = 2;
             * }
             *
             * Foo.prototype.c = 3;
             *
             * _.keysIn(new Foo);
             * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
             */
            function keysIn$1(object) {
              return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
            }

            var keysIn_1 = keysIn$1;

            /**
             * Creates an array of own and inherited enumerable property names and
             * symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names and symbols.
             */
            function getAllKeysIn(object) {
              return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
            }

            var _getAllKeysIn = getAllKeysIn;

            /**
             * Creates an object composed of the `object` properties `predicate` returns
             * truthy for. The predicate is invoked with two arguments: (value, key).
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Object
             * @param {Object} object The source object.
             * @param {Function} [predicate=_.identity] The function invoked per property.
             * @returns {Object} Returns the new object.
             * @example
             *
             * var object = { 'a': 1, 'b': '2', 'c': 3 };
             *
             * _.pickBy(object, _.isNumber);
             * // => { 'a': 1, 'c': 3 }
             */
            function pickBy(object, predicate) {
              if (object == null) {
                return {};
              }
              var props = _arrayMap(_getAllKeysIn(object), function(prop) {
                return [prop];
              });
              predicate = _baseIteratee(predicate);
              return _basePickBy(object, props, function(value, path) {
                return predicate(value, path[0]);
              });
            }

            var pickBy_1 = pickBy;

            /** `Object#toString` result references. */
            var mapTag$3 = '[object Map]',
                setTag$3 = '[object Set]';

            /** Used for built-in method references. */
            var objectProto$e = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$b = objectProto$e.hasOwnProperty;

            /**
             * Checks if `value` is an empty object, collection, map, or set.
             *
             * Objects are considered empty if they have no own enumerable string keyed
             * properties.
             *
             * Array-like values such as `arguments` objects, arrays, buffers, strings, or
             * jQuery-like collections are considered empty if they have a `length` of `0`.
             * Similarly, maps and sets are considered empty if they have a `size` of `0`.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is empty, else `false`.
             * @example
             *
             * _.isEmpty(null);
             * // => true
             *
             * _.isEmpty(true);
             * // => true
             *
             * _.isEmpty(1);
             * // => true
             *
             * _.isEmpty([1, 2, 3]);
             * // => false
             *
             * _.isEmpty({ 'a': 1 });
             * // => false
             */
            function isEmpty(value) {
              if (value == null) {
                return true;
              }
              if (isArrayLike_1(value) &&
                  (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
                    isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
                return !value.length;
              }
              var tag = _getTag(value);
              if (tag == mapTag$3 || tag == setTag$3) {
                return !value.size;
              }
              if (_isPrototype(value)) {
                return !_baseKeys(value).length;
              }
              for (var key in value) {
                if (hasOwnProperty$b.call(value, key)) {
                  return false;
                }
              }
              return true;
            }

            var isEmpty_1 = isEmpty;

            /**
             * A specialized version of `_.forEach` for arrays without support for
             * iteratee shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns `array`.
             */
            function arrayEach(array, iteratee) {
              var index = -1,
                  length = array == null ? 0 : array.length;

              while (++index < length) {
                if (iteratee(array[index], index, array) === false) {
                  break;
                }
              }
              return array;
            }

            var _arrayEach = arrayEach;

            /**
             * Copies properties of `source` to `object`.
             *
             * @private
             * @param {Object} source The object to copy properties from.
             * @param {Array} props The property identifiers to copy.
             * @param {Object} [object={}] The object to copy properties to.
             * @param {Function} [customizer] The function to customize copied values.
             * @returns {Object} Returns `object`.
             */
            function copyObject(source, props, object, customizer) {
              var isNew = !object;
              object || (object = {});

              var index = -1,
                  length = props.length;

              while (++index < length) {
                var key = props[index];

                var newValue = customizer
                  ? customizer(object[key], source[key], key, object, source)
                  : undefined;

                if (newValue === undefined) {
                  newValue = source[key];
                }
                if (isNew) {
                  _baseAssignValue(object, key, newValue);
                } else {
                  _assignValue(object, key, newValue);
                }
              }
              return object;
            }

            var _copyObject = copyObject;

            /**
             * The base implementation of `_.assign` without support for multiple sources
             * or `customizer` functions.
             *
             * @private
             * @param {Object} object The destination object.
             * @param {Object} source The source object.
             * @returns {Object} Returns `object`.
             */
            function baseAssign(object, source) {
              return object && _copyObject(source, keys_1(source), object);
            }

            var _baseAssign = baseAssign;

            /**
             * The base implementation of `_.assignIn` without support for multiple sources
             * or `customizer` functions.
             *
             * @private
             * @param {Object} object The destination object.
             * @param {Object} source The source object.
             * @returns {Object} Returns `object`.
             */
            function baseAssignIn(object, source) {
              return object && _copyObject(source, keysIn_1(source), object);
            }

            var _baseAssignIn = baseAssignIn;

            var _cloneBuffer = createCommonjsModule(function (module, exports) {
            /** Detect free variable `exports`. */
            var freeExports =  exports && !exports.nodeType && exports;

            /** Detect free variable `module`. */
            var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

            /** Detect the popular CommonJS extension `module.exports`. */
            var moduleExports = freeModule && freeModule.exports === freeExports;

            /** Built-in value references. */
            var Buffer = moduleExports ? _root.Buffer : undefined,
                allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

            /**
             * Creates a clone of  `buffer`.
             *
             * @private
             * @param {Buffer} buffer The buffer to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Buffer} Returns the cloned buffer.
             */
            function cloneBuffer(buffer, isDeep) {
              if (isDeep) {
                return buffer.slice();
              }
              var length = buffer.length,
                  result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

              buffer.copy(result);
              return result;
            }

            module.exports = cloneBuffer;
            });

            /**
             * Copies the values of `source` to `array`.
             *
             * @private
             * @param {Array} source The array to copy values from.
             * @param {Array} [array=[]] The array to copy values to.
             * @returns {Array} Returns `array`.
             */
            function copyArray(source, array) {
              var index = -1,
                  length = source.length;

              array || (array = Array(length));
              while (++index < length) {
                array[index] = source[index];
              }
              return array;
            }

            var _copyArray = copyArray;

            /**
             * Copies own symbols of `source` to `object`.
             *
             * @private
             * @param {Object} source The object to copy symbols from.
             * @param {Object} [object={}] The object to copy symbols to.
             * @returns {Object} Returns `object`.
             */
            function copySymbols(source, object) {
              return _copyObject(source, _getSymbols(source), object);
            }

            var _copySymbols = copySymbols;

            /**
             * Copies own and inherited symbols of `source` to `object`.
             *
             * @private
             * @param {Object} source The object to copy symbols from.
             * @param {Object} [object={}] The object to copy symbols to.
             * @returns {Object} Returns `object`.
             */
            function copySymbolsIn(source, object) {
              return _copyObject(source, _getSymbolsIn(source), object);
            }

            var _copySymbolsIn = copySymbolsIn;

            /** Used for built-in method references. */
            var objectProto$f = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$c = objectProto$f.hasOwnProperty;

            /**
             * Initializes an array clone.
             *
             * @private
             * @param {Array} array The array to clone.
             * @returns {Array} Returns the initialized clone.
             */
            function initCloneArray(array) {
              var length = array.length,
                  result = new array.constructor(length);

              // Add properties assigned by `RegExp#exec`.
              if (length && typeof array[0] == 'string' && hasOwnProperty$c.call(array, 'index')) {
                result.index = array.index;
                result.input = array.input;
              }
              return result;
            }

            var _initCloneArray = initCloneArray;

            /**
             * Creates a clone of `arrayBuffer`.
             *
             * @private
             * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
             * @returns {ArrayBuffer} Returns the cloned array buffer.
             */
            function cloneArrayBuffer(arrayBuffer) {
              var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
              new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
              return result;
            }

            var _cloneArrayBuffer = cloneArrayBuffer;

            /**
             * Creates a clone of `dataView`.
             *
             * @private
             * @param {Object} dataView The data view to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the cloned data view.
             */
            function cloneDataView(dataView, isDeep) {
              var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
              return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
            }

            var _cloneDataView = cloneDataView;

            /** Used to match `RegExp` flags from their coerced string values. */
            var reFlags = /\w*$/;

            /**
             * Creates a clone of `regexp`.
             *
             * @private
             * @param {Object} regexp The regexp to clone.
             * @returns {Object} Returns the cloned regexp.
             */
            function cloneRegExp(regexp) {
              var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
              result.lastIndex = regexp.lastIndex;
              return result;
            }

            var _cloneRegExp = cloneRegExp;

            /** Used to convert symbols to primitives and strings. */
            var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
                symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

            /**
             * Creates a clone of the `symbol` object.
             *
             * @private
             * @param {Object} symbol The symbol object to clone.
             * @returns {Object} Returns the cloned symbol object.
             */
            function cloneSymbol(symbol) {
              return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
            }

            var _cloneSymbol = cloneSymbol;

            /**
             * Creates a clone of `typedArray`.
             *
             * @private
             * @param {Object} typedArray The typed array to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the cloned typed array.
             */
            function cloneTypedArray(typedArray, isDeep) {
              var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
              return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
            }

            var _cloneTypedArray = cloneTypedArray;

            /** `Object#toString` result references. */
            var boolTag$2 = '[object Boolean]',
                dateTag$2 = '[object Date]',
                mapTag$4 = '[object Map]',
                numberTag$2 = '[object Number]',
                regexpTag$2 = '[object RegExp]',
                setTag$4 = '[object Set]',
                stringTag$2 = '[object String]',
                symbolTag$2 = '[object Symbol]';

            var arrayBufferTag$2 = '[object ArrayBuffer]',
                dataViewTag$3 = '[object DataView]',
                float32Tag$1 = '[object Float32Array]',
                float64Tag$1 = '[object Float64Array]',
                int8Tag$1 = '[object Int8Array]',
                int16Tag$1 = '[object Int16Array]',
                int32Tag$1 = '[object Int32Array]',
                uint8Tag$1 = '[object Uint8Array]',
                uint8ClampedTag$1 = '[object Uint8ClampedArray]',
                uint16Tag$1 = '[object Uint16Array]',
                uint32Tag$1 = '[object Uint32Array]';

            /**
             * Initializes an object clone based on its `toStringTag`.
             *
             * **Note:** This function only supports cloning values with tags of
             * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
             *
             * @private
             * @param {Object} object The object to clone.
             * @param {string} tag The `toStringTag` of the object to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the initialized clone.
             */
            function initCloneByTag(object, tag, isDeep) {
              var Ctor = object.constructor;
              switch (tag) {
                case arrayBufferTag$2:
                  return _cloneArrayBuffer(object);

                case boolTag$2:
                case dateTag$2:
                  return new Ctor(+object);

                case dataViewTag$3:
                  return _cloneDataView(object, isDeep);

                case float32Tag$1: case float64Tag$1:
                case int8Tag$1: case int16Tag$1: case int32Tag$1:
                case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
                  return _cloneTypedArray(object, isDeep);

                case mapTag$4:
                  return new Ctor;

                case numberTag$2:
                case stringTag$2:
                  return new Ctor(object);

                case regexpTag$2:
                  return _cloneRegExp(object);

                case setTag$4:
                  return new Ctor;

                case symbolTag$2:
                  return _cloneSymbol(object);
              }
            }

            var _initCloneByTag = initCloneByTag;

            /** Built-in value references. */
            var objectCreate = Object.create;

            /**
             * The base implementation of `_.create` without support for assigning
             * properties to the created object.
             *
             * @private
             * @param {Object} proto The object to inherit from.
             * @returns {Object} Returns the new object.
             */
            var baseCreate = (function() {
              function object() {}
              return function(proto) {
                if (!isObject_1(proto)) {
                  return {};
                }
                if (objectCreate) {
                  return objectCreate(proto);
                }
                object.prototype = proto;
                var result = new object;
                object.prototype = undefined;
                return result;
              };
            }());

            var _baseCreate = baseCreate;

            /**
             * Initializes an object clone.
             *
             * @private
             * @param {Object} object The object to clone.
             * @returns {Object} Returns the initialized clone.
             */
            function initCloneObject(object) {
              return (typeof object.constructor == 'function' && !_isPrototype(object))
                ? _baseCreate(_getPrototype(object))
                : {};
            }

            var _initCloneObject = initCloneObject;

            /** `Object#toString` result references. */
            var mapTag$5 = '[object Map]';

            /**
             * The base implementation of `_.isMap` without Node.js optimizations.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a map, else `false`.
             */
            function baseIsMap(value) {
              return isObjectLike_1(value) && _getTag(value) == mapTag$5;
            }

            var _baseIsMap = baseIsMap;

            /* Node.js helper references. */
            var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

            /**
             * Checks if `value` is classified as a `Map` object.
             *
             * @static
             * @memberOf _
             * @since 4.3.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a map, else `false`.
             * @example
             *
             * _.isMap(new Map);
             * // => true
             *
             * _.isMap(new WeakMap);
             * // => false
             */
            var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

            var isMap_1 = isMap;

            /** `Object#toString` result references. */
            var setTag$5 = '[object Set]';

            /**
             * The base implementation of `_.isSet` without Node.js optimizations.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a set, else `false`.
             */
            function baseIsSet(value) {
              return isObjectLike_1(value) && _getTag(value) == setTag$5;
            }

            var _baseIsSet = baseIsSet;

            /* Node.js helper references. */
            var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

            /**
             * Checks if `value` is classified as a `Set` object.
             *
             * @static
             * @memberOf _
             * @since 4.3.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a set, else `false`.
             * @example
             *
             * _.isSet(new Set);
             * // => true
             *
             * _.isSet(new WeakSet);
             * // => false
             */
            var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

            var isSet_1 = isSet;

            /** Used to compose bitmasks for cloning. */
            var CLONE_DEEP_FLAG = 1,
                CLONE_FLAT_FLAG = 2,
                CLONE_SYMBOLS_FLAG = 4;

            /** `Object#toString` result references. */
            var argsTag$3 = '[object Arguments]',
                arrayTag$2 = '[object Array]',
                boolTag$3 = '[object Boolean]',
                dateTag$3 = '[object Date]',
                errorTag$2 = '[object Error]',
                funcTag$2 = '[object Function]',
                genTag$1 = '[object GeneratorFunction]',
                mapTag$6 = '[object Map]',
                numberTag$3 = '[object Number]',
                objectTag$3 = '[object Object]',
                regexpTag$3 = '[object RegExp]',
                setTag$6 = '[object Set]',
                stringTag$3 = '[object String]',
                symbolTag$3 = '[object Symbol]',
                weakMapTag$2 = '[object WeakMap]';

            var arrayBufferTag$3 = '[object ArrayBuffer]',
                dataViewTag$4 = '[object DataView]',
                float32Tag$2 = '[object Float32Array]',
                float64Tag$2 = '[object Float64Array]',
                int8Tag$2 = '[object Int8Array]',
                int16Tag$2 = '[object Int16Array]',
                int32Tag$2 = '[object Int32Array]',
                uint8Tag$2 = '[object Uint8Array]',
                uint8ClampedTag$2 = '[object Uint8ClampedArray]',
                uint16Tag$2 = '[object Uint16Array]',
                uint32Tag$2 = '[object Uint32Array]';

            /** Used to identify `toStringTag` values supported by `_.clone`. */
            var cloneableTags = {};
            cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
            cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
            cloneableTags[boolTag$3] = cloneableTags[dateTag$3] =
            cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
            cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
            cloneableTags[int32Tag$2] = cloneableTags[mapTag$6] =
            cloneableTags[numberTag$3] = cloneableTags[objectTag$3] =
            cloneableTags[regexpTag$3] = cloneableTags[setTag$6] =
            cloneableTags[stringTag$3] = cloneableTags[symbolTag$3] =
            cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
            cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
            cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
            cloneableTags[weakMapTag$2] = false;

            /**
             * The base implementation of `_.clone` and `_.cloneDeep` which tracks
             * traversed objects.
             *
             * @private
             * @param {*} value The value to clone.
             * @param {boolean} bitmask The bitmask flags.
             *  1 - Deep clone
             *  2 - Flatten inherited properties
             *  4 - Clone symbols
             * @param {Function} [customizer] The function to customize cloning.
             * @param {string} [key] The key of `value`.
             * @param {Object} [object] The parent object of `value`.
             * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
             * @returns {*} Returns the cloned value.
             */
            function baseClone(value, bitmask, customizer, key, object, stack) {
              var result,
                  isDeep = bitmask & CLONE_DEEP_FLAG,
                  isFlat = bitmask & CLONE_FLAT_FLAG,
                  isFull = bitmask & CLONE_SYMBOLS_FLAG;

              if (customizer) {
                result = object ? customizer(value, key, object, stack) : customizer(value);
              }
              if (result !== undefined) {
                return result;
              }
              if (!isObject_1(value)) {
                return value;
              }
              var isArr = isArray_1(value);
              if (isArr) {
                result = _initCloneArray(value);
                if (!isDeep) {
                  return _copyArray(value, result);
                }
              } else {
                var tag = _getTag(value),
                    isFunc = tag == funcTag$2 || tag == genTag$1;

                if (isBuffer_1(value)) {
                  return _cloneBuffer(value, isDeep);
                }
                if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
                  result = (isFlat || isFunc) ? {} : _initCloneObject(value);
                  if (!isDeep) {
                    return isFlat
                      ? _copySymbolsIn(value, _baseAssignIn(result, value))
                      : _copySymbols(value, _baseAssign(result, value));
                  }
                } else {
                  if (!cloneableTags[tag]) {
                    return object ? value : {};
                  }
                  result = _initCloneByTag(value, tag, isDeep);
                }
              }
              // Check for circular references and return its corresponding clone.
              stack || (stack = new _Stack);
              var stacked = stack.get(value);
              if (stacked) {
                return stacked;
              }
              stack.set(value, result);

              if (isSet_1(value)) {
                value.forEach(function(subValue) {
                  result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
                });
              } else if (isMap_1(value)) {
                value.forEach(function(subValue, key) {
                  result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
                });
              }

              var keysFunc = isFull
                ? (isFlat ? _getAllKeysIn : _getAllKeys)
                : (isFlat ? keysIn : keys_1);

              var props = isArr ? undefined : keysFunc(value);
              _arrayEach(props || value, function(subValue, key) {
                if (props) {
                  key = subValue;
                  subValue = value[key];
                }
                // Recursively populate clone (susceptible to call stack limits).
                _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
              });
              return result;
            }

            var _baseClone = baseClone;

            /** Used to compose bitmasks for cloning. */
            var CLONE_DEEP_FLAG$1 = 1,
                CLONE_SYMBOLS_FLAG$1 = 4;

            /**
             * This method is like `_.clone` except that it recursively clones `value`.
             *
             * @static
             * @memberOf _
             * @since 1.0.0
             * @category Lang
             * @param {*} value The value to recursively clone.
             * @returns {*} Returns the deep cloned value.
             * @see _.clone
             * @example
             *
             * var objects = [{ 'a': 1 }, { 'b': 2 }];
             *
             * var deep = _.cloneDeep(objects);
             * console.log(deep[0] === objects[0]);
             * // => false
             */
            function cloneDeep(value) {
              return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
            }

            var cloneDeep_1 = cloneDeep;

            /**
             * Creates a `baseEach` or `baseEachRight` function.
             *
             * @private
             * @param {Function} eachFunc The function to iterate over a collection.
             * @param {boolean} [fromRight] Specify iterating from right to left.
             * @returns {Function} Returns the new base function.
             */
            function createBaseEach(eachFunc, fromRight) {
              return function(collection, iteratee) {
                if (collection == null) {
                  return collection;
                }
                if (!isArrayLike_1(collection)) {
                  return eachFunc(collection, iteratee);
                }
                var length = collection.length,
                    index = fromRight ? length : -1,
                    iterable = Object(collection);

                while ((fromRight ? index-- : ++index < length)) {
                  if (iteratee(iterable[index], index, iterable) === false) {
                    break;
                  }
                }
                return collection;
              };
            }

            var _createBaseEach = createBaseEach;

            /**
             * The base implementation of `_.forEach` without support for iteratee shorthands.
             *
             * @private
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array|Object} Returns `collection`.
             */
            var baseEach = _createBaseEach(_baseForOwn);

            var _baseEach = baseEach;

            /**
             * The base implementation of `_.map` without support for iteratee shorthands.
             *
             * @private
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns the new mapped array.
             */
            function baseMap(collection, iteratee) {
              var index = -1,
                  result = isArrayLike_1(collection) ? Array(collection.length) : [];

              _baseEach(collection, function(value, key, collection) {
                result[++index] = iteratee(value, key, collection);
              });
              return result;
            }

            var _baseMap = baseMap;

            /**
             * Creates an array of values by running each element in `collection` thru
             * `iteratee`. The iteratee is invoked with three arguments:
             * (value, index|key, collection).
             *
             * Many lodash methods are guarded to work as iteratees for methods like
             * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
             *
             * The guarded methods are:
             * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
             * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
             * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
             * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Collection
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} [iteratee=_.identity] The function invoked per iteration.
             * @returns {Array} Returns the new mapped array.
             * @example
             *
             * function square(n) {
             *   return n * n;
             * }
             *
             * _.map([4, 8], square);
             * // => [16, 64]
             *
             * _.map({ 'a': 4, 'b': 8 }, square);
             * // => [16, 64] (iteration order is not guaranteed)
             *
             * var users = [
             *   { 'user': 'barney' },
             *   { 'user': 'fred' }
             * ];
             *
             * // The `_.property` iteratee shorthand.
             * _.map(users, 'user');
             * // => ['barney', 'fred']
             */
            function map(collection, iteratee) {
              var func = isArray_1(collection) ? _arrayMap : _baseMap;
              return func(collection, _baseIteratee(iteratee));
            }

            var map_1 = map;

            /** Used for built-in method references. */
            var objectProto$g = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$d = objectProto$g.hasOwnProperty;

            /**
             * The base implementation of `_.has` without support for deep paths.
             *
             * @private
             * @param {Object} [object] The object to query.
             * @param {Array|string} key The key to check.
             * @returns {boolean} Returns `true` if `key` exists, else `false`.
             */
            function baseHas(object, key) {
              return object != null && hasOwnProperty$d.call(object, key);
            }

            var _baseHas = baseHas;

            /**
             * Checks if `path` is a direct property of `object`.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Object
             * @param {Object} object The object to query.
             * @param {Array|string} path The path to check.
             * @returns {boolean} Returns `true` if `path` exists, else `false`.
             * @example
             *
             * var object = { 'a': { 'b': 2 } };
             * var other = _.create({ 'a': _.create({ 'b': 2 }) });
             *
             * _.has(object, 'a');
             * // => true
             *
             * _.has(object, 'a.b');
             * // => true
             *
             * _.has(object, ['a', 'b']);
             * // => true
             *
             * _.has(other, 'a');
             * // => false
             */
            function has(object, path) {
              return object != null && _hasPath(object, path, _baseHas);
            }

            var has_1 = has;

            /**
             * A specialized version of `_.every` for arrays without support for
             * iteratee shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} predicate The function invoked per iteration.
             * @returns {boolean} Returns `true` if all elements pass the predicate check,
             *  else `false`.
             */
            function arrayEvery(array, predicate) {
              var index = -1,
                  length = array == null ? 0 : array.length;

              while (++index < length) {
                if (!predicate(array[index], index, array)) {
                  return false;
                }
              }
              return true;
            }

            var _arrayEvery = arrayEvery;

            /**
             * The base implementation of `_.every` without support for iteratee shorthands.
             *
             * @private
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} predicate The function invoked per iteration.
             * @returns {boolean} Returns `true` if all elements pass the predicate check,
             *  else `false`
             */
            function baseEvery(collection, predicate) {
              var result = true;
              _baseEach(collection, function(value, index, collection) {
                result = !!predicate(value, index, collection);
                return result;
              });
              return result;
            }

            var _baseEvery = baseEvery;

            /**
             * Checks if the given arguments are from an iteratee call.
             *
             * @private
             * @param {*} value The potential iteratee value argument.
             * @param {*} index The potential iteratee index or key argument.
             * @param {*} object The potential iteratee object argument.
             * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
             *  else `false`.
             */
            function isIterateeCall(value, index, object) {
              if (!isObject_1(object)) {
                return false;
              }
              var type = typeof index;
              if (type == 'number'
                    ? (isArrayLike_1(object) && _isIndex(index, object.length))
                    : (type == 'string' && index in object)
                  ) {
                return eq_1(object[index], value);
              }
              return false;
            }

            var _isIterateeCall = isIterateeCall;

            /**
             * Checks if `predicate` returns truthy for **all** elements of `collection`.
             * Iteration is stopped once `predicate` returns falsey. The predicate is
             * invoked with three arguments: (value, index|key, collection).
             *
             * **Note:** This method returns `true` for
             * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
             * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
             * elements of empty collections.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Collection
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} [predicate=_.identity] The function invoked per iteration.
             * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
             * @returns {boolean} Returns `true` if all elements pass the predicate check,
             *  else `false`.
             * @example
             *
             * _.every([true, 1, null, 'yes'], Boolean);
             * // => false
             *
             * var users = [
             *   { 'user': 'barney', 'age': 36, 'active': false },
             *   { 'user': 'fred',   'age': 40, 'active': false }
             * ];
             *
             * // The `_.matches` iteratee shorthand.
             * _.every(users, { 'user': 'barney', 'active': false });
             * // => false
             *
             * // The `_.matchesProperty` iteratee shorthand.
             * _.every(users, ['active', false]);
             * // => true
             *
             * // The `_.property` iteratee shorthand.
             * _.every(users, 'active');
             * // => false
             */
            function every(collection, predicate, guard) {
              var func = isArray_1(collection) ? _arrayEvery : _baseEvery;
              if (guard && _isIterateeCall(collection, predicate, guard)) {
                predicate = undefined;
              }
              return func(collection, _baseIteratee(predicate));
            }

            var every_1 = every;

            /** Used to compose bitmasks for cloning. */
            var CLONE_DEEP_FLAG$2 = 1;

            /**
             * Creates a function that performs a partial deep comparison between a given
             * object and `source`, returning `true` if the given object has equivalent
             * property values, else `false`.
             *
             * **Note:** The created function is equivalent to `_.isMatch` with `source`
             * partially applied.
             *
             * Partial comparisons will match empty array and empty object `source`
             * values against any array or object value, respectively. See `_.isEqual`
             * for a list of supported value comparisons.
             *
             * @static
             * @memberOf _
             * @since 3.0.0
             * @category Util
             * @param {Object} source The object of property values to match.
             * @returns {Function} Returns the new spec function.
             * @example
             *
             * var objects = [
             *   { 'a': 1, 'b': 2, 'c': 3 },
             *   { 'a': 4, 'b': 5, 'c': 6 }
             * ];
             *
             * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
             * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
             */
            function matches(source) {
              return _baseMatches(_baseClone(source, CLONE_DEEP_FLAG$2));
            }

            var matches_1 = matches;

            /**
             * A faster alternative to `Function#apply`, this function invokes `func`
             * with the `this` binding of `thisArg` and the arguments of `args`.
             *
             * @private
             * @param {Function} func The function to invoke.
             * @param {*} thisArg The `this` binding of `func`.
             * @param {Array} args The arguments to invoke `func` with.
             * @returns {*} Returns the result of `func`.
             */
            function apply(func, thisArg, args) {
              switch (args.length) {
                case 0: return func.call(thisArg);
                case 1: return func.call(thisArg, args[0]);
                case 2: return func.call(thisArg, args[0], args[1]);
                case 3: return func.call(thisArg, args[0], args[1], args[2]);
              }
              return func.apply(thisArg, args);
            }

            var _apply = apply;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeMax = Math.max;

            /**
             * A specialized version of `baseRest` which transforms the rest array.
             *
             * @private
             * @param {Function} func The function to apply a rest parameter to.
             * @param {number} [start=func.length-1] The start position of the rest parameter.
             * @param {Function} transform The rest array transform.
             * @returns {Function} Returns the new function.
             */
            function overRest(func, start, transform) {
              start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
              return function() {
                var args = arguments,
                    index = -1,
                    length = nativeMax(args.length - start, 0),
                    array = Array(length);

                while (++index < length) {
                  array[index] = args[start + index];
                }
                index = -1;
                var otherArgs = Array(start + 1);
                while (++index < start) {
                  otherArgs[index] = args[index];
                }
                otherArgs[start] = transform(array);
                return _apply(func, this, otherArgs);
              };
            }

            var _overRest = overRest;

            /**
             * Creates a function that returns `value`.
             *
             * @static
             * @memberOf _
             * @since 2.4.0
             * @category Util
             * @param {*} value The value to return from the new function.
             * @returns {Function} Returns the new constant function.
             * @example
             *
             * var objects = _.times(2, _.constant({ 'a': 1 }));
             *
             * console.log(objects);
             * // => [{ 'a': 1 }, { 'a': 1 }]
             *
             * console.log(objects[0] === objects[1]);
             * // => true
             */
            function constant(value) {
              return function() {
                return value;
              };
            }

            var constant_1 = constant;

            /**
             * The base implementation of `setToString` without support for hot loop shorting.
             *
             * @private
             * @param {Function} func The function to modify.
             * @param {Function} string The `toString` result.
             * @returns {Function} Returns `func`.
             */
            var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
              return _defineProperty$1(func, 'toString', {
                'configurable': true,
                'enumerable': false,
                'value': constant_1(string),
                'writable': true
              });
            };

            var _baseSetToString = baseSetToString;

            /** Used to detect hot functions by number of calls within a span of milliseconds. */
            var HOT_COUNT = 800,
                HOT_SPAN = 16;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeNow = Date.now;

            /**
             * Creates a function that'll short out and invoke `identity` instead
             * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
             * milliseconds.
             *
             * @private
             * @param {Function} func The function to restrict.
             * @returns {Function} Returns the new shortable function.
             */
            function shortOut(func) {
              var count = 0,
                  lastCalled = 0;

              return function() {
                var stamp = nativeNow(),
                    remaining = HOT_SPAN - (stamp - lastCalled);

                lastCalled = stamp;
                if (remaining > 0) {
                  if (++count >= HOT_COUNT) {
                    return arguments[0];
                  }
                } else {
                  count = 0;
                }
                return func.apply(undefined, arguments);
              };
            }

            var _shortOut = shortOut;

            /**
             * Sets the `toString` method of `func` to return `string`.
             *
             * @private
             * @param {Function} func The function to modify.
             * @param {Function} string The `toString` result.
             * @returns {Function} Returns `func`.
             */
            var setToString = _shortOut(_baseSetToString);

            var _setToString = setToString;

            /**
             * The base implementation of `_.rest` which doesn't validate or coerce arguments.
             *
             * @private
             * @param {Function} func The function to apply a rest parameter to.
             * @param {number} [start=func.length-1] The start position of the rest parameter.
             * @returns {Function} Returns the new function.
             */
            function baseRest(func, start) {
              return _setToString(_overRest(func, start, identity_1), func + '');
            }

            var _baseRest = baseRest;

            /** Used for built-in method references. */
            var objectProto$h = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty$e = objectProto$h.hasOwnProperty;

            /**
             * Assigns own and inherited enumerable string keyed properties of source
             * objects to the destination object for all destination properties that
             * resolve to `undefined`. Source objects are applied from left to right.
             * Once a property is set, additional values of the same property are ignored.
             *
             * **Note:** This method mutates `object`.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Object
             * @param {Object} object The destination object.
             * @param {...Object} [sources] The source objects.
             * @returns {Object} Returns `object`.
             * @see _.defaultsDeep
             * @example
             *
             * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
             * // => { 'a': 1, 'b': 2 }
             */
            var defaults = _baseRest(function(object, sources) {
              object = Object(object);

              var index = -1;
              var length = sources.length;
              var guard = length > 2 ? sources[2] : undefined;

              if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
                length = 1;
              }

              while (++index < length) {
                var source = sources[index];
                var props = keysIn_1(source);
                var propsIndex = -1;
                var propsLength = props.length;

                while (++propsIndex < propsLength) {
                  var key = props[propsIndex];
                  var value = object[key];

                  if (value === undefined ||
                      (eq_1(value, objectProto$h[key]) && !hasOwnProperty$e.call(object, key))) {
                    object[key] = source[key];
                  }
                }
              }

              return object;
            });

            var defaults_1 = defaults;

            /**
             * A specialized version of `_.reduce` for arrays without support for
             * iteratee shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @param {*} [accumulator] The initial value.
             * @param {boolean} [initAccum] Specify using the first element of `array` as
             *  the initial value.
             * @returns {*} Returns the accumulated value.
             */
            function arrayReduce(array, iteratee, accumulator, initAccum) {
              var index = -1,
                  length = array == null ? 0 : array.length;

              if (initAccum && length) {
                accumulator = array[++index];
              }
              while (++index < length) {
                accumulator = iteratee(accumulator, array[index], index, array);
              }
              return accumulator;
            }

            var _arrayReduce = arrayReduce;

            /**
             * The base implementation of `_.propertyOf` without support for deep paths.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Function} Returns the new accessor function.
             */
            function basePropertyOf(object) {
              return function(key) {
                return object == null ? undefined : object[key];
              };
            }

            var _basePropertyOf = basePropertyOf;

            /** Used to map Latin Unicode letters to basic Latin letters. */
            var deburredLetters = {
              // Latin-1 Supplement block.
              '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
              '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
              '\xc7': 'C',  '\xe7': 'c',
              '\xd0': 'D',  '\xf0': 'd',
              '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
              '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
              '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
              '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
              '\xd1': 'N',  '\xf1': 'n',
              '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
              '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
              '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
              '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
              '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
              '\xc6': 'Ae', '\xe6': 'ae',
              '\xde': 'Th', '\xfe': 'th',
              '\xdf': 'ss',
              // Latin Extended-A block.
              '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
              '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
              '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
              '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
              '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
              '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
              '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
              '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
              '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
              '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
              '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
              '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
              '\u0134': 'J',  '\u0135': 'j',
              '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
              '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
              '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
              '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
              '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
              '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
              '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
              '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
              '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
              '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
              '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
              '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
              '\u0163': 't',  '\u0165': 't', '\u0167': 't',
              '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
              '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
              '\u0174': 'W',  '\u0175': 'w',
              '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
              '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
              '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
              '\u0132': 'IJ', '\u0133': 'ij',
              '\u0152': 'Oe', '\u0153': 'oe',
              '\u0149': "'n", '\u017f': 's'
            };

            /**
             * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
             * letters to basic Latin letters.
             *
             * @private
             * @param {string} letter The matched letter to deburr.
             * @returns {string} Returns the deburred letter.
             */
            var deburrLetter = _basePropertyOf(deburredLetters);

            var _deburrLetter = deburrLetter;

            /** Used to match Latin Unicode letters (excluding mathematical operators). */
            var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

            /** Used to compose unicode character classes. */
            var rsComboMarksRange = '\\u0300-\\u036f',
                reComboHalfMarksRange = '\\ufe20-\\ufe2f',
                rsComboSymbolsRange = '\\u20d0-\\u20ff',
                rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

            /** Used to compose unicode capture groups. */
            var rsCombo = '[' + rsComboRange + ']';

            /**
             * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
             * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
             */
            var reComboMark = RegExp(rsCombo, 'g');

            /**
             * Deburrs `string` by converting
             * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
             * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
             * letters to basic Latin letters and removing
             * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
             *
             * @static
             * @memberOf _
             * @since 3.0.0
             * @category String
             * @param {string} [string=''] The string to deburr.
             * @returns {string} Returns the deburred string.
             * @example
             *
             * _.deburr('déjà vu');
             * // => 'deja vu'
             */
            function deburr(string) {
              string = toString_1(string);
              return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
            }

            var deburr_1 = deburr;

            /** Used to match words composed of alphanumeric characters. */
            var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

            /**
             * Splits an ASCII `string` into an array of its words.
             *
             * @private
             * @param {string} The string to inspect.
             * @returns {Array} Returns the words of `string`.
             */
            function asciiWords(string) {
              return string.match(reAsciiWord) || [];
            }

            var _asciiWords = asciiWords;

            /** Used to detect strings that need a more robust regexp to match words. */
            var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

            /**
             * Checks if `string` contains a word composed of Unicode symbols.
             *
             * @private
             * @param {string} string The string to inspect.
             * @returns {boolean} Returns `true` if a word is found, else `false`.
             */
            function hasUnicodeWord(string) {
              return reHasUnicodeWord.test(string);
            }

            var _hasUnicodeWord = hasUnicodeWord;

            /** Used to compose unicode character classes. */
            var rsAstralRange = '\\ud800-\\udfff',
                rsComboMarksRange$1 = '\\u0300-\\u036f',
                reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
                rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
                rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
                rsDingbatRange = '\\u2700-\\u27bf',
                rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
                rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
                rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
                rsPunctuationRange = '\\u2000-\\u206f',
                rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
                rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
                rsVarRange = '\\ufe0e\\ufe0f',
                rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

            /** Used to compose unicode capture groups. */
            var rsApos = "['\u2019]",
                rsBreak = '[' + rsBreakRange + ']',
                rsCombo$1 = '[' + rsComboRange$1 + ']',
                rsDigits = '\\d+',
                rsDingbat = '[' + rsDingbatRange + ']',
                rsLower = '[' + rsLowerRange + ']',
                rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
                rsFitz = '\\ud83c[\\udffb-\\udfff]',
                rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
                rsNonAstral = '[^' + rsAstralRange + ']',
                rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
                rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
                rsUpper = '[' + rsUpperRange + ']',
                rsZWJ = '\\u200d';

            /** Used to compose unicode regexes. */
            var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
                rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
                rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
                rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
                reOptMod = rsModifier + '?',
                rsOptVar = '[' + rsVarRange + ']?',
                rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
                rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
                rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
                rsSeq = rsOptVar + reOptMod + rsOptJoin,
                rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

            /** Used to match complex or compound words. */
            var reUnicodeWord = RegExp([
              rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
              rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
              rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
              rsUpper + '+' + rsOptContrUpper,
              rsOrdUpper,
              rsOrdLower,
              rsDigits,
              rsEmoji
            ].join('|'), 'g');

            /**
             * Splits a Unicode `string` into an array of its words.
             *
             * @private
             * @param {string} The string to inspect.
             * @returns {Array} Returns the words of `string`.
             */
            function unicodeWords(string) {
              return string.match(reUnicodeWord) || [];
            }

            var _unicodeWords = unicodeWords;

            /**
             * Splits `string` into an array of its words.
             *
             * @static
             * @memberOf _
             * @since 3.0.0
             * @category String
             * @param {string} [string=''] The string to inspect.
             * @param {RegExp|string} [pattern] The pattern to match words.
             * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
             * @returns {Array} Returns the words of `string`.
             * @example
             *
             * _.words('fred, barney, & pebbles');
             * // => ['fred', 'barney', 'pebbles']
             *
             * _.words('fred, barney, & pebbles', /[^, ]+/g);
             * // => ['fred', 'barney', '&', 'pebbles']
             */
            function words(string, pattern, guard) {
              string = toString_1(string);
              pattern = guard ? undefined : pattern;

              if (pattern === undefined) {
                return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
              }
              return string.match(pattern) || [];
            }

            var words_1 = words;

            /** Used to compose unicode capture groups. */
            var rsApos$1 = "['\u2019]";

            /** Used to match apostrophes. */
            var reApos = RegExp(rsApos$1, 'g');

            /**
             * Creates a function like `_.camelCase`.
             *
             * @private
             * @param {Function} callback The function to combine each word.
             * @returns {Function} Returns the new compounder function.
             */
            function createCompounder(callback) {
              return function(string) {
                return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
              };
            }

            var _createCompounder = createCompounder;

            /**
             * The base implementation of `_.slice` without an iteratee call guard.
             *
             * @private
             * @param {Array} array The array to slice.
             * @param {number} [start=0] The start position.
             * @param {number} [end=array.length] The end position.
             * @returns {Array} Returns the slice of `array`.
             */
            function baseSlice(array, start, end) {
              var index = -1,
                  length = array.length;

              if (start < 0) {
                start = -start > length ? 0 : (length + start);
              }
              end = end > length ? length : end;
              if (end < 0) {
                end += length;
              }
              length = start > end ? 0 : ((end - start) >>> 0);
              start >>>= 0;

              var result = Array(length);
              while (++index < length) {
                result[index] = array[index + start];
              }
              return result;
            }

            var _baseSlice = baseSlice;

            /**
             * Casts `array` to a slice if it's needed.
             *
             * @private
             * @param {Array} array The array to inspect.
             * @param {number} start The start position.
             * @param {number} [end=array.length] The end position.
             * @returns {Array} Returns the cast slice.
             */
            function castSlice(array, start, end) {
              var length = array.length;
              end = end === undefined ? length : end;
              return (!start && end >= length) ? array : _baseSlice(array, start, end);
            }

            var _castSlice = castSlice;

            /** Used to compose unicode character classes. */
            var rsAstralRange$1 = '\\ud800-\\udfff',
                rsComboMarksRange$2 = '\\u0300-\\u036f',
                reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
                rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
                rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
                rsVarRange$1 = '\\ufe0e\\ufe0f';

            /** Used to compose unicode capture groups. */
            var rsZWJ$1 = '\\u200d';

            /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
            var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

            /**
             * Checks if `string` contains Unicode symbols.
             *
             * @private
             * @param {string} string The string to inspect.
             * @returns {boolean} Returns `true` if a symbol is found, else `false`.
             */
            function hasUnicode(string) {
              return reHasUnicode.test(string);
            }

            var _hasUnicode = hasUnicode;

            /**
             * Converts an ASCII `string` to an array.
             *
             * @private
             * @param {string} string The string to convert.
             * @returns {Array} Returns the converted array.
             */
            function asciiToArray(string) {
              return string.split('');
            }

            var _asciiToArray = asciiToArray;

            /** Used to compose unicode character classes. */
            var rsAstralRange$2 = '\\ud800-\\udfff',
                rsComboMarksRange$3 = '\\u0300-\\u036f',
                reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
                rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
                rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
                rsVarRange$2 = '\\ufe0e\\ufe0f';

            /** Used to compose unicode capture groups. */
            var rsAstral = '[' + rsAstralRange$2 + ']',
                rsCombo$2 = '[' + rsComboRange$3 + ']',
                rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
                rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
                rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
                rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
                rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
                rsZWJ$2 = '\\u200d';

            /** Used to compose unicode regexes. */
            var reOptMod$1 = rsModifier$1 + '?',
                rsOptVar$1 = '[' + rsVarRange$2 + ']?',
                rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
                rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
                rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

            /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
            var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

            /**
             * Converts a Unicode `string` to an array.
             *
             * @private
             * @param {string} string The string to convert.
             * @returns {Array} Returns the converted array.
             */
            function unicodeToArray(string) {
              return string.match(reUnicode) || [];
            }

            var _unicodeToArray = unicodeToArray;

            /**
             * Converts `string` to an array.
             *
             * @private
             * @param {string} string The string to convert.
             * @returns {Array} Returns the converted array.
             */
            function stringToArray(string) {
              return _hasUnicode(string)
                ? _unicodeToArray(string)
                : _asciiToArray(string);
            }

            var _stringToArray = stringToArray;

            /**
             * Creates a function like `_.lowerFirst`.
             *
             * @private
             * @param {string} methodName The name of the `String` case method to use.
             * @returns {Function} Returns the new case function.
             */
            function createCaseFirst(methodName) {
              return function(string) {
                string = toString_1(string);

                var strSymbols = _hasUnicode(string)
                  ? _stringToArray(string)
                  : undefined;

                var chr = strSymbols
                  ? strSymbols[0]
                  : string.charAt(0);

                var trailing = strSymbols
                  ? _castSlice(strSymbols, 1).join('')
                  : string.slice(1);

                return chr[methodName]() + trailing;
              };
            }

            var _createCaseFirst = createCaseFirst;

            /**
             * Converts the first character of `string` to upper case.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category String
             * @param {string} [string=''] The string to convert.
             * @returns {string} Returns the converted string.
             * @example
             *
             * _.upperFirst('fred');
             * // => 'Fred'
             *
             * _.upperFirst('FRED');
             * // => 'FRED'
             */
            var upperFirst = _createCaseFirst('toUpperCase');

            var upperFirst_1 = upperFirst;

            /**
             * Converts `string` to
             * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
             *
             * @static
             * @memberOf _
             * @since 3.1.0
             * @category String
             * @param {string} [string=''] The string to convert.
             * @returns {string} Returns the start cased string.
             * @example
             *
             * _.startCase('--foo-bar--');
             * // => 'Foo Bar'
             *
             * _.startCase('fooBar');
             * // => 'Foo Bar'
             *
             * _.startCase('__FOO_BAR__');
             * // => 'FOO BAR'
             */
            var startCase = _createCompounder(function(result, word, index) {
              return result + (index ? ' ' : '') + upperFirst_1(word);
            });

            var startCase_1 = startCase;

            /** `Object#toString` result references. */
            var stringTag$4 = '[object String]';

            /**
             * Checks if `value` is classified as a `String` primitive or object.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a string, else `false`.
             * @example
             *
             * _.isString('abc');
             * // => true
             *
             * _.isString(1);
             * // => false
             */
            function isString(value) {
              return typeof value == 'string' ||
                (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$4);
            }

            var isString_1 = isString;

            /** `Object#toString` result references. */
            var objectTag$4 = '[object Object]';

            /** Used for built-in method references. */
            var funcProto$2 = Function.prototype,
                objectProto$i = Object.prototype;

            /** Used to resolve the decompiled source of functions. */
            var funcToString$2 = funcProto$2.toString;

            /** Used to check objects for own properties. */
            var hasOwnProperty$f = objectProto$i.hasOwnProperty;

            /** Used to infer the `Object` constructor. */
            var objectCtorString = funcToString$2.call(Object);

            /**
             * Checks if `value` is a plain object, that is, an object created by the
             * `Object` constructor or one with a `[[Prototype]]` of `null`.
             *
             * @static
             * @memberOf _
             * @since 0.8.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
             * @example
             *
             * function Foo() {
             *   this.a = 1;
             * }
             *
             * _.isPlainObject(new Foo);
             * // => false
             *
             * _.isPlainObject([1, 2, 3]);
             * // => false
             *
             * _.isPlainObject({ 'x': 0, 'y': 0 });
             * // => true
             *
             * _.isPlainObject(Object.create(null));
             * // => true
             */
            function isPlainObject(value) {
              if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$4) {
                return false;
              }
              var proto = _getPrototype(value);
              if (proto === null) {
                return true;
              }
              var Ctor = hasOwnProperty$f.call(proto, 'constructor') && proto.constructor;
              return typeof Ctor == 'function' && Ctor instanceof Ctor &&
                funcToString$2.call(Ctor) == objectCtorString;
            }

            var isPlainObject_1 = isPlainObject;

            // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
            var performance = global$1.performance || {};
            var performanceNow =
              performance.now        ||
              performance.mozNow     ||
              performance.msNow      ||
              performance.oNow       ||
              performance.webkitNow  ||
              function(){ return (new Date()).getTime() };

            var typeChecker = function (type) {
                var typeString = "[object " + type + "]";
                return function (value) {
                    return getClassName(value) === typeString;
                };
            };
            var getClassName = function (value) { return Object.prototype.toString.call(value); };
            var comparable = function (value) {
                if (value instanceof Date) {
                    return value.getTime();
                }
                else if (isArray$1(value)) {
                    return value.map(comparable);
                }
                else if (value && typeof value.toJSON === "function") {
                    return value.toJSON();
                }
                return value;
            };
            var isArray$1 = typeChecker("Array");
            var isObject$1 = typeChecker("Object");
            var isFunction$1 = typeChecker("Function");
            var isVanillaObject = function (value) {
                return (value &&
                    (value.constructor === Object ||
                        value.constructor === Array ||
                        value.constructor.toString() === "function Object() { [native code] }" ||
                        value.constructor.toString() === "function Array() { [native code] }") &&
                    !value.toJSON);
            };
            var equals = function (a, b) {
                if (a == null && a == b) {
                    return true;
                }
                if (a === b) {
                    return true;
                }
                if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
                    return false;
                }
                if (isArray$1(a)) {
                    if (a.length !== b.length) {
                        return false;
                    }
                    for (var i = 0, length_1 = a.length; i < length_1; i++) {
                        if (!equals(a[i], b[i]))
                            return false;
                    }
                    return true;
                }
                else if (isObject$1(a)) {
                    if (Object.keys(a).length !== Object.keys(b).length) {
                        return false;
                    }
                    for (var key in a) {
                        if (!equals(a[key], b[key]))
                            return false;
                    }
                    return true;
                }
                return false;
            };

            var __extends = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            };
            /**
             * Walks through each value given the context - used for nested operations. E.g:
             * { "person.address": { $eq: "blarg" }}
             */
            var walkKeyPathValues = function (item, keyPath, next, depth, key, owner) {
                var currentKey = keyPath[depth];
                // if array, then try matching. Might fall through for cases like:
                // { $eq: [1, 2, 3] }, [ 1, 2, 3 ].
                if (isArray$1(item) && isNaN(Number(currentKey))) {
                    for (var i = 0, length_1 = item.length; i < length_1; i++) {
                        // if FALSE is returned, then terminate walker. For operations, this simply
                        // means that the search critera was met.
                        if (!walkKeyPathValues(item[i], keyPath, next, depth, i, item)) {
                            return false;
                        }
                    }
                }
                if (depth === keyPath.length || item == null) {
                    return next(item, key, owner);
                }
                return walkKeyPathValues(item[currentKey], keyPath, next, depth + 1, currentKey, item);
            };
            var BaseOperation = /** @class */ (function () {
                function BaseOperation(params, owneryQuery, options) {
                    this.params = params;
                    this.owneryQuery = owneryQuery;
                    this.options = options;
                    this.init();
                }
                BaseOperation.prototype.init = function () { };
                BaseOperation.prototype.reset = function () {
                    this.done = false;
                    this.success = false;
                };
                return BaseOperation;
            }());
            var GroupOperation = /** @class */ (function (_super) {
                __extends(GroupOperation, _super);
                function GroupOperation(params, owneryQuery, options, _children) {
                    var _this = _super.call(this, params, owneryQuery, options) || this;
                    _this._children = _children;
                    return _this;
                }
                /**
                 */
                GroupOperation.prototype.reset = function () {
                    this.success = false;
                    this.done = false;
                    for (var i = 0, length_2 = this._children.length; i < length_2; i++) {
                        this._children[i].reset();
                    }
                };
                /**
                 */
                GroupOperation.prototype.childrenNext = function (item, key, owner) {
                    var done = true;
                    var success = true;
                    for (var i = 0, length_3 = this._children.length; i < length_3; i++) {
                        var childOperation = this._children[i];
                        childOperation.next(item, key, owner);
                        if (!childOperation.success) {
                            success = false;
                        }
                        if (childOperation.done) {
                            if (!childOperation.success) {
                                break;
                            }
                        }
                        else {
                            done = false;
                        }
                    }
                    this.done = done;
                    this.success = success;
                };
                return GroupOperation;
            }(BaseOperation));
            var QueryOperation = /** @class */ (function (_super) {
                __extends(QueryOperation, _super);
                function QueryOperation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 */
                QueryOperation.prototype.next = function (item, key, parent) {
                    this.childrenNext(item, key, parent);
                };
                return QueryOperation;
            }(GroupOperation));
            var NestedOperation = /** @class */ (function (_super) {
                __extends(NestedOperation, _super);
                function NestedOperation(keyPath, params, owneryQuery, options, children) {
                    var _this = _super.call(this, params, owneryQuery, options, children) || this;
                    _this.keyPath = keyPath;
                    /**
                     */
                    _this._nextNestedValue = function (value, key, owner) {
                        _this.childrenNext(value, key, owner);
                        return !_this.done;
                    };
                    return _this;
                }
                /**
                 */
                NestedOperation.prototype.next = function (item, key, parent) {
                    walkKeyPathValues(item, this.keyPath, this._nextNestedValue, 0, key, parent);
                };
                return NestedOperation;
            }(GroupOperation));
            var createTester = function (a, compare) {
                if (a instanceof Function) {
                    return a;
                }
                if (a instanceof RegExp) {
                    return function (b) { return typeof b === "string" && a.test(b); };
                }
                var comparableA = comparable(a);
                return function (b) { return compare(comparableA, comparable(b)); };
            };
            var EqualsOperation = /** @class */ (function (_super) {
                __extends(EqualsOperation, _super);
                function EqualsOperation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EqualsOperation.prototype.init = function () {
                    this._test = createTester(this.params, this.options.compare);
                };
                EqualsOperation.prototype.next = function (item, key, parent) {
                    if (this._test(item, key, parent)) {
                        this.done = true;
                        this.success = true;
                    }
                };
                return EqualsOperation;
            }(BaseOperation));
            var NopeOperation = /** @class */ (function (_super) {
                __extends(NopeOperation, _super);
                function NopeOperation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NopeOperation.prototype.next = function () {
                    this.done = true;
                    this.success = false;
                };
                return NopeOperation;
            }(BaseOperation));
            var numericalOperationCreator = function (createNumericalOperation) { return function (params, owneryQuery, options) {
                return params == null
                    ? new NopeOperation(params, owneryQuery, options)
                    : createNumericalOperation(params, owneryQuery, options);
            }; };
            var createOperation = function (name, params, parentQuery, options) {
                var operationCreator = options.operations[name];
                if (!operationCreator) {
                    throw new Error("Unsupported operation: " + name);
                }
                return operationCreator(params, parentQuery, options);
            };
            var containsOperation = function (query) {
                for (var key in query) {
                    if (key.charAt(0) === "$")
                        return true;
                }
                return false;
            };
            var createNestedOperation = function (keyPath, nestedQuery, owneryQuery, options) {
                if (containsOperation(nestedQuery)) {
                    var _a = createQueryOperations(nestedQuery, options), selfOperations = _a[0], nestedOperations = _a[1];
                    if (nestedOperations.length) {
                        throw new Error("Property queries must contain only operations, or exact objects.");
                    }
                    return new NestedOperation(keyPath, nestedQuery, owneryQuery, options, selfOperations);
                }
                return new NestedOperation(keyPath, nestedQuery, owneryQuery, options, [
                    new EqualsOperation(nestedQuery, owneryQuery, options)
                ]);
            };
            var createQueryOperation = function (query, owneryQuery, options) {
                var _a = createQueryOperations(query, options), selfOperations = _a[0], nestedOperations = _a[1];
                var ops = __spreadArrays([
                    new NestedOperation([], query, owneryQuery, options, selfOperations)
                ], nestedOperations);
                if (ops.length === 1) {
                    return ops[0];
                }
                return new QueryOperation(query, owneryQuery, options, ops);
            };
            var createQueryOperations = function (query, options) {
                var selfOperations = [];
                var nestedOperations = [];
                if (!isVanillaObject(query)) {
                    selfOperations.push(new EqualsOperation(query, query, options));
                    return [selfOperations, nestedOperations];
                }
                for (var key in query) {
                    if (key.charAt(0) === "$") {
                        var op = createOperation(key, query[key], query, options);
                        // probably just a flag for another operation (like $options)
                        if (op != null) {
                            selfOperations.push(op);
                        }
                    }
                    else {
                        nestedOperations.push(createNestedOperation(key.split("."), query[key], query, options));
                    }
                }
                return [selfOperations, nestedOperations];
            };
            var createQueryTester = function (query, _a) {
                var _b = _a === void 0 ? {} : _a, compare = _b.compare, operations = _b.operations;
                var operation = createQueryOperation(query, null, {
                    compare: compare || equals,
                    operations: Object.assign({}, operations || {})
                });
                return function (item, key, owner) {
                    operation.reset();
                    operation.next(item, key, owner);
                    return operation.success;
                };
            };

            var __extends$1 = (undefined && undefined.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var $Ne = /** @class */ (function (_super) {
                __extends$1($Ne, _super);
                function $Ne() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $Ne.prototype.init = function () {
                    this._test = createTester(this.params, this.options.compare);
                };
                $Ne.prototype.reset = function () {
                    _super.prototype.reset.call(this);
                    this.success = true;
                };
                $Ne.prototype.next = function (item) {
                    if (this._test(item)) {
                        this.done = true;
                        this.success = false;
                    }
                };
                return $Ne;
            }(BaseOperation));
            var $ElemMatch = /** @class */ (function (_super) {
                __extends$1($ElemMatch, _super);
                function $ElemMatch() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $ElemMatch.prototype.init = function () {
                    this._queryOperation = createQueryOperation(this.params, this.owneryQuery, this.options);
                };
                $ElemMatch.prototype.reset = function () {
                    this._queryOperation.reset();
                };
                $ElemMatch.prototype.next = function (item, key, owner) {
                    this._queryOperation.next(item, key, owner);
                    this.done = this._queryOperation.done;
                    this.success = this._queryOperation.success;
                };
                return $ElemMatch;
            }(BaseOperation));
            var $Not = /** @class */ (function (_super) {
                __extends$1($Not, _super);
                function $Not() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $Not.prototype.next = function (item, key, owner) {
                    _super.prototype.next.call(this, item, key, owner);
                    this.success = !this.success;
                };
                return $Not;
            }($ElemMatch));
            var $Or = /** @class */ (function (_super) {
                __extends$1($Or, _super);
                function $Or() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $Or.prototype.init = function () {
                    var _this = this;
                    this._ops = this.params.map(function (op) {
                        return createQueryOperation(op, null, _this.options);
                    });
                };
                $Or.prototype.reset = function () {
                    this.done = false;
                    this.success = false;
                    for (var i = 0, length_1 = this._ops.length; i < length_1; i++) {
                        this._ops[i].reset();
                    }
                };
                $Or.prototype.next = function (item, key, owner) {
                    var done = false;
                    var success = false;
                    for (var i = 0, length_2 = this._ops.length; i < length_2; i++) {
                        var op = this._ops[i];
                        op.next(item, key, owner);
                        if (op.success) {
                            done = true;
                            success = op.success;
                            break;
                        }
                    }
                    this.success = success;
                    this.done = done;
                };
                return $Or;
            }(BaseOperation));
            var $Nor = /** @class */ (function (_super) {
                __extends$1($Nor, _super);
                function $Nor() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $Nor.prototype.next = function (item, key, owner) {
                    _super.prototype.next.call(this, item, key, owner);
                    this.success = !this.success;
                };
                return $Nor;
            }($Or));
            var $Exists = /** @class */ (function (_super) {
                __extends$1($Exists, _super);
                function $Exists() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $Exists.prototype.next = function (item, key, owner) {
                    if (owner.hasOwnProperty(key) === this.params) {
                        this.done = true;
                        this.success = true;
                    }
                };
                return $Exists;
            }(BaseOperation));
            var $And = /** @class */ (function (_super) {
                __extends$1($And, _super);
                function $And(params, owneryQuery, options) {
                    return _super.call(this, params, owneryQuery, options, params.map(function (query) { return createQueryOperation(query, owneryQuery, options); })) || this;
                }
                $And.prototype.next = function (item, key, owner) {
                    this.childrenNext(item, key, owner);
                };
                return $And;
            }(GroupOperation));
            var $eq = function (params, owneryQuery, options) {
                return new EqualsOperation(params, owneryQuery, options);
            };
            var $ne = function (params, owneryQuery, options) {
                return new $Ne(params, owneryQuery, options);
            };
            var $or = function (params, owneryQuery, options) {
                return new $Or(params, owneryQuery, options);
            };
            var $nor = function (params, owneryQuery, options) {
                return new $Nor(params, owneryQuery, options);
            };
            var $elemMatch = function (params, owneryQuery, options) {
                return new $ElemMatch(params, owneryQuery, options);
            };
            var $nin = function (params, owneryQuery, options) {
                return new $Nor(params, owneryQuery, options);
            };
            var $in = function (params, owneryQuery, options) {
                return new $Or(params, owneryQuery, options);
            };
            var $lt = numericalOperationCreator(function (params, owneryQuery, options) {
                return new EqualsOperation(function (b) { return b < params; }, owneryQuery, options);
            });
            var $lte = numericalOperationCreator(function (params, owneryQuery, options) {
                return new EqualsOperation(function (b) { return b <= params; }, owneryQuery, options);
            });
            var $gt = numericalOperationCreator(function (params, owneryQuery, options) {
                return new EqualsOperation(function (b) { return b > params; }, owneryQuery, options);
            });
            var $gte = numericalOperationCreator(function (params, owneryQuery, options) {
                return new EqualsOperation(function (b) { return b >= params; }, owneryQuery, options);
            });
            var $mod = function (_a, owneryQuery, options) {
                var mod = _a[0], equalsValue = _a[1];
                return new EqualsOperation(function (b) { return comparable(b) % mod === equalsValue; }, owneryQuery, options);
            };
            var $exists = function (params, owneryQuery, options) { return new $Exists(params, owneryQuery, options); };
            var $regex = function (pattern, owneryQuery, options) {
                return new EqualsOperation(new RegExp(pattern, owneryQuery.$options), owneryQuery, options);
            };
            var $not = function (params, owneryQuery, options) {
                return new $Not(params, owneryQuery, options);
            };
            var $type = function (clazz, owneryQuery, options) {
                return new EqualsOperation(function (b) { return (b != null ? b instanceof clazz || b.constructor === clazz : false); }, owneryQuery, options);
            };
            var $and = function (params, ownerQuery, options) {
                return new $And(params, ownerQuery, options);
            };
            var $all = $and;
            var $size = function (params, ownerQuery, options) {
                return new EqualsOperation(function (b) { return b && b.length === params; }, ownerQuery, options);
            };
            var $options = function () { return null; };
            var $where = function (params, ownerQuery, options) {
                var test;
                if (isFunction$1(params)) {
                    test = params;
                }
                else {
                    test = new Function("obj", "return " + params);
                }
                return new EqualsOperation(function (b) { return test.bind(b)(b); }, ownerQuery, options);
            };

            var defaultOperations = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        $eq: $eq,
                        $ne: $ne,
                        $or: $or,
                        $nor: $nor,
                        $elemMatch: $elemMatch,
                        $nin: $nin,
                        $in: $in,
                        $lt: $lt,
                        $lte: $lte,
                        $gt: $gt,
                        $gte: $gte,
                        $mod: $mod,
                        $exists: $exists,
                        $regex: $regex,
                        $not: $not,
                        $type: $type,
                        $and: $and,
                        $all: $all,
                        $size: $size,
                        $options: $options,
                        $where: $where
            });

            var createDefaultQueryTester = function (query, _a) {
                var _b = _a === void 0 ? {} : _a, compare = _b.compare, operations = _b.operations;
                return createQueryTester(query, {
                    compare: compare,
                    operations: Object.assign({}, defaultOperations, operations || {})
                });
            };

            var $macgyver = {};
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
              } else if (isPlainObject_1(id)) {
                // Just options
                var _ref = [id.id, id];
                id = _ref[0];
                options = _ref[1];
              } else {
                throw new Error('$macgyver.register(id, options) requires either an ID + options or an options object');
              } // }}}


              if (!isString_1(options.id) || !options.id.startsWith('mg')) throw new Error('Widget IDs must be simple strings beginning with "mg*"');
              $macgyver.widgets[options.id] = _objectSpread2({
                title: startCase_1(options.id),
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
            * Set the given forms spec config
            * @param {string} id The ID of the form to set the config of
            * @param {Object|Array} config The config to set
            * @returns {MacGyver} The chainable MacGyver instance
            */

            $macgyver.forms.setConfig = function (id, config) {
              if (!$macgyver.$forms[id]) $macgyver.$forms[id] = {
                config: {},
                data: {}
              };
              $macgyver.$forms[id].config = $macgyver.neatenSpec(config);
              return $macgyver;
            };
            /**
            * Set the given forms spec data
            * @param {string} id The ID of the form to set the config of
            * @param {Object|Array} data The data population to set
            * @returns {MacGyver} The chainable MacGyver instance
            */


            $macgyver.forms.setData = function (id, data) {
              if (!$macgyver.$forms[id]) $macgyver.$forms[id] = {
                config: {},
                data: {}
              };
              $macgyver.$forms[id].data = data;
              return $macgyver;
            };
            /**
            * Convenience function to validate all MacGyver forms on a screen and return the array of failed validations
            * @param {string} [id] The form ID to validate, if omitted the first form on the page is used
            * @param {boolean} [showErrors=true] Allow the form to display a list of errors as well as returning them
            * @returns {array <Object>} Collection where each item is {error}
            */


            $macgyver.forms.validate = function (id) {
              if (!$macgyver.$forms[id]) throw new Error('Invalid MacGyver form');
              console.warn('FIXME: Validation not yet supported');

              return true;
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
              return $macgyver.utils.getPath($macgyver.$forms[id], path, fallback);
            };
            /**
            * Compute the data prototype of the form
            * This is an empty object with all the defaults populated
            * @param {string|Object} id Either the form ID to use or the form spec object to exmaine
            * @returns {Object} A prototype data object with all defaults populated
            */


            $macgyver.forms.getPrototype = function (id) {
              return $macgyver.flatten(isString_1(id) ? $macgyver.$forms[id].config : id, {
                type: 'spec',
                want: 'array',
                wantDataPath: true
              }).reduce(function (data, node) {
                if (!node["default"]) return data; // No default speciifed - skip

                $macgyver.utils.setPath(data, node.path, node["default"]);
                return data;
              }, {});
            };
            /**
            * Execute a function on a form
            * The default behaviour of this function is documented within the function
            * @param {string} id The ID of the form to execute the function on
            * @param {string} action The action to execute
            * @param {*} [context] The context of the action, defaults to the form component
            * @param {*} [params...] Additional parameters to execute
            * @emits mgRun Event fired at the form level only with a single object of the form `{action, params}`. Use the form property handleActions to specify if the form should handle or trap the event to override
            */


            $macgyver.forms.run = function (id, action, context) {
              var _$macgyver$$forms$id$, _$macgyver$$forms$id$2;

              if (!context) context = $macgyver.$forms[id]; // 1. Emit mgRun to parents and see if they want to handle it {{{

              var handled = false;

              for (var _len3 = arguments.length, params = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
                params[_key3 - 3] = arguments[_key3];
              }

              $macgyver.$forms[id].$emitUp('mgRun', {
                action: action,
                params: params
              }, function (isHandled) {
                if (isHandled) handled = true;
              });
              if (handled) return; // }}}
              // 2. Use FORM.$props.onAction(action) and see if returns truthy {{{

              if ($macgyver.$forms[id].$props.onAction && (_$macgyver$$forms$id$ = $macgyver.$forms[id].$props.onAction).call.apply(_$macgyver$$forms$id$, [context, action].concat(params))) return; // }}}
              // 3. See if FORM.$props.actions[action] exists and if so whether it returns truthy {{{

              var _ref2 = /^([a-z0-9\_]*?)(\(.*\))?$/i.exec(action) || [],
                  _ref3 = _slicedToArray(_ref2, 3),
                  junk = _ref3[0],
                  actionReadable = _ref3[1],
                  actionArgs = _ref3[2];

              if (actionReadable && $macgyver.$forms[id].$props.actions && $macgyver.$forms[id].$props.actions[actionReadable]) {
                // Collapse strings to functions
                var func = isString_1($macgyver.$forms[id].$props.actions[actionReadable]) ? $macgyver.$forms[id][actionReadable] : $macgyver.$forms[id].$props.actions[actionReadable]; // Tidy up actionArgs

                actionArgs = (actionArgs || '').trim('()').split(',').map(function (i) {
                  return i && JSON.parse(i.replace(/'/g, '"'));
                });
                if (func.apply($macgyver.$forms[id], [actionArgs].concat(params))) return;
              } // }}}
              // 4. If all else failed and FORM.$props.actionsFallback is true - handle it via vm.$eval {{{


              (_$macgyver$$forms$id$2 = $macgyver.$forms[id].$eval).call.apply(_$macgyver$$forms$id$2, [context, action].concat(params)); // }}}

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
                console.log('[$macgyver]', 'Loading foreground', id, {
                  status: status
                });
              } else if (status) {
                console.log('[$macgyver]', 'Loading background', id, {
                  status: status
                });
              } else {
                console.log('[$macgyver]', 'Stop loading', id, {
                  status: status
                });
              }
            };
            /**
            * Provide a warning message to the user
            * @param {string} message The message to display
            */


            $macgyver.notify.warn = function (message) {
              return console.log('[$macgyver]', 'WARN', message);
            };
            /**
            * Provide an error message to the user
            * @param {string} message The message to display
            */


            $macgyver.notify.error = function (message) {
              return console.log('[$macgyver]', message);
            }; // }}}

            /**
            * Flatten the a spec into an object lookup where each key is the dotted notation of the key
            * NOTE: Specifying {want:'array'} will add the extra property 'path' onto the output collection
            * @param {Object|array} root The data or spec object to examine, this should be the root object but can also convert arrays into objects on the fly (although this is slower)
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
              var settings = defaults_1(options, {
                root: isArray_1(root) ? $macgyver.compileSpec(root).spec : root,
                maxDepth: 0,
                filter: undefined,
                filterChildren: undefined,
                type: 'auto',
                want: 'object',
                wantDataPath: false,
                wantSpec: false,
                wantSpecPath: false
              });

              if (settings.filter && !isFunction_1(settings.filter) && isObject_1(settings.filter)) settings.filter = matches_1(settings.filter);
              if (settings.want != 'object' && settings.want != 'array') throw new Error('$macgyver.flatten({want}) can only be "object" or "array"');

              if (settings.type == 'auto') {
                if (settings.root.items) {
                  settings.type = 'spec';
                } else if (every_1(settings.root, function (k, v) {
                  return !v.items;
                })) {
                  settings.type = 'data';
                } else {
                  throw new Error('Cannot determine type of input object to $macgyver.flatten(), specify it explicitly with {type=spec|data}');
                }
              }

              var found = settings.want == 'object' ? {} : [];

              var depthScanner = function depthScanner(node, dataPath, specPath, depth) {
                if (!isObject_1(node)) return; // Add to bucket of found objects?

                if (!settings.filter // No filter
                || settings.filter.call(node, node, path, depth) // OR we pass the filter
                ) {
                    if (settings.wantDataPath) node[isString_1(settings.wantDataPath) ? settings.wantDataPath : 'path'] = dataPath.concat([node.id]).filter(function (i) {
                      return i;
                    }).join('.');
                    if (settings.wantSpecPath) node[isString_1(settings.wantSpecPath) ? settings.wantSpecPath : 'specPath'] = specPath.join('.');

                    if (settings.want == 'object') {
                      if (node.id) found[node.id] = node;
                    } else {
                      found.push(node);
                    }
                  } // Recurse into children?


                var recursionSubject = settings.type == 'spec' ? node.items : node;

                if (isArray_1(recursionSubject) && (!settings.filterChildren // No filter
                || settings.filterChildren.call(node, node, dataPath, specPath, depth) // ...or we pass the filter
                ) && (!settings.maxDepth || depth <= settings.maxDepth)) {
                  recursionSubject.forEach(function (item, itemIndex) {
                    return depthScanner(item, dataPath, specPath.concat(settings.type == 'spec' ? ['items', itemIndex] : [itemIndex]), depth + 1);
                  });
                }
              };

              depthScanner(settings.root, [], [], 0);
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
            * @returns {Object} An object composed of the keys {spec}
            */


            $macgyver.compileSpec = function (spec, options) {
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
                  return isPlainObject_1(spec) // Simple object
                  && !has_1(spec, 'type') // It doesn't have a type key (i.e. there is only one item in this object
                  && every_1(spec, function (v, k) {
                    return !has_1(v, 'id') && (!has_1(v, 'type') || v.type != 'mgContainer');
                  });
                },
                // Each item lacks and ID and either doesn't have a type or that type is not a container
                convertShorthandTranslate: function convertShorthandTranslate(spec) {
                  return {
                    type: 'mgContainer',
                    items: map_1(spec, function (v, k) {
                      return _objectSpread2({
                        id: k
                      }, v, {
                        type: function () {
                          if (isString_1(v)) v = {
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

              var spec = settings.clone ? cloneDeep_1(spec) : spec; // Output spec

              if (settings.deblank && isEmpty_1(spec)) {
                // Convert empty or unusable values into a skeleton
                spec = {
                  type: 'mgContainer',
                  items: []
                };
              }

              if (settings.convertArray && isArray_1(spec)) {
                // convert array spec -> object?
                spec = settings.convertArrayWrapper(spec);
              }

              if (settings.convertShorthand && settings.convertShorthandDetect(spec)) {
                // Is shorthand format
                spec = settings.convertShorthandTranslate(spec);
              }
              /**
              * Collection of items that have a showIf property
              * @var {array<Object>} Each widget with a showIf property
              */


              var showIfs = [];
              $macgyver.flatten(spec, {
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
                  var _ref4, _$macgyver$widgets$wi;

                  Object.assign(widget, (_ref4 = (_$macgyver$widgets$wi = $macgyver.widgets[widget.type].config, pickBy_1(_$macgyver$widgets$wi, function (v, k) {
                    return !has_1(widget, k) && has_1(v, 'default');
                  })), mapValues_1(_ref4, function (v) {
                    return v["default"];
                  })));
                } // Glue .show property to all elements that omit it


                widget.show = widget.show == undefined ? true : !!widget.show; // Add all widgets with a .showIf expression into a quick-lookup collection

                if (widget.showIf) {
                  widget.showIf = $macgyver.utils.evalCompile(widget.showIf); // Compile showIf property so its as fast as possible

                  showIfs.push(widget);
                }

                if (settings.widgetTitles && !widget.title && widget.id) widget.title = startCase_1(widget.id);
              });
              return {
                spec: spec,
                showIfs: showIfs
              };
            };
            /**
            * Register of known forms to their Vue instance / plain object mapping
            * For front-end MacGyver this is the VueInstance object of the registered form
            * For the back-end this is a simple object of the form `{config, data}`
            * @var {VueInstance|Object>}
            * @property {Object} config The form spec
            * @property {Object} data The current form data
            */


            $macgyver.$forms = {};
            /**
            * Set of misc utility helper functions
            * @var {Object};
            */

            $macgyver.utils = {};
            /**
            * Local storage for the global object
            * This is a wrapper until `globalThis` becomes available in both Node and the browser
            * @var {Object} The global scope
            */

            $macgyver.utils.global = function () {
              if (typeof self !== 'undefined') {
                return self;
              }

              if (typeof window !== 'undefined') {
                return window;
              }

              if (typeof global$1 !== 'undefined') {
                return global$1;
              }

              throw new Error('unable to locate global object');
            }();
            /**
            * Fetch any artbitrary data set from a URL
            * This function is designed to accept a customizable single-string URL which the user can customize and a spec options object that the requesting widget can define
            * NOTE: This function will invoke the loading notifier and call the warning notifier on an error
            *
            * @param {string} [url] The URL to fetch
            * @param {Object} options Additional options
            * @param {string} [options.url] Alternate way to pass the URL
            * @param {boolean} [options.type='object'] What data type to expect from the server. ENUM: 'object', 'array', 'raw'. If array and mappings are specified each member of the collection is mapped and an array returned
            * @param {function} [options.format] Data formatter, defaults to a simple passthrough. Called as `(output, session)`
            * @param {string|function} [options.formatError] Error thrown if the formatter fails, can be a string or function called as `(err)`. Defaults to 'Unable to format data feed from ${url} - ${err.toString()}`
            * @param {string} [options.from] The field from where to retrieve the value
            *
            * @param {Object <Object>} [options.mappings={}] Mappings to extract, each key is the mapping name with the value as an object containing the below spec
            * @param {boolean} [options.mappings.required=false] Whether the mapping is required
            *
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


            $macgyver.utils.fetch = function (url, options) {
              return Promise.resolve() // Sanity checks {{{
              .then(function () {
                return $macgyver.$http || Promise.reject('No Axios compatible HTTP library - set $macgyver.$http to the library reference');
              }) // }}}
              // Injection options from URL {{{
              .then(function () {
                if (isPlainObject_1(url)) {
                  var _ref5 = [url.url, url];
                  url = _ref5[0];
                  options = _ref5[1];
                } else {
                  options.url = url;
                }

                if (!url) throw new Error('Unknown URL to fetch');
              }) // }}}
              // Create the initial session {{{
              .then(function () {
                return {
                  mappings: {},
                  // Parsed mappings (either a copy of settings.mappings || extracted from the URL)
                  parsedUrl: new URL(url, window.location),
                  settings: _objectSpread2({
                    type: 'object',
                    mappings: {},
                    // Optional mappings the user provided
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
                if (!isEmpty_1(options.mappings)) {
                  // Mappings are specified in options
                  session.mappings = options.mappings;
                } else {
                  // Try to extract mappings if options doesn't already have a parsed set
                  Array.from(session.parsedUrl.searchParams.entries()).forEach(function (pair) {
                    var _pair = _slicedToArray(pair, 2),
                        k = _pair[0],
                        v = _pair[1];

                    if (k.startsWith('$')) {
                      session.mappings[k] = {
                        required: true,
                        from: v
                      };
                      session.parsedUrl.searchParams["delete"](k);
                    }
                  });
                }

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
                switch (session.settings.type) {
                  case 'array':
                    if (!isArray_1(session.response.data)) throw "Expected an array from data feed \"".concat(url, "\" but got a non-array");

                    if (!isEmpty_1(session.mappings)) {
                      session.output = session.response.data.map(function (item, itemIndex) {
                        return mapValues_1(session.mappings, function (v, k) {
                          if (v.required && item[v.from] === undefined) throw new Error("Required field ".concat(v.from, " is not present in data feed for item #").concat(itemIndex + 1));
                          return item[v.from];
                        });
                      });
                    } else {
                      session.output = session.response.data;
                    }

                    return session;

                  case 'object':
                    if (!isPlainObject_1(session.response.data)) throw "Expected object return from data feed \"".concat(url, "\" but got a non-plain-object");

                    if (!isEmpty_1(session.mappings)) {
                      session.output = mapValues_1(session.mappings, function (v, k) {
                        if (v.required && session.response.data[k] === undefined) throw new Error("Required field ".concat(k, " is not present in data feed for item #").concat(itemIndex + 1));
                        return session.response.data[v.from];
                      });
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
                  throw isString_1(session.settings.formatError) ? session.settings.formatError : session.settings.formatError(err);
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
            * Attempt to parse a rough JS expression into a Sift / Mongo compatible expression
            * This makes future calls to $macgyver.utils.evalMatch() much quicker
            * TODO: This probably needs replacing / merging with [sift-shorthand](https://github.com/hash-bang/sift-shorthand) at some point
            * @param {Object|string} expression Input expression, if this is an object it is assumed to already be a sift expression and returned uneffected
            * @param {boolean} [asFunc=true] Return a Sift filtering function (the most efficient method), if falsy return the compiled object (useful for debugging)
            * @returns {Sift} Sift function for use with $macgyver.utils.evalMatch()
            */


            $macgyver.utils.evalCompile = function (expression) {
              var asFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              var match;

              if (isFunction_1(expression)) {
                // Already compiled Sift function
                if (!asFunc) throw new Error('Cannot convert compiled Sift object back to an object - disable asFunc parameter');
                return expression;
              } else if (isPlainObject_1(expression)) {
                // An object but not as Sift function
                return asFunc ? createDefaultQueryTester(expression) : expression;
              } else if (isString_1(expression) && (match = _wrapRegExp(/^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([\.0-9A-Z_a-z]+)([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*==?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*!=[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*<=?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>=?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+\$lte?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+\$gte?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, {
                left: 1,
                operand: 2,
                right: 3
              }).exec(expression))) {
                // Simple direct (in)equality e.g. `a == 1', `b != 'this'`
                match.groups.operand = match.groups.operand.trim();

                if (isFinite(match.groups.right)) {
                  match.groups.right = +match.groups.right;
                } else if (/^(["']).*\1$/.test(match.groups.right)) {
                  // Enclosed in " or '
                  match.groups.right = match.groups.right.substr(1, match.groups.right.length - 2);
                }

                var obj;

                if (['=', '==', '$eq'].includes(match.groups.operand)) {
                  // Direct equality
                  obj = _defineProperty({}, match.groups.left, match.groups.right);
                } else {
                  var siftOperand = ['!=', '$ne'].includes(match.groups.operand) ? '$ne' : ['>', '$gt'].includes(match.groups.operand) ? '$gt' : ['<', '$lt'].includes(match.groups.operand) ? '$lt' : ['>=', '$gte'].includes(match.groups.operand) ? '$gte' : ['<=', '$lte'].includes(match.groups.operand) ? '$lte' : function (e) {
                    throw e;
                  }(new Error("Unknown operand \"".concat(match.groups.operand, "\" while parsing expression \"").concat(expression, "\"")));
                  obj = _defineProperty({}, match.groups.left, _defineProperty({}, siftOperand, match.groups.right));
                }

                return asFunc ? createDefaultQueryTester(obj) : obj;
              } else {
                throw new Error("Error parsinng expression \"".concat(expression, "\", $macgyver.utils.evelParse() can only process simple expressions for now, use Sift object syntax for more complex tests"));
              }
            };
            /**
            * Evaluate an expression and return if it matches the given environment
            * This function is used by the `showIf` parameter to determine field visibility
            * NOTE: Passing a string to this function is possible but its better to precompile the expression via $macgyver.utils.evalCompile() first so its quicker to process each time
            * @param {string|Object|Sift} expression String expression (which will be parsed), object (which will be parsed) or Sift object to filter by in asending order of efficiency
            * @param {Object} env Local environment to compare
            */


            $macgyver.utils.evalMatch = function (expression, env) {
              return [env].filter($macgyver.utils.evalCompile(expression)).length == 1;
            };
            /**
            * Navigate down a dotted notation path and set the final value using Vue.set() (or simple object mutation if Vue is not available)
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
                  targ = $macgyver.utils.set(targ, chunks[i], {}); // Traversal point not yet setup
                } else {
                  targ = targ[chunks[i]]; // Recurse into the newly created child (or the existing branch)
                }
              }

              return $macgyver.utils.set(targ, chunks[chunks.length - 1], value);
            };
            /**
            * Mapping around Vue.set (if its available) or simple key/val setting
            * @param {Object} target The target object to mutate
            * @param {string} key The key to set
            * @param {*} val The value to set
            * @returns {*} The set value
            */


            $macgyver.utils.set = $macgyver.utils.global.Vue ? Vue.set : function (target, key, val) {
              return target[key] = val;
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
              return get_1(target, path, fallback);
            };

            /**
            * Main MacGyver "service" (acutally just a Vue prototype extension)
            * This service requires {$http, $toast} to be available on the prototype
            * @var {Object}
            */

            Vue$1.prototype.$macgyver = function () {
              var $macgyver$1 = $macgyver;

              var vInstance = new Vue$1();
              ['$on', '$off', '$once', '$emit'].forEach(function (method) {
                return $macgyver$1[method] = vInstance[method].bind(vInstance);
              });
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

              $macgyver$1.inject = function (component) {
                // Sanity checks {{{
                if (!component.$props.form) throw new Error('Cannot locate $props.form <string>, make sure that vm{props: {form: String, config: Object}} is declared'); // }}}

                component.$on('mgIdentify', function (reply) {
                  return reply(component);
                }); // Read in initial data value

                if (component.$props.config.$dataPath) {
                  var refresher = function refresher() {
                    component.data = _.get($macgyver$1.$forms[component.$props.form].formData, component.$props.config.$dataPath);
                  };

                  component.$on('mgRefresh', refresher);
                  $macgyver$1.$forms[component.$props.form].$on('mgRefreshForm', refresher);
                  refresher();
                } else if (component.$props.config["default"]) {
                  // No data path but there IS a default - link to that instead
                  component.data = _.clone(component.$props.config["default"]);
                } // Inject data watcher which transforms change operations into emitters to the nearest parent form {{{


                component.$watch('data', function (val) {
                  // Emit `mgChange` to form element
                  $macgyver$1.$forms[component.$props.form].$emit('mgChange', component.$props.config.$dataPath, val); // If the component also has a .onChange binding fire that

                  if (component.$props.config.onChange) component.$props.config.onChange.call(component, val);
                }); // }}}
              };
              /**
              * Registeres a MacGyver form by its generated ID
              * @params {VueInstance} component The Vue component to register
              */


              $macgyver$1.injectForm = function (component) {
                $macgyver$1.$forms[component.id] = component;
                component.$on('mgIdentify', function (reply) {
                  return reply(component);
                });
              }; // Auto-bind to Axios if its defined


              if (window.axios) $macgyver$1.$http = window.axios;
              return $macgyver$1;
            }();

            var script = Vue$1.prototype.$macgyver;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__ = normalizeComponent(
                {},
                __vue_inject_styles__,
                __vue_script__,
                __vue_scope_id__,
                __vue_is_functional_template__,
                __vue_module_identifier__,
                false,
                undefined,
                undefined,
                undefined
              );

            /**
            * Main MacGyver loader
            */
            window.macgyver = __vue_component__;
            Promise.resolve().then(function () { return watchAll; }); // Import all MacGyver components
            // NOTE: These are defined as dynamic imports as we need window.macgyver to be a accessible

            Promise.resolve().then(function () { return mgAlert; });
            Promise.resolve().then(function () { return mgButton; });
            Promise.resolve().then(function () { return mgCheckBox; });
            Promise.resolve().then(function () { return mgChoiceButtons; });
            Promise.resolve().then(function () { return mgChoiceCheckbox; });
            Promise.resolve().then(function () { return mgChoiceDropdown; });
            Promise.resolve().then(function () { return mgChoicePopup; }); // FIXME: Needs $prompt

            Promise.resolve().then(function () { return mgChoiceRadio; }); // FIXME: Not working

            Promise.resolve().then(function () { return mgChoiceTags; });
            Promise.resolve().then(function () { return mgCodeEditor; });
            Promise.resolve().then(function () { return mgComponent; });
            Promise.resolve().then(function () { return mgContainer; });
            Promise.resolve().then(function () { return mgDate; });
            Promise.resolve().then(function () { return mgEmail; });
            Promise.resolve().then(function () { return mgError; }); //... import('./components/mgFormEditor');

            Promise.resolve().then(function () { return mgForm; }); //... import('./components/mgGridDashboard');

            Promise.resolve().then(function () { return mgGrid; });
            Promise.resolve().then(function () { return mgHeading; });
            Promise.resolve().then(function () { return mgHtml; });
            Promise.resolve().then(function () { return mgIcon; }); // Not in showcase

            Promise.resolve().then(function () { return mgInfoBlock; }); // Not in showcase
            //... import('./components/mgInfoChart');

            Promise.resolve().then(function () { return mgLabel; });
            Promise.resolve().then(function () { return mgList; });
            Promise.resolve().then(function () { return mgNumber; });
            Promise.resolve().then(function () { return mgPermissions; });
            Promise.resolve().then(function () { return mgPlaceholder; });
            Promise.resolve().then(function () { return mgQuery; });
            Promise.resolve().then(function () { return mgRestQuery; }); // FIXME: Needs $prompt

            Promise.resolve().then(function () { return mgSeperator; });
            Promise.resolve().then(function () { return mgTable; });
            Promise.resolve().then(function () { return mgTextArea; });
            Promise.resolve().then(function () { return mgText; });
            Promise.resolve().then(function () { return mgTime; });
            Promise.resolve().then(function () { return mgToggle; });
            Promise.resolve().then(function () { return mgUrl; });

            /**
            * Binds a simple vm.$watchAll([props...], handler) function into the prototype scope
            * This works similar to the Angular vm.$watch([...]) function
            * @param {array <string|array>} props Named properties within `vm` to watch, dotted notation or array notation is supported
            * @param {function} callback The callback to run when the watch triggers
            * @param {Object} [options] Additional options
            * @param {boolean} [options.immediate=false] Execute the callback immediately on register, needAll can cause the callback not to fire if all required paths are not available yet
            * @param {boolean} [options.needAll=false] Only fire the watcher when every single member listed has a non-undefined value
            * @param {boolean} [options.needAllLock=true] WHether, after seeing all paths, we ALWAYS route to the callback in future, even if the values become undefined. Set to falsy to always check for the paths presence
            * @param {boolean} [options.preventLoops=true] Assume that the watcher can effect a peer expression and that we should not keep retriggering this watch expression
            */
            Vue.prototype.$watchAll = function (props, callback, options) {
              var _arguments = arguments,
                  _this = this;

              var settings = _objectSpread2({
                needAll: false,
                needAllLock: true,
                preventLoops: true,
                immediate: false
              }, options); // Remap handler based on the settings {{{


              var handler;

              if (settings.needAll) {
                // Remap handler with extra behaviour that checks all properties first
                var seenAll = false; // Whether at some point we have seen all values

                handler = function handler() {
                  if (settings.needAllLock && seenAll) return callback.apply(_this, _arguments);
                  if (settings.preventLoops && _this.$duringWatchAll) return; // Already updating

                  if (settings.preventLoops) _this.$duringWatchAll = true;

                  if (props.some(function (p) {
                    return !_this.$hasPath(p);
                  })) {
                    // Not ready yet
                    _this.$duringWatchAll = false;
                    return;
                  } else {
                    seenAll = true;
                  }

                  callback.apply(_this, _arguments);
                  if (settings.preventLoops) _this.$duringWatchAll = false;
                };
              } else {
                // No special treatment - just pass the callback
                handler = callback;
              } // }}}
              // Attach watcher to every named prop


              props.forEach(function (prop) {
                return _this.$watch(prop, handler.bind(null, prop));
              }); // Run handler immediately if needed

              if (settings.immediate) handler();
            };

            var script$1 = {};

            /* script */
            const __vue_script__$1 = script$1;

            /* template */

              /* style */
              const __vue_inject_styles__$1 = undefined;
              /* scoped */
              const __vue_scope_id__$1 = undefined;
              /* module identifier */
              const __vue_module_identifier__$1 = undefined;
              /* functional template */
              const __vue_is_functional_template__$1 = undefined;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$1 = normalizeComponent(
                {},
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

            var watchAll = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$1
            });

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
            var script$2 = Vue.component('mgAlert', {
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
              const __vue_inject_styles__$2 = undefined;
              /* scoped */
              const __vue_scope_id__$2 = undefined;
              /* module identifier */
              const __vue_module_identifier__$2 = undefined;
              /* functional template */
              const __vue_is_functional_template__$2 = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$2 = normalizeComponent(
                { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
                __vue_inject_styles__$2,
                __vue_script__$2,
                __vue_scope_id__$2,
                __vue_is_functional_template__$2,
                __vue_module_identifier__$2,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgAlert = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$2
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
            var script$3 = Vue.component('mgButton', {
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
              const __vue_inject_styles__$3 = undefined;
              /* scoped */
              const __vue_scope_id__$3 = undefined;
              /* module identifier */
              const __vue_module_identifier__$3 = undefined;
              /* functional template */
              const __vue_is_functional_template__$3 = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$3 = normalizeComponent(
                { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
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

            var mgButton = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$3
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
            var script$4 = Vue.component('mgCheckBox', {
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
            const __vue_script__$4 = script$4;

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
              const __vue_inject_styles__$4 = undefined;
              /* scoped */
              const __vue_scope_id__$4 = undefined;
              /* module identifier */
              const __vue_module_identifier__$4 = undefined;
              /* functional template */
              const __vue_is_functional_template__$4 = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$4 = normalizeComponent(
                { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
                __vue_inject_styles__$4,
                __vue_script__$4,
                __vue_scope_id__$4,
                __vue_is_functional_template__$4,
                __vue_module_identifier__$4,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgCheckBox = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$4
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
                required: {
                  type: 'mgToggle',
                  "default": false,
                  help: 'One choice must be selected'
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
                }
              },
              format: true // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?

            });
            var script$5 = Vue.component('mgChoiceButtons', {
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
            const __vue_script__$5 = script$5;

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
              const __vue_inject_styles__$5 = function (inject) {
                if (!inject) return
                inject("data-v-381711fe_0", { source: "\n.fa-invisible:before {\n\tcontent: \"\\f111\";\n\tvisibility: hidden;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgChoiceButtons.vue"],"names":[],"mappings":";AAsEA;CACA,gBAAA;CACA,kBAAA;AACA","file":"mgChoiceButtons.vue","sourcesContent":["<script>\nmacgyver.register('mgChoiceButtons', {\n\ttitle: 'Choice Buttons',\n\ticon: 'fas fa-rectangle-landscape',\n\tcategory: 'Choice Selectors',\n\tpreferId: true,\n\tconfig: {\n\t\tenum: { // Each item is in the form {id, [title], [class], [classActive], [classInactive], [tooltip]}\n\t\t\ttype: 'mgList',\n\t\t\ttitle: 'List items',\n\t\t\tdefault: ['Item One', 'Item Two', 'Item Three'],\n\t\t},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t\tclassWrapper: {type: 'mgText', default: 'btn-group', title: 'Group CSS class', advanced: true},\n\t\titemClassActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},\n\t\titemClassInactive: {type: 'mgText', default: 'btn btn-light', advanced: true},\n\t},\n\tformat: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?\n});\n\nexport default Vue.component('mgChoiceButtons', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tenumIter: [],\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tmethods: {\n\t\tselect(id) {\n\t\t\tthis.data = id;\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t});\n\t},\n\twatch: {\n\t\t'$props.config.enum': {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\tif (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings\n\t\t\t\t\tthis.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));\n\t\t\t\t} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection\n\t\t\t\t\tthis.enumIter = this.$props.config.enum;\n\t\t\t\t}\n\t\t\t},\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-choice-buttons\" :class=\"$props.config.classWrapper\">\n\t\t<a\n\t\t\tv-for=\"item in enumIter\"\n\t\t\t:key=\"item.id\"\n\t\t\t:class=\"data == item.id ? item.classActive || item.class || $props.config.itemClassActive : item.classInactive || item.class || $props.config.itemClassInactive\"\n\t\t\tv-tooltip=\"item.tooltip\"\n\t\t\t@click=\"select(item.id)\"\n\t\t>\n\t\t\t{{item.title}}\n\t\t</a>\n\t</div>\n</template>\n\n<style>\n.fa-invisible:before {\n\tcontent: \"\\f111\";\n\tvisibility: hidden;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$5 = undefined;
              /* module identifier */
              const __vue_module_identifier__$5 = undefined;
              /* functional template */
              const __vue_is_functional_template__$5 = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$5 = normalizeComponent(
                { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
                __vue_inject_styles__$5,
                __vue_script__$5,
                __vue_scope_id__$5,
                __vue_is_functional_template__$5,
                __vue_module_identifier__$5,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgChoiceButtons = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$5
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
            var script$6 = Vue.component('mgChoiceCheckbox', {
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
            const __vue_script__$6 = script$6;

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
              const __vue_inject_styles__$6 = undefined;
              /* scoped */
              const __vue_scope_id__$6 = undefined;
              /* module identifier */
              const __vue_module_identifier__$6 = undefined;
              /* functional template */
              const __vue_is_functional_template__$6 = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$6 = normalizeComponent(
                { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
                __vue_inject_styles__$6,
                __vue_script__$6,
                __vue_scope_id__$6,
                __vue_is_functional_template__$6,
                __vue_module_identifier__$6,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgChoiceCheckbox = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$6
            });

            var vueSelect = createCommonjsModule(function (module, exports) {
            !function(t,e){module.exports=e();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e){function n(t){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return "function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o;},function(t,e,n){},function(t,e,n){var o=n(4),i=n(5),r=n(6);t.exports=function(t){return o(t)||i(t)||r()};},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}};},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)};},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};},function(t,e,n){var o=n(1);n.n(o).a;},function(t,e,n){n.r(e);var o=n(2),i=n.n(o),r=n(0),s=n.n(r),a=n(3),l=n.n(a),u={watch:{typeAheadPointer:function(){this.maybeAdjustScroll();}},methods:{maybeAdjustScroll:function(){var t=this.pixelsToPointerTop(),e=this.pixelsToPointerBottom();return t<=this.viewport().top?this.scrollTo(t):e>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function(){var t=0;if(this.$refs.dropdownMenu)for(var e=0;e<this.typeAheadPointer;e++)t+=this.$refs.dropdownMenu.children[e].offsetHeight;return t},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var t=!!this.$refs.dropdownMenu&&this.$refs.dropdownMenu.children[this.typeAheadPointer];return t?t.offsetHeight:0},viewport:function(){return {top:this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop:0,bottom:this.$refs.dropdownMenu?this.$refs.dropdownMenu.offsetHeight+this.$refs.dropdownMenu.scrollTop:0}},scrollTo:function(t){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop=t:null}}},c={data:function(){return {typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t,this.maybeAdjustScroll&&this.maybeAdjustScroll();break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t,this.maybeAdjustScroll&&this.maybeAdjustScroll();break}},typeAheadSelect:function(){this.filteredOptions[this.typeAheadPointer]?this.select(this.filteredOptions[this.typeAheadPointer]):this.taggable&&this.search.length&&this.select(this.search),this.clearSearchOnSelect&&(this.search="");}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return {mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading);},loading:function(t){this.mutableLoading=t;}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function h(t,e,n,o,i,r,s,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s);},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot);}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)};}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l];}return {exports:t,options:u}}var d={Deselect:h({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])},[],!1,null,null,null).exports,OpenIndicator:h({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])},[],!1,null,null,null).exports};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o);}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach(function(e){l()(t,e,n[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));});}return t}var b={components:y({},d),mixins:[u,c,p],props:{value:{},components:{type:Object,default:function(){return {}}},options:{type:Array,default:function(){return []}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return !0}},getOptionLabel:{type:Function,default:function(t){return "object"===s()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"===s()(t)&&t.id)return t.id;try{return JSON.stringify(t)}catch(t){return console.warn("[vue-select warn]: Could not stringify option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey")}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect();}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return (e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter(function(t){var o=n.getOptionLabel(t);return "number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)})}},createOption:{type:Function,default:function(t){return "object"===s()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return ["function","boolean"].includes(s()(t))}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return [13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}}},data:function(){return {search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value);},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t);},multiple:function(){this.clearSelection();}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.maybePushTag);},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map(function(t){return e.findOptionFromReducedValue(t)}):this.$data._value=this.findOptionFromReducedValue(t);},select:function(t){this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&(t=this.createOption(t),this.$emit("option:created",t)),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t)),this.onAfterSelect(t);},deselect:function(t){var e=this;this.updateValue(this.selectedValue.filter(function(n){return !e.optionComparator(n,t)}));},clearSelection:function(){this.updateValue(this.multiple?[]:null);},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="");},updateValue:function(t){var e=this;this.isTrackingValues&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map(function(t){return e.reduce(t)}):this.reduce(t)),this.$emit("input",t);},toggleDropdown:function(t){var e=t.target;[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||!1)).some(function(t){return t.contains(e)||t===e})||(this.open?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus()));},isOptionSelected:function(t){var e=this;return this.selectedValue.some(function(n){return e.optionComparator(n,t)})},optionComparator:function(t,e){if("object"!==s()(t)&&"object"!==s()(e)){if(t===e)return !0}else{if(t===this.reduce(e))return !0;if(this.getOptionLabel(t)===this.getOptionLabel(e)||this.getOptionLabel(t)===e)return !0;if(this.reduce(t)===this.reduce(e))return !0}return !1},findOptionFromReducedValue:function(t){var e=this;return this.options.find(function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)})||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur");},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t);}},optionExists:function(t){var e=this;return this.optionList.some(function(n){return "object"===s()(n)&&e.getOptionLabel(n)===t||n===t})},normalizeOptionForSlot:function(t){return "object"===s()(t)?t:l()({},this.label,t)},maybePushTag:function(t){this.pushTags&&this.pushedTags.push(t);},onEscape:function(){this.search.length?this.search="":this.searchEl.blur();},onSearchBlur:function(){if(!this.mousedown||this.searching)return this.clearSearchOnBlur&&(this.search=""),void this.closeSearchOptions();this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions();},onSearchFocus:function(){this.open=!0,this.$emit("search:focus");},onMousedown:function(){this.mousedown=!0;},onMouseUp:function(){this.mousedown=!1;},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},o={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach(function(t){return o[t]=n});var i=this.mapKeydown(o,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushedTags)},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this;return {search:{attributes:{disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-expanded":this.dropdownOpen,"aria-label":"Search for option",ref:"search",role:"combobox",type:"search",autocomplete:"off",value:this.search},events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}}}},childComponents:function(){return y({},d,{},this.components)},stateClasses:function(){return {"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},clearSearchOnBlur:function(){return this.clearSearchOnSelect&&!this.multiple},searching:function(){return !!this.search},dropdownOpen:function(){return !this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;return this.taggable&&this.search.length&&!this.optionExists(this.search)&&e.unshift(this.search),e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return !this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},g=(n(7),h(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",on:{mousedown:function(e){return e.preventDefault(),t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button","aria-label":"Deselect option"},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})}),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear selection"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{role:"listbox"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._l(t.filteredOptions,function(e,o){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":o===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{role:"option"},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=o);},mousedown:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e);}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)}),t._v(" "),t.filteredOptions.length?t._e():n("li",{staticClass:"vs__no-options",on:{mousedown:function(t){t.stopPropagation();}}},[t._t("no-options",[t._v("Sorry, no matching options.")])],2)],2):t._e()])],1)},[],!1,null,null,null).exports),m={ajax:p,pointer:c,pointerScroll:u};n.d(e,"VueSelect",function(){return g}),n.d(e,"mixins",function(){return m});e.default=g;}])});

            });

            var VueSelect = unwrapExports(vueSelect);
            var vueSelect_1 = vueSelect.VueSelect;

            var _enumSource;
            Vue.component('v-select', VueSelect);
            macgyver.register('mgChoiceDropdown', {
              title: 'Dropdown multiple-choice',
              icon: 'far fa-chevron-circle-down',
              category: 'Choice Selectors',
              preferId: true,
              config: {
                enumSource: (_enumSource = {
                  type: 'mgChoiceButtons',
                  "default": 'list',
                  "enum": ['list', 'url']
                }, _defineProperty(_enumSource, "default", 'list'), _defineProperty(_enumSource, "help", 'Where to populate the list data from'), _enumSource),
                "enum": {
                  type: 'mgTable',
                  title: 'List items',
                  showIf: 'enumSource == "list"',
                  items: [{
                    id: 'id',
                    type: 'mgText',
                    required: true
                  }, {
                    id: 'title',
                    type: 'mgText',
                    required: true
                  }, {
                    id: 'icon',
                    type: 'mgIcon'
                  }]
                },
                enumUrl: {
                  type: 'mgUrl',
                  showIf: 'enumSource == "url"',
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
                },
                focus: {
                  type: 'mgToggle',
                  "default": false,
                  help: 'Auto-focus the element when it appears on screen'
                }
              },
              format: true,
              // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
              shorthand: ['choice', 'choose', 'dropdown', 'pick']
            });
            var script$7 = Vue.component('mgChoiceDropdown', {
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
                  this.value = val;
                },

                /**
                * Populate the enumIter object
                * This function also correctly populates the selected item (or the default)
                * Each item is assumed to have the spec `{id: String, title: String, icon?: String}`
                * @param {array<Object>} enumIter The new iterable enum
                */
                setEnum: function setEnum(enumIter) {
                  var _this = this;

                  this.enumIter = enumIter;

                  if (this.data) {
                    this.value = this.enumIter.find(function (e) {
                      return e.id == _this.data;
                    }) || this.data;
                  } else if (this.$props.config["default"]) {
                    this.value = this.enumIter.find(function (e) {
                      return e.id == _this.$props.config["default"];
                    }) || this.$props.config["default"];
                  }
                }
              },
              created: function created() {
                var _this2 = this;

                this.$macgyver.inject(this);
                this.$on('mgValidate', function (reply) {
                  if (_this2.$props.config.required && !_this2.data) return reply("".concat(_this2.$props.config.title, " is required"));
                });
                this.$watch('$props.config.enumUrl', function () {
                  if (!_this2.$props.config.enumUrl) return;

                  _this2.$macgyver.utils.fetch(_this2.$props.config.enumUrl, {
                    type: 'array'
                  }).then(function (data) {
                    return _this2.setEnum(data);
                  });
                }, {
                  immediate: true
                });
                this.$watch('$props.config.enum', function () {
                  if (_.isArray(_this2.$props.config["enum"]) && _.isString(_this2.$props.config["enum"][0])) {
                    // Array of strings
                    _this2.setEnum(_this2.$props.config["enum"].map(function (i) {
                      return {
                        id: _.camelCase(i),
                        title: i
                      };
                    }));
                  } else if (_.isArray(_this2.$props.config["enum"]) && _.isObject(_this2.$props.config["enum"][0])) {
                    // Collection
                    _this2.setEnum(_this2.$props.config["enum"]);
                  }
                }, {
                  immediate: true
                });
              },
              mounted: function mounted() {
                if (this.$props.config.focus) {
                  // NOTE: Focus selection does NOT work if DevTools is open in Chome
                  this.$refs.select.searchEl.focus();
                }
              }
            });

            /* script */
            const __vue_script__$7 = script$7;

            /* template */
            var __vue_render__$5 = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c("v-select", {
                ref: "select",
                attrs: {
                  value: _vm.value,
                  label: "title",
                  options: _vm.enumIter,
                  placeholder: _vm.$props.config.placeholder
                },
                on: { input: _vm.change },
                scopedSlots: _vm._u([
                  {
                    key: "selected-option",
                    fn: function(option) {
                      return [
                        _vm.value.icon ? _c("i", { class: _vm.value.icon }) : _vm._e(),
                        _vm._v("\n\t\t" + _vm._s(_vm.value.title) + "\n\t")
                      ]
                    }
                  },
                  {
                    key: "option",
                    fn: function(option) {
                      return [
                        option.icon ? _c("i", { class: option.icon }) : _vm._e(),
                        _vm._v("\n\t\t" + _vm._s(option.title) + "\n\t")
                      ]
                    }
                  }
                ])
              })
            };
            var __vue_staticRenderFns__$5 = [];
            __vue_render__$5._withStripped = true;

              /* style */
              const __vue_inject_styles__$7 = function (inject) {
                if (!inject) return
                inject("data-v-5ce58c1a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Make look consistant with Bootstrap */\n.v-select.open .dropdown-toggle {\n\tborder-color: #5cb3fd;\n}\n\n/* Remove weird dropdown icon that Bootstrap adds */\n.v-select .dropdown-toggle::after {\n\tdisplay: none;\n}\n\n/* Wider spacing for clear button */\n.v-select .dropdown-toggle .clear {\n\tmargin-right: 10px;\n}\n\n/* Align dropdown icon correctly */\n.v-select .open-indicator {\n\tmargin-top: -2px;\n}\n.v-select .vs__selected i {\n\tmargin-right: 5px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgChoiceDropdown.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkHA,wCAAA;AACA;CACA,qBAAA;AACA;;AAEA,mDAAA;AACA;CACA,aAAA;AACA;;AAEA,mCAAA;AACA;CACA,kBAAA;AACA;;AAEA,kCAAA;AACA;CACA,gBAAA;AACA;AAEA;CACA,iBAAA;AACA","file":"mgChoiceDropdown.vue","sourcesContent":["<script>\nimport VueSelect from 'vue-select';\nimport 'vue-select/dist/vue-select.css';\n\nVue.component('v-select', VueSelect);\n\nmacgyver.register('mgChoiceDropdown', {\n\ttitle: 'Dropdown multiple-choice',\n\ticon: 'far fa-chevron-circle-down',\n\tcategory: 'Choice Selectors',\n\tpreferId: true,\n\tconfig: {\n\t\tenumSource: {type: 'mgChoiceButtons', default: 'list', enum: ['list', 'url'], default: 'list', help: 'Where to populate the list data from'},\n\t\tenum: {\n\t\t\ttype: 'mgTable',\n\t\t\ttitle: 'List items',\n\t\t\tshowIf: 'enumSource == \"list\"',\n\t\t\titems: [\n\t\t\t\t{id: 'id', type: 'mgText', required: true},\n\t\t\t\t{id: 'title', type: 'mgText', required: true},\n\t\t\t\t{id: 'icon', type: 'mgIcon'},\n\t\t\t],\n\t\t},\n\t\tenumUrl: {type: 'mgUrl', showIf: 'enumSource == \"url\"', help: 'Data feed URL to fetch choice values from'},\n\t\tplaceholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t\tfocus: {type: 'mgToggle', default: false, help: 'Auto-focus the element when it appears on screen'},\n\t},\n\tformat: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?\n\tshorthand: ['choice', 'choose', 'dropdown', 'pick'],\n});\n\nexport default Vue.component('mgChoiceDropdown', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tvalue: [],\n\t\tenumIter: [],\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tmethods: {\n\t\tchange(val) {\n\t\t\tthis.data = val.id;\n\t\t\tthis.value = val;\n\t\t},\n\n\t\t/**\n\t\t* Populate the enumIter object\n\t\t* This function also correctly populates the selected item (or the default)\n\t\t* Each item is assumed to have the spec `{id: String, title: String, icon?: String}`\n\t\t* @param {array<Object>} enumIter The new iterable enum\n\t\t*/\n\t\tsetEnum(enumIter) {\n\t\t\tthis.enumIter = enumIter;\n\n\t\t\tif (this.data) {\n\t\t\t\tthis.value = this.enumIter.find(e => e.id == this.data) || this.data;\n\t\t\t} else if (this.$props.config.default) {\n\t\t\t\tthis.value = this.enumIter.find(e => e.id == this.$props.config.default) || this.$props.config.default;\n\t\t\t}\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t});\n\n\t\tthis.$watch('$props.config.enumUrl', ()=> {\n\t\t\tif (!this.$props.config.enumUrl) return;\n\t\t\tthis.$macgyver.utils.fetch(this.$props.config.enumUrl, {type: 'array'})\n\t\t\t\t.then(data => this.setEnum(data))\n\t\t}, {immediate: true});\n\n\t\tthis.$watch('$props.config.enum', ()=> {\n\t\t\tif (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings\n\t\t\t\tthis.setEnum(this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i})));\n\t\t\t} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection\n\t\t\t\tthis.setEnum(this.$props.config.enum);\n\t\t\t}\n\t\t}, {immediate: true});\n\t},\n\tmounted() {\n\t\tif (this.$props.config.focus) {\n\t\t\t// NOTE: Focus selection does NOT work if DevTools is open in Chome\n\t\t\tthis.$refs.select.searchEl.focus();\n\t\t}\n\t},\n});\n</script>\n\n<template>\n\t<v-select\n\t\tref=\"select\"\n\t\t:value=\"value\"\n\t\tlabel=\"title\"\n\t\t:options=\"enumIter\"\n\t\t:placeholder=\"$props.config.placeholder\"\n\t\t@input=\"change\"\n\t>\n\t\t<template #selected-option=\"option\">\n\t\t\t<i v-if=\"value.icon\" :class=\"value.icon\"/>\n\t\t\t{{value.title}}\n\t\t</template>\n\t\t<template #option=\"option\">\n\t\t\t<i v-if=\"option.icon\" :class=\"option.icon\"/>\n\t\t\t{{option.title}}\n\t\t</template>\n\t</v-select>\n</template>\n\n<style>\n/* Make look consistant with Bootstrap */\n.v-select.open .dropdown-toggle {\n\tborder-color: #5cb3fd;\n}\n\n/* Remove weird dropdown icon that Bootstrap adds */\n.v-select .dropdown-toggle::after {\n\tdisplay: none;\n}\n\n/* Wider spacing for clear button */\n.v-select .dropdown-toggle .clear {\n\tmargin-right: 10px;\n}\n\n/* Align dropdown icon correctly */\n.v-select .open-indicator {\n\tmargin-top: -2px;\n}\n\n.v-select .vs__selected i {\n\tmargin-right: 5px;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$7 = undefined;
              /* module identifier */
              const __vue_module_identifier__$7 = undefined;
              /* functional template */
              const __vue_is_functional_template__$7 = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$7 = normalizeComponent(
                { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
                __vue_inject_styles__$7,
                __vue_script__$7,
                __vue_scope_id__$7,
                __vue_is_functional_template__$7,
                __vue_module_identifier__$7,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgChoiceDropdown = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$7
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
                required: {
                  type: 'mgToggle',
                  "default": false,
                  help: 'One choice must be selected'
                },
                popupTitle: {
                  type: 'mgText',
                  "default": 'Select item',
                  advanced: true
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
                }
              },
              format: true // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?

            });
            var script$8 = Vue.component('mgChoicePopup', {
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
                    this.$macgyver.utils.fetch(this.$props.config.enumUrl, {
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
            const __vue_script__$8 = script$8;

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
              const __vue_inject_styles__$8 = undefined;
              /* scoped */
              const __vue_scope_id__$8 = undefined;
              /* module identifier */
              const __vue_module_identifier__$8 = undefined;
              /* functional template */
              const __vue_is_functional_template__$8 = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$8 = normalizeComponent(
                { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
                __vue_inject_styles__$8,
                __vue_script__$8,
                __vue_scope_id__$8,
                __vue_is_functional_template__$8,
                __vue_module_identifier__$8,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgChoicePopup = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$8
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
            var script$9 = Vue.component('mgChoiceRadio', {
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
            const __vue_script__$9 = script$9;

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
              const __vue_inject_styles__$9 = undefined;
              /* scoped */
              const __vue_scope_id__$9 = undefined;
              /* module identifier */
              const __vue_module_identifier__$9 = undefined;
              /* functional template */
              const __vue_is_functional_template__$9 = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$9 = normalizeComponent(
                { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
                __vue_inject_styles__$9,
                __vue_script__$9,
                __vue_scope_id__$9,
                __vue_is_functional_template__$9,
                __vue_module_identifier__$9,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgChoiceRadio = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$9
            });

            /**
            * NOTE: Toggling deselection from the menu is not yet supported until
            *       https://github.com/sagalbot/vue-select/pull/877
            *       Has been merged
            *       - MC 2020-01-10
            */
            Vue.component('v-select', VueSelect);
            macgyver.register('mgChoiceTags', {
              title: 'Dropdown multiple-choice',
              icon: 'far fa-tags',
              category: 'Choice Selectors',
              preferId: true,
              config: {
                "enum": {
                  type: 'mgList',
                  title: 'List items',
                  "default": ['Item One', 'Item Two', 'Item Three']
                },
                placeholder: {
                  type: 'mgText',
                  help: 'Ghost text to display when there is no value'
                },
                required: {
                  type: 'mgToggle',
                  "default": false,
                  help: 'One choice must be selected'
                },
                allowCreate: {
                  type: 'mgToggle',
                  "default": false,
                  help: 'Allow the user to create their own tags in addition to the supplied ones'
                },
                showDropdown: {
                  type: 'mgToggle',
                  "default": true,
                  help: 'When clicking, show a dropdown box. Disabling will only allow the user to use existing tags'
                },
                maxVisible: {
                  type: 'number',
                  "default": 0,
                  help: 'Maximum number of tags to display before showing helper text, set to zero to disable'
                }
              },
              format: true // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?

            });
            var script$a = Vue.component('mgChoiceTags', {
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
                  this.data = val.map(function (i) {
                    return i.id;
                  });
                  this.value = val;
                }
              },
              created: function created() {
                var _this = this;

                this.$macgyver.inject(this);
                this.$on('mgValidate', function (reply) {
                  if (_this.$props.config.required && !_this.data || !_this.data.length) return reply("".concat(_this.$props.config.title, " is required"));
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

                  if (_this.data) {
                    _this.value = _this.enumIter.filter(function (e) {
                      return e.id == _this.data;
                    }) || _this.data;
                  } else if (_this.$props.config["default"]) {
                    _this.value = _this.enumIter.filter(function (e) {
                      return e.id == _this.$props.config["default"];
                    }) || _this.$props.config["default"];
                  }
                }, {
                  immediate: true
                });
              }
            });

            /* script */
            const __vue_script__$a = script$a;

            /* template */
            var __vue_render__$8 = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c("v-select", {
                staticClass: "mg-choice-tags",
                attrs: {
                  value: _vm.value,
                  label: "title",
                  options: _vm.enumIter,
                  placeholder: _vm.$props.config.placeholder,
                  taggable: _vm.$props.config.allowCreate,
                  "no-drop": !_vm.$props.config.showDropdown,
                  "close-on-select": false,
                  multiple: true
                },
                on: { input: _vm.change },
                scopedSlots: _vm._u([
                  {
                    key: "option",
                    fn: function(option) {
                      return [
                        _c("i", {
                          staticClass: "far fa-fw",
                          class: _vm.value.some(function(v) {
                            return v.id == option.id
                          })
                            ? "fa-check"
                            : "",
                          attrs: { "data-id": option.id }
                        }),
                        _vm._v("\n\t\t" + _vm._s(option.title) + "\n\t")
                      ]
                    }
                  },
                  {
                    key: "selected-option-container",
                    fn: function(props) {
                      return [
                        !_vm.$props.config.maxVisible ||
                        _vm.value.length - 1 < _vm.$props.config.maxVisible
                          ? _c("span", { staticClass: "vs__selected" }, [
                              _vm._v("\n\t\t\t" + _vm._s(props.option.title) + "\n\t\t\t"),
                              _c("i", {
                                staticClass: "far fa-times ml-1 clickable",
                                on: {
                                  click: function($event) {
                                    return props.deselect(props.option)
                                  }
                                }
                              })
                            ])
                          : props.option.id == _vm.value[0].id
                          ? _c("span", { staticClass: "vs__selected_overflow" }, [
                              _vm._v(
                                "\n\t\t\t" +
                                  _vm._s(_vm.value.length) +
                                  " items selected\n\t\t"
                              )
                            ])
                          : _c("span")
                      ]
                    }
                  }
                ])
              })
            };
            var __vue_staticRenderFns__$8 = [];
            __vue_render__$8._withStripped = true;

              /* style */
              const __vue_inject_styles__$a = function (inject) {
                if (!inject) return
                inject("data-v-5b47f533_0", { source: "\n.mg-choice-tags.v-select .vs__selected > i {\n\tcursor: pointer;\n}\n.mg-choice-tags.v-select .vs__selected_overflow {\n\tmargin: 2px 10px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgChoiceTags.vue"],"names":[],"mappings":";AA6GA;CACA,eAAA;AACA;AAEA;CACA,gBAAA;AACA","file":"mgChoiceTags.vue","sourcesContent":["<script>\n/**\n* NOTE: Toggling deselection from the menu is not yet supported until\n*       https://github.com/sagalbot/vue-select/pull/877\n*       Has been merged\n*       - MC 2020-01-10\n*/\n\nimport VueSelect from 'vue-select';\nimport 'vue-select/dist/vue-select.css';\n\nVue.component('v-select', VueSelect);\n\nmacgyver.register('mgChoiceTags', {\n\ttitle: 'Dropdown multiple-choice',\n\ticon: 'far fa-tags',\n\tcategory: 'Choice Selectors',\n\tpreferId: true,\n\tconfig: {\n\t\tenum: {\n\t\t\ttype: 'mgList',\n\t\t\ttitle: 'List items',\n\t\t\tdefault: ['Item One', 'Item Two', 'Item Three'],\n\t\t},\n\t\tplaceholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t\tallowCreate: {type: 'mgToggle', default: false, help: 'Allow the user to create their own tags in addition to the supplied ones'},\n\t\tshowDropdown: {type: 'mgToggle', default: true, help: 'When clicking, show a dropdown box. Disabling will only allow the user to use existing tags'},\n\t\tmaxVisible: {type: 'number', default: 0, help: 'Maximum number of tags to display before showing helper text, set to zero to disable'},\n\t},\n\tformat: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?\n});\n\nexport default Vue.component('mgChoiceTags', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tvalue: [],\n\t\tenumIter: [],\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tmethods: {\n\t\tchange(val) {\n\t\t\tthis.data = val.map(i => i.id);\n\t\t\tthis.value = val;\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data || !this.data.length) return reply(`${this.$props.config.title} is required`);\n\t\t});\n\n\t\tthis.$watch('$props.config.enum', ()=> {\n\t\t\tif (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings\n\t\t\t\tthis.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));\n\t\t\t} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection\n\t\t\t\tthis.enumIter = this.$props.config.enum;\n\t\t\t}\n\n\t\t\tif (this.data) {\n\t\t\t\tthis.value = this.enumIter.filter(e => e.id == this.data) || this.data;\n\t\t\t} else if (this.$props.config.default) {\n\t\t\t\tthis.value = this.enumIter.filter(e => e.id == this.$props.config.default) || this.$props.config.default;\n\t\t\t}\n\t\t}, {immediate: true});\n\t},\n});\n</script>\n\n<template>\n\t<v-select\n\t\tclass=\"mg-choice-tags\"\n\t\t:value=\"value\"\n\t\tlabel=\"title\"\n\t\t:options=\"enumIter\"\n\t\t:placeholder=\"$props.config.placeholder\"\n\t\t:taggable=\"$props.config.allowCreate\"\n\t\t:no-drop=\"!$props.config.showDropdown\"\n\t\t:close-on-select=\"false\"\n\t\t:multiple=\"true\"\n\t\t@input=\"change\"\n\t>\n\t\t<template #option=\"option\">\n\t\t\t<i\n\t\t\t\tclass=\"far fa-fw\"\n\t\t\t\t:class=\"value.some(v => v.id == option.id) ? 'fa-check' : ''\"\n\t\t\t\t:data-id=\"option.id\"\n\t\t\t/>\n\t\t\t{{option.title}}\n\t\t</template>\n\t\t<template #selected-option-container=\"props\">\n\t\t\t<span v-if=\"!$props.config.maxVisible || value.length - 1 < $props.config.maxVisible\" class=\"vs__selected\">\n\t\t\t\t{{props.option.title}}\n\t\t\t\t<i @click=\"props.deselect(props.option)\" class=\"far fa-times ml-1 clickable\"/>\n\t\t\t</span>\n\t\t\t<!-- Render only the first selected element - skip the rest -->\n\t\t\t<span v-else-if=\"props.option.id == value[0].id\" class=\"vs__selected_overflow\">\n\t\t\t\t{{value.length}} items selected\n\t\t\t</span>\n\t\t\t<!-- Not sure why Vue needs an empty element but if its not here it falls back to the v-select render -->\n\t\t\t<span v-else/>\n\t\t</template>\n\t</v-select>\n</template>\n\n<style>\n.mg-choice-tags.v-select .vs__selected > i {\n\tcursor: pointer;\n}\n\n.mg-choice-tags.v-select .vs__selected_overflow {\n\tmargin: 2px 10px;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$a = undefined;
              /* module identifier */
              const __vue_module_identifier__$a = undefined;
              /* functional template */
              const __vue_is_functional_template__$a = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$a = normalizeComponent(
                { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
                __vue_inject_styles__$a,
                __vue_script__$a,
                __vue_scope_id__$a,
                __vue_is_functional_template__$a,
                __vue_module_identifier__$a,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgChoiceTags = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$a
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
                convert: {
                  type: 'mgToggle',
                  "default": true,
                  showIf: 'syntax == "json"',
                  help: 'Convert data back to a native JS object'
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
                  help: 'The size of the editing window as a valid CSS measurement',
                  advanced: true
                }
              }
            });
            var script$b = Vue.component('mgCodeEditor', {
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
                this.editor.setValue(_.isObject(this.data) ? JSON.stringify(this.data, null, '\t') // Parse raw objects into JSON
                : this.data ? this.data : '', 1);
                this.editor.setOptions({
                  showPrintMargin: false
                });
                this.editor.on('change', function () {
                  var val = _this.editor.getValue();

                  if (_this.$props.config.convert && _this.$props.config.syntax == 'json') {
                    try {
                      val = JSON.parse(val);

                      _this.$macgyver.forms.emit(_this.form, 'mgChange', _this.$props.config.id, val);
                    } catch (e) {// Silently fail as the JSON is invalid
                    }
                  } else {
                    _this.$macgyver.forms.emit(_this.form, 'mgChange', _this.$props.config.id, val);
                  }

                  return true;
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
            const __vue_script__$b = script$b;

            /* template */

              /* style */
              const __vue_inject_styles__$b = function (inject) {
                if (!inject) return
                inject("data-v-05527811_0", { source: "\n.mg-code-editor {\n\tborder: 1px solid #f0f0f0;\n\tborder-radius: 5px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgCodeEditor.vue"],"names":[],"mappings":";AA+EA;CACA,yBAAA;CACA,kBAAA;AACA","file":"mgCodeEditor.vue","sourcesContent":["<script>\nmacgyver.register('mgCodeEditor', {\n\trequires: 'node_modules/ace-builds/src-noconflict/ace.js',\n\ttitle: 'Code Editor',\n\ticon: 'fal fa-code',\n\tcategory: 'Complex Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\tsyntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript'], default: 'json'},\n\t\tconvert: {type: 'mgToggle', default: true, showIf: 'syntax == \"json\"', help: 'Convert data back to a native JS object'},\n\t\ttheme: {type: 'mgChoiceDropdown', enum: ['chrome'], advanced: true, default: 'chrome', help: 'The syntax color scheme to use'},\n\t\theight: {type: 'mgText', default: '400px', help: 'The size of the editing window as a valid CSS measurement', advanced: true},\n\t},\n});\n\nexport default Vue.component('mgCodeEditor', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\twatch: {\n\t\tconfig() {\n\t\t\tthis.editor.getSession().setMode(`ace/mode/${this.$props.config.syntax}`);\n\t\t\tthis.editor.setTheme(`ace/theme/${this.$props.config.theme}`);\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n\tbeforeDestroy() {\n\t\tthis.editor.destroy();\n\t\tthis.editor.container.remove();\n\t},\n\tmounted() {\n\t\tthis.editor = ace.edit(this.$el);\n\t\tthis.editor.$blockScrolling = Infinity;\n\n\t\tthis.editor.setValue(\n\t\t\t_.isObject(this.data) ? JSON.stringify(this.data, null, '\\t') // Parse raw objects into JSON\n\t\t\t: this.data ? this.data\n\t\t\t: ''\n\t\t, 1);\n\n\t\tthis.editor.setOptions({\n\t\t\tshowPrintMargin: false,\n\t\t});\n\n\t\tthis.editor.on('change', ()=> {\n\t\t\tvar val = this.editor.getValue();\n\t\t\tif (this.$props.config.convert && this.$props.config.syntax == 'json') {\n\t\t\t\ttry {\n\t\t\t\t\tval = JSON.parse(val);\n\t\t\t\t\tthis.$macgyver.forms.emit(this.form, 'mgChange', this.$props.config.id, val)\n\t\t\t\t} catch (e) {\n\t\t\t\t\t// Silently fail as the JSON is invalid\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tthis.$macgyver.forms.emit(this.form, 'mgChange', this.$props.config.id, val)\n\t\t\t}\n\t\t\treturn true;\n\t\t});\n\n\t\tthis.$nextTick(()=> this.editor.resize());\n\t},\n\trender(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tclass: 'mg-code-editor',\n\t\t\t\tstyle: `height: ${this.$props.config.height}; width: 100%`,\n\t\t\t},\n\t\t});\n\t},\n});\n</script>\n\n<style>\n.mg-code-editor {\n\tborder: 1px solid #f0f0f0;\n\tborder-radius: 5px;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$b = undefined;
              /* module identifier */
              const __vue_module_identifier__$b = undefined;
              /* functional template */
              const __vue_is_functional_template__$b = undefined;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$b = normalizeComponent(
                {},
                __vue_inject_styles__$b,
                __vue_script__$b,
                __vue_scope_id__$b,
                __vue_is_functional_template__$b,
                __vue_module_identifier__$b,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgCodeEditor = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$b
            });

            /**
            * Instance of a MacGyver widget
            * This is the parent of all other mg* components except mgContainer
            */
            var script$c = Vue.component('mgComponent', {
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
            const __vue_script__$c = script$c;

            /* template */

              /* style */
              const __vue_inject_styles__$c = undefined;
              /* scoped */
              const __vue_scope_id__$c = undefined;
              /* module identifier */
              const __vue_module_identifier__$c = undefined;
              /* functional template */
              const __vue_is_functional_template__$c = undefined;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$c = normalizeComponent(
                {},
                __vue_inject_styles__$c,
                __vue_script__$c,
                __vue_scope_id__$c,
                __vue_is_functional_template__$c,
                __vue_module_identifier__$c,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgComponent = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$c
            });

            /**
            * MacGyver component loader
            * This is a meta component that loads other dynamic components as an array
            * @param {Object} config The config specification
            * @param {array} config.items A collection of sub-item objects to display
            * @param {string} [config.title] The title of the container to display
            * @param {string} [config.layout="form"] The layout profile to use. ENUM: form = A standard horizontal form layout, card = a Bootstrap 4 card with header and footer, columns = vertically sorted column display, query = an inline query constructor
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
                  }, {
                    id: 'query',
                    title: 'Query constructor'
                  }]
                },
                showTitles: {
                  type: 'mgToggle',
                  "default": true,
                  help: 'Show titles for fields',
                  showIf: {
                    layout: {
                      $in: ['form', 'card']
                    }
                  }
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
                  advanced: true,
                  "enum": [{
                    id: '',
                    title: 'Normal'
                  }, {
                    id: 'mgContainerRowLarge',
                    title: 'Large text'
                  }]
                },
                onChange: {
                  type: 'string',
                  title: 'Change action',
                  help: 'Action to trigger when the value of this component changes',
                  advanced: true
                },
                show: {
                  type: 'mgToggle',
                  "default": true,
                  advanced: true,
                  help: 'Whether the item is visible by default'
                },
                showIf: {
                  type: 'mgCodeEditor',
                  syntax: 'text',
                  advanced: true,
                  help: 'A simple equality expression or Sift object to deteremine visibility'
                }
              }
            });
            var script$d = Vue.component('mgContainer', {
              data: function data() {
                return {
                  highlights: {},
                  // Lookup of extra classes to add to widgets
                  localData: {} // Lookup of immediate child data values, used when `$props.config.layout == 'formFloating'`

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

                if (this.$props.config.layout == 'formFloating') {
                  // When in floating mode we need to keep track of child data so we copy its value into our `localData` object lookup
                  this.$macgyver.$forms[this.$props.form].$on('changeItem', function (v) {
                    // Bind to parent form handler
                    if (_this.$props.config.items.some(function (item) {
                      return item.$dataPath == v.path;
                    })) {
                      // Is this widget one of our immediate children?
                      _this.$set(_this.localData, v.path, v.value); // Copy its data against our local copy

                    }
                  });
                }
              }
            });

            /* script */
            const __vue_script__$d = script$d;

            /* template */
            var __vue_render__$9 = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _vm.$props.config.layout == "form" ||
                _vm.$props.config.layout === undefined
                ? _c(
                    "div",
                    _vm._l(_vm.$props.config.items, function(widget, widgetIndex) {
                      return widget.show
                        ? _c(
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
                        : _vm._e()
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
                            return widget.show
                              ? _c(
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
                                          {
                                            staticClass: "control-label text-left col-sm-3"
                                          },
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
                                              widget.showTitle ||
                                              _vm.$props.config.showTitles
                                                ? "col-sm-9 col-sm-offset-3"
                                                : "col-sm-12"
                                          },
                                          [_vm._v(_vm._s(widget.help))]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              : _vm._e()
                          }),
                          0
                        )
                      ]
                    )
                  ])
                : _vm.$props.config.layout == "formFloating"
                ? _c(
                    "div",
                    _vm._l(_vm.$props.config.items, function(widget, widgetIndex) {
                      return widget.show
                        ? _c(
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
                                    class: !_vm.localData[widget.$dataPath] && "blank",
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
                                    : _vm._e()
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
                        : _vm._e()
                    }),
                    0
                  )
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
                                  return widget.show
                                    ? _c("th", { key: widget.id }, [
                                        _vm._v(_vm._s(widget.title))
                                      ])
                                    : _vm._e()
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
                              return widget.show
                                ? _c(
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
                                : _vm._e()
                            }),
                            0
                          )
                        ])
                      ]
                    )
                  ])
                : _vm.$props.config.layout == "query"
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "mg-container mg-container-query" },
                      _vm._l(_vm.$props.config.items, function(rowWidget) {
                        return _c("div", { key: rowWidget.id }, [
                          rowWidget.type == "mgContainer" && rowWidget.layout == "query-row"
                            ? _c(
                                "div",
                                { staticClass: "row" },
                                _vm._l(rowWidget.items, function(colWidget) {
                                  return _c(
                                    "div",
                                    { key: colWidget.id, staticClass: "col mgComponent" },
                                    [
                                      _c("mg-component", {
                                        attrs: { form: _vm.$props.form, config: colWidget }
                                      })
                                    ],
                                    1
                                  )
                                }),
                                0
                              )
                            : _c("div", { staticClass: "alert alert-danger" }, [
                                _vm._v(
                                  "\n\t\t\t\tAll children of mgContainer[layout=query] must match the mgContainer[layout=queryRow]\n\t\t\t\t"
                                ),
                                _c("pre", [_vm._v(_vm._s(_vm.widget))])
                              ])
                        ])
                      }),
                      0
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
            var __vue_staticRenderFns__$9 = [];
            __vue_render__$9._withStripped = true;

              /* style */
              const __vue_inject_styles__$d = function (inject) {
                if (!inject) return
                inject("data-v-57587100_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Card layout {{{ */\n/* Collapsable card {{{ */\n.mg-container.card.card-collapsable {\n\ttransition: all 0.2s ease-in;\n}\n.mg-container.card.card-collapsable .card-header {\n\tcursor: pointer;\n}\n.mg-container.card.card-collapsable .card-header::after {\n\tfont-family: \"Font Awesome 5 Pro\";\n\tcontent: '\\f054';\n\tfloat: right;\n\ttransition: transform 0.4s;\n}\n.mg-container.card.card-collapsable:not(.card-collapsed) .card-header::after {\n\ttransform: rotate(90deg);\n}\n\n\n/* Collapsed card {{{ */\n.mg-container.card.card-collapsable.card-collapsed {\n\tbox-shadow: none;\n\tborder-bottom: none;\n\tmargin-bottom: 0px;\n}\n.mg-container.card.card-collapsable.card-collapsed .card-body {\n\tdisplay: none;\n}\n/* }}} */\n/* }}} */\n/* }}} */\n\n/* formFloating {{{ */\n.mgContainer-formFloating > .col-12 {\n\tposition: relative;\n\tline-height: 14px;\n\tmargin: 0 0px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n.mgContainer-formFloating > .col-12 > .control-input {\n\theight: 45px;\n\tpadding-top: 8px;\n\tpadding-bottom: 2px;\n\tpadding-left: 2px;\n\tpadding-right: 12px;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n\tcolor: #333333;\n\tbackground-color: #ffffff;\n\tbackground-image: none;\n\toutline: none;\n\t/* border: 1px solid rgba(120, 120, 120, 0.5);\n\t*/\n\tborder: none;\n\tborder-bottom: 1px solid #bbb;\n\t-moz-box-shadow: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tborder-radius: 0;\n\tposition: relative;\n}\n.mgContainer-formFloating > .col-12 > .control-input.blank + .control-label {\n\ttransform: translateY(0px);\n\tcolor: #bbb;\n\tfont-size: 15px;\n\tfont-weight: 100;\n\topacity: 1;\n}\n.mgContainer-formFloating > .col-12 > .control-input.control-input:focus + .control-label {\n\ttransform: translateY(-21px);\n\tcolor: #66afe9;\n\tfont-size: 14px;\n\topacity: 1;\n\tfont-weight: 100;\n\tbackground-color: white;\n}\n.mgContainer-formFloating > .col-12 > .control-label {\n\tcolor: #aaa;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tposition: absolute;\n\tz-index: 2;\n\tleft: 2px;\n\ttop: 16px;\n\tpadding: 0 0px;\n\tpointer-events: none;\n\tbackground: white;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-21px);\n\tfont-weight: 500;\n}\n/* }}} */\n\n/* Columns layout {{{ */\n.mg-container.mg-container-columns-no-border th,\n.mg-container.mg-container-columns-no-border td {\n\tpadding: 5px;\n}\n/* }}} */\n\n/* Query layout {{{ */\n.mg-container.mg-container-query .row {\n\tdisplay: block;\n}\n.mg-container.mg-container-query .col {\n\tdisplay: inline-flex;\n\twidth: 200px;\n\theight: 35px;\n\tmin-width: 200px;\n\tmargin-left: 30px;\n\tmargin-bottom: 10px;\n\tmax-width: 400px;\n\tposition: relative;\n\talign-items: center;\n\tbox-shadow: 1px 3px 5px 0px rgba(50, 50, 50, 0.75);\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\theight: 38px;\n\tpadding: 5px 15px;\n\tbackground: #FFF;\n}\n\n/* Query > Background color scale {{{ */\n.mg-container.mg-container-query .col:nth-child(1) {\n\tbackground: #104E8B;\n}\n.mg-container.mg-container-query .col:nth-child(2) {\n\tbackground: #1874CD;\n}\n.mg-container.mg-container-query .col:nth-child(3) {\n\tbackground: #1C86EE;\n}\n/* }}} */\n\n/* Query > Connecting lines {{{ */\n/* Vertical */\n.mg-container.mg-container-query .row::before {\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 4px;\n\ttop: 17px;\n\tbottom: 30px;\n}\n\n/* Horizontal */\n.mg-container.mg-container-query .col::before {\n\tleft: -30px;\n\theight: 4px;\n\ttop: calc(50% - 2px);\n\twidth: 30px;\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n}\n/* }}} */\n\n/* Query > Basic Inputs {{{ */\n.mg-container.mg-container-query .col input {\n\tbackground: transparent;\n\tborder: 1px solid transparent;\n\tcolor: #FFF;\n\theight: 1.8em;\n\tborder-radius: 0px;\n}\n.mg-container.mg-container-query .col input[type=text] {\n\tborder-bottom: 1px solid #CCC;\n}\n.mg-container.mg-container-query .col input[type=number] {\n\ttext-align: center;\n}\n.mg-container.mg-container-query .col input:focus {\n\tbox-shadow: none;\n\tborder: 1px solid #CCC;\n}\n/* }}} */\n\n/* Query > Buttons {{{ */\n.mg-container.mg-container-query .col .btn {\n\tbox-shadow: none;\n\tpadding: 1px 5px;\n\tbackground: transparent;\n\tborder: 1px solid #003e7b;\n}\n.mg-container.mg-container-query .col .btn,\n.mg-container.mg-container-query .col svg {\n\topacity: 0.2;\n\ttransition: opacity 0.5s;\n}\n.mg-container.mg-container-query .row:hover .col .btn,\n.mg-container.mg-container-query .row:hover .col svg {\n\topacity: 1;\n}\n.mg-container.mg-container-query .col .vs__clear {\n\tdisplay: none;\n}\n/* }}} */\n\n/* Query > Dropdowns {{{ */\n.mg-container.mg-container-query .v-select {\n\twidth: 100%;\n}\n.mg-container.mg-container-query .v-select,\n.mg-container.mg-container-query .v-select .vs--searchable .vs__dropdown-toggle,\n.mg-container.mg-container-query .v-select .vs__selected,\n.mg-container.mg-container-query .v-select input,\n.mg-container.mg-container-query .v-select .vs__actions {\n\tcursor: pointer !important;\n}\n.mg-container.mg-container-query .v-select .vs__dropdown-toggle {\n\tborder: none;\n}\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\tcolor: #FFF;\n}\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\ttop: 3px;\n}\n.mg-container.mg-container-query .col .v-select .vs__actions svg,\n.mg-container.mg-container-query .col .v-select .vs__deselect {\n\tstroke: #FFF;\n\tfill: #FFF;\n}\n.mg-container.mg-container-query .col .v-select.mg-choice-tags .vs__selected-options .vs__selected {\n\tbackground-color: #5bc0de;\n\tborder-radius: 10px;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tline-height: 1rem;\n\tmin-width: 10px;\n\tpadding: 1px 10px;\n\ttext-align: center;\n\tvertical-align: middle;\n\twhite-space: nowrap;\n\tborder: none;\n}\n/* }}} */\n\n/* Query > Toggle {{{ */\n.mg-container.mg-container-query .col .vue-js-switch {\n\tmargin: auto;\n\theight: 10px;\n\ttop: -5px;\n}\n/* }}} */\n/* }}} */\n\n/* Misc utility types {{{ */\n.mg-form .help-block {\n\tfont-size: 80%;\n\tcolor: #6c757d !important;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgContainer.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4MA,oBAAA;AACA,yBAAA;AACA;CACA,4BAAA;AACA;AAEA;CACA,eAAA;AACA;AAEA;CACA,iCAAA;CACA,gBAAA;CACA,YAAA;CACA,0BAAA;AACA;AAEA;CACA,wBAAA;AACA;;;AAGA,uBAAA;AACA;CACA,gBAAA;CACA,mBAAA;CACA,kBAAA;AACA;AAEA;CACA,aAAA;AACA;AACA,QAAA;AACA,QAAA;AACA,QAAA;;AAEA,qBAAA;AACA;CACA,kBAAA;CACA,iBAAA;CACA,aAAA;CACA,qBAAA;CACA,WAAA;AACA;AAEA;CACA,YAAA;CACA,gBAAA;CACA,mBAAA;CACA,iBAAA;CACA,mBAAA;CACA,eAAA;CACA,uBAAA;CACA,cAAA;CACA,yBAAA;CACA,sBAAA;CACA,aAAA;CACA;EACA;CACA,YAAA;CACA,6BAAA;CACA,qBAAA;CACA,wBAAA;CACA,gBAAA;CACA,gBAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;CACA,WAAA;CACA,eAAA;CACA,gBAAA;CACA,UAAA;AACA;AAEA;CACA,4BAAA;CACA,cAAA;CACA,eAAA;CACA,UAAA;CACA,gBAAA;CACA,uBAAA;AACA;AAEA;CACA,WAAA;CACA,qBAAA;CACA,eAAA;CACA,kBAAA;CACA,UAAA;CACA,SAAA;CACA,SAAA;CACA,cAAA;CACA,oBAAA;CACA,iBAAA;CACA,0BAAA;CACA,4BAAA;CACA,gBAAA;AACA;AACA,QAAA;;AAEA,uBAAA;AACA;;CAEA,YAAA;AACA;AACA,QAAA;;AAEA,qBAAA;AACA;CACA,cAAA;AACA;AAEA;CACA,oBAAA;CACA,YAAA;CACA,YAAA;CACA,gBAAA;CACA,iBAAA;CACA,mBAAA;CACA,gBAAA;CACA,kBAAA;CACA,mBAAA;CACA,kDAAA;CACA,kBAAA;CACA,WAAA;CACA,YAAA;CACA,iBAAA;CACA,gBAAA;AACA;;AAEA,uCAAA;AACA;CACA,mBAAA;AACA;AAEA;CACA,mBAAA;AACA;AAEA;CACA,mBAAA;AACA;AACA,QAAA;;AAEA,iCAAA;AACA,aAAA;AACA;CACA,sBAAA;CACA,WAAA;CACA,cAAA;CACA,kBAAA;CACA,UAAA;CACA,SAAA;CACA,YAAA;AACA;;AAEA,eAAA;AACA;CACA,WAAA;CACA,WAAA;CACA,oBAAA;CACA,WAAA;CACA,sBAAA;CACA,WAAA;CACA,cAAA;CACA,kBAAA;AACA;AACA,QAAA;;AAEA,6BAAA;AACA;CACA,uBAAA;CACA,6BAAA;CACA,WAAA;CACA,aAAA;CACA,kBAAA;AACA;AAEA;CACA,6BAAA;AACA;AAEA;CACA,kBAAA;AACA;AAEA;CACA,gBAAA;CACA,sBAAA;AACA;AACA,QAAA;;AAEA,wBAAA;AACA;CACA,gBAAA;CACA,gBAAA;CACA,uBAAA;CACA,yBAAA;AACA;AAEA;;CAEA,YAAA;CACA,wBAAA;AACA;AAEA;;CAEA,UAAA;AACA;AAEA;CACA,aAAA;AACA;AACA,QAAA;;AAEA,0BAAA;AACA;CACA,WAAA;AACA;AAEA;;;;;CAKA,0BAAA;AACA;AAEA;CACA,YAAA;AACA;AAEA;CACA,WAAA;AACA;AAEA;CACA,QAAA;AACA;AAEA;;CAEA,YAAA;CACA,UAAA;AACA;AAEA;CACA,yBAAA;CACA,mBAAA;CACA,WAAA;CACA,qBAAA;CACA,eAAA;CACA,iBAAA;CACA,eAAA;CACA,iBAAA;CACA,kBAAA;CACA,sBAAA;CACA,mBAAA;CACA,YAAA;AACA;AACA,QAAA;;AAEA,uBAAA;AACA;CACA,YAAA;CACA,YAAA;CACA,SAAA;AACA;AACA,QAAA;AACA,QAAA;;AAEA,2BAAA;AACA;CACA,cAAA;CACA,yBAAA;AACA;AACA,QAAA","file":"mgContainer.vue","sourcesContent":["<script>\n/**\n* MacGyver component loader\n* This is a meta component that loads other dynamic components as an array\n* @param {Object} config The config specification\n* @param {array} config.items A collection of sub-item objects to display\n* @param {string} [config.title] The title of the container to display\n* @param {string} [config.layout=\"form\"] The layout profile to use. ENUM: form = A standard horizontal form layout, card = a Bootstrap 4 card with header and footer, columns = vertically sorted column display, query = an inline query constructor\n* @param {boolean} [config.items[].help] Optional help text to show under the element\n* @param {boolean} [config.items[].showTitle=true] Whether to show the left-hand-side form title for the item\n* @param {string} [config.items[].title] Optional title to display for the widget\n* @param {string} config.items[].type The type of the object to render. This corresponds to a `mg*` component\n*/\n\nmacgyver.register('mgContainer', {\n\ttitle: 'Container layout',\n\ticon: 'far fa-th-large',\n\tcategory: 'Layout',\n\tisContainer: true,\n\tpreferId: false,\n\tconfig: {\n\t\tlayout: {\n\t\t\ttype: 'mgChoiceRadio',\n\t\t\ttitle: 'Layout profile',\n\t\t\thelp: 'How to layout child elements',\n\t\t\tdefault: 'form',\n\t\t\tenum: [\n\t\t\t\t{id: 'form', title: 'Simple form layout'},\n\t\t\t\t{id: 'formFloating', title: 'Form with floating labels'},\n\t\t\t\t{id: 'card', title: 'Card based layout'},\n\t\t\t\t{id: 'columns', title: 'Vertical column layout'},\n\t\t\t\t{id: 'query', title: 'Query constructor'},\n\t\t\t],\n\t\t},\n\t\tshowTitles: {type: 'mgToggle', default: true, help: 'Show titles for fields', showIf: {layout: {$in: ['form', 'card']}}},\n\t\tcolumnHeaders: {type: 'mgToggle', default: false, help: 'Show column headers', showIf: \"layout == 'columns'\"},\n\t\tcollapsable: {type: 'mgToggle', default: false, help: 'This card can be hidden', showIf: \"layout == 'card'\"},\n\t\tcollapsed: {type: 'mgToggle', default: false, help: 'This card is collapsed by default', showIf: \"layout == 'card'\"},\n\t\tborder: {type: 'mgToggle', default: true, help: 'Show a border around the container', showIf: \"layout == 'columns'\"},\n\t},\n\tconfigChildren: {\n\t\thelp: {type: 'mgText', title: 'Help text', help: 'Optional help text for the item - just like what you are reading now'},\n\t\tshowTitle: {type: 'mgToggle', default: true, title: 'Show Title', help: 'Whether to show the side title for this element'},\n\t\ttitle: {type: 'mgText', title: 'Title'},\n\t\trowClass: {type: 'mgChoiceDropdown', title: 'Styling', help: 'Additional styling to apply to the widget', default: '', advanced: true, enum: [\n\t\t\t{id: '', title: 'Normal'},\n\t\t\t{id: 'mgContainerRowLarge', title: 'Large text'},\n\t\t]},\n\t\tonChange: {type: 'string', title: 'Change action', help: 'Action to trigger when the value of this component changes', advanced: true},\n\t\tshow: {type: 'mgToggle', default: true, advanced: true, help: 'Whether the item is visible by default'},\n\t\tshowIf: {type: 'mgCodeEditor', syntax: 'text', advanced: true, help: 'A simple equality expression or Sift object to deteremine visibility'},\n\t},\n});\n\nexport default Vue.component('mgContainer', {\n\tdata: ()=> ({\n\t\thighlights: {}, // Lookup of extra classes to add to widgets\n\t\tlocalData: {}, // Lookup of immediate child data values, used when `$props.config.layout == 'formFloating'`\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n\tmounted() {\n\t\tif (this.$props.config.collapsable) {\n\t\t\tvar $card = $(this.$el).find('.card').first();\n\n\t\t\t$card.find('.card-header').first().on('click', ()=> {\n\t\t\t\tvar $body = $(this.$el).find('.card-body');\n\t\t\t\tif ($card.hasClass('card-collapsed')) {\n\t\t\t\t\t$body.slideDown({complete: ()=> $card.removeClass('card-collapsed')});\n\t\t\t\t} else {\n\t\t\t\t\t$body.slideUp({complete: ()=> $card.addClass('card-collapsed')});\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\tif (this.$props.config.layout == 'formFloating') {\n\t\t\t// When in floating mode we need to keep track of child data so we copy its value into our `localData` object lookup\n\t\t\tthis.$macgyver.$forms[this.$props.form].$on('changeItem', v => { // Bind to parent form handler\n\t\t\t\tif (this.$props.config.items.some(item => item.$dataPath == v.path)) { // Is this widget one of our immediate children?\n\t\t\t\t\tthis.$set(this.localData, v.path, v.value); // Copy its data against our local copy\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t},\n});\n</script>\n\n<template>\n\t<div v-if=\"$props.config.layout == 'form' || $props.config.layout === undefined\">\n\t\t<div\n\t\t\tv-for=\"(widget, widgetIndex) in $props.config.items\"\n\t\t\t:key=\"widget.id\"\n\t\t\tv-if=\"widget.show\"\n\t\t\tclass=\"form-group row mgComponent\"\n\t\t\t:class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\"\n\t\t>\n\t\t\t<label v-if=\"widget.showTitle || $props.config.showTitles\" class=\"control-label text-left col-sm-3\">\n\t\t\t\t{{widget.title}}\n\t\t\t</label>\n\t\t\t<div :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9' : 'col-sm-12'\">\n\t\t\t\t<mg-component :form=\"$props.form\" :config=\"widget\"/>\n\t\t\t</div>\n\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t</div>\n\t</div>\n\t<div v-else-if=\"$props.config.layout == 'card'\">\n\t\t<div class=\"card mg-container\" :class=\"{'card-collapsable': $props.config.collapsable, 'card-collapsed': $props.config.collapsed}\">\n\t\t\t<div class=\"card-header\">{{$props.config.title}}</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div\n\t\t\t\t\tv-for=\"(widget, widgetIndex) in $props.config.items\"\n\t\t\t\t\t:key=\"widget.id\"\n\t\t\t\t\tv-if=\"widget.show\"\n\t\t\t\t\tclass=\"form-group row mgComponent\"\n\t\t\t\t\t:class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\"\n\t\t\t\t>\n\t\t\t\t\t<label v-if=\"widget.showTitle || $props.config.showTitles\" class=\"control-label text-left col-sm-3\">\n\t\t\t\t\t\t{{widget.title}}\n\t\t\t\t\t</label>\n\t\t\t\t\t<div :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9' : 'col-sm-12'\">\n\t\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"widget\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div v-else-if=\"$props.config.layout == 'formFloating'\">\n\t\t<div\n\t\t\tv-for=\"(widget, widgetIndex) in $props.config.items\"\n\t\t\t:key=\"widget.id\"\n\t\t\tv-if=\"widget.show\"\n\t\t\tclass=\"form-group mgContainer-formFloating row mgComponent\"\n\t\t\t:class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\"\n\t\t>\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<mg-component\n\t\t\t\t\t:form=\"$props.form\"\n\t\t\t\t\t:config=\"widget\"\n\t\t\t\t\tclass=\"control-input\"\n\t\t\t\t\t:class=\"!localData[widget.$dataPath] && 'blank'\"\n\t\t\t\t/>\n\t\t\t\t<label v-if=\"$props.config.showTitles\" class=\"control-label text-left col-sm-3\">\n\t\t\t\t\t{{widget.title}}\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t</div>\n\t</div>\n\t<div v-else-if=\"$props.config.layout == 'columns'\">\n\t\t<table class=\"mg-container\" :class=\"$props.config.border ? 'table table-bordered' : 'mg-container-columns-no-border'\" style=\"width: 100%\">\n\t\t\t<thead v-if=\"$props.config.columnHeaders\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th\n\t\t\t\t\t\tv-for=\"widget in config.items\"\n\t\t\t\t\t\t:key=\"widget.id\"\n\t\t\t\t\t\tv-if=\"widget.show\"\n\t\t\t\t\t>{{widget.title}}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td\n\t\t\t\t\t\tv-for=\"(widget, widgetIndex) in $props.config.items\"\n\t\t\t\t\t\t:key=\"widget.id\"\n\t\t\t\t\t\tv-if=\"widget.show\"\n\t\t\t\t\t\t:class=\"[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"widget\"/>\n\t\t\t\t\t\t<div class=\"help-block\" v-if=\"widget.help\">{{widget.help}}</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div v-else-if=\"$props.config.layout == 'query'\">\n\t\t<div class=\"mg-container mg-container-query\">\n\t\t\t<div v-for=\"rowWidget in $props.config.items\" :key=\"rowWidget.id\">\n\t\t\t\t<div v-if=\"rowWidget.type == 'mgContainer' && rowWidget.layout == 'query-row'\" class=\"row\">\n\t\t\t\t\t<div v-for=\"colWidget in rowWidget.items\" :key=\"colWidget.id\" class=\"col mgComponent\">\n\t\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"colWidget\"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div v-else class=\"alert alert-danger\">\n\t\t\t\t\tAll children of mgContainer[layout=query] must match the mgContainer[layout=queryRow]\n\t\t\t\t\t<pre>{{widget}}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div v-else class=\"mg-container\">\n\t\t<div class=\"alert alert-danger\">\n\t\t\tUnsupported mgContainer layout \"{{$props.config.layout || 'Unspecified'}}\"\n\t\t\t<pre>{{$props.config}}</pre>\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n/* Card layout {{{ */\n/* Collapsable card {{{ */\n.mg-container.card.card-collapsable {\n\ttransition: all 0.2s ease-in;\n}\n\n.mg-container.card.card-collapsable .card-header {\n\tcursor: pointer;\n}\n\n.mg-container.card.card-collapsable .card-header::after {\n\tfont-family: \"Font Awesome 5 Pro\";\n\tcontent: '\\f054';\n\tfloat: right;\n\ttransition: transform 0.4s;\n}\n\n.mg-container.card.card-collapsable:not(.card-collapsed) .card-header::after {\n\ttransform: rotate(90deg);\n}\n\n\n/* Collapsed card {{{ */\n.mg-container.card.card-collapsable.card-collapsed {\n\tbox-shadow: none;\n\tborder-bottom: none;\n\tmargin-bottom: 0px;\n}\n\n.mg-container.card.card-collapsable.card-collapsed .card-body {\n\tdisplay: none;\n}\n/* }}} */\n/* }}} */\n/* }}} */\n\n/* formFloating {{{ */\n.mgContainer-formFloating > .col-12 {\n\tposition: relative;\n\tline-height: 14px;\n\tmargin: 0 0px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input {\n\theight: 45px;\n\tpadding-top: 8px;\n\tpadding-bottom: 2px;\n\tpadding-left: 2px;\n\tpadding-right: 12px;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n\tcolor: #333333;\n\tbackground-color: #ffffff;\n\tbackground-image: none;\n\toutline: none;\n\t/* border: 1px solid rgba(120, 120, 120, 0.5);\n\t*/\n\tborder: none;\n\tborder-bottom: 1px solid #bbb;\n\t-moz-box-shadow: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tborder-radius: 0;\n\tposition: relative;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input.blank + .control-label {\n\ttransform: translateY(0px);\n\tcolor: #bbb;\n\tfont-size: 15px;\n\tfont-weight: 100;\n\topacity: 1;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input.control-input:focus + .control-label {\n\ttransform: translateY(-21px);\n\tcolor: #66afe9;\n\tfont-size: 14px;\n\topacity: 1;\n\tfont-weight: 100;\n\tbackground-color: white;\n}\n\n.mgContainer-formFloating > .col-12 > .control-label {\n\tcolor: #aaa;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tposition: absolute;\n\tz-index: 2;\n\tleft: 2px;\n\ttop: 16px;\n\tpadding: 0 0px;\n\tpointer-events: none;\n\tbackground: white;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-21px);\n\tfont-weight: 500;\n}\n/* }}} */\n\n/* Columns layout {{{ */\n.mg-container.mg-container-columns-no-border th,\n.mg-container.mg-container-columns-no-border td {\n\tpadding: 5px;\n}\n/* }}} */\n\n/* Query layout {{{ */\n.mg-container.mg-container-query .row {\n\tdisplay: block;\n}\n\n.mg-container.mg-container-query .col {\n\tdisplay: inline-flex;\n\twidth: 200px;\n\theight: 35px;\n\tmin-width: 200px;\n\tmargin-left: 30px;\n\tmargin-bottom: 10px;\n\tmax-width: 400px;\n\tposition: relative;\n\talign-items: center;\n\tbox-shadow: 1px 3px 5px 0px rgba(50, 50, 50, 0.75);\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\theight: 38px;\n\tpadding: 5px 15px;\n\tbackground: #FFF;\n}\n\n/* Query > Background color scale {{{ */\n.mg-container.mg-container-query .col:nth-child(1) {\n\tbackground: #104E8B;\n}\n\n.mg-container.mg-container-query .col:nth-child(2) {\n\tbackground: #1874CD;\n}\n\n.mg-container.mg-container-query .col:nth-child(3) {\n\tbackground: #1C86EE;\n}\n/* }}} */\n\n/* Query > Connecting lines {{{ */\n/* Vertical */\n.mg-container.mg-container-query .row::before {\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 4px;\n\ttop: 17px;\n\tbottom: 30px;\n}\n\n/* Horizontal */\n.mg-container.mg-container-query .col::before {\n\tleft: -30px;\n\theight: 4px;\n\ttop: calc(50% - 2px);\n\twidth: 30px;\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n}\n/* }}} */\n\n/* Query > Basic Inputs {{{ */\n.mg-container.mg-container-query .col input {\n\tbackground: transparent;\n\tborder: 1px solid transparent;\n\tcolor: #FFF;\n\theight: 1.8em;\n\tborder-radius: 0px;\n}\n\n.mg-container.mg-container-query .col input[type=text] {\n\tborder-bottom: 1px solid #CCC;\n}\n\n.mg-container.mg-container-query .col input[type=number] {\n\ttext-align: center;\n}\n\n.mg-container.mg-container-query .col input:focus {\n\tbox-shadow: none;\n\tborder: 1px solid #CCC;\n}\n/* }}} */\n\n/* Query > Buttons {{{ */\n.mg-container.mg-container-query .col .btn {\n\tbox-shadow: none;\n\tpadding: 1px 5px;\n\tbackground: transparent;\n\tborder: 1px solid #003e7b;\n}\n\n.mg-container.mg-container-query .col .btn,\n.mg-container.mg-container-query .col svg {\n\topacity: 0.2;\n\ttransition: opacity 0.5s;\n}\n\n.mg-container.mg-container-query .row:hover .col .btn,\n.mg-container.mg-container-query .row:hover .col svg {\n\topacity: 1;\n}\n\n.mg-container.mg-container-query .col .vs__clear {\n\tdisplay: none;\n}\n/* }}} */\n\n/* Query > Dropdowns {{{ */\n.mg-container.mg-container-query .v-select {\n\twidth: 100%;\n}\n\n.mg-container.mg-container-query .v-select,\n.mg-container.mg-container-query .v-select .vs--searchable .vs__dropdown-toggle,\n.mg-container.mg-container-query .v-select .vs__selected,\n.mg-container.mg-container-query .v-select input,\n.mg-container.mg-container-query .v-select .vs__actions {\n\tcursor: pointer !important;\n}\n\n.mg-container.mg-container-query .v-select .vs__dropdown-toggle {\n\tborder: none;\n}\n\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\tcolor: #FFF;\n}\n\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\ttop: 3px;\n}\n\n.mg-container.mg-container-query .col .v-select .vs__actions svg,\n.mg-container.mg-container-query .col .v-select .vs__deselect {\n\tstroke: #FFF;\n\tfill: #FFF;\n}\n\n.mg-container.mg-container-query .col .v-select.mg-choice-tags .vs__selected-options .vs__selected {\n\tbackground-color: #5bc0de;\n\tborder-radius: 10px;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tline-height: 1rem;\n\tmin-width: 10px;\n\tpadding: 1px 10px;\n\ttext-align: center;\n\tvertical-align: middle;\n\twhite-space: nowrap;\n\tborder: none;\n}\n/* }}} */\n\n/* Query > Toggle {{{ */\n.mg-container.mg-container-query .col .vue-js-switch {\n\tmargin: auto;\n\theight: 10px;\n\ttop: -5px;\n}\n/* }}} */\n/* }}} */\n\n/* Misc utility types {{{ */\n.mg-form .help-block {\n\tfont-size: 80%;\n\tcolor: #6c757d !important;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$d = undefined;
              /* module identifier */
              const __vue_module_identifier__$d = undefined;
              /* functional template */
              const __vue_is_functional_template__$d = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$d = normalizeComponent(
                { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
                __vue_inject_styles__$d,
                __vue_script__$d,
                __vue_scope_id__$d,
                __vue_is_functional_template__$d,
                __vue_module_identifier__$d,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgContainer = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$d
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
            var script$e = Vue.component('mgDate', {
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
            const __vue_script__$e = script$e;

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
            var __vue_staticRenderFns__$a = [];
            __vue_render__$a._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$e = normalizeComponent(
                { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
                __vue_inject_styles__$e,
                __vue_script__$e,
                __vue_scope_id__$e,
                __vue_is_functional_template__$e,
                __vue_module_identifier__$e,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgDate = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$e
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
            var script$f = Vue.component('mgEmail', {
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
            const __vue_script__$f = script$f;

            /* template */
            var __vue_render__$b = function() {
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
            var __vue_staticRenderFns__$b = [];
            __vue_render__$b._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$f = normalizeComponent(
                { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
                __vue_inject_styles__$f,
                __vue_script__$f,
                __vue_scope_id__$f,
                __vue_is_functional_template__$f,
                __vue_module_identifier__$f,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgEmail = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$f
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
            var script$g = Vue.component('mgError', {
              computed: {
                // Mutate the incomming config back to what the original object probably was
                displayConfig: function displayConfig() {
                  var _ref, _this$$props$config;

                  if (!this.$props.config) return 'No config';
                  return _ref = (_this$$props$config = this.$props.config, _.pickBy(_this$$props$config, function (v, k) {
                    return !k.startsWith('error');
                  })), _.set(_ref, 'type', this.$props.config.errorWidgetType);
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
            const __vue_script__$g = script$g;

            /* template */
            var __vue_render__$c = function() {
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
            var __vue_staticRenderFns__$c = [];
            __vue_render__$c._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$g = normalizeComponent(
                { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
                __vue_inject_styles__$g,
                __vue_script__$g,
                __vue_scope_id__$g,
                __vue_is_functional_template__$g,
                __vue_module_identifier__$g,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgError = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$g
            });

            /**
            * The top level MacGyver form
            * @param {string} [form] Unique form name
            * @param {Object|Array} config The MacGyver form object either in long form nested array structure or short form object (which is converted)
            * @param {boolean} [populateDefaults=true] Apply initial defaults to the data when the config is ready, if false you can call vm.assignDefaults() manually if needed
            * @param {boolean} [actionsFallback=true] Use vm.$eval as a runner when no action listener is found
            * @param {Object} [actions] Actions subscribers, a lookup list of action definition string keys and their firable function. Functions are called with the context as `(...params)`
            * @param {Object} [data] The data binding
            *
            * @emits change Emitted as `(data)` whenever any data changes
            * @emits changeItem Emitted as `({path, value})` when any single item changes
            * @emits onAction Emitted as `({action, params})` when any action is fired
            */
            var script$h = Vue.component('mgForm', {
              data: function data() {
                return {
                  id: undefined,
                  // Set on create
                  editing: false,
                  // Set by mgFormEditor when its this components parent
                  errors: [],
                  // array <Object> {error}
                  spec: undefined,
                  // Calculated version of config after its been though $macgyver.compileSpec()
                  formData: undefined,
                  // Calculated version of $props.data after default population
                  inRefresh: false // Whether we are doing a refresh from the top-down, prevents recursive refreshing

                };
              },
              props: {
                form: String,
                config: [Object, Array],
                // Can be a single object, array of objects or shorthand style
                data: Object,
                populateDefaults: {
                  type: Boolean,
                  "default": true
                },
                onAction: Function,
                actionsFallback: {
                  type: Boolean,
                  "default": true
                },
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

                this.id = this.id || this.$props.form || this.$macgyver.nextId();
                this.$macgyver.injectForm(this);
                this.$on('mgChange', function (path, value) {
                  if (_this.inRefresh) return;

                  _this.$macgyver.utils.setPath(_this, "formData.".concat(path), value);

                  _this.$emit('changeItem', {
                    path: path,
                    value: value
                  });

                  _this.$emit('change', _this.formData);

                  _this.refreshShowIfs();
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
                  this.id = this.id || this.$props.form || this.$macgyver.nextId();
                  console.log("Rebuild form config for form \"".concat(this.id, "\""));
                  this.spec = this.$macgyver.compileSpec(this.$props.config);
                  if (!this.spec || !this.spec.spec) throw new Error('Invalid Macgyver form spec');
                },

                /**
                * Force the form to rebuild its data set
                */
                rebuildData: function rebuildData() {
                  var _this2 = this;

                  if (this.inRefresh) return console.log('Skip refresh');
                  this.inRefresh = true;
                  this.formData = _.cloneDeep(this.$props.data);
                  if (this.$props.populateDefaults) this.assignDefaults();
                  this.refreshShowIfs();
                  this.$emit('mgRefreshForm');
                  this.$nextTick(function () {
                    return (// Wait one tick for all attempts to recall this function recursively to exhaust
                      _this2.inRefresh = false
                    );
                  });
                },

                /**
                * Force recomputation of show via showIf values
                */
                refreshShowIfs: function refreshShowIfs() {
                  var _this3 = this;

                  if (!this.spec) return;
                  this.spec.showIfs.forEach(function (widget) {
                    return widget.show = _this3.$macgyver.utils.evalMatch(widget.showIf, _this3.formData);
                  });
                },

                /**
                * Assign initial defaults if a value is not in the data object
                */
                assignDefaults: function assignDefaults() {
                  if (!this.spec) return;

                  _.defaultsDeep(this.formData, this.getPrototype());
                },

                /**
                * Compute the data prototype of the form
                * This is an empty object with all the defaults populated
                * @returns {Object} A prototype data object with all defaults populated
                * @see $macgyver.forms.getPrototype()
                */
                getPrototype: function getPrototype() {
                  if (!this.id) return {}; // Form not yet ready

                  return this.$macgyver.forms.getPrototype(this.id);
                }
              },
              mounted: function mounted() {
                var _this4 = this;

                this.$watch('$props.config', function () {
                  console.log('mgForm config clobber', _this4.id, JSON.parse(JSON.stringify(_this4.$props.config)));

                  _this4.rebuild();
                }, {
                  immediate: true
                });
                this.$watch('$props.data', function () {
                  console.log('mgForm data clobber', _this4.id, JSON.parse(JSON.stringify(_this4.$props.config)));

                  _this4.rebuildData();
                }, {
                  immediate: true
                });
              },
              watchDISABLED: {
                '$props.config': {
                  immediate: false,
                  // This actually gets called after $prop injection anyway
                  deep: true,
                  handler: function handler() {
                    // Config has been clobbered - rebuild the layout
                    console.log('mgForm config clobber', this.id, JSON.parse(JSON.stringify(this.$props.config)));
                    this.rebuild();
                  }
                },
                '$props.data': {
                  immediate: true,
                  // This actually gets called after $prop injection anyway
                  deep: true,
                  handler: function handler() {
                    // Config has been clobbered - rebuild the layout
                    console.log('mgForm data clobber', this.id, JSON.parse(JSON.stringify(this.$props.config)));
                    this.rebuildData();
                  }
                }
              }
            });

            /* script */
            const __vue_script__$h = script$h;

            /* template */
            var __vue_render__$d = function() {
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
                  _vm.spec
                    ? _c("mg-component", { attrs: { form: _vm.id, config: _vm.spec.spec } })
                    : _vm._e()
                ],
                1
              )
            };
            var __vue_staticRenderFns__$d = [];
            __vue_render__$d._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$h = normalizeComponent(
                { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
                __vue_inject_styles__$h,
                __vue_script__$h,
                __vue_scope_id__$h,
                __vue_is_functional_template__$h,
                __vue_module_identifier__$h,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgForm = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$h
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
            var script$i = Vue.component('mgGrid', {
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
            var __vue_render__$e = function() {
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
            var __vue_staticRenderFns__$e = [];
            __vue_render__$e._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$i = normalizeComponent(
                { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
                __vue_inject_styles__$i,
                __vue_script__$i,
                __vue_scope_id__$i,
                __vue_is_functional_template__$i,
                __vue_module_identifier__$i,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgGrid = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$i
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
            var script$j = Vue.component('mgHeading', {
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
            const __vue_script__$j = script$j;

            /* template */
            var __vue_render__$f = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c("legend", { staticClass: "form-control-static" }, [
                _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.config.text) + "\n")
              ])
            };
            var __vue_staticRenderFns__$f = [];
            __vue_render__$f._withStripped = true;

              /* style */
              const __vue_inject_styles__$j = undefined;
              /* scoped */
              const __vue_scope_id__$j = undefined;
              /* module identifier */
              const __vue_module_identifier__$j = undefined;
              /* functional template */
              const __vue_is_functional_template__$j = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$j = normalizeComponent(
                { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
                __vue_inject_styles__$j,
                __vue_script__$j,
                __vue_scope_id__$j,
                __vue_is_functional_template__$j,
                __vue_module_identifier__$j,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgHeading = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$j
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
            var script$k = Vue.component('mgHtml', {
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
            const __vue_script__$k = script$k;

            /* template */
            var __vue_render__$g = function() {
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
            var __vue_staticRenderFns__$g = [];
            __vue_render__$g._withStripped = true;

              /* style */
              const __vue_inject_styles__$k = undefined;
              /* scoped */
              const __vue_scope_id__$k = undefined;
              /* module identifier */
              const __vue_module_identifier__$k = undefined;
              /* functional template */
              const __vue_is_functional_template__$k = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$k = normalizeComponent(
                { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
                __vue_inject_styles__$k,
                __vue_script__$k,
                __vue_scope_id__$k,
                __vue_is_functional_template__$k,
                __vue_module_identifier__$k,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgHtml = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$k
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
                "interface": {
                  type: 'mgChoiceButtons',
                  "default": 'modal',
                  "enum": ['modal', 'dropdown']
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
            var script$l = Vue.component('mgIcon', {
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
                  }).then(function (res) {
                    _this2.$macgyver.notify.loading(_this2._uid, false);

                    return res;
                  }).then(function (res) {
                    return _this2.$macgyver.$prompt.macgyver({
                      title: 'Select icon',
                      buttons: [],
                      // We're capturing the first click so we don't need confirm buttons
                      macgyver: [{
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
                      onShow: function onShow() {
                        // Bind to the mg-form element, detect the first change and close the dialog
                        _this2.$macgyver.$prompt.settings.macgyverForm.$on('mgChange', function () {
                          return setTimeout(function () {
                            // Timeout not really needed but it lets the button highlight before we close
                            _this2.$macgyver.$prompt.close(true, _this2.$macgyver.$prompt.settings.value);
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
            const __vue_script__$l = script$l;

            /* template */
            var __vue_render__$h = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c(
                "div",
                { staticClass: "mg-icon" },
                [
                  _vm.$props.config.interface == "modal"
                    ? _c("a", {
                        staticClass: "btn btn-light btn-icon-fixed",
                        class: _vm.data
                          ? [
                              _vm.data,
                              _vm.$props.config.classActive || _vm.$props.config.class
                            ]
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
                    : _vm.$props.config.interface == "dropdown"
                    ? _c("mg-choice-dropdown", {
                        attrs: {
                          form: _vm.$props.form,
                          data: _vm.data,
                          config: {
                            enumSource: "url",
                            enumUrl: {
                              url: _vm.$props.config.iconFeed,
                              type: "array",
                              mappings: {
                                id: { required: true, from: "class" },
                                title: { required: true, from: "id" },
                                icon: { required: true, from: "class" }
                              }
                            },
                            default: _vm.$props.config.default,
                            required: _vm.$props.config.required
                          }
                        }
                      })
                    : _c("mg-error", {
                        attrs: { config: { errorText: "Unknown mgIcon interface" } }
                      })
                ],
                1
              )
            };
            var __vue_staticRenderFns__$h = [];
            __vue_render__$h._withStripped = true;

              /* style */
              const __vue_inject_styles__$l = function (inject) {
                if (!inject) return
                inject("data-v-8274e9b4_0", { source: "\n.btn.btn-icon-fixed {\n\tbox-shadow: none;\n\twidth: 32px;\n\theight: 32px;\n\tpadding: 7px 0;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgIcon.vue"],"names":[],"mappings":";AAsGA;CACA,gBAAA;CACA,WAAA;CACA,YAAA;CACA,cAAA;AACA","file":"mgIcon.vue","sourcesContent":["<script>\nmacgyver.register('mgIcon', {\n\ttitle: 'Icon',\n\ticon: 'far fa-flag',\n\tcategory: 'Simple Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\ticonFallback: {type: 'mgIcon', default: 'far fa-info', help: 'The icon to use if non is selected'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tinterface: {type: 'mgChoiceButtons', default: 'modal', enum: ['modal', 'dropdown']},\n\t\ticonFeed: {type: 'mgText', default: '/api/webfonts/fa.json', advanced: true, help: 'The data source to import icon information', relative: true},\n\t\tclass: {type: 'mgText', default: 'btn btn-light btn-circle', advanced: true},\n\t\tclassActive: {type: 'mgText', advanced: true},\n\t\tclassInactive: {type: 'mgText', advanced: true},\n\t},\n\tformat: true,\n});\n\nexport default Vue.component('mgIcon', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t});\n\t},\n\tmethods: {\n\t\tselectIcon() {\n\t\t\tPromise.resolve()\n\t\t\t\t.then(()=> this.$macgyver.notify.loading(this._uid, true))\n\t\t\t\t.then(()=> this.$http.get(this.$props.config.iconFeed))\n\t\t\t\t.then(res => { this.$macgyver.notify.loading(this._uid, false); return res })\n\t\t\t\t.then(res => this.$macgyver.$prompt.macgyver({\n\t\t\t\t\ttitle: 'Select icon',\n\t\t\t\t\tbuttons: [], // We're capturing the first click so we don't need confirm buttons\n\t\t\t\t\tmacgyver: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 'class',\n\t\t\t\t\t\t\ttype: 'mgChoiceButtons',\n\t\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\t\tclassWrapper: '',\n\t\t\t\t\t\t\tenum: res.data.map(icon => ({\n\t\t\t\t\t\t\t\tid: icon.class,\n\t\t\t\t\t\t\t\tclass: `btn btn-icon-fixed ${icon.class} fa-fw`,\n\t\t\t\t\t\t\t\tclassActive: `btn btn-primary btn-icon-fixed ${icon.class} fa-fw`,\n\t\t\t\t\t\t\t})),\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t\tonShow: ()=> {\n\t\t\t\t\t\t// Bind to the mg-form element, detect the first change and close the dialog\n\t\t\t\t\t\tthis.$macgyver.$prompt.settings.macgyverForm.$on('mgChange', ()=> setTimeout(()=> { // Timeout not really needed but it lets the button highlight before we close\n\t\t\t\t\t\t\tthis.$macgyver.$prompt.close(true, this.$macgyver.$prompt.settings.value);\n\t\t\t\t\t\t}, 100));\n\t\t\t\t\t},\n\t\t\t\t}))\n\t\t\t\t.then(form => this.data = form.class)\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-icon\">\n\t\t<a\n\t\t\tv-if=\"$props.config.interface == 'modal'\"\n\t\t\t@click=\"selectIcon()\"\n\t\t\tclass=\"btn btn-light btn-icon-fixed\"\n\t\t\t:class=\"data ? [data, $props.config.classActive || $props.config.class] : [$props.config.iconFallback, $props.config.classInactive || $props.config.class]\"\n\t\t/>\n\t\t<mg-choice-dropdown\n\t\t\tv-else-if=\"$props.config.interface == 'dropdown'\"\n\t\t\t:form=\"$props.form\"\n\t\t\t:data=\"data\"\n\t\t\t:config=\"{\n\t\t\t\tenumSource: 'url',\n\t\t\t\tenumUrl: {\n\t\t\t\t\turl: $props.config.iconFeed,\n\t\t\t\t\ttype: 'array',\n\t\t\t\t\tmappings: {\n\t\t\t\t\t\tid: {required: true, from: 'class'},\n\t\t\t\t\t\ttitle: {required: true, from: 'id'},\n\t\t\t\t\t\ticon: {required: true, from: 'class'},\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\tdefault: $props.config.default,\n\t\t\t\trequired: $props.config.required,\n\t\t\t}\"\n\t\t/>\n\t\t<mg-error\n\t\t\tv-else\n\t\t\t:config=\"{errorText: 'Unknown mgIcon interface'}\"\n\t\t/>\n\t</div>\n</template>\n\n<style>\n.btn.btn-icon-fixed {\n\tbox-shadow: none;\n\twidth: 32px;\n\theight: 32px;\n\tpadding: 7px 0;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$l = undefined;
              /* module identifier */
              const __vue_module_identifier__$l = undefined;
              /* functional template */
              const __vue_is_functional_template__$l = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$l = normalizeComponent(
                { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
                __vue_inject_styles__$l,
                __vue_script__$l,
                __vue_scope_id__$l,
                __vue_is_functional_template__$l,
                __vue_module_identifier__$l,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgIcon = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$l
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
                  "default": 'far fa-spinner fa-spin',
                  advanced: true
                },
                iconSize: {
                  type: 'mgChoiceButtons',
                  "default": 'fa-4x',
                  advanced: true,
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
            var script$m = Vue.component('mgInfoBlock', {
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
                    return _this.$macgyver.utils.fetch(_this.$props.config.url, {
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
            const __vue_script__$m = script$m;

            /* template */
            var __vue_render__$i = function() {
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
            var __vue_staticRenderFns__$i = [];
            __vue_render__$i._withStripped = true;

              /* style */
              const __vue_inject_styles__$m = function (inject) {
                if (!inject) return
                inject("data-v-6ad4f424_0", { source: "\n.mg-info-block {\n\tbackground: transparent;\n\tborder-radius: 5px;\n}\n.mg-info-block .mg-info-block-text {\n\tfont-size: 200%;\n\tfont-weight: bold;\n}\n.mg-info-block .mg-info-block-title {\n\tfont-size: 90%;\n\topacity: 0.8;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgInfoBlock.vue"],"names":[],"mappings":";AAuFA;CACA,uBAAA;CACA,kBAAA;AACA;AAEA;CACA,eAAA;CACA,iBAAA;AACA;AAEA;CACA,cAAA;CACA,YAAA;AACA","file":"mgInfoBlock.vue","sourcesContent":["<script>\nmacgyver.register('mgInfoBlock', {\n\ttitle: 'Info Block',\n\ticon: 'far fa-info-square',\n\tcategory: 'Data display',\n\tconfig: {\n\t\ttext: {type: 'mgText', help: 'Text to display, if a URL is also specified this is overridden when the result loads', default: ''},\n\t\turl: {type: 'mgUrl', relative: true, default: '/api/datafeeds/random/number?$extract=number'},\n\t\tcoloring: {\n\t\t\ttype: 'mgChoiceDropdown',\n\t\t\tdefault: 'bg-primary',\n\t\t\tenum: [\n\t\t\t\t{id: 'bg-primary text-white', text: 'Primary'},\n\t\t\t\t{id: 'bg-secondary', text: 'Secondary'},\n\t\t\t\t{id: 'bg-success text-white', text: 'Success'},\n\t\t\t\t{id: 'bg-danger text-white', text: 'Danger'},\n\t\t\t\t{id: 'bg-warning text-white', text: 'Warning'},\n\t\t\t\t{id: 'bg-info text-white', text: 'Info'},\n\t\t\t\t{id: 'bg-light', text: 'Light'},\n\t\t\t\t{id: 'bg-dark text-white', text: 'Dark'},\n\t\t\t\t{id: 'bg-muted', text: 'Muted'},\n\t\t\t],\n\t\t},\n\t\ticon: {type: 'mgIcon', default: 'far fa-info-circle'},\n\t\ticonLoading: {type: 'mgIcon', default: 'far fa-spinner fa-spin', advanced: true},\n\t\ticonSize: {\n\t\t\ttype: 'mgChoiceButtons',\n\t\t\tdefault: 'fa-4x',\n\t\t\tadvanced: true,\n\t\t\tenum: [\n\t\t\t\t{id: '', text: 'Normal'},\n\t\t\t\t{id: 'fa-2x', text: '2x'},\n\t\t\t\t{id: 'fa-3x', text: '3x'},\n\t\t\t\t{id: 'fa-4x', text: '4x'},\n\t\t\t\t{id: 'fa-5x', text: '5x'},\n\t\t\t\t{id: 'fa-6x', text: '6x'},\n\t\t\t\t{id: 'fa-7x', text: '7x'},\n\t\t\t\t{id: 'fa-8x', text: '8x'},\n\t\t\t],\n\t\t},\n\t},\n\tformat: false,\n});\n\nexport default Vue.component('mgInfoBlock', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tisLoading: false,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\n\t\tthis.$watch('$props.config.url', ()=> {\n\t\t\tif (!this.$props.config.url) return;\n\t\t\tPromise.resolve()\n\t\t\t\t.then(()=> this.isLoading = true)\n\t\t\t\t.then(()=> this.$macgyver.utils.fetch(this.$props.config.url, {\n\t\t\t\t\ttype: 'object',\n\t\t\t\t\tmappings: {extract: {required: true}},\n\t\t\t\t\tformat: d => d.extract,\n\t\t\t\t}))\n\t\t\t\t.then(data => this.$set(this, 'data', data))\n\t\t\t\t.then(()=> this.isLoading = false)\n\t\t}, {immediate: true});\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"card mg-info-block\" :class=\"$props.config.coloring\">\n\t\t<div class=\"card-body media\">\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<i :class=\"[isLoading ? $props.config.iconLoading : $props.config.icon, $props.config.iconSize]\"/>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<div class=\"mg-info-block-text\">{{data || $props.config.text}}</div>\n\t\t\t\t<div class=\"mg-info-block-title\">{{$props.config.title}}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-info-block {\n\tbackground: transparent;\n\tborder-radius: 5px;\n}\n\n.mg-info-block .mg-info-block-text {\n\tfont-size: 200%;\n\tfont-weight: bold;\n}\n\n.mg-info-block .mg-info-block-title {\n\tfont-size: 90%;\n\topacity: 0.8;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$m = undefined;
              /* module identifier */
              const __vue_module_identifier__$m = undefined;
              /* functional template */
              const __vue_is_functional_template__$m = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$m = normalizeComponent(
                { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
                __vue_inject_styles__$m,
                __vue_script__$m,
                __vue_scope_id__$m,
                __vue_is_functional_template__$m,
                __vue_module_identifier__$m,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgInfoBlock = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$m
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
            var script$n = Vue.component('mgLabel', {
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
            const __vue_script__$n = script$n;

            /* template */
            var __vue_render__$j = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c("div", { class: _vm.$props.config.class }, [
                _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.config.text) + "\n")
              ])
            };
            var __vue_staticRenderFns__$j = [];
            __vue_render__$j._withStripped = true;

              /* style */
              const __vue_inject_styles__$n = undefined;
              /* scoped */
              const __vue_scope_id__$n = undefined;
              /* module identifier */
              const __vue_module_identifier__$n = undefined;
              /* functional template */
              const __vue_is_functional_template__$n = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$n = normalizeComponent(
                { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
                __vue_inject_styles__$n,
                __vue_script__$n,
                __vue_scope_id__$n,
                __vue_is_functional_template__$n,
                __vue_module_identifier__$n,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgLabel = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$n
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
            var script$o = Vue.component('mgList', {
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
            const __vue_script__$o = script$o;

            /* template */
            var __vue_render__$k = function() {
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
            var __vue_staticRenderFns__$k = [];
            __vue_render__$k._withStripped = true;

              /* style */
              const __vue_inject_styles__$o = function (inject) {
                if (!inject) return
                inject("data-v-aaff4dae_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Cell padding */\n.mg-list td {\n\tpadding: 0px !important;\n}\n.mg-list td input[type=\"text\"] {\n\tborder: none;\n}\n\n/* Row number cell */\n.mg-list td.row-number-cell {\n\ttext-align: center;\n\twidth: 30px;\n\tvertical-align: middle;\n}\n\n/* Verb cell */\n.mg-list .verb-cell {\n\twidth: 30px;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgList.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkFA,iBAAA;AACA;CACA,uBAAA;AACA;AAEA;CACA,YAAA;AACA;;AAEA,oBAAA;AACA;CACA,kBAAA;CACA,WAAA;CACA,sBAAA;AACA;;AAEA,cAAA;AACA;CACA,WAAA;CACA,kBAAA;CACA,sBAAA;AACA","file":"mgList.vue","sourcesContent":["<script>\nmacgyver.register('mgList', {\n\ttitle: 'List',\n\ticon: 'far fa-list-ul',\n\tcategory: 'Simple Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\tallowDelete: {type: 'mgToggle', default: true},\n\t\tmin: {type: 'mgNumber', title: 'Minimum number of items'},\n\t\tmax: {type: 'mgNumber', title: 'Maximum number of items'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tnumbered: {type: 'mgToggle', default: true},\n\t\taddButtonActiveClass: {type: 'mgText', default: 'btn btn-block btn-success fa fa-plus', advanced: true},\n\t\taddButtonInactiveClass: {type: 'mgText', default: 'btn btn-block btn-disabled fa fa-plus', advanced: true},\n\t},\n\tformat: v => (v || []).join(', '),\n});\n\nexport default Vue.component('mgList', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t\tnewItem: '',\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && (!this.data || !this.data.length)) return reply(`${this.$props.config.title} is required`);\n\t\t\tif (this.$props.config.min && _.isString(this.data) && this.data.length < this.$props.config.min) return reply(`${this.$props.config.title} must have at least ${this.$props.config.min} items`);\n\t\t\tif (this.$props.config.max && _.isString(this.data) && this.data.length > this.$props.config.max) return reply(`${this.$props.config.title} must have at most ${this.$props.config.max} items`);\n\t\t});\n\t},\n\tmethods: {\n\t\taddItem() {\n\t\t\tif (!_.isArray(this.data)) this.data = [];\n\t\t\tthis.data.push(this.newItem);\n\t\t\tthis.newItem = '';\n\t\t},\n\t\tchangeItem(index, value) {\n\t\t\tthis.$set(this.data, index, value);\n\t\t},\n\t\tremoveItem(index) {\n\t\t\tthis.data = this.data.filter((x, i) => i != index);\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<table class=\"table table-bordered mg-list\">\n\t\t<tbody>\n\t\t\t<tr v-for=\"(row, rowIndex) in data\">\n\t\t\t\t<td v-if=\"$props.config.numbered\" class=\"row-number-cell\">{{rowIndex + 1 | number}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<input :value=\"row\" @change=\"changeItem(rowIndex, $event.srcElement.value)\" type=\"text\" class=\"form-control\"/>\n\t\t\t\t</td>\n\t\t\t\t<td v-if=\"$props.config.allowDelete\" class=\"verb-cell\">\n\t\t\t\t\t<a @click=\"removeItem(rowIndex)\" class=\"btn btn-link btn-link-danger btn-xs text-muted\"><i class=\"fa fa-trash\"></i></a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot class=\"hidden-print\">\n\t\t\t<tr>\n\t\t\t\t<td v-if=\"$props.config.numbered\" class=\"row-number-cell\">\n\t\t\t\t\t<a v-if=\"!$props.config.allowDelete\" @click=\"addItem()\" :class=\"newItem ? $props.config.addButtonActiveClass : $props.config.addButtonInactiveClass\"/>\n\t\t\t\t\t<i v-else class=\"far fa-asterisk\"></i>\n\t\t\t\t</td>\n\t\t\t\t<td :colspan=\"$props.config.allowDelete ? 1 : 2\">\n\t\t\t\t\t<input @keyup.enter=\"addItem()\" v-model=\"newItem\" type=\"text\" class=\"form-control\"/>\n\t\t\t\t</td>\n\t\t\t\t<td v-if=\"$props.config.allowDelete\" class=\"verb-cell\">\n\t\t\t\t\t<a @click=\"addItem()\" :class=\"newItem ? $props.config.addButtonActiveClass : $props.config.addButtonInactiveClass\"/>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</template>\n\n<style>\n/* Cell padding */\n.mg-list td {\n\tpadding: 0px !important;\n}\n\n.mg-list td input[type=\"text\"] {\n\tborder: none;\n}\n\n/* Row number cell */\n.mg-list td.row-number-cell {\n\ttext-align: center;\n\twidth: 30px;\n\tvertical-align: middle;\n}\n\n/* Verb cell */\n.mg-list .verb-cell {\n\twidth: 30px;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$o = undefined;
              /* module identifier */
              const __vue_module_identifier__$o = undefined;
              /* functional template */
              const __vue_is_functional_template__$o = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$o = normalizeComponent(
                { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
                __vue_inject_styles__$o,
                __vue_script__$o,
                __vue_scope_id__$o,
                __vue_is_functional_template__$o,
                __vue_module_identifier__$o,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgList = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$o
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
                  advanced: true,
                  showIf: 'interface == "bumpers"'
                },
                bumperUpClass: {
                  type: 'mgText',
                  "default": 'btn btn-light fa fa-arrow-up input-group-append',
                  advanced: true,
                  showIf: 'interface == "bumpers"'
                },
                prefix: {
                  type: 'mgText',
                  title: 'Prefix',
                  help: 'Prefix to show before the input',
                  showIf: 'interface == "input"'
                },
                prefixClass: {
                  type: 'mgText',
                  "default": 'input-group-prepend input-group-text',
                  advanced: true,
                  showIf: 'interface == "input"'
                },
                suffix: {
                  type: 'mgText',
                  title: 'Suffix',
                  help: 'Suffix to show after the input',
                  showIf: 'interface == "input"'
                },
                suffixClass: {
                  type: 'mgText',
                  "default": 'input-group-append input-group-text',
                  advanced: true,
                  showIf: 'interface == "input"'
                }
              },
              format: function format(v) {
                if (!v) return '';
                return (_.isNumber(v) ? v : parseInt(v)).toLocaleString();
              },
              formatAlign: 'right',
              shorthand: ['integer', 'int', 'float']
            });
            var script$p = Vue.component('mgNumber', {
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
            const __vue_script__$p = script$p;

            /* template */
            var __vue_render__$l = function() {
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
            var __vue_staticRenderFns__$l = [];
            __vue_render__$l._withStripped = true;

              /* style */
              const __vue_inject_styles__$p = function (inject) {
                if (!inject) return
                inject("data-v-18b5bd9b_0", { source: "\n.mg-number input[type=number] {\n\tpadding: 0 10px;\n}\n.mg-number .btn {\n\tbox-shadow: none;\n\tborder: 1px solid #f0f0f0;\n}\n\n/* Hide the spin button in mgNumber controls */\n.mg-number input[type=number]::-webkit-outer-spin-button,\n.mg-number input[type=number]::-webkit-inner-spin-button {\n\t/* display: none; <- Crashes Chrome on hover */\n\t-webkit-appearance: none;\n\tmargin: 0; /* <-- Apparently some margin is still there even though it's hidden */\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgNumber.vue"],"names":[],"mappings":";AAkFA;CACA,eAAA;AACA;AAEA;CACA,gBAAA;CACA,yBAAA;AACA;;AAEA,8CAAA;AACA;;CAEA,8CAAA;CACA,wBAAA;CACA,SAAA,EAAA,sEAAA;AACA","file":"mgNumber.vue","sourcesContent":["<script>\nmacgyver.register('mgNumber', {\n\ttitle: 'Number',\n\ticon: 'far fa-sort-numeric-down',\n\tcategory: 'Simple Inputs',\n\tpreferId: true,\n\tconfig: {\n\t\tmin: {type: 'mgNumber', title: 'Minimum value'},\n\t\tmax: {type: 'mgNumber', title: 'Maximum value'},\n\t\tstep: {type: 'mgNumber', title: 'Value to increment / decrement by'},\n\t\tplaceholder: {type: 'mgNumber', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tinterface: {type: 'mgChoiceDropdown', title: 'Interface', help: 'How to allow number input', default: 'bumpers', enum: [\n\t\t\t{id: 'bumpers', title: 'Number input with buttons'},\n\t\t\t{id: 'slider', title: 'Slider bar'},\n\t\t\t{id: 'input', title: 'Number input box only'},\n\t\t]},\n\t\tbumperDownClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-down input-group-prepend', advanced: true, showIf: 'interface == \"bumpers\"'},\n\t\tbumperUpClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-up input-group-append', advanced: true, showIf: 'interface == \"bumpers\"'},\n\t\tprefix: {type: 'mgText', title: 'Prefix', help: 'Prefix to show before the input', showIf: 'interface == \"input\"'},\n\t\tprefixClass: {type: 'mgText', default: 'input-group-prepend input-group-text', advanced: true, showIf: 'interface == \"input\"'},\n\t\tsuffix: {type: 'mgText', title: 'Suffix', help: 'Suffix to show after the input', showIf: 'interface == \"input\"'},\n\t\tsuffixClass: {type: 'mgText', default: 'input-group-append input-group-text', advanced: true, showIf: 'interface == \"input\"'},\n\t},\n\tformat: v => {\n\t\tif (!v) return '';\n\t\treturn (_.isNumber(v) ? v : parseInt(v)).toLocaleString();\n\t},\n\tformatAlign: 'right',\n\tshorthand: ['integer', 'int', 'float'],\n});\n\nexport default Vue.component('mgNumber', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tmethods: {\n\t\tadd(steps) {\n\t\t\tif (!_.isNumber(this.data)) return this.data = this.$props.config.min || 0; // Not already a number default to the min or zero\n\n\t\t\tthis.data += steps * (this.$props.config.step || 1);\n\t\t\tif (this.$props.config.max && this.data > this.$props.config.max) this.data = this.$props.config.max;\n\t\t\tif (this.$props.config.min && this.data < this.$props.config.min) this.data = this.$props.config.min;\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);\n\t\t\tif (this.$props.config.min && this.data < this.$props.config.min) return reply(`${this.$props.config.title} is too small (minimum value is ${this.$props.config.min})`);\n\t\t\tif (this.$props.config.max && this.data > this.$props.config.max) return reply(`${this.$props.config.title} is too large (maximum value is ${this.$props.config.max})`);\n\t\t});\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-number\">\n\t\t<div v-if=\"$props.config.interface == 'slider'\">\n\t\t\t<input v-model=\"data\" type=\"range\" class=\"form-control\" :placeholder=\"$props.config.placeholder\" :min=\"$props.config.min\" :max=\"$props.config.max\" :step=\"$props.config.step\"/>\n\t\t</div>\n\t\t<div v-else-if=\"$props.config.interface == 'bumpers'\" class=\"input-group\">\n\t\t\t<a @click=\"add(-1)\" class=\"hidden-print\" :class=\"$props.config.bumperDownClass\"></a>\n\t\t\t<input v-model=\"data\" type=\"number\" class=\"form-control\" :placeholder=\"$props.config.placeholder\" :min=\"$props.config.min\" :max=\"$props.config.max\" :step=\"$props.config.step\"/>\n\t\t\t<a @click=\"add(1)\" class=\"hidden-print\" :class=\"$props.config.bumperUpClass\"></a>\n\t\t</div>\n\t\t<div v-else-if=\"$props.config.interface == 'input'\" class=\"input-group\">\n\t\t\t<div v-if=\"$props.config.prefix\" :class=\"$props.config.prefixClass\">{{$props.config.prefix}}</div>\n\t\t\t<input v-model=\"data\" type=\"number\" class=\"form-control\" :placeholder=\"$props.config.placeholder\" :min=\"$props.config.min\" :max=\"$props.config.max\" :step=\"$props.config.step\"/>\n\t\t\t<div v-if=\"$props.config.suffix\" :class=\"$props.config.suffixClass\">{{$props.config.suffix}}</div>\n\t\t</div>\n\t\t<div v-else class=\"alert alert-warning\">\n\t\t\tUnknown mgNumber interface '{{$props.config.interface}}'\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-number input[type=number] {\n\tpadding: 0 10px;\n}\n\n.mg-number .btn {\n\tbox-shadow: none;\n\tborder: 1px solid #f0f0f0;\n}\n\n/* Hide the spin button in mgNumber controls */\n.mg-number input[type=number]::-webkit-outer-spin-button,\n.mg-number input[type=number]::-webkit-inner-spin-button {\n\t/* display: none; <- Crashes Chrome on hover */\n\t-webkit-appearance: none;\n\tmargin: 0; /* <-- Apparently some margin is still there even though it's hidden */\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$p = undefined;
              /* module identifier */
              const __vue_module_identifier__$p = undefined;
              /* functional template */
              const __vue_is_functional_template__$p = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$p = normalizeComponent(
                { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
                __vue_inject_styles__$p,
                __vue_script__$p,
                __vue_scope_id__$p,
                __vue_is_functional_template__$p,
                __vue_module_identifier__$p,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgNumber = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$p
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
            var script$q = Vue.component('mgPermissions', {
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
                    var _ref, _res$data;

                    return _this2.$prompt.macgyver({
                      title: 'Select permissions',
                      form: [{
                        id: 'class',
                        type: 'mgChoiceCheckbox',
                        showTitle: false,
                        classWrapper: '',
                        sort: 'sortId',
                        "enum": (_ref = (_res$data = res.data, _.pickBy(_res$data, function (v, k) {
                          return k.startsWith('permissions.');
                        })), _.map(_ref, function (v, k) {
                          return {
                            id: k.replace(/^permissions\./, ''),
                            title: Vue.filter('permissionCase')(k.replace(/^permissions\./, ''))
                          };
                        }))
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
            const __vue_script__$q = script$q;

            /* template */
            var __vue_render__$m = function() {
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
            var __vue_staticRenderFns__$m = [];
            __vue_render__$m._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$q = normalizeComponent(
                { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
                __vue_inject_styles__$q,
                __vue_script__$q,
                __vue_scope_id__$q,
                __vue_is_functional_template__$q,
                __vue_module_identifier__$q,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgPermissions = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$q
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
            var script$r = Vue.component('mgPlaceholder', {
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
            var __vue_render__$n = function() {
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
            var __vue_staticRenderFns__$n = [];
            __vue_render__$n._withStripped = true;

              /* style */
              const __vue_inject_styles__$r = function (inject) {
                if (!inject) return
                inject("data-v-60afbb2c_0", { source: "\n.mg-placeholder {\n\tmin-height: 100px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n/* Style: placeholder-box {{{ */\n.mg-placeholder.mg-placeholder-box {\n\tborder: 1px solid #000;\n\tbackground:\n\t\tlinear-gradient(to top left,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%),\n\t\tlinear-gradient(to top right,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%);\n}\n.mg-placeholder.mg-placeholder-box > .mg-placeholder-text {\n\tbackground: #FFF;\n\tborder-radius: 10px;\n\tpadding: 10px 15px;\n}\n/* }}} */\n\n/* Style: placeholder-construction {{{ */\n.mg-placeholder.mg-placeholder-construction {\n\tbackground: repeating-linear-gradient(45deg, #dfc458, #dfc458 10px, #666 10px, #666 20px);\n}\n.mg-placeholder.mg-placeholder-construction > .mg-placeholder-text {\n\tfont-size: 20pt;\n\tcolor: #FFF;\n\ttext-shadow: -2px -2px 1px #000, 2px -2px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgPlaceholder.vue"],"names":[],"mappings":";AA6CA;CACA,iBAAA;CACA,aAAA;CACA,uBAAA;CACA,mBAAA;CACA,kBAAA;AACA;;AAEA,+BAAA;AACA;CACA,sBAAA;CACA;;;;;;;;;;;;sBAYA;AACA;AAEA;CACA,gBAAA;CACA,mBAAA;CACA,kBAAA;AACA;AACA,QAAA;;AAEA,wCAAA;AACA;CACA,yFAAA;AACA;AAEA;CACA,eAAA;CACA,WAAA;CACA,uFAAA;AACA;AACA,QAAA","file":"mgPlaceholder.vue","sourcesContent":["<script>\nmacgyver.register('mgPlaceholder', {\n\ttitle: 'Placeholder',\n\ticon: 'far fa-traffic-cone',\n\tcategory: 'General Decoration',\n\tpreferId: true,\n\tconfig: {\n\t\ttext: {type: 'mgText'},\n\t\theight: {type: 'mgNumber', default: '100%'},\n\t\tstyle: {\n\t\t\ttype: 'mgChoiceButtons',\n\t\t\tdefault: 'mg-placeholder-box',\n\t\t\ticonSelected: 'far fa-fw fa-check',\n\t\t\ticonDefault: 'far fa-fw',\n\t\t\tenum: [\n\t\t\t\t{id: 'mg-placeholder-box', title: 'Lined box'},\n\t\t\t\t{id: 'mg-placeholder-construction', title: 'Construction area'},\n\t\t\t],\n\t\t},\n\t},\n});\n\nexport default Vue.component('mgPlaceholder', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-placeholder\" :class=\"$props.config.style\" :style=\"`height: ${$props.config.height || 'auto'}`\">\n\t\t<div v-if=\"$props.config.text\" class=\"mg-placeholder-text\">\n\t\t\t{{$props.config.text}}\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-placeholder {\n\tmin-height: 100px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n/* Style: placeholder-box {{{ */\n.mg-placeholder.mg-placeholder-box {\n\tborder: 1px solid #000;\n\tbackground:\n\t\tlinear-gradient(to top left,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%),\n\t\tlinear-gradient(to top right,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%);\n}\n\n.mg-placeholder.mg-placeholder-box > .mg-placeholder-text {\n\tbackground: #FFF;\n\tborder-radius: 10px;\n\tpadding: 10px 15px;\n}\n/* }}} */\n\n/* Style: placeholder-construction {{{ */\n.mg-placeholder.mg-placeholder-construction {\n\tbackground: repeating-linear-gradient(45deg, #dfc458, #dfc458 10px, #666 10px, #666 20px);\n}\n\n.mg-placeholder.mg-placeholder-construction > .mg-placeholder-text {\n\tfont-size: 20pt;\n\tcolor: #FFF;\n\ttext-shadow: -2px -2px 1px #000, 2px -2px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$r = undefined;
              /* module identifier */
              const __vue_module_identifier__$r = undefined;
              /* functional template */
              const __vue_is_functional_template__$r = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$r = normalizeComponent(
                { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
                __vue_inject_styles__$r,
                __vue_script__$r,
                __vue_scope_id__$r,
                __vue_is_functional_template__$r,
                __vue_module_identifier__$r,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgPlaceholder = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$r
            });

            macgyver.register('mgQuery', {
              title: 'Query',
              icon: 'far fa-filter',
              category: 'Data display',
              preferId: true,
              config: {
                /**
                * The spec is composed of an object lookup with the dotted notation path as the key and an object set of properties
                * @property {string} [type='string'] The type of the field, used to determine the component to use as the value input
                * @property {boolean} [showOperand=true] Whether to allow the user to select the operand ("Equals", "Is in" etc.) if false this only allows straight equality
                * @property {array <string>|array <object>|string} [enum] If the type is a string this restricts operand values to a list of selectable values. The value can also be one of the following meta values: '$FIELDS' - list all spec fields
                */
                spec: {
                  type: 'mgCodeEditor',
                  syntax: 'json'
                }
              }
            });
            var script$s = Vue.component('mgQuery', {
              data: function data() {
                return {
                  data: undefined,
                  queryComponent: []
                };
              },
              props: {
                config: Object,
                form: String,
                spec: {
                  type: String,
                  "default": function _default() {
                    return {
                      _id: {
                        type: 'objectId'
                      },
                      name: {
                        type: 'string'
                      },
                      username: {
                        type: 'string'
                      },
                      email: {
                        type: 'string'
                      },
                      'address.street': {
                        type: 'string'
                      },
                      'address.city': {
                        type: 'string'
                      },
                      'address.zip': {
                        type: 'string'
                      },
                      'address.state': {
                        type: 'string'
                      },
                      'address.country': {
                        type: 'string'
                      },
                      phone: {
                        type: 'string'
                      },
                      website: {
                        type: 'string'
                      },
                      'company.name': {
                        type: 'string'
                      },
                      role: {
                        type: 'string',
                        "enum": ['user', 'admin', 'root']
                      },
                      status: {
                        type: 'string',
                        "enum": ['pending', 'active', 'deleted']
                      },
                      lastLogin: {
                        type: 'date'
                      },
                      sort: {
                        type: 'string',
                        showOperand: false,
                        "enum": '$FIELDS'
                      },
                      limit: {
                        type: 'number',
                        showOperand: false
                      },
                      skip: {
                        type: 'number',
                        showOperand: false
                      }
                    };
                  }
                }
              },
              created: function created() {
                this.$macgyver.inject(this);
                this.$watchAll(['$props.config.url', '$props.config.spec'], this.refresh, {
                  immediate: true
                });
              },
              methods: {
                refresh: function refresh() {
                  var _this = this;

                  console.log('Render', _.cloneDeep(this.data)); // Calculate which fields we can use in enums

                  var fieldsEnum = Object.keys(this.$props.spec).map(function (key) {
                    return {
                      id: key,
                      title: _.startCase(key)
                    };
                  });
                  /**
                  * Populate enum values from a spec branch
                  * Really this just deals with meta cases like '$FIELDS' (see spec definition for 'enum')
                  * @param {Object} pathSpec The path branch specification
                  * @returns {array} An mgChoice* compatible ENUM composed of {id, title}
                  */

                  var populateEnum = function populateEnum(pathSpec) {
                    return pathSpec["enum"] === '$FIELDS' ? fieldsEnum : pathSpec["enum"];
                  };

                  this.queryComponent = {
                    type: 'mgContainer',
                    layout: 'query',
                    items: Object.keys(this.data).map(function (path, pathIndex) {
                      return (// Examine each path key
                        Object.keys(_typeof(_this.data[path]) == 'object' ? _this.data[path] : {
                          $eq: _this.data[path]
                        }) // Examine each operand key
                        .map(function (operand, operandIndex) {
                          var value = _this.data[path];
                          var pathSpec = _this.spec[path] || {
                            unknown: true,
                            type: 'string'
                          };
                          var row = {
                            id: 'id' + _.random(10000, 99999),
                            type: 'mgContainer',
                            layout: 'query-row',
                            items: [{
                              type: 'mgChoiceDropdown',
                              "enum": fieldsEnum,
                              "default": path,
                              onChange: function onChange(value) {
                                if (_.isPlainObject(_this.data[path])) {
                                  // Multiple value setter
                                  console.log('Change field with other operands', path, 'to', value, {
                                    leaf: _this.data[path]
                                  });
                                  delete _this.data[path][operand];
                                  _this.data[value][operand] = '';
                                } else {
                                  // Single value setter
                                  console.log('Change simple field', path, 'to', value, {
                                    leaf: _this.data[path]
                                  });
                                  delete _this.data[path];
                                  _this.data[value] = '';
                                }

                                _this.refresh();
                              }
                            }, {
                              type: 'mgChoiceDropdown',
                              "enum": [].concat(_toConsumableArray(['string', 'number'].includes(pathSpec.type) ? [{
                                id: '$eq',
                                title: 'Equals'
                              }, {
                                id: '$ne',
                                title: 'Does not equal'
                              }] : []), _toConsumableArray(pathSpec.type == 'date' ? [{
                                id: '$eq',
                                title: 'Is on'
                              }, {
                                id: '$ne',
                                title: 'Is not on'
                              }] : []), [{
                                id: '$exists',
                                title: 'Is present'
                              }], _toConsumableArray(pathSpec.type != 'date' ? [{
                                id: '$in',
                                title: 'Is one of'
                              }, {
                                id: '$nin',
                                title: 'Is not one of'
                              }] : []), _toConsumableArray(pathSpec.type == 'number' ? [{
                                id: '$gt',
                                title: 'Is greater than'
                              }, {
                                id: '$gte',
                                title: 'Is equal or greater than'
                              }, {
                                id: '$lt',
                                title: 'Is less than'
                              }, {
                                id: '$lte',
                                title: 'Is equal or less than'
                              }] : []), _toConsumableArray(pathSpec.type == 'date' ? [{
                                id: '$gt',
                                title: 'Is after'
                              }, {
                                id: '$gte',
                                title: 'Is on or after'
                              }, {
                                id: '$lt',
                                title: 'Is before'
                              }, {
                                id: '$lte',
                                title: 'Is on or before'
                              }] : [])),
                              "default": operand,
                              onChange: function onChange(value) {
                                debugger;

                                if (_.isPlainObject(_this.data[path])) {
                                  // Multiple operand setter
                                  console.log('Change nested operand for path', path, 'to', value);
                                  delete _this.$data[path][operand];
                                  _this.$data[path].$eq = value;
                                } else if (value == '$eq') {
                                  // Single operand setter
                                  console.log('Change simple operand for path', path, 'to', value);
                                  _this.data[path] = value;
                                } else {
                                  _this.data[path] = _objectSpread2({}, _.isPlainObject(_this.data[path]) ? _this.data : null, _defineProperty({}, value, ''));
                                }

                                _this.refresh();
                              }
                            }]
                          };

                          if (value === undefined) ; else if (['$eq', '$ne'].includes(operand) && pathSpec["enum"]) {
                            row.items.push({
                              type: 'mgChoiceDropdown',
                              "enum": populateEnum(pathSpec),
                              "default": value
                            });
                          } else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'string') {
                            row.items.push({
                              type: 'mgText',
                              "default": value
                            });
                          } else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'number') {
                            row.items.push({
                              type: 'mgNumber',
                              "default": value
                            });
                          } else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'date') {
                            row.items.push({
                              type: 'mgDate',
                              "default": value
                            });
                          } else if (operand == '$exists') {
                            row.items.push({
                              type: 'mgToggle',
                              onText: 'yes',
                              offText: 'no',
                              "default": value
                            });
                          } else if (operand == '$in' || operand == '$nin') {
                            row.items.push({
                              type: 'mgChoiceTags',
                              "default": value,
                              "enum": populateEnum(pathSpec)
                            });
                          } else {
                            row.items.push({
                              type: 'mgError',
                              errorText: "Unsupported operand \"".concat(operand, "\"")
                            });
                          }

                          return row;
                        })
                      );
                    }).reduce(function (t, v) {
                      return t.concat(v);
                    }, []) // Flatten

                  };
                },
                changeField: function changeField(path, value) {
                  console.log('Change', path, '=', value);
                }
              }
            });

            /* script */
            const __vue_script__$s = script$s;

            /* template */
            var __vue_render__$o = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c(
                "div",
                [
                  _c("mg-form", {
                    attrs: {
                      form: _vm.$props.config.id + "-subform",
                      config: _vm.queryComponent
                    }
                  }),
                  _vm._v(" "),
                  _c("pre", [_vm._v("Data: " + _vm._s(_vm.data))])
                ],
                1
              )
            };
            var __vue_staticRenderFns__$o = [];
            __vue_render__$o._withStripped = true;

              /* style */
              const __vue_inject_styles__$s = undefined;
              /* scoped */
              const __vue_scope_id__$s = undefined;
              /* module identifier */
              const __vue_module_identifier__$s = undefined;
              /* functional template */
              const __vue_is_functional_template__$s = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$s = normalizeComponent(
                { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
                __vue_inject_styles__$s,
                __vue_script__$s,
                __vue_scope_id__$s,
                __vue_is_functional_template__$s,
                __vue_module_identifier__$s,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgQuery = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$s
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
                  "default": 'fa fa-database',
                  advanced: true
                },
                iconInactive: {
                  type: 'mgIcon',
                  "default": 'far fa-plus',
                  advanced: true
                },
                textActive: {
                  type: 'mgText',
                  "default": 'Edit query',
                  advanced: true
                },
                textInactive: {
                  type: 'mgText',
                  "default": 'Add query',
                  advanced: true
                }
              },
              format: true
            });
            var script$t = Vue.component('mgRestQuery', {
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
            const __vue_script__$t = script$t;

            /* template */
            var __vue_render__$p = function() {
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
            var __vue_staticRenderFns__$p = [];
            __vue_render__$p._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$t = normalizeComponent(
                { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
                __vue_inject_styles__$t,
                __vue_script__$t,
                __vue_scope_id__$t,
                __vue_is_functional_template__$t,
                __vue_module_identifier__$t,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgRestQuery = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$t
            });

            macgyver.register('mgSeperator', {
              title: 'Seperator',
              icon: 'far fa-minus',
              category: 'General Decoration'
            });
            var script$u = Vue.component('mgSeperator', {
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
            const __vue_script__$u = script$u;

            /* template */
            var __vue_render__$q = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c("hr", { staticClass: "mg-seperator" })
            };
            var __vue_staticRenderFns__$q = [];
            __vue_render__$q._withStripped = true;

              /* style */
              const __vue_inject_styles__$u = function (inject) {
                if (!inject) return
                inject("data-v-1f68243f_0", { source: "\n.mg-seperator {\n\tmargin-top: 0px;\n\tmargin-bottom: 10px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgSeperator.vue"],"names":[],"mappings":";AA0BA;CACA,eAAA;CACA,mBAAA;AACA","file":"mgSeperator.vue","sourcesContent":["<script>\nmacgyver.register('mgSeperator', {\n\ttitle: 'Seperator',\n\ticon: 'far fa-minus',\n\tcategory: 'General Decoration',\n});\n\nexport default Vue.component('mgSeperator', {\n\tdata: ()=> ({\n\t\tdata: undefined,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n});\n</script>\n\n<template>\n\t<hr class=\"mg-seperator\"/>\n</template>\n\n<style>\n.mg-seperator {\n\tmargin-top: 0px;\n\tmargin-bottom: 10px;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$u = undefined;
              /* module identifier */
              const __vue_module_identifier__$u = undefined;
              /* functional template */
              const __vue_is_functional_template__$u = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$u = normalizeComponent(
                { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
                __vue_inject_styles__$u,
                __vue_script__$u,
                __vue_scope_id__$u,
                __vue_is_functional_template__$u,
                __vue_module_identifier__$u,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgSeperator = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$u
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
            var script$v = Vue.component('mgTable', {
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

                  _this.$macgyver.utils.fetch(_this.$props.config.url, {
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
            const __vue_script__$v = script$v;

            /* template */
            var __vue_render__$r = function() {
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
            var __vue_staticRenderFns__$r = [
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
            __vue_render__$r._withStripped = true;

              /* style */
              const __vue_inject_styles__$v = function (inject) {
                if (!inject) return
                inject("data-v-75d70fc2_0", { source: "\n.mg-table .row-number {\n\tfont-size: 16px;\n\ttext-align: middle;\n}\n.mg-table td.row-number {\n\tmargin-top: 14px;\n}\n", map: {"version":3,"sources":["/home/mc/Dropbox/Projects/Node/@momsfriendlydevco/macgyver/src/components/mgTable.vue"],"names":[],"mappings":";AA2HA;CACA,eAAA;CACA,kBAAA;AACA;AAEA;CACA,gBAAA;AACA","file":"mgTable.vue","sourcesContent":["<script>\nmacgyver.register('mgTable', {\n\ttitle: 'Table layout',\n\ticon: 'far fa-table',\n\tcategory: 'Layout',\n\tisContainer: true,\n\tisContainerArray: true,\n\tpreferId: false,\n\tconfig: {\n\t\turl: {type: 'mgUrl', relative: true, help: 'Data feed to populate the table'},\n\t\tallowAdd: {type: 'mgToggle', title: 'Allow Row Addition', default: true},\n\t\tallowDelete: {type: 'mgToggle', title: 'Allow Row Deletion', default: true},\n\t\ttextEmpty: {type: 'mgText', title: 'No data message', default: 'No data'},\n\t\titems: {\n\t\t\ttype: 'mgTableEditor',\n\t\t\ttitle: 'Column setup',\n\t\t\tdefault: [\n\t\t\t\t{id: 'col1', type: 'mgText'},\n\t\t\t\t{id: 'col2', title: 'mgText'},\n\t\t\t\t{id: 'col3', title: 'mgText'},\n\t\t\t],\n\t\t},\n\t\taddButtonActiveClass: {type: 'mgText', default: 'btn btn-block btn-success fa fa-plus', advanced: true},\n\t\taddButtonInactiveClass: {type: 'mgText', default: 'btn btn-block btn-disabled fa fa-plus', advanced: true},\n\t\trowNumbers: {type: 'mgToggle', help: 'Show the row number at the beginning of each row', default: true},\n\t},\n\tconfigChildren: {\n\t\tshowTitle: {type: 'mgToggle', default: false, title: 'Show Title'},\n\t},\n});\n\nexport default Vue.component('mgTable', {\n\tdata: ()=> ({\n\t\tdata: [],\n\t\tnewRow: [],\n\t\tisAdding: false,\n\t}),\n\tprops: {\n\t\tconfig: Object,\n\t\tform: String,\n\t},\n\tcreated() {\n\t\tthis.$macgyver.inject(this);\n\t},\n\tmounted() {\n\t\tthis.$watch('$props.config.url', ()=> {\n\t\t\tif (!this.$props.config.url) return;\n\t\t\tthis.$macgyver.utils.fetch(this.$props.config.url, {type: 'array'})\n\t\t\t\t.then(data => this.$set(this.$props.config, 'data', data))\n\t\t}, {immediate: true});\n\t},\n\twatch: {\n\t\tdata: {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\t// Ensure that data is always an array\n\t\t\t\tif (!_.isArray(this.data)) this.data = [];\n\t\t\t},\n\t\t},\n\t},\n\tmethods: {\n\t\tcreateRow(offset) { // Offset is the row to create after - i.e. array position splice\n\t\t\tconsole.log(`FIXME: createRow(${offset})`);\n\t\t},\n\t\tdeleteRow(offset) {\n\t\t\tconsole.log(`FIXME: deleteRow(${offset})`);\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<table class=\"table table-bordered table-striped table-hover\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th v-if=\"$props.config.rowNumbers\" class=\"row-number\">#</th>\n\t\t\t\t<th v-for=\"col in $props.config.items\" :key=\"col.id\" :style=\"(col.width ? 'width: ' + col.width + '; ' : '') + col.class\">\n\t\t\t\t\t{{col.title}}\n\t\t\t\t</th>\n\t\t\t\t<th class=\"btn-context\"></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr v-if=\"!data || !data.length\">\n\t\t\t\t<td :colspan=\"$props.config.items.length + ($props.config.rowNumbers ? 2 : 1)\">\n\t\t\t\t\t<div class=\"alert alert-warning m-10\">{{$props.config.textEmpty || 'No data'}}</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr v-for=\"(row, rowNumber) in data\">\n\t\t\t\t<td v-if=\"$props.config.rowNumbers\" class=\"row-number\">\n\t\t\t\t\t{{rowNumber + 1 | number}}\n\t\t\t\t</td>\n\t\t\t\t<td v-for=\"col in $props.config.items\" :key=\"col.id\" :class=\"col.class\">\n\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"col\"/>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"btn-context\">\n\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t<a class=\"btn btn-context\" data-toggle=\"dropdown\"><i class=\"far fa-ellipsis-v\"></i></a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t\t<li><a @click=\"createRow(rowNumber)\"><i class=\"far fa-arrow-circle-up\"></i> Add row above</a></li>\n\t\t\t\t\t\t\t<li><a @click=\"createRow(rowNumber)\"><i class=\"far fa-arrow-circle-down\"></i> Add row below</a></li>\n\t\t\t\t\t\t\t<li v-if=\"$props.config.allowDelete\" class=\"dropdown-divider\"></li>\n\t\t\t\t\t\t\t<li v-if=\"$props.config.allowDelete\" class=\"dropdown-item-danger\"><a @click=\"deleteRow(rowNumber)\"><i class=\"far fa-trash\"></i> Delete</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr class=\"mgTable-append\" v-if=\"$props.config.allowAdd\">\n\t\t\t\t<td v-if=\"$props.config.rowNumbers\" class=\"row-number\">\n\t\t\t\t\t<i class=\"far fa-asterisk\"></i>\n\t\t\t\t</td>\n\t\t\t\t<td v-for=\"(col, colNumber) in $props.config.items\" :key=\"col.id\">\n\t\t\t\t\t<mg-component :form=\"$props.form\" :config=\"col\" :data=\"newRow[colNumber]\"/>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<a @click=\"createRow()\" :class=\"isAdding ? $props.config.addButtonActiveClass : $props.config.addButtonInactiveClass\"></a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</template>\n\n<style>\n.mg-table .row-number {\n\tfont-size: 16px;\n\ttext-align: middle;\n}\n\n.mg-table td.row-number {\n\tmargin-top: 14px;\n}\n</style>\n"]}, media: undefined });

              };
              /* scoped */
              const __vue_scope_id__$v = undefined;
              /* module identifier */
              const __vue_module_identifier__$v = undefined;
              /* functional template */
              const __vue_is_functional_template__$v = false;
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$v = normalizeComponent(
                { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
                __vue_inject_styles__$v,
                __vue_script__$v,
                __vue_scope_id__$v,
                __vue_is_functional_template__$v,
                __vue_module_identifier__$v,
                false,
                createInjector,
                undefined,
                undefined
              );

            var mgTable = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$v
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
            var script$w = Vue.component('mgTextArea', {
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
            const __vue_script__$w = script$w;

            /* template */
            var __vue_render__$s = function() {
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
            var __vue_staticRenderFns__$s = [];
            __vue_render__$s._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$w = normalizeComponent(
                { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
                __vue_inject_styles__$w,
                __vue_script__$w,
                __vue_scope_id__$w,
                __vue_is_functional_template__$w,
                __vue_module_identifier__$w,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgTextArea = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$w
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
              format: true,
              shorthand: ['string', 'str']
            });
            var script$x = Vue.component('mgText', {
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
            const __vue_script__$x = script$x;

            /* template */
            var __vue_render__$t = function() {
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
            var __vue_staticRenderFns__$t = [];
            __vue_render__$t._withStripped = true;

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
              
              /* style inject shadow dom */
              

              
              const __vue_component__$x = normalizeComponent(
                { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
                __vue_inject_styles__$x,
                __vue_script__$x,
                __vue_scope_id__$x,
                __vue_is_functional_template__$x,
                __vue_module_identifier__$x,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgText = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$x
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
            var script$y = Vue.component('mgTime', {
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
            const __vue_script__$y = script$y;

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
            var __vue_staticRenderFns__$u = [];
            __vue_render__$u._withStripped = true;

              /* style */
              const __vue_inject_styles__$y = undefined;
              /* scoped */
              const __vue_scope_id__$y = undefined;
              /* module identifier */
              const __vue_module_identifier__$y = undefined;
              /* functional template */
              const __vue_is_functional_template__$y = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$y = normalizeComponent(
                { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
                __vue_inject_styles__$y,
                __vue_script__$y,
                __vue_scope_id__$y,
                __vue_is_functional_template__$y,
                __vue_module_identifier__$y,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgTime = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$y
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
            __webpack_require__(8);

            var Component = __webpack_require__(6)(
              /* script */
              __webpack_require__(1),
              /* template */
              __webpack_require__(7),
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
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);
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
                tag: {
                  type: String
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
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'disabled');
                  }
                },
                switchColor: {
                  type: [String, Object],
                  validator: function validator(value) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked');
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


                  return ['vue-js-switch', {
                    toggled: toggled,
                    disabled: disabled
                  }];
                },
                coreStyle: function coreStyle() {
                  return {
                    width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width),
                    height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
                    backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
                    borderRadius: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(Math.round(this.height / 2))
                  };
                },
                buttonRadius: function buttonRadius() {
                  return this.height - this.margin * 2;
                },
                distance: function distance() {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width - this.height + this.margin);
                },
                buttonStyle: function buttonStyle() {
                  var transition = 'transform ' + this.speed + 'ms';
                  var margin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.margin);

                  var transform = this.toggled ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate3d */])(this.distance, margin) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate3d */])(margin, margin);

                  var background = this.switchColor ? this.switchColorCurrent : null;

                  return {
                    width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
                    height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
                    transition: transition,
                    transform: transform,
                    background: background
                  };
                },
                labelStyle: function labelStyle() {
                  return {
                    lineHeight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
                    fontSize: this.fontSize ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.fontSize) : null
                  };
                },
                colorChecked: function colorChecked() {
                  var color = this.color;


                  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(color)) {
                    return color || DEFAULT_COLOR_CHECKED;
                  }

                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(color, 'checked', DEFAULT_COLOR_CHECKED);
                },
                colorUnchecked: function colorUnchecked() {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'unchecked', DEFAULT_COLOR_UNCHECKED);
                },
                colorDisabled: function colorDisabled() {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'disabled', this.colorCurrent);
                },
                colorCurrent: function colorCurrent() {
                  return this.toggled ? this.colorChecked : this.colorUnchecked;
                },
                labelChecked: function labelChecked() {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'checked', DEFAULT_LABEL_CHECKED);
                },
                labelUnchecked: function labelUnchecked() {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'unchecked', DEFAULT_LABEL_UNCHECKED);
                },
                switchColorChecked: function switchColorChecked() {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'checked', DEFAULT_SWITCH_COLOR);
                },
                switchColorUnchecked: function switchColorUnchecked() {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'unchecked', DEFAULT_SWITCH_COLOR);
                },
                switchColorCurrent: function switchColorCurrent() {
                  var switchColor = this.switchColor;


                  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(this.switchColor)) {
                    return this.switchColor || DEFAULT_SWITCH_COLOR;
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
                  var toggled = !this.toggled;

                  if (!this.sync) {
                    this.toggled = toggled;
                  }

                  this.$emit('input', toggled);
                  this.$emit('change', {
                    value: toggled,
                    tag: this.tag,
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
            /***/ (function(module, __webpack_exports__, __webpack_require__) {
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isString; });
            /* unused harmony export isBoolean */
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return has; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return get; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return px; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return translate3d; });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var isString = function isString(value) {
              return typeof value === 'string';
            };

            var isObject = function isObject(value) {
              return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
            };

            var has = function has(object, key) {
              return isObject(object) && object.hasOwnProperty(key);
            };

            var get = function get(object, key, defaultValue) {
              return has(object, key) ? object[key] : defaultValue;
            };

            var px = function px(value) {
              return value + 'px';
            };

            var translate3d = function translate3d(x, y) {
              var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0px';

              return 'translate3d(' + x + ', ' + y + ', ' + z + ')';
            };

            /***/ }),
            /* 4 */
            /***/ (function(module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(5)();
            // imports


            // module
            exports.push([module.i, ".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""]);

            // exports


            /***/ }),
            /* 5 */
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
            /* 6 */
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
            /* 7 */
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
            /* 8 */
            /***/ (function(module, exports, __webpack_require__) {

            // style-loader: Adds some css to the DOM by adding a <style> tag

            // load the styles
            var content = __webpack_require__(4);
            if(typeof content === 'string') content = [[module.i, content, '']];
            if(content.locals) module.exports = content.locals;
            // add the styles to the DOM
            var update = __webpack_require__(9)("2283861f", content, true);

            /***/ }),
            /* 9 */
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

            var listToStyles = __webpack_require__(10);

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
            /* 10 */
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
                  "default": '#cccccc',
                  advanced: true
                }
              },
              format: function format(v, config) {
                return v ? config.onText : config.offText;
              },
              formatAlign: 'center',
              shorthand: ['boolean', 'switch', 'toggle']
            });
            var script$z = Vue.component('mgToggle', {
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
            const __vue_script__$z = script$z;

            /* template */
            var __vue_render__$v = function() {
              var _vm = this;
              var _h = _vm.$createElement;
              var _c = _vm._self._c || _h;
              return _c("toggle-button", {
                attrs: {
                  value: _vm.data,
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
            var __vue_staticRenderFns__$v = [];
            __vue_render__$v._withStripped = true;

              /* style */
              const __vue_inject_styles__$z = undefined;
              /* scoped */
              const __vue_scope_id__$z = undefined;
              /* module identifier */
              const __vue_module_identifier__$z = undefined;
              /* functional template */
              const __vue_is_functional_template__$z = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$z = normalizeComponent(
                { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
                __vue_inject_styles__$z,
                __vue_script__$z,
                __vue_scope_id__$z,
                __vue_is_functional_template__$z,
                __vue_module_identifier__$z,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgToggle = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$z
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
            var script$A = Vue.component('mgUrl', {
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
            const __vue_script__$A = script$A;

            /* template */
            var __vue_render__$w = function() {
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
            var __vue_staticRenderFns__$w = [];
            __vue_render__$w._withStripped = true;

              /* style */
              const __vue_inject_styles__$A = undefined;
              /* scoped */
              const __vue_scope_id__$A = undefined;
              /* module identifier */
              const __vue_module_identifier__$A = undefined;
              /* functional template */
              const __vue_is_functional_template__$A = false;
              /* style inject */
              
              /* style inject SSR */
              
              /* style inject shadow dom */
              

              
              const __vue_component__$A = normalizeComponent(
                { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
                __vue_inject_styles__$A,
                __vue_script__$A,
                __vue_scope_id__$A,
                __vue_is_functional_template__$A,
                __vue_module_identifier__$A,
                false,
                undefined,
                undefined,
                undefined
              );

            var mgUrl = /*#__PURE__*/Object.freeze({
                        __proto__: null,
                        'default': __vue_component__$A
            });

}(Vue, $));
//# sourceMappingURL=macgyver.js.map
