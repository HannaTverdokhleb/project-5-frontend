import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-backend-54zr.onrender.com';


export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('TOKEN', token);
};

export const checkAuthHeader = () => {
  const token = localStorage.getItem('TOKEN');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return true;
  }
  return false;
}

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
        password: credentials.password,
      });
      const token = res_login.data.data.token;
      setAuthHeader(token);

      const res_current = await axios.get('/users/current');
      const user = res_current.data.data;

      return { user };
    } catch (error) {
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
      return { user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      if (checkAuthHeader()) {
        const res = await axios.get('/users/current');
        return res.data.data;
      }
      return thunkAPI.rejectWithValue('You are not logged in');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);



export const editUser = createAsyncThunk(
  'user/edit',
  async (userInfo, thunkAPI) => {
    try {
      if (checkAuthHeader()) {
        const res = await axios.put('/users/edit', userInfo);
        return res.data.data;
      }
      return thunkAPI.rejectWithValue('You are not logged in');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const patchTheme = createAsyncThunk(
  'user/patchTheme',
  async (theme, thunkAPI) => {
    try {
      if (checkAuthHeader()) {
        await axios.patch('/users/theme', { theme });
        localStorage.setItem('theme', theme);
        return theme;
      }
      return thunkAPI.rejectWithValue('You are not logged in');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const patchPassword = createAsyncThunk(
  'user/patchPassword',
  async (password, thunkAPI) => {
    try {
      if (checkAuthHeader()) {
        await axios.patch('/users/password', { password });
        return true;
      }
      return thunkAPI.rejectWithValue('You are not logged in');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const patchAvatar = createAsyncThunk(
  'user/patchAvatar',
  async (avatar, thunkAPI) => {
    try {
      if (checkAuthHeader()) {
        const res = await axios.patch('/users/avatar', { avatar }, {
          headers: {
            'content-type': 'multipart/form-data',
          }
        });
        return res.data.data.avatarURL;
      }
      return thunkAPI.rejectWithValue('You are not logged in');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
