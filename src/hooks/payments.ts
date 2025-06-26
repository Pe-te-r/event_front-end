import { fetchPayments } from "@/api/payments"
import type { PaymentWithRelations } from "@/types/types"
import { useQuery } from "@tanstack/react-query"

export function usePayments() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchPayments,
  })

  const payments: PaymentWithRelations[] = data ? data.data : []

  return { payments, isLoading, error }
}

