const { configureStore } = require('@reduxjs/toolkit');

export const srore = configureStore({
  reducer: {
    namePage: {},
  },
});
