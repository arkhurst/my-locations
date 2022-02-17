import React from "react";
import { Category } from "../data-view/types";

export interface EditComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category[];
}

export type EditCategoryFormInput = {
  name: string;
  id: number;
};
