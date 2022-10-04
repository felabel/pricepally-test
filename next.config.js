/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
module.exports = withPlugins([withImages], {
webpack: (config) => {
config.node = {
fs: "empty",
};
config.module.rules.push({
test: /\.(glb|gltf|bin)$/,
use: {
loader: "file-loader",
},
});
config.plugins.push(
new webpack.ProvidePlugin({
$: "jquery",
jQuery: "jquery",
"window.jQuery": "jquery",
}));
return config;
},
});

module.exports = nextConfig
