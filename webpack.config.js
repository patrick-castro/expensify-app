const path = require('path');

module.exports = {
  entry: './src/app.js',
  // entry: './src/playground/redux-101.js',
  // entry: './src/playground/destructuring.js',
  // entry: './src/playground/redux-expensify.js',
  // entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Tells webpack to run babel everytime it sees a .js files
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        // Added question mark to support scss or css files
        test: /\.s?css$/, // Target files that ends in .css
        use: [
          // Specifies and array of loaders
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  // The browser devtools will specifically indicate where the error in the code occurs,
  // not from some low level parts of the code
  devtool: 'cheap-module-eval-source-map',
  // Serves up from memory instead of writing it down in a bundle file
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true, // Serve up the index.html files to serve up unknow 404's
  },
};
