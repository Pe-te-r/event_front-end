import { usePayments } from '@/hooks/payments'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/payments/')({
  component: RouteComponent,
})



export default function RouteComponent() {
  const { payments, isLoading, error } = usePayments()
  const navigate = useNavigate()
  console.log(payments[0])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading payments.</div>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Payments</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Method</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Event</th>
              <th className="p-2 text-left">User</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment,index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2">{payment.amount}</td>
                <td className="p-2">{payment.payment_method}</td>
                <td className="p-2 capitalize">{payment.payment_status}</td>
                <td className="p-2">{payment?.whichEvent?.event_name}</td>
                <td className="p-2">
                  {payment?.whoPaid?.first_name} <br />
                  <span className="text-sm text-gray-500">{payment.whoPaid?.email}</span>
                </td>
                <td className="p-2 flex gap-2">
                  <button
                    className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
                    onClick={() =>
                      navigate({
                        to: '/dashboard/users/$id',
                        params: { id: payment.whoPaid?.id },
                        search: { detailed: 'true' },
                      })
                    }
                  >
                    View User
                  </button>
                  <button
                    className="px-2 py-1 text-sm bg-gray-700 text-white rounded"
                    onClick={() => console.log('Event ID:', payment.whichEvent?.event_id)}
                  >
                    View Event
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
