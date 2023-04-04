import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

const mediaType = 'movie';
const timeWindow = 'day';
export const trendingMoviesRequestAsync = createAsyncThunk('fetch/trendingMovies', async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${API_URI}/trending/${mediaType}/${timeWindow}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return results;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  movieList: [],
  error: '',
};

console.log(initialState.topMovies);
const trendingMoviesSlice = createSlice({
  name: 'trendinngMovies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(trendingMoviesRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(trendingMoviesRequestAsync.fulfilled, (state, action) => {
        state.movieList = action.payload;
        state.error = '';
      })
      .addCase(trendingMoviesRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default trendingMoviesSlice.reducer;
