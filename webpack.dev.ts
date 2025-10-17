const { merge } = require("webpack-merge");
const common = require("./webpack.common.ts");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        historyApiFallback: true,
        port: 3000,
        hot: true,
        open: true,
    },
});
