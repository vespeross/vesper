import "@/App.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dashboard, Login, Register } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

export default function App() {

  return (
    <RootLayout>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RootLayout>
  );
}
