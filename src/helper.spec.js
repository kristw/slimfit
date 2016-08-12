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

  describe('.parseModifier(value)', ()=>{
    it('should return a function fn(size, containerSize)', ()=>{
      expect(parseModifier(null)).toEqual(jasmine.any(Function));
      expect(parseModifier('100%')).toEqual(jasmine.any(Function));
      expect(parseModifier('100')).toEqual(jasmine.any(Function));
      expect(parseModifier(100)).toEqual(jasmine.any(Function));
    });
    it('if value is not defined, fn returns boxSize', ()=>{
      expect(parseModifier(null)(10,20)).toEqual(10);
      expect(parseModifier(undefined)(10,20)).toEqual(10);
    });
    it('if value is a percentage, fn returns percent * containerSize', ()=>{
      expect(parseModifier('100%')(10,20)).toEqual(20);
      expect(parseModifier('80%')(10,20)).toEqual(16);
      expect(parseModifier('80 %')(10,20)).toEqual(16);
    });
    it('otherwise, fn returns value as a Number', ()=>{
      expect(parseModifier('100')(10,20)).toEqual(100);
      expect(parseModifier('80px')(10,20)).toEqual(80);
      expect(parseModifier(80)(10,20)).toEqual(80);
    });
  });

  describe('.prepareReturn(newW, newH, w, h)', ()=>{
    it('should return an object {width, height, changed}', ()=>{
      expect(prepareReturn(100, 200, 100, 200)).toEqual({
        width: 100,
        height: 200,
        changed: false
      });
      expect(prepareReturn(100, 200, 50, 60)).toEqual({
        width: 100,
        height: 200,
        changed: true
      })
    });
  });

});
