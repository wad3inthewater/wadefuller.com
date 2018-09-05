const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const parts = require("./webpack.parts");

const commonConfig = merge([{
  plugins: [
    new HtmlWebpackPlugin({
      title: "wade fuller",
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}]);
const productionConfig = merge([
  parts.extractCSS({
    use: "css-loader"
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: "[name].[ext]"
    }
  })
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.loadImages(),
  parts.loadFonts()
])

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, {
      mode
    });
  }

  return merge(commonConfig, developmentConfig, {
    mode
  });
};

// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [{
//       test: /\.(js|jsx)$/,
//       exclude: /node_modules/,
//       use: ['babel-loader']
//     }]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: './dist'
//   }
// };
