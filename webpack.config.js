var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './js/app/index.jsx',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    // target: 'node',
    // externals: [nodeExternals()],
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
    },
};
