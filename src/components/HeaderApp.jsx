import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import SearchBar from './SearchBar';
import Profile from './Profile';

function HeaderApp({
  user, signout, keyword, keywordChange,
}) {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40">
      <div className="flex-1 bg-[#282c34]">
        <div className="flex">
          <Link to="/" className="flex">
            <img src={logo} className="App-logo lg:w-20 md:w-16 w-12 ml-2" alt="logo" />
            <h1 className="font-extrabold lg:text-2xl md:text-xl text-base text-white pl-2 py-7">Forum React</h1>
          </Link>
          <div className="flex-1 flex flex-row-reverse">
            <Profile user={user} signout={signout} />
            {pathname === '/' && <SearchBar keyword={keyword} keywordChange={keywordChange} />}
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderApp.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  signout: PropTypes.func.isRequired,
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

HeaderApp.defaultProps = {
  user: null,
  keyword: '',
  keywordChange: null,
};

export default HeaderApp;
