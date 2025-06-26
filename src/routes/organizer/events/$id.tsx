import { eventsByIdFun } from '@/routes/dashboard/events/$id'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organizer/events/$id')({
  component: eventsByIdFun,
})

