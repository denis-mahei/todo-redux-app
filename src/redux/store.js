import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice.js';

const persistConfig = {
  key: 'user-todos',
  storage,
};

const persistedTodosReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
