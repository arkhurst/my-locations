import * as React from "react";
import { RemoveComponentProp } from "./types";
import { BasicModal } from "../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { Category } from "../data-view/types";

function MainComponent({ setShow, show, categories }: RemoveComponentProp) {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  return (
    <>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 28}
      >
        <div className="py-6">
          <span className={"mt-5 px-6 text-lg font-medium"}>
            {categories?.length > 1 ? " Remove Categories" : " Remove Category"}
          </span>
          <div className="mt-5 grid grid-cols-1 gap-y-4 gap-x-2 overflow-y-auto px-6 sm:grid-cols-6">
            {categories?.length > 1 ? (
              <>
                <div className="sm:col-span-6">
                  <span className="block pb-1 text-xs font-normal leading-5 text-gray-600">
                    Are you sure you want to remove these categories? All
                    locations related to this category will be permanently
                    removed forever. This action cannot be undone.
                  </span>
                  <ul className="list-disc space-y-2 px-3">
                    {categories.map((category: Category) => (
                      <React.Fragment key={category.id}>
                        <li className="text-xs font-bold text-gray-700">
                          {category.name}
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="sm:col-span-6">
                  <span className="block pb-1 text-xs font-normal leading-5 text-gray-600">
                    Are you sure you want to remove category{" "}
                    <span className="font-bold text-gray-800">
                      {categories[0]?.name}
                    </span>{" "}
                    from your record? All locations related to this category
                    will be permanently removed forever. This action cannot be
                    undone.
                  </span>
                </div>
              </>
            )}
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
            <span className="inline-flex rounded-none shadow-sm ">
              <button className="focus:shadow-outline-gray a border-transparent flex h-10 w-32 flex-row items-center justify-center rounded-none border  bg-red-500 px-4 py-2 text-xs font-light  leading-5  text-white transition duration-150  ease-in-out hover:bg-red-600 focus:border-red-600 focus:outline-none">
                <span className="mx-0">Remove</span>
              </button>
            </span>
          </div>
        </div>
      </BasicModal>
    </>
  );
}

export default MainComponent;
