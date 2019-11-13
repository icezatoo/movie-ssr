import React from "react"
import Header from "./header"
import Menu from "./menu"
import "styles/style.scss"

export default ({ children }) => (
  <>
    <Header />
    <Menu />
    {children}
  </>
)
