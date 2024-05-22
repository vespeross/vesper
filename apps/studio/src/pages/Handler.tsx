import { useUser } from "@/hooks";
import { Navigate } from "react-router-dom";

export const Handler: React.FC = () => {
  const { isAuthenticated } = useUser();
  if (isAuthenticated) return <Navigate to="/dashboard" />;
  else return <Navigate to="/auth" />;
};
