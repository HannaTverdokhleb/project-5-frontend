import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-backend-54zr.onrender.com';
const token = localStorage.getItem("TOKEN");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;


export const getTasks = createAsyncThunk(
  'tasks/get',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/tasks/');
      return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/create',
  async (taskInfo, thunkAPI) => {
    try {
      const res = await axios.post('/tasks/', taskInfo);
      return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/edit',
  async (task, thunkAPI) => {
    try {
      const task_id = task._id;
      const task_backup = { ...task };
      delete task._id;
      delete task.owner;
      delete task.createdAt;
      delete task.updatedAt;
      await axios.patch('/tasks/' + task_id, task);
      return task_backup;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (task_id, thunkAPI) => {
    try {
      await axios.delete('/tasks/' + task_id);
      return task_id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
