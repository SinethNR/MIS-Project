// src/landing-page.tsx
import type React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/button"
import { ArrowRight, BarChart3, Package, Utensils, Wrench } from "lucide-react"

// The 'onLoginClick' prop is no longer needed
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">SAN HUB</h1>
          </div>
          <div className="flex items-center gap-2">
            {/* Updated Login Button */}
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/login">Login</Link>
            </Button>
            {/* New Register Button */}
            <Button asChild variant="outline">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Manage Your Resources <span className="text-blue-600">Effortlessly</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            SAN HUB is a comprehensive resource management system designed to streamline asset allocation, meal
            planning, and service requests with ease and efficiency.
          </p>
          {/* Updated Get Started Button */}
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
            <Link to="/login">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Features Grid (unchanged) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <FeatureCard
            icon={<Package className="w-8 h-8" />}
            title="Asset Management"
            description="Track and manage all organizational assets with real-time availability status"
          />
          <FeatureCard
            icon={<Utensils className="w-8 h-8" />}
            title="Meal Planning"
            description="Organize meal requests and distributions efficiently across your organization"
          />
          <FeatureCard
            icon={<Wrench className="w-8 h-8" />}
            title="Service Requests"
            description="Submit and manage maintenance and service requests with priority levels"
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Reports & Analytics"
            description="Generate comprehensive monthly reports for better decision making"
          />
        </div>
      </section>

      {/* Benefits Section (unchanged) */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose SAN HUB?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitItem
              title="Role-Based Access"
              description="Separate admin and user interfaces for secure and organized resource management"
            />
            <BenefitItem
              title="Approval Workflow"
              description="Admins can review and approve requests based on resource availability"
            />
            <BenefitItem
              title="User-Friendly Design"
              description="Intuitive interface designed for ease of use across all organizational levels"
            />
          </div>
        </div>
      </section>

      {/* Footer (unchanged) */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 SAN HUB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Unchanged helper components
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center">
      <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}