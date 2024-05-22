import { createSlice } from '@reduxjs/toolkit';
import { allCars } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  catalog: [],
  price: '',
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allCars.fulfilled, (state, { payload }) => {
        state.catalog = [...payload];
        state.isLoading = false;
      })
      .addCase(allCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: catalogReducer } = catalogSlice;
