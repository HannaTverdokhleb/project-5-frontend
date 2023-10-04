import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-backend-54zr.onrender.com';


const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('TOKEN', token);
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
  localStorage.removeItem('TOKEN');
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/auth/register', credentials);

      const res_login = await axios.post('/auth/login', {
        email: credentials.email,
        password: credentials.password
      });
      const token = res_login.data.data.token;
      setAuthHeader(token);

      const res_current = await axios.get('/users/current');
      const user = res_current.data.data;

      return {
        token,
        user
      };
    } catch(error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res_login = await axios.post('/auth/login', credentials);
      const token = res_login.data.data.token;
      setAuthHeader(token);
      const res_current = await axios.get('/users/current');
      const user = res_current.data.data;
      return {
        token,
        user
      };
    } catch(error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = localStorage.getItem('TOKEN');
    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(savedToken);
      const res = await axios.get('/users/current');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
