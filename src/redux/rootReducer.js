import { combineReducers } from '@reduxjs/toolkit';
import { catalogReducer } from './cars/slice';

const rootReducer = combineReducers({
  catalog: catalogReducer,
});

export default rootReducer;
