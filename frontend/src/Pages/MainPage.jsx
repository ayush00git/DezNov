import { useState, useEffect } from "react"
import Categories from "../components/Elements/Categories"
import NavBar from "../components/Elements/Navbar"
import ProjectCard from "../components/Elements/ProjectCard"
import data from "../components/Elements/Data.json"
import UploadButton from "../components/Elements/UploadButton"

function MainPage() {
    const [projects, setProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // We use dynamic import for api to avoid circular dependency if any, 
                // or just standar import at top. Let's assume standard import at top.
                // But I need to add the import first.
                // Wait, I can't add import in this chunk if it's not the top of file.
                // I will add import in a separate step.
                const { default: api } = await import('../services/api');
                const response = await api.get('/upload/allValues');
                if (response.data.uploads) {
                    const mapped = response.data.uploads.map(u => ({
                        id: u._id,
                        title: u.title,
                        category: u.category,
                        tags: u.tags,
                        githubUrl: u.githubLink,
                        liveUrl: u.demoLink,
                        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
                        user: {
                            name: u.createdBy?.fullName || u.createdBy?.userName || "Anonymous",
                            avatar: `https://ui-avatars.com/api/?name=${u.createdBy?.fullName || "User"}&background=random`
                        },
                        likes: 0
                    }));
                    setProjects(mapped);
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    const displayData = projects.length > 0 ? projects : data; // Fallback to dummy data if empty? Or just projects.
    // Let's use projects if available, else maybe data? 
    // If I just started, DB is empty. So showing empty is fine, or showing dummy data.
    // Let's mix them or just use projects. For "connecting APIs" I should rely on API.
    // But for demo purposes if API returns empty, maybe fallback. 
    // I'll stick to API data + fallback if API fails or returns 0?
    // Let's just use API data. If empty, it's empty.

    const filteredData = selectedCategory === "All"
        ? projects
        : projects.filter(item => item.category === selectedCategory)

    return (
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
                <UploadButton />
            </div>



        </>
    )
}
export default MainPage