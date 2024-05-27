import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'
import { useProject } from '@/hooks'

export default function DynamicBreadcrumb() {
    const { pathname } = useLocation()

    const pathParts = pathname.split('/').filter(part => part)
    const isProject = pathParts.includes('projects')
    const projectIdIndex = pathParts.indexOf('projects') + 1
    const projectId = pathParts[projectIdIndex]
    const { project } = useProject(isProject && projectId ? projectId : "Unknown Project")

    const capitalize = (str: string) => {
        return str.replace(/\b\w/g, char => char.toUpperCase())
    }

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {pathParts.map((part, index) => {
                    const isLast = index === pathParts.length - 1
                    const pathTo = '/' + pathParts.slice(0, index + 1).join('/')
                    
                    const modifiedPart = isProject && index === projectIdIndex ? project?.name || 'xyz' : part
                    const capitalizedPart = capitalize(modifiedPart)

                    return (
                        <React.Fragment key={index}>
                            {index > 0 && <BreadcrumbSeparator />}
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{capitalizedPart}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={pathTo}>{capitalizedPart}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
