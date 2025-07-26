import NavBar from "../components/Elements/Navbar"
import SideBar from "../components/Elements/SideBar"
import Gallery from "../components/Pages/Gallery"

function MainPage() {
    return(
        <>
            {/* Navbar fixed at the very top, always visible */}
            <div className="fixed top-0 left-0 w-full z-50">
                <NavBar />
            </div>
            
            
            
        </>
    )
}
export default MainPage