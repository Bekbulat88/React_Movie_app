import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContentItem from '../components/contentItem/ContentItem';
import { API_KEY } from '../const';
import '../scss/pages/Movies.scss';
const Movies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const API_URI = 'https://api.themoviedb.org/3/';

  const func1 = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URI}discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });

    setTopMovies(results);
  };

  useEffect(() => {
    func1();
  }, []);

  return (
    <div className="moviesBlock">
      <h2>Most popular movies</h2>
      <div className="moviesGrid">
        {topMovies.map((elem) => {
          {
            return <ContentItem {...elem} />;
          }
        })}
      </div>
    </div>
  );
};

export default Movies;
