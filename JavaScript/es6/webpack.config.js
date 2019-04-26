const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {}
      }
    ]
  },
};

// 在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save
// 如果你在安装一个用于开发环境的安装包，你应该使用 npm install --save-dev
