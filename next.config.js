const webpack = require("webpack")
const withSass = require("@zeit/next-sass")
const withCSS = require("@zeit/next-css")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = withCSS(
  withSass({
    webpack: config => {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin())
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()]
      }
      config.node = {
        fs: "empty",
      }
      return config
    },
  })
)
