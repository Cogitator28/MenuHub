import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { SetupForm } from "./setup-form"


export default async function SetupPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/")
  }

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <SetupForm userId={userId} />
    </div>
  )
}
