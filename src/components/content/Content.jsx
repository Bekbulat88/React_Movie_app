import React, { useEffect, useState } from 'react';
import Carousel from '../slideshow/Carousel';

import ContentItem from '../contentItem/ContentItem';
import style from './Content.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { topfilmsRequestAsync } from '../../redux/topMovies/slice/topMoviesSlice';
import { API_KEY } from '../../const';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const type = 'TOP_100_POPULAR_FILMS'; //кинопоиск

const Content = () => {
  const [topMovies, setTopMovies] = useState([]);
  const API_URI = 'https://api.themoviedb.org/3/';
  // fetch(`${API_URI}discover/movie`, {
  //   headers: {
  //     'api-key': API_KEY,
  //     // 'X-API-KEY': API_KEY,
  //   },
  // }).then((res) => console.log(res));

  const func1 = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URI}discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });

    setTopMovies(results);
  };

  useEffect(() => {
    func1();
  }, []);
  // console.log(topMovies);
  // .then((req) => req.json())
  // .catch((error) => ({ error })),

  // const { topMovies } = useSelector((state) => state.topMovies);   // kinopoisk
  // const dispatch = useDispatch();// kinopoisk
  // useEffect(() => {// kinopoisk
  //   dispatch(topfilmsRequestAsync(type));// kinopoisk
  // }, []);// kinopoisk

  return (
    <div className={style.root}>
      <h1>New Release</h1>
      <Carousel />
      <div className={style.popularHeader}>
        <h3>Most popular</h3>
        <Link to={'/movies'}>
          <h3>view all</h3>
        </Link>
      </div>

      <div className={style.main}>
        {topMovies.map((elem, index) => {
          if (index < 4) {
            return <ContentItem {...elem} />;
          }
        })}
      </div>
    </div>
  );
};

export default Content;
