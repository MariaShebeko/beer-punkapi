import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import logger from 'redux-logger';
import beersReducer from './beers/beers-reducer';

export const store = configureStore({
  reducer: {
    beers: beersReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  // .concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
