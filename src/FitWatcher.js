import Fitter from './Fitter.js';
import Watcher from './Watcher.js';
import { isRequired } from './Helper.js';

class FitWatcher extends Watcher {
  constructor(
    box = isRequired('box'),
    container = isRequired('container'),
    fitterOptions,
    watcherOptions
  ) {
    super(watcherOptions);

    const fitter = new Fitter(fitterOptions);
    this.fit = () => fitter.fit(box, container);
  }

  fireIfNecessary() {
    if (this.hasTargetChanged()) {
      const fitResult = this.fit();
      if (this.fitResult.changed) {
        this.dispatcher.call('change', this, fitResult.dimension);
      }
    }
    return this;
  }
}

export default FitWatcher;