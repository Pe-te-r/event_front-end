import LoadingComponent from '@/components/Loading'
import { useUserById } from '@/hooks/users'
import { authStore } from '@/stores/authStore'
import type { JSX } from '@emotion/react/jsx-runtime'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { FaUser, FaLock, FaPaintBrush, FaTrash } from 'react-icons/fa'

export const Route = createFileRoute('/dashboard/settings')({
  component: RouteComponent,
})

const tabs = ['Profile', 'Security', 'Preferences', 'Account']

export default function RouteComponent() {
  const id = authStore.state.user?.id
  const { user, isLoading } = useUserById(id)
  const [activeTab, setActiveTab] = useState('Profile')

  if (isLoading || !user) return <LoadingComponent />

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Profile Information</h2>
            <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Joined:</strong> {new Date(user.createAt).toLocaleDateString()}</p>
          </div>
        )
      case 'Security':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div>
                <p><strong>Password:</strong> ********</p>
                <button className="mt-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Change Password
                </button>
              </div>
              <div>
                <p><strong>Two-Factor Authentication:</strong> Coming Soon</p>
                <button className="mt-1 px-3 py-1 bg-gray-400 text-white rounded cursor-not-allowed" disabled>
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        )
      case 'Preferences':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Preferences</h2>
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
            className={`flex items-center gap-2 px-4 py-2 rounded shadow transition-all duration-150 ${activeTab === tab
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
