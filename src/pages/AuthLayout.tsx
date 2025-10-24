// src/pages/AuthLayout.tsx
import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Package } from "lucide-react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-50 flex flex-col items-center justify-center p-4">
      <div className="absolute top-8 left-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
          <Package className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">SAN HUB</h1>
      </div>

      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  )
}