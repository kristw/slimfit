import slimfit from './main.js';

describe('slimfit', ()=>{
  describe('.fit(box, container, options)', ()=>{
    it('should throw error if box is missing', ()=>{
      expect(() => slimfit.fit()).toThrow();
    });
    it('should throw error if container is missing', ()=>{
      expect(() => slimfit.fit([100,200])).toThrow();
    });

    describe('when mode is "basic" (default)', ()=>{
      it('should fit container width but maintain same height by default', ()=>{
        expect(slimfit.fit(
          [100, 200],
          [200, 400]
        )).toEqual({
          width: 200,
          height: 200,
          changed: true
        });
      });
      describe('should fit container based on the given options {width, height}', ()=>{
        it('when both are null, do nothing', ()=>{
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: null,
              height: null,
            }
          )).toEqual({
            width: 100,
            height: 200,
            changed: false
          });
        });
        it('percentage', ()=>{
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: '100%',
              height: '50%',
            }
          )).toEqual({
            width: 200,
            height: 200,
            changed: true
          });
        });
        it('number string', ()=>{
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: '100',
              height: '50',
            }
          )).toEqual({
            width: 100,
            height: 50,
            changed: true
          });
        });
        it('number with string "px"', ()=>{
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: '100px',
              height: '50px',
            }
          )).toEqual({
            width: 100,
            height: 50,
            changed: true
          });
        });
        it('number', ()=>{
          expect(slimfit.fit(
            [100, 200], [200, 400], {
              width: 100,
              height: 200,
            }
          )).toEqual({
            width: 100,
            height: 200,
            changed: false
          });
        });
      });
    });

    describe('when mode is "aspectRatio"', ()=>{
      describe('return the new dimension that matches the aspect ratio', ()=>{
        it('when width and height are omit, use the container dimension', ()=>{
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 16/9
            }
          )).toEqual({
            width: 800,
            height: 450,
            changed: true
          });
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 9/16
            }
          )).toEqual({
            width: 450,
            height: 800,
            changed: true
          });
        });
        it('when width or height are set as fixed values, use them instead of container dimension', ()=>{
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 16/9,
              width: 400,
              height: 400,
            }
          )).toEqual({
            width: 400,
            height: 225,
            changed: true
          });
        });
        it('when width or height are set as percentage, apply them to container dimension', ()=>{
          expect(slimfit.fit(
            [100, 200], [800, 800], {
              mode: 'aspectRatio',
              ratio: 16/9,
              width: '50%',
              height: '50%',
            }
          )).toEqual({
            width: 400,
            height: 225,
            changed: true
          });
        });
      });
    });

  });
});