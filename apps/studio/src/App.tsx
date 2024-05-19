import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dashboard, Login, Register } from "@/pages";
import { useUser } from "@/hooks";

export default function App() {
  const { isLoading, user } = useUser();
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}
