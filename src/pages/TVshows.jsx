import React from 'react';
import { useSelector } from 'react-redux';
import ContentItem from '../components/contentItem/ContentItem';
import '../scss/pages/Movies.scss';

const TVShows = () => {
  const { tvShows } = useSelector((state) => state.tvShows);

  return (
    <div className="moviesBlock">
      <h2>Most popular TV Shows</h2>
      <div className="moviesGrid">
        {tvShows.map((elem) => {
          {
            return <ContentItem {...elem} key={elem.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default TVShows;
