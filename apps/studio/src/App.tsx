import "@/App.css";
import Projects from "@/pages/dashboard/projects";
import Project from "@/pages/dashboard/projects/project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { DashboardLayout, RootLayout } from "./layouts";
import NotFound from "./pages/NotFound";
import Auth from "./pages/auth";
import { Dashboard } from "./pages/dashboard";
export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<RootLayout />}>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path=":id" element={<Project />} />
            </Route>
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  );
}
