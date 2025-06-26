import { createFileRoute } from '@tanstack/react-router'
import RouteComponent from '../dashboard/settings'

export const Route = createFileRoute('/organizer/settings')({
  component: RouteComponent,
})

