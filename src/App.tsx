// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./landing-page" 
import RoleSelectionPage from "./pages/RoleSelectionPage"
import AdminLoginPage from "./pages/AdminLoginPage"
import UserLoginPage from "./pages/UserLoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<RoleSelectionPage />} />
        <Route path="/login/admin" element={<AdminLoginPage />} />
        <Route path="/login/user" element={<UserLoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App