import React from "react";

export interface RouteProp {
  name: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  exact: boolean;
  path: string;
}

export interface NavigationProp {
  href: string[];
  icon?: any;
  name: string;
}
