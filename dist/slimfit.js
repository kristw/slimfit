(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["slimfit"] = factory();
	else
		root["slimfit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Dimension = __webpack_require__(1);

	Object.defineProperty(exports, 'Dimension', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Dimension).default;
	  }
	});

	var _Fitter = __webpack_require__(3);

	Object.defineProperty(exports, 'Fitter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Fitter).default;
	  }
	});

	var _Watcher = __webpack_require__(4);

	Object.defineProperty(exports, 'Watcher', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Watcher).default;
	  }
	});

	var _FitWatcher = __webpack_require__(15);

	Object.defineProperty(exports, 'FitWatcher', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FitWatcher).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Helper = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dimension = function () {
	  function Dimension() {
	    _classCallCheck(this, Dimension);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (args.length === 1) {
	      var inputOrGetter = args[0];
	      var input = (0, _Helper.isFunction)(inputOrGetter) ? inputOrGetter() : inputOrGetter;

	      if (input instanceof Dimension) {
	        this.width = input.width;
	        this.height = input.height;
	      } else if ((0, _Helper.isElement)(input)) {
	        this.width = input.clientWidth;
	        this.height = input.clientHeight;
	      } else if (Array.isArray(input)) {
	        this.width = input[0];
	        this.height = input[1];
	      } else if ((0, _Helper.isDefined)(input) && (0, _Helper.isDefined)(input.width) && (0, _Helper.isDefined)(input.height)) {
	        this.width = input.width;
	        this.height = input.height;
	      } else {
	        var err = new Error('Unsupported input. Must be either\n  DOMNode, Array or Object with field width and height,\n  or a function that returns any of the above.');
	        err.value = inputOrGetter;
	        throw err;
	      }
	    } else {
	      var width = args[0];
	      var height = args[1];

	      this.width = width;
	      this.height = height;
	    }
	  }

	  _createClass(Dimension, [{
	    key: 'isEqual',
	    value: function isEqual(x) {
	      if (x instanceof Dimension) {
	        return this.width === x.width && this.height === x.height;
	      }
	      var dim2 = new Dimension(x);
	      return this.width === dim2.width && this.height === dim2.height;
	    }
	  }, {
	    key: 'toArray',
	    value: function toArray() {
	      return [this.width, this.height];
	    }
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      return {
	        width: this.width,
	        height: this.height
	      };
	    }
	  }]);

	  return Dimension;
	}();

	exports.default = Dimension;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.isRequired = isRequired;
	exports.isDefined = isDefined;
	exports.isNotDefined = isNotDefined;
	exports.isElement = isElement;
	exports.parseModifier = parseModifier;
	function isRequired(name) {
	  throw new Error('Missing parameter ' + name);
	}

	function isDefined(x) {
	  return x !== null && x !== undefined;
	}

	function isNotDefined(x) {
	  return x === null || x === undefined;
	}

	var isFunction = exports.isFunction = function () {
	  if (typeof /./ !== 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) !== 'object') {
	    return function (obj) {
	      return typeof obj === 'function' || false;
	    };
	  }
	  return function (fn) {
	    var getType = {};
	    return fn && getType.toString.call(fn) === '[object Function]';
	  };
	}();

	function isElement(obj) {
	  return !!(obj && obj.nodeType === 1);
	}

	function parseModifier(value) {
	  // Return current value
	  if (isNotDefined(value)) {
	    return function (x, cx) {
	      return Math.min(x, cx);
	    };
	  }
	  // Return percent of container
	  var str = ('' + value).trim().toLowerCase();
	  if (str.indexOf('%') > -1) {
	    var _ret = function () {
	      var percent = +str.replace('%', '') / 100;
	      return {
	        v: function v(x, cx) {
	          return cx * percent;
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  // Return fixed value
	  return function () {
	    return +str.replace('px', '');
	  };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Dimension = __webpack_require__(1);

	var _Dimension2 = _interopRequireDefault(_Dimension);

	var _Helper = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Fitter = function () {
	  function Fitter() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Fitter);

	    var _options$mode = options.mode;
	    var mode = _options$mode === undefined ? Fitter.MODE_BASIC : _options$mode;
	    var _options$width = options.width;
	    var width = _options$width === undefined ? '100%' : _options$width;
	    var _options$height = options.height;
	    var height = _options$height === undefined ? null : _options$height;
	    var _options$ratio = options.ratio;
	    var ratio = _options$ratio === undefined ? 1 : _options$ratio;
	    var _options$maxWidth = options.maxWidth;
	    var maxWidth = _options$maxWidth === undefined ? null : _options$maxWidth;
	    var _options$maxHeight = options.maxHeight;
	    var maxHeight = _options$maxHeight === undefined ? null : _options$maxHeight;


	    if (mode === Fitter.MODE_ASPECT_RATIO) {
	      this.wFn = (0, _Helper.parseModifier)(maxWidth);
	      this.hFn = (0, _Helper.parseModifier)(maxHeight);
	      this.options = {
	        mode: mode,
	        ratio: ratio,
	        maxWidth: maxWidth,
	        maxHeight: maxHeight
	      };
	    } else {
	      this.wFn = (0, _Helper.parseModifier)(width);
	      this.hFn = (0, _Helper.parseModifier)(height);
	      this.options = {
	        mode: mode,
	        width: width,
	        height: height
	      };
	    }
	  }

	  _createClass(Fitter, [{
	    key: 'fit',
	    value: function fit() {
	      var box = arguments.length <= 0 || arguments[0] === undefined ? (0, _Helper.isRequired)('box') : arguments[0];
	      var container = arguments.length <= 1 || arguments[1] === undefined ? (0, _Helper.isRequired)('container') : arguments[1];

	      var boxDim = new _Dimension2.default(box);
	      var w = boxDim.width;
	      var h = boxDim.height;
	      var containerDim = new _Dimension2.default(container);
	      var cw = containerDim.width;
	      var ch = containerDim.height;

	      var dim = void 0;
	      if (this.options.mode === Fitter.MODE_ASPECT_RATIO) {
	        var ratio = this.options.ratio;
	        var maxW = this.wFn(cw, cw);
	        var maxH = this.hFn(ch, ch);
	        var newWFromHeight = Math.floor(ratio * maxH);
	        if (newWFromHeight <= maxW) {
	          dim = new _Dimension2.default(newWFromHeight, maxH);
	        } else {
	          dim = new _Dimension2.default(maxW, Math.floor(maxW / ratio));
	        }
	      } else {
	        dim = new _Dimension2.default(this.wFn(w, cw), this.hFn(h, ch));
	      }

	      return {
	        dimension: dim,
	        changed: !dim.isEqual(boxDim)
	      };
	    }
	  }]);

	  return Fitter;
	}();

	Fitter.MODE_BASIC = 'basic';
	Fitter.MODE_ASPECT_RATIO = 'aspectRatio';

	exports.default = Fitter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Dimension = __webpack_require__(1);

	var _Dimension2 = _interopRequireDefault(_Dimension);

	var _d3Dispatch = __webpack_require__(5);

	var _Helper = __webpack_require__(2);

	var _throttle = __webpack_require__(6);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Watcher = function () {
	  function Watcher() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$type = _ref.type;
	    var type = _ref$type === undefined ? Watcher.TYPE_WINDOW : _ref$type;
	    var _ref$target = _ref.target;
	    var target = _ref$target === undefined ? null : _ref$target;
	    var _ref$interval = _ref.interval;
	    var interval = _ref$interval === undefined ? 500 : _ref$interval;

	    _classCallCheck(this, Watcher);

	    if (type === Watcher.TYPE_POLLING && !target) {
	      (0, _Helper.isRequired)('options.target');
	    }

	    this.type = type;
	    this.target = target;
	    this.interval = interval;

	    this.dispatcher = (0, _d3Dispatch.dispatch)('change');
	    this.check = this.check.bind(this);
	    this.throttledCheck = (0, _throttle2.default)(this.check, this.interval);
	    this.isWatching = false;
	  }

	  _createClass(Watcher, [{
	    key: 'hasTargetChanged',
	    value: function hasTargetChanged() {
	      if (!this.target) {
	        return true;
	      }
	      var newDim = new _Dimension2.default(this.target);
	      if (!this.currentDim || !newDim.isEqual(this.currentDim)) {
	        this.currentDim = newDim;
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'check',
	    value: function check() {
	      if (this.hasTargetChanged()) {
	        this.dispatcher.call('change', this, this.currentDim);
	      }
	      return this;
	    }
	  }, {
	    key: 'on',
	    value: function on(name, listener) {
	      this.dispatcher.on(name, listener);
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(name) {
	      this.dispatcher.on(name, null);
	      return this;
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      if (!this.isWatching) {
	        if (this.target) {
	          this.currentDim = new _Dimension2.default(this.target);
	        }
	        if (this.type === Watcher.TYPE_WINDOW) {
	          window.addEventListener('resize', this.throttledCheck);
	        } else if (this.type === Watcher.TYPE_POLLING) {
	          this.intervalId = window.setInterval(this.check, this.interval);
	        }
	        this.isWatching = true;
	      }
	      return this;
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.isWatching) {
	        if (this.type === Watcher.TYPE_WINDOW) {
	          window.removeEventListener('resize', this.throttledCheck);
	        } else if (this.type === Watcher.TYPE_POLLING && this.intervalId) {
	          window.clearInterval(this.intervalId);
	          this.intervalId = null;
	        }
	        this.isWatching = false;
	      }
	      return this;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.stop();
	      this.off('change');
	      return this;
	    }
	  }]);

	  return Watcher;
	}();

	Watcher.TYPE_WINDOW = 'window';
	Watcher.TYPE_POLLING = 'polling';

	exports.default = Watcher;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-dispatch/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';

	  var noop = {value: function() {}};

	  function dispatch() {
	    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	      if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
	      _[t] = [];
	    }
	    return new Dispatch(_);
	  }

	  function Dispatch(_) {
	    this._ = _;
	  }

	  function parseTypenames(typenames, types) {
	    return typenames.trim().split(/^|\s+/).map(function(t) {
	      var name = "", i = t.indexOf(".");
	      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	      return {type: t, name: name};
	    });
	  }

	  Dispatch.prototype = dispatch.prototype = {
	    constructor: Dispatch,
	    on: function(typename, callback) {
	      var _ = this._,
	          T = parseTypenames(typename + "", _),
	          t,
	          i = -1,
	          n = T.length;

	      // If no callback was specified, return the callback of the given type and name.
	      if (arguments.length < 2) {
	        while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
	        return;
	      }

	      // If a type was specified, set the callback for the given type and name.
	      // Otherwise, if a null callback was specified, remove callbacks of the given name.
	      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	      while (++i < n) {
	        if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
	        else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
	      }

	      return this;
	    },
	    copy: function() {
	      var copy = {}, _ = this._;
	      for (var t in _) copy[t] = _[t].slice();
	      return new Dispatch(copy);
	    },
	    call: function(type, that) {
	      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    },
	    apply: function(type, that, args) {
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    }
	  };

	  function get(type, name) {
	    for (var i = 0, n = type.length, c; i < n; ++i) {
	      if ((c = type[i]).name === name) {
	        return c.value;
	      }
	    }
	  }

	  function set(type, name, callback) {
	    for (var i = 0, n = type.length; i < n; ++i) {
	      if (type[i].name === name) {
	        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
	        break;
	      }
	    }
	    if (callback != null) type.push({name: name, value: callback});
	    return type;
	  }

	  exports.dispatch = dispatch;

	  Object.defineProperty(exports, '__esModule', { value: true });

	}));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(7),
	    isObject = __webpack_require__(8);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8),
	    now = __webpack_require__(9),
	    toNumber = __webpack_require__(12);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 8 */
/***/ function(module, exports) {

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
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(10);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(11);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8),
	    isSymbol = __webpack_require__(13);

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
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
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

	module.exports = toNumber;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 14 */
/***/ function(module, exports) {

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
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Fitter = __webpack_require__(3);

	var _Fitter2 = _interopRequireDefault(_Fitter);

	var _Watcher2 = __webpack_require__(4);

	var _Watcher3 = _interopRequireDefault(_Watcher2);

	var _Helper = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FitWatcher = function (_Watcher) {
	  _inherits(FitWatcher, _Watcher);

	  function FitWatcher() {
	    var box = arguments.length <= 0 || arguments[0] === undefined ? (0, _Helper.isRequired)('box') : arguments[0];
	    var container = arguments.length <= 1 || arguments[1] === undefined ? (0, _Helper.isRequired)('container') : arguments[1];
	    var fitterOptions = arguments[2];
	    var watcherOptions = arguments[3];

	    _classCallCheck(this, FitWatcher);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FitWatcher).call(this, watcherOptions));

	    var fitter = new _Fitter2.default(fitterOptions);
	    _this.fit = function () {
	      return fitter.fit(box, container);
	    };
	    return _this;
	  }

	  _createClass(FitWatcher, [{
	    key: 'check',
	    value: function check() {
	      if (this.hasTargetChanged()) {
	        var fitResult = this.fit();
	        if (fitResult.changed) {
	          this.dispatcher.call('change', this, fitResult.dimension);
	        }
	      }
	      return this;
	    }
	  }]);

	  return FitWatcher;
	}(_Watcher3.default);

	exports.default = FitWatcher;

/***/ }
/******/ ])
});
;