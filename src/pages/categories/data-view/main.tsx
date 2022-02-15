import { ChevronRightIcon } from "@heroicons/react/solid";
import { classNames } from "../../../components/className";

const projects = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur ",
    initials: "GA",
    bgColorClass: "bg-gray-400",
  },
  {
    id: 2,
    title: "Perferendis pariatur, quaerat",
    initials: "GA",
    bgColorClass: "bg-gray-400",
  },
  {
    id: 4,
    title: "Ipsam perspiciatis doloremque",
    initials: "GA",
    bgColorClass: "bg-gray-400",
  },

  {
    id: 3,
    title: "Exercitationem maiores",
    initials: "GA",
    bgColorClass: "bg-gray-400",
  },
];

function MainComponent() {
  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-0 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Categories
          </h2>
        </div>

        <ul
          //   role="list"
          className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
        >
          {projects.map((project) => (
            <li key={project.id}>
              <div className="group flex items-center justify-between px-4 py-4 text-sm hover:bg-gray-50 sm:px-6">
                <span className="flex items-center space-x-3 truncate">
                  <span
                    className={classNames(
                      project.bgColorClass,
                      "h-2.5 w-2.5 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  />

                  <span className="truncate font-normal text-gray-500">
                    {project.title}
                  </span>
                </span>
                <ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
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
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="w-full max-w-0 cursor-pointer  whitespace-nowrap px-6 py-3 text-xs font-medium text-gray-900 ">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <div
                        className={classNames(
                          project.bgColorClass,
                          "h-2.5 w-2.5 flex-shrink-0 rounded-full"
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-normal text-gray-500">
                        {project.title}
                      </span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                    <input
                      id={`person-${project.id}`}
                      name={`person-${project.id}`}
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer rounded-none border-gray-300 text-gray-600 focus:ring-0"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
