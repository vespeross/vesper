import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/store/slices/auth";
import { useForm } from "react-hook-form";
import { loginSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreDispatch, useUser } from "@/hooks";
import { actions as authActions } from "@/store/slices/auth";
import { useNewQuery } from "@/store/slices/general";
import ErrorMessage from "@/components/ErrorMessage";

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useStoreDispatch();
  const [login, { isLoading, isError, isSuccess }] = useLoginMutation();
  console.log(isLoading);
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const { data: response } = await login({
        email: data.email,
        password: data.password,
      });
      dispatch(
        authActions.addUser({
          user: response.body.user,
          access_token: response.body.accessToken,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  console.log({
    isError,
    isLoading,
    isSuccess,
  });
  const { data } = useNewQuery({});
  console.log(data);
  const { user } = useUser();
  console.log({ user });
  return (
    <div className="flex w-full h-screen">
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6  w-full max-w-sm p-5"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="mail@vesper.tech"
                required
                {...register("email")}
              />
              <ErrorMessage error={errors.email?.message} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                required
                {...register("password")}
              />
              <ErrorMessage error={errors.password?.message} />
            </div>
            <Button disabled={isLoading} type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
      <img
        src="https://source.unsplash.com/1600x900?black"
        className="w-3/5 hidden md:block h-full"
        alt=""
      />
    </div>

    // <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <input {...register("email")} />
    //     <p>{errors.email?.message}</p>
    //     <input {...register("password")} />
    //     <p>{errors.password?.message}</p>
    //     <input type="submit" />
    //   </form>
    //   <div className="flex items-center justify-center py-12">
    //     <div className="mx-auto grid w-[350px] gap-6">
    //       <div className="grid gap-2 text-ceer">

    //         <h1 className="text-3xl font-bold">Login</h1>
    //         <p className="text-balance text-muted-foreground">
    //           Enter your email below to login to your account
    //         </p>
    //       </div>
    //       <div className="grid gap-4">
    //         <div className="grid gap-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="m@example.com"
    //             required
    //           />
    //         </div>
    //         <div className="grid gap-2">
    //           <div className="flex items-center">
    //             <Label htmlFor="password">Password</Label>
    //             <Link
    //               to="/forgot-password"
    //               className="ml-auto inline-block text-sm underline"
    //             >
    //               Forgot your password?
    //             </Link>
    //           </div>
    //           <Input id="password" type="password" required />
    //         </div>
    //         <Button type="submit" className="w-full">
    //           Login
    //         </Button>
    //         <Button variant="outline" className="w-full">
    //           Login with Google
    //         </Button>
    //       </div>
    //       <div className="mt-4 text-center text-sm">
    //         Don&apos;t have an account?{" "}
    //         <Link to="#" className="underline">
    //           Sign up
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden bg-muted lg:block">
    //     <img
    //       src="/placeholder.svg"
    //       alt="Image"
    //       width="1920"
    //       height="1080"
    //       className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
    //     />
    //   </div>
    // </div>
  );
};
