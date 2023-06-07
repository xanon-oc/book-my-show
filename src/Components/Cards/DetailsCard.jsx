import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../public/data.json";
import { addToDb } from "../../../public/fakedb";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const DetailsCard = () => {
  const [movie, setMovie] = useState([]);

  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useEffect(() => {
    const movies = data.find((item) => item.show.id === parseInt(id));
    setMovie(movies);
  }, [movie, id]);
  const notify = () => toast.success("Successfully Added To Cart.");
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const url = form.url.value;
    const id = form.id.value;

    const userInfo = { name: name, email: email, date: date, url: url, id: id };

    const jsonData = JSON.stringify(userInfo);
    // Save user info to local storage
    console.log(userInfo);
    notify();
    addToDb(jsonData);
  };

  return (
    <section>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src={movie.show?.image.original}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="p-8 sm:p-16 lg:p-24 space-y-3">
              <h2 className="flex justify-between text-2xl font-bold sm:text-3xl">
                {movie.show?.name}
                <p className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#feca57"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#feca57"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-xl text-indigo-700">
                    {" "}
                    {movie.show?.rating.average}
                  </span>
                </p>
              </h2>
              <p className="font-bold">Show Info</p>
              <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Language</p>

                    <p className="font-medium">{movie.show?.language}</p>
                  </div>
                </div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Genres</p>
                    {/* TODO */}
                    <p className="font-medium">{movie.show?.genres}</p>
                  </div>
                </div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Runtime</p>

                    <p className="font-medium">{movie.show?.runtime} min</p>
                  </div>
                </div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Premiered</p>

                    <p className="font-medium">{movie.show?.premiered}</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{movie.show?.summary}</p>

              <div>
                <p className="font-semibold">
                  Schedule : {movie.show?.schedule.days}/
                  {movie.show?.schedule.time}
                </p>

                {movie.show?.network?.country.timezone ? (
                  <p className="font-semibold">
                    TimeZone : {movie.show?.network?.country.timezone}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <form
                  onSubmit={handleFormData}
                  className="mx-auto mb-0 mt-8  space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Email
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        value={movie.show?.name}
                        name="name"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-indigo-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Email" className="sr-only">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={user?.email}
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-indigo-700"
                        >
                          <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="Email" className="sr-only">
                      schedule
                    </label>

                    <div className="relative hidden">
                      <input
                        type="text"
                        name="date"
                        value={movie.show?.premiered}
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-indigo-700"
                        >
                          <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="relative hidden">
                      <input
                        type="url"
                        name="url"
                        value={movie.show?.image.original}
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-indigo-700"
                        >
                          <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="relative hidden">
                      <input
                        type="text"
                        name="id"
                        value={movie.show?.id}
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-indigo-700"
                        >
                          <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
