import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '@/api/user'
import type { registerData as User } from '@/types/types'

export function useUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  const users: User[] = data ? data.data : []

  return { users, isLoading, error }
}
