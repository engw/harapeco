export default {
    entry: {
        main: './src/main.js',
    },
    output: {
        path: __dirname,
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                `${__dirname}/src`,
                `${__dirname}/test`,
            ],
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    resolve: {
        modules: [
            `${__dirname}/src`,
            "node_modules"
        ],
    },
    target: 'node',
    devtool: 'inline-source-map',
};
