const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const ssrConfig = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'ignore-loader'
            },
            {
                test: /\.less$/,
                use: 'ignore-loader'
            },
        ]
    },
    plugins: [
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'react',
                    entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
                    global: 'React',
                },
                {
                    module: 'react-dom',
                    entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
                    global: 'ReactDOM',
                }
            ]
        }),
    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    // test: /(react|react-dom)/,
                    // name: 'vendors',
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
}

module.exports = merge(baseConfig, ssrConfig);