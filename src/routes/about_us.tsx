import { createFileRoute } from '@tanstack/react-router'
import { FaCalendarAlt, FaUsers, FaBell, FaHandshake } from 'react-icons/fa'

export const Route = createFileRoute('/about_us')({
  component: AboutPage,
})


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">About Event Hub</h1>

        <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl mx-auto">
          Event Hub is your all-in-one platform for discovering, sharing, and managing events. Whether you're attending or organizing, we make it seamless and intuitive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <FaCalendarAlt className="text-3xl text-blue-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Event Discovery & Reminders</h2>
              <p className="text-gray-600 mt-1">
                Discover upcoming events and get automatic reminders so you never miss out on what matters to you.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaUsers className="text-3xl text-green-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Organize & Share Events</h2>
              <p className="text-gray-600 mt-1">
                Registered users can apply to become <strong>Organizers</strong> and start creating and sharing events with others.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaBell className="text-3xl text-yellow-500 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Event Booking & Tickets</h2>
              <p className="text-gray-600 mt-1">
                Users can register and book events with ease. A digital ticket will be issued for the event day.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaHandshake className="text-3xl text-purple-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Collaboration & Community</h2>
              <p className="text-gray-600 mt-1">
                Organizers can collaborate with others to make their events more impactful while building a strong event-driven community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Free & Premium Plans</h3>
          <p className="text-gray-700 max-w-xl mx-auto">
            <strong>Personal users</strong> enjoy Event Hub absolutely free. However, if you’re planning to organize, promote, and manage events at a broader level, you can apply as an <strong>Organizer</strong> and access premium tools and analytics at a low monthly cost.
          </p>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Apply to Become an Organizer
          </button>
        </div>
      </div>
    </div>
  )
}
