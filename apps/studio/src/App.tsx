import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardLayout, RootLayout } from "@/layouts";
import { Auth, Dashboard, NotFound, Handler } from "@/pages";
import { Projects } from "@/pages/dashboard/projects";
import { Project } from "./pages/dashboard/projects/project";

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<RootLayout />}>
            <Route index element={<Handler />} />
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />}>
                <Route path=":cid" element={<Project />} />
              </Route>
            </Route>
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  );
}
