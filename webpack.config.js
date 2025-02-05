const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: './src/js/index.js',
    dashboard: './src/js/dashboard.js',
    login: './src/js/login.js',
    logincon: './src/js/login-config.js',
    register: './src/js/register.js',
    registercon: './src/js/register-config.js',
    terms: './src/js/terms.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',  // 让不同 entry 生成独立的 JS 文件
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /index\.html$|dashboard\.html$|login\.html$|register\.html$|terms\.html$|privacy\.html$/,
        type: 'asset/source',
        use:{
            loader: 'html-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/dashboard.html',
        filename: 'dashboard.html',
        chunks: ['main', 'dashboard']
      }),
    new HtmlWebpackPlugin({
        template: './src/pages/login.html',
        filename: 'login.html',
        chunks: ['login', 'logincon']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/register.html',
      filename: 'register.html',
      chunks: ['register', 'registercon']
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/terms.html',
        filename: 'terms.html',
        chunks: ['terms']
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/privacy.html',
        filename: 'privacy.html',
        chunks: ['terms']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
