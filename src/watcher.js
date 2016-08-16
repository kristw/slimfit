import Dimension from './dimension.js';
import { isRequired } from './helper.js';
import { dispatch } from 'd3-dispatch';

class Watcher {
  constructor({
    type = 'window',
    target = window.document.body,
    pollInterval = 500,
  }) {
    this.type = type;
    this.target = target;
    this.pollInterval = pollInterval;
    this.dispatcher = dispatch('change');
    this.listener = this.checkForChange.bind(this);
  }

  checkForChange() {
    const newDim = new Dimension(this.target);
    if (!newDim.isEqual(this.currentDim)) {
      this.currentDim = newDim;
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

  start() {
    this.currentDim = new Dimension(this.target);
    if (this.type === 'window') {
      window.addEventListener('resize', this.listener);
    } else if (this.type === 'poll') {
      this.intervalId = window.setInterval(this.listener, this.pollInterval);
    }
    return this;
  }

  stop() {
    if (this.type === 'window') {
      window.removeEventListener(this.listener);
    } else if (this.type === 'poll' && this.intervalId) {
      window.clearInterval(this.intervalId);
    }
    return this;
  }
}

export default Watcher;
