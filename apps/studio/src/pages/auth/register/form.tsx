import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useSignupMutation } from "@/store/slices/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserCircle } from "@phosphor-icons/react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "./validation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
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
    await signup(data);
    navigate("/dashboard");
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="sr-onl" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="*******"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password")}
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>
          <Button type="submit" disabled={isLoading} className="font-semibold items-center gap-1">
            {isLoading  ? 
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> :
              <UserCircle size={20} weight="fill" />
             }
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}
