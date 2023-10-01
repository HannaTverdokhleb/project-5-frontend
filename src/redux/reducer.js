import { createReducer } from '@reduxjs/toolkit';
import { currentPage } from './actions';

const namePageInitialState = {
  namePage: '',
};

export const namePageReducer = createReducer(namePageInitialState, {
  [currentPage]: (state, action) => {
    state.namePage = action.payload.namePage;
    // console.log(action);
  },
});
