import LogIn from "../../Pages/LoginPage";
import Signup from "../../Pages/SignupPage";
import React, { useReducer, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function AuthIcons({ className = "" }) {
  // Reducers for each button
  function reducer(state, action) {
    switch (action) {
      case "mouse_enter":
        return { ...state, property1: "variant-2" };
      case "mouse_leave":
        return { ...state, property1: "default" };
      default:
        return state;
    }
  }

  const [loginState, loginDispatch] = useReducer(reducer, {
    property1: "default",
  });
  const [signupState, signupDispatch] = useReducer(reducer, {
    property1: "default",
  });
  const [exploreState, exploreDispatch] = useReducer(reducer, {
    property1: "default",
  });

  const navigate = useNavigate();

  return (
    <>
    <div className={`flex flex-wrap text-white w-fit gap-5 ${className}`}>
      {/* Login Button */}
      <div
        title="Log In"
        className={`w-fit flex items-center gap-[7px] cursor-pointer shadow-[5px_5px_8px_#00000040] px-[18px] py-[5px] h-[38px] rounded-[23px] relative ${
          loginState.property1 === "variant-2"
            ? "border-[0.5px] border-solid border-[#ffbb00] bg-[#bf8d00]"
            : "border border-solid border-[#6d3d84] bg-[#281730]"
        }`}
        onMouseLeave={() => loginDispatch("mouse_leave")}
        onMouseEnter={() => loginDispatch("mouse_enter")}
        onClick={() => navigate('/login')}
      >
        <svg
          className="w-[22px] h-[22px]"
          fill={loginState.property1 === "variant-2" ? "#00100C" : "#F0B100"}
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.99998 0C10.1819 -5.54005e-06 11.3522 0.232782 12.4441 0.68507C13.5361 1.13736 14.5282 1.80029 15.364 2.63602C16.1997 3.47174 16.8626 4.4639 17.3149 5.55583C17.7672 6.64776 18 7.81808 18 8.99998C18 13.9705 13.9705 18 8.99998 18C4.02945 18 0 13.9705 0 8.99998C0 4.02945 4.02945 0 8.99998 0ZM9.90001 9.90001H8.09999C5.87186 9.90001 3.95896 11.2495 3.1339 13.1758C4.43934 15.0063 6.58027 16.2 8.99998 16.2C11.4197 16.2 13.5606 15.0063 14.8661 13.1757C14.041 11.2495 12.1281 9.90001 9.90001 9.90001ZM8.99998 2.7C7.50882 2.7 6.29998 3.90884 6.29998 5.4C6.29998 6.89115 7.50882 8.09999 8.99998 8.09999C10.4911 8.09999 11.7 6.89115 11.7 5.4C11.7 3.90884 10.4912 2.7 8.99998 2.7Z"
          />
        </svg>
        <div className="[font-family:'Poppins-Medium',Helvetica] w-fit tracking-[0] text-lg text-white font-medium leading-[normal] relative">
          Log In
        </div>
      </div>

      {/* Signup Button */}
      <div
        title="Sign Up"
        className={`border border-solid w-fit cursor-pointer flex items-center gap-1.5 shadow-[5px_5px_8px_#00000040] px-[18px] py-[5px] h-[38px] rounded-[23px] relative ${
          signupState.property1 === "variant-2"
            ? "border-[#29ffc9] bg-[#00a57c]"
            : "border-[#848484bd] bg-[#0f1c36]"
        }`}
        onMouseLeave={() => signupDispatch("mouse_leave")}
        onMouseEnter={() => signupDispatch("mouse_enter")}
        onClick={() => navigate('/signup')}
      >
        <svg
          className="w-[18px] h-[18px]"
          fill={signupState.property1 === "variant-2" ? "#0f1c36" : "#00a57c"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.54955 0.342973C9.68679 -0.114324 13.862 -0.114324 17.9992 0.342973C20.2899 0.599286 22.1379 2.40015 22.4067 4.69496C22.897 8.88407 22.897 13.1159 22.4067 17.305C22.1379 19.5998 20.2899 21.4007 17.9992 21.657C13.862 22.1143 9.68679 22.1143 5.54955 21.657C3.25887 21.4007 1.41082 19.5998 1.14203 17.305C0.651875 13.1164 0.651875 8.88497 1.14203 4.69629C1.27798 3.58143 1.78709 2.54506 2.58682 1.75516C3.38656 0.965259 4.43006 0.468118 5.54822 0.344308M11.7744 4.33452C12.0404 4.33452 12.2955 4.44 12.4836 4.62777C12.6716 4.81554 12.7773 5.0702 12.7773 5.33574V9.99878H17.4483C17.7143 9.99878 17.9693 10.1043 18.1574 10.292C18.3455 10.4798 18.4512 10.7345 18.4512 11C18.4512 11.2655 18.3455 11.5202 18.1574 11.708C17.9693 11.8957 17.7143 12.0012 17.4483 12.0012H12.7773V16.6643C12.7773 16.9298 12.6716 17.1845 12.4836 17.3722C12.2955 17.56 12.0404 17.6655 11.7744 17.6655C11.5084 17.6655 11.2533 17.56 11.0652 17.3722C10.8771 17.1845 10.7715 16.9298 10.7715 16.6643V12.0012H6.10049C5.8345 12.0012 5.5794 11.8957 5.39132 11.708C5.20323 11.5202 5.09757 11.2655 5.09757 11C5.09757 10.7345 5.20323 10.4798 5.39132 10.292C5.5794 10.1043 5.8345 9.99878 6.10049 9.99878H10.7715V5.33574C10.7715 5.0702 10.8771 4.81554 11.0652 4.62777C11.2533 4.44 11.5084 4.33452 11.7744 4.33452Z"
          />
        </svg>
        <div className="[font-family:'Poppins-Medium',Helvetica] w-fit tracking-[0] text-lg text-white font-medium leading-[normal] relative">
          Sign Up
        </div>
      </div>

      {/* Explore Button */}
      <div
        title="Explore"
        className={`border border-solid w-fit cursor-pointer flex items-center gap-1.5 shadow-[4px_4px_8px_#00000040] px-[17px] py-[5px] h-[38px] rounded-[23px] relative ${
          exploreState.property1 === "variant-2"
            ? "border-[#d752ff] bg-[#9b32ba]"
            : "border-[#30528a] bg-[#142744]"
        }`}
        onMouseLeave={() => exploreDispatch("mouse_leave")}
        onMouseEnter={() => exploreDispatch("mouse_enter")}
        onClick={() => navigate('/explore')}
      >
        <svg
          className="w-[22px] h-[22px]"
          fill={exploreState.property1 === "variant-2" ? "black" : "#9B32BA"}
          viewBox="0 0 450 550"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
        </svg>
        <div className="[font-family:'Poppins-Medium',Helvetica] w-fit tracking-[0] text-lg text-white font-medium leading-[normal] relative">
          Explore
        </div>
      </div>
    </div>
    </>
  );
}

export default AuthIcons;
