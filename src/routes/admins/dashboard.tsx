import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admins/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admins/dashborad"!</div>
}
