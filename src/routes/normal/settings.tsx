import { createFileRoute } from '@tanstack/react-router'
import RouteComponent from '../dashboard/settings'


export const Route = createFileRoute('/normal/settings')({
  component: RouteComponent,
})


