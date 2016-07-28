'use strict';

const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: 'entry.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractText('bundle.css')
  ],
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_module/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: ExtractText.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  postcss: function(){
    return [autoprefixer];
  }

};
