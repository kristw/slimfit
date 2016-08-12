import {
  isRequired,
  isDefined,
  isNotDefined,
  getDimension,
  parseModifier,
  prepareReturn
} from './helper.js';

describe('helper', () => {
  describe('.isRequired(name)', ()=>{
    it('should throw error', ()=>{
      expect(() => isRequired('name')).toThrow();
    });
  });

  describe('.isDefined(x)', ()=>{
    it('should return true if value is not null nor undefined', ()=>{
      expect(isDefined(0)).toBeTruthy();
      expect(isDefined(1)).toBeTruthy();
      expect(isDefined('a')).toBeTruthy();
    });
    it('should return false otherwise', ()=>{
      expect(isDefined(null)).toBeFalsy();
      expect(isDefined(undefined)).toBeFalsy();
    });
  });

  describe('.isNotDefined(x)', ()=>{
    it('should return true if value is not null nor undefined', ()=>{
      expect(isNotDefined(null)).toBeTruthy();
      expect(isNotDefined(undefined)).toBeTruthy();
    });
    it('should return false otherwise', ()=>{
      expect(isNotDefined(0)).toBeFalsy();
      expect(isNotDefined(1)).toBeFalsy();
      expect(isNotDefined('a')).toBeFalsy();
    });
  });

  describe('.getDimension(boxOrBoxGetter)', ()=>{
    describe('when box is a function', ()=>{
      it('should return dimension from DOMNode', ()=>{
        const element = document.body.appendChild(document.createElement('div'));
        element.style.width = '100px';
        element.style.height = '200px';
        expect(getDimension(element)).toEqual([100,200]);
      });
      it('should return dimension from Array', ()=>{
        expect(getDimension(() => [100,200])).toEqual([100,200]);
      });
      it('should return dimension from Object with field width and height', ()=>{
        expect(getDimension(() => ({
          width: 100,
          height: 200,
        }))).toEqual([100,200]);
      });
      it('should throw error otherwise', ()=>{
        expect(() => getDimension(() => {})).toThrow();
      });
    });
    describe('when box is not a function', ()=>{
      it('should return dimension from DOMNode', ()=>{
        const element = document.body.appendChild(document.createElement('div'));
        element.style.width = '100px';
        element.style.height = '200px';
        expect(getDimension(() => element)).toEqual([100,200]);
      });
      it('should return dimension from Array', ()=>{
        expect(getDimension([100,200])).toEqual([100,200]);
      });
      it('should return dimension from Object with field width and height', ()=>{
        expect(getDimension({
          width: 100,
          height: 200,
        })).toEqual([100,200]);
      });
      it('should throw error otherwise', ()=>{
        expect(() => getDimension({})).toThrow();
      });
    });
  });


});
