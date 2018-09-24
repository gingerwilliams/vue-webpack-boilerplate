'use strict'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     publicPath: '/dist/',
    //     path: path.resolve(_dirname, 'dist')
    // },
    module: {
        rules: [
            {
              test: /\.vue$/,
              use: 'vue-loader'
            }
        ]

    },
    plugins: [
        new VueLoaderPlugin()
    ]

}