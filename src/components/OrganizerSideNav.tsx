import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState, type JSX } from 'react'
import {
  FaBars,
  FaHome,
  FaPlusCircle,
  FaCalendarCheck,
  FaCog,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa'

interface NavItem {
  name: string
  to: string
  icon: JSX.Element
}

const navItems: NavItem[] = [
  { name: 'Dashboard', to: '/organizer', icon: <FaHome /> },
  { name: 'Create Event', to: '/organizer/create', icon: <FaPlusCircle /> },
  { name: 'My Events', to: '/organizer/events', icon: <FaCalendarCheck /> },
  { name: 'Settings', to: '/organizer/settings', icon: <FaCog /> },
]

export default function OrganizerSideNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const { location } = useRouterState()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Mobile Toggle */}
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
                flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-100
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

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
