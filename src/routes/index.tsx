import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { FaCalendarPlus, FaUsers, FaLock, FaSearch } from 'react-icons/fa'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to EventHub</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Plan, organize, and attend events with ease. Whether you're an organizer or an attendee, EventHub simplifies event management for everyone.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/auth/Login"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Register
          </Link>
          <Link
            to="/events"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Browse Events
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Why Use EventHub?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-white rounded shadow">
            <FaCalendarPlus className="text-4xl text-blue-500 mb-2 mx-auto" />
            <h3 className="font-semibold">Create Events</h3>
            <p className="text-sm">Organizers can publish and manage their events with simple tools.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <FaSearch className="text-4xl text-green-500 mb-2 mx-auto" />
            <h3 className="font-semibold">Discover Events</h3>
            <p className="text-sm">Users can explore public events and register with ease.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <FaUsers className="text-4xl text-purple-500 mb-2 mx-auto" />
            <h3 className="font-semibold">User-Friendly</h3>
            <p className="text-sm">Clean, intuitive interfaces for both attendees and organizers.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <FaLock className="text-4xl text-red-500 mb-2 mx-auto" />
            <h3 className="font-semibold">Secure</h3>
            <p className="text-sm">Account management with safe login and registration flows.</p>
          </div>
        </div>
      </section>

    
    </div>
  )
}
