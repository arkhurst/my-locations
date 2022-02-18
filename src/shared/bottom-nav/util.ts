import { NavigationProp } from "../../navigation/types";
import { LocationMarkerIcon, ViewGridIcon } from "@heroicons/react/outline";
import {
  ADD_LOCATION,
  APP_HOME,
  EDIT_LOCATION,
  LOCATIONS,
  VIEW_LOCATION,
} from "../../navigation/constants";

export const navigation: Array<NavigationProp> = [
  {
    name: "Categories",
    icon: ViewGridIcon,
    href: [APP_HOME],
  },
  {
    name: "Locations",
    icon: LocationMarkerIcon,
    href: [LOCATIONS, ADD_LOCATION, EDIT_LOCATION, VIEW_LOCATION],
  },
];
