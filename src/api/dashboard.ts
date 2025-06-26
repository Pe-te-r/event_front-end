import { authStore } from "@/stores/authStore"
import { url } from "./url"
import type { dashboardDataT } from "@/types/types"

export async function fetchDashboard(): Promise<{ data: dashboardDataT }> {
  const token = authStore.state.token

  const res = await fetch(`${url}/dashboard`, {
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
  
  return { data: responseData }
}