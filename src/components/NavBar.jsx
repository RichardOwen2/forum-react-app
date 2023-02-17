import React from "react";

import { RiHome4Line } from 'react-icons/ri';
import { AiFillWechat } from  'react-icons/ai';

export default function NavBar({ nav, navChange }) {
  if (nav) {
    return (
      <div className="w-full shadow-md bg-white rounded-lg">
        <ul>
          <li>
            <button
            className="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 bg-gray-300 transition duration-300 ease-in-out" 
            >
              <RiHome4Line /> <p className="ml-2 text-base">Home</p>
            </button>
          </li>
          <li>
            <button
            className="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
            onClick={() => navChange(false)}
            >
              <AiFillWechat /> <p className="ml-2 text-base">Your Threads</p>
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="w-full shadow-md bg-white">
      <ul>
        <li>
          <button
          className="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" 
          onClick={() => navChange(true)}
          >
            <RiHome4Line /> <p className="ml-2 text-base">Home</p>
          </button>
        </li>
        <li>
          <button
          className="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 bg-gray-300 transition duration-300 ease-in-out"
          >
            <AiFillWechat /> <p className="ml-2 text-base">Your Threads</p>
          </button>
        </li>
      </ul>
    </div>
  );
}