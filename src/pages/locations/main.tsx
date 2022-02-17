import * as React from "react";
import {
  ADD_LOCATION,
  EDIT_LOCATION,
  LOCATIONS,
} from "../../navigation/constants";
import { Header } from "../../shared/header";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { Location } from "./data-view/types";
import { useHistory } from "react-router-dom";
import { TopLoader } from "../../components/loader";
import { siteTitle } from "../../components/util";
import { EmptyState } from "../../components/alerts";
import DataView from "./data-view";

const RemoveLocation = React.lazy(() => import("./remove"));
const pages: BreadCrumbProp[] = [{ name: "Locations", href: LOCATIONS }];

const locations: Location[] = [
  {
    id: 1,
    name: "Location 1",
    category: "Category 1",
    address: "Address 1",
    coordinates: {
      latitude: 0.34,
      longitude: 22.3,
    },
  },
  {
    id: 2,
    name: "Location 2",
    category: "Category 3",
    address: "Address 2",
    coordinates: {
      latitude: 0.34,
      longitude: 22.3,
    },
  },
  {
    id: 3,
    name: "Location 3",
    category: "Category 3",
    address: "Address 3",
    coordinates: {
      latitude: 0.34,
      longitude: 22.3,
    },
  },

  {
    id: 4,
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
  const { push } = useHistory();
  const [showRemoveLocation, setShowRemoveLocation] =
    React.useState<boolean>(false);

  const [selectedLocations, setSelectedLocations] = React.useState<Location[]>(
    []
  );

  const unselectLocation = React.useCallback(
    (locationToUnselect: Location) =>
      setSelectedLocations(
        selectedLocations?.filter(
          (selectedCategory: Location) =>
            selectedCategory !== locationToUnselect
        )
      ),
    [selectedLocations]
  );

  const disableViewButton =
    selectedLocations?.length > 1 || selectedLocations?.length === 0;
  const disableEditButton =
    selectedLocations?.length > 1 || selectedLocations.length === 0;
  const disableRemoveButton = selectedLocations?.length === 0;

  React.useEffect(() => {
    document.title = " Locations | " + siteTitle;
  }, []);
  return (
    <>
      <div className="sticky top-0 ">
        <Header title="Manage Locations" />
        <PageToolBar
          disableViewButton={disableViewButton}
          disableEditButton={disableEditButton}
          disableRemoveButton={disableRemoveButton}
          pages={pages}
          onAdd={() => {
            push(ADD_LOCATION);
          }}
          showActions
          onEdit={() => {
            push(EDIT_LOCATION);
          }}
          onRemove={() => {
            setShowRemoveLocation(true);
          }}
        />
      </div>
      <div className="mx-auto mt-6 w-full max-w-7xl">
        {locations.length === 0 ? (
          <>
            <EmptyState
              model="locations"
              canAdd
              onAdd={() => {
                push(ADD_LOCATION);
              }}
            />
          </>
        ) : (
          <>
            <DataView
              locations={locations}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
              unselectLocation={unselectLocation}
            />
          </>
        )}
      </div>
      <React.Suspense fallback={TopLoader()}>
        <RemoveLocation
          setShow={setShowRemoveLocation}
          show={showRemoveLocation}
          locations={selectedLocations}
        />
      </React.Suspense>
    </>
  );
}

export default MainComponent;
