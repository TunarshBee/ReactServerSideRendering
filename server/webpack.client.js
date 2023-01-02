const path = require("path");
const merge = require("webpack-merge")
const baseFile = require("./webpack.base")
const client = {

  // Tell webpack the relative dir for our index.js file
  entry: "./src/client/client.js",
  // Tell webpack where to put the tanspiled code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  
};

module.exports = merge( baseFile, client)