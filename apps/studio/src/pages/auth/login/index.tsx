import ErrorMessage from "@/components/ErrorMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStoreDispatch, useUser } from "@/hooks";
import { actions as authActions, useLoginMutation } from "@/store/slices/auth";
import { useNewQuery } from "@/store/slices/general";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "./validation";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
  const navigate = useNavigate();
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const { data: response } = await login({
        email: data.email,
        password: data.password,
      });
      if (!response) return;
      navigate("/dashboard");
      dispatch(
        authActions.addUser({
          user: response.body.user,
          access_token: response.body.accessToken,
        })
      );
    } catch (error) {
      console.error("error", error);
    }
  };

  const { data } = useNewQuery({});
  const { user } = useUser();
  const { isAuthenticated } = useUser();
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex w-full h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center">
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
        className="w-1/2 hidden md:block h-full"
        alt=""
      />
    </div>
  );
};
