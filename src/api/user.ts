import { authStore } from "@/stores/authStore";
import { url } from "./url";
import type { registerData, UpdateUserDto } from "@/types/types";

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
  if (!res.ok) {
    throw new Error(responseData.message || 'Request failed')
  }
  
  return responseData
}

export async function fetchUserById(id: string, detailed?: boolean): Promise<{ data: registerData }> {
  const token = authStore.state.token

  const res = await fetch(`${url}/users/${id}${detailed ? '?detailed=true' : ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })

  const responseData = await res.json()

  if (!res.ok) {
    throw new Error(responseData.message || `Failed to fetch user with ID ${id}`)
  }

  return responseData
}


export async function updateUser(
  userId: string,
  updateData: Partial<UpdateUserDto>
): Promise<{ message: string }> {
  const token = authStore.state.token

  const res = await fetch(`${url}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(updateData),
  })

  const responseData = await res.json()

  if (!res.ok) {
    throw new Error(responseData.message || 'Update failed')
  }

  return responseData
}
