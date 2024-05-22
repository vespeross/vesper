import { useUser } from "@/hooks";
import { Navigate } from "react-router-dom";

export const Handler: React.FC = () => {
  const { isAuthenticated } = useUser();
  return <Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />;
};
