import Dimension from './Dimension.js';
import { dispatch } from 'd3-dispatch';
import { isRequired } from './Helper.js';

class Watcher {
  constructor({
    type = 'window',
    target = null,
    pollInterval = 500,
  }) {
    this.type = type;
    this.target = target;

    if (this.type === 'poll') {
      if (!this.target) {
        isRequired('target');
      }
      this.pollInterval = pollInterval;
    }

    this.dispatcher = dispatch('targetResized');
    this.listener = this.checkForChange.bind(this);
    this.isWatching = false;
  }

  checkForChange() {
    if (!this.target) {
      this.dispatcher.call('targetResized');
    }
    const newDim = new Dimension(this.target);
    if (!newDim.isEqual(this.currentDim)) {
      this.currentDim = newDim;
      this.dispatcher.call('targetResized');
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
    if (!this.isWatching) {
      this.currentDim = new Dimension(this.target);
      if (this.type === 'window') {
        window.addEventListener('resize', this.listener);
      } else if (this.type === 'poll') {
        this.intervalId = window.setInterval(this.listener, this.pollInterval);
      }
      this.isWatching = true;
    }
    return this;
  }

  resume() {
    return this.start();
  }

  stop() {
    if (this.isWatching) {
      if (this.type === 'window') {
        window.removeEventListener(this.listener);
      } else if (this.type === 'poll' && this.intervalId) {
        window.clearInterval(this.intervalId);
      }
      this.isWatching = false;
    }
    return this;
  }
}

export default Watcher;
