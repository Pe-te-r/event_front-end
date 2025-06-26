import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/normal/')({
  component: DashboardHome,
})

function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Events Booked" value={3} />
        <SummaryCard title="Total Paid" value="KES 4500" />
        <SummaryCard title="Upcoming Events" value={1} />
      </div>
    </div>
  )
}

function SummaryCard({ title, value }: { title: string; value: number | string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-sm text-gray-600">{title}</p>
      <h2 className="text-2xl font-bold text-blue-600">{value}</h2>
    </div>
  )
}
