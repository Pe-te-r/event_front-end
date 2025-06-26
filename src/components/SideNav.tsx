import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState, type JSX } from 'react'
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
  FaCreditCard,
  FaAngleLeft,
  FaAngleRight,
  FaCog,
} from 'react-icons/fa'

interface NavItem {
  name: string
  to: string
  icon: JSX.Element
}

const navItems: NavItem[] = [
  { name: 'Dashboard', to: '/dashboard', icon: <FaTachometerAlt /> },
  { name: 'Users', to: '/dashboard/users', icon: <FaUsers /> },
  { name: 'Events', to: '/dashboard/events', icon: <FaCalendarAlt /> },
  { name: 'Payments', to: '/dashboard/payments', icon: <FaCreditCard /> },
  { name: 'Settings', to: '/dashboard/settings', icon: <FaCog /> },
]

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false) // for mobile toggle
  const [collapsed, setCollapsed] = useState(false) // for desktop collapse
  const { location } = useRouterState()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed bottom-10 left-4 z-50 text-2xl p-2 bg-white rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:static inset-y-0 left-0 z-40
          ${collapsed ? 'w-20' : 'w-64'}
          bg-white border-r p-4
          transform transition-transform duration-200 ease-in-out
          shadow-md md:shadow-none
          flex flex-col
        `}
      >
        {/* Collapse/Expand button (desktop only) */}
        <button
          className="hidden md:flex items-center self-end bg-blue-300 mb-4 p-2 cursor-pointer rounded text-sm text-gray-600"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
        </button>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`
                flex cursor-pointer items-center gap-3 px-4 py-2 rounded hover:bg-blue-100 
                ${location.pathname === item.to ? 'bg-blue-200 font-semibold' : ''}
                transition-colors
              `}
              title={collapsed ? item.name : undefined}
            >
              <span className="text-xl">{item.icon}</span>
              {!collapsed && <span className="whitespace-nowrap">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
