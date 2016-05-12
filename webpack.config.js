'use strict';

const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const precss = require('precss');
const autoprefixer = require('autoprefixer');

const src = path.join(__dirname + '/src');
const dist = path.join(__dirname + '/dist');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {

    entry: {
        index: path.join(src + '/index')
    },

    output: {
        path: dist,
        filename: '[name].js'
    },

    module: {
        loaders: [
            // HTML, Sass, CSS, Images, Fonts
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!resolve-url') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!resolve-url!sass?sourceMap') },
            { test: /\.(gif|jpe?g|png|svg)$/, loader: 'file?name=assets/[name].[hash:6].[ext]' },
            { test: /\.(ttf|eot|woff2)$/, loader: 'file?name=assets/[name].[hash:6].[ext]' },
            { test: /\.(woff)$/, loader: 'file?name=assets/[name].[hash:6].[ext]' }
        ]
    },

    postcss() {
        return [precss, autoprefixer];
    },

    devtool: 'source-map',

    plugins: [
        new ExtractTextPlugin('[name].[contenthash].css', {allChunks: true, disable: isDev}),
        new HtmlPlugin({
            // favicon: src + '/ico/favicon.png',
            template: src + '/index.html',
            inject: 'body'
        })
    ]

};
