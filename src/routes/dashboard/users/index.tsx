
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { CompactTable } from '@table-library/react-table-library/compact'
import LoadingComponent from '@/components/Loading'
import type { registerData as User } from '@/types/types'
import { useTheme } from '@table-library/react-table-library/theme'
import { useUsers } from '@/hooks/users'


export const Route = createFileRoute('/dashboard/users/')({
  component: UsersRoute,
})

type Props = {
  themeMode: 'light' | 'dark'
}


function UsersRoute({themeMode='light'}:Props) {

  const navigate = useNavigate()
  const { users:nodes, isLoading, error } = useUsers()


  if (isLoading) return <LoadingComponent />
  if (error) return <div className="text-red-600">An error occurred while fetching users.</div>



  const theme = useTheme({
    Table: `
      border-collapse: collapse;
      width: 100%;
    `,
    HeaderRow: `
      background-color: ${themeMode === 'dark' ? '#1f2937' : '#f3f4f6'};
      color: ${themeMode === 'dark' ? '#fff' : '#111827'};
      font-weight: bold;
    `,
    Row: `
      border: 1px solid ${themeMode === 'dark' ? '#374151' : '#d1d5db'};
      &:nth-of-type(odd) {
        background-color: ${themeMode === 'dark' ? '#111827' : '#ffffff'};
      }
      &:nth-of-type(even) {
        background-color: ${themeMode === 'dark' ? '#1f2937' : '#f9fafb'};
      }
      &:hover {
        background-color: ${themeMode === 'dark' ? '#374151' : '#e5e7eb'};
      }
    `,
    Cell: `
      padding: 0.75rem;
      border: 1px solid ${themeMode === 'dark' ? '#374151' : '#d1d5db'};
    `,
  })


  const COLUMNS =
     [
      {
        label: '#',
        renderCell: (user: User) => nodes.findIndex((n) => n.id === user.id) + 1,
      },
      {
        label: 'Name',
        renderCell: (user: User) => `${user.first_name} ${user.last_name ?? ''}`,
        sort: { sortKey: 'NAME' },
      },
      {
        label: 'Email',
        renderCell: (user: User) => user.email,
        sort: { sortKey: 'EMAIL' },
      },
      {
        label: 'Phone',
        renderCell: (user: User) => user.phone,
      },
      {
        label: 'Role',
        renderCell: (user: User) => user.role,
        sort: { sortKey: 'ROLE' },
      },
      {
        label: 'Created At',
        renderCell: (user: User) =>
          new Date(user.createAt).toLocaleDateString('en-KE', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }),
      },
      {
        label: 'Action',
        renderCell: (user: User) => (
          <button
            onClick={() =>
              navigate({ to: '/dashboard/users/$id', params: { id: user.id }, search: { detailed: 'true' } })
            }
            className="px-2 py-1 bg-blue-600 cursor-pointer text-white text-sm rounded hover:bg-blue-700"
          >
            View Details
          </button>
        ),
      },
    ]

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">User Management</h1>
      <CompactTable theme={theme} columns={COLUMNS} data={{ nodes }} />
    </div>
  )
}
