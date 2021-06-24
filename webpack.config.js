let path = require('path')
let webpack = require("webpack")
let ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
let TerserPlugin = require("terser-webpack-plugin")
let ESLintPlugin = require('eslint-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
require('dotenv').config()

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: "/src/index.js",
    mode: isDevelopment ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [isDevelopment && require.resolve('react-refresh/babel')]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff2|woff)$/,
                loader: "file-loader",
                options:{
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "../dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title: 'atronandbeyond: Beats and Code',
            template: './src/index.html',
            xhtml:true
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, 'public')
        }),
        new ESLintPlugin()
    ].filter(Boolean),
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
};