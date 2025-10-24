// src/pages/AdminLoginPage.tsx
import { Link } from "react-router-dom"
import AuthLayout from "./AuthLayout"
import { Button } from "@/components/button"
import { Input } from "@/components/input" 
import { Label } from "@/components/label" 

export default function AdminLoginPage() {
  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Admin Login
        </h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="admin@example.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Login as Admin
          </Button>
          <p className="text-sm text-center text-gray-600">
            Not an admin?{" "}
            <Link to="/login/user" className="text-blue-600 hover:underline">
              Login as User
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}