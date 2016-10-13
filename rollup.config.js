import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');

export default {
  entry: 'src/main.js',
  plugins: [
    babel(babelrc())
  ],
  targets: [
    {
      dest: pkg['main'],
      format: 'umd',
      moduleName: 'slimfit',
      sourceMap: true
    }
  ]
};