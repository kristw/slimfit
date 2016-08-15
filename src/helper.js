
export function isRequired(name) {
  throw new Error(`Missing parameter ${name}`);
}

export function isDefined(x) {
  return x !== null && x !== undefined;
}

export function isNotDefined(x) {
  return x === null || x === undefined;
}

let isFunction;
if (typeof /./ != 'function' && typeof Int8Array != 'object') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
} else {
  isFunction = function(fn) {
    var getType = {};
    return fn && getType.toString.call(fn) === '[object Function]';
  }
}

export { isFunction };

export function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}

export function parseModifier(value) {
  // Return current value
  if (isNotDefined(value)) {
    return (x, cx) => Math.min(x, cx);
  }
  // Return percent of container
  const str = `${value}`.trim().toLowerCase();
  if (str.indexOf('%') > -1) {
    const percent = (+ str.replace('%', '')) / 100;
    return (x, cx) => cx * percent;
  }
  // Return fixed value
  return () => +(str.replace('px', ''));
}
