const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "none",
    entry: {
        "larger-number-add": "./src/index.js",
        "larger-number-add.min": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        library: "largerNumberAdd",
        libraryExport: "default",
        libraryTarget: "umd"
    },
    optimization: {
        minimize: true, 
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            }),
        ],
    }
}