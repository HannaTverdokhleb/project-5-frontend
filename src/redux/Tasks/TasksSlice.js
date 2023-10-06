import { createSlice } from '@reduxjs/toolkit';
import { getTasks, createTask, editTask, deleteTask } from './operations';

const initialState = {
    tasks: [],
    isLoading: false,
    error: null,
}

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: {
        [getTasks.fulfilled](state, action) {
            state.tasks = [...action.payload];
            state.isLoading = false;
            state.error = null;
        },
        [getTasks.pending]: handlePending,
        [getTasks.rejected]: handleRejected,
        
        [createTask.fulfilled](state, action) {
            state.tasks.push(action.payload);
            state.isLoading = false;
            state.error = null;
        },
        [createTask.pending]: handlePending,
        [createTask.rejected]: handleRejected,
        
        [editTask.fulfilled](state, action) {
            state.tasks = state.tasks.filter(task => (task._id !== action.payload._id));
            state.tasks.push(action.payload);
            state.isLoading = false;
            state.error = null;
        },
        [editTask.pending]: handlePending,
        [editTask.rejected]: handleRejected,
        
        [deleteTask.fulfilled](state, action) {
            state.tasks = state.tasks.filter(task => (task._id !== action.payload));
            state.isLoading = false;
            state.error = null;
        },
        [deleteTask.pending]: handlePending,
        [deleteTask.rejected]: handleRejected,
    }
})

export const tasksReducer = tasksSlice.reducer;
