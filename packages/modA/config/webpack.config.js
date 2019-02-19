const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src"],
  output: {
    path: path.resolve(__dirname, "../build")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          rootMode: 'upward',
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
