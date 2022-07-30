let path = require('path')
let webpack = require("webpack")
let TerserPlugin = require("terser-webpack-plugin")
let ESLintPlugin = require('eslint-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
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
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff2|woff)$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            },
            {
                test: /\.(md|mdx)$/,
                use: ['babel-loader', '@mdx-js/loader']
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        //fallback: {"assert": false}
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        //publicPath: "../dist/",
        filename: "bundle.js",
        clean: true,
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        port: process.env.DEV_PORT,
        allowedHosts: 'auto'
    },
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            meta: {viewport: "minimum-scale=1, initial-scale=1, width=device-width"}
        }),
        new ESLintPlugin()
    ].filter(Boolean),
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
// externals: ["react-helmet"]
};
