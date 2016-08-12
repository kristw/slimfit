import { isRequired, getDimension, parseModifier, prepareReturn } from './helper.js';

export function fit(
  box = isRequired('box'),
  container = isRequired('container'),
  options = {}
) {
  const {
    mode = 'basic',
    // for both mode
    width = '100%',
    height = null,
    // for aspectRatio mode
    ratio = 1,
  } = options;

  const [w, h] = getDimension(box);
  const [cw, ch] = getDimension(container);
  const wFn = parseModifier(width);
  const hFn = parseModifier(height);

  if (mode === 'aspectRatio') {
    const maxW = wFn(cw, cw);
    const maxH = hFn(ch, ch);
    const newWFromHeight = Math.floor(ratio * maxH);
    if (newWFromHeight <= maxW) {
      return prepareReturn(
        newWFromHeight,
        maxH,
        w,
        h
      );
    }
    return prepareReturn(
      maxW,
      Math.floor(maxW / ratio),
      w,
      h
    );
  }

  return prepareReturn(
    wFn(w, cw),
    hFn(h, ch),
    w,
    h
  );
}
