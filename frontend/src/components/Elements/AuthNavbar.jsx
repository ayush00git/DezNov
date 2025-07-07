import React from "react";
import AuthIcons from "./AuthIcons";

function AuthNavbar({ onSignupClick, onLogInClick }) {
  return (
    <nav className="flex bg-[rgba(8,9,12,0.1)] h-16 w-full sticky top-0 z-10">
      <div className="w-full px-4 sm:px-20 py-[3px] bg-zinc-950/10 backdrop-blur-[5px] flex justify-center sm:justify-between items-center overflow-hidden">
        <div className="text-white text-2xl sm:text-4xl font-bold font-['Poppins'] text-center w-full sm:w-auto">
          DezNov
        </div>
        <div className="hidden sm:flex">
          <AuthIcons onSignupClick={onSignupClick} onLogInClick={onLogInClick} />
        </div>
      </div>
    </nav>
  );
}

export default AuthNavbar;
