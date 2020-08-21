const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { NoEmitOnErrorsPlugin } = require('webpack');
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: './src/client/index.js', // the module where webpack begins building
  output: { // where to emit the bundles (path and name)
    path: path.resolve(__dirname, 'dist'), // "dist" is the folder name (the file is index.html)
    filename: 'bundle.js', // outputs this file into the above 'dist' directory
  },
  devtool: 'eval-source-map',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      { // load JSX
        test: /\.jsx?/, // first rule runs a test
        exclude: /(node_modules)/, // dont run on node modules
        loader: 'babel-loader', // need this for the options
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // not sure I need the last one
        }
      },
      { // load CSS
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { // load SCSS
        test: /.(css|scss)$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader', // ! order is important!
          'css-loader',
          'sass-loader', // need an additional loader to handle the result of these loaders
        ],
      },
      { // load images
        test: /\.(png|jpe?g|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  devServer: {
    port: 8000,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // contentBase: path.resolve(__dirname, 'dist')
    proxy: {
      '/': {
        target: 'http://localhost:9000', // re-routes here for some requests
        secure: false,
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }), // generates a file dist/html
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

// I used this resource to help with the configuration:
// https://github.com/crsandeep/simple-react-full-stack