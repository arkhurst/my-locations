import React from "react";
import { Category } from "../data-view/types";

export interface MainComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category[];
}
