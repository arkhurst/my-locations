import React from "react";

export interface EditComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export type EditCategoryFormInput = {
  name: string;
};
