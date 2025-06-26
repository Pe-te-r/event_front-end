import { createFileRoute } from '@tanstack/react-router'
import NormalLayout from '@/components/layouts/NormalLayout'

export const Route = createFileRoute('/normal')({
  component: NormalLayout,
})

