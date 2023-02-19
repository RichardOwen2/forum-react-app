import React from "react";
import { Link } from "react-router-dom";

export default function Profile({ user, signout }) {
  if (!user) {
    return (
      <div className="my-auto lg:mr-8 md:mr-4">
        <Link to={'/login'}>
          <p className="bg-gray-600 py-2 px-6 rounded-lg text-white lg:text-base md:text-xs font-bold hover:bg-gray-500">Login to Forum!</p>
        </Link>
      </div>
    );
  }

  const { email, name, avatar } = user;

  return (
      <div className="my-auto md:mr-8 mr-1 flex justify-center items-center">
        <div className="flex justify-center">
          <div>
            <div className="dropdown relative">
              <button
                className=" dropdown-toggle text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={avatar} alt="./src/assets/default-profile.jpg" className="rounded-full md:w-12 w-8" />
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <p className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700">
                    Username: {name}
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                    href="#"
                  >
                    Email: {email}
                  </p>
                </li>
                <li className="px-2 mt-2">
                  <button 
                  type="button" 
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm py-1.5 text-center w-full"
                  onClick={() => signout()}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}