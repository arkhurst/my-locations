import { CardComponentProp } from "./types";
import { classNames } from "../../../components/className";

function DesktopCard({ category }: CardComponentProp) {
  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="w-full max-w-0 cursor-pointer  whitespace-nowrap px-6 py-3 text-xs font-medium text-gray-900 ">
          <div className="flex items-center space-x-3 lg:pl-2">
            <div
              className={classNames(
                "bg-gray-500",
                "h-2.5 w-2.5 flex-shrink-0 rounded-full"
              )}
              aria-hidden="true"
            />
            <span className="font-normal text-gray-500">{category.name}</span>
          </div>
        </td>

        <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
          <input
            id={`person-${category.id}`}
            name={`person-${category.id}`}
            type="checkbox"
            className="h-4 w-4 cursor-pointer rounded-none border-gray-300 text-gray-600 focus:ring-0"
          />
        </td>
      </tr>
    </>
  );
}

function MobileCard({ category }: CardComponentProp) {
  return (
    <>
      <li>
        <div className="group flex items-center justify-between px-4 py-4 text-sm hover:bg-gray-50 sm:px-6">
          <span className="flex items-center space-x-3 truncate">
            <span
              className={classNames(
                "bg-gray-500",
                "h-2.5 w-2.5 flex-shrink-0 rounded-full"
              )}
              aria-hidden="true"
            />

            <span className="truncate font-normal text-gray-500">
              {category.name}
            </span>
          </span>
          <input
            id={`person-${category.id}`}
            name={`person-${category.id}`}
            type="checkbox"
            className="h-4 w-4 cursor-pointer rounded-none border-gray-300 text-gray-600 focus:ring-0"
          />
        </div>
      </li>
    </>
  );
}

export { DesktopCard, MobileCard };
