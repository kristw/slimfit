import Dimension from './dimension.js';
import { isRequired } from './helper.js';

class Watcher {
  constructor({
    type = 'window',
    target = null,
    pollInterval = 500,
  }) {
    this.type = type;
    this.target = target;

    if (type === 'window') {
      this.listener = function() {
        if (this.hasChanged()) {
          this.dispatch();
        }
      }.bind(this);

      if (this.target) {
        this.currentDim = new Dimension(this.target);
      }

      window.addEventListener('resize', this.listener);
    } else if (type === 'poll') {
      if (target === null) {
        isRequired('target');
      }
      this.pollInterval = pollInterval;
      this.currentDim = new Dimension(this.target);
      this.intervalId = window.setInterval(() => {
        if (this.hasChanged()) {
          this.dispatch();
        }
      }, this.pollInterval);
    }
  }

  hasChanged() {
    if (!this.currentDim) return true;
    const newDim = new Dimension(this.target);
    return newDim.isEqual(this.currentDim);
  }

  dispatch() {

  }

  destroy() {
    if (this.type === 'window') {
      window.removeEventListener(this.listener);
    } else if (type === 'poll' && this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }
}

