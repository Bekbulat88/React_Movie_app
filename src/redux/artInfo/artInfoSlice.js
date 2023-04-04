import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const getArtInfoAsync = createAsyncThunk('fetch/artInfo', async (artInfoId) => {
  try {
    const { data } = await axios.get(`${API_URI}/tv/${artInfoId}`, {
      params: { api_key: API_KEY },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  artInfo: {},
  error: '',
};

export const artInfoSlice = createSlice({
  name: 'artInfo',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getArtInfoAsync.pending, (state, action) => {
      state.error = '';
    });
    builder.addCase(getArtInfoAsync.fulfilled, (state, action) => {
      state.error = '';
      state.artInfo = action.payload;
    });
    builder.addCase(getArtInfoAsync.rejected, (state, action) => {
      state.error = action.payload.error;
    });
  },
});

export default artInfoSlice.reducer;
