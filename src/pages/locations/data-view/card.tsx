import { CardComponentProp } from "./types";
import { classNames } from "../../../components/className";

function DesktopCard({
  location,
  unselectLocation,
  selectedLocations,
  setSelectedLocations,
  isLocationSelected,
}: CardComponentProp) {
  return (
    <>
      <tr
        onClick={() => {
          if (isLocationSelected) unselectLocation(location);
          else setSelectedLocations([...selectedLocations, location]);
        }}
        className="cursor-pointer  hover:bg-gray-50"
      >
        <td className="w-10/12 max-w-0  whitespace-nowrap px-6 py-3 text-xs font-medium text-gray-900 ">
          <div className="flex items-center space-x-3 lg:pl-2">
            <div
              className={classNames(
                "bg-gray-500",
                "h-2.5 w-2.5 flex-shrink-0 rounded-full"
              )}
              aria-hidden="true"
            />
            <span className="font-normal text-gray-500">
              {location.address}
            </span>
          </div>
        </td>
        <td className="w-full px-6 py-3 text-xs font-medium text-gray-500 ">
          {location.name}
        </td>
        <td className="hidden whitespace-nowrap px-6 py-3 text-right text-xs text-gray-500 md:table-cell">
          {location.category}
        </td>
        <td className="whitespace-nowrap px-6 py-3 text-right text-xs font-medium">
          <input
            id={`category-${location.id}`}
            name={`category-${location.id}`}
            type="checkbox"
            checked={isLocationSelected?.id === location.id ? true : false}
            onChange={() => {
              if (isLocationSelected) unselectLocation(location);
              else setSelectedLocations([...selectedLocations, location]);
            }}
            className="h-4 w-4 cursor-pointer rounded-none border-gray-300 text-gray-600 focus:ring-0"
          />
        </td>
      </tr>
    </>
  );
}

function MobileCard({
  location,
  selectedLocations,
  setSelectedLocations,
  isLocationSelected,
  unselectLocation,
}: CardComponentProp) {
  return (
    <>
      <li
        onChange={() => {
          if (isLocationSelected) unselectLocation(location);
          else setSelectedLocations([...selectedLocations, location]);
        }}
        className="group flex cursor-pointer items-center justify-between px-4 py-4 text-sm hover:bg-gray-50 sm:px-6"
      >
        <span className="flex items-center space-x-3 truncate">
          <span
            className={classNames(
              "bg-gray-500",
              "h-2.5 w-2.5 flex-shrink-0 rounded-full"
            )}
            aria-hidden="true"
          />

          <span className="truncate font-normal text-gray-500">
            {location.address}
          </span>
        </span>
        <input
          id={`location-${location.id}`}
          name={`location-${location.id}`}
          type="checkbox"
          checked={isLocationSelected?.id === location.id ? true : false}
          onChange={() => {
            if (isLocationSelected) unselectLocation(location);
            else setSelectedLocations([...selectedLocations, location]);
          }}
          className="h-4 w-4 cursor-pointer rounded-none border-gray-300 text-gray-600 focus:ring-0"
        />
      </li>
    </>
  );
}

export { DesktopCard, MobileCard };
