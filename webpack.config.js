// import css from 'file.css';

const path = require('path');

const rulesForJavaScript = {
  test: /\.js$/,
  loader: 'babel-loader'
};

const rulesForCss = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
};

module.exports = {
  //entry:
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [rulesForJavaScript, rulesForCss]
  }
};
