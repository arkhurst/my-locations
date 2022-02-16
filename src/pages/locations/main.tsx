import { LOCATIONS } from "../../navigation/constants";
import { Header } from "../../shared/header";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { Location } from "./data-view/types";
import DataView from "./data-view";

const pages: BreadCrumbProp[] = [{ name: "Locations", href: LOCATIONS }];

const locations: Location[] = [
  {
    id: "1",
    name: "Location 1",
    category: "Category 1",
    address: "Address 1",
    coordinates: {
      latitude: 0.34,
      longitude: 22.3,
    },
  },
  {
    id: "2",
    name: "Location 2",
    category: "Category 3",
    address: "Address 2",
    coordinates: {
      latitude: 0.34,
      longitude: 22.3,
    },
  },
  {
    id: "3",
    name: "Location 3",
    category: "Category 3",
    address: "Address 3",
    coordinates: {
      latitude: 0.34,
      longitude: 22.3,
    },
  },

  {
    id: "4",
    name: "Location 4",
    category: "Category 4",
    address: "Address 4",
    coordinates: {
      latitude: 0.34,
      longitude: 22.3,
    },
  },
];

function MainComponent() {
  return (
    <>
      <div className="sticky top-0 ">
        <Header title="Manage Locations" />
        <PageToolBar pages={pages} />
      </div>
      <div className="mx-auto mt-6  w-full   max-w-7xl   ">
        <DataView locations={locations} />
      </div>
    </>
  );
}

export default MainComponent;
