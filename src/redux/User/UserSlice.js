import { createSlice } from '@reduxjs/toolkit';
import { editUser, getUser, patchTheme, patchPassword, patchAvatar } from './operations';

const initialState = {
    name: null,
    phone: null,
    birthday: null,
    skype: null,
    email: null,
    reviews: null,
    tasks: null,
    avatarURL: null,
    theme: 'light',
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

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [editUser.fulfilled](state, action) {
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                error: null,
            }
        },
        [editUser.pending]: handlePending,
        [editUser.rejected]: handleRejected,
        
        [getUser.fulfilled](state, action) {
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                error: null,
            }
        },
        [getUser.pending]: handlePending,
        [getUser.rejected]: handleRejected,
        
        [patchTheme.fulfilled](state, action) {
            state.theme = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [patchTheme.pending]: handlePending,
        [patchTheme.rejected]: handleRejected,
        
        [patchPassword.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
        },
        [patchPassword.pending]: handlePending,
        [patchPassword.rejected]: handleRejected,

        [patchAvatar.fulfilled](state, action) {
            state.avatarURL = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [patchAvatar.pending]: handlePending,
        [patchAvatar.rejected]: handleRejected,
    }
})

export const userReducer = userSlice.reducer;
