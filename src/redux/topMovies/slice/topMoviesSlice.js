// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { API_KEY, API_URI } from '../../../const';
// import { fetchFilmsList } from '../../../utils/fetchFilms';

// export const topfilmsRequestAsync = createAsyncThunk('topFilms/fetch', (type) =>
//   fetch(`${API_URI}/films/top?type=${type}&page=1`, {
//     headers: {
//       accept: 'application/json',
//       'X-API-KEY': API_KEY,
//     },
//   })
//     .then((req) => req.json())
//     .catch((error) => ({ error })),
// );

// const initialState = {
//   topMovies: [],
//   error: '',
// };

// const topMoviesSlice = createSlice({
//   name: 'topMovies',
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(topfilmsRequestAsync.pending, (state) => {
//         state.error = '';
//       })
//       .addCase(topfilmsRequestAsync.fulfilled, (state, action) => {
//         state.error = '';
//         state.topMovies = action.payload.films;
//       })
//       .addCase(topfilmsRequestAsync.rejected, (state, action) => {
//         state.error = action.payload.error;
//       });
//   },
// });

// export default topMoviesSlice.reducer;
