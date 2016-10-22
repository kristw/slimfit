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

  check() {
    if (this.hasTargetChanged()) {
      const { changed, dimension } = this.fit();
      if (changed) {
        this.dispatch('change', dimension);
      }
    }
    return this;
  }
}

export default FitWatcher;
