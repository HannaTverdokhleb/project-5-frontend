<<<<<<< Updated upstream
import { namePageReducer } from './reducer';

=======
<<<<<<< HEAD
>>>>>>> Stashed changes
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    currentPage: namePageReducer,
  },
});
=======
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './Auth/AuthSlice';
import { reviewsReducer } from './reviews/reviewsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    reviews: reviewsReducer,
    // tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
>>>>>>> 1eafb27311cf4d1be0b30807191dac703054d964
