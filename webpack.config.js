const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// WebpackConfig
const webpack = (env, argv) => {
  // Define configuration constants
  const useDevServer = false
  const mode = argv.mode || 'development'
  const publicPath = useDevServer ? 'http://localhost:8080/' : '/'
  const isProduction = mode === 'production'
  const useSourcemaps = !isProduction

  // devServer
  const devServer = {
    contentBase: './dist',
    hot: true
  }

  // HtmlWebpackPlugin
  const HtmlWebpack = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
  })

  // Plugins
  const plugins = [
    new CleanWebpackPlugin(),
    HtmlWebpack
  ]

  return {
    mode: mode,
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
    devtool: useSourcemaps ? 'inline-source-map' : false,
    devServer: devServer,
    plugins: plugins,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: publicPath
    }
  }
}

module.exports = webpack
