import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { topfilmsRequestAsync } from '../../redux/topMovies/slice/topMoviesSlice';
import ContentItem from '../contentItem/ContentItem';
import style from './PopularMovies.module.scss';

const PopularMovies = () => {
  const dispatch = useDispatch();
  const { topMovies } = useSelector((state) => state.topMovies);

  useEffect(() => {
    dispatch(topfilmsRequestAsync());
  }, []);

  return (
    <div className={style.root}>
      <div className={style.header}>
        <h3>Most popular</h3>
        <Link to={'/movies'}>View all</Link>
      </div>

      <div className={style.main}>
        {topMovies.map((elem, index) => {
          if (index < 4) {
            return <ContentItem {...elem} key={elem.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
