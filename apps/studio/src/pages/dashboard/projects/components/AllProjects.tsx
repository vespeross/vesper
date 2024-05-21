import { ProjectType } from '@/types'
import ProjectCard from './ProjectCard'
const projects: ProjectType[] = [
    {
        id: '1',
        name: 'Rubiks',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sunt'
    },
    {
        id: '2',
        name: 'Vesper',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sunt'
    }
]
export default function AllProjects() {
    return (
        <>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            )
            )}
        </>
    )
}