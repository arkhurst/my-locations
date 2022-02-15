import { Link } from "react-router-dom";
import { APP_HOME } from "../../navigation/constants";

export default function NotFound() {
  return (
    <div className="bg-white  px-4 py-16 sm:px-6 sm:py-36 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-green-600 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="sm:border-transparent mt-10 flex space-x-3 sm:border-l sm:pl-6">
              <Link
                to={APP_HOME}
                className="border-transparent inline-flex items-center rounded-md border bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                Go back home
              </Link>
              <div className="border-transparent inline-flex items-center rounded-md border bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Contact support
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
