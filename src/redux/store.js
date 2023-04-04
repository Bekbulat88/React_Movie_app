import { configureStore } from '@reduxjs/toolkit';
import topMovies from './topMovies/slice/topMoviesSlice';
import awaitMovies from './awaitMovies/awaitMoviesSlice';
import trailers from './moviesTrailers/moviesTrailersSlice';
import tvShows from './tvShows/tvShowsSlice';
import search from './search/searchSlice';
import modalLogin from './modalLogin/modalLoginSlice';
import trendingMovies from './trendingMovies/trendingMoviesSlice';
import genre from './genre/genreSlice';
import credit from './credit/creditSlice';
import seasons from './seasons/seasonsSlice';
import artInfo from './artInfo/artInfoSlice';
export const store = configureStore({
  reducer: {
    topMovies,
    trailers,
    tvShows,
    search,
    modalLogin,
    trendingMovies,
    genre,
    credit,
    seasons,
    artInfo,
    awaitMovies,
  },
});
