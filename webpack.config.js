const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js|mjs)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|webp|jpg|woff|woff2|eot|ttf|gif|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.jsx', '.web.js', '.jsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: './index.html'
        }),
        new FaviconsWebpackPlugin(path.resolve(__dirname, './src/assets/favicon.png'))
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
    }
};
