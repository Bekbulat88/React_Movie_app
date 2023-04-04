import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_IMAGE_PREFIX } from '../../const';
import style from './ContentItem.module.scss';
import qs from 'qs';

const ContentItem = ({ title, year, name, first_air_date, vote_average, poster_path, id }) => {
  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     id,
  //   });
  //   console.log(queryString);
  // }, []);

  return (
    <div className={style.root}>
      <Link to={`/videoPage?type=${title ? 'movie' : 'tv'}&id=${id}`}>
        <div className={style.poster}>
          {<img className={style.image} src={`${API_IMAGE_PREFIX}${poster_path}`} alt="poster" />}
          {<span>{vote_average * 10}</span>}
        </div>
        <div className={style.titleBlock}>
          <p className={style.titleName}> {title ? title : name}</p>
          <p className={style.year}>{year ? year : first_air_date} </p>
        </div>
      </Link>
    </div>
  );
};

export default ContentItem;
