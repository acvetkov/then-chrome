'use strict';

var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'then-chrome.js',
        library: 'thenChrome',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
