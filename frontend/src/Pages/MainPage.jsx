import NavBar from "../components/Elements/Navbar"
import SideBar from "../components/Elements/SideBar"

function MainPage() {
    return(
        <>
        <div className="min-h-screen bg-[#0D0E12]">
            <NavBar />
            <SideBar />
        </div>
        {/* <NavBar /> */}
        {/* <Gallery />  */}
        {/* <Footer />  */}
        </>
    )
}
export default MainPage