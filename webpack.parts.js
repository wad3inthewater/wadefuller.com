const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.extractCSS = ({
  include,
  exclude,
  use = []
}) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: "[name].css",
  });

  return {
    module: {
      rules: [{
        test: /\.css$/,
        include,
        exclude,

        use: [
          MiniCssExtractPlugin.loader,
        ].concat(use),
      }, ],
    },
    plugins: [plugin],
  };
};
// Config for the webpack dev server that runs on localhost
exports.devServer = ({
  host,
  port
} = {}) => ({
  devServer: {
    stats: "errors-only",
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    hot: true,
    open: false,
    overlay: true,
  },
});
// handles loading CSS
exports.loadCSS = ({
  include,
  exclude
} = {}) => ({
  module: {
    rules: [{
      test: /\.css$/,
      include,
      exclude,

      use: [
        "style-loader",
        "css-loader"
      ],
    }, ],
  },
});
// handles loading images
exports.loadImages = ({
  include,
  exclude,
  options
} = {}) => ({
  module: {
    rules: [{
      test: /\.(png|jpg|svg)$/,
      include,
      exclude,
      use: {
        loader: "url-loader",
        options,
      },
    }, ],
  },
});
// Handles loading fonts
exports.loadFonts = ({
  include,
  exclude,
  options
} = {}) => ({
  module: {
    rules: [{
      test: /\.(otf|ttf)$/,
      include,
      exclude,
      use: {
        loader: "url-loader",
        options: {
          limit: 50000
        },
      },
    }, ],
  },
});
//handles loading of javascript
exports.loadJavaScript = ({
  include,
  exclude
} = {}) => ({
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include,
      exclude: [/node_modules/, /\.ejs$/],
      use: ['babel-loader']
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
});
