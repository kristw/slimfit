**Introduction** |
[API Reference](https://github.com/kristw/slimfit/blob/master/docs/api.md)

# slimfit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

Slim library for fitting and resizing boxes.

## Definition

For slimfit, a **box** is anything that has dimension:

1. DOM Element
2. Array `[width, height]`
3. Any Object with fields `width` and `height`.
4. Function that returns any of the above.

## Features

### 1. Fit one *box* into another *box* with `Fitter`

#### const fitter = new Fitter(fitOptions)

```javascript
import { Fitter } from 'slimfit';

// For basic fitting
const fitter = new Fitter({
  mode: 'basic', // if mode is not specified, use 'basic' by default
  width: '100%', // (optional) 100% of container
  height: 100    // (optional) 100 pixels
});

// To maintain aspect ratio of the content
const fitter2 = new Fitter({
  mode: 'aspectRatio',
  ratio: 16/9,
  maxWidth: 1600, // (optional)
  maxHeight: 900  // (optional)
});
```

The fields `width`, `height`, `maxWidth` and `maxHeight` in `fitOptions` can be:

* `'10%'` => 10% of container
* `10` => 10 pixels
* `'10px'` => 10 pixels
* `'10'` => 10 pixels
* `null` => (default) will make sure content is not larger than container

#### const result = fitter.fit(content, container)

Then you can compute how to fit `content` box into a `container` box. This `fit()` function returns an `Object` with two fields: `changed` and `dimension`. **Note that this function DOES NOT RESIZE `content` for you**. It only tells you if you need to resize and if so, what new size should the `content` be.

- **result.changed:***Boolean* is `true` if `content` need to be resized to the returned `dimension` in order to fit `container`. It is `false` if `content` is already fit. In the latter case, content's dimension is equal to the returned dimension.
- **result.dimension:***Dimension* is a `Dimension` object, which has field `width` and `height`. This is the dimension that will make the *content* fit *container* based on the given options when constructing the `Fitter`.

```javascript
// 1) Box can be DOM element
const result = fitter.fit(
  document.querySelector('.content'),
  document.querySelector('.container')
);
// result = { changed: true/false, dimension }
```

```javascript
// 2) Box can be any Object with field width and height
const result = fitter.fit(
  { width: 100, height: 200},
  { width: 400, height: 400}
);
// result = { changed: true/false, dimension }
```

```javascript
// 3) Box can be a dimension array: [width, height]
const result = fitter.fit(
  [100,200],
  [400,400]
);
// result = { changed: true/false, dimension }
```

```javascript
// 4) Also support getter function that returns any of the above
const result = fitter.fit(
  () => [100,200],
  () => [400,400]
);
// result = { changed: true/false, dimension }
```

### 2. Watch for *box* size change and gets notification with `Watcher`.

One repetitive task for making responsive component is to watch for size changes.

#### const watcher = new Watcher(watchOptions)

```javascript
import { Watcher } from 'slimfit';

const watcher = new Watcher({
  mode: 'window',
  target: null,
  interval: 500
})
.on('change', dimension => {
  // do something
})
.start();
```

##### watchOptions
* **mode:***String* -- A watcher can operates in two modes: `'window'` and `'polling'`. For *window* mode, it will check every time the window is resized. For *polling* mode, it will create a timer and check every `interval`. The latter is useful if the target can be resized without the entire window being resized.
* **target:***Box* -- Target *box* to check size. The watcher will dispatch event `'change'` if the size of the target has changed from last time. If not specified, will check window size.
* **interval:***Number* -- time in ms. For *window* mode, it will ensure that the *Watcher* does not fire more often than once every `interval` ms (i.e. throttled). For *polling*, this value will be used as an interval for the timer to check.

#### watcher.on(name, listener)
Add event listener

#### watcher.off(name, listener)
Remove event listener

#### watcher.start()
Start the watcher

#### watcher.stop()
Stop the watcher

### 3. Watch for box size change and only notifies if need to resize again to fit.

Now if you want to fit one *box* into another *box* and also make sure to do again that if anything was resized, `FitWatcher` is your solution. **Again, note that it does not resize the box for you. It only notifies that you need to resize and what the new dimension should be.**

#### new FitWatcher(content, container, fitOptions, watchOptions)

The arguments `fitOptions` uses the same specification explained in `Fitter` while `watchOptions` uses the specification from `Watcher`.

```javascript
import { FitWatcher } from 'slimfit';

const fitWatcher = new FitWatcher(
  document.querySelector('.content'),
  document.querySelector('.container'),
  fitOptions,
  watchOptions
)
.on('change', dimension => {
  // do something
})
.start();
```

#### fitWatcher.on(name, listener)
Add event listener

#### fitWatcher.off(name, listener)
Remove event listener

#### fitWatcher.start()
Start the watcher

#### fitWatcher.stop()
Stop the watcher

## Install

```
npm install slimfit --save
```

or

```
bower install slimfit --save
```

### Import into your project

##### Choice 1. Global

Adding this library via ```<script>``` tag is the simplest way. By doing this, ```slimfit``` is available in the global scope.

```html
<script src="bower_components/slimfit/dist/slimfit.min.js"></script>
```

##### Choice 2: ES6 Import

```javascript
import { Fitter, Watcher, FitWatcher } from 'slimfit';
```

##### Choice 3: AMD

If you use requirejs, this library support AMD out of the box.

```javascript
require.config({
  paths: {
    'slimfit': 'path/to/slimfit'
  }
});
require(['slimfit'], function(slimfit) {
  // do something with slimfit
});
```

##### Choice 4: node.js / browserify

This library also supports usage in commonjs style.

```javascript
var slimfit = require('slimfit');
// do something with slimfit
```

## License

© 2016 [Krist Wongsuphasawat](http://kristw.yellowpigz.com)  ([@kristw](https://twitter.com/kristw)) Apache-2.0 License

[npm-image]: https://badge.fury.io/js/slimfit.svg
[npm-url]: https://npmjs.org/package/slimfit
[travis-image]: https://travis-ci.org/kristw/slimfit.svg?branch=master
[travis-url]: https://travis-ci.org/kristw/slimfit
[daviddm-image]: https://david-dm.org/kristw/slimfit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kristw/slimfit