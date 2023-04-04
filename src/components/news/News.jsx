import { compose } from '@reduxjs/toolkit';
import axios, { Axios } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, API_URI } from '../../const';
import { awaitfilmsRequestAsync } from '../../redux/awaitMovies/awaitMoviesSlice';
import { logIn, openModal } from '../../redux/modalLogin/modalLoginSlice';
import ContentItem from '../contentItem/ContentItem';
import ModalLogin from '../modalLogin/ModalLogin';
import NewsItem from '../newsItem/NewsItem';

import style from './News.module.scss';

const News = () => {
  // const isLogInRef = useRef(false);
  // const [logIn, setLogIn] = useState(false);

  const { isUserLogIn } = useSelector((state) => state.modalLogin);
  const { awaitMovies } = useSelector((state) => state.awaitMovies);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(awaitfilmsRequestAsync());
  // }, []);
  // const [upcomingMovies, setUpcomingMovies] = useState([]);

  // const { openModal } = useSelector((state) => state.modalLogin);
  // useEffect(() => {
  //   dispatch(logIn());
  //   console.log(isUserLogIn);
  // }, []);

  const handleLogInButton = () => {
    dispatch(openModal());
    // dispatch(logIn());
  };

  useEffect(() => {
    dispatch(awaitfilmsRequestAsync());
  }, []);

  return (
    <div className={style.rootNews}>
      <div>
        {!isUserLogIn ? (
          <button className={style.buttonLogin} onClick={handleLogInButton}>
            <svg
              className={style.loginButtonIcon}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
            </svg>
            LogIn
          </button>
        ) : (
          <p>{JSON.parse(localStorage.getItem('login')).email}</p>
        )}
      </div>

      <div className={style.news}>
        <div className={style.title}>
          <h3>TOP AWAIT FILMS</h3>
        </div>
        <div className={style.mainBlock}>
          {awaitMovies.map((elem, index) => {
            if (index < 5) {
              return <NewsItem {...elem} key={elem.poster_path} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
