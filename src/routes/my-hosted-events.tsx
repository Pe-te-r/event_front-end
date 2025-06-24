import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-hosted-events')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/events/my-hosted-events"!</div>
}
