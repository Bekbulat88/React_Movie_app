import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { trailersRequestAsync } from '../redux/moviesTrailers/moviesTrailersSlice';
import style from '../scss/pages/ApartVideoPage.module.scss';
const ApartVideoPage = () => {
  // const [video, setVideo] = useState('');
  const dispatch = useDispatch();

  const { trailer } = useSelector((state) => state.trailers);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(trailersRequestAsync(params));
    }
  }, []);

  return (
    <div className={style.root}>
      {trailer.map((elem) => (
        <YouTube videoId={elem.key} className={style.playersBlock} key={elem.id} />
      ))}
    </div>
  );
};

export default ApartVideoPage;
