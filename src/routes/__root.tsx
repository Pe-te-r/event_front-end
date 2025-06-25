import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Toaster } from 'sonner'
import { useEffect } from 'react'

import Header from '../components/Header'
import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'
import { authActions } from '@/stores/authStore'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

function RootLayout() {
  useEffect(() => {
    authActions.initialize()
  }, [])

  return (
    <>
      <Header />
      <Toaster position="top-right" closeButton richColors />
      <Outlet />
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </>
  )
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootLayout,
})
