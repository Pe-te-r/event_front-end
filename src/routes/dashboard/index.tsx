import {
  FaUsers, FaCalendarAlt, FaClipboardCheck,
  FaMoneyBill, } from 'react-icons/fa'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useDashboard } from '@/hooks/dashboard'
import DashboardCard from '@/components/DashboardCard'
import LoadingComponent from '@/components/Loading'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
}
)

export default function RouteComponent() {
  const { dashboard, isLoading, error } = useDashboard()
  console.log('here', dashboard)

  if (isLoading) return <LoadingComponent/>
  if (error) return <div className="p-4 text-red-600">Failed to load dashboard.</div>

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
        <DashboardCard
          title="Total Users"
          value={String(dashboard?.totalUsers)}
          icon={<FaUsers size={20} />}
          iconBg="bg-blue-100 text-blue-600"
        />
        <DashboardCard
          title="Total Events"
          value={String(dashboard?.totalEvents)}
          icon={<FaCalendarAlt size={20} />}
          iconBg="bg-purple-100 text-purple-600"
        />
        <DashboardCard
          title="Total Registrations"
          value={String(dashboard?.totalRegistrations)}
          icon={<FaClipboardCheck size={20} />}
          iconBg="bg-yellow-100 text-yellow-600"
        />
        <DashboardCard
          title="Total Revenue"
          value={`KES ${dashboard?.totalRevenue.toLocaleString()}`}
          icon={<FaMoneyBill size={20} />}
          iconBg="bg-green-100 text-green-600"
        />
      </div>

      {/* Placeholder content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue Chart (Coming Soon)</h2>
          <div className="h-40 flex items-center justify-center text-gray-400 italic">
            Revenue trends will be displayed here...
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to='/dashboard/users' className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Manage Users
        </Link>
        <Link to='/dashboard/events' className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
          View All Events
        </Link>
        <Link to='/dashboard/settings' className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          Settings
        </Link>
      </div>
    </div>
  )
}