import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, Menu, Search, Smartphone } from "lucide-react"
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton
} from "@clerk/nextjs"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Menus for
            <span className="text-orange-600"> Modern Restaurants</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create beautiful, responsive digital menus for your restaurant. Easy to manage, perfect for customers to
            browse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Create Your Menu Page
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Explore Restaurants
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need for digital menus</h2>
            <p className="text-lg text-gray-600">Simple, powerful tools to showcase your restaurant's offerings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <ChefHat className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Easy Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get your restaurant menu online in minutes with our simple setup process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Menu className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Menu Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Add, edit, and organize your menu items with categories and pricing.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Mobile Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your menu looks perfect on all devices - phones, tablets, and desktops.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Discoverable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Customers can easily find and browse your menu through our platform.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to digitize your restaurant menu?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of restaurants already using MenuHub to showcase their offerings.
          </p>
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg" className="text-lg px-8 py-3 bg-orange-600 hover:bg-orange-700">
                Get Started Free
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </section>
      <hr />
    </div>
  )
}
