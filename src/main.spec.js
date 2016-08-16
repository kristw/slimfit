import slimfit from './main.js';
import Dimension from './dimension.js';

describe('slimfit', () => {
  describe('.fit(box, container, options)', () => {
    it('should throw error if box is missing', () => {
      expect(() => slimfit.fit()).toThrow();
    });
    it('should throw error if container is missing', () => {
      expect(() => slimfit.fit([100, 200])).toThrow();
    });

    describe('when mode is "basic" (default)', () => {
      it('should scale to full width by default', () => {
        expect(slimfit.fit(
          [100, 200],
          [200, 400]
        )).toEqual({
          dimension: new Dimension(200, 200),
          changed: true,
        });
      });
      describe('should fit container based on the given options {width, height}', () => {
        it('when both are null, do nothing if the box already fits within the container', () => {
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: null,
              height: null,
            }
          )).toEqual({
            dimension: new Dimension(100, 200),
            changed: false,
          });
        });
        it('when both are null, make the box to fit within the container', () => {
          expect(slimfit.fit(
            [300, 500], [200, 400], {
              width: null,
              height: null,
            }
          )).toEqual({
            dimension: new Dimension(200, 400),
            changed: true,
          });
        });
        it('percentage - will make the box become % of container', () => {
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: '100%',
              height: '50%',
            }
          )).toEqual({
            dimension: new Dimension(200, 200),
            changed: true,
          });
        });
        it('number string - will make the box dimension that value', () => {
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: '100',
              height: '50',
            }
          )).toEqual({
            dimension: new Dimension(100, 50),
            changed: true,
          });
        });
        it('number with string "px" - will make the box dimension that value', () => {
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: '100px',
              height: '50px',
            }
          )).toEqual({
            dimension: new Dimension(100, 50),
            changed: true,
          });
        });
        it('number - will make the box dimension that value', () => {
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: 100,
              height: 200,
            }
          )).toEqual({
            dimension: new Dimension(100, 200),
            changed: false,
          });
        });
      });
    });

    describe('when mode is "aspectRatio"', () => {
      describe('return the new dimension that matches the aspect ratio', () => {
        it('when width and height are omit, use the container dimension', () => {
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 16 / 9,
            }
          )).toEqual({
            dimension: new Dimension(800, 450),
            changed: true,
          });
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 9 / 16,
            }
          )).toEqual({
            dimension: new Dimension(450, 800),
            changed: true,
          });
        });
        it('when width or height are set as fixed values, return them as dimension', () => {
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 16 / 9,
              maxWidth: 400,
              maxHeight: 400,
            }
          )).toEqual({
            dimension: new Dimension(400, 225),
            changed: true,
          });
        });
        it('when width or height are set as percentage, apply them to container dimension', () => {
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 16 / 9,
              maxWidth: '50%',
              maxHeight: '50%',
            }
          )).toEqual({
            dimension: new Dimension(400, 225),
            changed: true,
          });
        });
      });
    });
  });
});
