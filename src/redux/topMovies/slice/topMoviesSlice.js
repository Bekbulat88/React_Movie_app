import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../../const';

export const topfilmsRequestAsync = createAsyncThunk('topFilms/fetch', async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${API_URI}/discover/movie`, { params: { api_key: API_KEY } });
    return results;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  topMovies: [],
  error: '',
};

console.log(initialState.topMovies);
const topMoviesSlice = createSlice({
  name: 'topMovies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(topfilmsRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(topfilmsRequestAsync.fulfilled, (state, action) => {
        state.topMovies = action.payload;
      })
      .addCase(topfilmsRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default topMoviesSlice.reducer;
