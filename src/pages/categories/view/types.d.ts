import React from "react";

export interface MainComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
