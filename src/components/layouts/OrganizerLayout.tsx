import { Outlet } from '@tanstack/react-router'
import OrganizerSideNav from '../OrganizerSideNav'

export default function OrganizerLayout() {
  return (
    <div className="flex h-screen">
      <OrganizerSideNav />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}
