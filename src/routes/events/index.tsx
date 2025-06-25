import { query } from '@/lib/demo-store'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { } = useQuery({
    queryKey: ['events'],
    queryFn:()=>query(''),
  })
  return <div>Hello "/events/"!</div>
}
