import { fetchEvents } from '@/api/events'
import type { eventsType } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

export function useEvents() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })

  const events: eventsType[] = data ? data.data : []

  return { events, isLoading, error }
}
