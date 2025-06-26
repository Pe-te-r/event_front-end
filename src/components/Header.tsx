import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  FaCalendarAlt,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaTools,
  FaHome,
  FaBars,
  FaTimes,
  FaUsers,
} from 'react-icons/fa'
import {  authActions, authStore } from '@/stores/authStore'
import { useStore } from '@tanstack/react-store'

export default function Header() {
    const authState = useStore(authStore)
  const [viewMode, setViewMode] = useState<'guest' | 'user' | 'organizer' | 'admin'>('guest')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (authState.user && authState.isAuthenticated) {
      setViewMode(authState.user.role)
    } else {
      setViewMode('guest')
    }
  },[authState])
  const renderLinks = () => {
    switch (viewMode) {
      case 'guest':
        return (
          <>
            <Link to='/about_us' className='nav-link'>
              <FaUsers/> About Us
            </Link>
            <Link to="/Login" className="nav-link">
              <FaSignInAlt /> Login
            </Link>
            <Link to="/register" className="nav-link">
              <FaUserPlus /> Register
            </Link>
          </>
        )
      case 'user':
        return (
          <>
            <Link to='/about_us' className='nav-link'>
              <FaUsers /> About Us
            </Link>
            <Link to="/events" className="nav-link">
              <FaCalendarAlt /> Events
            </Link>
            <Link to="/normal" className="nav-link">
              <FaTools />Dashboard
            </Link>
            <button onClick={authActions.logout} className="nav-link text-red-500">
              <FaSignOutAlt /> Logout
            </button>
          </>
        )
      case 'organizer':
        return (
          <>
            <Link to='/about_us' className='nav-link'>
              <FaUsers /> About Us
            </Link>
            <Link to="/organizer" className="nav-link">
              <FaTools /> Dashboard
            </Link>

            <button onClick={authActions.logout} className="nav-link text-red-500">
              <FaSignOutAlt /> Logout
            </button>
          </>
        )
      case 'admin':
        return (
          <>
            <Link to="/dashboard" className="nav-link">
              <FaTools /> Dashboard
            </Link>
            <button onClick={authActions.logout}  className="nav-link cursor-pointer text-red-500">
              <FaSignOutAlt /> Logout
            </button>
          </>
        )
    }
  }

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
        <FaCalendarAlt />
        <Link to="/">EventHub</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 text-sm text-gray-700">
        <Link to="/" className="nav-link">
          <FaHome /> Home
        </Link>
        {renderLinks()}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Right - View mode toggle */}
      {/* <div className="hidden sm:block text-xs text-gray-500 ml-4">
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
      </div> */}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md z-10 flex flex-col gap-3 p-4 text-gray-700 md:hidden">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>
          {renderLinks()}
          <div className="block sm:hidden text-xs text-gray-500">
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as any)}
              className="border px-2 py-1 rounded text-sm mt-2"
            >
              <option value="guest">Guest</option>
              <option value="user">User</option>
              <option value="organizer">Organizer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </nav>
      )}
    </header>
  )
}
