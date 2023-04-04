import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { trailersRequestAsync } from '../redux/moviesTrailers/moviesTrailersSlice';
import style from '../scss/pages/ApartVideoPage.module.scss';
import ArtInfo from '../components/artInfo/ArtInfo';

const ApartVideoPage = () => {
  const dispatch = useDispatch();

  const { trailer } = useSelector((state) => state.trailers);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      dispatch(trailersRequestAsync(params));
    }
  }, []);
  console.log(trailer);
  return (
    <div className={style.root}>
      {trailer.length > 0 ? (
        trailer.map((elem) => (
          <YouTube videoId={elem.key} className={style.playersBlock} key={elem.id} />
        ))
      ) : (
        <div className={style.notFoundBlock}>
          <h3>😔 Ouch! Official trailer was not found,</h3>
          <p>but we have some information about this art:</p>
          <ArtInfo />
        </div>
      )}
    </div>
  );
};

export default ApartVideoPage;
