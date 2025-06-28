import { createFileRoute, redirect } from '@tanstack/react-router'
import NormalLayout from '@/components/layouts/NormalLayout'
import { authStore } from '@/stores/authStore'

export const Route = createFileRoute('/normal')({
    beforeLoad: ({ context, location }) => {
      console.log(context)
      const authstate = authStore.state
      if (!authstate.isAuthenticated) {
        throw redirect({to:'/Login',search:{redirect:location.pathname}})
      }
    },
  component: NormalLayout,
})

