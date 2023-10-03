import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/AuthSlice';
import { namePageReducer } from './reducer';
import { reviewsReducer } from './reviews/reviewsSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    reviews: reviewsReducer,
    currentPage: namePageReducer,
    // user: userReduser,
  },
});
