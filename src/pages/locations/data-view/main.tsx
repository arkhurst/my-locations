import * as React from "react";
import { Location, MainComponentProp } from "./types";
import { DesktopCard, MobileCard } from "./card";
import { SortControl } from "../../../components/modules/sort";

const listSortOptions = [
  { label: "Select", value: "" },
  { label: "Address", value: "address" },
  { label: "Name", value: "name" },
  { label: "Category", value: "category" },
];

function MainComponent({
  locations,
  selectedLocations,
  setSelectedLocations,
  unselectLocation,
}: MainComponentProp) {
  const [list, setList] = React.useState<Location[]>([]);
  function handleSortChange(data: Location[]) {
    setList(data);
  }

  React.useEffect(() => {
    setList(locations);
  }, [locations]);
  return (
    <>
      <SortControl<Location>
        data={list}
        onSortChange={handleSortChange}
        sortOptions={listSortOptions}
      />
      {/* categories (only on smallest breakpoint) */}
      <div className="mt-0 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Address
          </h2>
        </div>

        <ul className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
          {list.map((location) => {
            let isLocationSelected = selectedLocations.find(
              (selectedLocation: Location) => selectedLocation === location
            );
            return (
              <React.Fragment key={location.id}>
                <MobileCard
                  location={location}
                  isLocationSelected={isLocationSelected}
                  selectedLocations={selectedLocations}
                  setSelectedLocations={setSelectedLocations}
                  unselectLocation={unselectLocation}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </div>

      {/* categories (small breakpoint and up) */}
      <div className="mt-0 hidden sm:block">
        <div className="inline-block min-w-full border border-gray-200 align-middle shadow-none">
          <table className="min-w-full">
            <thead>
              <tr className="">
                <th className="border-b border-gray-200 bg-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  <span className="lg:pl-2">Address</span>
                </th>
                <th className="border-b border-gray-200 bg-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th className="hidden border-b border-gray-200 bg-white px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell">
                  Category
                </th>
                <th className="hidden border-b border-gray-200 bg-white px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell">
                  Select
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {list.map((location) => {
                let isLocationSelected = selectedLocations.find(
                  (selectedLocation: Location) => selectedLocation === location
                );
                return (
                  <React.Fragment key={location.id}>
                    <DesktopCard
                      location={location}
                      isLocationSelected={isLocationSelected}
                      selectedLocations={selectedLocations}
                      setSelectedLocations={setSelectedLocations}
                      unselectLocation={unselectLocation}
                    />
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
