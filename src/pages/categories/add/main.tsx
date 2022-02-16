import { AddCategoryFormInput, AddComponentProp } from "./types";
import { BasicModal } from "../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { SubmitHandler, useForm } from "react-hook-form";

function MainComponent({ setShow, show }: AddComponentProp) {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCategoryFormInput>();

  const onSubmit: SubmitHandler<AddCategoryFormInput> = (data, e) => {};
  return (
    <>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 30}
      >
        <div className="py-6">
          <span className={"mt-5 px-6 text-lg font-medium"}>
            Add New Category
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5 grid grid-cols-1 gap-y-4 gap-x-2 px-6 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="name"
                  className="block pb-1 text-xs font-normal leading-5 text-gray-600"
                >
                  Category Name <span className={"text-red-600"}>*</span>
                </label>
                <div className="mt-1 rounded-none shadow-none">
                  <input
                    type="text"
                    className={`${
                      errors.name
                        ? "focus:border-red-500 focus:ring-red-500"
                        : "focus:border-gray-900 focus:ring-gray-900"
                    } block w-full rounded-none border border-gray-300 bg-white py-3 px-2 font-light shadow-none focus:outline-none focus:ring-0 sm:text-sm `}
                    placeholder="Eg. Offices"
                    {...register("name", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>
              </div>
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
                <button className="focus:shadow-outline-gray a border-transparent flex h-10 w-32 flex-row items-center justify-center rounded-none border  bg-gray-900 px-4 py-2 text-xs font-light  leading-5  text-white transition duration-150  ease-in-out hover:bg-gray-800 focus:border-gray-600 focus:outline-none">
                  <span className="mx-0">Submit</span>
                </button>
              </span>
            </div>
          </form>
        </div>
      </BasicModal>
    </>
  );
}

export default MainComponent;
