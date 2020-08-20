const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './client/public/');
const APP_DIR = path.resolve(__dirname, './client');

module.exports = {
  entry: {
    main: __dirname + '/client/src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}