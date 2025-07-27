import Categories from "../components/Elements/Categories"
import NavBar from "../components/Elements/Navbar"
import ProjectCard from "../components/Elements/ProjectCard"

function MainPage() {
    return(
        <>
            {/* Navbar fixed at the very top, always visible */}
            <div className="fixed top-0 left-0 w-full z-50">
                <NavBar />
            </div>
            <div className="sticky top-32 lg:top-16 z-10">
                <Categories />
            </div>
            {/* issue */}
            <div className="min-h-screen flex flex-wrap justify-center mt-32">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            
            
            
        </>
    )
}
export default MainPage