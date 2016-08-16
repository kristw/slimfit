import Dimension from './dimension.js';

describe('Dimension', () => {
  describe('constructor(inputOrGetter)', () => {
    describe('when input is a getter function', () => {
      it('should return dimension from DOMNode', () => {
        const element = document.body.appendChild(document.createElement('div'));
        element.style.width = '100px';
        element.style.height = '200px';
        expect(new Dimension(element))
          .toEqual(new Dimension([100, 200]));
      });
      it('should return dimension from Array', () => {
        expect(new Dimension(() => [100, 200]))
          .toEqual(new Dimension([100, 200]));
      });
      it('should return dimension from Object with field width and height', () => {
        expect(new Dimension(() => ({
          width: 100,
          height: 200,
        })))
          .toEqual(new Dimension([100, 200]));
      });
      it('should throw error otherwise', () => {
        expect(() => new Dimension(() => {})).toThrow();
      });
    });
    describe('when input is not a function', () => {
      it('should return dimension from DOMNode', () => {
        const element = document.body.appendChild(document.createElement('div'));
        element.style.width = '100px';
        element.style.height = '200px';
        expect(new Dimension(() => element))
          .toEqual(new Dimension([100, 200]));
      });
      it('should return dimension from Array', () => {
        expect(new Dimension([100, 200]))
          .toEqual(new Dimension([100, 200]));
      });
      it('should return dimension from Object with field width and height', () => {
        expect(new Dimension({
          width: 100,
          height: 200,
        }))
          .toEqual(new Dimension([100, 200]));
      });
      it('should throw error otherwise', () => {
        expect(() => new Dimension({})).toThrow();
      });
    });
  });
});

