import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  return (
    <>
      <nav className="relative bg-[rgba(13,14,18,0.1)] min-h-16 h-auto text-white flex items-center justify-center border-b-1 border-gray-700 backdrop-blur-md">
        {/* Logo */}
        <div
          className="absolute top-4 left-4 font-bold text-white cursor-pointer lg:text-3xl"
          title="DezNov-Home"
          onClick={() => navigate("/explore")}
        >
          DezNov
        </div>

        {/* Search bar */}
        <div className="rounded-full border-2 border-transparent bg-[#b7e2dc] flex items-center flex-row-reverse max-w-2xl min-h-10 px-0.5 gap-4 absolute lg:w-[750px] md:w-[450px] sm:w-[300px] w-[250px] text-gray-900 transition-all duration-300 ease-in-out focus-within:border-[#59c9b8] focus-within:bg-[#0D0E11] focus-within:text-white hover:bg-[#0D0E11] hover:border-[#59c9b8] hover:text-white hover:shadow-lg focus-within:shadow-lg">
          <svg
            width="35"
            height="34"
            viewBox="0 0 37 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <rect width="35" height="34" rx="17" fill="#2A9F8D" className="transition-colors duration-300 ease-in-out" />
            <path
              d="M15.825 21.65C13.9175 21.65 12.3033 20.9892 10.9824 19.6676C9.6615 18.346 9.0007 16.7318 9 14.825C8.9993 12.9182 9.6601 11.304 10.9824 9.9824C12.3047 8.6608 13.9189 8 15.825 8C17.7311 8 19.3457 8.6608 20.6687 9.9824C21.9917 11.304 22.6521 12.9182 22.65 14.825C22.65 15.595 22.5275 16.3212 22.2825 17.0037C22.0375 17.6862 21.705 18.29 21.285 18.815L27.165 24.695C27.3575 24.8875 27.4537 25.1325 27.4537 25.43C27.4537 25.7275 27.3575 25.9725 27.165 26.165C26.9725 26.3575 26.7275 26.4537 26.43 26.4537C26.1325 26.4537 25.8875 26.3575 25.695 26.165L19.815 20.285C19.29 20.705 18.6863 21.0375 18.0038 21.2825C17.3213 21.5275 16.595 21.65 15.825 21.65ZM15.825 19.55C17.1375 19.55 18.2533 19.0908 19.1724 18.1724C20.0915 17.254 20.5507 16.1382 20.55 14.825C20.5493 13.5118 20.0901 12.3964 19.1724 11.4787C18.2547 10.561 17.1389 10.1014 15.825 10.1C14.5111 10.0986 13.3957 10.5582 12.4787 11.4787C11.5617 12.3992 11.1021 13.5146 11.1 14.825C11.0979 16.1354 11.5575 17.2512 12.4787 18.1724C13.3999 19.0936 14.5153 19.5528 15.825 19.55Z"
              fill="white"
            />
          </svg>
          <input
            type="text"
            className="bg-transparent outline-none w-full placeholder:text-gray-700 focus:placeholder:text-gray-400 transition-all duration-300 ease-in-out pl-3"
            placeholder="Search for projects or users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* profile */}
        <div
          className="absolute right-4 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
          title="profile"
          onClick={() => navigate("/profile")}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 1.97772e-10C20.3638 -1.10801e-05 22.7044 0.465563 24.8883 1.37014C27.0721 2.27472 29.0564 3.60058 30.7279 5.27204C32.3994 6.94349 33.7252 8.92779 34.6298 11.1117C35.5344 13.2955 36 15.6362 36 18C36 27.9411 27.9411 36 18 36C8.0589 36 0 27.9411 0 18C0 8.0589 8.0589 1.97772e-10 18 1.97772e-10ZM19.8 19.8H16.2C11.7437 19.8 7.91791 22.4989 6.26779 26.3516C8.87869 30.0127 13.1605 32.4 18 32.4C22.8394 32.4 27.1212 30.0127 29.7322 26.3513C28.0821 22.4989 24.2563 19.8 19.8 19.8ZM18 5.4C15.0176 5.4 12.6 7.81768 12.6 10.8C12.6 13.7823 15.0176 16.2 18 16.2C20.9823 16.2 23.4 13.7823 23.4 10.8C23.4 7.81768 20.9824 5.4 18 5.4Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}

export default NavBar;