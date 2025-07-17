import { NextResponse } from "next/server"
import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const users = await prisma.user.findFirst({ where: { id: "2" } })
        const restaurant = await prisma.restaurant.findMany()
        const menuitem = await prisma.menuItem.findMany()
        return NextResponse.json({ 
            users,
            restaurant,
            menuitem

         })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
    }
}
