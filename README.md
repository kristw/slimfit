**Introduction** |
[Demo](https://kristw.github.io/slimfit) |
[API Reference](https://github.com/kristw/slimfit/blob/master/docs/api.md)

# slimfit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

Slim library for fitting things

## Features

### 1. Fit one box into another box

To fit one box into another, first initialize a fitter with `new Fitter(fitOptions)`.

```javascript
// For basic fitting
import { Fitter } from 'slimfit';

const fitter = new Fitter({
  mode: 'basic', // if mode is not specified, use 'basic' by default
  width: '100%', // (optional) 100% of container
  height: 100    // (optional) 100 pixels
});

// To keep aspect ratio of the content
const fitter2 = new Fitter({
  mode: 'aspectRatio',
  ratio: 16/9,
  maxWidth: 1600, // (optional)
  maxHeight: 900  // (optional)
});
```

The options `width`, `height`, `maxWidth`, `maxHeight` can be:

* `'10%'` => 10% of container
* `10` => 10 pixels
* `'10px'` => 10 pixels
* `'10'` => 10 pixels
* `null` => (default) will make sure content is not larger than container

Then call `.fit(content, container)`, which will return result with two fields: `changed` and `dimension`.

- **changed:boolean** is true if the *content* need to be resized to the returned `dimension` in order to fit the *container*. It is false if the *content* is already fit (content's dimension == returned dimension).
- **dimension:Dimension** is a `Dimension` object, which has field `width` and `height`. This is the dimension that will make the *content* fit *container* based on the given options when constructing the `Fitter`.

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

### 2. Watch for box size change and notifies.

```javascript
import { Watcher } from 'slimfit';

const watcher = new Watcher({
  type: 'window',
  target: null,
  interval: 500
})
.on('change', dimension => { 
  // do something
})
.start();

```

### 3. Watch for box size change and notifies if need to resize again to fit.


```javascript
import { FitWatcher } from 'slimfit';

const fitWatcher = new FitWatcher(
  content,
  container,
  fitOptions,
  watchOptions
)
.on('change', dimension => { 
  // do something
})
.start();

```

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