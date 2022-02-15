import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import ProfileImage from "../../assets/male.jpeg";

const Header = () => {
  return (
    <Fragment>
      <Disclosure as="nav" className="bg-gray-900" aria-label="Global">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-0">
              <div className="flex h-14 justify-between">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex flex-shrink-0 items-center">
                    <h1 className="text-2xl font-extrabold text-white">
                      Manage Categories
                    </h1>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative hidden text-white focus-within:text-gray-400 sm:hidden lg:block">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon
                          className="h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="border-transparent block w-full rounded-none bg-gray-300 py-1.5 pl-10 pr-3 text-base leading-5 placeholder-white focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden space-x-3 lg:ml-4 lg:flex lg:items-center">
                  <button className="flex-shrink-0 rounded-full bg-gray-500 p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500">
                    <span className="sr-only">Notifications</span>
                    <BellIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <img
                    className="h-7 w-7 rounded-full"
                    src={ProfileImage}
                    alt="profile"
                  />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              {/* <div className="space-y-1 px-2 pt-2 pb-3">sdf</div> */}
              <div className="border-t border-gray-900 pt-4 pb-3">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={ProfileImage}
                      alt="profile"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      Fiifi Foh Arkhurst Jnr
                    </div>
                    <div className="text-sm font-medium text-gray-200">
                      fiiarkhurst@gmail.com
                    </div>
                  </div>
                  <button className="ml-auto flex-shrink-0 rounded-full bg-gray-900 p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Fragment>
  );
};

export { Header };
