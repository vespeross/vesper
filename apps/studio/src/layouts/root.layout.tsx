import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetMeQuery } from "@/store/slices/auth";
import { useUser } from "@/hooks";

export const RootLayout: React.FC = () => {
  const { isLoading } = useGetMeQuery({});
  const location = useLocation();
  const { isAuthenticated } = useUser();
  console.log("Auth status:",isAuthenticated)
  if (isLoading) {
    return null;
  }
  if (!isAuthenticated && location.pathname !== "/auth") {
    return <Navigate to="/auth" />;
  } else {
    return <Outlet />;
  }
};
