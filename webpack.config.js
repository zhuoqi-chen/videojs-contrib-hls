const path = require('path');

module.exports = {
  entry: './src/videojs-contrib-hls.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'videojs-contrib-hls.js',
    libraryTarget: 'common'
  },
  resolve: {
    alias: {
      webworkify: 'webworkify-webpack-dropin'
    }
  },
  externals: ['video.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
