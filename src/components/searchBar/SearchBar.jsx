import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import ContentItem from '../contentItem/ContentItem';
import style from './SearchBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { searchRequestAsync } from '../../redux/search/searchSlice';

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState('');
  const { searchValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const searchMovies = (event) => {
    event.preventDefault();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchKey(str);
    }, 550),
    [],
  );

  useEffect(() => {
    dispatch(searchRequestAsync(searchKey));
  }, [searchKey]);

  return (
    <form onSubmit={searchMovies} className={style.root}>
      <input
        onChange={(event) => updateSearchValue(event.currentTarget.value)}
        type={'text'}
        list="searchField"
      ></input>

      {searchValue.length ? (
        <ul className={style.searchList}>
          {searchValue.map((elem, index) => {
            if (index < 5) {
              return (
                <li className={style.listItem}>
                  <ContentItem {...elem} />
                </li>
              );
            }
          })}
        </ul>
      ) : (
        ''
      )}
      <button type={'submit'}>Search</button>
    </form>
  );
};

export default SearchBar;
