const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,  '../dist'),
    filename: 'client.js',
    publicPath: '/'
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  }
}
