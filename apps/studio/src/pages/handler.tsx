import * as React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@/hooks";
import { useGetMeQuery } from "@/store/slices/auth";

export const Handler: React.FC = () => {
  const { isLoading } = useGetMeQuery({});
  const { isAuthenticated } = useUser();
  if (isLoading) {
    return null;
  }
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
