import * as React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@/hooks";
import { useGetMeQuery } from "@/store/slices/auth";
import { Icons } from "@/components/ui/icons";

export const Handler: React.FC = () => {
  const { isLoading } = useGetMeQuery({});
  const { isAuthenticated } = useUser();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <Icons.spinner className="animate-spin h-5 w-5" />
      </div>
    );
  }
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
