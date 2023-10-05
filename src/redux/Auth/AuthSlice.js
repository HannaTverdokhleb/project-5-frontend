import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
  user: {
    theme: "light",
  },
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = action.payload;
};

// const handleFulfilled = (state, action) => {
//   state.user = action.payload.user;
//   state.isLoggedIn = true;
//   state.isLoading = false;
//   state.error = null;
// }
const handleRejectedLogin = (state, action) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = action.payload;
  Notify.failure(`Email or password incorrect`, {
    width: '320px',
    timeout: 3000,
    position: 'top-right',
  });
};

const handleFulfilledLogin = (state, action) => {
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
  Notify.success(`Login successful`, {
    width: '320px',
    timeout: 3000,
    position: 'top-right',
  });
};

const handleFulfilledRegistration = (state, action) => {
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
  Notify.success(`Registration successful`, {
    width: '320px',
    timeout: 3000,
    position: 'top-right',
  });
};

const heandleLogOut = state => {
  state.user = {};
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [logIn.pending]: handlePending,

    [register.rejected]: handleRejected,
    [logIn.rejected]: handleRejectedLogin,

    [register.fulfilled]: handleFulfilledRegistration,
    [logIn.fulfilled]: handleFulfilledLogin,

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },

    [logOut.fulfilled]: heandleLogOut,
    [logOut.rejected]: heandleLogOut,
    [logOut.pending](state) {
      state.isLoading = true;
    },
  },
});

export const authReducer = authSlice.reducer;
