import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetMeQuery } from "@/store/slices/auth";
import { useUser } from "@/hooks";

export const RootLayout: React.FC = () => {
  const { isLoading } = useGetMeQuery({});
  const location = useLocation();
  const { isAuthenticated } = useUser();
  if (isLoading) {
    return null;
  }
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/auth"
        replace
        state={{
          location,
        }}
      />
    );
  } else if (
    (location.pathname === "/" || location.pathname.startsWith("auth")) &&
    isAuthenticated
  ) {
    return (
      <Navigate
        to="/dashboard"
        state={{
          location,
        }}
        replace
      />
    );
  } else {
    return <Outlet />;
  }
};
