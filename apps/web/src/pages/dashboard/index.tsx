import { useInvites, useProjects, useUser } from "@/hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useInviteMutation } from "@/store/slices/invitation";

const createInviteSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const Dashboard: React.FC = () => {
  const { projects, isLoading } = useProjects();
  const { user } = useUser();
  const { invites } = useInvites();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createInviteSchema),
  });
  const [invite, { isLoading: inviteLoading }] = useInviteMutation();
  const onSubmit = async (data: { email: string }) => {
    if (inviteLoading) return;
    try {
      const { data: res } = await invite(data);
      console.log(res);
    } catch (error) {
      // handle error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold text-center text-primary">
        vesper
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email")}
          placeholder="email"
          className="border border-gray-300"
        />
        <button type="submit">Invite</button>
        {errors.email && <p>{errors.email.message}</p>}
      </form>
      {isLoading && <p>loading</p>}
      <h2>Invites</h2>
      <pre>{JSON.stringify(invites, null, 2)}</pre>
      <h2>Projects</h2>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      <h2>User</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
