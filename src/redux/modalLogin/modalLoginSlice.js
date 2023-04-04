import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isUserLogIn: false,
};

const modalLoginSlice = createSlice({
  name: 'modalLogin',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    logIn: (state) => {
      localStorage.getItem('login') ? (state.isUserLogIn = true) : (state.isUserLogIn = false);
      console.log(state.isUserLogIn);
    },
    // logOut: (state) => {
    //   // console.log(localStorage.getItem('login'));
    //   state.isUserLogIn = false;
    // },
  },
});

export const { openModal, closeModal, logIn } = modalLoginSlice.actions;
export default modalLoginSlice.reducer;
