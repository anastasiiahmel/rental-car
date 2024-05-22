import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { favoriteReducer } from './cars/favoritesSlice'; 
import { catalogReducer } from './cars/slice';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer); 
const reducer = {
  favorite: persistedReducer,
  catalog: catalogReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
