import { useEventsByUserId } from '@/hooks/events'
import { authStore } from '@/stores/authStore'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import EventCard from '@/components/EventCard'

export const Route = createFileRoute('/organizer/events/')({
  component: RouteComponent,
})

export default function RouteComponent() {
  const navigate = useNavigate()
  const userId = authStore.state.user?.id
  const { events, isLoading, error } = useEventsByUserId(userId || '')

  if (isLoading) return <p className="text-center mt-6">Loading...</p>
  if (error) return <p className="text-red-600 text-center mt-6">Error: {error.message}</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Events</h1>
      {events && events.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.event_id} event={event} onMoreDetails={(e) => navigate({ to: '/organizer/events/$id', params: { id: event.event_id }, search: { detailed: 'true' } })          } />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No events found.</p>
      )}
    </div>
  )
}
