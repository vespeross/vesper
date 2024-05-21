import "@/App.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard, Login, Register } from "./pages";
import Projects from "./pages/Projects";

export default function App() {

  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}
