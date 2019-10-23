import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { menuList } from '../common/unity';

const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const HeaderContent = styled.header`
  background-color: #081c24;
`;
const BoxContentMenu = styled.div`
  display: flex;
  align-items: center;
  will-change: height;
  margin: 0px auto;
  max-width: 60%;
`;

const ListMenu = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  list-style-type: none;
`;

const ListMenuItem = styled.li`
  color: white;
  margin-right: 2rem;
  cursor: pointer;
  font-weight: 600;

  a {
    color: white;
    text-decoration: none;
  }
`;

const LogoBar = styled.div`
  min-width: 100px;
  width: 100%;
  height: 50px;
  background-image: url('/static/logo/movie-logo.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const getListMenu = () => {
  return menuList.map((val, index) => (
    <ListMenuItem key={index}>
      <Link href={val.path}>
        <a>{val.label}</a>
      </Link>
    </ListMenuItem>
  ));
};

const Menu = () => {
  return (
    <MenuContent>
      <HeaderContent>
        <BoxContentMenu>
          <ListMenu>
            <ListMenuItem>
              <Link href="/">
                <LogoBar />
              </Link>
            </ListMenuItem>
            {getListMenu()}
          </ListMenu>
        </BoxContentMenu>
      </HeaderContent>
    </MenuContent>
  );
};

export default Menu;
