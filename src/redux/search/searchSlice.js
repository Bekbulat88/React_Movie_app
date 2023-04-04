import { createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URI } from '../../const';

export const searchRequestAsync = createAsyncThunk('searchData/fetch', async (searchKey) => {
  try {
    const {
      data: { results },
    } = await axios.get(`${API_URI}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  searchValue: [],
  error: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(searchRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.searchValue = action.payload;
      })
      .addCase(searchRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default searchSlice.reducer;
