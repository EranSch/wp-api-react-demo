const path = require('path');
const webpack = require('webpack');

const APPPATH = path.resolve(__dirname, 'app');

module.exports = {
  context: APPPATH,
  entry: ['webpack-dev-server/client?http://localhost:8080', './main.jsx' ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APPPATH
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    contentBase: "./",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
