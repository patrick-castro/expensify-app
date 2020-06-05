const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    // The browser devtools will specifically indicate where the error in the code occurs,
    // not from some low level parts of the code
    // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    // Serves up from memory instead of writing it down in a bundle file
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, // Serve up the index.html files to serve up unknow 404's
      publicPath: '/dist/',
    },
  };
};
