import { createSlice } from "@reduxjs/toolkit";
import { CategoriesData } from "../../data/categories";
import {
  AddCategoryPayLoad,
  CategoryToEditProp,
  EditCategoryPayLoad,
  RemoveCategoryPayLoad,
} from "./types";

const categoryToEdit: CategoryToEditProp = {};

export const categorySlice = createSlice({
  name: "categories",
  initialState: { value: CategoriesData, selectedValue: categoryToEdit },
  reducers: {
    addCategory: (state, action: AddCategoryPayLoad) => {
      state.value.push(action.payload);
    },
    removeCategory: (state, action: RemoveCategoryPayLoad) => {
      state.value = state.value.filter(
        (category) => category.id !== action.payload.id
      );
    },

    getSingleCategory: (state, action) => {
      state.selectedValue = state.value.find(
        (category) => category.id === action.payload.id
      );
    },
    editCategory: (state, action: EditCategoryPayLoad) => {
      state.value.forEach((category) => {
        if (category.id === action.payload.id) {
          category.name = action.payload.name;
        }
      });
    },
  },
});
export const { addCategory, removeCategory, getSingleCategory, editCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
