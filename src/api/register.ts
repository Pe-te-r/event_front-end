import type { registerData } from "@/types/types";
import { url } from "./url";

export async function registerUser(data: registerData) {
  const res = await fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const responseData = await res.json()
  if (!res.ok) {
    throw new Error(responseData.message || 'Register failed')
  }

  return responseData
}
