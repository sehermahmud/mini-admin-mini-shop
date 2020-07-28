const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    shop: './src/non-optimized/shop.js'
  },
  output: {
    path: __dirname + '/dist/assets/scripts',
    filename: '[name].js',
    publicPath: 'assets/scripts/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3 } }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/assets/scripts'],
      notify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'dist/index.html',
    })
  ],
  watch: true,
  devtool: 'source-map'
}
