import { createFileRoute, Outlet } from '@tanstack/react-router'
// import DashboardLayout from '@/components/DashboardLayout'
import SideNav from '@/components/SideNav'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

export default function DashboardLayout() {

  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-200">
        <Outlet />

      </main>
    </div>

  )
}