import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/AuthSlice';
import { tasksReducer } from './Tasks/TasksSlice';
import { reviewsReducer } from './reviews/reviewsSlice';
import { namePageReducer } from './reducer';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    reviews: reviewsReducer,
    currentPage: namePageReducer,
  },
});
