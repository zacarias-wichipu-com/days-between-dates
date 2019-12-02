const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

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

  // MiniCssExtractPlugin
  const MiniCssExtract = new MiniCssExtractPlugin({
    filename: 'app.css',
    chunkFilename: '[id].css',
    ignoreOrder: false
  })

  // Plugins
  const plugins = [
    new CleanWebpackPlugin(),
    HtmlWebpack,
    MiniCssExtract
  ]

  // Optimization
  const optimization = {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin()
    ]
  }

  // MiniCssExtractPlugin loader
  const miniCssExtractPluginLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../',
      hmr: !isProduction
    }
  }

  // Style loader
  const styleLoader = {
    loader: 'style-loader'
  }

  // CSS loader
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: useSourcemaps
    }
  }

  // SCSS/SASS loader
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: useSourcemaps
    }
  }

  // JS Rules
  const jsRule = {
    test: /\.jsx?$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }

  // CSS Rules
  const cssRule = {
    test: /\.css$/i,
    use: [
      !isProduction ? styleLoader : miniCssExtractPluginLoader,
      cssLoader
    ]
  }

  // Sass/SCSS Rules
  const sassRules = {
    test: /\.s[ac]ss$/i,
    use: [
      !isProduction ? styleLoader : miniCssExtractPluginLoader,
      cssLoader,
      sassLoader
    ]
  }

  // Rules
  const rules = [
    jsRule,
    cssRule,
    sassRules
  ]

  return {
    mode: mode,
    entry: './src/app.jsx',
    module: {
      rules: rules
    },
    devtool: useSourcemaps ? 'inline-source-map' : false,
    devServer: devServer,
    optimization: optimization,
    plugins: plugins,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: publicPath
    }
  }
}

module.exports = webpack
