import React from 'react';
import { useSelector } from 'react-redux';
import ContentItem from '../components/contentItem/ContentItem';
import '../scss/pages/Movies.scss';

const Movies = () => {
  const { topMovies } = useSelector((state) => state.topMovies);

  return (
    <div className="moviesBlock">
      <h2>Most popular movies</h2>
      <div className="moviesGrid">
        {topMovies.map((elem) => {
          {
            return <ContentItem {...elem} key={elem.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Movies;
