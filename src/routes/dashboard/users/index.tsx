import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { useSort } from '@table-library/react-table-library/sort'
import { usePagination } from '@table-library/react-table-library/pagination'
import { useState, useMemo } from 'react'
import LoadingComponent from '@/components/Loading'
import { useUsers } from '@/hooks/users'
import type { registerData as User } from '@/types/types'

export const Route = createFileRoute('/dashboard/users/')({
  component: UsersRoute,
})

type Props = {
  themeMode?: 'light' | 'dark'
}

function UsersRoute({ themeMode = 'light' }: Props) {
  const navigate = useNavigate()
  const { users, isLoading, error } = useUsers()

  const [search, setSearch] = useState('')

  const filteredUsers = useMemo(
    () =>
      Array.isArray(users)
        ? users.filter(
          (user) =>
            user?.email &&
            user.email.toLowerCase().includes(search.toLowerCase())
        )
        : [],
    [search, users]
  )
  

  const sort = useSort<User>(
    { nodes: filteredUsers },
    {
      state: {
        sortKey: 'NONE',
        reverse: false,
      },
      onChange: onSortChange => console.log('Sorting:', onSortChange),
    },
    {
      sortFns: {
        NAME: (array) => array.sort((a, b) => a.first_name.localeCompare(b.first_name)),
        EMAIL: (array) => array.sort((a, b) => a.email.localeCompare(b.email)),
        CREATED: (array) =>
          array.sort((a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()),
      },
    }
  )
  

  const pagination = usePagination(
    { nodes: filteredUsers },
    {
      state: { page: 0, size: 7 },
      onChange: onPaginationChange => console.log('Pagination:', onPaginationChange),
    }
  )

  const theme = useTheme({
    Table: `border-collapse: collapse; width: 100%;`,
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
    Cell: `padding: 0.75rem; border: 1px solid ${themeMode === 'dark' ? '#374151' : '#d1d5db'};`,
  })

  const COLUMNS = [
    {
      label: '#',
      renderCell: (user: User) => users.findIndex(n => n.id === user.id) + 1,
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
    },
    {
      label: 'Created At',
      renderCell: (user: User) =>
        new Date(user.createAt).toLocaleDateString('en-KE', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      sort: { sortKey: 'CREATED' },
    },
    {
      label: 'Action',
      renderCell: (user: User) => (
        <button
          onClick={() =>
            navigate({
              to: '/dashboard/users/$id',
              params: { id: user.id },
              search: { detailed: 'true' },
            })
          }
          className="px-2 py-1 bg-blue-600 cursor-pointer text-white text-sm rounded hover:bg-blue-700"
        >
          View Details
        </button>
      ),
    },
  ]

  const data = {
    nodes: filteredUsers,
  }

  if (isLoading) return <LoadingComponent />
  if (error)
    return <div className="text-red-600">An error occurred while fetching users.</div>

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <h1 className="text-xl font-semibold mb-4">User Management</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 px-3 py-1 rounded w-full sm:w-64"
        />
        <span className="text-sm text-gray-500">
          Page {pagination.state.page + 1} of{' '}
          {Math.ceil(filteredUsers.length / pagination.state.size)}
        </span>
      </div>

      <CompactTable
        columns={COLUMNS}
        data={data}
        theme={theme}
        sort={sort}
        pagination={pagination}
      />

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
          disabled={pagination.state.page === 0}
          className="px-3 py-1 cursor-pointer bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
          disabled={
            pagination.state.page + 1 >=
            Math.ceil(filteredUsers.length / pagination.state.size)
          }
          className="px-3 py-1 bg-gray-200 cursor-pointer rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  )
}
