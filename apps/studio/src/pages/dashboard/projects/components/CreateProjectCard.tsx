import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusCircle } from '@phosphor-icons/react'
import { useForm } from "@tanstack/react-form"

export default function CreateProjectCard() {
    const form = useForm({
        defaultValues: {
            name: '',
            description: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <Dialog>
            <DialogTrigger>


                <Card className='border-dashed shadow-none border-zinc-300 flex h-full gap-2 items-center justify-center text-lg text-muted-foreground min-h-36'>
                    <PlusCircle />
                    <p>Create New Project</p>
                </Card>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>

                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>
                    <DialogDescription>
                        Create a project to add services and environments
                    </DialogDescription>
                </DialogHeader>
                <form action="" className="flex flex-col gap-5">
                    <form.Field
                        name="name"
                        validators={{
                            onChangeAsyncDebounceMs: 500,
                            onChangeAsync: ({ value }) => {
                                if (value.length < 3) {
                                    return 'Name must be at least 3 characters'
                                }
                            }
                        }}
                        children={(field) => (
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">
                                    Name
                                </Label>
                                <Input

                                    id="name"
                                    type='text'
                                    placeholder='Vesper'
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="col-span-3"
                                />
                                {field.state.meta.errors && <span className='text-red-500 text-sm'>{field.state.meta.errors}</span>}
                            </div>
                        )}
                    />
                    <form.Field
                        name="description"
                        children={(field) => (
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="description">
                                    Description
                                </Label>
                                <Input

                                    id="description"
                                    type='text'
                                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sunt'
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                        )}
                    />
                </form>
                <DialogFooter>
                    <Button
                        disabled={!form.state.isDirty}
                        onClick={form.handleSubmit} type="submit">Create Project</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
