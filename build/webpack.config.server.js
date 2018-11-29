const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')

module.exports = webpackMerge(baseConfig, {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    externals: Object.keys(require('../package.json').dependencies),
    output: {
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2'
    },
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_BASE': '"http://127.0.0.1:3333"'
        })
    ]
})