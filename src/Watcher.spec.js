import Watcher from './Watcher.js';
import Dimension from './Dimension.js';

describe('Watcher', () => {
  describe('new Watcher(options)', () => {
    it('should create a window watcher by default', () => {
      const watcher = new Watcher();
      expect(watcher.mode).toEqual(Watcher.MODE_WINDOW);
    });

    it('should use handle null options using default value', () => {
      const watcher = new Watcher(null);
      expect(watcher.mode).toEqual(Watcher.MODE_WINDOW);
    });

    it('should create a polling watcher if options.mode is Watcher.MODE_POLLING', () => {
      const watcher = new Watcher({
        mode: Watcher.MODE_POLLING,
        target: [200, 200],
      });
      expect(watcher.mode).toEqual(Watcher.MODE_POLLING);
    });

    it('should throw error if options.mode is Watcher.MODE_POLLING but options.target is not specified', () => {
      expect(() => new Watcher({
        mode: Watcher.MODE_POLLING,
      })).toThrow();
    });
  });

  describe('.hasTargetChanged()', () => {
    it('should always return true if target is not defined', () => {
      const watcher = new Watcher();
      expect(watcher.hasTargetChanged()).toBeTruthy();
      expect(watcher.hasTargetChanged()).toBeTruthy();
    });
    it('should return false if target has not changed since last time this function is called.', () => {
      let x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter });
      expect(watcher.hasTargetChanged()).toBeTruthy();
      expect(watcher.hasTargetChanged()).toBeFalsy();
      x = [200, 200];
      expect(watcher.hasTargetChanged()).toBeFalsy();
    });
    it('should return true if target has changed since last time this function is called.', () => {
      let x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter });
      expect(watcher.hasTargetChanged()).toBeTruthy();
      x = [100, 100];
      expect(watcher.hasTargetChanged()).toBeTruthy();
    });
  });

  describe('.check()', () => {
    it('should fire event "change" if the target is changed', done => {
      const x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter })
        .on('change', dim => {
          expect(dim).toEqual(new Dimension(200, 200));
          done();
        });
      watcher.check();
    });
    it('should not fire if the target is not changed', done => {
      const x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter })
        .on('change', () => {
          fail('should not fire event "change"');
          done();
        });
      watcher.hasTargetChanged();
      watcher.check();
      window.setTimeout(done, 10);
    });
  });

  describe('.on(name, listener)', ()=>{
    it('should add event listener', ()=>{
      function noop() { }
      const watcher = new Watcher()
        .on('change', noop);
      expect(watcher.listeners.change.indexOf(noop)).toBeGreaterThan(-1);
    });
  });

  describe('.off(name, listener)', ()=>{
    it('should add event listener', ()=>{
      function noop() { }
      const watcher = new Watcher()
        .on('change', noop)
        .off('change', noop);
      expect(watcher.listeners.change.indexOf(noop)).toEqual(-1);
    });
  });

  describe('.start()', () => {
    it('should set watcher.isWatching to true', () => {
      const x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter });
      expect(watcher.isWatching).toBeFalsy();
      watcher.start();
      expect(watcher.isWatching).toBeTruthy();
      watcher.stop();
    });
    it('should check after every window.resize event when mode is Watcher.MODE_WINDOW', done => {
      const watcher = new Watcher();
      watcher.throttledCheck = () => {
        watcher.stop();
        done();
      };
      watcher.start();
      window.dispatchEvent(new Event('resize', { bubbles: true, cancelable: false }));
    });
    it('should check periodically when mode is Watcher.MODE_POLLING', done => {
      const x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({
        mode: Watcher.MODE_POLLING,
        target: targetGetter,
      });
      let i = 0;
      const realCheck = watcher.check;
      watcher.check = () => {
        realCheck();
        if (i === 0) {
          expect(watcher.currentDim).toEqual(new Dimension(200, 200));
          i++;
        } else if (i === 1) {
          expect(watcher.currentDim).toEqual(new Dimension(100, 200));
          watcher.stop();
          done();
        }
      };
      watcher.start();
      window.setTimeout(() => {
        x[0] = 100;
      }, 300);
    });
  });

  describe('.stop()', () => {
    it('should set watcher.isWatching to false', () => {
      const x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter });
      expect(watcher.isWatching).toBeFalsy();
      watcher.start();
      expect(watcher.isWatching).toBeTruthy();
      watcher.stop();
      expect(watcher.isWatching).toBeFalsy();
    });
    it('should not listen to window resize anymore', done => {
      const watcher = new Watcher();
      watcher.throttledCheck = () => {
        fail('should not check after stop');
      };
      watcher.start();
      watcher.stop();
      window.dispatchEvent(new Event('resize', { bubbles: true, cancelable: false }));
      window.setTimeout(() => done(), 600);
    });
    it('should not check every given interval anymore', done => {
      const x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({
        mode: Watcher.MODE_POLLING,
        target: targetGetter,
        interval: 100,
      });
      let i = 0;
      watcher.check = () => {
        if (i === 0) {
          i++;
        } else {
          fail('should not check after stop');
        }
      };
      watcher.start();
      window.setTimeout(() => watcher.stop(), 100);
      window.setTimeout(() => { x[0] = 100; }, 150);
      window.setTimeout(() => done(), 200);
    });
  });
});
