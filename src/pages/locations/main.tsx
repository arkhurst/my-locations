import * as React from "react";
import { ADD_LOCATION, LOCATIONS } from "../../navigation/constants";
import { Header } from "../../shared/header";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { Location } from "./data-view/types";
import { useHistory } from "react-router-dom";
import { TopLoader } from "../../components/loader";
import { siteTitle } from "../../components/util";
import { EmptyState } from "../../components/alerts";
import { useAppSelector } from "../../services/broker/broker";
import DataView from "./data-view";

const RemoveLocation = React.lazy(() => import("./remove"));
const pages: BreadCrumbProp[] = [{ name: "Locations", href: LOCATIONS }];

function MainComponent() {
  const locationList = useAppSelector((state) => state.locations.value);

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
            push(`/location/edit/${selectedLocations[0]?.id}`);
          }}
          onRemove={() => {
            setShowRemoveLocation(true);
          }}
          onView={() => {
            push(`/location/view/${selectedLocations[0]?.id}`);
          }}
        />
      </div>
      <div className="mx-auto mt-6 w-full max-w-7xl">
        {locationList?.length === 0 ? (
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
              locations={locationList}
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
