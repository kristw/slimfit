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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _dimension = __webpack_require__(1);

	var _dimension2 = _interopRequireDefault(_dimension);

	var _helper = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fit() {
	  var box = arguments.length <= 0 || arguments[0] === undefined ? (0, _helper.isRequired)('box') : arguments[0];
	  var container = arguments.length <= 1 || arguments[1] === undefined ? (0, _helper.isRequired)('container') : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	  var _options$mode = options.mode;
	  var mode = _options$mode === undefined ? 'basic' : _options$mode;
	  var _options$width = options.width;
	  var width = _options$width === undefined ? null : _options$width;
	  var _options$height = options.height;
	  var height = _options$height === undefined ? null : _options$height;
	  var _options$ratio = options.ratio;
	  var ratio = _options$ratio === undefined ? 1 : _options$ratio;


	  var boxDim = new _dimension2.default(box);

	  var _boxDim$toArray = boxDim.toArray();

	  var _boxDim$toArray2 = _slicedToArray(_boxDim$toArray, 2);

	  var w = _boxDim$toArray2[0];
	  var h = _boxDim$toArray2[1];

	  var _toArray = new _dimension2.default(container).toArray();

	  var _toArray2 = _slicedToArray(_toArray, 2);

	  var cw = _toArray2[0];
	  var ch = _toArray2[1];

	  var wFn = (0, _helper.parseModifier)(width);
	  var hFn = (0, _helper.parseModifier)(height);

	  var dim = void 0;
	  if (mode === 'aspectRatio') {
	    var maxW = wFn(cw, cw);
	    var maxH = hFn(ch, ch);
	    var newWFromHeight = Math.floor(ratio * maxH);
	    if (newWFromHeight <= maxW) {
	      dim = new _dimension2.default(newWFromHeight, maxH);
	    } else {
	      dim = new _dimension2.default(maxW, Math.floor(maxW / ratio));
	    }
	  } else {
	    dim = new _dimension2.default(wFn(w, cw), hFn(h, ch));
	  }

	  return {
	    dimension: dim,
	    changed: !dim.isEqual(boxDim)
	  };
	}

	exports.default = { fit: fit };

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _helper = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dimension = function () {
	  function Dimension() {
	    _classCallCheck(this, Dimension);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (args.length === 1) {
	      var inputOrGetter = args[0];
	      var input = (0, _helper.isFunction)(inputOrGetter) ? inputOrGetter() : inputOrGetter;

	      if (input instanceof Dimension) {
	        this.width = input.width;
	        this.height = input.height;
	      } else if ((0, _helper.isElement)(input)) {
	        this.width = input.clientWidth;
	        this.height = input.clientHeight;
	      } else if (Array.isArray(input)) {
	        this.width = input[0];
	        this.height = input[1];
	      } else if ((0, _helper.isDefined)(input.width) && (0, _helper.isDefined)(input.height)) {
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
	      } else {
	        var dim2 = new Dimension(x);
	        return this.width === dim2.width && this.height === dim2.height;
	      }
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

	var isFunction = void 0;
	if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
	  exports.isFunction = isFunction = function isFunction(obj) {
	    return typeof obj == 'function' || false;
	  };
	} else {
	  exports.isFunction = isFunction = function isFunction(fn) {
	    var getType = {};
	    return fn && getType.toString.call(fn) === '[object Function]';
	  };
	}

	exports.isFunction = isFunction;
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

/***/ }
/******/ ])
});
;