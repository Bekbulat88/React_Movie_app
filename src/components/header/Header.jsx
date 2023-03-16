import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
  return (
    <nav className={style.root}>
      <ul>
        <li>
          <Link to={'/'}>All</Link>
        </li>
        <li>
          <Link href="!#">Movies</Link>
        </li>
        <li>
          <Link href="!#">Seriesss</Link>
        </li>
        <li>
          <Link href="!#">TVShows</Link>
        </li>
        <li>
          <input type={Text}></input>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
