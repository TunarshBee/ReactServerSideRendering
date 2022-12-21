const path = require("path");
module.exports = {
  // Tell webpack that we're transpiling and app for node js instead of browser
  target: "node",
  // Tell webpack the relative dir for our index.js file
  entry: "./src/index.js",
  // Tell webpack where to put the tanspiled code 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // Inform babel to run through all the files 
  module: {
    rules: [
      {
        // Tell babel the extension for the type of files to run through
        test: /\.js?$/,
        // The only loader that helps to transpile our code
        loader: "babel-loader",
        // Tell babel not to run through any of the files in the node_modules dir
        exclude: /node_modules/,
        options: {
          // The actual rules/Presets the babel will use to know what it's transpiling
          presets: [
            // tells babel to transpile our jsx codes to normal javascript code
            "react",
            // Tells babel to handle the async await calls that will be used
            "stage-0",
            // Tells babel to transpile for the last 2 versions of all popular browsers
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
