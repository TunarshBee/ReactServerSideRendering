const path = require("path");
const merge = require("webpack-merge");
const baseFile = require("./webpack.base");

const server = {
  // Tell webpack that we're transpiling and app for node js instead of browser
  target: "node",
  // Tell webpack the relative dir for our index.js file
  entry: "./src/index.js",
  // Tell webpack where to put the tanspiled code 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
 
};

module.exports = merge( baseFile, server)
