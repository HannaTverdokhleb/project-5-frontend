import { createSlice } from '@reduxjs/toolkit';
import {
  register, logIn, logOut, refreshUser,
  editUser, patchTheme, patchPassword, patchAvatar,
} from './operations';

const initialState = {
  user: {
    name: null,
    phone: null,
    birthday: null,
    skype: null,
    email: null,
    reviews: null,
    tasks: null,
    avatarURL: null,
    theme: null,
  },
  isLoggedIn: false,
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

const handleRejectedLogin = (state, action) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = action.payload;
};

const handleFulfilledLogin = (state, action) => {
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledRegistration = (state, action) => {
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const handleLogOut = state => {
  state.user = {};
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

const handleRejectedUser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [register.fulfilled]: handleFulfilledRegistration,

    [logIn.pending]: handlePending,
    [logIn.rejected]: handleRejectedLogin,
    [logIn.fulfilled]: handleFulfilledLogin,

    [refreshUser.pending]: handlePending,
    [refreshUser.rejected]: handleRejected,
    [refreshUser.fulfilled]: handleFulfilledRefresh,

    [logOut.pending]: handlePending,
    [logOut.rejected]: handleLogOut,
    [logOut.fulfilled]: handleLogOut,



    [editUser.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload };
      state.isLoading = false;
      state.error = null;
    },
    [editUser.pending]: handlePending,
    [editUser.rejected]: handleRejectedUser,


    [patchTheme.fulfilled](state, action) {
      state.user.theme = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [patchTheme.pending]: handlePending,
    [patchTheme.rejected]: handleRejectedUser,


    [patchPassword.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
    },
    [patchPassword.pending]: handlePending,
    [patchPassword.rejected]: handleRejectedUser,


    [patchAvatar.fulfilled](state, action) {
        state.user.avatarURL = action.payload;
        state.isLoading = false;
        state.error = null;
    },
    [patchAvatar.pending]: handlePending,
    [patchAvatar.rejected]: handleRejectedUser,
  },
});

export const authReducer = authSlice.reducer;
