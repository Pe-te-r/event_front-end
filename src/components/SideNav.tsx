// components/SideNav.tsx
import { Link, useRouterState } from '@tanstack/react-router'

const navItems = [
  { name: 'Dashboard', to: '/dashboard' },
  // { name: 'Users', to: '/dashboard/users' },
  // { name: 'Settings', to: '/dashboard/settings' },
]

export default function SideNav({ isOpen = true }: { isOpen?: boolean }) {
  const { location } = useRouterState()

  return (
    // <aside className="w-64 bg-white border-r p-4">
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} 
    md:translate-x-0 transform transition-transform duration-200 ease-in-out
    fixed md:static inset-y-0 left-0 z-40 w-64 bg-white border-r p-4`}>      <nav className="space-y-2">
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
  )
}
