import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'

export default function DynamicBreadcrumb() {
    const { pathname } = useLocation()

    const pathParts = pathname.split('/').filter(part => part) 

    const capitalize = (str:string) => {
        return str.replace(/\b\w/g, char => char.toUpperCase())
    }

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {pathParts.map((part, index) => {
                    const isLast = index === pathParts.length - 1
                    const pathTo = '/' + pathParts.slice(0, index + 1).join('/')
                    const capitalizedPart = capitalize(part)

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
