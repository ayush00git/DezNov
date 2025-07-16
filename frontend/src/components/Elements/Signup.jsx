function Signup({ onClose }) {
  return (
    <div className="flex relative flex-col items-center text-white bg-gradient-to-br from-[#192552] via-[#334796] to-[#374C9F] rounded-xl w-full max-w-xs sm:max-w-md px-7 py-6 gap-4 pb-8">
      <div className="absolute right-4 top-4 cursor-pointer" onClick={onClose}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.64217 17.4608L4.73298 15.5516L15.3608 4.92376L17.27 6.83295L6.64217 17.4608ZM14.9153 17.3759L4.66934 7.12993L6.89672 4.90255L17.1427 15.1485L14.9153 17.3759Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="text-base sm:text-xl font-bold mt-4 mb-6 text-center">Sign Up</div>
      {/* With Google */}
      <div
        className="flex items-center h-12 w-full bg-[rgba(13,14,21,0.45)] rounded-xl transition-all duration-150 cursor-pointer lg:px-12 sm:px-4 text-now pl-4"
        onMouseEnter={e => { e.currentTarget.style.boxShadow = "0px 7px 10px rgba(0,0,0,0.5)"; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.032 10.08C4.03055 11.5078 4.53428 12.89 5.45402 13.9821C6.37377 15.0742 7.65022 15.8057 9.05745 16.0471C10.4647 16.2885 11.9119 16.0242 13.1431 15.3011C14.3742 14.578 15.3098 13.4426 15.7843 12.096H10.08V8.064H19.9634V12.096H19.9584C19.024 16.6965 14.9567 20.16 10.08 20.16C4.51282 20.16 0 15.6472 0 10.08C0 4.51282 4.51282 2.55463e-06 10.08 2.55463e-06C11.7276 -0.00117091 13.3503 0.401942 14.8058 1.17399C16.2613 1.94603 17.5052 3.06342 18.4283 4.42815L15.124 6.74151C14.4067 5.65731 13.3592 4.83309 12.1367 4.39102C10.9142 3.94894 9.58174 3.91254 8.33691 4.28721C7.09208 4.66188 6.0011 5.42768 5.22568 6.4711C4.45027 7.51451 4.03169 8.78001 4.032 10.08Z"
            fill="white"
          />
        </svg>
        <span className="mx-8">Continue with Google</span>
      </div>
      {/* With Github */}
      <div
        className="flex items-center h-12 w-full bg-[rgba(13,14,21,0.45)] rounded-xl transition-all duration-150 cursor-pointer lg:px-12 sm:px-4 text-now pl-4"
        onMouseEnter={e => { e.currentTarget.style.boxShadow = "0px 7px 10px rgba(0,0,0,0.5)"; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.08 0C8.75628 0 7.44551 0.260727 6.22255 0.767294C4.99959 1.27386 3.88838 2.01635 2.95236 2.95236C1.062 4.84273 0 7.40662 0 10.08C0 14.5354 2.89296 18.3154 6.89472 19.656C7.39872 19.7366 7.56 19.4242 7.56 19.152V17.4485C4.76784 18.0533 4.17312 16.0978 4.17312 16.0978C3.70944 14.9285 3.05424 14.616 3.05424 14.616C2.13696 13.991 3.1248 14.0112 3.1248 14.0112C4.1328 14.0818 4.66704 15.0494 4.66704 15.0494C5.544 16.5816 7.02576 16.128 7.60032 15.8861C7.69104 15.2309 7.95312 14.7874 8.23536 14.5354C5.9976 14.2834 3.64896 13.4165 3.64896 9.576C3.64896 8.45712 4.032 7.56 4.6872 6.84432C4.5864 6.59232 4.2336 5.544 4.788 4.1832C4.788 4.1832 5.63472 3.91104 7.56 5.21136C8.35632 4.9896 9.2232 4.87872 10.08 4.87872C10.9368 4.87872 11.8037 4.9896 12.6 5.21136C14.5253 3.91104 15.372 4.1832 15.372 4.1832C15.9264 5.544 15.5736 6.59232 15.4728 6.84432C16.128 7.56 16.511 8.45712 16.511 9.576C16.511 13.4266 14.1523 14.2733 11.9045 14.5253C12.2674 14.8378 12.6 15.4526 12.6 16.3901V19.152C12.6 19.4242 12.7613 19.7467 13.2754 19.656C17.2771 18.3053 20.16 14.5354 20.16 10.08C20.16 8.75628 19.8993 7.44551 19.3927 6.22255C18.8861 4.99959 18.1437 3.88838 17.2076 2.95236C16.2716 2.01635 15.1604 1.27386 13.9374 0.767294C12.7145 0.260727 11.4037 0 10.08 0Z"
            fill="white"
          />
        </svg>
        <span className="mx-8">Continue with Github</span>
      </div>
    </div>
  );
}
export default Signup;