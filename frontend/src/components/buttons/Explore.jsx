import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Explore = ({ property1, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`border border-solid w-[129px] flex items-center gap-1.5 shadow-[4px_4px_8px_#00000040] px-[17px] py-[5px] h-[38px] rounded-[23px] relative ${state.property1 === "variant-2" ? "border-[#d752ff]" : "border-[#30528a]"} ${state.property1 === "variant-2" ? "bg-[#9b32ba]" : "bg-[#142744]"} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            {/* Inline SVG icon for Explore */}
            <svg
                className="w-[22px] h-[22px]"
                fill={state.property1 === "variant-2" ? "black" : "#9B32BA"}
                viewBox="0 0 450 550"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
            <div className="[font-family:'Poppins-Medium',Helvetica] w-fit mt-[-0.50px] tracking-[0] text-lg text-white font-medium leading-[normal] relative">
                Explore
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

Explore.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
