import * as React from "react";
import { ADD_LOCATION, LOCATIONS } from "../../navigation/constants";
import { Header } from "../../shared/header";
import { PageToolBar } from "../../shared/toolbar";
import { BreadCrumbProp } from "../../shared/toolbar/types";
import { siteTitle } from "../../components/util";
import { classNames } from "../../components/className";
import { useAppDispatch, useAppSelector } from "../../services/broker/broker";
import { Category } from "../categories/data-view/types";
import { addLocation } from "../../services/broker/location-reducer";
import { useHistory } from "react-router-dom";
import { v4 } from "uuid";
import Map from "../../components/modules/map";
import toast from "react-hot-toast";

const pages: BreadCrumbProp[] = [
  { name: "Locations", href: LOCATIONS },
  { name: "Add Location", href: ADD_LOCATION },
];

function MainComponent() {
  const dispatch = useAppDispatch();

  const { push } = useHistory();
  const [longitude, setLongitude] = React.useState<string>("");
  const [latitude, setLatitude] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");

  React.useEffect(() => {
    document.title = "Add Location | " + siteTitle;
  }, []);

  const categoryList = useAppSelector((state) => state.categories.value);

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      dispatch(
        addLocation({
          id: v4(),
          name: name,
          address: address,
          coordinates: {
            latitude: Number(latitude),
            longitude: Number(longitude),
          },
          category: category,
        })
      );
      toast.success("Location added successfully 🚀");
      push(LOCATIONS);
    } catch (error) {
      toast.error("Oops, something occured");
    }
  };

  const disableButton = name?.trim() === "" || category?.trim() === "";

  return (
    <>
      <div className="sticky top-0 z-40 ">
        <Header title="Add Location" />
        <PageToolBar pages={pages} showActions={false} />
      </div>
      <div className="mx-auto mt-6  w-full   max-w-7xl px-4 sm:px-4 lg:px-0 ">
        <div className="grid  grid-cols-5 gap-4 sm:grid sm:grid-cols-5">
          <div className="col-span-5 sm:col-span-5 lg:col-span-3">
            <div
              style={{
                height: "50vh",
              }}
            >
              <Map
                setLng={setLongitude}
                setLat={setLatitude}
                setAddress={setAddress}
              />
            </div>
          </div>
          <div
            style={{
              height: "58vh",
            }}
            className="col-span-5 mt-36 border border-gray-200 sm:col-span-5 sm:mt-36 lg:col-span-2 lg:mt-0"
          >
            <form className="flex h-full  flex-col justify-between">
              <div className="mt-5 grid grid-cols-1 gap-y-4 gap-x-2 px-6 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <span className={"text-base font-medium"}>
                    Configure Location
                  </span>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="name"
                    className="block pb-1 text-xs font-normal leading-5 text-gray-600"
                  >
                    Location Name <span className={"text-red-600"}>*</span>
                  </label>
                  <div className="mt-1 rounded-none shadow-none">
                    <input
                      type="text"
                      value={name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                      }
                      className={
                        "block w-full rounded-none border border-gray-300 bg-white py-2.5 px-2 font-light shadow-none focus:border-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-900 sm:text-sm"
                      }
                      placeholder="Eg. My favourite location"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="name"
                    className="block pb-1 text-xs font-normal leading-5 text-gray-600"
                  >
                    Select Category <span className={"text-red-600"}>*</span>
                  </label>
                  <div className="mt-1 rounded-none shadow-none">
                    <select
                      id="category"
                      value={category}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setCategory(e.target.value)
                      }
                      className="block w-full rounded-none border border-gray-300 bg-white py-3 pl-3 pr-10 text-xs text-gray-500  focus:border-gray-600 focus:outline-none focus:ring-gray-50 sm:text-xs"
                    >
                      <option>Please select</option>

                      {categoryList?.length === 0 ? (
                        <React.Fragment>
                          <option>
                            No categories found. Please create some categories
                          </option>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {categoryList?.map((category: Category) => (
                            <React.Fragment key={category.id}>
                              <option value={category.name}>
                                {category.name}
                              </option>
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-0 flex w-full  p-6 ">
                <span className="inline-flex w-full rounded-none shadow-sm ">
                  <button
                    type="button"
                    onClick={onSubmit}
                    disabled={disableButton}
                    className={classNames(
                      disableButton
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-800 focus:border-gray-600",
                      "focus:shadow-outline-gray a flex h-10 w-full flex-row items-center justify-center rounded-none border border-none  bg-gray-900 px-4 py-2 text-xs font-light  leading-5  text-white transition duration-150  ease-in-out  focus:outline-none"
                    )}
                  >
                    <span className="mx-0">Submit</span>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
