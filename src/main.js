import Dimension from './dimension.js';
import { isRequired, parseModifier } from './helper.js';

function fit(
  box = isRequired('box'),
  container = isRequired('container'),
  options = {}
) {
  const {
    mode = 'basic',
    // for basic mode
    width = null,
    height = null,
    // for aspectRatio mode
    ratio = 1,
    maxWidth = null,
    maxHeight = null,
  } = options;

  const boxDim = new Dimension(box);
  const w = boxDim.width;
  const h = boxDim.height;
  const containerDim = new Dimension(container);
  const cw = containerDim.width;
  const ch = containerDim.height;

  let dim;
  if (mode === 'aspectRatio') {
    const wFn = parseModifier(maxWidth);
    const hFn = parseModifier(maxHeight);
    const maxW = wFn(cw, cw);
    const maxH = hFn(ch, ch);
    const newWFromHeight = Math.floor(ratio * maxH);
    if (newWFromHeight <= maxW) {
      dim = new Dimension(newWFromHeight, maxH);
    } else {
      dim = new Dimension(maxW, Math.floor(maxW / ratio));
    }
  } else {
    const wFn = parseModifier(width);
    const hFn = parseModifier(height);
    dim = new Dimension(wFn(w, cw), hFn(h, ch));
  }

  return {
    dimension: dim,
    changed: !dim.isEqual(boxDim)
  };
}

export default { fit };
