import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts";
import Projects from "@/pages/dashboard/projects";
import Project from "@/pages/dashboard/projects/project";
import { Dashboard } from "./pages/dashboard";
import { TooltipProvider } from "./components/ui/tooltip";
import { Login, Register } from "./pages/auth";

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<Project />} />
          </Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}
