import React from 'react';
import { API_IMAGE_PREFIX } from '../../const';
import style from './NewsItem.module.scss';
const NewsItem = ({ title, backdrop_path, id }) => {
  return (
    <div className={style.root}>
      <div
        className={style.poster}
        // style={{
        //   backgroundImage: `url(${API_IMAGE_PREFIX}${backdrop_path})`,
        //   backgroundSize: '100%',
        //   backgroundPosition: 'center center',
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <img src={`${API_IMAGE_PREFIX}${backdrop_path}`} alt="poster" srcSet="" />
      </div>
      <div className={style.titleBlock}>
        <p className={style.titleName}>{title}</p>
        <p>{id}</p>
        {/* <p className={style.year}>{year}</p> */}
        {/* <p>Duration : {duration}мин.</p> */}
      </div>
    </div>
  );
};

export default NewsItem;
