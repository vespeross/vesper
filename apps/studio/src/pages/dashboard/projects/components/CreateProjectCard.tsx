import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { PlusCircle } from '@phosphor-icons/react'

export default function CreateProjectCard() {
    return (
        <Dialog>
            <DialogTrigger>


                <Card className='border-dashed shadow-none border-zinc-300 flex h-full gap-2 items-center justify-center text-lg text-muted-foreground'>
                    <PlusCircle />
                    <p>Create New Project</p>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
