var path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    app: ['babel-polyfill','./src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',

  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  }
}
