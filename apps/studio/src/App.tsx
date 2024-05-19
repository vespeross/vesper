import "@/App.css"
import { Dashboard } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipProvider } from "@/components/ui/tooltip"
export default function App() {
  return (
    <TooltipProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  )
}
