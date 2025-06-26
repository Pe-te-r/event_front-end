import { authStore } from "@/stores/authStore"
import { url } from "./url"

export async function fetchUserById(id: string, detailed?: boolean){
  const token = authStore.state.token

  const res = await fetch(`${url}/payments?${detailed?detailed=detailed:detailed=false}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })

  const responseData = await res.json()

  if (!res.ok) {
    throw new Error(responseData.message || `Failed to fetch payment with ID ${id}`)
  }

  return responseData
}


export async function fetchPayments() {
  const token = authStore.state.token

  const res = await fetch(`${url}/payments?detailed=true`, {
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