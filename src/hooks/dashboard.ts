import { fetchDashboard } from "@/api/dashboard"
import type { dashboardDataT } from "@/types/types"
import { useQuery } from "@tanstack/react-query"

export function useDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboard,
  })
  console.log('raw data from useQuery:', data)

  const dashboard: dashboardDataT | undefined =  data?.data 
  console.log('here2',dashboard)

  return { dashboard, isLoading, error }
}

