const path = require('path');
const webpack = require('webpack');

const bannerConfig = require('./banner.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const inputDirectory = path.resolve(__dirname, 'source');
const outputDirectory = path.resolve(__dirname, 'dist');

const extractSass = new ExtractTextPlugin({
    filename: "index.css"
});

module.exports.entry = './source/index.js';

module.exports.output = {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
};

module.exports.devtool = 'source-map';

module.exports.resolve = {
    modules: [inputDirectory, 'node_modules'],
    extensions: ['.js', '.json', '.html']
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Plugins
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports.plugins = [];
module.exports.plugins.push(new HtmlWebpackPlugin({
    template: 'source/index.html',
    favicon: 'source/assets/images/favicon.png',
    minify: false,
    hash: true
}));
module.exports.plugins.push(new webpack.BannerPlugin(bannerConfig));
module.exports.plugins.push(new CleanWebpackPlugin(['dist']));
module.exports.plugins.push(extractSass);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Rules
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.module = {
    rules: []
};

module.exports.module.rules.push({
    test: /\.html/,
    use: 'raw-loader'
});

module.exports.module.rules.push({
    test: /\.scss$/,
    use: extractSass.extract({
        use: [{
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: [
                    path.join(inputDirectory, 'assets/styles/main.scss')
                ]
            }
        }]
    })
});