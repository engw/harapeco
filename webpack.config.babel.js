export default {
  target: 'node',
  context: `${__dirname}/src`,
  entry: [
    'babel-polyfill',
    `${__dirname}/src/main.js`
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
  externals: /^(?!^(src|\.)\/)/,
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
    extensions: [".js"],
    modules: [
      `${__dirname}/src`,
      "node_modules"
    ],
  },
  devtool: 'inline-source-map',
}

