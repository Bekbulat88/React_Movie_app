import { configureStore } from '@reduxjs/toolkit';
import topMovies from './topMovies/slice/topMoviesSlice';
import awaitMovies from './awaitMovies/awaitMoviesSlice';
import trailers from './moviesTrailers/moviesTrailersSlice';
export const store = configureStore({
  reducer: {
    topMovies,
    trailers,
    // awaitMovies,
  },
});
