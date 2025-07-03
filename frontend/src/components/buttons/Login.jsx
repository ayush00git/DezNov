import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Login = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return ( 
    <div
      className={`w-[118px] flex items-center gap-[7px] shadow-[5px_5px_8px_#00000040] px-[18px] py-[5px] h-[38px] rounded-[23px] relative ${
        state.property1 === "variant-2"
          ? "border-[0.5px] border-solid"
          : "border border-solid"
      } ${
        state.property1 === "variant-2"
          ? "border-[#ffbb00]"
          : "border-[#6d3d84]"
      } ${
        state.property1 === "variant-2" ? "bg-[#bf8d00]" : "bg-[#281730]"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {/* Inline SVG icon with dynamic color */}
      <svg
        className="w-[22px] h-[22px]"
        fill={state.property1 === "variant-2" ? "#00100C" : "#F0B100"}
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.99998 0C10.1819 -5.54005e-06 11.3522 0.232782 12.4441 0.68507C13.5361 1.13736 14.5282 1.80029 15.364 2.63602C16.1997 3.47174 16.8626 4.4639 17.3149 5.55583C17.7672 6.64776 18 7.81808 18 8.99998C18 13.9705 13.9705 18 8.99998 18C4.02945 18 0 13.9705 0 8.99998C0 4.02945 4.02945 0 8.99998 0ZM9.90001 9.90001H8.09999C5.87186 9.90001 3.95896 11.2495 3.1339 13.1758C4.43934 15.0063 6.58027 16.2 8.99998 16.2C11.4197 16.2 13.5606 15.0063 14.8661 13.1757C14.041 11.2495 12.1281 9.90001 9.90001 9.90001ZM8.99998 2.7C7.50882 2.7 6.29998 3.90884 6.29998 5.4C6.29998 6.89115 7.50882 8.09999 8.99998 8.09999C10.4911 8.09999 11.7 6.89115 11.7 5.4C11.7 3.90884 10.4912 2.7 8.99998 2.7Z"
        />
      </svg>
      <div
        className={`[font-family:'Poppins-Medium',Helvetica] w-fit tracking-[0] text-lg text-white font-medium leading-[normal] relative ${
          state.property1 === "default" ? "mt-[-0.50px]" : ""
        }`}
      >
        Log In
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Login.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
