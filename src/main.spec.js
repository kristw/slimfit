import * as slimfit from './main.js';

describe('slimfit', () => {
  it('should have class Dimension', () => {
    expect(slimfit.Dimension).toBeDefined();
    expect(slimfit.Dimension).toEqual(jasmine.any(Function));
  });
  it('should have class Fitter', () => {
    expect(slimfit.Fitter).toBeDefined();
    expect(slimfit.Fitter).toEqual(jasmine.any(Function));
  });
  it('should have class Watcher', () => {
    expect(slimfit.Watcher).toBeDefined();
    expect(slimfit.Watcher).toEqual(jasmine.any(Function));
  });
  it('should have class FitWatcher', () => {
    expect(slimfit.FitWatcher).toBeDefined();
    expect(slimfit.FitWatcher).toEqual(jasmine.any(Function));
  });
});
