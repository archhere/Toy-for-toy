var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./client/toyfortoy.jsx",
  output: {
        path: __dirname,
        filename: "./static_pages/bundle.js"
    },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
