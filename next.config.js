const webpack = require("webpack")
const withSass = require("@zeit/next-sass")
const withCSS = require("@zeit/next-css")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(
  withCSS(
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

        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "[name].[ext]",
            },
          },
        })

        return config
      },
    })
  )
)
