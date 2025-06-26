import type { JSX } from '@emotion/react/jsx-runtime'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { FaUser, FaLock, FaBell, FaPaintBrush, FaTrash } from 'react-icons/fa'

export const Route = createFileRoute('/dashboard/settings')({
  component: RouteComponent,
})

// src/routes/dashboard/settings/index.tsx


const tabs = ['Profile', 'Security', 'Notifications', 'Preferences', 'Account']

export default function RouteComponent() {
  const [activeTab, setActiveTab] = useState('Profile')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Profile Settings</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Phone:</strong> +254 712 345 678</p>
          </div>
        )
      case 'Security':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Security</h2>
            <p><strong>Password:</strong> ********</p>
            <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              Change Password
            </button>
            <div className="mt-4">
              <p><strong>Two-Factor Auth:</strong> Enabled</p>
              <button className="mt-2 px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700">
                Disable 2FA
              </button>
            </div>
          </div>
        )
      case 'Notifications':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              Email Alerts
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" />
              SMS Alerts
            </label>
          </div>
        )
      case 'Preferences':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Preferences</h2>
            <p><strong>Theme:</strong> Dark Mode</p>
            <p><strong>Language:</strong> English</p>
          </div>
        )
      case 'Account':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Account Actions</h2>
            <p><strong>Status:</strong> Active</p>
            <button className="mt-2 px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700">
              Deactivate Account
            </button>
            <button className="mt-2 ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
              Delete Account
            </button>
          </div>
        )
      default:
        return null
    }
  }

  const icons: Record<string, JSX.Element> = {
    Profile: <FaUser />,
    Security: <FaLock />,
    Notifications: <FaBell />,
    Preferences: <FaPaintBrush />,
    Account: <FaTrash />,
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-4 py-2 rounded shadow ${activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
          >
            {icons[tab]}
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow border">
        {renderTabContent()}
      </div>
    </div>
  )
}
