const { VueLoaderPlugin } = require("vue-loader");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  entry: {
    main: './src/entry.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: 'VueMacgyver',
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
                  "exclude": ["proposal-dynamic-import"],
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
              "@babel/plugin-proposal-throw-expressions",
              "@babel/plugin-syntax-dynamic-import"
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