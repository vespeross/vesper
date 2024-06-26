import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "@phosphor-icons/react";
import { useCreateProjectMutation } from "@/store/slices/projects";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const createProjectSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

export const CreateProjectCard: React.FC = () => {
  const [create, { isLoading }] = useCreateProjectMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProjectSchema),
  });
  const onSubmit = async (data: { name: string; description: string }) => {
    await create(data);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="border-dashed shadow-none border-zinc-300 flex h-full gap-2 items-center justify-center text-lg text-muted-foreground min-h-36">
          <PlusCircle />
          <p>Create New Project</p>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Create a project to add services and environments
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">

            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              placeholder="Project Name"
              disabled={isLoading}
              {...register("name")}
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col gap-2">

            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Project Description"
              disabled={isLoading}
              {...register("description")}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Create Project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
