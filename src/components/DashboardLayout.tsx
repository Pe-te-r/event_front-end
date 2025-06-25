// Update DashboardLayout.tsx
import { useState } from 'react'
import { Outlet } from '@tanstack/react-router'
import SideNav from './SideNav'

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen">
      <SideNav isOpen={isSidebarOpen} />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 relative">
        <button
          className="md:hidden absolute top-4 left-4 z-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
        <Outlet />
      </div>
    </div>
  )
}