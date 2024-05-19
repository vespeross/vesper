import "@/App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipProvider } from "@/components/ui/tooltip"
import { Dashboard, Login, Register } from "@/pages"
export default function App() {
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
  )
}
