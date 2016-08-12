import isElement from 'lodash/isElement.js';
import isFunction from 'lodash/isFunction.js';

export function isRequired(name) {
  throw new Error(`Missing parameter ${name}`);
}

export function isDefined(x) {
  return x !== null && x !== undefined;
}

export function isNotDefined(x) {
  return x === null || x === undefined;
}

export function getDimension(boxOrBoxGetter) {
  const box = isFunction(boxOrBoxGetter) ? boxOrBoxGetter() : boxOrBoxGetter;

  if (isElement(box)) {
    return [box.clientWidth, box.clientHeight];
  } else if (Array.isArray(box)) {
    return box;
  } else if (isDefined(box.width) && isDefined(box.height)) {
    return [box.width, box.height];
  }
  const err = new Error(`Unsupported box. Must be either
DOMNode, Array or Object with field width and height,
or a function that returns any of the above.`);
  err.value = boxOrBoxGetter;
  throw err;
}

export function parseModifier(value) {
  // Return current value
  if (isNotDefined(value)) {
    return x => x;
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

export function prepareReturn(newW, newH, w, h) {
  return {
    width: newW,
    height: newH,
    changed: w !== newW || h !== newH,
  };
}
