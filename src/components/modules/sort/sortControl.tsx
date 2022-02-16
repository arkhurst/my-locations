import { useSort } from "../../hooks";
import { SortOption } from "../../hooks/types";
import { SortControlProps } from "./types";

export function SortControl<T>(props: SortControlProps<T>) {
  const { sortOptions } = props;

  // Pass props to the custom sort hook to get sort functionality.
  const { handleDirectionToggle, handleSortKeyChange, sortDirection, sortKey } =
    useSort(props);

  function renderSortOptions({ label, value }: SortOption<T>, index: number) {
    const optionTitle = `Sort by ${label} (${value})`;
    return (
      <option
        key={index}
        label={`${label}`}
        title={optionTitle}
        value={value.toString()}
      />
    );
  }

  function renderSortOptionSelect() {
    return sortOptions?.length ? (
      <>
        <div className="flex flex-row items-center ">
          <select
            id="sort-by"
            name="sort-by"
            onChange={handleSortKeyChange}
            className=" block w-full rounded-none border-none bg-gray-100 py-1.5 pl-3 pr-10 text-xs text-gray-500  focus:outline-none focus:ring-gray-50 sm:text-xs"
          >
            {sortOptions.map(renderSortOptions)}
          </select>
        </div>
      </>
    ) : (
      <span>(No sort options were found)</span>
    );
  }

  function renderSortDirectionIcon() {
    const directionIcon =
      sortDirection === "asc" ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </>
      );
    const buttonTitle =
      sortDirection === "asc"
        ? `Sort by ${sortKey} in descending order`
        : `Sort by ${sortKey} in ascending order`;
    return (
      <button title={buttonTitle} onClick={handleDirectionToggle}>
        {directionIcon}
      </button>
    );
  }

  return (
    <>
      <div className="mb-4 ml-3 flex flex-row space-x-3 sm:ml-3 lg:ml-0">
        <div className="flex flex-row items-center border border-gray-100 bg-gray-100 py-1 px-3.5">
          <label className="text-xs font-medium text-gray-600">Sort by</label>
          {renderSortOptionSelect()}
        </div>
        {sortKey !== "" ? (
          <>
            <div className="flex flex-row items-center space-x-2 bg-gray-100 py-1 px-3.5">
              <label className="text-xs font-medium text-gray-600">
                Order by
              </label>
              {renderSortDirectionIcon()}
            </div>
          </>
        ) : null}
      </div>
      {/* <span> Order by</span>
       */}
    </>
  );
}
