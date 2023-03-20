import { configureStore } from '@reduxjs/toolkit';
import topMovies from './topMovies/slice/topMoviesSlice';
import awaitMovies from './awaitMovies/awaitMoviesSlice';
export const store = configureStore({
  reducer: {
    topMovies,
    awaitMovies,
  },
});
