import { namePageReducer } from './reducer';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    currentPage: namePageReducer,
  },
});
