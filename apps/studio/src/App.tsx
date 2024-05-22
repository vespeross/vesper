import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts";
import Projects from "@/pages/dashboard/projects";
import Project from "@/pages/dashboard/projects/project";
import { Dashboard } from "./pages/dashboard";
import { TooltipProvider } from "./components/ui/tooltip";
import { Login, Register } from "./pages/auth";
import NotFound from "./pages/NotFound";
import { useUser } from "./hooks";
import { Home } from "./pages";

export default function App() {
  const { isAuthenticated } = useUser();
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" index element={<Home />} />
          {isAuthenticated && (
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:projectId" element={<Project />} />
            </Route>
          )}
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}
