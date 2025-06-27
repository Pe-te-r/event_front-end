import {  fetchUserById, updateUser } from '@/api/user'
import { useMutation, useQuery } from '@tanstack/react-query'
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


export function useUserById(id: string | undefined, detailed?: boolean) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', id, detailed],
    queryFn: () => fetchUserById(id!, detailed),
    enabled: !!id,
  })
  const user: User | undefined = data ? data.data : undefined
  return {
    user,
    isLoading, error
  }
}



export function useUpdateUser() {
  return useMutation({
    mutationFn: ({
      userId,
      data,
    }: {
      userId: string
      data: Parameters<typeof updateUser>[1]
    }) => updateUser(userId, data),
  })
}
