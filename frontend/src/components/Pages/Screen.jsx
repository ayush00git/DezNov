import { Animatedcard } from "../Elements/Animatedcard"
import Auth from "../Elements/Auth"


function Screen() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#0D0E12]">
                {/* Centered Auth Component */}
                <div className="sticky top-4">
                    
                    <Auth />
                </div>
            </div>
            <div className="min-h-screen bg-amber-50 flex flex-wrap">
                <Animatedcard />                           
            </div>
        </>
    )
}
export default Screen