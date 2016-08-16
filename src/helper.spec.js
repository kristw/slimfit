import {
  isRequired,
  isDefined,
  isNotDefined,
  parseModifier,
} from './helper.js';

describe('helper', () => {
  describe('.isRequired(name)', () => {
    it('should throw error', () => {
      expect(() => isRequired('name')).toThrow();
    });
  });

  describe('.isDefined(x)', () => {
    it('should return true if value is not null nor undefined', () => {
      expect(isDefined(0)).toBeTruthy();
      expect(isDefined(1)).toBeTruthy();
      expect(isDefined('a')).toBeTruthy();
    });
    it('should return false otherwise', () => {
      expect(isDefined(null)).toBeFalsy();
      expect(isDefined(undefined)).toBeFalsy();
    });
  });

  describe('.isNotDefined(x)', () => {
    it('should return true if value is not null nor undefined', () => {
      expect(isNotDefined(null)).toBeTruthy();
      expect(isNotDefined(undefined)).toBeTruthy();
    });
    it('should return false otherwise', () => {
      expect(isNotDefined(0)).toBeFalsy();
      expect(isNotDefined(1)).toBeFalsy();
      expect(isNotDefined('a')).toBeFalsy();
    });
  });

  describe('.parseModifier(value)', () => {
    it('should return a function fn(size, containerSize)', () => {
      expect(parseModifier(null)).toEqual(jasmine.any(Function));
      expect(parseModifier('100%')).toEqual(jasmine.any(Function));
      expect(parseModifier('100')).toEqual(jasmine.any(Function));
      expect(parseModifier(100)).toEqual(jasmine.any(Function));
    });
    it('if value is not defined, fn returns boxSize', () => {
      expect(parseModifier(null)(10, 20)).toEqual(10);
      expect(parseModifier(undefined)(10, 20)).toEqual(10);
    });
    it('if value is a percentage, fn returns percent * containerSize', () => {
      expect(parseModifier('100%')(10, 20)).toEqual(20);
      expect(parseModifier('80%')(10, 20)).toEqual(16);
      expect(parseModifier('80 %')(10, 20)).toEqual(16);
    });
    it('otherwise, fn returns value as a Number', () => {
      expect(parseModifier('100')(10, 20)).toEqual(100);
      expect(parseModifier('80px')(10, 20)).toEqual(80);
      expect(parseModifier(80)(10, 20)).toEqual(80);
    });
  });
});
