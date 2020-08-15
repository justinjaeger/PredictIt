const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
  mode: 'development',
  entry: './src/client/index.js', // the module where webpack begins building its dependency graph
  output: { // where to emit the bundles (path and name)
    path: path.resolve(__dirname, 'dist'), // "dist" is the folder name (the file is index.html)
    filename: 'bundle.js', // outputs this file into the above 'dist' directory
  },
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
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: [
          'style-loader', // ! order is important!
          'css-loader',
          'sass-loader', // need an additional loader to handle the result of these loaders
        ],
      }
    ]
  },
  devServer: {
    port: 9000,
    proxy: {
      '/': 'http://localhost:9000',
      secure: false,
    }
  },
  plugins: [
    new CleanWebpackPlugin(), // remove build folders before building
    new HtmlWebpackPlugin(), // generates a file dist/html
  ],
}

// I used this resource to help with the configuration:
// https://github.com/crsandeep/simple-react-full-stack