// Update DashboardLayout.tsx
import { Outlet } from '@tanstack/react-router'
import UserSideNav from '../UserSideNav'

export default function NormalLayout() {

  return (
    <div className="flex h-screen">
      <UserSideNav />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-200">
        <Outlet />
      </main>
    </div>

  )
}