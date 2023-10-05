import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-backend-54zr.onrender.com';
const token = localStorage.getItem("TOKEN");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const editUser = createAsyncThunk(
  'user/edit',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.put('/users/edit', credentials);
      return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/get',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/users/current');
      return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const patchTheme = createAsyncThunk(
  'user/patchTheme',
  async (credentials, thunkAPI) => {
    try {
      await axios.patch('/users/theme', credentials);
      localStorage.setItem('theme', credentials.theme);
      return credentials.theme;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const patchPassword = createAsyncThunk(
  'user/patchPassword',
  async (credentials, thunkAPI) => {
    try {
      await axios.patch('/users/password', credentials);
      return true;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const patchAvatar = createAsyncThunk(
  'user/patchAvatar',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch('/users/avatar', credentials, {
        headers: {
          'content-type': 'multipart/form-data',
        }
      });
      return res.data.data.avatarURL;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
