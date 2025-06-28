import { createFileRoute, redirect } from '@tanstack/react-router'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import { authStore } from '@/stores/authStore'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: ({ context, location }) => {
    console.log(context)
    const authstate = authStore.state
    if (!authstate.isAuthenticated) {
      throw redirect({to:'/Login',search:{redirect:location.pathname}})
    }
  },
  component: DashboardLayout,
})

