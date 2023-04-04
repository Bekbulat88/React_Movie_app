import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const getCreditAsync = createAsyncThunk('fetch/credit', async (creditId) => {
  try {
    const resp = await axios.get(`${API_URI}/credit/${creditId}`, {
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
  credit: {},
  error: '',
};

export const creditSlice = createSlice({
  name: 'credit',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCreditAsync.pending, (state, action) => {
      state.error = '';
    });
    builder.addCase(getCreditAsync.fulfilled, (state, action) => {
      state.error = '';
      state.credit = action.payload;
    });
    builder.addCase(getCreditAsync.rejected, (state, action) => {
      state.error = action.payload.error;
    });
  },
});

export default creditSlice.reducer;
