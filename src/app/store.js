import { configureStore, combineReducers } from '@reduxjs/toolkit';
import imageReducer from '../reducers/imageReducer';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'images',
  storage,
};

const reducers = combineReducers({ images: imageReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

/* Used the redux-persist package to persist the redux store and save it on localStorage */

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
});
