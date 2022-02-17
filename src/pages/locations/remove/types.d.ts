import React from "react";
import { Location } from "../data-view/types";

export interface RemoveComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  locations: Location[];
}
