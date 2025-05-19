// app/dashboard/page.tsx
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="text-white p-4">
      Welcome back, <strong>{session.email}</strong>!
    </div>
  );
}
