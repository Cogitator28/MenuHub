"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Clock } from "lucide-react"
import Image from "next/image"

// Mock restaurant data - replace with actual data fetching
const mockRestaurant = {
  name: "Bella Vista Restaurant",
  slug: "bella-vista",
  description:
    "Authentic Italian cuisine with a modern twist. Fresh ingredients, traditional recipes, and a cozy atmosphere.",
  logo: "/placeholder.svg?height=80&width=80",
  location: "123 Main St, Downtown",
  hours: "Mon-Sun: 11:00 AM - 10:00 PM",
}

const mockMenuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil on our homemade dough",
    price: 16.99,
    category: "Lunch",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and our signature dressing",
    price: 12.99,
    category: "Lunch",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    price: 8.99,
    category: "Desserts",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Espresso",
    description: "Rich, bold Italian espresso",
    price: 3.99,
    category: "Drinks",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Pasta Carbonara",
    description: "Creamy pasta with pancetta, eggs, and parmesan cheese",
    price: 18.99,
    category: "Dinner",
    available: false,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function RestaurantMenuPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(mockMenuItems.map((item) => item.category)))]

  const filteredItems = mockMenuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof mockMenuItems>,
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <Image
              src={mockRestaurant.logo || "/placeholder.svg"}
              alt={`${mockRestaurant.name} logo`}
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{mockRestaurant.name}</h1>
              <p className="text-lg text-gray-600 mb-4 max-w-2xl">{mockRestaurant.description}</p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {mockRestaurant.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {mockRestaurant.hours}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No menu items found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedItems).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">{category}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg border hover:shadow-md transition-shadow">
                      <div className="flex">
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            {!item.available && (
                              <Badge variant="secondary" className="ml-2">
                                Unavailable
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-green-600">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="w-24 h-24 m-4 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
