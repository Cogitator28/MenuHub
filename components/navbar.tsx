"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChefHat } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  // Mock auth state - replace with actual auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">MenuHub</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/explore">
              <Button variant="ghost">Explore Restaurants</Button>
            </Link>
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <Link href="/auth/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
