import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/events/create"!</div>
}
