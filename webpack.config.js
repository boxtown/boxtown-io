const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve("build"),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}