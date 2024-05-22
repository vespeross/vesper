import { useNavigate } from "react-router-dom";
import { useUser } from "@/hooks";
import { useEffect } from "react";

export const Home: React.FC = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/dashboard");
    } else {
      return navigate("/auth");
    }
  }, [isAuthenticated, navigate]);
  return null;
};
