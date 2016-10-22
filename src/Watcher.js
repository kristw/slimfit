import Dimension from './Dimension.js';
import { isRequired, throttle } from './Helper.js';

class Watcher {
  constructor(options = {}) {
    const {
      mode = Watcher.MODE_WINDOW,
      target = null,
      interval = 500,
    } = (options || {});

    if (mode === Watcher.MODE_POLLING && !target) {
      isRequired('options.target');
    }

    this.mode = mode;
    this.target = target;
    this.interval = interval;

    this.check = this.check.bind(this);
    this.throttledCheck = throttle(this.check, this.interval);
    this.isWatching = false;

    this.listeners = { change: [] };
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

  check() {
    if (this.hasTargetChanged()) {
      this.dispatch('change', this.currentDim);
    }
    return this;
  }

  dispatch(name, ...args) {
    this.listeners[name].forEach(l => l.apply(this, args));
    return this;
  }

  on(name, listener) {
    if (this.listeners[name].indexOf(listener) === -1) {
      this.listeners[name].push(listener);
    }
    return this;
  }

  off(name, listener) {
    this.listeners[name] = this.listeners[name]
      .filter(l => l !== listener);
    return this;
  }

  start() {
    if (!this.isWatching) {
      if (this.target) {
        this.currentDim = new Dimension(this.target);
      }
      if (this.mode === Watcher.MODE_WINDOW) {
        window.addEventListener('resize', this.throttledCheck);
      } else if (this.mode === Watcher.MODE_POLLING) {
        this.intervalId = window.setInterval(this.check, this.interval);
      }
      this.isWatching = true;
    }
    return this;
  }

  stop() {
    if (this.isWatching) {
      if (this.mode === Watcher.MODE_WINDOW) {
        window.removeEventListener('resize', this.throttledCheck);
      } else if (this.mode === Watcher.MODE_POLLING && this.intervalId) {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.isWatching = false;
    }
    return this;
  }

  destroy() {
    this.stop();
    this.listeners.change = [];
    return this;
  }
}

Watcher.MODE_WINDOW = 'window';
Watcher.MODE_POLLING = 'polling';

export default Watcher;
