import { VueLoaderPlugin } from 'vue-loader';
//import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import glob from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    ...glob.sync('./src/components/*.vue')
      .reduce((obj, el) => {
        obj[`components/${path.parse(el).name}`] = el;
        return obj;
      }, {}),
    // TODO: Alternative? `'components': ['./src/components.js', ...glob.sync('./src/components/*.vue').map(el => `components/${path.parse(el).name}`)]`
    'components': {
      import: './src/components.js',
      filename: 'components.js',
      dependOn: glob.sync('./src/components/*.vue')
        .map(el => `components/${path.parse(el).name}`),
    },
    'macgyver': './src/macgyver.js',
    // TODO: Alternative? `'vue-macgyver': ['./src/vue-macgyver.js', 'macgyver']`
    'vue-macgyver': {
      import: './src/vue-macgyver.js',
      filename: 'vue-macgyver.js',
      dependOn: 'macgyver',
    },
  },
  output: {
    globalObject: 'this',
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "browsers": "last 2 versions"
                  }
                }
              ]
            ],
            plugins: [
              [
                "@babel/plugin-proposal-pipeline-operator",
                {
                  "proposal": "fsharp"
                }
              ],
              "@babel/plugin-proposal-throw-expressions"
            ]
          }
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    //new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".vue"],
  },
  externals: {
    /*
    '@momsfriendlydevco/vue-setpath': {
      commonjs: '@momsfriendlydevco/vue-setpath',
      commonjs2: '@momsfriendlydevco/vue-setpath',
      amd: '@momsfriendlydevco/vue-setpath',
    },
    */
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
      root: 'moment',
    },
    /*
    'vue-input-facade': {
      commonjs: 'vue-input-facade',
      commonjs2: 'vue-input-facade',
      amd: 'vue-input-facade',
    },
    */
  },
};