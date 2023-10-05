import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/AuthSlice';
import { namePageReducer } from './reducer';
import { reviewsReducer } from './reviews/reviewsSlice';
import { userReducer } from './User/UserSlice';
import { tasksReducer } from './Tasks/TasksSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    tasks: tasksReducer,
    reviews: reviewsReducer,
    currentPage: namePageReducer,
  },
});
