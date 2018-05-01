const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname,  '../dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
