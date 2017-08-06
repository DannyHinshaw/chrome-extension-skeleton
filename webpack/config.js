const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    background: './src/js/background',
    content: './src/js/content',
    devTools: './src/js/devTools',
    options: './src/js/options',
    popup: './src/js/popup'
  },
  output: {
    filename: './js/[name].js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, '../src/js'),
      query: {
        presets: ['es2015', 'stage-1']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/common.css', {
      allChunks: true
    })
  ]

};
