**Introduction** |
[Demo](https://kristw.github.io/slimfit) |
[API Reference](https://github.com/kristw/slimfit/blob/master/docs/api.md)

# slimfit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

Slim library for fitting things

### Install

```
npm install slimfit --save
```

or

```
bower install slimfit --save
```

### Example Usage

TBD

### Import into your project

##### Choice 1. Global

Adding this library via ```<script>``` tag is the simplest way. By doing this, ```slimfit``` is available in the global scope.

```html
<script src="bower_components/slimfit/dist/slimfit.min.js"></script>
```

##### Choice 2: AMD

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

##### Choice 3: node.js / browserify

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