import Project from '@/components/Project'
import { ProjectType } from '@/types'
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

export default function Projects() {
    return (
        <div className='grid grid-cols-5 gap-5 w-full'>
            {projects.map(project => (
                <Project key={project.id} project={project} />
            )
            )}

        </div>
    )
}
