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
  mode: 'development',
  entry: './src/index.jsx',
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
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: plugins,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = webpackConfig
