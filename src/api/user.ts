import { authStore } from "@/stores/authStore";
import { url } from "./url";
import type { registerData } from "@/types/types";

export async function fetchUsers(): Promise<{ data: registerData[] }> {
  const token = authStore.state.token

  const res = await fetch(`${url}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
  const responseData = await res.json()
  console.log('data for this',responseData.data)
  if (!res.ok) {
    throw new Error(responseData.message || 'Request failed')
  }

  return responseData
}
