import React from "react";
import { useLocation } from "react-router-dom";

import logo from '../assets/logo.svg';
import SearchBar from "./SearchBar";
import Profile from "./Profile";

export default function HeaderApp({ user, signout, keyword, keywordChange }) {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0">
      <div className="flex-1 bg-[#282c34]">
        <div className="flex">
          <a href="#" className="flex">
            <img src={logo} className="App-logo w-20 ml-2" alt="logo" />
            <h1 className="font-extrabold text-white text-3xl pl-2 py-7">Forum React</h1>
          </a>
          <div className="flex-1 flex flex-row-reverse">
            <Profile user={user} signout={signout} />
            {pathname === '/' && <SearchBar keyword={keyword} keywordChange={keywordChange} />}
          </div>
        </div>
      </div>
    </header>
  );
};