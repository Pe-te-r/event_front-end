import { authStore } from "@/stores/authStore";
import { url } from "./url";
import type { createEventT, eventsType, EventType } from "@/types/types";

export async function fetchEvents(): Promise<{ data: eventsType[] }> {
  const token = authStore.state.token

  const res = await fetch(`${url}/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
  const responseData = await res.json()
  console.log('data for this', responseData.data)
  if (!res.ok) {
    throw new Error(responseData.message || 'Request failed')
  }

  return responseData
}

export async function fetchEventById(id: string, detailed?: boolean): Promise<{ data: EventType }> {
  const token = authStore.state.token

  const res = await fetch(`${url}/events/${id}${detailed ? '?detailed=true' : ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })

  const responseData = await res.json()

  if (!res.ok) {
    throw new Error(responseData.message || `Failed to fetch event with ID ${id}`)
  }

  return responseData
}



export async function registerEvent(data: createEventT) {
  const token = authStore.state.token

  const res = await fetch(`${url}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(data),
  })
  const responseData = await res.json()
  if (!res.ok) {
    throw new Error(responseData.message || 'Event Register failed')
  }

  return responseData
}
