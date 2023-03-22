import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_IMAGE_PREFIX } from '../../const';
import style from './ContentItem.module.scss';
import qs from 'qs';

const ContentItem = ({ title, year, poster_path, rating, id }) => {
  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     id,
  //   });
  //   console.log(queryString);
  // }, []);

  return (
    <div className={style.root}>
      <Link to={`/videoPage?id=${id}`}>
        <div className={style.poster}>
          {<img className={style.image} src={`${API_IMAGE_PREFIX}${poster_path}`} alt="poster" />}
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
