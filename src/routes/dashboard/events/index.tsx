// src/routes/dashboard/events/index.tsx
import { useEvents } from '@/hooks/events'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import LoadingComponent from '@/components/Loading'
import EventCard from '@/components/EventCard'
import type { eventsType } from '@/types/types'

export const Route = createFileRoute('/dashboard/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const { events, isLoading, error } = useEvents()

  if (isLoading) return <LoadingComponent />
  if (error) return (
    <div className="text-red-500 text-center mt-10">
      Failed to load events. Please try again later.
    </div>
  )
  const handleMoreDetails = (event: eventsType) => {
    console.log(`More details for: ${event.event_name}`)
    navigate({ to: '/dashboard/events/$id', params: { id: event.event_id }, search: { detailed: 'true' } })
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.event_id} event={event} onMoreDetails={handleMoreDetails} />
      ))}
    </div>
  )
}
