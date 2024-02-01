import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '..//../service/apiRequest';

export const allCars = createAsyncThunk(
  'catalog/cars',
  async (data, thunkAPI) => {
    try {
      return getAllCars(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
