import {
  isRequired,
  parseModifier,
  prepareReturn
} from './helper.js';

import Dimension from './dimension.js';

function fit(
  box = isRequired('box'),
  container = isRequired('container'),
  options = {}
) {
  const {
    mode = 'basic',
    // for both mode
    width = null,
    height = null,
    // for aspectRatio mode
    ratio = 1,
  } = options;

  const boxDim = new Dimension(box);
  const [w, h] = boxDim.toArray();
  const [cw, ch] = new Dimension(container).toArray();
  const wFn = parseModifier(width);
  const hFn = parseModifier(height);

  let dim;
  if (mode === 'aspectRatio') {
    const maxW = wFn(cw, cw);
    const maxH = hFn(ch, ch);
    const newWFromHeight = Math.floor(ratio * maxH);
    if (newWFromHeight <= maxW) {
      dim = new Dimension(newWFromHeight, maxH);
    } else {
      dim = new Dimension(maxW, Math.floor(maxW / ratio));
    }
  } else {
    dim = new Dimension(wFn(w, cw), hFn(h, ch));
  }

  return {
    dimension: dim,
    changed: !dim.isEqual(boxDim)
  };
}

export default { fit };
