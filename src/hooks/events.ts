import { fetchEventById, fetchEvents } from '@/api/events'
import type { eventsType, EventType } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

export function useEvents() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })

  const events: eventsType[] = data ? data.data : []

  return { events, isLoading, error }
}




export function useEventById(id: string | undefined, detailed?:boolean) {
  const {data,isLoading,error} = useQuery({
    queryKey: ['user', id, detailed],
    queryFn: () => fetchEventById(id!, detailed), 
    enabled: !!id, 
  })
  const event: EventType | undefined = data ? data.data : undefined
  return {
    event,
    isLoading,error
  }
}
