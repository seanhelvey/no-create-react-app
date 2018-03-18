const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL)
                }
            }),
        ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    }

};
module.exports = config;
