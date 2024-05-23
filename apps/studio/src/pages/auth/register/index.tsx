import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/components/ErrorMessage";
import { signupSchema } from "./validation";
import { useSignupMutation } from "@/store/slices/auth";

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const { data: signupData } = await signup({
        email: data.email,
        password: data.password,
      }).unwrap();

      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full max-w-sm p-5"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="mail@vesper.tech"
                autoComplete="email"
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
                autoComplete="new-password"
                required
                {...register("password")}
              />
              <ErrorMessage error={errors.password?.message} />
            </div>
            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </form>
      </div>
      <img
        src="https://source.unsplash.com/1600x900?black"
        className="w-1/2 hidden md:block h-full"
        alt="Background"
      />
    </div>
  );
};
