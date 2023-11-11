var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main/frontend/Index.tsx',
    devtool: 'source-map',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
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
        static: {
            directory: path.join(__dirname, '/src/main/resources/static')
        }
    }
};