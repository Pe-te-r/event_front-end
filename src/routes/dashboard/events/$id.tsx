import LoadingComponent from '@/components/Loading'
import { useEventById } from '@/hooks/events'
import { createFileRoute, useParams, useSearch } from '@tanstack/react-router'
import EventDetailsCard from '@/components/EventDetailsCard'

export const Route = createFileRoute('/dashboard/events/$id')({
  component: eventsByIdFun,
  validateSearch: (search: Record<string, unknown>) => ({
    detailed: search.detailed === 'true' ? 'true' : 'false',
  }),
})

export function eventsByIdFun() {
  const { id } = useParams({ strict: false })
  const { detailed } = useSearch({ strict: false })

  const { event, isLoading, error } = useEventById(id, detailed === 'true')

  if (isLoading) return <LoadingComponent />
  if (error) return <div className="text-red-500">Failed to load event.</div>
  if (!event) return <div className="text-gray-500">No event data found.</div>

  return (
    <div className="max-w-4xl mx-auto p-4">
      <EventDetailsCard event={event} />
    </div>
  )
}
