const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
      devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader','css-loader'],
        },
      ],
    },

  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
};