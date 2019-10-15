import React from 'react';
import Header from './header';
import Menu from './menu';

export default ({ children }) => (
  <>
    <Header />
    <Menu />
    {children}
  </>
);
