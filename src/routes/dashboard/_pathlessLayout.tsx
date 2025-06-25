// src/routes/dashboard/_layout.tsx
import { createFileRoute } from '@tanstack/react-router'
import DashboardLayout from '@/components/DashboardLayout'

export const Route = createFileRoute('/dashboard/_pathlessLayout')({
  component: DashboardLayout,
})
