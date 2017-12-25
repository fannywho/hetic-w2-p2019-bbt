module.exports = {
    entry: "./app/app.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    }
};
