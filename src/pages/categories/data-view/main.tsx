import * as React from "react";
import { MainComponentProp } from "./types";
import { DesktopCard, MobileCard } from "./card";

function MainComponent({ categories }: MainComponentProp) {
  return (
    <>
      {/* categories (only on smallest breakpoint) */}
      <div className="mt-0 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Categories
          </h2>
        </div>

        <ul className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
          {categories.map((category) => (
            <React.Fragment key={category.id}>
              <MobileCard category={category} />
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* categories (small breakpoint and up) */}
      <div className="mt-0 hidden sm:block">
        <div className="inline-block min-w-full border border-gray-200 align-middle shadow-none">
          <table className="min-w-full">
            <thead>
              <tr className="">
                <th className="border-b border-gray-200 bg-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  <span className="lg:pl-2">Category</span>
                </th>

                <th className="hidden border-b border-gray-200 bg-white px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell">
                  Select
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {categories.map((category) => (
                <React.Fragment key={category.id}>
                  <DesktopCard category={category} />
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
