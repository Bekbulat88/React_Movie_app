import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const trailersRequestAsync = createAsyncThunk('trailers/fetch', async (params) => {
  try {
    const { data } = await axios.get(`${API_URI}/${params.type}/${params.id}/videos`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'video',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  trailer: [],
  error: '',
};

const moviesTrailersSlice = createSlice({
  name: 'moviesTrailers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(trailersRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(trailersRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.trailer = action.payload.results.filter((elem) => elem.type === 'Trailer');
      })
      .addCase(trailersRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default moviesTrailersSlice.reducer;
