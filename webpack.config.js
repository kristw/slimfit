'use strict';

var webpack = require('webpack');

// Detect environment
var isProduction = process.env.NODE_ENV === 'production';

// Create config
var config = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [],
  devtool: isProduction ? undefined : 'eval'
};

module.exports = config;
