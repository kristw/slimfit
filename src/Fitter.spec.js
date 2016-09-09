import Fitter from './Fitter.js';
import Dimension from './Dimension.js';

describe('Fitter', () => {
  describe('new Fitter(options)', () => {
    it('should initialize a new fitter object', () => {
      const fitter = new Fitter();
      expect(fitter).toBeDefined();
      expect(fitter.wFn).toBeDefined();
      expect(fitter.wFn).toEqual(jasmine.any(Function));
      expect(fitter.hFn).toBeDefined();
      expect(fitter.hFn).toEqual(jasmine.any(Function));
    });
    it('should use basic mode by default', () => {
      const fitter = new Fitter();
      expect(fitter.options.mode).toEqual(Fitter.MODE_BASIC);
    });
    it('should set the mode from given options', () => {
      const fitter = new Fitter({
        mode: Fitter.MODE_ASPECT_RATIO,
      });
      expect(fitter.options.mode).toEqual(Fitter.MODE_ASPECT_RATIO);
    });
  });

  describe('.fit(box, container)', () => {
    describe('require parameters', () => {
      const fitter = new Fitter();
      it('should throw error if box is missing', () => {
        expect(() => fitter.fit()).toThrow();
      });
      it('should throw error if container is missing', () => {
        expect(() => fitter.fit([100, 200])).toThrow();
      });
    });

    describe('for Fitter.MODE_BASIC (default)', () => {
      it('should scale to full width but do not change height by default', () => {
        const fitter = new Fitter();
        expect(fitter.fit(
          [100, 200],
          [200, 400]
        )).toEqual({
          dimension: new Dimension(200, 200),
          changed: true,
        });
      });

      describe('if options.width', () => {
        it('is null and box width <= container width, will return width = box width', () => {
          const fitter = new Fitter({ width: null });
          const result = fitter.fit([100, 200], [200, 400]);
          expect(result.dimension.width).toEqual(100);
          expect(result.changed).toEqual(false);
        });
        it('is null and box width > container width, will return width = container width', () => {
          const fitter = new Fitter({ width: null });
          const result = fitter.fit([300, 200], [200, 400]);
          expect(result.dimension.width).toEqual(200);
          expect(result.changed).toEqual(true);
        });
        it('is "x%", will return width = x% of container width', () => {
          const fitter = new Fitter({ width: '50%' });
          const result = fitter.fit([300, 200], [200, 400]);
          expect(result.dimension.width).toEqual(100);
          expect(result.changed).toEqual(true);
        });
        it('is a number string "100", will return width = number value 100', () => {
          const fitter = new Fitter({ width: '100' });
          const result = fitter.fit([300, 200], [200, 400]);
          expect(result.dimension.width).toEqual(100);
          expect(result.changed).toEqual(true);
        });
        it('is a number x, will return width = x', () => {
          const fitter = new Fitter({ width: 100 });
          const result = fitter.fit([300, 200], [200, 400]);
          expect(result.dimension.width).toEqual(100);
          expect(result.changed).toEqual(true);
        });
        it('is "...px", will return width = number ...', () => {
          const fitter = new Fitter({ width: '100px' });
          const result = fitter.fit([300, 200], [200, 400]);
          expect(result.dimension.width).toEqual(100);
          expect(result.changed).toEqual(true);
        });
      });

      describe('if options.height', () => {
        it('is null and box height <= container height, will return height = box height', () => {
          const fitter = new Fitter({ width: null, height: null });
          const result = fitter.fit([200, 200], [200, 400]);
          expect(result.dimension.height).toEqual(200);
          expect(result.changed).toEqual(false);
        });
        it('is null and box height > container height, will return height = container height', () => {
          const fitter = new Fitter({ height: null });
          const result = fitter.fit([200, 500], [200, 400]);
          expect(result.dimension.height).toEqual(400);
          expect(result.changed).toEqual(true);
        });
        it('is "x%", will return height = x% of container height', () => {
          const fitter = new Fitter({ height: '50%' });
          const result = fitter.fit([200, 200], [200, 400]);
          expect(result.dimension.height).toEqual(200);
          expect(result.changed).toEqual(false);
        });
        it('is a number string "100", will return height = number value 100', () => {
          const fitter = new Fitter({ height: '100' });
          const result = fitter.fit([200, 200], [200, 400]);
          expect(result.dimension.height).toEqual(100);
          expect(result.changed).toEqual(true);
        });
        it('is a number x, will return height = x', () => {
          const fitter = new Fitter({ height: 100 });
          const result = fitter.fit([200, 200], [200, 400]);
          expect(result.dimension.height).toEqual(100);
          expect(result.changed).toEqual(true);
        });
        it('is "...px", will return height = number ...', () => {
          const fitter = new Fitter({ height: '100px' });
          const result = fitter.fit([200, 200], [200, 400]);
          expect(result.dimension.height).toEqual(100);
          expect(result.changed).toEqual(true);
        });
      });
    });

    describe('for Fitter.MODE_ASPECT_RATIO', () => {
      it('when maxWidth and maxHeight are omit, use the container dimension as bounding box', () => {
        const fitter = new Fitter({
          mode: Fitter.MODE_ASPECT_RATIO,
          ratio: 16 / 9,
        });
        expect(fitter.fit([100, 200], [800, 800]))
          .toEqual({
            dimension: new Dimension(800, 450),
            changed: true,
          });

        const fitter2 = new Fitter({
          mode: Fitter.MODE_ASPECT_RATIO,
          ratio: 9 / 16,
        });
        expect(fitter2.fit([100, 200], [800, 800]))
          .toEqual({
            dimension: new Dimension(450, 800),
            changed: true,
          });
      });

      it('when maxWidth or maxHeight are set as fixed values, use them as bounding box', () => {
        const fitter = new Fitter({
          mode: Fitter.MODE_ASPECT_RATIO,
          ratio: 16 / 9,
          maxWidth: 400,
          maxHeight: 400,
        });
        expect(fitter.fit([100, 200], [800, 800]))
          .toEqual({
            dimension: new Dimension(400, 225),
            changed: true,
          });
      });

      it('when maxWidth or maxHeight are set as percentage, apply them to container dimension to compute bounding box', () => {
        const fitter = new Fitter({
          mode: Fitter.MODE_ASPECT_RATIO,
          ratio: 16 / 9,
          maxWidth: '50%',
          maxHeight: '50%',
        });
        expect(fitter.fit([100, 200], [800, 800]))
          .toEqual({
            dimension: new Dimension(400, 225),
            changed: true,
          });
      });
    });
  });
});
