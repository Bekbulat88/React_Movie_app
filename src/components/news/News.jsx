import { compose } from '@reduxjs/toolkit';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, API_URI } from '../../const';
import { awaitfilmsRequestAsync } from '../../redux/awaitMovies/awaitMoviesSlice';
import ContentItem from '../contentItem/ContentItem';
import NewsItem from '../newsItem/NewsItem';

import style from './News.module.scss';

const News = () => {
  // const { awaitMovies } = useSelector((state) => state.awaitMovies);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(awaitfilmsRequestAsync());
  // }, []);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const func = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URI}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });
    setUpcomingMovies(results);
  };

  useEffect(() => {
    func();
  }, []);
  return (
    <div className={style.rootNews}>
      <div className={style.title}>
        <h3>TOP AWAIT FILMS</h3>
      </div>
      <div className={style.mainBlock}>
        {upcomingMovies.map((elem, index) => {
          if (index < 5) {
            return <NewsItem {...elem} key={elem.poster_path} />;
          }
        })}
      </div>
    </div>
  );
};

export default News;
