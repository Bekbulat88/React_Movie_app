import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const awaitfilmsRequestAsync = createAsyncThunk('awaitFilms/fetch', async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${API_URI}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
});

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
        state.awaitMovies = action.payload;
      })
      .addCase(awaitfilmsRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default awaitMoviesSlice.reducer;
