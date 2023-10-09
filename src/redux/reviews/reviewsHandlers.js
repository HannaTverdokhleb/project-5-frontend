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

export const handleFulfilled = (state, action) => {
  state.reviews = [ ...action.payload ];
  state.isLoading = false;
  state.error = null;
};

export const handlefetchOwnReviewFulfilled = (state, action) => {
  state.ownReview = action.payload || {};
  state.isLoading = false;
  state.error = null;
};

export const handleAddReviewFulfilled = (state, { payload }) => {
  state.ownReview = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleDeleteReviewFulfilled = (state, _) => {
  state.ownReview = {};
  state.isLoading = false;
  state.error = null;
};

export const handleUpdateReviewFulfilled = (state, { payload }) => {
  state.ownReview = payload;
  state.isLoading = false;
  state.error = null;
};
