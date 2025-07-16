import NavBar from "../components/Elements/Navbar"
import SideBar from "../components/Elements/SideBar"

function ProfilePage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      
      <div
        className="flex bg-[#0D0E11] pt-16 min-h-screen"
        style={{ height: "100vh" }}
      >
      
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-16 md:w-20 lg:w-24 flex-shrink-0 z-40">
          <SideBar />
        </div>
        
        <div
          className="flex-1 ml-16 md:ml-20 lg:ml-24 overflow-y-auto p-4"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {/* <Gallery /> */}
          {/* Profile */}
        </div>
      </div>
    </>
  );
}
export default ProfilePage;