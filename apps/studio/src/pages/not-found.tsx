import { useUser } from "@/hooks";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  const { isAuthenticated } = useUser();
  return (
    <div className="flex flex-col justify-center text-center h-screen items-center">
      <div className="font-mono">
        <p>WUPS, PAGE NOT FOUND</p>
        <Link to={isAuthenticated ? "/dashboard" : "/auth"}>
          GO {isAuthenticated ? "BACK TO DASHBOARD" : "LOGIN"}
        </Link>
      </div>
      <div className="fixed bottom-10">
        <p>VESPER TECHNOLOGIES</p>
      </div>
    </div>
  );
};
