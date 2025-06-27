import { createFileRoute, Link } from '@tanstack/react-router'
import { FaCalendarAlt, FaTicketAlt, FaUsers, FaPlus } from 'react-icons/fa'

export const Route = createFileRoute('/organizer/')({
  component: RouteComponent,
})


export default function RouteComponent() {
  const upcomingEvents = [
    { title: 'Tech Expo 2025', date: '2025-07-20', status: 'Published' },
    { title: 'Startup Pitch Night', date: '2025-08-05', status: 'Draft' },
    { title: 'AI & Data Conference', date: '2025-09-12', status: 'Published' },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Organizer Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4 flex items-center gap-4">
          <FaCalendarAlt className="text-blue-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Upcoming Events</p>
            <p className="text-lg font-bold">3</p>
          </div>
        </div>
        <div className="bg-white shadow rounded p-4 flex items-center gap-4">
          <FaTicketAlt className="text-green-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Tickets Sold</p>
            <p className="text-lg font-bold">542</p>
          </div>
        </div>
        <div className="bg-white shadow rounded p-4 flex items-center gap-4">
          <FaUsers className="text-purple-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Total Registrations</p>
            <p className="text-lg font-bold">389</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events Table */}
      <div className="bg-white shadow rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Events</h2>
          <Link to='/organizer/create' className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            <FaPlus />
            Create New Event
          </Link>
        </div>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Event</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEvents.map((event, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-2">{event.title}</td>
                <td className="py-2">{event.date}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${event.status === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                      }`}
                  >
                    {event.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
