import { LocationMarkerIcon, ViewGridIcon } from "@heroicons/react/outline";

function BottomNav() {
  return (
    <>
      <div className="text-gray-font fixed  bottom-0 z-40 flex h-20 w-full justify-center border-t border-gray-200 bg-white px-6 py-2 shadow-none">
        <div className="mb-8">
          <div className="flex  p-1">
            <div className="group flex-auto bg-green-50 p-1 hover:w-full">
              <div className="mx-auto flex flex-row items-center justify-between px-4 py-2 text-center text-green-500 group-hover:w-full">
                <ViewGridIcon className="h-6 w-6" />
                <span className="ml-2  font-medium">Categories</span>
              </div>
            </div>
            <div className="group flex-auto hover:w-full">
              <div className="mx-auto flex flex-row items-center justify-between px-4 py-2 text-center text-gray-500 group-hover:w-full">
                <LocationMarkerIcon className="h-6 w-6" />
                <span className="ml-2 font-bold">Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { BottomNav };
