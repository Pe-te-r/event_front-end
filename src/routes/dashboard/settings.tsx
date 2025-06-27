import LoadingComponent from '@/components/Loading'
import { useUpdateUser } from '@/hooks/users'
import { authStore } from '@/stores/authStore'
import { useUserById } from '@/hooks/users'

import type { JSX } from '@emotion/react/jsx-runtime'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { FaUser, FaLock, FaPaintBrush, FaTrash } from 'react-icons/fa'
import { useQueryClient } from '@tanstack/react-query'

export const Route = createFileRoute('/dashboard/settings')({
  component: RouteComponent,
})

const tabs = ['Profile', 'Security', 'Preferences', 'Account']

export default function RouteComponent() {
  const id = authStore.state.user?.id
  const { user, isLoading } = useUserById(id)
  const [activeTab, setActiveTab] = useState('Profile')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
  })

  const { mutate: updateUser, isPending, } = useUpdateUser()
  const queryClient = useQueryClient()

  if (isLoading || !user) return <LoadingComponent />

  const startEdit = () => {
    setIsEditing(true)
    setFormData({
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      phone: user.phone || '',
    })
  }

  const cancelEdit = () => {
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    if (!id) return
    updateUser({ userId: id, data: formData }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user', id] })
        queryClient.refetchQueries({ queryKey: ['user', id] })
        setIsEditing(false)
      },
    })
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
            {!isEditing ? (
              <>
                <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Joined:</strong> {new Date(user.createAt).toLocaleDateString()}</p>
                <button
                  onClick={startEdit}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-1"
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                    disabled={isPending}
                  >
                    {isPending ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
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
            onClick={() => {
              setIsEditing(false)
              setActiveTab(tab)
            }}
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
