import { useNewQuery } from "@/store/slices/general";
import { Login } from "./login";
import { Register } from "./register";
import { useUser } from "@/hooks";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function Auth() {
  const { data, refetch } = useNewQuery(undefined, {
    pollingInterval: 1,
  });
  useEffect(() => {
    refetch();
  }, [refetch]);
  console.log("is new install", data?.body.isNewInstall);
  const { isAuthenticated } = useUser();
  console.log(isAuthenticated);
  if (isAuthenticated) return <Navigate to="/dashboard" />;
  else if (!data) return null;
  else if (data.body.isNewInstall) return <Register />;
  else return <Login />;
}
