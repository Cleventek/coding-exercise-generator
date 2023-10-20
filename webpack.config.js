const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'eval-source-map',
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        crossOriginLoading: 'anonymous',
    },
    watchOptions: {
        ignored: ['node_modules'],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                    }
                }
            }
        ]
    }
};
