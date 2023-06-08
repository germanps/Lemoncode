const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
 
 module.exports = {
     context: path.resolve(__dirname, "./src"),
     resolve: {
        extensions: ['.js', '.ts', '.tsx'],
     },
     entry: {
         app: './index.tsx',
     },
     output: {
         filename: '[name].[chunkhash].js',
     },
     module: {
         rules: [
             {
                test: /\.tsx?$/, 
                exclude: /node_modules/,
                loader: "babel-loader",
             },
             {
                 test:/\.css$/,
                 exclude: /node_modules/,
                 use: [MiniCssExtractPlugin.loader, "css-loader"],
             },
             {
                 test: /\.scss$/,
                 exclude: /node_modules/,
                 use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
             },
             {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
             },
             {
                test: /\.html$/,
                loader: "html-loader",
             }
         ]
     },
     plugins: [
            new HtmlWebpackPlugin({
                filenama: 'index.html',
                template: './index.html', 
                scriptLoading: 'blocking',
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
            })
        ],
     devtool: "eval-source-map",
     devServer: {
        port: 8080,
        devMiddleware: {
            stats: "errors-only",
        }
     }
 }