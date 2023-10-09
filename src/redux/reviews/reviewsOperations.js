import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-backend-54zr.onrender.com';

const token = localStorage.getItem("TOKEN");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/reviews');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchOwnReview = createAsyncThunk(
  'reviews/own',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/reviews/own');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    try {
      const res = await axios.post('/reviews/own', review);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    try {
      await axios.delete('/reviews/own');
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (review, thunkAPI) => {
    try {
      const res = await axios.patch('/reviews/own', review);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
