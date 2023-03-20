import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API_URI } from '../../const';
import debounce from 'lodash.debounce';
import style from './Header.module.scss';
import SearchBar from '../searchBar/SearchBar';

const Header = () => {
  // const [searchKey, setSearchKey] = useState('');

  // const func = async () => {
  //   const {
  //     data: { results },
  //   } = await axios.get(`${API_URI}/search/movie`, {
  //     params: {
  //       api_key: API_KEY,
  //       query: searchKey,
  //     },
  //   });
  //   console.log(results[0].title);
  // };

  // const searchMovies = (event) => {
  //   event.preventDefault();
  //   // func();
  // };

  // const updateSearchValue = useCallback(
  //   debounce((str) => {
  //     setSearchKey(str);
  //   }, 550),
  //   [],
  // );

  // useEffect(() => {
  //   func();
  // }, [searchKey]);

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
          <Link href="!#">Series</Link>
        </li>
        <li>
          <Link href="!#">TVShows</Link>
        </li>
        <li>
          <SearchBar />
          {/* <form onSubmit={searchMovies}>
            <input
              onChange={(event) => updateSearchValue(event.currentTarget.value)}
              type={'text'}
            ></input>
            <button type={'submit'}>Search</button>
          </form> */}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
