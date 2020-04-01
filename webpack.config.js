"use strict";

module.exports = {

    //devtool: "inline-source-map",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
        {
            test: /\.tsx?$/,
            loader: "ts-loader"
        },
        {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            }
            ]
        }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"]
    }
};
