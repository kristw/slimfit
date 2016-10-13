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

	var _Fitter = __webpack_require__(5);

	Object.defineProperty(exports, 'Fitter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Fitter).default;
	  }
	});

	var _Watcher = __webpack_require__(6);

	Object.defineProperty(exports, 'Watcher', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Watcher).default;
	  }
	});

	var _FitWatcher = __webpack_require__(7);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _lodashCustom = __webpack_require__(3);

	Object.defineProperty(exports, 'isFunction', {
	  enumerable: true,
	  get: function get() {
	    return _lodashCustom.isFunction;
	  }
	});
	Object.defineProperty(exports, 'debounce', {
	  enumerable: true,
	  get: function get() {
	    return _lodashCustom.debounce;
	  }
	});
	Object.defineProperty(exports, 'throttle', {
	  enumerable: true,
	  get: function get() {
	    return _lodashCustom.throttle;
	  }
	});
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

	/* WEBPACK VAR INJECTION */(function(global, module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * @license
	 * lodash (Custom Build) /license | Underscore.js 1.8.3 underscorejs.org/LICENSE
	 * Build: `lodash include="debounce,throttle,isFunction,isObject" exports="node" --production -o ./vendor/lodash.custom.js`
	 */
	;(function () {
	  function t() {
	    return m.Date.now();
	  }function e() {}function n(e, n, r) {
	    function i(t) {
	      var n = p,
	          o = b;return p = b = c, v = t, m = e.apply(o, n);
	    }function f(t) {
	      var e = t - g;return t -= v, g === c || e >= n || 0 > e || h && t >= y;
	    }function a() {
	      var e = t();if (f(e)) return l(e);var o,
	          r = setTimeout;o = e - v, e = n - (e - g), o = h ? x(e, y - o) : e, j = r(a, o);
	    }function l(t) {
	      return j = c, T && p ? i(t) : (p = b = c, m);
	    }function s() {
	      var e = t(),
	          o = f(e);if (p = arguments, b = this, g = e, o) {
	        if (j === c) return v = e = g, j = setTimeout(a, n), O ? i(e) : m;if (h) return j = setTimeout(a, n), i(g);
	      }return j === c && (j = setTimeout(a, n)), m;
	    }var p,
	        b,
	        y,
	        m,
	        j,
	        g,
	        v = 0,
	        O = false,
	        h = false,
	        T = true;if (typeof e != "function") throw new TypeError("Expected a function");return n = u(n) || 0, o(r) && (O = !!r.leading, y = (h = "maxWait" in r) ? d(u(r.maxWait) || 0, n) : y, T = "trailing" in r ? !!r.trailing : T), s.cancel = function () {
	      j !== c && clearTimeout(j), v = 0, p = g = b = j = c;
	    }, s.flush = function () {
	      return j === c ? m : l(t());
	    }, s;
	  }function o(t) {
	    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && ("object" == e || "function" == e);
	  }function r(t) {
	    return null != t && (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object";
	  }function i(t) {
	    return (typeof t === "undefined" ? "undefined" : _typeof(t)) == "symbol" || r(t) && "[object Symbol]" == g.call(t);
	  }function u(t) {
	    if (typeof t == "number") return t;if (i(t)) return f;if (o(t) && (t = typeof t.valueOf == "function" ? t.valueOf() : t, t = o(t) ? t + "" : t), typeof t != "string") return 0 === t ? t : +t;t = t.replace(a, "");var e = s.test(t);return e || p.test(t) ? b(t.slice(2), e ? 2 : 8) : l.test(t) ? f : +t;
	  }var c,
	      f = NaN,
	      a = /^\s+|\s+$/g,
	      l = /^[-+]0x[0-9a-f]+$/i,
	      s = /^0b[01]+$/i,
	      p = /^0o[0-7]+$/i,
	      b = parseInt,
	      y = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
	      m = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global || y || Function("return this")(),
	      j = (y = ( false ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports) && ( false ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
	      g = Object.prototype.toString,
	      d = Math.max,
	      x = Math.min;
	  e.debounce = n, e.throttle = function (t, e, r) {
	    var i = true,
	        u = true;if (typeof t != "function") throw new TypeError("Expected a function");return o(r) && (i = "leading" in r ? !!r.leading : i, u = "trailing" in r ? !!r.trailing : u), n(t, e, { leading: i, maxWait: e, trailing: u });
	  }, e.isFunction = function (t) {
	    return t = o(t) ? g.call(t) : "", "[object Function]" == t || "[object GeneratorFunction]" == t || "[object Proxy]" == t;
	  }, e.isObject = o, e.isObjectLike = r, e.isSymbol = i, e.now = t, e.toNumber = u, e.VERSION = "4.16.4", j && ((j.exports = e)._ = e, y._ = e);
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
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
/* 6 */
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

	    this.check = this.check.bind(this);
	    this.throttledCheck = (0, _Helper.throttle)(this.check, this.interval);
	    this.isWatching = false;

	    this.listeners = { change: [] };
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
	        this.dispatch('change', this.currentDim);
	      }
	      return this;
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch(name) {
	      var _this = this;

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      this.listeners[name].forEach(function (l) {
	        return l.apply(_this, args);
	      });
	      return this;
	    }
	  }, {
	    key: 'on',
	    value: function on(name, listener) {
	      if (this.listeners[name].indexOf(listener) === -1) {
	        this.listeners[name].push(listener);
	      }
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(name, listener) {
	      this.listeners[name] = this.listeners[name].filter(function (l) {
	        return l !== listener;
	      });
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
	      this.listeners.change = [];
	      return this;
	    }
	  }]);

	  return Watcher;
	}();

	Watcher.TYPE_WINDOW = 'window';
	Watcher.TYPE_POLLING = 'polling';

	exports.default = Watcher;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Fitter = __webpack_require__(5);

	var _Fitter2 = _interopRequireDefault(_Fitter);

	var _Watcher2 = __webpack_require__(6);

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
	        var _fit = this.fit();

	        var changed = _fit.changed;
	        var dimension = _fit.dimension;

	        if (changed) {
	          this.dispatch('change', dimension);
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