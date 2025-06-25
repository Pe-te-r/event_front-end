import { url } from "./url";

export async function LoginUser(data: { email: string; password: string }) {
  const res = await fetch(`${url}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error('Failed to create event')
  }

  return res.json()
}
