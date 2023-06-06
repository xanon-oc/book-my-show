import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../public/data.json";
const DetailsCard = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const movies = data.find((item) => item.show.id === parseInt(id));
    setMovie(movies);
  }, [movie, id]);

  return (
    <section>
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
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 "></span>

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
                  <span className="text-xl"> {movie.show?.rating.average}</span>
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

              <button
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
