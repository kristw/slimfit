import { isDefined, isElement, isFunction } from './Helper.js';

class Dimension {

  constructor(...args) {
    if (args.length === 1) {
      const inputOrGetter = args[0];
      const input = isFunction(inputOrGetter) ? inputOrGetter() : inputOrGetter;

      if (input instanceof Dimension) {
        this.width = input.width;
        this.height = input.height;
      } else if (isElement(input)) {
        this.width = input.clientWidth;
        this.height = input.clientHeight;
      } else if (Array.isArray(input)) {
        this.width = input[0];
        this.height = input[1];
      } else if (isDefined(input.width) && isDefined(input.height)) {
        this.width = input.width;
        this.height = input.height;
      } else {
        const err = new Error(`Unsupported input. Must be either
  DOMNode, Array or Object with field width and height,
  or a function that returns any of the above.`);
        err.value = inputOrGetter;
        throw err;
      }
    } else {
      const [width, height] = args;
      this.width = width;
      this.height = height;
    }
  }

  isEqual(x) {
    if (x instanceof Dimension) {
      return this.width === x.width && this.height === x.height;
    }
    const dim2 = new Dimension(x);
    return this.width === dim2.width && this.height === dim2.height;
  }

  toArray() {
    return [this.width, this.height];
  }

  toObject() {
    return {
      width: this.width,
      height: this.height,
    };
  }

}

export default Dimension;
