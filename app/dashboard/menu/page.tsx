"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import { MenuItemModal } from "@/components/menu-item-modal"
import Link from "next/link"

// Mock data - replace with actual data fetching
const mockMenuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Beef patty with lettuce, tomato, and our special sauce",
    price: 12.99,
    category: "Lunch",
    available: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with parmesan and croutons",
    price: 9.99,
    category: "Lunch",
    available: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Pancakes",
    description: "Fluffy pancakes with maple syrup and butter",
    price: 8.99,
    category: "Breakfast",
    available: false,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function MenuDashboard() {
  const [menuItems, setMenuItems] = useState(mockMenuItems)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const handleAddItem = () => {
    setEditingItem(null)
    setIsModalOpen(true)
  }

  const handleEditItem = (item: any) => {
    setEditingItem(item)
    setIsModalOpen(true)
  }

  const handleDeleteItem = (id: number) => {
    setMenuItems((items) => items.filter((item) => item.id !== id))
  }

  const handleSaveItem = (itemData: any) => {
    if (editingItem) {
      setMenuItems((items) => items.map((item) => (item.id === editingItem.id ? { ...item, ...itemData } : item)))
    } else {
      const newItem = {
        id: Date.now(),
        ...itemData,
      }
      setMenuItems((items) => [...items, newItem])
    }
    setIsModalOpen(false)
  }

  const groupedItems = menuItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof menuItems>,
  )

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
            <p className="text-gray-600 mt-2">Manage your restaurant's menu items</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/menu/demo-restaurant">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Preview Menu
              </Button>
            </Link>
            <Button onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add New Item
            </Button>
          </div>
        </div>

        {Object.keys(groupedItems).length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No menu items yet</h3>
              <p className="text-gray-600 mb-4">Get started by adding your first menu item</p>
              <Button onClick={handleAddItem}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Item
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedItems).map(([category, items]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                  <CardDescription>{items.length} items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium">{item.name}</h3>
                              {!item.available && <Badge variant="secondary">Unavailable</Badge>}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <p className="text-lg font-semibold text-green-600 mt-1">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleEditItem(item)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <MenuItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveItem}
          item={editingItem}
        />
      </div>
    </div>
  )
}
