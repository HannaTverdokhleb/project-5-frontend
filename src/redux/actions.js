import { createAction } from '@reduxjs/toolkit';

export const currentPage = createAction('page/pageName', namePage => {
  return {
    payload: {
      namePage,
    },
  };
});
