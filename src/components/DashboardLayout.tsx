// Update DashboardLayout.tsx
import { Outlet } from '@tanstack/react-router'
import SideNav from './SideNav'

export default function DashboardLayout() {

  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>

  )
}