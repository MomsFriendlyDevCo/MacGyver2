const { VueLoaderPlugin } = require("vue-loader");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  entry: {
    main: './src/entry.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //filename: 'main.js',
    //publicPath: '/dist',
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
      /*
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]",
          outputPath: "assets/img",
          esModule: false,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          "sass-loader",
        ],
      },
      */
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    //new BundleAnalyzerPlugin(),
    /*
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico",
    }),
    */
  ],
  resolve: {
    extensions: [".js", ".vue"],
  //},
  /*
  optimization: {
    //splitChunks: false,
    // FIXME: Putting them together breaks export default
    //runtimeChunk: 'single',
    //runtimeChunk: true,
  },
  externals: {
    /*
    '@momsfriendlydevco/vue-setpath': {
      commonjs: '@momsfriendlydevco/vue-setpath',
      commonjs2: '@momsfriendlydevco/vue-setpath',
      amd: '@momsfriendlydevco/vue-setpath',
    },
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
    'vue-input-facade': {
      commonjs: 'vue-input-facade',
      commonjs2: 'vue-input-facade',
      amd: 'vue-input-facade',
    },
    */
    //components: /^components\/.+$/,
    //services: /^services\/.+$/,
  },
};