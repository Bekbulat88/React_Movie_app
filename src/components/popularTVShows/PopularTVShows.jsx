import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { tvShowsRequestAsync } from '../../redux/tvShows/tvShowsSlice';

import ContentItem from '../contentItem/ContentItem';
import style from './PopularTVShows.module.scss';

const PopularTVShows = () => {
  const dispatch = useDispatch();
  const { tvShows } = useSelector((state) => state.tvShows);

  useEffect(() => {
    dispatch(tvShowsRequestAsync());
  }, []);

  return (
    <div className={style.root}>
      <div className={style.header}>
        <h3>Most popular shows</h3>
        <Link to={'/tvShows'}>View all</Link>
      </div>

      <div className={style.main}>
        {tvShows.map((elem, index) => {
          if (index < 4) {
            return <ContentItem {...elem} key={elem.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default PopularTVShows;
