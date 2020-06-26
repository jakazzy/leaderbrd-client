import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-red-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link
            className="font-semibold text-xl tracking-tight hover:text-orange-400"
            to="/"
          >
            Leader Board
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            type="button"
            className="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-orange-400 hover:border-orange-400"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4"
            >
              Login
            </Link>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4"
            >
              Score
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400"
            >
              Track
            </a>
          </div>
          <div>
            <label
              htmlFor="upload-field"
              className="block cursor-pointer  text-center w-32 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-orange-400 hover:text-orange-400 mt-4 lg:mt-0"
            >
              Upload file
              <input
                type="file"
                id="upload-field"
                multiple
                className="hidden "
              />
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
