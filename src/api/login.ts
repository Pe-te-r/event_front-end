import { url } from "./url";

export async function LoginUser(data: { email: string; password: string }) {
  const res = await fetch(`${url}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const responseData = await res.json()
  if (!res.ok || responseData.status === 'error') {
    throw new Error(responseData.message || 'Login failed')
  }

  return responseData
}
