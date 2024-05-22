import "@/App.css";
import Projects from "@/pages/dashboard/projects";
import Project from "@/pages/dashboard/projects/project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { DashboardLayout } from "./layouts";
import { Handler } from "./pages/Handler";
import NotFound from "./pages/NotFound";
import Auth from "./pages/auth";
import { Dashboard } from "./pages/dashboard";
export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<NotFound />} />
          <Route path="/" index element={<Handler />} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<Project />} />
          </Route>

          <Route path="/auth" element={<Auth />} />

        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  );
}
