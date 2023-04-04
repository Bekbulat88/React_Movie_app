import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const getSeasonsAsync = createAsyncThunk('fetch/seasons', async (tv_id, season_number) => {
  try {
    const resp = await axios.get(`${API_URI}/tv/${tv_id}/season/1`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  seasonInfo: {},
  error: '',
};

export const seasonsSlice = createSlice({
  name: 'season',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSeasonsAsync.pending, (state, action) => {
      state.error = '';
    });
    builder.addCase(getSeasonsAsync.fulfilled, (state, action) => {
      state.error = '';
      state.credit = action.payload;
    });
    builder.addCase(getSeasonsAsync.rejected, (state, action) => {
      state.error = action.payload.error;
    });
  },
});

export default seasonsSlice.reducer;
