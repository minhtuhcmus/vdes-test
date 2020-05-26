const path = require("path");
const webpack = require("webpack");

process.env.NODE_ENV = 'development'
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"],
    alias: {
      _utils: path.resolve(__dirname, 'src/utils'),
      _components: path.resolve(__dirname, 'src/components'),
      _pages: path.resolve(__dirname, 'src/pages'),
      _configs: path.resolve(__dirname, 'src/configs'),
      _constants: path.resolve(__dirname, 'src/constants'),
      _api: path.resolve(__dirname, 'src/api'),
      _src: path.resolve(__dirname, 'src'),
      _helpers: path.resolve(__dirname, 'src/helpers'),
      _layout: path.resolve(__dirname, 'src/layout'),
      _router: path.resolve(__dirname, 'src/router')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    host: '127.0.0.1',
    port: 5000,
    hot: true,
    quiet: true,
    inline: true,
    compress: true,
    watchContentBase: true,
    disableHostCheck: true,
    historyApiFallback: true,
    publicPath: "http://localhost:5000/dist/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};