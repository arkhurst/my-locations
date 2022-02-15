import React from "react";
import { RouteProp } from "./types";
import { CATEGORIES, LOCATIONS } from "./constants";

const CategoriesPage = React.lazy(() => import("../pages/categories"));
const LocationsPage = React.lazy(() => import("../pages/locations"));

const routes: RouteProp[] = [
  {
    component: CategoriesPage,
    name: "Categories",
    path: CATEGORIES,
    exact: true,
  },
  {
    component: LocationsPage,
    name: "Locations",
    path: LOCATIONS,
    exact: true,
  },
];

export default routes;
