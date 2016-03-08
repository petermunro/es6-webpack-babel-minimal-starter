module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'build/bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /lib/
        ],
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
