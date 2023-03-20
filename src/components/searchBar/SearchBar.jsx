import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API_URI } from '../../const';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchList, setSearchList] = useState([]);
  const func = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URI}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setSearchList(results);
  };

  const searchMovies = (event) => {
    event.preventDefault();
    // func();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchKey(str);
    }, 550),
    [],
  );

  useEffect(() => {
    func();
  }, [searchKey]);

  return (
    <form onSubmit={searchMovies}>
      <input
        onChange={(event) => updateSearchValue(event.currentTarget.value)}
        type={'text'}
        list="searchField"
      ></input>
      <datalist id="searchField">
        {searchList.length
          ? searchList.map((elem, index) => {
              if (index < 5) {
                return <option value={elem.title}></option>;
              }
            })
          : ''}
      </datalist>
      {/* <ul>
        {' '}
        {searchList.length
          ? searchList.map((elem, index) => {
              if (index < 5) {
                return <li>{elem.title}</li>;
              }
            })
          : ''}
      </ul> */}

      <button type={'submit'}>Search</button>
    </form>
  );
};

export default SearchBar;
