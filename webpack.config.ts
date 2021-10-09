import path from 'path';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  name: 'gitAPI',
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },

  //   진입점
  entry: {
    app: './client',
  },

  // host reload

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // 이미지 경로 prefix
    publicPath: '/dist/',
  },

  devServer: {
    // router 설정(새로고침 시 오류 방지)
    historyApiFallback: true,
    port: 3000,
    // webpack dev server (index.html) 파일 경로 유의.
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    // 프록시 설정
    proxy: {
      '/api/': {
        // backend주소
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
      },
    },
  },
};

// develope Mode settings
if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  // config.plugins.push(new ReactRefreshWebpackPlugin());
  // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }));
}

export default config;
