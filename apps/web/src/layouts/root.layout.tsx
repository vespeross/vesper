import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetMeQuery } from "@/store/slices/auth";
import { useUser } from "@/hooks";
import { Icons } from "@/components/ui/icons";

export const RootLayout: React.FC = () => {
  const { isLoading } = useGetMeQuery({});
  const location = useLocation();
  const { isAuthenticated } = useUser();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <Icons.spinner className="animate-spin h-5 w-5" />
      </div>
    );
  }
  if (!isAuthenticated && location.pathname !== "/auth") {
    return <Navigate to="/auth" />;
  } else {
    return <Outlet />;
  }
};
