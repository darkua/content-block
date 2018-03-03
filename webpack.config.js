var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['babel-polyfill','./src/index.js']
  },
  output: {
    path: resolve("dist"),
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
