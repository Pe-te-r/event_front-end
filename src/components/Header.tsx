import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { FaUser, FaCalendarAlt, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaTools, FaHome } from 'react-icons/fa'

export default function Header() {
  // Toggle this manually for now; in real apps, you'd get this from context/auth
  const [viewMode, setViewMode] = useState<'guest' | 'user' | 'organizer' | 'admin'>('guest')

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left - Logo */}
      <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
        <FaCalendarAlt />
        <Link to="/">EventHub</Link>
      </div>

      {/* Center - Navigation */}
      <nav className="flex items-center gap-4 text-sm text-gray-700">
        <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
          <FaHome /> Home
        </Link>

        {viewMode === 'guest' && (
          <>
            <Link to="/auth/Login" className="hover:text-blue-600 flex items-center gap-1">
              <FaSignInAlt /> Login
            </Link>
            <Link to="/auth/register" className="hover:text-blue-600 flex items-center gap-1">
              <FaUserPlus /> Register
            </Link>
          </>
        )}

        {viewMode === 'user' && (
          <>
            <Link to="/events" className="hover:text-blue-600 flex items-center gap-1">
              <FaCalendarAlt /> Events
            </Link>
            <Link to="/my-events" className="hover:text-blue-600 flex items-center gap-1">
              <FaUser /> My Events
            </Link>
            <button className="hover:text-red-500 flex items-center gap-1">
              <FaSignOutAlt /> Logout
            </button>
          </>
        )}

        {viewMode === 'organizer' && (
          <>
            <Link to="/events/create" className="hover:text-blue-600 flex items-center gap-1">
              <FaTools /> Create Event
            </Link>
            <Link to="/my-hosted-events" className="hover:text-blue-600 flex items-center gap-1">
              <FaUser /> My Hosted Events
            </Link>
            <button className="hover:text-red-500 flex items-center gap-1">
              <FaSignOutAlt /> Logout
            </button>
          </>
        )}

        {viewMode === 'admin' && (
          <>
            <Link to="/admins/dashboard" className="hover:text-blue-600 flex items-center gap-1">
              <FaTools /> Dashboard
            </Link>
            <Link to="/admins/users" className="hover:text-blue-600 flex items-center gap-1">
              <FaUser /> Manage Users
            </Link>
            <button className="hover:text-red-500 flex items-center gap-1">
              <FaSignOutAlt /> Logout
            </button>
          </>
        )}
      </nav>

      {/* Right - Mode Toggle Dev Tool (for testing only) */}
      <div className="text-xs text-gray-500">
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value as any)}
          className="border px-2 py-1 rounded text-sm"
        >
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="organizer">Organizer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </header>
  )
}
