import React from "react";

export interface EditComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category[];
}

export type EditCategoryFormInput = {
  name: string;
};
