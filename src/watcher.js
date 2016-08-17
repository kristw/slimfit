import Dimension from './Dimension.js';
import { dispatch } from 'd3-dispatch';
import { isRequired } from './Helper.js';

class Watcher {
  constructor({
    type = Watcher.TYPE_WINDOW,
    target = null,
    pollInterval = 500,
  } = {}) {
    this.type = type;
    this.target = target;

    if (this.type === Watcher.TYPE_POLLING) {
      if (!this.target) {
        isRequired('options.target');
      }
      this.pollInterval = pollInterval;
    }

    this.dispatcher = dispatch('targetResized');
    this.listener = this.fireIfTargetChanged.bind(this);
    this.isWatching = false;
  }

  hasTargetChanged() {
    if (!this.target) {
      return true;
    }
    const newDim = new Dimension(this.target);
    if (!this.currentDim || !newDim.isEqual(this.currentDim)) {
      this.currentDim = newDim;
      return true;
    }
    return false;
  }

  fireIfTargetChanged() {
    if (this.hasTargetChanged()) {
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
      if (this.type === Watcher.TYPE_WINDOW) {
        window.addEventListener('resize', this.listener);
      } else if (this.type === Watcher.TYPE_POLLING) {
        this.intervalId = window.setInterval(this.listener, this.pollInterval);
      }
      this.isWatching = true;
    }
    return this;
  }

  stop() {
    if (this.isWatching) {
      if (this.type === Watcher.TYPE_WINDOW) {
        window.removeEventListener(this.listener);
      } else if (this.type === Watcher.TYPE_POLLING && this.intervalId) {
        window.clearInterval(this.intervalId);
      }
      this.isWatching = false;
    }
    return this;
  }
}

Watcher.TYPE_WINDOW = 'window';
Watcher.TYPE_POLLING = 'polling';

export default Watcher;
