import React from 'react';
import Search from '../search/'
import { css } from 'aphrodite/no-important';
import style from './style';

const Header = () => {
  return (<header className={css(style.header)}>
    <h1 className={css(style.title)}>Photo Search</h1>
    <Search />
  </header>);
};

export default Header;
