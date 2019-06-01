    const path = require("path");

  module.exports = {

    mode: 'development',
    entry: "./src/script.js",
    output: {
      path: path.resolve(__dirname, "./docs"),
      filename: "./bundle.js"
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        open: true
    },


}

