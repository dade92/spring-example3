var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const REACT_APP_STAGE = process.env.REACT_APP_STAGE

module.exports = {
    entry: {
        index: './src/main/frontend/Index.tsx',
        configuration: './src/main/frontend/Configuration.tsx'
    },
    devtool: 'source-map',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main/resources/static/index.html',
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './src/main/resources/static/configuration.html',
            filename: 'configuration.html',
            chunks: ['configuration'],
        }),
        new webpack.DefinePlugin({
            'process.env.REACT_APP_STAGE': JSON.stringify(process.env.REACT_APP_STAGE),
        }),
    ],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    devServer: {
        static: __dirname,
        port: 8080,
        open: true,
    },
};