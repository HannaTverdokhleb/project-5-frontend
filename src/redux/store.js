import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/AuthSlice';
import { namePageReducer } from './reducer';
import { reviewsReducer } from './reviews/reviewsSlice';
import { userReducer } from './User/UserSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    reviews: reviewsReducer,
    currentPage: namePageReducer,
  },
});
