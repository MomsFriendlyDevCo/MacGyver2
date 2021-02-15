(function ($) {
  'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;

  function _typeof(obj) {
    "@babel/helpers - typeof";

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

  function _isNativeReflectConstruct() {
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
    if (_isNativeReflectConstruct()) {
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
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

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

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

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
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
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
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
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

      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object;
      }

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
  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

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
      : (isFlat ? keysIn_1 : keys_1);

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
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */
  function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike_1(collection)) {
        var iteratee = _baseIteratee(predicate);
        collection = keys_1(collection);
        predicate = function(key) { return iteratee(iterable[key], key, iterable); };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }

  var _createFind = createFind;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  var _baseFindIndex = baseFindIndex;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber_1(value);
    if (value === INFINITY$2 || value === -INFINITY$2) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  var toFinite_1 = toFinite;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite_1(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  var toInteger_1 = toInteger;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
    if (index < 0) {
      index = nativeMax(length + index, 0);
    }
    return _baseFindIndex(array, _baseIteratee(predicate), index);
  }

  var findIndex_1 = findIndex;

  /**
   * Iterates over elements of `collection`, returning the first element
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36, 'active': true },
   *   { 'user': 'fred',    'age': 40, 'active': false },
   *   { 'user': 'pebbles', 'age': 1,  'active': true }
   * ];
   *
   * _.find(users, function(o) { return o.age < 40; });
   * // => object for 'barney'
   *
   * // The `_.matches` iteratee shorthand.
   * _.find(users, { 'age': 1, 'active': true });
   * // => object for 'pebbles'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.find(users, ['active', false]);
   * // => object for 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.find(users, 'active');
   * // => object for 'barney'
   */
  var find = _createFind(findIndex_1);

  var find_1 = find;

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

  /** `Object#toString` result references. */
  var objectTag$4 = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$h = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$e = objectProto$h.hasOwnProperty;

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
    var Ctor = hasOwnProperty$e.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

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
   * **Note:** Multiple values can be checked by combining several matchers
   * using `_.overSome`
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
   *
   * // Checking for several possible values
   * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
   * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
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
  var nativeMax$1 = Math.max;

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
    start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax$1(args.length - start, 0),
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
  var objectProto$i = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$f = objectProto$i.hasOwnProperty;

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
            (eq_1(value, objectProto$i[key]) && !hasOwnProperty$f.call(object, key))) {
          object[key] = source[key];
        }
      }
    }

    return object;
  });

  var defaults_1 = defaults;

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
      if (params == null) {
          return new NopeOperation(params, owneryQuery, options);
      }
      return createNumericalOperation(params, owneryQuery, options);
  }; };
  var numericalOperation = function (createTester) {
      return numericalOperationCreator(function (params, owneryQuery, options) {
          var typeofParams = typeof comparable(params);
          var test = createTester(params);
          return new EqualsOperation(function (b) {
              return typeof comparable(b) === typeofParams && test(b);
          }, owneryQuery, options);
      });
  };
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
  var $lt = numericalOperation(function (params) { return function (b) { return b < params; }; });
  var $lte = numericalOperation(function (params) { return function (b) { return b <= params; }; });
  var $gt = numericalOperation(function (params) { return function (b) { return b > params; }; });
  var $gte = numericalOperation(function (params) { return function (b) { return b >= params; }; });
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
          operations: Object.assign({}, defaultOperations, operations)
      });
  };

  var _this = undefined;
  var $macgyver = {};
  /**
  * Storage for all MacGyver registered widgets
  * Each key is the unique reference name of the component e.g. `"mgText"`
  * Each value is the original options object definition passed to `Vue.mgCompoenent(name, options)`
  * @var {Object}
  */

  $macgyver.widgets = {};
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
    $macgyver.$forms[id].config = $macgyver.compileSpec(config).spec;
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
  * @param {Object} spec The form spec object to exmaine
  * @returns {Object} A prototype data object with all defaults populated
  */


  $macgyver.forms.getPrototype = function (spec) {
    return $macgyver.flatten(spec, {
      type: 'spec',
      want: 'array',
      wantDataPath: true
    }).reduce(function (data, node) {
      if (!node.path || !node["default"]) return data; // No path or default speciifed - skip

      $macgyver.utils.setPath(data, node.path, node["default"]);
      return data;
    }, {});
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
      if (settings.root && settings.root.items) {
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
      // Each item lacks an ID and either doesn't have a type or that type is not a container
      convertShorthandTranslate: function convertShorthandTranslate(spec) {
        return {
          type: 'mgContainer',
          items: map_1(spec, function (widget, id) {
            var _widget$type;

            if (isString_1(widget)) widget = {
              type: widget
            }; // Widget is a straight string (e.g. 'boolean'), then fall through to type finders

            if ((_widget$type = widget.type) !== null && _widget$type !== void 0 && _widget$type.startsWith('mg')) {
              // Already a defined MacGyver spec
              return widget;
            } else if (isString_1(id) && id.startsWith('mg')) {
              // ID is type, payload is widget
              return _objectSpread2(_objectSpread2({}, widget), {}, {
                type: id
              });
            } else if (widget.type) {
              // We have a type - try to match it against known widgets (or error out)
              var typeLCase = widget.type.toLowerCase();

              var found = find_1($macgyver.widgets, function (mgWidget) {
                return (// Search for likely widgets
                  mgWidget.meta.id.substr(2).toLowerCase() == typeLCase // matches `mg${TYPE}`
                  || mgWidget.meta.shorthand.includes(typeLCase)
                );
              } // is included in shorthand alternatives
              );

              if (found) {
                // Found either a widget of form `mg${type}` or a widget with that type as a shorthand
                return _objectSpread2(_objectSpread2({
                  id: id
                }, widget), {}, {
                  type: found.meta.id
                });
              } else {
                // No idea what this widget is, wrap in an mgError
                return {
                  type: 'mgError',
                  text: "Unknown widget type \"".concat(widget.type, "\": ") + JSON.stringify(widget, null, '\t')
                };
              }
            } else if (isPlainObject_1(widget)) {
              // Given object but it explicitly does not have a type - assume mgText
              return _objectSpread2(_objectSpread2({
                id: id
              }, widget), {}, {
                type: 'mgText'
              });
            } else {
              // Can't determine any type to link against - error out
              return {
                type: 'mgError',
                text: "No widget type specified: " + JSON.stringify(widget, null, '\t')
              };
            }
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
        // Remap unknown widget (we already did shorthand remapping above so this should be a 1:1 match)
        console.log("Unknown widget '".concat(widget.type, "'"), widget);
        widget = {
          type: 'mgError',
          text: "Unknown widget type \"".concat(widget.type, "\": ") + JSON.stringify(widget)
        };
      } else if (settings.widgetDefaults) {
        var _ref, _$macgyver$widgets$wi;

        // Apply defaults to widget
        Object.assign(widget, (_ref = (_$macgyver$widgets$wi = $macgyver.widgets[widget.type].config, pickBy_1(_$macgyver$widgets$wi, function (v, k) {
          return !has_1(widget, k) && has_1(v, 'default');
        })), mapValues_1(_ref, function (v) {
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
        var _ref2 = [url.url, url];
        url = _ref2[0];
        options = _ref2[1];
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
            session.mappings[k.substr(1)] = {
              required: false,
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
    } else if (isString_1(expression) && (match = /*#__PURE__*/_wrapRegExp(/^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([\.0-9A-Z_a-z]+)([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*==?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*!=[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*<=?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>=?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+\$lte?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+\$gte?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, {
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
      } // Convert string to boolean


      if (isString_1(match.groups.right) && match.groups.right.toLowerCase() === 'true') match.groups.right = true;
      if (isString_1(match.groups.right) && match.groups.right.toLowerCase() === 'false') match.groups.right = false;
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
      throw new Error("Error parsinng expression \"".concat(expression, "\", $macgyver.utils.evalCompile() can only process simple expressions for now, use Sift object syntax for more complex tests"));
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
  * Set a dotted notation or array path to a set value
  * This function will correctly populate any missing entities, calling vm.$set on each traversal of the path
  * Passing undefined as a value removes the key (unless removeUndefined is set to false)
  * *
  * @param {Object} [target] The target to set the path of, if omitted the `vm` object is used as the base for traversal
  * @param {string|array} path The path to set within the target / vm
  * @param {*} value The value to set
  * @param {Object} [options] Additional options
  * @param {boolean} [options.arrayNumeric=true] Process numeric path segments as arrays
  * @param {boolean} [options.removeUndefined=true] If undefined is specified as a value the key is removed instead of being set
  * @param {boolean} [options.debug=false] Also print out debugging information when setting the value
  * @returns {Object} The set value, like $set()
  *
  * @example Set a deeply nested path within a target object
  * $macgyver.utils.setPath(this, 'foo.bar.baz', 123); // this.$data.foo.bar.baz = 123
  *
  * @example Set a deeply nested path, with arrays, assuming VM as the root node
  * $macgyver.utils.setPath('foo.1.bar', 123); // vm.$data.foo = [{bar: 123}]
  */


  $macgyver.utils.setPath = function (target, path, value, options) {
    // Argument mangling {{{
    if (isString_1(target) || isArray_1(target) || value === undefined) {
      // called as (path, value)
      var _ref3 = [_this, target, path, value];
      target = _ref3[0];
      path = _ref3[1];
      value = _ref3[2];
      options = _ref3[3];
    } else if (!isObject_1(target)) {
      throw new Error('Cannot use $setPath on non-object target');
    } // }}}


    var settings = _objectSpread2({
      arrayNumeric: true,
      debug: false,
      removeUndefined: true
    }, options);

    if (settings.debug) console.debug('[$setPath]', path, '=', value, {
      target: target,
      options: options
    });
    var node = target;
    if (!path) throw new Error('Cannot $setPath with undefined path');
    (isString_1(path) ? path.split('.') : path).some(function (chunk, chunkIndex, chunks) {
      if (chunkIndex == chunks.length - 1) {
        // Leaf node
        if (settings.removeUndefined && value === undefined) {
          $macgyver.utils.unset(node, chunk);
        } else {
          $macgyver.utils.set(node, chunk, value);
        }
      } else if (node[chunk] === undefined) {
        // This chunk (and all following chunks) does't exist - populate from here
        chunks.slice(chunkIndex, chunks.length - 1).forEach(function (chunk) {
          if (settings.arrayNumeric && isFinite(chunk)) {
            $macgyver.utils.set(node, chunk, []);
          } else {
            $macgyver.utils.set(node, chunk, {});
          }

          node = node[chunk];
        });
        $macgyver.utils.set(node, chunks[chunks.length - 1], value);
        return true;
      } else {
        node = node[chunk];
        return false;
      }
    });
    return value;
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
  * Mapping around Vue.unset (if its available) or simple key delettion
  * @param {Object} target The target object to mutate
  * @param {string} key The key to remove
  */

  $macgyver.utils.unset = $macgyver.utils.global.Vue ? Vue.unset : function (target, key) {
    delete target[key];
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
  * Attempt to increment a string ID
  * This is usually used when we have a base ID and want to duplicate the widget
  * If ID is blank, blank is returned (assumes base parent also has no ID)
  * @param {string} str The string to increment
  * @returns {string} An incremented version of str
  */


  $macgyver.utils.incrementId = function (str) {
    if (!str) {
      return str;
    } else if (/[0-9]$/.test(str)) {
      // Ends in a number
      var extracted = /*#__PURE__*/_wrapRegExp(/^(.*)([0-9]+)$/, {
        prefix: 1,
        numeric: 2
      }).exec(str); // Extract numeric suffix


      return extracted.groups.prefix + (parseInt(extracted.groups.prefix) + 1);
    } else {
      // No idea - just append '2'
      return str + '2';
    }
  };

  /**
  * Main MacGyver loader
  */
  //import('./services/emit');
  //import('./services/setPath');
  //import('./services/watchAll');
  // Import all MacGyver components
  // NOTE: These are defined as dynamic imports as we need window.macgyver to be a accessible

  Promise.resolve().then(function () { return mgAlert; });
  Promise.resolve().then(function () { return mgChoiceAutocomplete; });
  Promise.resolve().then(function () { return mgButton; });
  Promise.resolve().then(function () { return mgCheckBox; });
  Promise.resolve().then(function () { return mgChoiceButtons; });
  Promise.resolve().then(function () { return mgChoiceCheckbox; });
  Promise.resolve().then(function () { return mgChoiceDropdown; });
  Promise.resolve().then(function () { return mgChoiceList; });
  Promise.resolve().then(function () { return mgChoicePopup; }); // FIXME: Needs $prompt

  Promise.resolve().then(function () { return mgChoiceRadio; });
  Promise.resolve().then(function () { return mgChoiceTags; });
  Promise.resolve().then(function () { return mgChoiceTree; });
  Promise.resolve().then(function () { return mgCode; });
  Promise.resolve().then(function () { return mgColor; });
  Promise.resolve().then(function () { return mgComponent; });
  Promise.resolve().then(function () { return mgContainer; });
  Promise.resolve().then(function () { return mgDate; });
  Promise.resolve().then(function () { return mgDatetime; });
  Promise.resolve().then(function () { return mgEmail; });
  Promise.resolve().then(function () { return mgError; });
  Promise.resolve().then(function () { return mgFormEditor; });
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
  Promise.resolve().then(function () { return mgPassword; });
  Promise.resolve().then(function () { return mgPermissions; });
  Promise.resolve().then(function () { return mgPlaceholder; });
  Promise.resolve().then(function () { return mgQuery; });
  Promise.resolve().then(function () { return mgRestQuery; }); // FIXME: Needs $prompt

  Promise.resolve().then(function () { return mgSeperator; });
  Promise.resolve().then(function () { return mgTable; });
  Promise.resolve().then(function () { return mgTextArea; });
  Promise.resolve().then(function () { return mgText; });
  Promise.resolve().then(function () { return mgTime; }); //import('./components/mgToggle');

  Promise.resolve().then(function () { return mgUrl; });
  Promise.resolve().then(function () { return mgVideo; }); //import('./components/mgWysiwyg');

  var script = app.mgComponent('mgAlert', {
    meta: {
      title: 'Alert Box',
      icon: 'far fa-exclamation-triangle',
      category: 'General Decoration',
      preferId: false
    },
    props: {
      text: {
        type: 'mgText',
        "default": 'This is an alert!'
      },
      className: {
        type: 'mgChoiceButtons',
        "default": 'alert-info',
        iconSelected: 'fa fa-fw fa-check',
        iconDefault: 'fa fa-fw',
        "enum": [{
          id: 'alert alert-success',
          "class": 'btn-success'
        }, {
          id: 'alert alert-info',
          "class": 'btn-info'
        }, {
          id: 'alert alert-warning',
          "class": 'btn-warning'
        }, {
          id: 'alert alert-danger',
          "class": 'btn-danger'
        }]
      }
    }
  });

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
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { class: _vm.$props.className }, [
      _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.text) + "\n")
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
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

  var mgAlert = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__
  });

  var vueSelect = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}("undefined"!=typeof self?self:commonjsGlobal,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var o=n(4),i=n(5),s=n(6);t.exports=function(t){return o(t)||i(t)||s()};},function(t,e){function n(e){return "function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n;},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}};},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)};},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};},function(t,e,n){var o=n(2);n.n(o).a;},function(t,e,n){n.r(e);var o=n(0),i=n.n(o),s=n(1),r=n.n(s),a=n(3),l=n.n(a),c={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll();}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),o=e.getBoundingClientRect(),i=o.top,s=o.bottom,r=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-r)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return {typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t);}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return {mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading);},loading:function(t){this.mutableLoading=t;}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function h(t,e,n,o,i,s,r,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r);},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot);}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)};}else {var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l];}return {exports:t,options:c}}var d={Deselect:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(t,e,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),s=i.height,r=i.top,a=i.left,l=i.width,c=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset;t.unbindPosition=o.calculatePosition(t,o,{width:l+"px",left:c+a+"px",top:u+r+s+"px"}),document.body.appendChild(t);}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t));}};var y=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n];})),JSON.stringify(e)},b=0;var g=function(){return ++b};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o);}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){l()(t,e,n[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));}));}return t}var _={components:m({},d),mixins:[c,u,p],directives:{appendToBody:f},props:{value:{},components:{type:Object,default:function(){return {}}},options:{type:Array,default:function(){return []}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return !0}},getOptionLabel:{type:Function,default:function(t){return "object"===r()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==r()(t))return t;try{return t.hasOwnProperty("id")?t.id:y(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect();}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return (e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var o=n.getOptionLabel(t);return "number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)}))}},createOption:{type:Function,default:function(t){return "object"===r()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return ["function","boolean"].includes(r()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return [13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var o=n.width,i=n.top,s=n.left;t.style.top=i,t.style.left=s,t.style.width=o;}}},data:function(){return {uid:g(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value);},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t);},multiple:function(){this.clearSelection();},open:function(t){this.$emit(t?"open":"close");}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag);},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t);},select:function(t){this.$emit("option:selecting",t),this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t),this.$emit("option:selected",t)),this.onAfterSelect(t);},deselect:function(t){var e=this;this.$emit("option:deselecting",t),this.updateValue(this.selectedValue.filter((function(n){return !e.optionComparator(n,t)}))),this.$emit("option:deselected",t);},clearSelection:function(){this.updateValue(this.multiple?[]:null);},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="");},updateValue:function(t){var e=this;void 0===this.value&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t);},toggleDropdown:function(t){var e=t.target!==this.searchEl;e&&t.preventDefault();var n=[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||!1));void 0===this.searchEl||n.filter(Boolean).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus());},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur");},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t);}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return "object"===r()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t);},onEscape:function(){this.search.length?this.search="":this.searchEl.blur();},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions();},onSearchFocus:function(){this.open=!0,this.$emit("search:focus");},onMousedown:function(){this.mousedown=!0;},onMouseUp:function(){this.mousedown=!1;},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},o={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return o[t]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return {search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.loading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:m({},e,{deselect:this.deselect}),footer:m({},e,{deselect:this.deselect})}},childComponents:function(){return m({},d,{},this.components)},stateClasses:function(){return {"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return !!this.search},dropdownOpen:function(){return !this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n);}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return !this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},O=(n(7),h(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs"+t.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox",tabindex:"-1"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,o){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":o===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{role:"option",id:"vs"+t.uid+"__option-"+o,"aria-selected":o===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=o);},mousedown:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e);}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:u,pointerScroll:c};n.d(e,"VueSelect",(function(){return O})),n.d(e,"mixins",(function(){return w}));e.default=O;}])}));

  });

  var VueSelect = unwrapExports(vueSelect);
  var vueSelect_1 = vueSelect.VueSelect;

  var _enumSource;
  Vue.component("v-select", VueSelect);
  var script$1 = app.mgComponent("mgChoiceAutocomplete", {
    meta: {
      title: "Autocomplete",
      icon: "far fa-chevron-circle-down",
      category: "Choice Selectors",
      preferId: true,
      shorthand: ["choice", "choose", "dropdown", "pick"]
    },
    data: function data() {
      return {
        selected: [],
        enumIter: []
      };
    },
    props: {
      enumSource: (_enumSource = {
        type: "mgChoiceButtons",
        "default": "list",
        "enum": ["list", "url"]
      }, _defineProperty(_enumSource, "default", "list"), _defineProperty(_enumSource, "help", "Where to populate the list data from"), _enumSource),
      "enum": {
        type: "mgTable",
        title: "List items",
        showIf: 'enumSource == "list"',
        items: [{
          id: "id",
          type: "mgText",
          required: true
        }, {
          id: "title",
          type: "mgText",
          required: true
        }, {
          id: "icon",
          type: "mgIcon"
        }]
      },
      enumUrl: {
        type: "mgUrl",
        vueType: ["string", "object"],
        showIf: 'enumSource == "url"',
        help: "Data feed URL to fetch choice values from"
      },
      optionKeyPath: {
        type: "mgText",
        "default": "id",
        help: "Path within data feed for options key",
        showIf: 'enumSource == "url"'
      },
      optionLabelPath: {
        type: "mgText",
        "default": "title",
        help: "Path within data feed for options label",
        showIf: 'enumSource == "url"'
      },
      placeholder: {
        type: "mgText",
        help: "Ghost text to display when there is no value"
      },
      required: {
        type: "mgToggle",
        "default": false,
        help: "One choice must be selected"
      },
      focus: {
        type: "mgToggle",
        "default": false,
        help: "Auto-focus the element when it appears on screen"
      }
    },
    created: function created() {
      var _this = this;

      this.$on("mgValidate", function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      }); // FIXME: No need to respond to changes during settings adjustments
      //this.$watch('$props.enumUrl', () => this.fetchEnum(), {immediate: true});

      /*
      this.$watch('$props.enum', ()=> {
      	if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
      		this.setEnum(this.$props.enum.map(i => ({id: _.camelCase(i), title: i})));
      	} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
      		this.setEnum(this.$props.enum);
      	}
      }, {immediate: true});
      */
    },
    mounted: function mounted() {
      if (this.$props.focus) {
        // NOTE: Focus selection does NOT work if DevTools is open in Chome
        this.$refs.select.searchEl.focus();
      }
    },
    methods: {
      changeHandler: function changeHandler(e) {
        console.log("changeHandler", e);
        if (!e) return this.data = this.selected = null;
        this.data = this.getOptionKey(e);
        this.selected = e;
      },

      /**
      * Triggered when the search text changes.
      *
      * @param search {String} Current search text
      * @param loading {Function} Toggle loading class
      */
      searchHandler: function searchHandler(search, loading) {
        console.log("searchHandler", search); // TODO: Debounce

        loading(true);
        this.fetchEnum(search).then(function () {
          return loading(false);
        });
      },
      fetchEnum: function fetchEnum(query) {
        var _this2 = this;

        console.log("fetchEnum", this.$props.enumUrl, query);
        if (!this.$props.enumUrl || !query) return Promise.resolve();
        return this.$macgyver.utils.fetch(this.$props.enumUrl + query, {
          type: "array"
        }).then(function (data) {
          return _this2.setEnum(data);
        });
      },

      /**
      * Populate the enumIter object
      * This function also correctly populates the selected item (or the default)
      * Each item is assumed to have the spec `{id: String, title: String, icon?: String}`
      * @param {array<Object>} enumIter The new iterable enum
      */
      setEnum: function setEnum(enumIter) {
        var _this3 = this;

        this.enumIter = enumIter;

        if (this.data) {
          this.selected = this.enumIter.find(function (e) {
            return _this3.getOptionKey(e) == _this3.data;
          }) || this.data;
        } else if (this.$props["default"]) {
          this.selected = this.enumIter.find(function (e) {
            return _this3.getOptionKey(e) == _this3.$props["default"];
          }) || this.$props["default"];
        }
      },

      /**
      * Retrieve option label based on path specified in properties.
      * @param {Object} option The selected option within enum
      */
      getOptionLabel: function getOptionLabel(option) {
        return _.get(option, this.$props.optionLabelPath, '');
      },

      /**
      * Retrieve option key based on path specified in properties.
      * @param {Object} option The selected option within enum
      */
      getOptionKey: function getOptionKey(option) {
        return _.get(option, this.$props.optionKeyPath, '');
      }
    }
  });

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-select", {
      ref: "select",
      attrs: {
        value: _vm.selected,
        label: "title",
        options: _vm.enumIter,
        placeholder: _vm.$props.placeholder,
        clearable: !_vm.$props.required,
        "get-option-key": _vm.getOptionKey,
        "get-option-label": _vm.getOptionLabel
      },
      on: { search: _vm.searchHandler, input: _vm.changeHandler },
      scopedSlots: _vm._u([
        {
          key: "selected-option",
          fn: function(option) {
            return [
              option.icon ? _c("i", { class: option.icon }) : _vm._e(),
              _vm._v("\n\t\t" + _vm._s(_vm.getOptionLabel(option)) + "\n\t")
            ]
          }
        },
        {
          key: "option",
          fn: function(option) {
            return [
              option.icon ? _c("i", { class: option.icon }) : _vm._e(),
              _vm._v("\n\t\t" + _vm._s(_vm.getOptionLabel(option)) + "\n\t")
            ]
          }
        }
      ])
    })
  };
  var __vue_staticRenderFns__$1 = [];
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
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
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

  var mgChoiceAutocomplete = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$1
  });

  var script$2 = app.mgComponent('mgButton', {
    meta: {
      title: 'Button',
      icon: 'far fa-mouse-pointer',
      category: 'Interaction',
      preferId: false
    },
    props: {
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
        type: 'mgText',
        vueType: 'any'
      },
      className: {
        type: 'mgText',
        advanced: true,
        "default": 'btn btn-light'
      }
    }
  });

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
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
            value: _vm.$props.tooltip,
            expression: "$props.tooltip"
          }
        ],
        class: _vm.$props.className,
        on: {
          click: function($event) {
            return _vm.$mgForm.run(_vm.$props.action)
          }
        }
      },
      [
        _vm.$props.icon ? _c("i", { class: _vm.$props.icon }) : _vm._e(),
        _vm._v("\n\t" + _vm._s(_vm.$props.text) + "\n")
      ]
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

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
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
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

  var mgButton = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$2
  });

  var script$3 = app.mgComponent('mgCheckBox', {
    meta: {
      title: 'Check Box',
      icon: 'far fa-check-square',
      category: 'Simple Inputs',
      preferId: true,
      format: function format(v) {
        return v ? 'Yes' : 'No';
      },
      formatClass: 'text-center'
    }
  });

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
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
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

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
    

    
    const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
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

  var mgCheckBox = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$3
  });

  var script$4 = app.mgComponent('mgChoiceButtons', {
    meta: {
      title: 'Choice Buttons',
      icon: 'fas fa-ellipsis-h',
      category: 'Choice Selectors',
      preferId: true
    },
    data: function data() {
      return {
        enumIter: []
      };
    },
    props: {
      "enum": {
        type: 'mgTable',
        title: 'List items',
        items: [{
          id: 'id',
          title: 'ID'
        }, {
          id: 'title',
          title: 'Title'
        }, {
          id: 'tooltip',
          title: 'Tooltip'
        }, {
          id: 'icon',
          title: 'Icon',
          type: 'mgIcon'
        }, {
          id: 'class',
          title: 'Classes'
        }, {
          id: 'classActive',
          title: 'Active Class'
        }, {
          id: 'classInactive',
          title: 'Inactive Class'
        } // Implied: {id: 'action', title: 'Action on select', type: 'function'},
        ]
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    },
    methods: {
      select: function select(item) {
        this.data = item.id;
        if (item.action) this.$mgForm.run(item.action);
      }
    },
    watch: {
      '$props.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props["enum"]) && _.isString(this.$props["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props["enum"]) && _.isObject(this.$props["enum"][0])) {
            // Collection
            this.enumIter = this.$props["enum"];
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
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mg-choice-buttons", class: _vm.$props.classWrapper },
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
              item.id && _vm.data == item.id
                ? item.classActive || item.class || _vm.$props.itemClassActive
                : item.classInactive ||
                  item.class ||
                  _vm.$props.itemClassInactive,
            on: {
              click: function($event) {
                return _vm.select(item)
              }
            }
          },
          [
            item.icon ? _c("i", { class: item.icon }) : _vm._e(),
            _vm._v("\n\t\t" + _vm._s(item.title) + "\n\t")
          ]
        )
      }),
      0
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = function (inject) {
      if (!inject) return
      inject("data-v-6c8d2188_0", { source: "\n.fa-invisible:before {\n\tcontent: \"\\f111\";\n\tvisibility: hidden;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgChoiceButtons.vue"],"names":[],"mappings":";AA4EA;CACA,gBAAA;CACA,kBAAA;AACA","file":"mgChoiceButtons.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgChoiceButtons', {\n\tmeta: {\n\t\ttitle: 'Choice Buttons',\n\t\ticon: 'fas fa-ellipsis-h',\n\t\tcategory: 'Choice Selectors',\n\t\tpreferId: true,\n\t},\n\tdata() { return {\n\t\tenumIter: [],\n\t}},\n\tprops: {\n\t\tenum: {\n\t\t\ttype: 'mgTable',\n\t\t\ttitle: 'List items',\n\t\t\titems: [\n\t\t\t\t{id: 'id', title: 'ID'},\n\t\t\t\t{id: 'title', title: 'Title'},\n\t\t\t\t{id: 'tooltip', title: 'Tooltip'},\n\t\t\t\t{id: 'icon', title: 'Icon', type: 'mgIcon'},\n\t\t\t\t{id: 'class', title: 'Classes'},\n\t\t\t\t{id: 'classActive', title: 'Active Class'},\n\t\t\t\t{id: 'classInactive', title: 'Inactive Class'},\n\t\t\t\t// Implied: {id: 'action', title: 'Action on select', type: 'function'},\n\t\t\t],\n\t\t},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t\tclassWrapper: {type: 'mgText', default: 'btn-group', title: 'Group CSS class', advanced: true},\n\t\titemClassActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},\n\t\titemClassInactive: {type: 'mgText', default: 'btn btn-light', advanced: true},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);\n\t\t});\n\t},\n\tmethods: {\n\t\tselect(item) {\n\t\t\tthis.data = item.id;\n\t\t\tif (item.action) this.$mgForm.run(item.action);\n\t\t},\n\t},\n\twatch: {\n\t\t'$props.enum': {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\tif (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings\n\t\t\t\t\tthis.enumIter = this.$props.enum.map(i => ({id: _.camelCase(i), title: i}));\n\t\t\t\t} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection\n\t\t\t\t\tthis.enumIter = this.$props.enum;\n\t\t\t\t}\n\t\t\t},\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-choice-buttons\" :class=\"$props.classWrapper\">\n\t\t<a\n\t\t\tv-for=\"item in enumIter\"\n\t\t\t:key=\"item.id\"\n\t\t\t:class=\"item.id && data == item.id\n\t\t\t\t? item.classActive || item.class || $props.itemClassActive\n\t\t\t\t: item.classInactive || item.class || $props.itemClassInactive\n\t\t\t\"\n\t\t\tv-tooltip=\"item.tooltip\"\n\t\t\t@click=\"select(item)\"\n\t\t>\n\t\t\t<i v-if=\"item.icon\" :class=\"item.icon\"/>\n\t\t\t{{item.title}}\n\t\t</a>\n\t</div>\n</template>\n\n<style>\n.fa-invisible:before {\n\tcontent: \"\\f111\";\n\tvisibility: hidden;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgChoiceButtons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$4
  });

  var script$5 = app.mgComponent('mgChoiceCheckbox', {
    meta: {
      title: 'Checkbox multiple-choice',
      icon: 'far fa-list',
      category: 'Choice Selectors',
      preferId: true
    },
    data: function data() {
      return {
        enumIter: []
      };
    },
    props: {
      "enum": {
        type: 'mgList',
        title: 'List items',
        "enum": {
          type: 'mgTable',
          title: 'List items',
          items: [{
            id: 'id',
            title: 'ID'
          }, {
            id: 'title',
            title: 'Title'
          }, {
            id: 'tooltip',
            title: 'Tooltip'
          }]
        }
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
      if (!_.isArray(this.data)) this.data = [];
    },
    methods: {
      change: function change(id) {
        var _this2 = this;

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

          if (this.$props.sort == 'sortId') {
            this.data.sort();
          } else if (this.$props.sort == 'sortTitle') {
            this.data = _.sortBy(this.data, function (i) {
              return _this2["enum"].find(function (e) {
                return e.id == i;
              });
            });
          }
        }
      }
    },
    watch: {
      '$props.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props["enum"]) && _.isString(this.$props["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props["enum"]) && _.isObject(this.$props["enum"][0])) {
            // Collection
            this.enumIter = this.$props["enum"];
          }
        }
      }
    }
  });

  /* script */
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function() {
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
              id: "mg-choice-checkbox-" + _vm.$props.id + "-" + item.id
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
                for: "mg-choice-checkbox-" + _vm.$props.id + "-" + item.id
              }
            },
            [_vm._v("\n\t\t\t" + _vm._s(item.title) + "\n\t\t")]
          )
        ])
      }),
      0
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

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
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgChoiceCheckbox = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$5
  });

  var _enumSource$1;
  Vue.component('v-select', VueSelect);
  var script$6 = app.mgComponent('mgChoiceDropdown', {
    meta: {
      title: 'Dropdown multiple-choice',
      icon: 'far fa-chevron-circle-down',
      category: 'Choice Selectors',
      preferId: true,
      shorthand: ['choice', 'choose', 'dropdown', 'pick']
    },
    data: function data() {
      return {
        selected: [],
        enumIter: []
      };
    },
    props: {
      enumSource: (_enumSource$1 = {
        type: 'mgChoiceButtons',
        "default": 'list',
        "enum": ['list', 'url']
      }, _defineProperty(_enumSource$1, "default", 'list'), _defineProperty(_enumSource$1, "help", 'Where to populate the list data from'), _enumSource$1),
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
        vueType: ['string', 'object'],
        showIf: 'enumSource == "url"',
        help: 'Data feed URL to fetch choice values from'
      },
      optionKeyPath: {
        type: "mgText",
        "default": "id",
        help: "Path within data feed for options key",
        showIf: 'enumSource == "url"'
      },
      optionLabelPath: {
        type: "mgText",
        "default": "title",
        help: "Path within data feed for options label",
        showIf: 'enumSource == "url"'
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
      this.$watch('$props.enumUrl', function () {
        if (!_this.$props.enumUrl) return;

        _this.$macgyver.utils.fetch(_this.$props.enumUrl, {
          type: 'array'
        }).then(function (data) {
          return _this.setEnum(data);
        });
      }, {
        immediate: true
      });
      this.$watch('$props.enum', function () {
        if (_.isArray(_this.$props["enum"]) && _.isString(_this.$props["enum"][0])) {
          // Array of strings
          _this.setEnum(_this.$props["enum"].map(function (i) {
            return {
              id: _.camelCase(i),
              title: i
            };
          }));
        } else if (_.isArray(_this.$props["enum"]) && _.isObject(_this.$props["enum"][0])) {
          // Collection
          _this.setEnum(_this.$props["enum"]);
        }
      }, {
        immediate: true
      });
    },
    methods: {
      changeHandler: function changeHandler(e) {
        if (!e) return this.data = this.selected = null;
        this.data = this.getOptionKey(e);
        this.selected = e;
      },

      /**
      * Populate the enumIter object
      * This function also correctly populates the selected item (or the default)
      * Each item is assumed to have the spec `{id: String, title: String, icon?: String}`
      * @param {array<Object>} enumIter The new iterable enum
      */
      setEnum: function setEnum(enumIter) {
        var _this2 = this;

        this.enumIter = enumIter;

        if (this.data) {
          this.selected = this.enumIter.find(function (e) {
            return _this2.getOptionKey(e) == _this2.data;
          }) || this.data;
        } else if (this.$props["default"]) {
          this.selected = this.enumIter.find(function (e) {
            return _this2.getOptionKey(e) == _this2.$props["default"];
          }) || this.$props["default"];
        }
      },

      /**
      * Retrieve option label based on path specified in properties.
      * @param {Object} option The selected option within enum
      */
      getOptionLabel: function getOptionLabel(option) {
        return _.get(option, this.$props.optionLabelPath, '');
      },

      /**
      * Retrieve option key based on path specified in properties.
      * @param {Object} option The selected option within enum
      */
      getOptionKey: function getOptionKey(option) {
        return _.get(option, this.$props.optionKeyPath, '');
      }
    },
    mounted: function mounted() {
      if (this.$props.focus) {
        // NOTE: Focus selection does NOT work if DevTools is open in Chome
        this.$refs.select.searchEl.focus();
      }
    }
  });

  /* script */
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-select", {
      ref: "select",
      attrs: {
        value: _vm.selected,
        label: "title",
        options: _vm.enumIter,
        placeholder: _vm.$props.placeholder,
        clearable: !_vm.$props.required,
        "get-option-key": _vm.getOptionKey,
        "get-option-label": _vm.getOptionLabel
      },
      on: { input: _vm.changeHandler },
      scopedSlots: _vm._u([
        {
          key: "selected-option",
          fn: function(option) {
            return [
              option.icon ? _c("i", { class: option.icon }) : _vm._e(),
              _vm._v("\n\t\t" + _vm._s(_vm.getOptionLabel(option)) + "\n\t")
            ]
          }
        },
        {
          key: "option",
          fn: function(option) {
            return [
              option.icon ? _c("i", { class: option.icon }) : _vm._e(),
              _vm._v("\n\t\t" + _vm._s(_vm.getOptionLabel(option)) + "\n\t")
            ]
          }
        }
      ])
    })
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = function (inject) {
      if (!inject) return
      inject("data-v-dac180ce_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Make look consistant with Bootstrap */\n.v-select.open .dropdown-toggle {\n\tborder-color: #5cb3fd;\n}\n\n/* Remove weird dropdown icon that Bootstrap adds */\n.v-select .dropdown-toggle::after {\n\tdisplay: none;\n}\n\n/* Wider spacing for clear button */\n.v-select .dropdown-toggle .clear {\n\tmargin-right: 10px;\n}\n\n/* Align dropdown icon correctly */\n.v-select .open-indicator {\n\tmargin-top: -2px;\n}\n.v-select .vs__selected i {\n\tmargin-right: 5px;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgChoiceDropdown.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiJA,wCAAA;AACA;CACA,qBAAA;AACA;;AAEA,mDAAA;AACA;CACA,aAAA;AACA;;AAEA,mCAAA;AACA;CACA,kBAAA;AACA;;AAEA,kCAAA;AACA;CACA,gBAAA;AACA;AAEA;CACA,iBAAA;AACA","file":"mgChoiceDropdown.vue","sourcesContent":["<script>\nimport VueSelect from 'vue-select';\nimport 'vue-select/dist/vue-select.css';\n\nVue.component('v-select', VueSelect);\n\nexport default app.mgComponent('mgChoiceDropdown', {\n\tmeta: {\n\t\ttitle: 'Dropdown multiple-choice',\n\t\ticon: 'far fa-chevron-circle-down',\n\t\tcategory: 'Choice Selectors',\n\t\tpreferId: true,\n\t\tshorthand: ['choice', 'choose', 'dropdown', 'pick'],\n\t},\n\tdata() { return {\n\t\tselected: [],\n\t\tenumIter: [],\n\t}},\n\tprops: {\n\t\tenumSource: {type: 'mgChoiceButtons', default: 'list', enum: ['list', 'url'], default: 'list', help: 'Where to populate the list data from'},\n\t\tenum: {\n\t\t\ttype: 'mgTable',\n\t\t\ttitle: 'List items',\n\t\t\tshowIf: 'enumSource == \"list\"',\n\t\t\titems: [\n\t\t\t\t{id: 'id', type: 'mgText', required: true},\n\t\t\t\t{id: 'title', type: 'mgText', required: true},\n\t\t\t\t{id: 'icon', type: 'mgIcon'},\n\t\t\t],\n\t\t},\n\t\tenumUrl: {type: 'mgUrl', vueType: ['string', 'object'], showIf: 'enumSource == \"url\"', help: 'Data feed URL to fetch choice values from'},\n\t\toptionKeyPath: {\n\t\t\ttype: \"mgText\",\n\t\t\tdefault: \"id\",\n\t\t\thelp: \"Path within data feed for options key\",\n\t\t\tshowIf: 'enumSource == \"url\"',\n\t\t},\n\t\toptionLabelPath: {\n\t\t\ttype: \"mgText\",\n\t\t\tdefault: \"title\",\n\t\t\thelp: \"Path within data feed for options label\",\n\t\t\tshowIf: 'enumSource == \"url\"',\n\t\t},\n\t\tplaceholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t\tfocus: {type: 'mgToggle', default: false, help: 'Auto-focus the element when it appears on screen'},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);\n\t\t});\n\n\t\tthis.$watch('$props.enumUrl', ()=> {\n\t\t\tif (!this.$props.enumUrl) return;\n\t\t\tthis.$macgyver.utils.fetch(this.$props.enumUrl, {type: 'array'})\n\t\t\t\t.then(data => this.setEnum(data))\n\t\t}, {immediate: true});\n\n\t\tthis.$watch('$props.enum', ()=> {\n\t\t\tif (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings\n\t\t\t\tthis.setEnum(this.$props.enum.map(i => ({id: _.camelCase(i), title: i})));\n\t\t\t} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection\n\t\t\t\tthis.setEnum(this.$props.enum);\n\t\t\t}\n\t\t}, {immediate: true});\n\t},\n\tmethods: {\n\t\tchangeHandler(e) {\n\t\t\tif (!e) return this.data = this.selected = null;\n\t\t\tthis.data = this.getOptionKey(e);\n\t\t\tthis.selected = e;\n\t\t},\n\n\t\t/**\n\t\t* Populate the enumIter object\n\t\t* This function also correctly populates the selected item (or the default)\n\t\t* Each item is assumed to have the spec `{id: String, title: String, icon?: String}`\n\t\t* @param {array<Object>} enumIter The new iterable enum\n\t\t*/\n\t\tsetEnum(enumIter) {\n\t\t\tthis.enumIter = enumIter;\n\n\t\t\tif (this.data) {\n\t\t\t\tthis.selected =\n\t\t\t\t\tthis.enumIter.find(\n\t\t\t\t\t\t(e) => this.getOptionKey(e) == this.data\n\t\t\t\t\t) || this.data;\n\t\t\t} else if (this.$props.default) {\n\t\t\t\tthis.selected =\n\t\t\t\t\tthis.enumIter.find(\n\t\t\t\t\t\t(e) => this.getOptionKey(e) == this.$props.default\n\t\t\t\t\t) || this.$props.default;\n\t\t\t}\n\t\t},\n\n\t\t/**\n\t\t* Retrieve option label based on path specified in properties.\n\t\t* @param {Object} option The selected option within enum\n\t\t*/\n\t\tgetOptionLabel(option) {\n\t\t\treturn _.get(option, this.$props.optionLabelPath, '');\n\t\t},\n\n\t\t/**\n\t\t* Retrieve option key based on path specified in properties.\n\t\t* @param {Object} option The selected option within enum\n\t\t*/\n\t\tgetOptionKey(option) {\n\t\t\treturn _.get(option, this.$props.optionKeyPath, '');\n\t\t},\n\t},\n\tmounted() {\n\t\tif (this.$props.focus) {\n\t\t\t// NOTE: Focus selection does NOT work if DevTools is open in Chome\n\t\t\tthis.$refs.select.searchEl.focus();\n\t\t}\n\t},\n});\n</script>\n\n<template>\n\t<v-select\n\t\tref=\"select\"\n\t\t:value=\"selected\"\n\t\tlabel=\"title\"\n\t\t:options=\"enumIter\"\n\t\t:placeholder=\"$props.placeholder\"\n\t\t:clearable=\"!$props.required\"\n\t\t:get-option-key=\"getOptionKey\"\n\t\t:get-option-label=\"getOptionLabel\"\n\t\t@input=\"changeHandler\"\n\t>\n\t\t<template #selected-option=\"option\">\n\t\t\t<!-- TODO: getOptionIcon -->\n\t\t\t<i v-if=\"option.icon\" :class=\"option.icon\" />\n\t\t\t{{ getOptionLabel(option) }}\n\t\t</template>\n\t\t<template #option=\"option\">\n\t\t\t<i v-if=\"option.icon\" :class=\"option.icon\" />\n\t\t\t{{ getOptionLabel(option) }}\n\t\t</template>\n\t</v-select>\n</template>\n\n<style>\n/* Make look consistant with Bootstrap */\n.v-select.open .dropdown-toggle {\n\tborder-color: #5cb3fd;\n}\n\n/* Remove weird dropdown icon that Bootstrap adds */\n.v-select .dropdown-toggle::after {\n\tdisplay: none;\n}\n\n/* Wider spacing for clear button */\n.v-select .dropdown-toggle .clear {\n\tmargin-right: 10px;\n}\n\n/* Align dropdown icon correctly */\n.v-select .open-indicator {\n\tmargin-top: -2px;\n}\n\n.v-select .vs__selected i {\n\tmargin-right: 5px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgChoiceDropdown = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$6
  });

  var script$7 = app.mgComponent('mgChoiceList', {
    meta: {
      title: 'Radio multiple-choice',
      icon: 'far fa-list-ol',
      category: 'Choice Selectors',
      preferId: true
    },
    data: function data() {
      return {
        enumIter: []
      };
    },
    props: {
      "enum": {
        type: 'mgTable',
        title: 'List items',
        "default": [],
        items: [{
          id: 'title',
          type: 'mgText'
        }, {
          id: 'icon',
          type: 'mgIcon',
          "interface": 'modal'
        }]
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    },
    methods: {
      select: function select(id) {
        this.data = id;
      }
    },
    watch: {
      '$props.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props["enum"]) && _.isString(this.$props["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props["enum"]) && _.isObject(this.$props["enum"][0])) {
            // Collection
            this.enumIter = this.$props["enum"];
          }
        }
      }
    }
  });

  /* script */
  const __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mg-choice-list list-group" },
      _vm._l(_vm.enumIter, function(item) {
        return _c(
          "a",
          {
            key: item.id,
            staticClass: "list-group-item",
            class: _vm.data == item.id && "active",
            on: {
              click: function($event) {
                _vm.data = item.id;
              }
            }
          },
          [
            item.icon ? _c("i", { class: item.icon }) : _vm._e(),
            _vm._v("\n\t\t" + _vm._s(item.title) + "\n\t")
          ]
        )
      }),
      0
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = function (inject) {
      if (!inject) return
      inject("data-v-719095a7_0", { source: "\n.mg-choice-list .list-group-item.active {\n\tcolor: #fff;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgChoiceList.vue"],"names":[],"mappings":";AAgEA;CACA,WAAA;AACA","file":"mgChoiceList.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgChoiceList', {\n\tmeta: {\n\t\ttitle: 'Radio multiple-choice',\n\t\ticon: 'far fa-list-ol',\n\t\tcategory: 'Choice Selectors',\n\t\tpreferId: true,\n\t},\n\tdata() { return {\n\t\tenumIter: [],\n\t}},\n\tprops: {\n\t\tenum: {\n\t\t\ttype: 'mgTable',\n\t\t\ttitle: 'List items',\n\t\t\tdefault: [],\n\t\t\titems: [\n\t\t\t\t{id: 'title', type: 'mgText'},\n\t\t\t\t{id: 'icon', type: 'mgIcon', interface: 'modal'},\n\t\t\t],\n\t\t},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);\n\t\t});\n\t},\n\tmethods: {\n\t\tselect(id) {\n\t\t\tthis.data = id;\n\t\t},\n\t},\n\twatch: {\n\t\t'$props.enum': {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\tif (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings\n\t\t\t\t\tthis.enumIter = this.$props.enum.map(i => ({id: _.camelCase(i), title: i}));\n\t\t\t\t} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection\n\t\t\t\t\tthis.enumIter = this.$props.enum;\n\t\t\t\t}\n\t\t\t},\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-choice-list list-group\">\n\t\t<a\n\t\t\tv-for=\"item in enumIter\"\n\t\t\t:key=\"item.id\"\n\t\t\tclass=\"list-group-item\"\n\t\t\t:class=\"data == item.id && 'active'\"\n\t\t\t@click=\"data = item.id\"\n\t\t>\n\t\t\t<i v-if=\"item.icon\" :class=\"item.icon\"/>\n\t\t\t{{item.title}}\n\t\t</a>\n\t</div>\n</template>\n\n<style>\n.mg-choice-list .list-group-item.active {\n\tcolor: #fff;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
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

  var mgChoiceList = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$7
  });

  var script$8 = app.mgComponent('mgChoicePopup', {
    meta: {
      title: 'Choice Popup',
      icon: 'fas fa-window-maximize',
      category: 'Choice Selectors',
      preferId: true
    },
    data: function data() {
      return {
        activeTitle: undefined,
        enumIter: []
      };
    },
    props: {
      "enum": {
        type: 'mgTable',
        title: 'List items',
        items: [{
          id: 'id',
          title: 'ID'
        }, {
          id: 'title',
          title: 'Title'
        }, {
          id: 'class',
          title: 'Classes'
        }, {
          id: 'classActive',
          title: 'Active Class'
        }, {
          id: 'classInactive',
          title: 'Inactive Class'
        }]
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    },
    methods: {
      select: function select(id) {
        var _this2 = this;

        this.$prompt.macgyver({
          title: this.$props.popupTitle,
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
            _this2.$macgyver.$forms.promptMacGyver.$on('mgChange', function () {
              return setTimeout(function () {
                // Timeout not really needed but it lets the button highlight before we close
                _this2.$prompt.$settings.$defer.resolve(_this2.$prompt.$settings.data);

                _this2.$prompt.close(true);
              }, 100);
            });
          }
        }).then(function (form) {
          return _this2.$set(_this2, 'data', form.selected);
        });
      }
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
      '$props.enumUrl': {
        immediate: true,
        handler: function handler() {
          var _this4 = this;

          if (!this.$props.enumUrl) return;
          this.$macgyver.utils.fetch(this.$props.enumUrl, {
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
            return _this4.$set(_this4.$props, 'enum', data);
          });
        }
      },
      '$props.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props["enum"]) && _.isString(this.$props["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props["enum"]) && _.isObject(this.$props["enum"][0])) {
            // Collection
            this.enumIter = this.$props["enum"];
          }
        }
      }
    }
  });

  /* script */
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-choice-popup" }, [
      _c(
        "a",
        {
          class: _vm.data ? _vm.$props.classActive : _vm.$props.classInactive,
          on: {
            click: function($event) {
              return _vm.select()
            }
          }
        },
        [
          _c("i", {
            class: _vm.data ? _vm.$props.iconActive : _vm.$props.iconInactive
          }),
          _vm._v(
            "\n\t\t" +
              _vm._s(this.data ? _vm.activeTitle : _vm.$props.inactiveText) +
              "\n\t"
          )
        ]
      )
    ])
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

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
    

    
    const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
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

  var script$9 = app.mgComponent('mgChoiceRadio', {
    meta: {
      title: 'Radio multiple-choice',
      icon: 'far fa-list-ul',
      category: 'Choice Selectors',
      preferId: true
    },
    data: function data() {
      return {
        enumIter: []
      };
    },
    props: {
      "enum": {
        type: 'mgTable',
        title: 'List items',
        items: [{
          id: 'id',
          title: 'ID'
        }, {
          id: 'title',
          title: 'Title'
        }]
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    },
    methods: {
      select: function select(id) {
        this.data = id;
      }
    },
    watch: {
      '$props.enum': {
        immediate: true,
        handler: function handler() {
          if (_.isArray(this.$props["enum"]) && _.isString(this.$props["enum"][0])) {
            // Array of strings
            this.enumIter = this.$props["enum"].map(function (i) {
              return {
                id: _.camelCase(i),
                title: i
              };
            });
          } else if (_.isArray(this.$props["enum"]) && _.isObject(this.$props["enum"][0])) {
            // Collection
            this.enumIter = this.$props["enum"];
          }
        }
      }
    }
  });

  /* script */
  const __vue_script__$9 = script$9;

  /* template */
  var __vue_render__$9 = function() {
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
              name: _vm.$props.id,
              id: "check-" + _vm.$props.id + "-" + item.id
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
              attrs: { for: "check-" + _vm.$props.id + "-" + item.id }
            },
            [_vm._v("\n\t\t\t" + _vm._s(item.title) + "\n\t\t")]
          )
        ])
      }),
      0
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

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
    

    
    const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
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

  var _enumSource$2;
  Vue.component('v-select', VueSelect);
  var script$a = app.mgComponent('mgChoiceTags', {
    meta: {
      title: 'Dropdown multiple-choice',
      icon: 'far fa-tags',
      category: 'Choice Selectors',
      preferId: true
    },
    data: function data() {
      return {
        selected: [],
        enumIter: []
      };
    },
    props: {
      enumSource: (_enumSource$2 = {
        type: 'mgChoiceButtons',
        "default": 'list',
        "enum": ['list', 'url']
      }, _defineProperty(_enumSource$2, "default", 'list'), _defineProperty(_enumSource$2, "help", 'Where to populate the list data from'), _enumSource$2),
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
        } //{id: 'icon', type: 'mgIcon'},
        ]
      },
      enumUrl: {
        type: 'mgUrl',
        vueType: ['string', 'object'],
        showIf: 'enumSource == "url"',
        help: 'Data feed URL to fetch choice values from'
      },
      optionKeyPath: {
        type: "mgText",
        "default": "id",
        help: "Path within data feed for options key",
        showIf: 'enumSource == "url"'
      },
      optionLabelPath: {
        type: "mgText",
        "default": "title",
        help: "Path within data feed for options label",
        showIf: 'enumSource == "url"'
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
        type: 'mgNumber',
        "default": 0,
        help: 'Maximum number of tags to display before showing helper text, set to zero to disable'
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data || !_this.data.length) return reply("".concat(_this.$props.title, " is required"));
      });
      this.$watch('$props.enumUrl', function () {
        if (!_this.$props.enumUrl) return;

        _this.$macgyver.utils.fetch(_this.$props.enumUrl, {
          type: 'array'
        }).then(function (data) {
          return _this.setEnum(data);
        });
      }, {
        immediate: true
      });
      this.$watch('$props.enum', function () {
        if (_.isArray(_this.$props["enum"]) && _.isString(_this.$props["enum"][0])) {
          // Array of strings
          _this.setEnum(_this.$props["enum"].map(function (i) {
            return {
              id: _.camelCase(i),
              title: i
            };
          }));
        } else if (_.isArray(_this.$props["enum"]) && _.isObject(_this.$props["enum"][0])) {
          // Collection
          _this.setEnum(_this.$props["enum"]);
        }
      }, {
        immediate: true
      });
    },
    methods: {
      changeHandler: function changeHandler(e) {
        if (!e) return this.data = this.selected = null;
        this.data = this.getOptionKey(e);
        this.selected = e;
      },

      /**
      * Populate the enumIter object
      * This function also correctly populates the selected item (or the default)
      * Each item is assumed to have the spec `{id: String, title: String, icon?: String}`
      * @param {array<Object>} enumIter The new iterable enum
      */
      setEnum: function setEnum(enumIter) {
        var _this2 = this;

        this.enumIter = enumIter;

        if (this.data) {
          this.selected = this.enumIter.find(function (e) {
            return _this2.getOptionKey(e) == _this2.data;
          }) || this.data;
        } else if (this.$props["default"]) {
          this.selected = this.enumIter.find(function (e) {
            return _this2.getOptionKey(e) == _this2.$props["default"];
          }) || this.$props["default"];
        }
      },

      /**
      * Retrieve option label based on path specified in properties.
      * @param {Object} option The selected option within enum
      */
      getOptionLabel: function getOptionLabel(option) {
        return _.get(option, this.$props.optionLabelPath, '');
      },

      /**
      * Retrieve option key based on path specified in properties.
      * @param {Object} option The selected option within enum
      */
      getOptionKey: function getOptionKey(option) {
        return _.get(option, this.$props.optionKeyPath, '');
      }
    }
  });

  /* script */
  const __vue_script__$a = script$a;

  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-select", {
      staticClass: "mg-choice-tags",
      attrs: {
        value: _vm.selected,
        label: "title",
        options: _vm.enumIter,
        placeholder: _vm.$props.placeholder,
        taggable: _vm.$props.allowCreate,
        "no-drop": !_vm.$props.showDropdown,
        "close-on-select": false,
        multiple: true,
        "get-option-key": _vm.getOptionKey,
        "get-option-label": _vm.getOptionLabel
      },
      on: { input: _vm.changeHandler },
      scopedSlots: _vm._u([
        {
          key: "option",
          fn: function(option) {
            return [
              _c("i", {
                staticClass: "far fa-fw",
                class: _vm.selected.some(function(v) {
                  return _vm.getOptionKey(v) == _vm.getOptionKey(option)
                })
                  ? "fa-check"
                  : "",
                attrs: { "data-id": _vm.getOptionKey(option) }
              }),
              _vm._v("\n\t\t" + _vm._s(_vm.getOptionLabel(option)) + "\n\t")
            ]
          }
        },
        {
          key: "selected-option-container",
          fn: function(props) {
            return [
              !_vm.$props.maxVisible ||
              _vm.selected.length - 1 < _vm.$props.maxVisible
                ? _c("span", { staticClass: "vs__selected" }, [
                    _vm._v(
                      "\n\t\t\t" +
                        _vm._s(_vm.getOptionLabel(props.option)) +
                        "\n\t\t\t"
                    ),
                    _c("i", {
                      staticClass: "far fa-times ml-1 clickable",
                      on: {
                        click: function($event) {
                          return props.deselect(props.option)
                        }
                      }
                    })
                  ])
                : _vm.getOptionKey(props.option) ==
                  _vm.getOptionKey(_vm.selected[0])
                ? _c("span", { staticClass: "vs__selected_overflow" }, [
                    _vm._v(
                      "\n\t\t\t" +
                        _vm._s(_vm.selected.length) +
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
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = function (inject) {
      if (!inject) return
      inject("data-v-1d1f91e5_0", { source: "\n.mg-choice-tags.v-select .vs__selected > i {\n\tcursor: pointer;\n}\n.mg-choice-tags.v-select .vs__selected_overflow {\n\tmargin: 2px 10px;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgChoiceTags.vue"],"names":[],"mappings":";AAiKA;CACA,eAAA;AACA;AAEA;CACA,gBAAA;AACA","file":"mgChoiceTags.vue","sourcesContent":["<script>\n/**\n* NOTE: Toggling deselection from the menu is not yet supported until\n*       https://github.com/sagalbot/vue-select/pull/877\n*       Has been merged\n*       - MC 2020-01-10\n*/\n\nimport VueSelect from 'vue-select';\nimport 'vue-select/dist/vue-select.css';\n\nVue.component('v-select', VueSelect);\n\nexport default app.mgComponent('mgChoiceTags', {\n\tmeta: {\n\t\ttitle: 'Dropdown multiple-choice',\n\t\ticon: 'far fa-tags',\n\t\tcategory: 'Choice Selectors',\n\t\tpreferId: true,\n\t},\n\tdata() { return {\n\t\tselected: [],\n\t\tenumIter: [],\n\t}},\n\tprops: {\n\t\tenumSource: {type: 'mgChoiceButtons', default: 'list', enum: ['list', 'url'], default: 'list', help: 'Where to populate the list data from'},\n\t\tenum: {\n\t\t\ttype: 'mgTable',\n\t\t\ttitle: 'List items',\n\t\t\tshowIf: 'enumSource == \"list\"',\n\t\t\titems: [\n\t\t\t\t{id: 'id', type: 'mgText', required: true},\n\t\t\t\t{id: 'title', type: 'mgText', required: true},\n\t\t\t\t//{id: 'icon', type: 'mgIcon'},\n\t\t\t],\n\t\t},\n\t\tenumUrl: {type: 'mgUrl', vueType: ['string', 'object'], showIf: 'enumSource == \"url\"', help: 'Data feed URL to fetch choice values from'},\n\t\toptionKeyPath: {\n\t\t\ttype: \"mgText\",\n\t\t\tdefault: \"id\",\n\t\t\thelp: \"Path within data feed for options key\",\n\t\t\tshowIf: 'enumSource == \"url\"',\n\t\t},\n\t\toptionLabelPath: {\n\t\t\ttype: \"mgText\",\n\t\t\tdefault: \"title\",\n\t\t\thelp: \"Path within data feed for options label\",\n\t\t\tshowIf: 'enumSource == \"url\"',\n\t\t},\n\t\tplaceholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t\tallowCreate: {type: 'mgToggle', default: false, help: 'Allow the user to create their own tags in addition to the supplied ones'},\n\t\tshowDropdown: {type: 'mgToggle', default: true, help: 'When clicking, show a dropdown box. Disabling will only allow the user to use existing tags'},\n\t\tmaxVisible: {type: 'mgNumber', default: 0, help: 'Maximum number of tags to display before showing helper text, set to zero to disable'},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data || !this.data.length) return reply(`${this.$props.title} is required`);\n\t\t});\n\n\t\tthis.$watch('$props.enumUrl', ()=> {\n\t\t\tif (!this.$props.enumUrl) return;\n\t\t\tthis.$macgyver.utils.fetch(this.$props.enumUrl, {type: 'array'})\n\t\t\t\t.then(data => this.setEnum(data))\n\t\t}, {immediate: true});\n\n\t\tthis.$watch('$props.enum', ()=> {\n\t\t\tif (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings\n\t\t\t\tthis.setEnum(this.$props.enum.map(i => ({id: _.camelCase(i), title: i})));\n\t\t\t} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection\n\t\t\t\tthis.setEnum(this.$props.enum);\n\t\t\t}\n\t\t}, {immediate: true});\n\t},\n\tmethods: {\n\t\tchangeHandler(e) {\n\t\t\tif (!e) return this.data = this.selected = null;\n\t\t\tthis.data = this.getOptionKey(e);\n\t\t\tthis.selected = e;\n\t\t},\n\n\t\t/**\n\t\t* Populate the enumIter object\n\t\t* This function also correctly populates the selected item (or the default)\n\t\t* Each item is assumed to have the spec `{id: String, title: String, icon?: String}`\n\t\t* @param {array<Object>} enumIter The new iterable enum\n\t\t*/\n\t\tsetEnum(enumIter) {\n\t\t\tthis.enumIter = enumIter;\n\n\t\t\tif (this.data) {\n\t\t\t\tthis.selected =\n\t\t\t\t\tthis.enumIter.find(\n\t\t\t\t\t\t(e) => this.getOptionKey(e) == this.data\n\t\t\t\t\t) || this.data;\n\t\t\t} else if (this.$props.default) {\n\t\t\t\tthis.selected =\n\t\t\t\t\tthis.enumIter.find(\n\t\t\t\t\t\t(e) => this.getOptionKey(e) == this.$props.default\n\t\t\t\t\t) || this.$props.default;\n\t\t\t}\n\t\t},\n\n\t\t/**\n\t\t* Retrieve option label based on path specified in properties.\n\t\t* @param {Object} option The selected option within enum\n\t\t*/\n\t\tgetOptionLabel(option) {\n\t\t\treturn _.get(option, this.$props.optionLabelPath, '');\n\t\t},\n\n\t\t/**\n\t\t* Retrieve option key based on path specified in properties.\n\t\t* @param {Object} option The selected option within enum\n\t\t*/\n\t\tgetOptionKey(option) {\n\t\t\treturn _.get(option, this.$props.optionKeyPath, '');\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<v-select\n\t\tclass=\"mg-choice-tags\"\n\t\t:value=\"selected\"\n\t\tlabel=\"title\"\n\t\t:options=\"enumIter\"\n\t\t:placeholder=\"$props.placeholder\"\n\t\t:taggable=\"$props.allowCreate\"\n\t\t:no-drop=\"!$props.showDropdown\"\n\t\t:close-on-select=\"false\"\n\t\t:multiple=\"true\"\n\t\t:get-option-key=\"getOptionKey\"\n\t\t:get-option-label=\"getOptionLabel\"\n\t\t@input=\"changeHandler\"\n\t>\n\t\t<template #option=\"option\">\n\t\t\t<i\n\t\t\t\tclass=\"far fa-fw\"\n\t\t\t\t:class=\"selected.some(v => getOptionKey(v) == getOptionKey(option)) ? 'fa-check' : ''\"\n\t\t\t\t:data-id=\"getOptionKey(option)\"\n\t\t\t/>\n\t\t\t{{ getOptionLabel(option) }}\n\t\t</template>\n\t\t<template #selected-option-container=\"props\">\n\t\t\t<span v-if=\"!$props.maxVisible || selected.length - 1 < $props.maxVisible\" class=\"vs__selected\">\n\t\t\t\t{{ getOptionLabel(props.option) }}\n\t\t\t\t<i @click=\"props.deselect(props.option)\" class=\"far fa-times ml-1 clickable\"/>\n\t\t\t</span>\n\t\t\t<!-- Render only the first selected element - skip the rest -->\n\t\t\t<span v-else-if=\"getOptionKey(props.option) == getOptionKey(selected[0])\" class=\"vs__selected_overflow\">\n\t\t\t\t{{selected.length}} items selected\n\t\t\t</span>\n\t\t\t<!-- Not sure why Vue needs an empty element but if its not here it falls back to the v-select render -->\n\t\t\t<span v-else/>\n\t\t</template>\n\t</v-select>\n</template>\n\n<style>\n.mg-choice-tags.v-select .vs__selected > i {\n\tcursor: pointer;\n}\n\n.mg-choice-tags.v-select .vs__selected_overflow {\n\tmargin: 2px 10px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$a = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
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

  var script$b = app.mgComponent('mgChoiceTree', {
    meta: {
      title: 'Choice Tree',
      icon: 'fas fa-stream',
      category: 'Choice Selectors',
      preferId: true
    },
    data: function data() {
      return {
        enumIter: undefined
      };
    },
    props: {
      "enum": {
        type: 'mgTable',
        title: 'List items',
        items: [{
          id: 'id',
          title: 'ID'
        }, {
          id: 'title',
          title: 'Title'
        }, {
          id: 'icon',
          title: 'Icon'
        } // Icon used to override both item.iconOpen + item.iconClosed
        // 'enum': FIXME: We can't recursively edit children yet
        ]
      },
      required: {
        type: 'mgToggle',
        "default": false,
        help: 'One choice must be selected'
      },
      collapsable: {
        type: 'mgToggle',
        "default": true,
        help: 'Allow branches to be closed'
      },
      selectBranches: {
        type: 'mgToggle',
        "default": false,
        help: 'Allow selection of tree branches rather than just end leaves'
      },
      classWrapper: {
        type: 'mgText',
        "default": 'mg-choice-tree',
        title: 'Group CSS class',
        advanced: true
      },
      branchClass: {
        type: 'mgText',
        "default": 'mg-choice-tree-branch list-group',
        title: 'Branch CSS class',
        advanced: true
      },
      itemClassActive: {
        type: 'mgText',
        title: 'Item class active',
        "default": 'btn btn-primary text-left',
        advanced: true
      },
      itemClassInactive: {
        type: 'mgText',
        title: 'Item class inactive',
        "default": 'btn btn-light text-left',
        advanced: true
      },
      iconClassBranch: {
        type: 'mgIcon',
        title: 'Branch icon base',
        "default": 'far fa-folder fa-lg',
        advanced: true
      },
      iconClassBranchOpen: {
        type: 'mgIcon',
        title: 'Branch icon open (overrides base)',
        "default": '',
        advanced: true
      },
      iconClassBranchClosed: {
        type: 'mgIcon',
        title: 'Branch icon closed (overrides base)',
        "default": '',
        advanced: true
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    },
    methods: {
      select: function select(item) {
        if (this.$props.collapsable && !item.isLeaf && !item.open) {
          // Item is closed - user probably wants it open
          console.log('Toggle open (node is closed)');
          item.isOpen = !item.isOpen;
        } else if ((item.isLeaf || this.$props.selectBranches) && item.active != item.id) {
          // Item is selectable but not selected - user probably wants it selected
          if (!this.$props.required && this.data == item.id) {
            console.log('Deselect');
            this.data = undefined;
          } else {
            console.log('Select');
            this.data = item.id;
            console.log('DATA', this.data);
          }
        } else if (this.$props.collapsable && !item.isLeaf) {
          // No idea, but item is not a leaf, maybe the user wants to toggle it?
          console.log('Toggle open');
          item.open = !item.isOpen;
        } else {
          // Give up
          console.warn('FIXME: No idea what the user wants to do when clicking on item', item);
        }

        this.$forceUpdate(); // FIXME: Not happy with this but no idea how to make the render function selectively update yet
      },
      toggleOpen: function toggleOpen(item) {
        item.isOpen = !item.isOpen;
        this.$forceUpdate(); // FIXME: Again, not happy
      }
    },
    watch: {
      /**
      * Remap the incomming `enum` into an iterable array-of-arrays
      * Each child will be of the form {id, title, enum?, isOpen, isLeaf}
      */
      '$props.enum': {
        immediate: true,
        handler: function handler() {
          if (!this.$props["enum"]) return; // Nothing to render yet

          var walkBranch = function walkBranch(items) {
            return items.map(function (item) {
              if (typeof item == 'string') item = {
                title: item,
                id: _.camelCase(item)
              };
              item.isOpen = true;
              item.isLeaf = !item["enum"] || item["enum"].length < 1;
              if (!item.isLeaf) item["enum"] = walkBranch(item["enum"]);
              return item;
            });
          };

          this.enumIter = walkBranch(this.$props["enum"]);
        }
      }
    },
    render: function render(h) {
      var _this2 = this;

      var renderBranch = function renderBranch(items, isOpen) {
        return h('div', {
          "class": [_this2.$props.branchClass, isOpen && 'open']
        }, items.map(function (item) {
          return [h('div', {
            "class": _this2.data == item.id ? _this2.$props.itemClassActive : _this2.$props.itemClassInactive,
            on: {
              click: function click(e) {
                _this2.select(item);

                e.stopPropagation();
              }
            }
          }, [h('i', {
            "class": item.isOpen && item.iconOpen ? item.iconOpen : item.isOpen && item.icon ? item.icon : item.isOpen && _this2.$props.iconClassBranchOpen ? _this2.$props.iconClassBranchOpen : !item.isOpen && item.iconClosed ? item.iconClosed : !item.isOpen && item.icon ? item.icon : !item.isOpen && _this2.$props.iconClassBranchClosed ? _this2.$props.iconClassBranchClosed : _this2.$props.iconClassBranch,
            on: {
              click: function click(e) {
                _this2.toggleOpen(item);

                e.stopPropagation();
              }
            }
          }), h('span', {
            "class": 'mg-choice-tree-title'
          }, item.title), item["enum"] ? renderBranch(item["enum"], item.isOpen) : undefined])];
        }));
      };

      return h('div', {
        "class": this.$props.classWrapper
      }, [renderBranch(this.enumIter, true)]);
    }
  });

  /* script */
  const __vue_script__$b = script$b;

  /* template */

    /* style */
    const __vue_inject_styles__$b = function (inject) {
      if (!inject) return
      inject("data-v-6eacad0c_0", { source: "\n.mg-choice-tree-branch {\n\tmargin-left: 32px;\n}\n.mg-choice-tree-branch:not(.open) {\n\tdisplay: none;\n}\n.mg-choice-tree-branch i {\n\tmargin-right: 5px;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgChoiceTree.vue"],"names":[],"mappings":";AA8IA;CACA,iBAAA;AACA;AAEA;CACA,aAAA;AACA;AAEA;CACA,iBAAA;AACA","file":"mgChoiceTree.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgChoiceTree', {\n\tmeta: {\n\t\ttitle: 'Choice Tree',\n\t\ticon: 'fas fa-stream',\n\t\tcategory: 'Choice Selectors',\n\t\tpreferId: true,\n\t},\n\tdata() { return {\n\t\tenumIter: undefined,\n\t}},\n\tprops: {\n\t\tenum: {\n\t\t\ttype: 'mgTable',\n\t\t\ttitle: 'List items',\n\t\t\titems: [\n\t\t\t\t{id: 'id', title: 'ID'},\n\t\t\t\t{id: 'title', title: 'Title'},\n\t\t\t\t{id: 'icon', title: 'Icon'}, // Icon used to override both item.iconOpen + item.iconClosed\n\t\t\t\t// 'enum': FIXME: We can't recursively edit children yet\n\t\t\t],\n\t\t},\n\t\trequired: {type: 'mgToggle', default: false, help: 'One choice must be selected'},\n\t\tcollapsable: {type: 'mgToggle', default: true, help: 'Allow branches to be closed'},\n\t\tselectBranches: {type: 'mgToggle', default: false, help: 'Allow selection of tree branches rather than just end leaves'},\n\t\tclassWrapper: {type: 'mgText', default: 'mg-choice-tree', title: 'Group CSS class', advanced: true},\n\t\tbranchClass: {type: 'mgText', default: 'mg-choice-tree-branch list-group', title: 'Branch CSS class', advanced: true},\n\t\titemClassActive: {type: 'mgText', title: 'Item class active', default: 'btn btn-primary text-left', advanced: true},\n\t\titemClassInactive: {type: 'mgText', title: 'Item class inactive', default: 'btn btn-light text-left', advanced: true},\n\t\ticonClassBranch: {type: 'mgIcon', title: 'Branch icon base', default: 'far fa-folder fa-lg', advanced: true},\n\t\ticonClassBranchOpen: {type: 'mgIcon', title: 'Branch icon open (overrides base)', default: '', advanced: true},\n\t\ticonClassBranchClosed: {type: 'mgIcon', title: 'Branch icon closed (overrides base)', default: '', advanced: true},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);\n\t\t});\n\t},\n\tmethods: {\n\t\tselect(item) {\n\t\t\tif (this.$props.collapsable && !item.isLeaf && !item.open) { // Item is closed - user probably wants it open\n\t\t\t\tconsole.log('Toggle open (node is closed)');\n\t\t\t\titem.isOpen = !item.isOpen;\n\t\t\t} else if ((item.isLeaf || this.$props.selectBranches) && item.active != item.id) { // Item is selectable but not selected - user probably wants it selected\n\t\t\t\tif (!this.$props.required && this.data == item.id) {\n\t\t\t\t\tconsole.log('Deselect');\n\t\t\t\t\tthis.data = undefined;\n\t\t\t\t} else {\n\t\t\t\t\tconsole.log('Select');\n\t\t\t\t\tthis.data = item.id;\n\t\t\t\t\tconsole.log('DATA', this.data);\n\t\t\t\t}\n\t\t\t} else if (this.$props.collapsable && !item.isLeaf) { // No idea, but item is not a leaf, maybe the user wants to toggle it?\n\t\t\t\tconsole.log('Toggle open');\n\t\t\t\titem.open = !item.isOpen;\n\t\t\t} else { // Give up\n\t\t\t\tconsole.warn('FIXME: No idea what the user wants to do when clicking on item', item);\n\t\t\t}\n\n\t\t\tthis.$forceUpdate(); // FIXME: Not happy with this but no idea how to make the render function selectively update yet\n\t\t},\n\n\t\ttoggleOpen(item) {\n\t\t\titem.isOpen = !item.isOpen;\n\t\t\tthis.$forceUpdate(); // FIXME: Again, not happy\n\t\t},\n\t},\n\twatch: {\n\t\t/**\n\t\t* Remap the incomming `enum` into an iterable array-of-arrays\n\t\t* Each child will be of the form {id, title, enum?, isOpen, isLeaf}\n\t\t*/\n\t\t'$props.enum': {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\tif (!this.$props.enum) return; // Nothing to render yet\n\n\t\t\t\tvar walkBranch = items => {\n\t\t\t\t\treturn items.map(item => {\n\t\t\t\t\t\tif (typeof item == 'string') item = {title: item, id: _.camelCase(item)};\n\t\t\t\t\t\titem.isOpen = true;\n\n\t\t\t\t\t\titem.isLeaf = !item.enum || item.enum.length < 1;\n\t\t\t\t\t\tif (!item.isLeaf) item.enum = walkBranch(item.enum);\n\n\t\t\t\t\t\treturn item;\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\tthis.enumIter = walkBranch(this.$props.enum);\n\t\t\t},\n\t\t},\n\t},\n\trender(h) {\n\t\tvar renderBranch = (items, isOpen) => h(\n\t\t\t'div',\n\t\t\t{class: [\n\t\t\t\tthis.$props.branchClass,\n\t\t\t\tisOpen && 'open',\n\t\t\t]},\n\t\t\titems.map(item => [\n\t\t\t\th(\n\t\t\t\t\t'div',\n\t\t\t\t\t{\n\t\t\t\t\t\tclass: this.data == item.id ? this.$props.itemClassActive : this.$props.itemClassInactive,\n\t\t\t\t\t\ton: {\n\t\t\t\t\t\t\tclick: e => {\n\t\t\t\t\t\t\t\tthis.select(item);\n\t\t\t\t\t\t\t\te.stopPropagation();\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t\t\t[\n\t\t\t\t\t\th('i', {\n\t\t\t\t\t\t\tclass:\n\t\t\t\t\t\t\t\titem.isOpen && item.iconOpen ? item.iconOpen\n\t\t\t\t\t\t\t\t: item.isOpen && item.icon ? item.icon\n\t\t\t\t\t\t\t\t: item.isOpen && this.$props.iconClassBranchOpen ? this.$props.iconClassBranchOpen\n\t\t\t\t\t\t\t\t: !item.isOpen && item.iconClosed ? item.iconClosed\n\t\t\t\t\t\t\t\t: !item.isOpen && item.icon ? item.icon\n\t\t\t\t\t\t\t\t: !item.isOpen && this.$props.iconClassBranchClosed ? this.$props.iconClassBranchClosed\n\t\t\t\t\t\t\t\t: this.$props.iconClassBranch,\n\t\t\t\t\t\t\ton: {\n\t\t\t\t\t\t\t\tclick: e => {\n\t\t\t\t\t\t\t\t\tthis.toggleOpen(item);\n\t\t\t\t\t\t\t\t\te.stopPropagation();\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t}),\n\t\t\t\t\t\th('span', {class: 'mg-choice-tree-title'}, item.title),\n\t\t\t\t\t\titem.enum ? renderBranch(item.enum, item.isOpen) : undefined,\n\t\t\t\t\t],\n\t\t\t\t),\n\t\t\t])\n\t\t);\n\n\t\treturn h('div', {class: this.$props.classWrapper}, [renderBranch(this.enumIter, true)]);\n\t},\n});\n</script>\n\n<style>\n.mg-choice-tree-branch {\n\tmargin-left: 32px;\n}\n\n.mg-choice-tree-branch:not(.open) {\n\tdisplay: none;\n}\n\n.mg-choice-tree-branch i {\n\tmargin-right: 5px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = undefined;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$b = /*#__PURE__*/normalizeComponent(
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

  var mgChoiceTree = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$b
  });

  var script$c = app.mgComponent('mgCode', {
    meta: {
      title: 'Code Editor',
      icon: 'fal fa-code',
      category: 'Complex Inputs',
      preferId: true
    },
    props: {
      syntax: {
        type: 'mgChoiceDropdown',
        "enum": ['text', 'json', 'javascript', 'html', 'css'],
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
    },
    beforeDestroy: function beforeDestroy() {
      this.editor.destroy();
      this.editor.container.remove();
    },
    mounted: function mounted() {
      var _this = this;

      this.editor = ace.edit(this.$el);
      this.editor.$blockScrolling = Infinity;
      this.editor.setOptions({
        showPrintMargin: false
      });
      this.editor.on('change', function (delta) {
        var value = _this.editor.getValue();

        if (_this.$props.convert && _this.$props.syntax == 'json') {
          try {
            value = JSON.parse(value);
            /*
            // Replace dollarsign prefixed items with Unicode
            // https://stackoverflow.com/a/39126851/2438830
            function replaceKeysDeep(obj) {
            	return _.transform(obj, function(res, v, k) {
            		var cur = _.isString(k) ? k.replace(/^\$/, '\uFF04') : k;
            		res[cur] = _.isObject(v) ? replaceKeysDeep(v) : v;
            	});
            }
            replaceKeysDeep(value);
            */

            _this.data = value;
          } catch (e) {
            // Silently fail as the JSON is invalid
            console.log('Invalid JSON', e);
          }
        } else {
          _this.data = value;
        }

        return true;
      });
      this.$nextTick(function () {
        return _this.editor.resize();
      });
      /*
      this.$watch('config', ()=> {
      	// TODO: Make compatible with Parcel
      	//if (this.$props.syntax) this.editor.getSession().setMode(`ace/mode/${this.$props.syntax}`);
      	//if (this.$props.theme) this.editor.setTheme(`ace/theme/${this.$props.theme}`);
      }, {
      	// FIXME: deep?
      	immediate: true
      });
      */

      this.$watch('data', function (newVal, oldVal) {
        if (!newVal) return;

        var value = _this.editor.getValue();

        if (_this.$props.convert && _this.$props.syntax == 'json') newVal = JSON.stringify(newVal, null, '\t'); // FIXME: This comparison will fail with parsed (convert = true) instances, resulting in update loop.

        if (newVal === value) return;

        _this.editor.setValue(newVal, 1);
      }, {
        deep: true,
        immediate: true
      });
    },
    render: function render(h) {
      return h('div', {
        attrs: {
          "class": 'mg-code',
          style: "height: ".concat(this.$props.height, "; width: 100%")
        }
      });
    }
  });

  /* script */
  const __vue_script__$c = script$c;

  /* template */

    /* style */
    const __vue_inject_styles__$c = function (inject) {
      if (!inject) return
      inject("data-v-52a50097_0", { source: "\n.mg-code {\n\tborder: 1px solid #f0f0f0;\n\tborder-radius: 5px;\n\tmin-width: 150px;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgCode.vue"],"names":[],"mappings":";AA6FA;CACA,yBAAA;CACA,kBAAA;CACA,gBAAA;AACA","file":"mgCode.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgCode', {\n\tmeta: {\n\t\ttitle: 'Code Editor',\n\t\ticon: 'fal fa-code',\n\t\tcategory: 'Complex Inputs',\n\t\tpreferId: true,\n\t},\n\tprops: {\n\t\tsyntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript', 'html', 'css'], default: 'json'},\n\t\tconvert: {type: 'mgToggle', default: true, showIf: 'syntax == \"json\"', help: 'Convert data back to a native JS object'},\n\t\ttheme: {type: 'mgChoiceDropdown', enum: ['chrome'], advanced: true, default: 'chrome', help: 'The syntax color scheme to use'},\n\t\theight: {type: 'mgText', default: '400px', help: 'The size of the editing window as a valid CSS measurement', advanced: true},\n\t},\n\tbeforeDestroy() {\n\t\tthis.editor.destroy();\n\t\tthis.editor.container.remove();\n\t},\n\tmounted() {\n\t\tthis.editor = ace.edit(this.$el);\n\t\tthis.editor.$blockScrolling = Infinity;\n\n\t\tthis.editor.setOptions({\n\t\t\tshowPrintMargin: false,\n\t\t});\n\n\t\tthis.editor.on('change', (delta)=> {\n\t\t\tvar value = this.editor.getValue();\n\t\t\tif (this.$props.convert && this.$props.syntax == 'json') {\n\t\t\t\ttry {\n\t\t\t\t\tvalue = JSON.parse(value);\n\n\t\t\t\t\t/*\n\t\t\t\t\t// Replace dollarsign prefixed items with Unicode\n\t\t\t\t\t// https://stackoverflow.com/a/39126851/2438830\n\t\t\t\t\tfunction replaceKeysDeep(obj) {\n\t\t\t\t\t\treturn _.transform(obj, function(res, v, k) {\n\t\t\t\t\t\t\tvar cur = _.isString(k) ? k.replace(/^\\$/, '\\uFF04') : k;\n\t\t\t\t\t\t\tres[cur] = _.isObject(v) ? replaceKeysDeep(v) : v;\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t\treplaceKeysDeep(value);\n\t\t\t\t\t*/\n\n\t\t\t\t\tthis.data = value;\n\t\t\t\t} catch (e) {\n\t\t\t\t\t// Silently fail as the JSON is invalid\n\t\t\t\t\tconsole.log('Invalid JSON', e);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tthis.data = value;\n\t\t\t}\n\t\t\treturn true;\n\t\t});\n\n\t\tthis.$nextTick(()=> this.editor.resize());\n\n\t\t/*\n\t\tthis.$watch('config', ()=> {\n\t\t\t// TODO: Make compatible with Parcel\n\t\t\t//if (this.$props.syntax) this.editor.getSession().setMode(`ace/mode/${this.$props.syntax}`);\n\t\t\t//if (this.$props.theme) this.editor.setTheme(`ace/theme/${this.$props.theme}`);\n\t\t}, {\n\t\t\t// FIXME: deep?\n\t\t\timmediate: true\n\t\t});\n\t\t*/\n\n\t\tthis.$watch('data', (newVal, oldVal)=> {\n\t\t\tif (!newVal) return;\n\t\t\tvar value = this.editor.getValue();\n\n\t\t\tif (this.$props.convert && this.$props.syntax == 'json')\n\t\t\t\tnewVal = JSON.stringify(newVal, null, '\\t');\n\n\t\t\t// FIXME: This comparison will fail with parsed (convert = true) instances, resulting in update loop.\n\t\t\tif (newVal === value) return;\n\n\t\t\tthis.editor.setValue(newVal, 1);\n\t\t}, {deep: true, immediate: true});\n\t},\n\trender(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tclass: 'mg-code',\n\t\t\t\tstyle: `height: ${this.$props.height}; width: 100%`,\n\t\t\t},\n\t\t});\n\t},\n});\n</script>\n\n<style>\n.mg-code {\n\tborder: 1px solid #f0f0f0;\n\tborder-radius: 5px;\n\tmin-width: 150px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = undefined;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$c = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgCode = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$c
  });

  var vueSwatches_min = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t();}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r});},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0});},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=11)}([function(e,t,n){t.__esModule=!0;var r,i=n(43),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e};},function(e,t){e.exports=function(e){try{return !!e()}catch(e){return !0}};},function(e,t,n){e.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},function(e,t){e.exports=function(e){return "object"==typeof e?null!==e:"function"==typeof e};},function(e,t){var n=e.exports={version:"2.5.6"};"number"==typeof __e&&(__e=n);},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)};},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e};},function(e,t,n){var r=n(27);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return "String"==r(e)?e.split(""):Object(e)};},function(e,t,n){var r=n(8),i=n(7);e.exports=function(e){return r(i(e))};},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)};},function(e,t,n){n.r(t);var r=n(0),i=n.n(r),o={basic:{swatches:["#1FBC9C","#1CA085","#2ECC70","#27AF60","#3398DB","#2980B9","#A463BF","#8E43AD","#3D556E","#222F3D","#F2C511","#F39C19","#E84B3C","#C0382B","#DDE6E8","#BDC3C8"],rowLength:4},"text-basic":{swatches:["#CC0001","#E36101","#FFCC00","#009900","#0066CB","#000000","#FFFFFF"],showBorder:!0},"text-advanced":{swatches:[["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff"],["#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff"],["#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc"],["#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],["#cc4125","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6d9eeb","#6fa8dc","#8e7cc3","#c27ba0"],["#a61c00","#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3c78d8","#3d85c6","#674ea7","#a64d79"],["#85200c","#990000","#b45f06","#bf9000","#38761d","#134f5c","#1155cc","#0b5394","#351c75","#741b47"],["#5b0f00","#660000","#783f04","#7f6000","#274e13","#0c343d","#1c4587","#073763","#20124d","#4c1130"]],borderRadius:"0",rowLength:10,swatchSize:24,spacingSize:0},"material-basic":{swatches:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]},"material-light":{swatches:["#EF9A9A","#F48FB1","#CE93D8","#B39DDB","#9FA8DA","#90CAF9","#81D4FA","#80DEEA","#80CBC4","#A5D6A7","#C5E1A5","#E6EE9C","#FFF59D","#FFE082","#FFCC80","#FFAB91","#BCAAA4","#EEEEEE","#B0BEC5"]},"material-dark":{swatches:["#D32F2F","#C2185B","#7B1FA2","#512DA8","#303F9F","#1976D2","#0288D1","#0097A7","#00796B","#388E3C","#689F38","#AFB42B","#FBC02D","#FFA000","#F57C00","#E64A19","#5D4037","#616161","#455A64"]}};function s(e,t,n,r,i,o,s,c){var a=typeof(e=e||{}).default;"object"!==a&&"function"!==a||(e=e.default);var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s);},l._ssrRegister=u):i&&(u=c?function(){i.call(this,this.$root.$options.shadowRoot);}:i),u)if(l.functional){l._injectStyles=u;var p=l.render;l.render=function(e,t){return u.call(t),p(e,t)};}else {var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u];}return {exports:e,options:l}}var c=s({name:"swatches",components:{Swatch:s({name:"swatch",components:{Check:s({name:"check",data:function(){return {}}},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vue-swatches__check__wrapper vue-swatches--has-children-centered"},[t("div",{staticClass:"vue-swatches__check__circle vue-swatches--has-children-centered"},[t("svg",{staticClass:"check",attrs:{version:"1.1",role:"presentation",width:"12",height:"12",viewBox:"0 0 1792 1792"}},[t("path",{staticClass:"vue-swatches__check__path",attrs:{d:"M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"}})])])])},[],!1,function(e){n(13);},null,null).exports},props:{borderRadius:{type:String},disabled:{type:Boolean},exceptionMode:{type:String},isException:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},showCheckbox:{type:Boolean},showBorder:{type:Boolean},size:{type:Number},spacingSize:{type:Number},swatchColor:{type:String,default:""},swatchStyle:{type:Object}},data:function(){return {}},computed:{computedSwatchStyle:function(){return {display:this.isException&&"hidden"===this.exceptionMode?"none":"inline-block",width:this.size+"px",height:this.size+"px",marginBottom:this.spacingSize+"px",marginRight:this.spacingSize+"px",borderRadius:this.borderRadius,backgroundColor:""!==this.swatchColor?this.swatchColor:"#FFFFFF",cursor:this.cursorStyle}},cursorStyle:function(){return this.disabled?"not-allowed":this.isException&&"disabled"===this.exceptionMode?"not-allowed":"pointer"},swatchStyles:function(){return [this.computedSwatchStyle,this.swatchStyle]}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-swatches__swatch",class:{"vue-swatches__swatch--border":e.showBorder,"vue-swatches__swatch--selected":e.selected,"vue-swatches__swatch--is-exception":e.isException||e.disabled},style:e.swatchStyles},[""===e.swatchColor?n("div",{staticClass:"vue-swatches__diagonal--wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__diagonal"})]):e._e(),e._v(" "),n("check",{directives:[{name:"show",rawName:"v-show",value:e.showCheckbox&&e.selected,expression:"showCheckbox && selected"}]})],1)},[],!1,function(e){n(15);},null,null).exports},props:{backgroundColor:{type:String,default:"#ffffff"},closeOnSelect:{type:Boolean,default:!0},colors:{type:[Array,Object,String],default:"basic"},exceptions:{type:Array,default:function(){return []}},exceptionMode:{type:String,default:"disabled"},disabled:{type:Boolean,default:!1},fallbackInputClass:{type:[Array,Object,String],default:null},fallbackOkClass:{type:[Array,Object,String],default:null},fallbackOkText:{type:String,default:"Ok"},fallbackInputType:{type:String,default:function(){return "text"},validator:function(e){return -1!==["text","color"].indexOf(e)}},inline:{type:Boolean,default:!1},maxHeight:{type:[Number,String],default:null},shapes:{type:String,default:"squares"},popoverTo:{type:String,default:"right"},rowLength:{type:[Number,String],default:null},showBorder:{type:Boolean,default:null},showFallback:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},swatchSize:{type:[Number,String],default:null},swatchStyle:{type:[Object,Array],default:function(){}},triggerStyle:{type:[Object,Array],default:function(){}},wrapperStyle:{type:[Object,Array],default:function(){}},value:{type:String,default:null}},data:function(){return {presetBorderRadius:null,presetMaxHeight:null,presetRowLength:null,presetShowBorder:null,presetSwatchSize:null,presetSpacingSize:null,internalValue:this.value,internalIsOpen:!1}},computed:{isNested:function(){return !!(this.computedColors&&this.computedColors.length>0&&this.computedColors[0]instanceof Array)},isOpen:function(){return !this.inline&&this.internalIsOpen},isNoColor:function(){return this.checkEquality("",this.value)},computedColors:function(){return this.colors instanceof Array?this.colors:this.extractSwatchesFromPreset(this.colors)},computedBorderRadius:function(){return null!==this.presetBorderRadius?this.presetBorderRadius:this.borderRadius},computedExceptionMode:function(){return "hidden"===this.exceptionMode?this.exceptionMode:"disabled"===this.exceptionMode?this.exceptionMode:void 0},computedMaxHeight:function(){return null!==this.maxHeight?Number(this.maxHeight):null!==this.presetMaxHeight?this.presetMaxHeight:300},computedRowLength:function(){return null!==this.rowLength?Number(this.rowLength):null!==this.presetRowLength?this.presetRowLength:4},computedSwatchSize:function(){return null!==this.swatchSize?Number(this.swatchSize):null!==this.presetSwatchSize?this.presetSwatchSize:42},computedSpacingSize:function(){return null!==this.presetSpacingSize?this.presetSpacingSize:this.spacingSize},computedShowBorder:function(){return null!==this.showBorder?this.showBorder:null!==this.presetShowBorder&&this.presetShowBorder},borderRadius:function(){return "squares"===this.shapes?Math.round(.25*this.computedSwatchSize)+"px":"circles"===this.shapes?"50%":void 0},spacingSize:function(){return Math.round(.25*this.computedSwatchSize)},wrapperWidth:function(){return this.computedRowLength*(this.computedSwatchSize+this.computedSpacingSize)},computedtriggerStyle:function(){return {width:"42px",height:"42px",backgroundColor:this.value?this.value:"#ffffff",borderRadius:"circles"===this.shapes?"50%":"10px"}},triggerStyles:function(){return [this.computedtriggerStyle,this.triggerStyle]},containerStyle:function(){var e={backgroundColor:this.backgroundColor},t={};return this.inline?e:("right"===this.popoverTo?t={left:0}:"left"===this.popoverTo&&(t={right:0}),i()({},t,e,{maxHeight:this.computedMaxHeight+"px"}))},containerStyles:function(){return [this.containerStyle]},computedWrapperStyle:function(){var e={paddingTop:this.computedSpacingSize+"px",paddingLeft:this.computedSpacingSize+"px"};return this.inline?e:i()({},e,{width:this.wrapperWidth+"px"})},wrapperStyles:function(){return [this.computedWrapperStyle,this.wrapperStyle]},computedFallbackWrapperStyle:function(){var e={marginLeft:this.computedSpacingSize+"px",paddingBottom:this.computedSpacingSize+"px"};return this.inline?e:i()({},e,{width:this.wrapperWidth-this.computedSpacingSize+"px"})},computedFallbackWrapperStyles:function(){return [this.computedFallbackWrapperStyle]}},watch:{value:function(e){this.internalValue=e;}},methods:{checkEquality:function(e,t){return !(!e&&""!==e||!t&&""!==t)&&e.toUpperCase()===t.toUpperCase()},checkException:function(e){return -1!==this.exceptions.map(function(e){return e.toUpperCase()}).indexOf(e.toUpperCase())},hidePopover:function(){this.internalIsOpen=!1,this.$el.blur(),this.$emit("close",this.internalValue);},onBlur:function(e){this.isOpen&&(null!==e&&this.$el.contains(e)||(this.internalIsOpen=!1,this.$emit("close",this.internalValue)));},onFallbackButtonClick:function(){this.hidePopover();},showPopover:function(){this.isOpen||this.inline||this.disabled||(this.internalIsOpen=!0,this.$el.focus(),this.$emit("open"));},togglePopover:function(){this.isOpen?this.hidePopover():this.showPopover();},updateSwatch:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).fromFallbackInput;this.checkException(e)||this.disabled||(this.internalValue=e,this.$emit("input",e),!this.closeOnSelect||this.inline||t||this.hidePopover());},extractSwatchesFromPreset:function(e){var t=null;return (t=e instanceof Object?e:o[e]).borderRadius&&(this.presetBorderRadius=t.borderRadius),t.maxHeight&&(this.presetMaxHeight=t.maxHeight),t.rowLength&&(this.presetRowLength=t.rowLength),t.showBorder&&(this.presetShowBorder=t.showBorder),t.swatchSize&&(this.presetSwatchSize=t.swatchSize),(0===t.spacingSize||t.spacingSize)&&(this.presetSpacingSize=t.spacingSize),t.swatches}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-swatches",attrs:{tabindex:"0"},on:{blur:function(t){return t.target!==t.currentTarget?null:(n=t,e.onBlur(n.relatedTarget));var n;}}},[e.inline?e._e():n("div",{ref:"trigger-wrapper",on:{click:e.togglePopover}},[e._t("trigger",[n("div",{staticClass:"vue-swatches__trigger",class:{"vue-swatches--is-empty":!e.value,"vue-swatches--is-disabled":e.disabled},style:e.triggerStyles},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isNoColor,expression:"isNoColor"}],staticClass:"vue-swatches__diagonal--wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__diagonal"})])])])],2),e._v(" "),n("transition",{attrs:{name:"vue-swatches-show-hide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.inline||e.isOpen,expression:"inline || isOpen"}],staticClass:"vue-swatches__container",class:{"vue-swatches--inline":e.inline},style:e.containerStyles},[n("div",{staticClass:"vue-swatches__wrapper",style:e.wrapperStyles},[e.isNested?e._l(e.computedColors,function(t,r){return n("div",{key:r,staticClass:"vue-swatches__row"},e._l(t,function(t){return n("swatch",{key:t,attrs:{"border-radius":e.computedBorderRadius,disabled:e.disabled,"exception-mode":e.computedExceptionMode,"is-exception":e.checkException(t),selected:e.checkEquality(t,e.value),size:e.computedSwatchSize,"spacing-size":e.computedSpacingSize,"show-border":e.computedShowBorder,"show-checkbox":e.showCheckbox,"swatch-color":t,"swatch-style":e.swatchStyle},nativeOn:{click:function(n){e.updateSwatch(t);}}})}))}):e._l(e.computedColors,function(t){return n("swatch",{key:t,attrs:{"border-radius":e.computedBorderRadius,disabled:e.disabled,"exception-mode":e.computedExceptionMode,"is-exception":e.checkException(t),selected:e.checkEquality(t,e.value),size:e.computedSwatchSize,"spacing-size":e.computedSpacingSize,"show-border":e.computedShowBorder,"show-checkbox":e.showCheckbox,"swatch-color":t,"swatch-style":e.swatchStyle},nativeOn:{click:function(n){e.updateSwatch(t);}}})})],2),e._v(" "),e.showFallback?n("div",{staticClass:"vue-swatches__fallback__wrapper",style:e.computedFallbackWrapperStyles},[n("span",{staticClass:"vue-swatches__fallback__input--wrapper"},[n("input",{ref:"fallbackInput",staticClass:"vue-swatches__fallback__input",class:e.fallbackInputClass,attrs:{type:e.fallbackInputType},domProps:{value:e.internalValue},on:{input:function(t){return e.updateSwatch(t.target.value,{fromFallbackInput:!0})}}})]),e._v(" "),n("button",{staticClass:"vue-swatches__fallback__button",class:e.fallbackOkClass,on:{click:function(t){return t.preventDefault(),e.onFallbackButtonClick(t)}}},[e._v("\n          "+e._s(e.fallbackOkText)+"\n        ")])]):e._e()])])],1)},[],!1,function(e){n(45);},null,null).exports;n.d(t,"Swatches",function(){return c});t.default=c;},,function(e,t,n){},,function(e,t,n){},function(e,t,n){var r=n(7);e.exports=function(e){return Object(r(e))};},function(e,t){t.f={}.propertyIsEnumerable;},function(e,t){t.f=Object.getOwnPropertySymbols;},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");},function(e,t){var n=0,r=Math.random();e.exports=function(e){return "Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))};},function(e,t){e.exports=!0;},function(e,t,n){var r=n(4),i=n(5),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});},function(e,t,n){var r=n(22)("keys"),i=n(20);e.exports=function(e){return r[e]||(r[e]=i(e))};},function(e,t,n){var r=n(6),i=Math.max,o=Math.min;e.exports=function(e,t){return (e=r(e))<0?i(e+t,0):o(e,t)};},function(e,t,n){var r=n(6),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0};},function(e,t,n){var r=n(9),i=n(25),o=n(24);e.exports=function(e){return function(t,n,s){var c,a=r(t),u=i(a.length),l=o(s,u);if(e&&n!=n){for(;u>l;)if((c=a[l++])!=c)return !0}else for(;u>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return !e&&-1}};},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)};},function(e,t,n){var r=n(10),i=n(9),o=n(26)(!1),s=n(23)("IE_PROTO");e.exports=function(e,t){var n,c=i(e),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);for(;t.length>a;)r(c,n=t[a++])&&(~o(u,n)||u.push(n));return u};},function(e,t,n){var r=n(28),i=n(19);e.exports=Object.keys||function(e){return r(e,i)};},function(e,t,n){var r=n(29),i=n(18),o=n(17),s=n(16),c=n(8),a=Object.assign;e.exports=!a||n(1)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e;}),7!=a({},e)[n]||Object.keys(a({},t)).join("")!=r})?function(e,t){for(var n=s(e),a=arguments.length,u=1,l=i.f,p=o.f;a>u;)for(var h,f=c(arguments[u++]),d=l?r(f).concat(l(f)):r(f),w=d.length,v=0;w>v;)p.call(f,h=d[v++])&&(n[h]=f[h]);return n}:a;},function(e,t){e.exports=function(e,t){return {enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};},function(e,t,n){var r=n(3);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")};},function(e,t,n){var r=n(3),i=n(5).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}};},function(e,t,n){e.exports=!n(2)&&!n(1)(function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a});},function(e,t,n){var r=n(3);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};},function(e,t,n){var r=n(35),i=n(34),o=n(32),s=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return "value"in n&&(e[t]=n.value),e};},function(e,t,n){var r=n(36),i=n(31);e.exports=n(2)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e};},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e};},function(e,t,n){var r=n(38);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}};},function(e,t,n){var r=n(5),i=n(4),o=n(39),s=n(37),c=n(10),a=function(e,t,n){var u,l,p,h=e&a.F,f=e&a.G,d=e&a.S,w=e&a.P,v=e&a.B,b=e&a.W,y=f?i:i[t]||(i[t]={}),g=y.prototype,S=f?r:d?r[t]:(r[t]||{}).prototype;for(u in f&&(n=t),n)(l=!h&&S&&void 0!==S[u])&&c(y,u)||(p=l?S[u]:n[u],y[u]=f&&"function"!=typeof S[u]?n[u]:v&&l?o(p,r):b&&S[u]==p?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(p):w&&"function"==typeof p?o(Function.call,p):p,w&&((y.virtual||(y.virtual={}))[u]=p,e&a.R&&g&&!g[u]&&s(g,u,p)));};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a;},function(e,t,n){var r=n(40);r(r.S+r.F,"Object",{assign:n(30)});},function(e,t,n){n(41),e.exports=n(4).Object.assign;},function(e,t,n){e.exports={default:n(42),__esModule:!0};},,function(e,t,n){}])});
  });

  var Swatches = unwrapExports(vueSwatches_min);
  var vueSwatches_min_1 = vueSwatches_min.VueSwatches;

  var script$d = app.mgComponent('mgColor', {
    meta: {
      title: 'Color',
      icon: 'far fa-paint-roller',
      category: 'Simple Inputs',
      preferId: true,
      shorthand: ['color', 'hue', 'swatch']
    },
    props: {
      required: {
        type: 'mgToggle',
        "default": false
      },
      colorSet: {
        type: 'mgChoiceDropdown',
        "enum": [{
          id: 'basic',
          title: 'Basic'
        }, {
          id: 'material-light',
          title: 'Material'
        }, {
          id: 'text-advanced',
          title: 'Full swatch'
        }],
        "default": 'text-advanced'
      },
      "interface": {
        type: 'mgChoiceDropdown',
        "default": 'input',
        "enum": ['input', 'colorOnly']
      },
      placeholder: {
        type: 'mgText',
        help: 'Ghost text to display when there is no value'
      },
      popoverSide: {
        type: 'mgChoiceButtons',
        "enum": ['left', 'right'],
        advanced: true
      }
    },
    components: {
      Swatches: Swatches
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    },
    methods: {
      change: function change(e) {
        var value = e.target.value;

        if (value && /^#[0-9A-F]+$/i.test(value)) {
          this.data = value;
        }
      }
    }
  });

  /* script */
  const __vue_script__$d = script$d;

  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mg-color" },
      [
        _vm.$props.interface == "input"
          ? _c("div", { staticClass: "input-group" }, [
              _c(
                "div",
                { staticClass: "input-group-prepend" },
                [
                  _c("swatches", {
                    staticClass: "input-group-text",
                    attrs: {
                      value: _vm.data,
                      colors: _vm.$props.colorSet,
                      "popover-to": _vm.$props.popoverSide
                    },
                    on: {
                      input: function($event) {
                        _vm.data = $event.toUpperCase();
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", placeholder: _vm.$props.placeholder },
                domProps: { value: _vm.data },
                on: { input: _vm.change }
              })
            ])
          : _c("swatches", {
              attrs: {
                value: _vm.data,
                colors: _vm.$props.colorSet,
                "popover-to": _vm.$props.popoverSide
              },
              on: {
                input: function($event) {
                  _vm.data = $event.toUpperCase();
                }
              }
            })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = function (inject) {
      if (!inject) return
      inject("data-v-ec0c4426_0", { source: "\n.mg-color .input-group > .input-group-prepend .vue-swatches {\n\tpadding: 3px;\n}\n.mg-color .input-group > .input-group-prepend .vue-swatches .vue-swatches__trigger {\n\twidth: 30px !important;\n\theight: 30px !important;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgColor.vue"],"names":[],"mappings":";AAmEA;CACA,YAAA;AACA;AAEA;CACA,sBAAA;CACA,uBAAA;AACA","file":"mgColor.vue","sourcesContent":["<script>\nimport Swatches from 'vue-swatches';\nimport 'vue-swatches/dist/vue-swatches.min.css';\n\nexport default app.mgComponent('mgColor', {\n\tmeta: {\n\t\ttitle: 'Color',\n\t\ticon: 'far fa-paint-roller',\n\t\tcategory: 'Simple Inputs',\n\t\tpreferId: true,\n\t\tshorthand: ['color', 'hue', 'swatch'],\n\t},\n\tprops: {\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tcolorSet: {type: 'mgChoiceDropdown', enum: [{id: 'basic', title: 'Basic'}, {id: 'material-light', title: 'Material'}, {id: 'text-advanced', title: 'Full swatch'}], default: 'text-advanced'},\n\t\tinterface: {type: 'mgChoiceDropdown', default: 'input', enum: ['input', 'colorOnly']},\n\t\tplaceholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},\n\t\tpopoverSide: {type: 'mgChoiceButtons', enum: ['left', 'right'], advanced: true},\n\t},\n\tcomponents: {Swatches},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);\n\t\t});\n\t},\n\tmethods: {\n\t\tchange(e) {\n\t\t\tvar value = e.target.value;\n\t\t\tif (value && /^#[0-9A-F]+$/i.test(value)) {\n\t\t\t\tthis.data = value;\n\t\t\t}\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-color\">\n\t\t<div v-if=\"$props.interface == 'input'\" class=\"input-group\">\n\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t<swatches\n\t\t\t\t\t:value=\"data\"\n\t\t\t\t\t:colors=\"$props.colorSet\"\n\t\t\t\t\t:popover-to=\"$props.popoverSide\"\n\t\t\t\t\tclass=\"input-group-text\"\n\t\t\t\t\t@input=\"data = $event.toUpperCase()\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<input\n\t\t\t\t:value=\"data\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t:placeholder=\"$props.placeholder\"\n\t\t\t\t@input=\"change\"\n\t\t\t/>\n\t\t</div>\n\t\t<swatches\n\t\t\tv-else\n\t\t\t:value=\"data\"\n\t\t\t:colors=\"$props.colorSet\"\n\t\t\t:popover-to=\"$props.popoverSide\"\n\t\t\t@input=\"data = $event.toUpperCase()\"\n\t\t/>\n\t</div>\n</template>\n\n<style>\n.mg-color .input-group > .input-group-prepend .vue-swatches {\n\tpadding: 3px;\n}\n\n.mg-color .input-group > .input-group-prepend .vue-swatches .vue-swatches__trigger {\n\twidth: 30px !important;\n\theight: 30px !important;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$d = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
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

  var mgColor = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$d
  });

  /**
  * Instance of a MacGyver widget
  * This is the parent of all other mg* components
  *
  * @param {Object} config The MacGyver component config - this is a simple object containing all prototype $props mappings
  */
  var script$e = app.mgComponent('mgComponent', {
    inject: ['$mgForm'],
    data: function data() {
      return {
        data: undefined
      };
    },
    props: {
      config: {
        type: Object,
        required: true
      }
    },
    // TODO: Functional? Proxy?
    render: function render(h) {
      var _this = this;

      if (!this.$macgyver.widgets[this.$props.config.type]) return h('mg-error', {
        props: {
          text: "Unknown widget type \"".concat(this.$props.config.type, "\"")
        }
      });
      return h(this.$props.config.type, {
        props: this.$props.config,
        nativeOn: {
          click: function click(e) {
            return _this.$mgForm.$emit('mgComponent.click', _this, e);
          },
          mousedown: function mousedown(e) {
            return _this.$mgForm.$emit('mgComponent.mouseDown', _this, e);
          },
          mouseup: function mouseup(e) {
            return _this.$mgForm.$emit('mgComponent.mouseUp', _this, e);
          },
          mousemove: function mousemove(e) {
            return _this.$mgForm.$emit('mgComponent.mouseMove', _this, e);
          },
          mouseenter: function mouseenter(e) {
            return _this.$mgForm.$emit('mgComponent.mouseEnter', _this, e);
          },
          mouseleave: function mouseleave(e) {
            return _this.$mgForm.$emit('mgComponent.mouseLeave', _this, e);
          },
          mouseover: function mouseover(e) {
            return _this.$mgForm.$emit('mgComponent.mouseOver', _this, e);
          },
          mouseout: function mouseout(e) {
            return _this.$mgForm.$emit('mgComponent.mouseOut', _this, e);
          }
        }
      });
    }
  });

  /* script */
  const __vue_script__$e = script$e;

  /* template */

    /* style */
    const __vue_inject_styles__$e = undefined;
    /* scoped */
    const __vue_scope_id__$e = undefined;
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$e = /*#__PURE__*/normalizeComponent(
      {},
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

  var mgComponent = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$e
  });

  /**
  * MacGyver component loader
  * This is a meta component that loads other dynamic components as an array
  */
  var script$f = app.mgComponent('mgContainer', {
    inject: {
      $mgForm: {
        from: '$mgForm'
      },
      $mgFormEditor: {
        from: '$mgFormEditor',
        "default": false
      }
    },
    meta: {
      title: 'Container layout',
      icon: 'far fa-th-large',
      category: 'Layout',
      preferId: false
    },
    props: {
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
      formClass: {
        type: 'mgChoiceDropdown',
        title: 'Form style',
        showIf: {
          layout: {
            $in: ['form', 'card']
          }
        },
        "default": 'normal',
        "enum": [{
          id: 'normal',
          title: 'Normal'
        }, {
          id: 'titles-above',
          title: 'Titles above'
        }]
      },
      title: {
        type: 'mgText',
        showIf: {
          layout: 'card'
        }
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
      },
      verbs: {
        type: 'mgTable',
        advanced: true,
        showIf: "layout == 'card'",
        items: [{
          id: 'icon',
          type: 'mgIcon'
        }, {
          id: 'tooltip',
          type: 'mgText'
        }, {
          id: 'class',
          type: 'mgText'
        }, {
          id: 'action',
          type: 'mgText'
        }]
      },
      items: {
        type: 'mgAlert',
        vueType: 'array',
        text: 'Use the editor to define child widgets'
      } // Child items

    },
    childProps: {
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
        type: 'mgCode',
        syntax: 'text',
        advanced: true,
        help: 'A simple equality expression or Sift object to deteremine visibility'
      }
    },
    data: function data() {
      return {
        highlights: {},
        // Lookup of extra classes to add to widgets, each key is the array offset of the widget within this container, the value is an array of classes to add
        localData: {} // Lookup of immediate child data values, used when `$props.layout == 'formFloating'`

      };
    },
    mounted: function mounted() {
      var _this = this;

      if (this.$props.collapsable) {
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

      if (this.$props.layout == 'formFloating') {
        // When in floating mode we need to keep track of child data so we copy its value into our `localData` object lookup
        this.$mgForm.$on('changeItem', function (v) {
          // Bind to parent form handler
          if (_this.$props.items.some(function (item) {
            return item.$dataPath == v.path;
          })) {
            // Is this widget one of our immediate children?
            _this.$set(_this.localData, v.path, v.value); // Copy its data against our local copy

          }
        });
      }
    },
    methods: {
      /**
      * Emit an event passing this container as a scope
      * This is really just a wrapper to be able to pass this VueComponent to mgContainer.* emitters
      * @param {string} eventName Event to emit
      * @param {string} specPath The widget specPath
      * @param {number} widgetIndex The widget sending the message
      */
      componentEvent: function componentEvent(eventName, specPath, widgetIndex, vueEvent) {
        this.$mgForm.$emit(eventName, this, specPath, widgetIndex, vueEvent);
      },

      /**
      * Find the child index by its component
      * This works like findIndex only with Magyver components, ignoring all non-mg children when computing the index
      * @param {VueComponent} child The child offset to find
      * @returns {number} The offset of the component or boolean `false`
      */
      findChildIndex: function findChildIndex(child) {
        var result = _(this.$refs).map(function (v) {
          return v[0];
        }) // Dynamic refs always end up as an array of 1 item, so unpack that
        .reduce(function (t, v, i) {
          if (t.found) {
            // Already found the child
            return t;
          } else if (v._uid == child._uid) {
            // Found by direct UID
            return _objectSpread2(_objectSpread2({}, t), {}, {
              found: true
            });
          } else if (v.$children && v.$children.length == 1 && v.$children[0]._uid == child._uid) {
            // Check into mgComponent wrappers
            return _objectSpread2(_objectSpread2({}, t), {}, {
              found: true
            });
          } else if (v.$mgForm) {
            // Is an mgComponent {
            return _objectSpread2(_objectSpread2({}, t), {}, {
              mgIndex: t.mgIndex + 1
            });
          } else {
            // Implied else - regular Vue component - skip incrementing when calculating the offset
            return t;
          }
        }, {
          found: false,
          mgIndex: 0
        });

        return result.found ? result.mgIndex : false;
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
    return _vm.$props.layout == "form" || _vm.$props.layout === undefined
      ? _c(
          "div",
          { staticClass: "mg-container", class: _vm.$props.formClass },
          _vm._l(_vm.$props.items, function(widget, widgetIndex) {
            return widget.show
              ? _c(
                  "div",
                  {
                    key: widget.id,
                    staticClass: "form-group row mg-component",
                    class: [
                      widget.mgValidation == "error" ? "has-error" : "",
                      widget.rowClass
                    ].concat(_vm.highlights[widgetIndex] || [])
                  },
                  [
                    widget.showTitle || _vm.$props.showTitles
                      ? _c(
                          "label",
                          { staticClass: "col-form-label text-left col-sm-3" },
                          [_vm._v("\n\t\t\t" + _vm._s(widget.title) + "\n\t\t")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-form-value mg-component-wrapper",
                        class:
                          widget.showTitle || _vm.$props.showTitles
                            ? "col-sm-9"
                            : "col-sm-12"
                      },
                      [
                        _c("mg-component", {
                          ref: widgetIndex,
                          refInFor: true,
                          attrs: { config: widget }
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
                              widget.showTitle || _vm.$props.showTitles
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
      : _vm.$props.layout == "card"
      ? _c("div", { staticClass: "mg-container", class: _vm.$props.formClass }, [
          _c(
            "div",
            {
              staticClass: "card mg-container",
              class: {
                "card-collapsable": _vm.$props.collapsable,
                "card-collapsed": _vm.$props.collapsed
              }
            },
            [
              _vm.$props.title || (_vm.$props.verbs && _vm.$props.verbs.length)
                ? _c("div", { staticClass: "card-header" }, [
                    _vm._v("\n\t\t\t" + _vm._s(_vm.$props.title) + "\n\t\t\t"),
                    _vm.$props.verbs && _vm.$props.verbs.length
                      ? _c(
                          "div",
                          { staticClass: "card-verbs" },
                          _vm._l(_vm.$props.verbs, function(verb, verbIndex) {
                            return _c("a", {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: verb.tooltip,
                                  expression: "verb.tooltip"
                                }
                              ],
                              key: verbIndex,
                              class: [verb.class, verb.icon],
                              on: {
                                click: function($event) {
                                  return _vm.$mgForm.run(_vm.form, verb.action)
                                }
                              }
                            })
                          }),
                          0
                        )
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                _vm._l(_vm.$props.items, function(widget, widgetIndex) {
                  return widget.show
                    ? _c(
                        "div",
                        {
                          key: widget.id,
                          staticClass: "form-group row mg-component",
                          class: [
                            widget.mgValidation == "error" ? "has-error" : "",
                            widget.rowClass
                          ].concat(_vm.highlights[widgetIndex] || []),
                          on: {
                            click: function($event) {
                              return _vm.componentEvent(
                                "mgContainer.click",
                                widget.$specPath,
                                widgetIndex,
                                $event
                              )
                            },
                            mouseenter: function($event) {
                              return _vm.componentEvent(
                                "mgContainer.mouseEnter",
                                widget.$specPath,
                                widgetIndex,
                                $event
                              )
                            },
                            mouseleave: function($event) {
                              return _vm.componentEvent(
                                "mgContainer.mouseLeave",
                                widget.$specPath,
                                widgetIndex,
                                $event
                              )
                            }
                          }
                        },
                        [
                          _vm.$mgFormEditor
                            ? _c("mg-form-editor-controls", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      _vm.highlights[widgetIndex] &&
                                      _vm.highlights[widgetIndex].some(function(
                                        c
                                      ) {
                                        return (
                                          c == "editHover" || c == "editEditing"
                                        )
                                      }),
                                    expression:
                                      "highlights[widgetIndex] && highlights[widgetIndex].some(c => c == 'editHover' || c == 'editEditing')"
                                  }
                                ],
                                attrs: { config: widget }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          widget.showTitle || _vm.$props.showTitles
                            ? _c(
                                "label",
                                {
                                  staticClass: "col-form-label text-left col-sm-3"
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
                              staticClass: "col-form-value mg-component-wrapper",
                              class:
                                widget.showTitle || _vm.$props.showTitles
                                  ? "col-sm-9"
                                  : "col-sm-12"
                            },
                            [
                              _c("mg-component", {
                                ref: widgetIndex,
                                refInFor: true,
                                attrs: { config: widget }
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
                                    widget.showTitle || _vm.$props.showTitles
                                      ? "col-sm-9 col-sm-offset-3"
                                      : "col-sm-12"
                                },
                                [_vm._v(_vm._s(widget.help))]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                }),
                0
              )
            ]
          )
        ])
      : _vm.$props.layout == "formFloating"
      ? _c(
          "div",
          _vm._l(_vm.$props.items, function(widget, widgetIndex) {
            return widget.show
              ? _c(
                  "div",
                  {
                    key: widget.id,
                    staticClass:
                      "form-group mgContainer-formFloating row mg-component",
                    class: [
                      widget.mgValidation == "error" ? "has-error" : "",
                      widget.rowClass
                    ].concat(_vm.highlights[widgetIndex] || [])
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "col-12 mg-component-wrapper" },
                      [
                        _c("mg-component", {
                          staticClass: "control-input",
                          class: !_vm.localData[widget.$dataPath] && "blank",
                          attrs: { config: widget }
                        }),
                        _vm._v(" "),
                        _vm.$props.showTitles
                          ? _c(
                              "label",
                              {
                                staticClass: "col-form-label text-left col-sm-3"
                              },
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
                              widget.showTitle || _vm.$props.showTitles
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
      : _vm.$props.layout == "columns"
      ? _c("div", [
          _c(
            "table",
            {
              staticClass: "mg-container",
              class: _vm.$props.border
                ? "table table-bordered"
                : "mg-container-columns-no-border",
              staticStyle: { width: "100%" }
            },
            [
              _vm.$props.columnHeaders
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
                  _vm._l(_vm.$props.items, function(widget, widgetIndex) {
                    return widget.show
                      ? _c(
                          "td",
                          {
                            key: widget.id,
                            staticClass: "mg-component-wrapper",
                            class: [
                              widget.mgValidation == "error" ? "has-error" : "",
                              widget.rowClass
                            ].concat(_vm.highlights[widgetIndex] || [])
                          },
                          [
                            _c("mg-component", {
                              ref: widgetIndex,
                              refInFor: true,
                              attrs: { config: widget }
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
      : _vm.$props.layout == "query"
      ? _c("div", [
          _c(
            "div",
            { staticClass: "mg-container mg-container-query" },
            _vm._l(_vm.$props.items, function(rowWidget) {
              return _c("div", { key: rowWidget.id }, [
                rowWidget.type == "mgContainer" && rowWidget.layout == "query-row"
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(rowWidget.items, function(colWidget) {
                        return _c(
                          "div",
                          {
                            key: colWidget.id,
                            staticClass: "col mg-component mg-component-wrapper"
                          },
                          [
                            _c("mg-component", {
                              ref: _vm.widgetIndex,
                              refInFor: true,
                              attrs: { config: colWidget }
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
                _vm._s(_vm.$props.layout || "Unspecified") +
                '"\n\t\t'
            ),
            _c("pre", [_vm._v(_vm._s(_vm.$props))])
          ])
        ])
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = function (inject) {
      if (!inject) return
      inject("data-v-073eab1a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* formClass > .titles-above {{{ */\n.mg-container.titles-above > .form-group,\n.mg-container.titles-above > .form-group,\n.mg-container.titles-above > .card > .card-body > .form-group,\n.mg-container.titles-above > .card > .card-body > .form-group {\n\tdisplay: block;\n}\n.mg-container.titles-above > .form-group > .col-form-label,\n.mg-container.titles-above > .form-group > .col-form-value,\n.mg-container.titles-above > .card > .card-body > .form-group > .col-form-label,\n.mg-container.titles-above > .card > .card-body > .form-group > .col-form-value {\n\twidth: 100%;\n\tmax-width: none;\n}\n/* }}} */\n\n/* Card layout {{{ */\n/* Collapsable card {{{ */\n.mg-container.card.card-collapsable {\n\ttransition: all 0.2s ease-in;\n}\n.mg-container.card.card-collapsable .card-header {\n\tcursor: pointer;\n}\n.mg-container.card.card-collapsable .card-header::after {\n\tfont-family: \"Font Awesome 5 Pro\";\n\tcontent: '\\f054';\n\tfloat: right;\n\ttransition: transform 0.4s;\n}\n.mg-container.card.card-collapsable:not(.card-collapsed) .card-header::after {\n\ttransform: rotate(90deg);\n}\n\n\n/* Collapsed card {{{ */\n.mg-container.card.card-collapsable.card-collapsed {\n\tbox-shadow: none;\n\tborder-bottom: none;\n\tmargin-bottom: 0px;\n}\n.mg-container.card.card-collapsable.card-collapsed .card-body {\n\tdisplay: none;\n}\n/* }}} */\n/* }}} */\n\n/* Card verbs {{{ */\n.mg-container.card .card-header .card-verbs {\n\tposition: absolute;\n\tright: 15px;\n\ttop: 10px;\n\tfont-size: 20px;\n}\n.mg-container.card .card-header .card-verbs > a {\n\tcolor: #999;\n\tpadding: 5px;\n}\n.mg-container.card .card-header .card-verbs > a:hover {\n\tcolor: #000;\n}\n/* }}} */\n/* }}} */\n\n/* formFloating {{{ */\n.mgContainer-formFloating > .col-12 {\n\tposition: relative;\n\tline-height: 14px;\n\tmargin: 0 0px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n.mgContainer-formFloating > .col-12 > .control-input {\n\theight: 45px;\n\tpadding-top: 8px;\n\tpadding-bottom: 2px;\n\tpadding-left: 2px;\n\tpadding-right: 12px;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n\tcolor: #333333;\n\tbackground-color: #ffffff;\n\tbackground-image: none;\n\toutline: none;\n\t/* border: 1px solid rgba(120, 120, 120, 0.5);\n\t*/\n\tborder: none;\n\tborder-bottom: 1px solid #bbb;\n\t-moz-box-shadow: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tborder-radius: 0;\n\tposition: relative;\n}\n.mgContainer-formFloating > .col-12 > .control-input.blank + .col-form-label {\n\ttransform: translateY(0px);\n\tcolor: #bbb;\n\tfont-size: 15px;\n\tfont-weight: 100;\n\topacity: 1;\n}\n.mgContainer-formFloating > .col-12 > .control-input.control-input:focus + .col-form-label {\n\ttransform: translateY(-21px);\n\tcolor: #66afe9;\n\tfont-size: 14px;\n\topacity: 1;\n\tfont-weight: 100;\n\tbackground-color: white;\n}\n.mgContainer-formFloating > .col-12 > .col-form-label {\n\tcolor: #aaa;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tposition: absolute;\n\tz-index: 2;\n\tleft: 2px;\n\ttop: 16px;\n\tpadding: 0 0px;\n\tpointer-events: none;\n\tbackground: white;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-21px);\n\tfont-weight: 500;\n}\n/* }}} */\n\n/* Columns layout {{{ */\n.mg-container.mg-container-columns-no-border th,\n.mg-container.mg-container-columns-no-border td {\n\tpadding: 5px;\n}\n/* }}} */\n\n/* Query layout {{{ */\n.mg-container.mg-container-query .row {\n\tdisplay: block;\n}\n.mg-container.mg-container-query .col {\n\tdisplay: inline-flex;\n\twidth: 200px;\n\theight: 35px;\n\tmin-width: 200px;\n\tmargin-left: 30px;\n\tmargin-bottom: 10px;\n\tmax-width: 400px;\n\tposition: relative;\n\talign-items: center;\n\tbox-shadow: 1px 3px 5px 0px rgba(50, 50, 50, 0.75);\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\theight: 38px;\n\tpadding: 5px 15px;\n\tbackground: #FFF;\n}\n\n/* Query > Background color scale {{{ */\n.mg-container.mg-container-query .col:nth-child(1) {\n\tbackground: #104E8B;\n}\n.mg-container.mg-container-query .col:nth-child(2) {\n\tbackground: #1874CD;\n}\n.mg-container.mg-container-query .col:nth-child(3) {\n\tbackground: #1C86EE;\n}\n/* }}} */\n\n/* Query > Connecting lines {{{ */\n/* Vertical */\n.mg-container.mg-container-query .row::before {\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 4px;\n\ttop: 17px;\n\tbottom: 30px;\n}\n\n/* Horizontal */\n.mg-container.mg-container-query .col::before {\n\tleft: -30px;\n\theight: 4px;\n\ttop: calc(50% - 2px);\n\twidth: 30px;\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n}\n/* }}} */\n\n/* Query > Basic Inputs {{{ */\n.mg-container.mg-container-query .col input {\n\tbackground: transparent;\n\tborder: 1px solid transparent;\n\tcolor: #FFF;\n\theight: 1.8em;\n\tborder-radius: 0px;\n}\n.mg-container.mg-container-query .col input[type=text] {\n\tborder-bottom: 1px solid #CCC;\n}\n.mg-container.mg-container-query .col input[type=number] {\n\ttext-align: center;\n}\n.mg-container.mg-container-query .col input:focus {\n\tbox-shadow: none;\n\tborder: 1px solid #CCC;\n}\n/* }}} */\n\n/* Query > Buttons {{{ */\n.mg-container.mg-container-query .col .btn {\n\tbox-shadow: none;\n\tpadding: 1px 5px;\n\tbackground: transparent;\n\tborder: 1px solid #003e7b;\n}\n.mg-container.mg-container-query .col .btn,\n.mg-container.mg-container-query .col svg {\n\topacity: 0.2;\n\ttransition: opacity 0.5s;\n}\n.mg-container.mg-container-query .row:hover .col .btn,\n.mg-container.mg-container-query .row:hover .col svg {\n\topacity: 1;\n}\n.mg-container.mg-container-query .col .vs__clear {\n\tdisplay: none;\n}\n/* }}} */\n\n/* Query > Dropdowns {{{ */\n.mg-container.mg-container-query .v-select {\n\twidth: 100%;\n}\n.mg-container.mg-container-query .v-select,\n.mg-container.mg-container-query .v-select .vs--searchable .vs__dropdown-toggle,\n.mg-container.mg-container-query .v-select .vs__selected,\n.mg-container.mg-container-query .v-select input,\n.mg-container.mg-container-query .v-select .vs__actions {\n\tcursor: pointer !important;\n}\n.mg-container.mg-container-query .v-select .vs__dropdown-toggle {\n\tborder: none;\n}\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\tcolor: #FFF;\n}\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\ttop: 3px;\n}\n.mg-container.mg-container-query .col .v-select .vs__actions svg,\n.mg-container.mg-container-query .col .v-select .vs__deselect {\n\tstroke: #FFF;\n\tfill: #FFF;\n}\n.mg-container.mg-container-query .col .v-select.mg-choice-tags .vs__selected-options .vs__selected {\n\tbackground-color: #5bc0de;\n\tborder-radius: 10px;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tline-height: 1rem;\n\tmin-width: 10px;\n\tpadding: 1px 10px;\n\ttext-align: center;\n\tvertical-align: middle;\n\twhite-space: nowrap;\n\tborder: none;\n}\n/* }}} */\n\n/* Query > Toggle {{{ */\n.mg-container.mg-container-query .col .vue-js-switch {\n\tmargin: auto;\n\theight: 10px;\n\ttop: -5px;\n}\n/* }}} */\n/* }}} */\n\n/* Misc utility types {{{ */\n.mg-form .help-block {\n\tfont-size: 80%;\n\tcolor: #6c757d !important;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgContainer.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgTA,kCAAA;AACA;;;;CAIA,cAAA;AACA;AAEA;;;;CAIA,WAAA;CACA,eAAA;AACA;AACA,QAAA;;AAEA,oBAAA;AACA,yBAAA;AACA;CACA,4BAAA;AACA;AAEA;CACA,eAAA;AACA;AAEA;CACA,iCAAA;CACA,gBAAA;CACA,YAAA;CACA,0BAAA;AACA;AAEA;CACA,wBAAA;AACA;;;AAGA,uBAAA;AACA;CACA,gBAAA;CACA,mBAAA;CACA,kBAAA;AACA;AAEA;CACA,aAAA;AACA;AACA,QAAA;AACA,QAAA;;AAEA,mBAAA;AACA;CACA,kBAAA;CACA,WAAA;CACA,SAAA;CACA,eAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;AACA;AAEA;CACA,WAAA;AACA;AACA,QAAA;AACA,QAAA;;AAEA,qBAAA;AACA;CACA,kBAAA;CACA,iBAAA;CACA,aAAA;CACA,qBAAA;CACA,WAAA;AACA;AAEA;CACA,YAAA;CACA,gBAAA;CACA,mBAAA;CACA,iBAAA;CACA,mBAAA;CACA,eAAA;CACA,uBAAA;CACA,cAAA;CACA,yBAAA;CACA,sBAAA;CACA,aAAA;CACA;EACA;CACA,YAAA;CACA,6BAAA;CACA,qBAAA;CACA,wBAAA;CACA,gBAAA;CACA,gBAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;CACA,WAAA;CACA,eAAA;CACA,gBAAA;CACA,UAAA;AACA;AAEA;CACA,4BAAA;CACA,cAAA;CACA,eAAA;CACA,UAAA;CACA,gBAAA;CACA,uBAAA;AACA;AAEA;CACA,WAAA;CACA,qBAAA;CACA,eAAA;CACA,kBAAA;CACA,UAAA;CACA,SAAA;CACA,SAAA;CACA,cAAA;CACA,oBAAA;CACA,iBAAA;CACA,0BAAA;CACA,4BAAA;CACA,gBAAA;AACA;AACA,QAAA;;AAEA,uBAAA;AACA;;CAEA,YAAA;AACA;AACA,QAAA;;AAEA,qBAAA;AACA;CACA,cAAA;AACA;AAEA;CACA,oBAAA;CACA,YAAA;CACA,YAAA;CACA,gBAAA;CACA,iBAAA;CACA,mBAAA;CACA,gBAAA;CACA,kBAAA;CACA,mBAAA;CACA,kDAAA;CACA,kBAAA;CACA,WAAA;CACA,YAAA;CACA,iBAAA;CACA,gBAAA;AACA;;AAEA,uCAAA;AACA;CACA,mBAAA;AACA;AAEA;CACA,mBAAA;AACA;AAEA;CACA,mBAAA;AACA;AACA,QAAA;;AAEA,iCAAA;AACA,aAAA;AACA;CACA,sBAAA;CACA,WAAA;CACA,cAAA;CACA,kBAAA;CACA,UAAA;CACA,SAAA;CACA,YAAA;AACA;;AAEA,eAAA;AACA;CACA,WAAA;CACA,WAAA;CACA,oBAAA;CACA,WAAA;CACA,sBAAA;CACA,WAAA;CACA,cAAA;CACA,kBAAA;AACA;AACA,QAAA;;AAEA,6BAAA;AACA;CACA,uBAAA;CACA,6BAAA;CACA,WAAA;CACA,aAAA;CACA,kBAAA;AACA;AAEA;CACA,6BAAA;AACA;AAEA;CACA,kBAAA;AACA;AAEA;CACA,gBAAA;CACA,sBAAA;AACA;AACA,QAAA;;AAEA,wBAAA;AACA;CACA,gBAAA;CACA,gBAAA;CACA,uBAAA;CACA,yBAAA;AACA;AAEA;;CAEA,YAAA;CACA,wBAAA;AACA;AAEA;;CAEA,UAAA;AACA;AAEA;CACA,aAAA;AACA;AACA,QAAA;;AAEA,0BAAA;AACA;CACA,WAAA;AACA;AAEA;;;;;CAKA,0BAAA;AACA;AAEA;CACA,YAAA;AACA;AAEA;CACA,WAAA;AACA;AAEA;CACA,QAAA;AACA;AAEA;;CAEA,YAAA;CACA,UAAA;AACA;AAEA;CACA,yBAAA;CACA,mBAAA;CACA,WAAA;CACA,qBAAA;CACA,eAAA;CACA,iBAAA;CACA,eAAA;CACA,iBAAA;CACA,kBAAA;CACA,sBAAA;CACA,mBAAA;CACA,YAAA;AACA;AACA,QAAA;;AAEA,uBAAA;AACA;CACA,YAAA;CACA,YAAA;CACA,SAAA;AACA;AACA,QAAA;AACA,QAAA;;AAEA,2BAAA;AACA;CACA,cAAA;CACA,yBAAA;AACA;AACA,QAAA","file":"mgContainer.vue","sourcesContent":["<script>\n/**\n* MacGyver component loader\n* This is a meta component that loads other dynamic components as an array\n*/\nexport default app.mgComponent('mgContainer', {\n\tinject: {\n\t\t$mgForm: {from: '$mgForm'},\n\t\t$mgFormEditor: {from: '$mgFormEditor', default: false},\n\t},\n\tmeta: {\n\t\ttitle: 'Container layout',\n\t\ticon: 'far fa-th-large',\n\t\tcategory: 'Layout',\n\t\tpreferId: false,\n\t},\n\tprops: {\n\t\tlayout: {\n\t\t\ttype: 'mgChoiceRadio',\n\t\t\ttitle: 'Layout profile',\n\t\t\thelp: 'How to layout child elements',\n\t\t\tdefault: 'form',\n\t\t\tenum: [\n\t\t\t\t{id: 'form', title: 'Simple form layout'},\n\t\t\t\t{id: 'formFloating', title: 'Form with floating labels'},\n\t\t\t\t{id: 'card', title: 'Card based layout'},\n\t\t\t\t{id: 'columns', title: 'Vertical column layout'},\n\t\t\t\t{id: 'query', title: 'Query constructor'},\n\t\t\t],\n\t\t},\n\t\tformClass: {\n\t\t\ttype: 'mgChoiceDropdown',\n\t\t\ttitle: 'Form style',\n\t\t\tshowIf: {layout: {$in: ['form', 'card']}},\n\t\t\tdefault: 'normal',\n\t\t\tenum: [\n\t\t\t\t{id: 'normal', title: 'Normal'},\n\t\t\t\t{id: 'titles-above', title: 'Titles above'},\n\t\t\t],\n\t\t},\n\t\ttitle: {type: 'mgText', showIf: {layout: 'card'}},\n\t\tshowTitles: {type: 'mgToggle', default: true, help: 'Show titles for fields', showIf: {layout: {$in: ['form', 'card']}}},\n\t\tcolumnHeaders: {type: 'mgToggle', default: false, help: 'Show column headers', showIf: \"layout == 'columns'\"},\n\t\tcollapsable: {type: 'mgToggle', default: false, help: 'This card can be hidden', showIf: \"layout == 'card'\"},\n\t\tcollapsed: {type: 'mgToggle', default: false, help: 'This card is collapsed by default', showIf: \"layout == 'card'\"},\n\t\tborder: {type: 'mgToggle', default: true, help: 'Show a border around the container', showIf: \"layout == 'columns'\"},\n\t\tverbs: {\n\t\t\ttype: 'mgTable',\n\t\t\tadvanced: true,\n\t\t\tshowIf: \"layout == 'card'\",\n\t\t\titems: [\n\t\t\t\t{id: 'icon', type: 'mgIcon'},\n\t\t\t\t{id: 'tooltip', type: 'mgText'},\n\t\t\t\t{id: 'class', type: 'mgText'},\n\t\t\t\t{id: 'action', type: 'mgText'},\n\t\t\t],\n\t\t},\n\n\t\titems: {type: 'mgAlert', vueType: 'array', text: 'Use the editor to define child widgets'}, // Child items\n\t},\n\tchildProps: {\n\t\thelp: {type: 'mgText', title: 'Help text', help: 'Optional help text for the item - just like what you are reading now'},\n\t\tshowTitle: {type: 'mgToggle', default: true, title: 'Show Title', help: 'Whether to show the side title for this element'},\n\t\ttitle: {type: 'mgText', title: 'Title'},\n\t\trowClass: {type: 'mgChoiceDropdown', title: 'Styling', help: 'Additional styling to apply to the widget', default: '', advanced: true, enum: [\n\t\t\t{id: '', title: 'Normal'},\n\t\t\t{id: 'mgContainerRowLarge', title: 'Large text'},\n\t\t]},\n\t\tonChange: {type: 'string', title: 'Change action', help: 'Action to trigger when the value of this component changes', advanced: true},\n\t\tshow: {type: 'mgToggle', default: true, advanced: true, help: 'Whether the item is visible by default'},\n\t\tshowIf: {type: 'mgCode', syntax: 'text', advanced: true, help: 'A simple equality expression or Sift object to deteremine visibility'},\n\t},\n\tdata() { return {\n\t\thighlights: {}, // Lookup of extra classes to add to widgets, each key is the array offset of the widget within this container, the value is an array of classes to add\n\t\tlocalData: {}, // Lookup of immediate child data values, used when `$props.layout == 'formFloating'`\n\t}},\n\tmounted() {\n\t\tif (this.$props.collapsable) {\n\t\t\tvar $card = $(this.$el).find('.card').first();\n\n\t\t\t$card.find('.card-header').first().on('click', ()=> {\n\t\t\t\tvar $body = $(this.$el).find('.card-body');\n\t\t\t\tif ($card.hasClass('card-collapsed')) {\n\t\t\t\t\t$body.slideDown({complete: ()=> $card.removeClass('card-collapsed')});\n\t\t\t\t} else {\n\t\t\t\t\t$body.slideUp({complete: ()=> $card.addClass('card-collapsed')});\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\tif (this.$props.layout == 'formFloating') {\n\t\t\t// When in floating mode we need to keep track of child data so we copy its value into our `localData` object lookup\n\t\t\tthis.$mgForm.$on('changeItem', v => { // Bind to parent form handler\n\t\t\t\tif (this.$props.items.some(item => item.$dataPath == v.path)) { // Is this widget one of our immediate children?\n\t\t\t\t\tthis.$set(this.localData, v.path, v.value); // Copy its data against our local copy\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t},\n\tmethods: {\n\t\t/**\n\t\t* Emit an event passing this container as a scope\n\t\t* This is really just a wrapper to be able to pass this VueComponent to mgContainer.* emitters\n\t\t* @param {string} eventName Event to emit\n\t\t* @param {string} specPath The widget specPath\n\t\t* @param {number} widgetIndex The widget sending the message\n\t\t*/\n\t\tcomponentEvent(eventName, specPath, widgetIndex, vueEvent) {\n\t\t\tthis.$mgForm.$emit(eventName, this, specPath, widgetIndex, vueEvent);\n\t\t},\n\n\n\t\t/**\n\t\t* Find the child index by its component\n\t\t* This works like findIndex only with Magyver components, ignoring all non-mg children when computing the index\n\t\t* @param {VueComponent} child The child offset to find\n\t\t* @returns {number} The offset of the component or boolean `false`\n\t\t*/\n\t\tfindChildIndex(child) {\n\t\t\tvar result = _(this.$refs)\n\t\t\t\t.map(v => v[0]) // Dynamic refs always end up as an array of 1 item, so unpack that\n\t\t\t\t.reduce((t, v, i) => {\n\t\t\t\t\tif (t.found) { // Already found the child\n\t\t\t\t\t\treturn t;\n\t\t\t\t\t} else if (v._uid == child._uid) { // Found by direct UID\n\t\t\t\t\t\treturn {...t, found: true};\n\t\t\t\t\t} else if (v.$children && v.$children.length == 1 && v.$children[0]._uid == child._uid) { // Check into mgComponent wrappers\n\t\t\t\t\t\treturn {...t, found: true};\n\t\t\t\t\t} else if (v.$mgForm) { // Is an mgComponent {\n\t\t\t\t\t\treturn {...t, mgIndex: t.mgIndex + 1};\n\t\t\t\t\t} else { // Implied else - regular Vue component - skip incrementing when calculating the offset\n\t\t\t\t\t\treturn t;\n\t\t\t\t\t}\n\t\t\t\t}, {found: false, mgIndex: 0});\n\n\t\t\treturn (result.found ? result.mgIndex : false);\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<!-- Layout: form {{{ -->\n\t<div\n\t\tv-if=\"$props.layout == 'form' || $props.layout === undefined\"\n\t\tclass=\"mg-container\"\n\t\t:class=\"$props.formClass\"\n\t>\n\t\t<div\n\t\t\tv-for=\"(widget, widgetIndex) in $props.items\"\n\t\t\t:key=\"widget.id\"\n\t\t\tv-if=\"widget.show\"\n\t\t\tclass=\"form-group row mg-component\"\n\t\t\t:class=\"[widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass].concat(highlights[widgetIndex] || [])\"\n\t\t>\n\t\t\t<label v-if=\"widget.showTitle || $props.showTitles\" class=\"col-form-label text-left col-sm-3\">\n\t\t\t\t{{widget.title}}\n\t\t\t</label>\n\t\t\t<div class=\"col-form-value mg-component-wrapper\" :class=\"widget.showTitle || $props.showTitles ? 'col-sm-9' : 'col-sm-12'\">\n\t\t\t\t<mg-component\n\t\t\t\t\t:ref=\"widgetIndex\"\n\t\t\t\t\t:config=\"widget\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t</div>\n\t</div>\n\t<!-- }}} -->\n\t<!-- Layout: card {{{ -->\n\t<div\n\t\tv-else-if=\"$props.layout == 'card'\"\n\t\tclass=\"mg-container\"\n\t\t:class=\"$props.formClass\"\n\t>\n\t\t<div class=\"card mg-container\" :class=\"{'card-collapsable': $props.collapsable, 'card-collapsed': $props.collapsed}\">\n\t\t\t<div v-if=\"$props.title || ($props.verbs && $props.verbs.length)\" class=\"card-header\">\n\t\t\t\t{{$props.title}}\n\t\t\t\t<div v-if=\"$props.verbs && $props.verbs.length\" class=\"card-verbs\">\n\t\t\t\t\t<a\n\t\t\t\t\t\tv-for=\"(verb, verbIndex) in $props.verbs\"\n\t\t\t\t\t\t:key=\"verbIndex\"\n\t\t\t\t\t\t:class=\"[verb.class, verb.icon]\"\n\t\t\t\t\t\tv-tooltip=\"verb.tooltip\"\n\t\t\t\t\t\t@click=\"$mgForm.run(form, verb.action)\"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div\n\t\t\t\t\tv-for=\"(widget, widgetIndex) in $props.items\"\n\t\t\t\t\t:key=\"widget.id\"\n\t\t\t\t\tv-if=\"widget.show\"\n\t\t\t\t\tclass=\"form-group row mg-component\"\n\t\t\t\t\t:class=\"[widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass].concat(highlights[widgetIndex] || [])\"\n\t\t\t\t\t@click=\"componentEvent('mgContainer.click', widget.$specPath, widgetIndex, $event)\"\n\t\t\t\t\t@mouseenter=\"componentEvent('mgContainer.mouseEnter', widget.$specPath, widgetIndex, $event)\"\n\t\t\t\t\t@mouseleave=\"componentEvent('mgContainer.mouseLeave', widget.$specPath, widgetIndex, $event)\"\n\t\t\t\t>\n\t\t\t\t\t<mg-form-editor-controls\n\t\t\t\t\t\tv-if=\"$mgFormEditor\"\n\t\t\t\t\t\tv-show=\"highlights[widgetIndex] && highlights[widgetIndex].some(c => c == 'editHover' || c == 'editEditing')\"\n\t\t\t\t\t\t:config=\"widget\"\n\t\t\t\t\t/>\n\t\t\t\t\t<label v-if=\"widget.showTitle || $props.showTitles\" class=\"col-form-label text-left col-sm-3\">\n\t\t\t\t\t\t{{widget.title}}\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-form-value mg-component-wrapper\" :class=\"widget.showTitle || $props.showTitles ? 'col-sm-9' : 'col-sm-12'\">\n\t\t\t\t\t\t<mg-component\n\t\t\t\t\t\t\t:ref=\"widgetIndex\"\n\t\t\t\t\t\t\t:config=\"widget\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- }}} -->\n\t<!-- Layout: formFloating {{{ -->\n\t<div v-else-if=\"$props.layout == 'formFloating'\">\n\t\t<div\n\t\t\tv-for=\"(widget, widgetIndex) in $props.items\"\n\t\t\t:key=\"widget.id\"\n\t\t\tv-if=\"widget.show\"\n\t\t\tclass=\"form-group mgContainer-formFloating row mg-component\"\n\t\t\t:class=\"[widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass].concat(highlights[widgetIndex] || [])\"\n\t\t>\n\t\t\t<div class=\"col-12 mg-component-wrapper\">\n\t\t\t\t<mg-component\n\t\t\t\t\t:config=\"widget\"\n\t\t\t\t\tclass=\"control-input\"\n\t\t\t\t\t:class=\"!localData[widget.$dataPath] && 'blank'\"\n\t\t\t\t/>\n\t\t\t\t<label v-if=\"$props.showTitles\" class=\"col-form-label text-left col-sm-3\">\n\t\t\t\t\t{{widget.title}}\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"help-block\" v-if=\"widget.help\" :class=\"widget.showTitle || $props.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'\">{{widget.help}}</div>\n\t\t</div>\n\t</div>\n\t<!-- }}} -->\n\t<!-- Layout: columns {{{ -->\n\t<div v-else-if=\"$props.layout == 'columns'\">\n\t\t<table class=\"mg-container\" :class=\"$props.border ? 'table table-bordered' : 'mg-container-columns-no-border'\" style=\"width: 100%\">\n\t\t\t<thead v-if=\"$props.columnHeaders\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th\n\t\t\t\t\t\tv-for=\"widget in config.items\"\n\t\t\t\t\t\t:key=\"widget.id\"\n\t\t\t\t\t\tv-if=\"widget.show\"\n\t\t\t\t\t>{{widget.title}}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td\n\t\t\t\t\t\tv-for=\"(widget, widgetIndex) in $props.items\"\n\t\t\t\t\t\t:key=\"widget.id\"\n\t\t\t\t\t\tv-if=\"widget.show\"\n\t\t\t\t\t\tclass=\"mg-component-wrapper\"\n\t\t\t\t\t\t:class=\"[widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass].concat(highlights[widgetIndex] || [])\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<mg-component\n\t\t\t\t\t\t\t:ref=\"widgetIndex\"\n\t\t\t\t\t\t\t:config=\"widget\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div class=\"help-block\" v-if=\"widget.help\">{{widget.help}}</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<!-- }}} -->\n\t<!-- Layout: query {{{ -->\n\t<div v-else-if=\"$props.layout == 'query'\">\n\t\t<div class=\"mg-container mg-container-query\">\n\t\t\t<div v-for=\"rowWidget in $props.items\" :key=\"rowWidget.id\">\n\t\t\t\t<div v-if=\"rowWidget.type == 'mgContainer' && rowWidget.layout == 'query-row'\" class=\"row\">\n\t\t\t\t\t<div v-for=\"colWidget in rowWidget.items\" :key=\"colWidget.id\" class=\"col mg-component mg-component-wrapper\">\n\t\t\t\t\t\t<mg-component\n\t\t\t\t\t\t\t:ref=\"widgetIndex\"\n\t\t\t\t\t\t\t:config=\"colWidget\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div v-else class=\"alert alert-danger\">\n\t\t\t\t\tAll children of mgContainer[layout=query] must match the mgContainer[layout=queryRow]\n\t\t\t\t\t<pre>{{widget}}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- }}} -->\n\t<!-- Layout: unknown {{{ -->\n\t<div v-else class=\"mg-container\">\n\t\t<div class=\"alert alert-danger\">\n\t\t\tUnsupported mgContainer layout \"{{$props.layout || 'Unspecified'}}\"\n\t\t\t<pre>{{$props}}</pre>\n\t\t</div>\n\t</div>\n\t<!-- }}} -->\n</template>\n\n<style>\n/* formClass > .titles-above {{{ */\n.mg-container.titles-above > .form-group,\n.mg-container.titles-above > .form-group,\n.mg-container.titles-above > .card > .card-body > .form-group,\n.mg-container.titles-above > .card > .card-body > .form-group {\n\tdisplay: block;\n}\n\n.mg-container.titles-above > .form-group > .col-form-label,\n.mg-container.titles-above > .form-group > .col-form-value,\n.mg-container.titles-above > .card > .card-body > .form-group > .col-form-label,\n.mg-container.titles-above > .card > .card-body > .form-group > .col-form-value {\n\twidth: 100%;\n\tmax-width: none;\n}\n/* }}} */\n\n/* Card layout {{{ */\n/* Collapsable card {{{ */\n.mg-container.card.card-collapsable {\n\ttransition: all 0.2s ease-in;\n}\n\n.mg-container.card.card-collapsable .card-header {\n\tcursor: pointer;\n}\n\n.mg-container.card.card-collapsable .card-header::after {\n\tfont-family: \"Font Awesome 5 Pro\";\n\tcontent: '\\f054';\n\tfloat: right;\n\ttransition: transform 0.4s;\n}\n\n.mg-container.card.card-collapsable:not(.card-collapsed) .card-header::after {\n\ttransform: rotate(90deg);\n}\n\n\n/* Collapsed card {{{ */\n.mg-container.card.card-collapsable.card-collapsed {\n\tbox-shadow: none;\n\tborder-bottom: none;\n\tmargin-bottom: 0px;\n}\n\n.mg-container.card.card-collapsable.card-collapsed .card-body {\n\tdisplay: none;\n}\n/* }}} */\n/* }}} */\n\n/* Card verbs {{{ */\n.mg-container.card .card-header .card-verbs {\n\tposition: absolute;\n\tright: 15px;\n\ttop: 10px;\n\tfont-size: 20px;\n}\n\n.mg-container.card .card-header .card-verbs > a {\n\tcolor: #999;\n\tpadding: 5px;\n}\n\n.mg-container.card .card-header .card-verbs > a:hover {\n\tcolor: #000;\n}\n/* }}} */\n/* }}} */\n\n/* formFloating {{{ */\n.mgContainer-formFloating > .col-12 {\n\tposition: relative;\n\tline-height: 14px;\n\tmargin: 0 0px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input {\n\theight: 45px;\n\tpadding-top: 8px;\n\tpadding-bottom: 2px;\n\tpadding-left: 2px;\n\tpadding-right: 12px;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n\tcolor: #333333;\n\tbackground-color: #ffffff;\n\tbackground-image: none;\n\toutline: none;\n\t/* border: 1px solid rgba(120, 120, 120, 0.5);\n\t*/\n\tborder: none;\n\tborder-bottom: 1px solid #bbb;\n\t-moz-box-shadow: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tborder-radius: 0;\n\tposition: relative;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input.blank + .col-form-label {\n\ttransform: translateY(0px);\n\tcolor: #bbb;\n\tfont-size: 15px;\n\tfont-weight: 100;\n\topacity: 1;\n}\n\n.mgContainer-formFloating > .col-12 > .control-input.control-input:focus + .col-form-label {\n\ttransform: translateY(-21px);\n\tcolor: #66afe9;\n\tfont-size: 14px;\n\topacity: 1;\n\tfont-weight: 100;\n\tbackground-color: white;\n}\n\n.mgContainer-formFloating > .col-12 > .col-form-label {\n\tcolor: #aaa;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tposition: absolute;\n\tz-index: 2;\n\tleft: 2px;\n\ttop: 16px;\n\tpadding: 0 0px;\n\tpointer-events: none;\n\tbackground: white;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-21px);\n\tfont-weight: 500;\n}\n/* }}} */\n\n/* Columns layout {{{ */\n.mg-container.mg-container-columns-no-border th,\n.mg-container.mg-container-columns-no-border td {\n\tpadding: 5px;\n}\n/* }}} */\n\n/* Query layout {{{ */\n.mg-container.mg-container-query .row {\n\tdisplay: block;\n}\n\n.mg-container.mg-container-query .col {\n\tdisplay: inline-flex;\n\twidth: 200px;\n\theight: 35px;\n\tmin-width: 200px;\n\tmargin-left: 30px;\n\tmargin-bottom: 10px;\n\tmax-width: 400px;\n\tposition: relative;\n\talign-items: center;\n\tbox-shadow: 1px 3px 5px 0px rgba(50, 50, 50, 0.75);\n\tborder-radius: 3px;\n\tcolor: #FFF;\n\theight: 38px;\n\tpadding: 5px 15px;\n\tbackground: #FFF;\n}\n\n/* Query > Background color scale {{{ */\n.mg-container.mg-container-query .col:nth-child(1) {\n\tbackground: #104E8B;\n}\n\n.mg-container.mg-container-query .col:nth-child(2) {\n\tbackground: #1874CD;\n}\n\n.mg-container.mg-container-query .col:nth-child(3) {\n\tbackground: #1C86EE;\n}\n/* }}} */\n\n/* Query > Connecting lines {{{ */\n/* Vertical */\n.mg-container.mg-container-query .row::before {\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 4px;\n\ttop: 17px;\n\tbottom: 30px;\n}\n\n/* Horizontal */\n.mg-container.mg-container-query .col::before {\n\tleft: -30px;\n\theight: 4px;\n\ttop: calc(50% - 2px);\n\twidth: 30px;\n\tbackground-color: #CCC;\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n}\n/* }}} */\n\n/* Query > Basic Inputs {{{ */\n.mg-container.mg-container-query .col input {\n\tbackground: transparent;\n\tborder: 1px solid transparent;\n\tcolor: #FFF;\n\theight: 1.8em;\n\tborder-radius: 0px;\n}\n\n.mg-container.mg-container-query .col input[type=text] {\n\tborder-bottom: 1px solid #CCC;\n}\n\n.mg-container.mg-container-query .col input[type=number] {\n\ttext-align: center;\n}\n\n.mg-container.mg-container-query .col input:focus {\n\tbox-shadow: none;\n\tborder: 1px solid #CCC;\n}\n/* }}} */\n\n/* Query > Buttons {{{ */\n.mg-container.mg-container-query .col .btn {\n\tbox-shadow: none;\n\tpadding: 1px 5px;\n\tbackground: transparent;\n\tborder: 1px solid #003e7b;\n}\n\n.mg-container.mg-container-query .col .btn,\n.mg-container.mg-container-query .col svg {\n\topacity: 0.2;\n\ttransition: opacity 0.5s;\n}\n\n.mg-container.mg-container-query .row:hover .col .btn,\n.mg-container.mg-container-query .row:hover .col svg {\n\topacity: 1;\n}\n\n.mg-container.mg-container-query .col .vs__clear {\n\tdisplay: none;\n}\n/* }}} */\n\n/* Query > Dropdowns {{{ */\n.mg-container.mg-container-query .v-select {\n\twidth: 100%;\n}\n\n.mg-container.mg-container-query .v-select,\n.mg-container.mg-container-query .v-select .vs--searchable .vs__dropdown-toggle,\n.mg-container.mg-container-query .v-select .vs__selected,\n.mg-container.mg-container-query .v-select input,\n.mg-container.mg-container-query .v-select .vs__actions {\n\tcursor: pointer !important;\n}\n\n.mg-container.mg-container-query .v-select .vs__dropdown-toggle {\n\tborder: none;\n}\n\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\tcolor: #FFF;\n}\n\n.mg-container.mg-container-query .col .v-select .vs__selected {\n\ttop: 3px;\n}\n\n.mg-container.mg-container-query .col .v-select .vs__actions svg,\n.mg-container.mg-container-query .col .v-select .vs__deselect {\n\tstroke: #FFF;\n\tfill: #FFF;\n}\n\n.mg-container.mg-container-query .col .v-select.mg-choice-tags .vs__selected-options .vs__selected {\n\tbackground-color: #5bc0de;\n\tborder-radius: 10px;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\tline-height: 1rem;\n\tmin-width: 10px;\n\tpadding: 1px 10px;\n\ttext-align: center;\n\tvertical-align: middle;\n\twhite-space: nowrap;\n\tborder: none;\n}\n/* }}} */\n\n/* Query > Toggle {{{ */\n.mg-container.mg-container-query .col .vue-js-switch {\n\tmargin: auto;\n\theight: 10px;\n\ttop: -5px;\n}\n/* }}} */\n/* }}} */\n\n/* Misc utility types {{{ */\n.mg-form .help-block {\n\tfont-size: 80%;\n\tcolor: #6c757d !important;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$f = undefined;
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$f = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgContainer = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$f
  });

  var moment = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
       module.exports = factory() ;
  }(commonjsGlobal, (function () {
      var hookCallback;

      function hooks() {
          return hookCallback.apply(null, arguments);
      }

      // This is done to register the method called with moment()
      // without creating circular dependencies.
      function setHookCallback(callback) {
          hookCallback = callback;
      }

      function isArray(input) {
          return (
              input instanceof Array ||
              Object.prototype.toString.call(input) === '[object Array]'
          );
      }

      function isObject(input) {
          // IE8 will treat undefined and null as object if it wasn't for
          // input != null
          return (
              input != null &&
              Object.prototype.toString.call(input) === '[object Object]'
          );
      }

      function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
      }

      function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
              return Object.getOwnPropertyNames(obj).length === 0;
          } else {
              var k;
              for (k in obj) {
                  if (hasOwnProp(obj, k)) {
                      return false;
                  }
              }
              return true;
          }
      }

      function isUndefined(input) {
          return input === void 0;
      }

      function isNumber(input) {
          return (
              typeof input === 'number' ||
              Object.prototype.toString.call(input) === '[object Number]'
          );
      }

      function isDate(input) {
          return (
              input instanceof Date ||
              Object.prototype.toString.call(input) === '[object Date]'
          );
      }

      function map(arr, fn) {
          var res = [],
              i;
          for (i = 0; i < arr.length; ++i) {
              res.push(fn(arr[i], i));
          }
          return res;
      }

      function extend(a, b) {
          for (var i in b) {
              if (hasOwnProp(b, i)) {
                  a[i] = b[i];
              }
          }

          if (hasOwnProp(b, 'toString')) {
              a.toString = b.toString;
          }

          if (hasOwnProp(b, 'valueOf')) {
              a.valueOf = b.valueOf;
          }

          return a;
      }

      function createUTC(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
          // We need to deep clone this object.
          return {
              empty: false,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: false,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: false,
              userInvalidated: false,
              iso: false,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: false,
              weekdayMismatch: false,
          };
      }

      function getParsingFlags(m) {
          if (m._pf == null) {
              m._pf = defaultParsingFlags();
          }
          return m._pf;
      }

      var some;
      if (Array.prototype.some) {
          some = Array.prototype.some;
      } else {
          some = function (fun) {
              var t = Object(this),
                  len = t.length >>> 0,
                  i;

              for (i = 0; i < len; i++) {
                  if (i in t && fun.call(this, t[i], i, t)) {
                      return true;
                  }
              }

              return false;
          };
      }

      function isValid(m) {
          if (m._isValid == null) {
              var flags = getParsingFlags(m),
                  parsedParts = some.call(flags.parsedDateParts, function (i) {
                      return i != null;
                  }),
                  isNowValid =
                      !isNaN(m._d.getTime()) &&
                      flags.overflow < 0 &&
                      !flags.empty &&
                      !flags.invalidEra &&
                      !flags.invalidMonth &&
                      !flags.invalidWeekday &&
                      !flags.weekdayMismatch &&
                      !flags.nullInput &&
                      !flags.invalidFormat &&
                      !flags.userInvalidated &&
                      (!flags.meridiem || (flags.meridiem && parsedParts));

              if (m._strict) {
                  isNowValid =
                      isNowValid &&
                      flags.charsLeftOver === 0 &&
                      flags.unusedTokens.length === 0 &&
                      flags.bigHour === undefined;
              }

              if (Object.isFrozen == null || !Object.isFrozen(m)) {
                  m._isValid = isNowValid;
              } else {
                  return isNowValid;
              }
          }
          return m._isValid;
      }

      function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
              extend(getParsingFlags(m), flags);
          } else {
              getParsingFlags(m).userInvalidated = true;
          }

          return m;
      }

      // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.
      var momentProperties = (hooks.momentProperties = []),
          updateInProgress = false;

      function copyConfig(to, from) {
          var i, prop, val;

          if (!isUndefined(from._isAMomentObject)) {
              to._isAMomentObject = from._isAMomentObject;
          }
          if (!isUndefined(from._i)) {
              to._i = from._i;
          }
          if (!isUndefined(from._f)) {
              to._f = from._f;
          }
          if (!isUndefined(from._l)) {
              to._l = from._l;
          }
          if (!isUndefined(from._strict)) {
              to._strict = from._strict;
          }
          if (!isUndefined(from._tzm)) {
              to._tzm = from._tzm;
          }
          if (!isUndefined(from._isUTC)) {
              to._isUTC = from._isUTC;
          }
          if (!isUndefined(from._offset)) {
              to._offset = from._offset;
          }
          if (!isUndefined(from._pf)) {
              to._pf = getParsingFlags(from);
          }
          if (!isUndefined(from._locale)) {
              to._locale = from._locale;
          }

          if (momentProperties.length > 0) {
              for (i = 0; i < momentProperties.length; i++) {
                  prop = momentProperties[i];
                  val = from[prop];
                  if (!isUndefined(val)) {
                      to[prop] = val;
                  }
              }
          }

          return to;
      }

      // Moment prototype object
      function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
              this._d = new Date(NaN);
          }
          // Prevent infinite loop in case updateOffset creates new moment
          // objects.
          if (updateInProgress === false) {
              updateInProgress = true;
              hooks.updateOffset(this);
              updateInProgress = false;
          }
      }

      function isMoment(obj) {
          return (
              obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
          );
      }

      function warn(msg) {
          if (
              hooks.suppressDeprecationWarnings === false &&
              typeof console !== 'undefined' &&
              console.warn
          ) {
              console.warn('Deprecation warning: ' + msg);
          }
      }

      function deprecate(msg, fn) {
          var firstTime = true;

          return extend(function () {
              if (hooks.deprecationHandler != null) {
                  hooks.deprecationHandler(null, msg);
              }
              if (firstTime) {
                  var args = [],
                      arg,
                      i,
                      key;
                  for (i = 0; i < arguments.length; i++) {
                      arg = '';
                      if (typeof arguments[i] === 'object') {
                          arg += '\n[' + i + '] ';
                          for (key in arguments[0]) {
                              if (hasOwnProp(arguments[0], key)) {
                                  arg += key + ': ' + arguments[0][key] + ', ';
                              }
                          }
                          arg = arg.slice(0, -2); // Remove trailing comma and space
                      } else {
                          arg = arguments[i];
                      }
                      args.push(arg);
                  }
                  warn(
                      msg +
                          '\nArguments: ' +
                          Array.prototype.slice.call(args).join('') +
                          '\n' +
                          new Error().stack
                  );
                  firstTime = false;
              }
              return fn.apply(this, arguments);
          }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
              warn(msg);
              deprecations[name] = true;
          }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
          return (
              (typeof Function !== 'undefined' && input instanceof Function) ||
              Object.prototype.toString.call(input) === '[object Function]'
          );
      }

      function set(config) {
          var prop, i;
          for (i in config) {
              if (hasOwnProp(config, i)) {
                  prop = config[i];
                  if (isFunction(prop)) {
                      this[i] = prop;
                  } else {
                      this['_' + i] = prop;
                  }
              }
          }
          this._config = config;
          // Lenient ordinal parsing accepts just a number in addition to
          // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
          // TODO: Remove "ordinalParse" fallback in next major release.
          this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                  '|' +
                  /\d{1,2}/.source
          );
      }

      function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig),
              prop;
          for (prop in childConfig) {
              if (hasOwnProp(childConfig, prop)) {
                  if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                      res[prop] = {};
                      extend(res[prop], parentConfig[prop]);
                      extend(res[prop], childConfig[prop]);
                  } else if (childConfig[prop] != null) {
                      res[prop] = childConfig[prop];
                  } else {
                      delete res[prop];
                  }
              }
          }
          for (prop in parentConfig) {
              if (
                  hasOwnProp(parentConfig, prop) &&
                  !hasOwnProp(childConfig, prop) &&
                  isObject(parentConfig[prop])
              ) {
                  // make sure changes to properties don't modify parent config
                  res[prop] = extend({}, res[prop]);
              }
          }
          return res;
      }

      function Locale(config) {
          if (config != null) {
              this.set(config);
          }
      }

      var keys;

      if (Object.keys) {
          keys = Object.keys;
      } else {
          keys = function (obj) {
              var i,
                  res = [];
              for (i in obj) {
                  if (hasOwnProp(obj, i)) {
                      res.push(i);
                  }
              }
              return res;
          };
      }

      var defaultCalendar = {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
      };

      function calendar(key, mom, now) {
          var output = this._calendar[key] || this._calendar['sameElse'];
          return isFunction(output) ? output.call(mom, now) : output;
      }

      function zeroFill(number, targetLength, forceSign) {
          var absNumber = '' + Math.abs(number),
              zerosToFill = targetLength - absNumber.length,
              sign = number >= 0;
          return (
              (sign ? (forceSign ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
              absNumber
          );
      }

      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          formatFunctions = {},
          formatTokenFunctions = {};

      // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }
      function addFormatToken(token, padded, ordinal, callback) {
          var func = callback;
          if (typeof callback === 'string') {
              func = function () {
                  return this[callback]();
              };
          }
          if (token) {
              formatTokenFunctions[token] = func;
          }
          if (padded) {
              formatTokenFunctions[padded[0]] = function () {
                  return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
              };
          }
          if (ordinal) {
              formatTokenFunctions[ordinal] = function () {
                  return this.localeData().ordinal(
                      func.apply(this, arguments),
                      token
                  );
              };
          }
      }

      function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
              return input.replace(/^\[|\]$/g, '');
          }
          return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
          var array = format.match(formattingTokens),
              i,
              length;

          for (i = 0, length = array.length; i < length; i++) {
              if (formatTokenFunctions[array[i]]) {
                  array[i] = formatTokenFunctions[array[i]];
              } else {
                  array[i] = removeFormattingTokens(array[i]);
              }
          }

          return function (mom) {
              var output = '',
                  i;
              for (i = 0; i < length; i++) {
                  output += isFunction(array[i])
                      ? array[i].call(mom, format)
                      : array[i];
              }
              return output;
          };
      }

      // format date using native date object
      function formatMoment(m, format) {
          if (!m.isValid()) {
              return m.localeData().invalidDate();
          }

          format = expandFormat(format, m.localeData());
          formatFunctions[format] =
              formatFunctions[format] || makeFormatFunction(format);

          return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
          var i = 5;

          function replaceLongDateFormatTokens(input) {
              return locale.longDateFormat(input) || input;
          }

          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format)) {
              format = format.replace(
                  localFormattingTokens,
                  replaceLongDateFormatTokens
              );
              localFormattingTokens.lastIndex = 0;
              i -= 1;
          }

          return format;
      }

      var defaultLongDateFormat = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
      };

      function longDateFormat(key) {
          var format = this._longDateFormat[key],
              formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
              return format;
          }

          this._longDateFormat[key] = formatUpper
              .match(formattingTokens)
              .map(function (tok) {
                  if (
                      tok === 'MMMM' ||
                      tok === 'MM' ||
                      tok === 'DD' ||
                      tok === 'dddd'
                  ) {
                      return tok.slice(1);
                  }
                  return tok;
              })
              .join('');

          return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
          return this._invalidDate;
      }

      var defaultOrdinal = '%d',
          defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
          return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          w: 'a week',
          ww: '%d weeks',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
      };

      function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output)
              ? output(number, withoutSuffix, string, isFuture)
              : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
          return typeof units === 'string'
              ? aliases[units] || aliases[units.toLowerCase()]
              : undefined;
      }

      function normalizeObjectUnits(inputObject) {
          var normalizedInput = {},
              normalizedProp,
              prop;

          for (prop in inputObject) {
              if (hasOwnProp(inputObject, prop)) {
                  normalizedProp = normalizeUnits(prop);
                  if (normalizedProp) {
                      normalizedInput[normalizedProp] = inputObject[prop];
                  }
              }
          }

          return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
          var units = [],
              u;
          for (u in unitsObj) {
              if (hasOwnProp(unitsObj, u)) {
                  units.push({ unit: u, priority: priorities[u] });
              }
          }
          units.sort(function (a, b) {
              return a.priority - b.priority;
          });
          return units;
      }

      function isLeapYear(year) {
          return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      }

      function absFloor(number) {
          if (number < 0) {
              // -0 -> 0
              return Math.ceil(number) || 0;
          } else {
              return Math.floor(number);
          }
      }

      function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion,
              value = 0;

          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
              value = absFloor(coercedNumber);
          }

          return value;
      }

      function makeGetSet(unit, keepTime) {
          return function (value) {
              if (value != null) {
                  set$1(this, unit, value);
                  hooks.updateOffset(this, keepTime);
                  return this;
              } else {
                  return get(this, unit);
              }
          };
      }

      function get(mom, unit) {
          return mom.isValid()
              ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
              : NaN;
      }

      function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
              if (
                  unit === 'FullYear' &&
                  isLeapYear(mom.year()) &&
                  mom.month() === 1 &&
                  mom.date() === 29
              ) {
                  value = toInt(value);
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                      value,
                      mom.month(),
                      daysInMonth(value, mom.month())
                  );
              } else {
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
              }
          }
      }

      // MOMENTS

      function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
              return this[units]();
          }
          return this;
      }

      function stringSet(units, value) {
          if (typeof units === 'object') {
              units = normalizeObjectUnits(units);
              var prioritized = getPrioritizedUnits(units),
                  i;
              for (i = 0; i < prioritized.length; i++) {
                  this[prioritized[i].unit](units[prioritized[i].unit]);
              }
          } else {
              units = normalizeUnits(units);
              if (isFunction(this[units])) {
                  return this[units](value);
              }
          }
          return this;
      }

      var match1 = /\d/, //       0 - 9
          match2 = /\d\d/, //      00 - 99
          match3 = /\d{3}/, //     000 - 999
          match4 = /\d{4}/, //    0000 - 9999
          match6 = /[+-]?\d{6}/, // -999999 - 999999
          match1to2 = /\d\d?/, //       0 - 99
          match3to4 = /\d\d\d\d?/, //     999 - 9999
          match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
          match1to3 = /\d{1,3}/, //       0 - 999
          match1to4 = /\d{1,4}/, //       0 - 9999
          match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
          matchUnsigned = /\d+/, //       0 - inf
          matchSigned = /[+-]?\d+/, //    -inf - inf
          matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
          matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
          matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
          // any word (or two) characters or numbers including two/three word month in arabic.
          // includes scottish gaelic two word and hyphenated months
          matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          regexes;

      regexes = {};

      function addRegexToken(token, regex, strictRegex) {
          regexes[token] = isFunction(regex)
              ? regex
              : function (isStrict, localeData) {
                    return isStrict && strictRegex ? strictRegex : regex;
                };
      }

      function getParseRegexForToken(token, config) {
          if (!hasOwnProp(regexes, token)) {
              return new RegExp(unescapeFormat(token));
          }

          return regexes[token](config._strict, config._locale);
      }

      // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
      function unescapeFormat(s) {
          return regexEscape(
              s
                  .replace('\\', '')
                  .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                      matched,
                      p1,
                      p2,
                      p3,
                      p4
                  ) {
                      return p1 || p2 || p3 || p4;
                  })
          );
      }

      function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
          var i,
              func = callback;
          if (typeof token === 'string') {
              token = [token];
          }
          if (isNumber(callback)) {
              func = function (input, array) {
                  array[callback] = toInt(input);
              };
          }
          for (i = 0; i < token.length; i++) {
              tokens[token[i]] = func;
          }
      }

      function addWeekParseToken(token, callback) {
          addParseToken(token, function (input, array, config, token) {
              config._w = config._w || {};
              callback(input, config._w, config, token);
          });
      }

      function addTimeToArrayFromToken(token, input, config) {
          if (input != null && hasOwnProp(tokens, token)) {
              tokens[token](input, config._a, config, token);
          }
      }

      var YEAR = 0,
          MONTH = 1,
          DATE = 2,
          HOUR = 3,
          MINUTE = 4,
          SECOND = 5,
          MILLISECOND = 6,
          WEEK = 7,
          WEEKDAY = 8;

      function mod(n, x) {
          return ((n % x) + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
      } else {
          indexOf = function (o) {
              // I know
              var i;
              for (i = 0; i < this.length; ++i) {
                  if (this[i] === o) {
                      return i;
                  }
              }
              return -1;
          };
      }

      function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
              return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1
              ? isLeapYear(year)
                  ? 29
                  : 28
              : 31 - ((modMonth % 7) % 2);
      }

      // FORMATTING

      addFormatToken('M', ['MM', 2], 'Mo', function () {
          return this.month() + 1;
      });

      addFormatToken('MMM', 0, 0, function (format) {
          return this.localeData().monthsShort(this, format);
      });

      addFormatToken('MMMM', 0, 0, function (format) {
          return this.localeData().months(this, format);
      });

      // ALIASES

      addUnitAlias('month', 'M');

      // PRIORITY

      addUnitPriority('month', 8);

      // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
          return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
          return locale.monthsRegex(isStrict);
      });

      addParseToken(['M', 'MM'], function (input, array) {
          array[MONTH] = toInt(input) - 1;
      });

      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
          var month = config._locale.monthsParse(input, token, config._strict);
          // if we didn't find a month name, mark the date as invalid.
          if (month != null) {
              array[MONTH] = month;
          } else {
              getParsingFlags(config).invalidMonth = input;
          }
      });

      // LOCALES

      var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_'
          ),
          defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
              '_'
          ),
          MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          defaultMonthsShortRegex = matchWord,
          defaultMonthsRegex = matchWord;

      function localeMonths(m, format) {
          if (!m) {
              return isArray(this._months)
                  ? this._months
                  : this._months['standalone'];
          }
          return isArray(this._months)
              ? this._months[m.month()]
              : this._months[
                    (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                        ? 'format'
                        : 'standalone'
                ][m.month()];
      }

      function localeMonthsShort(m, format) {
          if (!m) {
              return isArray(this._monthsShort)
                  ? this._monthsShort
                  : this._monthsShort['standalone'];
          }
          return isArray(this._monthsShort)
              ? this._monthsShort[m.month()]
              : this._monthsShort[
                    MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
                ][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
          var i,
              ii,
              mom,
              llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
              // this is not used
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
              for (i = 0; i < 12; ++i) {
                  mom = createUTC([2000, i]);
                  this._shortMonthsParse[i] = this.monthsShort(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
              }
          }

          if (strict) {
              if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              }
          } else {
              if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              }
          }
      }

      function localeMonthsParse(monthName, format, strict) {
          var i, mom, regex;

          if (this._monthsParseExact) {
              return handleStrictParse.call(this, monthName, format, strict);
          }

          if (!this._monthsParse) {
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
          }

          // TODO: add sorting
          // Sorting makes sure if one month (or abbr) is a prefix of another
          // see sorting in computeMonthsParse
          for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              if (strict && !this._longMonthsParse[i]) {
                  this._longMonthsParse[i] = new RegExp(
                      '^' + this.months(mom, '').replace('.', '') + '$',
                      'i'
                  );
                  this._shortMonthsParse[i] = new RegExp(
                      '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                      'i'
                  );
              }
              if (!strict && !this._monthsParse[i]) {
                  regex =
                      '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                  this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (
                  strict &&
                  format === 'MMMM' &&
                  this._longMonthsParse[i].test(monthName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'MMM' &&
                  this._shortMonthsParse[i].test(monthName)
              ) {
                  return i;
              } else if (!strict && this._monthsParse[i].test(monthName)) {
                  return i;
              }
          }
      }

      // MOMENTS

      function setMonth(mom, value) {
          var dayOfMonth;

          if (!mom.isValid()) {
              // No op
              return mom;
          }

          if (typeof value === 'string') {
              if (/^\d+$/.test(value)) {
                  value = toInt(value);
              } else {
                  value = mom.localeData().monthsParse(value);
                  // TODO: Another silent failure?
                  if (!isNumber(value)) {
                      return mom;
                  }
              }
          }

          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
          return mom;
      }

      function getSetMonth(value) {
          if (value != null) {
              setMonth(this, value);
              hooks.updateOffset(this, true);
              return this;
          } else {
              return get(this, 'Month');
          }
      }

      function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
      }

      function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
              }
              if (isStrict) {
                  return this._monthsShortStrictRegex;
              } else {
                  return this._monthsShortRegex;
              }
          } else {
              if (!hasOwnProp(this, '_monthsShortRegex')) {
                  this._monthsShortRegex = defaultMonthsShortRegex;
              }
              return this._monthsShortStrictRegex && isStrict
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex;
          }
      }

      function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
              }
              if (isStrict) {
                  return this._monthsStrictRegex;
              } else {
                  return this._monthsRegex;
              }
          } else {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  this._monthsRegex = defaultMonthsRegex;
              }
              return this._monthsStrictRegex && isStrict
                  ? this._monthsStrictRegex
                  : this._monthsRegex;
          }
      }

      function computeMonthsParse() {
          function cmpLenRev(a, b) {
              return b.length - a.length;
          }

          var shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom;
          for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              shortPieces.push(this.monthsShort(mom, ''));
              longPieces.push(this.months(mom, ''));
              mixedPieces.push(this.months(mom, ''));
              mixedPieces.push(this.monthsShort(mom, ''));
          }
          // Sorting makes sure if one month (or abbr) is a prefix of another it
          // will match the longer piece.
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
              shortPieces[i] = regexEscape(shortPieces[i]);
              longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
              mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
          );
          this._monthsShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      addFormatToken('Y', 0, 0, function () {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : '+' + y;
      });

      addFormatToken(0, ['YY', 2], 0, function () {
          return this.year() % 100;
      });

      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

      // ALIASES

      addUnitAlias('year', 'y');

      // PRIORITIES

      addUnitPriority('year', 1);

      // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);

      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
          array[YEAR] =
              input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
          array[YEAR] = parseInt(input, 10);
      });

      // HELPERS

      function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
      }

      // HOOKS

      hooks.parseTwoDigitYear = function (input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      };

      // MOMENTS

      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
          return isLeapYear(this.year());
      }

      function createDate(y, m, d, h, M, s, ms) {
          // can't just apply() to create a date:
          // https://stackoverflow.com/q/181348
          var date;
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              date = new Date(y + 400, m, d, h, M, s, ms);
              if (isFinite(date.getFullYear())) {
                  date.setFullYear(y);
              }
          } else {
              date = new Date(y, m, d, h, M, s, ms);
          }

          return date;
      }

      function createUTCDate(y) {
          var date, args;
          // the Date.UTC function remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              args = Array.prototype.slice.call(arguments);
              // preserve leap years using a full 400 year cycle, then reset
              args[0] = y + 400;
              date = new Date(Date.UTC.apply(null, args));
              if (isFinite(date.getUTCFullYear())) {
                  date.setUTCFullYear(y);
              }
          } else {
              date = new Date(Date.UTC.apply(null, arguments));
          }

          return date;
      }

      // start-of-first-week - start-of-year
      function firstWeekOffset(year, dow, doy) {
          var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
              fwd = 7 + dow - doy,
              // first-week day local weekday -- which local weekday is fwd
              fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

          return -fwdlw + fwd - 1;
      }

      // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7,
              weekOffset = firstWeekOffset(year, dow, doy),
              dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
              resYear,
              resDayOfYear;

          if (dayOfYear <= 0) {
              resYear = year - 1;
              resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
              resYear = year + 1;
              resDayOfYear = dayOfYear - daysInYear(year);
          } else {
              resYear = year;
              resDayOfYear = dayOfYear;
          }

          return {
              year: resYear,
              dayOfYear: resDayOfYear,
          };
      }

      function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy),
              week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
              resWeek,
              resYear;

          if (week < 1) {
              resYear = mom.year() - 1;
              resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
              resWeek = week - weeksInYear(mom.year(), dow, doy);
              resYear = mom.year() + 1;
          } else {
              resYear = mom.year();
              resWeek = week;
          }

          return {
              week: resWeek,
              year: resYear,
          };
      }

      function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy),
              weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }

      // FORMATTING

      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

      // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W');

      // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5);

      // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);

      addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
          input,
          week,
          config,
          token
      ) {
          week[token.substr(0, 1)] = toInt(input);
      });

      // HELPERS

      // LOCALES

      function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
          dow: 0, // Sunday is the first day of the week.
          doy: 6, // The week that contains Jan 6th is the first week of the year.
      };

      function localeFirstDayOfWeek() {
          return this._week.dow;
      }

      function localeFirstDayOfYear() {
          return this._week.doy;
      }

      // MOMENTS

      function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, 'd');
      }

      // FORMATTING

      addFormatToken('d', 0, 'do', 'day');

      addFormatToken('dd', 0, 0, function (format) {
          return this.localeData().weekdaysMin(this, format);
      });

      addFormatToken('ddd', 0, 0, function (format) {
          return this.localeData().weekdaysShort(this, format);
      });

      addFormatToken('dddd', 0, 0, function (format) {
          return this.localeData().weekdays(this, format);
      });

      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday');

      // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E');

      // PRIORITY
      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11);

      // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
          return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
          return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
          return locale.weekdaysRegex(isStrict);
      });

      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
          var weekday = config._locale.weekdaysParse(input, token, config._strict);
          // if we didn't get a weekday name, mark the date as invalid
          if (weekday != null) {
              week.d = weekday;
          } else {
              getParsingFlags(config).invalidWeekday = input;
          }
      });

      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
          week[token] = toInt(input);
      });

      // HELPERS

      function parseWeekday(input, locale) {
          if (typeof input !== 'string') {
              return input;
          }

          if (!isNaN(input)) {
              return parseInt(input, 10);
          }

          input = locale.weekdaysParse(input);
          if (typeof input === 'number') {
              return input;
          }

          return null;
      }

      function parseIsoWeekday(input, locale) {
          if (typeof input === 'string') {
              return locale.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
      }

      // LOCALES
      function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
              '_'
          ),
          defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          defaultWeekdaysRegex = matchWord,
          defaultWeekdaysShortRegex = matchWord,
          defaultWeekdaysMinRegex = matchWord;

      function localeWeekdays(m, format) {
          var weekdays = isArray(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                    m && m !== true && this._weekdays.isFormat.test(format)
                        ? 'format'
                        : 'standalone'
                ];
          return m === true
              ? shiftWeekdays(weekdays, this._week.dow)
              : m
              ? weekdays[m.day()]
              : weekdays;
      }

      function localeWeekdaysShort(m) {
          return m === true
              ? shiftWeekdays(this._weekdaysShort, this._week.dow)
              : m
              ? this._weekdaysShort[m.day()]
              : this._weekdaysShort;
      }

      function localeWeekdaysMin(m) {
          return m === true
              ? shiftWeekdays(this._weekdaysMin, this._week.dow)
              : m
              ? this._weekdaysMin[m.day()]
              : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
          var i,
              ii,
              mom,
              llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._minWeekdaysParse = [];

              for (i = 0; i < 7; ++i) {
                  mom = createUTC([2000, 1]).day(i);
                  this._minWeekdaysParse[i] = this.weekdaysMin(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._shortWeekdaysParse[i] = this.weekdaysShort(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
              }
          }

          if (strict) {
              if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              }
          } else {
              if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              }
          }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
          var i, mom, regex;

          if (this._weekdaysParseExact) {
              return handleStrictParse$1.call(this, weekdayName, format, strict);
          }

          if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._minWeekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._fullWeekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already

              mom = createUTC([2000, 1]).day(i);
              if (strict && !this._fullWeekdaysParse[i]) {
                  this._fullWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
                  this._shortWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
                  this._minWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
              }
              if (!this._weekdaysParse[i]) {
                  regex =
                      '^' +
                      this.weekdays(mom, '') +
                      '|^' +
                      this.weekdaysShort(mom, '') +
                      '|^' +
                      this.weekdaysMin(mom, '');
                  this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (
                  strict &&
                  format === 'dddd' &&
                  this._fullWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'ddd' &&
                  this._shortWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'dd' &&
                  this._minWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                  return i;
              }
          }
      }

      // MOMENTS

      function getSetDayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
              input = parseWeekday(input, this.localeData());
              return this.add(input - day, 'd');
          } else {
              return day;
          }
      }

      function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }

          // behaves the same as moment#day except
          // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
          // as a setter, sunday should belong to the previous week.

          if (input != null) {
              var weekday = parseIsoWeekday(input, this.localeData());
              return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
              return this.day() || 7;
          }
      }

      function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysStrictRegex;
              } else {
                  return this._weekdaysRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  this._weekdaysRegex = defaultWeekdaysRegex;
              }
              return this._weekdaysStrictRegex && isStrict
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex;
          }
      }

      function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysShortStrictRegex;
              } else {
                  return this._weekdaysShortRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                  this._weekdaysShortRegex = defaultWeekdaysShortRegex;
              }
              return this._weekdaysShortStrictRegex && isStrict
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex;
          }
      }

      function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysMinStrictRegex;
              } else {
                  return this._weekdaysMinRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                  this._weekdaysMinRegex = defaultWeekdaysMinRegex;
              }
              return this._weekdaysMinStrictRegex && isStrict
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex;
          }
      }

      function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
              return b.length - a.length;
          }

          var minPieces = [],
              shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom,
              minp,
              shortp,
              longp;
          for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, 1]).day(i);
              minp = regexEscape(this.weekdaysMin(mom, ''));
              shortp = regexEscape(this.weekdaysShort(mom, ''));
              longp = regexEscape(this.weekdays(mom, ''));
              minPieces.push(minp);
              shortPieces.push(shortp);
              longPieces.push(longp);
              mixedPieces.push(minp);
              mixedPieces.push(shortp);
              mixedPieces.push(longp);
          }
          // Sorting makes sure if one weekday (or abbr) is a prefix of another it
          // will match the longer piece.
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;

          this._weekdaysStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
          );
          this._weekdaysShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
          );
          this._weekdaysMinStrictRegex = new RegExp(
              '^(' + minPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      function hFormat() {
          return this.hours() % 12 || 12;
      }

      function kFormat() {
          return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);

      addFormatToken('hmm', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });

      addFormatToken('hmmss', 0, 0, function () {
          return (
              '' +
              hFormat.apply(this) +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
          );
      });

      addFormatToken('Hmm', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2);
      });

      addFormatToken('Hmmss', 0, 0, function () {
          return (
              '' +
              this.hours() +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
          );
      });

      function meridiem(token, lowercase) {
          addFormatToken(token, 0, 0, function () {
              return this.localeData().meridiem(
                  this.hours(),
                  this.minutes(),
                  lowercase
              );
          });
      }

      meridiem('a', true);
      meridiem('A', false);

      // ALIASES

      addUnitAlias('hour', 'h');

      // PRIORITY
      addUnitPriority('hour', 13);

      // PARSING

      function matchMeridiem(isStrict, locale) {
          return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);

      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);

      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
      });

      // LOCALES

      function localeIsPM(input) {
          // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
          // Using charAt should be more compatible.
          return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
          // Setting the hour should keep the time, because the user explicitly
          // specified which hour they want. So trying to maintain the same hour (in
          // a new timezone) makes sense. Adding/subtracting hours does not follow
          // this rule.
          getSetHour = makeGetSet('Hours', true);

      function localeMeridiem(hours, minutes, isLower) {
          if (hours > 11) {
              return isLower ? 'pm' : 'PM';
          } else {
              return isLower ? 'am' : 'AM';
          }
      }

      var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,

          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,

          week: defaultLocaleWeek,

          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,

          meridiemParse: defaultLocaleMeridiemParse,
      };

      // internal storage for locale config files
      var locales = {},
          localeFamilies = {},
          globalLocale;

      function commonPrefix(arr1, arr2) {
          var i,
              minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
              if (arr1[i] !== arr2[i]) {
                  return i;
              }
          }
          return minl;
      }

      function normalizeLocale(key) {
          return key ? key.toLowerCase().replace('_', '-') : key;
      }

      // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
      function chooseLocale(names) {
          var i = 0,
              j,
              next,
              locale,
              split;

          while (i < names.length) {
              split = normalizeLocale(names[i]).split('-');
              j = split.length;
              next = normalizeLocale(names[i + 1]);
              next = next ? next.split('-') : null;
              while (j > 0) {
                  locale = loadLocale(split.slice(0, j).join('-'));
                  if (locale) {
                      return locale;
                  }
                  if (
                      next &&
                      next.length >= j &&
                      commonPrefix(split, next) >= j - 1
                  ) {
                      //the next array item is better than a shallower substring of this one
                      break;
                  }
                  j--;
              }
              i++;
          }
          return globalLocale;
      }

      function loadLocale(name) {
          var oldLocale = null,
              aliasedRequire;
          // TODO: Find a better way to register and load all the locales in Node
          if (
              locales[name] === undefined &&
              'object' !== 'undefined' &&
              module &&
              module.exports
          ) {
              try {
                  oldLocale = globalLocale._abbr;
                  aliasedRequire = commonjsRequire;
                  aliasedRequire('./locale/' + name);
                  getSetGlobalLocale(oldLocale);
              } catch (e) {
                  // mark as not found to avoid repeating expensive file require call causing high CPU
                  // when trying to find en-US, en_US, en-us for every format call
                  locales[name] = null; // null means not found
              }
          }
          return locales[name];
      }

      // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.
      function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
              if (isUndefined(values)) {
                  data = getLocale(key);
              } else {
                  data = defineLocale(key, values);
              }

              if (data) {
                  // moment.duration._locale = moment._locale = data;
                  globalLocale = data;
              } else {
                  if (typeof console !== 'undefined' && console.warn) {
                      //warn user if arguments are passed but the locale could not be set
                      console.warn(
                          'Locale ' + key + ' not found. Did you forget to load it?'
                      );
                  }
              }
          }

          return globalLocale._abbr;
      }

      function defineLocale(name, config) {
          if (config !== null) {
              var locale,
                  parentConfig = baseConfig;
              config.abbr = name;
              if (locales[name] != null) {
                  deprecateSimple(
                      'defineLocaleOverride',
                      'use moment.updateLocale(localeName, config) to change ' +
                          'an existing locale. moment.defineLocale(localeName, ' +
                          'config) should only be used for creating a new locale ' +
                          'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                  );
                  parentConfig = locales[name]._config;
              } else if (config.parentLocale != null) {
                  if (locales[config.parentLocale] != null) {
                      parentConfig = locales[config.parentLocale]._config;
                  } else {
                      locale = loadLocale(config.parentLocale);
                      if (locale != null) {
                          parentConfig = locale._config;
                      } else {
                          if (!localeFamilies[config.parentLocale]) {
                              localeFamilies[config.parentLocale] = [];
                          }
                          localeFamilies[config.parentLocale].push({
                              name: name,
                              config: config,
                          });
                          return null;
                      }
                  }
              }
              locales[name] = new Locale(mergeConfigs(parentConfig, config));

              if (localeFamilies[name]) {
                  localeFamilies[name].forEach(function (x) {
                      defineLocale(x.name, x.config);
                  });
              }

              // backwards compat for now: also set the locale
              // make sure we set the locale AFTER all child locales have been
              // created, so we won't end up with the child locale set.
              getSetGlobalLocale(name);

              return locales[name];
          } else {
              // useful for testing
              delete locales[name];
              return null;
          }
      }

      function updateLocale(name, config) {
          if (config != null) {
              var locale,
                  tmpLocale,
                  parentConfig = baseConfig;

              if (locales[name] != null && locales[name].parentLocale != null) {
                  // Update existing child locale in-place to avoid memory-leaks
                  locales[name].set(mergeConfigs(locales[name]._config, config));
              } else {
                  // MERGE
                  tmpLocale = loadLocale(name);
                  if (tmpLocale != null) {
                      parentConfig = tmpLocale._config;
                  }
                  config = mergeConfigs(parentConfig, config);
                  if (tmpLocale == null) {
                      // updateLocale is called for creating a new locale
                      // Set abbr so it will have a name (getters return
                      // undefined otherwise).
                      config.abbr = name;
                  }
                  locale = new Locale(config);
                  locale.parentLocale = locales[name];
                  locales[name] = locale;
              }

              // backwards compat for now: also set the locale
              getSetGlobalLocale(name);
          } else {
              // pass null for config to unupdate, useful for tests
              if (locales[name] != null) {
                  if (locales[name].parentLocale != null) {
                      locales[name] = locales[name].parentLocale;
                      if (name === getSetGlobalLocale()) {
                          getSetGlobalLocale(name);
                      }
                  } else if (locales[name] != null) {
                      delete locales[name];
                  }
              }
          }
          return locales[name];
      }

      // returns locale data
      function getLocale(key) {
          var locale;

          if (key && key._locale && key._locale._abbr) {
              key = key._locale._abbr;
          }

          if (!key) {
              return globalLocale;
          }

          if (!isArray(key)) {
              //short-circuit everything else
              locale = loadLocale(key);
              if (locale) {
                  return locale;
              }
              key = [key];
          }

          return chooseLocale(key);
      }

      function listLocales() {
          return keys(locales);
      }

      function checkOverflow(m) {
          var overflow,
              a = m._a;

          if (a && getParsingFlags(m).overflow === -2) {
              overflow =
                  a[MONTH] < 0 || a[MONTH] > 11
                      ? MONTH
                      : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                      ? DATE
                      : a[HOUR] < 0 ||
                        a[HOUR] > 24 ||
                        (a[HOUR] === 24 &&
                            (a[MINUTE] !== 0 ||
                                a[SECOND] !== 0 ||
                                a[MILLISECOND] !== 0))
                      ? HOUR
                      : a[MINUTE] < 0 || a[MINUTE] > 59
                      ? MINUTE
                      : a[SECOND] < 0 || a[SECOND] > 59
                      ? SECOND
                      : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                      ? MILLISECOND
                      : -1;

              if (
                  getParsingFlags(m)._overflowDayOfYear &&
                  (overflow < YEAR || overflow > DATE)
              ) {
                  overflow = DATE;
              }
              if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                  overflow = WEEK;
              }
              if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                  overflow = WEEKDAY;
              }

              getParsingFlags(m).overflow = overflow;
          }

          return m;
      }

      // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
          isoDates = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, false],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, false],
              ['YYYYDDD', /\d{7}/],
              ['YYYYMM', /\d{6}/, false],
              ['YYYY', /\d{4}/, false],
          ],
          // iso time formats and regexes
          isoTimes = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
          ],
          aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
          // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
          rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          obsOffsets = {
              UT: 0,
              GMT: 0,
              EDT: -4 * 60,
              EST: -5 * 60,
              CDT: -5 * 60,
              CST: -6 * 60,
              MDT: -6 * 60,
              MST: -7 * 60,
              PDT: -7 * 60,
              PST: -8 * 60,
          };

      // date from iso format
      function configFromISO(config) {
          var i,
              l,
              string = config._i,
              match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
              allowTime,
              dateFormat,
              timeFormat,
              tzFormat;

          if (match) {
              getParsingFlags(config).iso = true;

              for (i = 0, l = isoDates.length; i < l; i++) {
                  if (isoDates[i][1].exec(match[1])) {
                      dateFormat = isoDates[i][0];
                      allowTime = isoDates[i][2] !== false;
                      break;
                  }
              }
              if (dateFormat == null) {
                  config._isValid = false;
                  return;
              }
              if (match[3]) {
                  for (i = 0, l = isoTimes.length; i < l; i++) {
                      if (isoTimes[i][1].exec(match[3])) {
                          // match[2] should be 'T' or space
                          timeFormat = (match[2] || ' ') + isoTimes[i][0];
                          break;
                      }
                  }
                  if (timeFormat == null) {
                      config._isValid = false;
                      return;
                  }
              }
              if (!allowTime && timeFormat != null) {
                  config._isValid = false;
                  return;
              }
              if (match[4]) {
                  if (tzRegex.exec(match[4])) {
                      tzFormat = 'Z';
                  } else {
                      config._isValid = false;
                      return;
                  }
              }
              config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
              configFromStringAndFormat(config);
          } else {
              config._isValid = false;
          }
      }

      function extractFromRFC2822Strings(
          yearStr,
          monthStr,
          dayStr,
          hourStr,
          minuteStr,
          secondStr
      ) {
          var result = [
              untruncateYear(yearStr),
              defaultLocaleMonthsShort.indexOf(monthStr),
              parseInt(dayStr, 10),
              parseInt(hourStr, 10),
              parseInt(minuteStr, 10),
          ];

          if (secondStr) {
              result.push(parseInt(secondStr, 10));
          }

          return result;
      }

      function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
              return 2000 + year;
          } else if (year <= 999) {
              return 1900 + year;
          }
          return year;
      }

      function preprocessRFC2822(s) {
          // Remove comments and folding whitespace and replace multiple-spaces with a single space
          return s
              .replace(/\([^)]*\)|[\n\t]/g, ' ')
              .replace(/(\s\s+)/g, ' ')
              .replace(/^\s\s*/, '')
              .replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
              // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
              var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                  weekdayActual = new Date(
                      parsedInput[0],
                      parsedInput[1],
                      parsedInput[2]
                  ).getDay();
              if (weekdayProvided !== weekdayActual) {
                  getParsingFlags(config).weekdayMismatch = true;
                  config._isValid = false;
                  return false;
              }
          }
          return true;
      }

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
              return obsOffsets[obsOffset];
          } else if (militaryOffset) {
              // the only allowed military tz is Z
              return 0;
          } else {
              var hm = parseInt(numOffset, 10),
                  m = hm % 100,
                  h = (hm - m) / 100;
              return h * 60 + m;
          }
      }

      // date and time from ref 2822 format
      function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)),
              parsedArray;
          if (match) {
              parsedArray = extractFromRFC2822Strings(
                  match[4],
                  match[3],
                  match[2],
                  match[5],
                  match[6],
                  match[7]
              );
              if (!checkWeekday(match[1], parsedArray, config)) {
                  return;
              }

              config._a = parsedArray;
              config._tzm = calculateOffset(match[8], match[9], match[10]);

              config._d = createUTCDate.apply(null, config._a);
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

              getParsingFlags(config).rfc2822 = true;
          } else {
              config._isValid = false;
          }
      }

      // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
      function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
              config._d = new Date(+matched[1]);
              return;
          }

          configFromISO(config);
          if (config._isValid === false) {
              delete config._isValid;
          } else {
              return;
          }

          configFromRFC2822(config);
          if (config._isValid === false) {
              delete config._isValid;
          } else {
              return;
          }

          if (config._strict) {
              config._isValid = false;
          } else {
              // Final attempt, use Input Fallback
              hooks.createFromInputFallback(config);
          }
      }

      hooks.createFromInputFallback = deprecate(
          'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
              'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
              'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
          function (config) {
              config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
          }
      );

      // Pick the first defined of two or three arguments.
      function defaults(a, b, c) {
          if (a != null) {
              return a;
          }
          if (b != null) {
              return b;
          }
          return c;
      }

      function currentDateArray(config) {
          // hooks is actually the exported moment object
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
              return [
                  nowValue.getUTCFullYear(),
                  nowValue.getUTCMonth(),
                  nowValue.getUTCDate(),
              ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }

      // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]
      function configFromArray(config) {
          var i,
              date,
              input = [],
              currentDate,
              expectedWeekday,
              yearToUse;

          if (config._d) {
              return;
          }

          currentDate = currentDateArray(config);

          //compute day of the year from weeks and weekdays
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
              dayOfYearFromWeekInfo(config);
          }

          //if the day of the year is set, figure out what it is
          if (config._dayOfYear != null) {
              yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

              if (
                  config._dayOfYear > daysInYear(yearToUse) ||
                  config._dayOfYear === 0
              ) {
                  getParsingFlags(config)._overflowDayOfYear = true;
              }

              date = createUTCDate(yearToUse, 0, config._dayOfYear);
              config._a[MONTH] = date.getUTCMonth();
              config._a[DATE] = date.getUTCDate();
          }

          // Default to current date.
          // * if no year, month, day of month are given, default to today
          // * if day of month is given, default month and year
          // * if month is given, default only year
          // * if year is given, don't default anything
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
              config._a[i] = input[i] = currentDate[i];
          }

          // Zero out whatever was not defaulted, including time
          for (; i < 7; i++) {
              config._a[i] = input[i] =
                  config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
          }

          // Check for 24:00:00.000
          if (
              config._a[HOUR] === 24 &&
              config._a[MINUTE] === 0 &&
              config._a[SECOND] === 0 &&
              config._a[MILLISECOND] === 0
          ) {
              config._nextDay = true;
              config._a[HOUR] = 0;
          }

          config._d = (config._useUTC ? createUTCDate : createDate).apply(
              null,
              input
          );
          expectedWeekday = config._useUTC
              ? config._d.getUTCDay()
              : config._d.getDay();

          // Apply timezone offset from input. The actual utcOffset can be changed
          // with parseZone.
          if (config._tzm != null) {
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }

          if (config._nextDay) {
              config._a[HOUR] = 24;
          }

          // check for mismatching day of week
          if (
              config._w &&
              typeof config._w.d !== 'undefined' &&
              config._w.d !== expectedWeekday
          ) {
              getParsingFlags(config).weekdayMismatch = true;
          }
      }

      function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
              dow = 1;
              doy = 4;

              // TODO: We need to take the current isoWeekYear, but that depends on
              // how we interpret now (local, utc, fixed offset). So create
              // a now version of current config (take local/utc/offset flags, and
              // create now).
              weekYear = defaults(
                  w.GG,
                  config._a[YEAR],
                  weekOfYear(createLocal(), 1, 4).year
              );
              week = defaults(w.W, 1);
              weekday = defaults(w.E, 1);
              if (weekday < 1 || weekday > 7) {
                  weekdayOverflow = true;
              }
          } else {
              dow = config._locale._week.dow;
              doy = config._locale._week.doy;

              curWeek = weekOfYear(createLocal(), dow, doy);

              weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

              // Default to current week.
              week = defaults(w.w, curWeek.week);

              if (w.d != null) {
                  // weekday -- low day numbers are considered next week
                  weekday = w.d;
                  if (weekday < 0 || weekday > 6) {
                      weekdayOverflow = true;
                  }
              } else if (w.e != null) {
                  // local weekday -- counting starts from beginning of week
                  weekday = w.e + dow;
                  if (w.e < 0 || w.e > 6) {
                      weekdayOverflow = true;
                  }
              } else {
                  // default to beginning of week
                  weekday = dow;
              }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
              getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
              getParsingFlags(config)._overflowWeekday = true;
          } else {
              temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
              config._a[YEAR] = temp.year;
              config._dayOfYear = temp.dayOfYear;
          }
      }

      // constant that refers to the ISO standard
      hooks.ISO_8601 = function () {};

      // constant that refers to the RFC 2822 form
      hooks.RFC_2822 = function () {};

      // date from string and format string
      function configFromStringAndFormat(config) {
          // TODO: Move this to another part of the creation flow to prevent circular deps
          if (config._f === hooks.ISO_8601) {
              configFromISO(config);
              return;
          }
          if (config._f === hooks.RFC_2822) {
              configFromRFC2822(config);
              return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;

          // This array is used to make a Date, either with `new Date` or `Date.UTC`
          var string = '' + config._i,
              i,
              parsedInput,
              tokens,
              token,
              skipped,
              stringLength = string.length,
              totalParsedInputLength = 0,
              era;

          tokens =
              expandFormat(config._f, config._locale).match(formattingTokens) || [];

          for (i = 0; i < tokens.length; i++) {
              token = tokens[i];
              parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                  [])[0];
              if (parsedInput) {
                  skipped = string.substr(0, string.indexOf(parsedInput));
                  if (skipped.length > 0) {
                      getParsingFlags(config).unusedInput.push(skipped);
                  }
                  string = string.slice(
                      string.indexOf(parsedInput) + parsedInput.length
                  );
                  totalParsedInputLength += parsedInput.length;
              }
              // don't parse if it's not a known token
              if (formatTokenFunctions[token]) {
                  if (parsedInput) {
                      getParsingFlags(config).empty = false;
                  } else {
                      getParsingFlags(config).unusedTokens.push(token);
                  }
                  addTimeToArrayFromToken(token, parsedInput, config);
              } else if (config._strict && !parsedInput) {
                  getParsingFlags(config).unusedTokens.push(token);
              }
          }

          // add remaining unparsed input length to the string
          getParsingFlags(config).charsLeftOver =
              stringLength - totalParsedInputLength;
          if (string.length > 0) {
              getParsingFlags(config).unusedInput.push(string);
          }

          // clear _12h flag if hour is <= 12
          if (
              config._a[HOUR] <= 12 &&
              getParsingFlags(config).bigHour === true &&
              config._a[HOUR] > 0
          ) {
              getParsingFlags(config).bigHour = undefined;
          }

          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          // handle meridiem
          config._a[HOUR] = meridiemFixWrap(
              config._locale,
              config._a[HOUR],
              config._meridiem
          );

          // handle era
          era = getParsingFlags(config).era;
          if (era !== null) {
              config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }

          configFromArray(config);
          checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
          var isPm;

          if (meridiem == null) {
              // nothing to do
              return hour;
          }
          if (locale.meridiemHour != null) {
              return locale.meridiemHour(hour, meridiem);
          } else if (locale.isPM != null) {
              // Fallback
              isPm = locale.isPM(meridiem);
              if (isPm && hour < 12) {
                  hour += 12;
              }
              if (!isPm && hour === 12) {
                  hour = 0;
              }
              return hour;
          } else {
              // this is not supposed to happen
              return hour;
          }
      }

      // date from string and array of format strings
      function configFromStringAndArray(config) {
          var tempConfig,
              bestMoment,
              scoreToBeat,
              i,
              currentScore,
              validFormatFound,
              bestFormatIsValid = false;

          if (config._f.length === 0) {
              getParsingFlags(config).invalidFormat = true;
              config._d = new Date(NaN);
              return;
          }

          for (i = 0; i < config._f.length; i++) {
              currentScore = 0;
              validFormatFound = false;
              tempConfig = copyConfig({}, config);
              if (config._useUTC != null) {
                  tempConfig._useUTC = config._useUTC;
              }
              tempConfig._f = config._f[i];
              configFromStringAndFormat(tempConfig);

              if (isValid(tempConfig)) {
                  validFormatFound = true;
              }

              // if there is any input that was not parsed add a penalty for that format
              currentScore += getParsingFlags(tempConfig).charsLeftOver;

              //or tokens
              currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

              getParsingFlags(tempConfig).score = currentScore;

              if (!bestFormatIsValid) {
                  if (
                      scoreToBeat == null ||
                      currentScore < scoreToBeat ||
                      validFormatFound
                  ) {
                      scoreToBeat = currentScore;
                      bestMoment = tempConfig;
                      if (validFormatFound) {
                          bestFormatIsValid = true;
                      }
                  }
              } else {
                  if (currentScore < scoreToBeat) {
                      scoreToBeat = currentScore;
                      bestMoment = tempConfig;
                  }
              }
          }

          extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
          if (config._d) {
              return;
          }

          var i = normalizeObjectUnits(config._i),
              dayOrDate = i.day === undefined ? i.date : i.day;
          config._a = map(
              [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
              function (obj) {
                  return obj && parseInt(obj, 10);
              }
          );

          configFromArray(config);
      }

      function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
              // Adding is smart enough around DST
              res.add(1, 'd');
              res._nextDay = undefined;
          }

          return res;
      }

      function prepareConfig(config) {
          var input = config._i,
              format = config._f;

          config._locale = config._locale || getLocale(config._l);

          if (input === null || (format === undefined && input === '')) {
              return createInvalid({ nullInput: true });
          }

          if (typeof input === 'string') {
              config._i = input = config._locale.preparse(input);
          }

          if (isMoment(input)) {
              return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
              config._d = input;
          } else if (isArray(format)) {
              configFromStringAndArray(config);
          } else if (format) {
              configFromStringAndFormat(config);
          } else {
              configFromInput(config);
          }

          if (!isValid(config)) {
              config._d = null;
          }

          return config;
      }

      function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
              config._d = new Date(hooks.now());
          } else if (isDate(input)) {
              config._d = new Date(input.valueOf());
          } else if (typeof input === 'string') {
              configFromString(config);
          } else if (isArray(input)) {
              config._a = map(input.slice(0), function (obj) {
                  return parseInt(obj, 10);
              });
              configFromArray(config);
          } else if (isObject(input)) {
              configFromObject(config);
          } else if (isNumber(input)) {
              // from milliseconds
              config._d = new Date(input);
          } else {
              hooks.createFromInputFallback(config);
          }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
          var c = {};

          if (format === true || format === false) {
              strict = format;
              format = undefined;
          }

          if (locale === true || locale === false) {
              strict = locale;
              locale = undefined;
          }

          if (
              (isObject(input) && isObjectEmpty(input)) ||
              (isArray(input) && input.length === 0)
          ) {
              input = undefined;
          }
          // object construction must be done this way.
          // https://github.com/moment/moment/issues/1423
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale;
          c._i = input;
          c._f = format;
          c._strict = strict;

          return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                      return other < this ? this : other;
                  } else {
                      return createInvalid();
                  }
              }
          ),
          prototypeMax = deprecate(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                      return other > this ? this : other;
                  } else {
                      return createInvalid();
                  }
              }
          );

      // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.
      function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
              moments = moments[0];
          }
          if (!moments.length) {
              return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
              if (!moments[i].isValid() || moments[i][fn](res)) {
                  res = moments[i];
              }
          }
          return res;
      }

      // TODO: Use [].sort instead?
      function min() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isBefore', args);
      }

      function max() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isAfter', args);
      }

      var now = function () {
          return Date.now ? Date.now() : +new Date();
      };

      var ordering = [
          'year',
          'quarter',
          'month',
          'week',
          'day',
          'hour',
          'minute',
          'second',
          'millisecond',
      ];

      function isDurationValid(m) {
          var key,
              unitHasDecimal = false,
              i;
          for (key in m) {
              if (
                  hasOwnProp(m, key) &&
                  !(
                      indexOf.call(ordering, key) !== -1 &&
                      (m[key] == null || !isNaN(m[key]))
                  )
              ) {
                  return false;
              }
          }

          for (i = 0; i < ordering.length; ++i) {
              if (m[ordering[i]]) {
                  if (unitHasDecimal) {
                      return false; // only allow non-integers for smallest unit
                  }
                  if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                      unitHasDecimal = true;
                  }
              }
          }

          return true;
      }

      function isValid$1() {
          return this._isValid;
      }

      function createInvalid$1() {
          return createDuration(NaN);
      }

      function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration),
              years = normalizedInput.year || 0,
              quarters = normalizedInput.quarter || 0,
              months = normalizedInput.month || 0,
              weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
              days = normalizedInput.day || 0,
              hours = normalizedInput.hour || 0,
              minutes = normalizedInput.minute || 0,
              seconds = normalizedInput.second || 0,
              milliseconds = normalizedInput.millisecond || 0;

          this._isValid = isDurationValid(normalizedInput);

          // representation for dateAddRemove
          this._milliseconds =
              +milliseconds +
              seconds * 1e3 + // 1000
              minutes * 6e4 + // 1000 * 60
              hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
          // Because of dateAddRemove treats 24 hours as different from a
          // day when working around DST, we need to store them separately
          this._days = +days + weeks * 7;
          // It is impossible to translate months into days without knowing
          // which months you are are talking about, so we have to store
          // it separately.
          this._months = +months + quarters * 3 + years * 12;

          this._data = {};

          this._locale = getLocale();

          this._bubble();
      }

      function isDuration(obj) {
          return obj instanceof Duration;
      }

      function absRound(number) {
          if (number < 0) {
              return Math.round(-1 * number) * -1;
          } else {
              return Math.round(number);
          }
      }

      // compare two arrays, return the number of differences
      function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length),
              lengthDiff = Math.abs(array1.length - array2.length),
              diffs = 0,
              i;
          for (i = 0; i < len; i++) {
              if (
                  (dontConvert && array1[i] !== array2[i]) ||
                  (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
              ) {
                  diffs++;
              }
          }
          return diffs + lengthDiff;
      }

      // FORMATTING

      function offset(token, separator) {
          addFormatToken(token, 0, 0, function () {
              var offset = this.utcOffset(),
                  sign = '+';
              if (offset < 0) {
                  offset = -offset;
                  sign = '-';
              }
              return (
                  sign +
                  zeroFill(~~(offset / 60), 2) +
                  separator +
                  zeroFill(~~offset % 60, 2)
              );
          });
      }

      offset('Z', ':');
      offset('ZZ', '');

      // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
      });

      // HELPERS

      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']
      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
          var matches = (string || '').match(matcher),
              chunk,
              parts,
              minutes;

          if (matches === null) {
              return null;
          }

          chunk = matches[matches.length - 1] || [];
          parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
          minutes = +(parts[1] * 60) + toInt(parts[2]);

          return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      }

      // Return a moment from input, that is local/utc/zone equivalent to model.
      function cloneWithOffset(input, model) {
          var res, diff;
          if (model._isUTC) {
              res = model.clone();
              diff =
                  (isMoment(input) || isDate(input)
                      ? input.valueOf()
                      : createLocal(input).valueOf()) - res.valueOf();
              // Use low-level api, because this fn is low-level api.
              res._d.setTime(res._d.valueOf() + diff);
              hooks.updateOffset(res, false);
              return res;
          } else {
              return createLocal(input).local();
          }
      }

      function getDateOffset(m) {
          // On Firefox.24 Date#getTimezoneOffset returns a floating point.
          // https://github.com/moment/moment/pull/1871
          return -Math.round(m._d.getTimezoneOffset());
      }

      // HOOKS

      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.
      hooks.updateOffset = function () {};

      // MOMENTS

      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.
      function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset = this._offset || 0,
              localAdjust;
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          if (input != null) {
              if (typeof input === 'string') {
                  input = offsetFromString(matchShortOffset, input);
                  if (input === null) {
                      return this;
                  }
              } else if (Math.abs(input) < 16 && !keepMinutes) {
                  input = input * 60;
              }
              if (!this._isUTC && keepLocalTime) {
                  localAdjust = getDateOffset(this);
              }
              this._offset = input;
              this._isUTC = true;
              if (localAdjust != null) {
                  this.add(localAdjust, 'm');
              }
              if (offset !== input) {
                  if (!keepLocalTime || this._changeInProgress) {
                      addSubtract(
                          this,
                          createDuration(input - offset, 'm'),
                          1,
                          false
                      );
                  } else if (!this._changeInProgress) {
                      this._changeInProgress = true;
                      hooks.updateOffset(this, true);
                      this._changeInProgress = null;
                  }
              }
              return this;
          } else {
              return this._isUTC ? offset : getDateOffset(this);
          }
      }

      function getSetZone(input, keepLocalTime) {
          if (input != null) {
              if (typeof input !== 'string') {
                  input = -input;
              }

              this.utcOffset(input, keepLocalTime);

              return this;
          } else {
              return -this.utcOffset();
          }
      }

      function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
              this.utcOffset(0, keepLocalTime);
              this._isUTC = false;

              if (keepLocalTime) {
                  this.subtract(getDateOffset(this), 'm');
              }
          }
          return this;
      }

      function setOffsetToParsedOffset() {
          if (this._tzm != null) {
              this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === 'string') {
              var tZone = offsetFromString(matchOffset, this._i);
              if (tZone != null) {
                  this.utcOffset(tZone);
              } else {
                  this.utcOffset(0, true);
              }
          }
          return this;
      }

      function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
              return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;

          return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
          return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
          );
      }

      function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
              return this._isDSTShifted;
          }

          var c = {},
              other;

          copyConfig(c, this);
          c = prepareConfig(c);

          if (c._a) {
              other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
              this._isDSTShifted =
                  this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
              this._isDSTShifted = false;
          }

          return this._isDSTShifted;
      }

      function isLocal() {
          return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }

      // ASP.NET json date format regex
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
          // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
          // and further modified to allow for strings containing both week and day
          isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
          var duration = input,
              // matching against regexp is expensive, do it on demand
              match = null,
              sign,
              ret,
              diffRes;

          if (isDuration(input)) {
              duration = {
                  ms: input._milliseconds,
                  d: input._days,
                  M: input._months,
              };
          } else if (isNumber(input) || !isNaN(+input)) {
              duration = {};
              if (key) {
                  duration[key] = +input;
              } else {
                  duration.milliseconds = +input;
              }
          } else if ((match = aspNetRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                  y: 0,
                  d: toInt(match[DATE]) * sign,
                  h: toInt(match[HOUR]) * sign,
                  m: toInt(match[MINUTE]) * sign,
                  s: toInt(match[SECOND]) * sign,
                  ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
              };
          } else if ((match = isoRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                  y: parseIso(match[2], sign),
                  M: parseIso(match[3], sign),
                  w: parseIso(match[4], sign),
                  d: parseIso(match[5], sign),
                  h: parseIso(match[6], sign),
                  m: parseIso(match[7], sign),
                  s: parseIso(match[8], sign),
              };
          } else if (duration == null) {
              // checks for null or undefined
              duration = {};
          } else if (
              typeof duration === 'object' &&
              ('from' in duration || 'to' in duration)
          ) {
              diffRes = momentsDifference(
                  createLocal(duration.from),
                  createLocal(duration.to)
              );

              duration = {};
              duration.ms = diffRes.milliseconds;
              duration.M = diffRes.months;
          }

          ret = new Duration(duration);

          if (isDuration(input) && hasOwnProp(input, '_locale')) {
              ret._locale = input._locale;
          }

          if (isDuration(input) && hasOwnProp(input, '_isValid')) {
              ret._isValid = input._isValid;
          }

          return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
          // We'd normally use ~~inp for this, but unfortunately it also
          // converts floats to ints.
          // inp may be undefined, so careful calling replace on it.
          var res = inp && parseFloat(inp.replace(',', '.'));
          // apply sign while we're at it
          return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
          var res = {};

          res.months =
              other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, 'M').isAfter(other)) {
              --res.months;
          }

          res.milliseconds = +other - +base.clone().add(res.months, 'M');

          return res;
      }

      function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
              return { milliseconds: 0, months: 0 };
          }

          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
              res = positiveMomentsDifference(base, other);
          } else {
              res = positiveMomentsDifference(other, base);
              res.milliseconds = -res.milliseconds;
              res.months = -res.months;
          }

          return res;
      }

      // TODO: remove 'name' arg after deprecation is removed
      function createAdder(direction, name) {
          return function (val, period) {
              var dur, tmp;
              //invert the arguments, but complain about it
              if (period !== null && !isNaN(+period)) {
                  deprecateSimple(
                      name,
                      'moment().' +
                          name +
                          '(period, number) is deprecated. Please use moment().' +
                          name +
                          '(number, period). ' +
                          'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                  );
                  tmp = val;
                  val = period;
                  period = tmp;
              }

              dur = createDuration(val, period);
              addSubtract(this, dur, direction);
              return this;
          };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds = duration._milliseconds,
              days = absRound(duration._days),
              months = absRound(duration._months);

          if (!mom.isValid()) {
              // No op
              return;
          }

          updateOffset = updateOffset == null ? true : updateOffset;

          if (months) {
              setMonth(mom, get(mom, 'Month') + months * isAdding);
          }
          if (days) {
              set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
          }
          if (milliseconds) {
              mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
          }
          if (updateOffset) {
              hooks.updateOffset(mom, days || months);
          }
      }

      var add = createAdder(1, 'add'),
          subtract = createAdder(-1, 'subtract');

      function isString(input) {
          return typeof input === 'string' || input instanceof String;
      }

      // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
      function isMomentInput(input) {
          return (
              isMoment(input) ||
              isDate(input) ||
              isString(input) ||
              isNumber(input) ||
              isNumberOrStringArray(input) ||
              isMomentInputObject(input) ||
              input === null ||
              input === undefined
          );
      }

      function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                  'years',
                  'year',
                  'y',
                  'months',
                  'month',
                  'M',
                  'days',
                  'day',
                  'd',
                  'dates',
                  'date',
                  'D',
                  'hours',
                  'hour',
                  'h',
                  'minutes',
                  'minute',
                  'm',
                  'seconds',
                  'second',
                  's',
                  'milliseconds',
                  'millisecond',
                  'ms',
              ],
              i,
              property;

          for (i = 0; i < properties.length; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
      }

      function isNumberOrStringArray(input) {
          var arrayTest = isArray(input),
              dataTypeTest = false;
          if (arrayTest) {
              dataTypeTest =
                  input.filter(function (item) {
                      return !isNumber(item) && isString(input);
                  }).length === 0;
          }
          return arrayTest && dataTypeTest;
      }

      function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                  'sameDay',
                  'nextDay',
                  'lastDay',
                  'nextWeek',
                  'lastWeek',
                  'sameElse',
              ],
              i,
              property;

          for (i = 0; i < properties.length; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
      }

      function getCalendarFormat(myMoment, now) {
          var diff = myMoment.diff(now, 'days', true);
          return diff < -6
              ? 'sameElse'
              : diff < -1
              ? 'lastWeek'
              : diff < 0
              ? 'lastDay'
              : diff < 1
              ? 'sameDay'
              : diff < 2
              ? 'nextDay'
              : diff < 7
              ? 'nextWeek'
              : 'sameElse';
      }

      function calendar$1(time, formats) {
          // Support for single parameter, formats only overload to the calendar function
          if (arguments.length === 1) {
              if (!arguments[0]) {
                  time = undefined;
                  formats = undefined;
              } else if (isMomentInput(arguments[0])) {
                  time = arguments[0];
                  formats = undefined;
              } else if (isCalendarSpec(arguments[0])) {
                  formats = arguments[0];
                  time = undefined;
              }
          }
          // We want to compare the start of today, vs this.
          // Getting start-of-today depends on whether we're local/utc/offset or not.
          var now = time || createLocal(),
              sod = cloneWithOffset(now, this).startOf('day'),
              format = hooks.calendarFormat(this, sod) || 'sameElse',
              output =
                  formats &&
                  (isFunction(formats[format])
                      ? formats[format].call(this, now)
                      : formats[format]);

          return this.format(
              output || this.localeData().calendar(format, this, createLocal(now))
          );
      }

      function clone() {
          return new Moment(this);
      }

      function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() > localInput.valueOf();
          } else {
              return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
      }

      function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() < localInput.valueOf();
          } else {
              return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
      }

      function isBetween(from, to, units, inclusivity) {
          var localFrom = isMoment(from) ? from : createLocal(from),
              localTo = isMoment(to) ? to : createLocal(to);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
              return false;
          }
          inclusivity = inclusivity || '()';
          return (
              (inclusivity[0] === '('
                  ? this.isAfter(localFrom, units)
                  : !this.isBefore(localFrom, units)) &&
              (inclusivity[1] === ')'
                  ? this.isBefore(localTo, units)
                  : !this.isAfter(localTo, units))
          );
      }

      function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input),
              inputMs;
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() === localInput.valueOf();
          } else {
              inputMs = localInput.valueOf();
              return (
                  this.clone().startOf(units).valueOf() <= inputMs &&
                  inputMs <= this.clone().endOf(units).valueOf()
              );
          }
      }

      function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
          var that, zoneDelta, output;

          if (!this.isValid()) {
              return NaN;
          }

          that = cloneWithOffset(input, this);

          if (!that.isValid()) {
              return NaN;
          }

          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

          units = normalizeUnits(units);

          switch (units) {
              case 'year':
                  output = monthDiff(this, that) / 12;
                  break;
              case 'month':
                  output = monthDiff(this, that);
                  break;
              case 'quarter':
                  output = monthDiff(this, that) / 3;
                  break;
              case 'second':
                  output = (this - that) / 1e3;
                  break; // 1000
              case 'minute':
                  output = (this - that) / 6e4;
                  break; // 1000 * 60
              case 'hour':
                  output = (this - that) / 36e5;
                  break; // 1000 * 60 * 60
              case 'day':
                  output = (this - that - zoneDelta) / 864e5;
                  break; // 1000 * 60 * 60 * 24, negate dst
              case 'week':
                  output = (this - that - zoneDelta) / 6048e5;
                  break; // 1000 * 60 * 60 * 24 * 7, negate dst
              default:
                  output = this - that;
          }

          return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
          if (a.date() < b.date()) {
              // end-of-month calculations work correct when the start month has more
              // days than the end month.
              return -monthDiff(b, a);
          }
          // difference in months
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
              // b is in (anchor - 1 month, anchor + 1 month)
              anchor = a.clone().add(wholeMonthDiff, 'months'),
              anchor2,
              adjust;

          if (b - anchor < 0) {
              anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor - anchor2);
          } else {
              anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor2 - anchor);
          }

          //check for negative zero, return zero if negative zero
          return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
          return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
          if (!this.isValid()) {
              return null;
          }
          var utc = keepOffset !== true,
              m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
              return formatMoment(
                  m,
                  utc
                      ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                      : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
              );
          }
          if (isFunction(Date.prototype.toISOString)) {
              // native implementation is ~50x faster, use it when we can
              if (utc) {
                  return this.toDate().toISOString();
              } else {
                  return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                      .toISOString()
                      .replace('Z', formatMoment(m, 'Z'));
              }
          }
          return formatMoment(
              m,
              utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
          );
      }

      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */
      function inspect() {
          if (!this.isValid()) {
              return 'moment.invalid(/* ' + this._i + ' */)';
          }
          var func = 'moment',
              zone = '',
              prefix,
              year,
              datetime,
              suffix;
          if (!this.isLocal()) {
              func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
              zone = 'Z';
          }
          prefix = '[' + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
          datetime = '-MM-DD[T]HH:mm:ss.SSS';
          suffix = zone + '[")]';

          return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
          if (!inputString) {
              inputString = this.isUtc()
                  ? hooks.defaultFormatUtc
                  : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
          if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
              return createDuration({ to: this, from: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
          } else {
              return this.localeData().invalidDate();
          }
      }

      function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
          if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
              return createDuration({ from: this, to: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
          } else {
              return this.localeData().invalidDate();
          }
      }

      function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
      }

      // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.
      function locale(key) {
          var newLocaleData;

          if (key === undefined) {
              return this._locale._abbr;
          } else {
              newLocaleData = getLocale(key);
              if (newLocaleData != null) {
                  this._locale = newLocaleData;
              }
              return this;
          }
      }

      var lang = deprecate(
          'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
          function (key) {
              if (key === undefined) {
                  return this.localeData();
              } else {
                  return this.locale(key);
              }
          }
      );

      function localeData() {
          return this._locale;
      }

      var MS_PER_SECOND = 1000,
          MS_PER_MINUTE = 60 * MS_PER_SECOND,
          MS_PER_HOUR = 60 * MS_PER_MINUTE,
          MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

      // actual modulo - handles negative numbers (for dates before 1970):
      function mod$1(dividend, divisor) {
          return ((dividend % divisor) + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
              return new Date(y, m, d).valueOf();
          }
      }

      function utcStartOfDate(y, m, d) {
          // Date.UTC remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
              return Date.UTC(y, m, d);
          }
      }

      function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === undefined || units === 'millisecond' || !this.isValid()) {
              return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
              case 'year':
                  time = startOfDate(this.year(), 0, 1);
                  break;
              case 'quarter':
                  time = startOfDate(
                      this.year(),
                      this.month() - (this.month() % 3),
                      1
                  );
                  break;
              case 'month':
                  time = startOfDate(this.year(), this.month(), 1);
                  break;
              case 'week':
                  time = startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday()
                  );
                  break;
              case 'isoWeek':
                  time = startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1)
                  );
                  break;
              case 'day':
              case 'date':
                  time = startOfDate(this.year(), this.month(), this.date());
                  break;
              case 'hour':
                  time = this._d.valueOf();
                  time -= mod$1(
                      time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                      MS_PER_HOUR
                  );
                  break;
              case 'minute':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_MINUTE);
                  break;
              case 'second':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_SECOND);
                  break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
      }

      function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === undefined || units === 'millisecond' || !this.isValid()) {
              return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
              case 'year':
                  time = startOfDate(this.year() + 1, 0, 1) - 1;
                  break;
              case 'quarter':
                  time =
                      startOfDate(
                          this.year(),
                          this.month() - (this.month() % 3) + 3,
                          1
                      ) - 1;
                  break;
              case 'month':
                  time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                  break;
              case 'week':
                  time =
                      startOfDate(
                          this.year(),
                          this.month(),
                          this.date() - this.weekday() + 7
                      ) - 1;
                  break;
              case 'isoWeek':
                  time =
                      startOfDate(
                          this.year(),
                          this.month(),
                          this.date() - (this.isoWeekday() - 1) + 7
                      ) - 1;
                  break;
              case 'day':
              case 'date':
                  time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                  break;
              case 'hour':
                  time = this._d.valueOf();
                  time +=
                      MS_PER_HOUR -
                      mod$1(
                          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                          MS_PER_HOUR
                      ) -
                      1;
                  break;
              case 'minute':
                  time = this._d.valueOf();
                  time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                  break;
              case 'second':
                  time = this._d.valueOf();
                  time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                  break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
      }

      function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
          return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
          return new Date(this.valueOf());
      }

      function toArray() {
          var m = this;
          return [
              m.year(),
              m.month(),
              m.date(),
              m.hour(),
              m.minute(),
              m.second(),
              m.millisecond(),
          ];
      }

      function toObject() {
          var m = this;
          return {
              years: m.year(),
              months: m.month(),
              date: m.date(),
              hours: m.hours(),
              minutes: m.minutes(),
              seconds: m.seconds(),
              milliseconds: m.milliseconds(),
          };
      }

      function toJSON() {
          // new Date(NaN).toJSON() === null
          return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
          return isValid(this);
      }

      function parsingFlags() {
          return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
          return getParsingFlags(this).overflow;
      }

      function creationData() {
          return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
          };
      }

      addFormatToken('N', 0, 0, 'eraAbbr');
      addFormatToken('NN', 0, 0, 'eraAbbr');
      addFormatToken('NNN', 0, 0, 'eraAbbr');
      addFormatToken('NNNN', 0, 0, 'eraName');
      addFormatToken('NNNNN', 0, 0, 'eraNarrow');

      addFormatToken('y', ['y', 1], 'yo', 'eraYear');
      addFormatToken('y', ['yy', 2], 0, 'eraYear');
      addFormatToken('y', ['yyy', 3], 0, 'eraYear');
      addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

      addRegexToken('N', matchEraAbbr);
      addRegexToken('NN', matchEraAbbr);
      addRegexToken('NNN', matchEraAbbr);
      addRegexToken('NNNN', matchEraName);
      addRegexToken('NNNNN', matchEraNarrow);

      addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
          input,
          array,
          config,
          token
      ) {
          var era = config._locale.erasParse(input, token, config._strict);
          if (era) {
              getParsingFlags(config).era = era;
          } else {
              getParsingFlags(config).invalidEra = input;
          }
      });

      addRegexToken('y', matchUnsigned);
      addRegexToken('yy', matchUnsigned);
      addRegexToken('yyy', matchUnsigned);
      addRegexToken('yyyy', matchUnsigned);
      addRegexToken('yo', matchEraYearOrdinal);

      addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
      addParseToken(['yo'], function (input, array, config, token) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
              match = input.match(config._locale._eraYearOrdinalRegex);
          }

          if (config._locale.eraYearOrdinalParse) {
              array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
              array[YEAR] = parseInt(input, 10);
          }
      });

      function localeEras(m, format) {
          var i,
              l,
              date,
              eras = this._eras || getLocale('en')._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
              switch (typeof eras[i].since) {
                  case 'string':
                      // truncate time
                      date = hooks(eras[i].since).startOf('day');
                      eras[i].since = date.valueOf();
                      break;
              }

              switch (typeof eras[i].until) {
                  case 'undefined':
                      eras[i].until = +Infinity;
                      break;
                  case 'string':
                      // truncate time
                      date = hooks(eras[i].until).startOf('day').valueOf();
                      eras[i].until = date.valueOf();
                      break;
              }
          }
          return eras;
      }

      function localeErasParse(eraName, format, strict) {
          var i,
              l,
              eras = this.eras(),
              name,
              abbr,
              narrow;
          eraName = eraName.toUpperCase();

          for (i = 0, l = eras.length; i < l; ++i) {
              name = eras[i].name.toUpperCase();
              abbr = eras[i].abbr.toUpperCase();
              narrow = eras[i].narrow.toUpperCase();

              if (strict) {
                  switch (format) {
                      case 'N':
                      case 'NN':
                      case 'NNN':
                          if (abbr === eraName) {
                              return eras[i];
                          }
                          break;

                      case 'NNNN':
                          if (name === eraName) {
                              return eras[i];
                          }
                          break;

                      case 'NNNNN':
                          if (narrow === eraName) {
                              return eras[i];
                          }
                          break;
                  }
              } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                  return eras[i];
              }
          }
      }

      function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? +1 : -1;
          if (year === undefined) {
              return hooks(era.since).year();
          } else {
              return hooks(era.since).year() + (year - era.offset) * dir;
          }
      }

      function getEraName() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].name;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].name;
              }
          }

          return '';
      }

      function getEraNarrow() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].narrow;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].narrow;
              }
          }

          return '';
      }

      function getEraAbbr() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].abbr;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].abbr;
              }
          }

          return '';
      }

      function getEraYear() {
          var i,
              l,
              dir,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              dir = eras[i].since <= eras[i].until ? +1 : -1;

              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (
                  (eras[i].since <= val && val <= eras[i].until) ||
                  (eras[i].until <= val && val <= eras[i].since)
              ) {
                  return (
                      (this.year() - hooks(eras[i].since).year()) * dir +
                      eras[i].offset
                  );
              }
          }

          return this.year();
      }

      function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNameRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
      }

      function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, '_erasAbbrRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }

      function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNarrowRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }

      function matchEraAbbr(isStrict, locale) {
          return locale.erasAbbrRegex(isStrict);
      }

      function matchEraName(isStrict, locale) {
          return locale.erasNameRegex(isStrict);
      }

      function matchEraNarrow(isStrict, locale) {
          return locale.erasNarrowRegex(isStrict);
      }

      function matchEraYearOrdinal(isStrict, locale) {
          return locale._eraYearOrdinalRegex || matchUnsigned;
      }

      function computeErasParse() {
          var abbrPieces = [],
              namePieces = [],
              narrowPieces = [],
              mixedPieces = [],
              i,
              l,
              eras = this.eras();

          for (i = 0, l = eras.length; i < l; ++i) {
              namePieces.push(regexEscape(eras[i].name));
              abbrPieces.push(regexEscape(eras[i].abbr));
              narrowPieces.push(regexEscape(eras[i].narrow));

              mixedPieces.push(regexEscape(eras[i].name));
              mixedPieces.push(regexEscape(eras[i].abbr));
              mixedPieces.push(regexEscape(eras[i].narrow));
          }

          this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
          this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
          this._erasNarrowRegex = new RegExp(
              '^(' + narrowPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      addFormatToken(0, ['gg', 2], 0, function () {
          return this.weekYear() % 100;
      });

      addFormatToken(0, ['GG', 2], 0, function () {
          return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
          addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear');

      // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG');

      // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1);

      // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);

      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
          input,
          week,
          config,
          token
      ) {
          week[token.substr(0, 2)] = toInt(input);
      });

      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
          week[token] = hooks.parseTwoDigitYear(input);
      });

      // MOMENTS

      function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
              this,
              input,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
          );
      }

      function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
              this,
              input,
              this.isoWeek(),
              this.isoWeekday(),
              1,
              4
          );
      }

      function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
      }

      function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
      }

      function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
              return weekOfYear(this, dow, doy).year;
          } else {
              weeksTarget = weeksInYear(input, dow, doy);
              if (week > weeksTarget) {
                  week = weeksTarget;
              }
              return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
              date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
      }

      // FORMATTING

      addFormatToken('Q', 0, 'Qo', 'quarter');

      // ALIASES

      addUnitAlias('quarter', 'Q');

      // PRIORITY

      addUnitPriority('quarter', 7);

      // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
      });

      // MOMENTS

      function getSetQuarter(input) {
          return input == null
              ? Math.ceil((this.month() + 1) / 3)
              : this.month((input - 1) * 3 + (this.month() % 3));
      }

      // FORMATTING

      addFormatToken('D', ['DD', 2], 'Do', 'date');

      // ALIASES

      addUnitAlias('date', 'D');

      // PRIORITY
      addUnitPriority('date', 9);

      // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
          // TODO: Remove "ordinalParse" fallback in next major release.
          return isStrict
              ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
              : locale._dayOfMonthOrdinalParseLenient;
      });

      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
      });

      // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true);

      // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

      // ALIASES

      addUnitAlias('dayOfYear', 'DDD');

      // PRIORITY
      addUnitPriority('dayOfYear', 4);

      // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
          config._dayOfYear = toInt(input);
      });

      // HELPERS

      // MOMENTS

      function getSetDayOfYear(input) {
          var dayOfYear =
              Math.round(
                  (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
              ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      }

      // FORMATTING

      addFormatToken('m', ['mm', 2], 0, 'minute');

      // ALIASES

      addUnitAlias('minute', 'm');

      // PRIORITY

      addUnitPriority('minute', 14);

      // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE);

      // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false);

      // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second');

      // ALIASES

      addUnitAlias('second', 's');

      // PRIORITY

      addUnitPriority('second', 15);

      // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND);

      // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false);

      // FORMATTING

      addFormatToken('S', 0, 0, function () {
          return ~~(this.millisecond() / 100);
      });

      addFormatToken(0, ['SS', 2], 0, function () {
          return ~~(this.millisecond() / 10);
      });

      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
          return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
          return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
          return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
          return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
          return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
          return this.millisecond() * 1000000;
      });

      // ALIASES

      addUnitAlias('millisecond', 'ms');

      // PRIORITY

      addUnitPriority('millisecond', 16);

      // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);

      var token, getSetMillisecond;
      for (token = 'SSSS'; token.length <= 9; token += 'S') {
          addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
          array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
          addParseToken(token, parseMs);
      }

      getSetMillisecond = makeGetSet('Milliseconds', false);

      // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName');

      // MOMENTS

      function getZoneAbbr() {
          return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;

      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== 'undefined' && Symbol.for != null) {
          proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
              return 'Moment<' + this.format() + '>';
          };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate(
          'dates accessor is deprecated. Use date instead.',
          getSetDayOfMonth
      );
      proto.months = deprecate(
          'months accessor is deprecated. Use month instead',
          getSetMonth
      );
      proto.years = deprecate(
          'years accessor is deprecated. Use year instead',
          getSetYear
      );
      proto.zone = deprecate(
          'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
          getSetZone
      );
      proto.isDSTShifted = deprecate(
          'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
          isDaylightSavingTimeShifted
      );

      function createUnix(input) {
          return createLocal(input * 1000);
      }

      function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
          return string;
      }

      var proto$1 = Locale.prototype;

      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;

      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;

      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;

      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;

      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
          var locale = getLocale(),
              utc = createUTC().set(setter, index);
          return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
          if (isNumber(format)) {
              index = format;
              format = undefined;
          }

          format = format || '';

          if (index != null) {
              return get$1(format, index, field, 'month');
          }

          var i,
              out = [];
          for (i = 0; i < 12; i++) {
              out[i] = get$1(format, i, field, 'month');
          }
          return out;
      }

      // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)
      function listWeekdaysImpl(localeSorted, format, index, field) {
          if (typeof localeSorted === 'boolean') {
              if (isNumber(format)) {
                  index = format;
                  format = undefined;
              }

              format = format || '';
          } else {
              format = localeSorted;
              index = format;
              localeSorted = false;

              if (isNumber(format)) {
                  index = format;
                  format = undefined;
              }

              format = format || '';
          }

          var locale = getLocale(),
              shift = localeSorted ? locale._week.dow : 0,
              i,
              out = [];

          if (index != null) {
              return get$1(format, (index + shift) % 7, field, 'day');
          }

          for (i = 0; i < 7; i++) {
              out[i] = get$1(format, (i + shift) % 7, field, 'day');
          }
          return out;
      }

      function listMonths(format, index) {
          return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
          return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
          eras: [
              {
                  since: '0001-01-01',
                  until: +Infinity,
                  offset: 1,
                  name: 'Anno Domini',
                  narrow: 'AD',
                  abbr: 'AD',
              },
              {
                  since: '0000-12-31',
                  until: -Infinity,
                  offset: 1,
                  name: 'Before Christ',
                  narrow: 'BC',
                  abbr: 'BC',
              },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (number) {
              var b = number % 10,
                  output =
                      toInt((number % 100) / 10) === 1
                          ? 'th'
                          : b === 1
                          ? 'st'
                          : b === 2
                          ? 'nd'
                          : b === 3
                          ? 'rd'
                          : 'th';
              return number + output;
          },
      });

      // Side effect imports

      hooks.lang = deprecate(
          'moment.lang is deprecated. Use moment.locale instead.',
          getSetGlobalLocale
      );
      hooks.langData = deprecate(
          'moment.langData is deprecated. Use moment.localeData instead.',
          getLocale
      );

      var mathAbs = Math.abs;

      function abs() {
          var data = this._data;

          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);

          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);

          return this;
      }

      function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);

          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;

          return duration._bubble();
      }

      // supports only 2.0-style add(1, 's') or add(duration)
      function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
      }

      // supports only 2.0-style subtract(1, 's') or subtract(duration)
      function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
          if (number < 0) {
              return Math.floor(number);
          } else {
              return Math.ceil(number);
          }
      }

      function bubble() {
          var milliseconds = this._milliseconds,
              days = this._days,
              months = this._months,
              data = this._data,
              seconds,
              minutes,
              hours,
              years,
              monthsFromDays;

          // if we have a mix of positive and negative values, bubble down first
          // check: https://github.com/moment/moment/issues/2166
          if (
              !(
                  (milliseconds >= 0 && days >= 0 && months >= 0) ||
                  (milliseconds <= 0 && days <= 0 && months <= 0)
              )
          ) {
              milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
              days = 0;
              months = 0;
          }

          // The following code bubbles up values, see the tests for
          // examples of what that means.
          data.milliseconds = milliseconds % 1000;

          seconds = absFloor(milliseconds / 1000);
          data.seconds = seconds % 60;

          minutes = absFloor(seconds / 60);
          data.minutes = minutes % 60;

          hours = absFloor(minutes / 60);
          data.hours = hours % 24;

          days += absFloor(hours / 24);

          // convert days to months
          monthsFromDays = absFloor(daysToMonths(days));
          months += monthsFromDays;
          days -= absCeil(monthsToDays(monthsFromDays));

          // 12 months -> 1 year
          years = absFloor(months / 12);
          months %= 12;

          data.days = days;
          data.months = months;
          data.years = years;

          return this;
      }

      function daysToMonths(days) {
          // 400 years have 146097 days (taking into account leap year rules)
          // 400 years have 12 months === 4800
          return (days * 4800) / 146097;
      }

      function monthsToDays(months) {
          // the reverse of daysToMonths
          return (months * 146097) / 4800;
      }

      function as(units) {
          if (!this.isValid()) {
              return NaN;
          }
          var days,
              months,
              milliseconds = this._milliseconds;

          units = normalizeUnits(units);

          if (units === 'month' || units === 'quarter' || units === 'year') {
              days = this._days + milliseconds / 864e5;
              months = this._months + daysToMonths(days);
              switch (units) {
                  case 'month':
                      return months;
                  case 'quarter':
                      return months / 3;
                  case 'year':
                      return months / 12;
              }
          } else {
              // handle milliseconds separately because of floating point math errors (issue #1867)
              days = this._days + Math.round(monthsToDays(this._months));
              switch (units) {
                  case 'week':
                      return days / 7 + milliseconds / 6048e5;
                  case 'day':
                      return days + milliseconds / 864e5;
                  case 'hour':
                      return days * 24 + milliseconds / 36e5;
                  case 'minute':
                      return days * 1440 + milliseconds / 6e4;
                  case 'second':
                      return days * 86400 + milliseconds / 1000;
                  // Math.floor prevents floating point math errors here
                  case 'millisecond':
                      return Math.floor(days * 864e5) + milliseconds;
                  default:
                      throw new Error('Unknown unit ' + units);
              }
          }
      }

      // TODO: Use this.as('ms')?
      function valueOf$1() {
          if (!this.isValid()) {
              return NaN;
          }
          return (
              this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6
          );
      }

      function makeAs(alias) {
          return function () {
              return this.as(alias);
          };
      }

      var asMilliseconds = makeAs('ms'),
          asSeconds = makeAs('s'),
          asMinutes = makeAs('m'),
          asHours = makeAs('h'),
          asDays = makeAs('d'),
          asWeeks = makeAs('w'),
          asMonths = makeAs('M'),
          asQuarters = makeAs('Q'),
          asYears = makeAs('y');

      function clone$1() {
          return createDuration(this);
      }

      function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
          return function () {
              return this.isValid() ? this._data[name] : NaN;
          };
      }

      var milliseconds = makeGetter('milliseconds'),
          seconds = makeGetter('seconds'),
          minutes = makeGetter('minutes'),
          hours = makeGetter('hours'),
          days = makeGetter('days'),
          months = makeGetter('months'),
          years = makeGetter('years');

      function weeks() {
          return absFloor(this.days() / 7);
      }

      var round = Math.round,
          thresholds = {
              ss: 44, // a few seconds to seconds
              s: 45, // seconds to minute
              m: 45, // minutes to hour
              h: 22, // hours to day
              d: 26, // days to month/week
              w: null, // weeks to month
              M: 11, // months to year
          };

      // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
          return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
          var duration = createDuration(posNegDuration).abs(),
              seconds = round(duration.as('s')),
              minutes = round(duration.as('m')),
              hours = round(duration.as('h')),
              days = round(duration.as('d')),
              months = round(duration.as('M')),
              weeks = round(duration.as('w')),
              years = round(duration.as('y')),
              a =
                  (seconds <= thresholds.ss && ['s', seconds]) ||
                  (seconds < thresholds.s && ['ss', seconds]) ||
                  (minutes <= 1 && ['m']) ||
                  (minutes < thresholds.m && ['mm', minutes]) ||
                  (hours <= 1 && ['h']) ||
                  (hours < thresholds.h && ['hh', hours]) ||
                  (days <= 1 && ['d']) ||
                  (days < thresholds.d && ['dd', days]);

          if (thresholds.w != null) {
              a =
                  a ||
                  (weeks <= 1 && ['w']) ||
                  (weeks < thresholds.w && ['ww', weeks]);
          }
          a = a ||
              (months <= 1 && ['M']) ||
              (months < thresholds.M && ['MM', months]) ||
              (years <= 1 && ['y']) || ['yy', years];

          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale;
          return substituteTimeAgo.apply(null, a);
      }

      // This function allows you to set the rounding function for relative time strings
      function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === undefined) {
              return round;
          }
          if (typeof roundingFunction === 'function') {
              round = roundingFunction;
              return true;
          }
          return false;
      }

      // This function allows you to set a threshold for relative time strings
      function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === undefined) {
              return false;
          }
          if (limit === undefined) {
              return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === 's') {
              thresholds.ss = limit - 1;
          }
          return true;
      }

      function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
              return this.localeData().invalidDate();
          }

          var withSuffix = false,
              th = thresholds,
              locale,
              output;

          if (typeof argWithSuffix === 'object') {
              argThresholds = argWithSuffix;
              argWithSuffix = false;
          }
          if (typeof argWithSuffix === 'boolean') {
              withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === 'object') {
              th = Object.assign({}, thresholds, argThresholds);
              if (argThresholds.s != null && argThresholds.ss == null) {
                  th.ss = argThresholds.s - 1;
              }
          }

          locale = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale);

          if (withSuffix) {
              output = locale.pastFuture(+this, output);
          }

          return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
          return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
          // for ISO strings we do not use the normal bubbling rules:
          //  * milliseconds bubble up until they become hours
          //  * days do not bubble at all
          //  * months bubble up until they become years
          // This is because there is no context-free conversion between hours and days
          // (think of clock changes)
          // and also not between days and months (28-31 days per month)
          if (!this.isValid()) {
              return this.localeData().invalidDate();
          }

          var seconds = abs$1(this._milliseconds) / 1000,
              days = abs$1(this._days),
              months = abs$1(this._months),
              minutes,
              hours,
              years,
              s,
              total = this.asSeconds(),
              totalSign,
              ymSign,
              daysSign,
              hmsSign;

          if (!total) {
              // this is the same as C#'s (Noda) and python (isodate)...
              // but not other JS (goog.date)
              return 'P0D';
          }

          // 3600 seconds -> 60 minutes -> 1 hour
          minutes = absFloor(seconds / 60);
          hours = absFloor(minutes / 60);
          seconds %= 60;
          minutes %= 60;

          // 12 months -> 1 year
          years = absFloor(months / 12);
          months %= 12;

          // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
          s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

          totalSign = total < 0 ? '-' : '';
          ymSign = sign(this._months) !== sign(total) ? '-' : '';
          daysSign = sign(this._days) !== sign(total) ? '-' : '';
          hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

          return (
              totalSign +
              'P' +
              (years ? ymSign + years + 'Y' : '') +
              (months ? ymSign + months + 'M' : '') +
              (days ? daysSign + days + 'D' : '') +
              (hours || minutes || seconds ? 'T' : '') +
              (hours ? hmsSign + hours + 'H' : '') +
              (minutes ? hmsSign + minutes + 'M' : '') +
              (seconds ? hmsSign + s + 'S' : '')
          );
      }

      var proto$2 = Duration.prototype;

      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;

      proto$2.toIsoString = deprecate(
          'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
          toISOString$1
      );
      proto$2.lang = lang;

      // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf');

      // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
          config._d = new Date(parseFloat(input) * 1000);
      });
      addParseToken('x', function (input, array, config) {
          config._d = new Date(toInt(input));
      });

      //! moment.js

      hooks.version = '2.29.1';

      setHookCallback(createLocal);

      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;

      // currently HTML5 input type only supports 24-hour formats
      hooks.HTML5_FMT = {
          DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
          DATE: 'YYYY-MM-DD', // <input type="date" />
          TIME: 'HH:mm', // <input type="time" />
          TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
          TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
          WEEK: 'GGGG-[W]WW', // <input type="week" />
          MONTH: 'YYYY-MM', // <input type="month" />
      };

      return hooks;

  })));
  });

  var script$g = app.mgComponent('mgDate', {
    meta: {
      title: 'Date selection',
      icon: 'far fa-calendar',
      category: 'Simple Inputs',
      preferId: true,
      format: function format(v) {
        if (!v) return '';
        return moment(v).format(moment.HTML5_FMT.DATE);
      },
      formatClass: 'text-center'
    },
    data: function data() {
      return {
        formData: undefined
      };
    },
    props: {
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
    created: function created() {
      var _this = this;

      this.$debugging = false;
      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));

        if (_.isString(_this.data)) {
          var d = moment(_this.data);
          if (!d.isValid()) return reply("".concat(_this.$props.title, " must be a date"));
          if (_this.$props.min && d.isBefore(_this.$props.min)) return reply("".concat($props.title, " is too early (earliest date is ").concat(_this.$props.min, ")"));
          if (_this.$props.max && d.isAfter($props.max)) return reply("".concat($props.title, " is too late (latest date is ").concat(_this.$props.max, ")"));
        }
      });
      this.$watch('data', function () {
        _this.formData = moment(_this.data).format(moment.HTML5_FMT.DATE);
      }, {
        immediate: true
      });
      this.$watch('formData', function () {
        _this.data = moment(_this.formData, moment.HTML5_FMT.DATE).toISOString();
      });
    }
  });

  /* script */
  const __vue_script__$g = script$g;

  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-date" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formData,
            expression: "formData"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "date", max: _vm.$props.max, min: _vm.$props.min },
        domProps: { value: _vm.formData },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.formData = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      this.$debugging
        ? _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n\t\t\tRaw data\n\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("pre", [_vm._v(_vm._s(_vm.$data))])
            ])
          ])
        : _vm._e()
    ])
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
    
    /* style inject shadow dom */
    

    
    const __vue_component__$g = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
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

  var mgDate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$g
  });

  var script$h = app.mgComponent('mgDatetime', {
    meta: {
      title: 'Datetime selection',
      icon: 'far fa-calendar',
      category: 'Simple Inputs',
      preferId: true,
      format: function format(v) {
        if (!v) return '';
        return moment(v).format(moment.HTML5_FMT.DATETIME_LOCAL);
      },
      formatClass: 'text-center'
    },
    data: function data() {
      return {
        formData: undefined
      };
    },
    props: {
      min: {
        type: 'mgDatetime',
        title: 'Earliest date'
      },
      max: {
        type: 'mgDatetime',
        title: 'Latest date'
      },
      required: {
        type: 'mgToggle',
        "default": false
      }
    },
    created: function created() {
      var _this = this;

      this.$debugging = false;
      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));

        if (_.isString(_this.data)) {
          var d = moment(_this.data);
          if (!d.isValid()) return reply("".concat(_this.$props.title, " must be a date"));
          if (_this.$props.min && d.isBefore(_this.$props.min)) return reply("".concat($props.title, " is too early (earliest date is ").concat(_this.$props.min, ")"));
          if (_this.$props.max && d.isAfter($props.max)) return reply("".concat($props.title, " is too late (latest date is ").concat(_this.$props.max, ")"));
        }
      });
      this.$watch('data', function () {
        _this.formData = moment(_this.data).format(moment.HTML5_FMT.DATETIME_LOCAL);
      }, {
        immediate: true
      });
      this.$watch('formData', function () {
        _this.data = moment(_this.formData, moment.HTML5_FMT.DATETIME_LOCAL).toISOString();
      });
    }
  });

  /* script */
  const __vue_script__$h = script$h;

  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-datetime" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formData,
            expression: "formData"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "datetime-local",
          max: _vm.$props.max,
          min: _vm.$props.min
        },
        domProps: { value: _vm.formData },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.formData = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      this.$debugging
        ? _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n\t\t\tRaw data\n\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("pre", [_vm._v(_vm._s(_vm.$data))])
            ])
          ])
        : _vm._e()
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
    
    /* style inject shadow dom */
    

    
    const __vue_component__$h = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
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

  var mgDatetime = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$h
  });

  var script$i = app.mgComponent('mgEmail', {
    meta: {
      title: 'Email address',
      icon: 'far fa-at',
      category: 'Simple Inputs',
      preferId: true,
      format: function format(v) {
        if (!v) return '';
        return "<a href=\"mailto:".concat(v, "\">").concat(v, "</a>");
      }
    },
    props: {
      placeholder: {
        type: 'mgText',
        help: 'Ghost text to display when the text box has no value'
      },
      required: {
        type: 'mgToggle',
        "default": false
      },
      disabled: {
        type: 'mgToggle',
        "default": false
      },
      readonly: {
        type: 'mgToggle',
        "default": false
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    }
  });

  /* script */
  const __vue_script__$i = script$i;

  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-email" }, [
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
          type: "email",
          disabled: _vm.$props.disabled,
          placeholder: _vm.$props.placeholder,
          readonly: _vm.$props.readonly
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
    
    /* style inject shadow dom */
    

    
    const __vue_component__$i = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
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

  var mgEmail = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$i
  });

  var script$j = app.mgComponent('mgError', {
    meta: {
      title: 'Error display',
      icon: 'far fa-exclamation-circle',
      category: 'General Decoration'
    },
    props: {
      text: {
        type: 'mgText'
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
    return _c("div", { staticClass: "alert alert-danger" }, [
      _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.text) + "\n")
    ])
  };
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

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
    

    
    const __vue_component__$j = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
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

  var mgError = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$j
  });

  var script$k = Vue.component('mgFormEditorControls', {
    inject: ['$mgFormEditor'],
    props: {
      config: {
        type: Object,
        required: true
      }
    }
  });

  /* script */
  const __vue_script__$k = script$k;

  /* template */
  var __vue_render__$h = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-form-editor-controls" }, [
      _c("div", { staticClass: "mg-form-editor-controls-title" }, [
        _vm._v("\n\t\t" + _vm._s(_vm.$props.config.type) + "\n\t\t"),
        _vm.$props.config.id
          ? _c("span", { staticClass: "mg-form-editor-controls-id" }, [
              _vm._v("\n\t\t\t#" + _vm._s(_vm.$props.config.id) + "\n\t\t")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mg-form-editor-controls-buttons" }, [
        _c("a", {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: "Insert widget after here",
              expression: "'Insert widget after here'"
            }
          ],
          staticClass: "far fa-plus",
          on: {
            click: function($event) {
              $event.stopPropagation();
              _vm.$mgFormEditor.addTarget = _vm.$props.config.$specPath;
              _vm.$mgFormEditor.addOrientation = "after";
              _vm.$mgFormEditor.setMode("adding", false);
            }
          }
        }),
        _vm._v(" "),
        _c("a", {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: "Duplicate widget",
              expression: "'Duplicate widget'"
            }
          ],
          staticClass: "far fa-clone",
          on: {
            click: function($event) {
              return _vm.$mgFormEditor.duplicateWidget(
                _vm.$props.config.$specPath
              )
            }
          }
        }),
        _vm._v(" "),
        _c("a", {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: "Move widget up",
              expression: "'Move widget up'"
            }
          ],
          staticClass: "far fa-arrow-up",
          on: {
            click: function($event) {
              return _vm.$mgFormEditor.moveWidget(
                _vm.$props.config.$specPath,
                "up"
              )
            }
          }
        }),
        _vm._v(" "),
        _c("a", {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: "Move widget down",
              expression: "'Move widget down'"
            }
          ],
          staticClass: "far fa-arrow-down",
          on: {
            click: function($event) {
              return _vm.$mgFormEditor.moveWidget(
                _vm.$props.config.$specPath,
                "down"
              )
            }
          }
        }),
        _vm._v(" "),
        _c("a", {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: "Delete widget",
              expression: "'Delete widget'"
            }
          ],
          staticClass: "far fa-trash danger",
          on: {
            click: function($event) {
              $event.stopPropagation();
              return _vm.$mgFormEditor.removeWidget(_vm.$props.config.$specPath)
            }
          }
        })
      ])
    ])
  };
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$k = function (inject) {
      if (!inject) return
      inject("data-v-11a6d64e_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Component outlines {{{ */\n/* Neutral / Deselected {{{ */\n.mg-form-editor .mg-component {\n\tborder: 2px solid transparent;\n\tborder-radius: 5px;\n}\n/* }}} */\n/* Hover {{{ */\n.mg-form-editor .mg-component.editHover {\n\tborder: 2px dashed var(--mg-form-editor-hover-bg);\n}\n/* }}} */\n/* Editing {{{ */\n.mg-form-editor .mg-component.editEditing {\n\tborder: 2px solid var(--mg-form-editor-selected-bg);\n}\n/* }}} */\n/* }}} */\n\n/* Edit controls {{{ */\n.mg-form-editor-controls {\n\tposition: absolute;\n\ttransform: translate(2px, -30px);\n\twidth: calc(100% - 20px);\n}\n\n/* Title {{{ */\n.mg-form-editor-controls .mg-form-editor-controls-title,\n.mg-form-editor-controls .mg-form-editor-controls-buttons {\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tpadding: 2px 8px;\n}\n.mg-form-editor-controls .mg-form-editor-controls-title {\n\tdisplay: inline-block;\n}\n.mg-component.editHover .mg-form-editor-controls-title {\n\tbackground: var(--mg-form-editor-hover-bg);\n\tcolor: var(--mg-form-editor-hover-fg);\n}\n.mg-component.editEditing .mg-form-editor-controls-title {\n\tbackground: var(--mg-form-editor-selected-bg);\n\tcolor: var(--mg-form-editor-selected-fg);\n}\n.mg-component .mg-form-editor-controls-title .mg-form-editor-controls-id {\n\tfont-weight: bold;\n}\n/* }}} */\n\n/* Buttons {{{ */\n.mg-form-editor-controls .mg-form-editor-controls-buttons {\n\tdisplay: none;\n\tfloat: right;\n\tbackground: var(--mg-form-editor-selected-bg);\n\tcolor: var(--mg-form-editor-selected-fg);\n}\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons {\n\tdisplay: inline-block;\n}\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons > a {\n\tborder-radius: 50%;\n\tpadding: 4px 5px;\n}\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons > a:hover {\n\tbackground: var(--mg-form-editor-selected-highlight);\n}\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons > a.danger:hover {\n\tbackground: var(--mg-form-editor-selected-danger);\n}\n/* }}} */\n/* }}} */\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgFormEditorControls.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8BA,2BAAA;AACA,6BAAA;AACA;CACA,6BAAA;CACA,kBAAA;AACA;AACA,QAAA;AACA,cAAA;AACA;CACA,iDAAA;AACA;AACA,QAAA;AACA,gBAAA;AACA;CACA,mDAAA;AACA;AACA,QAAA;AACA,QAAA;;AAEA,sBAAA;AACA;CACA,kBAAA;CACA,gCAAA;CACA,wBAAA;AACA;;AAEA,cAAA;AACA;;CAEA,2BAAA;CACA,4BAAA;CACA,gBAAA;AACA;AAEA;CACA,qBAAA;AACA;AAEA;CACA,0CAAA;CACA,qCAAA;AACA;AAEA;CACA,6CAAA;CACA,wCAAA;AACA;AAEA;CACA,iBAAA;AACA;AACA,QAAA;;AAEA,gBAAA;AACA;CACA,aAAA;CACA,YAAA;CACA,6CAAA;CACA,wCAAA;AACA;AAEA;CACA,qBAAA;AACA;AAEA;CACA,kBAAA;CACA,gBAAA;AACA;AAEA;CACA,oDAAA;AACA;AAEA;CACA,iDAAA;AACA;AACA,QAAA;AACA,QAAA","file":"mgFormEditorControls.vue","sourcesContent":["<script>\nexport default Vue.component('mgFormEditorControls', {\n\tinject: ['$mgFormEditor'],\n\tprops: {\n\t\tconfig: {type: Object, required: true},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-form-editor-controls\">\n\t\t<div class=\"mg-form-editor-controls-title\">\n\t\t\t{{$props.config.type}}\n\t\t\t<span v-if=\"$props.config.id\" class=\"mg-form-editor-controls-id\">\n\t\t\t\t#{{$props.config.id}}\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"mg-form-editor-controls-buttons\">\n\t\t\t<!-- NOTE: Add .stop to ignore next mouse click which would select the element under the cursor -->\n\t\t\t<a @click.stop=\"$mgFormEditor.addTarget = $props.config.$specPath; $mgFormEditor.addOrientation = 'after'; $mgFormEditor.setMode('adding', false)\" class=\"far fa-plus\" v-tooltip=\"'Insert widget after here'\"/>\n\t\t\t<a @click=\"$mgFormEditor.duplicateWidget($props.config.$specPath)\" class=\"far fa-clone\" v-tooltip=\"'Duplicate widget'\"/>\n\t\t\t<!-- FIXME: Not yet working <a @click=\"$mgFormEditor.dragWidget($props.config.$specPath)\" class=\"far fa-arrows-alt\" v-tooltip=\"'Move widget'\"/> -->\n\t\t\t<a @click=\"$mgFormEditor.moveWidget($props.config.$specPath, 'up')\" class=\"far fa-arrow-up\" v-tooltip=\"'Move widget up'\"/>\n\t\t\t<a @click=\"$mgFormEditor.moveWidget($props.config.$specPath, 'down')\" class=\"far fa-arrow-down\" v-tooltip=\"'Move widget down'\"/>\n\t\t\t<a @click.stop=\"$mgFormEditor.removeWidget($props.config.$specPath)\" class=\"far fa-trash danger\" v-tooltip=\"'Delete widget'\"/>\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n/* Component outlines {{{ */\n/* Neutral / Deselected {{{ */\n.mg-form-editor .mg-component {\n\tborder: 2px solid transparent;\n\tborder-radius: 5px;\n}\n/* }}} */\n/* Hover {{{ */\n.mg-form-editor .mg-component.editHover {\n\tborder: 2px dashed var(--mg-form-editor-hover-bg);\n}\n/* }}} */\n/* Editing {{{ */\n.mg-form-editor .mg-component.editEditing {\n\tborder: 2px solid var(--mg-form-editor-selected-bg);\n}\n/* }}} */\n/* }}} */\n\n/* Edit controls {{{ */\n.mg-form-editor-controls {\n\tposition: absolute;\n\ttransform: translate(2px, -30px);\n\twidth: calc(100% - 20px);\n}\n\n/* Title {{{ */\n.mg-form-editor-controls .mg-form-editor-controls-title,\n.mg-form-editor-controls .mg-form-editor-controls-buttons {\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tpadding: 2px 8px;\n}\n\n.mg-form-editor-controls .mg-form-editor-controls-title {\n\tdisplay: inline-block;\n}\n\n.mg-component.editHover .mg-form-editor-controls-title {\n\tbackground: var(--mg-form-editor-hover-bg);\n\tcolor: var(--mg-form-editor-hover-fg);\n}\n\n.mg-component.editEditing .mg-form-editor-controls-title {\n\tbackground: var(--mg-form-editor-selected-bg);\n\tcolor: var(--mg-form-editor-selected-fg);\n}\n\n.mg-component .mg-form-editor-controls-title .mg-form-editor-controls-id {\n\tfont-weight: bold;\n}\n/* }}} */\n\n/* Buttons {{{ */\n.mg-form-editor-controls .mg-form-editor-controls-buttons {\n\tdisplay: none;\n\tfloat: right;\n\tbackground: var(--mg-form-editor-selected-bg);\n\tcolor: var(--mg-form-editor-selected-fg);\n}\n\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons {\n\tdisplay: inline-block;\n}\n\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons > a {\n\tborder-radius: 50%;\n\tpadding: 4px 5px;\n}\n\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons > a:hover {\n\tbackground: var(--mg-form-editor-selected-highlight);\n}\n\n.mg-component.editEditing .mg-form-editor-controls .mg-form-editor-controls-buttons > a.danger:hover {\n\tbackground: var(--mg-form-editor-selected-danger);\n}\n/* }}} */\n/* }}} */\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$k = undefined;
    /* module identifier */
    const __vue_module_identifier__$k = undefined;
    /* functional template */
    const __vue_is_functional_template__$k = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$k = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$k,
      __vue_script__$k,
      __vue_scope_id__$k,
      __vue_is_functional_template__$k,
      __vue_module_identifier__$k,
      false,
      createInjector,
      undefined,
      undefined
    );

  /**
  * mg-form-editor - Drag-and-drop form designer for MacGyver
  *
  * @param {Object|Array} config mgForm compatible spec to edit
  * @param {Object} [data] Optional data bindings for the form
  * @param {array<Object>} [verbs] Verb edit mgForm to show in the small edit sidebar, defaults to selecting widgets / adding widgets buttons
  * @param {string} [asideClassActive="mgfe-aside aside-right open"] Class to set all editing sidebars to when inactive
  * @param {string} [asideClassInactive="mgfe-aside aside-right"] Class to set all editing sidebar to when inactive
  * @param {string} [asideClassModeCollapsed="aside-sm"] Class to associate with the smaller toolkit display when editing
  * @param {string} [asideClassModeToc="aside-sm"] Class to associate with the Table-Of-Contents sidebar
  * @param {string} [asideClassModeAdding=""] Class to associate with the editing sidebar when adding
  * @param {string} [asideClassModeEditing=""] Class to associate with the editing sidebar when editing
  *
  * @emits change Emitted as `(config)` on any item configuration change. WARNING, subscribing to this involves an entire deep copy of the config structure, subscribe to changeItem if possible
  * @emits changeItem Emitted as `({path, value})` when a single config item changes, inexpensive compared to `change`
  */

  var script$l = app.mgComponent('mgFormEditor', {
    provide: function provide() {
      return {
        $mgFormEditor: this
      };
    },
    components: {
      mgFormEditorControls: __vue_component__$k
    },
    data: function data() {
      return {
        mode: 'collapsed',
        // ENUM: collapsed, toc, editing, adding
        id: this.$macgyver.nextId(),
        // ID of the editing form item
        editing: undefined,
        // The active item we are editing
        widgetListMode: 'grid',
        // Asides
        editConfig: [],
        editData: {},
        addTarget: undefined,
        // Spec path to add after, if any
        addOrientation: 'after'
      };
    },
    props: {
      // FIXME: Does not like array type specs.
      config: [Object, Array],
      // Can be a single object, array of objects or shorthand style
      data: Object,
      asideClassActive: {
        type: String,
        "default": 'mgfe-aside aside-right open'
      },
      asideClassInactive: {
        type: String,
        "default": 'mgfe-aside aside-right'
      },
      asideClassModeCollapsed: {
        type: String,
        "default": 'aside-sm'
      },
      asideClassModeToc: {
        type: String,
        "default": ''
      },
      asideClassModeAdding: {
        type: String,
        "default": ''
      },
      asideClassModeEditing: {
        type: String,
        "default": ''
      },
      generalVerbs: {
        type: Array,
        "default": function _default() {
          var _this$$prompt;

          return [{
            type: 'mgButton',
            action: "setMode()",
            "class": 'btn btn-primary text-white px-2',
            icon: 'fa fa-mouse-pointer fa-fw',
            showTitle: false,
            // FIXME: Why were tooltips failing as Object type?
            tooltip: 'Select widgets to edit' //tooltip: "{content: 'Select widgets to edit', placement: 'left'}",

          }, {
            type: 'mgButton',
            action: "setMode('toc')",
            "class": 'btn btn-outline-light border-0 px-2',
            icon: 'fa fa-stream fa-fw',
            showTitle: false,
            tooltip: 'Select widgets to edit' //tooltip: {content: 'Select widgets to edit', placement: 'left'},

          }].concat(_toConsumableArray((_this$$prompt = this.$prompt) !== null && _this$$prompt !== void 0 && _this$$prompt.macgyver ? [{
            // Include JSON editing if $prompt.macgyver() is available
            type: 'mgButton',
            action: "rawEdit()",
            "class": 'btn btn-outline-light border-0 px-2',
            icon: 'fa fa-code fa-fw',
            showTitle: false,
            tooltip: 'Edit the form contents as JSON' //tooltip: {content: 'Edit the form contents as JSON', placement: 'left'},

          }] : []), [{
            type: 'mgButton',
            action: "setMode('adding')",
            "class": 'btn btn-outline-light border-0 px-2',
            icon: 'far fa-plus fa-fw',
            showTitle: false,
            tooltip: 'Add a new widget' //tooltip: {content: 'Add a new widget', placement: 'left'},

          }]);
        }
      }
    },
    created: function created() {
      this.$debugging = true;
    },
    mounted: function mounted() {
      var _this = this;

      /*
      // Potential for highlighting components within nested mgContainer
      this.$refs.form.$on('mgComponent.click', (component, e) => {
      	e.stopPropagation();
      	e.preventDefault();
      	this.editWidget(component.config.$specPath);
      });
      	this.$refs.form.$on('mgComponent.mouseEnter', (component, e) => {
      	if (component.config.type === 'mgContainer') return;
      	e.stopPropagation();
      	//e.preventDefault();
      	var target = this.$refs.form.getComponentBySpecPath(component.config.$specPath);
      	//if (target.$type === 'mgContainer') return;
      	// FIXME: Always 2 parents up? Traverse up to next highest mgContainer?
      	var container = target.$parent.$parent;
      	if (!container) return;
      	var targetIndex = container.findChildIndex(target);
      	container.$set(container.highlights, targetIndex, (container.highlights[targetIndex] || []).concat(['editHover']));
      });
      	this.$refs.form.$on('mgComponent.mouseLeave', (component, e) => {
      	if (component.config.type === 'mgContainer') return;
      	e.stopPropagation();
      	//e.preventDefault();
      	var target = this.$refs.form.getComponentBySpecPath(component.config.$specPath);
      	//if (target.$type === 'mgContainer') return;
      	// FIXME: Always 2 parents up? Traverse up to next highest mgContainer?
      	var container = target.$parent.$parent;
      	if (!container) return;
      	var targetIndex = container.findChildIndex(target);
      	container.$set(container.highlights, targetIndex, (container.highlights[targetIndex] || []).filter(c => c != 'editHover'));
      });
      */
      // FIXME: (e.target).closest... mg-container CSS class...
      this.$refs.form.$on('mgContainer.click', function (container, specPath, componentIndex, e) {
        e.stopPropagation();
        e.preventDefault();

        _this.editWidget(specPath);
      });
      this.$refs.form.$on('mgContainer.mouseEnter', function (container, specPath, componentIndex, e) {
        var component = _this.$refs.form.getComponentBySpecPath(specPath);

        var componentIndex = container.findChildIndex(component);
        container.$set(container.highlights, componentIndex, (container.highlights[componentIndex] || []).concat(['editHover']));
      });
      this.$refs.form.$on('mgContainer.mouseLeave', function (container, specPath, componentIndex, e) {
        var component = _this.$refs.form.getComponentBySpecPath(specPath);

        var componentIndex = container.findChildIndex(component);
        container.$set(container.highlights, componentIndex, (container.highlights[componentIndex] || []).filter(function (c) {
          return c != 'editHover';
        }));
      });
    },
    methods: {
      /**
      * Stop editing / adding and return to regular mode
      * @param {string} [mode="collapsed"] Mode to switch to
      * @param {boolean} [clearHighlight=true] Also attempt to clear out any highlight and reset the aside panes
      */
      setMode: function setMode() {
        var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'collapsed';
        var clearHighlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        // Deselect the existing item (if we have one)
        if (this.editing && clearHighlight) {
          this.setComponentHighlight(this.editing, []);
          this.editing = undefined;
        }

        this.$set(this, 'mode', mode || 'collapsed');
        return true; // Signal to mgForm that we have handled this action
      },

      /**
      * Delete the active widget
      */
      deleteWidget: function deleteWidget() {
        if (!this.editing) {
          this.$macgyver.notify.warn('No widget selected to delete'); // Not editing anyway
        } else {
          this.removeWidget(this.editing.$props.$specPath);
        }

        return true; // Signal to mgForm that we have handled this action
      },

      /**
      * Set the component.highlight[index] to the given list of CSS classes
      * @param {VueController} component The VueController to set the highlight of within its mgContainer
      * @param {array<string>} classes Array of string classes to set
      */
      setComponentHighlight: function setComponentHighlight(component, classes) {
        if (!_.isArray(classes)) throw new Error('setComponentHighlight must be passed an array');
        var container = false;
        component.$emit.up('mgIdentify', function (component) {
          if (!container && component.$props.$type == 'mgContainer') container = component;
        });
        if (!container) return console.warn('[mgFormEditor] setComponentHighlight component failed to find enclosing container', {
          component: component
        });
        var childOffset = container.findChildIndex(component);
        if (childOffset === false) return console.warn('[mgFormEditor]', 'Cannot locate component within container', {
          container: container,
          component: component
        });
        console.log('Set highlight', childOffset, classes);
        container.$set(container.highlights, childOffset, classes);
      },

      /**
      * Edit a widget by its specPath or component
      * @param {VueComponent|string} component Either the VueComponent to edit or the specPath of the widget to edit
      */
      editWidget: function editWidget(component) {
        var component; // The Vue component from the widget path

        if (!_.isObject(component) && !_.isString(component)) throw new Error('editWidget requires either a specPath or VueComponent');
        if (_.isObject(component) && !component._uid) throw new Error('editWidget() requires a valid VueComponent object (or specPath string)');
        if (_.isString(component) || _.isArray(component)) component = this.$refs.form.getComponentBySpecPath(component); // Resolve specPath into actual component if eneded

        this.setMode();
        this.$set(this, 'editing', component);
        this.$set(this, 'mode', 'editing');
        this.setComponentHighlight(component, ['editEditing']);
        var widget = this.$macgyver.widgets[component.$props.$type];

        if (widget) {
          this.$set(this, 'editConfig', [{
            // Header area
            type: 'mgContainer',
            layout: 'columns',
            border: false,
            rowClass: 'aside-header',
            showTitle: false,
            items: [{
              id: 'metaIcon',
              type: 'mgIcon'
            }, {
              id: 'id',
              type: 'mgText',
              placeholder: 'No ID'
            }, {
              type: 'mgContainer',
              layout: 'columns',
              border: false,
              showTitle: false,
              rowClass: 'aside-actions',
              items: [{
                type: 'mgButton',
                action: 'deleteWidget',
                "class": 'btn btn-link btn-link-danger btn-xs',
                icon: 'far fa-trash',
                tooltip: 'Delete this widget'
              }, {
                type: 'mgButton',
                action: 'setMode',
                text: '',
                "class": 'btn btn-link btn-xs',
                icon: 'far fa-times'
              }]
            }]
          }, {
            // Body area
            type: 'mgContainer',
            layout: 'form',
            formClass: 'titles-above',
            rowClass: 'aside-body',
            showTitle: false,
            items: _.map(widget.props, function (v, k) {
              return _.set(v, 'id', k);
            })
          }]);
          this.$debug('Set editConfig', this.editConfig);
          this.$set(this, 'editData', _(widget.props).mapValues(function (v, k) {
            return _.get(component.$props, k, _.get(widget.props, k)["default"]);
          }).set('id', component.$props.$dataPath).set('metaIcon', widget.meta.icon).value());
          this.$debug('Set editData', this.editData);
        } else {
          var _component$$props;

          this.$macgyver.notify.warn("Cannot edit unknown widget \"".concat(((_component$$props = component.$props) === null || _component$$props === void 0 ? void 0 : _component$$props.$type) || 'Unknown type', "\""));
          this.setMode();
        }
      },

      /**
      * Change the value of a nested config path
      * @param {string} path The dotted / array notation path to mutate
      * @param {*} value The value to set, if undefined the key is removed
      * @emits change Emitted with the entire deep copied config object
      * @emits changeItem Emitted as `{path, value}` for a single item mutation
      */
      mutatePath: function mutatePath(path, value) {
        console.log('mutatePath', path, value); // Only bother cloning the entire object if something is listening to 'change'

        if (this.$emit.hasListeners('change')) {
          var configCopy = _.cloneDeep(this.config);

          this.$setPath(configCopy, path, value);
          this.$emit('change', configCopy);
        }

        this.$emit('changeItem', {
          path: path,
          value: value
        });
      },

      /**
      * Splice items into a deep copy of the config object, emitting change events
      * @param {string} path The dotted / array notation path to mutate
      * @param {number} index The index to work from
      * @param {number} [remove] The number of items to remove
      * @param {*} [value...] The value(s) to set, if undefined the key is removed
      * @emits change Emitted with the entire deep copied config object
      * @emits changeItem Emitted as `{path, value}` for a single item mutation
      */
      mutateSplice: function mutateSplice(path, index, remove) {
        console.log('mutateSplice', path, index, remove);

        var configCopy = _.cloneDeep(this.config); // Copy entire object


        var spliceContents = _.get(configCopy, path); // Extract path from nested object


        if (!_.isArray(spliceContents)) throw new Error('Refusing to splice a non-array');

        for (var _len = arguments.length, value = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          value[_key - 3] = arguments[_key];
        }

        spliceContents.splice.apply(spliceContents, [index, remove].concat(value)); // Perform splice

        this.$setPath(configCopy, path, spliceContents); // Place back in mutated object

        this.$emit('change', configCopy);
        this.$emit('changeItem', {
          path: path,
          value: spliceContents
        });
      },

      /**
      * Insert a widget at a given path
      * @param {Object} widget The widget to insert, this must contain at least a `type` key
      * @param {Object} [options] Additional options
      * @param {string|array} [options.specPath] The lodash notation specPath to target instead of the last element on the form
      * @param {string} [options.orientation='after'] Where to insert. ENUM: 'before', 'after', 'last'
      * @param {boolean} [options.useContainer=true] If no spec path, try and fit the new widget within the last container if one exists
      * @param {boolean} [options.allocateTitle=true] Try to allocate a title if not supplied
      * @param {boolean} [options.allocateId=true] Try to allocate an ID if not supplied and the widget has `preferId`
      * @param {boolean} [options.edit=true] Show the edit dialog after inserting the component
      * @returns {Object} The inserted widget object (complete with ID if allocateId is specified)
      */
      insertWidget: function insertWidget(widget, options) {
        var _$last;

        console.log('insertWidget', widget, options);

        var settings = _objectSpread2({
          specPath: undefined,
          orientation: 'after',
          useContainer: true,
          allocateTitle: true,
          allocateId: true,
          edit: true
        }, options);

        if (!widget.type) throw new Error('Widget.type must be specified as a minimum for insertWidget()'); // Ensure containers have items

        if (widget.type === 'mgContainer' && !widget.items) widget.items = []; // options.allocateTitle / settings.alloacteId {{{

        if ( // A field we want is missing
        settings.allocateTitle && !widget.title || settings.allocateId && !widget.id) {
          // Compute how many of this widget are on the form
          var widgetOffset = this.$macgyver.flatten(this.$props.config, {
            want: 'array',
            type: 'spec'
          }).reduce(function (i, w) {
            return w.type == widget.type ? i + 1 : i;
          }, 0);
          if (settings.allocateTitle && !widget.title) widget.title = this.$macgyver.widgets[widget.type].meta.title + String(widgetOffset == 0 ? '' : widgetOffset); // Guess at an ID

          if (settings.allocateId && !widget.id && this.$macgyver.widgets[widget.type].meta.preferId) widget.id = _.chain(widget.type).replace(/^mg/, '') // Remove first `mg` bit
          .camelCase().replace(/$/, widgetOffset == 0 ? '' : widgetOffset) // Append numeric offset (if there is more than one of this type)
          .value();
        } // }}}
        // FIXME: Support for array specs without a root mgContainer.


        switch (settings.orientation) {
          case 'last':
            if ( // Container -> Container:Last -> New widget
            settings.useContainer // Insert within container?
            && this.config.type == 'mgContainer' // First item is a container
            && ((_$last = _.last(this.config.items)) === null || _$last === void 0 ? void 0 : _$last.type) == 'mgContainer' // Last child is also a container - use this
            ) {
                var _$last2;

                this.mutateSplice("items.".concat(this.config.items.length - 1, ".items"), ((_$last2 = _.last(this.config.items)) === null || _$last2 === void 0 ? void 0 : _$last2.items.length) || 0, 0, widget);
              } else if ( // Container:Last -> New widget
            settings.useContainer // Insert within container?
            && this.config.type == 'mgContainer' // First item is a container
            ) {
                this.mutateSplice('items', this.config.items.length, 0, widget);
              } else if (_.isArray(this.config)) {
              // Append to end of config array
              this.mutateSplice('', this.config.items.length, 0, widget);
            } else {
              throw new Error('Dont know how to append widget to form config');
            }

            break;

          case 'before':
          case 'after':
            if (!settings.specPath) throw new Error('Inserting with orientations before / after requires a specPath');
            var parentItems = _.isArray(settings.specPath) ? settings.specPath : settings.specPath.split('.');
            var targetWidget = parentItems.pop();
            this.mutateSplice(parentItems, settings.orientation == 'after' ? +targetWidget + 1 : targetWidget, 0, widget);
            break;

          default:
            throw new Error("Dont know how to handle insert of component at with orientation \"".concat(settings.orientation, "\""));
        }

        if (settings.edit) {
          console.warn('FIXME: Unsupported post edit when editing components'); // this.editWidget(widget.id);
        }

        return widget;
      },

      /**
      * Remove a widget by its specPath
      * @param {string|array} specPath The lodash notation specPath to remove
      */
      removeWidget: function removeWidget(specPath) {
        this.setMode(); // Reset mode to close edit panel
        // FIXME: Splitting non-array, condition backwards?

        var parentItems = _.isArray(specPath) ? specPath : specPath.split('.');
        var targetIndex = parentItems.pop();
        this.mutateSplice(parentItems, targetIndex, 1);
      },

      /**
      * Duplicate a widget by its specPath
      * @param {string|array} specPath The lodash notation specPath to remove
      */
      duplicateWidget: function duplicateWidget(specPath) {
        var _this2 = this;

        var parentItems = _.isArray(specPath) ? specPath : specPath.split('.');
        var targetIndex = parentItems.pop();
        this.setMode(); // Reset mode to close edit panel

        this.mutatePath(parentItems, _(_.get(this.config, parentItems)).map(function (v, i) {
          return i == targetIndex // Duplicate this item when we find its index
          ? [v, // Original object
          _.chain(v).cloneDeep().pickBy(function (v, k) {
            return !k.startsWith('$');
          }).set('id', _this2.$macgyver.utils.incrementId(v.id)) // Also increment its ID
          .value()] : v;
        }).flatten().value());
      },

      /**
      * Move a widget in a given direction
      * @param {string|array} specPath The lodash notation SpecPath to move
      * @param {string} direction The direction to move. ENUM: 'up', 'down'
      */
      moveWidget: function moveWidget(specPath, direction) {
        if (!['up', 'down'].includes(direction)) throw new Error('Unsupported direction');
        var parentItems = _.isArray(specPath) ? specPath : specPath.split('.');
        var targetIndex = parentItems.pop();
        this.setMode(); // Reset mode to close edit panel

        this.mutatePath(parentItems, _.chain(_.get(this.config, parentItems)).clone().thru(function (v) {
          targetIndex = +targetIndex; // Splat into number

          if (direction == 'up' && targetIndex > 0) {
            var _ref = [v[targetIndex - 1], v[targetIndex]];
            v[targetIndex] = _ref[0];
            v[targetIndex - 1] = _ref[1];
          } else if (direction == 'down' && targetIndex < v.length) {
            console.log('SWAP', targetIndex, targetIndex + 1);
            var _ref2 = [v[targetIndex + 1], v[targetIndex]];
            v[targetIndex] = _ref2[0];
            v[targetIndex + 1] = _ref2[1];
          }

          return v;
        }).value());
      },

      /**
      * Begin drag sequence for a widget
      * @param {string|array} specPath The lodash notation SpecPath to drag
      */
      dragWidget: function dragWidget(specPath) {
        console.warn('FIXME: dragWidget() not yet supported');
      },
      rawEdit: function rawEdit() {
        var _this3 = this;

        this.$prompt.macgyver({
          title: 'Template JSON',
          macgyver: {
            id: 'code',
            type: 'mgCode',
            syntax: 'json',
            convert: true,
            "default": this.$props.config
          }
        }).then(function (form) {
          return _this3.$set(_this3, 'config', form.code);
        });
      },
      // Form layouts {{{

      /**
      * Generate the config layout for the Table-Of-Contents sidebar
      */
      generateConfigToc: function generateConfigToc() {
        var _this4 = this;

        var genTreeBranch = function genTreeBranch(root) {
          return root.map(function (widget) {
            return {
              title: "".concat(widget.type, " #").concat(widget.id),
              icon: _this4.$macgyver.widgets[widget.type].icon,
              "enum": widget.items ? genTreeBranch(widget.items) : undefined
            };
          });
        };

        return [{
          // Header area
          type: 'mgContainer',
          layout: 'columns',
          border: false,
          rowClass: 'aside-header',
          showTitle: false,
          items: [{
            type: 'mgHeading',
            text: 'Form layout'
          }, {
            type: 'mgContainer',
            layout: 'columns',
            border: false,
            showTitle: false,
            rowClass: 'aside-actions',
            items: [{
              type: 'mgButton',
              action: 'setMode',
              text: '',
              "class": 'btn btn-link btn-xs',
              icon: 'far fa-times'
            }]
          }]
        }, {
          // Body area
          type: 'mgContainer',
          layout: 'form',
          rowClass: 'aside-body',
          showTitles: false,
          items: [{
            type: 'mgChoiceTree',
            title: 'Layout tree',
            change: function change(item) {
              console.log('TREE CLICK', item);
            },
            "enum": genTreeBranch([this.$macgyver.compileSpec(this.$props.config, {
              clone: false
            }).spec])
          }]
        }];
      },

      /**
      * Generate the config layout for the "add widget" sidebar
      */
      generateConfigAdding: function generateConfigAdding() {
        var _this5 = this;

        return [{
          // Header area
          type: 'mgContainer',
          layout: 'columns',
          border: false,
          rowClass: 'aside-header',
          showTitle: false,
          items: [{
            type: 'mgHeading',
            text: 'Add widget'
          }, {
            type: 'mgContainer',
            layout: 'columns',
            border: false,
            showTitle: false,
            rowClass: 'aside-actions',
            items: [{
              type: 'mgButton',
              action: 'setMode',
              text: '',
              "class": 'btn btn-link btn-xs',
              icon: 'far fa-times'
            }]
          }]
        }, {
          // Body area
          type: 'mgContainer',
          layout: 'form',
          rowClass: 'aside-body',
          showTitles: false,
          items: [{
            id: 'addType',
            type: 'mgChoiceList',
            title: 'Widget type to add',
            "enum": _(this.$macgyver.widgets).map(function (w, k) {
              return {
                id: k,
                title: w.meta.title,
                icon: "".concat(w.meta.icon, " fa-fw")
              };
            }).sortBy('title').value(),
            change: function change(type) {
              var inserted = _this5.insertWidget({
                type: type
              }, {
                orientation: 'last',
                useContainer: true,
                edit: true
              });
            }
          }]
        }];
      } // }}}

    }
  });

  /* script */
  const __vue_script__$l = script$l;

  /* template */
  var __vue_render__$i = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mg-form-editor" },
      [
        _c(
          "aside",
          {
            class: [
              _vm.mode == "collapsed"
                ? _vm.$props.asideClassActive
                : _vm.$props.asideClassInactive,
              _vm.$props.asideClassModeCollapsed
            ]
          },
          [
            _vm.mode == "collapsed"
              ? _c("mg-form", {
                  attrs: {
                    form: _vm.id + "-collapsed",
                    config: _vm.$props.generalVerbs,
                    actions: { setMode: _vm.setMode, rawEdit: _vm.rawEdit }
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "aside",
          {
            class: [
              _vm.mode == "toc"
                ? _vm.$props.asideClassActive
                : _vm.$props.asideClassInactive,
              _vm.$props.asideClassModeToc
            ]
          },
          [
            _vm.mode == "toc"
              ? _c("mg-form", {
                  attrs: {
                    form: _vm.id + "-toc",
                    config: _vm.generateConfigToc(),
                    actions: { setMode: _vm.setMode }
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "aside",
          {
            class: [
              _vm.mode == "adding"
                ? _vm.$props.asideClassActive
                : _vm.$props.asideClassInactive,
              _vm.$props.asideClassModeAdding
            ]
          },
          [
            _vm.mode == "adding"
              ? _c("mg-form", {
                  ref: "formAdd",
                  attrs: {
                    config: _vm.generateConfigAdding(),
                    actions: { setMode: _vm.setMode }
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "aside",
          {
            class: [
              _vm.mode == "editing"
                ? _vm.$props.asideClassActive
                : _vm.$props.asideClassInactive,
              _vm.$props.asideClassModeEditing
            ]
          },
          [
            _vm.mode == "editing"
              ? _c("mg-form", {
                  attrs: {
                    form: _vm.id + "-edit",
                    config: _vm.editConfig,
                    data: _vm.editData,
                    actions: {
                      setMode: _vm.setMode,
                      deleteWidget: _vm.deleteWidget
                    }
                  },
                  on: {
                    changeItem: function($event) {
                      return _vm.mutatePath(
                        _vm.editing.$specPath + "." + $event.path,
                        $event.value
                      )
                    }
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("mg-form", {
          ref: "form",
          attrs: { config: _vm.$props.config, data: _vm.$props.data }
        })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$l = function (inject) {
      if (!inject) return
      inject("data-v-24e69c60_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Variables {{{ */\n:root {\n\t--mg-form-editor-selected-bg: #007bff;\n\t--mg-form-editor-selected-fg: #fff;;\n\t--mg-form-editor-selected-highlight: #5dabff;\n\t--mg-form-editor-selected-danger: #dc3545;\n\t--mg-form-editor-hover-bg: #77b9ff;\n\t--mg-form-editor-hover-fg: #fff;\n}\n/* }}} */\n\n/* Aside styles - .mgfe-aside {{{ */\n.mgfe-aside {\n\ttransition: transform 0.2s ease-out;\n}\n.mgfe-aside .mg-form {\n\tmargin: 0;\n}\n.mgfe-aside.aside-right.open.open { /* Silly hack to force the transform when open (overrides .asign-sm in priority) */\n\ttransform: translateX(0px);\n}\n.mgfe-aside.aside-right {\n\tposition: fixed;\n\ttop: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tbackground: #FFF;\n\tz-index: 100;\n\tbox-shadow: 0 1px 5px rgba(0,0,0,.3);\n\twidth: 350px;\n\ttransform: translateX(380px);\n}\n\n/* .mgfe-aside-sm {{{ */\n.mgfe-aside.aside-right.aside-sm {\n\twidth: 40px;\n\ttransform: translateX(50px);\n\ttop: calc(50% - 30px); /* Approx middle of the screen */\n\tbottom: inherit;\n\tborder-radius: 5px;\n}\n.mgfe-aside.aside-right.aside-sm .form-group {\n\tmargin: 0;\n}\n\n/* Remove BS padding from sub-elements */\n.mgfe-aside.aside-right.aside-sm .form-group [class*=\"col-\"] {\n\tpadding: 0;\n}\n/* }}} */\n\n/* Headers {{{ */\n.mgfe-aside .aside-header {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tborder-bottom: 1px solid #e9ecef;\n\tmargin: 0;\n}\n.mgfe-aside .aside-header h4 {\n\tflex-grow: 1;\n}\n.mgfe-aside .aside-header legend.form-control-static {\n\tborder-bottom: none;\n\tfont-size: 17pt;\n}\n.mgfe-aside .aside-header .close {\n\tcolor: #5e5e5e;\n}\n.mgfe-aside .aside-header .close:hover {\n\tcolor: #000;\n}\n.mgfe-aside .aside-header .close::after {\n\tdisplay: inline-block;\n\tfont-family: 'Font Awesome 5 Pro';\n\tfont-weight: 900;\n\tcontent: \"\\f00d\";\n}\n/* }}} */\n\n/* Actions {{{ */\n.mgfe-aside .aside-actions {\n\tjustify-self: flex-end;\n\tmargin-right: 10px;\n}\n.mgfe-aside .aside-actions .btn-group {\n\tborder: none;\n\tbox-shadow: none;\n}\n.mgfe-aside .aside-actions a {\n\tpadding: 8px;\n\tfont-size: 125%;\n}\n/* }}} */\n\n/* Body {{{ */\n.mgfe-aside .aside-body {\n\tmargin-left: 0;\n\tmargin: 10px 0 0;\n\n\t/* Body scrolling */\n\toverflow: auto;\n\theight: calc(100vh - 80px);\n}\n/* }}} */\n/* }}} */\n\n/* Component highlighting {{{\n\n/* Highlight applied to active elements inside an mgContainer */\n.mg-form-editor-target {\n\tborder: 2px solid var(--blue);\n\tborder-radius: 5px;\n\tposition: relative;\n\ttop: -4px;\n\tleft: -4px;\n\tpadding: 2px;\n}\n.mg-form-editor-drop-target {\n}\n.mg-form-editor-drop-target-before {\n\tborder-top: 4px dashed var(--blue);\n}\n.mg-form-editor-drop-target-after {\n\tborder-bottom: 4px dashed var(--blue);\n}\n/* }}} */\n\n/* Drag + Drop {{{ */\nbody.mg-form-editor-dragging * {\n\tcursor: grabbing;\n}\n#mg-form-editor-drag {\n\tdisplay: block;\n\tz-index: 1000;\n\tposition: absolute;\n\ttop: -10000px;\n\tleft: -10000px;\n\tmin-width: 160px;\n\theight: 40px;\n\tborder-radius: 5px;\n\tbackground: #2196F3;\n\tbox-shadow: 1px 1px 4px rgba(0,0,0,.3);\n\tpadding: 10px;\n\tcolor: #FFF;\n}\n#mg-form-editor-drag > i {\n\tmargin-right: 5px;\n}\n/* }}} */\n\n/* Misc fixes {{{ */\n/* Buttons that are also fixed with look weird */\n.mg-form-editor .btn.fa-fw {\n\twidth: 2.30em;\n\tpadding: 4px 2px !important;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgFormEditor.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkrBA,kBAAA;AACA;CACA,qCAAA;CACA,kCAAA;CACA,4CAAA;CACA,yCAAA;CACA,kCAAA;CACA,+BAAA;AACA;AACA,QAAA;;AAEA,mCAAA;AACA;CACA,mCAAA;AACA;AAEA;CACA,SAAA;AACA;AAEA,oCAAA,kFAAA;CACA,0BAAA;AACA;AAEA;CACA,eAAA;CACA,QAAA;CACA,UAAA;CACA,WAAA;CACA,gBAAA;CACA,YAAA;CACA,oCAAA;CACA,YAAA;CACA,4BAAA;AACA;;AAEA,uBAAA;AACA;CACA,WAAA;CACA,2BAAA;CACA,qBAAA,EAAA,gCAAA;CACA,eAAA;CACA,kBAAA;AACA;AAEA;CACA,SAAA;AACA;;AAEA,wCAAA;AACA;CACA,UAAA;AACA;AACA,QAAA;;AAEA,gBAAA;AACA;CACA,aAAA;CACA,mBAAA;CACA,yBAAA;CACA,gCAAA;CACA,SAAA;AACA;AAEA;CACA,YAAA;AACA;AAEA;CACA,mBAAA;CACA,eAAA;AACA;AAEA;CACA,cAAA;AACA;AAEA;CACA,WAAA;AACA;AAEA;CACA,qBAAA;CACA,iCAAA;CACA,gBAAA;CACA,gBAAA;AACA;AACA,QAAA;;AAEA,gBAAA;AACA;CACA,sBAAA;CACA,kBAAA;AACA;AAEA;CACA,YAAA;CACA,gBAAA;AACA;AAEA;CACA,YAAA;CACA,eAAA;AACA;AACA,QAAA;;AAEA,aAAA;AACA;CACA,cAAA;CACA,gBAAA;;CAEA,mBAAA;CACA,cAAA;CACA,0BAAA;AACA;AACA,QAAA;AACA,QAAA;;AAEA;;+DAEA;AACA;CACA,6BAAA;CACA,kBAAA;CACA,kBAAA;CACA,SAAA;CACA,UAAA;CACA,YAAA;AACA;AAEA;AACA;AAEA;CACA,kCAAA;AACA;AAEA;CACA,qCAAA;AACA;AACA,QAAA;;AAEA,oBAAA;AACA;CACA,gBAAA;AACA;AAEA;CACA,cAAA;CACA,aAAA;CACA,kBAAA;CACA,aAAA;CACA,cAAA;CACA,gBAAA;CACA,YAAA;CACA,kBAAA;CACA,mBAAA;CACA,sCAAA;CACA,aAAA;CACA,WAAA;AACA;AAEA;CACA,iBAAA;AACA;AACA,QAAA;;AAEA,mBAAA;AACA,gDAAA;AACA;CACA,aAAA;CACA,2BAAA;AACA;AACA,QAAA","file":"mgFormEditor.vue","sourcesContent":["<script>\nimport mgFormEditorControls from './mgFormEditorControls';\n\n/**\n* mg-form-editor - Drag-and-drop form designer for MacGyver\n*\n* @param {Object|Array} config mgForm compatible spec to edit\n* @param {Object} [data] Optional data bindings for the form\n* @param {array<Object>} [verbs] Verb edit mgForm to show in the small edit sidebar, defaults to selecting widgets / adding widgets buttons\n* @param {string} [asideClassActive=\"mgfe-aside aside-right open\"] Class to set all editing sidebars to when inactive\n* @param {string} [asideClassInactive=\"mgfe-aside aside-right\"] Class to set all editing sidebar to when inactive\n* @param {string} [asideClassModeCollapsed=\"aside-sm\"] Class to associate with the smaller toolkit display when editing\n* @param {string} [asideClassModeToc=\"aside-sm\"] Class to associate with the Table-Of-Contents sidebar\n* @param {string} [asideClassModeAdding=\"\"] Class to associate with the editing sidebar when adding\n* @param {string} [asideClassModeEditing=\"\"] Class to associate with the editing sidebar when editing\n*\n* @emits change Emitted as `(config)` on any item configuration change. WARNING, subscribing to this involves an entire deep copy of the config structure, subscribe to changeItem if possible\n* @emits changeItem Emitted as `({path, value})` when a single config item changes, inexpensive compared to `change`\n*/\nexport default app.mgComponent('mgFormEditor', {\n\tprovide() { return {\n\t\t$mgFormEditor: this,\n\t}},\n\tcomponents: {\n\t\tmgFormEditorControls,\n\t},\n\tdata() { return {\n\t\tmode: 'collapsed', // ENUM: collapsed, toc, editing, adding\n\t\tid: this.$macgyver.nextId(), // ID of the editing form item\n\t\tediting: undefined, // The active item we are editing\n\t\twidgetListMode: 'grid',\n\n\t\t// Asides\n\t\teditConfig: [],\n\t\teditData: {},\n\n\t\taddTarget: undefined, // Spec path to add after, if any\n\t\taddOrientation: 'after',\n\t}},\n\tprops: {\n\t\t// FIXME: Does not like array type specs.\n\t\tconfig: [Object, Array], // Can be a single object, array of objects or shorthand style\n\t\tdata: Object,\n\t\tasideClassActive: {type: String, default: 'mgfe-aside aside-right open'},\n\t\tasideClassInactive: {type: String, default: 'mgfe-aside aside-right'},\n\t\tasideClassModeCollapsed: {type: String, default: 'aside-sm'},\n\t\tasideClassModeToc: {type: String, default: ''},\n\t\tasideClassModeAdding: {type: String, default: ''},\n\t\tasideClassModeEditing: {type: String, default: ''},\n\t\tgeneralVerbs: {\n\t\t\ttype: Array,\n\t\t\tdefault() {\n\t\t\t\treturn [\n\t\t\t\t\t{\n\t\t\t\t\t\ttype: 'mgButton',\n\t\t\t\t\t\taction: \"setMode()\",\n\t\t\t\t\t\tclass: 'btn btn-primary text-white px-2',\n\t\t\t\t\t\ticon: 'fa fa-mouse-pointer fa-fw',\n\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\t// FIXME: Why were tooltips failing as Object type?\n\t\t\t\t\t\ttooltip: 'Select widgets to edit',\n\t\t\t\t\t\t//tooltip: \"{content: 'Select widgets to edit', placement: 'left'}\",\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\ttype: 'mgButton',\n\t\t\t\t\t\taction: \"setMode('toc')\",\n\t\t\t\t\t\tclass: 'btn btn-outline-light border-0 px-2',\n\t\t\t\t\t\ticon: 'fa fa-stream fa-fw',\n\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\ttooltip: 'Select widgets to edit',\n\t\t\t\t\t\t//tooltip: {content: 'Select widgets to edit', placement: 'left'},\n\t\t\t\t\t},\n\t\t\t\t\t...(this.$prompt?.macgyver ? [{ // Include JSON editing if $prompt.macgyver() is available\n\t\t\t\t\t\ttype: 'mgButton',\n\t\t\t\t\t\taction: \"rawEdit()\",\n\t\t\t\t\t\tclass: 'btn btn-outline-light border-0 px-2',\n\t\t\t\t\t\ticon: 'fa fa-code fa-fw',\n\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\ttooltip: 'Edit the form contents as JSON',\n\t\t\t\t\t\t//tooltip: {content: 'Edit the form contents as JSON', placement: 'left'},\n\t\t\t\t\t}] : []),\n\t\t\t\t\t{\n\t\t\t\t\t\ttype: 'mgButton',\n\t\t\t\t\t\taction: \"setMode('adding')\",\n\t\t\t\t\t\tclass: 'btn btn-outline-light border-0 px-2',\n\t\t\t\t\t\ticon: 'far fa-plus fa-fw',\n\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\ttooltip: 'Add a new widget',\n\t\t\t\t\t\t//tooltip: {content: 'Add a new widget', placement: 'left'},\n\t\t\t\t\t},\n\t\t\t\t];\n\t\t\t},\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$debugging = true;\n\t},\n\tmounted() {\n\t\t/*\n\t\t// Potential for highlighting components within nested mgContainer\n\t\tthis.$refs.form.$on('mgComponent.click', (component, e) => {\n\t\t\te.stopPropagation();\n\t\t\te.preventDefault();\n\t\t\tthis.editWidget(component.config.$specPath);\n\t\t});\n\n\t\tthis.$refs.form.$on('mgComponent.mouseEnter', (component, e) => {\n\t\t\tif (component.config.type === 'mgContainer') return;\n\t\t\te.stopPropagation();\n\t\t\t//e.preventDefault();\n\t\t\tvar target = this.$refs.form.getComponentBySpecPath(component.config.$specPath);\n\t\t\t//if (target.$type === 'mgContainer') return;\n\t\t\t// FIXME: Always 2 parents up? Traverse up to next highest mgContainer?\n\t\t\tvar container = target.$parent.$parent;\n\t\t\tif (!container) return;\n\t\t\tvar targetIndex = container.findChildIndex(target);\n\t\t\tcontainer.$set(container.highlights, targetIndex, (container.highlights[targetIndex] || []).concat(['editHover']));\n\t\t});\n\n\t\tthis.$refs.form.$on('mgComponent.mouseLeave', (component, e) => {\n\t\t\tif (component.config.type === 'mgContainer') return;\n\t\t\te.stopPropagation();\n\t\t\t//e.preventDefault();\n\t\t\tvar target = this.$refs.form.getComponentBySpecPath(component.config.$specPath);\n\t\t\t//if (target.$type === 'mgContainer') return;\n\t\t\t// FIXME: Always 2 parents up? Traverse up to next highest mgContainer?\n\t\t\tvar container = target.$parent.$parent;\n\t\t\tif (!container) return;\n\t\t\tvar targetIndex = container.findChildIndex(target);\n\t\t\tcontainer.$set(container.highlights, targetIndex, (container.highlights[targetIndex] || []).filter(c => c != 'editHover'));\n\t\t});\n\t\t*/\n\n\t\t// FIXME: (e.target).closest... mg-container CSS class...\n\t\tthis.$refs.form.$on('mgContainer.click', (container, specPath, componentIndex, e) => {\n\t\t\te.stopPropagation();\n\t\t\te.preventDefault();\n\t\t\tthis.editWidget(specPath);\n\t\t});\n\n\t\tthis.$refs.form.$on('mgContainer.mouseEnter', (container, specPath, componentIndex, e) => {\n\t\t\tvar component = this.$refs.form.getComponentBySpecPath(specPath);\n\t\t\tvar componentIndex = container.findChildIndex(component);\n\t\t\tcontainer.$set(container.highlights, componentIndex, (container.highlights[componentIndex] || []).concat(['editHover']));\n\t\t});\n\n\t\tthis.$refs.form.$on('mgContainer.mouseLeave', (container, specPath, componentIndex, e) => {\n\t\t\tvar component = this.$refs.form.getComponentBySpecPath(specPath);\n\t\t\tvar componentIndex = container.findChildIndex(component);\n\t\t\tcontainer.$set(container.highlights, componentIndex, (container.highlights[componentIndex] || []).filter(c => c != 'editHover'));\n\t\t});\n\t},\n\tmethods: {\n\t\t/**\n\t\t* Stop editing / adding and return to regular mode\n\t\t* @param {string} [mode=\"collapsed\"] Mode to switch to\n\t\t* @param {boolean} [clearHighlight=true] Also attempt to clear out any highlight and reset the aside panes\n\t\t*/\n\t\tsetMode(mode = 'collapsed', clearHighlight = true) {\n\t\t\t// Deselect the existing item (if we have one)\n\t\t\tif (this.editing && clearHighlight) {\n\t\t\t\tthis.setComponentHighlight(this.editing, []);\n\t\t\t\tthis.editing = undefined;\n\t\t\t}\n\n\t\t\tthis.$set(this, 'mode', mode || 'collapsed');\n\t\t\treturn true; // Signal to mgForm that we have handled this action\n\t\t},\n\n\n\t\t/**\n\t\t* Delete the active widget\n\t\t*/\n\t\tdeleteWidget() {\n\t\t\tif (!this.editing) {\n\t\t\t\tthis.$macgyver.notify.warn('No widget selected to delete'); // Not editing anyway\n\t\t\t} else {\n\t\t\t\tthis.removeWidget(this.editing.$props.$specPath);\n\t\t\t}\n\n\t\t\treturn true; // Signal to mgForm that we have handled this action\n\t\t},\n\n\n\t\t/**\n\t\t* Set the component.highlight[index] to the given list of CSS classes\n\t\t* @param {VueController} component The VueController to set the highlight of within its mgContainer\n\t\t* @param {array<string>} classes Array of string classes to set\n\t\t*/\n\t\tsetComponentHighlight(component, classes) {\n\t\t\tif (!_.isArray(classes)) throw new Error('setComponentHighlight must be passed an array');\n\n\t\t\tvar container = false;\n\t\t\tcomponent.$emit.up('mgIdentify', component => {\n\t\t\t\tif (!container && component.$props.$type == 'mgContainer') container = component;\n\t\t\t});\n\t\t\tif (!container) return console.warn('[mgFormEditor] setComponentHighlight component failed to find enclosing container', {component});\n\n\t\t\tvar childOffset = container.findChildIndex(component);\n\t\t\tif (childOffset === false) return console.warn('[mgFormEditor]', 'Cannot locate component within container', {container, component});\n\n\t\t\tconsole.log('Set highlight', childOffset, classes);\n\t\t\tcontainer.$set(container.highlights, childOffset, classes);\n\t\t},\n\n\n\t\t/**\n\t\t* Edit a widget by its specPath or component\n\t\t* @param {VueComponent|string} component Either the VueComponent to edit or the specPath of the widget to edit\n\t\t*/\n\t\teditWidget(component) {\n\t\t\tvar component; // The Vue component from the widget path\n\t\t\tif (!_.isObject(component) && !_.isString(component)) throw new Error('editWidget requires either a specPath or VueComponent');\n\t\t\tif (_.isObject(component) && !component._uid) throw new Error('editWidget() requires a valid VueComponent object (or specPath string)');\n\n\t\t\tif (_.isString(component) || _.isArray(component)) component = this.$refs.form.getComponentBySpecPath(component); // Resolve specPath into actual component if eneded\n\n\t\t\tthis.setMode();\n\n\t\t\tthis.$set(this, 'editing', component);\n\t\t\tthis.$set(this, 'mode', 'editing');\n\n\t\t\tthis.setComponentHighlight(component, ['editEditing']);\n\n\t\t\tvar widget = this.$macgyver.widgets[component.$props.$type];\n\t\t\tif (widget) {\n\t\t\t\tthis.$set(this, 'editConfig', [\n\t\t\t\t\t{ // Header area\n\t\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\t\tlayout: 'columns',\n\t\t\t\t\t\tborder: false,\n\t\t\t\t\t\trowClass: 'aside-header',\n\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\titems: [\n\t\t\t\t\t\t\t{id: 'metaIcon', type: 'mgIcon'},\n\t\t\t\t\t\t\t{id: 'id', type: 'mgText', placeholder: 'No ID'},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\t\t\t\tlayout: 'columns',\n\t\t\t\t\t\t\t\tborder: false,\n\t\t\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\t\t\trowClass: 'aside-actions',\n\t\t\t\t\t\t\t\titems: [\n\t\t\t\t\t\t\t\t\t{type: 'mgButton', action: 'deleteWidget', class: 'btn btn-link btn-link-danger btn-xs', icon: 'far fa-trash', tooltip: 'Delete this widget'},\n\t\t\t\t\t\t\t\t\t{type: 'mgButton', action: 'setMode', text: '', class: 'btn btn-link btn-xs', icon: 'far fa-times'},\n\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t],\n\t\t\t\t\t},\n\t\t\t\t\t{ // Body area\n\t\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\t\tlayout: 'form',\n\t\t\t\t\t\tformClass: 'titles-above',\n\t\t\t\t\t\trowClass: 'aside-body',\n\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\titems: _.map(widget.props, (v, k) => _.set(v, 'id', k)),\n\t\t\t\t\t},\n\t\t\t\t]);\n\t\t\t\tthis.$debug('Set editConfig', this.editConfig);\n\n\t\t\t\tthis.$set(this, 'editData',\n\t\t\t\t\t_(widget.props)\n\t\t\t\t\t\t.mapValues((v, k) => _.get(component.$props, k, _.get(widget.props, k).default))\n\t\t\t\t\t\t.set('id', component.$props.$dataPath)\n\t\t\t\t\t\t.set('metaIcon', widget.meta.icon)\n\t\t\t\t\t\t.value()\n\t\t\t\t);\n\t\t\t\tthis.$debug('Set editData', this.editData);\n\t\t\t} else {\n\t\t\t\tthis.$macgyver.notify.warn(`Cannot edit unknown widget \"${component.$props?.$type || 'Unknown type'}\"`);\n\t\t\t\tthis.setMode();\n\t\t\t}\n\t\t},\n\n\n\t\t/**\n\t\t* Change the value of a nested config path\n\t\t* @param {string} path The dotted / array notation path to mutate\n\t\t* @param {*} value The value to set, if undefined the key is removed\n\t\t* @emits change Emitted with the entire deep copied config object\n\t\t* @emits changeItem Emitted as `{path, value}` for a single item mutation\n\t\t*/\n\t\tmutatePath(path, value) {\n\t\t\tconsole.log('mutatePath', path, value);\n\t\t\t// Only bother cloning the entire object if something is listening to 'change'\n\t\t\tif (this.$emit.hasListeners('change')) {\n\t\t\t\tvar configCopy = _.cloneDeep(this.config);\n\t\t\t\tthis.$setPath(configCopy, path, value);\n\t\t\t\tthis.$emit('change', configCopy);\n\t\t\t}\n\n\t\t\tthis.$emit('changeItem', {path: path, value: value});\n\t\t},\n\n\n\t\t/**\n\t\t* Splice items into a deep copy of the config object, emitting change events\n\t\t* @param {string} path The dotted / array notation path to mutate\n\t\t* @param {number} index The index to work from\n\t\t* @param {number} [remove] The number of items to remove\n\t\t* @param {*} [value...] The value(s) to set, if undefined the key is removed\n\t\t* @emits change Emitted with the entire deep copied config object\n\t\t* @emits changeItem Emitted as `{path, value}` for a single item mutation\n\t\t*/\n\t\tmutateSplice(path, index, remove, ...value) {\n\t\t\tconsole.log('mutateSplice', path, index, remove);\n\t\t\tvar configCopy = _.cloneDeep(this.config); // Copy entire object\n\t\t\tvar spliceContents = _.get(configCopy, path); // Extract path from nested object\n\t\t\tif (!_.isArray(spliceContents)) throw new Error('Refusing to splice a non-array');\n\t\t\tspliceContents.splice(index, remove, ...value); // Perform splice\n\n\t\t\tthis.$setPath(configCopy, path, spliceContents); // Place back in mutated object\n\n\t\t\tthis.$emit('change', configCopy);\n\t\t\tthis.$emit('changeItem', {path: path, value: spliceContents});\n\t\t},\n\n\n\t\t/**\n\t\t* Insert a widget at a given path\n\t\t* @param {Object} widget The widget to insert, this must contain at least a `type` key\n\t\t* @param {Object} [options] Additional options\n\t\t* @param {string|array} [options.specPath] The lodash notation specPath to target instead of the last element on the form\n\t\t* @param {string} [options.orientation='after'] Where to insert. ENUM: 'before', 'after', 'last'\n\t\t* @param {boolean} [options.useContainer=true] If no spec path, try and fit the new widget within the last container if one exists\n\t\t* @param {boolean} [options.allocateTitle=true] Try to allocate a title if not supplied\n\t\t* @param {boolean} [options.allocateId=true] Try to allocate an ID if not supplied and the widget has `preferId`\n\t\t* @param {boolean} [options.edit=true] Show the edit dialog after inserting the component\n\t\t* @returns {Object} The inserted widget object (complete with ID if allocateId is specified)\n\t\t*/\n\t\tinsertWidget(widget, options) {\n\t\t\tconsole.log('insertWidget', widget, options);\n\t\t\tvar settings = {\n\t\t\t\tspecPath: undefined,\n\t\t\t\torientation: 'after',\n\t\t\t\tuseContainer: true,\n\t\t\t\tallocateTitle: true,\n\t\t\t\tallocateId: true,\n\t\t\t\tedit: true,\n\t\t\t\t...options,\n\t\t\t};\n\n\t\t\tif (!widget.type) throw new Error('Widget.type must be specified as a minimum for insertWidget()');\n\n\t\t\t// Ensure containers have items\n\t\t\tif (widget.type === 'mgContainer' && !widget.items) widget.items = [];\n\n\t\t\t// options.allocateTitle / settings.alloacteId {{{\n\t\t\tif ( // A field we want is missing\n\t\t\t\t(settings.allocateTitle && !widget.title)\n\t\t\t\t|| (settings.allocateId && !widget.id)\n\t\t\t) {\n\t\t\t\t// Compute how many of this widget are on the form\n\t\t\t\tvar widgetOffset = this.$macgyver\n\t\t\t\t\t.flatten(this.$props.config, {want: 'array', type: 'spec'})\n\t\t\t\t\t.reduce((i, w) => w.type == widget.type ? i + 1 : i, 0);\n\n\t\t\t\tif (settings.allocateTitle && !widget.title)\n\t\t\t\t\twidget.title = this.$macgyver.widgets[widget.type].meta.title\n\t\t\t\t\t\t+ String(widgetOffset == 0 ? '' : widgetOffset);\n\n\t\t\t\t// Guess at an ID\n\t\t\t\tif (settings.allocateId && !widget.id && this.$macgyver.widgets[widget.type].meta.preferId)\n\t\t\t\t\twidget.id = _.chain(widget.type)\n\t\t\t\t\t\t.replace(/^mg/, '') // Remove first `mg` bit\n\t\t\t\t\t\t.camelCase()\n\t\t\t\t\t\t.replace(/$/, widgetOffset == 0 ? '' : widgetOffset) // Append numeric offset (if there is more than one of this type)\n\t\t\t\t\t\t.value();\n\t\t\t}\n\t\t\t// }}}\n\n\t\t\t// FIXME: Support for array specs without a root mgContainer.\n\t\t\tswitch (settings.orientation) {\n\t\t\t\tcase 'last':\n\t\t\t\t\tif ( // Container -> Container:Last -> New widget\n\t\t\t\t\t\tsettings.useContainer // Insert within container?\n\t\t\t\t\t\t&& this.config.type == 'mgContainer' // First item is a container\n\t\t\t\t\t\t&& _.last(this.config.items)?.type == 'mgContainer' // Last child is also a container - use this\n\t\t\t\t\t) {\n\t\t\t\t\t\tthis.mutateSplice(`items.${this.config.items.length - 1}.items`, _.last(this.config.items)?.items.length || 0, 0, widget);\n\t\t\t\t\t} else if ( // Container:Last -> New widget\n\t\t\t\t\t\tsettings.useContainer // Insert within container?\n\t\t\t\t\t\t&& this.config.type == 'mgContainer' // First item is a container\n\t\t\t\t\t) {\n\t\t\t\t\t\tthis.mutateSplice('items', this.config.items.length, 0, widget);\n\t\t\t\t\t} else if (_.isArray(this.config)) { // Append to end of config array\n\t\t\t\t\t\tthis.mutateSplice('', this.config.items.length, 0, widget);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthrow new Error('Dont know how to append widget to form config');\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'before':\n\t\t\t\tcase 'after':\n\t\t\t\t\tif (!settings.specPath) throw new Error('Inserting with orientations before / after requires a specPath');\n\t\t\t\t\tvar parentItems = _.isArray(settings.specPath) ? settings.specPath : settings.specPath.split('.');\n\t\t\t\t\tvar targetWidget = parentItems.pop();\n\n\t\t\t\t\tthis.mutateSplice(\n\t\t\t\t\t\tparentItems,\n\t\t\t\t\t\tsettings.orientation == 'after' ? +targetWidget + 1 : targetWidget,\n\t\t\t\t\t\t0,\n\t\t\t\t\t\twidget\n\t\t\t\t\t);\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tthrow new Error(`Dont know how to handle insert of component at with orientation \"${settings.orientation}\"`);\n\t\t\t}\n\n\t\t\tif (settings.edit) {\n\t\t\t\tconsole.warn('FIXME: Unsupported post edit when editing components');\n\t\t\t\t// this.editWidget(widget.id);\n\t\t\t}\n\n\t\t\treturn widget;\n\t\t},\n\n\n\t\t/**\n\t\t* Remove a widget by its specPath\n\t\t* @param {string|array} specPath The lodash notation specPath to remove\n\t\t*/\n\t\tremoveWidget(specPath) {\n\t\t\tthis.setMode(); // Reset mode to close edit panel\n\n\t\t\t// FIXME: Splitting non-array, condition backwards?\n\t\t\tvar parentItems = _.isArray(specPath) ? specPath : specPath.split('.');\n\t\t\tvar targetIndex = parentItems.pop();\n\n\t\t\tthis.mutateSplice(parentItems, targetIndex, 1);\n\t\t},\n\n\n\t\t/**\n\t\t* Duplicate a widget by its specPath\n\t\t* @param {string|array} specPath The lodash notation specPath to remove\n\t\t*/\n\t\tduplicateWidget(specPath) {\n\t\t\tvar parentItems = _.isArray(specPath) ? specPath : specPath.split('.');\n\t\t\tvar targetIndex = parentItems.pop();\n\n\t\t\tthis.setMode(); // Reset mode to close edit panel\n\t\t\tthis.mutatePath(\n\t\t\t\tparentItems,\n\t\t\t\t_(_.get(this.config, parentItems))\n\t\t\t\t\t.map((v, i) => i == targetIndex // Duplicate this item when we find its index\n\t\t\t\t\t\t? [\n\t\t\t\t\t\t\tv, // Original object\n\t\t\t\t\t\t\t_.chain(v)\n\t\t\t\t\t\t\t\t.cloneDeep()\n\t\t\t\t\t\t\t\t.pickBy((v, k) => !k.startsWith('$'))\n\t\t\t\t\t\t\t\t.set('id', this.$macgyver.utils.incrementId(v.id)) // Also increment its ID\n\t\t\t\t\t\t\t\t.value(),\n\t\t\t\t\t\t]\n\t\t\t\t\t\t: v\n\t\t\t\t\t)\n\t\t\t\t\t.flatten()\n\t\t\t\t\t.value()\n\t\t\t);\n\t\t},\n\n\n\t\t/**\n\t\t* Move a widget in a given direction\n\t\t* @param {string|array} specPath The lodash notation SpecPath to move\n\t\t* @param {string} direction The direction to move. ENUM: 'up', 'down'\n\t\t*/\n\t\tmoveWidget(specPath, direction) {\n\t\t\tif (!['up', 'down'].includes(direction)) throw new Error('Unsupported direction');\n\n\t\t\tvar parentItems = _.isArray(specPath) ? specPath : specPath.split('.');\n\t\t\tvar targetIndex = parentItems.pop();\n\n\t\t\tthis.setMode(); // Reset mode to close edit panel\n\t\t\tthis.mutatePath(\n\t\t\t\tparentItems,\n\t\t\t\t_.chain(_.get(this.config, parentItems))\n\t\t\t\t\t.clone()\n\t\t\t\t\t.thru(v => {\n\t\t\t\t\t\ttargetIndex = +targetIndex; // Splat into number\n\t\t\t\t\t\tif (direction == 'up' && targetIndex > 0) {\n\t\t\t\t\t\t\t[v[targetIndex], v[targetIndex-1]]\n\t\t\t\t\t\t\t=\n\t\t\t\t\t\t\t[v[targetIndex-1], v[targetIndex]]\n\t\t\t\t\t\t} else if (direction == 'down' && targetIndex < v.length) {\n\t\t\t\t\t\t\tconsole.log('SWAP', targetIndex, targetIndex + 1);\n\t\t\t\t\t\t\t[v[targetIndex], v[targetIndex+1]]\n\t\t\t\t\t\t\t=\n\t\t\t\t\t\t\t[v[targetIndex+1], v[targetIndex]]\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn v;\n\t\t\t\t\t})\n\t\t\t\t\t.value()\n\t\t\t);\n\t\t},\n\n\n\t\t/**\n\t\t* Begin drag sequence for a widget\n\t\t* @param {string|array} specPath The lodash notation SpecPath to drag\n\t\t*/\n\t\tdragWidget(specPath) {\n\t\t\tconsole.warn('FIXME: dragWidget() not yet supported');\n\t\t},\n\n\n\t\trawEdit() {\n\t\t\tthis.$prompt.macgyver({\n\t\t\t\ttitle: 'Template JSON',\n\t\t\t\tmacgyver: {\n\t\t\t\t\tid: 'code',\n\t\t\t\t\ttype: 'mgCode',\n\t\t\t\t\tsyntax: 'json',\n\t\t\t\t\tconvert: true,\n\t\t\t\t\tdefault: this.$props.config,\n\t\t\t\t},\n\t\t\t}).then(form => this.$set(this, 'config', form.code))\n\t\t},\n\n\n\t\t// Form layouts {{{\n\t\t/**\n\t\t* Generate the config layout for the Table-Of-Contents sidebar\n\t\t*/\n\t\tgenerateConfigToc() {\n\t\t\tvar genTreeBranch = root =>\n\t\t\t\troot.map(widget => ({\n\t\t\t\t\ttitle: `${widget.type} #${widget.id}`,\n\t\t\t\t\ticon: this.$macgyver.widgets[widget.type].icon,\n\t\t\t\t\tenum: widget.items ? genTreeBranch(widget.items) : undefined,\n\t\t\t\t}));\n\n\t\t\treturn [\n\t\t\t\t{ // Header area\n\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\tlayout: 'columns',\n\t\t\t\t\tborder: false,\n\t\t\t\t\trowClass: 'aside-header',\n\t\t\t\t\tshowTitle: false,\n\t\t\t\t\titems: [\n\t\t\t\t\t\t{type: 'mgHeading', text: 'Form layout'},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\t\t\tlayout: 'columns',\n\t\t\t\t\t\t\tborder: false,\n\t\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\t\trowClass: 'aside-actions',\n\t\t\t\t\t\t\titems: [\n\t\t\t\t\t\t\t\t{type: 'mgButton', action: 'setMode', text: '', class: 'btn btn-link btn-xs', icon: 'far fa-times'},\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t\t{ // Body area\n\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\tlayout: 'form',\n\t\t\t\t\trowClass: 'aside-body',\n\t\t\t\t\tshowTitles: false,\n\t\t\t\t\titems: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ttype: 'mgChoiceTree',\n\t\t\t\t\t\t\ttitle: 'Layout tree',\n\t\t\t\t\t\t\tchange: item => {\n\t\t\t\t\t\t\t\tconsole.log('TREE CLICK', item);\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tenum: genTreeBranch(\n\t\t\t\t\t\t\t\t[ this.$macgyver.compileSpec(this.$props.config, {clone: false}).spec ]\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t];\n\t\t},\n\n\n\t\t/**\n\t\t* Generate the config layout for the \"add widget\" sidebar\n\t\t*/\n\t\tgenerateConfigAdding() {\n\t\t\treturn [\n\t\t\t\t{ // Header area\n\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\tlayout: 'columns',\n\t\t\t\t\tborder: false,\n\t\t\t\t\trowClass: 'aside-header',\n\t\t\t\t\tshowTitle: false,\n\t\t\t\t\titems: [\n\t\t\t\t\t\t{type: 'mgHeading', text: 'Add widget'},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\t\t\tlayout: 'columns',\n\t\t\t\t\t\t\tborder: false,\n\t\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\t\trowClass: 'aside-actions',\n\t\t\t\t\t\t\titems: [\n\t\t\t\t\t\t\t\t{type: 'mgButton', action: 'setMode', text: '', class: 'btn btn-link btn-xs', icon: 'far fa-times'},\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t\t{ // Body area\n\t\t\t\t\ttype: 'mgContainer',\n\t\t\t\t\tlayout: 'form',\n\t\t\t\t\trowClass: 'aside-body',\n\t\t\t\t\tshowTitles: false,\n\t\t\t\t\titems: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 'addType',\n\t\t\t\t\t\t\ttype: 'mgChoiceList',\n\t\t\t\t\t\t\ttitle: 'Widget type to add',\n\t\t\t\t\t\t\tenum: _(this.$macgyver.widgets)\n\t\t\t\t\t\t\t\t.map((w, k) => ({\n\t\t\t\t\t\t\t\t\tid: k,\n\t\t\t\t\t\t\t\t\ttitle: w.meta.title,\n\t\t\t\t\t\t\t\t\ticon: `${w.meta.icon} fa-fw`,\n\t\t\t\t\t\t\t\t}))\n\t\t\t\t\t\t\t\t.sortBy('title')\n\t\t\t\t\t\t\t\t.value(),\n\t\t\t\t\t\t\tchange: type => {\n\t\t\t\t\t\t\t\tvar inserted = this.insertWidget({type}, {\n\t\t\t\t\t\t\t\t\torientation: 'last',\n\t\t\t\t\t\t\t\t\tuseContainer: true,\n\t\t\t\t\t\t\t\t\tedit: true,\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t];\n\t\t},\n\t\t// }}}\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-form-editor\">\n\t\t<!-- Aside collapsed mode {{{ -->\n\t\t<aside :class=\"[mode == 'collapsed' ? $props.asideClassActive : $props.asideClassInactive, $props.asideClassModeCollapsed]\">\n\t\t\t<mg-form\n\t\t\t\tv-if=\"mode == 'collapsed'\"\n\t\t\t\t:form=\"`${id}-collapsed`\"\n\t\t\t\t:config=\"$props.generalVerbs\"\n\t\t\t\t:actions=\"{setMode, rawEdit}\"\n\t\t\t/>\n\t\t</aside>\n\t\t<!-- }}} -->\n\t\t<!-- Aside toc (table-of-contents) mode {{{ -->\n\t\t<aside :class=\"[mode == 'toc' ? $props.asideClassActive : $props.asideClassInactive, $props.asideClassModeToc]\">\n\t\t\t<mg-form\n\t\t\t\tv-if=\"mode == 'toc'\"\n\t\t\t\t:form=\"`${id}-toc`\"\n\t\t\t\t:config=\"generateConfigToc()\"\n\t\t\t\t:actions=\"{setMode}\"\n\t\t\t/>\n\t\t</aside>\n\t\t<!-- }}} -->\n\t\t<!-- Aside widget library (add widget) {{{ -->\n\t\t<aside :class=\"[mode == 'adding' ? $props.asideClassActive : $props.asideClassInactive, $props.asideClassModeAdding]\">\n\t\t\t<mg-form\n\t\t\t\tv-if=\"mode == 'adding'\"\n\t\t\t\tref=\"formAdd\"\n\t\t\t\t:config=\"generateConfigAdding()\"\n\t\t\t\t:actions=\"{setMode}\"\n\t\t\t/>\n\t\t</aside>\n\t\t<!-- }}} -->\n\t\t<!-- Aside item editor (edit widget) {{{ -->\n\t\t<aside :class=\"[mode == 'editing' ? $props.asideClassActive : $props.asideClassInactive, $props.asideClassModeEditing]\">\n\t\t\t<mg-form\n\t\t\t\tv-if=\"mode == 'editing'\"\n\t\t\t\t:form=\"`${id}-edit`\"\n\t\t\t\t:config=\"editConfig\"\n\t\t\t\t:data=\"editData\"\n\t\t\t\t:actions=\"{setMode, deleteWidget}\"\n\t\t\t\t@changeItem=\"mutatePath(`${editing.$specPath}.${$event.path}`, $event.value)\"\n\t\t\t/>\n\t\t</aside>\n\t\t<!-- }}} -->\n\n\t\t<!-- Display form {{{ -->\n\t\t<mg-form\n\t\t\tref=\"form\"\n\t\t\t:config=\"$props.config\"\n\t\t\t:data=\"$props.data\"\n\t\t/>\n\t\t<!-- }}} -->\n\t</div>\n</template>\n\n<style>\n/* Variables {{{ */\n:root {\n\t--mg-form-editor-selected-bg: #007bff;\n\t--mg-form-editor-selected-fg: #fff;;\n\t--mg-form-editor-selected-highlight: #5dabff;\n\t--mg-form-editor-selected-danger: #dc3545;\n\t--mg-form-editor-hover-bg: #77b9ff;\n\t--mg-form-editor-hover-fg: #fff;\n}\n/* }}} */\n\n/* Aside styles - .mgfe-aside {{{ */\n.mgfe-aside {\n\ttransition: transform 0.2s ease-out;\n}\n\n.mgfe-aside .mg-form {\n\tmargin: 0;\n}\n\n.mgfe-aside.aside-right.open.open { /* Silly hack to force the transform when open (overrides .asign-sm in priority) */\n\ttransform: translateX(0px);\n}\n\n.mgfe-aside.aside-right {\n\tposition: fixed;\n\ttop: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tbackground: #FFF;\n\tz-index: 100;\n\tbox-shadow: 0 1px 5px rgba(0,0,0,.3);\n\twidth: 350px;\n\ttransform: translateX(380px);\n}\n\n/* .mgfe-aside-sm {{{ */\n.mgfe-aside.aside-right.aside-sm {\n\twidth: 40px;\n\ttransform: translateX(50px);\n\ttop: calc(50% - 30px); /* Approx middle of the screen */\n\tbottom: inherit;\n\tborder-radius: 5px;\n}\n\n.mgfe-aside.aside-right.aside-sm .form-group {\n\tmargin: 0;\n}\n\n/* Remove BS padding from sub-elements */\n.mgfe-aside.aside-right.aside-sm .form-group [class*=\"col-\"] {\n\tpadding: 0;\n}\n/* }}} */\n\n/* Headers {{{ */\n.mgfe-aside .aside-header {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tborder-bottom: 1px solid #e9ecef;\n\tmargin: 0;\n}\n\n.mgfe-aside .aside-header h4 {\n\tflex-grow: 1;\n}\n\n.mgfe-aside .aside-header legend.form-control-static {\n\tborder-bottom: none;\n\tfont-size: 17pt;\n}\n\n.mgfe-aside .aside-header .close {\n\tcolor: #5e5e5e;\n}\n\n.mgfe-aside .aside-header .close:hover {\n\tcolor: #000;\n}\n\n.mgfe-aside .aside-header .close::after {\n\tdisplay: inline-block;\n\tfont-family: 'Font Awesome 5 Pro';\n\tfont-weight: 900;\n\tcontent: \"\\f00d\";\n}\n/* }}} */\n\n/* Actions {{{ */\n.mgfe-aside .aside-actions {\n\tjustify-self: flex-end;\n\tmargin-right: 10px;\n}\n\n.mgfe-aside .aside-actions .btn-group {\n\tborder: none;\n\tbox-shadow: none;\n}\n\n.mgfe-aside .aside-actions a {\n\tpadding: 8px;\n\tfont-size: 125%;\n}\n/* }}} */\n\n/* Body {{{ */\n.mgfe-aside .aside-body {\n\tmargin-left: 0;\n\tmargin: 10px 0 0;\n\n\t/* Body scrolling */\n\toverflow: auto;\n\theight: calc(100vh - 80px);\n}\n/* }}} */\n/* }}} */\n\n/* Component highlighting {{{\n\n/* Highlight applied to active elements inside an mgContainer */\n.mg-form-editor-target {\n\tborder: 2px solid var(--blue);\n\tborder-radius: 5px;\n\tposition: relative;\n\ttop: -4px;\n\tleft: -4px;\n\tpadding: 2px;\n}\n\n.mg-form-editor-drop-target {\n}\n\n.mg-form-editor-drop-target-before {\n\tborder-top: 4px dashed var(--blue);\n}\n\n.mg-form-editor-drop-target-after {\n\tborder-bottom: 4px dashed var(--blue);\n}\n/* }}} */\n\n/* Drag + Drop {{{ */\nbody.mg-form-editor-dragging * {\n\tcursor: grabbing;\n}\n\n#mg-form-editor-drag {\n\tdisplay: block;\n\tz-index: 1000;\n\tposition: absolute;\n\ttop: -10000px;\n\tleft: -10000px;\n\tmin-width: 160px;\n\theight: 40px;\n\tborder-radius: 5px;\n\tbackground: #2196F3;\n\tbox-shadow: 1px 1px 4px rgba(0,0,0,.3);\n\tpadding: 10px;\n\tcolor: #FFF;\n}\n\n#mg-form-editor-drag > i {\n\tmargin-right: 5px;\n}\n/* }}} */\n\n/* Misc fixes {{{ */\n/* Buttons that are also fixed with look weird */\n.mg-form-editor .btn.fa-fw {\n\twidth: 2.30em;\n\tpadding: 4px 2px !important;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$l = undefined;
    /* module identifier */
    const __vue_module_identifier__$l = undefined;
    /* functional template */
    const __vue_is_functional_template__$l = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$l = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
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

  var mgFormEditor = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$l
  });

  /**
  * The top level MacGyver form
  * @param {string} [form] Unique form name
  * @param {Object|Array} config The MacGyver form object either in long form nested array structure or short form object (which is converted)
  * @param {boolean} [populateDefaults=true] Apply initial defaults to the data when the config is ready, if false you can call vm.assignDefaults() manually if needed
  * @param {boolean} [actionsFallback=true] Use vm.$eval as a runner when no action listener is found
  * @param {Object|function} [actions] Actions subscribers as an object as a lookup list of action definition string keys and their firable function. Subscriber functions are called with the context as `(...params)`. If the value is a function it is called as the raw contents of the action.
  * @param {Object} [data] The data binding
  *
  * @emits change Emitted as `(data)` whenever any data changes
  * @emits changeItem Emitted as `({path, value})` when any single item changes
  * @emits onAction Emitted as `({action, params})` when any action is fired
  * @emits mgComponent.click Emitted as `(component, event)` on native clicks of a component
  * @emits mgComponent.mouseDown Emitted as `(component, event)` on the native mouseDown event of a component
  * @emits mgComponent.mouseUp Emitted as `(component, event)` on the native mouseUp event of a component
  * @emits mgComponent.mouseMove Emitted as `(component, event)` on the native mouseMove event of a component
  * @emits mgComponent.mouseEnter Emitted as `(component, event)` on the native mouseEnter event of a component
  * @emits mgComponent.mouseLeave Emitted as `(component, event)` on the native mouseLeave event of a component
  * @emits mgComponent.mouseOver Emitted as `(component, event)` on the native mouseOver event of a component
  * @emits mgComponent.mouseOut Emitted as `(component, event)` on the native mouseOut event of a component
  * @emits mgContainer.click Emitted as `(container, specPath, event)` on the native click event of a component within a container
  * @emits mgContainer.mouseEnter Emitted as `(container, specPath, event)` on the native mouseEnter event of a component within a container
  * @emits mgContainer.mouseLeave Emitted as `(container, specPath, event)` on the native mouseLeave event of a component within a container
  */
  var script$m = app.mgComponent('mgForm', {
    provide: function provide() {
      return {
        $mgForm: this
      };
    },
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
        formData: {},
        // Calculated version of $props.data after default population
        inRefresh: false // Whether we are doing a refresh from the top-down, prevents recursive refreshing

      };
    },
    props: {
      form: String,
      // Optional overriding form ID
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
        type: [Function, Object],
        validator: function validator(v) {
          return _.isFunction(v) || _.every(function (v) {
            return _.isFunction(v);
          });
        }
      }
    },
    created: function created() {
      this.id = this.id || this.$props.form || this.$macgyver.nextId();
    },
    mounted: function mounted() {
      var _this = this;

      this.$watch('$props.config', function () {
        // console.log('mgForm config clobber', this.id, JSON.parse(JSON.stringify(this.$props.config)));
        _this.rebuild();
      }, {
        immediate: true,
        deep: true
      });
      this.$watch('$props.data', function () {
        // console.log('mgForm data clobber', this.id, JSON.parse(JSON.stringify(this.$props.config)));
        _this.rebuildData();
      }, {
        immediate: true,
        deep: true
      });
      this.$on('mgChange', function (data) {
        if (_this.inRefresh) return;

        _this.$macgyver.utils.setPath(_this.formData, data.path, data.value);

        _this.$emit('changeItem', data);

        _this.$emit('change', _objectSpread2({}, _this.formData)); // Has to be a shallow clone so we break the reference and Vue updates


        _this.refreshShowIfs();
      });
      this.$on('mgErrors', function (errors) {
        return _this.errors = errors;
      }); // this.$on('mgForm.rebuild', ()=> this.rebuild()); // FIXME: Needed after new mgForm config clobber detection?
    },
    methods: {
      /**
      * Force the form to rebuild its config
      */
      rebuild: function rebuild() {
        this.id = this.id || this.$props.form || this.$macgyver.nextId(); // console.log(`Rebuild form config for form "${this.id}"`);

        this.spec = this.$macgyver.compileSpec(this.$props.config);
        if (!this.spec || !this.spec.spec) throw new Error('Invalid Macgyver form spec');
      },

      /**
      * Force the form to rebuild its data set
      */
      rebuildData: function rebuildData() {
        var _this2 = this;

        if (this.inRefresh) return;
        this.inRefresh = true;
        this.formData = this.$props.data ? _.cloneDeep(this.$props.data) : {};
        if (this.$props.populateDefaults) this.assignDefaults();
        this.refreshShowIfs();
        this.$emit.down('mgRefreshForm');
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

        this.$emit('change', this.formData);
      },

      /**
      * Compute the data prototype of the form
      * This is an empty object with all the defaults populated
      * @returns {Object} A prototype data object with all defaults populated
      * @see $macgyver.forms.getPrototype()
      */
      getPrototype: function getPrototype() {
        if (!this.id) return {}; // Form not yet ready

        return this.$macgyver.forms.getPrototype(this.spec.spec);
      },

      /**
      * Execute a function within a form
      * The default behaviour of this function is documented within the function
      * @param {string|function} action The action(s) to execute
      * @param {*} [context] The context of the action, defaults to the form component
      * @param {*} [params...] Additional parameters to execute
      * @emits mgRun Event fired at the form level only with a single object of the form `{action, params}`. Use the form property handleActions to specify if the form should handle or trap the event to override
      */
      run: function run(action, context) {
        var _this$$props$onAction, _this$$macgyver$$eval;

        // 0. See if what we've been passed is already a function {{{
        if (typeof action == 'function') {
          return action.call(context !== null && context !== void 0 ? context : this);
        } // }}}
        // 1. Emit mgRun to parents and see if they want to handle it {{{


        var handled = false;

        for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          params[_key - 2] = arguments[_key];
        }

        this.$emit.up.call(context !== null && context !== void 0 ? context : this, 'mgRun', {
          action: action,
          params: params
        }, function (isHandled) {
          if (isHandled) handled = true;
        });
        if (handled) return; // }}}
        // 2. Use FORM.$props.onAction(action) and see if returns truthy {{{

        if (this.$props.onAction && (_this$$props$onAction = this.$props.onAction).call.apply(_this$$props$onAction, [context !== null && context !== void 0 ? context : this, action].concat(params))) return; // }}}
        // 3a. Does FORM.$props.actions exist and is a function which will handle everything? {{{

        if (this.$props.actions && _.isFunction(this.$props.actions)) {
          this.$props.actions.call(context !== null && context !== void 0 ? context : this, action);
          return;
        } // }}}
        // 3b. Does FORM.$props.actions[action] exist and if so whether it returns truthy {{{


        var _ref = /^([a-z0-9\_]*?)(\(.*\))?$/i.exec(action) || [],
            _ref2 = _slicedToArray(_ref, 3),
            junk = _ref2[0],
            actionReadable = _ref2[1],
            actionArgs = _ref2[2];

        if (actionReadable && this.$props.actions && this.$props.actions[actionReadable]) {
          // Collapse strings to functions
          var func = _.isString(this.$props.actions[actionReadable]) ? this[actionReadable] : this.$props.actions[actionReadable]; // Tidy up actionArgs

          actionArgs = (actionArgs || '').replace(/^\(/, '') // Remove preceeding '('
          .replace(/\)$/, '') // Remove succeeding ')'
          .split(',').map(function (i) {
            return i && JSON.parse(i.replace(/'/g, '"'));
          });
          if (func.call.apply(func, [context !== null && context !== void 0 ? context : this].concat(_toConsumableArray(actionArgs), params))) return;
        } // }}}
        // 4. If all else failed and FORM.$props.actionsFallback is true - handle it via vm.$eval {{{


        (_this$$macgyver$$eval = this.$macgyver.$eval).call.apply(_this$$macgyver$$eval, [context !== null && context !== void 0 ? context : this, action].concat(params)); // }}}

      },

      /**
      * Find a VueComponent instance from a specPath
      * @param {string|array} specPath The specPath to search for
      * @param {boolean} [throws=true] Throw an error if the path cannot be found (avoid downstream checking if the specPath is valid)
      * @returns {VueComponent} Either the found VueComponent or `false` if not found
      */
      getComponentBySpecPath: function getComponentBySpecPath(specPath) {
        var _throws = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var found = false;
        this.$emit.down('mgIdentify', function (widget) {
          if (!found && widget.$props.$specPath == specPath) found = widget;
        });
        if (!found && _throws) throw new Error("Cannot edit component by non-existant specPath \"".concat(specPath, "\""));
        return found;
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
    return _c(
      "div",
      { staticClass: "mg-form" },
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
          ? _c("mg-component", { attrs: { config: _vm.spec.spec } })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$m = function (inject) {
      if (!inject) return
      inject("data-v-d658ec36_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Add missing Bootstrap color variables */\n.mg-form {\n\t--btn-default-bg: #e9ecef;\n\t--btn-default-fg: #495057;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgForm.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyOA,0CAAA;AACA;CACA,yBAAA;CACA,yBAAA;AACA","file":"mgForm.vue","sourcesContent":["<script lang=\"js\">\n/**\n* The top level MacGyver form\n* @param {string} [form] Unique form name\n* @param {Object|Array} config The MacGyver form object either in long form nested array structure or short form object (which is converted)\n* @param {boolean} [populateDefaults=true] Apply initial defaults to the data when the config is ready, if false you can call vm.assignDefaults() manually if needed\n* @param {boolean} [actionsFallback=true] Use vm.$eval as a runner when no action listener is found\n* @param {Object|function} [actions] Actions subscribers as an object as a lookup list of action definition string keys and their firable function. Subscriber functions are called with the context as `(...params)`. If the value is a function it is called as the raw contents of the action.\n* @param {Object} [data] The data binding\n*\n* @emits change Emitted as `(data)` whenever any data changes\n* @emits changeItem Emitted as `({path, value})` when any single item changes\n* @emits onAction Emitted as `({action, params})` when any action is fired\n* @emits mgComponent.click Emitted as `(component, event)` on native clicks of a component\n* @emits mgComponent.mouseDown Emitted as `(component, event)` on the native mouseDown event of a component\n* @emits mgComponent.mouseUp Emitted as `(component, event)` on the native mouseUp event of a component\n* @emits mgComponent.mouseMove Emitted as `(component, event)` on the native mouseMove event of a component\n* @emits mgComponent.mouseEnter Emitted as `(component, event)` on the native mouseEnter event of a component\n* @emits mgComponent.mouseLeave Emitted as `(component, event)` on the native mouseLeave event of a component\n* @emits mgComponent.mouseOver Emitted as `(component, event)` on the native mouseOver event of a component\n* @emits mgComponent.mouseOut Emitted as `(component, event)` on the native mouseOut event of a component\n* @emits mgContainer.click Emitted as `(container, specPath, event)` on the native click event of a component within a container\n* @emits mgContainer.mouseEnter Emitted as `(container, specPath, event)` on the native mouseEnter event of a component within a container\n* @emits mgContainer.mouseLeave Emitted as `(container, specPath, event)` on the native mouseLeave event of a component within a container\n*/\nexport default app.mgComponent('mgForm', {\n\tprovide() { return {\n\t\t$mgForm: this,\n\t}},\n\tdata() { return {\n\t\tid: undefined, // Set on create\n\t\tediting: false, // Set by mgFormEditor when its this components parent\n\t\terrors: [], // array <Object> {error}\n\t\tspec: undefined, // Calculated version of config after its been though $macgyver.compileSpec()\n\t\tformData: {}, // Calculated version of $props.data after default population\n\t\tinRefresh: false, // Whether we are doing a refresh from the top-down, prevents recursive refreshing\n\t}},\n\tprops: {\n\t\tform: String, // Optional overriding form ID\n\t\tconfig: [Object, Array], // Can be a single object, array of objects or shorthand style\n\t\tdata: Object,\n\n\t\tpopulateDefaults: {type: Boolean, default: true},\n\t\tonAction: Function,\n\t\tactionsFallback: {type: Boolean, default: true},\n\t\tactions: { // Object of functions e.g. `{customFunc: ()=> {}}`\n\t\t\ttype: [Function, Object],\n\t\t\tvalidator: v => _.isFunction(v) || _.every(v => _.isFunction(v)),\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.id = this.id || this.$props.form || this.$macgyver.nextId();\n\t},\n\tmounted() {\n\t\tthis.$watch('$props.config', ()=> {\n\t\t\t// console.log('mgForm config clobber', this.id, JSON.parse(JSON.stringify(this.$props.config)));\n\t\t\tthis.rebuild();\n\t\t}, {immediate: true, deep: true});\n\n\t\tthis.$watch('$props.data', ()=> {\n\t\t\t// console.log('mgForm data clobber', this.id, JSON.parse(JSON.stringify(this.$props.config)));\n\t\t\tthis.rebuildData();\n\t\t}, {immediate: true, deep: true});\n\n\t\tthis.$on('mgChange', data => {\n\t\t\tif (this.inRefresh) return;\n\t\t\tthis.$macgyver.utils.setPath(this.formData, data.path, data.value);\n\t\t\tthis.$emit('changeItem', data);\n\n\t\t\tthis.$emit('change', {...this.formData}); // Has to be a shallow clone so we break the reference and Vue updates\n\t\t\tthis.refreshShowIfs();\n\t\t});\n\n\t\tthis.$on('mgErrors', errors => this.errors = errors);\n\t\t// this.$on('mgForm.rebuild', ()=> this.rebuild()); // FIXME: Needed after new mgForm config clobber detection?\n\t},\n\tmethods: {\n\t\t/**\n\t\t* Force the form to rebuild its config\n\t\t*/\n\t\trebuild() {\n\t\t\tthis.id = this.id || this.$props.form || this.$macgyver.nextId();\n\t\t\t// console.log(`Rebuild form config for form \"${this.id}\"`);\n\n\t\t\tthis.spec = this.$macgyver.compileSpec(this.$props.config);\n\t\t\tif (!this.spec || !this.spec.spec) throw new Error('Invalid Macgyver form spec');\n\t\t},\n\n\n\t\t/**\n\t\t* Force the form to rebuild its data set\n\t\t*/\n\t\trebuildData() {\n\t\t\tif (this.inRefresh) return;\n\t\t\tthis.inRefresh = true;\n\n\t\t\tthis.formData = this.$props.data ? _.cloneDeep(this.$props.data) : {};\n\n\t\t\tif (this.$props.populateDefaults) this.assignDefaults();\n\t\t\tthis.refreshShowIfs();\n\t\t\tthis.$emit.down('mgRefreshForm');\n\t\t\tthis.$nextTick(()=> // Wait one tick for all attempts to recall this function recursively to exhaust\n\t\t\t\tthis.inRefresh = false\n\t\t\t);\n\t\t},\n\n\n\t\t/**\n\t\t* Force recomputation of show via showIf values\n\t\t*/\n\t\trefreshShowIfs() {\n\t\t\tif (!this.spec) return;\n\t\t\tthis.spec.showIfs.forEach(widget =>\n\t\t\t\twidget.show = this.$macgyver.utils.evalMatch(widget.showIf, this.formData)\n\t\t\t);\n\t\t},\n\n\n\t\t/**\n\t\t* Assign initial defaults if a value is not in the data object\n\t\t*/\n\t\tassignDefaults() {\n\t\t\tif (!this.spec) return;\n\t\t\t_.defaultsDeep(this.formData, this.getPrototype());\n\t\t\tthis.$emit('change', this.formData);\n\t\t},\n\n\n\t\t/**\n\t\t* Compute the data prototype of the form\n\t\t* This is an empty object with all the defaults populated\n\t\t* @returns {Object} A prototype data object with all defaults populated\n\t\t* @see $macgyver.forms.getPrototype()\n\t\t*/\n\t\tgetPrototype() {\n\t\t\tif (!this.id) return {}; // Form not yet ready\n\t\t\treturn this.$macgyver.forms.getPrototype(this.spec.spec);\n\t\t},\n\n\n\t\t/**\n\t\t* Execute a function within a form\n\t\t* The default behaviour of this function is documented within the function\n\t\t* @param {string|function} action The action(s) to execute\n\t\t* @param {*} [context] The context of the action, defaults to the form component\n\t\t* @param {*} [params...] Additional parameters to execute\n\t\t* @emits mgRun Event fired at the form level only with a single object of the form `{action, params}`. Use the form property handleActions to specify if the form should handle or trap the event to override\n\t\t*/\n\t\trun(action, context, ...params) {\n\t\t\t// 0. See if what we've been passed is already a function {{{\n\t\t\tif (typeof action == 'function') {\n\t\t\t\treturn action.call(context ?? this);\n\t\t\t}\n\t\t\t// }}}\n\n\t\t\t// 1. Emit mgRun to parents and see if they want to handle it {{{\n\t\t\tvar handled = false;\n\t\t\tthis.$emit.up.call(context ?? this, 'mgRun', {action, params}, isHandled => {\n\t\t\t\tif (isHandled) handled = true;\n\t\t\t});\n\t\t\tif (handled) return;\n\t\t\t// }}}\n\n\t\t\t// 2. Use FORM.$props.onAction(action) and see if returns truthy {{{\n\t\t\tif (this.$props.onAction && this.$props.onAction.call(context ?? this, action, ...params)) return;\n\t\t\t// }}}\n\n\t\t\t// 3a. Does FORM.$props.actions exist and is a function which will handle everything? {{{\n\t\t\tif (this.$props.actions && _.isFunction(this.$props.actions)) {\n\t\t\t\tthis.$props.actions.call(context ?? this, action);\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t// }}}\n\n\t\t\t// 3b. Does FORM.$props.actions[action] exist and if so whether it returns truthy {{{\n\t\t\tvar [junk, actionReadable, actionArgs] = /^([a-z0-9\\_]*?)(\\(.*\\))?$/i.exec(action) || [];\n\t\t\tif (actionReadable && this.$props.actions && this.$props.actions[actionReadable]) {\n\t\t\t\t// Collapse strings to functions\n\t\t\t\tvar func = _.isString(this.$props.actions[actionReadable]) ? this[actionReadable]\n\t\t\t\t\t: this.$props.actions[actionReadable];\n\n\t\t\t\t// Tidy up actionArgs\n\t\t\t\tactionArgs = (actionArgs || '')\n\t\t\t\t\t.replace(/^\\(/, '') // Remove preceeding '('\n\t\t\t\t\t.replace(/\\)$/, '') // Remove succeeding ')'\n\t\t\t\t\t.split(',')\n\t\t\t\t\t.map(i => i && JSON.parse(i.replace(/'/g, '\"')));\n\n\t\t\t\tif (func.call(context ?? this, ...actionArgs, ...params)) return;\n\t\t\t}\n\t\t\t// }}}\n\n\t\t\t// 4. If all else failed and FORM.$props.actionsFallback is true - handle it via vm.$eval {{{\n\t\t\tthis.$macgyver.$eval.call(context ?? this, action, ...params);\n\t\t\t// }}}\n\t\t},\n\n\n\t\t/**\n\t\t* Find a VueComponent instance from a specPath\n\t\t* @param {string|array} specPath The specPath to search for\n\t\t* @param {boolean} [throws=true] Throw an error if the path cannot be found (avoid downstream checking if the specPath is valid)\n\t\t* @returns {VueComponent} Either the found VueComponent or `false` if not found\n\t\t*/\n\t\tgetComponentBySpecPath(specPath, throws = true) {\n\t\t\tvar found = false;\n\t\t\tthis.$emit.down('mgIdentify', widget => {\n\t\t\t\tif (!found && widget.$props.$specPath == specPath)\n\t\t\t\t\tfound = widget;\n\t\t\t});\n\t\t\tif (!found && throws) throw new Error(`Cannot edit component by non-existant specPath \"${specPath}\"`);\n\t\t\treturn found;\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-form\">\n\t\t<div v-if=\"errors.length\" class=\"alert alert-warning\">\n\t\t\t<ul>\n\t\t\t\t<li v-for=\"err in errors\">{{err.error}}</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<mg-component\n\t\t\tv-if=\"spec\"\n\t\t\t:config=\"spec.spec\"\n\t\t/>\n\t</div>\n</template>\n\n<style>\n/* Add missing Bootstrap color variables */\n.mg-form {\n\t--btn-default-bg: #e9ecef;\n\t--btn-default-fg: #495057;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$m = undefined;
    /* module identifier */
    const __vue_module_identifier__$m = undefined;
    /* functional template */
    const __vue_is_functional_template__$m = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$m = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
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

  var mgForm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$m
  });

  var script$n = app.mgComponent('mgGrid', {
    meta: {
      title: 'Grid layout',
      icon: 'far fa-grip-horizontal',
      category: 'Layout'
    },
    props: {
      items: {
        type: 'mgUnknown',
        "default": []
      }
    }
  });

  /* script */
  const __vue_script__$n = script$n;

  /* template */
  var __vue_render__$k = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "table",
      { staticClass: "table table-striped table-bordered" },
      _vm._l(_vm.$props.items, function(row) {
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
  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;

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
    

    
    const __vue_component__$n = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
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

  var mgGrid = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$n
  });

  var script$o = app.mgComponent('mgHeading', {
    meta: {
      title: 'Heading',
      icon: 'far fa-heading',
      category: 'General Decoration'
    },
    props: {
      text: {
        type: 'mgText'
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
    return _c("legend", { staticClass: "form-control-static" }, [
      _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.text) + "\n")
    ])
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
    
    /* style inject shadow dom */
    

    
    const __vue_component__$o = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
      __vue_inject_styles__$o,
      __vue_script__$o,
      __vue_scope_id__$o,
      __vue_is_functional_template__$o,
      __vue_module_identifier__$o,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgHeading = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$o
  });

  var script$p = app.mgComponent('mgHtml', {
    meta: {
      title: 'Static HTML',
      icon: 'fab fa-html5',
      category: 'General Decoration'
    },
    inject: {
      $mgForm: {
        from: '$mgForm'
      },
      $mgFormEditor: {
        from: '$mgFormEditor',
        "default": false
      }
    },
    props: {
      text: {
        type: 'mgCode',
        syntax: 'html'
      }
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
      [
        !_vm.$mgFormEditor
          ? _c("div", {
              staticClass: "form-control-static",
              domProps: { innerHTML: _vm._s(_vm.data || _vm.$props.text) }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.$mgFormEditor
          ? _c("mg-wysiwyg", {
              attrs: {
                value: _vm.data === undefined ? _vm.$props.text : _vm.data
              },
              on: {
                change: function($event) {
                  _vm.data = $event;
                }
              }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$m = [];
  __vue_render__$m._withStripped = true;

    /* style */
    const __vue_inject_styles__$p = undefined;
    /* scoped */
    const __vue_scope_id__$p = undefined;
    /* module identifier */
    const __vue_module_identifier__$p = undefined;
    /* functional template */
    const __vue_is_functional_template__$p = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$p = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
      __vue_inject_styles__$p,
      __vue_script__$p,
      __vue_scope_id__$p,
      __vue_is_functional_template__$p,
      __vue_module_identifier__$p,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgHtml = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$p
  });

  var script$q = app.mgComponent('mgIcon', {
    meta: {
      title: 'Icon',
      icon: 'far fa-flag',
      category: 'Simple Inputs',
      preferId: true
    },
    props: {
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
      className: {
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    },
    methods: {
      selectIcon: function selectIcon() {
        var _this2 = this;

        Promise.resolve().then(function () {
          return _this2.$macgyver.notify.loading(_this2._uid, true);
        }).then(function () {
          return _this2.$http.get(_this2.$props.iconFeed);
        }).then(function (res) {
          _this2.$macgyver.notify.loading(_this2._uid, false);

          return res;
        }).then(function (res) {
          return _this2.$macgyver.$prompt.macgyver({
            title: 'Select icon',
            buttons: [],
            // We're capturing the first click so we don't need confirm buttons
            macgyver: [{
              id: 'className',
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
          return _this2.data = form.className;
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
      "div",
      { staticClass: "mg-icon" },
      [
        _vm.$props.interface == "modal"
          ? _c("a", {
              staticClass: "btn btn-light btn-icon-fixed",
              class: _vm.data
                ? [_vm.data, _vm.$props.classActive || _vm.$props.className]
                : [
                    _vm.$props.iconFallback,
                    _vm.$props.classInactive || _vm.$props.className
                  ],
              on: {
                click: function($event) {
                  return _vm.selectIcon()
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.$props.interface == "dropdown"
          ? _c("mg-choice-dropdown", {
              attrs: {
                "enum-source": "url",
                "enum-url": {
                  url: _vm.$props.iconFeed,
                  type: "array",
                  mappings: {
                    id: { required: true, from: "class" },
                    title: { required: true, from: "id" },
                    icon: { required: true, from: "class" }
                  }
                },
                default: _vm.$props.default,
                required: _vm.$props.required,
                value: _vm.data
              },
              on: {
                change: function($event) {
                  _vm.data = $event;
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.$props.interface !== "modal" && _vm.$props.interface !== "dropdown"
          ? _c("mg-error", {
              attrs: { "error-text": "Unknown mgIcon interface" }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$n = [];
  __vue_render__$n._withStripped = true;

    /* style */
    const __vue_inject_styles__$q = function (inject) {
      if (!inject) return
      inject("data-v-9dd1b638_0", { source: "\n.btn.btn-icon-fixed {\n\tbox-shadow: none;\n\twidth: 32px;\n\theight: 32px;\n\tpadding: 7px 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgIcon.vue"],"names":[],"mappings":";AA0FA;CACA,gBAAA;CACA,WAAA;CACA,YAAA;CACA,cAAA;CACA,aAAA;CACA,uBAAA;CACA,mBAAA;AACA","file":"mgIcon.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgIcon', {\n\tmeta: {\n\t\ttitle: 'Icon',\n\t\ticon: 'far fa-flag',\n\t\tcategory: 'Simple Inputs',\n\t\tpreferId: true,\n\t},\n\tprops: {\n\t\ticonFallback: {type: 'mgIcon', default: 'far fa-info', help: 'The icon to use if non is selected'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tinterface: {type: 'mgChoiceButtons', default: 'modal', enum: ['modal', 'dropdown']},\n\t\ticonFeed: {type: 'mgText', default: '/api/webfonts/fa.json', advanced: true, help: 'The data source to import icon information', relative: true},\n\t\tclassName: {type: 'mgText', default: 'btn btn-light btn-circle', advanced: true},\n\t\tclassActive: {type: 'mgText', advanced: true},\n\t\tclassInactive: {type: 'mgText', advanced: true},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);\n\t\t});\n\t},\n\tmethods: {\n\t\tselectIcon() {\n\t\t\tPromise.resolve()\n\t\t\t\t.then(()=> this.$macgyver.notify.loading(this._uid, true))\n\t\t\t\t.then(()=> this.$http.get(this.$props.iconFeed))\n\t\t\t\t.then(res => { this.$macgyver.notify.loading(this._uid, false); return res })\n\t\t\t\t.then(res => this.$macgyver.$prompt.macgyver({\n\t\t\t\t\ttitle: 'Select icon',\n\t\t\t\t\tbuttons: [], // We're capturing the first click so we don't need confirm buttons\n\t\t\t\t\tmacgyver: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 'className',\n\t\t\t\t\t\t\ttype: 'mgChoiceButtons',\n\t\t\t\t\t\t\tshowTitle: false,\n\t\t\t\t\t\t\tclassWrapper: '',\n\t\t\t\t\t\t\tenum: res.data.map(icon => ({\n\t\t\t\t\t\t\t\tid: icon.class,\n\t\t\t\t\t\t\t\tclass: `btn btn-icon-fixed ${icon.class} fa-fw`,\n\t\t\t\t\t\t\t\tclassActive: `btn btn-primary btn-icon-fixed ${icon.class} fa-fw`,\n\t\t\t\t\t\t\t})),\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t\tonShow: ()=> {\n\t\t\t\t\t\t// Bind to the mg-form element, detect the first change and close the dialog\n\t\t\t\t\t\tthis.$macgyver.$prompt.settings.macgyverForm.$on('mgChange', ()=> setTimeout(()=> { // Timeout not really needed but it lets the button highlight before we close\n\t\t\t\t\t\t\tthis.$macgyver.$prompt.close(true, this.$macgyver.$prompt.settings.value);\n\t\t\t\t\t\t}, 100));\n\t\t\t\t\t},\n\t\t\t\t}))\n\t\t\t\t.then(form => this.data = form.className)\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-icon\">\n\t\t<a\n\t\t\tv-if=\"$props.interface == 'modal'\"\n\t\t\t@click=\"selectIcon()\"\n\t\t\tclass=\"btn btn-light btn-icon-fixed\"\n\t\t\t:class=\"data ? [data, $props.classActive || $props.className] : [$props.iconFallback, $props.classInactive || $props.className]\"\n\t\t/>\n\t\t<mg-choice-dropdown\n\t\t\tv-if=\"$props.interface == 'dropdown'\"\n\t\t\tenum-source=\"url\"\n\t\t\t:enum-url=\"{\n\t\t\t\turl: $props.iconFeed,\n\t\t\t\ttype: 'array',\n\t\t\t\tmappings: {\n\t\t\t\t\tid: {required: true, from: 'class'},\n\t\t\t\t\ttitle: {required: true, from: 'id'},\n\t\t\t\t\ticon: {required: true, from: 'class'},\n\t\t\t\t},\n\t\t\t}\"\n\t\t\t:default=\"$props.default\"\n\t\t\t:required=\"$props.required\"\n\t\t\t:value=\"data\"\n\t\t\t@change=\"data = $event\"\n\t\t/>\n\t\t<mg-error\n\t\t\tv-if=\"$props.interface !== 'modal' && $props.interface !== 'dropdown'\"\n\t\t\terror-text=\"Unknown mgIcon interface\"\n\t\t/>\n\t</div>\n</template>\n\n<style>\n.btn.btn-icon-fixed {\n\tbox-shadow: none;\n\twidth: 32px;\n\theight: 32px;\n\tpadding: 7px 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$q = undefined;
    /* module identifier */
    const __vue_module_identifier__$q = undefined;
    /* functional template */
    const __vue_is_functional_template__$q = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$q = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
      __vue_inject_styles__$q,
      __vue_script__$q,
      __vue_scope_id__$q,
      __vue_is_functional_template__$q,
      __vue_module_identifier__$q,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgIcon = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$q
  });

  var script$r = app.mgComponent('mgInfoBlock', {
    meta: {
      title: 'Info Block',
      icon: 'far fa-info-square',
      category: 'Data display',
      format: false
    },
    data: function data() {
      return {
        isLoading: false
      };
    },
    props: {
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
    created: function created() {
      var _this = this;

      this.$watch('$props.url', function () {
        if (!_this.$props.url) return;
        Promise.resolve().then(function () {
          return _this.isLoading = true;
        }).then(function () {
          return _this.$macgyver.utils.fetch(_this.$props.url, {
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
  const __vue_script__$r = script$r;

  /* template */
  var __vue_render__$o = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "card mg-info-block", class: _vm.$props.coloring },
      [
        _c("div", { staticClass: "card-body media" }, [
          _c("div", { staticClass: "mr-3" }, [
            _c("i", {
              class: [
                _vm.isLoading ? _vm.$props.iconLoading : _vm.$props.icon,
                _vm.$props.iconSize
              ]
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-body" }, [
            _c("div", { staticClass: "mg-info-block-text" }, [
              _vm._v(_vm._s(_vm.data || _vm.$props.text))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mg-info-block-title" }, [
              _vm._v(_vm._s(_vm.$props.title))
            ])
          ])
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$o = [];
  __vue_render__$o._withStripped = true;

    /* style */
    const __vue_inject_styles__$r = function (inject) {
      if (!inject) return
      inject("data-v-bd089520_0", { source: "\n.mg-info-block {\n\tbackground: transparent;\n\tborder-radius: 5px;\n}\n.mg-info-block .mg-info-block-text {\n\tfont-size: 200%;\n\tfont-weight: bold;\n}\n.mg-info-block .mg-info-block-title {\n\tfont-size: 90%;\n\topacity: 0.8;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgInfoBlock.vue"],"names":[],"mappings":";AA+EA;CACA,uBAAA;CACA,kBAAA;AACA;AAEA;CACA,eAAA;CACA,iBAAA;AACA;AAEA;CACA,cAAA;CACA,YAAA;AACA","file":"mgInfoBlock.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgInfoBlock', {\n\tmeta: {\n\t\ttitle: 'Info Block',\n\t\ticon: 'far fa-info-square',\n\t\tcategory: 'Data display',\n\t\tformat: false,\n\t},\n\tdata() { return {\n\t\tisLoading: false,\n\t}},\n\tprops: {\n\t\ttext: {type: 'mgText', help: 'Text to display, if a URL is also specified this is overridden when the result loads', default: ''},\n\t\turl: {type: 'mgUrl', relative: true, default: '/api/datafeeds/random/number?$extract=number'},\n\t\tcoloring: {\n\t\t\ttype: 'mgChoiceDropdown',\n\t\t\tdefault: 'bg-primary',\n\t\t\tenum: [\n\t\t\t\t{id: 'bg-primary text-white', text: 'Primary'},\n\t\t\t\t{id: 'bg-secondary', text: 'Secondary'},\n\t\t\t\t{id: 'bg-success text-white', text: 'Success'},\n\t\t\t\t{id: 'bg-danger text-white', text: 'Danger'},\n\t\t\t\t{id: 'bg-warning text-white', text: 'Warning'},\n\t\t\t\t{id: 'bg-info text-white', text: 'Info'},\n\t\t\t\t{id: 'bg-light', text: 'Light'},\n\t\t\t\t{id: 'bg-dark text-white', text: 'Dark'},\n\t\t\t\t{id: 'bg-muted', text: 'Muted'},\n\t\t\t],\n\t\t},\n\t\ticon: {type: 'mgIcon', default: 'far fa-info-circle'},\n\t\ticonLoading: {type: 'mgIcon', default: 'far fa-spinner fa-spin', advanced: true},\n\t\ticonSize: {\n\t\t\ttype: 'mgChoiceButtons',\n\t\t\tdefault: 'fa-4x',\n\t\t\tadvanced: true,\n\t\t\tenum: [\n\t\t\t\t{id: '', text: 'Normal'},\n\t\t\t\t{id: 'fa-2x', text: '2x'},\n\t\t\t\t{id: 'fa-3x', text: '3x'},\n\t\t\t\t{id: 'fa-4x', text: '4x'},\n\t\t\t\t{id: 'fa-5x', text: '5x'},\n\t\t\t\t{id: 'fa-6x', text: '6x'},\n\t\t\t\t{id: 'fa-7x', text: '7x'},\n\t\t\t\t{id: 'fa-8x', text: '8x'},\n\t\t\t],\n\t\t},\n\t},\n\tcreated() {\n\t\tthis.$watch('$props.url', ()=> {\n\t\t\tif (!this.$props.url) return;\n\t\t\tPromise.resolve()\n\t\t\t\t.then(()=> this.isLoading = true)\n\t\t\t\t.then(()=> this.$macgyver.utils.fetch(this.$props.url, {\n\t\t\t\t\ttype: 'object',\n\t\t\t\t\tmappings: {extract: {required: true}},\n\t\t\t\t\tformat: d => d.extract,\n\t\t\t\t}))\n\t\t\t\t.then(data => this.$set(this, 'data', data))\n\t\t\t\t.then(()=> this.isLoading = false)\n\t\t}, {immediate: true});\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"card mg-info-block\" :class=\"$props.coloring\">\n\t\t<div class=\"card-body media\">\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<i :class=\"[isLoading ? $props.iconLoading : $props.icon, $props.iconSize]\"/>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<div class=\"mg-info-block-text\">{{data || $props.text}}</div>\n\t\t\t\t<div class=\"mg-info-block-title\">{{$props.title}}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-info-block {\n\tbackground: transparent;\n\tborder-radius: 5px;\n}\n\n.mg-info-block .mg-info-block-text {\n\tfont-size: 200%;\n\tfont-weight: bold;\n}\n\n.mg-info-block .mg-info-block-title {\n\tfont-size: 90%;\n\topacity: 0.8;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$r = undefined;
    /* module identifier */
    const __vue_module_identifier__$r = undefined;
    /* functional template */
    const __vue_is_functional_template__$r = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$r = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
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

  var mgInfoBlock = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$r
  });

  var script$s = app.mgComponent('mgLabel', {
    meta: {
      title: 'Read-only label',
      icon: 'far fa-font',
      category: 'General Decoration'
    },
    props: {
      text: {
        type: 'mgText'
      },
      className: {
        type: 'mgText',
        "default": 'form-control-static',
        advanced: true
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
    return _c("div", { class: _vm.$props.className }, [
      _vm._v("\n\t" + _vm._s(_vm.data || _vm.$props.text) + "\n")
    ])
  };
  var __vue_staticRenderFns__$p = [];
  __vue_render__$p._withStripped = true;

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
    

    
    const __vue_component__$s = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
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

  var mgLabel = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$s
  });

  var script$t = app.mgComponent('mgList', {
    meta: {
      title: 'List',
      icon: 'far fa-list-ul',
      category: 'Simple Inputs',
      preferId: true,
      format: function format(v) {
        return (v || []).join(', ');
      }
    },
    data: function data() {
      return {
        newItem: ''
      };
    },
    props: {
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && (!_this.data || !_this.data.length)) return reply("".concat(_this.$props.title, " is required"));
        if (_this.$props.min && _.isString(_this.data) && _this.data.length < _this.$props.min) return reply("".concat(_this.$props.title, " must have at least ").concat(_this.$props.min, " items"));
        if (_this.$props.max && _.isString(_this.data) && _this.data.length > _this.$props.max) return reply("".concat(_this.$props.title, " must have at most ").concat(_this.$props.max, " items"));
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
  const __vue_script__$t = script$t;

  /* template */
  var __vue_render__$q = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("table", { staticClass: "table table-bordered mg-list" }, [
      _c(
        "tbody",
        _vm._l(_vm.data, function(row, rowIndex) {
          return _c("tr", { key: rowIndex }, [
            _vm.$props.numbered
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
            _vm.$props.allowDelete
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
          _vm.$props.numbered
            ? _c("td", { staticClass: "row-number-cell" }, [
                !_vm.$props.allowDelete
                  ? _c("a", {
                      class: _vm.newItem
                        ? _vm.$props.addButtonActiveClass
                        : _vm.$props.addButtonInactiveClass,
                      on: {
                        click: function($event) {
                          return _vm.addItem()
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.$props.allowDelete
                  ? _c("i", { staticClass: "far fa-asterisk" })
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("td", { attrs: { colspan: _vm.$props.allowDelete ? 1 : 2 } }, [
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
          ]),
          _vm._v(" "),
          _vm.$props.allowDelete
            ? _c("td", { staticClass: "verb-cell" }, [
                _c("a", {
                  class: _vm.newItem
                    ? _vm.$props.addButtonActiveClass
                    : _vm.$props.addButtonInactiveClass,
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
  var __vue_staticRenderFns__$q = [];
  __vue_render__$q._withStripped = true;

    /* style */
    const __vue_inject_styles__$t = function (inject) {
      if (!inject) return
      inject("data-v-094a069e_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Cell padding */\n.mg-list td {\n\tpadding: 0px !important;\n}\n.mg-list td input[type=\"text\"] {\n\tborder: none;\n}\n\n/* Row number cell */\n.mg-list td.row-number-cell {\n\ttext-align: center;\n\twidth: 30px;\n\tvertical-align: middle;\n}\n\n/* Verb cell */\n.mg-list .verb-cell {\n\twidth: 30px;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgList.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2EA,iBAAA;AACA;CACA,uBAAA;AACA;AAEA;CACA,YAAA;AACA;;AAEA,oBAAA;AACA;CACA,kBAAA;CACA,WAAA;CACA,sBAAA;AACA;;AAEA,cAAA;AACA;CACA,WAAA;CACA,kBAAA;CACA,sBAAA;AACA","file":"mgList.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgList', {\n\tmeta: {\n\t\ttitle: 'List',\n\t\ticon: 'far fa-list-ul',\n\t\tcategory: 'Simple Inputs',\n\t\tpreferId: true,\n\t\tformat: v => (v || []).join(', '),\n\t},\n\tdata() { return {\n\t\tnewItem: '',\n\t}},\n\tprops: {\n\t\tallowDelete: {type: 'mgToggle', default: true},\n\t\tmin: {type: 'mgNumber', title: 'Minimum number of items'},\n\t\tmax: {type: 'mgNumber', title: 'Maximum number of items'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tnumbered: {type: 'mgToggle', default: true},\n\t\taddButtonActiveClass: {type: 'mgText', default: 'btn btn-block btn-success fa fa-plus', advanced: true},\n\t\taddButtonInactiveClass: {type: 'mgText', default: 'btn btn-block btn-disabled fa fa-plus', advanced: true},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && (!this.data || !this.data.length)) return reply(`${this.$props.title} is required`);\n\t\t\tif (this.$props.min && _.isString(this.data) && this.data.length < this.$props.min) return reply(`${this.$props.title} must have at least ${this.$props.min} items`);\n\t\t\tif (this.$props.max && _.isString(this.data) && this.data.length > this.$props.max) return reply(`${this.$props.title} must have at most ${this.$props.max} items`);\n\t\t});\n\t},\n\tmethods: {\n\t\taddItem() {\n\t\t\tif (!_.isArray(this.data)) this.data = [];\n\t\t\tthis.data.push(this.newItem);\n\t\t\tthis.newItem = '';\n\t\t},\n\t\tchangeItem(index, value) {\n\t\t\tthis.$set(this.data, index, value);\n\t\t},\n\t\tremoveItem(index) {\n\t\t\tthis.data = this.data.filter((x, i) => i != index);\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<table class=\"table table-bordered mg-list\">\n\t\t<tbody>\n\t\t\t<tr v-for=\"(row, rowIndex) in data\" :key=\"rowIndex\">\n\t\t\t\t<td v-if=\"$props.numbered\" class=\"row-number-cell\">{{rowIndex + 1 | number}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<input :value=\"row\" @change=\"changeItem(rowIndex, $event.srcElement.value)\" type=\"text\" class=\"form-control\"/>\n\t\t\t\t</td>\n\t\t\t\t<td v-if=\"$props.allowDelete\" class=\"verb-cell\">\n\t\t\t\t\t<a @click=\"removeItem(rowIndex)\" class=\"btn btn-link btn-link-danger btn-xs text-muted\"><i class=\"fa fa-trash\"></i></a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot class=\"hidden-print\">\n\t\t\t<tr>\n\t\t\t\t<td v-if=\"$props.numbered\" class=\"row-number-cell\">\n\t\t\t\t\t<a v-if=\"!$props.allowDelete\" @click=\"addItem()\" :class=\"newItem ? $props.addButtonActiveClass : $props.addButtonInactiveClass\"/>\n\t\t\t\t\t<i v-if=\"$props.allowDelete\" class=\"far fa-asterisk\"></i>\n\t\t\t\t</td>\n\t\t\t\t<td :colspan=\"$props.allowDelete ? 1 : 2\">\n\t\t\t\t\t<input @keyup.enter=\"addItem()\" v-model=\"newItem\" type=\"text\" class=\"form-control\"/>\n\t\t\t\t</td>\n\t\t\t\t<td v-if=\"$props.allowDelete\" class=\"verb-cell\">\n\t\t\t\t\t<a @click=\"addItem()\" :class=\"newItem ? $props.addButtonActiveClass : $props.addButtonInactiveClass\"/>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</template>\n\n<style>\n/* Cell padding */\n.mg-list td {\n\tpadding: 0px !important;\n}\n\n.mg-list td input[type=\"text\"] {\n\tborder: none;\n}\n\n/* Row number cell */\n.mg-list td.row-number-cell {\n\ttext-align: center;\n\twidth: 30px;\n\tvertical-align: middle;\n}\n\n/* Verb cell */\n.mg-list .verb-cell {\n\twidth: 30px;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$t = undefined;
    /* module identifier */
    const __vue_module_identifier__$t = undefined;
    /* functional template */
    const __vue_is_functional_template__$t = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$t = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
      __vue_inject_styles__$t,
      __vue_script__$t,
      __vue_scope_id__$t,
      __vue_is_functional_template__$t,
      __vue_module_identifier__$t,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgList = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$t
  });

  var script$u = app.mgComponent('mgNumber', {
    meta: {
      title: 'Number',
      icon: 'far fa-sort-numeric-down',
      category: 'Simple Inputs',
      preferId: true,
      shorthand: ['integer', 'int', 'float', 'num'],
      format: function format(v) {
        if (!v) return '';
        return (_.isNumber(v) ? v : parseInt(v)).toLocaleString();
      },
      formatClass: 'text-right'
    },
    props: {
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
        if (_this.$props.min && _this.data < _this.$props.min) return reply("".concat(_this.$props.title, " is too small (minimum value is ").concat(_this.$props.min, ")"));
        if (_this.$props.max && _this.data > _this.$props.max) return reply("".concat(_this.$props.title, " is too large (maximum value is ").concat(_this.$props.max, ")"));
      });
    },
    methods: {
      add: function add(steps) {
        if (!_.isNumber(this.data)) return this.data = this.$props.min || 0; // Not already a number default to the min or zero

        this.data += steps * (this.$props.step || 1);
        if (this.$props.max && this.data > this.$props.max) this.data = this.$props.max;
        if (this.$props.min && this.data < this.$props.min) this.data = this.$props.min;
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
    return _c(
      "div",
      { staticClass: "mg-number", class: "mg-number-" + _vm.$props.interface },
      [
        _vm.$props.interface == "slider"
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
                  placeholder: _vm.$props.placeholder,
                  min: _vm.$props.min,
                  max: _vm.$props.max,
                  step: _vm.$props.step
                },
                domProps: { value: _vm.data },
                on: {
                  __r: function($event) {
                    _vm.data = $event.target.value;
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "mg-number-slider-value" }, [
                _vm._v(_vm._s(_vm._f("number")(_vm.data || "?")))
              ])
            ])
          : _vm.$props.interface == "bumpers"
          ? _c("div", { staticClass: "input-group" }, [
              _c("a", {
                staticClass: "hidden-print",
                class: _vm.$props.bumperDownClass,
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
                  placeholder: _vm.$props.placeholder,
                  min: _vm.$props.min,
                  max: _vm.$props.max,
                  step: _vm.$props.step
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
                class: _vm.$props.bumperUpClass,
                on: {
                  click: function($event) {
                    return _vm.add(1)
                  }
                }
              })
            ])
          : _vm.$props.interface == "input"
          ? _c("div", { staticClass: "input-group" }, [
              _vm.$props.prefix
                ? _c("div", { class: _vm.$props.prefixClass }, [
                    _vm._v(_vm._s(_vm.$props.prefix))
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
                  placeholder: _vm.$props.placeholder,
                  min: _vm.$props.min,
                  max: _vm.$props.max,
                  step: _vm.$props.step
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
              _vm.$props.suffix
                ? _c("div", { class: _vm.$props.suffixClass }, [
                    _vm._v(_vm._s(_vm.$props.suffix))
                  ])
                : _vm._e()
            ])
          : _c("div", { staticClass: "alert alert-warning" }, [
              _vm._v(
                "\n\t\tUnknown mgNumber interface '" +
                  _vm._s(_vm.$props.interface) +
                  "'\n\t"
              )
            ])
      ]
    )
  };
  var __vue_staticRenderFns__$r = [];
  __vue_render__$r._withStripped = true;

    /* style */
    const __vue_inject_styles__$u = function (inject) {
      if (!inject) return
      inject("data-v-5b66cfca_0", { source: "\n.mg-number input[type=number] {\n\tpadding: 0 10px;\n}\n.mg-number .btn {\n\tbox-shadow: none;\n\tborder: 1px solid #f0f0f0;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n/* Hide the spin button in mgNumber controls */\n.mg-number input[type=number]::-webkit-outer-spin-button,\n.mg-number input[type=number]::-webkit-inner-spin-button {\n\t/* display: none; <- Crashes Chrome on hover */\n\t-webkit-appearance: none;\n\tmargin: 0; /* <-- Apparently some margin is still there even though it's hidden */\n}\n\n\n\n/* Slider {{{ */\n.mg-number.mg-number-slider input[type=\"range\"] {\n\tdisplay: inline-block;\n\t-webkit-appearance: none;\n\twidth: calc(100% - (73px));\n\theight: 10px;\n\tborder-radius: 5px;\n\tbackground: var(--btn-default-bg);\n\toutline: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n.mg-number.mg-number-slider input[type=\"range\"]::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 50%;\n\tbackground: var(--primary);\n\tcursor: pointer;\n\t-webkit-transition: background .15s ease-in-out;\n\ttransition: background .15s ease-in-out;\n}\n.mg-number.mg-number-slider input[type=\"range\"]::-webkit-slider-thumb:hover,\n.mg-number.mg-number-slider input[type=\"range\"]:active::-webkit-slider-thumb,\n.mg-number.mg-number-slider input[type=\"range\"]::-moz-range-thumb:hover,\n.mg-number.mg-number-slider input[type=\"range\"]:active::-moz-range-thumb {\n\tbackground: var(--primary);\n}\n.mg-number.mg-number-slider input[type=\"range\"]::-moz-range-thumb {\n\twidth: 20px;\n\theight: 20px;\n\tborder: 0;\n\tborder-radius: 50%;\n\tcolor: var(--btn-default-fg);\n\tbackground: var(--btn-default-bg);\n\tcursor: pointer;\n\t-moz-transition: background .15s ease-in-out;\n\ttransition: background .15s ease-in-out;\n}\n.mg-number.mg-number-slider input[type=\"range\"]:focus::-webkit-slider-thumb {\n\tbox-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--primary);\n}\n.mg-number.mg-number-slider .mg-number-slider-value {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 60px;\n\tline-height: 20px;\n\ttext-align: center;\n\tborder-radius: 3px;\n\tcolor: var(--btn-default-fg);\n\tbackground: var(--btn-default-bg);\n\tpadding: 5px 10px;\n\tmargin-left: 8px;\n}\n.mg-number.mg-number-slider .mg-number-slider-value:after {\n\tposition: absolute;\n\ttop: 8px;\n\tleft: -7px;\n\twidth: 0;\n\theight: 0;\n\tborder-top: 7px solid transparent;\n\tborder-right: 7px solid var(--btn-default-bg);\n\tborder-bottom: 7px solid transparent;\n\tcontent: '';\n}\n::-moz-range-track {\n\tbackground: var(--btn-default-bg);\n\tborder: 0;\n}\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n\tborder: 0;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgNumber.vue"],"names":[],"mappings":";AA0EA;CACA,eAAA;AACA;AAEA;CACA,gBAAA;CACA,yBAAA;CACA,aAAA;CACA,mBAAA;AACA;;AAEA,8CAAA;AACA;;CAEA,8CAAA;CACA,wBAAA;CACA,SAAA,EAAA,sEAAA;AACA;;;;AAIA,eAAA;AACA;CACA,qBAAA;CACA,wBAAA;CACA,0BAAA;CACA,YAAA;CACA,kBAAA;CACA,iCAAA;CACA,aAAA;CACA,UAAA;CACA,SAAA;AACA;AAEA;CACA,wBAAA;CACA,gBAAA;CACA,WAAA;CACA,YAAA;CACA,kBAAA;CACA,0BAAA;CACA,eAAA;CACA,+CAAA;CACA,uCAAA;AACA;AAEA;;;;CAIA,0BAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,SAAA;CACA,kBAAA;CACA,4BAAA;CACA,iCAAA;CACA,eAAA;CACA,4CAAA;CACA,uCAAA;AACA;AAEA;CACA,oDAAA;AACA;AAEA;CACA,qBAAA;CACA,kBAAA;CACA,WAAA;CACA,iBAAA;CACA,kBAAA;CACA,kBAAA;CACA,4BAAA;CACA,iCAAA;CACA,iBAAA;CACA,gBAAA;AACA;AACA;CACA,kBAAA;CACA,QAAA;CACA,UAAA;CACA,QAAA;CACA,SAAA;CACA,iCAAA;CACA,6CAAA;CACA,oCAAA;CACA,WAAA;AACA;AAEA;CACA,iCAAA;CACA,SAAA;AACA;AAEA;;CAEA,SAAA;AACA;AACA,QAAA","file":"mgNumber.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgNumber', {\n\tmeta: {\n\t\ttitle: 'Number',\n\t\ticon: 'far fa-sort-numeric-down',\n\t\tcategory: 'Simple Inputs',\n\t\tpreferId: true,\n\t\tshorthand: ['integer', 'int', 'float', 'num'],\n\t\tformat: v => {\n\t\t\tif (!v) return '';\n\t\t\treturn (_.isNumber(v) ? v : parseInt(v)).toLocaleString();\n\t\t},\n\t\tformatClass: 'text-right',\n\t},\n\tprops: {\n\t\tmin: {type: 'mgNumber', title: 'Minimum value'},\n\t\tmax: {type: 'mgNumber', title: 'Maximum value'},\n\t\tstep: {type: 'mgNumber', title: 'Value to increment / decrement by'},\n\t\tplaceholder: {type: 'mgNumber', help: 'Ghost text to display when there is no value'},\n\t\trequired: {type: 'mgToggle', default: false},\n\t\tinterface: {type: 'mgChoiceDropdown', title: 'Interface', help: 'How to allow number input', default: 'bumpers', enum: [\n\t\t\t{id: 'bumpers', title: 'Number input with buttons'},\n\t\t\t{id: 'slider', title: 'Slider bar'},\n\t\t\t{id: 'input', title: 'Number input box only'},\n\t\t]},\n\t\tbumperDownClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-down input-group-prepend', advanced: true, showIf: 'interface == \"bumpers\"'},\n\t\tbumperUpClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-up input-group-append', advanced: true, showIf: 'interface == \"bumpers\"'},\n\t\tprefix: {type: 'mgText', title: 'Prefix', help: 'Prefix to show before the input', showIf: 'interface == \"input\"'},\n\t\tprefixClass: {type: 'mgText', default: 'input-group-prepend input-group-text', advanced: true, showIf: 'interface == \"input\"'},\n\t\tsuffix: {type: 'mgText', title: 'Suffix', help: 'Suffix to show after the input', showIf: 'interface == \"input\"'},\n\t\tsuffixClass: {type: 'mgText', default: 'input-group-append input-group-text', advanced: true, showIf: 'interface == \"input\"'},\n\t},\n\tcreated() {\n\t\tthis.$on('mgValidate', reply => {\n\t\t\tif (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);\n\t\t\tif (this.$props.min && this.data < this.$props.min) return reply(`${this.$props.title} is too small (minimum value is ${this.$props.min})`);\n\t\t\tif (this.$props.max && this.data > this.$props.max) return reply(`${this.$props.title} is too large (maximum value is ${this.$props.max})`);\n\t\t});\n\t},\n\tmethods: {\n\t\tadd(steps) {\n\t\t\tif (!_.isNumber(this.data)) return this.data = this.$props.min || 0; // Not already a number default to the min or zero\n\n\t\t\tthis.data += steps * (this.$props.step || 1);\n\t\t\tif (this.$props.max && this.data > this.$props.max) this.data = this.$props.max;\n\t\t\tif (this.$props.min && this.data < this.$props.min) this.data = this.$props.min;\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-number\" :class=\"`mg-number-${$props.interface}`\">\n\t\t<div v-if=\"$props.interface == 'slider'\">\n\t\t\t<input v-model=\"data\" type=\"range\" class=\"form-control\" :placeholder=\"$props.placeholder\" :min=\"$props.min\" :max=\"$props.max\" :step=\"$props.step\"/>\n\t\t\t<label class=\"mg-number-slider-value\">{{(data || '?') | number}}</label>\n\t\t</div>\n\t\t<div v-else-if=\"$props.interface == 'bumpers'\" class=\"input-group\">\n\t\t\t<a @click=\"add(-1)\" class=\"hidden-print\" :class=\"$props.bumperDownClass\"></a>\n\t\t\t<input v-model=\"data\" type=\"number\" class=\"form-control\" :placeholder=\"$props.placeholder\" :min=\"$props.min\" :max=\"$props.max\" :step=\"$props.step\"/>\n\t\t\t<a @click=\"add(1)\" class=\"hidden-print\" :class=\"$props.bumperUpClass\"></a>\n\t\t</div>\n\t\t<div v-else-if=\"$props.interface == 'input'\" class=\"input-group\">\n\t\t\t<div v-if=\"$props.prefix\" :class=\"$props.prefixClass\">{{$props.prefix}}</div>\n\t\t\t<input v-model=\"data\" type=\"number\" class=\"form-control\" :placeholder=\"$props.placeholder\" :min=\"$props.min\" :max=\"$props.max\" :step=\"$props.step\"/>\n\t\t\t<div v-if=\"$props.suffix\" :class=\"$props.suffixClass\">{{$props.suffix}}</div>\n\t\t</div>\n\t\t<div v-else class=\"alert alert-warning\">\n\t\t\tUnknown mgNumber interface '{{$props.interface}}'\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-number input[type=number] {\n\tpadding: 0 10px;\n}\n\n.mg-number .btn {\n\tbox-shadow: none;\n\tborder: 1px solid #f0f0f0;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n/* Hide the spin button in mgNumber controls */\n.mg-number input[type=number]::-webkit-outer-spin-button,\n.mg-number input[type=number]::-webkit-inner-spin-button {\n\t/* display: none; <- Crashes Chrome on hover */\n\t-webkit-appearance: none;\n\tmargin: 0; /* <-- Apparently some margin is still there even though it's hidden */\n}\n\n\n\n/* Slider {{{ */\n.mg-number.mg-number-slider input[type=\"range\"] {\n\tdisplay: inline-block;\n\t-webkit-appearance: none;\n\twidth: calc(100% - (73px));\n\theight: 10px;\n\tborder-radius: 5px;\n\tbackground: var(--btn-default-bg);\n\toutline: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.mg-number.mg-number-slider input[type=\"range\"]::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 50%;\n\tbackground: var(--primary);\n\tcursor: pointer;\n\t-webkit-transition: background .15s ease-in-out;\n\ttransition: background .15s ease-in-out;\n}\n\n.mg-number.mg-number-slider input[type=\"range\"]::-webkit-slider-thumb:hover,\n.mg-number.mg-number-slider input[type=\"range\"]:active::-webkit-slider-thumb,\n.mg-number.mg-number-slider input[type=\"range\"]::-moz-range-thumb:hover,\n.mg-number.mg-number-slider input[type=\"range\"]:active::-moz-range-thumb {\n\tbackground: var(--primary);\n}\n\n.mg-number.mg-number-slider input[type=\"range\"]::-moz-range-thumb {\n\twidth: 20px;\n\theight: 20px;\n\tborder: 0;\n\tborder-radius: 50%;\n\tcolor: var(--btn-default-fg);\n\tbackground: var(--btn-default-bg);\n\tcursor: pointer;\n\t-moz-transition: background .15s ease-in-out;\n\ttransition: background .15s ease-in-out;\n}\n\n.mg-number.mg-number-slider input[type=\"range\"]:focus::-webkit-slider-thumb {\n\tbox-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--primary);\n}\n\n.mg-number.mg-number-slider .mg-number-slider-value {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 60px;\n\tline-height: 20px;\n\ttext-align: center;\n\tborder-radius: 3px;\n\tcolor: var(--btn-default-fg);\n\tbackground: var(--btn-default-bg);\n\tpadding: 5px 10px;\n\tmargin-left: 8px;\n}\n.mg-number.mg-number-slider .mg-number-slider-value:after {\n\tposition: absolute;\n\ttop: 8px;\n\tleft: -7px;\n\twidth: 0;\n\theight: 0;\n\tborder-top: 7px solid transparent;\n\tborder-right: 7px solid var(--btn-default-bg);\n\tborder-bottom: 7px solid transparent;\n\tcontent: '';\n}\n\n::-moz-range-track {\n\tbackground: var(--btn-default-bg);\n\tborder: 0;\n}\n\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n\tborder: 0;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$u = undefined;
    /* module identifier */
    const __vue_module_identifier__$u = undefined;
    /* functional template */
    const __vue_is_functional_template__$u = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$u = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
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

  var mgNumber = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$u
  });

  var vueInputFacade_umd_min = createCommonjsModule(function (module, exports) {
  (function(t,e){module.exports=e();})("undefined"!==typeof self?self:commonjsGlobal,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),a=n("fc6a"),u=n("c04e"),c=n("5135"),f=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=a(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}if(c(t,e))return i(!o.f.call(t,e),t[e])};},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}));},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t};},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)};},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),a=n("6eeb"),u=n("ce4e"),c=n("e893"),f=n("94ca");t.exports=function(t,e){var n,s,l,d,p,m,v=t.target,h=t.global,b=t.stat;if(s=h?r:b?r[v]||u(v,{}):(r[v]||{}).prototype,s)for(l in e){if(p=e[l],t.noTargetGet?(m=o(s,l),d=m&&m.value):d=s[l],n=f(h?l:v+(b?".":"#")+l,t.forced),!n&&void 0!==d){if(typeof p===typeof d)continue;c(p,d);}(t.sham||d&&d.sham)&&i(p,"sham",!0),a(s,l,p,t);}};},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)};},"25f0":function(t,e,n){var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),u="toString",c=RegExp.prototype,f=c[u],s=i((function(){return "/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=u;(s||l)&&r(RegExp.prototype,u,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return "/"+e+"/"+r}),{unsafe:!0});},"428f":function(t,e,n){var r=n("da84");t.exports=r;},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return !Object("z").propertyIsEnumerable(0)}))?function(t){return "String"==o(t)?i.call(t,""):Object(t)}:Object;},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),a=function(t){return function(e,n,a){var u,c=r(e),f=o(c.length),s=i(a,f);if(t&&n!=n){while(f>s)if(u=c[s++],u!=u)return !0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return !t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)};},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0};},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)};},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),a=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e};},"5c6c":function(t,e){t.exports=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},"60da":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("df75"),a=n("7418"),u=n("d1e7"),c=n("7b0b"),f=n("44ad"),s=Object.assign,l=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1});}}),{b:2})).b)return !0;var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t;})),7!=s({},t)[n]||i(s({},e)).join("")!=o}))?function(t,e){var n=c(t),o=arguments.length,s=1,l=a.f,d=u.f;while(o>s){var p,m=f(arguments[s++]),v=l?i(m).concat(l(m)):i(m),h=v.length,b=0;while(h>b)p=v[b++],r&&!d.call(m,p)||(n[p]=m[p]);}return n}:s;},"69f3":function(t,e,n){var r,o,i,a=n("7f9a"),u=n("da84"),c=n("861d"),f=n("9112"),s=n("5135"),l=n("f772"),d=n("d012"),p=u.WeakMap,m=function(t){return i(t)?o(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(a){var h=new p,b=h.get,g=h.has,y=h.set;r=function(t,e){return y.call(h,t,e),e},o=function(t){return b.call(h,t)||{}},i=function(t){return g.call(h,t)};}else {var x=l("state");d[x]=!0,r=function(t,e){return f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)};}t.exports={set:r,get:o,has:i,enforce:m,getterFor:v};},"6eeb":function(t,e,n){var r=n("da84"),o=n("9112"),i=n("5135"),a=n("ce4e"),u=n("8925"),c=n("69f3"),f=c.get,s=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(c?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:a(e,n);})(Function.prototype,"toString",(function(){return "function"==typeof this&&f(this).source||u(this)}));},7418:function(t,e){e.f=Object.getOwnPropertySymbols;},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))};},"7f9a":function(t,e,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i));},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t};},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));},"861d":function(t,e){t.exports=function(t){return "object"===typeof t?null!==t:"function"===typeof t};},8925:function(t,e,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource;},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return "Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)};},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t};},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==f||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i;},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),a=n("c04e"),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return "value"in n&&(t[e]=n.value),t};},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)};},ad6d:function(t,e,n){var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")};},c430:function(t,e){t.exports=!1;},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a;},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")();}catch(r){"object"===typeof window&&(n=window);}t.exports=n;},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,a=n("d012");t.exports=function(t,e){var n,u=o(t),c=0,f=[];for(n in u)!r(a,n)&&r(u,n)&&f.push(n);while(e.length>c)r(u,n=e[c++])&&(~i(f,n)||f.push(n));return f};},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}};},cca6:function(t,e,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o});},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e);}catch(n){r[t]=e;}return e};},d012:function(t,e){t.exports={};},d039:function(t,e){t.exports=function(t){try{return !!t()}catch(e){return !0}};},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return "function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]};},d1e7:function(t,e,n){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return !!e&&e.enumerable}:r;},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")();}).call(this,n("c8ba"));},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)};},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),a=n("9bf2");t.exports=function(t,e){for(var n=o(e),u=a.f,c=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,c(e,s));}};},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))};},fb15:function(t,e,n){if(n.r(e),n.d(e,"InputFacade",(function(){return E})),n.d(e,"facade",(function(){return x})),n.d(e,"tokens",(function(){return i})),n.d(e,"masker",(function(){return g})),n.d(e,"filter",(function(){return P})),"undefined"!==typeof window){var r=window.document.currentScript,o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1]);}var i={"#":{pattern:/\d/},X:{pattern:/[0-9a-z]/i},S:{pattern:/[a-z]/i},A:{pattern:/[a-z]/i,transform:t=>t.toLocaleUpperCase()},a:{pattern:/[a-z]/i,transform:t=>t.toLocaleLowerCase()},"\\":{escape:!0}};n("cca6"),n("25f0");const a="__input-facade__";function u(t){this.masked=this.unmasked=t||"";}function c(){return new CustomEvent("input",{bubbles:!0,cancelable:!0,detail:{facade:!0}})}function f(t,e){return (Array.isArray(t)||"string"===typeof t)&&(t={mask:t}),Object.assign(t||{},e)}function s(t){const e=t instanceof HTMLInputElement?t:t.querySelector("input");if(!e)throw new Error("facade directive requires an input element");return e}function l(t){const{target:e,detail:n}=t;if(n&&n.facade)return !1;t.stopPropagation();const r=e.value,o=e.selectionEnd,{oldValue:i}=e[a];p(e,null,{emit:!1},t),d(t,r,o),i!==e.value&&e.dispatchEvent(c());}function d(t,e,n){const{target:r}=t,o=["text","tel","search",null].includes(r.getAttribute("type")),i=r[a]&&r[a].config;if(r!==document.activeElement||!o||!i.mask)return;const u=["insertText","insertFromPaste"].includes(t.inputType),c=u&&n==e.length;let f=u&&e[n-1];const s=r.value.toLocaleLowerCase();let l=n;if(c)l=s.length;else if(f){f=f.toLocaleLowerCase();let t=l;while(t<=s.length&&s.charAt(t-1)!==f)t++;l=t<=s.length?t:l-1;}r.setSelectionRange(l,l),setTimeout((function(){r.setSelectionRange(l,l);}),0);}function p(t,e,{emit:n=!0,force:r=!1}={},o){let{config:i,oldValue:u}=t[a],f=e&&e.data.model?e.data.model.value:t.value;if(u=u||"",f=f||"",r||u!==f){let e=g(f,i);if(o&&"function"===typeof i.formatter){const n=i.formatter(e,o);if("string"===typeof n)e=g(n,i);else if(!1===n)return void(t.value=u)}t[a].oldValue=e.masked,t.unmaskedValue=e.unmasked,t.value!==e.masked&&(t.value=e.masked),n&&t.dispatchEvent(c());}}let m=i;function v(t){t&&(m=t);}function h(t,e){const n=e.masks.slice().sort((t,e)=>t.length-e.length),r=t=>Object.assign({},e,t),o=(e,n)=>{const o=b(t,r({mask:n})),i=e.unmasked.length,a=o.unmasked.length;return a>i?o:e};if(!n.length)return new u;const i=n.shift();let a=b(t,r({mask:i}));while(n.length){const t=n.shift();a=o(a,t);}return a}function b(t,e){let{mask:n="",tokens:r,prefill:o=!1,short:i=!1}=e;r=r?Object.assign({},m,r):m;let a=new u,c=!1,f=0,s=0,l="";while(s<n.length){const e=n[s],o=r[e];let i=t[f];if(!i&&o)break;if(o&&!c){if(o.escape){c=!0,s++;continue}o.pattern.test(i)&&(i=o.transform?o.transform(i):i,a.unmasked+=i,a.masked+=l+i,l="",s++),f++;}else l+=e,i===e&&f++,c=!1,s++;}return (o&&!a.unmasked||!i&&a.unmasked)&&(a.masked+=l),a}function g(t,e){return t=(t||"").toString(),e=f(e),e.mask?Array.isArray(e.mask)?h(t,Object.assign({},e,{masks:e.mask})):b(t,e):new u(t)}const y=a;var x={bind:(t,{value:e,modifiers:n},r)=>{t=s(t),t.addEventListener("input",l,!0);const o=f(e,n);t[y]={config:o},p(t,r,{force:o.prefill});},update:(t,{value:e,oldValue:n,modifiers:r},o)=>{t=s(t),e!==n?(t[y].config=f(e,r),p(t,o,{force:!0})):p(t,o);},unbind:t=>t.removeEventListener("input",l,!0)},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"facade",rawName:"v-facade",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.maskedValue},on:{input:t.onInput,change:t.onChange,blur:function(e){return t.$emit("blur")},focus:function(e){return t.$emit("focus")}}})},w=[],j={name:"InputFacade",props:{formatter:Function,lazy:{type:Boolean,default:!1},mask:[String,Array],masked:{type:Boolean,default:!1},prefill:{type:Boolean,default:!1},short:{type:Boolean,default:!1},tokens:Object,value:[String,Number]},directives:{facade:x},data(){return {maskedValue:this.value,unmaskedValue:null}},watch:{value(t){t!==this.emittedValue&&(this.maskedValue=t);},mask(t){t||(this.maskedValue=this.unmaskedValue);},masked(){this.emitInput();}},computed:{config(){return {mask:this.mask,tokens:this.tokens,formatter:this.formatter,prefill:this.prefill,short:this.short}},emittedValue(){return this.mask&&this.masked?this.maskedValue:this.unmaskedValue}},methods:{onInput({target:t}){this.maskedValue=t.value,this.unmaskedValue=t.unmaskedValue,this.lazy||this.emitInput();},onChange(){this.$emit("change",this.emittedValue),this.lazy&&this.emitInput();},emitInput(){this.$emit("input",this.emittedValue);}}},O=j;function S(t,e,n,r,o,i,a,u){var c,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a);},f._ssrRegister=c):o&&(c=u?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot);}:o),c)if(f.functional){f._injectStyles=c;var s=f.render;f.render=function(t,e){return c.call(e),s(t,e)};}else {var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,c):[c];}return {exports:t,options:f}}var _=S(O,k,w,!1,null,null,null),E=_.exports;function V(t,e={}){e.tokens&&v(e.tokens),t.component(E.name,E),t.directive(e.name||"facade",x),t.filter(e.name||"facade",P);}function P(t,e){return g(t,e).masked}var T=V;"undefined"!==typeof window&&window.Vue&&window.Vue.use(V);e["default"]=T;},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))};}})}));
  });

  var InputFacade = unwrapExports(vueInputFacade_umd_min);

  Vue.use(InputFacade);
  var script$v = app.mgComponent('mgPassword', {
    meta: {
      title: 'Password',
      icon: 'far fa-edit',
      category: 'Simple Inputs',
      preferId: true,
      format: true,
      shorthand: ['string', 'str']
    },
    props: {
      lengthMin: {
        type: 'mgNumber',
        title: 'Minimum Length',
        min: 0
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
      mask: {
        type: 'mgText',
        help: 'Text input mask to restrict to, #=Number, S=Letter, X=Alpha-numeric, A=Alpha Uppercase, a=Alpha lowercase, \=Escape'
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
          id: 'off',
          title: 'Disabled'
        }, {
          id: 'on',
          title: 'Automatic'
        }, {
          id: 'new-password',
          title: 'New password'
        }, {
          id: 'current-password',
          title: 'Current password'
        }]
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
        if (_this.$props.lengthMin && _.isString(_this.data) && _this.data.length < _this.$props.lengthMin) return reply("".concat(_this.$props.title, " is too small (minimum length is ").concat(_this.$props.lengthMin, ")"));
        if (_this.$props.lengthMax && _.isString(_this.data) && _this.data.length > _this.$props.lengthMax) return reply("".concat(_this.$props.title, " is too long (maximum length is ").concat(_this.$props.lengthMax, ")"));
      });
    },
    mounted: function mounted() {
      if (this.$props.focus) {
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
  const __vue_script__$v = script$v;

  /* template */
  var __vue_render__$s = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-password" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.data,
            expression: "data"
          },
          {
            name: "facade",
            rawName: "v-facade",
            value: _vm.$props.mask,
            expression: "$props.mask"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "password",
          autocomplete: _vm.$props.autoComplete,
          placeholder: _vm.$props.placeholder
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
    ])
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
    
    /* style inject shadow dom */
    

    
    const __vue_component__$v = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
      __vue_inject_styles__$v,
      __vue_script__$v,
      __vue_scope_id__$v,
      __vue_is_functional_template__$v,
      __vue_module_identifier__$v,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgPassword = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$v
  });

  var script$w = app.mgComponent('mgPermissions', {
    meta: {
      title: 'Permissions',
      icon: 'far fa-key',
      category: 'System Administration',
      preferId: true
    },
    props: {
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
    created: function created() {
      var _this = this;

      this.$watch('data', function () {
        // TODO: Handle like SIFT is handled.
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
          return _this2.$http.get(_this2.$props.permissionsFeed)["catch"](_this2.$toast["catch"]);
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
  const __vue_script__$w = script$w;

  /* template */
  var __vue_render__$t = function() {
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
              _vm._v("\n\t\t" + _vm._s(_vm.$props.textEmpty) + "\n\t")
            ])
          : _vm._e()
      ],
      2
    )
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
    
    /* style inject shadow dom */
    

    
    const __vue_component__$w = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
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

  var mgPermissions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$w
  });

  var script$x = app.mgComponent('mgPlaceholder', {
    meta: {
      title: 'Placeholder',
      icon: 'far fa-construction',
      category: 'General Decoration'
    },
    props: {
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

  /* script */
  const __vue_script__$x = script$x;

  /* template */
  var __vue_render__$u = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mg-placeholder",
        class: _vm.$props.style,
        style: "height: " + (_vm.$props.height || "auto")
      },
      [
        _vm.$props.text
          ? _c("div", { staticClass: "mg-placeholder-text" }, [
              _vm._v("\n\t\t" + _vm._s(_vm.$props.text) + "\n\t")
            ])
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$u = [];
  __vue_render__$u._withStripped = true;

    /* style */
    const __vue_inject_styles__$x = function (inject) {
      if (!inject) return
      inject("data-v-9e3fbcda_0", { source: "\n.mg-placeholder {\n\tmin-height: 100px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n/* Style: placeholder-box {{{ */\n.mg-placeholder.mg-placeholder-box {\n\tborder: 1px solid #000;\n\tbackground:\n\t\tlinear-gradient(to top left,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%),\n\t\tlinear-gradient(to top right,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%);\n}\n.mg-placeholder.mg-placeholder-box > .mg-placeholder-text {\n\tbackground: #FFF;\n\tborder-radius: 10px;\n\tpadding: 10px 15px;\n}\n/* }}} */\n\n/* Style: placeholder-construction {{{ */\n.mg-placeholder.mg-placeholder-construction {\n\tbackground: repeating-linear-gradient(45deg, #dfc458, #dfc458 10px, #666 10px, #666 20px);\n}\n.mg-placeholder.mg-placeholder-construction > .mg-placeholder-text {\n\tfont-size: 20pt;\n\tcolor: #FFF;\n\ttext-shadow: -2px -2px 1px #000, 2px -2px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000;\n}\n/* }}} */\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgPlaceholder.vue"],"names":[],"mappings":";AAiCA;CACA,iBAAA;CACA,aAAA;CACA,uBAAA;CACA,mBAAA;CACA,kBAAA;AACA;;AAEA,+BAAA;AACA;CACA,sBAAA;CACA;;;;;;;;;;;;sBAYA;AACA;AAEA;CACA,gBAAA;CACA,mBAAA;CACA,kBAAA;AACA;AACA,QAAA;;AAEA,wCAAA;AACA;CACA,yFAAA;AACA;AAEA;CACA,eAAA;CACA,WAAA;CACA,uFAAA;AACA;AACA,QAAA","file":"mgPlaceholder.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgPlaceholder', {\n\tmeta: {\n\t\ttitle: 'Placeholder',\n\t\ticon: 'far fa-construction',\n\t\tcategory: 'General Decoration',\n\t},\n\tprops: {\n\t\ttext: {type: 'mgText'},\n\t\theight: {type: 'mgNumber', default: '100%'},\n\t\tstyle: {\n\t\t\ttype: 'mgChoiceButtons',\n\t\t\tdefault: 'mg-placeholder-box',\n\t\t\ticonSelected: 'far fa-fw fa-check',\n\t\t\ticonDefault: 'far fa-fw',\n\t\t\tenum: [\n\t\t\t\t{id: 'mg-placeholder-box', title: 'Lined box'},\n\t\t\t\t{id: 'mg-placeholder-construction', title: 'Construction area'},\n\t\t\t],\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-placeholder\" :class=\"$props.style\" :style=\"`height: ${$props.height || 'auto'}`\">\n\t\t<div v-if=\"$props.text\" class=\"mg-placeholder-text\">\n\t\t\t{{$props.text}}\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-placeholder {\n\tmin-height: 100px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n/* Style: placeholder-box {{{ */\n.mg-placeholder.mg-placeholder-box {\n\tborder: 1px solid #000;\n\tbackground:\n\t\tlinear-gradient(to top left,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%),\n\t\tlinear-gradient(to top right,\n\t\t\trgba(0,0,0,0) 0%,\n\t\t\trgba(0,0,0,0) calc(50% - 0.8px),\n\t\t\trgba(0,0,0,1) 50%,\n\t\t\trgba(0,0,0,0) calc(50% + 0.8px),\n\t\t\trgba(0,0,0,0) 100%);\n}\n\n.mg-placeholder.mg-placeholder-box > .mg-placeholder-text {\n\tbackground: #FFF;\n\tborder-radius: 10px;\n\tpadding: 10px 15px;\n}\n/* }}} */\n\n/* Style: placeholder-construction {{{ */\n.mg-placeholder.mg-placeholder-construction {\n\tbackground: repeating-linear-gradient(45deg, #dfc458, #dfc458 10px, #666 10px, #666 20px);\n}\n\n.mg-placeholder.mg-placeholder-construction > .mg-placeholder-text {\n\tfont-size: 20pt;\n\tcolor: #FFF;\n\ttext-shadow: -2px -2px 1px #000, 2px -2px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000;\n}\n/* }}} */\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$x = undefined;
    /* module identifier */
    const __vue_module_identifier__$x = undefined;
    /* functional template */
    const __vue_is_functional_template__$x = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$x = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
      __vue_inject_styles__$x,
      __vue_script__$x,
      __vue_scope_id__$x,
      __vue_is_functional_template__$x,
      __vue_module_identifier__$x,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgPlaceholder = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$x
  });

  var script$y = app.mgComponent('mgQuery', {
    meta: {
      title: 'Query',
      icon: 'far fa-filter',
      category: 'Data display'
    },
    data: function data() {
      return {
        //data: {'$or': [{name: 'foo'}]},
        queryComponent: {
          type: "mgContainer",
          layout: "query",
          items: []
        }
      };
    },
    props: {
      //config: Object,

      /**
      * The spec is composed of an object lookup with the dotted notation path as the key and an object set of properties
      * @property {string} [type='string'] The type of the field, used to determine the component to use as the value input
      * @property {boolean} [showOperand=true] Whether to allow the user to select the operand ("Equals", "Is in" etc.) if false this only allows straight equality
      * @property {array <string>|array <object>|string} [enum] If the type is a string this restricts operand values to a list of selectable values. The value can also be one of the following meta values: '$FIELDS' - list all spec fields
      */
      //spec: {type: 'mgCode', syntax: 'json'},
      spec: {
        // FIXME: Test case
        type: Object,
        "default": function _default() {
          return {
            //_id: {type: 'objectId'},
            name: {
              type: 'string'
            },

            /*
            username: {type: 'string'},
            email: {type: 'string'},
            'address.street': {type: 'string'},
            'address.city': {type: 'string'},
            'address.zip': {type: 'string'},
            'address.state': {type: 'string'},
            'address.country': {type: 'string'},
            phone: {type: 'string'},
            website: {type: 'string'},
            'company.name': {type: 'string'},
            role: {type: 'string', enum: ['user', 'admin', 'root']},
            status: {type: 'string', enum: ['pending', 'active', 'deleted']},
            lastLogin: {type: 'date'},
            */
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
      this.$debugging = true;
      this.$watchAll(['$props.url', '$props.spec'], this.refresh, {
        immediate: true
      }); // FIXME: deep?
    },
    methods: {
      refresh: function refresh() {
        var _this = this;

        //this.data = {'$or': [{name: 'foo'}]};
        this.data = {
          name: {
            '$eq': 'foo'
          }
        };
        this.$debug('refresh', _.cloneDeep(this.data), _.cloneDeep(this.$props.spec));
        if (!_.isPlainObject(this.data)) this.data = {}; //if (!_.isPlainObject(this.$props.spec)) return;
        // Calculate which fields we can use in enums

        var fieldsEnum = Object.keys(this.$props.spec).map(function (key) {
          return {
            id: key,
            title: _.startCase(key)
          };
        });
        this.$debug('fieldsEnum', fieldsEnum);
        /**
        * Populate enum values from a spec branch
        * Really this just deals with meta cases like '$FIELDS' (see spec definition for 'enum')
        * @param {Object} pathSpec The path branch specification
        * @returns {array} An mgChoice* compatible ENUM composed of {id, title}
        */

        var populateEnum = function populateEnum(pathSpec) {
          return pathSpec["enum"] === '$FIELDS' ? fieldsEnum : pathSpec["enum"];
        };

        this.queryComponent.items = Object.keys(this.data).map(function (path, pathIndex) {
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
                // FIXME: Incremental, unique
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
                      _this.data[path] = _objectSpread2(_objectSpread2({}, _.isPlainObject(_this.data[path]) ? _this.data : null), {}, _defineProperty({}, value, ''));
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
                  text: "Unsupported operand \"".concat(operand, "\"")
                });
              }

              return row;
            })
          );
        }).reduce(function (t, v) {
          return t.concat(v);
        }, []); // Flatten
      } //changeField(path, value) {
      //	console.log('Change', path, '=', value);
      //},

    }
  });

  /* script */
  const __vue_script__$y = script$y;

  /* template */
  var __vue_render__$v = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c("mg-form", {
          attrs: { form: _vm.$props.id + "-subform", config: _vm.queryComponent }
        }),
        _vm._v(" "),
        this.$debugging
          ? _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v("\n\t\t\tRaw data\n\t\t")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("pre", [_vm._v(_vm._s(_vm.data))])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$debugging
          ? _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v("\n\t\t\tRaw spec\n\t\t")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("pre", [_vm._v(_vm._s(_vm.queryComponent))])
              ])
            ])
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$v = [];
  __vue_render__$v._withStripped = true;

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
    

    
    const __vue_component__$y = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
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

  var mgQuery = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$y
  });

  var script$z = app.mgComponent('mgRestQuery', {
    meta: {
      title: 'ReST Query',
      icon: 'far fa-database',
      category: 'Data display'
    },
    props: {
      className: {
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
    computed: {
      codeDisplay: function codeDisplay() {
        if (!this.data) return '';
        return '<pre class="pre-sm">' + JSON.stringify(this.data, null, '\t').replace(/\n/g, '<br/>') + '</pre>';
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
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
              type: 'mgCode',
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
  const __vue_script__$z = script$z;

  /* template */
  var __vue_render__$w = function() {
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
          ? [_vm.data, _vm.$props.classActive || _vm.$props.className]
          : [_vm.$props.classInactive || _vm.$props.className],
        on: {
          click: function($event) {
            return _vm.editQuery()
          }
        }
      },
      [
        _c("i", {
          class: _vm.data ? _vm.$props.iconActive : _vm.$props.iconInactive
        }),
        _vm._v(
          "\n\t" +
            _vm._s(_vm.data ? _vm.$props.textActive : _vm.$props.textInactive) +
            "\n"
        )
      ]
    )
  };
  var __vue_staticRenderFns__$w = [];
  __vue_render__$w._withStripped = true;

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
    

    
    const __vue_component__$z = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
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

  var mgRestQuery = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$z
  });

  var script$A = app.mgComponent('mgSeperator', {
    meta: {
      title: 'Seperator',
      icon: 'far fa-minus',
      category: 'General Decoration'
    }
  });

  /* script */
  const __vue_script__$A = script$A;

  /* template */
  var __vue_render__$x = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("hr", { staticClass: "mg-seperator" })
  };
  var __vue_staticRenderFns__$x = [];
  __vue_render__$x._withStripped = true;

    /* style */
    const __vue_inject_styles__$A = function (inject) {
      if (!inject) return
      inject("data-v-22a62ed0_0", { source: "\n.mg-seperator {\n\tmargin-top: 0px;\n\tmargin-bottom: 10px;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgSeperator.vue"],"names":[],"mappings":";AAeA;CACA,eAAA;CACA,mBAAA;AACA","file":"mgSeperator.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgSeperator', {\n\tmeta: {\n\t\ttitle: 'Seperator',\n\t\ticon: 'far fa-minus',\n\t\tcategory: 'General Decoration',\n\t},\n});\n</script>\n\n<template>\n\t<hr class=\"mg-seperator\"/>\n</template>\n\n<style>\n.mg-seperator {\n\tmargin-top: 0px;\n\tmargin-bottom: 10px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$A = undefined;
    /* module identifier */
    const __vue_module_identifier__$A = undefined;
    /* functional template */
    const __vue_is_functional_template__$A = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$A = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
      __vue_inject_styles__$A,
      __vue_script__$A,
      __vue_scope_id__$A,
      __vue_is_functional_template__$A,
      __vue_module_identifier__$A,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgSeperator = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$A
  });

  var script$B = app.mgComponent('mgTable', {
    meta: {
      title: 'Table layout',
      icon: 'far fa-table',
      category: 'Layout'
    },
    data: function data() {
      return {
        newRow: {},
        // TODO: Is this really needed? Perhaps when `url` is specified?
        isAdding: false,
        data: []
      };
    },
    props: {
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
        type: 'mgAlert',
        vueType: 'array',
        text: 'Use the editor to define child widgets',
        "default": function _default() {
          return [// FIXME: Defaults are not initialised
          {
            id: 'col1',
            title: 'Col 1',
            type: 'mgText',
            "default": '1'
          }, {
            id: 'col2',
            title: 'Col 2',
            type: 'mgText',
            "default": '2'
          }];
        }
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
    childProps: {
      showTitle: {
        type: 'mgToggle',
        "default": false,
        title: 'Show Title'
      }
    },
    created: function created() {
      this.$debugging = true;
    },
    mounted: function mounted() {
      var _this = this;

      this.$watch('$props.url', function () {
        if (!_this.$props.url) return;

        _this.$macgyver.utils.fetch(_this.$props.url, {
          type: 'array'
        }).then(function (data) {
          return _this.$set(_this.$props, 'data', data);
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
    // To ensure reactivity to array of objects https://stackoverflow.com/a/56793403/2438830
    computed: {
      outerKey: function outerKey() {
        return this.data && this.data.length;
      }
    },
    methods: {
      createRow: function createRow(offset) {
        // Offset is the row to create after - i.e. array position splice
        this.$debug('createRow', offset, this.$data.newRow);
        this.isAdding = true;

        if (typeof offset === 'undefined') {
          this.data.push(this.$data.newRow);
        } else {
          this.data.splice(offset, 0, this.$data.newRow);
        }

        this.$data.newRow = {};
        this.isAdding = false;
      },
      deleteRow: function deleteRow(offset) {
        this.$debug('deleteRow', offset);
        this.data.splice(offset, 1);
      }
    }
  });

  /* script */
  const __vue_script__$B = script$B;

  /* template */
  var __vue_render__$y = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-table" }, [
      _c(
        "table",
        { staticClass: "table table-bordered table-striped table-hover" },
        [
          _c("thead", [
            _c(
              "tr",
              [
                _vm.$props.rowNumbers
                  ? _c("th", { staticClass: "row-number" }, [_vm._v("#")])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.$props.items, function(col) {
                  return _c(
                    "th",
                    {
                      key: col.id,
                      style:
                        (col.width ? "width: " + col.width + "; " : "") +
                        col.class
                    },
                    [_vm._v("\n\t\t\t\t\t" + _vm._s(col.title) + "\n\t\t\t\t")]
                  )
                }),
                _vm._v(" "),
                _vm.$props.allowAdd || _vm.$props.allowDelete
                  ? _c("th", { staticClass: "btn-context" }, [_vm._v(" ")])
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            { key: _vm.outerKey },
            [
              !_vm.data || !_vm.data.length
                ? _c("tr", [
                    _c(
                      "td",
                      {
                        attrs: {
                          colspan:
                            _vm.$props.items.length +
                            (_vm.$props.rowNumbers ? 1 : 0) +
                            (_vm.$props.allowAdd || _vm.$props.allowDelete
                              ? 1
                              : 0) +
                            1
                        }
                      },
                      [
                        _c("div", { staticClass: "alert alert-warning m-10" }, [
                          _vm._v(_vm._s(_vm.$props.textEmpty || "No data"))
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.data, function(row, rowNumber) {
                return _c(
                  "tr",
                  { key: rowNumber },
                  [
                    _vm.$props.rowNumbers
                      ? _c("td", { staticClass: "row-number" }, [
                          _vm._v(
                            "\n\t\t\t\t\t" +
                              _vm._s(_vm._f("number")(rowNumber + 1)) +
                              "\n\t\t\t\t"
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.$props.items, function(col) {
                      return _c(
                        "td",
                        { key: col.id, class: col.class },
                        [
                          _c("mg-form", {
                            attrs: { config: col, data: row },
                            on: {
                              changeItem: function($event) {
                                return _vm.$setPath(
                                  row,
                                  $event.path,
                                  $event.value
                                )
                              }
                            }
                          })
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _vm.$props.allowAdd || _vm.$props.allowDelete
                      ? _c("td", { staticClass: "btn-context" }, [
                          _c("div", { staticClass: "btn-group" }, [
                            _vm._m(0, true),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "dropdown-menu pull-right" },
                              [
                                _vm.$props.allowAdd
                                  ? _c("li", [
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
                                            staticClass: "far fa-arrow-circle-up"
                                          }),
                                          _vm._v(" Add row above")
                                        ]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$props.allowAdd
                                  ? _c("li", [
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
                                            staticClass:
                                              "far fa-arrow-circle-down"
                                          }),
                                          _vm._v(" Add row below")
                                        ]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$props.allowDelete
                                  ? _c("li", { staticClass: "dropdown-divider" })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$props.allowDelete
                                  ? _c(
                                      "li",
                                      { staticClass: "dropdown-item-danger" },
                                      [
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
                                            _c("i", {
                                              staticClass: "far fa-trash"
                                            }),
                                            _vm._v(" Delete")
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
                        ])
                      : _vm._e()
                  ],
                  2
                )
              }),
              _vm._v(" "),
              _vm.$props.allowAdd
                ? _c(
                    "tr",
                    { staticClass: "mgTable-append" },
                    [
                      _vm.$props.rowNumbers
                        ? _c("td", { staticClass: "row-number" }, [
                            _c("i", { staticClass: "far fa-asterisk" })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.$props.items, function(col, colNumber) {
                        return _c(
                          "td",
                          { key: col.id },
                          [
                            _c("mg-form", {
                              attrs: { config: col, data: _vm.newRow },
                              on: {
                                changeItem: function($event) {
                                  return _vm.$setPath(
                                    _vm.newRow,
                                    $event.path,
                                    $event.value
                                  )
                                }
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
                            ? _vm.$props.addButtonActiveClass
                            : _vm.$props.addButtonInactiveClass,
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
      ),
      _vm._v(" "),
      _vm.$debugging
        ? _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n\t\t\tRaw data\n\t\t\t"),
              _c("i", {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Only visible to users with the Debug permission",
                    expression:
                      "'Only visible to users with the Debug permission'"
                  }
                ],
                staticClass: "float-right fas fa-debug fa-lg"
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("pre", [_vm._v(_vm._s(_vm.$data))])
            ])
          ])
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$y = [
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
  __vue_render__$y._withStripped = true;

    /* style */
    const __vue_inject_styles__$B = function (inject) {
      if (!inject) return
      inject("data-v-6a94d2e4_0", { source: "\n.mg-table .row-number {\n\tfont-size: 16px;\n\ttext-align: middle;\n}\n.mg-table td.row-number {\n\tmargin-top: 14px;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgTable.vue"],"names":[],"mappings":";AA0LA;CACA,eAAA;CACA,kBAAA;AACA;AAEA;CACA,gBAAA;AACA","file":"mgTable.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgTable', {\n\tmeta: {\n\t\ttitle: 'Table layout',\n\t\ticon: 'far fa-table',\n\t\tcategory: 'Layout',\n\t},\n\tdata() { return {\n\t\tnewRow: {},\n\t\t// TODO: Is this really needed? Perhaps when `url` is specified?\n\t\tisAdding: false,\n\t\tdata: [],\n\t}},\n\tprops: {\n\t\turl: {type: 'mgUrl', relative: true, help: 'Data feed to populate the table'},\n\t\tallowAdd: {type: 'mgToggle', title: 'Allow Row Addition', default: true},\n\t\tallowDelete: {type: 'mgToggle', title: 'Allow Row Deletion', default: true},\n\t\ttextEmpty: {type: 'mgText', title: 'No data message', default: 'No data'},\n\t\titems: {\n\t\t\ttype: 'mgAlert',\n\t\t\tvueType: 'array',\n\t\t\ttext: 'Use the editor to define child widgets',\n\t\t\tdefault: () => [\n\t\t\t\t// FIXME: Defaults are not initialised\n\t\t\t\t{id: 'col1', title: 'Col 1', type: 'mgText', default: '1'},\n\t\t\t\t{id: 'col2', title: 'Col 2', type: 'mgText', default: '2'},\n\t\t\t],\n\t\t},\n\t\taddButtonActiveClass: {type: 'mgText', default: 'btn btn-block btn-success fa fa-plus', advanced: true},\n\t\taddButtonInactiveClass: {type: 'mgText', default: 'btn btn-block btn-disabled fa fa-plus', advanced: true},\n\t\trowNumbers: {type: 'mgToggle', help: 'Show the row number at the beginning of each row', default: true},\n\t},\n\tchildProps: {\n\t\tshowTitle: {type: 'mgToggle', default: false, title: 'Show Title'},\n\t},\n\tcreated() {\n\t\tthis.$debugging = true;\n\t},\n\tmounted() {\n\t\tthis.$watch('$props.url', ()=> {\n\t\t\tif (!this.$props.url) return;\n\t\t\tthis.$macgyver.utils.fetch(this.$props.url, {type: 'array'})\n\t\t\t\t.then(data => this.$set(this.$props, 'data', data))\n\t\t}, {immediate: true});\n\t},\n\twatch: {\n\t\tdata: {\n\t\t\timmediate: true,\n\t\t\thandler() {\n\t\t\t\t// Ensure that data is always an array\n\t\t\t\tif (!_.isArray(this.data)) this.data = [];\n\t\t\t},\n\t\t},\n\t},\n\t// To ensure reactivity to array of objects https://stackoverflow.com/a/56793403/2438830\n\tcomputed: {\n\t\touterKey() {\n\t\t\treturn this.data && this.data.length;\n\t\t}\n\t},\n\tmethods: {\n\t\tcreateRow(offset) { // Offset is the row to create after - i.e. array position splice\n\t\t\tthis.$debug('createRow', offset, this.$data.newRow);\n\t\t\tthis.isAdding = true;\n\t\t\tif (typeof offset === 'undefined') {\n\t\t\t\tthis.data.push(this.$data.newRow);\n\t\t\t} else {\n\t\t\t\tthis.data.splice(offset, 0, this.$data.newRow);\n\t\t\t}\n\t\t\tthis.$data.newRow = {};\n\t\t\tthis.isAdding = false;\n\t\t},\n\t\tdeleteRow(offset) {\n\t\t\tthis.$debug('deleteRow', offset);\n\t\t\tthis.data.splice(offset, 1);\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-table\">\n\t\t<table class=\"table table-bordered table-striped table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th v-if=\"$props.rowNumbers\" class=\"row-number\">&#35;</th>\n\t\t\t\t\t<th v-for=\"col in $props.items\" :key=\"col.id\" :style=\"(col.width ? 'width: ' + col.width + '; ' : '') + col.class\">\n\t\t\t\t\t\t{{col.title}}\n\t\t\t\t\t</th>\n\t\t\t\t\t<th v-if=\"$props.allowAdd || $props.allowDelete\" class=\"btn-context\">&nbsp;</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody :key=\"outerKey\">\n\t\t\t\t<tr v-if=\"!data || !data.length\">\n\t\t\t\t\t<td :colspan=\"$props.items.length + ($props.rowNumbers ? 1 : 0) + (($props.allowAdd || $props.allowDelete) ? 1 : 0) + 1\">\n\t\t\t\t\t\t<div class=\"alert alert-warning m-10\">{{$props.textEmpty || 'No data'}}</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr v-for=\"(row, rowNumber) in data\" :key=\"rowNumber\">\n\t\t\t\t\t<td v-if=\"$props.rowNumbers\" class=\"row-number\">\n\t\t\t\t\t\t{{rowNumber + 1 | number}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td v-for=\"col in $props.items\" :key=\"col.id\" :class=\"col.class\">\n\t\t\t\t\t\t<!-- Works -->\n\t\t\t\t\t\t<!--mg-text\n\t\t\t\t\t\t\t:value=\"row[col.$dataPath]\"\n\t\t\t\t\t\t\t@change=\"$setPath(row, col.$dataPath, $event)\"\n\t\t\t\t\t\t/-->\n\n\t\t\t\t\t\t<!-- Works -->\n\t\t\t\t\t\t<mg-form\n\t\t\t\t\t\t\t:config=\"col\"\n\t\t\t\t\t\t\t:data=\"row\"\n\t\t\t\t\t\t\t@changeItem=\"$setPath(row, $event.path, $event.value)\"\n\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t<!-- // FIXME: Should pass through value and change events properties? -->\n\t\t\t\t\t\t<!--mg-component\n\t\t\t\t\t\t\t:config=\"{\n\t\t\t\t\t\t\t\tid: col.id,\n\t\t\t\t\t\t\t\ttype: col.type,\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\t:value=\"row[col.$dataPath]\"\n\t\t\t\t\t\t\t@change=\"$setPath(row, col.$dataPath, $event)\"\n\t\t\t\t\t\t/-->\n\t\t\t\t\t</td>\n\t\t\t\t\t<td v-if=\"$props.allowAdd || $props.allowDelete\" class=\"btn-context\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<a class=\"btn btn-context\" data-toggle=\"dropdown\"><i class=\"far fa-ellipsis-v\"></i></a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t\t\t<li v-if=\"$props.allowAdd\"><a @click=\"createRow(rowNumber)\"><i class=\"far fa-arrow-circle-up\"></i> Add row above</a></li>\n\t\t\t\t\t\t\t\t<li v-if=\"$props.allowAdd\"><a @click=\"createRow(rowNumber)\"><i class=\"far fa-arrow-circle-down\"></i> Add row below</a></li>\n\t\t\t\t\t\t\t\t<li v-if=\"$props.allowDelete\" class=\"dropdown-divider\"></li>\n\t\t\t\t\t\t\t\t<li v-if=\"$props.allowDelete\" class=\"dropdown-item-danger\"><a @click=\"deleteRow(rowNumber)\"><i class=\"far fa-trash\"></i> Delete</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr class=\"mgTable-append\" v-if=\"$props.allowAdd\">\n\t\t\t\t\t<td v-if=\"$props.rowNumbers\" class=\"row-number\">\n\t\t\t\t\t\t<i class=\"far fa-asterisk\"></i>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td v-for=\"(col, colNumber) in $props.items\" :key=\"col.id\">\n\t\t\t\t\t\t<!-- Works -->\n\t\t\t\t\t\t<!--mg-text\n\t\t\t\t\t\t\t:value=\"newRow[col.$dataPath]\"\n\t\t\t\t\t\t\t@change=\"$setPath(newRow, col.$dataPath, $event)\"\n\t\t\t\t\t\t/-->\n\n\t\t\t\t\t\t<!-- Works -->\n\t\t\t\t\t\t<mg-form\n\t\t\t\t\t\t\t:config=\"col\"\n\t\t\t\t\t\t\t:data=\"newRow\"\n\t\t\t\t\t\t\t@changeItem=\"$setPath(newRow, $event.path, $event.value)\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a @click=\"createRow()\" :class=\"isAdding ? $props.addButtonActiveClass : $props.addButtonInactiveClass\"></a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\n\t\t<div v-if=\"$debugging\" class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\tRaw data\n\t\t\t\t<i class=\"float-right fas fa-debug fa-lg\" v-tooltip=\"'Only visible to users with the Debug permission'\"/>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<pre>{{$data}}</pre>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!--div v-if=\"$debugging\" class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\tRaw properties\n\t\t\t\t<i class=\"float-right fas fa-debug fa-lg\" v-tooltip=\"'Only visible to users with the Debug permission'\"/>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<pre>{{$props}}</pre>\n\t\t\t</div>\n\t\t</div-->\n\t</div>\n</template>\n\n<style>\n.mg-table .row-number {\n\tfont-size: 16px;\n\ttext-align: middle;\n}\n\n.mg-table td.row-number {\n\tmargin-top: 14px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$B = undefined;
    /* module identifier */
    const __vue_module_identifier__$B = undefined;
    /* functional template */
    const __vue_is_functional_template__$B = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$B = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
      __vue_inject_styles__$B,
      __vue_script__$B,
      __vue_scope_id__$B,
      __vue_is_functional_template__$B,
      __vue_module_identifier__$B,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgTable = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$B
  });

  var script$C = app.mgComponent('mgTextArea', {
    meta: {
      title: 'Multi-line text',
      icon: 'fa fa-align-justify',
      category: 'Simple Inputs',
      preferId: true
    },
    props: {
      rows: {
        type: 'mgNumber',
        title: 'Line height',
        "default": 3
      },
      lengthMin: {
        type: 'mgNumber',
        title: 'Minimum Length',
        min: 0
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
        if (_this.$props.lengthMin && _.isString(_this.data) && _this.data.length < _this.$props.lengthMin) return reply("".concat(_this.$props.title, " is too small (minimum length is ").concat(_this.$props.lengthMin, ")"));
        if (_this.$props.lengthMax && _.isString(_this.data) && _this.data.length > _this.$props.lengthMax) return reply("".concat(_this.$props.title, " is too long (maximum length is ").concat(_this.$props.lengthMax, ")"));
      });
    }
  });

  /* script */
  const __vue_script__$C = script$C;

  /* template */
  var __vue_render__$z = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("textarea", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: {
        placeholder: _vm.$props.placeholder,
        minlength: _vm.$props.lengthMin,
        maxlength: _vm.$props.lengthMin,
        rows: _vm.$props.rows,
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
  var __vue_staticRenderFns__$z = [];
  __vue_render__$z._withStripped = true;

    /* style */
    const __vue_inject_styles__$C = undefined;
    /* scoped */
    const __vue_scope_id__$C = undefined;
    /* module identifier */
    const __vue_module_identifier__$C = undefined;
    /* functional template */
    const __vue_is_functional_template__$C = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$C = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
      __vue_inject_styles__$C,
      __vue_script__$C,
      __vue_scope_id__$C,
      __vue_is_functional_template__$C,
      __vue_module_identifier__$C,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgTextArea = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$C
  });

  app.use(InputFacade);
  var script$D = app.mgComponent('mgText', {
    meta: {
      title: 'Text',
      icon: 'far fa-edit',
      category: 'Simple Inputs',
      preferId: true,
      format: true,
      shorthand: ['string', 'str']
    },
    props: {
      lengthMin: {
        type: 'mgNumber',
        title: 'Minimum Length',
        min: 0
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
      disabled: {
        type: 'mgToggle',
        "default": false
      },
      readonly: {
        type: 'mgToggle',
        "default": false
      },
      mask: {
        type: 'mgText',
        help: 'Text input mask to restrict to, #=Number, S=Letter, X=Alpha-numeric, A=Alpha Uppercase, a=Alpha lowercase, \=Escape'
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
          id: 'off',
          title: 'Disabled'
        }, {
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
          id: 'address-level1',
          title: 'Address level 1'
        }, {
          id: 'address-level2',
          title: 'Address level 2'
        }, {
          id: 'address-level3',
          title: 'Address level 3'
        }, {
          id: 'address-level4',
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
      },
      "enum": {
        type: 'mgTable',
        title: 'Suggested items',
        items: [{
          id: 'title',
          type: 'mgText',
          required: true
        }]
      }
    },
    computed: {
      datalist: function datalist() {
        // Map $props.enum into a collection of the form {id, title}
        if (!this.$props["enum"] || !this.$props["enum"].length) return;
        return this.$props["enum"].map(function (i) {
          if (_.isString(i)) return {
            id: i,
            title: i
          };
          return i;
        });
      }
    },
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
        if (_this.$props.lengthMin && _.isString(_this.data) && _this.data.length < _this.$props.lengthMin) return reply("".concat(_this.$props.title, " is too small (minimum length is ").concat(_this.$props.lengthMin, ")"));
        if (_this.$props.lengthMax && _.isString(_this.data) && _this.data.length > _this.$props.lengthMax) return reply("".concat(_this.$props.title, " is too long (maximum length is ").concat(_this.$props.lengthMax, ")"));
      });
    },
    mounted: function mounted() {
      if (this.$props.focus) {
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
  const __vue_script__$D = script$D;

  /* template */
  var __vue_render__$A = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-text" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.data,
            expression: "data"
          },
          {
            name: "facade",
            rawName: "v-facade",
            value: _vm.$props.mask,
            expression: "$props.mask"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          autocomplete: _vm.$props.autoComplete,
          disabled: _vm.$props.disabled,
          placeholder: _vm.$props.placeholder,
          readonly: _vm.$props.readonly,
          list: _vm.datalist ? "mg-text-datalist-" + _vm._uid : undefined
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
      _vm.datalist
        ? _c(
            "datalist",
            { attrs: { id: "mg-text-datalist-" + _vm._uid } },
            _vm._l(_vm.datalist, function(item) {
              return _c(
                "option",
                { key: item.id, domProps: { value: item.title } },
                [_vm._v("\n\t\t\t" + _vm._s(item.title) + "\n\t\t")]
              )
            }),
            0
          )
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$A = [];
  __vue_render__$A._withStripped = true;

    /* style */
    const __vue_inject_styles__$D = undefined;
    /* scoped */
    const __vue_scope_id__$D = undefined;
    /* module identifier */
    const __vue_module_identifier__$D = undefined;
    /* functional template */
    const __vue_is_functional_template__$D = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$D = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
      __vue_inject_styles__$D,
      __vue_script__$D,
      __vue_scope_id__$D,
      __vue_is_functional_template__$D,
      __vue_module_identifier__$D,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgText = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$D
  });

  var script$E = app.mgComponent('mgTime', {
    meta: {
      title: 'Time selection',
      icon: 'far fa-calendar',
      category: 'Simple Inputs',
      preferId: true,
      format: function format(v) {
        if (!v) return '';
        return v; //return moment.duration(v).humanize();
      },
      formatClass: 'text-center'
    },
    data: function data() {
      return {
        formData: undefined
      };
    },
    props: {
      min: {
        type: 'mgTime',
        title: 'Earliest time'
      },
      max: {
        type: 'mgTime',
        title: 'Latest time'
      },
      required: {
        type: 'mgToggle',
        "default": false
      }
    },
    created: function created() {
      var _this = this;

      this.$debugging = false;
      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));

        if (_.isString(_this.data)) {
          var d = moment.duration(_this.data);
          if (!moment.isDuration(d)) return reply("".concat(_this.$props.title, " must be a time"));
          if (_this.$props.min && d.asMilliseconds() < moment.duration(_this.$props.min).asMilliseconds()) return reply("".concat($props.title, " is too early (earliest time is ").concat(_this.$props.min, ")"));
          if (_this.$props.max && d.asMilliseconds() > moment.duration(_this.$props.max).asMilliseconds()) return reply("".concat($props.title, " is too late (latest time is ").concat(_this.$props.max, ")"));
        }
      });
      this.$watch('data', function () {
        _this.formData = data;
      }, {
        immediate: true
      });
      this.$watch('formData', function () {
        _this.data = moment.duration(_this.formData).toISOString();
      });
    }
  });

  /* script */
  const __vue_script__$E = script$E;

  /* template */
  var __vue_render__$B = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mg-time" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formData,
            expression: "formData"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "time", max: _vm.$props.max, min: _vm.$props.min },
        domProps: { value: _vm.formData },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.formData = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      this.$debugging
        ? _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n\t\t\tRaw data\n\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("pre", [_vm._v(_vm._s(_vm.$data))])
            ])
          ])
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$B = [];
  __vue_render__$B._withStripped = true;

    /* style */
    const __vue_inject_styles__$E = undefined;
    /* scoped */
    const __vue_scope_id__$E = undefined;
    /* module identifier */
    const __vue_module_identifier__$E = undefined;
    /* functional template */
    const __vue_is_functional_template__$E = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$E = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
      __vue_inject_styles__$E,
      __vue_script__$E,
      __vue_scope_id__$E,
      __vue_is_functional_template__$E,
      __vue_module_identifier__$E,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgTime = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$E
  });

  var script$F = app.mgComponent('mgUrl', {
    meta: {
      title: 'URL',
      icon: 'far fa-globe',
      category: 'Simple Inputs',
      preferId: true,
      format: function format(v) {
        if (!v) return '';
        return "<a href=\"".concat(v, "\" target=\"_blank\">").concat(v, "</a>");
      },
      shorthand: ['uri']
    },
    props: {
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
    created: function created() {
      var _this = this;

      this.$on('mgValidate', function (reply) {
        if (_this.$props.required && !_this.data) return reply("".concat(_this.$props.title, " is required"));
      });
    }
  });

  /* script */
  const __vue_script__$F = script$F;

  /* template */
  var __vue_render__$C = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("input", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.data, expression: "data" }
      ],
      staticClass: "form-control",
      attrs: { type: "url", placeholder: _vm.$props.placeholder },
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
  var __vue_staticRenderFns__$C = [];
  __vue_render__$C._withStripped = true;

    /* style */
    const __vue_inject_styles__$F = undefined;
    /* scoped */
    const __vue_scope_id__$F = undefined;
    /* module identifier */
    const __vue_module_identifier__$F = undefined;
    /* functional template */
    const __vue_is_functional_template__$F = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$F = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
      __vue_inject_styles__$F,
      __vue_script__$F,
      __vue_scope_id__$F,
      __vue_is_functional_template__$F,
      __vue_module_identifier__$F,
      false,
      undefined,
      undefined,
      undefined
    );

  var mgUrl = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$F
  });

  var script$G = app.mgComponent('mgVideo', {
    meta: {
      title: 'Video',
      icon: 'far fa-film',
      category: 'Media',
      preferId: true
    },
    props: {
      url: {
        type: 'mgUrl'
      },
      width: {
        type: 'mgText',
        "default": '100%'
      },
      height: {
        type: 'mgText',
        "default": '315px'
      },
      autoPlay: {
        type: 'mgToggle',
        "default": false
      },
      showControls: {
        type: 'mgToggle',
        "default": true
      },
      loop: {
        type: 'mgToggle',
        "default": false
      }
    },
    computed: {
      videoResource: function videoResource() {
        if (!this.$props.url) {
          return {
            type: 'none'
          };
        } else if (/^https?:\/\/(www\.)?youtube\.com/.test(this.$props.url)) {
          return {
            type: 'youTube',
            url: this.$props.url + "?autoplay=".concat(this.$props.autoPlay ? '1' : '0') + "&controls=".concat(this.$props.showControls ? '1' : '0') + "&loop=".concat(this.$props.loop ? '1' : '0')
          };
        } else {
          return {
            type: 'unknown'
          };
        }
      }
    }
  });

  /* script */
  const __vue_script__$G = script$G;

  /* template */
  var __vue_render__$D = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mg-video",
        style: { width: _vm.$props.width, height: _vm.$props.height }
      },
      [
        !_vm.videoResource || _vm.videoResource.type == "none"
          ? _c("div", { staticClass: "alert alert-warning" }, [
              _vm._v("\n\t\tNo video URL provided\n\t")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.videoResource.type == "youTube"
          ? _c("iframe", {
              attrs: {
                width: "100%",
                height: "100%",
                src: _vm.videoResource.url,
                frameborder: "0",
                allow:
                  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: ""
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.videoResource.type !== "none" && _vm.videoResource.type !== "youTube"
          ? _c("div", { staticClass: "alert alert-warning" }, [
              _vm._v("\n\t\tUnsupported video URL\n\t")
            ])
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$D = [];
  __vue_render__$D._withStripped = true;

    /* style */
    const __vue_inject_styles__$G = function (inject) {
      if (!inject) return
      inject("data-v-deb62f38_0", { source: "\n.mg-video .alert {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n", map: {"version":3,"sources":["/home/user/src/mfdc/MacGyver2/src/components/mgVideo.vue"],"names":[],"mappings":";AA+DA;CACA,aAAA;CACA,YAAA;CACA,WAAA;CACA,uBAAA;CACA,mBAAA;AACA","file":"mgVideo.vue","sourcesContent":["<script>\nexport default app.mgComponent('mgVideo', {\n\tmeta: {\n\t\ttitle: 'Video',\n\t\ticon: 'far fa-film',\n\t\tcategory: 'Media',\n\t\tpreferId: true,\n\t},\n\tprops: {\n\t\turl: {type: 'mgUrl'},\n\t\twidth: {type: 'mgText', default: '100%'},\n\t\theight: {type: 'mgText', default: '315px'},\n\t\tautoPlay: {type: 'mgToggle', default: false},\n\t\tshowControls: {type: 'mgToggle', default: true},\n\t\tloop: {type: 'mgToggle', default: false},\n\t},\n\tcomputed: {\n\t\tvideoResource() {\n\t\t\tif (!this.$props.url) {\n\t\t\t\treturn {type: 'none'};\n\t\t\t} else if (/^https?:\\/\\/(www\\.)?youtube\\.com/.test(this.$props.url)) {\n\t\t\t\treturn {\n\t\t\t\t\ttype: 'youTube',\n\t\t\t\t\turl: this.$props.url\n\t\t\t\t\t\t+ `?autoplay=${this.$props.autoPlay ? '1' : '0'}`\n\t\t\t\t\t\t+ `&controls=${this.$props.showControls ? '1' : '0'}`\n\t\t\t\t\t\t+ `&loop=${this.$props.loop ? '1' : '0'}`\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\treturn {type: 'unknown'};\n\t\t\t}\n\t\t},\n\t},\n});\n</script>\n\n<template>\n\t<div class=\"mg-video\" :style=\"{width: $props.width, height: $props.height}\">\n\t\t<div\n\t\t\tv-if=\"!videoResource || videoResource.type == 'none'\"\n\t\t\tclass=\"alert alert-warning\"\n\t\t>\n\t\t\tNo video URL provided\n\t\t</div>\n\t\t<iframe\n\t\t\tv-if=\"videoResource.type == 'youTube'\"\n\t\t\twidth=\"100%\"\n\t\t\theight=\"100%\"\n\t\t\t:src=\"videoResource.url\"\n\t\t\tframeborder=\"0\"\n\t\t\tallow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n\t\t\tallowfullscreen\n\t\t/>\n\t\t<div\n\t\t\tv-if=\"videoResource.type !== 'none' && videoResource.type !== 'youTube'\"\n\t\t\tclass=\"alert alert-warning\" \n\t\t>\n\t\t\tUnsupported video URL\n\t\t</div>\n\t</div>\n</template>\n\n<style>\n.mg-video .alert {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$G = undefined;
    /* module identifier */
    const __vue_module_identifier__$G = undefined;
    /* functional template */
    const __vue_is_functional_template__$G = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$G = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
      __vue_inject_styles__$G,
      __vue_script__$G,
      __vue_scope_id__$G,
      __vue_is_functional_template__$G,
      __vue_module_identifier__$G,
      false,
      createInjector,
      undefined,
      undefined
    );

  var mgVideo = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __vue_component__$G
  });

}($));
//# sourceMappingURL=macgyver.js.map
