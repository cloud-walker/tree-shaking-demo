import {resolve} from 'path'

const sourcePath = resolve(__dirname, 'source')

export default {
  entry: sourcePath,
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'webpack.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {modules: false}],
          ],
        },
      },
    ],
  },
}