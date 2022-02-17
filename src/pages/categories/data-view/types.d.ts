import React from "react";

export interface CardComponentProp {
  category: Category;
  isCategorySelected?: Category;
  selectedCategories: Array<Category>;
  setSelectedCategories: React.Dispatch<React.SetStateAction<Array<Category>>>;
  unselectCategory: (categoryToUnselect: Category) => void;
}

export interface MainComponentProp {
  categories: Array<Category>;
  selectedCategories: Array<Category>;
  setSelectedCategories: React.Dispatch<React.SetStateAction<Array<Category>>>;
  unselectCategory: (categoryToUnselect: Category) => void;
}

export type Category = {
  name: string;
  id: number;
};
