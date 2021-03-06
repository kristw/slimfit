export { default as isObject } from 'lodash-es/isObject.js';
export { default as isFunction } from 'lodash-es/isFunction.js';
export { default as debounce } from 'lodash-es/debounce.js';
export { default as throttle } from 'lodash-es/throttle.js';

export function isRequired(name) {
  throw new Error(`Missing parameter ${name}`);
}

export function isDefined(x) {
  return x !== null && x !== undefined;
}

export function isNotDefined(x) {
  return x === null || x === undefined;
}

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
