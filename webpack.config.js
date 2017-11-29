var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './js/index.jsx',
    devtool: 'cheap-module-source-map',
    cache: true,
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ],
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ["style-loader", {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          , "sass-loader"]
        },
        {
            test: /\.jsx$/,
           	exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react', 'stage-3']
            }
        }
      ]
    }
};
