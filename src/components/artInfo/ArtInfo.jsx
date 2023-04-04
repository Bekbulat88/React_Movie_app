import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, API_URI } from '../../const';
import { getArtInfoAsync } from '../../redux/artInfo/artInfoSlice';
import { getCreditAsync } from '../../redux/credit/creditSlice';
import { getSeasonsAsync } from '../../redux/seasons/seasonsSlice';
import style from './ArtInfo.module.scss';

const ArtInfo = ({ id }) => {
  //   const [art, setArt] = useState({});
  const { artInfo } = useSelector((state) => state.artInfo);
  //   const { seasonInfo } = useSelector((state) => state.seasons);

  const dispatch = useDispatch();

  //   const getArtInfoAsync = async () => {
  //     try {
  //       const response = await axios.get(`${API_URI}/tv/213713`, {
  //         params: { api_key: API_KEY },
  //       });
  //       const creditLocal = await response.data.created_by;
  //       setArt(response.data);
  //       console.log(creditLocal);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  useEffect(() => {
    dispatch(getArtInfoAsync(213713));
  }, []);

  //   useEffect(() => {
  //     dispatch(getSeasonsAsync('213713', 1));
  //   }, []);
  return (
    <div className={style.root}>
      <header className={style.header}>
        <div className={style.imageBlock}>
          <img src={`https://image.tmdb.org/t/p/w500/${artInfo.poster_path}`} alt="" />
        </div>
        <div className={style.headerInfo}>
          <h2>
            {artInfo.name} &nbsp;{artInfo.first_air_date ? artInfo.first_air_date.slice(0, 4) : ''}
          </h2>
          <p className={style.overview}>{artInfo.overview}</p>
        </div>
      </header>
      <div className={style.mainInfo}>
        <p>Season count: {artInfo.number_of_seasons}</p>
        <p>
          Language:{' '}
          {artInfo.spoken_languages
            ? artInfo.spoken_languages.map((elem) => elem.english_name)
            : ''}
        </p>
        <a href={artInfo.homepage}>Official page here</a>
      </div>
    </div>
  );
};

export default ArtInfo;
