import React from "react";

export interface AddComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AddCategoryFormInput = {
  name: string;
};
