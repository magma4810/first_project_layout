const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
  new BrowserSyncPlugin(
    {
      // browse to http://localhost:3000/ during development
      host: "localhost",
      port: 3000,
      proxy: "http://localhost:8080/",
    },
    // plugin options
    {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false,
    }
  )  
  ],
  module: {
    rules: [
      {
        // https://webpack.js.org/loaders/css-loader/
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};
