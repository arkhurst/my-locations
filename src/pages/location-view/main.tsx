import * as React from "react";
import { Header } from "../../shared/header";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { VIEW_LOCATION, LOCATIONS } from "../../navigation/constants";
import { MapView } from "../../components/modules/map/mapView";
import { useParams } from "react-router-dom";
import { UrlParams } from "../location-edit/types";
import { siteTitle } from "../../components/util";
import { useAppDispatch, useAppSelector } from "../../services/broker/broker";
import { getSingleLocation } from "../../services/broker/location-reducer";
import { EmptyState } from "../../components/alerts";

const pages: BreadCrumbProp[] = [
  { name: "Locations", href: LOCATIONS },
  { name: "Single Location", href: VIEW_LOCATION },
];
function MainComponent() {
  const dispatch = useAppDispatch();
  const locationId: UrlParams = useParams();

  const selectedLocation = useAppSelector(
    (state) => state.locations.selectedValue
  );
  React.useEffect(() => {
    document.title = "Single Location | " + siteTitle;
  }, []);

  React.useEffect(() => {
    if (locationId?.id) {
      dispatch(
        getSingleLocation({
          id: locationId.id,
        })
      );
    }
  }, [dispatch, locationId, selectedLocation]);

  return (
    <>
      <div className="sticky top-0 z-40 ">
        <Header title="Single Location" />
        <PageToolBar pages={pages} showActions={false} />
      </div>

      <div className="mx-auto mt-6  w-full   max-w-7xl px-4 sm:px-4 lg:px-0 ">
        {selectedLocation ? (
          <>
            <div className="grid  grid-cols-5 gap-4 sm:grid sm:grid-cols-5">
              <div className="col-span-5 sm:col-span-5 lg:col-span-3">
                <div
                  style={{
                    height: "58vh",
                  }}
                >
                  <MapView
                    lng={selectedLocation?.coordinates?.longitude}
                    lat={selectedLocation?.coordinates?.latitude}
                    address={selectedLocation?.address}
                  />
                </div>
              </div>

              <div
                style={{
                  height: "58vh",
                }}
                className="col-span-5 mt-8 border border-gray-200 sm:col-span-5 sm:mt-8 lg:col-span-2 lg:mt-0"
              >
                <dl className="space-y-8 p-4 sm:space-y-4 sm:p-6">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                      Name of location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {selectedLocation?.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {selectedLocation?.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                      Coordinates
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {selectedLocation?.coordinates?.latitude} ,{" "}
                      {selectedLocation?.coordinates?.longitude}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                      Category
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {selectedLocation?.category}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </>
        ) : (
          <>
            <EmptyState model="location" onAdd={() => {}} />
          </>
        )}
      </div>
    </>
  );
}

export default MainComponent;
