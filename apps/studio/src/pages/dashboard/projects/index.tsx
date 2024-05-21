import AllProjects from "./components/AllProjects";
import CreateProjectCard from "./components/CreateProjectCard";

export default function Projects() {
    return (
        <div className='grid grid-cols-5 gap-5 w-full'>
            <CreateProjectCard />
            <AllProjects />
        </div>
    )
}
