import { Explore } from "./buttons/Explore";
import { Login } from "./buttons/Login";
import { Signup } from "./buttons/Signup";


function Auth() {
    return(
        <>
            <div className="flex flex-wrap border-2 border-[#849ADE] text-white m-16 w-fit py-4 px-6 rounded-full gap-5 bg-[rgba(49,61,94,0.9)]">
                <Login />
                <Signup />
                <Explore />
            </div>
        
        </>
    );
}

export default Auth