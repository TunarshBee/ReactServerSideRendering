module.exports = {
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