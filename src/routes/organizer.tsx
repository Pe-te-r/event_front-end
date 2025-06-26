import OrganizerLayout from '@/components/layouts/OrganizerLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organizer')({
  component: OrganizerLayout,
})

