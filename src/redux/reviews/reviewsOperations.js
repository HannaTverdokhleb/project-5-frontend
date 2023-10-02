import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-backend-54zr.onrender.com';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/reviews');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOwnReviews = createAsyncThunk(
  'reviews/own',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/reviews/own');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    try {
      const response = await axios.post('/reviews', review);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    try {
      const res = await axios.delete(`/reviews/own`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (review, thunkAPI) => {
    try {
      const res = await axios.patch(`/reviews/own`, review);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
