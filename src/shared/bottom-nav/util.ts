import { NavigationProp } from "../../navigation/types";
import { LocationMarkerIcon, ViewGridIcon } from "@heroicons/react/outline";
import { APP_HOME, LOCATIONS } from "../../navigation/constants";

export const navigation: Array<NavigationProp> = [
  {
    name: "Categories",
    icon: ViewGridIcon,
    href: [APP_HOME],
  },
  {
    name: "Locations",
    icon: LocationMarkerIcon,
    href: [LOCATIONS],
  },
];
