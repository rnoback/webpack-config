const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production" ) {
    mode = "production"
}

module.exports = {
    mode: mode,
    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", // "asset/resource" => loads all files form folder, "assets" puts small files into js files as a BASE64 type
                /*parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }*/
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/, // Any file that ends on .js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true
    }
}