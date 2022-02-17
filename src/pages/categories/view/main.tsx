import * as React from "react";

import { BasicModal } from "../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { MainComponentProp } from "./types";
import { LocationMarkerIcon } from "@heroicons/react/outline";

const locations = [
  {
    name: "something nice here",
    id: 1,
  },
  {
    name: "we going to have fun",
    id: 2,
  },
  {
    name: "let go get this",
    id: 3,
  },
];

function MainComponent({ setShow, show }: MainComponentProp) {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });
  return (
    <>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 35}
      >
        <div className="py-6">
          <span className={"mt-5 px-6 text-lg font-medium"}>
            Locations in this Category
          </span>

          <div
            style={{
              maxHeight: "50vh",
            }}
            className="mt-4 inline-block min-w-full overflow-y-auto border-none align-middle shadow-none"
          >
            <table className="min-w-full">
              <thead>
                <tr className="">
                  <th className="border-none bg-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    <span className="lg:pl-2">Locations - Addresses</span>
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white">
                {locations.map((location) => (
                  <React.Fragment key={location.id}>
                    <tr>
                      <td className="w-full max-w-0   whitespace-nowrap px-6 py-3 text-xs font-medium text-gray-900 ">
                        <div className="flex items-center space-x-3 lg:pl-2">
                          <LocationMarkerIcon className="h-3 w-3 text-green-500" />
                          <span className="font-normal text-gray-500">
                            {location.name}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex justify-end border-t border-gray-200 px-6 pt-4">
            <span className="mr-2 inline-flex rounded-none shadow-sm ">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="flex h-10 w-32 items-center justify-center rounded-none border border-gray-300 bg-white px-6 py-2 text-xs font-light leading-5 text-gray-900 transition duration-150 ease-in-out hover:bg-white hover:text-gray-800  focus:border-gray-300 focus:outline-none"
              >
                <span className="mx-1">Close</span>
              </button>
            </span>
          </div>
        </div>
      </BasicModal>
    </>
  );
}

export default MainComponent;
