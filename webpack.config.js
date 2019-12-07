const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// WebpackConfig
const webpack = (env, argv) => {
  // - - - - - - - - - - - -
  // General
  // - - - - - - - - - - - -
  // Define configuration constants
  const useDevServer = false
  const useVersioning = true
  const mode = argv.mode || 'development'
  const baseFolder = 'dist'
  const publicPath = useDevServer ? 'https://localhost:8080/' : '/'
  const isProduction = mode === 'production'
  const useSourcemaps = !isProduction

  // devServer
  const devServer = {
    contentBase: path.resolve('./', baseFolder),
    hot: true,
    https: true
  }

  // Optimization
  const optimization = {
    splitChunks: {
      name: !isProduction
    },
    hashedModuleIds: isProduction,
    minimizer: []
  }

  if (isProduction) {
    optimization.minimizer.push(new OptimizeCssAssetsWebpackPlugin())
    optimization.minimizer.push(new TerserPlugin())
  }

  // - - - - - - - - - - - -
  // Plugins
  // - - - - - - - - - - - -
  // HtmlWebpackPlugin
  const CleanWebpack = new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore']
  })

  // HtmlWebpackPlugin
  const HtmlWebpack = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    title: 'Days Between Dates'
  })

  // MiniCssExtractPlugin
  const MiniCssExtract = new MiniCssExtractPlugin({
    filename: useVersioning ? '[name].[contenthash:6].css' : '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false
  })

  // WebpackManifestPlugin
  const ManifestPlugin = new WebpackManifestPlugin({
    basePath: '/',
    writeToFileEmit: true
  })

  // Plugins
  const plugins = [
    CleanWebpack,
    HtmlWebpack,
    MiniCssExtract,
    ManifestPlugin
  ]

  // - - - - - - - - - - - -
  // Loaders
  // - - - - - - - - - - - -
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

  // File loader
  const fileLoader = {
    loader: 'file-loader',
    options: {
      name: '[name]-[hash:6].[ext]'
    }
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

  // - - - - - - - - - - - -
  // Rules
  // - - - - - - - - - - - -
  // JS Rules
  const jsRule = {
    test: /\.jsx?$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
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

  // Image Rules
  const imageRules = {
    test: /\.(png|jpg|jpeg|gif|ico|svg)$/i,
    use: [
      fileLoader
    ]
  }

  // Typography Rules
  const typoRules = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    use: [
      fileLoader
    ]
  }

  // Rules
  const rules = [
    jsRule,
    cssRule,
    sassRules,
    imageRules,
    typoRules
  ]

  // - - - - - - - - - - - -
  // Webpack Config Object
  // - - - - - - - - - - - -
  return {
    mode: mode,
    entry: './src/app.jsx',
    module: {
      rules: rules
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: useSourcemaps ? 'inline-source-map' : false,
    devServer: devServer,
    optimization: optimization,
    plugins: plugins,
    output: {
      path: path.resolve(__dirname, baseFolder),
      filename: useVersioning ? '[name].[hash:6].js' : '[name].js',
      publicPath: publicPath
    }
  }
}

module.exports = webpack
