import React from 'react';
import { Link } from 'react-router-dom';
import { API_IMAGE_PREFIX, API_URI } from '../../const';
import style from './ContentItem.module.scss';
const ContentItem = ({ title, year, poster_path, rating }) => {
  // console.log(poster_path);
  return (
    <div className={style.root}>
      <Link to={'/videoPage'}>
        <div className={style.poster}>
          {
            <img
              className={style.image}
              src={`${API_IMAGE_PREFIX}${poster_path}`}
              alt="poster"
              // width={180}
              // height={270}
            />
          }
          {<span>{rating}</span>}
        </div>
        <div className={style.titleBlock}>
          <p className={style.titleName}>{title}</p>
          <p className={style.year}>{year}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentItem;
