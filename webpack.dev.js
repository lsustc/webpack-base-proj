'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js'
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                // use: 'file-loader'
                use: [{
                    loader: 'url-loader',
                    options: {
                      limit: 10240
                    }
                }]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}