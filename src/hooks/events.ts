import { fetchEventByUserId } from '@/api/events'
import { fetchEventById, fetchEvents, registerEvent } from '@/api/events'
import type { eventsType, EventType, EventTypeT } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import type { createEventT } from '@/types/types'

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

export function useCreateEvent() {
  return useMutation({
    mutationFn: (data: createEventT) => registerEvent(data),
  })
}



export function useEventsByUserId(id: string) {
  const {
    data,
    isLoading,
    error,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['events', id],
    queryFn: () => fetchEventByUserId(id),
    enabled: !!id,
  })

  const events: EventTypeT[] = Array.isArray(data?.data) ? data.data : []

  return {
    events,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}

