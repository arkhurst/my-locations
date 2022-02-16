import React from "react";
import { RouteProp } from "./types";
import {
  ADD_LOCATION,
  CATEGORIES,
  EDIT_LOCATION,
  LOCATIONS,
} from "./constants";

const CategoriesPage = React.lazy(() => import("../pages/categories"));
const LocationsPage = React.lazy(() => import("../pages/locations"));
const AddLocationPage = React.lazy(() => import("../pages/location-add"));
const EditLocationPage = React.lazy(() => import("../pages/location-edit"));

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
  {
    component: AddLocationPage,
    name: "Add Location",
    path: ADD_LOCATION,
    exact: true,
  },
  {
    component: EditLocationPage,
    name: "Edit Location",
    path: EDIT_LOCATION,
    exact: true,
  },
];

export default routes;
