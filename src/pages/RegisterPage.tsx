// src/pages/RegisterPage.tsx
import { Link } from "react-router-dom"
import AuthLayout from "./AuthLayout"
import { Button } from "@/components/button"
import { Input } from "@/components/input" 
import { Label } from "@/components/label"

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Create an Account
        </h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter a strong password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
            Create Account
          </Button>
          <p className="text-sm text-center text-gray-600 pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}