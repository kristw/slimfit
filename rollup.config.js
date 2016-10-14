import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/main.js',
  plugins: [
    nodeResolve(),
    babel(babelrc())
  ],
  external: id => false,
  targets: [
    {
      dest: 'dist/slimfit.js',
      format: 'umd',
      moduleName: 'slimfit',
      sourceMap: true
    },
    {
      dest: 'dist/slimfit-es.js',
      format: 'es'
    }
  ]
};