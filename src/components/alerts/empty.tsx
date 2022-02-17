import { EmptyStateComponentProp } from "./types";

function EmptyState({
  canAdd,
  model,
  message,
  onAdd,
}: EmptyStateComponentProp) {
  return (
    <div className="mx-auto w-full max-w-sm   py-20 text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No {model}</h3>
      <p className="mt-1 px-10 text-sm text-gray-500 sm:px-10">{message}</p>
      {canAdd && (
        <>
          <div className="mt-6">
            <button
              type="button"
              onClick={onAdd}
              className=" inline-flex items-center rounded-none border-none bg-gray-800 px-6 py-2.5 text-sm font-medium text-white shadow-none hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-offset-0"
            >
              Add new
            </button>
          </div>
        </>
      )}
    </div>
  );
}

EmptyState.defaultProps = {
  canAdd: false,
  message: "You don't have any record to show.",
};

export { EmptyState };
