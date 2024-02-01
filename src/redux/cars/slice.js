import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from '.';

const initialState = {
  isLoading: false,
  error: null,
  catalog: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.catalog = [
          ...state.catalog,
          ...(Array.isArray(payload) ? payload : [payload]),
        ];
        state.isLoading = false;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: catalogReduser } = catalogSlice;
