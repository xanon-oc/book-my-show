import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <header aria-label="Site Header" className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <Link to="/" className="flex">
          <img
            className="hidden sm:block md:w-32 md:p-2 "
            src="https://i.ibb.co/m9yKVp9/pngfind-com-movie-tickets-png-1240451.png"
            alt=""
          />
        </Link>
        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="flex gap-4 lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <NavLink
              to="/"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Home
            </NavLink>

            <NavLink
              to="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center border-x border-gray-100">
              <span className="border-e border-e-gray-100">
                <Link
                  to="/cart"
                  className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>

                  <span className="sr-only">Cart</span>
                </Link>
              </span>

              <span className="border-e border-e-gray-100">
                {user ? (
                  <div className="flex items-center">
                    <div className="relative group">
                      <img
                        className="mx-4 h-8 rounded-full"
                        src={user.photoURL}
                        alt="User Avatar"
                      />
                      <div className="absolute w-24 bg-gray-200 text-gray-800 px-2 py-1 text-sm rounded mt-2 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
                        {user.displayName}
                      </div>
                    </div>
                    <div>
                      <button onClick={logOut} className="relative group p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                          />
                        </svg>

                        <div className="absolute w-[65px] bg-gray-200 text-gray-800 px-2 py-1 text-sm rounded mt-2 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
                          Log out
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </Link>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
