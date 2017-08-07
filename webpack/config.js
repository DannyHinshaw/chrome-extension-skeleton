const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    background: './src/js/background',
    content: './src/js/content',
    devTools: './src/js/devTools',
    options: './src/js/options',
    popup: './src/js/popup',
    // styles: './src/styles/styles.scss'
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
      use: 'babel-loader',
      include: path.resolve(__dirname, '../src/js')
    },
    { // regular css files
      test: /\.css$/,
      include: path.resolve(__dirname, '../src/styles'),
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
      }),
    },
    { // sass / scss loader for webpack
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, '../src/styles'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader', // backup loader when not building .css file
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
  ]
};
