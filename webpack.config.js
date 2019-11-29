const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// HtmlWebpackPlugin
const HtmlWebpack = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  title: 'Days Between Dates'
})

// Plugins
const plugins = [
  new CleanWebpackPlugin(),
  HtmlWebpack
]

// WebpackConfig
const webpackConfig = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: plugins
}

module.exports = webpackConfig
