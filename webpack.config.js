'use strict';

const { join, resolve } = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        join(__dirname, 'app/index.js')
    ],

    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|json|eot)$/,
                loader: "file-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: resolve(__dirname, 'index.html'),
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

