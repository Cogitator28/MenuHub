"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Eye } from "lucide-react"
import Image from "next/image"

// Mock restaurant data - replace with actual data fetching
const mockRestaurants = [
  {
    id: 1,
    name: "Bella Vista Restaurant",
    slug: "bella-vista",
    description: "Authentic Italian cuisine with a modern twist",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Downtown",
    itemCount: 24,
  },
  {
    id: 2,
    name: "Sakura Sushi",
    slug: "sakura-sushi",
    description: "Fresh sushi and Japanese specialties",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Midtown",
    itemCount: 18,
  },
  {
    id: 3,
    name: "The Burger Joint",
    slug: "burger-joint",
    description: "Gourmet burgers and craft beer",
    logo: "/placeholder.svg?height=80&width=80",
    location: "West Side",
    itemCount: 15,
  },
  {
    id: 4,
    name: "Café Parisien",
    slug: "cafe-parisien",
    description: "French pastries and artisan coffee",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Arts District",
    itemCount: 32,
  },
  {
    id: 5,
    name: "Spice Route",
    slug: "spice-route",
    description: "Authentic Indian and Thai cuisine",
    logo: "/placeholder.svg?height=80&width=80",
    location: "University Area",
    itemCount: 28,
  },
  {
    id: 6,
    name: "Green Garden",
    slug: "green-garden",
    description: "Fresh, organic, plant-based meals",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Health District",
    itemCount: 21,
  },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRestaurants = mockRestaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Restaurants</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing restaurants and browse their digital menus
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Results */}
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No restaurants found matching your search.</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Found {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <Image
                        src={restaurant.logo || "/placeholder.svg"}
                        alt={`${restaurant.name} logo`}
                        width={80}
                        height={80}
                        className="rounded-full border-2 border-gray-200"
                      />
                    </div>
                    <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                    <CardDescription className="text-center">{restaurant.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {restaurant.location}
                      </div>
                      <div className="text-sm text-gray-600">{restaurant.itemCount} menu items</div>
                      <Link href={`/menu/${restaurant.slug}`} className="block">
                        <Button className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          View Menu
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Own a restaurant?</h2>
          <p className="text-gray-600 mb-6">Create your own digital menu and reach more customers</p>
          <Link href="/auth/register">
            <Button size="lg">Get Started Free</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
