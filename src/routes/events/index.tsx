import type { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  // const {}=useQuery({})
  return <div>Hello "/events/"!</div>
}
