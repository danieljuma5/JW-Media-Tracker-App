import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
     fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 my-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
          <svg width="31" height="32" viewBox="0 0 331 324" className='h-8 mr-3' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M296.128 125.547C315.28 195.029 272.322 267.476 200.178 287.362C128.034 307.248 54.0237 267.043 34.8716 197.561C15.7195 128.079 58.3559 56.4399 130.5 36.554C202.644 16.6681 276.976 56.0655 296.128 125.547Z" fill="url(#paint0_radial_223_5)" />
            <defs>
              <radialGradient id="paint0_radial_223_5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(97.4102 128.339) rotate(66.4284) scale(260.64 270.626)">
                <stop stop-color="#A26F40" />
                <stop offset="0.291667" stop-color="#54A68D" stop-opacity="0.777427" />
                <stop offset="0.609782" stop-color="#C22DAA" stop-opacity="0.69" />
                <stop offset="0.875" stop-color="#AE7138" stop-opacity="0.777427" />
                <stop offset="1" stop-color="#DB791E" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JW</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to="/forum"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Forum
              </Link>
            </li>
            {user ? (
              <li className="relative">
                <button
                  className="flex items-center focus:outline-none"
                  onClick={handleDropdownToggle}
                >
                  <span className="mr-2">{user.name}</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.avatar_url}
                    alt="User Avatar"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user.username}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user.email}
                </span>
              </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
