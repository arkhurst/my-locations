import { createSlice } from "@reduxjs/toolkit";
import { CategoriesData } from "../../data/categories";
import { CategoryToEditProp } from "./types";

const categoryToEdit: CategoryToEditProp = {};

export const categorySlice = createSlice({
  name: "categories",
  initialState: { value: CategoriesData, selectedValue: categoryToEdit },
  reducers: {
    addCategory: (state, action) => {
      state.value.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.value = state.value.filter(
        (category) => category.id !== action.payload.id
      );
    },

    getSingleCategory: (state, action) => {
      state.selectedValue = state.value.find(
        (category) => category.id === action.payload.id
      );
    },
    editCategory: (state, action) => {
      state.value.forEach((category) => {
        if (category.id === action.payload.id) {
          category.name = action.payload.name;
        }
      });
    },
  },
});
export const { addCategory, deleteCategory, getSingleCategory, editCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
