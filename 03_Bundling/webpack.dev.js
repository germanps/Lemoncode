const { merge } = require("webpack-merge")
const common = require("./webpack.common")
const dotenv = require("dotenv-webpack")

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ "style-loader", {loader: "css-loader"},"sass-loader"]
            }
        ],
    },
    stats: "errors-only",
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
    },
    plugins: [
        new dotenv({
            path: "./dev.env"
        })
    ]
})