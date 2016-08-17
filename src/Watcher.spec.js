import Watcher from './Watcher.js';

describe('Watcher', ()=>{
  describe('new Watcher(options)', ()=>{
    it('should create a window watcher by default', ()=>{
      const watcher = new Watcher();
      expect(watcher.type).toEqual(Watcher.TYPE_WINDOW);
    });

    it('should create a polling watcher if options.type is Watcher.TYPE_POLLING', ()=>{
      const watcher = new Watcher({
        type: Watcher.TYPE_POLLING,
        target: [200, 200],
      });
      expect(watcher.type).toEqual(Watcher.TYPE_POLLING);
    });

    it('should throw error if options.type is Watcher.TYPE_POLLING but options.target is not specified', ()=>{
      expect(() => new Watcher({
        type: Watcher.TYPE_POLLING
      })).toThrow();
    });
  });

  describe('.hasTargetChanged()', ()=>{
    it('should always return true if target is not defined', ()=>{
      const watcher = new Watcher();
      expect(watcher.hasTargetChanged()).toBeTruthy();
      expect(watcher.hasTargetChanged()).toBeTruthy();
    });
    it('should return false if target has not changed since last time this function is called.', ()=>{
      let x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter });
      expect(watcher.hasTargetChanged()).toBeTruthy();
      expect(watcher.hasTargetChanged()).toBeFalsy();
      x = [200, 200];
      expect(watcher.hasTargetChanged()).toBeFalsy();
    });
    it('should return true if target has changed since last time this function is called.', ()=>{
      let x = [200, 200];
      function targetGetter() { return x; }
      const watcher = new Watcher({ target: targetGetter });
      expect(watcher.hasTargetChanged()).toBeTruthy();
      x = [100, 100];
      expect(watcher.hasTargetChanged()).toBeTruthy();
    });
  });

});
