// routes/dashboard/users.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/Overview')({
  component: () => <div>User Management</div>,
})
