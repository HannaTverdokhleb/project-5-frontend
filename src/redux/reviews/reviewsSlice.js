import { createSlice } from '@reduxjs/toolkit';
import { addReview, deleteReview, fetchOwnReview, fetchReviews, updateReview } from './reviewsOperations';
import { handleFulfilled, handlePending, handleRejected, handlefetchOwnReviewFulfilled, handleAddReviewFulfilled, handleDeleteReviewFulfilled, handleUpdateReviewFulfilled } from './reviewsHandlers';

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

      .addCase(fetchOwnReview.pending, handlePending)
      .addCase(fetchOwnReview.fulfilled, handlefetchOwnReviewFulfilled)
      .addCase(fetchOwnReview.rejected, handleRejected)

      .addCase(addReview.pending, handlePending)
      .addCase(addReview.fulfilled, handleAddReviewFulfilled)
      .addCase(addReview.rejected, handleRejected)

      .addCase(deleteReview.pending, handlePending)
      .addCase(deleteReview.fulfilled, handleDeleteReviewFulfilled)
      .addCase(deleteReview.rejected, handleRejected)

      .addCase(updateReview.pending, handlePending)
      .addCase(updateReview.fulfilled, handleUpdateReviewFulfilled)
      .addCase(updateReview.rejected, handleRejected)
  },
});

export const { changeRating } = reviewsSlice.actions;

export const reviewsReducer = reviewsSlice.reducer;
