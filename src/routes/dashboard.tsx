import { createFileRoute } from '@tanstack/react-router'
import DashboardLayout from '@/components/layouts/DashboardLayout'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

