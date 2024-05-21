import { ProjectType } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuTrigger } from './ui/context-menu'
import { Download, Eye, Pause, Trash } from '@phosphor-icons/react'

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
                    <Pause weight='duotone' />
                    Pause Project
                </ContextMenuItem>
                <ContextMenuItem>
                    <Download weight='duotone' />
                    Download Backup
                </ContextMenuItem>
                <ContextMenuItem>
                    <Trash weight='duotone' />
                    Delete
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}
