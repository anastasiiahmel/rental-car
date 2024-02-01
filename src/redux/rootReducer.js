import { combineReducers } from '@reduxjs/toolkit';

import { catalogReduser } from './cars/slice';

const rootReducer = combineReducers({
  catalog: catalogReduser,
});

export { rootReducer };
