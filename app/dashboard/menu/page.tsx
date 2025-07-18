import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import MenuDashboard from "./menu-dashboard"


export default async function MenuPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/")
  }

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <MenuDashboard userId={userId} />
    </div>
  )
}
