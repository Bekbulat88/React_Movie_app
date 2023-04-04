import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const tvShowsRequestAsync = createAsyncThunk('tvShows/fetch', async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${API_URI}/discover/tv`, { params: { api_key: API_KEY } });
    return results;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  tvShows: [],
  error: '',
};

const tvShowsSlice = createSlice({
  name: 'topTVShows',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(tvShowsRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(tvShowsRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.tvShows = action.payload;
      })
      .addCase(tvShowsRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default tvShowsSlice.reducer;
