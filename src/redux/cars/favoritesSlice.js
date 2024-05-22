import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteModel(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavoriteModel(state, { payload }) {
      const index = state.favorites.findIndex((car) => car.id === payload);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavoriteModel, removeFavoriteModel } = favoriteSlice.actions;
