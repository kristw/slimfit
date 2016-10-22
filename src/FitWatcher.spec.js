import Watcher from './Watcher.js';
import FitWatcher from './FitWatcher.js';
import Dimension from './Dimension.js';

describe('FitWatcher', () => {
  describe('new FitWatcher(options)', () => {
    it('should create a window watcher by default', () => {
      const watcher = new FitWatcher([100,100], [200,200]);
      expect(watcher.mode).toEqual(Watcher.MODE_WINDOW);
    });

    it('should use handle null options using default value', () => {
      const watcher = new FitWatcher([100,100], [200,200], null);
      expect(watcher.mode).toEqual(Watcher.MODE_WINDOW);
    });

    it('should create a polling watcher if options.mode is Watcher.MODE_POLLING', () => {
      const watcher = new FitWatcher([100,100], [200,200], null, {
        mode: Watcher.MODE_POLLING,
        target: [200, 200],
      });
      expect(watcher.mode).toEqual(Watcher.MODE_POLLING);
    });

    it('should throw error if options.mode is Watcher.MODE_POLLING but options.target is not specified', () => {
      expect(() => new FitWatcher([100,100], [200,200], null, {
        mode: Watcher.MODE_POLLING,
      })).toThrow();
    });
  });

});
