const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}