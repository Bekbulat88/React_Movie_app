import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../const';
import { fetchFilmsList } from '../../utils/fetchFilms';

export const awaitfilmsRequestAsync = createAsyncThunk('awaitFilms/fetch', () =>
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1`, {
    headers: {
      accept: 'application/json',
      'X-API-KEY': API_KEY,
    },
  })
    .then((req) => req.json())

    .catch((error) => ({ error })),
);

const initialState = {
  awaitMovies: [],
  error: '',
};

const awaitMoviesSlice = createSlice({
  name: 'awaitMovies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(awaitfilmsRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(awaitfilmsRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.awaitMovies = action.payload.films;
      })
      .addCase(awaitfilmsRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});
console.log(initialState.awaitMovies);
export default awaitMoviesSlice.reducer;
