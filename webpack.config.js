    const path = require("path");

  module.exports = {

    mode: 'production',
    entry: "./src/script.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "./bundle.js"
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        open: true
    },


}

