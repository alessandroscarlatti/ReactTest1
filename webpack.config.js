var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './js/app/index.jsx',
    devtool: 'cheap-module-source-map',
    cache: true,
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        // new Uglify()
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
               	exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
