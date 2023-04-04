import React, { useEffect } from 'react';
import Carousel from '../slideshow/Carousel';
import ContentItem from '../contentItem/ContentItem';
import style from './Content.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { topfilmsRequestAsync } from '../../redux/topMovies/slice/topMoviesSlice';

import { Link } from 'react-router-dom';
import PopularMovies from '../popularMovies/PopularMovies';

import PopularTVShows from '../popularTVShows/PopularTVShows';

const Content = () => {
  //   const dispatch = useDispatch();
  //   const { topMovies } = useSelector((state) => state.topMovies);

  //   useEffect(() => {
  //     dispatch(topfilmsRequestAsync());
  //   }, []);

  return (
    <div className={style.root}>
      <h1>New Release</h1>
      <Carousel />
      <PopularMovies />
      <PopularTVShows />
      {/* <div className={style.popularMoviesBlock}>
        <div className={style.popularHeader}>
          <h3>Most popular</h3>
          <Link to={'/movies'}>
            <h3>view all</h3>
          </Link>
        </div>

        <div className={style.main}>
          {topMovies.map((elem, index) => {
            if (index < 4) {
              return <ContentItem {...elem} key={elem.id} />;
            }
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Content;
