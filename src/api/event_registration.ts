import { authStore } from "@/stores/authStore"
import type { registerData } from "@/types/types"
import { url } from "./url"

export async function fetchRegistration(): Promise<{ data: registerData[] }> {
  const token = authStore.state.token

  const res = await fetch(`${url}/event_registrations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
  const responseData = await res.json()
  if (!res.ok) {
    throw new Error(responseData.message || 'Request failed')
  }
  
  return responseData
}