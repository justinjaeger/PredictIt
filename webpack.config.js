const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // the module where webpack begins building its dependency graph
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
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    // proxy: {
    //   '/': 'http://localhost:8000',
    // }
  }
}