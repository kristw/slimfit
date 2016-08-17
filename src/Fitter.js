import Dimension from './Dimension.js';
import { isRequired, parseModifier } from './helper.js';

class Fitter {
  constructor(options = {}) {
    const {
      mode = Fitter.MODE_BASIC,
      // for basic mode
      width = '100%',
      height = null,
      // for aspectRatio mode
      ratio = 1,
      maxWidth = null,
      maxHeight = null,
    } = options;

    if (mode === Fitter.MODE_ASPECT_RATIO) {
      this.wFn = parseModifier(maxWidth);
      this.hFn = parseModifier(maxHeight);
      this.options = {
        mode,
        ratio,
        maxWidth,
        maxHeight,
      };
    } else {
      this.wFn = parseModifier(width);
      this.hFn = parseModifier(height);
      this.options = {
        mode,
        width,
        height,
      };
    }
  }

  fit(
    box = isRequired('box'),
    container = isRequired('container')
  ) {
    const boxDim = new Dimension(box);
    const w = boxDim.width;
    const h = boxDim.height;
    const containerDim = new Dimension(container);
    const cw = containerDim.width;
    const ch = containerDim.height;

    let dim;
    if (this.options.mode === Fitter.MODE_ASPECT_RATIO) {
      const ratio = this.options.ratio;
      const maxW = this.wFn(cw, cw);
      const maxH = this.hFn(ch, ch);
      const newWFromHeight = Math.floor(ratio * maxH);
      if (newWFromHeight <= maxW) {
        dim = new Dimension(newWFromHeight, maxH);
      } else {
        dim = new Dimension(maxW, Math.floor(maxW / ratio));
      }
    } else {
      dim = new Dimension(
        this.wFn(w, cw),
        this.hFn(h, ch)
      );
    }

    return {
      dimension: dim,
      changed: !dim.isEqual(boxDim),
    };
  }
}

Fitter.MODE_BASIC = 'basic';
Fitter.MODE_ASPECT_RATIO = 'aspectRatio';

export default Fitter;
