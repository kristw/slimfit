var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

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
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag || tag == proxyTag;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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
var now = function now() {
  return root.Date.now();
};

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
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

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
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString$1.call(value) == symbolTag;
}

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
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
var nativeMin = Math.min;
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
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
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

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

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
    throw new TypeError(FUNC_ERROR_TEXT$1);
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

var Dimension = function () {
  function Dimension() {
    classCallCheck(this, Dimension);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1) {
      var inputOrGetter = args[0];
      var input = isFunction(inputOrGetter) ? inputOrGetter() : inputOrGetter;

      if (input instanceof Dimension) {
        this.width = input.width;
        this.height = input.height;
      } else if (isElement(input)) {
        this.width = input.clientWidth;
        this.height = input.clientHeight;
      } else if (Array.isArray(input)) {
        this.width = input[0];
        this.height = input[1];
      } else if (isDefined(input) && isDefined(input.width) && isDefined(input.height)) {
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

  createClass(Dimension, [{
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

var Fitter = function () {
  function Fitter() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    classCallCheck(this, Fitter);

    var _ref = options || {};

    var _ref$mode = _ref.mode;
    var mode = _ref$mode === undefined ? Fitter.MODE_BASIC : _ref$mode;
    var _ref$width = _ref.width;
    var width = _ref$width === undefined ? '100%' : _ref$width;
    var _ref$height = _ref.height;
    var height = _ref$height === undefined ? null : _ref$height;
    var _ref$ratio = _ref.ratio;
    var ratio = _ref$ratio === undefined ? 1 : _ref$ratio;
    var _ref$maxWidth = _ref.maxWidth;
    var maxWidth = _ref$maxWidth === undefined ? null : _ref$maxWidth;
    var _ref$maxHeight = _ref.maxHeight;
    var maxHeight = _ref$maxHeight === undefined ? null : _ref$maxHeight;


    if (mode === Fitter.MODE_ASPECT_RATIO) {
      this.wFn = parseModifier(maxWidth);
      this.hFn = parseModifier(maxHeight);
      this.options = {
        mode: mode,
        ratio: ratio,
        maxWidth: maxWidth,
        maxHeight: maxHeight
      };
    } else {
      this.wFn = parseModifier(width);
      this.hFn = parseModifier(height);
      this.options = {
        mode: mode,
        width: width,
        height: height
      };
    }
  }

  createClass(Fitter, [{
    key: 'fit',
    value: function fit() {
      var box = arguments.length <= 0 || arguments[0] === undefined ? isRequired('box') : arguments[0];
      var container = arguments.length <= 1 || arguments[1] === undefined ? isRequired('container') : arguments[1];

      var boxDim = new Dimension(box);
      var w = boxDim.width;
      var h = boxDim.height;
      var containerDim = new Dimension(container);
      var cw = containerDim.width;
      var ch = containerDim.height;

      var dim = void 0;
      if (this.options.mode === Fitter.MODE_ASPECT_RATIO) {
        var ratio = this.options.ratio;
        var maxW = this.wFn(cw, cw);
        var maxH = this.hFn(ch, ch);
        var newWFromHeight = Math.floor(ratio * maxH);
        if (newWFromHeight <= maxW) {
          dim = new Dimension(newWFromHeight, maxH);
        } else {
          dim = new Dimension(maxW, Math.floor(maxW / ratio));
        }
      } else {
        dim = new Dimension(this.wFn(w, cw), this.hFn(h, ch));
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

var Watcher = function () {
  function Watcher() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    classCallCheck(this, Watcher);

    var _ref = options || {};

    var _ref$mode = _ref.mode;
    var mode = _ref$mode === undefined ? Watcher.MODE_WINDOW : _ref$mode;
    var _ref$target = _ref.target;
    var target = _ref$target === undefined ? null : _ref$target;
    var _ref$interval = _ref.interval;
    var interval = _ref$interval === undefined ? 200 : _ref$interval;


    if (mode === Watcher.MODE_POLLING && !target) {
      isRequired('options.target');
    }

    this.mode = mode;
    this.target = target;
    this.interval = interval;

    this.check = this.check.bind(this);
    this.throttledCheck = throttle(this.check, this.interval);
    this.isWatching = false;

    this.listeners = { change: [] };
  }

  createClass(Watcher, [{
    key: 'hasTargetChanged',
    value: function hasTargetChanged() {
      if (!this.target) {
        return true;
      }
      var newDim = new Dimension(this.target);
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
          this.currentDim = new Dimension(this.target);
        }
        if (this.mode === Watcher.MODE_WINDOW) {
          window.addEventListener('resize', this.throttledCheck);
        } else if (this.mode === Watcher.MODE_POLLING) {
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
        if (this.mode === Watcher.MODE_WINDOW) {
          window.removeEventListener('resize', this.throttledCheck);
        } else if (this.mode === Watcher.MODE_POLLING && this.intervalId) {
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

Watcher.MODE_WINDOW = 'window';
Watcher.MODE_POLLING = 'polling';

var FitWatcher = function (_Watcher) {
  inherits(FitWatcher, _Watcher);

  function FitWatcher() {
    var box = arguments.length <= 0 || arguments[0] === undefined ? isRequired('box') : arguments[0];
    var container = arguments.length <= 1 || arguments[1] === undefined ? isRequired('container') : arguments[1];
    var fitterOptions = arguments[2];
    var watcherOptions = arguments[3];
    classCallCheck(this, FitWatcher);

    var _this = possibleConstructorReturn(this, Object.getPrototypeOf(FitWatcher).call(this, watcherOptions));

    var fitter = new Fitter(fitterOptions);
    _this.fit = function () {
      return fitter.fit(box, container);
    };
    return _this;
  }

  createClass(FitWatcher, [{
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
}(Watcher);

export { Dimension, Fitter, Watcher, FitWatcher };