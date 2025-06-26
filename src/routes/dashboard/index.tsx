import { FaUsers, FaCalendarAlt, FaMoneyBillWave, FaReceipt, FaStar } from 'react-icons/fa'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent
})



export default function RouteComponent() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <DashboardCard icon={<FaCalendarAlt />} label="Total Events" value="12" />
        <DashboardCard icon={<FaUsers />} label="Total Users" value="230" />
        <DashboardCard icon={<FaReceipt />} label="Registrations" value="120" />
        <DashboardCard icon={<FaMoneyBillWave />} label="Total Revenue" value="$4,800" />
        <DashboardCard icon={<FaStar />} label="Feedback Received" value="37" />
      </div>

      {/* Placeholder Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Revenue Over Time</h2>
          <div className="h-40 flex items-center justify-center text-gray-400">[ Chart Placeholder ]</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Event Registrations</h2>
          <div className="h-40 flex items-center justify-center text-gray-400">[ Chart Placeholder ]</div>
        </div>
      </div>

      {/* Recent Activity Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Latest Payments</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>John Doe - Event X</span>
              <span className="font-medium text-green-600">$100</span>
            </li>
            <li className="flex justify-between">
              <span>Jane Smith - Event Y</span>
              <span className="font-medium text-green-600">$75</span>
            </li>
            <li className="flex justify-between">
              <span>Mike Joe - Event Z</span>
              <span className="font-medium text-green-600">$150</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Registrations</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Emily W. - TechFest</span>
              <span className="text-gray-500">2 hrs ago</span>
            </li>
            <li className="flex justify-between">
              <span>Chris R. - DesignCon</span>
              <span className="text-gray-500">4 hrs ago</span>
            </li>
            <li className="flex justify-between">
              <span>Susan M. - DevSummit</span>
              <span className="text-gray-500">Today</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">
            ➕ Create New Event
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700">
            📤 Export Reports
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-800">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  )
}

function DashboardCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex items-center space-x-4">
      <div className="text-blue-600 text-2xl">{icon}</div>
      <div>
        <div className="text-lg font-semibold">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  )
}
