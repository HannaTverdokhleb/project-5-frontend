import { createSlice } from '@reduxjs/toolkit';
import {
  addReview,
  deleteReview,
  fetchOwnReviews,
  fetchReviews,
  updateReview,
} from './reviewsOperations';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  handlefetchOwnReviewsFulfilled,
  handleAddReviewFulfilled,
  handleDeleteReviewFulfilled,
  handleUpdateReviewFulfilled,
  handleLogoutFulfilled,
} from './reviewsHandlers';

import { logOut } from 'redux/Auth/operations';

const initialState = {
  reviews: [],
  ownReview: {},
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    changeRating(state, { payload }) {
      state.ownReview.rating = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.pending, handlePending)
      .addCase(fetchReviews.fulfilled, handleFulfilled)
      .addCase(fetchReviews.rejected, handleRejected)

      .addCase(fetchOwnReviews.pending, handlePending)
      .addCase(fetchOwnReviews.fulfilled, handlefetchOwnReviewsFulfilled)
      .addCase(fetchOwnReviews.rejected, handleRejected)

      .addCase(addReview.pending, handlePending)
      .addCase(addReview.fulfilled, handleAddReviewFulfilled)
      .addCase(addReview.rejected, handleRejected)

      .addCase(deleteReview.pending, handlePending)
      .addCase(deleteReview.fulfilled, handleDeleteReviewFulfilled)
      .addCase(deleteReview.rejected, handleRejected)

      .addCase(updateReview.pending, handlePending)
      .addCase(updateReview.fulfilled, handleUpdateReviewFulfilled)
      .addCase(updateReview.rejected, handleRejected)

      .addCase(logOut.fulfilled, handleLogoutFulfilled)
      .addCase(logOut.rejected, handleRejected);
  },
});

export const { changeRating } = reviewsSlice.actions;

export const reviewsReducer = reviewsSlice.reducer;
