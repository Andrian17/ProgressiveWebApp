const HtmlWepackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'And - Progressive Web App',
      short_name: 'And-PWA',
      description: 'And - awesome Progressive Web App!',
      inject: true,
      background_color: '#ffffff',
      theme_color: '#E018E1',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-512x512.png'),
          size: '1024x1024', // you can also use the specifications pattern
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon-512x512.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
