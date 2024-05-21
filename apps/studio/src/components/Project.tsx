import { ProjectType } from '@/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuTrigger } from './ui/context-menu'
import { Copy, Database, Download, Eye, Globe, Key, Pause, PencilSimpleLine, Trash } from '@phosphor-icons/react'

export default function Project({ project }: { project: ProjectType }) {
    return (
        <ContextMenu>
            <ContextMenuTrigger>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            {project.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {project.description}
                    </CardContent>
                    <CardFooter className='flex gap-4'>
                        <div className='flex items-center gap-1 text-xs'>
                            <Database size={15} />
                            <span>2 Services</span>

                        </div>
                        <div className='flex items-center gap-1 text-xs'>
                            <Globe size={15} />
                            <span>2 ENV</span>

                        </div>
                    </CardFooter>

                </Card>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuLabel>
                    Project Actions
                </ContextMenuLabel>

                <ContextMenuItem>
                    <Eye weight='duotone' />
                    View Project
                </ContextMenuItem>

                <ContextMenuItem>
                    <PencilSimpleLine weight='duotone' />
                    Rename Project
                </ContextMenuItem>
                <ContextMenuItem>
                    <Copy weight='duotone' />
                    Duplicate Project
                </ContextMenuItem>
                <ContextMenuItem>
                    <Pause weight='duotone' />
                    Pause Project
                </ContextMenuItem>
                <ContextMenuItem>
                    <Download weight='duotone' />
                    Download Backup
                </ContextMenuItem>
                <ContextMenuItem>
                    <Key weight='duotone' />
                    Copy ENV Secrets
                </ContextMenuItem>
                <ContextMenuItem>
                    <Trash weight='duotone' />
                    Delete
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}
