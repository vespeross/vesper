import { useNavigate } from "react-router-dom";
import { useUser } from "@/hooks";
import * as React from "react";

export const Home: React.FC = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);
  return null;
};
