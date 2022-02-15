import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationProp } from "../../navigation/types";
import { navigation } from "./util";
import { classNames } from "../../components/className";

function BottomNav() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="text-gray-font fixed   bottom-0 z-40 flex h-20 w-full justify-center border-t border-gray-200 bg-white  py-2 shadow-none">
        <div className="mx-auto mb-8 w-full max-w-7xl px-2 sm:px-4 lg:px-0">
          <div className="flex w-full flex-row items-center justify-between  p-1">
            {navigation.map((item: NavigationProp) => (
              <React.Fragment key={item.name}>
                <Link
                  to={item.href[0]}
                  className={classNames(
                    item.href.includes(pathname)
                      ? "bg-gray-50 text-gray-500"
                      : "bg-white text-gray-500",
                    "group flex-auto  p-1"
                  )}
                >
                  <div className="mx-auto flex flex-row items-center justify-center px-4 py-2 text-center  group-hover:w-full">
                    <item.icon className="h-6 w-6" />
                    <span className="ml-2  font-medium">{item.name}</span>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { BottomNav };
