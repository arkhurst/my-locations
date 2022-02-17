import React from "react";
import { Category } from "../data-view/types";

export interface RemoveComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[];
}
