import * as React from "react";
import { ADD_LOCATION, LOCATIONS } from "../../navigation/constants";
import { Header } from "../../shared/header";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import Map from "../../components/modules/map";

const pages: BreadCrumbProp[] = [
  { name: "Locations", href: LOCATIONS },
  { name: "Add Location", href: ADD_LOCATION },
];

function MainComponent() {
  const [longitude, setLogitue] = React.useState<string>("");
  const [latitude, setLatitude] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  return (
    <>
      <div className="sticky top-0 ">
        <Header title="Add Location" />
        <PageToolBar pages={pages} showActions={false} />
      </div>
      <div className="mx-auto mt-6  w-full   max-w-7xl   ">
        <div className="grid  grid-cols-5 gap-4 sm:grid sm:grid-cols-5">
          <div className="col-span-5 sm:col-span-5 lg:col-span-2">inputs</div>
          <div className="col-span-5 sm:col-span-5 lg:col-span-3">
            <div
              style={{
                height: "50vh",
              }}
            >
              <Map
                setLng={setLogitue}
                setLat={setLatitude}
                setAddress={setAddress}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
