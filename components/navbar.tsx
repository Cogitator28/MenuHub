"use client"

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton
} from "@clerk/nextjs"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChefHat } from "lucide-react"
// import { useState } from "react"


export function Navbar() {
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
            <SignedIn>
              <Link href="/dashboard/setup">
                <Button>Dashboard</Button>
              </Link>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button>Login</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>

  )
}
