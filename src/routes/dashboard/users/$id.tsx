import { useParams, useSearch, createFileRoute } from '@tanstack/react-router'
import { useUserById } from '@/hooks/users'
import LoadingComponent from '@/components/Loading'
import UserDetailsCard from '@/components/UserDetailsCard'

export const Route = createFileRoute('/dashboard/users/$id')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    detailed: search.detailed === 'true' ? 'true' : 'false',
  }),
})

export default function RouteComponent() {
  const { id } = useParams({ strict: false })
  const { detailed } = useSearch({ strict: false })

  const { user, isLoading, error } = useUserById(id, detailed === 'true')

  if (isLoading) return <LoadingComponent />
  if (error) return <div className="text-red-500">Failed to load user.</div>
  if (!user) {
    return <div className="text-red-500">User not found.</div>
  }
  

  return (
    <div className="max-w-3xl mx-auto p-4">
      <UserDetailsCard user={user} detailed={detailed === 'true'} />
    </div>
  )
}
