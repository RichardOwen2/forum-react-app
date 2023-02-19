import React from 'react';
import PropTypes from 'prop-types';

import { RiHome4Line } from 'react-icons/ri';
import { AiFillWechat } from 'react-icons/ai';

function NavBar({ nav, navChange, width }) {
  if (nav) {
    return (
      <div className={`w-full shadow-md bg-white rounded-lg ${width ? '' : 'fixed bottom-0'}`}>
        <ul className="lg:block grid grid-cols-2">
          <li>
            <button
              type="button"
              className={`w-full flex items-center text-sm py-4 px-6 xl:h-12 lg:h-9 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 bg-gray-300 transition duration-300 ease-in-out ${width ? '' : 'justify-center'}`}
            >
              <RiHome4Line />
              {' '}
              <p className="ml-2 text-base">Home</p>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`w-full flex items-center text-sm py-4 px-6 xl:h-12 lg:h-9 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out ${width ? '' : 'justify-center'}`}
              onClick={() => navChange(false)}
            >
              <AiFillWechat />
              {' '}
              <p className="ml-2 text-base">Your Threads</p>
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={`w-full shadow-md bg-white rounded-lg ${width ? '' : 'fixed bottom-0'}`}>
      <ul className="lg:block grid grid-cols-2">
        <li>
          <button
            type="button"
            className={`w-full flex items-center text-sm py-4 px-6 xl:h-12 lg:h-9 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out ${width ? '' : 'justify-center'}`}
            onClick={() => navChange(true)}
          >
            <RiHome4Line />
            {' '}
            <p className="ml-2 text-base">Home</p>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`w-full flex items-center text-sm py-4 px-6 xl:h-12 lg:h-9 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 bg-gray-300 transition duration-300 ease-in-out ${width ? '' : 'justify-center'}`}
          >
            <AiFillWechat />
            {' '}
            <p className="ml-2 text-base">Your Threads</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  nav: PropTypes.bool.isRequired,
  navChange: PropTypes.func.isRequired,
  width: PropTypes.bool.isRequired,
};

export default NavBar;
