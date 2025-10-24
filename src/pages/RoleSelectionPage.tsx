// src/pages/RoleSelectionPage.tsx
import { Link } from "react-router-dom"
import AuthLayout from "./AuthLayout"
import { Shield, User, ChevronRight } from "lucide-react"

export default function RoleSelectionPage() {
  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Select Your Role
        </h2>
        <div className="space-y-4">
          <RoleOption
            role="Admin"
            description="Manage resources and approve requests"
            icon={<Shield className="w-6 h-6 text-blue-600" />}
            linkTo="/login/admin"
          />
          <RoleOption
            role="User"
            description="Request resources and view status"
            icon={<User className="w-6 h-6 text-blue-600" />}
            linkTo="/login/user"
          />
        </div>
      </div>
    </AuthLayout>
  )
}

function RoleOption({
  role,
  description,
  icon,
  linkTo,
}: {
  role: string
  description: string
  icon: React.ReactNode
  linkTo: string
}) {
  return (
    <Link
      to={linkTo}
      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all"
    >
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </Link>
  )
}