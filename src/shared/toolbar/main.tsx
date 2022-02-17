import * as React from "react";
import { HomeIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";
import { ToolBarComponentProp } from "./types";
import { ActionButton } from "../../components/modules/action-buttons";

export const PageToolBar: React.FC<ToolBarComponentProp> = ({
  pages,
  onAdd,
  onEdit,
  onRemove,
  onView,
  showActions,
  disableViewButton,
  disableRemoveButton,
  disableEditButton,
}) => {
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
        {showActions ? (
          <>
            <div className="flex flex-row space-x-4">
              <ActionButton
                tooltipLabel="Add"
                icon="add"
                disabled={false}
                onActionClicked={onAdd}
              />
              <ActionButton
                tooltipLabel="View"
                icon="view"
                disabled={disableViewButton}
                onActionClicked={onView}
              />
              <ActionButton
                tooltipLabel="Edit"
                icon="edit"
                disabled={disableEditButton}
                onActionClicked={onEdit}
              />
              <ActionButton
                tooltipLabel="Remove"
                icon="remove"
                disabled={disableRemoveButton}
                onActionClicked={onRemove}
              />
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

PageToolBar.defaultProps = {
  showActions: false,
  disableViewButton: true,
  disableRemoveButton: true,
  disableEditButton: true,
};
