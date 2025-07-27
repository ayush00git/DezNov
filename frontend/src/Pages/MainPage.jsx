import { useState } from "react"
import Categories from "../components/Elements/Categories"
import NavBar from "../components/Elements/Navbar"
import ProjectCard from "../components/Elements/ProjectCard"
import data from "../components/Elements/Data.json"

function MainPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredData = selectedCategory === "All"
        ? data
        : data.filter(item => item.category === selectedCategory)

    return(
        <>
            {/* Navbar fixed at the very top, always visible */}
            <div className="fixed top-0 left-0 w-full z-50">
                <NavBar />
            </div>
            <div className="sticky top-32 lg:top-16 z-10">
                <Categories setSelectedCategory={setSelectedCategory} />
            </div>
            {/* issue */}
            <div className="min-h-screen flex flex-wrap justify-center mt-32">
                {filteredData.map(item => (
                    <ProjectCard key={item.id} data={item} />
                ))}
            </div>
            
            
            
        </>
    )
}
export default MainPage