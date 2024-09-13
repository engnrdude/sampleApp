/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['rc-util']);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Transpile `rc-util` using babel-loader
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/rc-util/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    });
    return config;
  },
}
module.exports = withTM({
  reactStrictMode: true,
});
module.exports = nextConfig

