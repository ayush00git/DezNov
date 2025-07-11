import React, { useState } from "react";

function NavBar() {
  const [search, setSearch] = useState("");

  return (
    <>
      <nav className="relative bg-[rgba(13,14,18,0.1)] min-h-16 h-auto text-white flex items-center justify-center border-b border-gray-400">
        <div className="border-2 rounded-full bg-white text-gray-500 flex items-center max-w-2xl min-h-10 px-4 gap-4 lg:pr-12 absolute lg:left-64">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13.7125C4.68333 13.7125 3.146 13.0832 1.888 11.8245C0.63 10.5658 0.000667196 9.02849 5.29101e-07 7.21249C-0.000666138 5.39649 0.628667 3.85916 1.888 2.60049C3.14733 1.34183 4.68467 0.712494 6.5 0.712494C8.31533 0.712494 9.853 1.34183 11.113 2.60049C12.373 3.85916 13.002 5.39649 13 7.21249C13 7.94583 12.8833 8.63749 12.65 9.28749C12.4167 9.93749 12.1 10.5125 11.7 11.0125L17.3 16.6125C17.4833 16.7958 17.575 17.0292 17.575 17.3125C17.575 17.5958 17.4833 17.8292 17.3 18.0125C17.1167 18.1958 16.8833 18.2875 16.6 18.2875C16.3167 18.2875 16.0833 18.1958 15.9 18.0125L10.3 12.4125C9.8 12.8125 9.225 13.1292 8.575 13.3625C7.925 13.5958 7.23333 13.7125 6.5 13.7125ZM6.5 11.7125C7.75 11.7125 8.81267 11.2752 9.688 10.4005C10.5633 9.52583 11.0007 8.46316 11 7.21249C10.9993 5.96183 10.562 4.89949 9.688 4.02549C8.814 3.15149 7.75133 2.71383 6.5 2.71249C5.24867 2.71116 4.18633 3.14883 3.313 4.02549C2.43967 4.90216 2.002 5.96449 2 7.21249C1.998 8.46049 2.43567 9.52316 3.313 10.4005C4.19033 11.2778 5.25267 11.7152 6.5 11.7125Z"
              fill="black"
            />
          </svg>
          <input
            type="text"
            className="bg-transparent outline-none w-full text-gray-700"
            placeholder="Search for designs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="absolute right-4 cursor-pointer" title="profile">
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
