const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

// WebpackConfig
const webpack = (env, argv) => {
  // - - - - - - - - - - - -
  // General
  // - - - - - - - - - - - -
  // Define configuration constants
  const useDevServer = false
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
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin()
    ]
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
    title: 'Days Between Dates',
    base: isProduction ? 'https://zacarias-wichipu-com.github.io/days-between-dates/' : '/'
  })

  // MiniCssExtractPlugin
  const MiniCssExtract = new MiniCssExtractPlugin({
    filename: 'app.css',
    chunkFilename: '[id].css',
    ignoreOrder: false
  })

  // MiniCssExtractPlugin
  const CopyPlugin = new CopyWebpackPlugin([
    { from: './assets/static', to: 'assets' }
  ])

  // WebpackManifestPlugin
  const ManifestPlugin = new WebpackManifestPlugin({
    basePath: baseFolder + '/',
    writeToFileEmit: true
  })

  // Plugins
  const plugins = [
    CleanWebpack,
    HtmlWebpack,
    MiniCssExtract,
    CopyPlugin,
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
    loader: 'file-loader'
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
      filename: 'app.js',
      publicPath: publicPath
    }
  }
}

module.exports = webpack
