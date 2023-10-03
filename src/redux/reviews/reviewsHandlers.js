export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  if (payload.includes('have no any review')) {
    state.ownReview = {};
  }
  state.error = payload;
};

export const handleFulfilled = (state, { payload }) => {
  state.reviews = payload.reviews;
  state.isLoading = false;
  state.error = null;
};

export const handlefetchOwnReviewsFulfilled = (state, { payload }) => {
  state.ownReview = payload.review;
  state.isLoading = false;
  state.error = null;
};

export const handleAddReviewFulfilled = (state, { payload }) => {
  state.reviews.push(payload.ownReview);
  state.ownReview = payload.review;
  state.isLoading = false;
  state.error = null;
};

export const handleDeleteReviewFulfilled = (state, _) => {
  state.ownReview = {};
  state.isLoading = false;
  state.error = null;
};

export const handleUpdateReviewFulfilled = (state, { payload }) => {
  state.ownReview = payload.review;
  state.isLoading = false;
  state.error = null;
};

export const handleLogoutFulfilled = (state, { payload }) => {
  // state.reviews = payload.reviews;
  state.ownReview = {};
  state.error = null;
  state.isLoading = false;
};
