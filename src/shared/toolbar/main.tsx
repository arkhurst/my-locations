import * as React from "react";
import {
  EyeIcon,
  HomeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";
import { ToolBarComponentProp } from "./types";
import { TooltipWithoutIcon } from "../../components/modules/tool-tips";

export const PageToolBar: React.FC<ToolBarComponentProp> = ({ pages }) => {
  const { pathname } = useLocation();
  return (
    <nav
      className="flex  flex-row items-center justify-between border-b border-gray-200 bg-white px-4"
      aria-label="Breadcrumb"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between space-x-3 ">
        <ol className="flex">
          <li className="flex">
            <div className="flex items-center">
              <div className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  className="h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </div>
            </div>
          </li>
          {pages.map((item) => (
            <li key={item.name} className="flex">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 44"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a
                  href={item.href}
                  className="ml-4 text-xs font-medium text-gray-500 hover:text-gray-700"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex flex-row space-x-3">
          <TooltipWithoutIcon
            message={"View"}
            messageClassName={
              "absolute w-14  bg-gray-600 flex justify-center px-1 py-1 rounded-none -bottom-8 -right-3"
            }
          >
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
              <EyeIcon className="h-4 w-4 " />
            </button>
          </TooltipWithoutIcon>
          <TooltipWithoutIcon
            message={"Edit"}
            messageClassName={
              "absolute w-14  bg-gray-600 flex justify-center px-1 py-1 rounded-none -bottom-8 -right-3"
            }
          >
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
              <PencilIcon className="h-4 w-4 " />
            </button>
          </TooltipWithoutIcon>
          <TooltipWithoutIcon
            message={"Delete"}
            messageClassName={
              "absolute w-14  bg-gray-600 flex justify-center px-1 py-1 rounded-none -bottom-8 -right-3"
            }
          >
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-500 focus:outline-none">
              <TrashIcon className="h-4 w-4 " />
            </button>
          </TooltipWithoutIcon>
        </div>
      </div>
    </nav>
  );
};
