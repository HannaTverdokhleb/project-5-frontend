import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

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
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = action.payload;
}

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
}

const heandleLogOut = state => {
  state.user = {};
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [logIn.pending]: handlePending,

    [register.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,

    [register.fulfilled]: handleFulfilled,
    [logIn.fulfilled]:handleFulfilled,

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

    [logOut.fulfilled]:heandleLogOut,
    [logOut.rejected]:heandleLogOut,
    [logOut.pending](state) {
      state.isLoading = true;
    },
  },
});

export const authReducer = authSlice.reducer;
