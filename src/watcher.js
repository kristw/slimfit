import Dimension from './dimension.js';
import { isRequired } from './helper.js';
import { dispatch } from 'd3-dispatch';

class Watcher {
  constructor({
    type = 'window',
    target = null,
    pollInterval = 500,
  }) {
    this.type = type;
    this.target = target;
    this.dispatcher = dispatch('change');
    this.listener = this.checkForChange.bind(this);

    if (type === 'window') {
      if (this.target) {
        this.currentDim = new Dimension(this.target);
      }
      window.addEventListener('resize', this.listener);
    } else if (type === 'poll') {
      if (target === null) {
        isRequired('target');
      }
      this.currentDim = new Dimension(this.target);
      this.pollInterval = pollInterval;
      this.intervalId = window.setInterval(this.listener, this.pollInterval);
    }
  }

  hasChanged() {
    const newDim = new Dimension(this.target);
    if (!this.currentDim || !newDim.isEqual(this.currentDim)) {
      return newDim;
    }
    return false;
  }

  checkForChange() {
    const newDim = this.hasChanged();
    if (newDim) {
      this.dispatcher.call('change', this, newDim);
    }
    return this;
  }

  on(name, listener) {
    this.dispatcher.on(name, listener);
    return this;
  }

  off(name) {
    this.dispatcher.on(name, null);
    return this;
  }

  destroy() {
    if (this.type === 'window') {
      window.removeEventListener(this.listener);
    } else if (this.type === 'poll' && this.intervalId) {
      window.clearInterval(this.intervalId);
    }

    this.dispatcher.on('change', null);
    return this;
  }
}

export default Watcher;
