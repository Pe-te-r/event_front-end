import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

interface NavItem {
  name: string
  to: string
}

const navItems: NavItem[] = [
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Users', to: '/dashboard/users' },
  { name: 'Events', to: '/dashboard/events' },
]

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false)
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
          w-64 bg-white border-r p-4
          transform transition-transform duration-200 ease-in-out
          shadow-md md:shadow-none
        `}
      >
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-4 py-2 rounded hover:bg-blue-100 ${location.pathname === item.to ? 'bg-blue-200 font-semibold' : ''
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile when nav is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
