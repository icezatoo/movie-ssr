import React from "react"
import App from "next/app"
import Page from "layouts"
import NProgress from "nprogress"
import Router from "next/router"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

Router.events.on("routeChangeStart", url => {
  NProgress.start()
})
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

export default MyApp
