const path = require("path");

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
    });

    config.resolve.extensions.push(".js", ".jsx");
    return config;
};
