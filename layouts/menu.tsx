import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { menuList } from "../constants/unity"
import "../styles/_menu.scss"

const LogoBar = styled.div`
  min-width: 100px;
  width: 100%;
  height: 50px;
  background-image: url("/static/logo/movie-logo.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`

const getListMenu = () => {
  return menuList.map((val, index) => (
    <li className="list-menu-item" key={index}>
      <Link href={val.path}>
        <a>{val.label}</a>
      </Link>
    </li>
  ))
}

const Menu = () => {
  return (
    <header className="menu-content">
      <div className="box-content-menu">
        <ul className="list-menu">
          <li className="list-menu-item">
            <Link href="/">
              <LogoBar />
            </Link>
          </li>
          {getListMenu()}
        </ul>
      </div>
    </header>
  )
}

export default Menu
