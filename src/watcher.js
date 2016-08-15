import Dimension from './dimension.js';

class Watcher {
  constructor(dimensionGetter, {
    type = 'window'
  }) {
    this.prevDimension = null;
    this.type = type;
    if (type === 'window') {
      this.listener = this.checkForChange.bind(this);
      window.addEventListener('resize', this.checkForChange);
    } else {

    }
  }

  checkForChange() {
    if (this.prevDimension === null) {

    }
  }

  destroy() {
    if (this.type === 'window') {
      window.removeEventListener(this.listener);
    } else {

    }
  }
}

