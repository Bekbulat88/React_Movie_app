import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const getGenreListAsync = createAsyncThunk('fetch/genre', async () => {
  try {
    const {
      data: { genres },
    } = await axios.get(`${API_URI}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return genres;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  genreList: [],
  error: '',
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGenreListAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(getGenreListAsync.fulfilled, (state, action) => {
        state.genreList = action.payload;
      })
      .addCase(getGenreListAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default genreSlice.reducer;
